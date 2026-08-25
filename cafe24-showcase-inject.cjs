const Client = require('ssh2-sftp-client');
const sftp = new Client();

sftp.connect({
  host: 'ecimg-ftp-c01.cafe24img.com',
  port: 8009,
  username: 'call2life2026',
  password: 'call2life2026!!'
}).then(async () => {
  let js = (await sftp.get('/base/layout/basic/js/main.js')).toString('utf8');

  // 기존 WA 주입 제거
  const marker = '\n/* WA: 홈 제품 쇼케이스 주입 */';
  const idx = js.indexOf(marker);
  if (idx !== -1) { js = js.slice(0, idx); console.log('기존 WA 주입 제거'); }

  const injection = `
/* WA: 홈 제품 쇼케이스 주입 */
jQuery(document).ready(function ($) {
  if (window.location.pathname !== '/' && window.location.pathname !== '/index.html') return;
  if ($('.wa-hp-showcase').length) return;

  $('body').addClass('wa-hp');

  var products = [
    {
      id: 'gclean',
      href: '/product/detail.html?product_no=11',
      img: '/SkinImg/img/prd_supergclean.png',
      alt: '슈퍼지클린',
      tag: 'BEST',
      eng: 'SUPER G.CLEAN',
      name: '슈퍼지클린',
      bullets: ['900일 자연배양 생효소', '장 클렌징 & 노폐물 배출', '소화 흡수율 극대화'],
      price: '27,000원',
      btn: '구매하기',
      btnCls: '',
      soldOut: false
    },
    {
      id: 'bettersalt',
      href: null,
      img: '/SkinImg/img/prd_bettersalt.jpg',
      alt: '베러솔트',
      tag: 'MINERAL',
      eng: 'BETTER SALT',
      name: '베러솔트',
      bullets: ['40종 활성 미네랄 함유', '알칼리 이온 미네랄 소금', '세포 전해질 균형 복원'],
      price: '88,000원',
      btn: '품절',
      btnCls: 'off',
      soldOut: true
    },
    {
      id: 'immune',
      href: null,
      img: '/SkinImg/img/main_banner03_pc.jpg',
      alt: '슈퍼이뮨',
      tag: 'IMMUNE',
      eng: 'SUPER IMMUNE',
      name: '슈퍼이뮨',
      bullets: ['당사슬(세포 통신망) 리셋', '면역 조절 서포트', '세포 간 신호 회복'],
      price: '160,000원',
      btn: '품절',
      btnCls: 'off',
      soldOut: true
    },
    {
      id: 'superzyme',
      href: null,
      img: '/SkinImg/img/hero_superzyme.jpg',
      alt: '슈퍼자임',
      tag: 'ENZYME',
      eng: 'SUPER ZYME',
      name: '슈퍼자임',
      bullets: ['오토파지 촉진 효소', '17가지 천연 초본 발효', '세포 자가 정화 활성화'],
      price: '75,000원',
      btn: '품절',
      btnCls: 'off',
      soldOut: true
    },
    {
      id: 'supergreens',
      href: null,
      img: '/SkinImg/img/prd_supergreens.jpg',
      alt: '슈퍼그린',
      tag: 'GREENS',
      eng: 'SUPER GREENS',
      name: '슈퍼그린',
      bullets: ['유기농 엽록소 블렌드', '세포 디톡스 & 항산화', '알칼리 체질 형성 지원'],
      price: '150,000원',
      btn: '품절',
      btnCls: 'off',
      soldOut: true
    }
  ];

  function card(p) {
    var tagStyle = p.tag === 'BEST'
      ? ' style="color:#fff;background:rgba(46,204,113,0.85);border-color:#2ecc71;"'
      : '';
    var bullets = p.bullets.map(function(b) { return '<li>' + b + '</li>'; }).join('');
    var inner = ''
      + '<div class="wa-hp-card-img">'
      +   '<span class="wa-hp-card-tag"' + tagStyle + '>' + p.tag + '</span>'
      +   '<img src="' + p.img + '" alt="' + p.alt + '" data-product="' + p.id + '" loading="lazy">'
      + '</div>'
      + '<div class="wa-hp-card-body">'
      +   '<div class="wa-hp-card-eng">' + p.eng + '</div>'
      +   '<div class="wa-hp-card-name">' + p.name + '</div>'
      +   '<ul class="wa-hp-card-bullets">' + bullets + '</ul>'
      +   '<div class="wa-hp-card-ft">'
      +     '<span class="wa-hp-card-price">' + p.price + '</span>'
      +     '<span class="wa-hp-card-btn ' + p.btnCls + '">' + p.btn + '</span>'
      +   '</div>'
      + '</div>';
    var cls = 'wa-hp-card' + (p.soldOut ? ' sold-out' : '');
    return p.href
      ? '<a href="' + p.href + '" class="' + cls + '">' + inner + '</a>'
      : '<div class="' + cls + '">' + inner + '</div>';
  }

  var cards = products.map(card).join('');
  var catUrl = '/category/%EB%B0%94%EC%9D%B4%EC%98%A4%ED%95%B4%ED%82%B9-%EC%A0%9C%ED%92%88/24/';

  var html = ''
    + '<section class="wa-hp-showcase">'
    +   '<div class="wa-hp-showcase-hd">'
    +     '<span class="wa-hp-showcase-eyebrow">BIOHACKING TOOLS</span>'
    +     '<h2 class="wa-hp-showcase-title">바이오해킹 제품</h2>'
    +     '<p class="wa-hp-showcase-sub">세포 최적화를 위한 웰니스 아키텍트 솔루션</p>'
    +   '</div>'
    +   '<div class="wa-hp-showcase-grid">' + cards + '</div>'
    +   '<div class="wa-hp-showcase-more"><a href="' + catUrl + '">전체 제품 보기 →</a></div>'
    + '</section>';

  // 갤러리 앞(또는 컨텐츠 최상단)에 삽입
  var $anchor = $('#container #contents > .wa-hp-hero, #container #contents > .main_image_text_gallery, #container #contents > section').first();
  if ($anchor.length) {
    $anchor.before(html);
  } else {
    $('#contents').prepend(html);
  }
});
`;

  const final = js + injection;
  await sftp.put(Buffer.from(final, 'utf8'), '/base/layout/basic/js/main.js');
  console.log('[OK] main.js 업로드 완료. 길이:', final.length);
  await sftp.end();
}).catch(e => console.error('ERR:', e.message));
