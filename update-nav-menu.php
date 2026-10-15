<?php
// WordPress 테마 상단 메뉴에 에이스매넌 + SuperVera7® 추가
// 실행 후 자동 삭제됨
require_once(__DIR__ . '/wp-load.php');

if (!current_user_can('manage_options')) {
    die('관리자 로그인 후 접근하세요: <a href="/wp-login.php">로그인</a>');
}

// 등록된 모든 메뉴 가져오기
$menus = wp_get_nav_menus();
if (empty($menus)) {
    die('❌ 등록된 메뉴가 없습니다. 외모 → 메뉴에서 먼저 메뉴를 만들어주세요.');
}

// 헤더용 메뉴 찾기 (primary > main > 첫 번째 순)
$menu = null;
$priority = ['primary', 'main-menu', 'header-menu', 'main', 'top-menu', 'header'];
foreach ($priority as $slug) {
    foreach ($menus as $m) {
        if ($m->slug === $slug) { $menu = $m; break 2; }
    }
}
if (!$menu) $menu = $menus[0];

$menu_id = $menu->term_id;
$items   = wp_get_nav_menu_items($menu_id);

// 기존 항목 분석
$acemannan_exists  = false;
$supervera7_exists = false;
$ingredients_db_id = null;

foreach ($items as $item) {
    if (strpos($item->url, 'acemannan')            !== false) $acemannan_exists  = true;
    if (strpos($item->url, 'supervera7')            !== false) $supervera7_exists = true;
    if (strpos($item->url, 'ingredients-technology') !== false
        || $item->title === '원료&기술력'
        || $item->title === '원료&amp;기술력') {
        $ingredients_db_id = $item->db_id;
    }
}

echo '<style>body{font-family:sans-serif;padding:30px;line-height:2}</style>';
echo '<h2>WordPress 메뉴 업데이트</h2>';
echo '메뉴: <b>' . esc_html($menu->name) . '</b> (ID: ' . $menu_id . ')<br>';
echo '원료&amp;기술력 item ID: ' . ($ingredients_db_id ?: '❌ 찾지 못함') . '<br><br>';

$results = [];

// ① 에이스매넌 추가
if (!$acemannan_exists) {
    $id = wp_update_nav_menu_item($menu_id, 0, [
        'menu-item-title'     => '에이스매넌',
        'menu-item-url'       => 'https://waoh.life/acemannan/',
        'menu-item-status'    => 'publish',
        'menu-item-type'      => 'custom',
        'menu-item-parent-id' => 0,
    ]);
    $results[] = is_wp_error($id)
        ? '❌ 에이스매넌 추가 실패: ' . $id->get_error_message()
        : '✅ 에이스매넌 추가 완료 (item ID: ' . $id . ')';
} else {
    $results[] = '⚠️ 에이스매넌 이미 존재 — 건너뜀';
}

// ② SuperVera7® 추가 (원료&기술력 하위)
if (!$supervera7_exists) {
    $args = [
        'menu-item-title'     => 'SuperVera7®',
        'menu-item-url'       => 'https://waoh.life/supervera7/',
        'menu-item-status'    => 'publish',
        'menu-item-type'      => 'custom',
        'menu-item-parent-id' => $ingredients_db_id ?: 0,
    ];
    $id = wp_update_nav_menu_item($menu_id, 0, $args);
    $label = $ingredients_db_id ? '원료&기술력 하위' : '최상위 (원료&기술력 미발견)';
    $results[] = is_wp_error($id)
        ? '❌ SuperVera7® 추가 실패: ' . $id->get_error_message()
        : '✅ SuperVera7® 추가 완료 — ' . $label . ' (item ID: ' . $id . ')';
} else {
    $results[] = '⚠️ SuperVera7® 이미 존재 — 건너뜀';
}

foreach ($results as $r) echo $r . '<br>';

echo '<br><hr><br>';
echo '<b>현재 메뉴 전체 목록:</b><br>';
$updated_items = wp_get_nav_menu_items($menu_id);
foreach ($updated_items as $item) {
    $indent = $item->menu_item_parent ? '&nbsp;&nbsp;&nbsp;└ ' : '';
    echo $indent . '[' . $item->db_id . '] ' . esc_html($item->title) . ' → ' . esc_html($item->url) . '<br>';
}

@unlink(__FILE__);
