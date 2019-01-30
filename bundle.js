!(function() {
  "use strict";
  function b(a) {
    return (b =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
        ? function(a) {
            return typeof a;
          }
        : function(a) {
            return a &&
              "function" == typeof Symbol &&
              a.constructor === Symbol &&
              a !== Symbol.prototype
              ? "symbol"
              : typeof a;
          })(a);
  }
  function c(c) {
    var e = b(c);
    return Array.isArray(c) ? a(c) : "object" === e && null !== c ? d(c) : c;
  }
  var a = function(a) {
      return a.map(c);
    },
    d = function(a) {
      var b,
        d = {};
      for (var e in a) d[((b = e), b)] = c(a[e]);
      return d;
    };
  console.log(
    c([
      {
        id: 1,
        na_me: "john",
        nest_ed: { id: 2, na_me: "carl" },
        arr: [1, 2, { id: 2, na_me: "carl" }]
      },
      { id: 2, name: "carl" },
      { id: 3, name: "sean" },
      { id: 4, name: "brad" },
      null,
      void 0,
      "a"
    ])
  );
})();
