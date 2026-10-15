<?php
// 에이스매넌 페이지 완전 재세팅 (post ID: 2680)
// 제목 숨기기 CSS 포함, Rank Math 메타 재설정
require_once(__DIR__ . '/wp-load.php');

if (!current_user_can('manage_options')) {
    die('관리자 로그인 필요: <a href="/wp-login.php">로그인</a>');
}

$post_id = 2680;
$post = get_post($post_id);
if (!$post) { die('❌ post ID ' . $post_id . ' 없음'); }

// ─────────────────────────────────────────────────────────
// HTML 콘텐츠 (제목·헤더 숨기기 CSS 포함)
// ─────────────────────────────────────────────────────────
$html = <<<'HTML'
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Noto+Serif+KR:wght@700;900&family=Noto+Sans+KR:wght@400;500;700&display=swap">
<style>
/* 테마 포스트 제목·헤더 완전 숨기기 */
.entry-title,.page-title,.post-title{display:none!important}
.entry-header,.post-header{display:none!important}
.entry-content,.post-content{padding-top:0!important;margin-top:0!important}

#acem{--b:#1A73E8;--tint:#EEF4FE;--navy:#16213E;--ink:#1F2937;--sub:#5B6676;--line:#E2E7EF;--panel:#F6F9FC;--green:#1F8A57;--gbg:#EAF6EF;
  font-family:"Noto Sans KR","Apple SD Gothic Neo","Malgun Gothic",sans-serif;color:var(--ink);font-size:17px;line-height:1.85;word-break:keep-all;
  max-width:960px;margin:0 auto;padding:8px 0 72px;background:#fff}
#acem *{box-sizing:border-box}
#acem h1,#acem h2,#acem h3{font-family:"Noto Serif KR","Apple SD Gothic Neo",serif;color:var(--navy);letter-spacing:-.02em;line-height:1.35;margin:0;padding:0;text-transform:none}
#acem h1{font-size:clamp(34px,6.4vw,52px);font-weight:900}
#acem h2{font-size:clamp(23px,4vw,30px);font-weight:900;margin:0 0 14px}
#acem h3{font-size:clamp(18px,3vw,21px);font-weight:700;margin:26px 0 8px}
#acem p{margin:0 0 14px}
#acem a{color:var(--b);text-decoration:underline;text-underline-offset:3px}
#acem sup{font-size:.68em;color:var(--b);font-weight:700}
#acem .sec{padding:44px 20px 8px;border-top:1px solid var(--line)}
#acem .eb{display:block;font-size:12.5px;letter-spacing:.18em;font-weight:700;color:var(--b);margin-bottom:6px;font-family:"Noto Sans KR",sans-serif}
/* hero */
#acem .hero{display:grid;grid-template-columns:1.25fr .75fr;gap:28px;align-items:center;padding:20px 20px 32px}
#acem .hero .def{font-size:18px;line-height:1.8;margin-top:16px}
#acem .hero .def b{color:var(--navy)}
#acem .hero img{width:100%;border-radius:18px;display:block;aspect-ratio:3/4;object-fit:cover}
#acem .lead{font-size:15px;color:var(--sub);margin-top:8px}
#acem .toc{display:flex;flex-wrap:wrap;gap:8px;margin:6px 20px 0;padding:14px 16px;background:var(--panel);border-radius:14px}
#acem .toc a{font-size:14px;text-decoration:none;background:#fff;border:1px solid var(--line);border-radius:99px;padding:4px 12px;color:var(--navy)}
/* figure */
#acem figure{margin:18px 0 22px}
#acem figure img{width:100%;height:auto;display:block;border-radius:14px;border:1px solid var(--line)}
#acem figure.narrow img{max-width:560px;margin:0 auto}
#acem figcaption{font-size:13.5px;color:var(--sub);margin-top:8px;text-align:center;line-height:1.6}
/* table */
#acem .tbl{overflow-x:auto;margin:14px 0 20px}
#acem table{border-collapse:collapse;width:100%;font-size:15px;line-height:1.65}
#acem th,#acem td{border:1px solid var(--line);padding:9px 11px;vertical-align:top;text-align:left}
#acem th{background:var(--tint);color:var(--navy);font-weight:700;white-space:nowrap}
/* cards */
#acem .study{border:1px solid var(--line);border-radius:16px;padding:18px 20px;margin:16px 0;background:#fff}
#acem .study .yr{display:inline-block;font-family:"Noto Serif KR",serif;font-weight:900;font-size:22px;color:var(--b);margin-right:8px}
#acem .study .tt{font-weight:700;color:var(--navy);font-size:18px}
#acem .study ul{margin:10px 0 6px;padding-left:20px}
#acem .study li{margin:4px 0}
#acem .tag{display:inline-block;font-size:12px;font-weight:700;border-radius:6px;padding:2px 8px;margin-left:6px;vertical-align:2px;background:var(--tint);color:var(--b)}
#acem .tag.h{background:var(--gbg);color:var(--green)}
#acem .src{font-size:13px;color:var(--sub);margin-top:6px}
#acem .note{background:var(--panel);border-left:4px solid var(--b);border-radius:0 12px 12px 0;padding:14px 18px;margin:18px 0;font-size:16px}
#acem .note b{color:var(--navy)}
#acem .key{background:var(--navy);color:#fff;border-radius:16px;padding:20px 22px;margin:20px 0}
#acem .key h3{color:#fff;margin:0 0 8px}
#acem .key p{margin:0;opacity:.92}
#acem .tl{position:relative;margin:18px 0 8px;padding-left:26px}
#acem .tl:before{content:"";position:absolute;left:8px;top:6px;bottom:6px;border-left:2px solid #CFE0FB}
#acem .tl .it{position:relative;margin:0 0 16px}
#acem .tl .it:before{content:"";position:absolute;left:-24px;top:8px;width:14px;height:14px;border-radius:50%;background:#fff;border:3px solid var(--b)}
#acem .tl .y{font-family:"Noto Serif KR",serif;font-weight:900;color:var(--b);font-size:18px;margin-right:6px}
#acem .tl .t{font-weight:700;color:var(--navy)}
#acem .fig2{display:grid;grid-template-columns:1fr 1fr;gap:14px;margin:16px 0 4px}
#acem .fig2 figure{margin:0}
#acem .grid3{display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin:16px 0}
#acem .grid3 div{background:var(--panel);border-radius:14px;padding:14px 16px;font-size:15px;line-height:1.6}
#acem .grid3 b{display:block;color:var(--navy);font-size:16px;margin-bottom:4px}
#acem .mech{width:100%;height:auto;display:block;border:1px solid var(--line);border-radius:14px;background:#fff}
#acem .faq{border-top:1px solid var(--line);padding:14px 0}
#acem .faq h3{margin:0 0 6px;font-size:18px}
#acem ol.ref{font-size:14px;line-height:1.7;padding-left:22px;color:var(--ink)}
#acem ol.ref li{margin:4px 0;word-break:normal;overflow-wrap:anywhere}
#acem .author{margin:36px 20px 0;padding:18px 20px;border:1px solid var(--line);border-radius:16px;background:var(--panel);font-size:15px}
#acem .next{display:block;margin:22px 20px 0;padding:16px 20px;border-radius:14px;background:var(--b);color:#fff;text-decoration:none;font-weight:700}
@media (max-width:720px){#acem .fig2{grid-template-columns:1fr}#acem .hero{grid-template-columns:1fr}#acem .hero img{aspect-ratio:16/10}#acem .grid3{grid-template-columns:1fr}#acem{font-size:16px}}
</style>

<div id="acem">

<!-- 첫 화면 -->
<section class="hero">
  <div>
    <span class="eb">ACEMANNAN · RESEARCH GUIDE</span>
    <h1>에이스매넌<br>(아세만난)</h1>
    <p class="lead">연구로 읽는 알로에 다당체 — 충북대 연구부터 세포 커뮤니케이션까지</p>
    <p class="def"><b>에이스매넌(아세만난, Acemannan)은 알로에 베라 잎 안쪽의 투명한 겔에 들어 있는 다당체로, 만노스가 β-(1,4) 결합으로 길게 이어지고 아세틸기가 붙은 구조입니다.</b> 국내에서는 대중 표기 '에이스매넌'과 학술 표기 '아세만난'이 함께 쓰이며 같은 성분입니다. 한국 건강기능식품 제도에서 알로에겔의 기능(지표)성분은 에이스매넌 단독이 아니라 '총 다당체'로 관리됩니다.</p>
  </div>
  <img src="https://waoh.life/wp-content/uploads/2026/10/acemannan-09-aloe-leaves.jpg" alt="알로에 베라 잎">
</section>

<nav class="toc">
  <a href="#s1">알로에에서 에이스매넌까지</a><a href="#s2">충북대 연구 3편</a><a href="#s3">분자 크기</a><a href="#s4">세포 커뮤니케이션</a><a href="#s5">면역세포와 만노스</a><a href="#s6">장과 단쇄지방산</a><a href="#s7">맥어널리 박사의 연구</a><a href="#s8">품질</a><a href="#s9">연구 지도</a><a href="#s10">한국 기준·안전성</a><a href="#s11">자주 묻는 질문</a>
</nav>

<!-- 1 -->
<section class="sec" id="s1">
  <span class="eb">01 · FROM ALOE TO ACEMANNAN</span>
  <h2>알로에에서 에이스매넌까지</h2>
  <p>알로에 잎 안쪽 겔은 대부분이 물이고, 아주 적은 고형분 속에 다당체가 들어 있습니다<sup>[19]</sup>. 그 다당체 가운데 대표 성분이 에이스매넌이며, 구성 당의 <b>93.4%가 만노스</b>입니다<sup>[1]</sup>. 1980년대에 이 성분을 분리하고 쉽게 변하지 않도록 안정화하는 공정이 개발되었습니다<sup>[20]</sup>.</p>
  <figure><img src="https://waoh.life/wp-content/uploads/2026/10/acemannan-11-chungbuk-fig1.jpg" alt="에이스매넌의 분자 구조: β-(1→4) 만노스 뼈대와 아세틸기" loading="lazy"><figcaption>Fig. 1. Molecular structure of acemannan — 만노스가 β-(1→4)로 이어진 뼈대에 아세틸기가 붙은 구조<br>출처: 임선아·박찬수·이종길, 생약학회지 47(2):103-109, 2016</figcaption></figure>
  <figure><img src="https://waoh.life/wp-content/uploads/2026/10/acemannan-02-composition.jpg" alt="알로에 → 알로에 다당체 → 에이스매넌, 재배·추출·안정화 3단계" loading="lazy"><figcaption>알로에(99% 수분) → 알로에 다당체(1%) → 극소량의 에이스매넌. 같은 알로에라도 재배·추출·안정화 세 단계에서 남는 에이스매넌이 달라집니다.</figcaption></figure>
</section>

<!-- 2 -->
<section class="sec" id="s2">
  <span class="eb">02 · CHUNGBUK NATIONAL UNIVERSITY</span>
  <h2>충북대 약학대학의 에이스매넌 연구 세 편</h2>
  <p>국내에서 에이스매넌을 가장 꾸준히 연구한 곳 중 하나가 충북대학교 약학대학입니다. 2001년 수지상세포 연구, 2005년 분자 크기 연구, 2016년 종설까지 15년에 걸친 흐름이 이어집니다.</p>

  <div class="study"><span class="yr">2016</span><span class="tt">종설 — 에이스매넌은 면역세포를 깨우는 방식으로 작용한다</span><span class="tag">세포·동물 연구 정리</span>
    <ul>
      <li>에이스매넌의 다양한 작용은 <b>대식세포와 수지상세포 같은 항원제시세포를 활성화하는 데서 출발</b>합니다.</li>
      <li>대식세포의 <b>탐식 작용, 사이토카인·산화질소 생성, 보조 자극 분자의 발현</b>이 늘었습니다.</li>
      <li>NK세포를 활성화하는 <b>IL-12 생성이 촉진</b>되었습니다.</li>
      <li>면역을 억제한 생쥐에게 먹였을 때 <b>백혈구 생성이 늘었고</b>, 장의 면역 조직(파이어판) 세포가 조혈 관련 사이토카인을 더 많이 만들었습니다.</li>
      <li>항원제시세포 표면의 <b>만노스 수용체에 결합</b>한다는 보고가 있습니다. 어떤 신호 경로로 이어지는지는 아직 다 밝혀지지 않았다고 덧붙입니다.</li>
    </ul>
    <figure><img src="https://waoh.life/wp-content/uploads/2026/10/acemannan-10-chungbuk-fig2.jpg" alt="에이스매넌의 면역증강 주요 기전: 항원제시세포 활성, 사이토카인, NK세포 활성, 조혈" loading="lazy"><figcaption>Fig. 2. Major mechanisms of the immunoaugmenting activities of acemannan.<br>출처: 임선아·박찬수·이종길, 「알로에 다당체 Acemannan의 면역증강 효능」, 생약학회지 47(2):103-109, 2016 (충북대학교 약학대학)</figcaption></figure>
    <p class="src">임선아·박찬수·이종길(충북대학교 약학대학), 생약학회지 2016<sup>[1]</sup></p>
  </div>

  <div class="study"><span class="yr">2001</span><span class="tt">수지상세포를 '성숙'시킨다</span><span class="tag">세포 실험</span>
    <p style="margin:10px 0 6px">생쥐 골수에서 키운 미성숙 수지상세포에 에이스매넌을 처리하자, T세포에게 정보를 넘길 때 쓰는 표면 분자(MHC class II, B7-1, B7-2, CD40, CD54)와 IL-12 생성이 늘었습니다. 흥미로운 점은 <b>에이스매넌에 황산기를 붙여 구조를 바꾸자 이 작용이 거의 사라졌다</b>는 것입니다. 같은 다당체라도 <b>구조가 온전해야</b> 작용한다는 뜻입니다.</p>
    <p class="src">Lee JK 외(충북대학교 약학대학), Int Immunopharmacol 2001<sup>[3]</sup></p>
  </div>

  <div class="study"><span class="yr">2005</span><span class="tt">분자 크기에 따라 달라진다</span><span class="tag">세포·동물 실험</span>
    <p style="margin:10px 0 6px">알로에 다당체를 크기별로 나눠 비교한 결과, <b>5~400 kDa 구간의 다당체가 대식세포 활성(사이토카인·산화질소·표면 분자·탐식)이 가장 컸고</b>, 이보다 작거나 큰 다당체는 오히려 약했습니다. "에이스매넌은 분자량에 따라 달라진다"는 말의 근거입니다.</p>
    <p class="src">Im SA 외(충북대학교 약학대학), Int Immunopharmacol 2005<sup>[2]</sup></p>
  </div>
</section>

<!-- 3 -->
<section class="sec" id="s3">
  <span class="eb">03 · MOLECULAR SIZE</span>
  <h2>분자 크기에 따라 달라지는 세 갈래</h2>
  <p>안정화된 에이스매넌을 먹었을 때, 분자의 크기마다 몸에서 쓰이는 길이 다르다는 설명이 있습니다. 연구 결과를 크기별로 묶으면 이렇습니다.</p>
  <figure><img src="https://waoh.life/wp-content/uploads/2026/10/acemannan-03-molecular-size.jpg" alt="작은 분자는 글라이칸 생성, 중간 분자는 면역세포 활성, 큰 분자는 단쇄지방산 생성" loading="lazy"><figcaption>작은 분자(5 kDa 미만) · 중간 분자(400 kDa 미만) · 큰 분자(400 kDa 이상)</figcaption></figure>
  <div class="tbl"><table>
    <tr><th>분자 크기</th><th>연구에서 보고된 길</th><th>근거</th></tr>
    <tr><td>작은 조각</td><td>흡수 → 몸의 만노스 저장고 → 간에서 당단백질(당사슬) 합성</td><td>맥어널리 설명<sup>[15]</sup> + 만노스 이용 연구<sup>[8][9]</sup></td></tr>
    <tr><td>5~400 kDa</td><td>대식세포·수지상세포 활성이 가장 큼</td><td>충북대 연구<sup>[2]</sup></td></tr>
    <tr><td>400 kDa 이상</td><td>대장에서 유익균 발효 → 단쇄지방산</td><td>맥어널리 설명<sup>[15]</sup> + 분변 발효 연구<sup>[11][12]</sup></td></tr>
  </table></div>
  <p>그래서 원료에 <b>여러 크기의 분자가 고르게 남아 있는지</b>가 중요해집니다.</p>
</section>

<!-- 4 -->
<section class="sec" id="s4">
  <span class="eb">04 · CELL TO CELL COMMUNICATION</span>
  <h2>세포 커뮤니케이션 — 만노스와 당사슬(글라이칸)</h2>
  <p><b>세포 커뮤니케이션</b>은 세포가 주변 환경과 신호를 받아들이고, 처리하고, 다시 전하는 능력입니다. 이 대화의 도구가 세포 표면을 덮고 있는 <b>당사슬(글라이칸)</b>입니다. 다른 세포, 호르몬, 세균, 바이러스, 독소는 모두 이 당사슬에 먼저 닿습니다. 그래서 당사슬을 세포의 <b>'안테나'</b>라고도 부릅니다(자세히: <a href="/glycan-antenna/">글라이칸 안테나</a>).</p>
  <figure class="narrow"><img src="https://waoh.life/wp-content/uploads/2026/10/acemannan-06-cell-communication.jpg" alt="세포막의 당사슬에 호르몬, 독소, 바이러스, 박테리아, 면역세포가 닿는 모습" loading="lazy"><figcaption>세포 표면의 당사슬 — 호르몬 · 독소 · 바이러스 · 박테리아 · 면역세포가 만나는 자리</figcaption></figure>
  <p>세포 표면의 당사슬과 당단백질이 이루는 층을 <b>당질피질(글리코칼릭스)</b>이라고 합니다. 세포를 바깥 충격에서 보호하는 방벽이면서, 세포와 세포 사이의 상호작용을 이어 주는 층입니다.</p>
  <div class="study"><span class="tt">혈관 안쪽을 덮는 글리코칼릭스</span><span class="tag h">사람 연구 포함</span>
    <p style="margin:8px 0 4px">혈관 안쪽 벽(내피)도 글리코칼릭스로 덮여 있습니다. 암스테르담대학 연구팀의 종설은 이 층이 <b>혈액 응고와 백혈구 부착을 억제하고, 혈관 투과성의 장벽이 되며, 혈류 자극에 따른 산화질소 분비를 매개</b>한다고 정리했습니다. 혈관이 갈라지는 자리처럼 병변이 잘 생기는 곳은 이 층이 더 얇을 수 있다는 가설도 함께 다뤘습니다<sup>[39]</sup>. 같은 연구팀이 건강한 남성 10명에게 혈당을 일시적으로 높였을 때, <b>글리코칼릭스 부피가 약 1.7 L에서 0.8 L로 줄고</b> 혈관 내피 기능 저하와 응고 활성화가 함께 나타났습니다<sup>[40]</sup>. 식사·운동·흡연·스트레스 같은 요인이 이 층을 닳게 한다는 것이 『리부팅플랜 청춘리셋』의 설명이며<sup>[42]</sup>, 연구로 확인된 것은 위의 고혈당 조건입니다.</p>
    <p class="src">Gouverneur M 외, J Intern Med 2006<sup>[39]</sup> · Nieuwdorp M 외, Diabetes 2006<sup>[40]</sup></p></div>

  <h3>만노스는 당사슬의 기본 재료입니다</h3>
  <p>자연에는 수백 가지 단당류가 있지만, 사람 몸의 당사슬은 10가지가 채 안 되는 당으로 지어집니다(교과서에 따라 8~9가지로 정리)<sup>[21][22]</sup>. 그중 <b>만노스</b>는 당단백질에 붙는 당사슬(N-글리칸)의 가운데 뼈대를 이룹니다. 에이스매넌은 구성 당의 93%가 만노스입니다<sup>[1]</sup>.</p>
  <p>만노스가 당사슬 재료로 얼마나 중요한지는 희귀 유전질환에서 드러났습니다. 만노스를 당사슬 재료로 바꾸는 효소(포스포만노스 이성화효소)가 선천적으로 부족한 환자에게 <b>먹는 만노스를 매일 투여하는 것이 치료법</b>이 되었습니다<sup>[38]</sup>. 이것은 의학적 치료의 사례로, 건강한 사람에게 같은 효과가 있다는 뜻은 아닙니다.</p>
  <figure><img src="https://waoh.life/wp-content/uploads/2026/10/acemannan-04-aloe-to-glycan.jpg" alt="알로에 → 에이스매넌 → 만노스 → 당사슬" loading="lazy"><figcaption>알로에 → 에이스매넌 → 만노스 → 당사슬(Glycan)</figcaption></figure>
  <figure class="narrow"><img src="https://waoh.life/wp-content/uploads/2026/10/acemannan-05-glycan-structure.jpg" alt="당사슬 구조 예시. 녹색 원이 만노스" loading="lazy"><figcaption>당사슬(N-글리칸) 구조 예시 — 녹색 ●이 만노스 (국제 표준 기호 SNFG)</figcaption></figure>

  <h3>먹은 만노스는 실제로 당사슬 재료가 될까</h3>
  <div class="study"><span class="tt">바깥에서 들어온 만노스를 세포가 직접 쓴다</span><span class="tag">세포·동물</span>
    <p style="margin:8px 0 4px">사람 간 유래 세포에서 당단백질에 쓰인 만노스의 <b>75%는 포도당에서 바뀐 것이 아니라 밖에서 들어온 만노스</b>였습니다. 포도당이 50~100배 많은 조건에서도 그랬습니다. 쥐의 장에 넣은 만노스는 빠르게 흡수되어 30분 뒤부터 간과 혈장의 당단백질에 쓰였고, 처음 결합의 87%가 간에서 일어났습니다.</p>
    <p class="src">Alton G 외, Glycobiology 1998<sup>[8]</sup></p></div>
  <div class="study"><span class="tt">먹은 만노스가 혈중 농도를 올린다</span><span class="tag">동물</span>
    <p style="margin:8px 0 4px">생쥐에게 만노스를 오래 먹였을 때 혈중 만노스가 최대 9배(100→900 µM)까지 올랐고, 표시한 만노스가 혈장 당단백질에 들어갔습니다. 만노스는 양과 흐름에 따라 몸에서 하는 일이 달라지며, 당사슬을 만드는 효소 경로와 맞물려 있습니다.</p>
    <p class="src">Davis JA, Freeze HH, Biochim Biophys Acta 2001<sup>[9]</sup> · Sharma V 외, BBRC 2014<sup>[10]</sup></p></div>
  <div class="study"><span class="tt">태아의 만노스는 어머니에게서 온다</span><span class="tag h">사람</span>
    <p style="margin:8px 0 4px">만삭 임신부 7명에게 동위원소를 붙인 만노스를 주입해 추적한 연구에서, <b>태아 혈중 만노스는 어머니의 혈액에서 태반을 거쳐 공급</b>되는 것으로 확인됐습니다(포도당도 같은 양상, 이노시톨은 태아가 스스로 만듦)<sup>[37]</sup>. 『리부팅플랜 청춘리셋』은 이를 "임신 중에는 만노스가 태아에게 전달되고, 출산 뒤에는 모유를 통해 이어진다"고 설명합니다<sup>[42]</sup>. 모유 부분은 원문 연구를 따로 확인하지 못해 책의 설명으로 적어 둡니다.</p>
    <p class="src">Staat BC 외, J Clin Endocrinol Metab 2012<sup>[37]</sup></p></div>
  <div class="key"><h3>맥어널리 박사의 설명</h3><p>장에서 잘게 나뉜 작은 에이스매넌 조각은 흡수되어 몸의 '만노스 저장고'에 더해지고, 간에서 당단백질을 만드는 데 쓰입니다. 먹은 에이스매넌 다당체의 약 <b>80%는 장내 발효로 단쇄지방산</b>이 되고, <b>11.6%는 장벽을 통해 흡수되어 만노스 저장고</b>로, 6.4%는 탄수화물로 대사되며, 2%가 배출됩니다.<sup>[15]</sup></p></div>
  <figure><img src="https://waoh.life/wp-content/uploads/2026/10/acemannan-07-glycan-functions.jpg" alt="세포 표면 당사슬의 역할: 영양공급, 인지·식별, 회복·치유, 보호, 정화, 조절" loading="lazy"><figcaption>세포 표면 당사슬이 하는 일 — 영양 공급 · 인지와 식별 · 회복과 치유 · 보호 · 정화 · 조절</figcaption></figure>
  <div class="note"><b>정리하면</b> — 만노스가 당사슬의 재료이고, 바깥에서 들어온 만노스가 실제로 당단백질에 쓰인다는 것은 세포·동물 연구로 확인되어 있습니다. 에이스매넌에서 나온 만노스가 사람 몸에서 같은 길을 가는지를 직접 추적한 연구는 아직 없습니다.</div>
</section>

<!-- 5 -->
<section class="sec" id="s5">
  <span class="eb">05 · INNATE IMMUNITY &amp; MANNOSE</span>
  <h2>면역세포는 만노스로 '다른 것'을 알아봅니다</h2>
  <p>대식세포와 수지상세포는 몸에 들어온 바깥 물질에 가장 먼저 반응하는 '최전방' 면역세포입니다. 이 세포들의 표면에는 <b>만노스 수용체</b>가 있습니다. 만노스 수용체는 미생물 표면의 당 구조를 폭넓게 알아보는 수용체로, 주로 대식세포와 수지상세포에 있습니다<sup>[23][24]</sup>. 알아본 정보는 T세포와 B세포로 넘어가 다음 면역 반응으로 이어집니다.</p>
  <div class="fig2">
    <figure><img src="https://waoh.life/wp-content/uploads/2026/10/acemannan-12-mannose-receptor-infection.jpg" alt="대식세포와 수지상세포가 만노스 수용체로 바이러스·박테리아·곰팡이의 만노스를 알아보는 모식도" loading="lazy"><figcaption>A. 감염 — 병원체 표면의 만노스를 알아보는 대식세포·수지상세포</figcaption></figure>
    <figure><img src="https://waoh.life/wp-content/uploads/2026/10/acemannan-13-mannose-receptor-tumor.jpg" alt="종양세포 표면의 당사슬을 만노스 수용체로 알아보는 면역세포 모식도" loading="lazy"><figcaption>B. 종양세포 — 같은 수용체로 표면 당사슬을 알아보는 모식도</figcaption></figure>
  </div>
  <p class="src" style="text-align:center">그림: 『리부팅플랜 청춘리셋』(Call2Life, 2022) · 녹색 ● = 만노스, 녹색 사슬 = 에이스매넌</p>
  <div class="note"><b>만노스 수용체로 알아보는 과정</b><br>
  ① 바이러스·박테리아·곰팡이 같은 병원체도 일반 세포처럼 표면에 당사슬이 있고, 그 끝자락에 만노스가 드러나 있습니다.<br>
  ② 건강한 세포도 당사슬 안에 만노스를 갖고 있지만, 끝은 보통 다른 당으로 덮여 있어 만노스를 드러내지 않습니다.<br>
  ③ 대식세포와 수지상세포는 세포막의 <b>만노스 수용체</b>로 이 '끝자락 만노스'를 알아보고, 적으로 판단해 공격합니다<sup>[23][24]</sup>.<br>
  ④ 그 정보는 T세포와 B세포로 넘어가고, B세포는 항체를 만들어 다음 방어를 준비합니다.<br>
  에이스매넌은 만노스가 이어진 사슬이고, 항원제시세포의 만노스 수용체에 결합한다는 보고가 있습니다<sup>[1]</sup>.</div>
  <div class="grid3">
    <div><b>만노스 수용체</b>에이스매넌이 항원제시세포의 만노스 수용체에 결합한다는 보고<sup>[1]</sup></div>
    <div><b>톨유사수용체(TLR5)</b>사람 잇몸 섬유아세포에서 에이스매넌이 TLR5에 선택적으로 결합해 NF-κB 신호와 IL-6·IL-8 발현을 늘림(세포)<sup>[7]</sup></div>
    <div><b>구조가 열쇠</b>황산기를 붙여 구조를 바꾸면 수지상세포 성숙 작용이 거의 사라짐(세포)<sup>[3]</sup></div>
  </div>
  <p>만노스 사슬과 아세틸기가 온전히 남아 있어야 이 '입구'에 맞는다는 점에서, 원료를 어떻게 다뤘는지가 다시 중요해집니다.</p>

  <h3>대식세포와 조혈 — 수치로 보면</h3>
  <div class="study"><span class="tt">대식세포의 탐식과 살균 능력이 올라갔다</span><span class="tag">세포 실험</span>
    <p style="margin:8px 0 4px">생쥐 복강 대식세포에 에이스매넌을 10분만 노출시켜도 활성산소 분출이 약 2배가 되고, 칸디다균을 잡아먹는 비율이 <b>25%에서 45%</b>로, 잡아먹은 균을 죽이는 비율이 <b>0~5%에서 38%</b>로 올랐습니다. 60분 노출 뒤에는 <b>98%</b>를 죽였습니다<sup>[29]</sup>. 생쥐 대식세포주(RAW 264.7)에서도 IL-6·TNF-α 분비, 산화질소 생성, 표면 분자 발현이 용량에 따라 늘었습니다<sup>[31]</sup>.</p>
    <p class="src">Stuart RW 외, Int J Immunopharmacol 1997<sup>[29]</sup> · Zhang L, Tizard IR, Immunopharmacology 1996<sup>[31]</sup></p></div>
  <div class="study"><span class="tt">골수가 억제된 생쥐에서 조혈 전구세포가 늘었다</span><span class="tag">동물 · 주사</span>
    <p style="margin:8px 0 4px">방사선으로 골수 기능을 떨어뜨린 생쥐에게 에이스매넌(CARN 750)을 피하 주사하자 비장과 말초혈액의 세포 수, 그리고 비장·골수의 <b>조혈 전구세포(CFU-C, HPP-CFC)가 유의하게 늘었고</b>, 매일 주사한 군은 조혈 촉진제 G-CSF 최적 용량과 같거나 더 큰 효과를 보였습니다. 먹인 것이 아니라 주사한 연구입니다<sup>[30]</sup>.</p>
    <p class="src">Egger SF 외, Cancer Immunol Immunother 1996<sup>[30]</sup></p></div>
  <div class="note"><b>책에 실린 요약 수치</b> — 『리부팅플랜 청춘리셋』(2022)의 에이스매넌 파트에는 "대식세포 활동 최대 10배 향상, 줄기세포 생산 300~400% 향상, 상처 치유 속도 35% 증가"가 연구결과 요약으로 실려 있습니다<sup>[42]</sup>. 방향은 위 세포·동물 연구<sup>[29][30][25]</sup>와 맞지만, 이 세 숫자가 그대로 나오는 원문 논문은 이 글을 쓰며 찾지 못했습니다. 숫자보다는 "어떤 조건에서, 무엇이, 얼마나 변했는지"를 보여 주는 위 연구를 기준으로 읽어 주시기 바랍니다.</div>
</section>

<!-- 6 -->
<section class="sec" id="s6">
  <span class="eb">06 · GUT &amp; SCFA</span>
  <h2>장에서 — 유익균의 먹이, 단쇄지방산</h2>
  <p>모든 에이스매넌이 흡수되는 것은 아닙니다. 큰 분자는 대장까지 가서 장내 유익균의 먹이가 됩니다. 유익균이 만드는 단쇄지방산(SCFA)에는 초산(아세트산), 프로피온산, 뷰티르산(부티르산)이 있습니다.</p>
  <div class="study"><span class="tt">사람 분변 발효 실험</span><span class="tag">체외</span>
    <ul><li>사람 분변을 대장 조건의 발효기에 넣고 알로에 다당체를 주었을 때, <b>에이스매넌은 초산 농도를 유의하게 높였습니다</b><sup>[11]</sup>.</li>
    <li>알로에 겔 점액질을 건강한 사람 6명의 분변으로 발효시켜 단쇄지방산과 장내 세균의 변화를 확인한 연구도 있습니다<sup>[12]</sup>.</li></ul></div>
  <div class="study"><span class="tt">뷰티르산은 대장 세포의 주 에너지원</span><span class="tag h">사람 대장 세포</span>
    <p style="margin:8px 0 4px">사람 대장 점막 세포가 쓰는 산소의 <b>73~75%</b>를 뷰티르산 산화가 차지했습니다<sup>[13]</sup>. 맥어널리 박사는 400 kDa보다 큰 에이스매넌이 장에서 프리바이오틱 섬유처럼 작용해 단쇄지방산을 만든다고 설명합니다<sup>[15]</sup>.</p></div>
  <div class="study"><span class="tt">뷰티르산 자체를 연구한 결과</span><span class="tag">세포 · 동물</span>
    <ul>
      <li><b>사람 단핵구(세포 실험)</b> — 뷰티르산은 염증을 이끄는 IL-12 생성을 강하게 억제하고 항염증 사이토카인 IL-10 분비를 크게 늘렸습니다<sup>[34]</sup>.</li>
      <li><b>고지방식 생쥐</b> — 먹이에 뷰티르산을 5% 섞어 주자 인슐린 저항성과 비만이 생기지 않았고, 근육과 갈색지방의 미토콘드리아 기능이 올라갔습니다. 이미 비만한 생쥐에서는 인슐린 감수성이 좋아지고 체지방이 줄었습니다<sup>[35]</sup>.</li>
      <li><b>쥐</b> — 저항성 전분과 뷰티르산을 각각 먹였을 때 둘 다 복부 지방이 줄었고, 함께 먹인 군이 가장 많이 줄었습니다. 장에서 발효로 만들어진 뷰티르산은 장 호르몬(PYY·GLP-1)을 올렸지만, 먹인 뷰티르산은 그렇지 않았습니다<sup>[36]</sup>.</li>
    </ul>
    <p class="src">Säemann MD 외, FASEB J 2000<sup>[34]</sup> · Gao Z 외, Diabetes 2009<sup>[35]</sup> · Vidrine K 외, Obesity 2014<sup>[36]</sup> — 모두 뷰티르산을 직접 준 연구이며, 에이스매넌을 먹여 얻은 결과는 아닙니다.</p></div>
  <figure class="narrow"><img src="https://waoh.life/wp-content/uploads/2026/10/acemannan-01-hero.jpg" alt="알로에 겔" loading="lazy"></figure>
</section>

<!-- 7 -->
<section class="sec" id="s7">
  <span class="eb">07 · DR. BILL McANALLEY</span>
  <h2>빌 맥어널리 박사의 연구</h2>
  <p>빌 맥어널리(Bill H. McAnalley) 박사는 1980년대부터 에이스매넌의 제조 공정, 구조, 안전성, 품질 분석을 연구한 과학자입니다. 학술지에 실린 그의 주요 연구를 시간 순서로 정리합니다.</p>
  <div class="tl">
    <div class="it"><span class="y">1988·1990</span><span class="t">알로에 제품 제조 공정 특허</span><br>알로에 겔에서 에이스매넌을 얻고 안정화하는 공정 특허(US 4,735,935 · US 4,917,890). 이후 연구들이 이 공정에서 시작됩니다<sup>[20]</sup>.</div>
    <div class="it"><span class="y">1989</span><span class="t">만난 계열 다당체의 생물학적 작용 정리</span><br>만노스 사슬 다당체(만난)가 만노스 결합 단백질과 결합해 대식세포를 활성화하고, IL-1 분비를 일으키며, 골수 활동을 자극하고, 상처 회복을 돕는다는 연구들을 정리한 종설<sup>[25]</sup>.</div>
    <div class="it"><span class="y">1991</span><span class="t">바이러스 복제 억제 — 시험관 연구 두 편</span> <span class="tag">세포 실험</span><br>사람 면역세포주(CEM-SS)를 HIV-1에 감염시킨 뒤 에이스매넌을 주자 농도에 따라 바이러스에 의한 세포 손상이 줄었고(IC50 45 µg/mL), 감염 세포가 서로 뭉치는 신시티움 형성은 62.5 µg/mL에서 완전히 억제됐습니다<sup>[32]</sup>. 이어진 연구에서는 에이스매넌이 AZT(HIV-1), 아시클로버(헤르페스 1형)와 각각 함께 쓰일 때 <b>상승 작용</b>으로 복제를 억제했습니다. 연구진은 그 기전을 <b>바이러스 외피 당단백질의 당화(글리코실화)를 바꾸는 것</b>과 관련지어 설명했습니다<sup>[33]</sup>. 두 편 모두 시험관 결과이며, 사람에서 같은 효과가 확인된 것은 아닙니다. 책에 함께 적힌 인플루엔자·간염 바이러스 연구는 원문을 확인하지 못했습니다<sup>[42]</sup>.</div>
    <div class="it"><span class="y">1992</span><span class="t">먹었을 때의 안전성 — 쥐 6개월, 개 90일</span> <span class="tag">동물</span><br>쥐에게 6개월간 하루 최대 2,000 mg/kg, 비글견에게 90일간 하루 최대 1,500 mg/kg을 먹였을 때 <b>측정한 모든 항목에서 의미 있는 영향이 없었습니다</b><sup>[26]</sup>.</div>
    <div class="it"><span class="y">1992</span><span class="t">주사했을 때 — 염증 없이 대식세포가 모인다</span> <span class="tag">동물</span><br>생쥐·쥐·개에서 에이스매넌을 주사하자 염증 반응 없이 대식세포와 단핵구가 모였고, 연구진은 이를 에이스매넌의 면역 자극 작용과 연결했습니다<sup>[27]</sup>.</div>
    <div class="it"><span class="y">1993</span><span class="t">구조 규명</span><br>에이스매넌, 즉 β-(1→4)-만난에서 아세틸기가 붙는 위치를 분석했습니다<sup>[4]</sup>.</div>
    <div class="it"><span class="y">2000</span><span class="t">항체 반응</span> <span class="tag">동물</span><br>생쥐 바이러스 감염 모델에서 알로에 폴리만노스를 준 군의 항체 수치(ELISA 역가)가 유의하게 높아졌습니다. 다만 조직 속 바이러스 양이나 병변을 줄이지는 못했습니다<sup>[28]</sup>.</div>
    <div class="it"><span class="y">2005</span><span class="t">품질 분석법</span><br>시판 알로에 제품 속 알로에 다당체를 정확히 재는 분석법을 개발했습니다<sup>[5]</sup>.</div>
    <div class="it"><span class="y">2009</span><span class="t">『The Science Behind Aloe』</span><br>분자 크기별 체내 경로와 만노스 저장고, 단쇄지방산 비율(80 · 11.6 · 6.4 · 2%)을 설명한 저서<sup>[15]</sup>.</div>
  </div>
</section>

<!-- 8 -->
<section class="sec" id="s8">
  <span class="eb">08 · QUALITY</span>
  <h2>같은 알로에겔이라도 다른 이유</h2>
  <figure class="narrow"><img src="https://waoh.life/wp-content/uploads/2026/10/acemannan-08-aloe-gel.jpg" alt="알로에 겔" loading="lazy"></figure>
  <p>에이스매넌은 가공 과정에서 쉽게 분해됩니다. 국제 주요 공급사의 알로에겔 분말 9개를 분석한 연구에서 에이스매넌 함량이 적정한(약 10%) 원료는 <b>3개</b>였고, 2개는 약 1%, <b>4개에서는 효소 분해와 세균 발효 흔적</b>이 확인됐습니다(시판 원료 분석)<sup>[6]</sup>.</p>
  <p>『리부팅플랜 청춘리셋』은 "뿌리를 떠나 잘린 알로에 잎은 <b>24~48시간이 지나면 성분이 변질</b>된다"고 설명합니다<sup>[42]</sup>. 정확한 시간을 재 보인 논문은 찾지 못했지만, 수확 뒤 효소에 의한 분해가 실제로 일어난다는 것은 위의 시판 원료 분석에서 확인됩니다<sup>[6]</sup>.</p>
  <p><b>안정화</b>란 살아 있는 성분이 실온이나 공기에서 쉽게 산화·분해되지 않도록 처리해, 분자 크기와 구조를 지키는 일을 말합니다. 수확 뒤 얼마나 빨리, 어떤 온도로, 어떤 방식으로 처리했는지가 남아 있는 에이스매넌의 양과 분자 크기를 가릅니다(자세히: <a href="/acemannan-quality-guide/">에이스매넌 안정화를 확인해야 하는 이유</a>).</p>
</section>

<!-- 9 -->
<section class="sec" id="s9">
  <span class="eb">09 · RESEARCH MAP</span>
  <h2>연구 지도 — 무엇이 어디까지 확인됐나</h2>
  <p>사람에게 직접 쓴 연구는 주로 <b>바르는 형태</b>입니다. 태국 출라롱콘대학 연구팀의 무작위 대조 연구에서 에이스매넌 0.5% 젤을 입안 점막에 하루 3번, 7일간 발랐을 때, 건강한 사람 100명 첩포 시험과 50명 사용 시험에서 <b>알레르기나 부작용이 없었고 간·신장 혈액 검사에도 의미 있는 변화가 없었습니다</b><sup>[14]</sup>. 먹는 형태의 에이스매넌만 단독으로 시험한 사람 연구는 아직 적습니다. 에이스매넌 연구 전반은 종설<sup>[18]</sup>에도 정리되어 있습니다.</p>
  <div class="tbl"><table>
    <tr><th>단계</th><th>확인된 내용</th><th>근거</th></tr>
    <tr><td>세포</td><td>대식세포 활성(탐식·살균·사이토카인·산화질소), 수지상세포 성숙·IL-12, 만노스 수용체·TLR5 결합, 바깥 만노스의 당단백질 이용, HIV-1·헤르페스 1형 복제 억제(시험관)</td><td>[1][2][3][7][8][29][31][32][33]</td></tr>
    <tr><td>동물</td><td>면역 억제 생쥐의 백혈구 생성 증가, 골수 억제 생쥐의 조혈 전구세포 증가(주사), 먹은 만노스의 흡수·당단백질 결합, 혈중 만노스 상승, 장기 경구 섭취 안전성(쥐·개), 항체 반응</td><td>[1][8][9][26][28][30]</td></tr>
    <tr><td>체외 발효</td><td>사람 분변 발효에서 초산 증가, 장내 세균 변화</td><td>[11][12]</td></tr>
    <tr><td>사람</td><td>바르는 형태의 안전성(알레르기·부작용 없음), 태반을 통한 만노스 공급(임신부 7명), 고혈당 시 혈관 글리코칼릭스 감소(건강한 남성 10명)</td><td>[14][37][40]</td></tr>
    <tr><td>아직인 것</td><td>먹은 에이스매넌의 체내 경로를 사람에서 직접 추적한 연구, 먹는 형태의 단독 사람 시험</td><td>—</td></tr>
  </table></div>
  <div class="note">이 글은 성분이 어떻게 작동하는지 이해하기 위한 연구 정리입니다. 세포·동물 결과가 사람에게 같은 결과를 뜻하지는 않습니다.</div>
</section>

<!-- 10 -->
<section class="sec" id="s10">
  <span class="eb">10 · KOREA &amp; SAFETY</span>
  <h2>한국 기준과 안전성</h2>
  <div class="tbl"><table>
    <tr><th>항목</th><th>식품의약품안전처 건강기능식품 공전 2-47 알로에 겔</th></tr>
    <tr><td>원료</td><td>알로에 베라 잎에서 외피를 벗기고 겔 부분만 사용</td></tr>
    <tr><td>기능(지표)성분</td><td>총 다당체 — 고형분 1g당 30mg 이상. 다른 원료에서 온 다당체는 구분해 표시</td></tr>
    <tr><td>인정된 기능성</td><td>피부건강·장 건강·면역력 증진에 도움을 줄 수 있음</td></tr>
    <tr><td>1일 섭취량</td><td>총 다당체로서 110~420mg (2025년 1월 1일 시행)</td></tr>
    <tr><td>알로인</td><td>알로인 A와 B의 합 10mg/kg 이하 (2025년 1월 1일 시행)</td></tr>
  </table></div>
  <div class="key"><h3>총 다당체와 에이스매넌은 같은 숫자가 아닙니다</h3><p>한국에서는 알로에겔의 <b>총 다당체만 측정하고, 그에 대한 기능성만 인정</b>합니다<sup>[16]</sup>. 하지만 에이스매넌은 그 다당체 안에 들어 있는 일부이고, <b>분자의 크기마다 몸에서 쓰이는 용도가 다릅니다</b><sup>[2][15]</sup>. 총 다당체 수치는 분자 크기나 분해 여부를 알려주지 않기 때문에, <b>다당체 함량과 에이스매넌의 크기는 비례하지 않습니다</b><sup>[6]</sup>.</p></div>
  <ul>
    <li><b>알로인은 껍질 쪽 성분입니다.</b> 잎 껍질 가까운 노란 수액에 많고, 겔과는 다른 부분입니다<sup>[16]</sup>.</li>
    <li><b>겔과 전잎은 다릅니다.</b> 국제암연구소(IARC)는 알로에 전잎 추출물을 쥐 실험 결과를 근거로 2B군으로 분류했습니다. 평가 대상은 탈색하지 않은 전잎 추출물이며, 잎 안쪽 겔과는 다른 원료입니다<sup>[17]</sup>.</li>
    <li>공전의 섭취 시 주의사항: 이상사례 발생 시 섭취를 중단하고 전문가와 상담할 것<sup>[16]</sup>.</li>
  </ul>
</section>

<!-- 11 -->
<section class="sec" id="s11">
  <span class="eb">11 · FAQ</span>
  <h2>자주 묻는 질문</h2>
  <div class="faq"><h3>에이스매넌과 아세만난은 다른 성분인가요?</h3><p>같은 성분입니다. 영어 Acemannan을 대중적으로는 '에이스매넌', 학술적으로는 '아세만난'이라고 씁니다.</p></div>
  <div class="faq"><h3>알로에겔과 에이스매넌은 같은 건가요?</h3><p>아닙니다. 에이스매넌은 알로에겔 속 다당체 가운데 하나입니다. 알로에겔 전체가 에이스매넌은 아닙니다.</p></div>
  <div class="faq"><h3>하루에 얼마나 먹나요?</h3><p>한국 기준은 알로에겔의 총 다당체로 1일 110~420mg입니다. 에이스매넌만 따로 정한 섭취 기준은 없습니다<sup>[16]</sup>.</p></div>
  <div class="faq"><h3>베타글루칸과 무엇이 다른가요?</h3><p>베타글루칸은 포도당이 이어진 다당체(효모·버섯·귀리 등), 에이스매넌은 만노스가 이어지고 아세틸기가 붙은 알로에 겔의 다당체입니다(자세히: <a href="/acemannan-vs-betaglucan/">에이스매넌 vs 베타글루칸</a>).</p></div>
  <div class="faq"><h3>분자 크기가 왜 중요한가요?</h3><p>충북대 연구에서 5~400 kDa 구간의 다당체가 대식세포 활성이 가장 컸습니다<sup>[2]</sup>. 작은 조각은 흡수되어 당사슬 재료로, 큰 분자는 장에서 발효된다는 설명도 있습니다<sup>[15]</sup>.</p></div>
  <div class="faq"><h3>먹은 에이스매넌은 몸에서 어떻게 되나요?</h3><p>세포·동물 연구에서 바깥에서 들어온 만노스가 흡수되어 간과 혈장의 당단백질에 쓰였습니다<sup>[8][9]</sup>. 큰 분자는 장에서 단쇄지방산을 만드는 재료가 됩니다<sup>[11]</sup>. 사람에서 에이스매넌 자체의 경로를 직접 추적한 연구는 아직 없습니다.</p></div>
  <div class="faq"><h3>먹기 시작하면 변화를 언제 느낄 수 있나요?</h3><p>사람마다 다르고, 정해진 답은 없습니다. 참고가 되는 것은 세포가 바뀌는 속도입니다. 사람 몸에서는 하루 약 80 g의 세포가 새로 바뀌는데 대부분이 혈액세포와 장 상피세포이고, 장 상피는 며칠, 적혈구는 약 120일 주기로 교체됩니다<sup>[41]</sup>. 『리부팅플랜 청춘리셋』은 여기에 "몸은 영양소를 건강에 더 중요한 곳부터 먼저 쓰기 때문에, 내가 느끼고 싶은 부위의 변화가 늦게 올 수 있다"는 저자의 설명(영양소 우선 할당)을 덧붙입니다<sup>[42]</sup>. 이 부분은 저자의 관찰에 기초한 설명 모델이며, 연구로 검증된 이론은 아닙니다.</p></div>
</section>

<!-- 참고문헌 -->
<section class="sec" id="ref">
  <span class="eb">REFERENCES</span>
  <h2>참고문헌</h2>
  <ol class="ref">
    <li>임선아, 박찬수, 이종길(충북대학교 약학대학). 알로에 다당체 Acemannan의 면역증강 효능. 생약학회지 2016;47(2):103-109.</li>
    <li>Im SA, Oh ST, Song S, … Lee CK. Identification of optimal molecular size of modified Aloe polysaccharides with maximum immunomodulatory activity. Int Immunopharmacol 2005;5(2):271-279. <a href="https://pubmed.ncbi.nlm.nih.gov/15652758/" rel="nofollow">PMID 15652758</a></li>
    <li>Lee JK, Lee MK, Yun YP, Kim Y. Acemannan purified from Aloe vera induces phenotypic and functional maturation of immature dendritic cells. Int Immunopharmacol 2001;1(7):1275-1284. <a href="https://pubmed.ncbi.nlm.nih.gov/11460308/" rel="nofollow">PMID 11460308</a></li>
    <li>Manna S, McAnalley BH. Determination of the position of the O-acetyl group in a β-(1→4)-mannan (acemannan) from Aloe barbardensis Miller. Carbohydr Res 1993;241:317-319. <a href="https://pubmed.ncbi.nlm.nih.gov/8472257/" rel="nofollow">PMID 8472257</a></li>
    <li>Eberendu AR, Luta G, Edwards JA, McAnalley BH 외. Quantitative colorimetric analysis of aloe polysaccharides as a measure of Aloe vera quality in commercial products. J AOAC Int 2005;88(3):684-691. <a href="https://pubmed.ncbi.nlm.nih.gov/16001840/" rel="nofollow">PMID 16001840</a></li>
    <li>Bozzi A, Perrin C, Austin S, Arce Vera F. Quality and authenticity of commercial aloe vera gel powders. Food Chem 2007;103:22-30. <a href="https://doi.org/10.1016/j.foodchem.2006.05.061" rel="nofollow">DOI</a></li>
    <li>Thunyakitpisal P 외. Acemannan increases NF-κB/DNA binding and IL-6/-8 expression by selectively binding Toll-like receptor-5 in human gingival fibroblasts. Carbohydr Polym 2017;161:149-157. <a href="https://pubmed.ncbi.nlm.nih.gov/28189222/" rel="nofollow">PMID 28189222</a></li>
    <li>Alton G 외(Freeze HH). Direct utilization of mannose for mammalian glycoprotein biosynthesis. Glycobiology 1998. <a href="https://pubmed.ncbi.nlm.nih.gov/9451038/" rel="nofollow">PMID 9451038</a></li>
    <li>Davis JA, Freeze HH. Studies of mannose metabolism and effects of long-term mannose ingestion in the mouse. Biochim Biophys Acta 2001. <a href="https://pubmed.ncbi.nlm.nih.gov/11687298/" rel="nofollow">PMID 11687298</a></li>
    <li>Sharma V, Ichikawa M, Freeze HH. Mannose metabolism: more than meets the eye. Biochem Biophys Res Commun 2014. <a href="https://pubmed.ncbi.nlm.nih.gov/24931670/" rel="nofollow">PMID 24931670</a></li>
    <li>Quezada MP 외. Acemannan and fructans from Aloe vera (Aloe barbadensis Miller) plants as novel prebiotics. J Agric Food Chem 2017. <a href="https://pubmed.ncbi.nlm.nih.gov/29072072/" rel="nofollow">PMID 29072072</a></li>
    <li>Gullón B 외. In vitro assessment of the prebiotic potential of Aloe vera mucilage and its impact on the human microbiota. Food Funct 2015. <a href="https://pubmed.ncbi.nlm.nih.gov/25504136/" rel="nofollow">PMID 25504136</a></li>
    <li>Roediger WE. Role of anaerobic bacteria in the metabolic welfare of the colonic mucosa in man. Gut 1980. <a href="https://pubmed.ncbi.nlm.nih.gov/7429343/" rel="nofollow">PMID 7429343</a></li>
    <li>Bhalang K, Thunyakitpisal P, Rungsirisatean N. Acemannan, a polysaccharide extracted from Aloe vera, is effective in the treatment of oral aphthous ulceration. J Altern Complement Med 2013;19(5):429-434. <a href="https://pubmed.ncbi.nlm.nih.gov/23240939/" rel="nofollow">PMID 23240939</a></li>
    <li>McAnalley B, Aguayo E. The Science Behind Aloe: The Healing Plant. 2009 (단행본, ISBN 978-0615263946).</li>
    <li>식품의약품안전처. 건강기능식품의 기준 및 규격(공전) 2-47 알로에 겔. 고시 제2023-91호(2023.12.27., 2025.1.1. 시행).</li>
    <li>IARC Monographs Vol. 108. Some Drugs and Herbal Products — Aloe vera, whole leaf extract (Group 2B). 2016. <a href="https://www.ncbi.nlm.nih.gov/books/NBK350480/" rel="nofollow">NCBI Bookshelf</a></li>
    <li>Sierra-García GD 외. Acemannan, an extracted polysaccharide from Aloe vera: a literature review. Nat Prod Commun 2014;9(8):1217-1221. <a href="https://pubmed.ncbi.nlm.nih.gov/25233608/" rel="nofollow">PMID 25233608</a></li>
    <li>Hamman JH. Composition and applications of Aloe vera leaf gel. Molecules 2008;13(8):1599-1616. <a href="https://pubmed.ncbi.nlm.nih.gov/18794775/" rel="nofollow">PMID 18794775</a></li>
    <li>McAnalley BH. Process for preparation of aloe products, products produced thereby and compositions thereof. US Patent 4,735,935 (1988) · US Patent 4,917,890 (1990).</li>
    <li>Seeberger PH. Monosaccharide Diversity. In: Essentials of Glycobiology, 3rd ed. Cold Spring Harbor Laboratory Press; 2015. <a href="https://www.ncbi.nlm.nih.gov/books/NBK453086/" rel="nofollow">NCBI Bookshelf</a></li>
    <li>Murray RK 외. Harper's Biochemistry. 1996 (당단백질 당사슬의 단당류).</li>
    <li>Martinez-Pomares L. The mannose receptor. J Leukoc Biol 2012;92(6):1177-1186. <a href="https://pubmed.ncbi.nlm.nih.gov/22966131/" rel="nofollow">PMID 22966131</a></li>
    <li>Gazi U, Martinez-Pomares L. Influence of the mannose receptor in host immune responses. Immunobiology 2009;214(7):554-561. <a href="https://pubmed.ncbi.nlm.nih.gov/19162368/" rel="nofollow">PMID 19162368</a></li>
    <li>Tizard IR, Carpenter RH, McAnalley BH, Kemp MC. The biological activities of mannans and related complex carbohydrates. Mol Biother 1989;1(6):290-296. <a href="https://pubmed.ncbi.nlm.nih.gov/2692629/" rel="nofollow">PMID 2692629</a></li>
    <li>Fogleman RW, Shellenberger TE, Balmer MF, Carpenter RH, McAnalley BH. Subchronic oral administration of acemannan in the rat and dog. Vet Hum Toxicol 1992;34(2):144-147. <a href="https://pubmed.ncbi.nlm.nih.gov/1509675/" rel="nofollow">PMID 1509675</a></li>
    <li>Fogleman RW, Chapdelaine JM, Carpenter RH, McAnalley BH. Toxicologic evaluation of injectable acemannan in the mouse, rat and dog. Vet Hum Toxicol 1992;34(3):201-205. <a href="https://pubmed.ncbi.nlm.nih.gov/1609484/" rel="nofollow">PMID 1609484</a></li>
    <li>Gauntt CJ, Wood HJ, McDaniel HR, McAnalley BH. Aloe polymannose enhances anti-coxsackievirus antibody titres in mice. Phytother Res 2000;14(4):261-266. <a href="https://pubmed.ncbi.nlm.nih.gov/10861969/" rel="nofollow">PMID 10861969</a></li>
    <li>Stuart RW, Lefkowitz DL, Lincoln JA, Howard K, Gelderman MP, Lefkowitz SS. Upregulation of phagocytosis and candidicidal activity of macrophages exposed to the immunostimulant acemannan. Int J Immunopharmacol 1997;19(2):75-82. <a href="https://pubmed.ncbi.nlm.nih.gov/9278177/" rel="nofollow">PMID 9278177</a></li>
    <li>Egger SF, Brown GS, Kelsey LS, Yates KM, Rosenberg LJ, Talmadge JE. Hematopoietic augmentation by a β-(1,4)-linked mannan. Cancer Immunol Immunother 1996;43(4):195-205. <a href="https://pubmed.ncbi.nlm.nih.gov/9003464/" rel="nofollow">PMID 9003464</a></li>
    <li>Zhang L, Tizard IR. Activation of a mouse macrophage cell line by acemannan: the major carbohydrate fraction from Aloe vera gel. Immunopharmacology 1996;35(2):119-128. <a href="https://pubmed.ncbi.nlm.nih.gov/8956975/" rel="nofollow">PMID 8956975</a></li>
    <li>Kahlon JB, Kemp MC, Carpenter RH, McAnalley BH, McDaniel HR, Shannon WM. Inhibition of AIDS virus replication by acemannan in vitro. Mol Biother 1991;3(3):127-135. <a href="https://pubmed.ncbi.nlm.nih.gov/1768365/" rel="nofollow">PMID 1768365</a></li>
    <li>Kahlon JB, Kemp MC, Yawei N, Carpenter RH, Shannon WM, McAnalley BH. In vitro evaluation of the synergistic antiviral effects of acemannan in combination with azidothymidine and acyclovir. Mol Biother 1991;3(4):214-223. <a href="https://pubmed.ncbi.nlm.nih.gov/1662957/" rel="nofollow">PMID 1662957</a></li>
    <li>Säemann MD 외. Anti-inflammatory effects of sodium butyrate on human monocytes: potent inhibition of IL-12 and up-regulation of IL-10 production. FASEB J 2000;14(15):2380-2382. <a href="https://pubmed.ncbi.nlm.nih.gov/11024006/" rel="nofollow">PMID 11024006</a></li>
    <li>Gao Z 외. Butyrate improves insulin sensitivity and increases energy expenditure in mice. Diabetes 2009;58(7):1509-1517. <a href="https://pubmed.ncbi.nlm.nih.gov/19366864/" rel="nofollow">PMID 19366864</a></li>
    <li>Vidrine K 외. Resistant starch from high amylose maize (HAM-RS2) and dietary butyrate reduce abdominal fat by a different apparent mechanism. Obesity (Silver Spring) 2014;22(2):344-348. <a href="https://doi.org/10.1002/oby.20501" rel="nofollow">DOI 10.1002/oby.20501</a></li>
    <li>Staat BC 외. Transplacental supply of mannose and inositol in uncomplicated pregnancies using stable isotopes. J Clin Endocrinol Metab 2012;97(7):2497-2502. <a href="https://pubmed.ncbi.nlm.nih.gov/22544916/" rel="nofollow">PMID 22544916</a></li>
    <li>Niehues R 외(Freeze HH, Marquardt T). Carbohydrate-deficient glycoprotein syndrome type Ib. Phosphomannose isomerase deficiency and mannose therapy. J Clin Invest 1998;101(7):1414-1420. <a href="https://pubmed.ncbi.nlm.nih.gov/9525984/" rel="nofollow">PMID 9525984</a></li>
    <li>Gouverneur M, van den Berg B, Nieuwdorp M, Stroes E, Vink H. Vasculoprotective properties of the endothelial glycocalyx: effects of fluid shear stress. J Intern Med 2006;259(4):393-400. <a href="https://pubmed.ncbi.nlm.nih.gov/16594907/" rel="nofollow">PMID 16594907</a></li>
    <li>Nieuwdorp M 외. Loss of endothelial glycocalyx during acute hyperglycemia coincides with endothelial dysfunction and coagulation activation in vivo. Diabetes 2006;55(2):480-486. <a href="https://pubmed.ncbi.nlm.nih.gov/16443784/" rel="nofollow">PMID 16443784</a></li>
    <li>Sender R, Milo R. The distribution of cellular turnover in the human body. Nat Med 2021;27(1):45-48. <a href="https://pubmed.ncbi.nlm.nih.gov/33432173/" rel="nofollow">PMID 33432173</a></li>
    <li>오승우. 리부팅플랜 청춘리셋 — Part 2 Knowledge Factory, 에이스매넌(186~219쪽). Call2Life, 2022. (단행본)</li>
  </ol>
</section>

<a class="next" href="/aloe-gel-label/">다음 글 — 알로에겔 제품, 라벨에서 무엇을 봐야 할까 →</a>

<div class="author"><b>글: 오승우 (Wellness Architect)</b> — 19년 웰니스 현장 경험, 의료진과 협업하는 통합 웰니스 설계자 · 최종 검토 2026-10-12<br>그림·자료: 『리부팅플랜 청춘리셋』(Call2Life, 2022) 지식 파트 · 임선아·박찬수·이종길, 「알로에 다당체 Acemannan의 면역증강 효능」, 생약학회지 2016(충북대학교 약학대학, 그림 1·2) · 빌 맥어널리(Bill H. McAnalley) 박사의 논문과 저서 『The Science Behind Aloe』(2009)<br>이 글은 공개된 연구와 식품의약품안전처 자료를 바탕으로 작성한 성분·연구 정보이며, 질병의 진단·치료·예방을 위한 의학적 조언이 아닙니다.</div>

</div>
HTML;

// ─────────────────────────────────────────────────────────
// 포스트 콘텐츠 업데이트 (wp:html 블록으로 래핑)
// ─────────────────────────────────────────────────────────
$new_content = "<!-- wp:html -->\n" . $html . "\n<!-- /wp:html -->";

$result = wp_update_post([
    'ID'           => $post_id,
    'post_title'   => '에이스매넌(아세만난) 연구 정리 — 충북대 연구부터 세포 커뮤니케이션까지',
    'post_name'    => 'acemannan',
    'post_content' => $new_content,
    'post_status'  => 'publish',
], true);

echo '<style>body{font-family:sans-serif;padding:24px;line-height:2}</style>';
echo '<h3>에이스매넌 페이지 재세팅</h3>';
echo 'post ID: <b>' . $post_id . '</b><br>';

if (is_wp_error($result)) {
    echo '❌ 포스트 업데이트 오류: ' . esc_html($result->get_error_message()) . '<br>';
} else {
    echo '✅ 포스트 콘텐츠 업데이트 완료<br>';
}

// ─────────────────────────────────────────────────────────
// Rank Math 메타 재설정
// ─────────────────────────────────────────────────────────
update_post_meta($post_id, 'rank_math_focus_keyword', '에이스매넌,아세만난,Acemannan,알로에 다당체');
update_post_meta($post_id, 'rank_math_description',
    '에이스매넌(아세만난, Acemannan)은 알로에 베라 잎 겔의 다당체입니다. 충북대학교 약학대학 연구 3편, 분자 크기별 작용, 세포 커뮤니케이션, 맥어널리 박사 연구까지 — 공개 논문 중심으로 정리합니다.'
);
echo '✅ Rank Math 메타 재설정 완료<br>';

// ─────────────────────────────────────────────────────────
// Additional CSS 정리 (이전에 추가된 임시 CSS 제거)
// ─────────────────────────────────────────────────────────
$theme      = wp_get_theme();
$stylesheet = $theme->get_stylesheet();
$css_post   = wp_get_custom_css_post($stylesheet);
if ($css_post) {
    $existing = $css_post->post_content;
    $cleaned  = preg_replace('/\/\* acemannan-title-hide \*\/[\s\S]*?(?=\/\*|$)/', '', $existing);
    $cleaned  = preg_replace('/\/\* acemannan-gap-fix \*\/[\s\S]*?(?=\/\*|$)/', '', $cleaned);
    if (trim($cleaned) !== trim($existing)) {
        wp_update_custom_css_post(trim($cleaned), ['stylesheet' => $stylesheet]);
        echo '✅ Additional CSS 임시 코드 정리 완료<br>';
    } else {
        echo '✅ Additional CSS 변경 없음<br>';
    }
}

echo '<br><a href="/acemannan/?nc=' . time() . '" target="_blank" style="font-size:18px;font-weight:bold">→ waoh.life/acemannan/ 새창 확인</a>';

@unlink(__FILE__);
