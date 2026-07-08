<?php
/**
 * Header template.
 *
 * @package Wellness_Architect
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

$wa_nav_items = function_exists( 'wa_get_nav_items' ) ? wa_get_nav_items() : array(
	array( 'label' => '브랜드스토리', 'href' => '#about' ),
	array( 'label' => '원료&기술력', 'href' => home_url( '/ingredients-technology/' ) ),
	array( 'label' => '블로그', 'href' => '#blog' ),
	array( 'label' => '팟캐스트', 'href' => '#podcast' ),
	array( 'label' => '바이오해킹 제품', 'href' => '#biohacking-tools' ),
	array( 'label' => '청춘리셋 참여', 'href' => '#contact' ),
);
?>
<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="icon" href="<?php echo esc_url( wa_asset( 'assets/images/favicon.ico' ) ); ?>" sizes="any">
	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

<header class="site-header">
	<div class="site-header__bar">
		<div class="site-header__left">
			<button class="icon-btn" type="button" data-menu-toggle aria-label="<?php esc_attr_e( '메뉴 열기', 'wellness-architect' ); ?>">
				<span data-icon-menu><?php echo wa_icon( 'menu', 20 ); ?></span>
				<span data-icon-close style="display:none;"><?php echo wa_icon( 'x', 20 ); ?></span>
			</button>

			<a href="<?php echo esc_url( home_url( '/#about' ) ); ?>" class="brand">
				<span class="brand__title"><?php bloginfo( 'name' ); ?></span>
				<span class="brand__rule"></span>
				<span class="brand__sub"><?php echo esc_html( get_bloginfo( 'description' ) ? get_bloginfo( 'description' ) : '웰니스 아키텍트 오대표' ); ?></span>
			</a>
		</div>

		<nav class="site-nav" aria-label="<?php esc_attr_e( '주 메뉴', 'wellness-architect' ); ?>">
			<?php
			if ( has_nav_menu( 'primary' ) ) {
				wp_nav_menu( array(
					'theme_location' => 'primary',
					'container'      => false,
					'items_wrap'     => '%3$s',
					'fallback_cb'    => false,
				) );
			} else {
				foreach ( $wa_nav_items as $item ) {
					printf(
						'<a class="site-nav__link" href="%s">%s</a>',
						esc_attr( wa_resolve_nav_href( $item['href'] ) ),
						esc_html( $item['label'] )
					);
				}
			}
			?>
		</nav>

		<div class="site-header__right">
			<button class="pill-btn" type="button">Ask Ai <?php echo wa_icon( 'sparkles', 12 ); ?></button>
			<button class="icon-btn" type="button" aria-label="<?php esc_attr_e( '검색', 'wellness-architect' ); ?>"><?php echo wa_icon( 'search', 18 ); ?></button>
			<a class="link-btn" href="<?php echo esc_url( wp_login_url() ); ?>"><?php echo wa_icon( 'user', 18 ); ?><span>Login</span></a>
		</div>
	</div>
</header>

<div class="mobile-menu" data-mobile-menu>
	<div class="mobile-menu__inner">
		<nav class="mobile-menu__nav" aria-label="<?php esc_attr_e( '모바일 메뉴', 'wellness-architect' ); ?>">
			<?php
			foreach ( $wa_nav_items as $item ) {
				printf(
					'<a class="site-nav__link" href="%s">%s</a>',
					esc_attr( wa_resolve_nav_href( $item['href'] ) ),
					esc_html( $item['label'] )
				);
			}
			?>
			<div class="mobile-menu__row">
				<button class="pill-btn" type="button">Ask Ai <?php echo wa_icon( 'sparkles', 12 ); ?></button>
				<button class="icon-btn" type="button"><?php echo wa_icon( 'search', 18 ); ?></button>
				<a class="link-btn" href="<?php echo esc_url( wp_login_url() ); ?>"><?php echo wa_icon( 'user', 18 ); ?><span>Login</span></a>
			</div>
		</nav>
	</div>
</div>
