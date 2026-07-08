<?php
/**
 * Content accessor layer.
 *
 * Every getter returns ACF (options page) content when available and non-empty,
 * otherwise the original hardcoded defaults. This keeps the theme fully working
 * with no ACF installed, while letting admins override anything once ACF Pro is
 * active.
 *
 * @package Wellness_Architect
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Read a single ACF option field with a fallback.
 *
 * @param string $name    Field name.
 * @param mixed  $default Default value.
 * @return mixed
 */
function wa_field( $name, $default = '' ) {
	if ( function_exists( 'get_field' ) ) {
		$val = get_field( $name, 'option' );
		if ( null !== $val && '' !== $val && false !== $val ) {
			return $val;
		}
	}
	return $default;
}

/**
 * Read an ACF repeater (array) option with a fallback.
 *
 * @param string $name    Field name.
 * @param array  $default Default rows.
 * @return array
 */
function wa_rows( $name, $default = array() ) {
	if ( function_exists( 'get_field' ) ) {
		$val = get_field( $name, 'option' );
		if ( is_array( $val ) && ! empty( $val ) ) {
			return $val;
		}
	}
	return $default;
}

/* ------------------------------------------------------------------ *
 * Defaults (original design content)
 * ------------------------------------------------------------------ */

function wa_default_nav_items() {
	return array(
		array( 'label' => '브랜드스토리', 'href' => '#about' ),
		array( 'label' => '원료&기술력', 'href' => home_url( '/ingredients-technology/' ) ),
		array( 'label' => '블로그', 'href' => '#blog' ),
		array( 'label' => '팟캐스트', 'href' => '#podcast' ),
		array( 'label' => '바이오해킹 제품', 'href' => '#biohacking-tools' ),
		array( 'label' => '청춘리셋 참여', 'href' => '#contact' ),
	);
}

/**
 * Resolve a nav href for the current request context.
 *
 * In-page anchors (e.g. "#about") only work while already on the front
 * page; on any other page they must point back home first so the browser
 * actually lands on the section instead of just rewriting the hash.
 *
 * @param string $href Raw href from a nav item.
 * @return string
 */
function wa_resolve_nav_href( $href ) {
	if ( is_string( $href ) && 0 === strpos( $href, '#' ) && ! is_front_page() ) {
		return home_url( '/' ) . $href;
	}
	return $href;
}

function wa_default_about_paragraphs() {
	return array(
		'안녕하세요, 콜투라이프[Call2Life] 대표 오승우입니다.',
		'저는 지난 19년간 미국과 한국에서 10,000명 이상에게 건강 컨설팅을 제공하며, 웰니스 통합 건강 시스템을 통해 건강 회복과 삶의 활력 증진을 도왔습니다.',
		'콜투라이프의 미션은 과학적 연구 기반의 안전하고 자연적인 천연 원료와 건강한 식단, 입증된 혁신적인 웰빙 솔루션을 제공하는 것입니다.',
		'우리는 단순한 건강 개선을 넘어, 신체적·정신적으로 더 건강하고 행복한 삶을 누릴 수 있도록 돕고자 합니다. 모든 사람이 자신만의 건강한 라이프스타일을 찾고 이를 지속적으로 실천할 수 있도록 돕는 것이 콜투라이프의 사명입니다.',
		'건강은 단순한 선택이 아니라, 더 나은 삶을 위한 필수 요소이며 콜투라이프는 그 여정을 당신과 함께 할 것입니다.',
	);
}

function wa_default_pillars() {
	return array(
		array(
			'icon'  => 'dna',
			'title' => 'C1. 세포 통신망 복구 및 재생 : 글라이칸(Glycan) 안테나 재건',
			'desc'  => '건강의 가장 깊은 기초는 세포 간의 완벽한 소통에서 시작됩니다. 세포 표면에서 수만 개의 정보를 송수신하는 핵심 안테나, 당사슬(Glycan)을 직접 공급하여 끊어진 통신망을 복구합니다. 면역 세포들이 적(바이러스, 독소)과 아군을 정확히 식별하고 손상된 부위를 찾아 스스로 치유할 수 있도록, 생명 유지의 가장 근본적인 정보 전달 시스템을 정상화합니다.',
		),
		array(
			'icon'  => 'shield-check',
			'title' => 'C2. 강력한 면역 및 자체 보안 시스템',
			'desc'  => '건물의 외벽과 방화벽. 만성 염증의 씨앗을 말리고 외부 공격에 절대 흔들리지 않는 대식세포, 수지상세포, NK 세포등의 1차 면역체계 방어막을 강하게 구축합니다.',
		),
		array(
			'icon'  => 'brain',
			'title' => 'C3. 인지 최적화 및 중앙 제어 Gut-Brain Axis [GBA]의 완성',
			'desc'  => '장과 뇌의 완벽한 양방향 소통을 돕는 뇌기능 제어 센터. 신경, 면역, 내분비 시스템을 아우르는 Gut-Brain Axis [GBA]의 연결고리를 강화하고 장내 미생물 환경을 안정화합니다. 장의 불균형이 초래하는 뇌신경 손상을 방어하여 인지적 명료함과 집중력을 최적화하고, 온전한 삶의 주도권을 되찾아 줍니다.',
		),
		array(
			'icon'  => 'recycle',
			'title' => 'C4. 대사·호르몬 리셋 및 해독',
			'desc'  => "몸의 근본적인 흐름을 재건하는 MEP 배관 시스템. 체내에 쌓인 독소를 비워내어 신체의 자연 치유력이 극대화될 수 있는 깨끗한 환경을 조성합니다. 막혀있던 대사와 호르몬의 밸런스를 원활하게 복구하고 신체의 대사 스위치를 전환하여, 뇌와 신체가 지방을 주 연료로 사용하는 강력한 '하이브리드 시스템'을 가동합니다. 이를 통해 지치지 않는 무한한 에너지를 공급하며 신체를 최적의 상태로 리셋 합니다. MEP 는 신체의 Mechanical(기계), Electrical(전기), Plumbing(배관 및 위생 설비) 를 뜻합니다.",
		),
	);
}

function wa_default_phases() {
	return array(
		array(
			'badge'  => 'WEEKS 1-2 : REBOOT',
			'title'  => '리부트 (회복) : 호르몬 및 대사 리셋',
			'points' => array(
				'체내 독소 배출 및 염증 완화',
				'인슐린 저항성 개선 및 렙틴 호르몬 활성화',
				'신체 에너지 대사 전환 (포도당 → 지방 대사)',
			),
		),
		array(
			'badge'  => 'WEEKS 3-4 : IMPACT',
			'title'  => '임팩트 (강화) : 면역 시스템 리셋',
			'points' => array(
				'면역 조절 활성화 및 당사슬 안테나 회복',
				'뇌기능 활성화 및 장내 마이크로바이옴 개선',
				'알러지 증상 회복 및 신체 활력 극대화',
			),
		),
		array(
			'badge'  => 'WEEKS 5-6 : MAINTAIN',
			'title'  => '메인테인 (유지) : 노화 진행 리셋',
			'points' => array(
				'바이오해킹 효과 유지 및 건강한 세포 자생력 강화',
				'호르몬, 대사 기능의 완벽한 균형 회복',
				'더 나은 집중력, 업무 및 운동 능력 향상',
			),
		),
	);
}

function wa_default_products() {
	return array(
		array(
			'image'    => wa_asset( 'assets/images/product-super-immune.jpg' ),
			'name'     => '슈퍼이뮨 (SUPER IMMUNE)',
			'subtitle' => '세포의 대화가 시작되는 면역조절 서포트',
			'bullets'  => array( '세포 통신망(당사슬) 리셋', '에이스매넌 및 초유 함유' ),
		),
		array(
			'image'    => wa_asset( 'assets/images/product-super-greens.png' ),
			'name'     => '슈퍼그린 (SuperGreens)',
			'subtitle' => '식물의 혈액으로 마시는 초록빛 청춘 디톡스',
			'bullets'  => array( '체내 세포 디톡스 및 항산화', '유기농 엽록소 블렌드' ),
		),
		array(
			'image'    => wa_asset( 'assets/images/product-super-gclean.png' ),
			'name'     => '슈퍼지클린 (SUPER G.CLEAN)',
			'subtitle' => '2시간의 마법, 장 상태 개선 클렌징 솔루션',
			'bullets'  => array( '900일 자연배양 생효소', '노폐물 가수분해 및 배출' ),
		),
		array(
			'image'    => wa_asset( 'assets/images/product-super-zyme.jpg' ),
			'name'     => '슈퍼자임 (SUPER ZYME)',
			'subtitle' => '오토파지를 깨우는 마이크로바이옴 발효 솔루션',
			'bullets'  => array( '간헐적 단식 효율 극대화', '17가지 천연 초본 식단 솔루션' ),
		),
		array(
			'image'    => wa_asset( 'assets/images/product-better-salt.jpg' ),
			'name'     => '베러솔트 (Better Salt)',
			'subtitle' => '0.9%의 신비, 청춘을 위한 완벽한 밸런스',
			'bullets'  => array( '1200도 열처리 40종 활성 미네랄', '유해물질 0% 알칼리 소금' ),
		),
	);
}

/* ------------------------------------------------------------------ *
 * Public getters (ACF first, normalized, default fallback)
 * ------------------------------------------------------------------ */

function wa_get_nav_items() {
	$rows = wa_rows( 'nav_items' );
	if ( ! empty( $rows ) ) {
		return array_map(
			function ( $r ) {
				return array(
					'label' => isset( $r['label'] ) ? $r['label'] : '',
					'href'  => isset( $r['href'] ) ? $r['href'] : '#',
				);
			},
			$rows
		);
	}
	return wa_default_nav_items();
}

function wa_get_hero() {
	return array(
		'title'     => wa_field( 'hero_title', 'Live Better. Live Younger. Live Longer.' ),
		'subtitle'  => wa_field( 'hero_subtitle', '롱제비티를 위한 당신의 건강을 기초부터 설계해 드립니다.' ),
		'cta_label' => wa_field( 'hero_cta_label', 'Longevity Score' ),
		'note'      => wa_field( 'hero_note', '나의 롱제비티 지수 확인하기' ),
		'video'     => wa_field( 'hero_video', get_theme_mod( 'wa_hero_video_url', wa_asset( 'assets/video/hero-video.mp4' ) ) ),
		'poster'    => wa_asset( 'assets/images/hero-portrait.jpg' ),
	);
}

function wa_get_about() {
	$paras = wa_rows( 'about_paragraphs' );
	if ( ! empty( $paras ) ) {
		$paras = array_filter( array_map(
			function ( $r ) {
				return isset( $r['para'] ) ? $r['para'] : '';
			},
			$paras
		) );
	}
	if ( empty( $paras ) ) {
		$paras = wa_default_about_paragraphs();
	}
	return array(
		'portrait'     => wa_field( 'about_portrait', wa_asset( 'assets/images/hero-portrait.jpg' ) ),
		'eyebrow'      => wa_field( 'about_eyebrow', 'About' ),
		'heading'      => wa_field( 'about_heading', 'About 오승우' ),
		'quote'        => wa_field( 'about_quote', '"다시 태어날 당신에게"' ),
		'paragraphs'   => $paras,
		'button_label' => wa_field( 'about_button_label', 'Learn more →' ),
	);
}

function wa_get_pillars() {
	$rows = wa_rows( 'pillars' );
	if ( ! empty( $rows ) ) {
		return array_map(
			function ( $r ) {
				return array(
					'icon'  => isset( $r['icon'] ) ? $r['icon'] : 'dna',
					'title' => isset( $r['title'] ) ? $r['title'] : '',
					'desc'  => isset( $r['desc'] ) ? $r['desc'] : '',
				);
			},
			$rows
		);
	}
	return wa_default_pillars();
}

function wa_get_youth_phases() {
	$rows = wa_rows( 'youth_phases' );
	if ( ! empty( $rows ) ) {
		return array_map(
			function ( $r ) {
				$points = array();
				if ( ! empty( $r['points'] ) && is_array( $r['points'] ) ) {
					foreach ( $r['points'] as $p ) {
						$points[] = is_array( $p ) ? ( isset( $p['point'] ) ? $p['point'] : '' ) : $p;
					}
					$points = array_values( array_filter( $points ) );
				}
				return array(
					'badge'  => isset( $r['badge'] ) ? $r['badge'] : '',
					'title'  => isset( $r['title'] ) ? $r['title'] : '',
					'points' => $points,
				);
			},
			$rows
		);
	}
	return wa_default_phases();
}

function wa_get_products() {
	$rows = wa_rows( 'bio_products' );
	if ( ! empty( $rows ) ) {
		return array_map(
			function ( $r ) {
				$bullets = array();
				if ( ! empty( $r['bullets'] ) && is_array( $r['bullets'] ) ) {
					foreach ( $r['bullets'] as $b ) {
						$bullets[] = is_array( $b ) ? ( isset( $b['text'] ) ? $b['text'] : '' ) : $b;
					}
					$bullets = array_values( array_filter( $bullets ) );
				}
				return array(
					'image'        => isset( $r['image'] ) ? $r['image'] : '',
					'name'         => isset( $r['name'] ) ? $r['name'] : '',
					'subtitle'     => isset( $r['subtitle'] ) ? $r['subtitle'] : '',
					'bullets'      => $bullets,
					'button_label' => isset( $r['button_label'] ) && $r['button_label'] ? $r['button_label'] : '자세히 보기',
				);
			},
			$rows
		);
	}
	return wa_default_products();
}

/**
 * Resolve the consultation recipient email: ACF option → Customizer → admin email.
 *
 * @return string
 */
function wa_get_contact_email() {
	$email = wa_field( 'contact_email', '' );
	if ( empty( $email ) ) {
		$email = get_theme_mod( 'wa_contact_email', get_option( 'admin_email' ) );
	}
	return sanitize_email( $email );
}
