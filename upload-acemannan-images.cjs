// 에이스매넌 교육 페이지 이미지 13장 FTP 업로드
// 실행: node upload-acemannan-images.cjs
const ftp = require("promise-ftp");
const path = require("path");

const IMG_DIR = path.join(
  "/Users/mdcreator/Downloads",
  "직원전달_홈페이지3페이지_20261013 2",
  "1_에이스매넌_교육페이지",
  "img"
);
const REMOTE_DIR = "/www/wp-content/uploads/2026/10";

const images = [
  "acemannan-01-hero.jpg",
  "acemannan-02-composition.jpg",
  "acemannan-03-molecular-size.jpg",
  "acemannan-04-aloe-to-glycan.jpg",
  "acemannan-05-glycan-structure.jpg",
  "acemannan-06-cell-communication.jpg",
  "acemannan-07-glycan-functions.jpg",
  "acemannan-08-aloe-gel.jpg",
  "acemannan-09-aloe-leaves.jpg",
  "acemannan-10-chungbuk-fig2.jpg",
  "acemannan-11-chungbuk-fig1.jpg",
  "acemannan-12-mannose-receptor-infection.jpg",
  "acemannan-13-mannose-receptor-tumor.jpg",
];

async function upload() {
  const client = new ftp();
  console.log("FTP 연결 중...");
  await client.connect({
    host: "waoh.life",
    port: 21,
    user: "wellnessoh",
    password: "Call2life2026><",
    connTimeout: 30000,
  });
  console.log("연결 완료. 이미지 업로드 시작...\n");

  for (let i = 0; i < images.length; i++) {
    const img = images[i];
    const localPath = path.join(IMG_DIR, img);
    const remotePath = `${REMOTE_DIR}/${img}`;
    await client.put(localPath, remotePath);
    console.log(`✅ [${i + 1}/13] ${img}`);
  }

  await client.end();
  console.log("\n🎉 이미지 13장 업로드 완료!");
  console.log(
    "확인 URL: https://waoh.life/wp-content/uploads/2026/10/acemannan-01-hero.jpg"
  );
}

upload().catch((err) => {
  console.error("❌ 오류:", err.message || err);
  process.exit(1);
});
