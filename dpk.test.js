const { deterministicPartitionKey } = require("./dpk");

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });
});

describe("deterministicPartitionKey", () => {
  it("Returns the literal '10' when given '10' as input", () => {
    const trivialKey = deterministicPartitionKey({ partitionKey: "10"});
    expect(trivialKey).toBe("10");
  });
});

describe("deterministicPartitionKey", () => {
  it("Returns the some encrypted value when given '257' input", () => {
    const trivialKey = deterministicPartitionKey("257");
    expect(trivialKey).toBe('5aad29d46c17156f1d103c0d3b5375fbb357d528185954186dd8118ade025f624f37cfbbc1a290a02ae473ecabfca1a775569ff31fb241f17790c5c8ac73bead');
  });
});

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given partition key input as number 0", () => {
    const trivialKey = deterministicPartitionKey({ partitionKey: 0 });
    expect(trivialKey).toBe("e65a0cb83a95cae7eb0642da576cac881e397c0405c63577c977068f7892f69f1c315baa294124da2a67e0c486d340f9d357377f894d0c0fd850484f8984f2e7");
  });
});

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given partition key input as string 0", () => {
    const trivialKey = deterministicPartitionKey({ partitionKey: "0" });
    expect(trivialKey).toBe("0");
  });
});

describe("deterministicPartitionKey", () => {
  it("Returns the literal '10' when given partition key input as string 10", () => {
    const trivialKey = deterministicPartitionKey({ partitionKey: "10" });
    expect(trivialKey).toBe("10");
  });
});

describe("deterministicPartitionKey", () => {
  it("Returns the literal '10' when given partition key input as number 10", () => {
    const trivialKey = deterministicPartitionKey({ partitionKey: 10});
    expect(trivialKey).toBe("10");
  });
});

describe("deterministicPartitionKey", () => {
  it("Returns the literal '10' when given partition key input as string 257", () => {
    const trivialKey = deterministicPartitionKey({ partitionKey: "257"});
    expect(trivialKey).toBe("257");
  });
});

describe("deterministicPartitionKey", () => {
  it("Returns the literal '10' when given partition key input as number 257", () => {
    const trivialKey = deterministicPartitionKey({ partitionKey: 257});
    expect(trivialKey).toBe("257");
  });
});
