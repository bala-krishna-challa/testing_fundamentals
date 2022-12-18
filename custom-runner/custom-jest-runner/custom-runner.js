const JestWorker = require("jest-worker");
const { fail, pass } = require("create-jest-runner");

module.exports = async ({ testPath }) => {
  const worker = new JestWorker.Worker(require.resolve("./require-module"));
  worker.getStdout().pipe(process.stdout);
  worker.getStderr().pipe(process.stderr);
  process.stdout.write("\n");
  const start = +new Date();
  try {
    await worker.require(testPath);
    return pass({
      start,
      end: +new Date(),
      test: { path: testPath },
    });
  } catch (error) {
    return fail({
      start,
      end: +new Date(),
      test: {
        path: testPath,
        errorMessage: error.message,
        title: `Test failure: \n${error.message}`,
      },
    });
  }
};