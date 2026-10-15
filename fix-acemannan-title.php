<?php
// 에이스매넌 페이지: 테마 포스트 제목 숨기기 + 상단 공백 제거
// 실행 후 자동 삭제됨
require_once(__DIR__ . '/wp-load.php');

if (!current_user_can('manage_options')) {
    die('관리자 로그인 필요: <a href="/wp-login.php">로그인</a>');
}

$post = get_page_by_path('acemannan', OBJECT, 'post');
if (!$post) { die('❌ acemannan 글을 찾을 수 없습니다.'); }

if (strpos($post->post_content, 'entry-title') !== false) {
    die('⚠️ 이미 수정되어 있습니다. <a href="/acemannan/">확인</a>');
}

// 기존 <style> 블록 안에 CSS 추가 — 테마 제목·헤더 여백 제거
$extra_css = "
.entry-title,.post-title,.page-title{display:none!important}
.entry-header,.post-header{padding:0!important;margin:0!important;min-height:0!important}
.entry-content,.post-content{padding-top:0!important;margin-top:0!important}";

$new_content = preg_replace('/(<style>)/', '$1' . $extra_css, $post->post_content, 1);

$result = wp_update_post(['ID' => $post->ID, 'post_content' => $new_content], true);

if (is_wp_error($result)) {
    echo '❌ 오류: ' . $result->get_error_message();
} else {
    echo '✅ 완료! (post ID: ' . $post->ID . ')<br><br>';
    echo '<a href="/acemannan/" style="font-size:18px">→ waoh.life/acemannan/ 확인하기</a>';
}

@unlink(__FILE__);
