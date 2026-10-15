const FtpDeploy = require("ftp-deploy");
const ftpDeploy = new FtpDeploy();
ftpDeploy.deploy({
  user: "wellnessoh", password: "Call2life2026><", host: "waoh.life", port: 21,
  localRoot: __dirname, remoteRoot: "/www/",
  include: ["fix-acemannan-title-v2.php"], deleteRemote: false, forcePasv: true,
}).then(() => console.log("✅ 업로드 완료 → https://waoh.life/fix-acemannan-title-v2.php"))
  .catch(e => console.error("❌", e));
