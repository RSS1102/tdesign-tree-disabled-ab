var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// ../../../../../private/tmp/tdesign-tree-visual/node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js
var require_classnames = __commonJS({
  "../../../../../private/tmp/tdesign-tree-visual/node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"(exports, module) {
    (function() {
      "use strict";
      var hasOwn = {}.hasOwnProperty;
      function classNames8() {
        var classes = "";
        for (var i = 0; i < arguments.length; i++) {
          var arg = arguments[i];
          if (arg) {
            classes = appendClass(classes, parseValue(arg));
          }
        }
        return classes;
      }
      function parseValue(arg) {
        if (typeof arg === "string" || typeof arg === "number") {
          return arg;
        }
        if (typeof arg !== "object") {
          return "";
        }
        if (Array.isArray(arg)) {
          return classNames8.apply(null, arg);
        }
        if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes("[native code]")) {
          return arg.toString();
        }
        var classes = "";
        for (var key in arg) {
          if (hasOwn.call(arg, key) && arg[key]) {
            classes = appendClass(classes, key);
          }
        }
        return classes;
      }
      function appendClass(value, newClass) {
        if (!newClass) {
          return value;
        }
        if (value) {
          return value + " " + newClass;
        }
        return value + newClass;
      }
      if (typeof module !== "undefined" && module.exports) {
        classNames8.default = classNames8;
        module.exports = classNames8;
      } else if (typeof define === "function" && typeof define.amd === "object" && define.amd) {
        define("classnames", [], function() {
          return classNames8;
        });
      } else {
        window.classNames = classNames8;
      }
    })();
  }
});

// node_modules/.pnpm/dayjs@1.11.10/node_modules/dayjs/dayjs.min.js
var require_dayjs_min = __commonJS({
  "node_modules/.pnpm/dayjs@1.11.10/node_modules/dayjs/dayjs.min.js"(exports, module) {
    !function(t2, e) {
      "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t2 = "undefined" != typeof globalThis ? globalThis : t2 || self).dayjs = e();
    }(exports, function() {
      "use strict";
      var t2 = 1e3, e = 6e4, n = 36e5, r = "millisecond", i = "second", s = "minute", u = "hour", a = "day", o = "week", c = "month", f = "quarter", h = "year", d = "date", l = "Invalid Date", $ = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, y = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, M = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(t3) {
        var e2 = ["th", "st", "nd", "rd"], n2 = t3 % 100;
        return "[" + t3 + (e2[(n2 - 20) % 10] || e2[n2] || e2[0]) + "]";
      } }, m = function(t3, e2, n2) {
        var r2 = String(t3);
        return !r2 || r2.length >= e2 ? t3 : "" + Array(e2 + 1 - r2.length).join(n2) + t3;
      }, v = { s: m, z: function(t3) {
        var e2 = -t3.utcOffset(), n2 = Math.abs(e2), r2 = Math.floor(n2 / 60), i2 = n2 % 60;
        return (e2 <= 0 ? "+" : "-") + m(r2, 2, "0") + ":" + m(i2, 2, "0");
      }, m: function t3(e2, n2) {
        if (e2.date() < n2.date())
          return -t3(n2, e2);
        var r2 = 12 * (n2.year() - e2.year()) + (n2.month() - e2.month()), i2 = e2.clone().add(r2, c), s2 = n2 - i2 < 0, u2 = e2.clone().add(r2 + (s2 ? -1 : 1), c);
        return +(-(r2 + (n2 - i2) / (s2 ? i2 - u2 : u2 - i2)) || 0);
      }, a: function(t3) {
        return t3 < 0 ? Math.ceil(t3) || 0 : Math.floor(t3);
      }, p: function(t3) {
        return { M: c, y: h, w: o, d: a, D: d, h: u, m: s, s: i, ms: r, Q: f }[t3] || String(t3 || "").toLowerCase().replace(/s$/, "");
      }, u: function(t3) {
        return void 0 === t3;
      } }, g = "en", D = {};
      D[g] = M;
      var p = "$isDayjsObject", S = function(t3) {
        return t3 instanceof _ || !(!t3 || !t3[p]);
      }, w = function t3(e2, n2, r2) {
        var i2;
        if (!e2)
          return g;
        if ("string" == typeof e2) {
          var s2 = e2.toLowerCase();
          D[s2] && (i2 = s2), n2 && (D[s2] = n2, i2 = s2);
          var u2 = e2.split("-");
          if (!i2 && u2.length > 1)
            return t3(u2[0]);
        } else {
          var a2 = e2.name;
          D[a2] = e2, i2 = a2;
        }
        return !r2 && i2 && (g = i2), i2 || !r2 && g;
      }, O = function(t3, e2) {
        if (S(t3))
          return t3.clone();
        var n2 = "object" == typeof e2 ? e2 : {};
        return n2.date = t3, n2.args = arguments, new _(n2);
      }, b = v;
      b.l = w, b.i = S, b.w = function(t3, e2) {
        return O(t3, { locale: e2.$L, utc: e2.$u, x: e2.$x, $offset: e2.$offset });
      };
      var _ = function() {
        function M2(t3) {
          this.$L = w(t3.locale, null, true), this.parse(t3), this.$x = this.$x || t3.x || {}, this[p] = true;
        }
        var m2 = M2.prototype;
        return m2.parse = function(t3) {
          this.$d = function(t4) {
            var e2 = t4.date, n2 = t4.utc;
            if (null === e2)
              return new Date(NaN);
            if (b.u(e2))
              return new Date();
            if (e2 instanceof Date)
              return new Date(e2);
            if ("string" == typeof e2 && !/Z$/i.test(e2)) {
              var r2 = e2.match($);
              if (r2) {
                var i2 = r2[2] - 1 || 0, s2 = (r2[7] || "0").substring(0, 3);
                return n2 ? new Date(Date.UTC(r2[1], i2, r2[3] || 1, r2[4] || 0, r2[5] || 0, r2[6] || 0, s2)) : new Date(r2[1], i2, r2[3] || 1, r2[4] || 0, r2[5] || 0, r2[6] || 0, s2);
              }
            }
            return new Date(e2);
          }(t3), this.init();
        }, m2.init = function() {
          var t3 = this.$d;
          this.$y = t3.getFullYear(), this.$M = t3.getMonth(), this.$D = t3.getDate(), this.$W = t3.getDay(), this.$H = t3.getHours(), this.$m = t3.getMinutes(), this.$s = t3.getSeconds(), this.$ms = t3.getMilliseconds();
        }, m2.$utils = function() {
          return b;
        }, m2.isValid = function() {
          return !(this.$d.toString() === l);
        }, m2.isSame = function(t3, e2) {
          var n2 = O(t3);
          return this.startOf(e2) <= n2 && n2 <= this.endOf(e2);
        }, m2.isAfter = function(t3, e2) {
          return O(t3) < this.startOf(e2);
        }, m2.isBefore = function(t3, e2) {
          return this.endOf(e2) < O(t3);
        }, m2.$g = function(t3, e2, n2) {
          return b.u(t3) ? this[e2] : this.set(n2, t3);
        }, m2.unix = function() {
          return Math.floor(this.valueOf() / 1e3);
        }, m2.valueOf = function() {
          return this.$d.getTime();
        }, m2.startOf = function(t3, e2) {
          var n2 = this, r2 = !!b.u(e2) || e2, f2 = b.p(t3), l2 = function(t4, e3) {
            var i2 = b.w(n2.$u ? Date.UTC(n2.$y, e3, t4) : new Date(n2.$y, e3, t4), n2);
            return r2 ? i2 : i2.endOf(a);
          }, $2 = function(t4, e3) {
            return b.w(n2.toDate()[t4].apply(n2.toDate("s"), (r2 ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(e3)), n2);
          }, y2 = this.$W, M3 = this.$M, m3 = this.$D, v2 = "set" + (this.$u ? "UTC" : "");
          switch (f2) {
            case h:
              return r2 ? l2(1, 0) : l2(31, 11);
            case c:
              return r2 ? l2(1, M3) : l2(0, M3 + 1);
            case o:
              var g2 = this.$locale().weekStart || 0, D2 = (y2 < g2 ? y2 + 7 : y2) - g2;
              return l2(r2 ? m3 - D2 : m3 + (6 - D2), M3);
            case a:
            case d:
              return $2(v2 + "Hours", 0);
            case u:
              return $2(v2 + "Minutes", 1);
            case s:
              return $2(v2 + "Seconds", 2);
            case i:
              return $2(v2 + "Milliseconds", 3);
            default:
              return this.clone();
          }
        }, m2.endOf = function(t3) {
          return this.startOf(t3, false);
        }, m2.$set = function(t3, e2) {
          var n2, o2 = b.p(t3), f2 = "set" + (this.$u ? "UTC" : ""), l2 = (n2 = {}, n2[a] = f2 + "Date", n2[d] = f2 + "Date", n2[c] = f2 + "Month", n2[h] = f2 + "FullYear", n2[u] = f2 + "Hours", n2[s] = f2 + "Minutes", n2[i] = f2 + "Seconds", n2[r] = f2 + "Milliseconds", n2)[o2], $2 = o2 === a ? this.$D + (e2 - this.$W) : e2;
          if (o2 === c || o2 === h) {
            var y2 = this.clone().set(d, 1);
            y2.$d[l2]($2), y2.init(), this.$d = y2.set(d, Math.min(this.$D, y2.daysInMonth())).$d;
          } else
            l2 && this.$d[l2]($2);
          return this.init(), this;
        }, m2.set = function(t3, e2) {
          return this.clone().$set(t3, e2);
        }, m2.get = function(t3) {
          return this[b.p(t3)]();
        }, m2.add = function(r2, f2) {
          var d2, l2 = this;
          r2 = Number(r2);
          var $2 = b.p(f2), y2 = function(t3) {
            var e2 = O(l2);
            return b.w(e2.date(e2.date() + Math.round(t3 * r2)), l2);
          };
          if ($2 === c)
            return this.set(c, this.$M + r2);
          if ($2 === h)
            return this.set(h, this.$y + r2);
          if ($2 === a)
            return y2(1);
          if ($2 === o)
            return y2(7);
          var M3 = (d2 = {}, d2[s] = e, d2[u] = n, d2[i] = t2, d2)[$2] || 1, m3 = this.$d.getTime() + r2 * M3;
          return b.w(m3, this);
        }, m2.subtract = function(t3, e2) {
          return this.add(-1 * t3, e2);
        }, m2.format = function(t3) {
          var e2 = this, n2 = this.$locale();
          if (!this.isValid())
            return n2.invalidDate || l;
          var r2 = t3 || "YYYY-MM-DDTHH:mm:ssZ", i2 = b.z(this), s2 = this.$H, u2 = this.$m, a2 = this.$M, o2 = n2.weekdays, c2 = n2.months, f2 = n2.meridiem, h2 = function(t4, n3, i3, s3) {
            return t4 && (t4[n3] || t4(e2, r2)) || i3[n3].slice(0, s3);
          }, d2 = function(t4) {
            return b.s(s2 % 12 || 12, t4, "0");
          }, $2 = f2 || function(t4, e3, n3) {
            var r3 = t4 < 12 ? "AM" : "PM";
            return n3 ? r3.toLowerCase() : r3;
          };
          return r2.replace(y, function(t4, r3) {
            return r3 || function(t5) {
              switch (t5) {
                case "YY":
                  return String(e2.$y).slice(-2);
                case "YYYY":
                  return b.s(e2.$y, 4, "0");
                case "M":
                  return a2 + 1;
                case "MM":
                  return b.s(a2 + 1, 2, "0");
                case "MMM":
                  return h2(n2.monthsShort, a2, c2, 3);
                case "MMMM":
                  return h2(c2, a2);
                case "D":
                  return e2.$D;
                case "DD":
                  return b.s(e2.$D, 2, "0");
                case "d":
                  return String(e2.$W);
                case "dd":
                  return h2(n2.weekdaysMin, e2.$W, o2, 2);
                case "ddd":
                  return h2(n2.weekdaysShort, e2.$W, o2, 3);
                case "dddd":
                  return o2[e2.$W];
                case "H":
                  return String(s2);
                case "HH":
                  return b.s(s2, 2, "0");
                case "h":
                  return d2(1);
                case "hh":
                  return d2(2);
                case "a":
                  return $2(s2, u2, true);
                case "A":
                  return $2(s2, u2, false);
                case "m":
                  return String(u2);
                case "mm":
                  return b.s(u2, 2, "0");
                case "s":
                  return String(e2.$s);
                case "ss":
                  return b.s(e2.$s, 2, "0");
                case "SSS":
                  return b.s(e2.$ms, 3, "0");
                case "Z":
                  return i2;
              }
              return null;
            }(t4) || i2.replace(":", "");
          });
        }, m2.utcOffset = function() {
          return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
        }, m2.diff = function(r2, d2, l2) {
          var $2, y2 = this, M3 = b.p(d2), m3 = O(r2), v2 = (m3.utcOffset() - this.utcOffset()) * e, g2 = this - m3, D2 = function() {
            return b.m(y2, m3);
          };
          switch (M3) {
            case h:
              $2 = D2() / 12;
              break;
            case c:
              $2 = D2();
              break;
            case f:
              $2 = D2() / 3;
              break;
            case o:
              $2 = (g2 - v2) / 6048e5;
              break;
            case a:
              $2 = (g2 - v2) / 864e5;
              break;
            case u:
              $2 = g2 / n;
              break;
            case s:
              $2 = g2 / e;
              break;
            case i:
              $2 = g2 / t2;
              break;
            default:
              $2 = g2;
          }
          return l2 ? $2 : b.a($2);
        }, m2.daysInMonth = function() {
          return this.endOf(c).$D;
        }, m2.$locale = function() {
          return D[this.$L];
        }, m2.locale = function(t3, e2) {
          if (!t3)
            return this.$L;
          var n2 = this.clone(), r2 = w(t3, e2, true);
          return r2 && (n2.$L = r2), n2;
        }, m2.clone = function() {
          return b.w(this.$d, this);
        }, m2.toDate = function() {
          return new Date(this.valueOf());
        }, m2.toJSON = function() {
          return this.isValid() ? this.toISOString() : null;
        }, m2.toISOString = function() {
          return this.$d.toISOString();
        }, m2.toString = function() {
          return this.$d.toUTCString();
        }, M2;
      }(), k = _.prototype;
      return O.prototype = k, [["$ms", r], ["$s", i], ["$m", s], ["$H", u], ["$W", a], ["$M", c], ["$y", h], ["$D", d]].forEach(function(t3) {
        k[t3[1]] = function(e2) {
          return this.$g(e2, t3[0], t3[1]);
        };
      }), O.extend = function(t3, e2) {
        return t3.$i || (t3(e2, _, O), t3.$i = true), O;
      }, O.locale = w, O.isDayjs = S, O.unix = function(t3) {
        return O(1e3 * t3);
      }, O.en = D[g], O.Ls = D, O.p = {}, O;
    });
  }
});

// node_modules/.pnpm/dayjs@1.11.10/node_modules/dayjs/locale/zh-cn.js
var require_zh_cn = __commonJS({
  "node_modules/.pnpm/dayjs@1.11.10/node_modules/dayjs/locale/zh-cn.js"(exports, module) {
    !function(e, _) {
      "object" == typeof exports && "undefined" != typeof module ? module.exports = _(require_dayjs_min()) : "function" == typeof define && define.amd ? define(["dayjs"], _) : (e = "undefined" != typeof globalThis ? globalThis : e || self).dayjs_locale_zh_cn = _(e.dayjs);
    }(exports, function(e) {
      "use strict";
      function _(e2) {
        return e2 && "object" == typeof e2 && "default" in e2 ? e2 : { default: e2 };
      }
      var t2 = _(e), d = { name: "zh-cn", weekdays: "\u661F\u671F\u65E5_\u661F\u671F\u4E00_\u661F\u671F\u4E8C_\u661F\u671F\u4E09_\u661F\u671F\u56DB_\u661F\u671F\u4E94_\u661F\u671F\u516D".split("_"), weekdaysShort: "\u5468\u65E5_\u5468\u4E00_\u5468\u4E8C_\u5468\u4E09_\u5468\u56DB_\u5468\u4E94_\u5468\u516D".split("_"), weekdaysMin: "\u65E5_\u4E00_\u4E8C_\u4E09_\u56DB_\u4E94_\u516D".split("_"), months: "\u4E00\u6708_\u4E8C\u6708_\u4E09\u6708_\u56DB\u6708_\u4E94\u6708_\u516D\u6708_\u4E03\u6708_\u516B\u6708_\u4E5D\u6708_\u5341\u6708_\u5341\u4E00\u6708_\u5341\u4E8C\u6708".split("_"), monthsShort: "1\u6708_2\u6708_3\u6708_4\u6708_5\u6708_6\u6708_7\u6708_8\u6708_9\u6708_10\u6708_11\u6708_12\u6708".split("_"), ordinal: function(e2, _2) {
        return "W" === _2 ? e2 + "\u5468" : e2 + "\u65E5";
      }, weekStart: 1, yearStart: 4, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY/MM/DD", LL: "YYYY\u5E74M\u6708D\u65E5", LLL: "YYYY\u5E74M\u6708D\u65E5Ah\u70B9mm\u5206", LLLL: "YYYY\u5E74M\u6708D\u65E5ddddAh\u70B9mm\u5206", l: "YYYY/M/D", ll: "YYYY\u5E74M\u6708D\u65E5", lll: "YYYY\u5E74M\u6708D\u65E5 HH:mm", llll: "YYYY\u5E74M\u6708D\u65E5dddd HH:mm" }, relativeTime: { future: "%s\u5185", past: "%s\u524D", s: "\u51E0\u79D2", m: "1 \u5206\u949F", mm: "%d \u5206\u949F", h: "1 \u5C0F\u65F6", hh: "%d \u5C0F\u65F6", d: "1 \u5929", dd: "%d \u5929", M: "1 \u4E2A\u6708", MM: "%d \u4E2A\u6708", y: "1 \u5E74", yy: "%d \u5E74" }, meridiem: function(e2, _2) {
        var t3 = 100 * e2 + _2;
        return t3 < 600 ? "\u51CC\u6668" : t3 < 900 ? "\u65E9\u4E0A" : t3 < 1100 ? "\u4E0A\u5348" : t3 < 1300 ? "\u4E2D\u5348" : t3 < 1800 ? "\u4E0B\u5348" : "\u665A\u4E0A";
      } };
      return t2.default.locale(d, null, true), d;
    });
  }
});

// node_modules/.pnpm/react-is@18.3.1/node_modules/react-is/cjs/react-is.development.js
var require_react_is_development = __commonJS({
  "node_modules/.pnpm/react-is@18.3.1/node_modules/react-is/cjs/react-is.development.js"(exports) {
    "use strict";
    if (true) {
      (function() {
        "use strict";
        var REACT_ELEMENT_TYPE = Symbol.for("react.element");
        var REACT_PORTAL_TYPE = Symbol.for("react.portal");
        var REACT_FRAGMENT_TYPE2 = Symbol.for("react.fragment");
        var REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode");
        var REACT_PROFILER_TYPE = Symbol.for("react.profiler");
        var REACT_PROVIDER_TYPE = Symbol.for("react.provider");
        var REACT_CONTEXT_TYPE = Symbol.for("react.context");
        var REACT_SERVER_CONTEXT_TYPE = Symbol.for("react.server_context");
        var REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref");
        var REACT_SUSPENSE_TYPE = Symbol.for("react.suspense");
        var REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list");
        var REACT_MEMO_TYPE = Symbol.for("react.memo");
        var REACT_LAZY_TYPE = Symbol.for("react.lazy");
        var REACT_OFFSCREEN_TYPE = Symbol.for("react.offscreen");
        var enableScopeAPI = false;
        var enableCacheElement = false;
        var enableTransitionTracing = false;
        var enableLegacyHidden = false;
        var enableDebugTracing = false;
        var REACT_MODULE_REFERENCE;
        {
          REACT_MODULE_REFERENCE = Symbol.for("react.module.reference");
        }
        function isValidElementType(type) {
          if (typeof type === "string" || typeof type === "function") {
            return true;
          }
          if (type === REACT_FRAGMENT_TYPE2 || type === REACT_PROFILER_TYPE || enableDebugTracing || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || enableLegacyHidden || type === REACT_OFFSCREEN_TYPE || enableScopeAPI || enableCacheElement || enableTransitionTracing) {
            return true;
          }
          if (typeof type === "object" && type !== null) {
            if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_MODULE_REFERENCE || type.getModuleId !== void 0) {
              return true;
            }
          }
          return false;
        }
        function typeOf(object) {
          if (typeof object === "object" && object !== null) {
            var $$typeof = object.$$typeof;
            switch ($$typeof) {
              case REACT_ELEMENT_TYPE:
                var type = object.type;
                switch (type) {
                  case REACT_FRAGMENT_TYPE2:
                  case REACT_PROFILER_TYPE:
                  case REACT_STRICT_MODE_TYPE:
                  case REACT_SUSPENSE_TYPE:
                  case REACT_SUSPENSE_LIST_TYPE:
                    return type;
                  default:
                    var $$typeofType = type && type.$$typeof;
                    switch ($$typeofType) {
                      case REACT_SERVER_CONTEXT_TYPE:
                      case REACT_CONTEXT_TYPE:
                      case REACT_FORWARD_REF_TYPE:
                      case REACT_LAZY_TYPE:
                      case REACT_MEMO_TYPE:
                      case REACT_PROVIDER_TYPE:
                        return $$typeofType;
                      default:
                        return $$typeof;
                    }
                }
              case REACT_PORTAL_TYPE:
                return $$typeof;
            }
          }
          return void 0;
        }
        var ContextConsumer = REACT_CONTEXT_TYPE;
        var ContextProvider = REACT_PROVIDER_TYPE;
        var Element2 = REACT_ELEMENT_TYPE;
        var ForwardRef2 = REACT_FORWARD_REF_TYPE;
        var Fragment = REACT_FRAGMENT_TYPE2;
        var Lazy = REACT_LAZY_TYPE;
        var Memo = REACT_MEMO_TYPE;
        var Portal2 = REACT_PORTAL_TYPE;
        var Profiler = REACT_PROFILER_TYPE;
        var StrictMode = REACT_STRICT_MODE_TYPE;
        var Suspense = REACT_SUSPENSE_TYPE;
        var SuspenseList = REACT_SUSPENSE_LIST_TYPE;
        var hasWarnedAboutDeprecatedIsAsyncMode = false;
        var hasWarnedAboutDeprecatedIsConcurrentMode = false;
        function isAsyncMode(object) {
          {
            if (!hasWarnedAboutDeprecatedIsAsyncMode) {
              hasWarnedAboutDeprecatedIsAsyncMode = true;
              console["warn"]("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.");
            }
          }
          return false;
        }
        function isConcurrentMode(object) {
          {
            if (!hasWarnedAboutDeprecatedIsConcurrentMode) {
              hasWarnedAboutDeprecatedIsConcurrentMode = true;
              console["warn"]("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.");
            }
          }
          return false;
        }
        function isContextConsumer(object) {
          return typeOf(object) === REACT_CONTEXT_TYPE;
        }
        function isContextProvider(object) {
          return typeOf(object) === REACT_PROVIDER_TYPE;
        }
        function isElement2(object) {
          return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
        }
        function isForwardRef(object) {
          return typeOf(object) === REACT_FORWARD_REF_TYPE;
        }
        function isFragment2(object) {
          return typeOf(object) === REACT_FRAGMENT_TYPE2;
        }
        function isLazy(object) {
          return typeOf(object) === REACT_LAZY_TYPE;
        }
        function isMemo2(object) {
          return typeOf(object) === REACT_MEMO_TYPE;
        }
        function isPortal(object) {
          return typeOf(object) === REACT_PORTAL_TYPE;
        }
        function isProfiler(object) {
          return typeOf(object) === REACT_PROFILER_TYPE;
        }
        function isStrictMode(object) {
          return typeOf(object) === REACT_STRICT_MODE_TYPE;
        }
        function isSuspense(object) {
          return typeOf(object) === REACT_SUSPENSE_TYPE;
        }
        function isSuspenseList(object) {
          return typeOf(object) === REACT_SUSPENSE_LIST_TYPE;
        }
        exports.ContextConsumer = ContextConsumer;
        exports.ContextProvider = ContextProvider;
        exports.Element = Element2;
        exports.ForwardRef = ForwardRef2;
        exports.Fragment = Fragment;
        exports.Lazy = Lazy;
        exports.Memo = Memo;
        exports.Portal = Portal2;
        exports.Profiler = Profiler;
        exports.StrictMode = StrictMode;
        exports.Suspense = Suspense;
        exports.SuspenseList = SuspenseList;
        exports.isAsyncMode = isAsyncMode;
        exports.isConcurrentMode = isConcurrentMode;
        exports.isContextConsumer = isContextConsumer;
        exports.isContextProvider = isContextProvider;
        exports.isElement = isElement2;
        exports.isForwardRef = isForwardRef;
        exports.isFragment = isFragment2;
        exports.isLazy = isLazy;
        exports.isMemo = isMemo2;
        exports.isPortal = isPortal;
        exports.isProfiler = isProfiler;
        exports.isStrictMode = isStrictMode;
        exports.isSuspense = isSuspense;
        exports.isSuspenseList = isSuspenseList;
        exports.isValidElementType = isValidElementType;
        exports.typeOf = typeOf;
      })();
    }
  }
});

// node_modules/.pnpm/react-is@18.3.1/node_modules/react-is/index.js
var require_react_is = __commonJS({
  "node_modules/.pnpm/react-is@18.3.1/node_modules/react-is/index.js"(exports, module) {
    "use strict";
    if (false) {
      module.exports = null;
    } else {
      module.exports = require_react_is_development();
    }
  }
});

// node_modules/.pnpm/react-is@16.13.1/node_modules/react-is/cjs/react-is.development.js
var require_react_is_development2 = __commonJS({
  "node_modules/.pnpm/react-is@16.13.1/node_modules/react-is/cjs/react-is.development.js"(exports) {
    "use strict";
    if (true) {
      (function() {
        "use strict";
        var hasSymbol = typeof Symbol === "function" && Symbol.for;
        var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for("react.element") : 60103;
        var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for("react.portal") : 60106;
        var REACT_FRAGMENT_TYPE2 = hasSymbol ? Symbol.for("react.fragment") : 60107;
        var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for("react.strict_mode") : 60108;
        var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for("react.profiler") : 60114;
        var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for("react.provider") : 60109;
        var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for("react.context") : 60110;
        var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for("react.async_mode") : 60111;
        var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for("react.concurrent_mode") : 60111;
        var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for("react.forward_ref") : 60112;
        var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for("react.suspense") : 60113;
        var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for("react.suspense_list") : 60120;
        var REACT_MEMO_TYPE = hasSymbol ? Symbol.for("react.memo") : 60115;
        var REACT_LAZY_TYPE = hasSymbol ? Symbol.for("react.lazy") : 60116;
        var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for("react.block") : 60121;
        var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for("react.fundamental") : 60117;
        var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for("react.responder") : 60118;
        var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for("react.scope") : 60119;
        function isValidElementType(type) {
          return typeof type === "string" || typeof type === "function" || type === REACT_FRAGMENT_TYPE2 || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === "object" && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
        }
        function typeOf(object) {
          if (typeof object === "object" && object !== null) {
            var $$typeof = object.$$typeof;
            switch ($$typeof) {
              case REACT_ELEMENT_TYPE:
                var type = object.type;
                switch (type) {
                  case REACT_ASYNC_MODE_TYPE:
                  case REACT_CONCURRENT_MODE_TYPE:
                  case REACT_FRAGMENT_TYPE2:
                  case REACT_PROFILER_TYPE:
                  case REACT_STRICT_MODE_TYPE:
                  case REACT_SUSPENSE_TYPE:
                    return type;
                  default:
                    var $$typeofType = type && type.$$typeof;
                    switch ($$typeofType) {
                      case REACT_CONTEXT_TYPE:
                      case REACT_FORWARD_REF_TYPE:
                      case REACT_LAZY_TYPE:
                      case REACT_MEMO_TYPE:
                      case REACT_PROVIDER_TYPE:
                        return $$typeofType;
                      default:
                        return $$typeof;
                    }
                }
              case REACT_PORTAL_TYPE:
                return $$typeof;
            }
          }
          return void 0;
        }
        var AsyncMode = REACT_ASYNC_MODE_TYPE;
        var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
        var ContextConsumer = REACT_CONTEXT_TYPE;
        var ContextProvider = REACT_PROVIDER_TYPE;
        var Element2 = REACT_ELEMENT_TYPE;
        var ForwardRef2 = REACT_FORWARD_REF_TYPE;
        var Fragment = REACT_FRAGMENT_TYPE2;
        var Lazy = REACT_LAZY_TYPE;
        var Memo = REACT_MEMO_TYPE;
        var Portal2 = REACT_PORTAL_TYPE;
        var Profiler = REACT_PROFILER_TYPE;
        var StrictMode = REACT_STRICT_MODE_TYPE;
        var Suspense = REACT_SUSPENSE_TYPE;
        var hasWarnedAboutDeprecatedIsAsyncMode = false;
        function isAsyncMode(object) {
          {
            if (!hasWarnedAboutDeprecatedIsAsyncMode) {
              hasWarnedAboutDeprecatedIsAsyncMode = true;
              console["warn"]("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.");
            }
          }
          return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
        }
        function isConcurrentMode(object) {
          return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
        }
        function isContextConsumer(object) {
          return typeOf(object) === REACT_CONTEXT_TYPE;
        }
        function isContextProvider(object) {
          return typeOf(object) === REACT_PROVIDER_TYPE;
        }
        function isElement2(object) {
          return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
        }
        function isForwardRef(object) {
          return typeOf(object) === REACT_FORWARD_REF_TYPE;
        }
        function isFragment2(object) {
          return typeOf(object) === REACT_FRAGMENT_TYPE2;
        }
        function isLazy(object) {
          return typeOf(object) === REACT_LAZY_TYPE;
        }
        function isMemo2(object) {
          return typeOf(object) === REACT_MEMO_TYPE;
        }
        function isPortal(object) {
          return typeOf(object) === REACT_PORTAL_TYPE;
        }
        function isProfiler(object) {
          return typeOf(object) === REACT_PROFILER_TYPE;
        }
        function isStrictMode(object) {
          return typeOf(object) === REACT_STRICT_MODE_TYPE;
        }
        function isSuspense(object) {
          return typeOf(object) === REACT_SUSPENSE_TYPE;
        }
        exports.AsyncMode = AsyncMode;
        exports.ConcurrentMode = ConcurrentMode;
        exports.ContextConsumer = ContextConsumer;
        exports.ContextProvider = ContextProvider;
        exports.Element = Element2;
        exports.ForwardRef = ForwardRef2;
        exports.Fragment = Fragment;
        exports.Lazy = Lazy;
        exports.Memo = Memo;
        exports.Portal = Portal2;
        exports.Profiler = Profiler;
        exports.StrictMode = StrictMode;
        exports.Suspense = Suspense;
        exports.isAsyncMode = isAsyncMode;
        exports.isConcurrentMode = isConcurrentMode;
        exports.isContextConsumer = isContextConsumer;
        exports.isContextProvider = isContextProvider;
        exports.isElement = isElement2;
        exports.isForwardRef = isForwardRef;
        exports.isFragment = isFragment2;
        exports.isLazy = isLazy;
        exports.isMemo = isMemo2;
        exports.isPortal = isPortal;
        exports.isProfiler = isProfiler;
        exports.isStrictMode = isStrictMode;
        exports.isSuspense = isSuspense;
        exports.isValidElementType = isValidElementType;
        exports.typeOf = typeOf;
      })();
    }
  }
});

// node_modules/.pnpm/react-is@16.13.1/node_modules/react-is/index.js
var require_react_is2 = __commonJS({
  "node_modules/.pnpm/react-is@16.13.1/node_modules/react-is/index.js"(exports, module) {
    "use strict";
    if (false) {
      module.exports = null;
    } else {
      module.exports = require_react_is_development2();
    }
  }
});

// node_modules/.pnpm/hoist-non-react-statics@3.3.2/node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js
var require_hoist_non_react_statics_cjs = __commonJS({
  "node_modules/.pnpm/hoist-non-react-statics@3.3.2/node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js"(exports, module) {
    "use strict";
    var reactIs = require_react_is2();
    var REACT_STATICS = {
      childContextTypes: true,
      contextType: true,
      contextTypes: true,
      defaultProps: true,
      displayName: true,
      getDefaultProps: true,
      getDerivedStateFromError: true,
      getDerivedStateFromProps: true,
      mixins: true,
      propTypes: true,
      type: true
    };
    var KNOWN_STATICS = {
      name: true,
      length: true,
      prototype: true,
      caller: true,
      callee: true,
      arguments: true,
      arity: true
    };
    var FORWARD_REF_STATICS = {
      "$$typeof": true,
      render: true,
      defaultProps: true,
      displayName: true,
      propTypes: true
    };
    var MEMO_STATICS = {
      "$$typeof": true,
      compare: true,
      defaultProps: true,
      displayName: true,
      propTypes: true,
      type: true
    };
    var TYPE_STATICS = {};
    TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
    TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;
    function getStatics(component) {
      if (reactIs.isMemo(component)) {
        return MEMO_STATICS;
      }
      return TYPE_STATICS[component["$$typeof"]] || REACT_STATICS;
    }
    var defineProperty = Object.defineProperty;
    var getOwnPropertyNames = Object.getOwnPropertyNames;
    var getOwnPropertySymbols = Object.getOwnPropertySymbols;
    var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
    var getPrototypeOf = Object.getPrototypeOf;
    var objectPrototype = Object.prototype;
    function hoistNonReactStatics2(targetComponent, sourceComponent, blacklist) {
      if (typeof sourceComponent !== "string") {
        if (objectPrototype) {
          var inheritedComponent = getPrototypeOf(sourceComponent);
          if (inheritedComponent && inheritedComponent !== objectPrototype) {
            hoistNonReactStatics2(targetComponent, inheritedComponent, blacklist);
          }
        }
        var keys = getOwnPropertyNames(sourceComponent);
        if (getOwnPropertySymbols) {
          keys = keys.concat(getOwnPropertySymbols(sourceComponent));
        }
        var targetStatics = getStatics(targetComponent);
        var sourceStatics = getStatics(sourceComponent);
        for (var i = 0; i < keys.length; ++i) {
          var key = keys[i];
          if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
            var descriptor = getOwnPropertyDescriptor(sourceComponent, key);
            try {
              defineProperty(targetComponent, key, descriptor);
            } catch (e) {
            }
          }
        }
      }
      return targetComponent;
    }
    module.exports = hoistNonReactStatics2;
  }
});

// node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js
var require_classnames2 = __commonJS({
  "node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"(exports, module) {
    (function() {
      "use strict";
      var hasOwn = {}.hasOwnProperty;
      function classNames8() {
        var classes = "";
        for (var i = 0; i < arguments.length; i++) {
          var arg = arguments[i];
          if (arg) {
            classes = appendClass(classes, parseValue(arg));
          }
        }
        return classes;
      }
      function parseValue(arg) {
        if (typeof arg === "string" || typeof arg === "number") {
          return arg;
        }
        if (typeof arg !== "object") {
          return "";
        }
        if (Array.isArray(arg)) {
          return classNames8.apply(null, arg);
        }
        if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes("[native code]")) {
          return arg.toString();
        }
        var classes = "";
        for (var key in arg) {
          if (hasOwn.call(arg, key) && arg[key]) {
            classes = appendClass(classes, key);
          }
        }
        return classes;
      }
      function appendClass(value, newClass) {
        if (!newClass) {
          return value;
        }
        if (value) {
          return value + " " + newClass;
        }
        return value + newClass;
      }
      if (typeof module !== "undefined" && module.exports) {
        classNames8.default = classNames8;
        module.exports = classNames8;
      } else if (typeof define === "function" && typeof define.amd === "object" && define.amd) {
        define("classnames", [], function() {
          return classNames8;
        });
      } else {
        window.classNames = classNames8;
      }
    })();
  }
});

// node_modules/.pnpm/react-fast-compare@3.2.2/node_modules/react-fast-compare/index.js
var require_react_fast_compare = __commonJS({
  "node_modules/.pnpm/react-fast-compare@3.2.2/node_modules/react-fast-compare/index.js"(exports, module) {
    var hasElementType = typeof Element !== "undefined";
    var hasMap = typeof Map === "function";
    var hasSet = typeof Set === "function";
    var hasArrayBuffer = typeof ArrayBuffer === "function" && !!ArrayBuffer.isView;
    function equal(a, b) {
      if (a === b)
        return true;
      if (a && b && typeof a == "object" && typeof b == "object") {
        if (a.constructor !== b.constructor)
          return false;
        var length, i, keys;
        if (Array.isArray(a)) {
          length = a.length;
          if (length != b.length)
            return false;
          for (i = length; i-- !== 0; )
            if (!equal(a[i], b[i]))
              return false;
          return true;
        }
        var it;
        if (hasMap && a instanceof Map && b instanceof Map) {
          if (a.size !== b.size)
            return false;
          it = a.entries();
          while (!(i = it.next()).done)
            if (!b.has(i.value[0]))
              return false;
          it = a.entries();
          while (!(i = it.next()).done)
            if (!equal(i.value[1], b.get(i.value[0])))
              return false;
          return true;
        }
        if (hasSet && a instanceof Set && b instanceof Set) {
          if (a.size !== b.size)
            return false;
          it = a.entries();
          while (!(i = it.next()).done)
            if (!b.has(i.value[0]))
              return false;
          return true;
        }
        if (hasArrayBuffer && ArrayBuffer.isView(a) && ArrayBuffer.isView(b)) {
          length = a.length;
          if (length != b.length)
            return false;
          for (i = length; i-- !== 0; )
            if (a[i] !== b[i])
              return false;
          return true;
        }
        if (a.constructor === RegExp)
          return a.source === b.source && a.flags === b.flags;
        if (a.valueOf !== Object.prototype.valueOf && typeof a.valueOf === "function" && typeof b.valueOf === "function")
          return a.valueOf() === b.valueOf();
        if (a.toString !== Object.prototype.toString && typeof a.toString === "function" && typeof b.toString === "function")
          return a.toString() === b.toString();
        keys = Object.keys(a);
        length = keys.length;
        if (length !== Object.keys(b).length)
          return false;
        for (i = length; i-- !== 0; )
          if (!Object.prototype.hasOwnProperty.call(b, keys[i]))
            return false;
        if (hasElementType && a instanceof Element)
          return false;
        for (i = length; i-- !== 0; ) {
          if ((keys[i] === "_owner" || keys[i] === "__v" || keys[i] === "__o") && a.$$typeof) {
            continue;
          }
          if (!equal(a[keys[i]], b[keys[i]]))
            return false;
        }
        return true;
      }
      return a !== a && b !== b;
    }
    module.exports = function isEqual4(a, b) {
      try {
        return equal(a, b);
      } catch (error) {
        if ((error.message || "").match(/stack|recursion/i)) {
          console.warn("react-fast-compare cannot handle circular refs");
          return false;
        }
        throw error;
      }
    };
  }
});

// ../../../../../private/tmp/tdesign-tree-visual/baseline/tree/Tree.tsx
var import_classnames10 = __toESM(require_classnames());
import React19, { forwardRef as forwardRef7, useCallback as useCallback7, useImperativeHandle as useImperativeHandle4, useMemo as useMemo14, useRef as useRef17, useState as useState18 } from "react";
import { CSSTransition as CSSTransition4, TransitionGroup } from "react-transition-group";
import { get as get2 } from "lodash-es";

// ../../../../../private/tmp/tdesign-tree-visual/baseline/js/log/log.ts
var logSet = /* @__PURE__ */ new Set();
var log = {
  warn(componentName, message) {
    console.warn(`TDesign ${componentName} Warn: ${message}`);
  },
  warnOnce(componentName, message) {
    const msgContent = `TDesign ${componentName} Warn: ${message}`;
    if (logSet.has(msgContent))
      return;
    logSet.add(msgContent);
    console.warn(msgContent);
  },
  error(componentName, message) {
    console.error(`TDesign ${componentName} Error: ${message}`);
  },
  errorOnce(componentName, message) {
    const msgContent = `TDesign ${componentName} Error: ${message}`;
    if (logSet.has(msgContent))
      return;
    logSet.add(msgContent);
    console.error(msgContent);
  },
  info(componentName, message) {
    console.info(`TDesign ${componentName} Info: ${message}`);
  }
};
var log_default = log;

// ../../../../../private/tmp/tdesign-tree-visual/baseline/js/log/index.ts
var log_default2 = log_default;

// packages/components/_util/parseTNode.ts
import React from "react";
import { isFunction } from "lodash-es";
function parseTNode(renderNode, renderParams, defaultNode) {
  let node = null;
  if (typeof renderNode === "function") {
    node = renderNode(renderParams);
  } else if (renderNode === true) {
    node = defaultNode;
  } else if (renderNode !== null) {
    node = renderNode ?? defaultNode;
  }
  return node;
}

// packages/components/hooks/useDefaultProps.ts
import { useMemo } from "react";
function useDefaultProps(originalProps, defaultProps) {
  return useMemo(() => {
    const props = Object.assign({}, originalProps);
    Object.keys(defaultProps).forEach((key) => {
      if (props[key] === void 0) {
        props[key] = defaultProps[key];
      }
    });
    return props;
  }, [originalProps, defaultProps]);
}

// packages/components/hooks/usePersistFn.ts
import { useRef } from "react";
function usePersistFn(fn2) {
  const fnRef = useRef(fn2);
  fnRef.current = fn2;
  const persistFn = useRef(null);
  if (!persistFn.current) {
    persistFn.current = function(...args) {
      return fnRef.current.apply(this, args);
    };
  }
  return persistFn.current;
}

// ../../../../../private/tmp/tdesign-tree-visual/baseline/tree/defaultProps.ts
var treeDefaultProps = {
  activable: false,
  activeMultiple: false,
  allowFoldNodeOnFilter: false,
  checkStrictly: false,
  checkable: false,
  data: [],
  disableCheck: false,
  empty: "",
  expandAll: false,
  expandLevel: 0,
  expandMutex: false,
  expandOnClickNode: false,
  expandParent: false,
  expanded: [],
  icon: true,
  label: true,
  lazy: true,
  line: false,
  transition: true,
  defaultValue: [],
  valueMode: "onlyLeaf"
};

// ../../../../../private/tmp/tdesign-tree-visual/baseline/tree/hooks/TreeDraggableContext.tsx
import { useRef as useRef2 } from "react";

// packages/components/_util/createHookContext.tsx
import React2, { createContext, useContext } from "react";
function createHookContext(hook) {
  const Context = createContext(null);
  function Provider(props) {
    return /* @__PURE__ */ React2.createElement(Context.Provider, {
      value: hook(props.value)
    }, props.children);
  }
  function use() {
    return useContext(Context);
  }
  return {
    Provider,
    use
  };
}

// ../../../../../private/tmp/tdesign-tree-visual/baseline/tree/hooks/TreeDraggableContext.tsx
var TreeDraggableContext = createHookContext((value) => {
  const { props, store } = value;
  const dragNode = useRef2(null);
  const onDragStart = (context) => {
    dragNode.current = context.node;
    props.onDragStart?.({
      ...context,
      node: context.node.getModel()
    });
  };
  const onDragEnd = (context) => {
    dragNode.current = context.node;
    props.onDragEnd?.({
      ...context,
      node: context.node.getModel()
    });
  };
  const onDragOver = (context) => {
    props.onDragOver?.({
      ...context,
      node: context.node.getModel(),
      dragNode: dragNode.current?.getModel()
    });
  };
  const onDragLeave = (context) => {
    props.onDragLeave?.({
      ...context,
      node: context.node.getModel(),
      dragNode: dragNode.current?.getModel()
    });
  };
  const onDrop = (context) => {
    const { node, dropPosition } = context;
    if (node.value === dragNode.current?.value || node.getParents().some((_node) => _node.value === dragNode.current?.value)) {
      return;
    }
    const ctx = {
      dropNode: node.getModel(),
      dragNode: dragNode.current.getModel(),
      dropPosition,
      e: context.e
    };
    if (props.allowDrop?.(ctx) === false)
      return;
    const nodes = store.getNodes();
    nodes.some((_node) => {
      if (_node.value === node.value) {
        if (dropPosition === 0) {
          dragNode.current?.appendTo(store, _node);
        } else if (dropPosition < 0) {
          node.insertBefore(dragNode.current);
        } else {
          node.insertAfter(dragNode.current);
        }
        return true;
      }
      return false;
    });
    props.onDrop?.({
      ...context,
      dragNode: dragNode.current?.getModel(),
      dropNode: node.getModel()
    });
  };
  const getDragNode = () => dragNode.current;
  return {
    onDragStart,
    onDragEnd,
    onDragOver,
    onDragLeave,
    onDrop,
    getDragNode
  };
});
var useTreeDraggableContext = () => TreeDraggableContext.use();

// ../../../../../private/tmp/tdesign-tree-visual/baseline/tree/hooks/useControllable.ts
import { useState as useState2 } from "react";

// packages/components/hooks/useControlled.ts
import { useState } from "react";
import { upperFirst } from "lodash-es";

// packages/components/_util/noop.ts
var noop = () => {
};
var noop_default = noop;

// packages/components/hooks/useControlled.ts
var useControlled = (props = {}, valueKey, onChange, defaultOptions = {}) => {
  const controlled = Reflect.has(props, valueKey);
  const value = props[valueKey];
  const defaultValue = defaultOptions[`default${upperFirst(valueKey)}`] || props[`default${upperFirst(valueKey)}`];
  const [internalValue, setInternalValue] = useState(defaultValue);
  if (controlled)
    return [value, onChange || noop_default];
  return [
    internalValue,
    (newValue, ...args) => {
      setInternalValue(newValue);
      onChange?.(newValue, ...args);
    }
  ];
};
var useControlled_default = useControlled;

// ../../../../../private/tmp/tdesign-tree-visual/baseline/tree/hooks/useControllable.ts
function useControllable(props) {
  const [value, onChange] = useControlled_default(props, "value", props.onChange);
  const [expanded, onExpand] = useControlled_default(props, "expanded", props.onExpand);
  const [actived, onActive] = useControlled_default(props, "actived", props.onActive);
  const [indeterminate, setTreeIndeterminate] = useState2([]);
  return {
    value,
    onChange,
    expanded,
    onExpand,
    actived,
    onActive,
    setTreeIndeterminate,
    indeterminate
  };
}

// ../../../../../private/tmp/tdesign-tree-visual/baseline/tree/hooks/useStore.ts
import { useEffect as useEffect3, useRef as useRef5, useState as useState3 } from "react";
import { cloneDeep } from "lodash-es";

// ../../../../../private/tmp/tdesign-tree-visual/baseline/js/tree-v1/tree-store.ts
import { camelCase, difference, isArray, isFunction as isFunction3, isNumber as isNumber2, isPlainObject, isString } from "lodash-es";

// ../../../../../private/tmp/tdesign-tree-visual/node_modules/.pnpm/mitt@3.0.1/node_modules/mitt/dist/mitt.mjs
function mitt_default(n) {
  return { all: n = n || /* @__PURE__ */ new Map(), on: function(t2, e) {
    var i = n.get(t2);
    i ? i.push(e) : n.set(t2, [e]);
  }, off: function(t2, e) {
    var i = n.get(t2);
    i && (e ? i.splice(i.indexOf(e) >>> 0, 1) : n.set(t2, []));
  }, emit: function(t2, e) {
    var i = n.get(t2);
    i && i.slice().map(function(n2) {
      n2(e);
    }), (i = n.get("*")) && i.slice().map(function(n2) {
      n2(t2, e);
    });
  } };
}

// ../../../../../private/tmp/tdesign-tree-visual/baseline/js/tree-v1/tree-node.ts
import { get, isBoolean as isBoolean2, isFunction as isFunction2, isNil, isNull, isNumber, uniqueId } from "lodash-es";

// ../../../../../private/tmp/tdesign-tree-visual/baseline/js/tree-v1/tree-node-model.ts
import { isBoolean, isUndefined, omit, pick } from "lodash-es";
var PATH_SEPARATOR = "/";
function pathToKey(path) {
  return path.join(PATH_SEPARATOR);
}
function getExposedProps(node) {
  const props = pick(node, [
    "value",
    "label",
    "data",
    "actived",
    "expanded",
    "checked",
    "disabled",
    "indeterminate",
    "loading"
  ]);
  return props;
}
function createNodeModel(node) {
  const props = getExposedProps(node);
  const model = {
    ...props,
    getLevel() {
      return node.getLevel();
    },
    getIndex() {
      return node.getIndex();
    },
    isFirst() {
      return node.isFirst();
    },
    isLast() {
      return node.isLast();
    },
    isLeaf() {
      return node.isLeaf();
    },
    insertBefore(newData) {
      return node.insertBefore(newData);
    },
    insertAfter(newData) {
      return node.insertAfter(newData);
    },
    appendData(data) {
      return node.append(data);
    },
    getPath() {
      const nodes = node.getPath();
      return nodes.map((item) => item.getModel());
    },
    getParent() {
      return node.parent?.getModel();
    },
    getParents() {
      const nodes = node.getParents();
      return nodes.map((item) => item.getModel());
    },
    getRoot() {
      const root = node.getRoot();
      return root?.getModel();
    },
    getSiblings() {
      const nodes = node.getSiblings();
      return nodes.map((item) => item.getModel());
    },
    getChildren(deep) {
      let childrenModel = false;
      const { children } = node;
      if (Array.isArray(children)) {
        if (children.length > 0) {
          if (deep) {
            const nodes = node.walk();
            nodes.shift();
            childrenModel = nodes.map((item) => item.getModel());
          } else {
            childrenModel = children.map((item) => item.getModel());
          }
        } else {
          childrenModel = false;
        }
      } else if (isBoolean(children)) {
        childrenModel = children;
      }
      return childrenModel;
    },
    remove(value) {
      if (!value) {
        node.remove();
        return;
      }
      const { tree } = node;
      const targetNode = tree.getNode(value);
      if (!targetNode) {
        log_default.warnOnce("Tree", `\`${value}\` is not exist`);
        return;
      }
      const parents = targetNode.getParents();
      const parentValues = parents.map((pnode) => pnode.value);
      if (parentValues.indexOf(node.value) < 0) {
        log_default.warnOnce("Tree", `\`${value}\` is not a childNode of current node`);
        return;
      }
      targetNode.remove();
    },
    setData(data) {
      const _data = omit(data, ["children", "value", "label"]);
      const { keys } = node.tree.config;
      const dataValue = data[keys?.value || "value"];
      const dataLabel = data[keys?.label || "label"];
      if (!isUndefined(dataValue))
        _data.value = dataValue;
      if (!isUndefined(dataLabel))
        _data.label = dataLabel;
      Object.assign(node.data, _data);
      Object.assign(node, _data);
      node.update();
    }
  };
  return model;
}
function updateNodeModel(model, node) {
  const props = getExposedProps(node);
  Object.assign(model, props);
}

// ../../../../../private/tmp/tdesign-tree-visual/baseline/js/tree-v1/tree-node.ts
var { hasOwnProperty } = Object.prototype;
var settableStatus = {
  expandMutex: null,
  activable: null,
  checkable: null,
  draggable: null,
  loading: false
};
var settableProps = Object.keys(settableStatus);
var syncableProps = [...settableProps, "actived", "expanded", "checked"];
var privateKey = "__tdesign_id__";
var _TreeNode = class {
  constructor(tree, data, parent) {
    this.data = data;
    this.tree = tree;
    const config = tree.config || {};
    const prefix = config.prefix || "t";
    const keys = config.keys || {};
    const propChildren = keys.children || "children";
    const propLabel = keys.label || "label";
    const propValue = keys.value || "value";
    this.model = null;
    this.children = null;
    this.level = 0;
    this.vmCheckable = false;
    this.vmIsLeaf = false;
    this.vmIsFirst = false;
    this.vmIsLast = false;
    this.vmIsRest = false;
    this.vmIsLocked = false;
    this.visible = false;
    this.actived = false;
    this.checked = false;
    this.indeterminate = false;
    this.loading = false;
    this.expanded = config.expandAll;
    this.activable = null;
    this.checkable = null;
    this.expandMutex = null;
    this.draggable = null;
    this.disableManually = null;
    this[privateKey] = uniqueId(prefix);
    this.value = isNil(get(data, propValue)) ? this[privateKey] : get(data, propValue);
    this.label = get(data, propLabel) || "";
    const children = data[propChildren];
    if (children === true) {
      this.children = children;
    }
    if (parent && parent instanceof _TreeNode) {
      this.parent = parent;
    } else {
      this.parent = null;
    }
    const { nodeMap, privateMap } = tree;
    const nodeKey = this.getNodeMapKey();
    if (config?.allowDuplicateValue) {
      const siblings = this.parent ? this.parent.children : tree.children;
      if (Array.isArray(siblings)) {
        const hasDuplicate = siblings.some((sibling) => sibling instanceof _TreeNode && sibling.value === this.value);
        if (hasDuplicate) {
          log_default2.warn("Tree", `Duplicated value in the same level: ${this.value}`);
        }
      }
    } else if (nodeMap.get(nodeKey)) {
      log_default2.warn("Tree", `Duplicated value: ${this.value}`);
    }
    nodeMap.set(nodeKey, this);
    privateMap.set(this[privateKey], this);
    syncableProps.forEach((prop) => {
      if (typeof data[prop] !== "undefined") {
        this[prop] = data[prop];
      }
    });
    this.initActived();
    this.initExpanded();
    this.initChecked();
    if (Array.isArray(children)) {
      this.append(children);
    } else if (children === true && !config.lazy) {
      this.loadChildren();
    }
    if (this.isLeaf()) {
      this.expanded = false;
      this.tree.expandedMap.delete(this.getNodeMapKey());
    }
    this.updateChecked();
    this.update();
    tree.reflow(this);
  }
  initChecked() {
    const { tree, parent } = this;
    const { checkedMap, config } = tree;
    const { checkStrictly } = config;
    const checkedKey = this.getNodeMapKey();
    if (this.checked) {
      checkedMap.set(checkedKey, true);
    }
    if (!checkStrictly && parent?.checked) {
      checkedMap.set(checkedKey, true);
    }
    this.updateChecked();
  }
  initExpanded() {
    const { tree } = this;
    let { expanded } = this;
    const { config } = tree;
    const expandedKey = this.getNodeMapKey();
    if (isNumber(config.expandLevel) && this.getLevel() < config.expandLevel) {
      tree.expandedMap.set(expandedKey, true);
      expanded = true;
    }
    if (this.children === true && config.lazy) {
      expanded = false;
    }
    if (expanded) {
      tree.expandedMap.set(expandedKey, true);
    } else {
      tree.expandedMap.delete(expandedKey);
    }
    this.expanded = expanded;
  }
  initActived() {
    const { tree, actived } = this;
    if (actived && this.isActivable()) {
      tree.activedMap.set(this.getNodeMapKey(), true);
    }
  }
  append(data) {
    const list = [];
    if (!Array.isArray(data)) {
      list.push(data);
    } else {
      list.push(...data);
    }
    if (list.length <= 0) {
      return;
    }
    const wasLeaf = this.isLeaf();
    if (!Array.isArray(this.children)) {
      this.children = [];
    }
    const { children, tree } = this;
    list.forEach((item) => {
      let node = null;
      if (item instanceof _TreeNode) {
        node = item;
        node.appendTo(this.tree, this);
      } else {
        node = new _TreeNode(this.tree, item, this);
        children.push(node);
      }
    });
    if (wasLeaf && tree.config.expandAll && !this.isLeaf()) {
      tree.expandedMap.set(this.getNodeMapKey(), true);
      this.expanded = true;
    }
    tree.reflow(this);
    this.updateRelated();
  }
  appendTo(tree, parent, index) {
    const parentNode = parent;
    let targetIndex = -1;
    if (isNumber(index)) {
      targetIndex = index;
    }
    const targetParents = parentNode?.getParents() || [];
    const includeCurrent = targetParents.some((pnode) => pnode === this);
    if (includeCurrent) {
      throw new Error("\u65E0\u6CD5\u5C06\u7236\u8282\u70B9\u63D2\u5165\u5230\u5B50\u8282\u70B9");
    }
    if (parentNode === this) {
      throw new Error("\u65E0\u6CD5\u5C06\u8282\u70B9\u63D2\u5165\u5230\u672C\u8282\u70B9");
    }
    if (Array.isArray(parentNode?.children)) {
      const targetPosNode = parentNode?.children[targetIndex];
      if (targetPosNode && targetPosNode === this) {
        return;
      }
    }
    let siblings = null;
    if (parentNode instanceof _TreeNode) {
      if (!Array.isArray(parentNode?.children)) {
        parentNode.children = [];
      }
      siblings = parent.children;
    } else {
      siblings = tree.children;
    }
    if (!Array.isArray(siblings)) {
      throw new Error("\u65E0\u6CD5\u63D2\u5165\u5230\u76EE\u6807\u4F4D\u7F6E\uFF0C\u53EF\u63D2\u5165\u7684\u8282\u70B9\u5217\u8868\u4E0D\u5B58\u5728");
    }
    const prevLength = siblings.length;
    const prevIndex = this.getIndex();
    this.remove();
    if (isNumber(index)) {
      let targetIndex2 = index;
      if (parentNode === this.parent) {
        const curLength = siblings.length;
        if (curLength < prevLength && prevIndex <= targetIndex2) {
          targetIndex2 -= 1;
        }
      }
      siblings.splice(targetIndex2, 0, this);
    } else {
      siblings.push(this);
    }
    this.parent = parentNode;
    const nodes = this.walk();
    nodes.forEach((item) => {
      const node = item;
      node.tree = tree;
      const nodeKey = node.getNodeMapKey();
      tree.nodeMap.set(nodeKey, node);
      tree.privateMap.set(node[privateKey], node);
      if (node.expanded) {
        tree.expandedMap.set(nodeKey, true);
      }
    });
    const updateNodes = parentNode?.walk() || tree.children.map((item) => item.walk()).flat();
    updateNodes.forEach((node) => {
      node.update();
      node.updateChecked();
    });
    tree.reflow();
  }
  insert(item, index) {
    const { tree, parent } = this;
    const siblings = this.getSiblings();
    let node = null;
    if (item instanceof _TreeNode) {
      node = item;
      node.appendTo(tree, parent, index);
    } else if (item) {
      node = new _TreeNode(tree, item, parent);
      if (isNumber(index)) {
        siblings.splice(index, 0, node);
      }
      siblings.forEach((sibling) => {
        sibling.update();
      });
    }
    tree.reflow();
  }
  insertBefore(newData) {
    const index = this.getIndex();
    this.insert(newData, index);
  }
  insertAfter(newData) {
    const index = this.getIndex();
    this.insert(newData, index + 1);
  }
  remove() {
    const { tree } = this;
    const nodes = this.walk();
    const siblings = this.getSiblings();
    const index = this.getIndex();
    if (Array.isArray(siblings)) {
      siblings.splice(index, 1);
    }
    nodes.forEach((node) => {
      node.clean();
    });
    siblings.forEach((node) => {
      node.update();
    });
    this.updateParents();
    tree.reflow();
  }
  clean() {
    const { tree, value } = this;
    const nodeKey = this.getNodeMapKey();
    tree.activedMap.delete(nodeKey);
    tree.checkedMap.delete(nodeKey);
    tree.expandedMap.delete(nodeKey);
    tree.nodeMap.delete(nodeKey);
    tree.filterMap.delete(value);
    tree.privateMap.delete(this[privateKey]);
  }
  async loadChildren() {
    const config = get(this, "tree.config") || {};
    if (this.children === true && !this.loading) {
      if ("load" in config && isFunction2(config.load)) {
        this.loading = true;
        this.update();
        let list = [];
        list = await config.load(this);
        this.tree.emit("load", {
          node: this,
          data: list
        });
        this.loading = false;
        if (Array.isArray(list) && list.length > 0) {
          this.append(list);
        } else {
          this.children = false;
        }
        this.update();
      }
    }
  }
  set(item) {
    const { tree } = this;
    const keys = Object.keys(item);
    keys.forEach((key) => {
      if (hasOwnProperty.call(settableStatus, key) || key === "label") {
        this[key] = item[key];
      }
      if (key === "disabled") {
        this.setDisabled(item[key]);
      }
    });
    tree.updated(this);
  }
  getParent() {
    return this.parent;
  }
  getParents() {
    const parents = [];
    let node = this.parent;
    while (node) {
      parents.push(node);
      node = node.parent;
    }
    return parents;
  }
  getSiblings() {
    const { parent, tree } = this;
    let list = [];
    if (parent) {
      if (Array.isArray(parent.children)) {
        list = parent.children;
      }
    } else if (tree) {
      list = tree.children;
    }
    return list;
  }
  getChildren(deep) {
    let childrenModel = false;
    const { children } = this;
    if (Array.isArray(children)) {
      if (children.length > 0) {
        if (deep) {
          const nodes = this.walk();
          nodes.shift();
          childrenModel = nodes.map((item) => item.getModel());
        } else {
          childrenModel = children.map((item) => item.getModel());
        }
      } else {
        childrenModel = false;
      }
    } else if (isBoolean2(children)) {
      childrenModel = children;
    }
    return childrenModel;
  }
  getRoot() {
    const parents = this.getParents();
    return parents[parents.length - 1] || null;
  }
  getIndex() {
    const list = this.getSiblings();
    return list.indexOf(this);
  }
  getPath() {
    const nodes = this.getParents();
    nodes.unshift(this);
    return nodes.reverse();
  }
  getNodeMapKey() {
    const { allowDuplicateValue } = this.tree.config;
    if (allowDuplicateValue) {
      return pathToKey(this.getPath().map((node) => node.value));
    }
    return this.value;
  }
  getLevel() {
    const parents = this.getParents();
    return parents.length;
  }
  isRest() {
    const { config, filterMap, hasFilter } = this.tree;
    let rest = false;
    if (hasFilter) {
      const nodeModel = this.getModel();
      rest = config.filter(nodeModel);
    }
    if (rest) {
      filterMap.set(this.value, true);
    } else if (filterMap.get(this.value)) {
      filterMap.delete(this.value);
    }
    return rest;
  }
  isVisible() {
    const { nodeMap, hasFilter, config } = this.tree;
    const { allowFoldNodeOnFilter } = config;
    let visible = true;
    const nodeKey = this.getNodeMapKey();
    if (!nodeMap.get(nodeKey)) {
      return false;
    }
    if (hasFilter && !allowFoldNodeOnFilter) {
      visible = this.vmIsLocked || this.vmIsRest;
      return visible;
    }
    let expandVisible = true;
    const parents = this.getParents();
    if (parents.length > 0) {
      expandVisible = parents.every((node) => node.expanded);
    }
    if (hasFilter) {
      visible = expandVisible && (this.vmIsRest || this.vmIsLocked);
    } else {
      visible = expandVisible;
    }
    return visible;
  }
  isDisabledState() {
    const { tree, parent } = this;
    const { config } = tree;
    const { checkStrictly, disabled, disableCheck, keys = {} } = config;
    if (disabled)
      return true;
    if (!checkStrictly && parent?.isDisabled() && !this.vmIsRest)
      return true;
    if (typeof this.disableManually === "boolean")
      return this.disableManually;
    const propDisabled = keys.disabled || "disabled";
    const state = get(this.data, propDisabled);
    if (typeof state === "boolean")
      return state;
    if (disableCheck === true)
      return true;
    if (typeof disableCheck === "function") {
      const stateCheck = disableCheck(this.getModel());
      if (typeof stateCheck === "boolean") {
        return stateCheck;
      }
    }
    return false;
  }
  isDisabled() {
    const { tree } = this;
    const { hasFilter, config } = tree;
    const { allowFoldNodeOnFilter } = config;
    if (hasFilter && !allowFoldNodeOnFilter && this.vmIsLocked && !this.vmIsRest) {
      return true;
    }
    return this.isDisabledState();
  }
  isDraggable() {
    let state = !!get(this, "tree.config.draggable");
    if (typeof this.draggable === "boolean") {
      state = this.draggable;
    }
    return state;
  }
  isExpandMutex() {
    let state = !!get(this, "tree.config.expandMutex");
    if (typeof this.expandMutex === "boolean") {
      state = this.expandMutex;
    }
    return state;
  }
  isActivable() {
    let state = !!get(this, "tree.config.activable");
    if (typeof this.activable === "boolean") {
      state = this.activable;
    }
    return state;
  }
  isCheckable() {
    let state = !!get(this, "tree.config.checkable");
    if (typeof this.checkable === "boolean") {
      state = this.checkable;
    }
    return state;
  }
  isActived(map) {
    const { tree } = this;
    const activedMap = map || tree.activedMap;
    const nodeKey = this.getNodeMapKey();
    return !!(tree.nodeMap.get(nodeKey) && activedMap.get(nodeKey));
  }
  isExpanded(map) {
    const { tree, vmIsLocked } = this;
    const { hasFilter, config } = tree;
    const { allowFoldNodeOnFilter } = config;
    if (hasFilter && !allowFoldNodeOnFilter && vmIsLocked)
      return true;
    const expandedMap = map || tree.expandedMap;
    const nodeKey = this.getNodeMapKey();
    return !!(tree.nodeMap.get(nodeKey) && expandedMap.get(nodeKey));
  }
  isChecked(map) {
    const { children, tree } = this;
    const { checkStrictly, valueMode } = tree.config;
    const nodeKey = this.getNodeMapKey();
    if (!tree.nodeMap.get(nodeKey))
      return false;
    if (!this.isCheckable())
      return false;
    const checkedMap = map || tree.checkedMap;
    if (checkStrictly) {
      return !!checkedMap.get(nodeKey);
    }
    let checked = false;
    if (checkedMap.get(nodeKey) && (valueMode !== "onlyLeaf" || this.isLeaf())) {
      return true;
    }
    if (Array.isArray(children) && children.length > 0) {
      checked = children.every((node) => {
        const childIsChecked = node.isChecked(checkedMap);
        return childIsChecked;
      });
    } else {
      const parents = this.getParents();
      checked = parents.some((node) => checkedMap.get(node.getNodeMapKey()));
    }
    return checked;
  }
  isIndeterminate() {
    const { children, tree, value } = this;
    const { checkStrictly } = tree.config;
    const nodeKey = this.getNodeMapKey();
    if (!tree.nodeMap.get(nodeKey))
      return false;
    if (!this.isCheckable())
      return false;
    if (checkStrictly)
      return false;
    if (!Array.isArray(children))
      return false;
    let childChecked = null;
    const indeterminate = children.some((node) => {
      if (node.isIndeterminate()) {
        return true;
      }
      if (isNull(childChecked)) {
        childChecked = node.isChecked();
      }
      if (childChecked !== node.isChecked()) {
        return true;
      }
      return false;
    });
    return indeterminate;
  }
  isFirst() {
    const siblings = this.getSiblings();
    return siblings[0] === this;
  }
  isLast() {
    const siblings = this.getSiblings();
    return siblings[siblings.length - 1] === this;
  }
  isLeaf() {
    let isLeaf = false;
    if (Array.isArray(this.children)) {
      isLeaf = this.children.length <= 0;
    } else {
      isLeaf = !this.children;
    }
    return isLeaf;
  }
  lock(lockState) {
    this.vmIsLocked = lockState;
    this.expanded = this.isExpanded();
    this.visible = this.isVisible();
  }
  afterExpanded() {
    this.update();
    if (this.expanded && this.children === true) {
      this.loadChildren();
    }
    this.updateChildren();
  }
  toggleExpanded() {
    return this.setExpanded(!this.isExpanded());
  }
  setExpanded(expanded, opts) {
    const { tree } = this;
    const { config } = tree;
    const options = {
      directly: false,
      ...opts
    };
    let map = tree.expandedMap;
    if (!options.directly) {
      map = new Map(tree.expandedMap);
    }
    if (expanded) {
      const shouldExpandNodes = [];
      shouldExpandNodes.push(this);
      if (config.expandParent) {
        this.getParents().forEach((node) => {
          shouldExpandNodes.push(node);
        });
      }
      shouldExpandNodes.forEach((node) => {
        let isExpandMutex = false;
        if (node.parent) {
          isExpandMutex = node.parent.isExpandMutex();
        } else {
          isExpandMutex = tree?.config?.expandMutex;
        }
        if (isExpandMutex) {
          const siblings = node.getSiblings();
          siblings.forEach((snode) => {
            map.delete(snode.getNodeMapKey());
            snode.update();
            snode.updateChildren();
          });
        }
        map.set(node.getNodeMapKey(), true);
        node.update();
        node.updateChildren();
      });
    } else {
      map.delete(this.getNodeMapKey());
    }
    if (options.directly) {
      this.afterExpanded();
    }
    return tree.getExpanded(map);
  }
  toggleActived() {
    return this.setActived(!this.isActived());
  }
  setActived(actived, opts) {
    const { tree } = this;
    const options = {
      directly: false,
      ...opts
    };
    const config = tree.config || {};
    let map = tree.activedMap;
    if (!options.directly) {
      map = new Map(tree.activedMap);
    }
    const activedKey = this.getNodeMapKey();
    if (this.isActivable()) {
      if (actived) {
        const prevKeys = Array.from(map.keys());
        if (!config.activeMultiple) {
          map.clear();
        }
        prevKeys.forEach((key) => {
          const node = tree.nodeMap.get(key);
          node?.update();
        });
        map.set(activedKey, true);
      } else {
        map.delete(activedKey);
      }
    }
    this.update();
    return tree.getActived(map);
  }
  hasEnableUnCheckedChild() {
    const { children } = this;
    if (!Array.isArray(children) || children.length <= 0) {
      return false;
    }
    let state = false;
    children.some((child) => {
      if (child.isDisabledState())
        return false;
      if (child.isChecked())
        return false;
      if (child.isIndeterminate()) {
        if (child.hasEnableUnCheckedChild()) {
          state = true;
          return true;
        }
        return false;
      }
      state = true;
      return true;
    });
    return state;
  }
  toggleChecked() {
    if (this.isIndeterminate()) {
      const expectState = this.hasEnableUnCheckedChild();
      return this.setChecked(expectState);
    }
    return this.setChecked(!this.isChecked());
  }
  setChecked(checked, opts) {
    const { tree } = this;
    const config = tree.config || {};
    const options = {
      isAction: true,
      directly: false,
      ...opts
    };
    let map = tree.checkedMap;
    if (!options.directly) {
      map = new Map(tree.checkedMap);
    }
    if (!this.isCheckable()) {
      return tree.getChecked(map);
    }
    if (options.isAction && this.isDisabledState()) {
      return tree.getChecked(map);
    }
    if (checked === this.isChecked()) {
      const shouldSet = this.isIndeterminate() && !this.hasEnableUnCheckedChild();
      if (!shouldSet) {
        return tree.getChecked(map);
      }
    }
    const checkedKey = this.getNodeMapKey();
    if (checked) {
      map.set(checkedKey, true);
    } else {
      map.delete(checkedKey);
    }
    if (config.checkStrictly) {
      if (options.directly) {
        this.updateChecked();
      }
    } else {
      this.spreadChildrenChecked(checked, map, options);
      this.spreadParentChecked(checked, map, options);
      if (options.directly) {
        const relatedNodes = tree.getRelatedNodes([checkedKey], {
          reverse: true
        });
        relatedNodes.forEach((node) => {
          node.updateChecked();
        });
      }
    }
    this.isIndeterminateManual = false;
    return tree.getChecked(map);
  }
  setIndeterminate(indeterminate, opts) {
    const { tree } = this;
    const options = {
      isAction: true,
      directly: false,
      ...opts
    };
    let map = tree.checkedMap;
    if (!options.directly) {
      map = new Map(tree.checkedMap);
    }
    if (!this.isCheckable()) {
      return tree.getChecked(map);
    }
    if (options.isAction && this.isDisabled()) {
      return tree.getChecked(map);
    }
    if (indeterminate === this.isIndeterminate()) {
      return tree.getChecked(map);
    }
    this.indeterminate = indeterminate;
    this.isIndeterminateManual = true;
    return tree.getChecked(map);
  }
  spreadParentChecked(checked, map, opts) {
    const { tree } = this;
    const options = {
      isAction: true,
      directly: false,
      ...opts
    };
    if (!this.isCheckable())
      return;
    const { children } = this;
    if (Array.isArray(children) && children.length > 0) {
      map.delete(this.getNodeMapKey());
    }
    const { parent } = this;
    if (!parent)
      return;
    parent.spreadParentChecked(checked, map, options);
  }
  spreadChildrenChecked(checked, map, opts) {
    const options = {
      isAction: true,
      directly: false,
      ...opts
    };
    if (!this.isCheckable())
      return;
    if (options.isAction && this.isDisabled())
      return;
    const { children } = this;
    if (!Array.isArray(children))
      return;
    if (children.length <= 0)
      return;
    map.delete(this.getNodeMapKey());
    children.forEach((node) => {
      if (options.isAction && node.isDisabled())
        return;
      if (checked) {
        map.set(node.getNodeMapKey(), true);
      } else {
        map.delete(node.getNodeMapKey());
      }
      node.spreadChildrenChecked(checked, map, options);
    });
  }
  setDisabled(disabled) {
    if (!this.tree.config.checkStrictly && this.parent?.isDisabled())
      return;
    this.disableManually = disabled;
    this.update();
    this.updateChildren();
  }
  update() {
    this.level = this.getLevel();
    this.vmIsFirst = this.isFirst();
    this.vmIsLast = this.isLast();
    this.vmIsLeaf = this.isLeaf();
    this.vmCheckable = this.isCheckable();
    this.vmIsRest = this.isRest();
    this.actived = this.isActived();
    this.expanded = this.isExpanded();
    this.visible = this.isVisible();
    this.disabled = this.isDisabled();
    this.tree.updated(this);
  }
  updateChecked(from) {
    const { tree, isIndeterminateManual } = this;
    if (isIndeterminateManual && ["refresh"].includes(from)) {
      return;
    }
    const { checkedMap } = tree;
    this.checked = this.isChecked();
    this.indeterminate = this.isIndeterminate();
    if (this.checked) {
      checkedMap.set(this.getNodeMapKey(), true);
    }
    tree.updated(this);
  }
  updateChildren() {
    const { children } = this;
    if (Array.isArray(children)) {
      children.forEach((node) => {
        node.update();
        node.updateChecked();
        node.updateChildren();
      });
    }
  }
  updateParents() {
    const { parent } = this;
    if (parent) {
      parent.update();
      parent.updateChecked();
      parent.updateParents();
    }
  }
  updateRelated() {
    const { tree } = this;
    const relatedNodes = tree.getRelatedNodes([this.value]);
    relatedNodes.forEach((node) => {
      node.update();
      if (node.isIndeterminateManual && node.indeterminate)
        return;
      node.updateChecked();
    });
  }
  walk() {
    const { children } = this;
    let list = [];
    list.push(this);
    if (Array.isArray(children) && children.length > 0) {
      children.forEach((node) => {
        list = list.concat(node.walk());
      });
    }
    return list;
  }
  getModel() {
    let { model } = this;
    if (!model) {
      model = createNodeModel(this);
      this.model = model;
    }
    updateNodeModel(model, this);
    return model;
  }
};
var TreeNode = _TreeNode;
privateKey;

// ../../../../../private/tmp/tdesign-tree-visual/baseline/js/tree-v1/tree-store.ts
var TreeStore = class {
  constructor(options) {
    const config = {
      prefix: "t",
      keys: {},
      expandAll: false,
      expandLevel: 0,
      expandMutex: false,
      expandParent: false,
      activable: false,
      activeMultiple: false,
      checkable: false,
      checkStrictly: false,
      disabled: false,
      draggable: false,
      load: null,
      lazy: false,
      valueMode: "onlyLeaf",
      filter: null,
      allowFoldNodeOnFilter: false,
      onLoad: null,
      onReflow: null,
      onUpdate: null,
      ...options
    };
    this.config = config;
    this.nodes = [];
    this.children = [];
    this.nodeMap = /* @__PURE__ */ new Map();
    this.privateMap = /* @__PURE__ */ new Map();
    this.activedMap = /* @__PURE__ */ new Map();
    this.expandedMap = /* @__PURE__ */ new Map();
    this.checkedMap = /* @__PURE__ */ new Map();
    this.updatedMap = /* @__PURE__ */ new Map();
    this.indeterminateMap = /* @__PURE__ */ new Map();
    this.filterMap = /* @__PURE__ */ new Map();
    this.prevFilter = null;
    this.updateTimer = null;
    this.shouldReflow = false;
    this.hasFilter = isFunction3(config.filter);
    this.emitter = mitt_default();
  }
  setConfig(options) {
    const { config } = this;
    let hasChanged = false;
    Object.keys(options).forEach((key) => {
      const val = options[key];
      if (val !== config[key]) {
        hasChanged = true;
        config[key] = val;
      }
    });
    this.hasFilter = isFunction3(config.filter);
    if (hasChanged) {
      this.refreshState();
    }
  }
  getChildren() {
    return this.children;
  }
  getNode(item) {
    let node = null;
    const { allowDuplicateValue } = this.config;
    if (isArray(item) && allowDuplicateValue) {
      const pathKey = pathToKey(item);
      node = this.nodeMap.get(pathKey);
    } else if (isString(item) || isNumber2(item)) {
      node = this.nodeMap.get(item);
    } else if (item instanceof TreeNode) {
      const nodeKey = item.getNodeMapKey();
      node = this.nodeMap.get(nodeKey);
    }
    if (!node)
      node = null;
    return node;
  }
  getIndex(node) {
    return this.nodes.indexOf(node);
  }
  getParent(value) {
    let parent = null;
    const node = this.getNode(value);
    if (node) {
      parent = node.getParent();
    }
    return parent;
  }
  getParents(value) {
    const node = this.getNode(value);
    let parents = [];
    if (node) {
      parents = node.getParents();
    }
    return parents;
  }
  getNodeIndex(value) {
    const node = this.getNode(value);
    let index = -1;
    if (node) {
      index = node.getIndex();
    }
    return index;
  }
  getNodes(item, options) {
    let nodes = [];
    let val = "";
    if (isString(item) || isNumber2(item)) {
      val = item;
    } else if (item instanceof TreeNode) {
      val = item.value;
    }
    if (!val) {
      nodes = this.nodes.slice(0);
    } else {
      const node = this.getNode(val);
      if (node) {
        nodes = node.walk();
      }
    }
    if (options) {
      const conf = {
        filter: null,
        level: Infinity,
        ...options
      };
      if (isNumber2(conf.level) && conf.level !== Infinity) {
        nodes = nodes.filter((node) => node.level <= conf.level);
      }
      if (isFunction3(conf.filter)) {
        nodes = nodes.filter((node) => {
          const nodeModel = node.getModel();
          return conf.filter(nodeModel);
        });
      }
      if (isPlainObject(conf.props)) {
        nodes = nodes.filter((node) => {
          const result = Object.keys(conf.props).every((key) => {
            const propEqual = node[key] === conf.props[key];
            return propEqual;
          });
          return result;
        });
      }
    }
    return nodes;
  }
  append(list) {
    list.forEach((item) => {
      const node = new TreeNode(this, item);
      this.children.push(node);
    });
    this.reflow();
  }
  reload(list) {
    this.expandedMap.clear();
    this.checkedMap.clear();
    this.activedMap.clear();
    this.filterMap.clear();
    this.removeAll();
    this.append(list);
  }
  parseNodeData(para, item) {
    let value = "";
    let node = null;
    let data = null;
    if (isString(para) || isNumber2(para)) {
      value = para;
      node = this.getNode(value);
      data = item;
    } else if (para instanceof TreeNode) {
      if (item) {
        node = para;
        data = item;
      } else {
        data = para;
      }
    } else {
      data = para;
    }
    const spec = {
      node,
      data
    };
    return spec;
  }
  appendNodes(para, item) {
    const spec = this.parseNodeData(para, item);
    if (spec.data) {
      if (!spec.node) {
        if (spec.data instanceof TreeNode) {
          spec.data.appendTo(this);
        } else if (Array.isArray(spec.data)) {
          this.append(spec.data);
        } else {
          this.append([spec.data]);
        }
      } else {
        if (spec.data instanceof TreeNode) {
          spec.data.appendTo(this, spec.node);
        } else if (isArray(spec.data)) {
          spec.node.append(spec.data);
        } else {
          spec.node.append([spec.data]);
        }
        spec.node.updateRelated();
      }
    }
  }
  insertBefore(value, item) {
    const node = this.getNode(value);
    if (node) {
      node.insertBefore(item);
    }
  }
  insertAfter(value, item) {
    const node = this.getNode(value);
    if (node) {
      node.insertAfter(item);
    }
  }
  refreshNodes() {
    const { children, nodes } = this;
    nodes.length = 0;
    children.forEach((node) => {
      const list = node.walk();
      Array.prototype.push.apply(nodes, list);
    });
  }
  refreshState() {
    const { nodeMap } = this;
    nodeMap.forEach((node) => {
      node.update();
      node.updateChecked("refresh");
    });
  }
  reflow(node) {
    this.shouldReflow = true;
    this.updated(node);
  }
  updated(node) {
    if (node?.value) {
      this.updatedMap.set(node.value, true);
    }
    if (this.updateTimer)
      return;
    this.updateTimer = setTimeout(() => {
      clearTimeout(this.updateTimer);
      this.updateTimer = null;
      if (this.shouldReflow) {
        this.refreshNodes();
        this.emit("reflow");
      }
      this.lockFilterPathNodes();
      const updatedList = Array.from(this.updatedMap.keys());
      if (updatedList.length > 0) {
        const updatedNodes = updatedList.map((value) => this.getNode(value));
        this.emit("update", {
          nodes: updatedNodes,
          map: this.updatedMap
        });
      } else if (this.shouldReflow) {
        this.emit("update", {
          nodes: [],
          map: this.updatedMap
        });
      }
      this.shouldReflow = false;
      this.updatedMap.clear();
    });
  }
  getActived(map) {
    const activedMap = map || this.activedMap;
    return Array.from(activedMap.keys());
  }
  getActivedNodes(item) {
    let nodes = this.getNodes(item);
    nodes = nodes.filter((node) => node.isActived());
    return nodes;
  }
  replaceActived(list) {
    this.resetActived();
    this.setActived(list);
  }
  replaceIndeterminate(list) {
    this.setIndeterminate(list);
  }
  setIndeterminate(indeterminate) {
    indeterminate.forEach((val) => {
      this.indeterminateMap.set(val, true);
      const node = this.getNode(val);
      if (node) {
        node.setIndeterminate(true);
        node.update();
      }
    });
  }
  setActived(actived) {
    const { activeMultiple } = this.config;
    const list = actived.slice(0);
    if (!activeMultiple) {
      list.length = 1;
    }
    list.forEach((val) => {
      this.activedMap.set(val, true);
      const node = this.nodeMap.get(val);
      if (node) {
        node.update();
      }
    });
  }
  resetActived() {
    const actived = this.getActived();
    this.activedMap.clear();
    const relatedNodes = this.getRelatedNodes(actived);
    relatedNodes.forEach((node) => {
      node.update();
    });
  }
  getExpanded(map) {
    const expandedMap = map || this.expandedMap;
    return Array.from(expandedMap.keys());
  }
  replaceExpanded(list) {
    const expanded = this.getExpanded();
    const added = difference(list, expanded);
    const removed = difference(expanded, list);
    this.setExpandedDirectly(removed, false);
    this.updateExpanded(removed);
    this.setExpanded(added);
  }
  setExpanded(list) {
    this.setExpandedDirectly(list);
    this.updateExpanded(list);
  }
  setExpandedDirectly(list, expanded = true) {
    list.forEach((val) => {
      const node = this.nodeMap.get(val);
      if (!node?.isLeaf() && expanded) {
        this.expandedMap.set(val, true);
      } else {
        this.expandedMap.delete(val);
      }
      node?.afterExpanded();
    });
  }
  resetExpanded() {
    const expanded = this.getExpanded();
    this.expandedMap.clear();
    this.updateExpanded(expanded);
  }
  updateExpanded(list) {
    const relatedNodes = this.getRelatedNodes(list, {
      withParents: false
    });
    relatedNodes.forEach((node) => {
      node.update();
    });
  }
  getChecked(map) {
    const { nodeMap, config } = this;
    const { valueMode, checkStrictly } = config;
    const list = [];
    const checkedMap = map || this.checkedMap;
    nodeMap.forEach((node) => {
      if (!node.isChecked(checkedMap))
        return;
      const nodeKey = node.getNodeMapKey();
      if (valueMode === "parentFirst" && !checkStrictly) {
        if (!node.parent || !node.parent.isChecked(checkedMap)) {
          list.push(nodeKey);
        }
      } else if (valueMode === "onlyLeaf" && !checkStrictly) {
        if (node.isLeaf()) {
          list.push(nodeKey);
        }
      } else {
        list.push(nodeKey);
      }
    });
    return list;
  }
  getCheckedNodes(item) {
    let nodes = this.getNodes(item);
    nodes = nodes.filter((node) => node.isChecked());
    return nodes;
  }
  replaceChecked(list) {
    this.resetChecked();
    this.setChecked(list);
  }
  setChecked(list) {
    const { checkStrictly, checkable } = this.config;
    if (!checkable)
      return;
    list.forEach((val) => {
      const node = this.nodeMap.get(val);
      if (!node)
        return;
      if (checkStrictly) {
        this.checkedMap.set(node.getNodeMapKey(), true);
        node.updateChecked();
      } else {
        const childrenNodes = node.walk();
        childrenNodes.forEach((childNode) => {
          this.checkedMap.set(childNode.getNodeMapKey(), true);
        });
      }
    });
    if (!checkStrictly) {
      const checkedValues = this.getChecked();
      const relatedNodes = this.getRelatedNodes(checkedValues);
      relatedNodes.forEach((node) => {
        node.updateChecked();
      });
    }
  }
  resetChecked() {
    const checked = this.getChecked();
    const relatedNodes = this.getRelatedNodes(checked);
    this.checkedMap.clear();
    relatedNodes.forEach((node) => {
      node.updateChecked();
    });
  }
  updateAll() {
    this.nodeMap.forEach((node) => {
      node.update();
      node.updateChecked("refresh");
    });
  }
  remove(value) {
    const node = this.getNode(value);
    if (node) {
      node.remove();
    }
  }
  removeAll() {
    const nodes = this.getNodes();
    nodes.forEach((node) => {
      node.remove();
    });
  }
  getRelatedNodes(list, options) {
    const conf = {
      reverse: false,
      withParents: true,
      ...options
    };
    const map = /* @__PURE__ */ new Map();
    list.forEach((value) => {
      if (map.get(value))
        return;
      const node = this.nodeMap.get(value);
      if (node) {
        const parents = node.getParents().reverse();
        const children = node.walk();
        let related = [];
        if (conf.withParents) {
          related = parents.concat(children);
        } else {
          related = children;
        }
        related.forEach((relatedNode) => {
          map.set(relatedNode.getNodeMapKey(), relatedNode);
        });
      }
    });
    let relatedNodes = Array.from(map.values());
    if (conf.reverse) {
      relatedNodes = relatedNodes.reverse();
    }
    return relatedNodes;
  }
  emit(name, state) {
    const { config, emitter } = this;
    const methodName = camelCase(`on-${name}`);
    const method = config[methodName];
    if (isFunction3(method)) {
      method(state);
    }
    emitter.emit(name, state);
  }
  lockFilterPathNodes() {
    const { config } = this;
    const allNodes = this.getNodes();
    if (this.prevFilter) {
      allNodes.forEach((node) => {
        if (node.vmIsLocked) {
          node.lock(false);
        }
      });
    }
    const currentFilter = config.filter;
    if (!currentFilter || !isFunction3(currentFilter))
      return;
    this.prevFilter = config.filter;
    allNodes.reverse().forEach((node) => {
      const parent = node.getParent();
      if (!parent)
        return;
      if (node.vmIsRest || node.vmIsLocked) {
        if (!parent.vmIsLocked) {
          parent.lock(true);
        }
      }
    });
  }
};
var tree_store_default = TreeStore;

// packages/components/hooks/usePrevious.ts
import { useEffect, useRef as useRef3 } from "react";
function usePrevious(state) {
  const ref = useRef3(null);
  useEffect(() => {
    ref.current = state;
  }, [state]);
  return ref.current;
}

// packages/components/hooks/useIsFirstRender.ts
import { useRef as useRef4 } from "react";
var useIsFirstRender = () => {
  const isFirstRenderRef = useRef4(true);
  if (isFirstRenderRef.current) {
    isFirstRenderRef.current = false;
    return true;
  }
  return isFirstRenderRef.current;
};
var useIsFirstRender_default = useIsFirstRender;

// packages/components/hooks/useLayoutEffect.ts
import { useEffect as useEffect2, useLayoutEffect } from "react";

// packages/components/_util/dom.ts
import { isString as isString2 } from "lodash-es";

// packages/components/_util/style.ts
var trim = (str) => (str || "").replace(/^[\s\uFEFF]+|[\s\uFEFF]+$/g, "");
function hasClass(el, cls) {
  if (!el || !cls)
    return false;
  if (cls.indexOf(" ") !== -1)
    throw new Error("className should not contain space.");
  if (el.classList) {
    return el.classList.contains(cls);
  }
  return ` ${el.className} `.indexOf(` ${cls} `) > -1;
}
var addClass = function(el, cls) {
  if (!el)
    return;
  let curClass = el.className;
  const classes = (cls || "").split(" ");
  for (let i = 0, j = classes.length; i < j; i++) {
    const clsName = classes[i];
    if (!clsName)
      continue;
    if (el.classList) {
      el.classList.add(clsName);
    } else if (!hasClass(el, clsName)) {
      curClass += ` ${clsName}`;
    }
  }
  if (!el.classList) {
    el.className = curClass;
  }
};
var removeClass = function(el, cls) {
  if (!el || !cls)
    return;
  const classes = cls.split(" ");
  let curClass = ` ${el.className} `;
  for (let i = 0, j = classes.length; i < j; i++) {
    const clsName = classes[i];
    if (!clsName)
      continue;
    if (el.classList) {
      el.classList.remove(clsName);
    } else if (hasClass(el, clsName)) {
      curClass = curClass.replace(` ${clsName} `, " ");
    }
  }
  if (!el.classList) {
    el.className = trim(curClass);
  }
};
var getCssVarsValue = (name, element) => {
  if (!canUseDocument)
    return;
  const el = element || document.documentElement;
  return getComputedStyle(el).getPropertyValue(name);
};

// packages/components/_util/dom.ts
var canUseDocument = !!(typeof window !== "undefined" && window.document && window.document.createElement);
function getWindowSize() {
  if (canUseDocument) {
    return { width: window.innerWidth, height: window.innerHeight };
  }
  return { width: 0, height: 0 };
}

// packages/components/hooks/useLayoutEffect.ts
var useIsomorphicLayoutEffect = canUseDocument ? useLayoutEffect : useEffect2;
var useLayoutEffect_default = useIsomorphicLayoutEffect;

// packages/components/hooks/useUpdateLayoutEffect.ts
var useUpdateLayoutEffect = (callback, dependency) => {
  const isFirstRender = useIsFirstRender_default();
  useLayoutEffect_default(() => {
    if (isFirstRender)
      return;
    return callback();
  }, dependency);
};
var useUpdateLayoutEffect_default = useUpdateLayoutEffect;

// ../../../../../private/tmp/tdesign-tree-visual/baseline/tree/hooks/useStore.ts
function useStore(props, refresh) {
  const storeRef = useRef5(null);
  const [filterChanged, toggleFilterChanged] = useState3(false);
  const [prevExpanded, changePrevExpanded] = useState3(null);
  const {
    data,
    keys,
    expandAll,
    expandParent,
    expanded,
    expandLevel,
    expandMutex,
    activable,
    activeMultiple,
    actived,
    disabled,
    disableCheck,
    draggable,
    checkable,
    value,
    checkStrictly,
    load,
    lazy,
    valueMode,
    filter,
    onLoad,
    indeterminate,
    setTreeIndeterminate,
    allowFoldNodeOnFilter = false
  } = props;
  const preFilter = usePrevious(filter);
  useEffect3(() => {
    if (!allowFoldNodeOnFilter)
      return;
    toggleFilterChanged(JSON.stringify(preFilter) !== JSON.stringify(filter));
  }, [filter, allowFoldNodeOnFilter]);
  const expandFilterPath = () => {
    if (!allowFoldNodeOnFilter || !filterChanged)
      return;
    toggleFilterChanged(false);
    const store2 = storeRef.current;
    if (props.filter) {
      if (!prevExpanded)
        changePrevExpanded(store2.getExpanded());
      const pathValues = [];
      const allNodes = store2.getNodes();
      allNodes.forEach((node) => {
        if (node.vmIsLocked) {
          pathValues.push(node.value);
        }
      });
      store2.setExpanded(pathValues);
    } else if (prevExpanded) {
      store2.replaceExpanded(prevExpanded);
      changePrevExpanded(null);
    }
  };
  const handleUpdate = usePersistFn(() => {
    expandFilterPath();
    refresh();
  });
  const getExpandedArr = (arr, store2) => {
    const expandedMap = /* @__PURE__ */ new Map();
    arr.forEach((val) => {
      expandedMap.set(val, true);
      if (expandParent) {
        const node = store2.getNode(val);
        node?.getParents().forEach((tn) => {
          expandedMap.set(tn.value, true);
        });
      }
    });
    return Array.from(expandedMap.keys());
  };
  const createStore = () => {
    const store2 = new tree_store_default({
      keys,
      activable,
      activeMultiple,
      checkable,
      checkStrictly,
      expandAll,
      expandLevel,
      expandMutex,
      expandParent,
      disabled,
      disableCheck,
      draggable,
      load,
      lazy,
      valueMode,
      filter,
      onLoad: (info) => {
        const { node } = info;
        onLoad?.({
          node: node.getModel()
        });
      },
      onUpdate: handleUpdate,
      allowFoldNodeOnFilter
    });
    let list = cloneDeep(data);
    if (!Array.isArray(list)) {
      list = [];
    }
    store2.append(list);
    store2.refreshNodes();
    if (Array.isArray(value)) {
      store2.setChecked(value);
    }
    if (Array.isArray(expanded)) {
      const expandedArr = getExpandedArr(expanded, store2);
      store2.setExpanded(expandedArr);
    }
    if (Array.isArray(actived)) {
      store2.setActived(actived);
    }
    store2.refreshNodes();
    return store2;
  };
  if (!storeRef.current) {
    storeRef.current = createStore();
  }
  const store = storeRef.current;
  useUpdateLayoutEffect_default(() => {
    if (data && Array.isArray(data)) {
      const expanded2 = store.getExpanded();
      const checked = store.getChecked();
      const actived2 = store.getActived();
      store.removeAll();
      store.append(data);
      store.setChecked(checked);
      store.setActived(actived2);
      store.setExpanded(expanded2);
    }
  }, [data, store]);
  useUpdateLayoutEffect_default(() => {
    store.setConfig({
      keys,
      expandAll,
      expandLevel,
      expandMutex,
      expandParent,
      activable,
      activeMultiple,
      disabled,
      disableCheck,
      checkable,
      draggable,
      checkStrictly,
      load,
      lazy,
      valueMode
    });
    store.refreshState();
  }, [
    activable,
    activeMultiple,
    checkStrictly,
    draggable,
    checkable,
    disabled,
    disableCheck,
    expandAll,
    expandLevel,
    expandMutex,
    expandParent,
    keys,
    lazy,
    load,
    store,
    valueMode
  ]);
  useUpdateLayoutEffect_default(() => {
    if (expandAll) {
      const valueList = store.getNodes().filter((node) => Array.isArray(node.children) && node.children.length).map((node) => node.value);
      store.setExpanded(valueList);
    } else {
      store.replaceExpanded(prevExpanded);
      changePrevExpanded(null);
    }
  }, [store, expandAll]);
  useUpdateLayoutEffect_default(() => {
    if (Array.isArray(value)) {
      store.replaceChecked(value);
      const checkedValue = store.getCheckedNodes().map((v) => v.data[keys?.value || "value"]);
      const indeterminateConflict = checkedValue.filter((v) => indeterminate.includes(v));
      if (indeterminateConflict.length) {
        setTreeIndeterminate(indeterminate.filter((v) => !indeterminateConflict.includes(v)));
      }
    }
  }, [store, value, data]);
  useUpdateLayoutEffect_default(() => {
    if (Array.isArray(expanded)) {
      const expandedArr = getExpandedArr(expanded, store);
      store.replaceExpanded(expandedArr);
    }
  }, [expanded, store]);
  useUpdateLayoutEffect_default(() => {
    if (Array.isArray(actived)) {
      store.replaceActived(actived);
    }
  }, [actived, store]);
  useUpdateLayoutEffect_default(() => {
    if (Array.isArray(indeterminate)) {
      store.replaceIndeterminate(indeterminate);
    }
  }, [indeterminate, store, data]);
  useUpdateLayoutEffect_default(() => {
    store.setConfig({
      filter
    });
    store.updateAll();
  }, [filter, store]);
  return storeRef.current;
}

// ../../../../../private/tmp/tdesign-tree-visual/baseline/tree/hooks/useTreeConfig.ts
import { useMemo as useMemo2 } from "react";

// packages/components/hooks/useConfig.ts
import { useContext as useContext2 } from "react";

// packages/components/config-provider/ConfigContext.tsx
import { createContext as createContext2 } from "react";
import { merge } from "lodash-es";

// packages/common/js/global-config/default-config.ts
var default_config_default = {
  classPrefix: "t",
  animation: {
    include: ["ripple", "expand", "fade"],
    exclude: []
  },
  attach: null,
  calendar: {
    firstDayOfWeek: 1,
    fillWithZero: true,
    controllerConfig: void 0
  },
  icon: {},
  input: {
    autocomplete: ""
  },
  dialog: {
    closeOnEscKeydown: true,
    closeOnOverlayClick: true,
    placement: "top",
    confirmBtnTheme: {
      default: "primary",
      info: "primary",
      warning: "primary",
      danger: "primary",
      success: "primary"
    }
  },
  loading: {
    size: "medium",
    delay: 0,
    showOverlay: true,
    inheritColor: false,
    preventScrollThrough: true
  },
  message: {},
  popconfirm: {
    confirmBtnTheme: {
      default: "primary",
      warning: "primary",
      danger: "primary"
    }
  },
  table: {
    expandIcon: void 0,
    sortIcon: void 0,
    filterIcon: void 0,
    treeExpandAndFoldIcon: void 0,
    hideSortTips: false,
    size: "medium"
  },
  select: {
    clearIcon: void 0,
    filterable: false
  },
  drawer: {
    closeOnEscKeydown: true,
    closeOnOverlayClick: true,
    size: "small"
  },
  tree: {
    folderIcon: void 0
  },
  datePicker: {
    firstDayOfWeek: 1
  },
  steps: {
    checkIcon: void 0,
    errorIcon: void 0
  },
  tag: {
    closeIcon: void 0
  },
  form: {
    requiredMark: void 0
  },
  empty: {
    titleText: {
      maintenance: void 0,
      success: void 0,
      fail: void 0,
      empty: void 0,
      networkError: void 0
    },
    image: {
      maintenance: void 0,
      success: void 0,
      fail: void 0,
      empty: void 0,
      networkError: void 0
    }
  }
};

// packages/common/js/global-config/locale/zh_CN.ts
var import_zh_cn = __toESM(require_zh_cn());
var zh_CN_default = {
  autoComplete: {
    empty: "\u6682\u65E0\u6570\u636E"
  },
  pagination: {
    itemsPerPage: "{size} \u6761/\u9875",
    jumpTo: "\u8DF3\u81F3",
    page: "\u9875",
    total: "\u5171 {count} \u6761\u6570\u636E"
  },
  cascader: {
    empty: "\u6682\u65E0\u6570\u636E",
    loadingText: "\u52A0\u8F7D\u4E2D",
    placeholder: "\u8BF7\u9009\u62E9"
  },
  calendar: {
    yearSelection: "{year} \u5E74",
    monthSelection: "{month} \u6708",
    yearRadio: "\u5E74",
    monthRadio: "\u6708",
    hideWeekend: "\u9690\u85CF\u5468\u672B",
    showWeekend: "\u663E\u793A\u5468\u672B",
    today: "\u4ECA\u5929",
    thisMonth: "\u672C\u6708",
    week: "\u4E00,\u4E8C,\u4E09,\u56DB,\u4E94,\u516D,\u65E5",
    cellMonth: "1 \u6708,2 \u6708,3 \u6708,4 \u6708,5 \u6708,6 \u6708,7 \u6708,8 \u6708,9 \u6708,10 \u6708,11 \u6708,12 \u6708"
  },
  transfer: {
    title: "{checked} / {total} \u9879",
    empty: "\u6682\u65E0\u6570\u636E",
    placeholder: "\u8BF7\u8F93\u5165\u5173\u952E\u8BCD\u641C\u7D22"
  },
  timePicker: {
    dayjsLocale: "zh-cn",
    now: "\u6B64\u523B",
    confirm: "\u786E\u5B9A",
    anteMeridiem: "\u4E0A\u5348",
    postMeridiem: "\u4E0B\u5348",
    placeholder: "\u9009\u62E9\u65F6\u95F4"
  },
  dialog: {
    confirm: "\u786E\u8BA4",
    cancel: "\u53D6\u6D88"
  },
  drawer: {
    confirm: "\u786E\u8BA4",
    cancel: "\u53D6\u6D88"
  },
  popconfirm: {
    confirm: {
      content: "\u786E\u5B9A"
    },
    cancel: {
      content: "\u53D6\u6D88"
    }
  },
  table: {
    empty: "\u6682\u65E0\u6570\u636E",
    loadingText: "\u6B63\u5728\u52A0\u8F7D\u4E2D\uFF0C\u8BF7\u7A0D\u540E",
    loadingMoreText: "\u70B9\u51FB\u52A0\u8F7D\u66F4\u591A",
    filterInputPlaceholder: "\u8BF7\u8F93\u5165\u5185\u5BB9\uFF08\u65E0\u9ED8\u8BA4\u503C\uFF09",
    sortAscendingOperationText: "\u70B9\u51FB\u5347\u5E8F",
    sortCancelOperationText: "\u70B9\u51FB\u53D6\u6D88\u6392\u5E8F",
    sortDescendingOperationText: "\u70B9\u51FB\u964D\u5E8F",
    clearFilterResultButtonText: "\u6E05\u7A7A\u7B5B\u9009",
    columnConfigButtonText: "\u5217\u914D\u7F6E",
    columnConfigTitleText: "\u8868\u683C\u5217\u914D\u7F6E",
    columnConfigDescriptionText: "\u8BF7\u9009\u62E9\u9700\u8981\u5728\u8868\u683C\u4E2D\u663E\u793A\u7684\u6570\u636E\u5217",
    confirmText: "\u786E\u8BA4",
    cancelText: "\u53D6\u6D88",
    resetText: "\u91CD\u7F6E",
    selectAllText: "\u5168\u9009",
    searchResultText: "\u641C\u7D22\u201C{result}\u201D\uFF0C\u627E\u5230 {count} \u6761\u7ED3\u679C"
  },
  select: {
    empty: "\u6682\u65E0\u6570\u636E",
    loadingText: "\u52A0\u8F7D\u4E2D",
    placeholder: "\u8BF7\u9009\u62E9"
  },
  tree: {
    empty: "\u6682\u65E0\u6570\u636E"
  },
  treeSelect: {
    empty: "\u6682\u65E0\u6570\u636E",
    loadingText: "\u52A0\u8F7D\u4E2D",
    placeholder: "\u8BF7\u9009\u62E9"
  },
  datePicker: {
    dayjsLocale: "zh-cn",
    placeholder: {
      date: "\u8BF7\u9009\u62E9\u65E5\u671F",
      month: "\u8BF7\u9009\u62E9\u6708\u4EFD",
      year: "\u8BF7\u9009\u62E9\u5E74\u4EFD",
      quarter: "\u8BF7\u9009\u62E9\u5B63\u5EA6",
      week: "\u8BF7\u9009\u62E9\u5468"
    },
    weekdays: ["\u4E00", "\u4E8C", "\u4E09", "\u56DB", "\u4E94", "\u516D", "\u65E5"],
    months: ["1 \u6708", "2 \u6708", "3 \u6708", "4 \u6708", "5 \u6708", "6 \u6708", "7 \u6708", "8 \u6708", "9 \u6708", "10 \u6708", "11 \u6708", "12 \u6708"],
    quarters: ["\u4E00\u5B63\u5EA6", "\u4E8C\u5B63\u5EA6", "\u4E09\u5B63\u5EA6", "\u56DB\u5B63\u5EA6"],
    rangeSeparator: " - ",
    direction: "ltr",
    format: "YYYY-MM-DD",
    dayAriaLabel: "\u65E5",
    weekAbbreviation: "\u5468",
    yearAriaLabel: "\u5E74",
    monthAriaLabel: "\u6708",
    confirm: "\u786E\u5B9A",
    selectTime: "\u9009\u62E9\u65F6\u95F4",
    selectDate: "\u9009\u62E9\u65E5\u671F",
    nextYear: "\u4E0B\u4E00\u5E74",
    preYear: "\u4E0A\u4E00\u5E74",
    nextMonth: "\u4E0B\u4E2A\u6708",
    preMonth: "\u4E0A\u4E2A\u6708",
    preDecade: "\u4E0A\u4E2A\u5341\u5E74",
    nextDecade: "\u4E0B\u4E2A\u5341\u5E74",
    now: "\u5F53\u524D"
  },
  upload: {
    sizeLimitMessage: "\u6587\u4EF6\u5927\u5C0F\u4E0D\u80FD\u8D85\u8FC7 {sizeLimit}",
    cancelUploadText: "\u53D6\u6D88\u4E0A\u4F20",
    triggerUploadText: {
      fileInput: "\u9009\u62E9\u6587\u4EF6",
      image: "\u70B9\u51FB\u4E0A\u4F20\u56FE\u7247",
      normal: "\u70B9\u51FB\u4E0A\u4F20",
      reupload: "\u91CD\u65B0\u9009\u62E9",
      continueUpload: "\u7EE7\u7EED\u9009\u62E9",
      delete: "\u5220\u9664",
      uploading: "\u4E0A\u4F20\u4E2D"
    },
    dragger: {
      dragDropText: "\u91CA\u653E\u9F20\u6807",
      draggingText: "\u62D6\u62FD\u5230\u6B64\u533A\u57DF",
      clickAndDragText: "\u70B9\u51FB\u4E0A\u65B9\u201C\u9009\u62E9\u6587\u4EF6\u201D\u6216\u5C06\u6587\u4EF6\u62D6\u62FD\u5230\u6B64\u533A\u57DF"
    },
    file: {
      fileNameText: "\u6587\u4EF6\u540D",
      fileSizeText: "\u6587\u4EF6\u5927\u5C0F",
      fileStatusText: "\u72B6\u6001",
      fileOperationText: "\u64CD\u4F5C",
      fileOperationDateText: "\u4E0A\u4F20\u65E5\u671F"
    },
    progress: {
      uploadingText: "\u4E0A\u4F20\u4E2D",
      waitingText: "\u5F85\u4E0A\u4F20",
      failText: "\u4E0A\u4F20\u5931\u8D25",
      successText: "\u4E0A\u4F20\u6210\u529F"
    }
  },
  form: {
    errorMessage: {
      date: "\u8BF7\u8F93\u5165\u6B63\u786E\u7684${name}",
      url: "\u8BF7\u8F93\u5165\u6B63\u786E\u7684${name}",
      required: "${name}\u5FC5\u586B",
      whitespace: "${name}\u4E0D\u80FD\u4E3A\u7A7A",
      max: "${name}\u5B57\u7B26\u957F\u5EA6\u4E0D\u80FD\u8D85\u8FC7 ${validate} \u4E2A\u5B57\u7B26\uFF0C\u4E00\u4E2A\u4E2D\u6587\u7B49\u4E8E\u4E24\u4E2A\u5B57\u7B26",
      min: "${name}\u5B57\u7B26\u957F\u5EA6\u4E0D\u80FD\u5C11\u4E8E ${validate} \u4E2A\u5B57\u7B26\uFF0C\u4E00\u4E2A\u4E2D\u6587\u7B49\u4E8E\u4E24\u4E2A\u5B57\u7B26",
      len: "${name}\u5B57\u7B26\u957F\u5EA6\u5FC5\u987B\u662F ${validate}",
      enum: "${name}\u53EA\u80FD\u662F${validate}\u7B49",
      idcard: "\u8BF7\u8F93\u5165\u6B63\u786E\u7684${name}",
      telnumber: "\u8BF7\u8F93\u5165\u6B63\u786E\u7684${name}",
      pattern: "\u8BF7\u8F93\u5165\u6B63\u786E\u7684${name}",
      validator: "${name}\u4E0D\u7B26\u5408\u8981\u6C42",
      boolean: "${name}\u6570\u636E\u7C7B\u578B\u5FC5\u987B\u662F\u5E03\u5C14\u7C7B\u578B",
      number: "${name}\u5FC5\u987B\u662F\u6570\u5B57",
      email: "\u8BF7\u8F93\u5165\u6B63\u786E\u7684${name}"
    },
    colonText: "\uFF1A"
  },
  input: {
    placeholder: "\u8BF7\u8F93\u5165"
  },
  list: {
    loadingText: "\u6B63\u5728\u52A0\u8F7D\u4E2D\uFF0C\u8BF7\u7A0D\u7B49",
    loadingMoreText: "\u70B9\u51FB\u52A0\u8F7D\u66F4\u591A"
  },
  alert: {
    expandText: "\u5C55\u5F00\u66F4\u591A",
    collapseText: "\u6536\u8D77"
  },
  anchor: {
    copySuccessText: "\u94FE\u63A5\u590D\u5236\u6210\u529F",
    copyText: "\u590D\u5236\u94FE\u63A5"
  },
  colorPicker: {
    swatchColorTitle: "\u7CFB\u7EDF\u9884\u8BBE\u989C\u8272",
    recentColorTitle: "\u6700\u8FD1\u4F7F\u7528\u989C\u8272",
    clearConfirmText: "\u786E\u5B9A\u6E05\u7A7A\u6700\u8FD1\u4F7F\u7528\u7684\u989C\u8272\u5417\uFF1F",
    singleColor: "\u5355\u8272",
    gradientColor: "\u6E10\u53D8"
  },
  guide: {
    finishButtonProps: {
      content: "\u5B8C\u6210",
      theme: "primary"
    },
    nextButtonProps: {
      content: "\u4E0B\u4E00\u6B65",
      theme: "primary"
    },
    skipButtonProps: {
      content: "\u8DF3\u8FC7",
      theme: "default"
    },
    prevButtonProps: {
      content: "\u4E0A\u4E00\u6B65",
      theme: "default"
    }
  },
  image: {
    errorText: "\u56FE\u7247\u65E0\u6CD5\u663E\u793A",
    loadingText: "\u56FE\u7247\u52A0\u8F7D\u4E2D"
  },
  imageViewer: {
    errorText: "\u56FE\u7247\u52A0\u8F7D\u5931\u8D25\uFF0C\u53EF\u5C1D\u8BD5\u91CD\u65B0\u52A0\u8F7D",
    mirrorTipText: "\u955C\u50CF",
    rotateTipText: "\u65CB\u8F6C",
    originalSizeTipText: "\u539F\u59CB\u5927\u5C0F",
    previewText: "\u9884\u89C8"
  },
  typography: {
    expandText: "\u5C55\u5F00",
    collapseText: "\u6536\u8D77",
    copiedText: "\u590D\u5236\u6210\u529F"
  },
  rate: {
    rateText: ["\u6781\u5DEE", "\u5931\u671B", "\u4E00\u822C", "\u6EE1\u610F", "\u60CA\u559C"]
  },
  empty: {
    titleText: {
      maintenance: "\u5EFA\u8BBE\u4E2D",
      success: "\u6210\u529F",
      fail: "\u5931\u8D25",
      empty: "\u6682\u65E0\u6570\u636E",
      networkError: "\u7F51\u7EDC\u9519\u8BEF"
    }
  },
  descriptions: {
    colonText: "\uFF1A"
  },
  chat: {
    placeholder: "\u8BF7\u8F93\u5165\u6D88\u606F...",
    stopBtnText: "\u4E2D\u6B62",
    refreshTipText: "\u91CD\u65B0\u751F\u6210",
    copyTipText: "\u590D\u5236",
    likeTipText: "\u70B9\u8D5E",
    dislikeTipText: "\u70B9\u8E29",
    copyCodeBtnText: "\u590D\u5236\u4EE3\u7801",
    copyCodeSuccessText: "\u5DF2\u590D\u5236",
    clearHistoryBtnText: "\u6E05\u7A7A\u5386\u53F2\u8BB0\u5F55",
    copyTextSuccess: "\u5DF2\u6210\u529F\u590D\u5236\u5230\u526A\u8D34\u677F",
    copyTextFail: "\u590D\u5236\u5230\u526A\u8D34\u677F\u5931\u8D25",
    confirmClearHistory: "\u786E\u5B9A\u8981\u6E05\u7A7A\u6240\u6709\u7684\u6D88\u606F\u5417\uFF1F",
    loadingText: "\u601D\u8003\u4E2D...",
    loadingEndText: "\u5DF2\u6DF1\u5EA6\u601D\u8003",
    uploadImageText: "\u4E0A\u4F20\u56FE\u7247",
    uploadAttachmentText: "\u4E0A\u4F20\u9644\u4EF6",
    shareTipText: "\u5206\u4EAB"
  },
  qrcode: {
    expiredText: "\u4E8C\u7EF4\u7801\u8FC7\u671F",
    refreshText: "\u70B9\u51FB\u5237\u65B0",
    scannedText: "\u5DF2\u626B\u63CF"
  }
};

// packages/components/locale/zh_CN.ts
var zh_CN_default2 = zh_CN_default;

// packages/components/config-provider/ConfigContext.tsx
var EAnimationType = /* @__PURE__ */ ((EAnimationType2) => {
  EAnimationType2["ripple"] = "ripple";
  EAnimationType2["expand"] = "expand";
  EAnimationType2["fade"] = "fade";
  return EAnimationType2;
})(EAnimationType || {});
var defaultClassPrefix = "t";
var defaultAnimation = {
  include: ["ripple" /* ripple */, "expand" /* expand */, "fade" /* fade */],
  exclude: []
};
var defaultGlobalConfig = {
  animation: defaultAnimation,
  classPrefix: defaultClassPrefix,
  ...merge({}, zh_CN_default2, default_config_default)
};
var defaultContext = {
  globalConfig: defaultGlobalConfig
};
var ConfigContext = createContext2(defaultContext);
var ConfigContext_default = ConfigContext;

// packages/components/hooks/useConfig.ts
var useConfig_default = () => useContext2(ConfigContext_default).globalConfig;

// packages/components/locale/LocalReceiver.ts
import React4 from "react";

// packages/common/js/global-config/t.ts
import { isString as isString3 } from "lodash-es";
function getPluralIndex(count) {
  if (count === 0)
    return 0;
  if (count === 1)
    return 1;
  return 2;
}
function t(pattern, ...args) {
  if (isString3(pattern)) {
    let text = pattern;
    let count;
    let data = {};
    if (args.length > 0) {
      const [firstArg, secondArg] = args;
      if (typeof firstArg === "number") {
        count = firstArg;
        if (secondArg && typeof secondArg === "object") {
          data = secondArg;
        } else {
          data.count = count;
        }
      } else if (typeof firstArg === "object" && firstArg !== null) {
        data = firstArg;
      }
    }
    if (text.includes("|")) {
      const pluralParts = text.split("|").map((part) => part.trim());
      let effectiveCount;
      if (typeof count === "number") {
        effectiveCount = count;
      } else if (typeof data?.count === "number") {
        effectiveCount = data.count;
      }
      if (typeof effectiveCount === "number") {
        const pluralIndex = getPluralIndex(effectiveCount);
        if (pluralIndex < pluralParts.length) {
          text = pluralParts[pluralIndex];
        } else {
          text = pluralParts[pluralParts.length - 1];
        }
      } else {
        const [firstPart] = pluralParts;
        text = firstPart;
      }
    }
    if (data && Object.keys(data).length > 0) {
      const regular = /\{\s*([\w-]+)\s*\}/g;
      text = text.replace(regular, (match, key) => {
        if (Object.prototype.hasOwnProperty.call(data, key)) {
          return String(data[key]);
        }
        return match;
      });
    }
    return text;
  }
  return "";
}

// packages/components/config-provider/ConfigProvider.tsx
import React3, { useEffect as useEffect4 } from "react";
import { cloneDeep as cloneDeep2, mergeWith as _mergeWith } from "lodash-es";
var merge2 = (src, config) => _mergeWith(src, config, (objValue, srcValue) => {
  if (Array.isArray(objValue)) {
    return srcValue;
  }
});
var globalConfig = defaultGlobalConfig;
var getGlobalConfig = (configInfo) => merge2({ ...globalConfig }, configInfo);
var setGlobalConfig = (configInfo) => {
  globalConfig = configInfo;
};
function ConfigProvider({ children, globalConfig: globalConfig2, notSet }) {
  const defaultData = cloneDeep2(defaultGlobalConfig);
  const mergedGlobalConfig = merge2(defaultData, globalConfig2);
  useEffect4(() => {
    if (!notSet) {
      setGlobalConfig(mergedGlobalConfig);
    }
  }, [mergedGlobalConfig, notSet]);
  return /* @__PURE__ */ React3.createElement(ConfigContext_default.Provider, {
    value: { globalConfig: mergedGlobalConfig }
  }, children);
}
ConfigProvider.getGlobalConfig = getGlobalConfig;
ConfigProvider.setGlobalConfig = setGlobalConfig;
ConfigProvider.displayName = "ConfigProvider";

// packages/components/locale/LocalReceiver.ts
function useLocaleReceiver(componentName, defaultLocale) {
  const { globalConfig: globalConfig2 } = React4.useContext(ConfigContext_default);
  function transformLocale(pattern, ...args) {
    const REGEXP = /\{\s*([\w-]+)\s*\}/g;
    const placement = args[0];
    if (Array.isArray(pattern)) {
      return pattern.map((p, index) => {
        const translated = p.replace(REGEXP, (_, key) => {
          if (placement)
            return String(placement[index][key]);
          return "";
        });
        return translated;
      });
    }
    if (typeof pattern === "function") {
      return pattern(placement);
    }
    const data = args[1];
    if (data) {
      return t(pattern, placement, data);
    }
    return t(pattern, placement);
  }
  const componentLocale = React4.useMemo(() => {
    const locale = defaultLocale || {};
    const connectLocaleByName = globalConfig2[componentName];
    const localeFromContext = componentName && globalConfig2 ? connectLocaleByName : {};
    return {
      ...typeof locale === "function" ? locale() : locale,
      ...localeFromContext || {}
    };
  }, [componentName, defaultLocale, globalConfig2]);
  return [componentLocale, transformLocale];
}

// ../../../../../private/tmp/tdesign-tree-visual/baseline/tree/hooks/useTreeConfig.ts
function useTreeConfig(transition = true) {
  const { classPrefix: prefix } = useConfig_default();
  const [locale, t2] = useLocaleReceiver("tree");
  return useMemo2(() => {
    const tree = `${prefix}-tree`;
    const treeClassNames = {
      icon: `${prefix}-icon`,
      folderIcon: `${prefix}-folder-icon`,
      actived: `${prefix}-is-active`,
      disabled: `${prefix}-is-disabled`,
      treeIconRight: `${prefix}-icon-arrow-right`,
      treeIconDown: `${prefix}-icon-arrow-down`,
      tree,
      treeFx: `${tree}--transition`,
      treeBlockNode: `${tree}--block-node`,
      treeEmpty: `${tree}__empty`,
      treeList: `${tree}__list`,
      treeNode: `${tree}__item`,
      treeNodeOpen: `${tree}__item--open`,
      treeHoverable: `${tree}--hoverable`,
      treeCheckable: `${tree}--checkable`,
      treeLabel: `${tree}__label`,
      treeLabelStrictly: `${tree}__label--strictly`,
      treeIcon: `${tree}__icon`,
      treeIconDefault: `${tree}__icon--default`,
      treeSpace: `${tree}__space`,
      treeOperations: `${tree}__operations`,
      treeNodeDraggable: `${tree}__item--draggable`,
      treeNodeDragging: `${tree}__item--dragging`,
      treeNodeDragTipTop: `${tree}__item--tip-top`,
      treeNodeDragTipBottom: `${tree}__item--tip-bottom`,
      treeNodeDragTipHighlight: `${tree}__item--tip-highlight`,
      line: `${tree}__line`,
      lineIsLeaf: `${tree}__line--leaf`,
      lineIsFirst: `${tree}__line--first`,
      treeNodeShow: `${tree}__item--show`,
      treeClickable: `${tree}__item--clickable`,
      loading: `${prefix}-icon-loading ${prefix}-icon-loading-blue`,
      toggleEnter: `${tree}__item--enter-active`,
      toggleLeave: `${tree}__item--leave-active`,
      treeVscroll: `${tree}__vscroll`,
      treeVscrollCursor: `${tree}__vscroll-cursor`
    };
    const transitionNames = {
      treeNode: `${prefix}-tree-toggle`
    };
    const transitionClassNames = {
      enter: treeClassNames.toggleEnter,
      exit: treeClassNames.toggleLeave
    };
    return {
      treeClassNames,
      transitionNames,
      transitionClassNames,
      transitionDuration: transition ? 300 : 0,
      locale: (key) => t2(locale[key])
    };
  }, [locale, prefix, t2, transition]);
}

// ../../../../../private/tmp/tdesign-tree-visual/baseline/tree/hooks/useTreeVirtualScroll.ts
import { useEffect as useEffect6, useMemo as useMemo4 } from "react";

// packages/components/hooks/useEventCallback.ts
import React5 from "react";
var useInsertionEffect = typeof window !== "undefined" ? React5.useInsertionEffect || React5.useLayoutEffect : noop_default;
function useEventCallbackShouldNotBeInvokedBeforeMount() {
  throw new Error(
    "INVALID_USEEVENTCALLBACK_INVOCATION: the callback from useEventCallback cannot be invoked before the component has mounted."
  );
}
function useEventCallback(callback) {
  const latestRef = React5.useRef(useEventCallbackShouldNotBeInvokedBeforeMount);
  useInsertionEffect(() => {
    latestRef.current = callback;
  }, [callback]);
  const stableRef = React5.useRef(null);
  if (!stableRef.current) {
    stableRef.current = function(...args) {
      return latestRef.current.apply(this, args);
    };
  }
  return stableRef.current;
}

// packages/components/hooks/useVirtualScroll.ts
import { useEffect as useEffect5, useMemo as useMemo3, useRef as useRef6, useState as useState4 } from "react";
import { isEqual } from "lodash-es";
var requestAnimationFrame2 = (typeof window === "undefined" ? false : window.requestAnimationFrame) || ((cb) => setTimeout(cb, 16.6));
var useVirtualScroll = (container, params) => {
  const { enable = true, data, scroll } = params;
  const dataRef = useRef6(data);
  const lastVisibleDataRef = useRef6(data);
  const containerHeight = useRef6(0);
  const [visibleData, setVisibleData] = useState4([]);
  const [translateY, setTranslateY] = useState4(0);
  const [scrollHeight, setScrollHeight] = useState4(0);
  const trScrollTopHeightList = useRef6([]);
  const [trHeightList, setTrHeightList] = useState4([]);
  const tScroll = useMemo3(() => {
    if (!scroll)
      return {};
    return {
      bufferSize: scroll.bufferSize || 10,
      isFixedRowHeight: scroll.isFixedRowHeight ?? false,
      rowHeight: scroll.rowHeight || 47,
      threshold: scroll.threshold || 100,
      type: scroll.type,
      fixedRows: scroll.fixedRows ?? [0, 0]
    };
  }, [scroll]);
  const enableVirtualScroll = useMemo3(() => enable && tScroll.type === "virtual", [enable, tScroll]);
  const isVirtualScroll = useMemo3(
    () => enableVirtualScroll && tScroll.threshold < data.length,
    [enableVirtualScroll, tScroll.threshold, data.length]
  );
  const visibleCount = Math.min(tScroll.bufferSize * 3, data.length);
  const [startAndEndIndex, setStartAndEndIndex] = useState4(() => [0, visibleCount]);
  const getTrScrollTopHeightList = (trHeightList2) => {
    const list = [];
    for (let i = 0, len = data.length; i < len; i++) {
      list[i] = (list[i - 1] || 0) + (trHeightList2[i] || tScroll.rowHeight);
    }
    return list;
  };
  const updateVisibleData = (trScrollTopHeightList2, scrollTop) => {
    let currentIndex = -1;
    for (let i = 0, len = trScrollTopHeightList2.length; i < len; i++) {
      if (trScrollTopHeightList2[i] >= scrollTop) {
        currentIndex = i;
        break;
      }
    }
    let lastIndex = trScrollTopHeightList2.length;
    const containerCurrentHeight = containerHeight.current || container.current.getBoundingClientRect().height;
    const scrollBottom = scrollTop + containerCurrentHeight;
    for (let i = currentIndex, len = trScrollTopHeightList2.length; i < len; i++) {
      if (trScrollTopHeightList2[i] >= scrollBottom) {
        lastIndex = i;
        break;
      }
    }
    if (currentIndex < 0)
      return;
    const startIndex = Math.max(currentIndex - tScroll.bufferSize, 0);
    const endIndex = Math.min(lastIndex + tScroll.bufferSize, trScrollTopHeightList2.length);
    const { fixedRows } = tScroll;
    const [fixedStart, fixedEnd] = fixedRows;
    const firstIsFake = data[0]?.__VIRTUAL_FAKE_DATA;
    const isScrollStart = lastIndex - visibleCount <= 0;
    const startOffset = firstIsFake && !isScrollStart ? 1 : 0;
    let fixedStartData = fixedStart ? data.slice(startOffset, fixedStart + startOffset) : [];
    if (fixedStart && startIndex < fixedStart) {
      fixedStartData = fixedStartData.slice(0, startIndex);
    }
    const lastIsFake = data[data.length - 1]?.__VIRTUAL_FAKE_DATA;
    const isScrollEnd = lastIndex === trScrollTopHeightList2.length;
    const endOffset = lastIsFake && !isScrollEnd ? 1 : 0;
    let fixedEndData = fixedEnd ? data.slice(data.length - fixedEnd - endOffset) : [];
    const bottomStartIndex = endIndex - data.length + 1 + (fixedEnd ?? 0);
    if (fixedEnd && bottomStartIndex > 0) {
      fixedEndData = fixedEndData.slice(bottomStartIndex);
    }
    const indexChanged = startAndEndIndex.join() !== [startIndex, endIndex].join();
    const dataSourceChanged = lastVisibleDataRef.current !== data;
    if ((indexChanged || dataSourceChanged) && startIndex >= 0) {
      const tmpVisibleData = fixedStartData.concat(data.slice(startIndex, endIndex)).concat(fixedEndData);
      setVisibleData(tmpVisibleData);
      const lastScrollTop = trScrollTopHeightList2[startIndex - 1];
      const top2 = lastScrollTop > 0 ? lastScrollTop : 0;
      const stickyHeight = trScrollTopHeightList2[Math.min(startIndex, fixedStart) - 1] || 0;
      setTranslateY(top2 - stickyHeight);
      lastVisibleDataRef.current = data;
      if (indexChanged) {
        setStartAndEndIndex([startIndex, endIndex]);
      }
    }
  };
  const handleRowMounted = (rowData) => {
    if (!isVirtualScroll || !rowData || tScroll.isFixedRowHeight || !container?.current)
      return;
    const trHeight = rowData.ref.offsetHeight;
    const rowIndex = rowData.data.__VIRTUAL_SCROLL_INDEX;
    const newTrHeightList = [...trHeightList];
    if (newTrHeightList[rowIndex] !== trHeight) {
      newTrHeightList[rowIndex] = trHeight;
      setTrHeightList(newTrHeightList);
      const scrollTopHeightList = getTrScrollTopHeightList(newTrHeightList);
      trScrollTopHeightList.current = scrollTopHeightList;
      const lastIndex = scrollTopHeightList.length - 1;
      setScrollHeight(scrollTopHeightList[lastIndex] - containerHeight.current);
      updateVisibleData(scrollTopHeightList, container.current.scrollTop);
    }
  };
  const handleScroll = () => {
    if (!isVirtualScroll)
      return;
    updateVisibleData(trScrollTopHeightList.current, container.current.scrollTop);
  };
  const addIndexToData = (data2) => {
    data2.forEach((item, index) => {
      Reflect.set(item, "__VIRTUAL_SCROLL_INDEX", index);
    });
  };
  const updateScrollTop = ({ index, top: top2 = 0, behavior }) => {
    const scrollTop = trScrollTopHeightList.current[index] - top2;
    container.current?.scrollTo({
      top: scrollTop,
      behavior: behavior || "auto"
    });
  };
  const scrollToElement = (p) => {
    updateScrollTop(p);
    if (!tScroll.isFixedRowHeight) {
      requestAnimationFrame2(() => {
        const duration = p.time ?? 60;
        const timer = setTimeout(() => {
          updateScrollTop(p);
          clearTimeout(timer);
        }, duration);
      });
    }
  };
  useEffect5(
    () => {
      if (!enableVirtualScroll)
        return;
      if (!isVirtualScroll) {
        if (!data.length)
          return;
        setVisibleData(data);
        dataRef.current = data;
        trScrollTopHeightList.current = getTrScrollTopHeightList(trHeightList);
        return;
      }
      addIndexToData(data);
      const dataChanged = !isEqual(dataRef.current, data);
      const scrollTopHeightList = trScrollTopHeightList.current;
      if (scrollTopHeightList?.length === data?.length && !dataChanged) {
        const lastIndex = scrollTopHeightList.length - 1;
        setScrollHeight(scrollTopHeightList[lastIndex]);
        updateVisibleData(scrollTopHeightList, container.current.scrollTop);
      } else {
        dataRef.current = data;
        setScrollHeight(data.length * tScroll.rowHeight);
        const currentScrollTop = container.current?.scrollTop || 0;
        let currentIndex = Math.floor(currentScrollTop / tScroll.rowHeight);
        for (let i = 0; i < scrollTopHeightList?.length; i++) {
          if (scrollTopHeightList[i] >= currentScrollTop) {
            currentIndex = i;
            break;
          }
        }
        const startIndex = Math.max(currentIndex - tScroll.bufferSize, 0);
        const endIndex = Math.min(startIndex + visibleCount, data.length);
        const tmpData = data.slice(startIndex, endIndex);
        let translateY2 = startIndex * tScroll.rowHeight;
        if (scrollTopHeightList?.length > 0 && startIndex > 0) {
          const prevHeight = scrollTopHeightList[Math.min(startIndex - 1, scrollTopHeightList.length - 1)] || 0;
          translateY2 = Math.max(0, prevHeight);
        }
        setVisibleData(tmpData);
        setTranslateY(translateY2);
        lastVisibleDataRef.current = data;
        if (startAndEndIndex.join() !== [startIndex, endIndex].join()) {
          setStartAndEndIndex([startIndex, endIndex]);
        }
      }
      const timer = setTimeout(() => {
        if (container.current) {
          const tmpContainerHeight = container.current.getBoundingClientRect().height;
          containerHeight.current = tmpContainerHeight;
          const scrollTopHeightList2 = getTrScrollTopHeightList(trHeightList);
          trScrollTopHeightList.current = scrollTopHeightList2;
          clearTimeout(timer);
        }
      }, 1);
    },
    [container, data, tScroll, isVirtualScroll, startAndEndIndex, trHeightList]
  );
  return {
    visibleData,
    translateY,
    scrollHeight,
    isVirtualScroll,
    handleScroll,
    handleRowMounted,
    scrollToElement
  };
};
var useVirtualScroll_default = useVirtualScroll;

// ../../../../../private/tmp/tdesign-tree-visual/baseline/tree/hooks/useTreeVirtualScroll.ts
function useTreeVirtualScroll({
  treeRef,
  scroll,
  data = [],
  onScroll
}) {
  const scrollThreshold = scroll?.threshold || 100;
  const scrollType = scroll?.type;
  const enableVirtual = useMemo4(() => scrollType === "virtual", [scrollType]);
  const isVirtual = useMemo4(
    () => enableVirtual && data?.length > scrollThreshold,
    [enableVirtual, scrollThreshold, data]
  );
  const scrollParams = useMemo4(
    () => ({
      type: "virtual",
      isFixedRowHeight: scroll?.isFixedRowHeight || false,
      rowHeight: scroll?.rowHeight || 34,
      bufferSize: scroll?.bufferSize || 20,
      threshold: scrollThreshold
    }),
    [scroll, scrollThreshold]
  );
  const {
    visibleData = null,
    handleScroll: handleVirtualScroll = null,
    scrollHeight = null,
    translateY = null,
    handleRowMounted = null,
    scrollToElement
  } = useVirtualScroll_default(treeRef, {
    enable: enableVirtual,
    data: data || [],
    scroll: scrollParams
  });
  let lastScrollY = -1;
  const onInnerVirtualScroll = useEventCallback((e) => {
    onScroll?.({ e });
    if (!isVirtual) {
      return;
    }
    const target = e.target;
    const top2 = target.scrollTop;
    if (lastScrollY !== top2) {
      handleVirtualScroll();
    } else {
      lastScrollY = -1;
    }
    lastScrollY = top2;
  });
  useEffect6(() => {
    const treeList = treeRef?.current;
    treeList?.addEventListener?.("scroll", onInnerVirtualScroll);
    return () => {
      treeList?.removeEventListener?.("scroll", onInnerVirtualScroll);
    };
  }, [treeRef, onInnerVirtualScroll]);
  const cursorStyle = {
    position: "absolute",
    width: "1px",
    height: "1px",
    transition: "transform 0.2s",
    transform: `translate(0, ${scrollHeight}px)`,
    MsTransform: `translate(0, ${scrollHeight}px)`,
    MozTransform: `translate(0, ${scrollHeight}px)`,
    WebkitTransform: `translate(0, ${scrollHeight}px)`
  };
  const treeNodeStyle = {
    transform: `translate(0, ${translateY}px)`,
    MsTransform: `translate(0, ${translateY}px)`,
    MozTransform: `translate(0, ${translateY}px)`,
    WebkitTransform: `translate(0, ${translateY}px)`
  };
  return {
    scrollHeight,
    translateY,
    visibleData,
    handleRowMounted,
    isVirtual,
    cursorStyle,
    treeNodeStyle,
    scrollToElement
  };
}

// ../../../../../private/tmp/tdesign-tree-visual/baseline/tree/TreeItem.tsx
var import_classnames9 = __toESM(require_classnames());
import React18, { forwardRef as forwardRef6, isValidElement as isValidElement2, useEffect as useEffect18, useRef as useRef16, useState as useState17 } from "react";
import { isFunction as isFunction5 } from "lodash-es";
import { CaretRightSmallIcon as TdCaretRightSmallIcon } from "tdesign-icons-react";

// packages/components/_util/ref.ts
var import_react_is = __toESM(require_react_is());
import { isValidElement } from "react";

// packages/components/_util/isFragment.ts
var REACT_ELEMENT_TYPE_18 = Symbol.for("react.element");
var REACT_ELEMENT_TYPE_19 = Symbol.for("react.transitional.element");
var REACT_FRAGMENT_TYPE = Symbol.for("react.fragment");
function isFragment(object) {
  return object && typeof object === "object" && (object.$$typeof === REACT_ELEMENT_TYPE_18 || object.$$typeof === REACT_ELEMENT_TYPE_19) && object.type === REACT_FRAGMENT_TYPE;
}

// packages/components/_util/ref.ts
var supportRef = (nodeOrComponent) => {
  if (!nodeOrComponent) {
    return false;
  }
  if (isReactElement(nodeOrComponent) && nodeOrComponent.props.propertyIsEnumerable("ref")) {
    return true;
  }
  const type = (0, import_react_is.isMemo)(nodeOrComponent) ? nodeOrComponent.type.type : nodeOrComponent.type;
  if (typeof type === "function" && !type.prototype?.render && type.$$typeof !== import_react_is.ForwardRef) {
    return false;
  }
  if (typeof nodeOrComponent === "function" && !nodeOrComponent.prototype?.render && nodeOrComponent.$$typeof !== import_react_is.ForwardRef) {
    return false;
  }
  return true;
};
function getRefDom(domRef) {
  if (domRef.current && typeof domRef.current === "object" && "currentElement" in domRef.current) {
    return domRef.current.currentElement;
  }
  return domRef.current;
}
function isReactElement(node) {
  return isValidElement(node) && !isFragment(node);
}
var supportNodeRef = (node) => isReactElement(node) && supportRef(node);
var getNodeRef = (node) => {
  if (node && isReactElement(node)) {
    const ele = node;
    return ele.props.propertyIsEnumerable("ref") ? ele.props.ref : ele.ref;
  }
  return null;
};
function composeRefs(...refs) {
  return (instance) => {
    for (const ref of refs) {
      if (typeof ref === "function") {
        ref(instance);
      } else if (ref) {
        ref.current = instance;
      }
    }
  };
}

// packages/components/checkbox/Checkbox.tsx
import React14 from "react";

// packages/components/_util/forwardRefWithStatics.ts
var import_hoist_non_react_statics = __toESM(require_hoist_non_react_statics_cjs());
import { forwardRef } from "react";
function forwardRefWithStatics(component, statics) {
  return (0, import_hoist_non_react_statics.default)(forwardRef(component), statics);
}

// packages/components/common/Check.tsx
var import_classnames5 = __toESM(require_classnames2());
import React12, { forwardRef as forwardRef5, useContext as useContext3 } from "react";
import { isBoolean as isBoolean3 } from "lodash-es";

// packages/components/_util/helper.ts
import { camelCase as camelCase2 } from "lodash-es";
function omit2(obj, fields) {
  const shallowCopy = {
    ...obj
  };
  for (let i = 0; i < fields.length; i++) {
    const key = fields[i];
    delete shallowCopy[key];
  }
  return shallowCopy;
}

// packages/components/tooltip/Tooltip.tsx
var import_classnames3 = __toESM(require_classnames2());
import React10, { forwardRef as forwardRef4, useEffect as useEffect12, useImperativeHandle as useImperativeHandle3, useRef as useRef13, useState as useState10 } from "react";

// packages/components/popup/Popup.tsx
var import_classnames = __toESM(require_classnames2());
import React7, { forwardRef as forwardRef3, useEffect as useEffect11, useImperativeHandle as useImperativeHandle2, useMemo as useMemo9, useRef as useRef11, useState as useState8 } from "react";
import { CSSTransition } from "react-transition-group";
import { debounce as debounce4, isFunction as isFunction4 } from "lodash-es";

// packages/components/common/Portal.tsx
import { forwardRef as forwardRef2, useEffect as useEffect7, useImperativeHandle, useMemo as useMemo5, useState as useState5 } from "react";
import { createPortal } from "react-dom";
function getAttach(attach, triggerNode) {
  if (!canUseDocument)
    return null;
  let el;
  if (typeof attach === "string") {
    el = document.querySelector(attach);
  }
  if (typeof attach === "function") {
    el = attach(triggerNode);
  }
  if (typeof attach === "object" && attach instanceof window.HTMLElement) {
    el = attach;
  }
  if (el && el.nodeType === 1)
    return el;
  return document.body;
}
var Portal = forwardRef2((props, ref) => {
  const { attach, children, triggerNode, style } = props;
  const { classPrefix } = useConfig_default();
  const [mounted, setMounted] = useState5(false);
  const container = useMemo5(() => {
    if (!canUseDocument)
      return null;
    const el = document.createElement("div");
    el.className = `${classPrefix}-portal-wrapper`;
    if (typeof style === "object") {
      Object.assign(el.style, style);
    }
    return el;
  }, [classPrefix]);
  useLayoutEffect_default(() => {
    if (!mounted)
      return;
    const parentElement = getAttach(attach, triggerNode);
    parentElement?.appendChild?.(container);
    return () => {
      parentElement?.removeChild?.(container);
    };
  }, [container, attach, triggerNode, mounted]);
  useEffect7(() => {
    if (!mounted) {
      setMounted(true);
    }
  }, []);
  useImperativeHandle(ref, () => container);
  return canUseDocument && mounted ? createPortal(children, container) : null;
});
Portal.displayName = "Portal";
var Portal_default = Portal;

// packages/components/hooks/useAnimation.ts
import { useCallback } from "react";
function useAnimation() {
  const { animation } = useConfig_default();
  const { expand, ripple, fade } = EAnimationType;
  const keepAnimation = useCallback(
    (type) => animation && !animation.exclude?.includes(type) && animation.include?.includes(type),
    [animation]
  );
  return {
    keepExpand: keepAnimation(expand),
    keepRipple: keepAnimation(ripple),
    keepFade: keepAnimation(fade)
  };
}

// packages/components/hooks/useAttach.ts
import { useMemo as useMemo6 } from "react";
var defaultAttach = "body";
var useAttach = (name, attach) => {
  const globalConfig2 = useConfig_default();
  const attachVal = useMemo6(
    () => attach || globalConfig2?.attach?.[name] || globalConfig2?.attach || defaultAttach,
    [name, attach, globalConfig2?.attach]
  );
  return attachVal;
};
var useAttach_default = useAttach;

// packages/components/hooks/useMutationObserver.ts
import { useEffect as useEffect8, useRef as useRef8 } from "react";
import { debounce, isEqual as isEqual2 } from "lodash-es";

// packages/components/hooks/useLatest.ts
import { useRef as useRef7 } from "react";
var useLatest = (value) => {
  const ref = useRef7(value);
  ref.current = value;
  return ref;
};
var useLatest_default = useLatest;

// packages/components/hooks/useMutationObserver.ts
var DEFAULT_OPTIONS = {
  debounceTime: 0,
  config: {
    attributes: true,
    childList: true,
    characterData: true,
    subtree: true
  }
};
function useMutationObservable(targetEl, cb, options) {
  const optionsRef = useRef8(null);
  const signalRef = useRef8(0);
  const callbackRef = useLatest_default(cb);
  const mergedOptions = {
    debounceTime: options?.debounceTime ?? DEFAULT_OPTIONS.debounceTime,
    config: {
      ...DEFAULT_OPTIONS.config,
      ...options?.config
    }
  };
  if (!isEqual2(mergedOptions, optionsRef.current)) {
    signalRef.current += 1;
  }
  optionsRef.current = mergedOptions;
  useEffect8(() => {
    if (!targetEl || !targetEl?.nodeType)
      return;
    let observer = null;
    try {
      const { debounceTime, config } = optionsRef.current;
      const mutationCallback = (...args) => {
        callbackRef.current(...args);
      };
      observer = new MutationObserver(debounceTime > 0 ? debounce(mutationCallback, debounceTime) : mutationCallback);
      observer.observe(targetEl, config);
    } catch (e) {
      console.error(e);
    }
    return () => {
      if (observer) {
        observer.disconnect();
        observer = null;
      }
    };
  }, [targetEl, signalRef.current]);
}

// packages/components/hooks/usePopper.ts
var import_react_fast_compare = __toESM(require_react_fast_compare());
import { useMemo as useMemo7, useRef as useRef9, useState as useState6 } from "react";
import { flushSync } from "react-dom";

// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/enums.js
var top = "top";
var bottom = "bottom";
var right = "right";
var left = "left";
var auto = "auto";
var basePlacements = [top, bottom, right, left];
var start = "start";
var end = "end";
var clippingParents = "clippingParents";
var viewport = "viewport";
var popper = "popper";
var reference = "reference";
var variationPlacements = /* @__PURE__ */ basePlacements.reduce(function(acc, placement) {
  return acc.concat([placement + "-" + start, placement + "-" + end]);
}, []);
var placements = /* @__PURE__ */ [].concat(basePlacements, [auto]).reduce(function(acc, placement) {
  return acc.concat([placement, placement + "-" + start, placement + "-" + end]);
}, []);
var beforeRead = "beforeRead";
var read = "read";
var afterRead = "afterRead";
var beforeMain = "beforeMain";
var main = "main";
var afterMain = "afterMain";
var beforeWrite = "beforeWrite";
var write = "write";
var afterWrite = "afterWrite";
var modifierPhases = [beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite];

// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getNodeName.js
function getNodeName(element) {
  return element ? (element.nodeName || "").toLowerCase() : null;
}

// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getWindow.js
function getWindow(node) {
  if (node == null) {
    return window;
  }
  if (node.toString() !== "[object Window]") {
    var ownerDocument = node.ownerDocument;
    return ownerDocument ? ownerDocument.defaultView || window : window;
  }
  return node;
}

// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/instanceOf.js
function isElement(node) {
  var OwnElement = getWindow(node).Element;
  return node instanceof OwnElement || node instanceof Element;
}
function isHTMLElement(node) {
  var OwnElement = getWindow(node).HTMLElement;
  return node instanceof OwnElement || node instanceof HTMLElement;
}
function isShadowRoot(node) {
  if (typeof ShadowRoot === "undefined") {
    return false;
  }
  var OwnElement = getWindow(node).ShadowRoot;
  return node instanceof OwnElement || node instanceof ShadowRoot;
}

// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/modifiers/applyStyles.js
function applyStyles(_ref) {
  var state = _ref.state;
  Object.keys(state.elements).forEach(function(name) {
    var style = state.styles[name] || {};
    var attributes = state.attributes[name] || {};
    var element = state.elements[name];
    if (!isHTMLElement(element) || !getNodeName(element)) {
      return;
    }
    Object.assign(element.style, style);
    Object.keys(attributes).forEach(function(name2) {
      var value = attributes[name2];
      if (value === false) {
        element.removeAttribute(name2);
      } else {
        element.setAttribute(name2, value === true ? "" : value);
      }
    });
  });
}
function effect(_ref2) {
  var state = _ref2.state;
  var initialStyles = {
    popper: {
      position: state.options.strategy,
      left: "0",
      top: "0",
      margin: "0"
    },
    arrow: {
      position: "absolute"
    },
    reference: {}
  };
  Object.assign(state.elements.popper.style, initialStyles.popper);
  state.styles = initialStyles;
  if (state.elements.arrow) {
    Object.assign(state.elements.arrow.style, initialStyles.arrow);
  }
  return function() {
    Object.keys(state.elements).forEach(function(name) {
      var element = state.elements[name];
      var attributes = state.attributes[name] || {};
      var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]);
      var style = styleProperties.reduce(function(style2, property) {
        style2[property] = "";
        return style2;
      }, {});
      if (!isHTMLElement(element) || !getNodeName(element)) {
        return;
      }
      Object.assign(element.style, style);
      Object.keys(attributes).forEach(function(attribute) {
        element.removeAttribute(attribute);
      });
    });
  };
}
var applyStyles_default = {
  name: "applyStyles",
  enabled: true,
  phase: "write",
  fn: applyStyles,
  effect,
  requires: ["computeStyles"]
};

// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/getBasePlacement.js
function getBasePlacement(placement) {
  return placement.split("-")[0];
}

// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/math.js
var max = Math.max;
var min = Math.min;
var round = Math.round;

// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/userAgent.js
function getUAString() {
  var uaData = navigator.userAgentData;
  if (uaData != null && uaData.brands && Array.isArray(uaData.brands)) {
    return uaData.brands.map(function(item) {
      return item.brand + "/" + item.version;
    }).join(" ");
  }
  return navigator.userAgent;
}

// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/isLayoutViewport.js
function isLayoutViewport() {
  return !/^((?!chrome|android).)*safari/i.test(getUAString());
}

// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js
function getBoundingClientRect(element, includeScale, isFixedStrategy) {
  if (includeScale === void 0) {
    includeScale = false;
  }
  if (isFixedStrategy === void 0) {
    isFixedStrategy = false;
  }
  var clientRect = element.getBoundingClientRect();
  var scaleX = 1;
  var scaleY = 1;
  if (includeScale && isHTMLElement(element)) {
    scaleX = element.offsetWidth > 0 ? round(clientRect.width) / element.offsetWidth || 1 : 1;
    scaleY = element.offsetHeight > 0 ? round(clientRect.height) / element.offsetHeight || 1 : 1;
  }
  var _ref = isElement(element) ? getWindow(element) : window, visualViewport = _ref.visualViewport;
  var addVisualOffsets = !isLayoutViewport() && isFixedStrategy;
  var x = (clientRect.left + (addVisualOffsets && visualViewport ? visualViewport.offsetLeft : 0)) / scaleX;
  var y = (clientRect.top + (addVisualOffsets && visualViewport ? visualViewport.offsetTop : 0)) / scaleY;
  var width = clientRect.width / scaleX;
  var height = clientRect.height / scaleY;
  return {
    width,
    height,
    top: y,
    right: x + width,
    bottom: y + height,
    left: x,
    x,
    y
  };
}

// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getLayoutRect.js
function getLayoutRect(element) {
  var clientRect = getBoundingClientRect(element);
  var width = element.offsetWidth;
  var height = element.offsetHeight;
  if (Math.abs(clientRect.width - width) <= 1) {
    width = clientRect.width;
  }
  if (Math.abs(clientRect.height - height) <= 1) {
    height = clientRect.height;
  }
  return {
    x: element.offsetLeft,
    y: element.offsetTop,
    width,
    height
  };
}

// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/contains.js
function contains(parent, child) {
  var rootNode = child.getRootNode && child.getRootNode();
  if (parent.contains(child)) {
    return true;
  } else if (rootNode && isShadowRoot(rootNode)) {
    var next = child;
    do {
      if (next && parent.isSameNode(next)) {
        return true;
      }
      next = next.parentNode || next.host;
    } while (next);
  }
  return false;
}

// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js
function getComputedStyle2(element) {
  return getWindow(element).getComputedStyle(element);
}

// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/isTableElement.js
function isTableElement(element) {
  return ["table", "td", "th"].indexOf(getNodeName(element)) >= 0;
}

// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js
function getDocumentElement(element) {
  return ((isElement(element) ? element.ownerDocument : element.document) || window.document).documentElement;
}

// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getParentNode.js
function getParentNode(element) {
  if (getNodeName(element) === "html") {
    return element;
  }
  return element.assignedSlot || element.parentNode || (isShadowRoot(element) ? element.host : null) || getDocumentElement(element);
}

// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js
function getTrueOffsetParent(element) {
  if (!isHTMLElement(element) || getComputedStyle2(element).position === "fixed") {
    return null;
  }
  return element.offsetParent;
}
function getContainingBlock(element) {
  var isFirefox = /firefox/i.test(getUAString());
  var isIE = /Trident/i.test(getUAString());
  if (isIE && isHTMLElement(element)) {
    var elementCss = getComputedStyle2(element);
    if (elementCss.position === "fixed") {
      return null;
    }
  }
  var currentNode = getParentNode(element);
  if (isShadowRoot(currentNode)) {
    currentNode = currentNode.host;
  }
  while (isHTMLElement(currentNode) && ["html", "body"].indexOf(getNodeName(currentNode)) < 0) {
    var css = getComputedStyle2(currentNode);
    if (css.transform !== "none" || css.perspective !== "none" || css.contain === "paint" || ["transform", "perspective"].indexOf(css.willChange) !== -1 || isFirefox && css.willChange === "filter" || isFirefox && css.filter && css.filter !== "none") {
      return currentNode;
    } else {
      currentNode = currentNode.parentNode;
    }
  }
  return null;
}
function getOffsetParent(element) {
  var window2 = getWindow(element);
  var offsetParent = getTrueOffsetParent(element);
  while (offsetParent && isTableElement(offsetParent) && getComputedStyle2(offsetParent).position === "static") {
    offsetParent = getTrueOffsetParent(offsetParent);
  }
  if (offsetParent && (getNodeName(offsetParent) === "html" || getNodeName(offsetParent) === "body" && getComputedStyle2(offsetParent).position === "static")) {
    return window2;
  }
  return offsetParent || getContainingBlock(element) || window2;
}

// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/getMainAxisFromPlacement.js
function getMainAxisFromPlacement(placement) {
  return ["top", "bottom"].indexOf(placement) >= 0 ? "x" : "y";
}

// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/within.js
function within(min2, value, max2) {
  return max(min2, min(value, max2));
}
function withinMaxClamp(min2, value, max2) {
  var v = within(min2, value, max2);
  return v > max2 ? max2 : v;
}

// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/getFreshSideObject.js
function getFreshSideObject() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}

// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/mergePaddingObject.js
function mergePaddingObject(paddingObject) {
  return Object.assign({}, getFreshSideObject(), paddingObject);
}

// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/expandToHashMap.js
function expandToHashMap(value, keys) {
  return keys.reduce(function(hashMap, key) {
    hashMap[key] = value;
    return hashMap;
  }, {});
}

// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/modifiers/arrow.js
var toPaddingObject = function toPaddingObject2(padding, state) {
  padding = typeof padding === "function" ? padding(Object.assign({}, state.rects, {
    placement: state.placement
  })) : padding;
  return mergePaddingObject(typeof padding !== "number" ? padding : expandToHashMap(padding, basePlacements));
};
function arrow(_ref) {
  var _state$modifiersData$;
  var state = _ref.state, name = _ref.name, options = _ref.options;
  var arrowElement = state.elements.arrow;
  var popperOffsets2 = state.modifiersData.popperOffsets;
  var basePlacement = getBasePlacement(state.placement);
  var axis = getMainAxisFromPlacement(basePlacement);
  var isVertical = [left, right].indexOf(basePlacement) >= 0;
  var len = isVertical ? "height" : "width";
  if (!arrowElement || !popperOffsets2) {
    return;
  }
  var paddingObject = toPaddingObject(options.padding, state);
  var arrowRect = getLayoutRect(arrowElement);
  var minProp = axis === "y" ? top : left;
  var maxProp = axis === "y" ? bottom : right;
  var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets2[axis] - state.rects.popper[len];
  var startDiff = popperOffsets2[axis] - state.rects.reference[axis];
  var arrowOffsetParent = getOffsetParent(arrowElement);
  var clientSize = arrowOffsetParent ? axis === "y" ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
  var centerToReference = endDiff / 2 - startDiff / 2;
  var min2 = paddingObject[minProp];
  var max2 = clientSize - arrowRect[len] - paddingObject[maxProp];
  var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
  var offset2 = within(min2, center, max2);
  var axisProp = axis;
  state.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset2, _state$modifiersData$.centerOffset = offset2 - center, _state$modifiersData$);
}
function effect2(_ref2) {
  var state = _ref2.state, options = _ref2.options;
  var _options$element = options.element, arrowElement = _options$element === void 0 ? "[data-popper-arrow]" : _options$element;
  if (arrowElement == null) {
    return;
  }
  if (typeof arrowElement === "string") {
    arrowElement = state.elements.popper.querySelector(arrowElement);
    if (!arrowElement) {
      return;
    }
  }
  if (!contains(state.elements.popper, arrowElement)) {
    return;
  }
  state.elements.arrow = arrowElement;
}
var arrow_default = {
  name: "arrow",
  enabled: true,
  phase: "main",
  fn: arrow,
  effect: effect2,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};

// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/getVariation.js
function getVariation(placement) {
  return placement.split("-")[1];
}

// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/modifiers/computeStyles.js
var unsetSides = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function roundOffsetsByDPR(_ref, win) {
  var x = _ref.x, y = _ref.y;
  var dpr = win.devicePixelRatio || 1;
  return {
    x: round(x * dpr) / dpr || 0,
    y: round(y * dpr) / dpr || 0
  };
}
function mapToStyles(_ref2) {
  var _Object$assign2;
  var popper2 = _ref2.popper, popperRect = _ref2.popperRect, placement = _ref2.placement, variation = _ref2.variation, offsets = _ref2.offsets, position = _ref2.position, gpuAcceleration = _ref2.gpuAcceleration, adaptive = _ref2.adaptive, roundOffsets = _ref2.roundOffsets, isFixed = _ref2.isFixed;
  var _offsets$x = offsets.x, x = _offsets$x === void 0 ? 0 : _offsets$x, _offsets$y = offsets.y, y = _offsets$y === void 0 ? 0 : _offsets$y;
  var _ref3 = typeof roundOffsets === "function" ? roundOffsets({
    x,
    y
  }) : {
    x,
    y
  };
  x = _ref3.x;
  y = _ref3.y;
  var hasX = offsets.hasOwnProperty("x");
  var hasY = offsets.hasOwnProperty("y");
  var sideX = left;
  var sideY = top;
  var win = window;
  if (adaptive) {
    var offsetParent = getOffsetParent(popper2);
    var heightProp = "clientHeight";
    var widthProp = "clientWidth";
    if (offsetParent === getWindow(popper2)) {
      offsetParent = getDocumentElement(popper2);
      if (getComputedStyle2(offsetParent).position !== "static" && position === "absolute") {
        heightProp = "scrollHeight";
        widthProp = "scrollWidth";
      }
    }
    offsetParent = offsetParent;
    if (placement === top || (placement === left || placement === right) && variation === end) {
      sideY = bottom;
      var offsetY = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.height : offsetParent[heightProp];
      y -= offsetY - popperRect.height;
      y *= gpuAcceleration ? 1 : -1;
    }
    if (placement === left || (placement === top || placement === bottom) && variation === end) {
      sideX = right;
      var offsetX = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.width : offsetParent[widthProp];
      x -= offsetX - popperRect.width;
      x *= gpuAcceleration ? 1 : -1;
    }
  }
  var commonStyles = Object.assign({
    position
  }, adaptive && unsetSides);
  var _ref4 = roundOffsets === true ? roundOffsetsByDPR({
    x,
    y
  }, getWindow(popper2)) : {
    x,
    y
  };
  x = _ref4.x;
  y = _ref4.y;
  if (gpuAcceleration) {
    var _Object$assign;
    return Object.assign({}, commonStyles, (_Object$assign = {}, _Object$assign[sideY] = hasY ? "0" : "", _Object$assign[sideX] = hasX ? "0" : "", _Object$assign.transform = (win.devicePixelRatio || 1) <= 1 ? "translate(" + x + "px, " + y + "px)" : "translate3d(" + x + "px, " + y + "px, 0)", _Object$assign));
  }
  return Object.assign({}, commonStyles, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y + "px" : "", _Object$assign2[sideX] = hasX ? x + "px" : "", _Object$assign2.transform = "", _Object$assign2));
}
function computeStyles(_ref5) {
  var state = _ref5.state, options = _ref5.options;
  var _options$gpuAccelerat = options.gpuAcceleration, gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat, _options$adaptive = options.adaptive, adaptive = _options$adaptive === void 0 ? true : _options$adaptive, _options$roundOffsets = options.roundOffsets, roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;
  var commonStyles = {
    placement: getBasePlacement(state.placement),
    variation: getVariation(state.placement),
    popper: state.elements.popper,
    popperRect: state.rects.popper,
    gpuAcceleration,
    isFixed: state.options.strategy === "fixed"
  };
  if (state.modifiersData.popperOffsets != null) {
    state.styles.popper = Object.assign({}, state.styles.popper, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.popperOffsets,
      position: state.options.strategy,
      adaptive,
      roundOffsets
    })));
  }
  if (state.modifiersData.arrow != null) {
    state.styles.arrow = Object.assign({}, state.styles.arrow, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.arrow,
      position: "absolute",
      adaptive: false,
      roundOffsets
    })));
  }
  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    "data-popper-placement": state.placement
  });
}
var computeStyles_default = {
  name: "computeStyles",
  enabled: true,
  phase: "beforeWrite",
  fn: computeStyles,
  data: {}
};

// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/modifiers/eventListeners.js
var passive = {
  passive: true
};
function effect3(_ref) {
  var state = _ref.state, instance = _ref.instance, options = _ref.options;
  var _options$scroll = options.scroll, scroll = _options$scroll === void 0 ? true : _options$scroll, _options$resize = options.resize, resize = _options$resize === void 0 ? true : _options$resize;
  var window2 = getWindow(state.elements.popper);
  var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);
  if (scroll) {
    scrollParents.forEach(function(scrollParent) {
      scrollParent.addEventListener("scroll", instance.update, passive);
    });
  }
  if (resize) {
    window2.addEventListener("resize", instance.update, passive);
  }
  return function() {
    if (scroll) {
      scrollParents.forEach(function(scrollParent) {
        scrollParent.removeEventListener("scroll", instance.update, passive);
      });
    }
    if (resize) {
      window2.removeEventListener("resize", instance.update, passive);
    }
  };
}
var eventListeners_default = {
  name: "eventListeners",
  enabled: true,
  phase: "write",
  fn: function fn() {
  },
  effect: effect3,
  data: {}
};

// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/getOppositePlacement.js
var hash = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, function(matched) {
    return hash[matched];
  });
}

// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/getOppositeVariationPlacement.js
var hash2 = {
  start: "end",
  end: "start"
};
function getOppositeVariationPlacement(placement) {
  return placement.replace(/start|end/g, function(matched) {
    return hash2[matched];
  });
}

// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getWindowScroll.js
function getWindowScroll(node) {
  var win = getWindow(node);
  var scrollLeft = win.pageXOffset;
  var scrollTop = win.pageYOffset;
  return {
    scrollLeft,
    scrollTop
  };
}

// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getWindowScrollBarX.js
function getWindowScrollBarX(element) {
  return getBoundingClientRect(getDocumentElement(element)).left + getWindowScroll(element).scrollLeft;
}

// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getViewportRect.js
function getViewportRect(element, strategy) {
  var win = getWindow(element);
  var html = getDocumentElement(element);
  var visualViewport = win.visualViewport;
  var width = html.clientWidth;
  var height = html.clientHeight;
  var x = 0;
  var y = 0;
  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height;
    var layoutViewport = isLayoutViewport();
    if (layoutViewport || !layoutViewport && strategy === "fixed") {
      x = visualViewport.offsetLeft;
      y = visualViewport.offsetTop;
    }
  }
  return {
    width,
    height,
    x: x + getWindowScrollBarX(element),
    y
  };
}

// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getDocumentRect.js
function getDocumentRect(element) {
  var _element$ownerDocumen;
  var html = getDocumentElement(element);
  var winScroll = getWindowScroll(element);
  var body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
  var width = max(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
  var height = max(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
  var x = -winScroll.scrollLeft + getWindowScrollBarX(element);
  var y = -winScroll.scrollTop;
  if (getComputedStyle2(body || html).direction === "rtl") {
    x += max(html.clientWidth, body ? body.clientWidth : 0) - width;
  }
  return {
    width,
    height,
    x,
    y
  };
}

// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/isScrollParent.js
function isScrollParent(element) {
  var _getComputedStyle = getComputedStyle2(element), overflow = _getComputedStyle.overflow, overflowX = _getComputedStyle.overflowX, overflowY = _getComputedStyle.overflowY;
  return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
}

// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getScrollParent.js
function getScrollParent(node) {
  if (["html", "body", "#document"].indexOf(getNodeName(node)) >= 0) {
    return node.ownerDocument.body;
  }
  if (isHTMLElement(node) && isScrollParent(node)) {
    return node;
  }
  return getScrollParent(getParentNode(node));
}

// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/listScrollParents.js
function listScrollParents(element, list) {
  var _element$ownerDocumen;
  if (list === void 0) {
    list = [];
  }
  var scrollParent = getScrollParent(element);
  var isBody = scrollParent === ((_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body);
  var win = getWindow(scrollParent);
  var target = isBody ? [win].concat(win.visualViewport || [], isScrollParent(scrollParent) ? scrollParent : []) : scrollParent;
  var updatedList = list.concat(target);
  return isBody ? updatedList : updatedList.concat(listScrollParents(getParentNode(target)));
}

// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/rectToClientRect.js
function rectToClientRect(rect) {
  return Object.assign({}, rect, {
    left: rect.x,
    top: rect.y,
    right: rect.x + rect.width,
    bottom: rect.y + rect.height
  });
}

// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getClippingRect.js
function getInnerBoundingClientRect(element, strategy) {
  var rect = getBoundingClientRect(element, false, strategy === "fixed");
  rect.top = rect.top + element.clientTop;
  rect.left = rect.left + element.clientLeft;
  rect.bottom = rect.top + element.clientHeight;
  rect.right = rect.left + element.clientWidth;
  rect.width = element.clientWidth;
  rect.height = element.clientHeight;
  rect.x = rect.left;
  rect.y = rect.top;
  return rect;
}
function getClientRectFromMixedType(element, clippingParent, strategy) {
  return clippingParent === viewport ? rectToClientRect(getViewportRect(element, strategy)) : isElement(clippingParent) ? getInnerBoundingClientRect(clippingParent, strategy) : rectToClientRect(getDocumentRect(getDocumentElement(element)));
}
function getClippingParents(element) {
  var clippingParents2 = listScrollParents(getParentNode(element));
  var canEscapeClipping = ["absolute", "fixed"].indexOf(getComputedStyle2(element).position) >= 0;
  var clipperElement = canEscapeClipping && isHTMLElement(element) ? getOffsetParent(element) : element;
  if (!isElement(clipperElement)) {
    return [];
  }
  return clippingParents2.filter(function(clippingParent) {
    return isElement(clippingParent) && contains(clippingParent, clipperElement) && getNodeName(clippingParent) !== "body";
  });
}
function getClippingRect(element, boundary, rootBoundary, strategy) {
  var mainClippingParents = boundary === "clippingParents" ? getClippingParents(element) : [].concat(boundary);
  var clippingParents2 = [].concat(mainClippingParents, [rootBoundary]);
  var firstClippingParent = clippingParents2[0];
  var clippingRect = clippingParents2.reduce(function(accRect, clippingParent) {
    var rect = getClientRectFromMixedType(element, clippingParent, strategy);
    accRect.top = max(rect.top, accRect.top);
    accRect.right = min(rect.right, accRect.right);
    accRect.bottom = min(rect.bottom, accRect.bottom);
    accRect.left = max(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromMixedType(element, firstClippingParent, strategy));
  clippingRect.width = clippingRect.right - clippingRect.left;
  clippingRect.height = clippingRect.bottom - clippingRect.top;
  clippingRect.x = clippingRect.left;
  clippingRect.y = clippingRect.top;
  return clippingRect;
}

// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/computeOffsets.js
function computeOffsets(_ref) {
  var reference2 = _ref.reference, element = _ref.element, placement = _ref.placement;
  var basePlacement = placement ? getBasePlacement(placement) : null;
  var variation = placement ? getVariation(placement) : null;
  var commonX = reference2.x + reference2.width / 2 - element.width / 2;
  var commonY = reference2.y + reference2.height / 2 - element.height / 2;
  var offsets;
  switch (basePlacement) {
    case top:
      offsets = {
        x: commonX,
        y: reference2.y - element.height
      };
      break;
    case bottom:
      offsets = {
        x: commonX,
        y: reference2.y + reference2.height
      };
      break;
    case right:
      offsets = {
        x: reference2.x + reference2.width,
        y: commonY
      };
      break;
    case left:
      offsets = {
        x: reference2.x - element.width,
        y: commonY
      };
      break;
    default:
      offsets = {
        x: reference2.x,
        y: reference2.y
      };
  }
  var mainAxis = basePlacement ? getMainAxisFromPlacement(basePlacement) : null;
  if (mainAxis != null) {
    var len = mainAxis === "y" ? "height" : "width";
    switch (variation) {
      case start:
        offsets[mainAxis] = offsets[mainAxis] - (reference2[len] / 2 - element[len] / 2);
        break;
      case end:
        offsets[mainAxis] = offsets[mainAxis] + (reference2[len] / 2 - element[len] / 2);
        break;
      default:
    }
  }
  return offsets;
}

// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/detectOverflow.js
function detectOverflow(state, options) {
  if (options === void 0) {
    options = {};
  }
  var _options = options, _options$placement = _options.placement, placement = _options$placement === void 0 ? state.placement : _options$placement, _options$strategy = _options.strategy, strategy = _options$strategy === void 0 ? state.strategy : _options$strategy, _options$boundary = _options.boundary, boundary = _options$boundary === void 0 ? clippingParents : _options$boundary, _options$rootBoundary = _options.rootBoundary, rootBoundary = _options$rootBoundary === void 0 ? viewport : _options$rootBoundary, _options$elementConte = _options.elementContext, elementContext = _options$elementConte === void 0 ? popper : _options$elementConte, _options$altBoundary = _options.altBoundary, altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary, _options$padding = _options.padding, padding = _options$padding === void 0 ? 0 : _options$padding;
  var paddingObject = mergePaddingObject(typeof padding !== "number" ? padding : expandToHashMap(padding, basePlacements));
  var altContext = elementContext === popper ? reference : popper;
  var popperRect = state.rects.popper;
  var element = state.elements[altBoundary ? altContext : elementContext];
  var clippingClientRect = getClippingRect(isElement(element) ? element : element.contextElement || getDocumentElement(state.elements.popper), boundary, rootBoundary, strategy);
  var referenceClientRect = getBoundingClientRect(state.elements.reference);
  var popperOffsets2 = computeOffsets({
    reference: referenceClientRect,
    element: popperRect,
    strategy: "absolute",
    placement
  });
  var popperClientRect = rectToClientRect(Object.assign({}, popperRect, popperOffsets2));
  var elementClientRect = elementContext === popper ? popperClientRect : referenceClientRect;
  var overflowOffsets = {
    top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
    bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
    left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
    right: elementClientRect.right - clippingClientRect.right + paddingObject.right
  };
  var offsetData = state.modifiersData.offset;
  if (elementContext === popper && offsetData) {
    var offset2 = offsetData[placement];
    Object.keys(overflowOffsets).forEach(function(key) {
      var multiply = [right, bottom].indexOf(key) >= 0 ? 1 : -1;
      var axis = [top, bottom].indexOf(key) >= 0 ? "y" : "x";
      overflowOffsets[key] += offset2[axis] * multiply;
    });
  }
  return overflowOffsets;
}

// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/computeAutoPlacement.js
function computeAutoPlacement(state, options) {
  if (options === void 0) {
    options = {};
  }
  var _options = options, placement = _options.placement, boundary = _options.boundary, rootBoundary = _options.rootBoundary, padding = _options.padding, flipVariations = _options.flipVariations, _options$allowedAutoP = _options.allowedAutoPlacements, allowedAutoPlacements = _options$allowedAutoP === void 0 ? placements : _options$allowedAutoP;
  var variation = getVariation(placement);
  var placements2 = variation ? flipVariations ? variationPlacements : variationPlacements.filter(function(placement2) {
    return getVariation(placement2) === variation;
  }) : basePlacements;
  var allowedPlacements = placements2.filter(function(placement2) {
    return allowedAutoPlacements.indexOf(placement2) >= 0;
  });
  if (allowedPlacements.length === 0) {
    allowedPlacements = placements2;
  }
  var overflows = allowedPlacements.reduce(function(acc, placement2) {
    acc[placement2] = detectOverflow(state, {
      placement: placement2,
      boundary,
      rootBoundary,
      padding
    })[getBasePlacement(placement2)];
    return acc;
  }, {});
  return Object.keys(overflows).sort(function(a, b) {
    return overflows[a] - overflows[b];
  });
}

// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/modifiers/flip.js
function getExpandedFallbackPlacements(placement) {
  if (getBasePlacement(placement) === auto) {
    return [];
  }
  var oppositePlacement = getOppositePlacement(placement);
  return [getOppositeVariationPlacement(placement), oppositePlacement, getOppositeVariationPlacement(oppositePlacement)];
}
function flip(_ref) {
  var state = _ref.state, options = _ref.options, name = _ref.name;
  if (state.modifiersData[name]._skip) {
    return;
  }
  var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis, specifiedFallbackPlacements = options.fallbackPlacements, padding = options.padding, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, _options$flipVariatio = options.flipVariations, flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio, allowedAutoPlacements = options.allowedAutoPlacements;
  var preferredPlacement = state.options.placement;
  var basePlacement = getBasePlacement(preferredPlacement);
  var isBasePlacement = basePlacement === preferredPlacement;
  var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [getOppositePlacement(preferredPlacement)] : getExpandedFallbackPlacements(preferredPlacement));
  var placements2 = [preferredPlacement].concat(fallbackPlacements).reduce(function(acc, placement2) {
    return acc.concat(getBasePlacement(placement2) === auto ? computeAutoPlacement(state, {
      placement: placement2,
      boundary,
      rootBoundary,
      padding,
      flipVariations,
      allowedAutoPlacements
    }) : placement2);
  }, []);
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var checksMap = /* @__PURE__ */ new Map();
  var makeFallbackChecks = true;
  var firstFittingPlacement = placements2[0];
  for (var i = 0; i < placements2.length; i++) {
    var placement = placements2[i];
    var _basePlacement = getBasePlacement(placement);
    var isStartVariation = getVariation(placement) === start;
    var isVertical = [top, bottom].indexOf(_basePlacement) >= 0;
    var len = isVertical ? "width" : "height";
    var overflow = detectOverflow(state, {
      placement,
      boundary,
      rootBoundary,
      altBoundary,
      padding
    });
    var mainVariationSide = isVertical ? isStartVariation ? right : left : isStartVariation ? bottom : top;
    if (referenceRect[len] > popperRect[len]) {
      mainVariationSide = getOppositePlacement(mainVariationSide);
    }
    var altVariationSide = getOppositePlacement(mainVariationSide);
    var checks = [];
    if (checkMainAxis) {
      checks.push(overflow[_basePlacement] <= 0);
    }
    if (checkAltAxis) {
      checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
    }
    if (checks.every(function(check) {
      return check;
    })) {
      firstFittingPlacement = placement;
      makeFallbackChecks = false;
      break;
    }
    checksMap.set(placement, checks);
  }
  if (makeFallbackChecks) {
    var numberOfChecks = flipVariations ? 3 : 1;
    var _loop = function _loop2(_i2) {
      var fittingPlacement = placements2.find(function(placement2) {
        var checks2 = checksMap.get(placement2);
        if (checks2) {
          return checks2.slice(0, _i2).every(function(check) {
            return check;
          });
        }
      });
      if (fittingPlacement) {
        firstFittingPlacement = fittingPlacement;
        return "break";
      }
    };
    for (var _i = numberOfChecks; _i > 0; _i--) {
      var _ret = _loop(_i);
      if (_ret === "break")
        break;
    }
  }
  if (state.placement !== firstFittingPlacement) {
    state.modifiersData[name]._skip = true;
    state.placement = firstFittingPlacement;
    state.reset = true;
  }
}
var flip_default = {
  name: "flip",
  enabled: true,
  phase: "main",
  fn: flip,
  requiresIfExists: ["offset"],
  data: {
    _skip: false
  }
};

// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/modifiers/hide.js
function getSideOffsets(overflow, rect, preventedOffsets) {
  if (preventedOffsets === void 0) {
    preventedOffsets = {
      x: 0,
      y: 0
    };
  }
  return {
    top: overflow.top - rect.height - preventedOffsets.y,
    right: overflow.right - rect.width + preventedOffsets.x,
    bottom: overflow.bottom - rect.height + preventedOffsets.y,
    left: overflow.left - rect.width - preventedOffsets.x
  };
}
function isAnySideFullyClipped(overflow) {
  return [top, right, bottom, left].some(function(side) {
    return overflow[side] >= 0;
  });
}
function hide(_ref) {
  var state = _ref.state, name = _ref.name;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var preventedOffsets = state.modifiersData.preventOverflow;
  var referenceOverflow = detectOverflow(state, {
    elementContext: "reference"
  });
  var popperAltOverflow = detectOverflow(state, {
    altBoundary: true
  });
  var referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect);
  var popperEscapeOffsets = getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);
  var isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets);
  var hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets);
  state.modifiersData[name] = {
    referenceClippingOffsets,
    popperEscapeOffsets,
    isReferenceHidden,
    hasPopperEscaped
  };
  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    "data-popper-reference-hidden": isReferenceHidden,
    "data-popper-escaped": hasPopperEscaped
  });
}
var hide_default = {
  name: "hide",
  enabled: true,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: hide
};

// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/modifiers/offset.js
function distanceAndSkiddingToXY(placement, rects, offset2) {
  var basePlacement = getBasePlacement(placement);
  var invertDistance = [left, top].indexOf(basePlacement) >= 0 ? -1 : 1;
  var _ref = typeof offset2 === "function" ? offset2(Object.assign({}, rects, {
    placement
  })) : offset2, skidding = _ref[0], distance = _ref[1];
  skidding = skidding || 0;
  distance = (distance || 0) * invertDistance;
  return [left, right].indexOf(basePlacement) >= 0 ? {
    x: distance,
    y: skidding
  } : {
    x: skidding,
    y: distance
  };
}
function offset(_ref2) {
  var state = _ref2.state, options = _ref2.options, name = _ref2.name;
  var _options$offset = options.offset, offset2 = _options$offset === void 0 ? [0, 0] : _options$offset;
  var data = placements.reduce(function(acc, placement) {
    acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset2);
    return acc;
  }, {});
  var _data$state$placement = data[state.placement], x = _data$state$placement.x, y = _data$state$placement.y;
  if (state.modifiersData.popperOffsets != null) {
    state.modifiersData.popperOffsets.x += x;
    state.modifiersData.popperOffsets.y += y;
  }
  state.modifiersData[name] = data;
}
var offset_default = {
  name: "offset",
  enabled: true,
  phase: "main",
  requires: ["popperOffsets"],
  fn: offset
};

// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/modifiers/popperOffsets.js
function popperOffsets(_ref) {
  var state = _ref.state, name = _ref.name;
  state.modifiersData[name] = computeOffsets({
    reference: state.rects.reference,
    element: state.rects.popper,
    strategy: "absolute",
    placement: state.placement
  });
}
var popperOffsets_default = {
  name: "popperOffsets",
  enabled: true,
  phase: "read",
  fn: popperOffsets,
  data: {}
};

// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/getAltAxis.js
function getAltAxis(axis) {
  return axis === "x" ? "y" : "x";
}

// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/modifiers/preventOverflow.js
function preventOverflow(_ref) {
  var state = _ref.state, options = _ref.options, name = _ref.name;
  var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, padding = options.padding, _options$tether = options.tether, tether = _options$tether === void 0 ? true : _options$tether, _options$tetherOffset = options.tetherOffset, tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
  var overflow = detectOverflow(state, {
    boundary,
    rootBoundary,
    padding,
    altBoundary
  });
  var basePlacement = getBasePlacement(state.placement);
  var variation = getVariation(state.placement);
  var isBasePlacement = !variation;
  var mainAxis = getMainAxisFromPlacement(basePlacement);
  var altAxis = getAltAxis(mainAxis);
  var popperOffsets2 = state.modifiersData.popperOffsets;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var tetherOffsetValue = typeof tetherOffset === "function" ? tetherOffset(Object.assign({}, state.rects, {
    placement: state.placement
  })) : tetherOffset;
  var normalizedTetherOffsetValue = typeof tetherOffsetValue === "number" ? {
    mainAxis: tetherOffsetValue,
    altAxis: tetherOffsetValue
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, tetherOffsetValue);
  var offsetModifierState = state.modifiersData.offset ? state.modifiersData.offset[state.placement] : null;
  var data = {
    x: 0,
    y: 0
  };
  if (!popperOffsets2) {
    return;
  }
  if (checkMainAxis) {
    var _offsetModifierState$;
    var mainSide = mainAxis === "y" ? top : left;
    var altSide = mainAxis === "y" ? bottom : right;
    var len = mainAxis === "y" ? "height" : "width";
    var offset2 = popperOffsets2[mainAxis];
    var min2 = offset2 + overflow[mainSide];
    var max2 = offset2 - overflow[altSide];
    var additive = tether ? -popperRect[len] / 2 : 0;
    var minLen = variation === start ? referenceRect[len] : popperRect[len];
    var maxLen = variation === start ? -popperRect[len] : -referenceRect[len];
    var arrowElement = state.elements.arrow;
    var arrowRect = tether && arrowElement ? getLayoutRect(arrowElement) : {
      width: 0,
      height: 0
    };
    var arrowPaddingObject = state.modifiersData["arrow#persistent"] ? state.modifiersData["arrow#persistent"].padding : getFreshSideObject();
    var arrowPaddingMin = arrowPaddingObject[mainSide];
    var arrowPaddingMax = arrowPaddingObject[altSide];
    var arrowLen = within(0, referenceRect[len], arrowRect[len]);
    var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis : minLen - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis;
    var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis : maxLen + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis;
    var arrowOffsetParent = state.elements.arrow && getOffsetParent(state.elements.arrow);
    var clientOffset = arrowOffsetParent ? mainAxis === "y" ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
    var offsetModifierValue = (_offsetModifierState$ = offsetModifierState == null ? void 0 : offsetModifierState[mainAxis]) != null ? _offsetModifierState$ : 0;
    var tetherMin = offset2 + minOffset - offsetModifierValue - clientOffset;
    var tetherMax = offset2 + maxOffset - offsetModifierValue;
    var preventedOffset = within(tether ? min(min2, tetherMin) : min2, offset2, tether ? max(max2, tetherMax) : max2);
    popperOffsets2[mainAxis] = preventedOffset;
    data[mainAxis] = preventedOffset - offset2;
  }
  if (checkAltAxis) {
    var _offsetModifierState$2;
    var _mainSide = mainAxis === "x" ? top : left;
    var _altSide = mainAxis === "x" ? bottom : right;
    var _offset = popperOffsets2[altAxis];
    var _len = altAxis === "y" ? "height" : "width";
    var _min = _offset + overflow[_mainSide];
    var _max = _offset - overflow[_altSide];
    var isOriginSide = [top, left].indexOf(basePlacement) !== -1;
    var _offsetModifierValue = (_offsetModifierState$2 = offsetModifierState == null ? void 0 : offsetModifierState[altAxis]) != null ? _offsetModifierState$2 : 0;
    var _tetherMin = isOriginSide ? _min : _offset - referenceRect[_len] - popperRect[_len] - _offsetModifierValue + normalizedTetherOffsetValue.altAxis;
    var _tetherMax = isOriginSide ? _offset + referenceRect[_len] + popperRect[_len] - _offsetModifierValue - normalizedTetherOffsetValue.altAxis : _max;
    var _preventedOffset = tether && isOriginSide ? withinMaxClamp(_tetherMin, _offset, _tetherMax) : within(tether ? _tetherMin : _min, _offset, tether ? _tetherMax : _max);
    popperOffsets2[altAxis] = _preventedOffset;
    data[altAxis] = _preventedOffset - _offset;
  }
  state.modifiersData[name] = data;
}
var preventOverflow_default = {
  name: "preventOverflow",
  enabled: true,
  phase: "main",
  fn: preventOverflow,
  requiresIfExists: ["offset"]
};

// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getHTMLElementScroll.js
function getHTMLElementScroll(element) {
  return {
    scrollLeft: element.scrollLeft,
    scrollTop: element.scrollTop
  };
}

// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getNodeScroll.js
function getNodeScroll(node) {
  if (node === getWindow(node) || !isHTMLElement(node)) {
    return getWindowScroll(node);
  } else {
    return getHTMLElementScroll(node);
  }
}

// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getCompositeRect.js
function isElementScaled(element) {
  var rect = element.getBoundingClientRect();
  var scaleX = round(rect.width) / element.offsetWidth || 1;
  var scaleY = round(rect.height) / element.offsetHeight || 1;
  return scaleX !== 1 || scaleY !== 1;
}
function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
  if (isFixed === void 0) {
    isFixed = false;
  }
  var isOffsetParentAnElement = isHTMLElement(offsetParent);
  var offsetParentIsScaled = isHTMLElement(offsetParent) && isElementScaled(offsetParent);
  var documentElement = getDocumentElement(offsetParent);
  var rect = getBoundingClientRect(elementOrVirtualElement, offsetParentIsScaled, isFixed);
  var scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  var offsets = {
    x: 0,
    y: 0
  };
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== "body" || isScrollParent(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isHTMLElement(offsetParent)) {
      offsets = getBoundingClientRect(offsetParent, true);
      offsets.x += offsetParent.clientLeft;
      offsets.y += offsetParent.clientTop;
    } else if (documentElement) {
      offsets.x = getWindowScrollBarX(documentElement);
    }
  }
  return {
    x: rect.left + scroll.scrollLeft - offsets.x,
    y: rect.top + scroll.scrollTop - offsets.y,
    width: rect.width,
    height: rect.height
  };
}

// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/orderModifiers.js
function order(modifiers) {
  var map = /* @__PURE__ */ new Map();
  var visited = /* @__PURE__ */ new Set();
  var result = [];
  modifiers.forEach(function(modifier) {
    map.set(modifier.name, modifier);
  });
  function sort(modifier) {
    visited.add(modifier.name);
    var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
    requires.forEach(function(dep) {
      if (!visited.has(dep)) {
        var depModifier = map.get(dep);
        if (depModifier) {
          sort(depModifier);
        }
      }
    });
    result.push(modifier);
  }
  modifiers.forEach(function(modifier) {
    if (!visited.has(modifier.name)) {
      sort(modifier);
    }
  });
  return result;
}
function orderModifiers(modifiers) {
  var orderedModifiers = order(modifiers);
  return modifierPhases.reduce(function(acc, phase) {
    return acc.concat(orderedModifiers.filter(function(modifier) {
      return modifier.phase === phase;
    }));
  }, []);
}

// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/debounce.js
function debounce2(fn2) {
  var pending;
  return function() {
    if (!pending) {
      pending = new Promise(function(resolve) {
        Promise.resolve().then(function() {
          pending = void 0;
          resolve(fn2());
        });
      });
    }
    return pending;
  };
}

// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/mergeByName.js
function mergeByName(modifiers) {
  var merged = modifiers.reduce(function(merged2, current) {
    var existing = merged2[current.name];
    merged2[current.name] = existing ? Object.assign({}, existing, current, {
      options: Object.assign({}, existing.options, current.options),
      data: Object.assign({}, existing.data, current.data)
    }) : current;
    return merged2;
  }, {});
  return Object.keys(merged).map(function(key) {
    return merged[key];
  });
}

// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/createPopper.js
var DEFAULT_OPTIONS2 = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function areValidElements() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  return !args.some(function(element) {
    return !(element && typeof element.getBoundingClientRect === "function");
  });
}
function popperGenerator(generatorOptions) {
  if (generatorOptions === void 0) {
    generatorOptions = {};
  }
  var _generatorOptions = generatorOptions, _generatorOptions$def = _generatorOptions.defaultModifiers, defaultModifiers2 = _generatorOptions$def === void 0 ? [] : _generatorOptions$def, _generatorOptions$def2 = _generatorOptions.defaultOptions, defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS2 : _generatorOptions$def2;
  return function createPopper2(reference2, popper2, options) {
    if (options === void 0) {
      options = defaultOptions;
    }
    var state = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, DEFAULT_OPTIONS2, defaultOptions),
      modifiersData: {},
      elements: {
        reference: reference2,
        popper: popper2
      },
      attributes: {},
      styles: {}
    };
    var effectCleanupFns = [];
    var isDestroyed = false;
    var instance = {
      state,
      setOptions: function setOptions(setOptionsAction) {
        var options2 = typeof setOptionsAction === "function" ? setOptionsAction(state.options) : setOptionsAction;
        cleanupModifierEffects();
        state.options = Object.assign({}, defaultOptions, state.options, options2);
        state.scrollParents = {
          reference: isElement(reference2) ? listScrollParents(reference2) : reference2.contextElement ? listScrollParents(reference2.contextElement) : [],
          popper: listScrollParents(popper2)
        };
        var orderedModifiers = orderModifiers(mergeByName([].concat(defaultModifiers2, state.options.modifiers)));
        state.orderedModifiers = orderedModifiers.filter(function(m) {
          return m.enabled;
        });
        runModifierEffects();
        return instance.update();
      },
      forceUpdate: function forceUpdate() {
        if (isDestroyed) {
          return;
        }
        var _state$elements = state.elements, reference3 = _state$elements.reference, popper3 = _state$elements.popper;
        if (!areValidElements(reference3, popper3)) {
          return;
        }
        state.rects = {
          reference: getCompositeRect(reference3, getOffsetParent(popper3), state.options.strategy === "fixed"),
          popper: getLayoutRect(popper3)
        };
        state.reset = false;
        state.placement = state.options.placement;
        state.orderedModifiers.forEach(function(modifier) {
          return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
        });
        for (var index = 0; index < state.orderedModifiers.length; index++) {
          if (state.reset === true) {
            state.reset = false;
            index = -1;
            continue;
          }
          var _state$orderedModifie = state.orderedModifiers[index], fn2 = _state$orderedModifie.fn, _state$orderedModifie2 = _state$orderedModifie.options, _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2, name = _state$orderedModifie.name;
          if (typeof fn2 === "function") {
            state = fn2({
              state,
              options: _options,
              name,
              instance
            }) || state;
          }
        }
      },
      update: debounce2(function() {
        return new Promise(function(resolve) {
          instance.forceUpdate();
          resolve(state);
        });
      }),
      destroy: function destroy() {
        cleanupModifierEffects();
        isDestroyed = true;
      }
    };
    if (!areValidElements(reference2, popper2)) {
      return instance;
    }
    instance.setOptions(options).then(function(state2) {
      if (!isDestroyed && options.onFirstUpdate) {
        options.onFirstUpdate(state2);
      }
    });
    function runModifierEffects() {
      state.orderedModifiers.forEach(function(_ref) {
        var name = _ref.name, _ref$options = _ref.options, options2 = _ref$options === void 0 ? {} : _ref$options, effect4 = _ref.effect;
        if (typeof effect4 === "function") {
          var cleanupFn = effect4({
            state,
            name,
            instance,
            options: options2
          });
          var noopFn = function noopFn2() {
          };
          effectCleanupFns.push(cleanupFn || noopFn);
        }
      });
    }
    function cleanupModifierEffects() {
      effectCleanupFns.forEach(function(fn2) {
        return fn2();
      });
      effectCleanupFns = [];
    }
    return instance;
  };
}

// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/popper.js
var defaultModifiers = [eventListeners_default, popperOffsets_default, computeStyles_default, applyStyles_default, offset_default, flip_default, preventOverflow_default, arrow_default, hide_default];
var createPopper = /* @__PURE__ */ popperGenerator({
  defaultModifiers
});

// packages/components/hooks/usePopper.ts
var EMPTY_MODIFIERS = [];
var fromEntries = (entries) => entries.reduce((acc, [key, value]) => {
  acc[key] = value;
  return acc;
}, {});
var usePopper = (referenceElement, popperElement, options = {}) => {
  const prevOptions = useRef9(null);
  const optionsWithDefaults = {
    onFirstUpdate: options.onFirstUpdate,
    placement: options.placement || "bottom",
    strategy: options.strategy || "absolute",
    modifiers: options.modifiers || EMPTY_MODIFIERS
  };
  const [state, setState] = useState6({
    styles: {
      popper: {
        position: optionsWithDefaults.strategy,
        left: "0",
        top: "0"
      },
      arrow: {
        position: "absolute"
      }
    },
    attributes: {}
  });
  const updateStateModifier = useMemo7(
    () => ({
      name: "updateState",
      enabled: true,
      phase: "write",
      fn: ({ state: state2 }) => {
        const elements = Object.keys(state2.elements);
        flushSync(() => {
          setState({
            styles: fromEntries(elements.map((element) => [element, state2.styles[element] || {}])),
            attributes: fromEntries(elements.map((element) => [element, state2.attributes[element]]))
          });
        });
      },
      requires: ["computeStyles"]
    }),
    []
  );
  const popperOptions = useMemo7(() => {
    const newOptions = {
      onFirstUpdate: optionsWithDefaults.onFirstUpdate,
      placement: optionsWithDefaults.placement,
      strategy: optionsWithDefaults.strategy,
      modifiers: [...optionsWithDefaults.modifiers, updateStateModifier, { name: "applyStyles", enabled: false }]
    };
    if ((0, import_react_fast_compare.default)(prevOptions.current, newOptions)) {
      return prevOptions.current || newOptions;
    }
    prevOptions.current = newOptions;
    return newOptions;
  }, [
    optionsWithDefaults.onFirstUpdate,
    optionsWithDefaults.placement,
    optionsWithDefaults.strategy,
    optionsWithDefaults.modifiers,
    updateStateModifier
  ]);
  const popperInstanceRef = useRef9(null);
  useLayoutEffect_default(() => {
    if (popperInstanceRef.current) {
      popperInstanceRef.current.setOptions(popperOptions);
    }
  }, [popperOptions]);
  useLayoutEffect_default(() => {
    if (referenceElement == null || popperElement == null) {
      return;
    }
    const createPopper2 = options.createPopper || createPopper;
    const popperInstance = createPopper2(referenceElement, popperElement, popperOptions);
    popperInstanceRef.current = popperInstance;
    return () => {
      popperInstance.destroy();
      popperInstanceRef.current = null;
    };
  }, [referenceElement, popperElement, options.createPopper]);
  return {
    attributes: state.attributes,
    styles: state.styles,
    state: popperInstanceRef.current?.state,
    destroy: popperInstanceRef.current?.destroy,
    forceUpdate: popperInstanceRef.current?.forceUpdate,
    update: popperInstanceRef.current?.update,
    setOptions: popperInstanceRef.current?.setOptions
  };
};
var usePopper_default = usePopper;

// packages/components/hooks/useWindowSize.ts
import { useEffect as useEffect9, useState as useState7 } from "react";
import { debounce as debounce3 } from "lodash-es";
function useWindowSize() {
  const [size, setSize] = useState7(getWindowSize);
  useEffect9(() => {
    function handleResize() {
      setSize(getWindowSize());
    }
    const debounceResize = debounce3(handleResize, 400);
    window.addEventListener("resize", debounceResize);
    return () => {
      window.removeEventListener("resize", debounceResize);
      debounceResize.cancel();
    };
  }, []);
  return size;
}
var useWindowSize_default = useWindowSize;

// packages/components/popup/defaultProps.ts
var popupDefaultProps = {
  destroyOnClose: false,
  hideEmptyPopup: false,
  placement: "top",
  showArrow: false,
  trigger: "hover"
};

// packages/components/popup/hooks/useTrigger.tsx
import React6, { useCallback as useCallback2, useEffect as useEffect10, useMemo as useMemo8, useRef as useRef10 } from "react";

// packages/components/_util/listener.ts
var on = (() => {
  if (canUseDocument && document.addEventListener) {
    return (element, event, handler, options) => {
      if (element && event && handler) {
        element.addEventListener(event, handler, options ?? false);
      }
    };
  }
  return (element, event, handler) => {
    if (element && event && handler) {
      element.attachEvent(`on${event}`, handler);
    }
  };
})();
var off = (() => {
  if (canUseDocument && document.removeEventListener) {
    return (element, event, handler, options) => {
      if (element && event) {
        element.removeEventListener(event, handler, options ?? false);
      }
    };
  }
  return (element, event, handler) => {
    if (element && event) {
      element.detachEvent(`on${event}`, handler);
    }
  };
})();

// packages/components/popup/hooks/useTrigger.tsx
var ESC_KEY = "Escape";
var HOVER_GAP_EXIT_DELAY = 150;
var isEventFromDisabledElement = (e, container) => {
  const target = e.target;
  const disabledEl = target?.closest?.("[disabled]");
  return !!(disabledEl && container.contains(disabledEl));
};
var isNodeInside = (container, node) => {
  return !!(container && node instanceof Node && (container === node || container.contains(node)));
};
var hasLayoutRect = (rect) => rect.width > 0 || rect.height > 0;
var isLeavingToward = (e, fromEl, toEl) => {
  if (!fromEl || !toEl)
    return false;
  const from = fromEl.getBoundingClientRect();
  const to = toEl.getBoundingClientRect();
  if (!hasLayoutRect(from) || !hasLayoutRect(to))
    return false;
  const dx = to.left + to.width / 2 - (from.left + from.width / 2);
  const dy = to.top + to.height / 2 - (from.top + from.height / 2);
  const leaveX = e.clientX - (from.left + from.width / 2);
  const leaveY = e.clientY - (from.top + from.height / 2);
  return leaveX * dx + leaveY * dy > 0;
};
function useTrigger({
  triggerElement,
  content,
  disabled,
  trigger,
  visible,
  onVisibleChange,
  delay,
  popupElement
}) {
  const { classPrefix } = useConfig_default();
  const triggerElementIsString = typeof triggerElement === "string";
  const triggerRef = useRef10(null);
  const hasPopupMouseDown = useRef10(false);
  const visibleTimer = useRef10(null);
  const popupElementRef = useLatest_default(popupElement);
  const visibleRef = useLatest_default(visible);
  const shouldToggle = useMemo8(() => {
    if (disabled)
      return false;
    return content === 0 ? true : !!content;
  }, [disabled, content]);
  const [appearDelay = 0, exitDelay = 0] = useMemo8(() => {
    if (Array.isArray(delay))
      return delay;
    return [delay, delay];
  }, [delay]);
  function callFuncWithDelay({ delay: delay2, callback }) {
    clearTimeout(visibleTimer.current);
    if (delay2) {
      visibleTimer.current = setTimeout(callback, delay2);
    } else {
      callback();
    }
  }
  const getTriggerElement = useCallback2(() => {
    if (!canUseDocument)
      return null;
    if (triggerElementIsString)
      return document.querySelector(triggerElement);
    const element = getRefDom(triggerRef);
    return element instanceof Element ? element : null;
  }, [triggerElementIsString, triggerElement]);
  const handleMouseEnter = (e) => {
    if (trigger !== "hover")
      return;
    callFuncWithDelay({
      delay: appearDelay,
      callback: () => {
        if (visibleRef.current)
          return;
        onVisibleChange(true, { e, trigger: "trigger-element-hover" });
      }
    });
  };
  const handlePopupMouseEnter = () => {
    if (trigger !== "hover")
      return;
    clearTimeout(visibleTimer.current);
  };
  const handleMouseLeave = (e) => {
    if (trigger !== "hover")
      return;
    const { buttons } = e;
    if (typeof buttons === "number" && buttons !== 0)
      return;
    const relatedTarget = e.relatedTarget;
    const triggerEl = getTriggerElement();
    const currentPopup = popupElementRef.current;
    const closestPopup = relatedTarget?.closest?.(`.${classPrefix}-popup`);
    const isMovingToCurrentPopup = currentPopup ? currentPopup === closestPopup || isNodeInside(currentPopup, relatedTarget) : !!closestPopup;
    const isMovingToTrigger = isNodeInside(triggerEl, relatedTarget);
    if (isMovingToCurrentPopup || isMovingToTrigger)
      return;
    const fromEl = e.currentTarget || triggerEl;
    const leavingPopup = isNodeInside(currentPopup, fromEl);
    const otherEl = leavingPopup ? triggerEl : currentPopup;
    const hideDelay = isLeavingToward(e, fromEl, otherEl) ? Math.max(exitDelay, HOVER_GAP_EXIT_DELAY) : exitDelay;
    callFuncWithDelay({
      delay: hideDelay,
      callback: () => {
        if (!visibleRef.current)
          return;
        onVisibleChange(false, { e, trigger: "trigger-element-hover" });
      }
    });
  };
  const resetPopupMouseDown = (e) => {
    hasPopupMouseDown.current = false;
    if (!e)
      return;
    const target = e.target;
    const insideAnyPopup = target?.closest?.(`.${classPrefix}-popup`);
    if (insideAnyPopup)
      return;
    callFuncWithDelay({
      delay: exitDelay,
      callback: () => onVisibleChange(false, {
        e,
        trigger: trigger === "hover" ? "trigger-element-hover" : "document"
      })
    });
  };
  const handlePopupMouseDown = () => {
    hasPopupMouseDown.current = true;
    const handleDocumentEnd = (e) => {
      off(document, "mouseup", handleDocumentEnd);
      off(document, "touchend", handleDocumentEnd);
      resetPopupMouseDown(e);
    };
    on(document, "mouseup", handleDocumentEnd);
    on(document, "touchend", handleDocumentEnd);
  };
  useEffect10(() => clearTimeout(visibleTimer.current), []);
  useEffect10(() => {
    if (!shouldToggle)
      return;
    const element = getTriggerElement();
    if (!element)
      return;
    const handleClick = (e) => {
      if (isEventFromDisabledElement(e, element))
        return;
      if (trigger === "click") {
        callFuncWithDelay({
          delay: visible ? appearDelay : exitDelay,
          callback: () => onVisibleChange(!visible, { e, trigger: "trigger-element-click" })
        });
      }
    };
    const handleMouseDown = (e) => {
      if (isEventFromDisabledElement(e, element))
        return;
      if (trigger === "mousedown") {
        callFuncWithDelay({
          delay: visible ? appearDelay : exitDelay,
          callback: () => onVisibleChange(!visible, {
            e,
            trigger: "trigger-element-mousedown"
          })
        });
      }
    };
    const handleFocus = (e) => {
      if (isEventFromDisabledElement(e, element))
        return;
      if (trigger === "focus") {
        callFuncWithDelay({
          delay: appearDelay,
          callback: () => onVisibleChange(true, { e, trigger: "trigger-element-focus" })
        });
      }
    };
    const handleBlur = (e) => {
      if (isEventFromDisabledElement(e, element))
        return;
      const relatedTarget = e.relatedTarget;
      if (relatedTarget && element.contains(relatedTarget))
        return;
      if (trigger === "focus") {
        callFuncWithDelay({
          delay: exitDelay,
          callback: () => onVisibleChange(false, { e, trigger: "trigger-element-blur" })
        });
      }
    };
    const handleContextMenu = (e) => {
      if (isEventFromDisabledElement(e, element))
        return;
      if (trigger === "context-menu") {
        e.preventDefault();
        callFuncWithDelay({
          delay: appearDelay,
          callback: () => onVisibleChange(true, { e, trigger: "context-menu" })
        });
      }
    };
    const handleTouchStart = (e) => {
      if (isEventFromDisabledElement(e, element))
        return;
      if (trigger === "hover" || trigger === "mousedown") {
        callFuncWithDelay({
          delay: appearDelay,
          callback: () => onVisibleChange(true, { e, trigger: "trigger-element-hover" })
        });
      }
    };
    const handleKeyDown = (e) => {
      if (isEventFromDisabledElement(e, element))
        return;
      if (e?.key === ESC_KEY) {
        callFuncWithDelay({
          delay: exitDelay,
          callback: () => onVisibleChange(false, { e, trigger: "keydown-esc" })
        });
      }
    };
    on(element, "click", handleClick);
    on(element, "mousedown", handleMouseDown);
    on(element, "mouseenter", handleMouseEnter);
    on(element, "mouseleave", handleMouseLeave);
    on(element, "focusin", handleFocus);
    on(element, "focusout", handleBlur);
    on(element, "contextmenu", handleContextMenu);
    on(element, "touchstart", handleTouchStart, { passive: true });
    on(element, "keydown", handleKeyDown);
    return () => {
      off(element, "click", handleClick);
      off(element, "mousedown", handleMouseDown);
      off(element, "mouseenter", handleMouseEnter);
      off(element, "mouseleave", handleMouseLeave);
      off(element, "focusin", handleFocus);
      off(element, "focusout", handleBlur);
      off(element, "contextmenu", handleContextMenu);
      off(element, "touchstart", handleTouchStart, { passive: true });
      off(element, "keydown", handleKeyDown);
    };
  }, [classPrefix, shouldToggle, appearDelay, exitDelay, trigger, visible, onVisibleChange, popupElement]);
  useEffect10(() => {
    if (!shouldToggle)
      return;
    const handleDocumentClick = (e) => {
      if (!visible || getTriggerElement()?.contains?.(e.target) || hasPopupMouseDown.current)
        return;
      onVisibleChange(false, { e, trigger: "document" });
    };
    on(document, "mousedown", handleDocumentClick);
    on(document, "touchend", handleDocumentClick, { passive: true });
    return () => {
      requestAnimationFrame(() => {
        off(document, "mousedown", handleDocumentClick);
        off(document, "touchend", handleDocumentClick, { passive: true });
      });
    };
  }, [classPrefix, shouldToggle, visible, onVisibleChange, getTriggerElement]);
  useEffect10(() => {
    const element = getTriggerElement();
    if (visible) {
      element?.classList.add(`${classPrefix}-popup-open`);
    } else {
      element?.classList.remove(`${classPrefix}-popup-open`);
    }
    return () => {
      element?.classList.remove(`${classPrefix}-popup-open`);
    };
  }, [visible, classPrefix, getTriggerElement]);
  function getTriggerNode(children) {
    if (triggerElementIsString)
      return;
    if (supportNodeRef(children)) {
      const childRef = getNodeRef(children);
      const ref = composeRefs(triggerRef, childRef);
      return React6.cloneElement(children, { ref });
    }
    return /* @__PURE__ */ React6.createElement("span", {
      ref: triggerRef,
      className: `${classPrefix}-trigger`
    }, children);
  }
  function getPopupProps() {
    return {
      onMouseEnter: handlePopupMouseEnter,
      onMouseLeave: handleMouseLeave,
      onMouseDown: handlePopupMouseDown,
      onTouchStart: handlePopupMouseDown
    };
  }
  return {
    triggerElementIsString,
    getTriggerElement,
    getTriggerNode,
    getPopupProps
  };
}

// packages/components/popup/utils/transition.ts
var getTransitionParams = ({ classPrefix, expandAnimation, fadeAnimation }) => {
  if (!fadeAnimation)
    return {};
  const popupAnimationClassPrefix = expandAnimation ? `${classPrefix}-popup--animation-expand` : `${classPrefix}-popup--animation`;
  return {
    classNames: {
      appear: `${popupAnimationClassPrefix}-enter ${popupAnimationClassPrefix}-enter-active`,
      appearActive: `${popupAnimationClassPrefix}-enter-active`,
      appearDone: `${popupAnimationClassPrefix}-enter-active ${popupAnimationClassPrefix}-enter-to`,
      enter: `${popupAnimationClassPrefix}-enter ${popupAnimationClassPrefix}-enter-active`,
      enterActive: `${popupAnimationClassPrefix}-enter-active`,
      enterDone: `${popupAnimationClassPrefix}-enter-active ${popupAnimationClassPrefix}-enter-to`,
      exit: `${popupAnimationClassPrefix}-leave ${popupAnimationClassPrefix}-leave-active`,
      exitActive: `${popupAnimationClassPrefix}-leave-active`,
      exitDone: `${popupAnimationClassPrefix}-leave-active ${popupAnimationClassPrefix}-leave-to`
    }
  };
};

// packages/components/popup/Popup.tsx
var DEFAULT_TRANSITION_TIMEOUT = 180;
var ARROW_WIDTH = 8;
var ARROW_HEIGHT = 8;
var Popup = forwardRef3((originalProps, ref) => {
  const props = useDefaultProps(originalProps, popupDefaultProps);
  const {
    trigger,
    content,
    placement,
    attach,
    showArrow,
    destroyOnClose,
    overlayClassName,
    overlayInnerClassName,
    overlayStyle,
    overlayInnerStyle,
    triggerElement,
    children = triggerElement,
    disabled,
    popperOptions,
    zIndex,
    onScroll,
    onScrollToBottom,
    expandAnimation,
    delay,
    hideEmptyPopup,
    updateScrollTop
  } = props;
  const { classPrefix } = useConfig_default();
  const popupAttach = useAttach_default("popup", attach);
  const { keepExpand, keepFade } = useAnimation();
  const { height: windowHeight, width: windowWidth } = useWindowSize_default();
  const [visible, onVisibleChange] = useControlled_default(props, "visible", props.onVisibleChange);
  const [isOverlayHover, setIsOverlayHover] = useState8(false);
  const [popupElement, setPopupElement] = useState8(null);
  const [arrowStyle, setArrowStyle] = useState8({});
  const popupRef = useRef11(null);
  const portalRef = useRef11(null);
  const contentRef = useRef11(null);
  const popperRef = useRef11(null);
  useEffect11(() => {
    if (!content && hideEmptyPopup) {
      requestAnimationFrame(() => setPopupElement(null));
    }
  }, [content, hideEmptyPopup]);
  const showOverlay = useMemo9(() => {
    if (hideEmptyPopup && !content)
      return false;
    return visible || popupElement;
  }, [hideEmptyPopup, content, visible, popupElement]);
  const popperPlacement = useMemo9(
    () => placement.replace(/-(left|top)$/, "-start").replace(/-(right|bottom)$/, "-end"),
    [placement]
  );
  const { triggerElementIsString, getTriggerElement, getTriggerNode, getPopupProps } = useTrigger({
    triggerElement,
    popupElement,
    content,
    disabled,
    trigger,
    visible,
    delay,
    onVisibleChange
  });
  const triggerEl = getTriggerElement();
  const arrowModifierEnabled = useMemo9(() => {
    const arrowModifier = popperOptions?.modifiers?.find((m) => m.name === "arrow");
    return arrowModifier && arrowModifier.enabled !== false;
  }, [popperOptions]);
  popperRef.current = usePopper_default(triggerEl, popupElement, {
    placement: popperPlacement,
    ...popperOptions
  });
  const { styles, attributes } = popperRef.current;
  const triggerNode = isFunction4(children) ? getTriggerNode(children({ visible })) : getTriggerNode(children);
  const updateTimeRef = useRef11(null);
  useMutationObservable(triggerEl, () => {
    const isDisplayNone = getCssVarsValue("display", triggerEl) === "none";
    if (visible && !isDisplayNone) {
      clearTimeout(updateTimeRef.current);
      updateTimeRef.current = setTimeout(() => popperRef.current?.update?.(), 0);
    }
  });
  useEffect11(() => () => clearTimeout(updateTimeRef.current), []);
  const calculateArrowStyle = () => {
    if (!triggerEl || !popupElement || !showArrow)
      return {};
    const triggerRect = triggerEl.getBoundingClientRect();
    const popupRect = popupElement.getBoundingClientRect();
    const inRange = (value, min2, max2) => value >= min2 && value <= max2;
    if (placement.startsWith("top") || placement.startsWith("bottom")) {
      const offsetLeft = Math.abs(triggerRect.left + triggerRect.width / 2 - popupRect.left);
      const popupWidth = popupElement.offsetWidth || popupElement.clientWidth;
      const maxPopupOffsetLeft = popupWidth - ARROW_WIDTH / 2;
      const minPopupOffsetLeft = ARROW_WIDTH + ARROW_WIDTH / 2;
      if (inRange(offsetLeft, 0, popupWidth)) {
        return {
          left: `${Math.max(minPopupOffsetLeft, Math.min(maxPopupOffsetLeft, offsetLeft)) - ARROW_WIDTH / 2}px`,
          marginLeft: 0
        };
      }
      return {};
    }
    const offsetTop = triggerRect.top + triggerRect.height / 2 - popupRect.top;
    const popupHeight = popupElement.offsetHeight || popupElement.clientHeight;
    const maxPopupOffsetTop = popupHeight - ARROW_HEIGHT;
    const minPopupOffsetTop = ARROW_HEIGHT;
    if (inRange(offsetTop, 0, popupHeight)) {
      return {
        top: `${Math.max(minPopupOffsetTop, Math.min(maxPopupOffsetTop, offsetTop)) - ARROW_HEIGHT / 2}px`,
        marginTop: 0
      };
    }
    return {};
  };
  const updateArrowPosition = () => {
    if (visible && popupElement && showArrow) {
      const newArrowStyle = calculateArrowStyle();
      setArrowStyle(newArrowStyle);
    }
  };
  useEffect11(() => {
    if (visible) {
      requestAnimationFrame(() => {
        popperRef.current?.update?.();
      });
    }
  }, [visible, content, windowHeight, windowWidth]);
  useEffect11(() => {
    if (visible && popupElement && contentRef.current) {
      requestAnimationFrame(() => {
        updateArrowPosition();
      });
    }
  }, [visible, content, popupElement]);
  useEffect11(() => {
    if (visible && popupElement && contentRef.current) {
      requestAnimationFrame(() => {
        updateScrollTop?.(contentRef.current);
      });
    }
  }, [visible, popupElement]);
  function handleExited() {
    setIsOverlayHover(false);
    if (!destroyOnClose && popupElement)
      popupElement.style.display = "none";
    else
      setPopupElement(null);
  }
  function handleEnter() {
    setIsOverlayHover(true);
    !destroyOnClose && popupElement && (popupElement.style.display = "block");
  }
  function handleScroll(e) {
    onScroll?.({ e });
    const debounceOnScrollBottom = debounce4((e2) => onScrollToBottom?.({ e: e2 }), 100);
    const { scrollTop, clientHeight, scrollHeight } = e.target;
    if (clientHeight + Math.floor(scrollTop) === scrollHeight) {
      debounceOnScrollBottom(e);
    }
  }
  function getOverlayStyle(overlayStyle2) {
    if (triggerEl && popupRef.current && typeof overlayStyle2 === "function") {
      return { ...overlayStyle2(triggerEl, popupRef.current) };
    }
    return { ...overlayStyle2 };
  }
  const overlay = showOverlay && /* @__PURE__ */ React7.createElement(CSSTransition, {
    appear: true,
    in: visible,
    timeout: DEFAULT_TRANSITION_TIMEOUT,
    nodeRef: portalRef,
    unmountOnExit: destroyOnClose,
    onEnter: handleEnter,
    onExited: handleExited
  }, /* @__PURE__ */ React7.createElement(Portal_default, {
    ref: portalRef,
    triggerNode: triggerEl,
    attach: popupAttach,
    style: { position: "absolute", top: 0, left: 0, width: "100%" }
  }, /* @__PURE__ */ React7.createElement(CSSTransition, {
    appear: true,
    timeout: 0,
    in: visible,
    nodeRef: popupRef,
    ...getTransitionParams({
      classPrefix,
      fadeAnimation: keepFade,
      expandAnimation: expandAnimation && keepExpand
    })
  }, /* @__PURE__ */ React7.createElement("div", {
    ref: (node) => {
      if (node) {
        popupRef.current = node;
        setPopupElement(node);
      }
    },
    style: { ...styles.popper, zIndex, ...getOverlayStyle(overlayStyle) },
    className: (0, import_classnames.default)(`${classPrefix}-popup`, overlayClassName),
    ...attributes.popper,
    onClick: (e) => props.onOverlayClick?.({ e }),
    ...getPopupProps()
  }, /* @__PURE__ */ React7.createElement("div", {
    ref: contentRef,
    className: (0, import_classnames.default)(
      `${classPrefix}-popup__content`,
      {
        [`${classPrefix}-popup__content--arrow`]: showArrow
      },
      overlayInnerClassName
    ),
    style: getOverlayStyle(overlayInnerStyle),
    onScroll: handleScroll
  }, content, showArrow && /* @__PURE__ */ React7.createElement("div", {
    style: { ...styles.arrow, ...arrowStyle },
    className: `${classPrefix}-popup__arrow`,
    ...arrowModifierEnabled && { "data-popper-arrow": "" }
  }))))));
  function updatePopper() {
    const popper2 = popperRef.current;
    if (!canUseDocument || !popper2 || !visible)
      return;
    try {
      const root = triggerEl?.getRootNode();
      if (root && root instanceof ShadowRoot) {
        if (popper2.state)
          popper2.state.elements.reference = triggerEl;
        popper2.update();
      } else {
        let parent = triggerEl;
        while (parent && parent !== document.body) {
          parent = parent.parentElement;
        }
        const computedStyle = window.getComputedStyle(triggerEl);
        const isHidden = parent !== document.body || computedStyle.display === "none" || computedStyle.visibility === "hidden" || computedStyle.opacity === "0";
        if (!isHidden) {
          if (popper2.state)
            popper2.state.elements.reference = triggerEl;
          popper2.update();
        } else {
          onVisibleChange(false, { trigger: "document" });
        }
      }
    } catch (e) {
      popper2.update();
    }
    updateArrowPosition();
  }
  useImperativeHandle2(ref, () => ({
    getPopupElement: () => popupRef.current,
    getPortalElement: () => portalRef.current,
    getPopupContentElement: () => contentRef.current,
    setVisible: (visible2) => onVisibleChange(visible2, { trigger: "document" }),
    getPopper: () => {
      const popper2 = popperRef.current;
      if (!popper2)
        return null;
      return {
        state: popper2.state,
        update: popper2.update,
        forceUpdate: popper2.forceUpdate,
        destroy: popper2.destroy,
        setOptions: popper2.setOptions
      };
    },
    getOverlay: () => portalRef.current,
    getOverlayState: () => ({ hover: isOverlayHover }),
    update: () => updatePopper()
  }));
  return /* @__PURE__ */ React7.createElement(React7.Fragment, null, triggerElementIsString ? null : triggerNode, overlay);
});
Popup.displayName = "Popup";
var Popup_default = Popup;

// packages/components/popup/PopupPlugin.tsx
var import_classnames2 = __toESM(require_classnames2());
import React9, { useLayoutEffect as useLayoutEffect2, useMemo as useMemo10, useRef as useRef12, useState as useState9 } from "react";
import { CSSTransition as CSSTransition2 } from "react-transition-group";
import { isString as isString4 } from "lodash-es";

// packages/components/_util/react-render.ts
import * as ReactDOM from "react-dom";
var fullClone = {
  ...ReactDOM
};
var { version, render: reactRender, unmountComponentAtNode } = fullClone;
var legacyCreateRoot;
var mainVersion = Number((version || "").split(".")[0]);
try {
  if (mainVersion >= 18 && mainVersion < 19) {
    legacyCreateRoot = fullClone.createRoot;
  }
} catch (e) {
}

// packages/components/common/PluginContainer.tsx
import React8 from "react";

// packages/components/popup/index.ts
var Popup2 = Popup_default;
var popup_default = Popup2;

// packages/components/tooltip/defaultProps.ts
var tooltipDefaultProps = {
  destroyOnClose: true,
  placement: "top",
  showArrow: true,
  theme: "default",
  duration: 0
};
var tooltipLiteDefaultProps = {
  placement: "top",
  showArrow: true,
  showShadow: true,
  theme: "default"
};

// packages/components/tooltip/Tooltip.tsx
var Tooltip = forwardRef4((originalProps, ref) => {
  const props = useDefaultProps(originalProps, tooltipDefaultProps);
  const {
    theme,
    showArrow,
    destroyOnClose,
    overlayClassName,
    children,
    duration,
    placement,
    onVisibleChange,
    ...restProps
  } = props;
  const { classPrefix } = useConfig_default();
  const [timeUp, setTimeUp] = useState10(false);
  const popupRef = useRef13(null);
  const timerRef = useRef13(null);
  const toolTipClass = (0, import_classnames3.default)(
    `${classPrefix}-tooltip`,
    {
      [`${classPrefix}-tooltip--${theme}`]: theme
    },
    overlayClassName
  );
  function handleVisibleChange(visible, { e, trigger }) {
    setTimeUp(false);
    onVisibleChange?.(visible, { e, trigger });
  }
  useEffect12(() => {
    if (duration !== 0 && !timeUp) {
      popupRef.current?.setVisible?.(true);
      timerRef.current = window.setTimeout(() => {
        popupRef.current?.setVisible?.(false);
        setTimeUp(true);
      }, duration);
    }
    return () => {
      window.clearTimeout(timerRef.current);
    };
  }, [duration, timeUp]);
  useImperativeHandle3(ref, () => ({
    ...popupRef.current || {}
  }));
  return /* @__PURE__ */ React10.createElement(popup_default, {
    ref: popupRef,
    destroyOnClose,
    showArrow,
    overlayClassName: toolTipClass,
    onVisibleChange: handleVisibleChange,
    placement,
    ...restProps
  }, children);
});
Tooltip.displayName = "Tooltip";
var Tooltip_default = Tooltip;

// packages/components/tooltip/TooltipLite.tsx
var import_classnames4 = __toESM(require_classnames2());
import React11, { useCallback as useCallback3, useEffect as useEffect13, useRef as useRef14, useState as useState12 } from "react";
import { CSSTransition as CSSTransition3 } from "react-transition-group";
import { throttle } from "lodash-es";

// packages/common/js/utils/getPosition.ts
var getPosition = (targetEle, contentEle, placement, clientX, clientY) => {
  const targetRect = targetEle.getBoundingClientRect();
  const contentRect = contentEle.getBoundingClientRect();
  const position = {
    top: document.documentElement.scrollTop,
    left: document.documentElement.scrollLeft
  };
  if (targetRect && contentRect) {
    const dWidth = targetRect.width - contentRect.width;
    switch (placement) {
      case "top":
        position.left += targetRect.left + dWidth / 2;
        position.top += targetRect.top - contentRect.height - 16;
        break;
      case "bottom":
        position.left += targetRect.left + dWidth / 2;
        position.top += targetRect.top + targetRect.height;
        break;
      case "mouse":
        position.left += Number(clientX);
        position.top += typeof clientY !== "undefined" ? Number(clientY) + 16 : targetRect.top + targetRect.height + 8;
        break;
    }
    if (placement === "mouse") {
      const edges = {
        top: document.documentElement.scrollTop,
        left: document.documentElement.scrollLeft,
        right: document.documentElement.scrollLeft + document.documentElement.clientWidth,
        bottom: document.documentElement.scrollTop + document.documentElement.clientHeight
      };
      if (position.top > edges.bottom - contentRect.height) {
        position.top = document.documentElement.scrollTop + targetRect.top - contentRect.height - 8;
      }
      if (position.left > edges.right - contentRect.width) {
        position.left = edges.right - contentRect.width;
      }
    }
  }
  return position;
};
var getPosition_default = getPosition;

// packages/components/hooks/useSwitch.ts
import { useState as useState11 } from "react";
var useSwitch = (initialState = false) => {
  const [state, setState] = useState11(initialState);
  return [
    state,
    {
      on: usePersistFn(() => setState(true)),
      off: usePersistFn(() => setState(false)),
      set: setState
    }
  ];
};
var useSwitch_default = useSwitch;

// packages/components/tooltip/TooltipLite.tsx
var DEFAULT_TRANSITION_TIMEOUT2 = 180;
var TooltipLite = (originalProps) => {
  const props = useDefaultProps(originalProps, tooltipLiteDefaultProps);
  const { style, className, placement, showArrow, theme, children, triggerElement, content, showShadow } = props;
  const triggerRef = useRef14(null);
  const contentRef = useRef14(null);
  const popupRef = useRef14(null);
  const { classPrefix } = useConfig_default();
  const [hover, hoverAction] = useSwitch_default();
  const [clientX, setHoverClientX] = useState12(0);
  const [clientY, setHoverClientY] = useState12(0);
  const [position, setPosition] = useState12(null);
  const { keepFade } = useAnimation();
  useEffect13(() => {
    if (triggerRef.current && contentRef.current) {
      setPosition(getPosition_default(triggerRef.current, contentRef.current, placement, clientX, clientY));
    }
  }, [triggerRef.current, contentRef.current, placement, hover, clientX, clientY]);
  const updatePosition = (position2) => {
    const { clientX: clientX2, clientY: clientY2 } = position2;
    setHoverClientX(clientX2);
    setHoverClientY(clientY2);
  };
  const onSwitchHover = (action, e) => {
    const { clientX: clientX2, clientY: clientY2 } = e;
    updatePosition({ clientX: clientX2, clientY: clientY2 });
    hoverAction.set(action === "on");
  };
  const showTipArrow = showArrow && placement !== "mouse";
  const onSwitchMove = useCallback3(
    throttle((e) => updatePosition(e), 16.7, { trailing: true }),
    []
  );
  const getTriggerChildren = (children2) => {
    const appendProps = {
      ref: triggerRef,
      onMouseMove: (e) => {
        const { clientX: clientX2, clientY: clientY2 } = e;
        return onSwitchMove({ clientX: clientX2, clientY: clientY2 });
      },
      onMouseEnter: (e) => onSwitchHover("on", e),
      onMouseLeave: (e) => onSwitchHover("off", e)
    };
    if (!React11.isValidElement(children2)) {
      return React11.cloneElement(/* @__PURE__ */ React11.createElement("div", null, children2), { ...appendProps });
    }
    return React11.cloneElement(children2, { ...appendProps });
  };
  return /* @__PURE__ */ React11.createElement("div", null, getTriggerChildren(children || triggerElement), hover && /* @__PURE__ */ React11.createElement(Portal_default, null, /* @__PURE__ */ React11.createElement(CSSTransition3, {
    appear: true,
    timeout: {
      appear: DEFAULT_TRANSITION_TIMEOUT2
    },
    in: hover,
    nodeRef: popupRef,
    ...getTransitionParams({
      classPrefix,
      fadeAnimation: keepFade
    })
  }, /* @__PURE__ */ React11.createElement("div", {
    className: (0, import_classnames4.default)(
      `${classPrefix}-popup`,
      `${classPrefix}-tooltip`,
      {
        [`${classPrefix}-tooltip--${theme}`]: theme,
        [`${classPrefix}-tooltip--noshadow`]: !showShadow
      },
      className
    ),
    style: {
      position: "absolute",
      left: position?.left,
      top: position?.top,
      zIndex: props.zIndex
    },
    "data-popper-placement": placement,
    ref: popupRef
  }, /* @__PURE__ */ React11.createElement("div", {
    className: (0, import_classnames4.default)(`${classPrefix}-popup__content`, {
      [`${classPrefix}-popup__content--arrow`]: showTipArrow
    }),
    ref: contentRef,
    style
  }, content, showTipArrow && /* @__PURE__ */ React11.createElement("div", {
    className: `${classPrefix}-popup__arrow`
  }))))));
};
TooltipLite.displayName = "TooltipLite";
var TooltipLite_default = React11.memo(TooltipLite);

// packages/components/tooltip/index.ts
var Tooltip2 = Tooltip_default;

// packages/components/common/Check.tsx
var CheckContext = React12.createContext(null);
var Check = forwardRef5((_props, ref) => {
  const context = useContext3(CheckContext);
  const props = context ? context.inject(_props) : _props;
  const {
    allowUncheck = false,
    type,
    disabled,
    name,
    value,
    onChange,
    indeterminate,
    children,
    label,
    className,
    style,
    onClick,
    tooltipProps,
    ...htmlProps
  } = props;
  const { classPrefix } = useConfig_default();
  const TOnChange = onChange;
  const [internalChecked, setInternalChecked] = useControlled_default(props, "checked", TOnChange);
  const labelClassName = (0, import_classnames5.default)(`${classPrefix}-${type}`, className, {
    [`${classPrefix}-is-checked`]: internalChecked,
    [`${classPrefix}-is-disabled`]: disabled,
    [`${classPrefix}-is-indeterminate`]: indeterminate
  });
  const readOnly = props.readOnly || props.readonly;
  const isDisabled = disabled || readOnly;
  const input = /* @__PURE__ */ React12.createElement("input", {
    readOnly,
    type: type === "radio-button" ? "radio" : type,
    className: `${classPrefix}-${type}__former`,
    checked: internalChecked,
    disabled,
    name,
    tabIndex: -1,
    value: isBoolean3(value) ? Number(value) : value,
    "data-value": typeof value === "string" ? `'${value}'` : value,
    "data-allow-uncheck": allowUncheck || void 0,
    onClick: (e) => {
      e.stopPropagation();
      if ((type === "radio-button" || type === "radio") && allowUncheck && internalChecked) {
        setInternalChecked(!e.currentTarget.checked, { e });
      }
    },
    onChange: (e) => {
      if (isDisabled)
        return;
      setInternalChecked(e.currentTarget.checked, { e });
    }
  });
  const showLabel = !!(children || label);
  const handleLabelClick = (event) => {
    if (props.stopLabelTrigger) {
      event.preventDefault();
    }
  };
  const onInnerClick = (e) => {
    if (isDisabled)
      return;
    onClick?.({ e });
  };
  const checkboxInput = tooltipProps ? /* @__PURE__ */ React12.createElement(Tooltip2, {
    ...tooltipProps
  }, /* @__PURE__ */ React12.createElement("span", {
    className: `${classPrefix}-${type}__input`
  })) : /* @__PURE__ */ React12.createElement("span", {
    className: `${classPrefix}-${type}__input`
  });
  return /* @__PURE__ */ React12.createElement("label", {
    ref,
    tabIndex: disabled ? void 0 : 0,
    className: labelClassName,
    title: props.title,
    style,
    ...omit2(htmlProps, ["checkAll", "stopLabelTrigger", "readonly"]),
    onClick: onInnerClick
  }, input, checkboxInput, showLabel && /* @__PURE__ */ React12.createElement("span", {
    key: "label",
    className: `${classPrefix}-${type}__label`,
    onClick: handleLabelClick
  }, children || label));
});
Check.displayName = "Check";
var Check_default = Check;

// packages/components/checkbox/CheckboxGroup.tsx
var import_classnames6 = __toESM(require_classnames2());
import React13, { useCallback as useCallback4, useEffect as useEffect14, useMemo as useMemo11, useState as useState13 } from "react";
import { isNumber as isNumber3 } from "lodash-es";

// packages/components/checkbox/defaultProps.ts
var checkboxDefaultProps = {
  checkAll: false,
  defaultChecked: false,
  disabled: void 0,
  indeterminate: false,
  readonly: void 0
};
var checkboxGroupDefaultProps = {
  disabled: void 0,
  max: void 0,
  readonly: void 0,
  defaultValue: []
};

// packages/components/checkbox/CheckboxGroup.tsx
var getCheckboxValue = (v) => {
  switch (typeof v) {
    case "number":
      return v;
    case "string":
      return v;
    case "object": {
      const vs = v;
      return vs.value;
    }
    default:
      return void 0;
  }
};
var CheckboxGroup = (props) => {
  const { classPrefix } = useConfig_default();
  const {
    onChange,
    disabled,
    className,
    style,
    children,
    max: max2,
    options = [],
    ...resetProps
  } = useDefaultProps(props, checkboxGroupDefaultProps);
  const readOnly = resetProps.readOnly || resetProps.readonly;
  const intervalOptions = Array.isArray(options) && options.length > 0 ? options : React13.Children.map(
    children,
    (child) => child?.type?.displayName === Checkbox_default.displayName && child.props
  ) || [];
  const optionsWithoutCheckAll = intervalOptions.filter((t2) => typeof t2 !== "object" || !t2.checkAll);
  const optionsWithoutCheckAllValues = [];
  optionsWithoutCheckAll.forEach((v) => {
    const vs = getCheckboxValue(v);
    optionsWithoutCheckAllValues.push(vs);
  });
  const { enabledValues, disabledValues } = useMemo11(() => {
    const enabledValues2 = [];
    const disabledValues2 = [];
    optionsWithoutCheckAll.forEach((option) => {
      const isOptionDisabled = typeof option === "object" && (option.disabled || option.readOnly || option.readonly);
      const value = getCheckboxValue(option);
      if (isOptionDisabled || disabled || readOnly) {
        disabledValues2.push(value);
      } else {
        enabledValues2.push(value);
      }
    });
    return { enabledValues: enabledValues2, disabledValues: disabledValues2 };
  }, [optionsWithoutCheckAll, disabled, readOnly]);
  const [internalValue, setInternalValue] = useControlled_default(props, "value", onChange);
  const [localMax, setLocalMax] = useState13(max2);
  const getCheckedSet = useCallback4(() => {
    if (!Array.isArray(internalValue)) {
      return /* @__PURE__ */ new Set([]);
    }
    return new Set([].concat(internalValue));
  }, [internalValue]);
  const checkedSet = useMemo11(() => getCheckedSet(), [getCheckedSet]);
  const indeterminate = useMemo11(() => {
    const allValues = [...enabledValues, ...disabledValues];
    const checkedCount = allValues.filter((value) => checkedSet.has(value)).length;
    return checkedCount > 0 && checkedCount < allValues.length;
  }, [checkedSet, enabledValues, disabledValues]);
  const checkAllChecked = useMemo11(() => {
    const checkableValues = enabledValues.filter((value) => checkedSet.has(value));
    return enabledValues.length > 0 && checkableValues.length === enabledValues.length;
  }, [checkedSet, enabledValues]);
  useEffect14(() => {
    if (!isNumber3(max2)) {
      return;
    }
    if (max2 < checkedSet.size) {
      console.warn("[TDesign] max should be less than the length of value, change is invalid");
    } else {
      setLocalMax(max2);
    }
  }, [max2, checkedSet]);
  const context = {
    inject: (checkProps) => {
      if (typeof checkProps.checked !== "undefined") {
        return checkProps;
      }
      const { value: checkValue } = checkProps;
      return {
        ...checkProps,
        checked: checkProps.checkAll ? checkAllChecked : checkedSet.has(checkValue),
        indeterminate: checkProps.checkAll ? indeterminate : checkProps.indeterminate,
        disabled: checkProps.disabled || disabled || checkedSet.size >= localMax && !checkedSet.has(checkValue),
        readOnly: checkProps.readonly || readOnly,
        onChange(checked, { e }) {
          if (typeof checkProps.onChange === "function") {
            checkProps.onChange(checked, { e });
          }
          const checkedSet2 = getCheckedSet();
          if (checkProps.checkAll) {
            const checkedEnabledValues = enabledValues.filter((value) => checkedSet2.has(value));
            const allEnabledChecked = enabledValues.length > 0 && checkedEnabledValues.length === enabledValues.length;
            if (!allEnabledChecked) {
              enabledValues.forEach((value) => {
                if (!checkedSet2.has(value)) {
                  checkedSet2.add(value);
                }
              });
            } else {
              enabledValues.forEach((value) => {
                if (checkedSet2.has(value)) {
                  checkedSet2.delete(value);
                }
              });
            }
          } else if (checked) {
            if (checkedSet2.size >= localMax && isNumber3(max2))
              return;
            checkedSet2.add(checkValue);
          } else {
            checkedSet2.delete(checkValue);
          }
          const currentOptionChecked = optionsWithoutCheckAll.find((item) => item.value === checkValue);
          setInternalValue(Array.from(checkedSet2), {
            e,
            current: checkProps.checkAll ? void 0 : checkValue,
            type: checked ? "check" : "uncheck",
            option: checkProps.checkAll ? void 0 : currentOptionChecked
          });
        }
      };
    }
  };
  const useOptions = Array.isArray(options) && options.length !== 0;
  return /* @__PURE__ */ React13.createElement("div", {
    className: (0, import_classnames6.default)(`${classPrefix}-checkbox-group`, className),
    style
  }, /* @__PURE__ */ React13.createElement(CheckContext.Provider, {
    value: context
  }, useOptions ? options.map((v, index) => {
    switch (typeof v) {
      case "string":
        return /* @__PURE__ */ React13.createElement(Checkbox_default, {
          key: index,
          label: v,
          value: v
        }, v);
      case "number": {
        return /* @__PURE__ */ React13.createElement(Checkbox_default, {
          key: index,
          label: v,
          value: v
        }, String(v));
      }
      case "object": {
        const vs = v;
        return vs.checkAll ? /* @__PURE__ */ React13.createElement(Checkbox_default, {
          ...vs,
          key: `checkAll_${index}`,
          indeterminate
        }) : /* @__PURE__ */ React13.createElement(Checkbox_default, {
          ...vs,
          key: index,
          disabled: vs.disabled || disabled,
          readOnly: vs.readOnly || vs.readonly || readOnly
        });
      }
      default:
        return null;
    }
  }) : children));
};
CheckboxGroup.displayName = "CheckboxGroup";
var CheckboxGroup_default = CheckboxGroup;

// packages/components/checkbox/Checkbox.tsx
var Checkbox = forwardRefWithStatics(
  (props, ref) => /* @__PURE__ */ React14.createElement(Check_default, {
    ref,
    type: "checkbox",
    ...useDefaultProps(props, checkboxDefaultProps)
  }),
  { Group: CheckboxGroup_default }
);
Checkbox.displayName = "Checkbox";
var Checkbox_default = Checkbox;

// packages/components/checkbox/index.ts
var Checkbox2 = Checkbox_default;
var checkbox_default = Checkbox2;

// packages/components/hooks/useDomRefCallback.ts
import { useCallback as useCallback5, useState as useState14 } from "react";
function useDomRefCallback() {
  const [refCurrent, setRefCurrent] = useState14();
  useCallback5((dom) => {
    if (dom)
      setRefCurrent(dom);
  }, []);
  return [refCurrent, setRefCurrent];
}

// packages/components/hooks/useGlobalIcon.ts
function useGlobalIcon(tdIcon) {
  const { icon: globalIcon } = useConfig_default();
  const resultIcon = {};
  Object.keys(tdIcon).forEach((key) => {
    resultIcon[key] = globalIcon?.[key] || tdIcon[key];
  });
  return resultIcon;
}

// packages/components/hooks/useRipple.ts
import { useCallback as useCallback6, useEffect as useEffect15, useMemo as useMemo12 } from "react";

// packages/common/js/utils/setStyle.ts
function setStyle(el, styles) {
  if (!el)
    return;
  const keys = Object.keys(styles);
  keys.forEach((key) => {
    el.style[key] = styles[key];
  });
}
var setStyle_default = setStyle;

// packages/components/hooks/useRipple.ts
var period = 200;
var elementTransitionPeriod = 200;
var rippleExtraWidth = 20;
var rippleSkew = "skewX(-8deg)";
var noneRippleBg = "rgba(0, 0, 0, 0)";
var defaultRippleColor = "rgba(0, 0, 0, 0.35)";
var getRippleColor = (el, fixedRippleColor) => {
  if (fixedRippleColor) {
    return fixedRippleColor;
  }
  if (el?.dataset?.ripple) {
    const rippleColor = el.dataset.ripple;
    return rippleColor;
  }
  const cssVariable = getComputedStyle(el).getPropertyValue("--ripple-color");
  if (cssVariable) {
    return cssVariable;
  }
  return defaultRippleColor;
};
function useRipple(el, fixedRippleColor) {
  const { classPrefix } = useConfig_default();
  const { keepRipple } = useAnimation();
  const rippleContainer = useMemo12(() => {
    if (!canUseDocument)
      return null;
    const container = document.createElement("div");
    container.className = `${classPrefix}-ripple`;
    return container;
  }, [classPrefix]);
  const handleAddRipple = useCallback6(
    (e) => {
      const rippleColor = getRippleColor(el, fixedRippleColor);
      if (e.button !== 0 || !el || !keepRipple)
        return;
      if (el.classList.contains(`${classPrefix}-is-active`) || el.classList.contains(`${classPrefix}-is-disabled`) || el.classList.contains(`${classPrefix}-is-checked`) || el.classList.contains(`${classPrefix}-is-loading`))
        return;
      const elStyle = getComputedStyle(el);
      const elBorder = parseInt(elStyle.borderWidth, 10);
      const border = elBorder > 0 ? elBorder : 0;
      if (rippleContainer.parentNode === null) {
        setStyle_default(rippleContainer, {
          position: "absolute",
          left: `${0 - border}px`,
          top: `${0 - border}px`,
          width: `calc(100% + ${border * 2}px)`,
          height: `calc(100% + ${border * 2}px)`,
          borderRadius: elStyle.borderRadius,
          pointerEvents: "none",
          overflow: "hidden"
        });
        el.appendChild(rippleContainer);
      }
      const ripple = document.createElement("div");
      ripple.className = `${classPrefix}-ripple__inner`;
      setStyle_default(ripple, {
        marginTop: "0",
        marginLeft: "0",
        right: "100%",
        width: `calc(100% + ${rippleExtraWidth}px)`,
        height: "100%",
        transition: `transform ${period}ms cubic-bezier(.38, 0, .24, 1), background ${period * 2}ms linear`,
        transform: rippleSkew,
        pointerEvents: "none",
        position: "absolute",
        zIndex: 0,
        backgroundColor: rippleColor,
        opacity: "0.9"
      });
      const elMap = /* @__PURE__ */ new WeakMap();
      for (let n = el.children.length, i = 0; i < n; ++i) {
        const child = el.children[i];
        if (child.style.zIndex === "" && child !== rippleContainer) {
          child.style.zIndex = "1";
          elMap.set(child, true);
        }
      }
      const initPosition = el.style.position ? el.style.position : getComputedStyle(el).position;
      if (initPosition === "" || initPosition === "static") {
        el.style.position = "relative";
      }
      rippleContainer.insertBefore(ripple, rippleContainer.firstChild);
      setTimeout(() => {
        ripple.style.transform = `translateX(calc(100% - ${rippleExtraWidth}px)) ${rippleSkew}`;
      }, 0);
      let cleared = false;
      let classChangeObserver = null;
      const handleClearRipple = () => {
        if (cleared)
          return;
        cleared = true;
        ripple.style.backgroundColor = noneRippleBg;
        if (classChangeObserver) {
          classChangeObserver.disconnect();
          classChangeObserver = null;
        }
        if (el) {
          el.removeEventListener("pointerup", handleClearRipple, false);
          el.removeEventListener("pointerleave", handleClearRipple, false);
        }
        setTimeout(
          () => {
            ripple.remove();
            if (rippleContainer.children.length === 0)
              rippleContainer.remove();
          },
          period * 2 + 100
        );
      };
      if (typeof MutationObserver !== "undefined") {
        classChangeObserver = new MutationObserver(() => {
          if (!el || !(el instanceof Element))
            return;
          const cls = el.classList;
          if (cls.contains(`${classPrefix}-is-loading`) || cls.contains(`${classPrefix}-is-disabled`) || cls.contains(`${classPrefix}-is-active`) || cls.contains(`${classPrefix}-is-checked`)) {
            ripple.style.transition = `transform ${period}ms cubic-bezier(.38, 0, .24, 1), background ${elementTransitionPeriod}ms linear`;
            handleClearRipple();
          }
        });
        classChangeObserver.observe(el, {
          attributes: true,
          attributeFilter: ["class"]
        });
      }
      el.addEventListener("pointerup", handleClearRipple, false);
      el.addEventListener("pointerleave", handleClearRipple, false);
    },
    [classPrefix, el, fixedRippleColor, rippleContainer, keepRipple]
  );
  useEffect15(() => {
    if (!el)
      return;
    el.addEventListener("pointerdown", handleAddRipple, false);
    return () => {
      el.removeEventListener("pointerdown", handleAddRipple, false);
    };
  }, [handleAddRipple, fixedRippleColor, el]);
}

// packages/components/loading/Loading.tsx
var import_classnames8 = __toESM(require_classnames2());
import React16, { useEffect as useEffect17, useMemo as useMemo13, useState as useState15 } from "react";

// packages/components/loading/defaultProps.ts
var loadingDefaultProps = {
  delay: 0,
  fullscreen: false,
  indicator: true,
  inheritColor: false,
  loading: true,
  preventScrollThrough: true,
  showOverlay: true,
  size: "medium"
};

// packages/components/loading/gradient.tsx
var import_classnames7 = __toESM(require_classnames2());
import React15, { useEffect as useEffect16 } from "react";

// packages/common/js/utils/helper.ts
import { isArray as isArray2, isNull as isNull2, isNumber as isNumber4, isString as isString5, isUndefined as isUndefined2 } from "lodash-es";
function getIEVersion() {
  if (typeof navigator === "undefined" || !navigator)
    return Number.MAX_SAFE_INTEGER;
  const { userAgent } = navigator;
  const isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1;
  const isIE11 = userAgent.indexOf("Trident") > -1 && userAgent.indexOf("rv:11.0") > -1;
  if (isIE) {
    const reIE = /MSIE (\d+\.\d+);/;
    const match = userAgent.match(reIE);
    if (!match)
      return -1;
    const fIEVersion = parseFloat(match[1]);
    return fIEVersion < 7 ? 6 : fIEVersion;
  }
  if (isIE11) {
    return 11;
  }
  return Number.MAX_SAFE_INTEGER;
}

// packages/common/js/loading/circle-adapter.ts
function circleAdapter(circleElem) {
  let basicStyle = {};
  if (!circleElem || typeof window === "undefined") {
    return;
  }
  const computedStyle = window.getComputedStyle?.(circleElem);
  const color = computedStyle?.color || "";
  const fontSize = computedStyle?.fontSize || "12px";
  const ua = window?.navigator?.userAgent;
  const isSafari = /Safari/.test(ua) && !/Chrome/.test(ua);
  const isIosWechat = /(?=.*iPhone)[?=.*MicroMessenger]/.test(ua) && !/Chrome/.test(ua);
  const isIpadWechat = /(?=.*iPad)[?=.*MicroMessenger]/.test(ua) && !/Chrome/.test(ua);
  if (isSafari || isIosWechat || isIpadWechat) {
    basicStyle = {
      transformOrigin: "0px 0px",
      transform: `scale(${parseInt(fontSize, 10) / 12})`
    };
  }
  if (color && getIEVersion() > 11) {
    const matched = color.match(/[\d.]+/g);
    const endColor = matched ? `rgba(${matched[0]}, ${matched[1]}, ${matched[2]}, 0)` : "";
    setStyle_default(circleElem, {
      ...basicStyle,
      background: `conic-gradient(from 90deg at 50% 50%,${endColor} 0deg, ${color} 360deg)`
    });
  } else {
    setStyle_default(circleElem, {
      ...basicStyle,
      background: ""
    });
  }
}

// packages/components/loading/gradient.tsx
var GradientLoading = () => {
  const { classPrefix } = useConfig_default();
  const [conicRef, setConicRef] = useDomRefCallback();
  const gradientClass = `${classPrefix}-loading__gradient`;
  useEffect16(() => {
    const el = conicRef;
    circleAdapter(el);
  }, [conicRef]);
  return /* @__PURE__ */ React15.createElement("svg", {
    className: (0, import_classnames7.default)(gradientClass, `${classPrefix}-icon-loading`),
    viewBox: "0 0 12 12",
    version: "1.1",
    width: "1em",
    height: "1em",
    xmlns: "http://www.w3.org/2000/svg"
  }, /* @__PURE__ */ React15.createElement("foreignObject", {
    x: "0",
    y: "0",
    width: "12",
    height: "12"
  }, /* @__PURE__ */ React15.createElement("div", {
    className: `${gradientClass}-conic`,
    ref: setConicRef
  })));
};
var gradient_default = GradientLoading;

// packages/components/loading/Loading.tsx
var Loading = (props) => {
  const { classPrefix, loading: globalLoadingConfig } = useConfig_default();
  const {
    attach,
    indicator,
    text,
    loading,
    size,
    delay,
    fullscreen,
    preventScrollThrough,
    showOverlay,
    content,
    children,
    inheritColor,
    zIndex,
    className,
    style
  } = useDefaultProps(props, {
    ...loadingDefaultProps,
    ...globalLoadingConfig
  });
  const [showLoading, setShowLoading] = useState15(() => delay ? false : loading);
  const name = `${classPrefix}-loading`;
  const centerClass = `${classPrefix}-loading--center`;
  const inheritColorClass = `${classPrefix}-loading--inherit-color`;
  const fullClass = `${classPrefix}-loading--full`;
  const fullscreenClass = `${classPrefix}-loading__fullscreen`;
  const lockClass = `${classPrefix}-loading--lock`;
  const overlayClass = `${classPrefix}-loading__overlay`;
  const relativeClass = `${classPrefix}-loading__parent`;
  const textClass = `${classPrefix}-loading__text`;
  useEffect17(() => {
    let timer;
    if (delay && loading) {
      timer = setTimeout(() => {
        setShowLoading(loading);
      }, delay);
    } else {
      setShowLoading(loading);
    }
    return () => {
      clearTimeout(timer);
    };
  }, [delay, loading]);
  const calcStyles = useMemo13(() => {
    const styles = {};
    if (zIndex !== void 0) {
      styles.zIndex = zIndex;
    }
    if (!["small", "medium", "large"].includes(size)) {
      styles.fontSize = size;
    }
    return styles;
  }, [size, zIndex]);
  const sizeMap = {
    large: `${classPrefix}-size-l`,
    small: `${classPrefix}-size-s`,
    medium: `${classPrefix}-size-m`
  };
  const baseClasses = (0, import_classnames8.default)(
    centerClass,
    sizeMap[size],
    {
      [inheritColorClass]: inheritColor
    },
    className
  );
  useEffect17(() => {
    if (preventScrollThrough && fullscreen && canUseDocument && loading) {
      addClass(document.body, lockClass);
    }
    return () => {
      removeClass(document.body, lockClass);
    };
  }, [loading, preventScrollThrough, fullscreen, lockClass]);
  const commonContent = () => {
    let renderIndicator = /* @__PURE__ */ React16.createElement(gradient_default, null);
    if (indicator && typeof indicator !== "boolean") {
      renderIndicator = indicator;
    }
    return /* @__PURE__ */ React16.createElement(React16.Fragment, null, indicator ? renderIndicator : null, text ? /* @__PURE__ */ React16.createElement("div", {
      className: textClass
    }, text) : null);
  };
  if (fullscreen) {
    return showLoading ? /* @__PURE__ */ React16.createElement("div", {
      className: (0, import_classnames8.default)(name, fullscreenClass, centerClass, overlayClass),
      style: { ...calcStyles, ...style }
    }, /* @__PURE__ */ React16.createElement("div", {
      className: baseClasses
    }, commonContent())) : null;
  }
  if (content || children) {
    return /* @__PURE__ */ React16.createElement("div", {
      className: relativeClass,
      style
    }, content || children, showLoading ? /* @__PURE__ */ React16.createElement("div", {
      className: (0, import_classnames8.default)(name, baseClasses, fullClass, {
        [overlayClass]: showOverlay
      }),
      style: calcStyles
    }, commonContent()) : null);
  }
  if (attach) {
    return /* @__PURE__ */ React16.createElement(Portal_default, {
      attach
    }, showLoading ? /* @__PURE__ */ React16.createElement("div", {
      className: (0, import_classnames8.default)(name, baseClasses, fullClass, {
        [overlayClass]: showOverlay
      }),
      style: { ...calcStyles, ...style }
    }, commonContent()) : null);
  }
  return showLoading ? /* @__PURE__ */ React16.createElement("div", {
    className: (0, import_classnames8.default)(name, baseClasses),
    style: { ...calcStyles, ...style }
  }, commonContent()) : null;
};
Loading.displayName = "Loading";
var Loading_default = Loading;

// packages/components/loading/plugin.tsx
import React17 from "react";

// packages/components/loading/index.ts
var Loading2 = Loading_default;
var loading_default = Loading2;

// ../../../../../private/tmp/tdesign-tree-visual/baseline/tree/hooks/useDraggable.tsx
import { useRef as useRef15, useState as useState16 } from "react";
import { throttle as throttle2 } from "lodash-es";
function useDraggable(props) {
  const { nodeRef, node, allowDrop } = props;
  const { onDragStart, onDragEnd, onDragLeave, onDragOver, onDrop, getDragNode } = useTreeDraggableContext();
  const [state, setState] = useState16({
    isDragOver: false,
    isDragging: false,
    dropPosition: 0
  });
  const setPartialState = usePersistFn((newState) => {
    setState((prev) => ({
      ...prev,
      ...newState
    }));
  });
  const calcDropPosition = (e) => {
    if (!window || !nodeRef.current)
      return 0;
    const rect = nodeRef.current.getBoundingClientRect();
    const offsetY = window.scrollY + rect.top;
    const { pageY } = e;
    const gapHeight = rect.height / 4;
    const diff = pageY - offsetY;
    if (diff < gapHeight)
      return -1;
    if (diff < rect.height - gapHeight)
      return 0;
    return 1;
  };
  const updateDropPosition = useRef15(
    throttle2((e) => {
      const dropPosition = calcDropPosition(e);
      const dragNode = getDragNode?.();
      const isAllowed = !allowDrop || !dragNode || allowDrop({
        e,
        dragNode: dragNode.getModel(),
        dropNode: node.getModel(),
        dropPosition
      }) !== false;
      setPartialState({ dropPosition, isDragOver: isAllowed });
    })
  ).current;
  const setDragStatus = (status, e) => {
    switch (status) {
      case "dragStart":
        setPartialState({
          isDragging: true,
          dropPosition: 0
        });
        onDragStart?.({ node, e });
        break;
      case "dragEnd":
        setPartialState({
          isDragging: false,
          isDragOver: false,
          dropPosition: 0
        });
        updateDropPosition.cancel();
        onDragEnd?.({ node, e });
        break;
      case "dragOver":
        updateDropPosition(e);
        onDragOver?.({ node, dropPosition: state.dropPosition, e });
        break;
      case "dragLeave":
        setPartialState({
          isDragOver: false
        });
        updateDropPosition.cancel();
        onDragLeave?.({ node, dropPosition: state.dropPosition, e });
        break;
      case "drop":
        onDrop?.({ node, dropPosition: state.dropPosition, e, allowDrop });
        setPartialState({
          isDragOver: false
        });
        updateDropPosition.cancel();
        break;
      default:
        break;
    }
  };
  return {
    ...state,
    setDragStatus
  };
}

// ../../../../../private/tmp/tdesign-tree-visual/baseline/tree/TreeItem.tsx
var TreeItem = forwardRef6(
  (props, ref) => {
    const {
      node,
      icon,
      label,
      line,
      expandOnClickNode,
      activable,
      checkProps,
      operations,
      onClick,
      onChange,
      isVirtual,
      onTreeItemMounted,
      allowDrop
    } = props;
    const { CaretRightSmallIcon } = useGlobalIcon({
      CaretRightSmallIcon: TdCaretRightSmallIcon
    });
    const { level } = node;
    const nodeRef = useRef16(null);
    const { treeClassNames, locale } = useTreeConfig();
    const { classPrefix } = useConfig_default();
    useEffect18(() => {
      onTreeItemMounted?.({ ref: nodeRef.current, data: node });
    }, [isVirtual, nodeRef, node, onTreeItemMounted]);
    const handleClick = (evt) => {
      const srcTarget = evt.target;
      const isBranchTrigger = node.children && expandOnClickNode && (srcTarget.className === `${classPrefix}-checkbox__input` || srcTarget.tagName.toLowerCase() === "input");
      if (isBranchTrigger)
        return;
      if (expandOnClickNode && node.children && srcTarget.className?.indexOf?.(`${classPrefix}-tree__label`) !== -1)
        evt.preventDefault();
      onClick?.(node, {
        e: evt,
        expand: expandOnClickNode,
        active: activable,
        trigger: "node-click"
      });
    };
    const handleItemClick = (evt) => {
      if (node.loading) {
        return;
      }
      onClick?.(node, {
        e: evt,
        expand: true,
        active: false,
        trigger: "icon-click"
      });
    };
    const handleIconClick = (evt) => {
      if (!icon)
        return;
      evt.stopPropagation();
      handleItemClick(evt);
    };
    const stopPropagation = (e) => {
      e.stopPropagation();
    };
    const renderIcon = () => {
      let isDefaultIcon = false;
      const renderIconNode = () => {
        if (icon === false) {
          return null;
        }
        if (icon instanceof Function) {
          return icon(node.getModel());
        }
        if (React18.isValidElement(icon)) {
          return icon;
        }
        if (icon && icon !== true) {
          throw new Error("invalid type of icon");
        }
        if (!node.isLeaf()) {
          isDefaultIcon = true;
          if (node.loading && node.expanded) {
            return /* @__PURE__ */ React18.createElement(loading_default, {
              loading: true
            });
          }
          return /* @__PURE__ */ React18.createElement(CaretRightSmallIcon, {
            className: treeClassNames.treeIconRight
          });
        }
        return null;
      };
      const iconNode = renderIconNode();
      return /* @__PURE__ */ React18.createElement("span", {
        className: (0, import_classnames9.default)(treeClassNames.treeIcon, treeClassNames.folderIcon, {
          [treeClassNames.treeIconDefault]: isDefaultIcon
        }),
        onClick: handleIconClick
      }, iconNode);
    };
    const renderLine = () => {
      const iconVisible = icon !== false;
      if (line === false) {
        return null;
      }
      if (isFunction5(line)) {
        return line(node.getModel());
      }
      if (React18.isValidElement(line)) {
        return line;
      }
      if (node.parent && node.tree) {
        const shadowStyles = [];
        const parents = node.getParents();
        parents.pop();
        parents.forEach((pnode, index) => {
          if (!pnode.vmIsLast) {
            shadowStyles.push(`calc(-${index + 1} * var(--space)) 0 var(--color)`);
          }
        });
        const styles = {
          "--level": level,
          boxShadow: shadowStyles.join(",")
        };
        return /* @__PURE__ */ React18.createElement("span", {
          className: (0, import_classnames9.default)(
            treeClassNames.line,
            {
              [treeClassNames.lineIsLeaf]: node.vmIsLeaf || !iconVisible,
              [treeClassNames.lineIsFirst]: node.vmIsFirst && iconVisible
            }
          ),
          style: styles,
          onClick: stopPropagation
        });
      }
      return null;
    };
    const [labelDom, setRefCurrent] = useDomRefCallback();
    useRipple(labelDom);
    const [, updateRender] = useState17({});
    const renderLabel = () => {
      const emptyView = locale("empty");
      let labelText = "";
      if (label instanceof Function) {
        const { setData: nodeSetData, ...rest } = node.getModel();
        labelText = label({
          ...rest,
          setData: (value) => {
            nodeSetData(value);
            updateRender({});
          }
        }) || emptyView;
      } else {
        labelText = node.label || emptyView;
      }
      const labelClasses = (0, import_classnames9.default)(treeClassNames.treeLabel, treeClassNames.treeLabelStrictly, {
        [treeClassNames.actived]: node.isActivable() ? node.actived : false
      });
      if (node.isCheckable()) {
        let checkboxProps;
        if (typeof checkProps === "function") {
          checkboxProps = checkProps(node.getModel());
        } else {
          checkboxProps = checkProps;
        }
        return /* @__PURE__ */ React18.createElement(checkbox_default, {
          ref: setRefCurrent,
          checked: node.checked,
          indeterminate: node.indeterminate,
          disabled: node.disabled,
          name: String(node.value),
          onChange: (_, ctx) => onChange(node, ctx),
          className: labelClasses,
          stopLabelTrigger: expandOnClickNode && !!node.children,
          ...checkboxProps
        }, /* @__PURE__ */ React18.createElement("span", {
          "data-target": "label"
        }, labelText));
      }
      const isCustomLabel = label instanceof Function || isValidElement2(node.label);
      return /* @__PURE__ */ React18.createElement("span", {
        ref: setRefCurrent,
        "data-target": "label",
        className: labelClasses,
        title: isCustomLabel ? void 0 : String(node.data?.text || node.label || "")
      }, /* @__PURE__ */ React18.createElement("span", {
        style: { position: "relative" }
      }, labelText));
    };
    const renderOperations = () => {
      let operationsView = null;
      if (operations) {
        if (React18.isValidElement(operations)) {
          operationsView = operations;
        } else if (operations instanceof Function) {
          const treeNodeModel = node?.getModel();
          operationsView = operations(treeNodeModel);
        } else {
          throw new Error("invalid type of operations");
        }
      }
      if (operationsView) {
        return /* @__PURE__ */ React18.createElement("span", {
          className: treeClassNames.treeOperations,
          "data-target": "operations",
          onClick: stopPropagation
        }, operationsView);
      }
      return null;
    };
    const { setDragStatus, isDragging, dropPosition, isDragOver } = useDraggable({
      node,
      nodeRef,
      allowDrop
    });
    const handleDragStart = (evt) => {
      const { node: node2 } = props;
      if (!node2.isDraggable())
        return;
      evt.stopPropagation();
      setDragStatus("dragStart", evt);
      try {
        evt.dataTransfer?.setData("text/plain", "");
      } catch (e) {
      }
    };
    const handleDragEnd = (evt) => {
      const { node: node2 } = props;
      if (!node2.isDraggable())
        return;
      evt.stopPropagation();
      setDragStatus("dragEnd", evt);
    };
    const handleDragOver = (evt) => {
      const { node: node2 } = props;
      if (!node2.isDraggable())
        return;
      evt.stopPropagation();
      evt.preventDefault();
      setDragStatus("dragOver", evt);
    };
    const handleDragLeave = (evt) => {
      const { node: node2 } = props;
      if (!node2.isDraggable())
        return;
      evt.stopPropagation();
      setDragStatus("dragLeave", evt);
    };
    const handleDrop = (evt) => {
      const { node: node2 } = props;
      if (!node2.isDraggable())
        return;
      evt.stopPropagation();
      evt.preventDefault();
      setDragStatus("drop", evt);
    };
    return /* @__PURE__ */ React18.createElement("div", {
      ref: composeRefs(ref, nodeRef),
      "data-value": node.value,
      "data-level": level,
      className: (0, import_classnames9.default)(treeClassNames.treeNode, {
        [treeClassNames.treeNodeOpen]: node.expanded,
        [treeClassNames.actived]: node.isActivable() ? node.actived : false,
        [treeClassNames.disabled]: node.isDisabled(),
        [treeClassNames.treeNodeDraggable]: !node.isDisabled() && node.isDraggable(),
        [treeClassNames.treeNodeDragging]: isDragging,
        [treeClassNames.treeNodeDragTipTop]: isDragOver && dropPosition < 0,
        [treeClassNames.treeNodeDragTipBottom]: isDragOver && dropPosition > 0,
        [treeClassNames.treeNodeDragTipHighlight]: !isDragging && isDragOver && dropPosition === 0
      }),
      style: {
        "--level": level,
        boxShadow: ""
      },
      onClick: handleClick,
      draggable: !node.isDisabled() && node.isDraggable(),
      onDragStart: handleDragStart,
      onDragEnd: handleDragEnd,
      onDragOver: handleDragOver,
      onDragLeave: handleDragLeave,
      onDrop: handleDrop
    }, renderLine(), renderIcon(), renderLabel(), renderOperations());
  }
);
TreeItem.displayName = "TreeItem";
var TreeItem_default = TreeItem;

// ../../../../../private/tmp/tdesign-tree-visual/baseline/tree/Tree.tsx
var Tree = forwardRef7((originalProps, ref) => {
  const { value, onChange, expanded, onExpand, onActive, actived, setTreeIndeterminate, indeterminate } = useControllable(originalProps);
  const props = useDefaultProps(originalProps, treeDefaultProps);
  const {
    empty,
    activable,
    disabled,
    checkable,
    checkProps,
    disableCheck,
    hover,
    icon,
    line,
    label,
    operations,
    transition,
    expandOnClickNode,
    onClick,
    scroll,
    className,
    style,
    allowDrop,
    onScroll
  } = props;
  const { treeClassNames, transitionNames, transitionClassNames, transitionDuration, locale } = useTreeConfig(transition);
  const [visibleNodes, setVisibleNodes] = useState18([]);
  const emptyText = empty || locale("empty");
  const store = useStore(
    {
      ...props,
      value,
      onChange,
      expanded,
      onExpand,
      onActive,
      actived,
      indeterminate,
      setTreeIndeterminate
    },
    initial
  );
  function initial() {
    const nodes = store?.getNodes();
    const newVisibleNodes = nodes?.filter((node) => node.visible);
    setVisibleNodes(newVisibleNodes);
  }
  const setExpanded = usePersistFn(
    (node, isExpanded, ctx) => {
      const { e, trigger } = ctx;
      const expanded2 = node.setExpanded(isExpanded);
      const treeNodeModel = node?.getModel();
      (e || trigger) && onExpand?.(expanded2, { node: treeNodeModel, e, trigger });
      return expanded2;
    }
  );
  const setIndeterminate = usePersistFn(
    (node, isIndeterminate, ctx) => {
      const { e, trigger } = ctx;
      const indeterminate2 = node.setIndeterminate(isIndeterminate);
      return indeterminate2;
    }
  );
  const treeRef = useRef17(null);
  const {
    visibleData,
    isVirtual,
    treeNodeStyle: virtualTreeNodeStyle,
    cursorStyle,
    handleRowMounted,
    scrollToElement
  } = useTreeVirtualScroll({
    treeRef,
    scroll,
    data: visibleNodes,
    onScroll
  });
  const setActived = usePersistFn(
    (node, isActived, ctx) => {
      const actived2 = node.setActived(isActived);
      const treeNodeModel = node?.getModel();
      onActive?.(actived2, { node: treeNodeModel, ...ctx });
      return actived2;
    }
  );
  const setChecked = usePersistFn(
    (node, isChecked, ctx) => {
      const checked = node.setChecked(isChecked);
      const treeNodeModel = node?.getModel();
      onChange?.(checked, { node: treeNodeModel, ...ctx });
      return checked;
    }
  );
  const handleItemClick = (node, options) => {
    if (!node) {
      return;
    }
    const isDisabled = disabled || node.disabled;
    const { expand, active, e, trigger } = options;
    if (expand)
      setExpanded(node, !node.isExpanded(), { e, trigger });
    if (!isDisabled) {
      const treeNodeModel = node?.getModel();
      if (active) {
        setActived(node, !node.isActived(), { e, trigger: "node-click" });
        onClick?.({ node: treeNodeModel, e });
      } else {
        onClick?.({ node: treeNodeModel, e });
      }
    }
  };
  const handleChange = (node, ctx) => {
    if (!node || disabled || node.disabled)
      return;
    const checked = node.toggleChecked();
    const treeNodeModel = node?.getModel();
    onChange?.(checked, { node: treeNodeModel, ...ctx, trigger: "node-click" });
  };
  const handleScrollToElement = useCallback7(
    (params) => {
      let { index } = params;
      if (!index && index !== 0) {
        if (!params.key) {
          log_default2.error("Tree", "scrollToElement: one of `index` or `key` must exist.");
          return;
        }
        const data = visibleNodes;
        index = data?.findIndex((item) => [get2(item.data, "key"), get2(item.data, "value")].includes(params.key));
        if (index < 0) {
          log_default2.error("Tree", `${params.key} does not exist in data, check \`key\` or \`data\` please.`);
        }
      }
      scrollToElement({ ...params, index });
    },
    [scrollToElement, visibleNodes]
  );
  useImperativeHandle4(
    ref,
    () => ({
      store,
      scrollTo: (p) => handleScrollToElement(p),
      appendTo(value2, newData) {
        let list = [];
        if (Array.isArray(newData)) {
          list = newData;
        } else {
          list = [newData];
        }
        list.forEach((item) => {
          store.appendNodes(value2, item);
        });
      },
      getIndex(value2) {
        return store.getNodeIndex(value2);
      },
      getItem(value2) {
        const node = store.getNode(value2);
        return node?.getModel();
      },
      getItems(value2) {
        const nodes = store.getNodes(value2);
        return nodes.map((node) => node.getModel());
      },
      getParent(value2) {
        const node = store.getParent(value2);
        return node?.getModel();
      },
      getParents(value2) {
        const nodes = store.getParents(value2);
        return nodes.map((node) => node.getModel());
      },
      getPath(value2) {
        const node = store.getNode(value2);
        let pathNodes = [];
        if (node) {
          pathNodes = node.getPath().map((node2) => node2.getModel());
        }
        return pathNodes;
      },
      insertAfter(value2, newData) {
        return store.insertAfter(value2, newData);
      },
      insertBefore(value2, newData) {
        return store.insertBefore(value2, newData);
      },
      remove(value2) {
        return store.remove(value2);
      },
      setItem(value2, options) {
        const node = this.store.getNode(value2);
        const spec = options;
        if (node && spec) {
          if ("expanded" in options) {
            setExpanded(node, spec.expanded, { trigger: "setItem" });
            delete spec.expanded;
          }
          if ("actived" in options) {
            setActived(node, spec.actived, { trigger: "setItem" });
            delete spec.actived;
          }
          if ("checked" in options) {
            setChecked(node, spec.checked, { trigger: "setItem" });
            delete spec.checked;
          }
          if ("indeterminate" in options) {
            setTreeIndeterminate((prevIndeterminate) => [...prevIndeterminate, value2]);
            setIndeterminate(node, spec.indeterminate, { trigger: "setItem" });
            delete spec.indeterminate;
          }
          node.set(spec);
        }
      }
    }),
    [store, setExpanded, setActived, setTreeIndeterminate, setChecked, setIndeterminate, handleScrollToElement]
  );
  const nodeList = useMemo14(
    () => visibleNodes.map(() => React19.createRef()),
    [visibleNodes]
  );
  const renderEmpty = () => parseTNode(emptyText);
  const renderItems = (renderNode) => {
    if (renderNode.length <= 0) {
      return renderEmpty();
    }
    if (isVirtual)
      return /* @__PURE__ */ React19.createElement("div", {
        className: treeClassNames.treeList,
        style: virtualTreeNodeStyle
      }, renderNode.map((node, index) => /* @__PURE__ */ React19.createElement(TreeItem_default, {
        ref: nodeList[index],
        key: node.value,
        node,
        keys: props.keys,
        empty,
        icon,
        label,
        line,
        allowDrop,
        transition,
        expandOnClickNode,
        activable,
        operations,
        checkProps,
        disableCheck,
        onClick: handleItemClick,
        onChange: handleChange,
        onTreeItemMounted: handleRowMounted,
        isVirtual
      })));
    return /* @__PURE__ */ React19.createElement(TransitionGroup, {
      name: transitionNames.treeNode,
      className: treeClassNames.treeList
    }, renderNode.map((node, index) => /* @__PURE__ */ React19.createElement(CSSTransition4, {
      nodeRef: nodeList[index],
      key: node.value,
      timeout: transitionDuration,
      classNames: transitionClassNames
    }, /* @__PURE__ */ React19.createElement(TreeItem_default, {
      ref: nodeList[index],
      node,
      keys: props.keys,
      empty,
      icon,
      label,
      line,
      allowDrop,
      transition,
      expandOnClickNode,
      activable,
      operations,
      checkProps,
      disableCheck,
      onClick: handleItemClick,
      onChange: handleChange
    }))));
  };
  const draggable = useMemo14(
    () => ({
      props,
      store
    }),
    [props, store]
  );
  return /* @__PURE__ */ React19.createElement(TreeDraggableContext.Provider, {
    value: draggable
  }, /* @__PURE__ */ React19.createElement("div", {
    className: (0, import_classnames10.default)(treeClassNames.tree, className, {
      [treeClassNames.disabled]: disabled,
      [treeClassNames.treeHoverable]: hover,
      [treeClassNames.treeCheckable]: checkable,
      [treeClassNames.treeFx]: transition,
      [treeClassNames.treeBlockNode]: expandOnClickNode,
      [treeClassNames.treeVscroll]: props.scroll
    }),
    style,
    ref: treeRef
  }, isVirtual ? /* @__PURE__ */ React19.createElement(React19.Fragment, null, /* @__PURE__ */ React19.createElement("div", {
    className: treeClassNames.treeVscrollCursor,
    style: cursorStyle
  }), renderItems(visibleData)) : renderItems(visibleNodes)));
});
Tree.displayName = "Tree";
var Tree_default = Tree;
export {
  Tree_default as default
};
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
