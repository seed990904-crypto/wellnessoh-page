const FtpDeploy = require("ftp-deploy");
const ftpDeploy = new FtpDeploy();

const config = {
  user: "wellnessoh",
  password: "Call2life2026><",
  host: "waoh.life",
  port: 21,
  localRoot: __dirname + "/dist",
  remoteRoot: "/www/",
  include: ["*", "**/*", ".htaccess"],
  deleteRemote: false,
  forcePasv: true,
};

ftpDeploy
  .deploy(config)
  .then(() => console.log("✅ 배포 완료! https://waoh.life"))
  .catch((err) => console.error("❌ 배포 실패:", err));

ftpDeploy.on("uploaded", (data) => {
  process.stdout.write(`\r업로드 중... ${data.transferredFileCount}/${data.totalFilesCount}`);
});
