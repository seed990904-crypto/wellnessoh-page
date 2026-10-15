const FtpDeploy = require("ftp-deploy");
const ftpDeploy = new FtpDeploy();
ftpDeploy.deploy({
  user: "wellnessoh", password: "Call2life2026><", host: "waoh.life", port: 21,
  localRoot: __dirname, remoteRoot: "/www/",
  include: ["debug-acemannan-gap.php"], deleteRemote: false, forcePasv: true,
}).then(() => console.log("✅ 업로드 완료 → https://waoh.life/debug-acemannan-gap.php"))
  .catch(e => console.error("❌", e));
