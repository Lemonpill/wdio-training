// before, after, it, aftereach - mocha hooks

describe.skip("this is an example suite", () => {
  // Runs once before the first test in block
  before(() => {
    console.log("before running tests");
  });

  // Runs once before each test in block
  beforeEach(() => {
    console.log("before each test in block");
  });

  // Actual test cases
  it("performs valid login", () => {
    console.log("this performs a valid login");
  });

  it("attemts to perform an invalid login", () => {
    console.log("this attempts to perform an invalid login");
  });

  // Runs once after the first test in block
  after(() => {
    console.log("after running tests");
  });

  // Runs once after each test in block
  afterEach(() => {
    console.log("after each test in block");
  });
});
