const FtpDeploy = require("ftp-deploy");
const ftpDeploy = new FtpDeploy();

const config = {
  user: "wellnessoh",
  password: "Call2life2026><",
  host: "waoh.life",
  port: 21,
  localRoot: __dirname + "/dist",
  remoteRoot: "/www/",
  include: ["index.html", "assets/*", "super-immune-promo.mp4"],
  exclude: [],
  deleteRemote: false,
  forcePasv: true,
};

console.log("🚀 SPA 배포 시작...");

ftpDeploy.on("uploaded", (data) => {
  console.log(`✅ 업로드: ${data.filename} (${data.transferredFileCount}/${data.totalFilesCount})`);
});

ftpDeploy
  .deploy(config)
  .then(() => console.log("\n✅ SPA 배포 완료!"))
  .catch((err) => console.error("❌ 배포 실패:", err));
