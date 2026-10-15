<?php
// 에이스매넌 페이지: 제목 숨기기 v2 — Customizer Additional CSS + body.postid-X
require_once(__DIR__ . '/wp-load.php');

if (!current_user_can('manage_options')) {
    die('관리자 로그인 필요: <a href="/wp-login.php">로그인</a>');
}

$post = get_page_by_path('acemannan', OBJECT, 'post');
if (!$post) { die('❌ acemannan 글을 찾을 수 없습니다.'); }

$post_id = $post->ID;

// body.postid-{ID} 는 WordPress가 항상 body에 추가 → 테마 클래스명 무관하게 동작
$new_css = "
/* acemannan-title-hide */
body.postid-{$post_id} .entry-title,
body.postid-{$post_id} .page-title,
body.postid-{$post_id} .post-title,
body.postid-{$post_id} h1.entry-title,
body.postid-{$post_id} h2.entry-title,
body.postid-{$post_id} .entry-header h1,
body.postid-{$post_id} .entry-header h2,
body.postid-{$post_id} .post-header h1,
body.postid-{$post_id} .post-header h2,
body.postid-{$post_id} article > header h1,
body.postid-{$post_id} article > header h2 { display: none !important; }
body.postid-{$post_id} .entry-header,
body.postid-{$post_id} .post-header { padding: 0 !important; margin: 0 !important; min-height: 0 !important; border: none !important; }
body.postid-{$post_id} .entry-content,
body.postid-{$post_id} .post-content { margin-top: 0 !important; padding-top: 0 !important; }
";

$theme     = wp_get_theme();
$stylesheet = $theme->get_stylesheet();
$css_post  = wp_get_custom_css_post($stylesheet);
$existing  = $css_post ? $css_post->post_content : '';

// 이전에 추가한 CSS 제거
$existing = preg_replace('/\/\* acemannan-title-hide \*\/[\s\S]*?(?=\/\*|$)/', '', $existing);

$result = wp_update_custom_css_post(
    trim($existing) . "\n" . $new_css,
    ['stylesheet' => $stylesheet]
);

echo '<style>body{font-family:sans-serif;padding:24px;line-height:2}</style>';
echo '<h3>에이스매넌 제목 숨기기 v2</h3>';
echo 'post ID: <b>' . $post_id . '</b><br>';
echo '테마: <b>' . esc_html($stylesheet) . '</b><br><br>';

if (is_wp_error($result)) {
    echo '❌ 오류: ' . esc_html($result->get_error_message());
} else {
    echo '✅ Additional CSS 업데이트 완료!<br>';
    echo '<br><a href="/acemannan/?nc=' . time() . '" target="_blank" style="font-size:18px">→ waoh.life/acemannan/ 새창에서 확인</a>';
}

@unlink(__FILE__);
