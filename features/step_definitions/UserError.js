var expect = require("expect.js"),
    sinon = require("sinon"),
    UserError = require("../../lib/UserError");

module.exports = function () {

    var anInstance;

    this.When("I create a new user error instance with custom properties", function (next) {
        anInstance = new UserError({
            message: "blah",
            a: 1,
            b: 2
        });
        next();
    });

    this.Then("this instance should contain the custom properties", function (next) {
        expect(anInstance).to.be.an(UserError);
        expect(anInstance.a).to.be(1);
        next();
    });

    this.When("I create a new user error instance", function (next) {
        var a = function a() {
            b();
        };
        var b = function b() {
            c();
        };
        var c = function c() {
            anInstance = new UserError("the problem");
        };
        a();
        next();
    });

    this.Then("the stack property should contain the type, the message and the stack trace of this instance", function (next) {
        expect(/UserError: the problem/.test(anInstance.stack)).to.be.ok();
        expect(/at c \(.*\.js:\d+:\d+\)/.test(anInstance.stack)).to.be.ok();
        expect(/at b \(.*\.js:\d+:\d+\)/.test(anInstance.stack)).to.be.ok();
        expect(/at a \(.*\.js:\d+:\d+\)/.test(anInstance.stack)).to.be.ok();
        next();
    })
};