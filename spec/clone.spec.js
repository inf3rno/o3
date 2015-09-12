var o3 = require("o3"),
    clone = o3.clone;

describe("core", function () {

    describe("clone", function () {

        it("calls the clone function of the subject with the arguments", function () {

            var a = {
                clone: function () {
                    return b;
                }
            };
            var b = {};
            expect(clone(a)).toBe(b);
        });

        it("calls shallowClone if no clone function set", function () {

            var subject = {a: 123};
            expect(subject.clone).not.toBeDefined();

            var instance = clone(subject);
            expect(instance.a).toBe(subject.a);
            expect(instance).not.toBe(subject);
        });

    });

});