import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

const IMG = {
  superVera7:  "/ingredients/ing-super-vera7.jpg",
  epicor:      "/ingredients/ing-epicor.jpg",
  larch:       "/ingredients/ing-larch.jpg",
  rgen:        "https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=600&h=360&fit=crop&q=80&auto=format",
  curcugen:    "/ingredients/ing-curcugen.jpg",
  morikol:     "/ingredients/ing-morikol.jpg",
  chlorella:   "/ingredients/ing-chlorella.jpg",
  s7:          "/ingredients/ing-s7.jpg",
  xos:         "/ingredients/ing-xos.jpg",
  probioseb:   "/ingredients/ing-probioseb.jpg",
  creavitalis: "/ingredients/ing-creavitalis.jpg",
  wheatgrass:  "/ingredients/ing-wheatgrass.jpg",
  adaptogen:   "/ingredients/ing-adaptogen.jpg",
  coconut:     "/ingredients/ing-coconut.jpg",
  bioperine:   "/ingredients/ing-bioperine.jpg",
};

const sectionHtml = (img: typeof IMG) => `
<section class="wa-ingredients" aria-label="원료와 기술">
  <style>
    .wa-ingredients{
      --cobalt:#1A73E8; --cobalt-deep:#0E4FB0; --cobalt-soft:#EAF1FE;
      --ink:#10233F; --slate:#556579; --paper:#F6F8FB; --card:#FFFFFF;
      --line:#E4EAF3; --gold:#B98A2E;
      --serif:'Noto Serif KR',serif; --sans:'Pretendard',-apple-system,sans-serif;
      background:var(--paper); color:var(--ink); font-family:var(--sans);
      padding:88px 24px; -webkit-font-smoothing:antialiased;
    }
    .wa-ingredients *{box-sizing:border-box;margin:0;padding:0}
    .wa-wrap{max-width:1160px;margin:0 auto}

    .wa-eyebrow{display:inline-flex;align-items:center;gap:8px;font-size:13px;
      letter-spacing:.14em;color:var(--cobalt);font-weight:700;margin-bottom:16px}
    .wa-eyebrow::before{content:"";width:22px;height:2px;background:var(--cobalt)}
    .wa-h2{font-family:var(--serif);font-weight:900;font-size:clamp(28px,4.2vw,46px);
      line-height:1.28;letter-spacing:-.01em;max-width:20ch}
    .wa-lead{margin-top:18px;font-size:clamp(15px,1.6vw,17px);line-height:1.85;
      color:var(--slate);max-width:58ch}
    .wa-part-label{display:flex;align-items:center;gap:14px;margin:64px 0 26px}
    .wa-part-num{font-family:var(--serif);font-weight:700;font-size:15px;color:var(--cobalt);
      border:1.5px solid var(--cobalt);border-radius:999px;width:38px;height:38px;
      display:grid;place-items:center;flex:none}
    .wa-part-title{font-family:var(--serif);font-weight:700;font-size:clamp(19px,2.4vw,25px)}
    .wa-part-sub{color:var(--slate);font-size:14px;margin-top:3px}

    /* ── Hero ── */
    .wa-hero{background:linear-gradient(160deg,#0E2647 0%,#123A73 55%,#0E4FB0 100%);
      border-radius:22px;overflow:hidden;color:#fff;position:relative;
      display:grid;grid-template-columns:1fr 340px}
    @media(max-width:860px){.wa-hero{grid-template-columns:1fr}}
    .wa-hero-body{padding:clamp(28px,4vw,52px);position:relative;z-index:1}
    .wa-hero::before{content:"";position:absolute;inset:0;
      background:radial-gradient(600px 300px at 88% -10%,rgba(255,255,255,.14),transparent 60%);
      pointer-events:none;z-index:0}
    .wa-hero-img-panel{position:relative;overflow:hidden}
    .wa-hero-img-panel img{width:100%;height:100%;object-fit:cover;
      filter:brightness(.55) saturate(.9)}
    .wa-hero-img-panel::after{content:"";position:absolute;inset:0;
      background:linear-gradient(90deg,#123A73 0%,transparent 40%)}
    @media(max-width:860px){.wa-hero-img-panel{display:none}}

    .wa-hero-top{display:flex;flex-wrap:wrap;gap:10px 16px;align-items:baseline}
    .wa-hero-name{font-family:var(--serif);font-weight:900;font-size:clamp(26px,3.4vw,40px);letter-spacing:-.01em}
    .wa-hero-name sup{font-size:.42em;top:-.9em;font-weight:700}
    .wa-hero-tag{font-size:12.5px;letter-spacing:.06em;
      color:#BFD6FB;font-weight:700;border:1px solid rgba(191,214,251,.4);
      padding:5px 11px;border-radius:999px}
    .wa-hero-desc{margin-top:16px;max-width:64ch;font-size:15.5px;line-height:1.9;color:#D7E3F7}
    .wa-hero-desc b{color:#fff;font-weight:600}

    .wa-paths{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin-top:34px;position:relative;z-index:1}
    .wa-path{background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.14);
      border-radius:16px;padding:22px}
    .wa-path-kda{font-family:var(--serif);font-weight:700;font-size:19px;color:#fff}
    .wa-path-role{font-size:12px;letter-spacing:.04em;
      color:#9FC0F5;font-weight:700;margin-top:5px}
    .wa-path-steps{margin-top:16px;list-style:none;display:flex;flex-direction:column;gap:12px}
    .wa-path-steps li{position:relative;padding-left:20px;font-size:13.5px;line-height:1.6;color:#DCE7F8}
    .wa-path-steps li::before{content:"→";position:absolute;left:0;color:#6FA0EE;font-weight:700}
    .wa-path-out{margin-top:16px;font-size:13px;line-height:1.6;color:#fff;font-weight:600;
      border-top:1px solid rgba(255,255,255,.16);padding-top:14px}

    .wa-fate{display:flex;flex-wrap:wrap;gap:10px;margin-top:26px;position:relative;z-index:1}
    .wa-fate span{font-size:12.5px;color:#CFE0F6;background:rgba(255,255,255,.07);
      border-radius:999px;padding:7px 13px}
    .wa-fate b{color:#fff}

    @media(max-width:860px){.wa-paths{grid-template-columns:1fr}}

    /* ── Ingredient Cards ── */
    .wa-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:18px}
    .wa-card{background:var(--card);border:1px solid var(--line);border-radius:18px;
      overflow:hidden;display:flex;flex-direction:column;
      transition:transform .2s,box-shadow .2s;border-top:3px solid var(--cobalt)}
    .wa-card:hover{transform:translateY(-4px);box-shadow:0 18px 42px rgba(16,35,63,.1)}
    .wa-c-img-wrap{position:relative;overflow:hidden;height:190px;flex:none}
    .wa-c-img-wrap img{width:100%;height:100%;object-fit:cover;display:block;
      transition:transform .45s ease}
    .wa-card:hover .wa-c-img-wrap img{transform:scale(1.07)}
    .wa-c-img-overlay{position:absolute;inset:0;
      background:linear-gradient(to top,rgba(16,35,63,.18) 0%,transparent 60%)}
    .wa-c-content{padding:22px 24px 26px;flex:1;display:flex;flex-direction:column}
    .wa-c-tag{align-self:flex-start;display:inline-flex;align-items:center;gap:7px;
      font-size:11.5px;font-weight:700;letter-spacing:.02em;color:var(--cobalt);
      background:var(--cobalt-soft);border-radius:999px;padding:6px 11px;margin-bottom:16px}
    .wa-c-tag b{font-family:var(--serif)}
    .wa-c-name{font-family:var(--serif);font-weight:700;font-size:20px;letter-spacing:-.01em}
    .wa-c-name sup{font-size:.5em;top:-.8em}
    .wa-c-badge{font-size:12px;letter-spacing:.02em;
      color:var(--slate);font-weight:700;margin-top:7px}
    .wa-c-desc{margin-top:14px;font-size:14px;line-height:1.75;color:var(--slate)}
    .wa-c-desc b{color:var(--ink);font-weight:600}

    .wa-delivery{margin-top:20px;background:var(--cobalt-soft);border:1px solid #D3E2FC;
      border-radius:18px;overflow:hidden;display:flex;gap:0;align-items:stretch;flex-wrap:wrap}
    .wa-delivery-img{width:220px;flex:none;overflow:hidden}
    .wa-delivery-img img{width:100%;height:100%;object-fit:cover;display:block;
      filter:brightness(.8) saturate(.85)}
    @media(max-width:700px){.wa-delivery-img{display:none}}
    .wa-delivery-body{flex:1;min-width:240px;padding:26px 28px;display:flex;gap:18px;align-items:flex-start}
    .wa-delivery-icon{width:46px;height:46px;border-radius:12px;background:var(--cobalt);
      color:#fff;display:grid;place-items:center;font-family:var(--serif);font-weight:900;font-size:20px;flex:none}
    .wa-delivery-text{flex:1}
    .wa-delivery-text h4{font-family:var(--serif);font-weight:700;font-size:19px}
    .wa-delivery-text h4 sup{font-size:.5em;top:-.8em}
    .wa-delivery-text p{margin-top:8px;font-size:14px;line-height:1.75;color:var(--slate)}
    .wa-delivery-text p b{color:var(--ink);font-weight:600}

    .wa-standard{margin-top:58px;border-top:1px solid var(--line);padding-top:48px}
    .wa-standard-quote{font-family:var(--serif);font-weight:700;font-size:clamp(20px,2.7vw,29px);
      line-height:1.5;letter-spacing:-.01em;color:var(--ink);margin-top:14px;max-width:26ch}
    .wa-standard-quote span{color:var(--cobalt)}
    .wa-standard-sub{margin-top:14px;color:var(--slate);font-size:15px;line-height:1.8;max-width:50ch}
    .wa-no-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:14px;margin-top:32px}
    .wa-no-item{display:flex;gap:14px;align-items:flex-start;background:var(--card);
      border:1px solid var(--line);border-radius:14px;padding:20px}
    .wa-no-x{flex:none;width:30px;height:30px;border-radius:8px;background:var(--cobalt-soft);
      color:var(--cobalt);display:grid;place-items:center;font-weight:700;font-size:14px}
    .wa-no-item h5{font-size:15px;font-weight:700;color:var(--ink);letter-spacing:-.01em}
    .wa-no-item p{margin-top:6px;font-size:13px;line-height:1.65;color:var(--slate)}

    .wa-foot{margin-top:34px;font-size:12px;line-height:1.7;color:#8A98A8;max-width:80ch}

    @media(max-width:860px){
      .wa-grid{grid-template-columns:repeat(2,1fr)}
      .wa-no-grid{grid-template-columns:1fr 1fr}
    }
    @media(max-width:560px){
      .wa-ingredients{padding:60px 18px}
      .wa-grid{grid-template-columns:1fr}
      .wa-no-grid{grid-template-columns:1fr}
    }
    @media(prefers-reduced-motion:reduce){
      .wa-card{transition:none}
      .wa-c-img-wrap img{transition:none}
    }
  </style>

  <div class="wa-wrap">

    <!-- 헤더 -->
    <span class="wa-eyebrow">원료와 기술 · INGREDIENTS &amp; TECHNOLOGY</span>
    <h2 class="wa-h2">단순 배합이 아니라, 세포 수준에서 설계합니다.</h2>
    <p class="wa-lead">우리는 좋은 원료의 목록에서 시작하지 않습니다. 몸이 그 원료를 "어떻게 받아들이는가"라는 질문에서 시작합니다. 모든 원료는 신체 회복의 4대 코너스톤 안에서 각자의 역할을 위해 선택됩니다.</p>

    <!-- ============ PART 01 : 기술 ============ -->
    <div class="wa-part-label">
      <span class="wa-part-num">01</span>
      <div>
        <div class="wa-part-title">시그니처 분자</div>
        <div class="wa-part-sub">우리의 독점 면역 생리활성 물질 — SuperVera7®</div>
      </div>
    </div>

    <!-- Hero: 좌측 텍스트 + 우측 알로에 이미지 -->
    <div class="wa-hero">
      <div class="wa-hero-body">
        <div class="wa-hero-top">
          <span class="wa-hero-name">SuperVera7<sup>®</sup></span>
          <span class="wa-hero-tag">독점 에이스매넌 추출물</span>
        </div>
        <p class="wa-hero-desc">알로에 베라 속잎 젤에서 추출한 안정화·표준화 에이스매넌으로, 독점 공급으로 확보한 원료입니다. 에이스매넌은 몸이 <b>세포 간 소통·방어·복구·재생</b>에 사용하는 만노스 풍부 다당체입니다. 그 힘은 대부분의 추출물이 잃어버리는 디테일 — 전체 분자량 스펙트럼 — 에 있습니다. 각 분자량 분획이 서로 다른 생리 경로를 동시에 타겟팅합니다.</p>

        <div class="wa-paths">
          <div class="wa-path">
            <div class="wa-path-kda">&lt; 50 kDa</div>
            <div class="wa-path-role">초저분자 · 흡수</div>
            <ul class="wa-path-steps">
              <li>소장 상피의 만노스 수용체를 통해 흡수</li>
              <li>간문맥을 거쳐 간으로 수송</li>
              <li>간의 당단백질(Glycoprotein) 합성 원료로 사용</li>
            </ul>
            <div class="wa-path-out">세포막 당사슬과 내피 글리코칼릭스 재건 — 최고의 생체이용률.</div>
          </div>
          <div class="wa-path">
            <div class="wa-path-kda">5 – 400 kDa</div>
            <div class="wa-path-role">중간 분자량 · 면역 조절</div>
            <ul class="wa-path-steps">
              <li>대식세포·수지상세포의 만노스·TLR 수용체에 결합</li>
              <li>CD40 / CD80 / CD86 및 MHC-II 발현 증가</li>
              <li>T세포로의 항원 제시 촉진</li>
            </ul>
            <div class="wa-path-out">NK세포 활성 준비와 백혈구 신생 — 최고의 면역조절(&lt; 400 kDa).</div>
          </div>
          <div class="wa-path">
            <div class="wa-path-kda">&gt; 400 kDa</div>
            <div class="wa-path-role">고분자 · 장 생태</div>
            <ul class="wa-path-steps">
              <li>대장까지 온전히 도달하는 프리바이오틱 섬유</li>
              <li>유익균(비피도박테리아) 선택적 영양 공급</li>
              <li>혐기 발효를 통해 단쇄지방산 생성</li>
            </ul>
            <div class="wa-path-out">단쇄지방산(낙산)이 장벽을 보수 — 장 누수 방어.</div>
          </div>
        </div>

        <div class="wa-fate">
          <span><b>80%</b> → 단쇄지방산(SCFA)</span>
          <span><b>11.6%</b> → 만노스 풀로 흡수</span>
          <span><b>6.4%</b> → 탄수화물로 대사</span>
          <span><b>2%</b> → 배출</span>
        </div>
      </div>

      <!-- 우측 알로에 이미지 패널 -->
      <div class="wa-hero-img-panel">
        <img src="${img.superVera7}" alt="알로에 베라 — SuperVera7® 원료" loading="lazy">
      </div>
    </div>

    <!-- ============ PART 02 : 핵심 원료 ============ -->
    <div class="wa-part-label">
      <span class="wa-part-num">02</span>
      <div>
        <div class="wa-part-title">핵심 원료</div>
        <div class="wa-part-sub">각 원료를 4대 코너스톤(C1–C4)에 매핑</div>
      </div>
    </div>

    <div class="wa-grid">

      <!-- EpiCor -->
      <div class="wa-card">
        <div class="wa-c-img-wrap">
          <img src="${img.epicor}" alt="EpiCor® — 홀푸드 효모 발효물" loading="lazy">
          <div class="wa-c-img-overlay"></div>
        </div>
        <div class="wa-c-content">
          <span class="wa-c-tag"><b>C1</b> 통신과 방어</span>
          <div class="wa-c-name">EpiCor<sup>®</sup></div>
          <div class="wa-c-badge">홀푸드 효모 발효물(포스트바이오틱)</div>
          <p class="wa-c-desc">발효 <b>Saccharomyces cerevisiae</b> 유래 비타민·대사물질·항산화 매트릭스. <b>섭취 수 시간 내 NK세포 활성</b>과 타액 sIgA(점막 1차 방어)를 서포트하는 것으로 연구됩니다.†</p>
        </div>
      </div>

      <!-- Larch Arabinogalactan -->
      <div class="wa-card">
        <div class="wa-c-img-wrap">
          <img src="${img.larch}" alt="낙엽송 아라비노갈락탄 원료" loading="lazy">
          <div class="wa-c-img-overlay"></div>
        </div>
        <div class="wa-c-content">
          <span class="wa-c-tag"><b>C1</b> 통신과 방어</span>
          <div class="wa-c-name">낙엽송 아라비노갈락탄</div>
          <div class="wa-c-badge">면역-프리바이오틱 섬유</div>
          <p class="wa-c-desc">낙엽송에서 얻은 수용성 다당체로 두 가지 역할을 동시에 합니다: <b>대식세포·NK세포 활성화</b>, 그리고 유익균의 먹이가 되어 <b>단쇄지방산</b> 생성. 면역과 장 생태를 잇는 진정한 가교입니다.†</p>
        </div>
      </div>

      <!-- RGen -->
      <div class="wa-card">
        <div class="wa-c-img-wrap">
          <img src="${img.rgen}" alt="RGen™ — 식물성 비타민·미네랄" loading="lazy">
          <div class="wa-c-img-overlay"></div>
        </div>
        <div class="wa-c-content">
          <span class="wa-c-tag"><b>C2</b> 보존과 영양</span>
          <div class="wa-c-name">RGen<sup>™</sup> &amp; RGen-Zn</div>
          <div class="wa-c-badge">식물성 비타민·미네랄</div>
          <p class="wa-c-desc">합성이 아니라 식품에서 자란 비타민·미네랄 — 과일·채소·식물에서 <b>수(水)추출·표준화</b>하며, 미네랄을 사용 가능하게 만드는 식물 본연의 co-nutrient를 함께 담습니다. <b>RGen-Zn</b>은 <b>구아바 잎</b>에서 얻은 천연 아연을 공급합니다.†</p>
        </div>
      </div>

      <!-- Curcugen -->
      <div class="wa-card">
        <div class="wa-c-img-wrap">
          <img src="${img.curcugen}" alt="Curcugen® — 홀-라이좀 강황" loading="lazy">
          <div class="wa-c-img-overlay"></div>
        </div>
        <div class="wa-c-content">
          <span class="wa-c-tag"><b>C2</b> 보존과 영양</span>
          <div class="wa-c-name">Curcugen<sup>®</sup></div>
          <div class="wa-c-badge">홀-라이좀 강황</div>
          <p class="wa-c-desc">커큐민만 분리하지 않고 강황 뿌리 전체 프로파일(커큐미노이드·강황 오일·다당류)을 유지합니다. <b>커큐민 95% 대비 39–52.5배 생체이용률</b>로 임상 연구되었으며,† 깨끗하고 거의 무미합니다.</p>
        </div>
      </div>

      <!-- Morikol -->
      <div class="wa-card">
        <div class="wa-c-img-wrap">
          <img src="${img.morikol}" alt="Morikol® — 마린 콜라겐" loading="lazy">
          <div class="wa-c-img-overlay"></div>
        </div>
        <div class="wa-c-content">
          <span class="wa-c-tag"><b>C2</b> 보존과 영양</span>
          <div class="wa-c-name">Morikol<sup>®</sup></div>
          <div class="wa-c-badge">트리펩타이드 마린 콜라겐 · 임상 연구</div>
          <p class="wa-c-desc">온전히 흡수되어 피부 섬유아세포에 직접 신호하는 초저분자 <b>Gly-Pro-Hyp 트리펩타이드</b> — 단순 아미노산 공급이 아닙니다. <b>12주 이중맹검 위약대조 인체시험</b>(<i>Nutrients</i> 게재)에서 단 <b>1g/day</b>로 눈가 주름을 위약 대비 10배 이상 개선하고 수분·탄력이 향상됐습니다.†</p>
        </div>
      </div>

      <!-- Chlorella -->
      <div class="wa-card">
        <div class="wa-c-img-wrap">
          <img src="${img.chlorella}" alt="클로렐라 — 세포벽 파쇄" loading="lazy">
          <div class="wa-c-img-overlay"></div>
        </div>
        <div class="wa-c-content">
          <span class="wa-c-tag"><b>C4</b> 정화와 재생</span>
          <div class="wa-c-name">클로렐라</div>
          <div class="wa-c-badge">세포벽 파쇄</div>
          <p class="wa-c-desc">일반 클로렐라는 몸이 열기 힘든 단단한 세포벽에 갇혀 있습니다. <b>세포벽 파쇄</b> 공정으로 내부의 엽록소·클로렐라 성장인자(CGF)·비타민B·미네랄을 방출합니다 — '먹는 것'과 '실제로 흡수하는 것'의 차이입니다.†</p>
        </div>
      </div>

      <!-- S7 -->
      <div class="wa-card">
        <div class="wa-c-img-wrap">
          <img src="${img.s7}" alt="S7® — 산화질소 부스터 식물 블렌드" loading="lazy">
          <div class="wa-c-img-overlay"></div>
        </div>
        <div class="wa-c-content">
          <span class="wa-c-tag"><b>C4</b> 정화와 재생</span>
          <div class="wa-c-name">S7<sup>®</sup></div>
          <div class="wa-c-badge">산화질소 부스터</div>
          <p class="wa-c-desc">체내 스스로의 산화질소 생성을 촉진하는 것으로 밝혀진 무자극 7종 식물 추출 블렌드 — <b>최대 230%</b>.† 산화질소는 혈관을 이완시켜 모든 세포에 더 많은 산소와 연료를 전달합니다.</p>
        </div>
      </div>

      <!-- XOS -->
      <div class="wa-card">
        <div class="wa-c-img-wrap">
          <img src="${img.xos}" alt="XOS — 자일로올리고당 프리바이오틱" loading="lazy">
          <div class="wa-c-img-overlay"></div>
        </div>
        <div class="wa-c-content">
          <span class="wa-c-tag"><b>C3</b> 제어와 연결</span>
          <div class="wa-c-name">XOS</div>
          <div class="wa-c-badge">자일로올리고당</div>
          <p class="wa-c-desc">매우 낮은 용량에서도 작동하는 정밀 프리바이오틱. XOS는 <b>비피도박테리아</b>를 선택적으로 공급하여 장-뇌 소통의 토대가 되는 마이크로바이옴을 조율합니다.†</p>
        </div>
      </div>

      <!-- ProbioSEB Duo -->
      <div class="wa-card">
        <div class="wa-c-img-wrap">
          <img src="${img.probioseb}" alt="ProbioSEB Duo® — 포자형 프로바이오틱" loading="lazy">
          <div class="wa-c-img-overlay"></div>
        </div>
        <div class="wa-c-content">
          <span class="wa-c-tag"><b>C3</b> 제어와 연결</span>
          <div class="wa-c-name">ProbioSEB Duo<sup>®</sup></div>
          <div class="wa-c-badge">포자형 프로바이오틱 · Bacillus</div>
          <p class="wa-c-desc">천연 내생포자로 보호되는 두 가지 포자형 <b>Bacillus</b> 균주(subtilis &amp; coagulans) — 열·위산·유통기한을 견디고 장까지 살아서 도달합니다. 이 균종은 가장 많이 연구된 포자 프로바이오틱으로, 무작위 인체시험이 <b>소화 편안함과 면역(NK세포) 균형</b>을 뒷받침합니다.†</p>
        </div>
      </div>

      <!-- Creavitalis -->
      <div class="wa-card">
        <div class="wa-c-img-wrap">
          <img src="${img.creavitalis}" alt="Creavitalis® — 제약등급 크레아틴" loading="lazy">
          <div class="wa-c-img-overlay"></div>
        </div>
        <div class="wa-c-content">
          <span class="wa-c-tag"><b>C3</b> 제어와 연결</span>
          <div class="wa-c-name">Creavitalis<sup>®</sup></div>
          <div class="wa-c-badge">크레아틴 · 제약등급</div>
          <p class="wa-c-desc">Creapure® 제조사의 미분화 크레아틴 — 제약등급 순도로, 운동이 아닌 웰니스에 맞춰 설계했습니다. 크레아틴은 영양학에서 가장 많이 연구된 물질 중 하나로, 뇌의 ATP 에너지 시스템을 채우며 <b>기억·집중·건강한 노화</b>에 대한 메타분석 근거가 있습니다.†</p>
        </div>
      </div>

      <!-- 유기농 밀싹 -->
      <div class="wa-card">
        <div class="wa-c-img-wrap">
          <img src="${img.wheatgrass}" alt="유기농 밀싹 착즙" loading="lazy">
          <div class="wa-c-img-overlay"></div>
        </div>
        <div class="wa-c-content">
          <span class="wa-c-tag"><b>C4</b> 정화와 재생</span>
          <div class="wa-c-name">유기농 밀싹 착즙</div>
          <div class="wa-c-badge">저온 착즙 · 엽록소 최대 70%</div>
          <p class="wa-c-desc">말린 잎이 아니라, 어린 유기농 밀싹을 영양이 정점에 이르는 <b>18일 무렵</b>에 수확해 저온 공기 건조한 살아있는 '착즙'입니다. 엽록소, SOD 같은 살아있는 효소, 완전한 미네랄 스펙트럼이 풍부합니다.†</p>
        </div>
      </div>

      <!-- 유기농 아답토젠 -->
      <div class="wa-card">
        <div class="wa-c-img-wrap">
          <img src="${img.adaptogen}" alt="유기농 아답토젠 블렌드 — 영지·동충하초" loading="lazy">
          <div class="wa-c-img-overlay"></div>
        </div>
        <div class="wa-c-content">
          <span class="wa-c-tag"><b>C3</b> 제어와 연결</span>
          <div class="wa-c-name">유기농 아답토젠 블렌드</div>
          <div class="wa-c-badge">유기농 · 아답토젠 콤플렉스</div>
          <p class="wa-c-desc">아유르베다와 전통 한의학에서 수백 년간 존중받아온 유기농 아답토젠 — <b>영지·라이언스메인·동충하초·마카·인삼</b>·황기 — 몸이 스트레스에 무리 없이 균형 있게 대응하도록 돕기 위해 선택했습니다.</p>
        </div>
      </div>

      <!-- 코코넛워터 분말 -->
      <div class="wa-card">
        <div class="wa-c-img-wrap">
          <img src="${img.coconut}" alt="코코넛워터 분말 — 천연 전해질" loading="lazy">
          <div class="wa-c-img-overlay"></div>
        </div>
        <div class="wa-c-content">
          <span class="wa-c-tag"><b>C2</b> 보존과 영양</span>
          <div class="wa-c-name">코코넛워터 분말</div>
          <div class="wa-c-badge">천연 칼륨 6%</div>
          <p class="wa-c-desc">자연의 전해질을 그대로 담은 분말. <b>칼륨 6% 이상</b>에 마그네슘·미량 미네랄이 더해진 이례적으로 높은 미네랄 함량으로 수분과 세포 균형을 지원합니다. 자연적으로 알칼리성이라 현대 식단의 산성을 상쇄합니다.†</p>
        </div>
      </div>

    </div>

    <!-- 전달 기술 -->
    <div class="wa-delivery">
      <div class="wa-delivery-img">
        <img src="${img.bioperine}" alt="BioPerine® — 흑후추 흡수 기술" loading="lazy">
      </div>
      <div class="wa-delivery-body">
        <div class="wa-delivery-icon">↑</div>
        <div class="wa-delivery-text">
          <h4>전달 기술 — BioPerine<sup>®</sup></h4>
          <p>아무리 좋은 포뮬러도 흡수되지 않으면 소용없습니다. 특허받은 흑후추 추출물(피페린 ≥95%) <b>BioPerine®</b>은 우리의 흡수 레이어입니다 — <b>커큐민·비타민·미네랄</b>의 생체이용률을 높이는 것으로 임상 확인되어,† 모든 코너스톤 원료가 작용하는 세포까지 도달하게 합니다.</p>
        </div>
      </div>
    </div>

    <!-- 우리의 기준 : 무첨가 원칙 -->
    <div class="wa-standard">
      <span class="wa-eyebrow">우리의 기준</span>
      <p class="wa-standard-quote">"어머님이 드셔도 되는 <span>것만</span>." 그 한 줄이 무엇을 넣지 '않을지'를 결정합니다.</p>
      <p class="wa-standard-sub">프리미엄은 무엇을 넣느냐만큼 무엇을 거부하느냐의 문제입니다. 근거가 확실치 않은 곳에서, 우리는 편한 쪽이 아니라 신중한 쪽을 택합니다.</p>
      <div class="wa-no-grid">
        <div class="wa-no-item"><div class="wa-no-x">✕</div><div><h5>인공 향료 무첨가</h5><p>합성이나 곤충 유래가 아닌, 진짜 식물에서 향을 냅니다.</p></div></div>
        <div class="wa-no-item"><div class="wa-no-x">✕</div><div><h5>인공 감미료 무첨가</h5><p>합성 감미료는 절대 쓰지 않습니다. 아스파탐·수크랄로스·아세설팜K는 인체 연구에서 장내세균·혈당 조절 교란과 연결됩니다. 단맛이 필요할 땐 천연 나한과와 소량의 스테비아만 사용합니다.</p></div></div>
        <div class="wa-no-item"><div class="wa-no-x">✕</div><div><h5>인공 색소 무첨가</h5><p>색은 식품에서 와야 합니다. 우리는 강황·스피룰리나·클로렐라에서 얻습니다.</p></div></div>
        <div class="wa-no-item"><div class="wa-no-x">✕</div><div><h5>합성 부형제·유동화제 무첨가</h5><p>스테아린산 마그네슘도, 이산화규소도 없습니다. 제조는 쉽게 하지만 몸엔 아무 도움이 안 됩니다.</p></div></div>
        <div class="wa-no-item"><div class="wa-no-x">✕</div><div><h5>방부제 무첨가</h5><p>방부제 없이도 안정적이도록 설계하고 포장합니다.</p></div></div>
        <div class="wa-no-item"><div class="wa-no-x">✕</div><div><h5>GMO 무사용</h5><p>절대, 단 하나의 원료도. 몸에 들어가는 것은 자연이 만든 그대로여야 하며, 실험실에서 재설계된 것이 아니어야 합니다.</p></div></div>
      </div>
    </div>

    <p class="wa-foot">† 본 문구는 미국 식품의약국(FDA)의 평가를 받지 않았으며, 질병의 진단·치료·완화·예방을 목적으로 하지 않습니다. SuperVera7®, EpiCor®, S7®, Curcugen®, Morikol®, ProbioSEB Duo®, Creavitalis®, BioPerine®, RGen™은 각 소유자의 상표입니다.</p>

  </div>
</section>
`;

const IngredientsTechnology = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <div className="pt-24" dangerouslySetInnerHTML={{ __html: sectionHtml(IMG) }} />
    <Footer />
    <FloatingCTA />
  </div>
);

export default IngredientsTechnology;
