/**
 * Created by Zhengfeng.Yao on 16/9/30.
 */
// Add support for all files in the test directory
const testsContext = require.context('.', true, /\.test\.js$/);
testsContext.keys().forEach(testsContext);
