<?php
// 라벨 읽는 법 페이지 자동 생성 스크립트
// 실행 후 반드시 삭제할 것 (delete-label-page-php.cjs 로 삭제)
require_once(__DIR__ . '/wp-load.php');

if (!current_user_can('manage_options')) {
    die('관리자 로그인 후 접근하세요: <a href="/wp-login.php">로그인</a>');
}

$existing = get_page_by_path('aloe-gel-label', OBJECT, 'page');
if ($existing) {
    die('이미 존재하는 페이지입니다. ID: ' . $existing->ID . ' / <a href="/aloe-gel-label/">페이지 확인</a>');
}

$html = <<<'HTMLCONTENT'
<!-- ============================================================
  알로에겔 라벨 읽는 법 — waoh.life/aloe-gel-label/ (새 페이지) [제품명 없음]
  역할: ① 에이스매넌 교육 페이지 → (이 페이지) → ③ SuperVera7® 원료 페이지로 넘어가는 다리
  워드프레스 페이지 새로 추가 → 사용자 정의 HTML 블록에 통째로 붙여넣기 · 작성 2026-10-12
============================================================ -->
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Noto+Serif+KR:wght@700;900&family=Noto+Sans+KR:wght@400;500;700&display=swap">
<style>
#alabel{--b:#1A73E8;--tint:#EEF4FE;--navy:#16213E;--ink:#1F2937;--sub:#5B6676;--line:#E2E7EF;--panel:#F6F9FC;
  font-family:"Noto Sans KR","Apple SD Gothic Neo","Malgun Gothic",sans-serif;color:var(--ink);font-size:17px;line-height:1.85;word-break:keep-all;
  max-width:960px;margin:0 auto;padding:8px 0 72px;background:#fff}
#alabel *{box-sizing:border-box}
#alabel h1,#alabel h2,#alabel h3{font-family:"Noto Serif KR","Apple SD Gothic Neo",serif;color:var(--navy);letter-spacing:-.02em;line-height:1.35;margin:0;padding:0}
#alabel h1{font-size:clamp(30px,5.6vw,46px);font-weight:900}
#alabel h2{font-size:clamp(22px,3.8vw,28px);font-weight:900;margin:0 0 12px}
#alabel h3{font-size:19px;margin:0 0 6px}
#alabel p{margin:0 0 14px}
#alabel a{color:var(--b);text-decoration:underline;text-underline-offset:3px}
#alabel .eb{display:block;font-size:12.5px;letter-spacing:.18em;font-weight:700;color:var(--b);margin-bottom:6px;font-family:"Noto Sans KR",sans-serif}
#alabel .top{padding:20px 20px 26px}
#alabel .top .lead{font-size:18px;margin-top:14px}
#alabel .wrap{display:grid;grid-template-columns:.9fr 1.1fr;gap:26px;padding:10px 20px 6px;align-items:start}
#alabel .lbl{border:2px solid var(--navy);border-radius:10px;padding:14px 16px;background:#FFFDF8;font-size:14px;line-height:1.6;position:sticky;top:16px}
#alabel .lbl .hd{display:flex;justify-content:space-between;align-items:center;border-bottom:2px solid var(--navy);padding-bottom:8px;margin-bottom:8px}
#alabel .lbl .hd b{font-size:16px}
#alabel .lbl .mk{border:1.5px solid var(--navy);border-radius:50%;width:54px;height:54px;font-size:10px;display:flex;align-items:center;justify-content:center;text-align:center;line-height:1.2;font-weight:700}
#alabel .lbl .row{display:grid;grid-template-columns:96px 1fr;gap:6px;border-bottom:1px dashed #C9D2E2;padding:6px 0}
#alabel .lbl .row:last-child{border-bottom:0}
#alabel .lbl .k{font-weight:700;color:var(--navy)}
#alabel .n{display:inline-flex;align-items:center;justify-content:center;width:20px;height:20px;border-radius:50%;background:var(--b);color:#fff;font-size:12px;font-weight:700;margin-right:4px;vertical-align:1px;font-family:"Noto Sans KR",sans-serif}
#alabel .lbl small{display:block;font-size:12px;color:var(--sub);margin-top:6px;text-align:center}
#alabel .ck{border:1px solid var(--line);border-radius:16px;padding:16px 18px;margin:0 0 14px;background:#fff}
#alabel .ck h3 .n{width:26px;height:26px;font-size:14px;margin-right:6px}
#alabel .ck p{margin:6px 0 0;font-size:16px}
#alabel .ck .look{margin-top:8px;background:var(--tint);border-radius:10px;padding:8px 12px;font-size:15px}
#alabel .ck .look b{color:var(--b)}
#alabel .key{background:var(--navy);color:#fff;border-radius:16px;padding:20px 22px;margin:8px 20px 0}
#alabel .key h3{color:#fff;margin:0 0 8px}
#alabel .key p{margin:0;opacity:.93}
#alabel .sec{padding:36px 20px 6px;border-top:1px solid var(--line);margin-top:30px}
#alabel .faq{border-top:1px solid var(--line);padding:12px 0}
#alabel .faq h3{font-size:17px}
#alabel ol.ref{font-size:14px;padding-left:22px}
#alabel ol.ref li{margin:4px 0;overflow-wrap:anywhere}
#alabel .next{display:block;margin:26px 20px 0;padding:18px 22px;border-radius:14px;background:var(--b);color:#fff;text-decoration:none;font-weight:700;font-size:18px}
#alabel .back{display:inline-block;margin:14px 20px 0;font-size:15px}
#alabel .author{margin:28px 20px 0;padding:16px 18px;border:1px solid var(--line);border-radius:14px;background:var(--panel);font-size:14.5px}
@media (max-width:760px){#alabel .wrap{grid-template-columns:1fr}#alabel .lbl{position:static}#alabel{font-size:16px}}
</style>

<div id="alabel">

<section class="top">
  <span class="eb">HOW TO READ AN ALOE GEL LABEL</span>
  <h1>알로에겔 제품,<br>라벨에서 무엇을 봐야 할까</h1>
  <p class="lead">알로에 제품은 많지만, 라벨 몇 줄만 읽어도 차이가 보입니다. 특정 제품이 아니라 <b>고르는 기준 여섯 가지</b>만 정리했습니다. 판단은 라벨을 읽는 분의 몫입니다.</p>
</section>

<div class="wrap">
  <div class="lbl" aria-label="예시 라벨">
    <div class="hd"><b>예시 라벨 (실제 제품 아님)</b><span class="mk">건강기능<br>식품</span></div>
    <div class="row"><span class="k"><span class="n">1</span>식품 유형</span><span>건강기능식품</span></div>
    <div class="row"><span class="k"><span class="n">2</span>원재료명</span><span>알로에겔(분말) ○○%, …</span></div>
    <div class="row"><span class="k"><span class="n">3</span>영양·기능정보</span><span>1일 섭취량 ○캡슐 당<br>총 다당체 ○○○mg</span></div>
    <div class="row"><span class="k"><span class="n">4</span></span><span>(기타원료 유래 다당체 ○○mg)</span></div>
    <div class="row"><span class="k">기능성 내용</span><span>피부건강·장 건강·면역력 증진에 도움을 줄 수 있음</span></div>
    <div class="row"><span class="k">섭취 시 주의</span><span>이상사례 발생 시 섭취를 중단하고 전문가와 상담할 것</span></div>
    <div class="row"><span class="k"><span class="n">6</span>제조·수입</span><span>제조원(국가) · 수입판매원 · GMP 적용업소</span></div>
    <small>⑤ 원료를 어떻게 거두고 만들었는지는 라벨 밖에서 확인합니다</small>
  </div>

  <div>
    <div class="ck"><h3><span class="n">1</span>'건강기능식품'인가요?</h3>
      <p>기능성을 말할 수 있는 것은 건강기능식품뿐입니다. 라벨에 '건강기능식품' 문구와 마크가 있는지 먼저 봅니다. 알로에 음료나 젤리처럼 일반식품으로 나온 제품은 기능성을 표시할 수 없습니다.</p>
      <div class="look">볼 곳 → <b>식품 유형 · 건강기능식품 마크</b></div></div>

    <div class="ck"><h3><span class="n">2</span>'알로에겔'인가요, '전잎'인가요?</h3>
      <p>알로에겔은 잎의 외피를 벗기고 안쪽 겔만 쓴 원료입니다<sup>[1]</sup>. 껍질 쪽까지 함께 쓰는 '알로에 전잎'은 다른 원료로 따로 관리됩니다. 원재료명에 무엇이 적혀 있는지 확인합니다.</p>
      <div class="look">볼 곳 → <b>원재료명 첫머리</b></div></div>

    <div class="ck"><h3><span class="n">3</span>총 다당체는 몇 mg인가요?</h3>
      <p>알로에겔의 기능성은 '총 다당체'로 관리되고, 1일 섭취량 기준 110~420mg이 기준 범위입니다<sup>[1]</sup>. 다만 이 숫자는 <b>얼마나</b> 들었는지만 알려줍니다. 그 안의 에이스매넌이 얼마나 온전한지, 어떤 크기의 분자가 남아 있는지는 알려주지 않습니다.</p>
      <div class="look">볼 곳 → <b>영양·기능정보 표의 '총 다당체'</b></div></div>

    <div class="ck"><h3><span class="n">4</span>'기타원료 유래 다당체'가 따로 적혀 있나요?</h3>
      <p>알로에겔 제품은 다른 원료에서 온 다당체를 <b>구분해서 표시</b>하도록 되어 있습니다<sup>[1]</sup>. 괄호 안에 '기타원료 유래 ○○mg'이 있다면, 총 다당체에서 그 숫자를 뺀 것이 알로에겔 몫입니다.</p>
      <div class="look">볼 곳 → <b>총 다당체 옆 괄호</b></div></div>

    <div class="ck"><h3><span class="n">5</span>원료를 어떻게 만들었는지 공개하나요?</h3>
      <p>같은 알로에겔이라도 어디서 거두고, 어떻게 추출하고, 어떻게 안정화했는지에 따라 남는 에이스매넌과 분자 크기가 달라집니다<sup>[2]</sup>. 이 정보는 라벨에 거의 없으니, 만든 회사가 원료와 공정을 공개하는지 확인합니다(자세히: <a href="/acemannan/">에이스매넌 연구 정리</a>).</p>
      <div class="look">볼 곳 → <b>회사 홈페이지의 원료·공정 안내</b></div></div>

    <div class="ck"><h3><span class="n">6</span>어디서 만들고, 누가 들여왔나요?</h3>
      <p>제조원과 제조국, 수입 제품이라면 수입판매원을 봅니다. 우수건강기능식품제조기준(GMP) 적용업소인지도 라벨에 적혀 있습니다. 문의할 곳이 분명한 제품이 좋습니다.</p>
      <div class="look">볼 곳 → <b>제조원 · 수입판매원 · GMP 적용업소 · 소비자상담실</b></div></div>
  </div>
</div>

<div class="key"><h3>한 줄로 정리하면</h3><p>라벨은 '얼마나'를 알려주고, 원료 공개는 '어떻게'를 알려줍니다. 총 다당체 숫자와 함께, 그 다당체를 어떻게 지켰는지까지 확인하세요.</p></div>

<section class="sec">
  <span class="eb">FAQ</span>
  <h2>자주 묻는 질문</h2>
  <div class="faq"><h3>총 다당체가 많을수록 좋은 제품인가요?</h3><p>총 다당체는 기준 범위(1일 110~420mg) 안에서 얼마나 들었는지를 보여주는 숫자입니다<sup>[1]</sup>. 에이스매넌의 상태나 분자 크기는 이 숫자로 알 수 없어서, 원료를 어떻게 만들었는지도 함께 봐야 합니다<sup>[2]</sup>.</p></div>
  <div class="faq"><h3>라벨에 '에이스매넌 ○○mg'이 없는 이유는요?</h3><p>한국 기준에서 알로에겔의 기능(지표)성분은 '총 다당체'이기 때문입니다<sup>[1]</sup>. 에이스매넌만 따로 정한 표시 기준은 없습니다.</p></div>
  <div class="faq"><h3>알로인은 어디서 확인하나요?</h3><p>알로에겔은 알로인 A와 B의 합이 10mg/kg 이하여야 합니다(2025년 1월 1일 시행)<sup>[1]</sup>. 라벨에는 보통 적혀 있지 않으니, 수입 제품은 수입 검사 결과를, 국내 제품은 회사 안내를 확인합니다.</p></div>
</section>

<section class="sec">
  <span class="eb">REFERENCES</span>
  <ol class="ref">
    <li>식품의약품안전처. 건강기능식품의 기준 및 규격(공전) 2-47 알로에 겔. 고시 제2023-91호(2023.12.27., 2025.1.1. 시행).</li>
    <li>Bozzi A, Perrin C, Austin S, Arce Vera F. Quality and authenticity of commercial aloe vera gel powders. Food Chem 2007;103:22-30. <a href="https://doi.org/10.1016/j.foodchem.2006.05.061" rel="nofollow">DOI</a></li>
  </ol>
</section>

<a class="next" href="/supervera7/">Call2Life가 원료를 고르는 기준 보기 →</a>
<a class="back" href="/acemannan/">← 에이스매넌 연구 정리로 돌아가기</a>

<div class="author"><b>글: 오승우 (Wellness Architect)</b> — 19년 웰니스 현장 경험, 의료진과 협업하는 통합 웰니스 설계자 · 최종 검토 2026-10-12<br>이 글은 식품의약품안전처 기준과 공개된 연구를 바탕으로 한 정보이며, 특정 제품을 평가하지 않습니다.</div>

</div>
HTMLCONTENT;

$block_content = "<!-- wp:html -->\n" . $html . "\n<!-- /wp:html -->";

$post_id = wp_insert_post([
    'post_title'   => '알로에겔 제품, 라벨에서 무엇을 봐야 할까',
    'post_content' => $block_content,
    'post_status'  => 'publish',
    'post_type'    => 'page',
    'post_name'    => 'aloe-gel-label',
], true);

if (is_wp_error($post_id)) {
    echo '❌ 오류: ' . $post_id->get_error_message();
    exit;
}

update_post_meta($post_id, 'rank_math_focus_keyword', '알로에겔 고르는 법');
update_post_meta($post_id, 'rank_math_description', '알로에겔 제품 라벨에서 확인할 기준 여섯 가지 — 건강기능식품 여부, 알로에겔과 전잎, 총 다당체, 기타원료 유래 다당체, 원료 공정 공개, 제조·수입 정보.');

echo '✅ 페이지 생성 완료! (ID: ' . $post_id . ')<br><br>';
echo '<a href="/aloe-gel-label/" style="font-size:18px">→ waoh.life/aloe-gel-label/ 확인하기</a><br><br>';
echo '<b style="color:red">이 파일은 지금 바로 삭제됩니다.</b>';

// 자기 자신 삭제
@unlink(__FILE__);
