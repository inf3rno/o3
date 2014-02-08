var tests = [];
var testFilePattern = /^\/base\/test\/([^\/]+\/)*test-.+\.js$/;
for (var file in window.__karma__.files)
    if (testFilePattern.test(file))
        tests.push(file);

requirejs.config({
    baseUrl: '/base/src',
    config: {
        mixin: {
            extensions: []
        }
    },
    deps: tests,
    callback: window.__karma__.start
});