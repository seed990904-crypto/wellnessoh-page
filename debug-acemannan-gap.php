<?php
// 에이스매넌 페이지 HTML 구조 진단 — 간격 원인 파악
require_once(__DIR__ . '/wp-load.php');

if (!current_user_can('manage_options')) {
    die('관리자 로그인 필요: <a href="/wp-login.php">로그인</a>');
}

$post = get_page_by_path('acemannan', OBJECT, 'post');
if (!$post) { die('❌ acemannan 글을 찾을 수 없습니다.'); }

$post_id = $post->ID;

// 실제 렌더링된 HTML 가져오기 (로컬 HTTP 요청)
$response = wp_remote_get(get_permalink($post_id), [
    'timeout'    => 15,
    'user-agent' => 'Mozilla/5.0 (debug)',
    'cookies'    => [],
]);

echo '<style>
body{font-family:monospace;padding:20px;background:#1e1e1e;color:#d4d4d4}
pre{background:#252526;padding:12px;border-radius:6px;overflow-x:auto;font-size:12px;line-height:1.6}
h3{color:#569cd6}
.tag{color:#4ec9b0}
.ok{color:#6a9955}
.warn{color:#ce9178}
</style>';

echo '<h3>에이스매넌 페이지 구조 진단 (post ID: ' . $post_id . ')</h3>';

if (is_wp_error($response)) {
    echo '<p class="warn">❌ HTTP 요청 실패: ' . esc_html($response->get_error_message()) . '</p>';
    echo '<p>아래는 post_content 원문입니다:</p>';
    echo '<pre>' . esc_html(substr($post->post_content, 0, 2000)) . '</pre>';
} else {
    $html = wp_remote_retrieve_body($response);

    // body 클래스 확인
    preg_match('/<body[^>]*class=["\']([^"\']+)["\']/', $html, $body_m);
    echo '<h3>body 클래스:</h3><pre>' . esc_html($body_m[1] ?? '없음') . '</pre>';

    // article/main 영역 추출 (entry-header ~ entry-content 앞 500자)
    preg_match('/<article[^>]*>([\s\S]{0,3000})/', $html, $art_m);
    if ($art_m) {
        echo '<h3>article 시작 부분 (3000자):</h3><pre>';
        // 태그만 표시 (텍스트 내용은 축약)
        $snippet = preg_replace('/>[^<]{60,}</','> ... <', $art_m[1]);
        echo esc_html($snippet);
        echo '</pre>';
    }

    // entry-header / post-header / entry-content 앞 구조 추출
    foreach (['entry-header','post-header','entry-content','post-content','site-main','content-area'] as $cls) {
        if (preg_match('/<[^>]*class=["\'][^"\']*' . $cls . '[^"\']*["\'][^>]*>/', $html, $m)) {
            echo '<h3>.' . $cls . ' 태그:</h3><pre class="tag">' . esc_html($m[0]) . '</pre>';
        } else {
            echo '<h3>.' . $cls . ':</h3><pre class="ok">없음 (테마에서 미사용)</pre>';
        }
    }
}

echo '<br><br><a href="/acemannan/" style="color:#569cd6;font-size:14px">→ 에이스매넌 페이지</a>';

@unlink(__FILE__);
