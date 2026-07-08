<?php
/**
 * Wellness Architect theme functions.
 *
 * @package Wellness_Architect
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // No direct access.
}

define( 'WA_THEME_VERSION', '1.0.0' );

// Content layer + ACF field registration.
require_once get_template_directory() . '/inc/content.php';
require_once get_template_directory() . '/inc/acf-fields.php';

/**
 * Theme setup.
 */
function wa_theme_setup() {
	add_theme_support( 'title-tag' );
	add_theme_support( 'post-thumbnails' );
	add_theme_support( 'automatic-feed-links' );
	add_theme_support( 'html5', array( 'search-form', 'comment-form', 'comment-list', 'gallery', 'caption', 'style', 'script' ) );
	add_theme_support( 'custom-logo', array(
		'height'      => 60,
		'width'       => 200,
		'flex-height' => true,
		'flex-width'  => true,
	) );

	register_nav_menus( array(
		'primary' => __( '주 메뉴 (Primary Menu)', 'wellness-architect' ),
	) );
}
add_action( 'after_setup_theme', 'wa_theme_setup' );

/**
 * Enqueue styles and scripts.
 */
function wa_enqueue_assets() {
	// Google Fonts (Inter, JetBrains Mono, Noto Sans KR for Korean).
	wp_enqueue_style(
		'wa-fonts',
		'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&family=Noto+Sans+KR:wght@400;500;700&display=swap',
		array(),
		null
	);

	// Main stylesheet (style.css with the theme header).
	wp_enqueue_style( 'wa-style', get_stylesheet_uri(), array( 'wa-fonts' ), WA_THEME_VERSION );

	// Extra fonts used only by the 원료&기술력 (ingredients & technology) page.
	if ( is_page( 'ingredients-technology' ) ) {
		wp_enqueue_style(
			'wa-ingredients-fonts',
			'https://fonts.googleapis.com/css2?family=Noto+Serif+KR:wght@500;700;900&display=swap',
			array(),
			null
		);
		wp_enqueue_style(
			'wa-pretendard',
			'https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css',
			array(),
			null
		);
	}

	// Front-end interactions (mobile menu, smooth scroll).
	wp_enqueue_script(
		'wa-main',
		get_template_directory_uri() . '/assets/js/main.js',
		array(),
		WA_THEME_VERSION,
		true
	);
}
add_action( 'wp_enqueue_scripts', 'wa_enqueue_assets' );

/**
 * Helper: theme asset URL.
 *
 * @param string $path Relative path inside the theme.
 * @return string
 */
function wa_asset( $path ) {
	return get_template_directory_uri() . '/' . ltrim( $path, '/' );
}

/**
 * Customizer settings so the site owner can edit the key texts/contact email
 * without touching code. All have sensible defaults matching the original design.
 *
 * @param WP_Customize_Manager $wp_customize Customizer object.
 */
function wa_customize_register( $wp_customize ) {
	$wp_customize->add_section( 'wa_general', array(
		'title'    => __( 'Wellness Architect 설정', 'wellness-architect' ),
		'priority' => 30,
	) );

	// Basic fallback fields for sites without ACF. (ACF 옵션 페이지가 우선합니다.)
	$fields = array(
		'wa_contact_email'   => array( 'label' => __( '상담 신청 수신 이메일', 'wellness-architect' ), 'default' => get_option( 'admin_email' ), 'type' => 'email' ),
		'wa_hero_video_url'  => array( 'label' => __( '히어로 배경 영상 URL (미디어 라이브러리 업로드 후 주소 붙여넣기)', 'wellness-architect' ), 'default' => '', 'type' => 'url' ),
		'wa_instagram_url'   => array( 'label' => __( '인스타그램 URL', 'wellness-architect' ), 'default' => '#', 'type' => 'url' ),
		'wa_cafe_url'        => array( 'label' => __( '네이버 카페 URL', 'wellness-architect' ), 'default' => '#', 'type' => 'url' ),
	);

	foreach ( $fields as $id => $args ) {
		$wp_customize->add_setting( $id, array(
			'default'           => $args['default'],
			'sanitize_callback' => ( 'email' === $args['type'] ) ? 'sanitize_email' : ( ( 'url' === $args['type'] ) ? 'esc_url_raw' : 'sanitize_text_field' ),
		) );
		$wp_customize->add_control( $id, array(
			'label'   => $args['label'],
			'section' => 'wa_general',
			'type'    => ( 'text' === $args['type'] ) ? 'text' : $args['type'],
		) );
	}
}
add_action( 'customize_register', 'wa_customize_register' );

/**
 * Handle the 1:1 consultation form submission.
 * Posts to admin-post.php and redirects back with a status flag.
 */
function wa_handle_consultation() {
	$nonce = isset( $_POST['wa_consult_nonce'] ) ? sanitize_text_field( wp_unslash( $_POST['wa_consult_nonce'] ) ) : '';
	$redirect = wp_get_referer() ? wp_get_referer() : home_url( '/' );

	if ( ! wp_verify_nonce( $nonce, 'wa_consultation' ) ) {
		wp_safe_redirect( add_query_arg( 'wa_consult', 'error', $redirect ) . '#contact' );
		exit;
	}

	$name    = isset( $_POST['wa_name'] ) ? sanitize_text_field( wp_unslash( $_POST['wa_name'] ) ) : '';
	$phone   = isset( $_POST['wa_phone'] ) ? sanitize_text_field( wp_unslash( $_POST['wa_phone'] ) ) : '';
	$email   = isset( $_POST['wa_email'] ) ? sanitize_email( wp_unslash( $_POST['wa_email'] ) ) : '';
	$concern = isset( $_POST['wa_concern'] ) ? sanitize_textarea_field( wp_unslash( $_POST['wa_concern'] ) ) : '';

	if ( empty( $name ) || empty( $phone ) || empty( $email ) ) {
		wp_safe_redirect( add_query_arg( 'wa_consult', 'missing', $redirect ) . '#contact' );
		exit;
	}

	$to      = function_exists( 'wa_get_contact_email' ) ? wa_get_contact_email() : sanitize_email( get_option( 'admin_email' ) );
	$subject = sprintf( '[웰니스 컨설팅 신청] %s 님', $name );
	$body    = "새로운 1:1 컨설팅 신청이 접수되었습니다.\n\n"
		. "이름: {$name}\n"
		. "연락처: {$phone}\n"
		. "이메일: {$email}\n"
		. "건강 고민: {$concern}\n";
	$headers = array( 'Content-Type: text/plain; charset=UTF-8', 'Reply-To: ' . $email );

	wp_mail( $to, $subject, $body, $headers );

	wp_safe_redirect( add_query_arg( 'wa_consult', 'success', $redirect ) . '#contact' );
	exit;
}
add_action( 'admin_post_nopriv_wa_consultation', 'wa_handle_consultation' );
add_action( 'admin_post_wa_consultation', 'wa_handle_consultation' );

/**
 * Show an admin notice when ACF (PRO) is missing, so the owner knows how to
 * unlock in-admin content editing. The theme still works without it (defaults).
 */
function wa_acf_admin_notice() {
	if ( function_exists( 'acf_add_options_page' ) ) {
		return; // ACF PRO active — nothing to do.
	}
	if ( ! current_user_can( 'install_plugins' ) ) {
		return;
	}
	$message = function_exists( 'get_field' )
		? __( 'Wellness Architect: 콘텐츠 편집(옵션 페이지·반복 필드)에는 <strong>ACF PRO</strong>가 필요합니다. 현재 무료 ACF가 감지되어 기본 콘텐츠로 표시됩니다.', 'wellness-architect' )
		: __( 'Wellness Architect: 관리자에서 콘텐츠를 편집하려면 <strong>Advanced Custom Fields PRO</strong> 플러그인을 설치·활성화하세요. (미설치 시 기본 콘텐츠가 그대로 표시됩니다.)', 'wellness-architect' );
	printf( '<div class="notice notice-info is-dismissible"><p>%s</p></div>', wp_kses( $message, array( 'strong' => array() ) ) );
}
add_action( 'admin_notices', 'wa_acf_admin_notice' );

/**
 * Add the nav link class to WordPress-managed primary menu items so an
 * admin-created menu inherits the same styling as the default anchor nav.
 *
 * @param array    $atts Link attributes.
 * @param WP_Post  $item Menu item.
 * @param stdClass $args Menu args.
 * @return array
 */
function wa_nav_link_class( $atts, $item, $args ) {
	if ( isset( $args->theme_location ) && 'primary' === $args->theme_location ) {
		$atts['class'] = trim( ( isset( $atts['class'] ) ? $atts['class'] . ' ' : '' ) . 'site-nav__link' );
	}
	return $atts;
}
add_filter( 'nav_menu_link_attributes', 'wa_nav_link_class', 10, 3 );

/**
 * Inline SVG icon helper (lucide-style icons used by the original design).
 *
 * @param string $name Icon name.
 * @param int    $size Pixel size.
 * @return string SVG markup.
 */
function wa_icon( $name, $size = 24 ) {
	$icons = array(
		'menu'        => '<line x1="4" y1="12" x2="20" y2="12"/><line x1="4" y1="6" x2="20" y2="6"/><line x1="4" y1="18" x2="20" y2="18"/>',
		'x'           => '<line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>',
		'search'      => '<circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>',
		'user'        => '<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>',
		'sparkles'    => '<path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3z"/>',
		'dna'         => '<path d="M2 15c6.667-6 13.333 0 20-6"/><path d="M9 22c1.798-1.998 2.518-3.995 2.807-5.993"/><path d="M15 2c-1.798 1.998-2.518 3.995-2.807 5.993"/><path d="m17 6-2.5-2.5"/><path d="m14 8-1-1"/><path d="m7 18 2.5 2.5"/><path d="m3.5 14.5.5.5"/><path d="m20 9 .5.5"/><path d="m6.5 12.5 1 1"/><path d="m16.5 10.5 1 1"/><path d="m10 16 1.5 1.5"/>',
		'shield-check'=> '<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/>',
		'brain'       => '<path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"/><path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"/>',
		'recycle'     => '<path d="M7 19H4.815a1.83 1.83 0 0 1-1.57-.881 1.785 1.785 0 0 1-.004-1.784L7.196 9.5"/><path d="M11 19h8.203a1.83 1.83 0 0 0 1.556-.89 1.784 1.784 0 0 0 0-1.775l-1.226-2.12"/><path d="m14 16-3 3 3 3"/><path d="M8.293 13.596 7.196 9.5 3.1 10.598"/><path d="m9.344 5.811 1.093-1.892A1.83 1.83 0 0 1 11.985 3a1.784 1.784 0 0 1 1.546.888l3.943 6.843"/><path d="m13.378 9.633 4.096 1.098 1.097-4.096"/>',
		'check'       => '<polyline points="20 6 9 17 4 12"/>',
		'arrow-right' => '<line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>',
	);

	if ( ! isset( $icons[ $name ] ) ) {
		return '';
	}

	return sprintf(
		'<svg xmlns="http://www.w3.org/2000/svg" width="%1$d" height="%1$d" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">%2$s</svg>',
		(int) $size,
		$icons[ $name ]
	);
}
