<?php
/**
 * ACF options page + field group registration.
 *
 * Fields are registered in code, so no manual field creation is needed in the
 * admin. Requires ACF PRO (uses an Options page + Repeater / nested Repeater
 * fields). Without ACF the theme falls back to the defaults in content.php.
 *
 * @package Wellness_Architect
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Register the options page under Appearance.
 */
function wa_register_options_page() {
	if ( ! function_exists( 'acf_add_options_page' ) ) {
		return;
	}
	acf_add_options_page( array(
		'page_title'  => __( '테마 콘텐츠 편집', 'wellness-architect' ),
		'menu_title'  => __( '테마 콘텐츠', 'wellness-architect' ),
		'menu_slug'   => 'wa-theme-content',
		'parent_slug' => 'themes.php',
		'capability'  => 'edit_theme_options',
		'redirect'    => false,
	) );
}
add_action( 'acf/init', 'wa_register_options_page' );

/**
 * Register all content fields for the options page.
 */
function wa_register_fields() {
	if ( ! function_exists( 'acf_add_local_field_group' ) ) {
		return;
	}

	$icon_choices = array(
		'dna'          => 'DNA',
		'shield-check' => 'Shield Check',
		'brain'        => 'Brain',
		'recycle'      => 'Recycle',
		'check'        => 'Check',
		'arrow-right'  => 'Arrow Right',
	);

	acf_add_local_field_group( array(
		'key'      => 'group_wa_content',
		'title'    => '웰니스 아키텍트 콘텐츠',
		'fields'   => array(

			/* ---------- TAB: 헤더/메뉴 ---------- */
			array( 'key' => 'tab_wa_header', 'label' => '헤더 / 메뉴', 'type' => 'tab', 'placement' => 'top' ),
			array(
				'key' => 'field_wa_nav_items', 'label' => '내비게이션 메뉴', 'name' => 'nav_items', 'type' => 'repeater',
				'button_label' => '메뉴 추가', 'layout' => 'table',
				'instructions' => '비워두면 기본 메뉴가 표시됩니다.',
				'sub_fields' => array(
					array( 'key' => 'field_wa_nav_label', 'label' => '메뉴명', 'name' => 'label', 'type' => 'text' ),
					array( 'key' => 'field_wa_nav_href', 'label' => '링크(앵커/URL)', 'name' => 'href', 'type' => 'text', 'placeholder' => '#youth-reset' ),
				),
			),

			/* ---------- TAB: 히어로 ---------- */
			array( 'key' => 'tab_wa_hero', 'label' => '히어로', 'type' => 'tab', 'placement' => 'top' ),
			array( 'key' => 'field_wa_hero_title', 'label' => '제목', 'name' => 'hero_title', 'type' => 'text', 'default_value' => 'Live Better. Live Younger. Live Longer.' ),
			array( 'key' => 'field_wa_hero_subtitle', 'label' => '부제', 'name' => 'hero_subtitle', 'type' => 'textarea', 'rows' => 2, 'new_lines' => '', 'default_value' => '롱제비티를 위한 당신의 건강을 기초부터 설계해 드립니다.' ),
			array( 'key' => 'field_wa_hero_cta', 'label' => '버튼 텍스트', 'name' => 'hero_cta_label', 'type' => 'text', 'default_value' => 'Longevity Score' ),
			array( 'key' => 'field_wa_hero_note', 'label' => '버튼 하단 안내문', 'name' => 'hero_note', 'type' => 'text', 'default_value' => '나의 롱제비티 지수 확인하기' ),
			array( 'key' => 'field_wa_hero_video', 'label' => '배경 영상', 'name' => 'hero_video', 'type' => 'file', 'return_format' => 'url', 'mime_types' => 'mp4', 'instructions' => '비워두면 테마 기본 영상을 사용합니다.' ),

			/* ---------- TAB: 소개(About) ---------- */
			array( 'key' => 'tab_wa_about', 'label' => '소개(About)', 'type' => 'tab', 'placement' => 'top' ),
			array( 'key' => 'field_wa_about_portrait', 'label' => '프로필 사진', 'name' => 'about_portrait', 'type' => 'image', 'return_format' => 'url', 'preview_size' => 'medium' ),
			array( 'key' => 'field_wa_about_eyebrow', 'label' => '상단 라벨', 'name' => 'about_eyebrow', 'type' => 'text', 'default_value' => 'About' ),
			array( 'key' => 'field_wa_about_heading', 'label' => '제목', 'name' => 'about_heading', 'type' => 'text', 'default_value' => 'About 오승우' ),
			array( 'key' => 'field_wa_about_quote', 'label' => '인용문', 'name' => 'about_quote', 'type' => 'text', 'default_value' => '"다시 태어날 당신에게"' ),
			array(
				'key' => 'field_wa_about_paras', 'label' => '본문 문단', 'name' => 'about_paragraphs', 'type' => 'repeater',
				'button_label' => '문단 추가', 'layout' => 'row',
				'sub_fields' => array(
					array( 'key' => 'field_wa_about_para', 'label' => '문단', 'name' => 'para', 'type' => 'textarea', 'rows' => 3, 'new_lines' => '' ),
				),
			),
			array( 'key' => 'field_wa_about_btn', 'label' => '버튼 텍스트', 'name' => 'about_button_label', 'type' => 'text', 'default_value' => 'Learn more →' ),

			/* ---------- TAB: 4대 기둥 ---------- */
			array( 'key' => 'tab_wa_pillars', 'label' => '4대 기둥', 'type' => 'tab', 'placement' => 'top' ),
			array( 'key' => 'field_wa_pillars_eyebrow', 'label' => '상단 라벨', 'name' => 'pillars_eyebrow', 'type' => 'text', 'default_value' => 'THE 4 CORNERSTONES' ),
			array( 'key' => 'field_wa_pillars_heading', 'label' => '제목', 'name' => 'pillars_heading', 'type' => 'text', 'default_value' => '무너진 기초를 세우는 4개의 코너스톤 기둥' ),
			array( 'key' => 'field_wa_pillars_desc', 'label' => '설명', 'name' => 'pillars_desc', 'type' => 'textarea', 'rows' => 2, 'new_lines' => '', 'default_value' => '단순한 처방이 아닌, 생체 건축물을 다시 세우는 웰니스 아키텍트의 4대 코너스톤 설계도입니다.' ),
			array(
				'key' => 'field_wa_pillars', 'label' => '기둥 카드', 'name' => 'pillars', 'type' => 'repeater',
				'button_label' => '카드 추가', 'layout' => 'block',
				'instructions' => '비워두면 기본 4개 카드가 표시됩니다.',
				'sub_fields' => array(
					array( 'key' => 'field_wa_pillar_icon', 'label' => '아이콘', 'name' => 'icon', 'type' => 'select', 'choices' => $icon_choices, 'default_value' => 'dna' ),
					array( 'key' => 'field_wa_pillar_title', 'label' => '제목', 'name' => 'title', 'type' => 'text' ),
					array( 'key' => 'field_wa_pillar_desc', 'label' => '설명', 'name' => 'desc', 'type' => 'textarea', 'rows' => 4, 'new_lines' => '' ),
				),
			),

			/* ---------- TAB: 청춘리셋 ---------- */
			array( 'key' => 'tab_wa_youth', 'label' => '청춘리셋', 'type' => 'tab', 'placement' => 'top' ),
			array( 'key' => 'field_wa_youth_eyebrow', 'label' => '상단 라벨', 'name' => 'youth_eyebrow', 'type' => 'text', 'default_value' => 'YOUTH RESET PROGRAM' ),
			array( 'key' => 'field_wa_youth_heading', 'label' => '제목', 'name' => 'youth_heading', 'type' => 'text', 'default_value' => '6주간의 완벽한 생체 재건축, 청춘리셋' ),
			array( 'key' => 'field_wa_youth_desc', 'label' => '설명', 'name' => 'youth_desc', 'type' => 'textarea', 'rows' => 2, 'new_lines' => '', 'default_value' => "단순한 대증요법이 아닌 '루트케어(근본치료)'를 통해 신체의 자연치유력을 극대화하는 웰니스 아키텍트의 1:1 밀착 솔루션입니다." ),
			array(
				'key' => 'field_wa_youth_phases', 'label' => '단계 카드', 'name' => 'youth_phases', 'type' => 'repeater',
				'button_label' => '단계 추가', 'layout' => 'block',
				'instructions' => '비워두면 기본 3단계가 표시됩니다.',
				'sub_fields' => array(
					array( 'key' => 'field_wa_phase_badge', 'label' => '배지(기간)', 'name' => 'badge', 'type' => 'text', 'placeholder' => 'WEEKS 1-2 : REBOOT' ),
					array( 'key' => 'field_wa_phase_title', 'label' => '제목', 'name' => 'title', 'type' => 'text' ),
					array(
						'key' => 'field_wa_phase_points', 'label' => '항목', 'name' => 'points', 'type' => 'repeater',
						'button_label' => '항목 추가', 'layout' => 'table',
						'sub_fields' => array(
							array( 'key' => 'field_wa_phase_point', 'label' => '내용', 'name' => 'point', 'type' => 'text' ),
						),
					),
				),
			),
			array( 'key' => 'field_wa_youth_cta', 'label' => '버튼 텍스트', 'name' => 'youth_cta_label', 'type' => 'text', 'default_value' => '청춘리셋 다음 기수 대기자 등록하기' ),

			/* ---------- TAB: 바이오해킹 툴 ---------- */
			array( 'key' => 'tab_wa_bio', 'label' => '바이오해킹 툴', 'type' => 'tab', 'placement' => 'top' ),
			array( 'key' => 'field_wa_bio_eyebrow', 'label' => '상단 라벨', 'name' => 'bio_eyebrow', 'type' => 'text', 'default_value' => 'BIOHACKING TOOLS' ),
			array( 'key' => 'field_wa_bio_heading', 'label' => '제목', 'name' => 'bio_heading', 'type' => 'text', 'default_value' => '바이오해킹 툴 [BioHacking Tools]' ),
			array( 'key' => 'field_wa_bio_desc', 'label' => '설명', 'name' => 'bio_desc', 'type' => 'textarea', 'rows' => 2, 'new_lines' => '', 'default_value' => '웰니스 아키텍트가 4대 기둥의 기준을 가지고 설계한 완벽한 생체 복원 아키텍처입니다.' ),
			array(
				'key' => 'field_wa_bio_products', 'label' => '제품 카드', 'name' => 'bio_products', 'type' => 'repeater',
				'button_label' => '제품 추가', 'layout' => 'block',
				'instructions' => '비워두면 기본 5개 제품이 표시됩니다. (앞 3개 + 뒤 2개 레이아웃)',
				'sub_fields' => array(
					array( 'key' => 'field_wa_prod_image', 'label' => '제품 이미지', 'name' => 'image', 'type' => 'image', 'return_format' => 'url', 'preview_size' => 'medium' ),
					array( 'key' => 'field_wa_prod_name', 'label' => '제품명', 'name' => 'name', 'type' => 'text' ),
					array( 'key' => 'field_wa_prod_subtitle', 'label' => '부제', 'name' => 'subtitle', 'type' => 'text' ),
					array(
						'key' => 'field_wa_prod_bullets', 'label' => '특징', 'name' => 'bullets', 'type' => 'repeater',
						'button_label' => '특징 추가', 'layout' => 'table',
						'sub_fields' => array(
							array( 'key' => 'field_wa_prod_bullet', 'label' => '내용', 'name' => 'text', 'type' => 'text' ),
						),
					),
					array( 'key' => 'field_wa_prod_btn', 'label' => '버튼 텍스트', 'name' => 'button_label', 'type' => 'text', 'default_value' => '자세히 보기' ),
				),
			),

			/* ---------- TAB: 상담(Contact) ---------- */
			array( 'key' => 'tab_wa_contact', 'label' => '상담(Contact)', 'type' => 'tab', 'placement' => 'top' ),
			array( 'key' => 'field_wa_contact_eyebrow', 'label' => '상단 라벨', 'name' => 'contact_eyebrow', 'type' => 'text', 'default_value' => '1:1 CONSULTATION' ),
			array( 'key' => 'field_wa_contact_heading', 'label' => '제목', 'name' => 'contact_heading', 'type' => 'text', 'default_value' => '당신의 몸을 다시 설계할 준비가 되셨습니까?' ),
			array( 'key' => 'field_wa_contact_desc', 'label' => '설명', 'name' => 'contact_desc', 'type' => 'text', 'default_value' => '웰니스 아키텍트 오승우 대표와의 1:1 컨설팅을 신청하세요.' ),
			array( 'key' => 'field_wa_contact_email', 'label' => '상담 신청 수신 이메일', 'name' => 'contact_email', 'type' => 'email', 'instructions' => '비워두면 사이트 관리자 이메일로 발송됩니다.' ),
			array( 'key' => 'field_wa_contact_submit', 'label' => '제출 버튼 텍스트', 'name' => 'contact_submit_label', 'type' => 'text', 'default_value' => '상담 신청하기' ),

			/* ---------- TAB: 푸터 ---------- */
			array( 'key' => 'tab_wa_footer', 'label' => '푸터', 'type' => 'tab', 'placement' => 'top' ),
			array( 'key' => 'field_wa_footer_brand', 'label' => '브랜드명', 'name' => 'footer_brand', 'type' => 'text', 'default_value' => 'Wellness Architect | 오승우' ),
			array( 'key' => 'field_wa_footer_instagram', 'label' => '인스타그램 URL', 'name' => 'footer_instagram', 'type' => 'url' ),
			array( 'key' => 'field_wa_footer_cafe', 'label' => '네이버 카페 URL', 'name' => 'footer_cafe', 'type' => 'url' ),
			array( 'key' => 'field_wa_footer_copy', 'label' => '저작권 문구', 'name' => 'footer_copyright', 'type' => 'text', 'default_value' => '© 2026 Call2Life. All rights reserved.' ),
		),
		'location' => array(
			array(
				array( 'param' => 'options_page', 'operator' => '==', 'value' => 'wa-theme-content' ),
			),
		),
		'menu_order'            => 0,
		'position'              => 'normal',
		'style'                 => 'default',
		'label_placement'       => 'top',
		'instruction_placement' => 'label',
		'active'                => true,
	) );
}
add_action( 'acf/init', 'wa_register_fields' );
