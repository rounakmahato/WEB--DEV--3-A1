
function getTimestamp() {
  return new Date().toISOString();
}

function info(message) {
  console.log(`[INFO]  [${getTimestamp()}] ${message}`);
}

function success(message) {
  console.log(`[OK]    [${getTimestamp()}] ${message}`);
}

function error(message) {
  console.log(`[ERROR] [${getTimestamp()}] ${message}`);
}


module.exports = { info, success, error };
