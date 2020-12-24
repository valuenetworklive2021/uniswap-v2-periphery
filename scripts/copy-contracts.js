const { execSync } = require('child_process');



main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });

async function main() {
  return new Promise((resolve, reject) => {
    const npx = execSync(
      'npx copyfiles -f ./artifacts/contracts/**/*.json ./build/contracts && del-cli ./build/*.dbg.json &&'+
      'npx copyfiles -f ./artifacts/contracts/examples/**/*.json ./build && del-cli ./build/*.dbg.json &&' +
      'npx copyfiles -f ./artifacts/contracts/interfaces/**/*.json ./build && del-cli ./build/*.dbg.json &&' +
      'npx copyfiles -f ./artifacts/contracts/interfaces/V1/**/*.json ./build && del-cli ./build/*.dbg.json &&' +
      'npx copyfiles -f ./artifacts/contracts/libraries/**/*.json ./build && del-cli ./build/*.dbg.json &&' +
      'npx copyfiles -f ./artifacts/contracts/test/**/*.json ./build && del-cli ./build/*.dbg.json'
    );
    resolve();
  });
}
