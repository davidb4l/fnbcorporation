/* This is a GULP generated file, DO NOT edit directly. */ !(function (e) {
  var t = {};
  function a(r) {
    if (t[r]) return t[r].exports;
    var i = (t[r] = { i: r, l: !1, exports: {} });
    return e[r].call(i.exports, i, i.exports, a), (i.l = !0), i.exports;
  }
  (a.m = e),
    (a.c = t),
    (a.d = function (e, t, r) {
      a.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
    }),
    (a.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (a.t = function (e, t) {
      if ((1 & t && (e = a(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var r = Object.create(null);
      if (
        (a.r(r),
        Object.defineProperty(r, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var i in e)
          a.d(
            r,
            i,
            function (t) {
              return e[t];
            }.bind(null, i)
          );
      return r;
    }),
    (a.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return a.d(t, "a", t), t;
    }),
    (a.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (a.p = ""),
    a((a.s = 17));
})([
  function (e, t, a) {
    "use strict";
    function r(e, t) {
      for (var a = 0; a < t.length; a++) {
        var r = t[a];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    function i(e, t, a) {
      return (
        t in e
          ? Object.defineProperty(e, t, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = a),
        e
      );
    }
    var n = (function () {
      function e() {
        !(function (e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        })(this, e);
      }
      var t, a;
      return (
        (t = e),
        (a = [
          {
            key: "querySelector",
            value: function (e) {
              var t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : document;
              return null == t ? [] : [].slice.call(t.querySelectorAll(e));
            },
          },
          {
            key: "isIE11",
            value: function () {
              return !!window.MSInputMethodContext && !!document.documentMode;
            },
          },
          {
            key: "lastFocusable",
            value: function (t) {
              return e.querySelector(e.focusable, t).slice(-1)[0];
            },
          },
          {
            key: "addClosestPolyFill",
            value: function () {
              Element.prototype.matches ||
                (Element.prototype.matches =
                  Element.prototype.msMatchesSelector ||
                  Element.prototype.webkitMatchesSelector),
                Element.prototype.closest ||
                  (Element.prototype.closest = function (e) {
                    var t = this;
                    do {
                      if (Element.prototype.matches.call(t, e)) return t;
                      t = t.parentElement || t.parentNode;
                    } while (null !== t && 1 === t.nodeType);
                    return null;
                  });
            },
          },
          {
            key: "slugify",
            value: function (e) {
              return e
                .toString()
                .toLowerCase()
                .replace(/\s+/g, "-")
                .replace(/[^\w\-]+/g, "")
                .replace(/\-\-+/g, "-")
                .replace(/^-+/, "")
                .replace(/-+$/, "");
            },
          },
          {
            key: "firstFocusable",
            value: function (t) {
              return e.querySelector(e.focusable, t)[0];
            },
          },
          {
            key: "getFormData",
            value: function (t) {
              var a = [];
              return (
                e
                  .querySelector("button, input, textarea", t)
                  .forEach(function (e) {
                    var t = e.getAttribute("name");
                    ("" !== t && null != t) || (t = e.getAttribute("id")),
                      (a[t] = {
                        value: e.value,
                        required: e.hasAttribute("required"),
                        el: e,
                      });
                  }),
                a
              );
            },
          },
          {
            key: "parent",
            value: function (e, t) {
              for (var a = !1, r = e; !a; ) {
                if (!r) return null;
                (r = r.parentNode) &&
                  r.classList &&
                  r.classList.contains(t) &&
                  (a = !0);
              }
              return r;
            },
          },
          {
            key: "isJson",
            value: function (e) {
              try {
                JSON.parse(e);
              } catch (e) {
                return !1;
              }
              return !0;
            },
          },
          {
            key: "index",
            value: function (t) {
              var a = null;
              return (
                e.getSiblings(t, !0).forEach(function (e, r) {
                  (e !== t &&
                    e.innerHTML.toString() !== t.innerHTML.toString()) ||
                    (a = r);
                }),
                a
              );
            },
          },
          {
            key: "getSiblings",
            value: function (e) {
              for (
                var t =
                    arguments.length > 1 &&
                    void 0 !== arguments[1] &&
                    arguments[1],
                  a =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : null,
                  r = [],
                  i = e.parentNode.firstChild;
                i;

              )
                1 !== i.nodeType ||
                  (!t && i === e) ||
                  ((null === a || i.classList.contains(a)) && r.push(i)),
                  (i = i.nextSibling ? i.nextSibling : null);
              return r;
            },
          },
          {
            key: "scrollTo",
            value: function (t, a, r) {
              if (!(r <= 0)) {
                var i = ((a - t.scrollY) / r) * 10;
                setTimeout(function () {
                  window.scrollTo(0, t.scrollY + i),
                    t.scrollY !== a && e.scrollTo(t, a, r - 10);
                }, 5);
              }
            },
          },
        ]),
        null && r(t.prototype, null),
        a && r(t, a),
        e
      );
    })();
    i(n, "easings", {
      linear: function (e) {
        return e;
      },
      easeInQuad: function (e) {
        return e * e;
      },
      easeOutQuad: function (e) {
        return e * (2 - e);
      },
      easeInOutQuad: function (e) {
        return e < 0.5 ? 2 * e * e : (4 - 2 * e) * e - 1;
      },
      easeInCubic: function (e) {
        return e * e * e;
      },
      easeOutCubic: function (e) {
        return --e * e * e + 1;
      },
      easeInOutCubic: function (e) {
        return e < 0.5
          ? 4 * e * e * e
          : (e - 1) * (2 * e - 2) * (2 * e - 2) + 1;
      },
      easeInQuart: function (e) {
        return e * e * e * e;
      },
      easeOutQuart: function (e) {
        return 1 - --e * e * e * e;
      },
      easeInOutQuart: function (e) {
        return e < 0.5 ? 8 * e * e * e * e : 1 - 8 * --e * e * e * e;
      },
      easeInQuint: function (e) {
        return e * e * e * e * e;
      },
      easeOutQuint: function (e) {
        return 1 + --e * e * e * e * e;
      },
      easeInOutQuint: function (e) {
        return e < 0.5 ? 16 * e * e * e * e * e : 1 + 16 * --e * e * e * e * e;
      },
    }),
      i(
        n,
        "focusable",
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      ),
      (t.a = n);
  },
  ,
  ,
  function (e, t) {
    var a;
    a = (function () {
      return this;
    })();
    try {
      a = a || new Function("return this")();
    } catch (e) {
      "object" == typeof window && (a = window);
    }
    e.exports = a;
  },
  ,
  function (e, t, a) {
    "use strict";
    (function (e, a) {
      function r(e, t) {
        for (var a = 0; a < t.length; a++) {
          var r = t[a];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      var i = void 0 !== e && "[object global]" === {}.toString.call(e);
      function n(e, t) {
        return 0 === e.indexOf(t.toLowerCase())
          ? e
          : ""
              .concat(t.toLowerCase())
              .concat(e.substr(0, 1).toUpperCase())
              .concat(e.substr(1));
      }
      function s(e) {
        return /^(https?:)?\/\/((player|www)\.)?vimeo\.com(?=$|\/)/.test(e);
      }
      function o() {
        var e,
          t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          a = t.id,
          r = t.url,
          i = a || r;
        if (!i)
          throw new Error(
            "An id or url must be passed, either in an options object or as a data-vimeo-id or data-vimeo-url attribute."
          );
        if (
          ((e = i), !isNaN(parseFloat(e)) && isFinite(e) && Math.floor(e) == e)
        )
          return "https://vimeo.com/".concat(i);
        if (s(i)) return i.replace("http:", "https:");
        if (a) throw new TypeError("“".concat(a, "” is not a valid video id."));
        throw new TypeError("“".concat(i, "” is not a vimeo.com url."));
      }
      var l = void 0 !== Array.prototype.indexOf,
        u = "undefined" != typeof window && void 0 !== window.postMessage;
      if (!(i || (l && u)))
        throw new Error(
          "Sorry, the Vimeo Player API is not available in this browser."
        );
      var d =
        "undefined" != typeof globalThis
          ? globalThis
          : "undefined" != typeof window
          ? window
          : void 0 !== e
          ? e
          : "undefined" != typeof self
          ? self
          : {};
      !(function (e) {
        if (!e.WeakMap) {
          var t = Object.prototype.hasOwnProperty,
            a = function (e, t, a) {
              Object.defineProperty
                ? Object.defineProperty(e, t, {
                    configurable: !0,
                    writable: !0,
                    value: a,
                  })
                : (e[t] = a);
            };
          e.WeakMap = (function () {
            function e() {
              if (void 0 === this)
                throw new TypeError("Constructor WeakMap requires 'new'");
              if (
                (a(this, "_id", "_WeakMap_" + n() + "." + n()),
                arguments.length > 0)
              )
                throw new TypeError("WeakMap iterable is not supported");
            }
            function i(e, a) {
              if (!r(e) || !t.call(e, "_id"))
                throw new TypeError(
                  a + " method called on incompatible receiver " + typeof e
                );
            }
            function n() {
              return Math.random().toString().substring(2);
            }
            return (
              a(e.prototype, "delete", function (e) {
                if ((i(this, "delete"), !r(e))) return !1;
                var t = e[this._id];
                return !(!t || t[0] !== e || (delete e[this._id], 0));
              }),
              a(e.prototype, "get", function (e) {
                if ((i(this, "get"), r(e))) {
                  var t = e[this._id];
                  return t && t[0] === e ? t[1] : void 0;
                }
              }),
              a(e.prototype, "has", function (e) {
                if ((i(this, "has"), !r(e))) return !1;
                var t = e[this._id];
                return !(!t || t[0] !== e);
              }),
              a(e.prototype, "set", function (e, t) {
                if ((i(this, "set"), !r(e)))
                  throw new TypeError("Invalid value used as weak map key");
                var n = e[this._id];
                return n && n[0] === e
                  ? ((n[1] = t), this)
                  : (a(e, this._id, [e, t]), this);
              }),
              a(e, "_polyfill", !0),
              e
            );
          })();
        }
        function r(e) {
          return Object(e) === e;
        }
      })(
        "undefined" != typeof self
          ? self
          : "undefined" != typeof window
          ? window
          : d
      );
      var p,
        c =
          ((function (e) {
            var t, r, i;
            (i = function () {
              var e,
                t,
                r,
                i = Object.prototype.toString,
                n =
                  void 0 !== a
                    ? function (e) {
                        return a(e);
                      }
                    : setTimeout;
              try {
                Object.defineProperty({}, "x", {}),
                  (e = function (e, t, a, r) {
                    return Object.defineProperty(e, t, {
                      value: a,
                      writable: !0,
                      configurable: !1 !== r,
                    });
                  });
              } catch (t) {
                e = function (e, t, a) {
                  return (e[t] = a), e;
                };
              }
              function s(e, a) {
                r.add(e, a), t || (t = n(r.drain));
              }
              function o(e) {
                var t,
                  a = typeof e;
                return (
                  null == e ||
                    ("object" != a && "function" != a) ||
                    (t = e.then),
                  "function" == typeof t && t
                );
              }
              function l() {
                for (var e = 0; e < this.chain.length; e++)
                  u(
                    this,
                    1 === this.state
                      ? this.chain[e].success
                      : this.chain[e].failure,
                    this.chain[e]
                  );
                this.chain.length = 0;
              }
              function u(e, t, a) {
                var r, i;
                try {
                  !1 === t
                    ? a.reject(e.msg)
                    : (r = !0 === t ? e.msg : t.call(void 0, e.msg)) ===
                      a.promise
                    ? a.reject(TypeError("Promise-chain cycle"))
                    : (i = o(r))
                    ? i.call(r, a.resolve, a.reject)
                    : a.resolve(r);
                } catch (e) {
                  a.reject(e);
                }
              }
              function d(e) {
                var t = this;
                t.triggered ||
                  ((t.triggered = !0),
                  t.def && (t = t.def),
                  (t.msg = e),
                  (t.state = 2),
                  t.chain.length > 0 && s(l, t));
              }
              function p(e, t, a, r) {
                for (var i = 0; i < t.length; i++)
                  !(function (i) {
                    e.resolve(t[i]).then(function (e) {
                      a(i, e);
                    }, r);
                  })(i);
              }
              function c(e) {
                (this.def = e), (this.triggered = !1);
              }
              function m(e) {
                if ("function" != typeof e) throw TypeError("Not a function");
                if (0 !== this.__NPO__) throw TypeError("Not a promise");
                this.__NPO__ = 1;
                var t = new (function (e) {
                  (this.promise = e),
                    (this.state = 0),
                    (this.triggered = !1),
                    (this.chain = []),
                    (this.msg = void 0);
                })(this);
                (this.then = function (e, a) {
                  var r = {
                    success: "function" != typeof e || e,
                    failure: "function" == typeof a && a,
                  };
                  return (
                    (r.promise = new this.constructor(function (e, t) {
                      if ("function" != typeof e || "function" != typeof t)
                        throw TypeError("Not a function");
                      (r.resolve = e), (r.reject = t);
                    })),
                    t.chain.push(r),
                    0 !== t.state && s(l, t),
                    r.promise
                  );
                }),
                  (this.catch = function (e) {
                    return this.then(void 0, e);
                  });
                try {
                  e.call(
                    void 0,
                    function (e) {
                      (function e(t) {
                        var a,
                          r = this;
                        if (!r.triggered) {
                          (r.triggered = !0), r.def && (r = r.def);
                          try {
                            (a = o(t))
                              ? s(function () {
                                  var i = new c(r);
                                  try {
                                    a.call(
                                      t,
                                      function () {
                                        e.apply(i, arguments);
                                      },
                                      function () {
                                        d.apply(i, arguments);
                                      }
                                    );
                                  } catch (e) {
                                    d.call(i, e);
                                  }
                                })
                              : ((r.msg = t),
                                (r.state = 1),
                                r.chain.length > 0 && s(l, r));
                          } catch (e) {
                            d.call(new c(r), e);
                          }
                        }
                      }).call(t, e);
                    },
                    function (e) {
                      d.call(t, e);
                    }
                  );
                } catch (e) {
                  d.call(t, e);
                }
              }
              r = (function () {
                var e, a, r;
                return {
                  add: function (t, i) {
                    (r = new (function (e, t) {
                      (this.fn = e), (this.self = t), (this.next = void 0);
                    })(t, i)),
                      a ? (a.next = r) : (e = r),
                      (a = r),
                      (r = void 0);
                  },
                  drain: function () {
                    var r = e;
                    for (e = a = t = void 0; r; )
                      r.fn.call(r.self), (r = r.next);
                  },
                };
              })();
              var h = e({}, "constructor", m, !1);
              return (
                (m.prototype = h),
                e(h, "__NPO__", 0, !1),
                e(m, "resolve", function (e) {
                  return e && "object" == typeof e && 1 === e.__NPO__
                    ? e
                    : new this(function (t, a) {
                        if ("function" != typeof t || "function" != typeof a)
                          throw TypeError("Not a function");
                        t(e);
                      });
                }),
                e(m, "reject", function (e) {
                  return new this(function (t, a) {
                    if ("function" != typeof t || "function" != typeof a)
                      throw TypeError("Not a function");
                    a(e);
                  });
                }),
                e(m, "all", function (e) {
                  var t = this;
                  return "[object Array]" != i.call(e)
                    ? t.reject(TypeError("Not an array"))
                    : 0 === e.length
                    ? t.resolve([])
                    : new t(function (a, r) {
                        if ("function" != typeof a || "function" != typeof r)
                          throw TypeError("Not a function");
                        var i = e.length,
                          n = Array(i),
                          s = 0;
                        p(
                          t,
                          e,
                          function (e, t) {
                            (n[e] = t), ++s === i && a(n);
                          },
                          r
                        );
                      });
                }),
                e(m, "race", function (e) {
                  var t = this;
                  return "[object Array]" != i.call(e)
                    ? t.reject(TypeError("Not an array"))
                    : new t(function (a, r) {
                        if ("function" != typeof a || "function" != typeof r)
                          throw TypeError("Not a function");
                        p(
                          t,
                          e,
                          function (e, t) {
                            a(t);
                          },
                          r
                        );
                      });
                }),
                m
              );
            }),
              ((r = d)[(t = "Promise")] = r[t] || i()),
              e.exports && (e.exports = r[t]);
          })((p = { exports: {} })),
          p.exports),
        m = new WeakMap();
      function h(e, t, a) {
        var r = m.get(e.element) || {};
        t in r || (r[t] = []), r[t].push(a), m.set(e.element, r);
      }
      function f(e, t) {
        return (m.get(e.element) || {})[t] || [];
      }
      function g(e, t, a) {
        var r = m.get(e.element) || {};
        if (!r[t]) return !0;
        if (!a) return (r[t] = []), m.set(e.element, r), !0;
        var i = r[t].indexOf(a);
        return (
          -1 !== i && r[t].splice(i, 1),
          m.set(e.element, r),
          r[t] && 0 === r[t].length
        );
      }
      var v = [
        "autopause",
        "autoplay",
        "background",
        "byline",
        "color",
        "controls",
        "dnt",
        "height",
        "id",
        "loop",
        "maxheight",
        "maxwidth",
        "muted",
        "playsinline",
        "portrait",
        "responsive",
        "speed",
        "texttrack",
        "title",
        "transparent",
        "url",
        "width",
      ];
      function w(e) {
        var t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return v.reduce(function (t, a) {
          var r = e.getAttribute("data-vimeo-".concat(a));
          return (r || "" === r) && (t[a] = "" === r ? 1 : r), t;
        }, t);
      }
      function y(e, t) {
        var a = e.html;
        if (!t) throw new TypeError("An element must be provided");
        if (null !== t.getAttribute("data-vimeo-initialized"))
          return t.querySelector("iframe");
        var r = document.createElement("div");
        return (
          (r.innerHTML = a),
          t.appendChild(r.firstChild),
          t.setAttribute("data-vimeo-initialized", "true"),
          t.querySelector("iframe")
        );
      }
      function b(e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          a = arguments.length > 2 ? arguments[2] : void 0;
        return new Promise(function (r, i) {
          if (!s(e))
            throw new TypeError("“".concat(e, "” is not a vimeo.com url."));
          var n = "https://vimeo.com/api/oembed.json?url=".concat(
            encodeURIComponent(e)
          );
          for (var o in t)
            t.hasOwnProperty(o) &&
              (n += "&".concat(o, "=").concat(encodeURIComponent(t[o])));
          var l =
            "XDomainRequest" in window
              ? new XDomainRequest()
              : new XMLHttpRequest();
          l.open("GET", n, !0),
            (l.onload = function () {
              if (404 !== l.status)
                if (403 !== l.status)
                  try {
                    var t = JSON.parse(l.responseText);
                    if (403 === t.domain_status_code)
                      return (
                        y(t, a),
                        void i(new Error("“".concat(e, "” is not embeddable.")))
                      );
                    r(t);
                  } catch (e) {
                    i(e);
                  }
                else i(new Error("“".concat(e, "” is not embeddable.")));
              else i(new Error("“".concat(e, "” was not found.")));
            }),
            (l.onerror = function () {
              var e = l.status ? " (".concat(l.status, ")") : "";
              i(
                new Error(
                  "There was an error fetching the embed code from Vimeo".concat(
                    e,
                    "."
                  )
                )
              );
            }),
            l.send();
        });
      }
      function x(e) {
        if ("string" == typeof e)
          try {
            e = JSON.parse(e);
          } catch (e) {
            return {};
          }
        return e;
      }
      function T(e, t, a) {
        if (e.element.contentWindow && e.element.contentWindow.postMessage) {
          var r = { method: t };
          void 0 !== a && (r.value = a);
          var i = parseFloat(
            navigator.userAgent.toLowerCase().replace(/^.*msie (\d+).*$/, "$1")
          );
          i >= 8 && i < 10 && (r = JSON.stringify(r)),
            e.element.contentWindow.postMessage(r, e.origin);
        }
      }
      function S(e, t) {
        var a,
          r = [];
        if ((t = x(t)).event)
          "error" === t.event &&
            f(e, t.data.method).forEach(function (a) {
              var r = new Error(t.data.message);
              (r.name = t.data.name), a.reject(r), g(e, t.data.method, a);
            }),
            (r = f(e, "event:".concat(t.event))),
            (a = t.data);
        else if (t.method) {
          var i = (function (e, t) {
            var a = f(e, t);
            if (a.length < 1) return !1;
            var r = a.shift();
            return g(e, t, r), r;
          })(e, t.method);
          i && (r.push(i), (a = t.value));
        }
        r.forEach(function (t) {
          try {
            if ("function" == typeof t) return void t.call(e, a);
            t.resolve(a);
          } catch (e) {}
        });
      }
      var C = new WeakMap(),
        E = new WeakMap(),
        M = {},
        z = (function () {
          function e(t) {
            var a = this,
              r =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {};
            if (
              ((function (e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function");
              })(this, e),
              window.jQuery &&
                t instanceof jQuery &&
                (t.length > 1 && window.console && console.warn, (t = t[0])),
              "undefined" != typeof document &&
                "string" == typeof t &&
                (t = document.getElementById(t)),
              !(function (e) {
                return Boolean(
                  e &&
                    1 === e.nodeType &&
                    "nodeName" in e &&
                    e.ownerDocument &&
                    e.ownerDocument.defaultView
                );
              })(t))
            )
              throw new TypeError(
                "You must pass either a valid element or a valid id."
              );
            if ("IFRAME" !== t.nodeName) {
              var i = t.querySelector("iframe");
              i && (t = i);
            }
            if ("IFRAME" === t.nodeName && !s(t.getAttribute("src") || ""))
              throw new Error("The player element passed isn’t a Vimeo embed.");
            if (C.has(t)) return C.get(t);
            (this._window = t.ownerDocument.defaultView),
              (this.element = t),
              (this.origin = "*");
            var n = new c(function (e, i) {
              if (
                ((a._onMessage = function (t) {
                  if (s(t.origin) && a.element.contentWindow === t.source) {
                    "*" === a.origin && (a.origin = t.origin);
                    var r = x(t.data);
                    if (
                      r &&
                      "error" === r.event &&
                      r.data &&
                      "ready" === r.data.method
                    ) {
                      var n = new Error(r.data.message);
                      return (n.name = r.data.name), void i(n);
                    }
                    var o = r && "ready" === r.event,
                      l = r && "ping" === r.method;
                    if (o || l)
                      return (
                        a.element.setAttribute("data-ready", "true"), void e()
                      );
                    S(a, r);
                  }
                }),
                a._window.addEventListener("message", a._onMessage),
                "IFRAME" !== a.element.nodeName)
              ) {
                var n = w(t, r);
                b(o(n), n, t)
                  .then(function (e) {
                    var r,
                      i,
                      n,
                      s = y(e, t);
                    return (
                      (a.element = s),
                      (a._originalElement = t),
                      (r = t),
                      (i = s),
                      (n = m.get(r)),
                      m.set(i, n),
                      m.delete(r),
                      C.set(a.element, a),
                      e
                    );
                  })
                  .catch(i);
              }
            });
            if (
              (E.set(this, n),
              C.set(this.element, this),
              "IFRAME" === this.element.nodeName && T(this, "ping"),
              M.isEnabled)
            ) {
              var l = function () {
                return M.exit();
              };
              M.on("fullscreenchange", function () {
                M.isFullscreen
                  ? h(a, "event:exitFullscreen", l)
                  : g(a, "event:exitFullscreen", l),
                  a.ready().then(function () {
                    T(a, "fullscreenchange", M.isFullscreen);
                  });
              });
            }
            return this;
          }
          var t, a;
          return (
            (t = e),
            (a = [
              {
                key: "callMethod",
                value: function (e) {
                  var t = this,
                    a =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : {};
                  return new c(function (r, i) {
                    return t
                      .ready()
                      .then(function () {
                        h(t, e, { resolve: r, reject: i }), T(t, e, a);
                      })
                      .catch(i);
                  });
                },
              },
              {
                key: "get",
                value: function (e) {
                  var t = this;
                  return new c(function (a, r) {
                    return (
                      (e = n(e, "get")),
                      t
                        .ready()
                        .then(function () {
                          h(t, e, { resolve: a, reject: r }), T(t, e);
                        })
                        .catch(r)
                    );
                  });
                },
              },
              {
                key: "set",
                value: function (e, t) {
                  var a = this;
                  return new c(function (r, i) {
                    if (((e = n(e, "set")), null == t))
                      throw new TypeError("There must be a value to set.");
                    return a
                      .ready()
                      .then(function () {
                        h(a, e, { resolve: r, reject: i }), T(a, e, t);
                      })
                      .catch(i);
                  });
                },
              },
              {
                key: "on",
                value: function (e, t) {
                  if (!e) throw new TypeError("You must pass an event name.");
                  if (!t)
                    throw new TypeError("You must pass a callback function.");
                  if ("function" != typeof t)
                    throw new TypeError("The callback must be a function.");
                  0 === f(this, "event:".concat(e)).length &&
                    this.callMethod("addEventListener", e).catch(
                      function () {}
                    ),
                    h(this, "event:".concat(e), t);
                },
              },
              {
                key: "off",
                value: function (e, t) {
                  if (!e) throw new TypeError("You must pass an event name.");
                  if (t && "function" != typeof t)
                    throw new TypeError("The callback must be a function.");
                  g(this, "event:".concat(e), t) &&
                    this.callMethod("removeEventListener", e).catch(function (
                      e
                    ) {});
                },
              },
              {
                key: "loadVideo",
                value: function (e) {
                  return this.callMethod("loadVideo", e);
                },
              },
              {
                key: "ready",
                value: function () {
                  var e =
                    E.get(this) ||
                    new c(function (e, t) {
                      t(new Error("Unknown player. Probably unloaded."));
                    });
                  return c.resolve(e);
                },
              },
              {
                key: "addCuePoint",
                value: function (e) {
                  var t =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : {};
                  return this.callMethod("addCuePoint", { time: e, data: t });
                },
              },
              {
                key: "removeCuePoint",
                value: function (e) {
                  return this.callMethod("removeCuePoint", e);
                },
              },
              {
                key: "enableTextTrack",
                value: function (e, t) {
                  if (!e) throw new TypeError("You must pass a language.");
                  return this.callMethod("enableTextTrack", {
                    language: e,
                    kind: t,
                  });
                },
              },
              {
                key: "disableTextTrack",
                value: function () {
                  return this.callMethod("disableTextTrack");
                },
              },
              {
                key: "pause",
                value: function () {
                  return this.callMethod("pause");
                },
              },
              {
                key: "play",
                value: function () {
                  return this.callMethod("play");
                },
              },
              {
                key: "requestFullscreen",
                value: function () {
                  return M.isEnabled
                    ? M.request(this.element)
                    : this.callMethod("requestFullscreen");
                },
              },
              {
                key: "exitFullscreen",
                value: function () {
                  return M.isEnabled
                    ? M.exit()
                    : this.callMethod("exitFullscreen");
                },
              },
              {
                key: "getFullscreen",
                value: function () {
                  return M.isEnabled
                    ? c.resolve(M.isFullscreen)
                    : this.get("fullscreen");
                },
              },
              {
                key: "requestPictureInPicture",
                value: function () {
                  return this.callMethod("requestPictureInPicture");
                },
              },
              {
                key: "exitPictureInPicture",
                value: function () {
                  return this.callMethod("exitPictureInPicture");
                },
              },
              {
                key: "getPictureInPicture",
                value: function () {
                  return this.get("pictureInPicture");
                },
              },
              {
                key: "unload",
                value: function () {
                  return this.callMethod("unload");
                },
              },
              {
                key: "destroy",
                value: function () {
                  var e = this;
                  return new c(function (t) {
                    if (
                      (E.delete(e),
                      C.delete(e.element),
                      e._originalElement &&
                        (C.delete(e._originalElement),
                        e._originalElement.removeAttribute(
                          "data-vimeo-initialized"
                        )),
                      e.element &&
                        "IFRAME" === e.element.nodeName &&
                        e.element.parentNode &&
                        e.element.parentNode.removeChild(e.element),
                      e.element &&
                        "DIV" === e.element.nodeName &&
                        e.element.parentNode)
                    ) {
                      e.element.removeAttribute("data-vimeo-initialized");
                      var a = e.element.querySelector("iframe");
                      a && a.parentNode && a.parentNode.removeChild(a);
                    }
                    e._window.removeEventListener("message", e._onMessage), t();
                  });
                },
              },
              {
                key: "getAutopause",
                value: function () {
                  return this.get("autopause");
                },
              },
              {
                key: "setAutopause",
                value: function (e) {
                  return this.set("autopause", e);
                },
              },
              {
                key: "getBuffered",
                value: function () {
                  return this.get("buffered");
                },
              },
              {
                key: "getCameraProps",
                value: function () {
                  return this.get("cameraProps");
                },
              },
              {
                key: "setCameraProps",
                value: function (e) {
                  return this.set("cameraProps", e);
                },
              },
              {
                key: "getChapters",
                value: function () {
                  return this.get("chapters");
                },
              },
              {
                key: "getCurrentChapter",
                value: function () {
                  return this.get("currentChapter");
                },
              },
              {
                key: "getColor",
                value: function () {
                  return this.get("color");
                },
              },
              {
                key: "setColor",
                value: function (e) {
                  return this.set("color", e);
                },
              },
              {
                key: "getCuePoints",
                value: function () {
                  return this.get("cuePoints");
                },
              },
              {
                key: "getCurrentTime",
                value: function () {
                  return this.get("currentTime");
                },
              },
              {
                key: "setCurrentTime",
                value: function (e) {
                  return this.set("currentTime", e);
                },
              },
              {
                key: "getDuration",
                value: function () {
                  return this.get("duration");
                },
              },
              {
                key: "getEnded",
                value: function () {
                  return this.get("ended");
                },
              },
              {
                key: "getLoop",
                value: function () {
                  return this.get("loop");
                },
              },
              {
                key: "setLoop",
                value: function (e) {
                  return this.set("loop", e);
                },
              },
              {
                key: "setMuted",
                value: function (e) {
                  return this.set("muted", e);
                },
              },
              {
                key: "getMuted",
                value: function () {
                  return this.get("muted");
                },
              },
              {
                key: "getPaused",
                value: function () {
                  return this.get("paused");
                },
              },
              {
                key: "getPlaybackRate",
                value: function () {
                  return this.get("playbackRate");
                },
              },
              {
                key: "setPlaybackRate",
                value: function (e) {
                  return this.set("playbackRate", e);
                },
              },
              {
                key: "getPlayed",
                value: function () {
                  return this.get("played");
                },
              },
              {
                key: "getQualities",
                value: function () {
                  return this.get("qualities");
                },
              },
              {
                key: "getQuality",
                value: function () {
                  return this.get("quality");
                },
              },
              {
                key: "setQuality",
                value: function (e) {
                  return this.set("quality", e);
                },
              },
              {
                key: "getSeekable",
                value: function () {
                  return this.get("seekable");
                },
              },
              {
                key: "getSeeking",
                value: function () {
                  return this.get("seeking");
                },
              },
              {
                key: "getTextTracks",
                value: function () {
                  return this.get("textTracks");
                },
              },
              {
                key: "getVideoEmbedCode",
                value: function () {
                  return this.get("videoEmbedCode");
                },
              },
              {
                key: "getVideoId",
                value: function () {
                  return this.get("videoId");
                },
              },
              {
                key: "getVideoTitle",
                value: function () {
                  return this.get("videoTitle");
                },
              },
              {
                key: "getVideoWidth",
                value: function () {
                  return this.get("videoWidth");
                },
              },
              {
                key: "getVideoHeight",
                value: function () {
                  return this.get("videoHeight");
                },
              },
              {
                key: "getVideoUrl",
                value: function () {
                  return this.get("videoUrl");
                },
              },
              {
                key: "getVolume",
                value: function () {
                  return this.get("volume");
                },
              },
              {
                key: "setVolume",
                value: function (e) {
                  return this.set("volume", e);
                },
              },
            ]) && r(t.prototype, a),
            e
          );
        })();
      i ||
        ((M = (function () {
          var e = (function () {
              for (
                var e,
                  t = [
                    [
                      "requestFullscreen",
                      "exitFullscreen",
                      "fullscreenElement",
                      "fullscreenEnabled",
                      "fullscreenchange",
                      "fullscreenerror",
                    ],
                    [
                      "webkitRequestFullscreen",
                      "webkitExitFullscreen",
                      "webkitFullscreenElement",
                      "webkitFullscreenEnabled",
                      "webkitfullscreenchange",
                      "webkitfullscreenerror",
                    ],
                    [
                      "webkitRequestFullScreen",
                      "webkitCancelFullScreen",
                      "webkitCurrentFullScreenElement",
                      "webkitCancelFullScreen",
                      "webkitfullscreenchange",
                      "webkitfullscreenerror",
                    ],
                    [
                      "mozRequestFullScreen",
                      "mozCancelFullScreen",
                      "mozFullScreenElement",
                      "mozFullScreenEnabled",
                      "mozfullscreenchange",
                      "mozfullscreenerror",
                    ],
                    [
                      "msRequestFullscreen",
                      "msExitFullscreen",
                      "msFullscreenElement",
                      "msFullscreenEnabled",
                      "MSFullscreenChange",
                      "MSFullscreenError",
                    ],
                  ],
                  a = 0,
                  r = t.length,
                  i = {};
                a < r;
                a++
              )
                if ((e = t[a]) && e[1] in document) {
                  for (a = 0; a < e.length; a++) i[t[0][a]] = e[a];
                  return i;
                }
              return !1;
            })(),
            t = {
              fullscreenchange: e.fullscreenchange,
              fullscreenerror: e.fullscreenerror,
            },
            a = {
              request: function (t) {
                return new Promise(function (r, i) {
                  var n = function e() {
                    a.off("fullscreenchange", e), r();
                  };
                  a.on("fullscreenchange", n);
                  var s = (t = t || document.documentElement)[
                    e.requestFullscreen
                  ]();
                  s instanceof Promise && s.then(n).catch(i);
                });
              },
              exit: function () {
                return new Promise(function (t, r) {
                  if (a.isFullscreen) {
                    var i = function e() {
                      a.off("fullscreenchange", e), t();
                    };
                    a.on("fullscreenchange", i);
                    var n = document[e.exitFullscreen]();
                    n instanceof Promise && n.then(i).catch(r);
                  } else t();
                });
              },
              on: function (e, a) {
                var r = t[e];
                r && document.addEventListener(r, a);
              },
              off: function (e, a) {
                var r = t[e];
                r && document.removeEventListener(r, a);
              },
            };
          return (
            Object.defineProperties(a, {
              isFullscreen: {
                get: function () {
                  return Boolean(document[e.fullscreenElement]);
                },
              },
              element: {
                enumerable: !0,
                get: function () {
                  return document[e.fullscreenElement];
                },
              },
              isEnabled: {
                enumerable: !0,
                get: function () {
                  return Boolean(document[e.fullscreenEnabled]);
                },
              },
            }),
            a
          );
        })()),
        (function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : document,
            t = function (e) {
              "console" in window && console.error;
            };
          [].slice
            .call(e.querySelectorAll("[data-vimeo-id], [data-vimeo-url]"))
            .forEach(function (e) {
              try {
                if (null !== e.getAttribute("data-vimeo-defer")) return;
                var a = w(e);
                b(o(a), a, e)
                  .then(function (t) {
                    return y(t, e);
                  })
                  .catch(t);
              } catch (e) {
                t();
              }
            });
        })(),
        (function () {
          var e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : document;
          window.VimeoPlayerResizeEmbeds_ ||
            ((window.VimeoPlayerResizeEmbeds_ = !0),
            window.addEventListener("message", function (t) {
              if (s(t.origin) && t.data && "spacechange" === t.data.event)
                for (
                  var a = e.querySelectorAll("iframe"), r = 0;
                  r < a.length;
                  r++
                )
                  if (a[r].contentWindow === t.source) {
                    a[r].parentElement.style.paddingBottom = "".concat(
                      t.data.data[0].bottom,
                      "px"
                    );
                    break;
                  }
            }));
        })()),
        (t.a = z);
    }).call(this, a(3), a(7).setImmediate);
  },
  function (e, t, a) {
    function r(e) {
      return (r =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    !(function () {
      "use strict";
      var e,
        t,
        a = function t(a, n) {
          function s(e) {
            return Math.floor(e);
          }
          function o() {
            var e = x.params.autoplay,
              t = x.slides.eq(x.activeIndex);
            t.attr("data-swiper-autoplay") &&
              (e = t.attr("data-swiper-autoplay") || x.params.autoplay),
              (x.autoplayTimeoutId = setTimeout(function () {
                x.params.loop
                  ? (x.fixLoop(), x._slideNext(), x.emit("onAutoplay", x))
                  : x.isEnd
                  ? n.autoplayStopOnLast
                    ? x.stopAutoplay()
                    : (x._slideTo(0), x.emit("onAutoplay", x))
                  : (x._slideNext(), x.emit("onAutoplay", x));
              }, e));
          }
          function l(t, a) {
            var r = e(t.target);
            if (!r.is(a))
              if ("string" == typeof a) r = r.parents(a);
              else if (a.nodeType) {
                var i;
                return (
                  r.parents().each(function (e, t) {
                    t === a && (i = a);
                  }),
                  i ? a : void 0
                );
              }
            if (0 !== r.length) return r[0];
          }
          function u(e, t) {
            t = t || {};
            var a = new (window.MutationObserver ||
              window.WebkitMutationObserver)(function (e) {
              e.forEach(function (e) {
                x.onResize(!0), x.emit("onObserverUpdate", x, e);
              });
            });
            a.observe(e, {
              attributes: void 0 === t.attributes || t.attributes,
              childList: void 0 === t.childList || t.childList,
              characterData: void 0 === t.characterData || t.characterData,
            }),
              x.observers.push(a);
          }
          function d(e) {
            e.originalEvent && (e = e.originalEvent);
            var t = e.keyCode || e.charCode;
            if (
              !x.params.allowSwipeToNext &&
              ((x.isHorizontal() && 39 === t) ||
                (!x.isHorizontal() && 40 === t))
            )
              return !1;
            if (
              !x.params.allowSwipeToPrev &&
              ((x.isHorizontal() && 37 === t) ||
                (!x.isHorizontal() && 38 === t))
            )
              return !1;
            if (
              !(
                e.shiftKey ||
                e.altKey ||
                e.ctrlKey ||
                e.metaKey ||
                (document.activeElement &&
                  document.activeElement.nodeName &&
                  ("input" === document.activeElement.nodeName.toLowerCase() ||
                    "textarea" ===
                      document.activeElement.nodeName.toLowerCase()))
              )
            ) {
              if (37 === t || 39 === t || 38 === t || 40 === t) {
                var a = !1;
                if (
                  x.container.parents("." + x.params.slideClass).length > 0 &&
                  0 ===
                    x.container.parents("." + x.params.slideActiveClass).length
                )
                  return;
                var r = { left: window.pageXOffset, top: window.pageYOffset },
                  i = window.innerWidth,
                  n = window.innerHeight,
                  s = x.container.offset();
                x.rtl && (s.left = s.left - x.container[0].scrollLeft);
                for (
                  var o = [
                      [s.left, s.top],
                      [s.left + x.width, s.top],
                      [s.left, s.top + x.height],
                      [s.left + x.width, s.top + x.height],
                    ],
                    l = 0;
                  l < o.length;
                  l++
                ) {
                  var u = o[l];
                  u[0] >= r.left &&
                    u[0] <= r.left + i &&
                    u[1] >= r.top &&
                    u[1] <= r.top + n &&
                    (a = !0);
                }
                if (!a) return;
              }
              x.isHorizontal()
                ? ((37 !== t && 39 !== t) ||
                    (e.preventDefault
                      ? e.preventDefault()
                      : (e.returnValue = !1)),
                  ((39 === t && !x.rtl) || (37 === t && x.rtl)) &&
                    x.slideNext(),
                  ((37 === t && !x.rtl) || (39 === t && x.rtl)) &&
                    x.slidePrev())
                : ((38 !== t && 40 !== t) ||
                    (e.preventDefault
                      ? e.preventDefault()
                      : (e.returnValue = !1)),
                  40 === t && x.slideNext(),
                  38 === t && x.slidePrev()),
                x.emit("onKeyPress", x, t);
            }
          }
          function p(e) {
            e.originalEvent && (e = e.originalEvent);
            var t = 0,
              a = x.rtl ? -1 : 1,
              r = (function (e) {
                var t = 0,
                  a = 0,
                  r = 0,
                  i = 0;
                return (
                  "detail" in e && (a = e.detail),
                  "wheelDelta" in e && (a = -e.wheelDelta / 120),
                  "wheelDeltaY" in e && (a = -e.wheelDeltaY / 120),
                  "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120),
                  "axis" in e &&
                    e.axis === e.HORIZONTAL_AXIS &&
                    ((t = a), (a = 0)),
                  (r = 10 * t),
                  (i = 10 * a),
                  "deltaY" in e && (i = e.deltaY),
                  "deltaX" in e && (r = e.deltaX),
                  (r || i) &&
                    e.deltaMode &&
                    (1 === e.deltaMode
                      ? ((r *= 40), (i *= 40))
                      : ((r *= 800), (i *= 800))),
                  r && !t && (t = r < 1 ? -1 : 1),
                  i && !a && (a = i < 1 ? -1 : 1),
                  { spinX: t, spinY: a, pixelX: r, pixelY: i }
                );
              })(e);
            if (x.params.mousewheelForceToAxis)
              if (x.isHorizontal()) {
                if (!(Math.abs(r.pixelX) > Math.abs(r.pixelY))) return;
                t = r.pixelX * a;
              } else {
                if (!(Math.abs(r.pixelY) > Math.abs(r.pixelX))) return;
                t = r.pixelY;
              }
            else
              t =
                Math.abs(r.pixelX) > Math.abs(r.pixelY)
                  ? -r.pixelX * a
                  : -r.pixelY;
            if (0 !== t) {
              if ((x.params.mousewheelInvert && (t = -t), x.params.freeMode)) {
                var i =
                    x.getWrapperTranslate() +
                    t * x.params.mousewheelSensitivity,
                  n = x.isBeginning,
                  s = x.isEnd;
                if (
                  (i >= x.minTranslate() && (i = x.minTranslate()),
                  i <= x.maxTranslate() && (i = x.maxTranslate()),
                  x.setWrapperTransition(0),
                  x.setWrapperTranslate(i),
                  x.updateProgress(),
                  x.updateActiveIndex(),
                  ((!n && x.isBeginning) || (!s && x.isEnd)) &&
                    x.updateClasses(),
                  x.params.freeModeSticky
                    ? (clearTimeout(x.mousewheel.timeout),
                      (x.mousewheel.timeout = setTimeout(function () {
                        x.slideReset();
                      }, 300)))
                    : x.params.lazyLoading && x.lazy && x.lazy.load(),
                  x.emit("onScroll", x, e),
                  x.params.autoplay &&
                    x.params.autoplayDisableOnInteraction &&
                    x.stopAutoplay(),
                  0 === i || i === x.maxTranslate())
                )
                  return;
              } else {
                if (
                  new window.Date().getTime() - x.mousewheel.lastScrollTime >
                  60
                )
                  if (t < 0)
                    if ((x.isEnd && !x.params.loop) || x.animating) {
                      if (x.params.mousewheelReleaseOnEdges) return !0;
                    } else x.slideNext(), x.emit("onScroll", x, e);
                  else if ((x.isBeginning && !x.params.loop) || x.animating) {
                    if (x.params.mousewheelReleaseOnEdges) return !0;
                  } else x.slidePrev(), x.emit("onScroll", x, e);
                x.mousewheel.lastScrollTime = new window.Date().getTime();
              }
              return (
                e.preventDefault ? e.preventDefault() : (e.returnValue = !1), !1
              );
            }
          }
          function c(t, a) {
            t = e(t);
            var r,
              i,
              n,
              s = x.rtl ? -1 : 1;
            (r = t.attr("data-swiper-parallax") || "0"),
              (i = t.attr("data-swiper-parallax-x")),
              (n = t.attr("data-swiper-parallax-y")),
              i || n
                ? ((i = i || "0"), (n = n || "0"))
                : x.isHorizontal()
                ? ((i = r), (n = "0"))
                : ((n = r), (i = "0")),
              (i =
                i.indexOf("%") >= 0
                  ? parseInt(i, 10) * a * s + "%"
                  : i * a * s + "px"),
              (n =
                n.indexOf("%") >= 0 ? parseInt(n, 10) * a + "%" : n * a + "px"),
              t.transform("translate3d(" + i + ", " + n + ",0px)");
          }
          function m(e) {
            return (
              0 !== e.indexOf("on") &&
                (e =
                  e[0] !== e[0].toUpperCase()
                    ? "on" + e[0].toUpperCase() + e.substring(1)
                    : "on" + e),
              e
            );
          }
          if (!(this instanceof t)) return new t(a, n);
          var h = {
              direction: "horizontal",
              touchEventsTarget: "container",
              initialSlide: 0,
              speed: 300,
              autoplay: !1,
              autoplayDisableOnInteraction: !0,
              autoplayStopOnLast: !1,
              iOSEdgeSwipeDetection: !1,
              iOSEdgeSwipeThreshold: 20,
              freeMode: !1,
              freeModeMomentum: !0,
              freeModeMomentumRatio: 1,
              freeModeMomentumBounce: !0,
              freeModeMomentumBounceRatio: 1,
              freeModeMomentumVelocityRatio: 1,
              freeModeSticky: !1,
              freeModeMinimumVelocity: 0.02,
              autoHeight: !1,
              setWrapperSize: !1,
              virtualTranslate: !1,
              effect: "slide",
              coverflow: {
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: !0,
              },
              flip: { slideShadows: !0, limitRotation: !0 },
              cube: {
                slideShadows: !0,
                shadow: !0,
                shadowOffset: 20,
                shadowScale: 0.94,
              },
              fade: { crossFade: !1 },
              parallax: !1,
              zoom: !1,
              zoomMax: 3,
              zoomMin: 1,
              zoomToggle: !0,
              scrollbar: null,
              scrollbarHide: !0,
              scrollbarDraggable: !1,
              scrollbarSnapOnRelease: !1,
              keyboardControl: !1,
              mousewheelControl: !1,
              mousewheelReleaseOnEdges: !1,
              mousewheelInvert: !1,
              mousewheelForceToAxis: !1,
              mousewheelSensitivity: 1,
              mousewheelEventsTarged: "container",
              hashnav: !1,
              hashnavWatchState: !1,
              history: !1,
              replaceState: !1,
              breakpoints: void 0,
              spaceBetween: 0,
              slidesPerView: 1,
              slidesPerColumn: 1,
              slidesPerColumnFill: "column",
              slidesPerGroup: 1,
              centeredSlides: !1,
              slidesOffsetBefore: 0,
              slidesOffsetAfter: 0,
              roundLengths: !1,
              touchRatio: 1,
              touchAngle: 45,
              simulateTouch: !0,
              shortSwipes: !0,
              longSwipes: !0,
              longSwipesRatio: 0.5,
              longSwipesMs: 300,
              followFinger: !0,
              onlyExternal: !1,
              threshold: 0,
              touchMoveStopPropagation: !0,
              touchReleaseOnEdges: !1,
              uniqueNavElements: !0,
              pagination: null,
              paginationElement: "span",
              paginationClickable: !1,
              paginationHide: !1,
              paginationBulletRender: null,
              paginationProgressRender: null,
              paginationFractionRender: null,
              paginationCustomRender: null,
              paginationType: "bullets",
              resistance: !0,
              resistanceRatio: 0.85,
              nextButton: null,
              prevButton: null,
              watchSlidesProgress: !1,
              watchSlidesVisibility: !1,
              grabCursor: !1,
              preventClicks: !0,
              preventClicksPropagation: !0,
              slideToClickedSlide: !1,
              lazyLoading: !1,
              lazyLoadingInPrevNext: !1,
              lazyLoadingInPrevNextAmount: 1,
              lazyLoadingOnTransitionStart: !1,
              preloadImages: !0,
              updateOnImagesReady: !0,
              loop: !1,
              loopAdditionalSlides: 0,
              loopedSlides: null,
              control: void 0,
              controlInverse: !1,
              controlBy: "slide",
              normalizeSlideIndex: !0,
              allowSwipeToPrev: !0,
              allowSwipeToNext: !0,
              swipeHandler: null,
              noSwiping: !0,
              noSwipingClass: "swiper-no-swiping",
              passiveListeners: !0,
              containerModifierClass: "swiper-container-",
              slideClass: "swiper-slide",
              slideActiveClass: "swiper-slide-active",
              slideDuplicateActiveClass: "swiper-slide-duplicate-active",
              slideVisibleClass: "swiper-slide-visible",
              slideDuplicateClass: "swiper-slide-duplicate",
              slideNextClass: "swiper-slide-next",
              slideDuplicateNextClass: "swiper-slide-duplicate-next",
              slidePrevClass: "swiper-slide-prev",
              slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
              wrapperClass: "swiper-wrapper",
              bulletClass: "swiper-pagination-bullet",
              bulletActiveClass: "swiper-pagination-bullet-active",
              buttonDisabledClass: "swiper-button-disabled",
              paginationCurrentClass: "swiper-pagination-current",
              paginationTotalClass: "swiper-pagination-total",
              paginationHiddenClass: "swiper-pagination-hidden",
              paginationProgressbarClass: "swiper-pagination-progressbar",
              paginationClickableClass: "swiper-pagination-clickable",
              paginationModifierClass: "swiper-pagination-",
              lazyLoadingClass: "swiper-lazy",
              lazyStatusLoadingClass: "swiper-lazy-loading",
              lazyStatusLoadedClass: "swiper-lazy-loaded",
              lazyPreloaderClass: "swiper-lazy-preloader",
              notificationClass: "swiper-notification",
              preloaderClass: "preloader",
              zoomContainerClass: "swiper-zoom-container",
              observer: !1,
              observeParents: !1,
              a11y: !1,
              prevSlideMessage: "Previous slide",
              nextSlideMessage: "Next slide",
              firstSlideMessage: "This is the first slide",
              lastSlideMessage: "This is the last slide",
              paginationBulletMessage: "Go to slide {{index}}",
              runCallbacksOnInit: !0,
            },
            f = n && n.virtualTranslate;
          n = n || {};
          var g = {};
          for (var v in n)
            if (
              "object" != r(n[v]) ||
              null === n[v] ||
              n[v].nodeType ||
              n[v] === window ||
              n[v] === document ||
              (void 0 !== i && n[v] instanceof i) ||
              ("undefined" != typeof jQuery && n[v] instanceof jQuery)
            )
              g[v] = n[v];
            else for (var w in ((g[v] = {}), n[v])) g[v][w] = n[v][w];
          for (var y in h)
            if (void 0 === n[y]) n[y] = h[y];
            else if ("object" == r(n[y]))
              for (var b in h[y]) void 0 === n[y][b] && (n[y][b] = h[y][b]);
          var x = this;
          if (
            ((x.params = n),
            (x.originalParams = g),
            (x.classNames = []),
            void 0 !== e && void 0 !== i && (e = i),
            (void 0 !== e ||
              (e =
                void 0 === i
                  ? window.Dom7 || window.Zepto || window.jQuery
                  : i)) &&
              ((x.$ = e),
              (x.currentBreakpoint = void 0),
              (x.getActiveBreakpoint = function () {
                if (!x.params.breakpoints) return !1;
                var e,
                  t = !1,
                  a = [];
                for (e in x.params.breakpoints)
                  x.params.breakpoints.hasOwnProperty(e) && a.push(e);
                a.sort(function (e, t) {
                  return parseInt(e, 10) > parseInt(t, 10);
                });
                for (var r = 0; r < a.length; r++)
                  (e = a[r]) >= window.innerWidth && !t && (t = e);
                return t || "max";
              }),
              (x.setBreakpoint = function () {
                var e = x.getActiveBreakpoint();
                if (e && x.currentBreakpoint !== e) {
                  var t =
                      e in x.params.breakpoints
                        ? x.params.breakpoints[e]
                        : x.originalParams,
                    a =
                      x.params.loop &&
                      t.slidesPerView !== x.params.slidesPerView;
                  for (var r in t) x.params[r] = t[r];
                  (x.currentBreakpoint = e), a && x.destroyLoop && x.reLoop(!0);
                }
              }),
              x.params.breakpoints && x.setBreakpoint(),
              (x.container = e(a)),
              0 !== x.container.length))
          ) {
            if (x.container.length > 1) {
              var T = [];
              return (
                x.container.each(function () {
                  T.push(new t(this, n));
                }),
                T
              );
            }
            (x.container[0].swiper = x),
              x.container.data("swiper", x),
              x.classNames.push(
                x.params.containerModifierClass + x.params.direction
              ),
              x.params.freeMode &&
                x.classNames.push(
                  x.params.containerModifierClass + "free-mode"
                ),
              x.support.flexbox ||
                (x.classNames.push(
                  x.params.containerModifierClass + "no-flexbox"
                ),
                (x.params.slidesPerColumn = 1)),
              x.params.autoHeight &&
                x.classNames.push(
                  x.params.containerModifierClass + "autoheight"
                ),
              (x.params.parallax || x.params.watchSlidesVisibility) &&
                (x.params.watchSlidesProgress = !0),
              x.params.touchReleaseOnEdges && (x.params.resistanceRatio = 0),
              ["cube", "coverflow", "flip"].indexOf(x.params.effect) >= 0 &&
                (x.support.transforms3d
                  ? ((x.params.watchSlidesProgress = !0),
                    x.classNames.push(x.params.containerModifierClass + "3d"))
                  : (x.params.effect = "slide")),
              "slide" !== x.params.effect &&
                x.classNames.push(
                  x.params.containerModifierClass + x.params.effect
                ),
              "cube" === x.params.effect &&
                ((x.params.resistanceRatio = 0),
                (x.params.slidesPerView = 1),
                (x.params.slidesPerColumn = 1),
                (x.params.slidesPerGroup = 1),
                (x.params.centeredSlides = !1),
                (x.params.spaceBetween = 0),
                (x.params.virtualTranslate = !0)),
              ("fade" !== x.params.effect && "flip" !== x.params.effect) ||
                ((x.params.slidesPerView = 1),
                (x.params.slidesPerColumn = 1),
                (x.params.slidesPerGroup = 1),
                (x.params.watchSlidesProgress = !0),
                (x.params.spaceBetween = 0),
                void 0 === f && (x.params.virtualTranslate = !0)),
              x.params.grabCursor &&
                x.support.touch &&
                (x.params.grabCursor = !1),
              (x.wrapper = x.container.children("." + x.params.wrapperClass)),
              x.params.pagination &&
                ((x.paginationContainer = e(x.params.pagination)),
                x.params.uniqueNavElements &&
                  "string" == typeof x.params.pagination &&
                  x.paginationContainer.length > 1 &&
                  1 === x.container.find(x.params.pagination).length &&
                  (x.paginationContainer = x.container.find(
                    x.params.pagination
                  )),
                "bullets" === x.params.paginationType &&
                x.params.paginationClickable
                  ? x.paginationContainer.addClass(
                      x.params.paginationModifierClass + "clickable"
                    )
                  : (x.params.paginationClickable = !1),
                x.paginationContainer.addClass(
                  x.params.paginationModifierClass + x.params.paginationType
                )),
              (x.params.nextButton || x.params.prevButton) &&
                (x.params.nextButton &&
                  ((x.nextButton = e(x.params.nextButton)),
                  x.params.uniqueNavElements &&
                    "string" == typeof x.params.nextButton &&
                    x.nextButton.length > 1 &&
                    1 === x.container.find(x.params.nextButton).length &&
                    (x.nextButton = x.container.find(x.params.nextButton))),
                x.params.prevButton &&
                  ((x.prevButton = e(x.params.prevButton)),
                  x.params.uniqueNavElements &&
                    "string" == typeof x.params.prevButton &&
                    x.prevButton.length > 1 &&
                    1 === x.container.find(x.params.prevButton).length &&
                    (x.prevButton = x.container.find(x.params.prevButton)))),
              (x.isHorizontal = function () {
                return "horizontal" === x.params.direction;
              }),
              (x.rtl =
                x.isHorizontal() &&
                ("rtl" === x.container[0].dir.toLowerCase() ||
                  "rtl" === x.container.css("direction"))),
              x.rtl &&
                x.classNames.push(x.params.containerModifierClass + "rtl"),
              x.rtl &&
                (x.wrongRTL = "-webkit-box" === x.wrapper.css("display")),
              x.params.slidesPerColumn > 1 &&
                x.classNames.push(x.params.containerModifierClass + "multirow"),
              x.device.android &&
                x.classNames.push(x.params.containerModifierClass + "android"),
              x.container.addClass(x.classNames.join(" ")),
              (x.translate = 0),
              (x.progress = 0),
              (x.velocity = 0),
              (x.lockSwipeToNext = function () {
                (x.params.allowSwipeToNext = !1),
                  !1 === x.params.allowSwipeToPrev &&
                    x.params.grabCursor &&
                    x.unsetGrabCursor();
              }),
              (x.lockSwipeToPrev = function () {
                (x.params.allowSwipeToPrev = !1),
                  !1 === x.params.allowSwipeToNext &&
                    x.params.grabCursor &&
                    x.unsetGrabCursor();
              }),
              (x.lockSwipes = function () {
                (x.params.allowSwipeToNext = x.params.allowSwipeToPrev = !1),
                  x.params.grabCursor && x.unsetGrabCursor();
              }),
              (x.unlockSwipeToNext = function () {
                (x.params.allowSwipeToNext = !0),
                  !0 === x.params.allowSwipeToPrev &&
                    x.params.grabCursor &&
                    x.setGrabCursor();
              }),
              (x.unlockSwipeToPrev = function () {
                (x.params.allowSwipeToPrev = !0),
                  !0 === x.params.allowSwipeToNext &&
                    x.params.grabCursor &&
                    x.setGrabCursor();
              }),
              (x.unlockSwipes = function () {
                (x.params.allowSwipeToNext = x.params.allowSwipeToPrev = !0),
                  x.params.grabCursor && x.setGrabCursor();
              }),
              (x.setGrabCursor = function (e) {
                (x.container[0].style.cursor = "move"),
                  (x.container[0].style.cursor = e
                    ? "-webkit-grabbing"
                    : "-webkit-grab"),
                  (x.container[0].style.cursor = e
                    ? "-moz-grabbin"
                    : "-moz-grab"),
                  (x.container[0].style.cursor = e ? "grabbing" : "grab");
              }),
              (x.unsetGrabCursor = function () {
                x.container[0].style.cursor = "";
              }),
              x.params.grabCursor && x.setGrabCursor(),
              (x.imagesToLoad = []),
              (x.imagesLoaded = 0),
              (x.loadImage = function (e, t, a, r, i, n) {
                function s() {
                  n && n();
                }
                var o;
                e.complete && i
                  ? s()
                  : t
                  ? (((o = new window.Image()).onload = s),
                    (o.onerror = s),
                    r && (o.sizes = r),
                    a && (o.srcset = a),
                    t && (o.src = t))
                  : s();
              }),
              (x.preloadImages = function () {
                function e() {
                  null != x &&
                    x &&
                    (void 0 !== x.imagesLoaded && x.imagesLoaded++,
                    x.imagesLoaded === x.imagesToLoad.length &&
                      (x.params.updateOnImagesReady && x.update(),
                      x.emit("onImagesReady", x)));
                }
                x.imagesToLoad = x.container.find("img");
                for (var t = 0; t < x.imagesToLoad.length; t++)
                  x.loadImage(
                    x.imagesToLoad[t],
                    x.imagesToLoad[t].currentSrc ||
                      x.imagesToLoad[t].getAttribute("src"),
                    x.imagesToLoad[t].srcset ||
                      x.imagesToLoad[t].getAttribute("srcset"),
                    x.imagesToLoad[t].sizes ||
                      x.imagesToLoad[t].getAttribute("sizes"),
                    !0,
                    e
                  );
              }),
              (x.autoplayTimeoutId = void 0),
              (x.autoplaying = !1),
              (x.autoplayPaused = !1),
              (x.startAutoplay = function () {
                return (
                  void 0 === x.autoplayTimeoutId &&
                  !!x.params.autoplay &&
                  !x.autoplaying &&
                  ((x.autoplaying = !0), x.emit("onAutoplayStart", x), void o())
                );
              }),
              (x.stopAutoplay = function (e) {
                x.autoplayTimeoutId &&
                  (x.autoplayTimeoutId && clearTimeout(x.autoplayTimeoutId),
                  (x.autoplaying = !1),
                  (x.autoplayTimeoutId = void 0),
                  x.emit("onAutoplayStop", x));
              }),
              (x.pauseAutoplay = function (e) {
                x.autoplayPaused ||
                  (x.autoplayTimeoutId && clearTimeout(x.autoplayTimeoutId),
                  (x.autoplayPaused = !0),
                  0 === e
                    ? ((x.autoplayPaused = !1), o())
                    : x.wrapper.transitionEnd(function () {
                        x &&
                          ((x.autoplayPaused = !1),
                          x.autoplaying ? o() : x.stopAutoplay());
                      }));
              }),
              (x.minTranslate = function () {
                return -x.snapGrid[0];
              }),
              (x.maxTranslate = function () {
                return -x.snapGrid[x.snapGrid.length - 1];
              }),
              (x.updateAutoHeight = function () {
                var e,
                  t = [],
                  a = 0;
                if (
                  "auto" !== x.params.slidesPerView &&
                  x.params.slidesPerView > 1
                )
                  for (e = 0; e < Math.ceil(x.params.slidesPerView); e++) {
                    var r = x.activeIndex + e;
                    if (r > x.slides.length) break;
                    t.push(x.slides.eq(r)[0]);
                  }
                else t.push(x.slides.eq(x.activeIndex)[0]);
                for (e = 0; e < t.length; e++)
                  if (void 0 !== t[e]) {
                    var i = t[e].offsetHeight;
                    a = i > a ? i : a;
                  }
                a && x.wrapper.css("height", a + "px");
              }),
              (x.updateContainerSize = function () {
                var e, t;
                (e =
                  void 0 !== x.params.width
                    ? x.params.width
                    : x.container[0].clientWidth),
                  (t =
                    void 0 !== x.params.height
                      ? x.params.height
                      : x.container[0].clientHeight),
                  (0 === e && x.isHorizontal()) ||
                    (0 === t && !x.isHorizontal()) ||
                    ((e =
                      e -
                      parseInt(x.container.css("padding-left"), 10) -
                      parseInt(x.container.css("padding-right"), 10)),
                    (t =
                      t -
                      parseInt(x.container.css("padding-top"), 10) -
                      parseInt(x.container.css("padding-bottom"), 10)),
                    (x.width = e),
                    (x.height = t),
                    (x.size = x.isHorizontal() ? x.width : x.height));
              }),
              (x.updateSlidesSize = function () {
                (x.slides = x.wrapper.children("." + x.params.slideClass)),
                  (x.snapGrid = []),
                  (x.slidesGrid = []),
                  (x.slidesSizesGrid = []);
                var e,
                  t = x.params.spaceBetween,
                  a = -x.params.slidesOffsetBefore,
                  r = 0,
                  i = 0;
                if (void 0 !== x.size) {
                  var n;
                  "string" == typeof t &&
                    t.indexOf("%") >= 0 &&
                    (t = (parseFloat(t.replace("%", "")) / 100) * x.size),
                    (x.virtualSize = -t),
                    x.rtl
                      ? x.slides.css({ marginLeft: "", marginTop: "" })
                      : x.slides.css({ marginRight: "", marginBottom: "" }),
                    x.params.slidesPerColumn > 1 &&
                      ((n =
                        Math.floor(
                          x.slides.length / x.params.slidesPerColumn
                        ) ===
                        x.slides.length / x.params.slidesPerColumn
                          ? x.slides.length
                          : Math.ceil(
                              x.slides.length / x.params.slidesPerColumn
                            ) * x.params.slidesPerColumn),
                      "auto" !== x.params.slidesPerView &&
                        "row" === x.params.slidesPerColumnFill &&
                        (n = Math.max(
                          n,
                          x.params.slidesPerView * x.params.slidesPerColumn
                        )));
                  var o,
                    l,
                    u = x.params.slidesPerColumn,
                    d = n / u,
                    p = d - (x.params.slidesPerColumn * d - x.slides.length);
                  for (e = 0; e < x.slides.length; e++) {
                    o = 0;
                    var c,
                      m,
                      h,
                      f = x.slides.eq(e);
                    x.params.slidesPerColumn > 1 &&
                      ("column" === x.params.slidesPerColumnFill
                        ? ((h = e - (m = Math.floor(e / u)) * u),
                          (m > p || (m === p && h === u - 1)) &&
                            ++h >= u &&
                            ((h = 0), m++),
                          (c = m + (h * n) / u),
                          f.css({
                            "-webkit-box-ordinal-group": c,
                            "-moz-box-ordinal-group": c,
                            "-ms-flex-order": c,
                            "-webkit-order": c,
                            order: c,
                          }))
                        : (m = e - (h = Math.floor(e / d)) * d),
                      f
                        .css(
                          "margin-" + (x.isHorizontal() ? "top" : "left"),
                          0 !== h &&
                            x.params.spaceBetween &&
                            x.params.spaceBetween + "px"
                        )
                        .attr("data-swiper-column", m)
                        .attr("data-swiper-row", h)),
                      "none" !== f.css("display") &&
                        ("auto" === x.params.slidesPerView
                          ? ((o = x.isHorizontal()
                              ? f.outerWidth(!0)
                              : f.outerHeight(!0)),
                            x.params.roundLengths && (o = s(o)))
                          : ((o =
                              (x.size - (x.params.slidesPerView - 1) * t) /
                              x.params.slidesPerView),
                            x.params.roundLengths && (o = s(o)),
                            x.isHorizontal()
                              ? (x.slides[e].style.width = o + "px")
                              : (x.slides[e].style.height = o + "px")),
                        (x.slides[e].swiperSlideSize = o),
                        x.slidesSizesGrid.push(o),
                        x.params.centeredSlides
                          ? ((a = a + o / 2 + r / 2 + t),
                            0 === r && 0 !== e && (a = a - x.size / 2 - t),
                            0 === e && (a = a - x.size / 2 - t),
                            Math.abs(a) < 0.001 && (a = 0),
                            i % x.params.slidesPerGroup == 0 &&
                              x.snapGrid.push(a),
                            x.slidesGrid.push(a))
                          : (i % x.params.slidesPerGroup == 0 &&
                              x.snapGrid.push(a),
                            x.slidesGrid.push(a),
                            (a = a + o + t)),
                        (x.virtualSize += o + t),
                        (r = o),
                        i++);
                  }
                  if (
                    ((x.virtualSize =
                      Math.max(x.virtualSize, x.size) +
                      x.params.slidesOffsetAfter),
                    x.rtl &&
                      x.wrongRTL &&
                      ("slide" === x.params.effect ||
                        "coverflow" === x.params.effect) &&
                      x.wrapper.css({
                        width: x.virtualSize + x.params.spaceBetween + "px",
                      }),
                    (x.support.flexbox && !x.params.setWrapperSize) ||
                      (x.isHorizontal()
                        ? x.wrapper.css({
                            width: x.virtualSize + x.params.spaceBetween + "px",
                          })
                        : x.wrapper.css({
                            height:
                              x.virtualSize + x.params.spaceBetween + "px",
                          })),
                    x.params.slidesPerColumn > 1 &&
                      ((x.virtualSize = (o + x.params.spaceBetween) * n),
                      (x.virtualSize =
                        Math.ceil(x.virtualSize / x.params.slidesPerColumn) -
                        x.params.spaceBetween),
                      x.isHorizontal()
                        ? x.wrapper.css({
                            width: x.virtualSize + x.params.spaceBetween + "px",
                          })
                        : x.wrapper.css({
                            height:
                              x.virtualSize + x.params.spaceBetween + "px",
                          }),
                      x.params.centeredSlides))
                  ) {
                    for (l = [], e = 0; e < x.snapGrid.length; e++)
                      x.snapGrid[e] < x.virtualSize + x.snapGrid[0] &&
                        l.push(x.snapGrid[e]);
                    x.snapGrid = l;
                  }
                  if (!x.params.centeredSlides) {
                    for (l = [], e = 0; e < x.snapGrid.length; e++)
                      x.snapGrid[e] <= x.virtualSize - x.size &&
                        l.push(x.snapGrid[e]);
                    (x.snapGrid = l),
                      Math.floor(x.virtualSize - x.size) -
                        Math.floor(x.snapGrid[x.snapGrid.length - 1]) >
                        1 && x.snapGrid.push(x.virtualSize - x.size);
                  }
                  0 === x.snapGrid.length && (x.snapGrid = [0]),
                    0 !== x.params.spaceBetween &&
                      (x.isHorizontal()
                        ? x.rtl
                          ? x.slides.css({ marginLeft: t + "px" })
                          : x.slides.css({ marginRight: t + "px" })
                        : x.slides.css({ marginBottom: t + "px" })),
                    x.params.watchSlidesProgress && x.updateSlidesOffset();
                }
              }),
              (x.updateSlidesOffset = function () {
                for (var e = 0; e < x.slides.length; e++)
                  x.slides[e].swiperSlideOffset = x.isHorizontal()
                    ? x.slides[e].offsetLeft
                    : x.slides[e].offsetTop;
              }),
              (x.currentSlidesPerView = function () {
                var e,
                  t,
                  a = 1;
                if (x.params.centeredSlides) {
                  var r,
                    i = x.slides[x.activeIndex].swiperSlideSize;
                  for (e = x.activeIndex + 1; e < x.slides.length; e++)
                    x.slides[e] &&
                      !r &&
                      (a++,
                      (i += x.slides[e].swiperSlideSize) > x.size && (r = !0));
                  for (t = x.activeIndex - 1; t >= 0; t--)
                    x.slides[t] &&
                      !r &&
                      (a++,
                      (i += x.slides[t].swiperSlideSize) > x.size && (r = !0));
                } else
                  for (e = x.activeIndex + 1; e < x.slides.length; e++)
                    x.slidesGrid[e] - x.slidesGrid[x.activeIndex] < x.size &&
                      a++;
                return a;
              }),
              (x.updateSlidesProgress = function (e) {
                if (
                  (void 0 === e && (e = x.translate || 0),
                  0 !== x.slides.length)
                ) {
                  void 0 === x.slides[0].swiperSlideOffset &&
                    x.updateSlidesOffset();
                  var t = -e;
                  x.rtl && (t = e),
                    x.slides.removeClass(x.params.slideVisibleClass);
                  for (var a = 0; a < x.slides.length; a++) {
                    var r = x.slides[a],
                      i =
                        (t +
                          (x.params.centeredSlides ? x.minTranslate() : 0) -
                          r.swiperSlideOffset) /
                        (r.swiperSlideSize + x.params.spaceBetween);
                    if (x.params.watchSlidesVisibility) {
                      var n = -(t - r.swiperSlideOffset),
                        s = n + x.slidesSizesGrid[a];
                      ((n >= 0 && n < x.size) ||
                        (s > 0 && s <= x.size) ||
                        (n <= 0 && s >= x.size)) &&
                        x.slides.eq(a).addClass(x.params.slideVisibleClass);
                    }
                    r.progress = x.rtl ? -i : i;
                  }
                }
              }),
              (x.updateProgress = function (e) {
                void 0 === e && (e = x.translate || 0);
                var t = x.maxTranslate() - x.minTranslate(),
                  a = x.isBeginning,
                  r = x.isEnd;
                0 === t
                  ? ((x.progress = 0), (x.isBeginning = x.isEnd = !0))
                  : ((x.progress = (e - x.minTranslate()) / t),
                    (x.isBeginning = x.progress <= 0),
                    (x.isEnd = x.progress >= 1)),
                  x.isBeginning && !a && x.emit("onReachBeginning", x),
                  x.isEnd && !r && x.emit("onReachEnd", x),
                  x.params.watchSlidesProgress && x.updateSlidesProgress(e),
                  x.emit("onProgress", x, x.progress);
              }),
              (x.updateActiveIndex = function () {
                var e,
                  t,
                  a,
                  r = x.rtl ? x.translate : -x.translate;
                for (t = 0; t < x.slidesGrid.length; t++)
                  void 0 !== x.slidesGrid[t + 1]
                    ? r >= x.slidesGrid[t] &&
                      r <
                        x.slidesGrid[t + 1] -
                          (x.slidesGrid[t + 1] - x.slidesGrid[t]) / 2
                      ? (e = t)
                      : r >= x.slidesGrid[t] &&
                        r < x.slidesGrid[t + 1] &&
                        (e = t + 1)
                    : r >= x.slidesGrid[t] && (e = t);
                x.params.normalizeSlideIndex &&
                  (e < 0 || void 0 === e) &&
                  (e = 0),
                  (a = Math.floor(e / x.params.slidesPerGroup)) >=
                    x.snapGrid.length && (a = x.snapGrid.length - 1),
                  e !== x.activeIndex &&
                    ((x.snapIndex = a),
                    (x.previousIndex = x.activeIndex),
                    (x.activeIndex = e),
                    x.updateClasses(),
                    x.updateRealIndex());
              }),
              (x.updateRealIndex = function () {
                x.realIndex = parseInt(
                  x.slides.eq(x.activeIndex).attr("data-swiper-slide-index") ||
                    x.activeIndex,
                  10
                );
              }),
              (x.updateClasses = function () {
                x.slides.removeClass(
                  x.params.slideActiveClass +
                    " " +
                    x.params.slideNextClass +
                    " " +
                    x.params.slidePrevClass +
                    " " +
                    x.params.slideDuplicateActiveClass +
                    " " +
                    x.params.slideDuplicateNextClass +
                    " " +
                    x.params.slideDuplicatePrevClass
                );
                var t = x.slides.eq(x.activeIndex);
                t.addClass(x.params.slideActiveClass),
                  n.loop &&
                    (t.hasClass(x.params.slideDuplicateClass)
                      ? x.wrapper
                          .children(
                            "." +
                              x.params.slideClass +
                              ":not(." +
                              x.params.slideDuplicateClass +
                              ')[data-swiper-slide-index="' +
                              x.realIndex +
                              '"]'
                          )
                          .addClass(x.params.slideDuplicateActiveClass)
                      : x.wrapper
                          .children(
                            "." +
                              x.params.slideClass +
                              "." +
                              x.params.slideDuplicateClass +
                              '[data-swiper-slide-index="' +
                              x.realIndex +
                              '"]'
                          )
                          .addClass(x.params.slideDuplicateActiveClass));
                var a = t
                  .next("." + x.params.slideClass)
                  .addClass(x.params.slideNextClass);
                x.params.loop &&
                  0 === a.length &&
                  (a = x.slides.eq(0)).addClass(x.params.slideNextClass);
                var r = t
                  .prev("." + x.params.slideClass)
                  .addClass(x.params.slidePrevClass);
                if (
                  (x.params.loop &&
                    0 === r.length &&
                    (r = x.slides.eq(-1)).addClass(x.params.slidePrevClass),
                  n.loop &&
                    (a.hasClass(x.params.slideDuplicateClass)
                      ? x.wrapper
                          .children(
                            "." +
                              x.params.slideClass +
                              ":not(." +
                              x.params.slideDuplicateClass +
                              ')[data-swiper-slide-index="' +
                              a.attr("data-swiper-slide-index") +
                              '"]'
                          )
                          .addClass(x.params.slideDuplicateNextClass)
                      : x.wrapper
                          .children(
                            "." +
                              x.params.slideClass +
                              "." +
                              x.params.slideDuplicateClass +
                              '[data-swiper-slide-index="' +
                              a.attr("data-swiper-slide-index") +
                              '"]'
                          )
                          .addClass(x.params.slideDuplicateNextClass),
                    r.hasClass(x.params.slideDuplicateClass)
                      ? x.wrapper
                          .children(
                            "." +
                              x.params.slideClass +
                              ":not(." +
                              x.params.slideDuplicateClass +
                              ')[data-swiper-slide-index="' +
                              r.attr("data-swiper-slide-index") +
                              '"]'
                          )
                          .addClass(x.params.slideDuplicatePrevClass)
                      : x.wrapper
                          .children(
                            "." +
                              x.params.slideClass +
                              "." +
                              x.params.slideDuplicateClass +
                              '[data-swiper-slide-index="' +
                              r.attr("data-swiper-slide-index") +
                              '"]'
                          )
                          .addClass(x.params.slideDuplicatePrevClass)),
                  x.paginationContainer && x.paginationContainer.length > 0)
                ) {
                  var i,
                    s = x.params.loop
                      ? Math.ceil(
                          (x.slides.length - 2 * x.loopedSlides) /
                            x.params.slidesPerGroup
                        )
                      : x.snapGrid.length;
                  if (
                    (x.params.loop
                      ? ((i = Math.ceil(
                          (x.activeIndex - x.loopedSlides) /
                            x.params.slidesPerGroup
                        )) >
                          x.slides.length - 1 - 2 * x.loopedSlides &&
                          (i -= x.slides.length - 2 * x.loopedSlides),
                        i > s - 1 && (i -= s),
                        i < 0 &&
                          "bullets" !== x.params.paginationType &&
                          (i = s + i))
                      : (i =
                          void 0 !== x.snapIndex
                            ? x.snapIndex
                            : x.activeIndex || 0),
                    "bullets" === x.params.paginationType &&
                      x.bullets &&
                      x.bullets.length > 0 &&
                      (x.bullets.removeClass(x.params.bulletActiveClass),
                      x.paginationContainer.length > 1
                        ? x.bullets.each(function () {
                            e(this).index() === i &&
                              e(this).addClass(x.params.bulletActiveClass);
                          })
                        : x.bullets.eq(i).addClass(x.params.bulletActiveClass)),
                    "fraction" === x.params.paginationType &&
                      (x.paginationContainer
                        .find("." + x.params.paginationCurrentClass)
                        .text(i + 1),
                      x.paginationContainer
                        .find("." + x.params.paginationTotalClass)
                        .text(s)),
                    "progress" === x.params.paginationType)
                  ) {
                    var o = (i + 1) / s,
                      l = o,
                      u = 1;
                    x.isHorizontal() || ((u = o), (l = 1)),
                      x.paginationContainer
                        .find("." + x.params.paginationProgressbarClass)
                        .transform(
                          "translate3d(0,0,0) scaleX(" +
                            l +
                            ") scaleY(" +
                            u +
                            ")"
                        )
                        .transition(x.params.speed);
                  }
                  "custom" === x.params.paginationType &&
                    x.params.paginationCustomRender &&
                    (x.paginationContainer.html(
                      x.params.paginationCustomRender(x, i + 1, s)
                    ),
                    x.emit(
                      "onPaginationRendered",
                      x,
                      x.paginationContainer[0]
                    ));
                }
                x.params.loop ||
                  (x.params.prevButton &&
                    x.prevButton &&
                    x.prevButton.length > 0 &&
                    (x.isBeginning
                      ? (x.prevButton.addClass(x.params.buttonDisabledClass),
                        x.params.a11y && x.a11y && x.a11y.disable(x.prevButton))
                      : (x.prevButton.removeClass(x.params.buttonDisabledClass),
                        x.params.a11y &&
                          x.a11y &&
                          x.a11y.enable(x.prevButton))),
                  x.params.nextButton &&
                    x.nextButton &&
                    x.nextButton.length > 0 &&
                    (x.isEnd
                      ? (x.nextButton.addClass(x.params.buttonDisabledClass),
                        x.params.a11y && x.a11y && x.a11y.disable(x.nextButton))
                      : (x.nextButton.removeClass(x.params.buttonDisabledClass),
                        x.params.a11y &&
                          x.a11y &&
                          x.a11y.enable(x.nextButton))));
              }),
              (x.updatePagination = function () {
                if (
                  x.params.pagination &&
                  x.paginationContainer &&
                  x.paginationContainer.length > 0
                ) {
                  var e = "";
                  if ("bullets" === x.params.paginationType) {
                    for (
                      var t = x.params.loop
                          ? Math.ceil(
                              (x.slides.length - 2 * x.loopedSlides) /
                                x.params.slidesPerGroup
                            )
                          : x.snapGrid.length,
                        a = 0;
                      a < t;
                      a++
                    )
                      e += x.params.paginationBulletRender
                        ? x.params.paginationBulletRender(
                            x,
                            a,
                            x.params.bulletClass
                          )
                        : "<" +
                          x.params.paginationElement +
                          ' class="' +
                          x.params.bulletClass +
                          '"></' +
                          x.params.paginationElement +
                          ">";
                    x.paginationContainer.html(e),
                      (x.bullets = x.paginationContainer.find(
                        "." + x.params.bulletClass
                      )),
                      x.params.paginationClickable &&
                        x.params.a11y &&
                        x.a11y &&
                        x.a11y.initPagination();
                  }
                  "fraction" === x.params.paginationType &&
                    ((e = x.params.paginationFractionRender
                      ? x.params.paginationFractionRender(
                          x,
                          x.params.paginationCurrentClass,
                          x.params.paginationTotalClass
                        )
                      : '<span class="' +
                        x.params.paginationCurrentClass +
                        '"></span> / <span class="' +
                        x.params.paginationTotalClass +
                        '"></span>'),
                    x.paginationContainer.html(e)),
                    "progress" === x.params.paginationType &&
                      ((e = x.params.paginationProgressRender
                        ? x.params.paginationProgressRender(
                            x,
                            x.params.paginationProgressbarClass
                          )
                        : '<span class="' +
                          x.params.paginationProgressbarClass +
                          '"></span>'),
                      x.paginationContainer.html(e)),
                    "custom" !== x.params.paginationType &&
                      x.emit(
                        "onPaginationRendered",
                        x,
                        x.paginationContainer[0]
                      );
                }
              }),
              (x.update = function (e) {
                function t() {
                  x.rtl,
                    x.translate,
                    (a = Math.min(
                      Math.max(x.translate, x.maxTranslate()),
                      x.minTranslate()
                    )),
                    x.setWrapperTranslate(a),
                    x.updateActiveIndex(),
                    x.updateClasses();
                }
                var a;
                x &&
                  (x.updateContainerSize(),
                  x.updateSlidesSize(),
                  x.updateProgress(),
                  x.updatePagination(),
                  x.updateClasses(),
                  x.params.scrollbar && x.scrollbar && x.scrollbar.set(),
                  e
                    ? (x.controller &&
                        x.controller.spline &&
                        (x.controller.spline = void 0),
                      x.params.freeMode
                        ? (t(), x.params.autoHeight && x.updateAutoHeight())
                        : (("auto" === x.params.slidesPerView ||
                            x.params.slidesPerView > 1) &&
                          x.isEnd &&
                          !x.params.centeredSlides
                            ? x.slideTo(x.slides.length - 1, 0, !1, !0)
                            : x.slideTo(x.activeIndex, 0, !1, !0)) || t())
                    : x.params.autoHeight && x.updateAutoHeight());
              }),
              (x.onResize = function (e) {
                x.params.onBeforeResize && x.params.onBeforeResize(x),
                  x.params.breakpoints && x.setBreakpoint();
                var t = x.params.allowSwipeToPrev,
                  a = x.params.allowSwipeToNext;
                (x.params.allowSwipeToPrev = x.params.allowSwipeToNext = !0),
                  x.updateContainerSize(),
                  x.updateSlidesSize(),
                  ("auto" === x.params.slidesPerView ||
                    x.params.freeMode ||
                    e) &&
                    x.updatePagination(),
                  x.params.scrollbar && x.scrollbar && x.scrollbar.set(),
                  x.controller &&
                    x.controller.spline &&
                    (x.controller.spline = void 0);
                var r = !1;
                if (x.params.freeMode) {
                  var i = Math.min(
                    Math.max(x.translate, x.maxTranslate()),
                    x.minTranslate()
                  );
                  x.setWrapperTranslate(i),
                    x.updateActiveIndex(),
                    x.updateClasses(),
                    x.params.autoHeight && x.updateAutoHeight();
                } else
                  x.updateClasses(),
                    (r =
                      ("auto" === x.params.slidesPerView ||
                        x.params.slidesPerView > 1) &&
                      x.isEnd &&
                      !x.params.centeredSlides
                        ? x.slideTo(x.slides.length - 1, 0, !1, !0)
                        : x.slideTo(x.activeIndex, 0, !1, !0));
                x.params.lazyLoading && !r && x.lazy && x.lazy.load(),
                  (x.params.allowSwipeToPrev = t),
                  (x.params.allowSwipeToNext = a),
                  x.params.onAfterResize && x.params.onAfterResize(x);
              }),
              (x.touchEventsDesktop = {
                start: "mousedown",
                move: "mousemove",
                end: "mouseup",
              }),
              window.navigator.pointerEnabled
                ? (x.touchEventsDesktop = {
                    start: "pointerdown",
                    move: "pointermove",
                    end: "pointerup",
                  })
                : window.navigator.msPointerEnabled &&
                  (x.touchEventsDesktop = {
                    start: "MSPointerDown",
                    move: "MSPointerMove",
                    end: "MSPointerUp",
                  }),
              (x.touchEvents = {
                start:
                  x.support.touch || !x.params.simulateTouch
                    ? "touchstart"
                    : x.touchEventsDesktop.start,
                move:
                  x.support.touch || !x.params.simulateTouch
                    ? "touchmove"
                    : x.touchEventsDesktop.move,
                end:
                  x.support.touch || !x.params.simulateTouch
                    ? "touchend"
                    : x.touchEventsDesktop.end,
              }),
              (window.navigator.pointerEnabled ||
                window.navigator.msPointerEnabled) &&
                ("container" === x.params.touchEventsTarget
                  ? x.container
                  : x.wrapper
                ).addClass("swiper-wp8-" + x.params.direction),
              (x.initEvents = function (e) {
                var t = e ? "off" : "on",
                  a = e ? "removeEventListener" : "addEventListener",
                  r =
                    "container" === x.params.touchEventsTarget
                      ? x.container[0]
                      : x.wrapper[0],
                  i = x.support.touch ? r : document,
                  s = !!x.params.nested;
                if (x.browser.ie)
                  r[a](x.touchEvents.start, x.onTouchStart, !1),
                    i[a](x.touchEvents.move, x.onTouchMove, s),
                    i[a](x.touchEvents.end, x.onTouchEnd, !1);
                else {
                  if (x.support.touch) {
                    var o = !(
                      "touchstart" !== x.touchEvents.start ||
                      !x.support.passiveListener ||
                      !x.params.passiveListeners
                    ) && { passive: !0, capture: !1 };
                    r[a](x.touchEvents.start, x.onTouchStart, o),
                      r[a](x.touchEvents.move, x.onTouchMove, s),
                      r[a](x.touchEvents.end, x.onTouchEnd, o);
                  }
                  ((n.simulateTouch && !x.device.ios && !x.device.android) ||
                    (n.simulateTouch && !x.support.touch && x.device.ios)) &&
                    (r[a]("mousedown", x.onTouchStart, !1),
                    document[a]("mousemove", x.onTouchMove, s),
                    document[a]("mouseup", x.onTouchEnd, !1));
                }
                window[a]("resize", x.onResize),
                  x.params.nextButton &&
                    x.nextButton &&
                    x.nextButton.length > 0 &&
                    (x.nextButton[t]("click", x.onClickNext),
                    x.params.a11y &&
                      x.a11y &&
                      x.nextButton[t]("keydown", x.a11y.onEnterKey)),
                  x.params.prevButton &&
                    x.prevButton &&
                    x.prevButton.length > 0 &&
                    (x.prevButton[t]("click", x.onClickPrev),
                    x.params.a11y &&
                      x.a11y &&
                      x.prevButton[t]("keydown", x.a11y.onEnterKey)),
                  x.params.pagination &&
                    x.params.paginationClickable &&
                    (x.paginationContainer[t](
                      "click",
                      "." + x.params.bulletClass,
                      x.onClickIndex
                    ),
                    x.params.a11y &&
                      x.a11y &&
                      x.paginationContainer[t](
                        "keydown",
                        "." + x.params.bulletClass,
                        x.a11y.onEnterKey
                      )),
                  (x.params.preventClicks ||
                    x.params.preventClicksPropagation) &&
                    r[a]("click", x.preventClicks, !0);
              }),
              (x.attachEvents = function () {
                x.initEvents();
              }),
              (x.detachEvents = function () {
                x.initEvents(!0);
              }),
              (x.allowClick = !0),
              (x.preventClicks = function (e) {
                x.allowClick ||
                  (x.params.preventClicks && e.preventDefault(),
                  x.params.preventClicksPropagation &&
                    x.animating &&
                    (e.stopPropagation(), e.stopImmediatePropagation()));
              }),
              (x.onClickNext = function (e) {
                e.preventDefault(),
                  (x.isEnd && !x.params.loop) || x.slideNext();
              }),
              (x.onClickPrev = function (e) {
                e.preventDefault(),
                  (x.isBeginning && !x.params.loop) || x.slidePrev();
              }),
              (x.onClickIndex = function (t) {
                t.preventDefault();
                var a = e(this).index() * x.params.slidesPerGroup;
                x.params.loop && (a += x.loopedSlides), x.slideTo(a);
              }),
              (x.updateClickedSlide = function (t) {
                var a = l(t, "." + x.params.slideClass),
                  r = !1;
                if (a)
                  for (var i = 0; i < x.slides.length; i++)
                    x.slides[i] === a && (r = !0);
                if (!a || !r)
                  return (
                    (x.clickedSlide = void 0), void (x.clickedIndex = void 0)
                  );
                if (
                  ((x.clickedSlide = a),
                  (x.clickedIndex = e(a).index()),
                  x.params.slideToClickedSlide &&
                    void 0 !== x.clickedIndex &&
                    x.clickedIndex !== x.activeIndex)
                ) {
                  var n,
                    s = x.clickedIndex,
                    o =
                      "auto" === x.params.slidesPerView
                        ? x.currentSlidesPerView()
                        : x.params.slidesPerView;
                  if (x.params.loop) {
                    if (x.animating) return;
                    (n = parseInt(
                      e(x.clickedSlide).attr("data-swiper-slide-index"),
                      10
                    )),
                      x.params.centeredSlides
                        ? s < x.loopedSlides - o / 2 ||
                          s > x.slides.length - x.loopedSlides + o / 2
                          ? (x.fixLoop(),
                            (s = x.wrapper
                              .children(
                                "." +
                                  x.params.slideClass +
                                  '[data-swiper-slide-index="' +
                                  n +
                                  '"]:not(.' +
                                  x.params.slideDuplicateClass +
                                  ")"
                              )
                              .eq(0)
                              .index()),
                            setTimeout(function () {
                              x.slideTo(s);
                            }, 0))
                          : x.slideTo(s)
                        : s > x.slides.length - o
                        ? (x.fixLoop(),
                          (s = x.wrapper
                            .children(
                              "." +
                                x.params.slideClass +
                                '[data-swiper-slide-index="' +
                                n +
                                '"]:not(.' +
                                x.params.slideDuplicateClass +
                                ")"
                            )
                            .eq(0)
                            .index()),
                          setTimeout(function () {
                            x.slideTo(s);
                          }, 0))
                        : x.slideTo(s);
                  } else x.slideTo(s);
                }
              });
            var S,
              C,
              E,
              M,
              z,
              k,
              P,
              I,
              L,
              D,
              B,
              O,
              A = "input, select, textarea, button, video",
              N = Date.now(),
              H = [];
            for (var Y in ((x.animating = !1),
            (x.touches = {
              startX: 0,
              startY: 0,
              currentX: 0,
              currentY: 0,
              diff: 0,
            }),
            (x.onTouchStart = function (t) {
              if (
                (t.originalEvent && (t = t.originalEvent),
                (B = "touchstart" === t.type) ||
                  !("which" in t) ||
                  3 !== t.which)
              ) {
                if (x.params.noSwiping && l(t, "." + x.params.noSwipingClass))
                  return void (x.allowClick = !0);
                if (!x.params.swipeHandler || l(t, x.params.swipeHandler)) {
                  var a = (x.touches.currentX =
                      "touchstart" === t.type
                        ? t.targetTouches[0].pageX
                        : t.pageX),
                    r = (x.touches.currentY =
                      "touchstart" === t.type
                        ? t.targetTouches[0].pageY
                        : t.pageY);
                  if (
                    !(
                      x.device.ios &&
                      x.params.iOSEdgeSwipeDetection &&
                      a <= x.params.iOSEdgeSwipeThreshold
                    )
                  ) {
                    if (
                      ((S = !0),
                      (C = !1),
                      (E = !0),
                      (z = void 0),
                      (O = void 0),
                      (x.touches.startX = a),
                      (x.touches.startY = r),
                      (M = Date.now()),
                      (x.allowClick = !0),
                      x.updateContainerSize(),
                      (x.swipeDirection = void 0),
                      x.params.threshold > 0 && (I = !1),
                      "touchstart" !== t.type)
                    ) {
                      var i = !0;
                      e(t.target).is(A) && (i = !1),
                        document.activeElement &&
                          e(document.activeElement).is(A) &&
                          document.activeElement.blur(),
                        i && t.preventDefault();
                    }
                    x.emit("onTouchStart", x, t);
                  }
                }
              }
            }),
            (x.onTouchMove = function (t) {
              if (
                (t.originalEvent && (t = t.originalEvent),
                !B || "mousemove" !== t.type)
              ) {
                if (t.preventedByNestedSwiper)
                  return (
                    (x.touches.startX =
                      "touchmove" === t.type
                        ? t.targetTouches[0].pageX
                        : t.pageX),
                    void (x.touches.startY =
                      "touchmove" === t.type
                        ? t.targetTouches[0].pageY
                        : t.pageY)
                  );
                if (x.params.onlyExternal)
                  return (
                    (x.allowClick = !1),
                    void (
                      S &&
                      ((x.touches.startX = x.touches.currentX =
                        "touchmove" === t.type
                          ? t.targetTouches[0].pageX
                          : t.pageX),
                      (x.touches.startY = x.touches.currentY =
                        "touchmove" === t.type
                          ? t.targetTouches[0].pageY
                          : t.pageY),
                      (M = Date.now()))
                    )
                  );
                if (B && x.params.touchReleaseOnEdges && !x.params.loop)
                  if (x.isHorizontal()) {
                    if (
                      (x.touches.currentX < x.touches.startX &&
                        x.translate <= x.maxTranslate()) ||
                      (x.touches.currentX > x.touches.startX &&
                        x.translate >= x.minTranslate())
                    )
                      return;
                  } else if (
                    (x.touches.currentY < x.touches.startY &&
                      x.translate <= x.maxTranslate()) ||
                    (x.touches.currentY > x.touches.startY &&
                      x.translate >= x.minTranslate())
                  )
                    return;
                if (
                  B &&
                  document.activeElement &&
                  t.target === document.activeElement &&
                  e(t.target).is(A)
                )
                  return (C = !0), void (x.allowClick = !1);
                var a;
                if (
                  (E && x.emit("onTouchMove", x, t),
                  !(t.targetTouches && t.targetTouches.length > 1))
                )
                  if (
                    ((x.touches.currentX =
                      "touchmove" === t.type
                        ? t.targetTouches[0].pageX
                        : t.pageX),
                    (x.touches.currentY =
                      "touchmove" === t.type
                        ? t.targetTouches[0].pageY
                        : t.pageY),
                    void 0 === z &&
                      ((x.isHorizontal() &&
                        x.touches.currentY === x.touches.startY) ||
                      (!x.isHorizontal() &&
                        x.touches.currentX === x.touches.startX)
                        ? (z = !1)
                        : ((a =
                            (180 *
                              Math.atan2(
                                Math.abs(x.touches.currentY - x.touches.startY),
                                Math.abs(x.touches.currentX - x.touches.startX)
                              )) /
                            Math.PI),
                          (z = x.isHorizontal()
                            ? a > x.params.touchAngle
                            : 90 - a > x.params.touchAngle))),
                    z && x.emit("onTouchMoveOpposite", x, t),
                    void 0 === O &&
                      ((x.touches.currentX === x.touches.startX &&
                        x.touches.currentY === x.touches.startY) ||
                        (O = !0)),
                    S)
                  ) {
                    if (z) return void (S = !1);
                    if (O) {
                      (x.allowClick = !1),
                        x.emit("onSliderMove", x, t),
                        t.preventDefault(),
                        x.params.touchMoveStopPropagation &&
                          !x.params.nested &&
                          t.stopPropagation(),
                        C ||
                          (n.loop && x.fixLoop(),
                          (P = x.getWrapperTranslate()),
                          x.setWrapperTransition(0),
                          x.animating &&
                            x.wrapper.trigger(
                              "webkitTransitionEnd transitionend oTransitionEnd MSTransitionEnd msTransitionEnd"
                            ),
                          x.params.autoplay &&
                            x.autoplaying &&
                            (x.params.autoplayDisableOnInteraction
                              ? x.stopAutoplay()
                              : x.pauseAutoplay()),
                          (D = !1),
                          !x.params.grabCursor ||
                            (!0 !== x.params.allowSwipeToNext &&
                              !0 !== x.params.allowSwipeToPrev) ||
                            x.setGrabCursor(!0)),
                        (C = !0);
                      var r = (x.touches.diff = x.isHorizontal()
                        ? x.touches.currentX - x.touches.startX
                        : x.touches.currentY - x.touches.startY);
                      (r *= x.params.touchRatio),
                        x.rtl && (r = -r),
                        (x.swipeDirection = r > 0 ? "prev" : "next"),
                        (k = r + P);
                      var i = !0;
                      if (
                        (r > 0 && k > x.minTranslate()
                          ? ((i = !1),
                            x.params.resistance &&
                              (k =
                                x.minTranslate() -
                                1 +
                                Math.pow(
                                  -x.minTranslate() + P + r,
                                  x.params.resistanceRatio
                                )))
                          : r < 0 &&
                            k < x.maxTranslate() &&
                            ((i = !1),
                            x.params.resistance &&
                              (k =
                                x.maxTranslate() +
                                1 -
                                Math.pow(
                                  x.maxTranslate() - P - r,
                                  x.params.resistanceRatio
                                ))),
                        i && (t.preventedByNestedSwiper = !0),
                        !x.params.allowSwipeToNext &&
                          "next" === x.swipeDirection &&
                          k < P &&
                          (k = P),
                        !x.params.allowSwipeToPrev &&
                          "prev" === x.swipeDirection &&
                          k > P &&
                          (k = P),
                        x.params.threshold > 0)
                      ) {
                        if (!(Math.abs(r) > x.params.threshold || I))
                          return void (k = P);
                        if (!I)
                          return (
                            (I = !0),
                            (x.touches.startX = x.touches.currentX),
                            (x.touches.startY = x.touches.currentY),
                            (k = P),
                            void (x.touches.diff = x.isHorizontal()
                              ? x.touches.currentX - x.touches.startX
                              : x.touches.currentY - x.touches.startY)
                          );
                      }
                      x.params.followFinger &&
                        ((x.params.freeMode || x.params.watchSlidesProgress) &&
                          x.updateActiveIndex(),
                        x.params.freeMode &&
                          (0 === H.length &&
                            H.push({
                              position:
                                x.touches[
                                  x.isHorizontal() ? "startX" : "startY"
                                ],
                              time: M,
                            }),
                          H.push({
                            position:
                              x.touches[
                                x.isHorizontal() ? "currentX" : "currentY"
                              ],
                            time: new window.Date().getTime(),
                          })),
                        x.updateProgress(k),
                        x.setWrapperTranslate(k));
                    }
                  }
              }
            }),
            (x.onTouchEnd = function (t) {
              if (
                (t.originalEvent && (t = t.originalEvent),
                E && x.emit("onTouchEnd", x, t),
                (E = !1),
                S)
              ) {
                x.params.grabCursor &&
                  C &&
                  S &&
                  (!0 === x.params.allowSwipeToNext ||
                    !0 === x.params.allowSwipeToPrev) &&
                  x.setGrabCursor(!1);
                var a,
                  r = Date.now(),
                  i = r - M;
                if (
                  (x.allowClick &&
                    (x.updateClickedSlide(t),
                    x.emit("onTap", x, t),
                    i < 300 &&
                      r - N > 300 &&
                      (L && clearTimeout(L),
                      (L = setTimeout(function () {
                        x &&
                          (x.params.paginationHide &&
                            x.paginationContainer.length > 0 &&
                            !e(t.target).hasClass(x.params.bulletClass) &&
                            x.paginationContainer.toggleClass(
                              x.params.paginationHiddenClass
                            ),
                          x.emit("onClick", x, t));
                      }, 300))),
                    i < 300 &&
                      r - N < 300 &&
                      (L && clearTimeout(L), x.emit("onDoubleTap", x, t))),
                  (N = Date.now()),
                  setTimeout(function () {
                    x && (x.allowClick = !0);
                  }, 0),
                  !S ||
                    !C ||
                    !x.swipeDirection ||
                    0 === x.touches.diff ||
                    k === P)
                )
                  return void (S = C = !1);
                if (
                  ((S = C = !1),
                  (a = x.params.followFinger
                    ? x.rtl
                      ? x.translate
                      : -x.translate
                    : -k),
                  x.params.freeMode)
                ) {
                  if (a < -x.minTranslate())
                    return void x.slideTo(x.activeIndex);
                  if (a > -x.maxTranslate())
                    return void (x.slides.length < x.snapGrid.length
                      ? x.slideTo(x.snapGrid.length - 1)
                      : x.slideTo(x.slides.length - 1));
                  if (x.params.freeModeMomentum) {
                    if (H.length > 1) {
                      var n = H.pop(),
                        s = H.pop(),
                        o = n.position - s.position,
                        l = n.time - s.time;
                      (x.velocity = o / l),
                        (x.velocity = x.velocity / 2),
                        Math.abs(x.velocity) <
                          x.params.freeModeMinimumVelocity && (x.velocity = 0),
                        (l > 150 ||
                          new window.Date().getTime() - n.time > 300) &&
                          (x.velocity = 0);
                    } else x.velocity = 0;
                    (x.velocity =
                      x.velocity * x.params.freeModeMomentumVelocityRatio),
                      (H.length = 0);
                    var u = 1e3 * x.params.freeModeMomentumRatio,
                      d = x.velocity * u,
                      p = x.translate + d;
                    x.rtl && (p = -p);
                    var c,
                      m = !1,
                      h =
                        20 *
                        Math.abs(x.velocity) *
                        x.params.freeModeMomentumBounceRatio;
                    if (p < x.maxTranslate())
                      x.params.freeModeMomentumBounce
                        ? (p + x.maxTranslate() < -h &&
                            (p = x.maxTranslate() - h),
                          (c = x.maxTranslate()),
                          (m = !0),
                          (D = !0))
                        : (p = x.maxTranslate());
                    else if (p > x.minTranslate())
                      x.params.freeModeMomentumBounce
                        ? (p - x.minTranslate() > h &&
                            (p = x.minTranslate() + h),
                          (c = x.minTranslate()),
                          (m = !0),
                          (D = !0))
                        : (p = x.minTranslate());
                    else if (x.params.freeModeSticky) {
                      var f,
                        g = 0;
                      for (g = 0; g < x.snapGrid.length; g += 1)
                        if (x.snapGrid[g] > -p) {
                          f = g;
                          break;
                        }
                      (p =
                        Math.abs(x.snapGrid[f] - p) <
                          Math.abs(x.snapGrid[f - 1] - p) ||
                        "next" === x.swipeDirection
                          ? x.snapGrid[f]
                          : x.snapGrid[f - 1]),
                        x.rtl || (p = -p);
                    }
                    if (0 !== x.velocity)
                      u = x.rtl
                        ? Math.abs((-p - x.translate) / x.velocity)
                        : Math.abs((p - x.translate) / x.velocity);
                    else if (x.params.freeModeSticky)
                      return void x.slideReset();
                    x.params.freeModeMomentumBounce && m
                      ? (x.updateProgress(c),
                        x.setWrapperTransition(u),
                        x.setWrapperTranslate(p),
                        x.onTransitionStart(),
                        (x.animating = !0),
                        x.wrapper.transitionEnd(function () {
                          x &&
                            D &&
                            (x.emit("onMomentumBounce", x),
                            x.setWrapperTransition(x.params.speed),
                            x.setWrapperTranslate(c),
                            x.wrapper.transitionEnd(function () {
                              x && x.onTransitionEnd();
                            }));
                        }))
                      : x.velocity
                      ? (x.updateProgress(p),
                        x.setWrapperTransition(u),
                        x.setWrapperTranslate(p),
                        x.onTransitionStart(),
                        x.animating ||
                          ((x.animating = !0),
                          x.wrapper.transitionEnd(function () {
                            x && x.onTransitionEnd();
                          })))
                      : x.updateProgress(p),
                      x.updateActiveIndex();
                  }
                  return void (
                    (!x.params.freeModeMomentum ||
                      i >= x.params.longSwipesMs) &&
                    (x.updateProgress(), x.updateActiveIndex())
                  );
                }
                var v,
                  w = 0,
                  y = x.slidesSizesGrid[0];
                for (
                  v = 0;
                  v < x.slidesGrid.length;
                  v += x.params.slidesPerGroup
                )
                  void 0 !== x.slidesGrid[v + x.params.slidesPerGroup]
                    ? a >= x.slidesGrid[v] &&
                      a < x.slidesGrid[v + x.params.slidesPerGroup] &&
                      ((w = v),
                      (y =
                        x.slidesGrid[v + x.params.slidesPerGroup] -
                        x.slidesGrid[v]))
                    : a >= x.slidesGrid[v] &&
                      ((w = v),
                      (y =
                        x.slidesGrid[x.slidesGrid.length - 1] -
                        x.slidesGrid[x.slidesGrid.length - 2]));
                var b = (a - x.slidesGrid[w]) / y;
                if (i > x.params.longSwipesMs) {
                  if (!x.params.longSwipes)
                    return void x.slideTo(x.activeIndex);
                  "next" === x.swipeDirection &&
                    (b >= x.params.longSwipesRatio
                      ? x.slideTo(w + x.params.slidesPerGroup)
                      : x.slideTo(w)),
                    "prev" === x.swipeDirection &&
                      (b > 1 - x.params.longSwipesRatio
                        ? x.slideTo(w + x.params.slidesPerGroup)
                        : x.slideTo(w));
                } else {
                  if (!x.params.shortSwipes)
                    return void x.slideTo(x.activeIndex);
                  "next" === x.swipeDirection &&
                    x.slideTo(w + x.params.slidesPerGroup),
                    "prev" === x.swipeDirection && x.slideTo(w);
                }
              }
            }),
            (x._slideTo = function (e, t) {
              return x.slideTo(e, t, !0, !0);
            }),
            (x.slideTo = function (e, t, a, r) {
              void 0 === a && (a = !0),
                void 0 === e && (e = 0),
                e < 0 && (e = 0),
                (x.snapIndex = Math.floor(e / x.params.slidesPerGroup)),
                x.snapIndex >= x.snapGrid.length &&
                  (x.snapIndex = x.snapGrid.length - 1);
              var i = -x.snapGrid[x.snapIndex];
              if (
                (x.params.autoplay &&
                  x.autoplaying &&
                  (r || !x.params.autoplayDisableOnInteraction
                    ? x.pauseAutoplay(t)
                    : x.stopAutoplay()),
                x.updateProgress(i),
                x.params.normalizeSlideIndex)
              )
                for (var n = 0; n < x.slidesGrid.length; n++)
                  -Math.floor(100 * i) >= Math.floor(100 * x.slidesGrid[n]) &&
                    (e = n);
              return !(
                (!x.params.allowSwipeToNext &&
                  i < x.translate &&
                  i < x.minTranslate()) ||
                (!x.params.allowSwipeToPrev &&
                  i > x.translate &&
                  i > x.maxTranslate() &&
                  (x.activeIndex || 0) !== e) ||
                (void 0 === t && (t = x.params.speed),
                (x.previousIndex = x.activeIndex || 0),
                (x.activeIndex = e),
                x.updateRealIndex(),
                (x.rtl && -i === x.translate) || (!x.rtl && i === x.translate)
                  ? (x.params.autoHeight && x.updateAutoHeight(),
                    x.updateClasses(),
                    "slide" !== x.params.effect && x.setWrapperTranslate(i),
                    1)
                  : (x.updateClasses(),
                    x.onTransitionStart(a),
                    0 === t || x.browser.lteIE9
                      ? (x.setWrapperTranslate(i),
                        x.setWrapperTransition(0),
                        x.onTransitionEnd(a))
                      : (x.setWrapperTranslate(i),
                        x.setWrapperTransition(t),
                        x.animating ||
                          ((x.animating = !0),
                          x.wrapper.transitionEnd(function () {
                            x && x.onTransitionEnd(a);
                          }))),
                    0))
              );
            }),
            (x.onTransitionStart = function (e) {
              void 0 === e && (e = !0),
                x.params.autoHeight && x.updateAutoHeight(),
                x.lazy && x.lazy.onTransitionStart(),
                e &&
                  (x.emit("onTransitionStart", x),
                  x.activeIndex !== x.previousIndex &&
                    (x.emit("onSlideChangeStart", x),
                    x.activeIndex > x.previousIndex
                      ? x.emit("onSlideNextStart", x)
                      : x.emit("onSlidePrevStart", x)));
            }),
            (x.onTransitionEnd = function (e) {
              (x.animating = !1),
                x.setWrapperTransition(0),
                void 0 === e && (e = !0),
                x.lazy && x.lazy.onTransitionEnd(),
                e &&
                  (x.emit("onTransitionEnd", x),
                  x.activeIndex !== x.previousIndex &&
                    (x.emit("onSlideChangeEnd", x),
                    x.activeIndex > x.previousIndex
                      ? x.emit("onSlideNextEnd", x)
                      : x.emit("onSlidePrevEnd", x))),
                x.params.history &&
                  x.history &&
                  x.history.setHistory(x.params.history, x.activeIndex),
                x.params.hashnav && x.hashnav && x.hashnav.setHash();
            }),
            (x.slideNext = function (e, t, a) {
              return x.params.loop
                ? !x.animating &&
                    (x.fixLoop(),
                    x.container[0].clientLeft,
                    x.slideTo(x.activeIndex + x.params.slidesPerGroup, t, e, a))
                : x.slideTo(x.activeIndex + x.params.slidesPerGroup, t, e, a);
            }),
            (x._slideNext = function (e) {
              return x.slideNext(!0, e, !0);
            }),
            (x.slidePrev = function (e, t, a) {
              return x.params.loop
                ? !x.animating &&
                    (x.fixLoop(),
                    x.container[0].clientLeft,
                    x.slideTo(x.activeIndex - 1, t, e, a))
                : x.slideTo(x.activeIndex - 1, t, e, a);
            }),
            (x._slidePrev = function (e) {
              return x.slidePrev(!0, e, !0);
            }),
            (x.slideReset = function (e, t, a) {
              return x.slideTo(x.activeIndex, t, e);
            }),
            (x.disableTouchControl = function () {
              return (x.params.onlyExternal = !0), !0;
            }),
            (x.enableTouchControl = function () {
              return (x.params.onlyExternal = !1), !0;
            }),
            (x.setWrapperTransition = function (e, t) {
              x.wrapper.transition(e),
                "slide" !== x.params.effect &&
                  x.effects[x.params.effect] &&
                  x.effects[x.params.effect].setTransition(e),
                x.params.parallax && x.parallax && x.parallax.setTransition(e),
                x.params.scrollbar &&
                  x.scrollbar &&
                  x.scrollbar.setTransition(e),
                x.params.control &&
                  x.controller &&
                  x.controller.setTransition(e, t),
                x.emit("onSetTransition", x, e);
            }),
            (x.setWrapperTranslate = function (e, t, a) {
              var r = 0,
                i = 0;
              x.isHorizontal() ? (r = x.rtl ? -e : e) : (i = e),
                x.params.roundLengths && ((r = s(r)), (i = s(i))),
                x.params.virtualTranslate ||
                  (x.support.transforms3d
                    ? x.wrapper.transform(
                        "translate3d(" + r + "px, " + i + "px, 0px)"
                      )
                    : x.wrapper.transform(
                        "translate(" + r + "px, " + i + "px)"
                      )),
                (x.translate = x.isHorizontal() ? r : i);
              var n = x.maxTranslate() - x.minTranslate();
              (0 === n ? 0 : (e - x.minTranslate()) / n) !== x.progress &&
                x.updateProgress(e),
                t && x.updateActiveIndex(),
                "slide" !== x.params.effect &&
                  x.effects[x.params.effect] &&
                  x.effects[x.params.effect].setTranslate(x.translate),
                x.params.parallax &&
                  x.parallax &&
                  x.parallax.setTranslate(x.translate),
                x.params.scrollbar &&
                  x.scrollbar &&
                  x.scrollbar.setTranslate(x.translate),
                x.params.control &&
                  x.controller &&
                  x.controller.setTranslate(x.translate, a),
                x.emit("onSetTranslate", x, x.translate);
            }),
            (x.getTranslate = function (e, t) {
              var a, r, i, n;
              return (
                void 0 === t && (t = "x"),
                x.params.virtualTranslate
                  ? x.rtl
                    ? -x.translate
                    : x.translate
                  : ((i = window.getComputedStyle(e, null)),
                    window.WebKitCSSMatrix
                      ? ((r = i.transform || i.webkitTransform).split(",")
                          .length > 6 &&
                          (r = r
                            .split(", ")
                            .map(function (e) {
                              return e.replace(",", ".");
                            })
                            .join(", ")),
                        (n = new window.WebKitCSSMatrix("none" === r ? "" : r)))
                      : (a = (n =
                          i.MozTransform ||
                          i.OTransform ||
                          i.MsTransform ||
                          i.msTransform ||
                          i.transform ||
                          i
                            .getPropertyValue("transform")
                            .replace("translate(", "matrix(1, 0, 0, 1,"))
                          .toString()
                          .split(",")),
                    "x" === t &&
                      (r = window.WebKitCSSMatrix
                        ? n.m41
                        : 16 === a.length
                        ? parseFloat(a[12])
                        : parseFloat(a[4])),
                    "y" === t &&
                      (r = window.WebKitCSSMatrix
                        ? n.m42
                        : 16 === a.length
                        ? parseFloat(a[13])
                        : parseFloat(a[5])),
                    x.rtl && r && (r = -r),
                    r || 0)
              );
            }),
            (x.getWrapperTranslate = function (e) {
              return (
                void 0 === e && (e = x.isHorizontal() ? "x" : "y"),
                x.getTranslate(x.wrapper[0], e)
              );
            }),
            (x.observers = []),
            (x.initObservers = function () {
              if (x.params.observeParents)
                for (var e = x.container.parents(), t = 0; t < e.length; t++)
                  u(e[t]);
              u(x.container[0], { childList: !1 }),
                u(x.wrapper[0], { attributes: !1 });
            }),
            (x.disconnectObservers = function () {
              for (var e = 0; e < x.observers.length; e++)
                x.observers[e].disconnect();
              x.observers = [];
            }),
            (x.createLoop = function () {
              x.wrapper
                .children(
                  "." + x.params.slideClass + "." + x.params.slideDuplicateClass
                )
                .remove();
              var t = x.wrapper.children("." + x.params.slideClass);
              "auto" !== x.params.slidesPerView ||
                x.params.loopedSlides ||
                (x.params.loopedSlides = t.length),
                (x.loopedSlides = parseInt(
                  x.params.loopedSlides || x.params.slidesPerView,
                  10
                )),
                (x.loopedSlides =
                  x.loopedSlides + x.params.loopAdditionalSlides),
                x.loopedSlides > t.length && (x.loopedSlides = t.length);
              var a,
                r = [],
                i = [];
              for (
                t.each(function (a, n) {
                  var s = e(this);
                  a < x.loopedSlides && i.push(n),
                    a < t.length && a >= t.length - x.loopedSlides && r.push(n),
                    s.attr("data-swiper-slide-index", a);
                }),
                  a = 0;
                a < i.length;
                a++
              )
                x.wrapper.append(
                  e(i[a].cloneNode(!0)).addClass(x.params.slideDuplicateClass)
                );
              for (a = r.length - 1; a >= 0; a--)
                x.wrapper.prepend(
                  e(r[a].cloneNode(!0)).addClass(x.params.slideDuplicateClass)
                );
            }),
            (x.destroyLoop = function () {
              x.wrapper
                .children(
                  "." + x.params.slideClass + "." + x.params.slideDuplicateClass
                )
                .remove(),
                x.slides.removeAttr("data-swiper-slide-index");
            }),
            (x.reLoop = function (e) {
              var t = x.activeIndex - x.loopedSlides;
              x.destroyLoop(),
                x.createLoop(),
                x.updateSlidesSize(),
                e && x.slideTo(t + x.loopedSlides, 0, !1);
            }),
            (x.fixLoop = function () {
              var e;
              x.activeIndex < x.loopedSlides
                ? ((e = x.slides.length - 3 * x.loopedSlides + x.activeIndex),
                  (e += x.loopedSlides),
                  x.slideTo(e, 0, !1, !0))
                : (("auto" === x.params.slidesPerView &&
                    x.activeIndex >= 2 * x.loopedSlides) ||
                    x.activeIndex >
                      x.slides.length - 2 * x.params.slidesPerView) &&
                  ((e = -x.slides.length + x.activeIndex + x.loopedSlides),
                  (e += x.loopedSlides),
                  x.slideTo(e, 0, !1, !0));
            }),
            (x.appendSlide = function (e) {
              if (
                (x.params.loop && x.destroyLoop(), "object" == r(e) && e.length)
              )
                for (var t = 0; t < e.length; t++)
                  e[t] && x.wrapper.append(e[t]);
              else x.wrapper.append(e);
              x.params.loop && x.createLoop(),
                (x.params.observer && x.support.observer) || x.update(!0);
            }),
            (x.prependSlide = function (e) {
              x.params.loop && x.destroyLoop();
              var t = x.activeIndex + 1;
              if ("object" == r(e) && e.length) {
                for (var a = 0; a < e.length; a++)
                  e[a] && x.wrapper.prepend(e[a]);
                t = x.activeIndex + e.length;
              } else x.wrapper.prepend(e);
              x.params.loop && x.createLoop(),
                (x.params.observer && x.support.observer) || x.update(!0),
                x.slideTo(t, 0, !1);
            }),
            (x.removeSlide = function (e) {
              x.params.loop &&
                (x.destroyLoop(),
                (x.slides = x.wrapper.children("." + x.params.slideClass)));
              var t,
                a = x.activeIndex;
              if ("object" == r(e) && e.length) {
                for (var i = 0; i < e.length; i++)
                  (t = e[i]),
                    x.slides[t] && x.slides.eq(t).remove(),
                    t < a && a--;
                a = Math.max(a, 0);
              } else
                (t = e),
                  x.slides[t] && x.slides.eq(t).remove(),
                  t < a && a--,
                  (a = Math.max(a, 0));
              x.params.loop && x.createLoop(),
                (x.params.observer && x.support.observer) || x.update(!0),
                x.params.loop
                  ? x.slideTo(a + x.loopedSlides, 0, !1)
                  : x.slideTo(a, 0, !1);
            }),
            (x.removeAllSlides = function () {
              for (var e = [], t = 0; t < x.slides.length; t++) e.push(t);
              x.removeSlide(e);
            }),
            (x.effects = {
              fade: {
                setTranslate: function () {
                  for (var e = 0; e < x.slides.length; e++) {
                    var t = x.slides.eq(e),
                      a = -t[0].swiperSlideOffset;
                    x.params.virtualTranslate || (a -= x.translate);
                    var r = 0;
                    x.isHorizontal() || ((r = a), (a = 0));
                    var i = x.params.fade.crossFade
                      ? Math.max(1 - Math.abs(t[0].progress), 0)
                      : 1 + Math.min(Math.max(t[0].progress, -1), 0);
                    t.css({ opacity: i }).transform(
                      "translate3d(" + a + "px, " + r + "px, 0px)"
                    );
                  }
                },
                setTransition: function (e) {
                  if (
                    (x.slides.transition(e),
                    x.params.virtualTranslate && 0 !== e)
                  ) {
                    var t = !1;
                    x.slides.transitionEnd(function () {
                      if (!t && x) {
                        (t = !0), (x.animating = !1);
                        for (
                          var e = [
                              "webkitTransitionEnd",
                              "transitionend",
                              "oTransitionEnd",
                              "MSTransitionEnd",
                              "msTransitionEnd",
                            ],
                            a = 0;
                          a < e.length;
                          a++
                        )
                          x.wrapper.trigger(e[a]);
                      }
                    });
                  }
                },
              },
              flip: {
                setTranslate: function () {
                  for (var t = 0; t < x.slides.length; t++) {
                    var a = x.slides.eq(t),
                      r = a[0].progress;
                    x.params.flip.limitRotation &&
                      (r = Math.max(Math.min(a[0].progress, 1), -1));
                    var i = -180 * r,
                      n = 0,
                      s = -a[0].swiperSlideOffset,
                      o = 0;
                    if (
                      (x.isHorizontal()
                        ? x.rtl && (i = -i)
                        : ((o = s), (s = 0), (n = -i), (i = 0)),
                      (a[0].style.zIndex =
                        -Math.abs(Math.round(r)) + x.slides.length),
                      x.params.flip.slideShadows)
                    ) {
                      var l = x.isHorizontal()
                          ? a.find(".swiper-slide-shadow-left")
                          : a.find(".swiper-slide-shadow-top"),
                        u = x.isHorizontal()
                          ? a.find(".swiper-slide-shadow-right")
                          : a.find(".swiper-slide-shadow-bottom");
                      0 === l.length &&
                        ((l = e(
                          '<div class="swiper-slide-shadow-' +
                            (x.isHorizontal() ? "left" : "top") +
                            '"></div>'
                        )),
                        a.append(l)),
                        0 === u.length &&
                          ((u = e(
                            '<div class="swiper-slide-shadow-' +
                              (x.isHorizontal() ? "right" : "bottom") +
                              '"></div>'
                          )),
                          a.append(u)),
                        l.length && (l[0].style.opacity = Math.max(-r, 0)),
                        u.length && (u[0].style.opacity = Math.max(r, 0));
                    }
                    a.transform(
                      "translate3d(" +
                        s +
                        "px, " +
                        o +
                        "px, 0px) rotateX(" +
                        n +
                        "deg) rotateY(" +
                        i +
                        "deg)"
                    );
                  }
                },
                setTransition: function (t) {
                  if (
                    (x.slides
                      .transition(t)
                      .find(
                        ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
                      )
                      .transition(t),
                    x.params.virtualTranslate && 0 !== t)
                  ) {
                    var a = !1;
                    x.slides.eq(x.activeIndex).transitionEnd(function () {
                      if (
                        !a &&
                        x &&
                        e(this).hasClass(x.params.slideActiveClass)
                      ) {
                        (a = !0), (x.animating = !1);
                        for (
                          var t = [
                              "webkitTransitionEnd",
                              "transitionend",
                              "oTransitionEnd",
                              "MSTransitionEnd",
                              "msTransitionEnd",
                            ],
                            r = 0;
                          r < t.length;
                          r++
                        )
                          x.wrapper.trigger(t[r]);
                      }
                    });
                  }
                },
              },
              cube: {
                setTranslate: function () {
                  var t,
                    a = 0;
                  x.params.cube.shadow &&
                    (x.isHorizontal()
                      ? (0 ===
                          (t = x.wrapper.find(".swiper-cube-shadow")).length &&
                          ((t = e('<div class="swiper-cube-shadow"></div>')),
                          x.wrapper.append(t)),
                        t.css({ height: x.width + "px" }))
                      : 0 ===
                          (t = x.container.find(".swiper-cube-shadow"))
                            .length &&
                        ((t = e('<div class="swiper-cube-shadow"></div>')),
                        x.container.append(t)));
                  for (var r = 0; r < x.slides.length; r++) {
                    var i = x.slides.eq(r),
                      n = 90 * r,
                      s = Math.floor(n / 360);
                    x.rtl && ((n = -n), (s = Math.floor(-n / 360)));
                    var o = Math.max(Math.min(i[0].progress, 1), -1),
                      l = 0,
                      u = 0,
                      d = 0;
                    r % 4 == 0
                      ? ((l = 4 * -s * x.size), (d = 0))
                      : (r - 1) % 4 == 0
                      ? ((l = 0), (d = 4 * -s * x.size))
                      : (r - 2) % 4 == 0
                      ? ((l = x.size + 4 * s * x.size), (d = x.size))
                      : (r - 3) % 4 == 0 &&
                        ((l = -x.size), (d = 3 * x.size + 4 * x.size * s)),
                      x.rtl && (l = -l),
                      x.isHorizontal() || ((u = l), (l = 0));
                    var p =
                      "rotateX(" +
                      (x.isHorizontal() ? 0 : -n) +
                      "deg) rotateY(" +
                      (x.isHorizontal() ? n : 0) +
                      "deg) translate3d(" +
                      l +
                      "px, " +
                      u +
                      "px, " +
                      d +
                      "px)";
                    if (
                      (o <= 1 &&
                        o > -1 &&
                        ((a = 90 * r + 90 * o),
                        x.rtl && (a = 90 * -r - 90 * o)),
                      i.transform(p),
                      x.params.cube.slideShadows)
                    ) {
                      var c = x.isHorizontal()
                          ? i.find(".swiper-slide-shadow-left")
                          : i.find(".swiper-slide-shadow-top"),
                        m = x.isHorizontal()
                          ? i.find(".swiper-slide-shadow-right")
                          : i.find(".swiper-slide-shadow-bottom");
                      0 === c.length &&
                        ((c = e(
                          '<div class="swiper-slide-shadow-' +
                            (x.isHorizontal() ? "left" : "top") +
                            '"></div>'
                        )),
                        i.append(c)),
                        0 === m.length &&
                          ((m = e(
                            '<div class="swiper-slide-shadow-' +
                              (x.isHorizontal() ? "right" : "bottom") +
                              '"></div>'
                          )),
                          i.append(m)),
                        c.length && (c[0].style.opacity = Math.max(-o, 0)),
                        m.length && (m[0].style.opacity = Math.max(o, 0));
                    }
                  }
                  if (
                    (x.wrapper.css({
                      "-webkit-transform-origin":
                        "50% 50% -" + x.size / 2 + "px",
                      "-moz-transform-origin": "50% 50% -" + x.size / 2 + "px",
                      "-ms-transform-origin": "50% 50% -" + x.size / 2 + "px",
                      "transform-origin": "50% 50% -" + x.size / 2 + "px",
                    }),
                    x.params.cube.shadow)
                  )
                    if (x.isHorizontal())
                      t.transform(
                        "translate3d(0px, " +
                          (x.width / 2 + x.params.cube.shadowOffset) +
                          "px, " +
                          -x.width / 2 +
                          "px) rotateX(90deg) rotateZ(0deg) scale(" +
                          x.params.cube.shadowScale +
                          ")"
                      );
                    else {
                      var h = Math.abs(a) - 90 * Math.floor(Math.abs(a) / 90),
                        f =
                          1.5 -
                          (Math.sin((2 * h * Math.PI) / 360) / 2 +
                            Math.cos((2 * h * Math.PI) / 360) / 2),
                        g = x.params.cube.shadowScale,
                        v = x.params.cube.shadowScale / f,
                        w = x.params.cube.shadowOffset;
                      t.transform(
                        "scale3d(" +
                          g +
                          ", 1, " +
                          v +
                          ") translate3d(0px, " +
                          (x.height / 2 + w) +
                          "px, " +
                          -x.height / 2 / v +
                          "px) rotateX(-90deg)"
                      );
                    }
                  var y = x.isSafari || x.isUiWebView ? -x.size / 2 : 0;
                  x.wrapper.transform(
                    "translate3d(0px,0," +
                      y +
                      "px) rotateX(" +
                      (x.isHorizontal() ? 0 : a) +
                      "deg) rotateY(" +
                      (x.isHorizontal() ? -a : 0) +
                      "deg)"
                  );
                },
                setTransition: function (e) {
                  x.slides
                    .transition(e)
                    .find(
                      ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
                    )
                    .transition(e),
                    x.params.cube.shadow &&
                      !x.isHorizontal() &&
                      x.container.find(".swiper-cube-shadow").transition(e);
                },
              },
              coverflow: {
                setTranslate: function () {
                  for (
                    var t = x.translate,
                      a = x.isHorizontal()
                        ? -t + x.width / 2
                        : -t + x.height / 2,
                      r = x.isHorizontal()
                        ? x.params.coverflow.rotate
                        : -x.params.coverflow.rotate,
                      i = x.params.coverflow.depth,
                      n = 0,
                      s = x.slides.length;
                    n < s;
                    n++
                  ) {
                    var o = x.slides.eq(n),
                      l = x.slidesSizesGrid[n],
                      u =
                        ((a - o[0].swiperSlideOffset - l / 2) / l) *
                        x.params.coverflow.modifier,
                      d = x.isHorizontal() ? r * u : 0,
                      p = x.isHorizontal() ? 0 : r * u,
                      c = -i * Math.abs(u),
                      m = x.isHorizontal() ? 0 : x.params.coverflow.stretch * u,
                      h = x.isHorizontal() ? x.params.coverflow.stretch * u : 0;
                    Math.abs(h) < 0.001 && (h = 0),
                      Math.abs(m) < 0.001 && (m = 0),
                      Math.abs(c) < 0.001 && (c = 0),
                      Math.abs(d) < 0.001 && (d = 0),
                      Math.abs(p) < 0.001 && (p = 0);
                    var f =
                      "translate3d(" +
                      h +
                      "px," +
                      m +
                      "px," +
                      c +
                      "px)  rotateX(" +
                      p +
                      "deg) rotateY(" +
                      d +
                      "deg)";
                    if (
                      (o.transform(f),
                      (o[0].style.zIndex = 1 - Math.abs(Math.round(u))),
                      x.params.coverflow.slideShadows)
                    ) {
                      var g = x.isHorizontal()
                          ? o.find(".swiper-slide-shadow-left")
                          : o.find(".swiper-slide-shadow-top"),
                        v = x.isHorizontal()
                          ? o.find(".swiper-slide-shadow-right")
                          : o.find(".swiper-slide-shadow-bottom");
                      0 === g.length &&
                        ((g = e(
                          '<div class="swiper-slide-shadow-' +
                            (x.isHorizontal() ? "left" : "top") +
                            '"></div>'
                        )),
                        o.append(g)),
                        0 === v.length &&
                          ((v = e(
                            '<div class="swiper-slide-shadow-' +
                              (x.isHorizontal() ? "right" : "bottom") +
                              '"></div>'
                          )),
                          o.append(v)),
                        g.length && (g[0].style.opacity = u > 0 ? u : 0),
                        v.length && (v[0].style.opacity = -u > 0 ? -u : 0);
                    }
                  }
                  x.browser.ie &&
                    (x.wrapper[0].style.perspectiveOrigin = a + "px 50%");
                },
                setTransition: function (e) {
                  x.slides
                    .transition(e)
                    .find(
                      ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
                    )
                    .transition(e);
                },
              },
            }),
            (x.lazy = {
              initialImageLoaded: !1,
              loadImageInSlide: function (t, a) {
                if (
                  void 0 !== t &&
                  (void 0 === a && (a = !0), 0 !== x.slides.length)
                ) {
                  var r = x.slides.eq(t),
                    i = r.find(
                      "." +
                        x.params.lazyLoadingClass +
                        ":not(." +
                        x.params.lazyStatusLoadedClass +
                        "):not(." +
                        x.params.lazyStatusLoadingClass +
                        ")"
                    );
                  !r.hasClass(x.params.lazyLoadingClass) ||
                    r.hasClass(x.params.lazyStatusLoadedClass) ||
                    r.hasClass(x.params.lazyStatusLoadingClass) ||
                    (i = i.add(r[0])),
                    0 !== i.length &&
                      i.each(function () {
                        var t = e(this);
                        t.addClass(x.params.lazyStatusLoadingClass);
                        var i = t.attr("data-background"),
                          n = t.attr("data-src"),
                          s = t.attr("data-srcset"),
                          o = t.attr("data-sizes");
                        x.loadImage(t[0], n || i, s, o, !1, function () {
                          if (null != x && x) {
                            if (
                              (i
                                ? (t.css(
                                    "background-image",
                                    'url("' + i + '")'
                                  ),
                                  t.removeAttr("data-background"))
                                : (s &&
                                    (t.attr("srcset", s),
                                    t.removeAttr("data-srcset")),
                                  o &&
                                    (t.attr("sizes", o),
                                    t.removeAttr("data-sizes")),
                                  n &&
                                    (t.attr("src", n),
                                    t.removeAttr("data-src"))),
                              t
                                .addClass(x.params.lazyStatusLoadedClass)
                                .removeClass(x.params.lazyStatusLoadingClass),
                              r
                                .find(
                                  "." +
                                    x.params.lazyPreloaderClass +
                                    ", ." +
                                    x.params.preloaderClass
                                )
                                .remove(),
                              x.params.loop && a)
                            ) {
                              var e = r.attr("data-swiper-slide-index");
                              if (r.hasClass(x.params.slideDuplicateClass)) {
                                var l = x.wrapper.children(
                                  '[data-swiper-slide-index="' +
                                    e +
                                    '"]:not(.' +
                                    x.params.slideDuplicateClass +
                                    ")"
                                );
                                x.lazy.loadImageInSlide(l.index(), !1);
                              } else {
                                var u = x.wrapper.children(
                                  "." +
                                    x.params.slideDuplicateClass +
                                    '[data-swiper-slide-index="' +
                                    e +
                                    '"]'
                                );
                                x.lazy.loadImageInSlide(u.index(), !1);
                              }
                            }
                            x.emit("onLazyImageReady", x, r[0], t[0]);
                          }
                        }),
                          x.emit("onLazyImageLoad", x, r[0], t[0]);
                      });
                }
              },
              load: function () {
                var t,
                  a = x.params.slidesPerView;
                if (
                  ("auto" === a && (a = 0),
                  x.lazy.initialImageLoaded || (x.lazy.initialImageLoaded = !0),
                  x.params.watchSlidesVisibility)
                )
                  x.wrapper
                    .children("." + x.params.slideVisibleClass)
                    .each(function () {
                      x.lazy.loadImageInSlide(e(this).index());
                    });
                else if (a > 1)
                  for (t = x.activeIndex; t < x.activeIndex + a; t++)
                    x.slides[t] && x.lazy.loadImageInSlide(t);
                else x.lazy.loadImageInSlide(x.activeIndex);
                if (x.params.lazyLoadingInPrevNext)
                  if (
                    a > 1 ||
                    (x.params.lazyLoadingInPrevNextAmount &&
                      x.params.lazyLoadingInPrevNextAmount > 1)
                  ) {
                    var r = x.params.lazyLoadingInPrevNextAmount,
                      i = a,
                      n = Math.min(
                        x.activeIndex + i + Math.max(r, i),
                        x.slides.length
                      ),
                      s = Math.max(x.activeIndex - Math.max(i, r), 0);
                    for (t = x.activeIndex + a; t < n; t++)
                      x.slides[t] && x.lazy.loadImageInSlide(t);
                    for (t = s; t < x.activeIndex; t++)
                      x.slides[t] && x.lazy.loadImageInSlide(t);
                  } else {
                    var o = x.wrapper.children("." + x.params.slideNextClass);
                    o.length > 0 && x.lazy.loadImageInSlide(o.index());
                    var l = x.wrapper.children("." + x.params.slidePrevClass);
                    l.length > 0 && x.lazy.loadImageInSlide(l.index());
                  }
              },
              onTransitionStart: function () {
                x.params.lazyLoading &&
                  (x.params.lazyLoadingOnTransitionStart ||
                    (!x.params.lazyLoadingOnTransitionStart &&
                      !x.lazy.initialImageLoaded)) &&
                  x.lazy.load();
              },
              onTransitionEnd: function () {
                x.params.lazyLoading &&
                  !x.params.lazyLoadingOnTransitionStart &&
                  x.lazy.load();
              },
            }),
            (x.scrollbar = {
              isTouched: !1,
              setDragPosition: function (e) {
                var t = x.scrollbar,
                  a =
                    (x.isHorizontal()
                      ? "touchstart" === e.type || "touchmove" === e.type
                        ? e.targetTouches[0].pageX
                        : e.pageX || e.clientX
                      : "touchstart" === e.type || "touchmove" === e.type
                      ? e.targetTouches[0].pageY
                      : e.pageY || e.clientY) -
                    t.track.offset()[x.isHorizontal() ? "left" : "top"] -
                    t.dragSize / 2,
                  r = -x.minTranslate() * t.moveDivider,
                  i = -x.maxTranslate() * t.moveDivider;
                a < r ? (a = r) : a > i && (a = i),
                  (a = -a / t.moveDivider),
                  x.updateProgress(a),
                  x.setWrapperTranslate(a, !0);
              },
              dragStart: function (e) {
                var t = x.scrollbar;
                (t.isTouched = !0),
                  e.preventDefault(),
                  e.stopPropagation(),
                  t.setDragPosition(e),
                  clearTimeout(t.dragTimeout),
                  t.track.transition(0),
                  x.params.scrollbarHide && t.track.css("opacity", 1),
                  x.wrapper.transition(100),
                  t.drag.transition(100),
                  x.emit("onScrollbarDragStart", x);
              },
              dragMove: function (e) {
                var t = x.scrollbar;
                t.isTouched &&
                  (e.preventDefault ? e.preventDefault() : (e.returnValue = !1),
                  t.setDragPosition(e),
                  x.wrapper.transition(0),
                  t.track.transition(0),
                  t.drag.transition(0),
                  x.emit("onScrollbarDragMove", x));
              },
              dragEnd: function (e) {
                var t = x.scrollbar;
                t.isTouched &&
                  ((t.isTouched = !1),
                  x.params.scrollbarHide &&
                    (clearTimeout(t.dragTimeout),
                    (t.dragTimeout = setTimeout(function () {
                      t.track.css("opacity", 0), t.track.transition(400);
                    }, 1e3))),
                  x.emit("onScrollbarDragEnd", x),
                  x.params.scrollbarSnapOnRelease && x.slideReset());
              },
              draggableEvents:
                !1 !== x.params.simulateTouch || x.support.touch
                  ? x.touchEvents
                  : x.touchEventsDesktop,
              enableDraggable: function () {
                var t = x.scrollbar,
                  a = x.support.touch ? t.track : document;
                e(t.track).on(t.draggableEvents.start, t.dragStart),
                  e(a).on(t.draggableEvents.move, t.dragMove),
                  e(a).on(t.draggableEvents.end, t.dragEnd);
              },
              disableDraggable: function () {
                var t = x.scrollbar,
                  a = x.support.touch ? t.track : document;
                e(t.track).off(t.draggableEvents.start, t.dragStart),
                  e(a).off(t.draggableEvents.move, t.dragMove),
                  e(a).off(t.draggableEvents.end, t.dragEnd);
              },
              set: function () {
                if (x.params.scrollbar) {
                  var t = x.scrollbar;
                  (t.track = e(x.params.scrollbar)),
                    x.params.uniqueNavElements &&
                      "string" == typeof x.params.scrollbar &&
                      t.track.length > 1 &&
                      1 === x.container.find(x.params.scrollbar).length &&
                      (t.track = x.container.find(x.params.scrollbar)),
                    (t.drag = t.track.find(".swiper-scrollbar-drag")),
                    0 === t.drag.length &&
                      ((t.drag = e(
                        '<div class="swiper-scrollbar-drag"></div>'
                      )),
                      t.track.append(t.drag)),
                    (t.drag[0].style.width = ""),
                    (t.drag[0].style.height = ""),
                    (t.trackSize = x.isHorizontal()
                      ? t.track[0].offsetWidth
                      : t.track[0].offsetHeight),
                    (t.divider = x.size / x.virtualSize),
                    (t.moveDivider = t.divider * (t.trackSize / x.size)),
                    (t.dragSize = t.trackSize * t.divider),
                    x.isHorizontal()
                      ? (t.drag[0].style.width = t.dragSize + "px")
                      : (t.drag[0].style.height = t.dragSize + "px"),
                    t.divider >= 1
                      ? (t.track[0].style.display = "none")
                      : (t.track[0].style.display = ""),
                    x.params.scrollbarHide && (t.track[0].style.opacity = 0);
                }
              },
              setTranslate: function () {
                if (x.params.scrollbar) {
                  var e,
                    t = x.scrollbar,
                    a = (x.translate, t.dragSize);
                  (e = (t.trackSize - t.dragSize) * x.progress),
                    x.rtl && x.isHorizontal()
                      ? (e = -e) > 0
                        ? ((a = t.dragSize - e), (e = 0))
                        : -e + t.dragSize > t.trackSize && (a = t.trackSize + e)
                      : e < 0
                      ? ((a = t.dragSize + e), (e = 0))
                      : e + t.dragSize > t.trackSize && (a = t.trackSize - e),
                    x.isHorizontal()
                      ? (x.support.transforms3d
                          ? t.drag.transform("translate3d(" + e + "px, 0, 0)")
                          : t.drag.transform("translateX(" + e + "px)"),
                        (t.drag[0].style.width = a + "px"))
                      : (x.support.transforms3d
                          ? t.drag.transform("translate3d(0px, " + e + "px, 0)")
                          : t.drag.transform("translateY(" + e + "px)"),
                        (t.drag[0].style.height = a + "px")),
                    x.params.scrollbarHide &&
                      (clearTimeout(t.timeout),
                      (t.track[0].style.opacity = 1),
                      (t.timeout = setTimeout(function () {
                        (t.track[0].style.opacity = 0), t.track.transition(400);
                      }, 1e3)));
                }
              },
              setTransition: function (e) {
                x.params.scrollbar && x.scrollbar.drag.transition(e);
              },
            }),
            (x.controller = {
              LinearSpline: function (e, t) {
                var a,
                  r,
                  i = (function () {
                    var e, t, a;
                    return function (r, i) {
                      for (t = -1, e = r.length; e - t > 1; )
                        r[(a = (e + t) >> 1)] <= i ? (t = a) : (e = a);
                      return e;
                    };
                  })();
                (this.x = e),
                  (this.y = t),
                  (this.lastIndex = e.length - 1),
                  this.x.length,
                  (this.interpolate = function (e) {
                    return e
                      ? ((r = i(this.x, e)),
                        (a = r - 1),
                        ((e - this.x[a]) * (this.y[r] - this.y[a])) /
                          (this.x[r] - this.x[a]) +
                          this.y[a])
                      : 0;
                  });
              },
              getInterpolateFunction: function (e) {
                x.controller.spline ||
                  (x.controller.spline = x.params.loop
                    ? new x.controller.LinearSpline(x.slidesGrid, e.slidesGrid)
                    : new x.controller.LinearSpline(x.snapGrid, e.snapGrid));
              },
              setTranslate: function (e, a) {
                function r(t) {
                  (e =
                    t.rtl && "horizontal" === t.params.direction
                      ? -x.translate
                      : x.translate),
                    "slide" === x.params.controlBy &&
                      (x.controller.getInterpolateFunction(t),
                      (n = -x.controller.spline.interpolate(-e))),
                    (n && "container" !== x.params.controlBy) ||
                      ((i =
                        (t.maxTranslate() - t.minTranslate()) /
                        (x.maxTranslate() - x.minTranslate())),
                      (n = (e - x.minTranslate()) * i + t.minTranslate())),
                    x.params.controlInverse && (n = t.maxTranslate() - n),
                    t.updateProgress(n),
                    t.setWrapperTranslate(n, !1, x),
                    t.updateActiveIndex();
                }
                var i,
                  n,
                  s = x.params.control;
                if (Array.isArray(s))
                  for (var o = 0; o < s.length; o++)
                    s[o] !== a && s[o] instanceof t && r(s[o]);
                else s instanceof t && a !== s && r(s);
              },
              setTransition: function (e, a) {
                function r(t) {
                  t.setWrapperTransition(e, x),
                    0 !== e &&
                      (t.onTransitionStart(),
                      t.wrapper.transitionEnd(function () {
                        n &&
                          (t.params.loop &&
                            "slide" === x.params.controlBy &&
                            t.fixLoop(),
                          t.onTransitionEnd());
                      }));
                }
                var i,
                  n = x.params.control;
                if (Array.isArray(n))
                  for (i = 0; i < n.length; i++)
                    n[i] !== a && n[i] instanceof t && r(n[i]);
                else n instanceof t && a !== n && r(n);
              },
            }),
            (x.hashnav = {
              onHashCange: function (e, t) {
                var a = document.location.hash.replace("#", "");
                a !== x.slides.eq(x.activeIndex).attr("data-hash") &&
                  x.slideTo(
                    x.wrapper
                      .children(
                        "." + x.params.slideClass + '[data-hash="' + a + '"]'
                      )
                      .index()
                  );
              },
              attachEvents: function (t) {
                var a = t ? "off" : "on";
                e(window)[a]("hashchange", x.hashnav.onHashCange);
              },
              setHash: function () {
                if (x.hashnav.initialized && x.params.hashnav)
                  if (
                    x.params.replaceState &&
                    window.history &&
                    window.history.replaceState
                  )
                    window.history.replaceState(
                      null,
                      null,
                      "#" + x.slides.eq(x.activeIndex).attr("data-hash") || !1
                    );
                  else {
                    var e = x.slides.eq(x.activeIndex),
                      t = e.attr("data-hash") || e.attr("data-history");
                    document.location.hash = t || "";
                  }
              },
              init: function () {
                if (x.params.hashnav && !x.params.history) {
                  x.hashnav.initialized = !0;
                  var e = document.location.hash.replace("#", "");
                  if (e)
                    for (var t = 0, a = x.slides.length; t < a; t++) {
                      var r = x.slides.eq(t);
                      if (
                        (r.attr("data-hash") || r.attr("data-history")) === e &&
                        !r.hasClass(x.params.slideDuplicateClass)
                      ) {
                        var i = r.index();
                        x.slideTo(i, 0, x.params.runCallbacksOnInit, !0);
                      }
                    }
                  x.params.hashnavWatchState && x.hashnav.attachEvents();
                }
              },
              destroy: function () {
                x.params.hashnavWatchState && x.hashnav.attachEvents(!0);
              },
            }),
            (x.history = {
              init: function () {
                if (x.params.history) {
                  if (!window.history || !window.history.pushState)
                    return (
                      (x.params.history = !1), void (x.params.hashnav = !0)
                    );
                  (x.history.initialized = !0),
                    (this.paths = this.getPathValues()),
                    (this.paths.key || this.paths.value) &&
                      (this.scrollToSlide(
                        0,
                        this.paths.value,
                        x.params.runCallbacksOnInit
                      ),
                      x.params.replaceState ||
                        window.addEventListener(
                          "popstate",
                          this.setHistoryPopState
                        ));
                }
              },
              setHistoryPopState: function () {
                (x.history.paths = x.history.getPathValues()),
                  x.history.scrollToSlide(
                    x.params.speed,
                    x.history.paths.value,
                    !1
                  );
              },
              getPathValues: function () {
                var e = window.location.pathname.slice(1).split("/"),
                  t = e.length;
                return { key: e[t - 2], value: e[t - 1] };
              },
              setHistory: function (e, t) {
                if (x.history.initialized && x.params.history) {
                  var a = x.slides.eq(t),
                    r = this.slugify(a.attr("data-history"));
                  window.location.pathname.includes(e) || (r = e + "/" + r),
                    x.params.replaceState
                      ? window.history.replaceState(null, null, r)
                      : window.history.pushState(null, null, r);
                }
              },
              slugify: function (e) {
                return e
                  .toString()
                  .toLowerCase()
                  .replace(/\s+/g, "-")
                  .replace(/[^\w\-]+/g, "")
                  .replace(/\-\-+/g, "-")
                  .replace(/^-+/, "")
                  .replace(/-+$/, "");
              },
              scrollToSlide: function (e, t, a) {
                if (t)
                  for (var r = 0, i = x.slides.length; r < i; r++) {
                    var n = x.slides.eq(r);
                    if (
                      this.slugify(n.attr("data-history")) === t &&
                      !n.hasClass(x.params.slideDuplicateClass)
                    ) {
                      var s = n.index();
                      x.slideTo(s, e, a);
                    }
                  }
                else x.slideTo(0, e, a);
              },
            }),
            (x.disableKeyboardControl = function () {
              (x.params.keyboardControl = !1), e(document).off("keydown", d);
            }),
            (x.enableKeyboardControl = function () {
              (x.params.keyboardControl = !0), e(document).on("keydown", d);
            }),
            (x.mousewheel = {
              event: !1,
              lastScrollTime: new window.Date().getTime(),
            }),
            x.params.mousewheelControl &&
              (x.mousewheel.event =
                navigator.userAgent.indexOf("firefox") > -1
                  ? "DOMMouseScroll"
                  : (function () {
                      var e = "onwheel" in document;
                      if (!e) {
                        var t = document.createElement("div");
                        t.setAttribute("onwheel", "return;"),
                          (e = "function" == typeof t.onwheel);
                      }
                      return (
                        !e &&
                          document.implementation &&
                          document.implementation.hasFeature &&
                          !0 !== document.implementation.hasFeature("", "") &&
                          (e = document.implementation.hasFeature(
                            "Events.wheel",
                            "3.0"
                          )),
                        e
                      );
                    })()
                  ? "wheel"
                  : "mousewheel"),
            (x.disableMousewheelControl = function () {
              if (!x.mousewheel.event) return !1;
              var t = x.container;
              return (
                "container" !== x.params.mousewheelEventsTarged &&
                  (t = e(x.params.mousewheelEventsTarged)),
                t.off(x.mousewheel.event, p),
                (x.params.mousewheelControl = !1),
                !0
              );
            }),
            (x.enableMousewheelControl = function () {
              if (!x.mousewheel.event) return !1;
              var t = x.container;
              return (
                "container" !== x.params.mousewheelEventsTarged &&
                  (t = e(x.params.mousewheelEventsTarged)),
                t.on(x.mousewheel.event, p),
                (x.params.mousewheelControl = !0),
                !0
              );
            }),
            (x.parallax = {
              setTranslate: function () {
                x.container
                  .children(
                    "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]"
                  )
                  .each(function () {
                    c(this, x.progress);
                  }),
                  x.slides.each(function () {
                    var t = e(this);
                    t.find(
                      "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]"
                    ).each(function () {
                      c(this, Math.min(Math.max(t[0].progress, -1), 1));
                    });
                  });
              },
              setTransition: function (t) {
                void 0 === t && (t = x.params.speed),
                  x.container
                    .find(
                      "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]"
                    )
                    .each(function () {
                      var a = e(this),
                        r =
                          parseInt(
                            a.attr("data-swiper-parallax-duration"),
                            10
                          ) || t;
                      0 === t && (r = 0), a.transition(r);
                    });
              },
            }),
            (x.zoom = {
              scale: 1,
              currentScale: 1,
              isScaling: !1,
              gesture: {
                slide: void 0,
                slideWidth: void 0,
                slideHeight: void 0,
                image: void 0,
                imageWrap: void 0,
                zoomMax: x.params.zoomMax,
              },
              image: {
                isTouched: void 0,
                isMoved: void 0,
                currentX: void 0,
                currentY: void 0,
                minX: void 0,
                minY: void 0,
                maxX: void 0,
                maxY: void 0,
                width: void 0,
                height: void 0,
                startX: void 0,
                startY: void 0,
                touchesStart: {},
                touchesCurrent: {},
              },
              velocity: {
                x: void 0,
                y: void 0,
                prevPositionX: void 0,
                prevPositionY: void 0,
                prevTime: void 0,
              },
              getDistanceBetweenTouches: function (e) {
                if (e.targetTouches.length < 2) return 1;
                var t = e.targetTouches[0].pageX,
                  a = e.targetTouches[0].pageY,
                  r = e.targetTouches[1].pageX,
                  i = e.targetTouches[1].pageY;
                return Math.sqrt(Math.pow(r - t, 2) + Math.pow(i - a, 2));
              },
              onGestureStart: function (t) {
                var a = x.zoom;
                if (!x.support.gestures) {
                  if (
                    "touchstart" !== t.type ||
                    ("touchstart" === t.type && t.targetTouches.length < 2)
                  )
                    return;
                  a.gesture.scaleStart = a.getDistanceBetweenTouches(t);
                }
                (a.gesture.slide && a.gesture.slide.length) ||
                ((a.gesture.slide = e(this)),
                0 === a.gesture.slide.length &&
                  (a.gesture.slide = x.slides.eq(x.activeIndex)),
                (a.gesture.image = a.gesture.slide.find("img, svg, canvas")),
                (a.gesture.imageWrap = a.gesture.image.parent(
                  "." + x.params.zoomContainerClass
                )),
                (a.gesture.zoomMax =
                  a.gesture.imageWrap.attr("data-swiper-zoom") ||
                  x.params.zoomMax),
                0 !== a.gesture.imageWrap.length)
                  ? (a.gesture.image.transition(0), (a.isScaling = !0))
                  : (a.gesture.image = void 0);
              },
              onGestureChange: function (e) {
                var t = x.zoom;
                if (!x.support.gestures) {
                  if (
                    "touchmove" !== e.type ||
                    ("touchmove" === e.type && e.targetTouches.length < 2)
                  )
                    return;
                  t.gesture.scaleMove = t.getDistanceBetweenTouches(e);
                }
                t.gesture.image &&
                  0 !== t.gesture.image.length &&
                  (x.support.gestures
                    ? (t.scale = e.scale * t.currentScale)
                    : (t.scale =
                        (t.gesture.scaleMove / t.gesture.scaleStart) *
                        t.currentScale),
                  t.scale > t.gesture.zoomMax &&
                    (t.scale =
                      t.gesture.zoomMax -
                      1 +
                      Math.pow(t.scale - t.gesture.zoomMax + 1, 0.5)),
                  t.scale < x.params.zoomMin &&
                    (t.scale =
                      x.params.zoomMin +
                      1 -
                      Math.pow(x.params.zoomMin - t.scale + 1, 0.5)),
                  t.gesture.image.transform(
                    "translate3d(0,0,0) scale(" + t.scale + ")"
                  ));
              },
              onGestureEnd: function (e) {
                var t = x.zoom;
                (!x.support.gestures &&
                  ("touchend" !== e.type ||
                    ("touchend" === e.type && e.changedTouches.length < 2))) ||
                  (t.gesture.image &&
                    0 !== t.gesture.image.length &&
                    ((t.scale = Math.max(
                      Math.min(t.scale, t.gesture.zoomMax),
                      x.params.zoomMin
                    )),
                    t.gesture.image
                      .transition(x.params.speed)
                      .transform("translate3d(0,0,0) scale(" + t.scale + ")"),
                    (t.currentScale = t.scale),
                    (t.isScaling = !1),
                    1 === t.scale && (t.gesture.slide = void 0)));
              },
              onTouchStart: function (e, t) {
                var a = e.zoom;
                a.gesture.image &&
                  0 !== a.gesture.image.length &&
                  (a.image.isTouched ||
                    ("android" === e.device.os && t.preventDefault(),
                    (a.image.isTouched = !0),
                    (a.image.touchesStart.x =
                      "touchstart" === t.type
                        ? t.targetTouches[0].pageX
                        : t.pageX),
                    (a.image.touchesStart.y =
                      "touchstart" === t.type
                        ? t.targetTouches[0].pageY
                        : t.pageY)));
              },
              onTouchMove: function (e) {
                var t = x.zoom;
                if (
                  t.gesture.image &&
                  0 !== t.gesture.image.length &&
                  ((x.allowClick = !1), t.image.isTouched && t.gesture.slide)
                ) {
                  t.image.isMoved ||
                    ((t.image.width = t.gesture.image[0].offsetWidth),
                    (t.image.height = t.gesture.image[0].offsetHeight),
                    (t.image.startX =
                      x.getTranslate(t.gesture.imageWrap[0], "x") || 0),
                    (t.image.startY =
                      x.getTranslate(t.gesture.imageWrap[0], "y") || 0),
                    (t.gesture.slideWidth = t.gesture.slide[0].offsetWidth),
                    (t.gesture.slideHeight = t.gesture.slide[0].offsetHeight),
                    t.gesture.imageWrap.transition(0),
                    x.rtl && (t.image.startX = -t.image.startX),
                    x.rtl && (t.image.startY = -t.image.startY));
                  var a = t.image.width * t.scale,
                    r = t.image.height * t.scale;
                  if (
                    !(a < t.gesture.slideWidth && r < t.gesture.slideHeight)
                  ) {
                    if (
                      ((t.image.minX = Math.min(
                        t.gesture.slideWidth / 2 - a / 2,
                        0
                      )),
                      (t.image.maxX = -t.image.minX),
                      (t.image.minY = Math.min(
                        t.gesture.slideHeight / 2 - r / 2,
                        0
                      )),
                      (t.image.maxY = -t.image.minY),
                      (t.image.touchesCurrent.x =
                        "touchmove" === e.type
                          ? e.targetTouches[0].pageX
                          : e.pageX),
                      (t.image.touchesCurrent.y =
                        "touchmove" === e.type
                          ? e.targetTouches[0].pageY
                          : e.pageY),
                      !t.image.isMoved && !t.isScaling)
                    ) {
                      if (
                        (x.isHorizontal() &&
                          Math.floor(t.image.minX) ===
                            Math.floor(t.image.startX) &&
                          t.image.touchesCurrent.x < t.image.touchesStart.x) ||
                        (Math.floor(t.image.maxX) ===
                          Math.floor(t.image.startX) &&
                          t.image.touchesCurrent.x > t.image.touchesStart.x)
                      )
                        return void (t.image.isTouched = !1);
                      if (
                        (!x.isHorizontal() &&
                          Math.floor(t.image.minY) ===
                            Math.floor(t.image.startY) &&
                          t.image.touchesCurrent.y < t.image.touchesStart.y) ||
                        (Math.floor(t.image.maxY) ===
                          Math.floor(t.image.startY) &&
                          t.image.touchesCurrent.y > t.image.touchesStart.y)
                      )
                        return void (t.image.isTouched = !1);
                    }
                    e.preventDefault(),
                      e.stopPropagation(),
                      (t.image.isMoved = !0),
                      (t.image.currentX =
                        t.image.touchesCurrent.x -
                        t.image.touchesStart.x +
                        t.image.startX),
                      (t.image.currentY =
                        t.image.touchesCurrent.y -
                        t.image.touchesStart.y +
                        t.image.startY),
                      t.image.currentX < t.image.minX &&
                        (t.image.currentX =
                          t.image.minX +
                          1 -
                          Math.pow(t.image.minX - t.image.currentX + 1, 0.8)),
                      t.image.currentX > t.image.maxX &&
                        (t.image.currentX =
                          t.image.maxX -
                          1 +
                          Math.pow(t.image.currentX - t.image.maxX + 1, 0.8)),
                      t.image.currentY < t.image.minY &&
                        (t.image.currentY =
                          t.image.minY +
                          1 -
                          Math.pow(t.image.minY - t.image.currentY + 1, 0.8)),
                      t.image.currentY > t.image.maxY &&
                        (t.image.currentY =
                          t.image.maxY -
                          1 +
                          Math.pow(t.image.currentY - t.image.maxY + 1, 0.8)),
                      t.velocity.prevPositionX ||
                        (t.velocity.prevPositionX = t.image.touchesCurrent.x),
                      t.velocity.prevPositionY ||
                        (t.velocity.prevPositionY = t.image.touchesCurrent.y),
                      t.velocity.prevTime || (t.velocity.prevTime = Date.now()),
                      (t.velocity.x =
                        (t.image.touchesCurrent.x - t.velocity.prevPositionX) /
                        (Date.now() - t.velocity.prevTime) /
                        2),
                      (t.velocity.y =
                        (t.image.touchesCurrent.y - t.velocity.prevPositionY) /
                        (Date.now() - t.velocity.prevTime) /
                        2),
                      Math.abs(
                        t.image.touchesCurrent.x - t.velocity.prevPositionX
                      ) < 2 && (t.velocity.x = 0),
                      Math.abs(
                        t.image.touchesCurrent.y - t.velocity.prevPositionY
                      ) < 2 && (t.velocity.y = 0),
                      (t.velocity.prevPositionX = t.image.touchesCurrent.x),
                      (t.velocity.prevPositionY = t.image.touchesCurrent.y),
                      (t.velocity.prevTime = Date.now()),
                      t.gesture.imageWrap.transform(
                        "translate3d(" +
                          t.image.currentX +
                          "px, " +
                          t.image.currentY +
                          "px,0)"
                      );
                  }
                }
              },
              onTouchEnd: function (e, t) {
                var a = e.zoom;
                if (a.gesture.image && 0 !== a.gesture.image.length) {
                  if (!a.image.isTouched || !a.image.isMoved)
                    return (
                      (a.image.isTouched = !1), void (a.image.isMoved = !1)
                    );
                  (a.image.isTouched = !1), (a.image.isMoved = !1);
                  var r = 300,
                    i = 300,
                    n = a.velocity.x * r,
                    s = a.image.currentX + n,
                    o = a.velocity.y * i,
                    l = a.image.currentY + o;
                  0 !== a.velocity.x &&
                    (r = Math.abs((s - a.image.currentX) / a.velocity.x)),
                    0 !== a.velocity.y &&
                      (i = Math.abs((l - a.image.currentY) / a.velocity.y));
                  var u = Math.max(r, i);
                  (a.image.currentX = s), (a.image.currentY = l);
                  var d = a.image.width * a.scale,
                    p = a.image.height * a.scale;
                  (a.image.minX = Math.min(
                    a.gesture.slideWidth / 2 - d / 2,
                    0
                  )),
                    (a.image.maxX = -a.image.minX),
                    (a.image.minY = Math.min(
                      a.gesture.slideHeight / 2 - p / 2,
                      0
                    )),
                    (a.image.maxY = -a.image.minY),
                    (a.image.currentX = Math.max(
                      Math.min(a.image.currentX, a.image.maxX),
                      a.image.minX
                    )),
                    (a.image.currentY = Math.max(
                      Math.min(a.image.currentY, a.image.maxY),
                      a.image.minY
                    )),
                    a.gesture.imageWrap
                      .transition(u)
                      .transform(
                        "translate3d(" +
                          a.image.currentX +
                          "px, " +
                          a.image.currentY +
                          "px,0)"
                      );
                }
              },
              onTransitionEnd: function (e) {
                var t = e.zoom;
                t.gesture.slide &&
                  e.previousIndex !== e.activeIndex &&
                  (t.gesture.image.transform("translate3d(0,0,0) scale(1)"),
                  t.gesture.imageWrap.transform("translate3d(0,0,0)"),
                  (t.gesture.slide =
                    t.gesture.image =
                    t.gesture.imageWrap =
                      void 0),
                  (t.scale = t.currentScale = 1));
              },
              toggleZoom: function (t, a) {
                var r,
                  i,
                  n,
                  s,
                  o,
                  l,
                  u,
                  d,
                  p,
                  c,
                  m,
                  h,
                  f,
                  g,
                  v,
                  w,
                  y = t.zoom;
                y.gesture.slide ||
                  ((y.gesture.slide = t.clickedSlide
                    ? e(t.clickedSlide)
                    : t.slides.eq(t.activeIndex)),
                  (y.gesture.image = y.gesture.slide.find("img, svg, canvas")),
                  (y.gesture.imageWrap = y.gesture.image.parent(
                    "." + t.params.zoomContainerClass
                  ))),
                  y.gesture.image &&
                    0 !== y.gesture.image.length &&
                    (void 0 === y.image.touchesStart.x && a
                      ? ((r =
                          "touchend" === a.type
                            ? a.changedTouches[0].pageX
                            : a.pageX),
                        (i =
                          "touchend" === a.type
                            ? a.changedTouches[0].pageY
                            : a.pageY))
                      : ((r = y.image.touchesStart.x),
                        (i = y.image.touchesStart.y)),
                    y.scale && 1 !== y.scale
                      ? ((y.scale = y.currentScale = 1),
                        y.gesture.imageWrap
                          .transition(300)
                          .transform("translate3d(0,0,0)"),
                        y.gesture.image
                          .transition(300)
                          .transform("translate3d(0,0,0) scale(1)"),
                        (y.gesture.slide = void 0))
                      : ((y.scale = y.currentScale =
                          y.gesture.imageWrap.attr("data-swiper-zoom") ||
                          t.params.zoomMax),
                        a
                          ? ((v = y.gesture.slide[0].offsetWidth),
                            (w = y.gesture.slide[0].offsetHeight),
                            (n = y.gesture.slide.offset().left + v / 2 - r),
                            (s = y.gesture.slide.offset().top + w / 2 - i),
                            (u = y.gesture.image[0].offsetWidth),
                            (d = y.gesture.image[0].offsetHeight),
                            (p = u * y.scale),
                            (c = d * y.scale),
                            (f = -(m = Math.min(v / 2 - p / 2, 0))),
                            (g = -(h = Math.min(w / 2 - c / 2, 0))),
                            (o = n * y.scale) < m && (o = m),
                            o > f && (o = f),
                            (l = s * y.scale) < h && (l = h),
                            l > g && (l = g))
                          : ((o = 0), (l = 0)),
                        y.gesture.imageWrap
                          .transition(300)
                          .transform("translate3d(" + o + "px, " + l + "px,0)"),
                        y.gesture.image
                          .transition(300)
                          .transform(
                            "translate3d(0,0,0) scale(" + y.scale + ")"
                          )));
              },
              attachEvents: function (t) {
                var a = t ? "off" : "on";
                if (x.params.zoom) {
                  var r =
                    (x.slides,
                    !(
                      "touchstart" !== x.touchEvents.start ||
                      !x.support.passiveListener ||
                      !x.params.passiveListeners
                    ) && { passive: !0, capture: !1 });
                  x.support.gestures
                    ? (x.slides[a]("gesturestart", x.zoom.onGestureStart, r),
                      x.slides[a]("gesturechange", x.zoom.onGestureChange, r),
                      x.slides[a]("gestureend", x.zoom.onGestureEnd, r))
                    : "touchstart" === x.touchEvents.start &&
                      (x.slides[a](
                        x.touchEvents.start,
                        x.zoom.onGestureStart,
                        r
                      ),
                      x.slides[a](
                        x.touchEvents.move,
                        x.zoom.onGestureChange,
                        r
                      ),
                      x.slides[a](x.touchEvents.end, x.zoom.onGestureEnd, r)),
                    x[a]("touchStart", x.zoom.onTouchStart),
                    x.slides.each(function (t, r) {
                      e(r).find("." + x.params.zoomContainerClass).length > 0 &&
                        e(r)[a](x.touchEvents.move, x.zoom.onTouchMove);
                    }),
                    x[a]("touchEnd", x.zoom.onTouchEnd),
                    x[a]("transitionEnd", x.zoom.onTransitionEnd),
                    x.params.zoomToggle && x.on("doubleTap", x.zoom.toggleZoom);
                }
              },
              init: function () {
                x.zoom.attachEvents();
              },
              destroy: function () {
                x.zoom.attachEvents(!0);
              },
            }),
            (x._plugins = []),
            x.plugins)) {
              var X = x.plugins[Y](x, x.params[Y]);
              X && x._plugins.push(X);
            }
            return (
              (x.callPlugins = function (e) {
                for (var t = 0; t < x._plugins.length; t++)
                  e in x._plugins[t] &&
                    x._plugins[t][e](
                      arguments[1],
                      arguments[2],
                      arguments[3],
                      arguments[4],
                      arguments[5]
                    );
              }),
              (x.emitterEventListeners = {}),
              (x.emit = function (e) {
                var t;
                if (
                  (x.params[e] &&
                    x.params[e](
                      arguments[1],
                      arguments[2],
                      arguments[3],
                      arguments[4],
                      arguments[5]
                    ),
                  x.emitterEventListeners[e])
                )
                  for (t = 0; t < x.emitterEventListeners[e].length; t++)
                    x.emitterEventListeners[e][t](
                      arguments[1],
                      arguments[2],
                      arguments[3],
                      arguments[4],
                      arguments[5]
                    );
                x.callPlugins &&
                  x.callPlugins(
                    e,
                    arguments[1],
                    arguments[2],
                    arguments[3],
                    arguments[4],
                    arguments[5]
                  );
              }),
              (x.on = function (e, t) {
                return (
                  (e = m(e)),
                  x.emitterEventListeners[e] ||
                    (x.emitterEventListeners[e] = []),
                  x.emitterEventListeners[e].push(t),
                  x
                );
              }),
              (x.off = function (e, t) {
                var a;
                if (((e = m(e)), void 0 === t))
                  return (x.emitterEventListeners[e] = []), x;
                if (
                  x.emitterEventListeners[e] &&
                  0 !== x.emitterEventListeners[e].length
                ) {
                  for (a = 0; a < x.emitterEventListeners[e].length; a++)
                    x.emitterEventListeners[e][a] === t &&
                      x.emitterEventListeners[e].splice(a, 1);
                  return x;
                }
              }),
              (x.once = function (e, t) {
                return (
                  (e = m(e)),
                  x.on(e, function a() {
                    t(
                      arguments[0],
                      arguments[1],
                      arguments[2],
                      arguments[3],
                      arguments[4]
                    ),
                      x.off(e, a);
                  }),
                  x
                );
              }),
              (x.a11y = {
                makeFocusable: function (e) {
                  return e.attr("tabIndex", "0"), e;
                },
                addRole: function (e, t) {
                  return e.attr("role", t), e;
                },
                addLabel: function (e, t) {
                  return e.attr("aria-label", t), e;
                },
                disable: function (e) {
                  return e.attr("aria-disabled", !0), e;
                },
                enable: function (e) {
                  return e.attr("aria-disabled", !1), e;
                },
                onEnterKey: function (t) {
                  13 === t.keyCode &&
                    (e(t.target).is(x.params.nextButton)
                      ? (x.onClickNext(t),
                        x.isEnd
                          ? x.a11y.notify(x.params.lastSlideMessage)
                          : x.a11y.notify(x.params.nextSlideMessage))
                      : e(t.target).is(x.params.prevButton) &&
                        (x.onClickPrev(t),
                        x.isBeginning
                          ? x.a11y.notify(x.params.firstSlideMessage)
                          : x.a11y.notify(x.params.prevSlideMessage)),
                    e(t.target).is("." + x.params.bulletClass) &&
                      e(t.target)[0].click());
                },
                liveRegion: e(
                  '<span class="' +
                    x.params.notificationClass +
                    '" aria-live="assertive" aria-atomic="true"></span>'
                ),
                notify: function (e) {
                  var t = x.a11y.liveRegion;
                  0 !== t.length && (t.html(""), t.html(e));
                },
                init: function () {
                  x.params.nextButton &&
                    x.nextButton &&
                    x.nextButton.length > 0 &&
                    (x.a11y.makeFocusable(x.nextButton),
                    x.a11y.addRole(x.nextButton, "button"),
                    x.a11y.addLabel(x.nextButton, x.params.nextSlideMessage)),
                    x.params.prevButton &&
                      x.prevButton &&
                      x.prevButton.length > 0 &&
                      (x.a11y.makeFocusable(x.prevButton),
                      x.a11y.addRole(x.prevButton, "button"),
                      x.a11y.addLabel(x.prevButton, x.params.prevSlideMessage)),
                    e(x.container).append(x.a11y.liveRegion);
                },
                initPagination: function () {
                  x.params.pagination &&
                    x.params.paginationClickable &&
                    x.bullets &&
                    x.bullets.length &&
                    x.bullets.each(function () {
                      var t = e(this);
                      x.a11y.makeFocusable(t),
                        x.a11y.addRole(t, "button"),
                        x.a11y.addLabel(
                          t,
                          x.params.paginationBulletMessage.replace(
                            /{{index}}/,
                            t.index() + 1
                          )
                        );
                    });
                },
                destroy: function () {
                  x.a11y.liveRegion &&
                    x.a11y.liveRegion.length > 0 &&
                    x.a11y.liveRegion.remove();
                },
              }),
              (x.init = function () {
                x.params.loop && x.createLoop(),
                  x.updateContainerSize(),
                  x.updateSlidesSize(),
                  x.updatePagination(),
                  x.params.scrollbar &&
                    x.scrollbar &&
                    (x.scrollbar.set(),
                    x.params.scrollbarDraggable &&
                      x.scrollbar.enableDraggable()),
                  "slide" !== x.params.effect &&
                    x.effects[x.params.effect] &&
                    (x.params.loop || x.updateProgress(),
                    x.effects[x.params.effect].setTranslate()),
                  x.params.loop
                    ? x.slideTo(
                        x.params.initialSlide + x.loopedSlides,
                        0,
                        x.params.runCallbacksOnInit
                      )
                    : (x.slideTo(
                        x.params.initialSlide,
                        0,
                        x.params.runCallbacksOnInit
                      ),
                      0 === x.params.initialSlide &&
                        (x.parallax &&
                          x.params.parallax &&
                          x.parallax.setTranslate(),
                        x.lazy &&
                          x.params.lazyLoading &&
                          (x.lazy.load(), (x.lazy.initialImageLoaded = !0)))),
                  x.attachEvents(),
                  x.params.observer && x.support.observer && x.initObservers(),
                  x.params.preloadImages &&
                    !x.params.lazyLoading &&
                    x.preloadImages(),
                  x.params.zoom && x.zoom && x.zoom.init(),
                  x.params.autoplay && x.startAutoplay(),
                  x.params.keyboardControl &&
                    x.enableKeyboardControl &&
                    x.enableKeyboardControl(),
                  x.params.mousewheelControl &&
                    x.enableMousewheelControl &&
                    x.enableMousewheelControl(),
                  x.params.hashnavReplaceState &&
                    (x.params.replaceState = x.params.hashnavReplaceState),
                  x.params.history && x.history && x.history.init(),
                  x.params.hashnav && x.hashnav && x.hashnav.init(),
                  x.params.a11y && x.a11y && x.a11y.init(),
                  x.emit("onInit", x);
              }),
              (x.cleanupStyles = function () {
                x.container
                  .removeClass(x.classNames.join(" "))
                  .removeAttr("style"),
                  x.wrapper.removeAttr("style"),
                  x.slides &&
                    x.slides.length &&
                    x.slides
                      .removeClass(
                        [
                          x.params.slideVisibleClass,
                          x.params.slideActiveClass,
                          x.params.slideNextClass,
                          x.params.slidePrevClass,
                        ].join(" ")
                      )
                      .removeAttr("style")
                      .removeAttr("data-swiper-column")
                      .removeAttr("data-swiper-row"),
                  x.paginationContainer &&
                    x.paginationContainer.length &&
                    x.paginationContainer.removeClass(
                      x.params.paginationHiddenClass
                    ),
                  x.bullets &&
                    x.bullets.length &&
                    x.bullets.removeClass(x.params.bulletActiveClass),
                  x.params.prevButton &&
                    e(x.params.prevButton).removeClass(
                      x.params.buttonDisabledClass
                    ),
                  x.params.nextButton &&
                    e(x.params.nextButton).removeClass(
                      x.params.buttonDisabledClass
                    ),
                  x.params.scrollbar &&
                    x.scrollbar &&
                    (x.scrollbar.track &&
                      x.scrollbar.track.length &&
                      x.scrollbar.track.removeAttr("style"),
                    x.scrollbar.drag &&
                      x.scrollbar.drag.length &&
                      x.scrollbar.drag.removeAttr("style"));
              }),
              (x.destroy = function (e, t) {
                x.detachEvents(),
                  x.stopAutoplay(),
                  x.params.scrollbar &&
                    x.scrollbar &&
                    x.params.scrollbarDraggable &&
                    x.scrollbar.disableDraggable(),
                  x.params.loop && x.destroyLoop(),
                  t && x.cleanupStyles(),
                  x.disconnectObservers(),
                  x.params.zoom && x.zoom && x.zoom.destroy(),
                  x.params.keyboardControl &&
                    x.disableKeyboardControl &&
                    x.disableKeyboardControl(),
                  x.params.mousewheelControl &&
                    x.disableMousewheelControl &&
                    x.disableMousewheelControl(),
                  x.params.a11y && x.a11y && x.a11y.destroy(),
                  x.params.history &&
                    !x.params.replaceState &&
                    window.removeEventListener(
                      "popstate",
                      x.history.setHistoryPopState
                    ),
                  x.params.hashnav && x.hashnav && x.hashnav.destroy(),
                  x.emit("onDestroy"),
                  !1 !== e && (x = null);
              }),
              x.init(),
              x
            );
          }
        };
      a.prototype = {
        isSafari: (function () {
          var e = window.navigator.userAgent.toLowerCase();
          return (
            e.indexOf("safari") >= 0 &&
            e.indexOf("chrome") < 0 &&
            e.indexOf("android") < 0
          );
        })(),
        isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
          window.navigator.userAgent
        ),
        isArray: function (e) {
          return "[object Array]" === Object.prototype.toString.apply(e);
        },
        browser: {
          ie:
            window.navigator.pointerEnabled ||
            window.navigator.msPointerEnabled,
          ieTouch:
            (window.navigator.msPointerEnabled &&
              window.navigator.msMaxTouchPoints > 1) ||
            (window.navigator.pointerEnabled &&
              window.navigator.maxTouchPoints > 1),
          lteIE9: (function () {
            var e = document.createElement("div");
            return (
              (e.innerHTML = "\x3c!--[if lte IE 9]><i></i><![endif]--\x3e"),
              1 === e.getElementsByTagName("i").length
            );
          })(),
        },
        device: (function () {
          var e = window.navigator.userAgent,
            t = e.match(/(Android);?[\s\/]+([\d.]+)?/),
            a = e.match(/(iPad).*OS\s([\d_]+)/),
            r = e.match(/(iPod)(.*OS\s([\d_]+))?/),
            i = !a && e.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
          return { ios: a || i || r, android: t };
        })(),
        support: {
          touch:
            (window.Modernizr && !0 === Modernizr.touch) ||
            !!(
              "ontouchstart" in window ||
              (window.DocumentTouch && document instanceof DocumentTouch)
            ),
          transforms3d:
            (window.Modernizr && !0 === Modernizr.csstransforms3d) ||
            (function () {
              var e = document.createElement("div").style;
              return (
                "webkitPerspective" in e ||
                "MozPerspective" in e ||
                "OPerspective" in e ||
                "MsPerspective" in e ||
                "perspective" in e
              );
            })(),
          flexbox: (function () {
            for (
              var e = document.createElement("div").style,
                t =
                  "alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(
                    " "
                  ),
                a = 0;
              a < t.length;
              a++
            )
              if (t[a] in e) return !0;
          })(),
          observer:
            "MutationObserver" in window || "WebkitMutationObserver" in window,
          passiveListener: (function () {
            var e = !1;
            try {
              var t = Object.defineProperty({}, "passive", {
                get: function () {
                  e = !0;
                },
              });
              window.addEventListener("testPassiveListener", null, t);
            } catch (e) {}
            return e;
          })(),
          gestures: "ongesturestart" in window,
        },
        plugins: {},
      };
      for (
        var i = (function () {
            var e = function (e) {
                var t = 0;
                for (t = 0; t < e.length; t++) this[t] = e[t];
                return (this.length = e.length), this;
              },
              t = function (t, a) {
                var r = [],
                  i = 0;
                if (t && !a && t instanceof e) return t;
                if (t)
                  if ("string" == typeof t) {
                    var n,
                      s,
                      o = t.trim();
                    if (o.indexOf("<") >= 0 && o.indexOf(">") >= 0) {
                      var l = "div";
                      for (
                        0 === o.indexOf("<li") && (l = "ul"),
                          0 === o.indexOf("<tr") && (l = "tbody"),
                          (0 !== o.indexOf("<td") && 0 !== o.indexOf("<th")) ||
                            (l = "tr"),
                          0 === o.indexOf("<tbody") && (l = "table"),
                          0 === o.indexOf("<option") && (l = "select"),
                          (s = document.createElement(l)).innerHTML = t,
                          i = 0;
                        i < s.childNodes.length;
                        i++
                      )
                        r.push(s.childNodes[i]);
                    } else
                      for (
                        n =
                          a || "#" !== t[0] || t.match(/[ .<>:~]/)
                            ? (a || document).querySelectorAll(t)
                            : [document.getElementById(t.split("#")[1])],
                          i = 0;
                        i < n.length;
                        i++
                      )
                        n[i] && r.push(n[i]);
                  } else if (t.nodeType || t === window || t === document)
                    r.push(t);
                  else if (t.length > 0 && t[0].nodeType)
                    for (i = 0; i < t.length; i++) r.push(t[i]);
                return new e(r);
              };
            return (
              (e.prototype = {
                addClass: function (e) {
                  if (void 0 === e) return this;
                  for (var t = e.split(" "), a = 0; a < t.length; a++)
                    for (var r = 0; r < this.length; r++)
                      this[r].classList.add(t[a]);
                  return this;
                },
                removeClass: function (e) {
                  for (var t = e.split(" "), a = 0; a < t.length; a++)
                    for (var r = 0; r < this.length; r++)
                      this[r].classList.remove(t[a]);
                  return this;
                },
                hasClass: function (e) {
                  return !!this[0] && this[0].classList.contains(e);
                },
                toggleClass: function (e) {
                  for (var t = e.split(" "), a = 0; a < t.length; a++)
                    for (var r = 0; r < this.length; r++)
                      this[r].classList.toggle(t[a]);
                  return this;
                },
                attr: function (e, t) {
                  if (1 === arguments.length && "string" == typeof e)
                    return this[0] ? this[0].getAttribute(e) : void 0;
                  for (var a = 0; a < this.length; a++)
                    if (2 === arguments.length) this[a].setAttribute(e, t);
                    else
                      for (var r in e)
                        (this[a][r] = e[r]), this[a].setAttribute(r, e[r]);
                  return this;
                },
                removeAttr: function (e) {
                  for (var t = 0; t < this.length; t++)
                    this[t].removeAttribute(e);
                  return this;
                },
                data: function (e, t) {
                  if (void 0 !== t) {
                    for (var a = 0; a < this.length; a++) {
                      var r = this[a];
                      r.dom7ElementDataStorage ||
                        (r.dom7ElementDataStorage = {}),
                        (r.dom7ElementDataStorage[e] = t);
                    }
                    return this;
                  }
                  if (this[0])
                    return (
                      this[0].getAttribute("data-" + e) ||
                      (this[0].dom7ElementDataStorage &&
                      (e in this[0].dom7ElementDataStorage)
                        ? this[0].dom7ElementDataStorage[e]
                        : void 0)
                    );
                },
                transform: function (e) {
                  for (var t = 0; t < this.length; t++) {
                    var a = this[t].style;
                    a.webkitTransform =
                      a.MsTransform =
                      a.msTransform =
                      a.MozTransform =
                      a.OTransform =
                      a.transform =
                        e;
                  }
                  return this;
                },
                transition: function (e) {
                  "string" != typeof e && (e += "ms");
                  for (var t = 0; t < this.length; t++) {
                    var a = this[t].style;
                    a.webkitTransitionDuration =
                      a.MsTransitionDuration =
                      a.msTransitionDuration =
                      a.MozTransitionDuration =
                      a.OTransitionDuration =
                      a.transitionDuration =
                        e;
                  }
                  return this;
                },
                on: function (e, a, r, i) {
                  function n(e) {
                    var i = e.target;
                    if (t(i).is(a)) r.call(i, e);
                    else
                      for (var n = t(i).parents(), s = 0; s < n.length; s++)
                        t(n[s]).is(a) && r.call(n[s], e);
                  }
                  var s,
                    o,
                    l = e.split(" ");
                  for (s = 0; s < this.length; s++)
                    if ("function" == typeof a || !1 === a)
                      for (
                        "function" == typeof a &&
                          ((r = arguments[1]), (i = arguments[2] || !1)),
                          o = 0;
                        o < l.length;
                        o++
                      )
                        this[s].addEventListener(l[o], r, i);
                    else
                      for (o = 0; o < l.length; o++)
                        this[s].dom7LiveListeners ||
                          (this[s].dom7LiveListeners = []),
                          this[s].dom7LiveListeners.push({
                            listener: r,
                            liveListener: n,
                          }),
                          this[s].addEventListener(l[o], n, i);
                  return this;
                },
                off: function (e, t, a, r) {
                  for (var i = e.split(" "), n = 0; n < i.length; n++)
                    for (var s = 0; s < this.length; s++)
                      if ("function" == typeof t || !1 === t)
                        "function" == typeof t &&
                          ((a = arguments[1]), (r = arguments[2] || !1)),
                          this[s].removeEventListener(i[n], a, r);
                      else if (this[s].dom7LiveListeners)
                        for (
                          var o = 0;
                          o < this[s].dom7LiveListeners.length;
                          o++
                        )
                          this[s].dom7LiveListeners[o].listener === a &&
                            this[s].removeEventListener(
                              i[n],
                              this[s].dom7LiveListeners[o].liveListener,
                              r
                            );
                  return this;
                },
                once: function (e, t, a, r) {
                  var i = this;
                  "function" == typeof t &&
                    ((t = !1), (a = arguments[1]), (r = arguments[2])),
                    i.on(
                      e,
                      t,
                      function n(s) {
                        a(s), i.off(e, t, n, r);
                      },
                      r
                    );
                },
                trigger: function (e, t) {
                  for (var a = 0; a < this.length; a++) {
                    var r;
                    try {
                      r = new window.CustomEvent(e, {
                        detail: t,
                        bubbles: !0,
                        cancelable: !0,
                      });
                    } catch (a) {
                      (r = document.createEvent("Event")).initEvent(e, !0, !0),
                        (r.detail = t);
                    }
                    this[a].dispatchEvent(r);
                  }
                  return this;
                },
                transitionEnd: function (e) {
                  function t(n) {
                    if (n.target === this)
                      for (e.call(this, n), a = 0; a < r.length; a++)
                        i.off(r[a], t);
                  }
                  var a,
                    r = [
                      "webkitTransitionEnd",
                      "transitionend",
                      "oTransitionEnd",
                      "MSTransitionEnd",
                      "msTransitionEnd",
                    ],
                    i = this;
                  if (e) for (a = 0; a < r.length; a++) i.on(r[a], t);
                  return this;
                },
                width: function () {
                  return this[0] === window
                    ? window.innerWidth
                    : this.length > 0
                    ? parseFloat(this.css("width"))
                    : null;
                },
                outerWidth: function (e) {
                  return this.length > 0
                    ? e
                      ? this[0].offsetWidth +
                        parseFloat(this.css("margin-right")) +
                        parseFloat(this.css("margin-left"))
                      : this[0].offsetWidth
                    : null;
                },
                height: function () {
                  return this[0] === window
                    ? window.innerHeight
                    : this.length > 0
                    ? parseFloat(this.css("height"))
                    : null;
                },
                outerHeight: function (e) {
                  return this.length > 0
                    ? e
                      ? this[0].offsetHeight +
                        parseFloat(this.css("margin-top")) +
                        parseFloat(this.css("margin-bottom"))
                      : this[0].offsetHeight
                    : null;
                },
                offset: function () {
                  if (this.length > 0) {
                    var e = this[0],
                      t = e.getBoundingClientRect(),
                      a = document.body,
                      r = e.clientTop || a.clientTop || 0,
                      i = e.clientLeft || a.clientLeft || 0,
                      n = window.pageYOffset || e.scrollTop,
                      s = window.pageXOffset || e.scrollLeft;
                    return { top: t.top + n - r, left: t.left + s - i };
                  }
                  return null;
                },
                css: function (e, t) {
                  var a;
                  if (1 === arguments.length) {
                    if ("string" != typeof e) {
                      for (a = 0; a < this.length; a++)
                        for (var r in e) this[a].style[r] = e[r];
                      return this;
                    }
                    if (this[0])
                      return window
                        .getComputedStyle(this[0], null)
                        .getPropertyValue(e);
                  }
                  if (2 === arguments.length && "string" == typeof e) {
                    for (a = 0; a < this.length; a++) this[a].style[e] = t;
                    return this;
                  }
                  return this;
                },
                each: function (e) {
                  for (var t = 0; t < this.length; t++)
                    e.call(this[t], t, this[t]);
                  return this;
                },
                html: function (e) {
                  if (void 0 === e) return this[0] ? this[0].innerHTML : void 0;
                  for (var t = 0; t < this.length; t++) this[t].innerHTML = e;
                  return this;
                },
                text: function (e) {
                  if (void 0 === e)
                    return this[0] ? this[0].textContent.trim() : null;
                  for (var t = 0; t < this.length; t++) this[t].textContent = e;
                  return this;
                },
                is: function (a) {
                  if (!this[0]) return !1;
                  var r, i;
                  if ("string" == typeof a) {
                    var n = this[0];
                    if (n === document) return a === document;
                    if (n === window) return a === window;
                    if (n.matches) return n.matches(a);
                    if (n.webkitMatchesSelector)
                      return n.webkitMatchesSelector(a);
                    if (n.mozMatchesSelector) return n.mozMatchesSelector(a);
                    if (n.msMatchesSelector) return n.msMatchesSelector(a);
                    for (r = t(a), i = 0; i < r.length; i++)
                      if (r[i] === this[0]) return !0;
                    return !1;
                  }
                  if (a === document) return this[0] === document;
                  if (a === window) return this[0] === window;
                  if (a.nodeType || a instanceof e) {
                    for (r = a.nodeType ? [a] : a, i = 0; i < r.length; i++)
                      if (r[i] === this[0]) return !0;
                    return !1;
                  }
                  return !1;
                },
                index: function () {
                  if (this[0]) {
                    for (
                      var e = this[0], t = 0;
                      null !== (e = e.previousSibling);

                    )
                      1 === e.nodeType && t++;
                    return t;
                  }
                },
                eq: function (t) {
                  if (void 0 === t) return this;
                  var a,
                    r = this.length;
                  return new e(
                    t > r - 1
                      ? []
                      : t < 0
                      ? (a = r + t) < 0
                        ? []
                        : [this[a]]
                      : [this[t]]
                  );
                },
                append: function (t) {
                  var a, r;
                  for (a = 0; a < this.length; a++)
                    if ("string" == typeof t) {
                      var i = document.createElement("div");
                      for (i.innerHTML = t; i.firstChild; )
                        this[a].appendChild(i.firstChild);
                    } else if (t instanceof e)
                      for (r = 0; r < t.length; r++) this[a].appendChild(t[r]);
                    else this[a].appendChild(t);
                  return this;
                },
                prepend: function (t) {
                  var a, r;
                  for (a = 0; a < this.length; a++)
                    if ("string" == typeof t) {
                      var i = document.createElement("div");
                      for (
                        i.innerHTML = t, r = i.childNodes.length - 1;
                        r >= 0;
                        r--
                      )
                        this[a].insertBefore(
                          i.childNodes[r],
                          this[a].childNodes[0]
                        );
                    } else if (t instanceof e)
                      for (r = 0; r < t.length; r++)
                        this[a].insertBefore(t[r], this[a].childNodes[0]);
                    else this[a].insertBefore(t, this[a].childNodes[0]);
                  return this;
                },
                insertBefore: function (e) {
                  for (var a = t(e), r = 0; r < this.length; r++)
                    if (1 === a.length)
                      a[0].parentNode.insertBefore(this[r], a[0]);
                    else if (a.length > 1)
                      for (var i = 0; i < a.length; i++)
                        a[i].parentNode.insertBefore(
                          this[r].cloneNode(!0),
                          a[i]
                        );
                },
                insertAfter: function (e) {
                  for (var a = t(e), r = 0; r < this.length; r++)
                    if (1 === a.length)
                      a[0].parentNode.insertBefore(this[r], a[0].nextSibling);
                    else if (a.length > 1)
                      for (var i = 0; i < a.length; i++)
                        a[i].parentNode.insertBefore(
                          this[r].cloneNode(!0),
                          a[i].nextSibling
                        );
                },
                next: function (a) {
                  return new e(
                    this.length > 0
                      ? a
                        ? this[0].nextElementSibling &&
                          t(this[0].nextElementSibling).is(a)
                          ? [this[0].nextElementSibling]
                          : []
                        : this[0].nextElementSibling
                        ? [this[0].nextElementSibling]
                        : []
                      : []
                  );
                },
                nextAll: function (a) {
                  var r = [],
                    i = this[0];
                  if (!i) return new e([]);
                  for (; i.nextElementSibling; ) {
                    var n = i.nextElementSibling;
                    a ? t(n).is(a) && r.push(n) : r.push(n), (i = n);
                  }
                  return new e(r);
                },
                prev: function (a) {
                  return new e(
                    this.length > 0
                      ? a
                        ? this[0].previousElementSibling &&
                          t(this[0].previousElementSibling).is(a)
                          ? [this[0].previousElementSibling]
                          : []
                        : this[0].previousElementSibling
                        ? [this[0].previousElementSibling]
                        : []
                      : []
                  );
                },
                prevAll: function (a) {
                  var r = [],
                    i = this[0];
                  if (!i) return new e([]);
                  for (; i.previousElementSibling; ) {
                    var n = i.previousElementSibling;
                    a ? t(n).is(a) && r.push(n) : r.push(n), (i = n);
                  }
                  return new e(r);
                },
                parent: function (e) {
                  for (var a = [], r = 0; r < this.length; r++)
                    e
                      ? t(this[r].parentNode).is(e) &&
                        a.push(this[r].parentNode)
                      : a.push(this[r].parentNode);
                  return t(t.unique(a));
                },
                parents: function (e) {
                  for (var a = [], r = 0; r < this.length; r++)
                    for (var i = this[r].parentNode; i; )
                      e ? t(i).is(e) && a.push(i) : a.push(i),
                        (i = i.parentNode);
                  return t(t.unique(a));
                },
                find: function (t) {
                  for (var a = [], r = 0; r < this.length; r++)
                    for (
                      var i = this[r].querySelectorAll(t), n = 0;
                      n < i.length;
                      n++
                    )
                      a.push(i[n]);
                  return new e(a);
                },
                children: function (a) {
                  for (var r = [], i = 0; i < this.length; i++)
                    for (var n = this[i].childNodes, s = 0; s < n.length; s++)
                      a
                        ? 1 === n[s].nodeType && t(n[s]).is(a) && r.push(n[s])
                        : 1 === n[s].nodeType && r.push(n[s]);
                  return new e(t.unique(r));
                },
                remove: function () {
                  for (var e = 0; e < this.length; e++)
                    this[e].parentNode &&
                      this[e].parentNode.removeChild(this[e]);
                  return this;
                },
                add: function () {
                  var e,
                    a,
                    r = this;
                  for (e = 0; e < arguments.length; e++) {
                    var i = t(arguments[e]);
                    for (a = 0; a < i.length; a++)
                      (r[r.length] = i[a]), r.length++;
                  }
                  return r;
                },
              }),
              (t.fn = e.prototype),
              (t.unique = function (e) {
                for (var t = [], a = 0; a < e.length; a++)
                  -1 === t.indexOf(e[a]) && t.push(e[a]);
                return t;
              }),
              t
            );
          })(),
          n = ["jQuery", "Zepto", "Dom7"],
          s = 0;
        s < n.length;
        s++
      )
        window[n[s]] &&
          (function (e) {
            e.fn.swiper = function (t) {
              var r;
              return (
                e(this).each(function () {
                  var e = new a(this, t);
                  r || (r = e);
                }),
                r
              );
            };
          })(window[n[s]]);
      (t = void 0 === i ? window.Dom7 || window.Zepto || window.jQuery : i) &&
        ("transitionEnd" in t.fn ||
          (t.fn.transitionEnd = function (e) {
            function t(n) {
              if (n.target === this)
                for (e.call(this, n), a = 0; a < r.length; a++) i.off(r[a], t);
            }
            var a,
              r = [
                "webkitTransitionEnd",
                "transitionend",
                "oTransitionEnd",
                "MSTransitionEnd",
                "msTransitionEnd",
              ],
              i = this;
            if (e) for (a = 0; a < r.length; a++) i.on(r[a], t);
            return this;
          }),
        "transform" in t.fn ||
          (t.fn.transform = function (e) {
            for (var t = 0; t < this.length; t++) {
              var a = this[t].style;
              a.webkitTransform =
                a.MsTransform =
                a.msTransform =
                a.MozTransform =
                a.OTransform =
                a.transform =
                  e;
            }
            return this;
          }),
        "transition" in t.fn ||
          (t.fn.transition = function (e) {
            "string" != typeof e && (e += "ms");
            for (var t = 0; t < this.length; t++) {
              var a = this[t].style;
              a.webkitTransitionDuration =
                a.MsTransitionDuration =
                a.msTransitionDuration =
                a.MozTransitionDuration =
                a.OTransitionDuration =
                a.transitionDuration =
                  e;
            }
            return this;
          }),
        "outerWidth" in t.fn ||
          (t.fn.outerWidth = function (e) {
            return this.length > 0
              ? e
                ? this[0].offsetWidth +
                  parseFloat(this.css("margin-right")) +
                  parseFloat(this.css("margin-left"))
                : this[0].offsetWidth
              : null;
          })),
        (window.Swiper = a);
    })(),
      (e.exports = window.Swiper);
  },
  function (e, t, a) {
    (function (e) {
      var r =
          (void 0 !== e && e) || ("undefined" != typeof self && self) || window,
        i = Function.prototype.apply;
      function n(e, t) {
        (this._id = e), (this._clearFn = t);
      }
      (t.setTimeout = function () {
        return new n(i.call(setTimeout, r, arguments), clearTimeout);
      }),
        (t.setInterval = function () {
          return new n(i.call(setInterval, r, arguments), clearInterval);
        }),
        (t.clearTimeout = t.clearInterval =
          function (e) {
            e && e.close();
          }),
        (n.prototype.unref = n.prototype.ref = function () {}),
        (n.prototype.close = function () {
          this._clearFn.call(r, this._id);
        }),
        (t.enroll = function (e, t) {
          clearTimeout(e._idleTimeoutId), (e._idleTimeout = t);
        }),
        (t.unenroll = function (e) {
          clearTimeout(e._idleTimeoutId), (e._idleTimeout = -1);
        }),
        (t._unrefActive = t.active =
          function (e) {
            clearTimeout(e._idleTimeoutId);
            var t = e._idleTimeout;
            t >= 0 &&
              (e._idleTimeoutId = setTimeout(function () {
                e._onTimeout && e._onTimeout();
              }, t));
          }),
        a(8),
        (t.setImmediate =
          ("undefined" != typeof self && self.setImmediate) ||
          (void 0 !== e && e.setImmediate) ||
          (this && this.setImmediate)),
        (t.clearImmediate =
          ("undefined" != typeof self && self.clearImmediate) ||
          (void 0 !== e && e.clearImmediate) ||
          (this && this.clearImmediate));
    }).call(this, a(3));
  },
  function (e, t, a) {
    (function (e, t) {
      !(function (e, a) {
        "use strict";
        if (!e.setImmediate) {
          var r,
            i,
            n,
            s,
            o,
            l = 1,
            u = {},
            d = !1,
            p = e.document,
            c = Object.getPrototypeOf && Object.getPrototypeOf(e);
          (c = c && c.setTimeout ? c : e),
            "[object process]" === {}.toString.call(e.process)
              ? (r = function (e) {
                  t.nextTick(function () {
                    h(e);
                  });
                })
              : (function () {
                  if (e.postMessage && !e.importScripts) {
                    var t = !0,
                      a = e.onmessage;
                    return (
                      (e.onmessage = function () {
                        t = !1;
                      }),
                      e.postMessage("", "*"),
                      (e.onmessage = a),
                      t
                    );
                  }
                })()
              ? ((s = "setImmediate$" + Math.random() + "$"),
                (o = function (t) {
                  t.source === e &&
                    "string" == typeof t.data &&
                    0 === t.data.indexOf(s) &&
                    h(+t.data.slice(s.length));
                }),
                e.addEventListener
                  ? e.addEventListener("message", o, !1)
                  : e.attachEvent("onmessage", o),
                (r = function (t) {
                  e.postMessage(s + t, "*");
                }))
              : e.MessageChannel
              ? (((n = new MessageChannel()).port1.onmessage = function (e) {
                  h(e.data);
                }),
                (r = function (e) {
                  n.port2.postMessage(e);
                }))
              : p && "onreadystatechange" in p.createElement("script")
              ? ((i = p.documentElement),
                (r = function (e) {
                  var t = p.createElement("script");
                  (t.onreadystatechange = function () {
                    h(e),
                      (t.onreadystatechange = null),
                      i.removeChild(t),
                      (t = null);
                  }),
                    i.appendChild(t);
                }))
              : (r = function (e) {
                  setTimeout(h, 0, e);
                }),
            (c.setImmediate = function (e) {
              "function" != typeof e && (e = new Function("" + e));
              for (
                var t = new Array(arguments.length - 1), a = 0;
                a < t.length;
                a++
              )
                t[a] = arguments[a + 1];
              var i = { callback: e, args: t };
              return (u[l] = i), r(l), l++;
            }),
            (c.clearImmediate = m);
        }
        function m(e) {
          delete u[e];
        }
        function h(e) {
          if (d) setTimeout(h, 0, e);
          else {
            var t = u[e];
            if (t) {
              d = !0;
              try {
                !(function (e) {
                  var t = e.callback,
                    a = e.args;
                  switch (a.length) {
                    case 0:
                      t();
                      break;
                    case 1:
                      t(a[0]);
                      break;
                    case 2:
                      t(a[0], a[1]);
                      break;
                    case 3:
                      t(a[0], a[1], a[2]);
                      break;
                    default:
                      t.apply(void 0, a);
                  }
                })(t);
              } finally {
                m(e), (d = !1);
              }
            }
          }
        }
      })("undefined" == typeof self ? (void 0 === e ? this : e) : self);
    }).call(this, a(3), a(9));
  },
  function (e, t) {
    var a,
      r,
      i = (e.exports = {});
    function n() {
      throw new Error("setTimeout has not been defined");
    }
    function s() {
      throw new Error("clearTimeout has not been defined");
    }
    function o(e) {
      if (a === setTimeout) return setTimeout(e, 0);
      if ((a === n || !a) && setTimeout)
        return (a = setTimeout), setTimeout(e, 0);
      try {
        return a(e, 0);
      } catch (t) {
        try {
          return a.call(null, e, 0);
        } catch (t) {
          return a.call(this, e, 0);
        }
      }
    }
    !(function () {
      try {
        a = "function" == typeof setTimeout ? setTimeout : n;
      } catch (e) {
        a = n;
      }
      try {
        r = "function" == typeof clearTimeout ? clearTimeout : s;
      } catch (e) {
        r = s;
      }
    })();
    var l,
      u = [],
      d = !1,
      p = -1;
    function c() {
      d &&
        l &&
        ((d = !1), l.length ? (u = l.concat(u)) : (p = -1), u.length && m());
    }
    function m() {
      if (!d) {
        var e = o(c);
        d = !0;
        for (var t = u.length; t; ) {
          for (l = u, u = []; ++p < t; ) l && l[p].run();
          (p = -1), (t = u.length);
        }
        (l = null),
          (d = !1),
          (function (e) {
            if (r === clearTimeout) return clearTimeout(e);
            if ((r === s || !r) && clearTimeout)
              return (r = clearTimeout), clearTimeout(e);
            try {
              r(e);
            } catch (t) {
              try {
                return r.call(null, e);
              } catch (t) {
                return r.call(this, e);
              }
            }
          })(e);
      }
    }
    function h(e, t) {
      (this.fun = e), (this.array = t);
    }
    function f() {}
    (i.nextTick = function (e) {
      var t = new Array(arguments.length - 1);
      if (arguments.length > 1)
        for (var a = 1; a < arguments.length; a++) t[a - 1] = arguments[a];
      u.push(new h(e, t)), 1 !== u.length || d || o(m);
    }),
      (h.prototype.run = function () {
        this.fun.apply(null, this.array);
      }),
      (i.title = "browser"),
      (i.browser = !0),
      (i.env = {}),
      (i.argv = []),
      (i.version = ""),
      (i.versions = {}),
      (i.on = f),
      (i.addListener = f),
      (i.once = f),
      (i.off = f),
      (i.removeListener = f),
      (i.removeAllListeners = f),
      (i.emit = f),
      (i.prependListener = f),
      (i.prependOnceListener = f),
      (i.listeners = function (e) {
        return [];
      }),
      (i.binding = function (e) {
        throw new Error("process.binding is not supported");
      }),
      (i.cwd = function () {
        return "/";
      }),
      (i.chdir = function (e) {
        throw new Error("process.chdir is not supported");
      }),
      (i.umask = function () {
        return 0;
      });
  },
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  function (e, t, a) {
    "use strict";
    a.r(t);
    var r = a(5),
      i = a(0),
      n = a(6),
      s = a.n(n);
    function o(e, t) {
      for (var a = 0; a < t.length; a++) {
        var r = t[a];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    var l = (function () {
      function e() {
        !(function (e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        })(this, e),
          (this.main = document.getElementById("main"));
      }
      var t, a;
      return (
        (t = e),
        (a = [
          {
            key: "loadingDone",
            value: function () {
              var e =
                arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
              this.main.classList.remove(
                "main--loading".concat(e ? "-dark" : "")
              );
            },
          },
          {
            key: "loading",
            value: function () {
              var e =
                arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
              this.main.classList.add("main--loading".concat(e ? "-dark" : ""));
            },
          },
        ]) && o(t.prototype, a),
        e
      );
    })();
    (window.FNB = window.FNB || {}),
      (window.FNB.loadManager = new l()),
      (window.FNB.Player = r.a),
      (window.FNB.Utils = i.a),
      (window.FNB.Swiper = s.a),
      window.FNB.funcsToCallOnLoad &&
        window.FNB.funcsToCallOnLoad.forEach(function (e) {
          return e();
        });
  },
]);
