<?php
// 에이스매넌 페이지: 간격 완전 제거 v3 — entry-header display:none + 상위 컨테이너 정리
require_once(__DIR__ . '/wp-load.php');

if (!current_user_can('manage_options')) {
    die('관리자 로그인 필요: <a href="/wp-login.php">로그인</a>');
}

$post_id = 2680;

$new_css = "
/* acemannan-gap-fix */
body.postid-{$post_id} .entry-header,
body.postid-{$post_id} .post-header { display: none !important; }
body.postid-{$post_id} .entry-content,
body.postid-{$post_id} .post-content { margin-top: 0 !important; padding-top: 0 !important; }
body.postid-{$post_id} .site-main,
body.postid-{$post_id} #main,
body.postid-{$post_id} #primary,
body.postid-{$post_id} .content-area { padding-top: 0 !important; margin-top: 0 !important; }
";

$theme      = wp_get_theme();
$stylesheet = $theme->get_stylesheet();
$css_post   = wp_get_custom_css_post($stylesheet);
$existing   = $css_post ? $css_post->post_content : '';

// 이전 acemannan CSS 전부 제거
$existing = preg_replace('/\/\* acemannan-title-hide \*\/[\s\S]*?(?=\/\*|$)/', '', $existing);
$existing = preg_replace('/\/\* acemannan-gap-fix \*\/[\s\S]*?(?=\/\*|$)/', '', $existing);

$result = wp_update_custom_css_post(
    trim($existing) . "\n" . $new_css,
    ['stylesheet' => $stylesheet]
);

echo '<style>body{font-family:sans-serif;padding:24px;line-height:2}</style>';
echo '<b>에이스매넌 간격 수정 v3</b><br>';

if (is_wp_error($result)) {
    echo '❌ 오류: ' . esc_html($result->get_error_message());
} else {
    echo '✅ 완료!<br>';
    echo '<br>적용 내용:<br>';
    echo '• <code>.entry-header</code> → <b>display:none</b> (컨테이너 완전 제거)<br>';
    echo '• <code>.entry-content</code> → margin/padding-top: 0<br>';
    echo '• <code>.site-main, #main, #primary</code> → padding-top: 0<br>';
    echo '<br><a href="/acemannan/?nc=' . time() . '" target="_blank" style="font-size:18px">→ waoh.life/acemannan/ 새창 확인</a>';
}

@unlink(__FILE__);
