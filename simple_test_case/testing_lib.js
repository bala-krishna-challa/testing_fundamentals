const test = async (testName, fn) => {
  try {
    await fn();
    console.log(`✔️  ${testName}`);
  } catch (error) {
    console.error(`❌ ${testName}`);
    console.error(`\t ${error.message}`);
  }
};

const expect = (actual) => ({
  toBe: (expected) => {
    if (actual !== expected) {
      throw new Error(`${actual} is not equal to ${expected}`);
    }
  },
});

module.exports = { expect, test };
