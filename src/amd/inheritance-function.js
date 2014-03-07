define(["module", "inheritance", "inheritance-extension"], function (module, wrap, Extension) {

    var functionExtension = new Extension({
        target: Function,
        source: {
            mixin: function () {
                var descendant = wrap(this);
                descendant.mixin.apply(descendant, arguments);
                return this;
            },
            extend: function () {
                var ancestor = wrap(this);
                var descendant = ancestor.extend.apply(ancestor, arguments);
                return descendant.toFunction();
            },
            hasAncestors: function () {
                var descendant = wrap(this);
                return descendant.hasAncestors.apply(descendant, arguments);
            },
            hasDescendants: function () {
                var ancestor = wrap(this);
                return ancestor.hasDescendants.apply(ancestor, arguments);
            },
            hasInstance: function (instance) {
                var ancestor = wrap(this);
                return ancestor.hasInstance(instance);
            },
            toObject: function () {
                return this.prototype;
            }
        }
    });

    functionExtension.config(module.config());
    return functionExtension;
});