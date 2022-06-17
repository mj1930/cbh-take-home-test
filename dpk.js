const crypto = require("crypto");

exports.deterministicPartitionKey = (event) => {
    const MAX_PARTITION_KEY_LENGTH = 256;
    let candidate = "0";
    if (event) {
      if (event.partitionKey) {
        candidate = event.partitionKey;
      } else {
        const data = JSON.stringify(event);
        candidate = crypto.createHash("sha3-512").update(data).digest("hex");
      }
    }
    if (typeof candidate !== "string") {
        candidate = JSON.stringify(candidate);
    }
    if (candidate.length > MAX_PARTITION_KEY_LENGTH) {
        candidate = encryptData(candidate);
    }
    return candidate;
};

function encryptData(data) {
    return crypto.createHash("sha3-512").update(data).digest("hex");
}