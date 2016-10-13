module.exports = {
  testPath: './test',
  src: './src',
  output: './coverage/',
  files: ['test/**/*.test.ts'],
  ts: {
    configFileName: "tsconfig.test.json"
  }
};
