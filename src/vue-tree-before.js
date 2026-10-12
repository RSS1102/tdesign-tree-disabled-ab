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

// ../../../Users/rs/Documents/ChatGPT/tdesign-vue-next/node_modules/.pnpm/performance-now@2.1.0/node_modules/performance-now/lib/performance-now.js
var require_performance_now = __commonJS({
  "../../../Users/rs/Documents/ChatGPT/tdesign-vue-next/node_modules/.pnpm/performance-now@2.1.0/node_modules/performance-now/lib/performance-now.js"(exports, module) {
    (function() {
      var getNanoSeconds, hrtime, loadTime, moduleLoadTime, nodeLoadTime, upTime;
      if (typeof performance !== "undefined" && performance !== null && performance.now) {
        module.exports = function() {
          return performance.now();
        };
      } else if (typeof process !== "undefined" && process !== null && process.hrtime) {
        module.exports = function() {
          return (getNanoSeconds() - nodeLoadTime) / 1e6;
        };
        hrtime = process.hrtime;
        getNanoSeconds = function() {
          var hr;
          hr = hrtime();
          return hr[0] * 1e9 + hr[1];
        };
        moduleLoadTime = getNanoSeconds();
        upTime = process.uptime() * 1e9;
        nodeLoadTime = moduleLoadTime - upTime;
      } else if (Date.now) {
        module.exports = function() {
          return Date.now() - loadTime;
        };
        loadTime = Date.now();
      } else {
        module.exports = function() {
          return new Date().getTime() - loadTime;
        };
        loadTime = new Date().getTime();
      }
    }).call(exports);
  }
});

// ../../../Users/rs/Documents/ChatGPT/tdesign-vue-next/node_modules/.pnpm/raf@3.4.1/node_modules/raf/index.js
var require_raf = __commonJS({
  "../../../Users/rs/Documents/ChatGPT/tdesign-vue-next/node_modules/.pnpm/raf@3.4.1/node_modules/raf/index.js"(exports, module) {
    var now = require_performance_now();
    var root = typeof window === "undefined" ? global : window;
    var vendors = ["moz", "webkit"];
    var suffix = "AnimationFrame";
    var raf2 = root["request" + suffix];
    var caf = root["cancel" + suffix] || root["cancelRequest" + suffix];
    for (i = 0; !raf2 && i < vendors.length; i++) {
      raf2 = root[vendors[i] + "Request" + suffix];
      caf = root[vendors[i] + "Cancel" + suffix] || root[vendors[i] + "CancelRequest" + suffix];
    }
    var i;
    if (!raf2 || !caf) {
      last = 0, id = 0, queue = [], frameDuration = 1e3 / 60;
      raf2 = function(callback) {
        if (queue.length === 0) {
          var _now = now(), next = Math.max(0, frameDuration - (_now - last));
          last = next + _now;
          setTimeout(function() {
            var cp = queue.slice(0);
            queue.length = 0;
            for (var i2 = 0; i2 < cp.length; i2++) {
              if (!cp[i2].cancelled) {
                try {
                  cp[i2].callback(last);
                } catch (e) {
                  setTimeout(function() {
                    throw e;
                  }, 0);
                }
              }
            }
          }, Math.round(next));
        }
        queue.push({
          handle: ++id,
          callback,
          cancelled: false
        });
        return id;
      };
      caf = function(handle) {
        for (var i2 = 0; i2 < queue.length; i2++) {
          if (queue[i2].handle === handle) {
            queue[i2].cancelled = true;
          }
        }
      };
    }
    var last;
    var id;
    var queue;
    var frameDuration;
    module.exports = function(fn) {
      return raf2.call(root, fn);
    };
    module.exports.cancel = function() {
      caf.apply(root, arguments);
    };
    module.exports.polyfill = function(object) {
      if (!object) {
        object = root;
      }
      object.requestAnimationFrame = raf2;
      object.cancelAnimationFrame = caf;
    };
  }
});

// ../../../Users/rs/Documents/ChatGPT/tdesign-react/node_modules/.pnpm/dayjs@1.11.10/node_modules/dayjs/dayjs.min.js
var require_dayjs_min = __commonJS({
  "../../../Users/rs/Documents/ChatGPT/tdesign-react/node_modules/.pnpm/dayjs@1.11.10/node_modules/dayjs/dayjs.min.js"(exports, module) {
    !function(t2, e) {
      "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t2 = "undefined" != typeof globalThis ? globalThis : t2 || self).dayjs = e();
    }(exports, function() {
      "use strict";
      var t2 = 1e3, e = 6e4, n = 36e5, r = "millisecond", i = "second", s = "minute", u = "hour", a = "day", o = "week", c = "month", f = "quarter", h6 = "year", d = "date", l = "Invalid Date", $ = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, y = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, M = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(t3) {
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
        return { M: c, y: h6, w: o, d: a, D: d, h: u, m: s, s: i, ms: r, Q: f }[t3] || String(t3 || "").toLowerCase().replace(/s$/, "");
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
            case h6:
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
          var n2, o2 = b.p(t3), f2 = "set" + (this.$u ? "UTC" : ""), l2 = (n2 = {}, n2[a] = f2 + "Date", n2[d] = f2 + "Date", n2[c] = f2 + "Month", n2[h6] = f2 + "FullYear", n2[u] = f2 + "Hours", n2[s] = f2 + "Minutes", n2[i] = f2 + "Seconds", n2[r] = f2 + "Milliseconds", n2)[o2], $2 = o2 === a ? this.$D + (e2 - this.$W) : e2;
          if (o2 === c || o2 === h6) {
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
          if ($2 === h6)
            return this.set(h6, this.$y + r2);
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
          var r2 = t3 || "YYYY-MM-DDTHH:mm:ssZ", i2 = b.z(this), s2 = this.$H, u2 = this.$m, a2 = this.$M, o2 = n2.weekdays, c2 = n2.months, f2 = n2.meridiem, h7 = function(t4, n3, i3, s3) {
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
                  return h7(n2.monthsShort, a2, c2, 3);
                case "MMMM":
                  return h7(c2, a2);
                case "D":
                  return e2.$D;
                case "DD":
                  return b.s(e2.$D, 2, "0");
                case "d":
                  return String(e2.$W);
                case "dd":
                  return h7(n2.weekdaysMin, e2.$W, o2, 2);
                case "ddd":
                  return h7(n2.weekdaysShort, e2.$W, o2, 3);
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
            case h6:
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
      return O.prototype = k, [["$ms", r], ["$s", i], ["$m", s], ["$H", u], ["$W", a], ["$M", c], ["$y", h6], ["$D", d]].forEach(function(t3) {
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

// ../tdesign-tree-visual/node_modules/.pnpm/dayjs@1.11.10/node_modules/dayjs/locale/zh-cn.js
var require_zh_cn = __commonJS({
  "../tdesign-tree-visual/node_modules/.pnpm/dayjs@1.11.10/node_modules/dayjs/locale/zh-cn.js"(exports, module) {
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

// ../../../Users/rs/Documents/ChatGPT/tdesign-vue-next/packages/components/tree/tree.tsx
import { createVNode as _createVNode12, isVNode as _isVNode2 } from "vue";
import { isFunction as isFunction9, upperFirst } from "lodash-es";

// ../../../Users/rs/Documents/ChatGPT/tdesign-vue-next/packages/components/tree/utils/adapt.ts
import * as Vue from "vue";

// ../../../Users/rs/Documents/ChatGPT/tdesign-vue-next/packages/shared/hooks/icon/index.tsx
import { createVNode as _createVNode } from "vue";
import { isFunction } from "lodash-es";
import { getCurrentInstance, h } from "vue";

// ../../../Users/rs/Documents/ChatGPT/tdesign-vue-next/packages/shared/hooks/slot/index.ts
import {
  getCurrentInstance as getCurrentInstance3,
  Fragment as Fragment2,
  Comment as Comment2,
  isVNode as isVNode3,
  Teleport
} from "vue";
import { isArray as isArray3 } from "lodash-es";

// ../../../Users/rs/Documents/ChatGPT/tdesign-vue-next/packages/shared/utils/dom.ts
var import_raf = __toESM(require_raf());
import { isVNode, Comment } from "vue";
import { isArray, isString, isFunction as isFunction2 } from "lodash-es";
var isServer = typeof window === "undefined";
var trim = (str) => (str || "").replace(/^[\s\uFEFF]+|[\s\uFEFF]+$/g, "");
var on = (() => {
  if (!isServer && document.addEventListener) {
    return (element, event, handler, options) => {
      if (element && event && handler) {
        element.addEventListener(event, handler, options);
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
  if (!isServer && document.removeEventListener) {
    return (element, event, handler, options) => {
      if (element && event) {
        element.removeEventListener(event, handler, options);
      }
    };
  }
  return (element, event, handler) => {
    if (element && event) {
      element.detachEvent(`on${event}`, handler);
    }
  };
})();
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
function addClass(el, cls) {
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
}
function removeClass(el, cls) {
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
}
var getAttach = (node, triggerNode) => {
  const attachNode = isFunction2(node) ? node(triggerNode) : node;
  if (!attachNode) {
    return document.body;
  }
  if (isString(attachNode)) {
    return document.querySelector(attachNode);
  }
  if (attachNode instanceof HTMLElement) {
    return attachNode;
  }
  return document.body;
};
var isCommentVNode = (node) => {
  return isVNode(node) && node.type === Comment;
};

// ../../../Users/rs/Documents/ChatGPT/tdesign-vue-next/packages/shared/utils/withInstall.ts
function withInstall(comp, alias, directive) {
  const componentPlugin = comp;
  componentPlugin.install = (app, name) => {
    app.component(alias || name || componentPlugin.name, comp);
    directive && app.directive(directive.name, directive.comp);
  };
  return componentPlugin;
}

// ../../../Users/rs/Documents/ChatGPT/tdesign-vue-next/packages/shared/utils/render-tnode.ts
import { isVNode as isVNode2, Fragment, getCurrentInstance as getCurrentInstance2 } from "vue";
import { isArray as isArray2, isString as isString2, isObject } from "lodash-es";
function getDefaultNode(options) {
  let defaultNode;
  if (isObject(options) && "defaultNode" in options) {
    defaultNode = options.defaultNode;
  } else if (isVNode2(options) || isString2(options)) {
    defaultNode = options;
  }
  return defaultNode;
}
function getChildren(content) {
  const childList = [];
  const innerGetChildren = (content2) => {
    if (!isArray2(content2))
      return;
    content2.forEach((item) => {
      if (item.children && isArray2(item.children)) {
        if (item.type !== Fragment)
          return;
        innerGetChildren(item.children);
      } else {
        childList.push(item);
      }
    });
    return childList;
  };
  return innerGetChildren(content);
}
function getParams(options) {
  return isObject(options) && "params" in options ? options.params : {};
}
function getSlotFirst(options) {
  return isObject(options) && "slotFirst" in options ? options.slotFirst : false;
}

// ../../../Users/rs/Documents/ChatGPT/tdesign-vue-next/packages/shared/hooks/slot/index.ts
function useChildComponentSlots() {
  const instance = getCurrentInstance3();
  return (childComponentName, slots) => {
    if (!slots) {
      slots = instance.slots;
    }
    const content = slots?.default?.() || [];
    return getChildren(content).filter(
      (item) => item.type.name?.endsWith(childComponentName)
    );
  };
}

// ../../../Users/rs/Documents/ChatGPT/tdesign-vue-next/packages/shared/hooks/tnode/index.ts
import { h as h2, getCurrentInstance as getCurrentInstance4 } from "vue";
import { camelCase, kebabCase, isFunction as isFunction4, isString as isString3, isObject as isObject3 } from "lodash-es";

// ../tdesign-tree-visual/baseline/js/utils/general.ts
import { isFunction as isFunction3, isObject as isObject2 } from "lodash-es";
var { hasOwnProperty } = Object.prototype;
var hasOwn = (val, key) => hasOwnProperty.call(val, key);
var getPropertyValFromObj = (val, key) => hasOwn(val, key) ? val[key] : void 0;

// ../../../Users/rs/Documents/ChatGPT/tdesign-vue-next/packages/shared/hooks/tnode/index.ts
function handleSlots(instance, name, params) {
  let node = instance.slots[camelCase(name)]?.(params);
  if (node && node.filter((t2) => !isCommentVNode(t2)).length)
    return node;
  node = instance.slots[kebabCase(name)]?.(params);
  if (node && node.filter((t2) => !isCommentVNode(t2)).length)
    return node;
  return null;
}
function isEmptyNode(node) {
  if ([void 0, null, ""].includes(node))
    return true;
  const innerNodes = node instanceof Array ? node : [node];
  const r = innerNodes.filter((node2) => node2?.type?.toString() !== "Symbol(Comment)");
  return !r.length;
}
function isPropExplicitlySet(instance, propName) {
  const vProps = instance?.vnode.props || {};
  return hasOwn(vProps, camelCase(propName)) || hasOwn(vProps, kebabCase(propName));
}
var useTNodeJSX = () => {
  const instance = getCurrentInstance4();
  return function(name, options) {
    const renderParams = getParams(options);
    const defaultNode = getDefaultNode(options);
    const isSlotFirst = getSlotFirst(options);
    const renderSlot = instance.slots[camelCase(name)] || instance.slots[kebabCase(name)];
    if (isSlotFirst && renderSlot) {
      return handleSlots(instance, name, renderParams);
    } else {
      if (isPropExplicitlySet(instance, name)) {
        const propsNode2 = instance.props[camelCase(name)] || instance.props[kebabCase(name)];
        const types = instance.type.props[name]?.type;
        if (types?.length > 1) {
          if (types.includes(Boolean) && types.includes(Function)) {
            if (propsNode2 === "" && !renderSlot)
              return defaultNode;
          }
        }
        if (propsNode2 === false || propsNode2 === null)
          return;
        if (propsNode2 === true) {
          return handleSlots(instance, name, renderParams) || defaultNode;
        }
        if (isFunction4(propsNode2))
          return propsNode2(h2, renderParams);
        const isPropsEmpty = [void 0, ""].includes(propsNode2);
        if (isPropsEmpty && renderSlot) {
          return handleSlots(instance, name, renderParams);
        }
        return propsNode2;
      }
      if (renderSlot) {
        return handleSlots(instance, name, renderParams);
      }
      const propsNode = instance.props[camelCase(name)] || instance.props[kebabCase(name)];
      if (propsNode === false || propsNode === null)
        return;
      if (propsNode === true) {
        return defaultNode;
      }
      if (isFunction4(propsNode))
        return propsNode(h2, renderParams);
      return propsNode;
    }
  };
};
var useContent = () => {
  const renderTNodeJSX = useTNodeJSX();
  return function(name1, name2, options) {
    const params = getParams(options);
    const defaultNode = getDefaultNode(options);
    const toParams = params ? { params } : void 0;
    const node1 = renderTNodeJSX(name1, toParams);
    const node2 = renderTNodeJSX(name2, toParams);
    const res = isEmptyNode(node1) ? node2 : node1;
    return isEmptyNode(res) ? defaultNode : res;
  };
};

// ../../../Users/rs/Documents/ChatGPT/tdesign-vue-next/packages/shared/hooks/useCommonClassName/index.ts
import { computed as computed3 } from "vue";

// ../../../Users/rs/Documents/ChatGPT/tdesign-vue-next/packages/shared/hooks/useConfig/index.ts
import { computed as computed2 } from "vue";

// ../../../Users/rs/Documents/ChatGPT/tdesign-vue-next/packages/components/config-provider/hooks/useConfig.ts
import { computed, h as h3, inject, getCurrentInstance as getCurrentInstance5, ref, provide } from "vue";
import { cloneDeep, isFunction as isFunction5 } from "lodash-es";

// ../../../Users/rs/Documents/ChatGPT/tdesign-vue-next/packages/components/config-provider/utils/context.ts
import { mergeWith as _mergeWith, merge, isArray as isArray4 } from "lodash-es";

// ../tdesign-tree-visual/baseline/js/global-config/default-config.ts
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

// ../tdesign-tree-visual/baseline/js/global-config/locale/zh_CN.ts
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

// ../../../Users/rs/Documents/ChatGPT/tdesign-vue-next/packages/components/config-provider/utils/context.ts
var EAnimationType = /* @__PURE__ */ ((EAnimationType2) => {
  EAnimationType2["ripple"] = "ripple";
  EAnimationType2["expand"] = "expand";
  EAnimationType2["fade"] = "fade";
  return EAnimationType2;
})(EAnimationType || {});
var defaultGlobalConfig = merge(default_config_default, zh_CN_default);
var configProviderInjectKey = Symbol("configProvide");

// ../tdesign-tree-visual/baseline/js/global-config/t.ts
import { isString as isString4 } from "lodash-es";
function getPluralIndex(count) {
  if (count === 0)
    return 0;
  if (count === 1)
    return 1;
  return 2;
}
function t(pattern, ...args) {
  if (isString4(pattern)) {
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

// ../../../Users/rs/Documents/ChatGPT/tdesign-vue-next/packages/components/config-provider/hooks/useConfig.ts
var globalConfigCopy = ref();
function useConfig(componentName = void 0, componentLocale) {
  let injectGlobalConfig = null;
  if (getCurrentInstance5()) {
    injectGlobalConfig = inject(configProviderInjectKey, null);
    if (!injectGlobalConfig) {
      injectGlobalConfig = globalConfigCopy;
    }
  } else {
    injectGlobalConfig = globalConfigCopy;
  }
  const mergedGlobalConfig = computed(() => injectGlobalConfig?.value || defaultGlobalConfig);
  const globalConfig = computed(() => Object.assign({}, mergedGlobalConfig.value[componentName], componentLocale));
  const classPrefix = computed(() => {
    return mergedGlobalConfig.value.classPrefix;
  });
  const t2 = function(pattern, ...args) {
    if (isFunction5(pattern)) {
      if (!args.length)
        return pattern(h3);
      return pattern(...args);
    }
    return t(pattern, ...args);
  };
  return {
    t: t2,
    global: globalConfig,
    globalConfig,
    classPrefix
  };
}

// ../../../Users/rs/Documents/ChatGPT/tdesign-vue-next/packages/shared/hooks/useConfig/index.ts
function usePrefixClass(componentName) {
  const { classPrefix } = useConfig("classPrefix");
  return computed2(() => {
    return componentName ? `${classPrefix.value}-${componentName}` : classPrefix.value;
  });
}

// ../../../Users/rs/Documents/ChatGPT/tdesign-vue-next/packages/shared/hooks/useCommonClassName/index.ts
function useCommonClassName() {
  const { classPrefix } = useConfig("classPrefix");
  return {
    classPrefix,
    SIZE: computed3(() => ({
      small: `${classPrefix.value}-size-s`,
      medium: `${classPrefix.value}-size-m`,
      large: `${classPrefix.value}-size-l`,
      default: "",
      xs: `${classPrefix.value}-size-xs`,
      xl: `${classPrefix.value}-size-xl`,
      block: `${classPrefix.value}-size-full-width`
    })),
    STATUS: computed3(() => ({
      loading: `${classPrefix.value}-is-loading`,
      loadMore: `${classPrefix.value}-is-load-more`,
      disabled: `${classPrefix.value}-is-disabled`,
      focused: `${classPrefix.value}-is-focused`,
      success: `${classPrefix.value}-is-success`,
      error: `${classPrefix.value}-is-error`,
      warning: `${classPrefix.value}-is-warning`,
      selected: `${classPrefix.value}-is-selected`,
      active: `${classPrefix.value}-is-active`,
      checked: `${classPrefix.value}-is-checked`,
      current: `${classPrefix.value}-is-current`,
      hidden: `${classPrefix.value}-is-hidden`,
      visible: `${classPrefix.value}-is-visible`,
      expanded: `${classPrefix.value}-is-expanded`,
      indeterminate: `${classPrefix.value}-is-indeterminate`
    }))
  };
}

// ../../../Users/rs/Documents/ChatGPT/tdesign-vue-next/packages/shared/hooks/useDefaultValue/index.ts
import { ref as ref2, getCurrentInstance as getCurrentInstance6, unref } from "vue";
import { kebabCase as kebabCase2 } from "lodash-es";
function useDefaultValue(value, defaultValue, onChange, propsName) {
  const { emit, vnode } = getCurrentInstance6();
  const internalValue = ref2();
  const triggerChange = (newValue, ...args) => {
    unref(onChange)?.(newValue, ...args);
  };
  const vProps = vnode.props || {};
  const isVMP = Object.prototype.hasOwnProperty.call(vProps, propsName) || Object.prototype.hasOwnProperty.call(vProps, kebabCase2(propsName));
  if (isVMP) {
    return [
      value,
      (newValue, ...args) => {
        emit(`update:${propsName}`, newValue);
        triggerChange(newValue, ...args);
      }
    ];
  }
  internalValue.value = defaultValue;
  return [
    internalValue,
    (newValue, ...args) => {
      internalValue.value = newValue;
      triggerChange(newValue, ...args);
    }
  ];
}

// ../../../Users/rs/Documents/ChatGPT/tdesign-vue-next/packages/shared/hooks/useDestroyOnClose/index.ts
import { ref as ref3, provide as provide2, onUpdated } from "vue";

// ../../../Users/rs/Documents/ChatGPT/tdesign-vue-next/packages/shared/hooks/useDisabled/index.ts
import { inject as inject2, computed as computed4, getCurrentInstance as getCurrentInstance7 } from "vue";
import { isArray as isArray5, isBoolean } from "lodash-es";
function useDisabled(context) {
  const currentInstance = getCurrentInstance7();
  const componentDisabled = computed4(() => currentInstance.props.disabled);
  const formDisabled = inject2("formDisabled", /* @__PURE__ */ Object.create(null));
  return computed4(() => {
    if (isArray5(componentDisabled.value) && componentDisabled.value.length === 2)
      return componentDisabled.value;
    if (isBoolean(context?.beforeDisabled?.value))
      return context.beforeDisabled.value;
    if (isBoolean(componentDisabled.value))
      return componentDisabled.value;
    if (isBoolean(context?.afterDisabled?.value))
      return context.afterDisabled.value;
    if (isBoolean(formDisabled.disabled?.value))
      return formDisabled.disabled.value;
    return false;
  });
}

// ../../../Users/rs/Documents/ChatGPT/tdesign-vue-next/packages/shared/hooks/useDragSort/index.ts
import { onUnmounted } from "vue";

// ../../../Users/rs/Documents/ChatGPT/tdesign-vue-next/packages/shared/hooks/useElementLazyRender/index.ts
import { onBeforeUnmount, onMounted, ref as ref4, watch } from "vue";

// ../tdesign-tree-visual/baseline/js/utils/observe.ts
function observe(element, root, callback, marginBottom) {
  if (typeof window === "undefined")
    return null;
  if (!window || !window.IntersectionObserver) {
    callback();
    return null;
  }
  let io = null;
  try {
    io = new window.IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          callback();
          io.unobserve(element);
        }
      },
      {
        rootMargin: `0px 0px ${marginBottom}px 0px`,
        root
      }
    );
    io.observe(element);
  } catch (e) {
    console.error(e);
    callback();
  }
  return io;
}

// ../../../Users/rs/Documents/ChatGPT/tdesign-vue-next/packages/shared/hooks/useGlobalIcon/index.ts
function useGlobalIcon(tdIcon) {
  const { globalConfig } = useConfig("icon");
  const resultIcon = {};
  Object.keys(tdIcon).forEach((key) => {
    resultIcon[key] = globalConfig.value?.[key] || tdIcon[key];
  });
  return resultIcon;
}

// ../../../Users/rs/Documents/ChatGPT/tdesign-vue-next/packages/shared/hooks/useImagePreviewUrl/index.ts
import { ref as ref5, watch as watch2 } from "vue";

// ../tdesign-tree-visual/baseline/js/log/log.ts
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

// ../../../Users/rs/Documents/ChatGPT/tdesign-vue-next/packages/shared/hooks/useKeepAnimation/index.ts
var { expand, ripple, fade } = EAnimationType;
function useKeepAnimation() {
  const { globalConfig } = useConfig("animation");
  const keepAnimation = (type) => {
    const animationConfig = globalConfig.value;
    return animationConfig && !animationConfig.exclude?.includes(type) && animationConfig.include?.includes(type);
  };
  return {
    keepExpand: keepAnimation(expand),
    keepRipple: keepAnimation(ripple),
    keepFade: keepAnimation(fade)
  };
}

// ../../../Users/rs/Documents/ChatGPT/tdesign-vue-next/packages/shared/hooks/useLazyLoad/index.ts
import { ref as ref6, onMounted as onMounted2, computed as computed5, nextTick } from "vue";
function useLazyLoad(containerRef, childRef, params) {
  const tRowHeight = computed5(() => Math.max(params.rowHeight || 48, 48));
  const isInit = ref6(false);
  const hasLazyLoadHolder = computed5(() => params?.type === "lazy" && !isInit.value);
  const requestAnimationFrame = !isServer && window.requestAnimationFrame || ((cb) => setTimeout(cb, 16.6));
  const init = () => {
    if (!isInit.value) {
      requestAnimationFrame(() => {
        isInit.value = true;
      });
    }
  };
  onMounted2(() => {
    if (params?.type !== "lazy")
      return;
    nextTick(() => {
      const bufferSize = Math.max(10, params.bufferSize || 10);
      const height = tRowHeight.value * bufferSize;
      observe(childRef.value, containerRef.value, init, height);
    });
  });
  return {
    hasLazyLoadHolder,
    tRowHeight
  };
}

// ../../../Users/rs/Documents/ChatGPT/tdesign-vue-next/packages/shared/hooks/useListener/index.ts
import { onBeforeUnmount as onBeforeUnmount2, onMounted as onMounted3 } from "vue";

// ../../../Users/rs/Documents/ChatGPT/tdesign-vue-next/packages/shared/hooks/usePopupManager/index.ts
import { onMounted as onMounted4, onBeforeUnmount as onBeforeUnmount3, readonly, ref as ref7, watch as watch3 } from "vue";
var popupStackType = ["dialog", "drawer"];
var POPUP_BASE_Z_INDEX = 1e3;
var MESSAGE_BASE_Z_INDEX = 5e3;
var Z_INDEX_STEP = 1;
var PopupManager = class {
  popupStack = {
    popup: /* @__PURE__ */ new Set(),
    dialog: /* @__PURE__ */ new Set(),
    message: /* @__PURE__ */ new Set(),
    drawer: /* @__PURE__ */ new Set()
  };
  zIndexStack = [];
  getNextZIndex = (type) => {
    const current = type === "message" ? Array.from(this.popupStack.message).pop() || MESSAGE_BASE_Z_INDEX : Array.from(this.popupStack.popup).pop() || POPUP_BASE_Z_INDEX;
    return current + Z_INDEX_STEP;
  };
  add = (type) => {
    const zIndex = this.getNextZIndex(type);
    this.popupStack[type].add(zIndex);
    if (popupStackType.includes(type)) {
      this.popupStack.popup.add(zIndex);
    }
    this.zIndexStack.push(zIndex);
    return zIndex;
  };
  delete = (zIndex, type) => {
    this.popupStack[type].delete(zIndex);
    if (popupStackType.includes(type)) {
      this.popupStack.popup.delete(zIndex);
    }
    const index = this.zIndexStack.indexOf(zIndex);
    if (index !== -1) {
      this.zIndexStack.splice(index, 1);
    }
  };
  isTopInteractivePopup = (popupType, zIndex) => {
    if (popupStackType.includes(popupType)) {
      const lastZIndex = this.zIndexStack[this.zIndexStack.length - 1];
      return zIndex === lastZIndex;
    }
    if (this.popupStack[popupType]?.size > 1) {
      return zIndex === Array.from(this.popupStack[popupType]).pop();
    }
    return true;
  };
  getLastZIndex = () => {
    return this.zIndexStack[this.zIndexStack.length - 1];
  };
};
var popupManager = new PopupManager();

// ../../../Users/rs/Documents/ChatGPT/tdesign-vue-next/packages/shared/hooks/useReadonly/index.ts
import { inject as inject3, computed as computed6, getCurrentInstance as getCurrentInstance8 } from "vue";
import { isBoolean as isBoolean2 } from "lodash-es";
function useReadonly(context) {
  const currentInstance = getCurrentInstance8();
  const componentReadonly = computed6(() => currentInstance.props.readonly);
  const formReadonly = inject3("formReadonly", /* @__PURE__ */ Object.create(null));
  return computed6(() => {
    if (isBoolean2(context?.beforeReadonly?.value))
      return context.beforeReadonly.value;
    if (isBoolean2(componentReadonly?.value))
      return componentReadonly.value;
    if (isBoolean2(context?.afterReadonly?.value))
      return context.afterReadonly.value;
    if (isBoolean2(formReadonly.readonly?.value))
      return formReadonly.readonly.value;
    return false;
  });
}

// ../../../Users/rs/Documents/ChatGPT/tdesign-vue-next/packages/shared/hooks/useResizeObserver/index.ts
import { watch as watch4, onBeforeUnmount as onBeforeUnmount4 } from "vue";
function useResizeObserver(container, callback) {
  if (typeof window === "undefined")
    return;
  const isSupport = window && window.ResizeObserver;
  if (!isSupport)
    return;
  let containerObserver = null;
  const cleanupObserver = () => {
    if (!containerObserver || !container.value)
      return;
    containerObserver.unobserve(container.value);
    containerObserver.disconnect();
    containerObserver = null;
  };
  const addObserver = (el) => {
    containerObserver = new ResizeObserver(callback);
    containerObserver.observe(el);
  };
  container && watch4(
    container,
    (el) => {
      cleanupObserver();
      el && addObserver(el);
    },
    { immediate: true, flush: "post" }
  );
  onBeforeUnmount4(() => {
    cleanupObserver();
  });
}

// ../../../Users/rs/Documents/ChatGPT/tdesign-vue-next/packages/shared/hooks/useRipple/index.ts
import { ref as ref8, onMounted as onMounted5, onUnmounted as onUnmounted2 } from "vue";

// ../tdesign-tree-visual/baseline/js/utils/setStyle.ts
function setStyle(el, styles) {
  if (!el)
    return;
  const keys = Object.keys(styles);
  keys.forEach((key) => {
    el.style[key] = styles[key];
  });
}
var setStyle_default = setStyle;

// ../../../Users/rs/Documents/ChatGPT/tdesign-vue-next/packages/shared/hooks/useRipple/index.ts
var period = 200;
var rippleExtraWidth = 20;
var rippleSkew = "skewX(-8deg)";
var elementTransitionPeriod = 200;
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
  if (el instanceof Element) {
    const cssVariable = getComputedStyle(el).getPropertyValue("--ripple-color");
    if (cssVariable) {
      return cssVariable;
    }
  }
  return defaultRippleColor;
};
function useRipple(el, fixedRippleColor) {
  const rippleContainer = ref8(null);
  const classPrefix = usePrefixClass();
  const { keepRipple } = useKeepAnimation();
  const handleAddRipple = (e) => {
    const dom = el.value;
    if (!dom || !(dom instanceof Element))
      return;
    const rippleColor = getRippleColor(dom, fixedRippleColor?.value);
    if (e.button !== 0 || !el || !keepRipple)
      return;
    if (dom.classList.contains(`${classPrefix.value}-is-active`) || dom.classList.contains(`${classPrefix.value}-is-disabled`) || dom.classList.contains(`${classPrefix.value}-is-checked`) || dom.classList.contains(`${classPrefix.value}-is-loading`))
      return;
    if (!(dom instanceof Element))
      return;
    const elStyle = getComputedStyle(dom);
    const elBorder = parseInt(elStyle.borderWidth, 10);
    const border = elBorder > 0 ? elBorder : 0;
    if (rippleContainer.value.parentNode === null) {
      setStyle_default(rippleContainer.value, {
        position: "absolute",
        left: `${0 - border}px`,
        top: `${0 - border}px`,
        width: `calc(100% + ${border * 2}px)`,
        height: `calc(100% + ${border * 2}px)`,
        borderRadius: elStyle.borderRadius,
        pointerEvents: "none",
        overflow: "hidden"
      });
      dom.appendChild(rippleContainer.value);
    }
    const ripple2 = document.createElement("div");
    setStyle_default(ripple2, {
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
    for (let n = dom.children.length, i = 0; i < n; ++i) {
      const child = dom.children[i];
      if (child.style.zIndex === "" && child !== rippleContainer.value) {
        child.style.zIndex = "1";
        elMap.set(child, true);
      }
    }
    let initPosition = dom.style.position;
    if (!initPosition && dom instanceof Element) {
      initPosition = getComputedStyle(dom).position;
    }
    if (initPosition === "" || initPosition === "static") {
      dom.style.position = "relative";
    }
    rippleContainer.value.insertBefore(ripple2, rippleContainer.value.firstChild);
    setTimeout(() => {
      ripple2.style.transform = `translateX(calc(100% - ${rippleExtraWidth}px)) ${rippleSkew}`;
    }, 0);
    let cleared = false;
    let classChangeObserver = null;
    const handleClearRipple = () => {
      if (cleared)
        return;
      cleared = true;
      ripple2.style.backgroundColor = noneRippleBg;
      if (classChangeObserver) {
        classChangeObserver.disconnect();
        classChangeObserver = null;
      }
      if (el.value) {
        el.value.removeEventListener("pointerup", handleClearRipple, false);
        el.value.removeEventListener("pointerleave", handleClearRipple, false);
      }
      setTimeout(() => {
        ripple2.remove();
        if (rippleContainer.value.children.length === 0)
          rippleContainer.value.remove();
      }, period * 2 + 100);
    };
    if (typeof MutationObserver !== "undefined") {
      classChangeObserver = new MutationObserver(() => {
        if (!dom || !(dom instanceof Element))
          return;
        const cls = dom.classList;
        if (cls.contains(`${classPrefix.value}-is-loading`) || cls.contains(`${classPrefix.value}-is-disabled`) || cls.contains(`${classPrefix.value}-is-active`) || cls.contains(`${classPrefix.value}-is-checked`)) {
          ripple2.style.transition = `transform ${period}ms cubic-bezier(.38, 0, .24, 1), background ${elementTransitionPeriod}ms linear`;
          handleClearRipple();
        }
      });
      classChangeObserver.observe(dom, { attributes: true, attributeFilter: ["class"] });
    }
    el.value.addEventListener("pointerup", handleClearRipple, false);
    el.value.addEventListener("pointerleave", handleClearRipple, false);
  };
  onMounted5(() => {
    const dom = el?.value;
    if (!dom)
      return;
    rippleContainer.value = document.createElement("div");
    dom.addEventListener("pointerdown", handleAddRipple, false);
  });
  onUnmounted2(() => {
    el?.value?.removeEventListener("pointerdown", handleAddRipple, false);
  });
}

// ../../../Users/rs/Documents/ChatGPT/tdesign-vue-next/packages/shared/hooks/useTeleport/index.ts
import { computed as computed7, onMounted as onMounted6, ref as ref9, watch as watch5 } from "vue";
import { isFunction as isFunction6 } from "lodash-es";
function useTeleport(attach, triggerNode) {
  const to = isFunction6(attach) ? computed7(attach) : ref9(attach);
  const innerTriggerNode = isFunction6(triggerNode) ? computed7(triggerNode) : ref9(triggerNode);
  const element = ref9();
  const getElement = () => {
    element.value = getAttach(to.value, innerTriggerNode.value);
  };
  onMounted6(() => getElement());
  watch5([to, innerTriggerNode], () => getElement());
  return element;
}

// ../../../Users/rs/Documents/ChatGPT/tdesign-vue-next/packages/shared/hooks/useVModel/index.ts
import { ref as ref10, getCurrentInstance as getCurrentInstance9, unref as unref2 } from "vue";
import { kebabCase as kebabCase3 } from "lodash-es";
function useVModel(value, modelValue, defaultValue, onChange, propName = "value") {
  const { emit, vnode } = getCurrentInstance9();
  const internalValue = ref10();
  const triggerChange = (newValue, ...args) => {
    unref2(onChange)?.(newValue, ...args);
  };
  const vProps = vnode.props || {};
  const isVM = Object.prototype.hasOwnProperty.call(vProps, "modelValue") || Object.prototype.hasOwnProperty.call(vProps, "model-value");
  const isVMP = Object.prototype.hasOwnProperty.call(vProps, propName) || Object.prototype.hasOwnProperty.call(vProps, kebabCase3(propName));
  if (isVM) {
    return [
      modelValue,
      (newValue, ...args) => {
        emit("update:modelValue", newValue);
        triggerChange(newValue, ...args);
      }
    ];
  }
  if (isVMP) {
    return [
      value,
      (newValue, ...args) => {
        emit(`update:${propName}`, newValue);
        triggerChange(newValue, ...args);
      }
    ];
  }
  internalValue.value = defaultValue;
  return [
    internalValue,
    (newValue, ...args) => {
      internalValue.value = newValue;
      triggerChange(newValue, ...args);
    }
  ];
}

// ../../../Users/rs/Documents/ChatGPT/tdesign-vue-next/packages/shared/hooks/useVirtualScroll/index.ts
import { ref as ref11, toRefs, reactive, onMounted as onMounted7, computed as computed8, watch as watch6, nextTick as nextTick2 } from "vue";

// ../../../Users/rs/Documents/ChatGPT/tdesign-vue-next/packages/shared/hooks/useVirtualScrollNew/index.ts
import { ref as ref12, computed as computed9, watch as watch7 } from "vue";
import { max, min, sum, throttle } from "lodash-es";
function useVirtualScrollNew(container, params) {
  const visibleData = ref12([]);
  const translateY = ref12((params.value.data?.length || 0) * (params.value.scroll?.rowHeight || 50));
  const scrollHeight = ref12(0);
  let trHeightList = [];
  const containerHeight = ref12(0);
  const containerWidth = ref12(0);
  const startAndEndIndex = ref12([0, 15]);
  const tScroll = computed9(() => {
    const { scroll } = params.value;
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
  });
  const isVirtualScroll = computed9(() => {
    const { data } = params.value;
    return tScroll.value.type === "virtual" && tScroll.value.threshold < data.length;
  });
  function getVisibleRangeConfig() {
    const scrollTop = container.value?.scrollTop ?? 0;
    const fixedStart = tScroll.value.fixedRows[0];
    const prevBufferHeightList = [];
    let hiddenHeight = 0;
    let visibleStart = -1;
    let visibleEnd = -1;
    let totalHeight = 0;
    for (let i = 0, len = params.value.data.length; i < len; i++) {
      const rowHeight = trHeightList[i] ?? tScroll.value.rowHeight;
      totalHeight = totalHeight + rowHeight;
      if (totalHeight > scrollTop && visibleStart === -1) {
        visibleStart = i;
        if (visibleStart - tScroll.value.bufferSize > 0) {
          hiddenHeight = totalHeight - rowHeight - sum(prevBufferHeightList);
        }
      }
      if (visibleStart === -1) {
        prevBufferHeightList.push(rowHeight);
        if (prevBufferHeightList.length > tScroll.value.bufferSize) {
          prevBufferHeightList.shift();
        }
      }
      if (visibleEnd === -1 && (totalHeight > containerHeight.value + scrollTop || i === params.value.data.length - 1)) {
        visibleEnd = i;
      }
      if (visibleStart !== -1 && visibleEnd !== -1) {
        break;
      }
    }
    const startIndex = max([visibleStart - tScroll.value.bufferSize, 0]);
    const endIndex = min([visibleEnd + tScroll.value.bufferSize, params.value.data.length]);
    const stickyHeight = sum(trHeightList.slice(0, Math.min(startIndex, fixedStart)));
    return {
      startIndex,
      endIndex,
      translateY: hiddenHeight - stickyHeight
    };
  }
  const updateVisibleData = throttle(() => {
    const { startIndex, endIndex, translateY: translateYValue } = getVisibleRangeConfig();
    const fixedRows = tScroll.value.fixedRows;
    const [fixedStart, fixedEnd] = fixedRows;
    let fixedStartData = fixedStart ? params.value.data.slice(0, fixedStart) : [];
    if (fixedStart && startIndex < fixedStart) {
      fixedStartData = fixedStartData.slice(0, startIndex);
    }
    let fixedEndData = fixedEnd ? params.value.data.slice(params.value.data.length - fixedEnd) : [];
    const bottomStartIndex = endIndex - params.value.data.length + 1 + (fixedEnd ?? 0);
    if (fixedEnd && bottomStartIndex > 0) {
      fixedEndData = fixedEndData.slice(bottomStartIndex);
    }
    if (startAndEndIndex.value.join() !== [startIndex, endIndex].join() && startIndex >= 0) {
      translateY.value = translateYValue;
      visibleData.value = fixedStartData.concat(params.value.data.slice(startIndex, endIndex), fixedEndData);
      startAndEndIndex.value = [startIndex, endIndex];
    }
  }, 100);
  const handleRowMounted = (rowData) => {
    if (!isVirtualScroll.value || !rowData || tScroll.value.isFixedRowHeight || !container.value)
      return;
    const trHeight = rowData.ref.value?.getBoundingClientRect().height || tScroll.value.rowHeight;
    const rowIndex = rowData.data.VIRTUAL_SCROLL_INDEX;
    if (trHeightList[rowIndex] !== trHeight) {
      const diff = trHeight - trHeightList[rowIndex];
      trHeightList[rowIndex] = trHeight;
      scrollHeight.value = scrollHeight.value + diff;
    }
  };
  const handleScroll = () => {
    if (!isVirtualScroll.value)
      return;
    updateVisibleData();
  };
  const refreshVirtualScroll = ([{ contentRect }]) => {
    if (params.value.preventResizeRefresh)
      return;
    const maxScrollbarWidth = 16;
    if (Math.abs(contentRect.width - containerWidth.value) > maxScrollbarWidth && !!container.value) {
      container.value.scrollTop = 0;
      translateY.value = 0;
    }
    containerWidth.value = contentRect.width;
    containerHeight.value = contentRect.height;
  };
  const addIndexToData = (data) => {
    data.forEach((item, index) => {
      item["VIRTUAL_SCROLL_INDEX"] = index;
    });
  };
  const updateScrollTop = ({ index, top = 0, behavior }) => {
    const scrollTop = sum(trHeightList.slice(0, index + 1)) - top;
    container.value.scrollTo({
      top: scrollTop,
      behavior: behavior || "auto"
    });
  };
  const scrollToElement = (p) => {
    updateScrollTop(p);
    if (!tScroll.value.isFixedRowHeight) {
      const duration = p.time ?? 60;
      const timer = setTimeout(() => {
        updateScrollTop(p);
        clearTimeout(timer);
      }, duration);
    }
  };
  useResizeObserver(
    computed9(() => isVirtualScroll.value ? container.value : void 0),
    refreshVirtualScroll
  );
  watch7(
    () => [[...params.value.data], tScroll.value, isVirtualScroll.value, container.value],
    () => {
      if (!isVirtualScroll.value || !container.value)
        return;
      const { data } = params.value;
      addIndexToData(data);
      containerHeight.value = container.value.getBoundingClientRect().height;
      if (trHeightList.length !== params.value.data.length) {
        const initHeightList = Array.from(trHeightList);
        initHeightList.length = params.value.data.length;
        initHeightList.fill(tScroll.value.rowHeight || 47);
        trHeightList = initHeightList;
      }
      scrollHeight.value = sum(trHeightList);
      startAndEndIndex.value = [0, 0];
      updateVisibleData();
    },
    { immediate: true }
  );
  watch7(
    () => containerHeight.value,
    () => {
      updateVisibleData();
    }
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
}

// ../../../Users/rs/Documents/ChatGPT/tdesign-vue-next/packages/shared/hooks/useMutationObservable/index.ts
import { onBeforeUnmount as onBeforeUnmount5, onMounted as onMounted8, ref as ref13, watch as watch8 } from "vue";
import { debounce, isEqual } from "lodash-es";

// ../../../Users/rs/Documents/ChatGPT/tdesign-vue-next/packages/shared/hooks/useVariables/index.ts
import { nextTick as nextTick3, ref as ref14 } from "vue";

// ../tdesign-tree-visual/baseline/js/common.ts
var CHECKED_CODE_REG = /^(Enter|Space)$/i;

// ../../../Users/rs/Documents/ChatGPT/tdesign-vue-next/packages/shared/hooks/useEventForward/index.ts
import { computed as computed10 } from "vue";

// ../../../Users/rs/Documents/ChatGPT/tdesign-vue-next/packages/components/tree/utils/adapt.ts
import { ref as ref21, reactive as reactive3, computed as computed14, watch as watch12, onMounted as onMounted12, toRefs as toRefs5, defineComponent as defineComponent6, TransitionGroup } from "vue";
import { CaretRightSmallIcon } from "tdesign-icons-vue-next";

// ../../../Users/rs/Documents/ChatGPT/tdesign-vue-next/packages/components/checkbox/checkbox.tsx
import { defineComponent, ref as ref16, toRefs as toRefs2, inject as inject4, watch as watch10, computed as computed11, createVNode as _createVNode2 } from "vue";
import { isString as isString5 } from "lodash-es";

// ../../../Users/rs/Documents/ChatGPT/tdesign-vue-next/packages/components/checkbox/props.ts
var props_default = {
  checkAll: Boolean,
  checked: {
    type: Boolean,
    default: void 0
  },
  modelValue: {
    type: Boolean,
    default: void 0
  },
  defaultChecked: Boolean,
  default: {
    type: [String, Function]
  },
  disabled: {
    type: Boolean,
    default: void 0
  },
  indeterminate: Boolean,
  label: {
    type: [String, Function]
  },
  lazyLoad: Boolean,
  name: {
    type: String,
    default: ""
  },
  readonly: {
    type: Boolean,
    default: void 0
  },
  title: {
    type: String,
    default: ""
  },
  value: {
    type: [String, Number, Boolean]
  },
  onChange: Function
};

// ../../../Users/rs/Documents/ChatGPT/tdesign-vue-next/packages/components/checkbox/constants/index.ts
var CheckboxGroupInjectionKey = Symbol("CheckboxGroupProvide");

// ../../../Users/rs/Documents/ChatGPT/tdesign-vue-next/packages/components/checkbox/hooks/useCheckboxLazyLoad.ts
import { onBeforeUnmount as onBeforeUnmount6, onMounted as onMounted9, ref as ref15, watch as watch9 } from "vue";
function useCheckboxLazyLoad(labelRef, lazyLoad) {
  const ioObserver = ref15();
  const showCheckbox = ref15(true);
  const handleLazyLoad = () => {
    if (!lazyLoad.value)
      return;
    showCheckbox.value = false;
    const io = observe(
      labelRef.value,
      null,
      () => {
        showCheckbox.value = true;
      },
      0
    );
    ioObserver.value = io;
  };
  onMounted9(handleLazyLoad);
  watch9([lazyLoad, labelRef], handleLazyLoad);
  onBeforeUnmount6(() => {
    if (!lazyLoad.value)
      return;
    ioObserver.value.unobserve(labelRef.value);
  });
  return {
    showCheckbox
  };
}
var useCheckboxLazyLoad_default = useCheckboxLazyLoad;

// ../../../Users/rs/Documents/ChatGPT/tdesign-vue-next/packages/components/checkbox/hooks/useKeyboardEvent.ts
function useKeyboardEvent(handleChange) {
  const keyboardEventListener = (e) => {
    const isCheckedCode = CHECKED_CODE_REG.test(e.key) || CHECKED_CODE_REG.test(e.code);
    if (isCheckedCode) {
      e.preventDefault();
      const { disabled } = e.currentTarget.querySelector("input");
      !disabled && handleChange(e);
    }
  };
  const onCheckboxFocus = (e) => {
    e.currentTarget.addEventListener("keydown", keyboardEventListener);
  };
  const onCheckboxBlur = (e) => {
    e.currentTarget.removeEventListener("keydown", keyboardEventListener);
  };
  return {
    onCheckboxFocus,
    onCheckboxBlur
  };
}
var useKeyboardEvent_default = useKeyboardEvent;

// ../../../Users/rs/Documents/ChatGPT/tdesign-vue-next/packages/components/checkbox/checkbox.tsx
var checkbox_default = defineComponent({
  name: "TCheckbox",
  props: {
    ...props_default,
    needRipple: Boolean,
    stopLabelTrigger: Boolean,
    index: Number,
    data: Object
  },
  setup(props) {
    const labelRef = ref16();
    if (props.needRipple) {
      useRipple(labelRef);
    }
    const {
      STATUS
    } = useCommonClassName();
    const {
      checked,
      modelValue,
      lazyLoad,
      onChange: onChangeRef
    } = toRefs2(props);
    const [innerChecked, setInnerChecked] = useVModel(checked, modelValue, props.defaultChecked, onChangeRef, "checked");
    const checkboxGroupData = inject4(CheckboxGroupInjectionKey, void 0);
    const tName = ref16();
    watch10(() => [props.name, checkboxGroupData?.value.name].join("_"), () => {
      const name = props.name || checkboxGroupData?.value.name;
      if (name) {
        tName.value = name;
      }
    }, {
      immediate: true
    });
    const tChecked = ref16(false);
    const getChecked = () => {
      const {
        value,
        checkAll
      } = props;
      if (checkAll)
        return checkboxGroupData?.value.isCheckAll;
      return checkboxGroupData?.value ? checkboxGroupData.value.checkedValues.includes(value) : innerChecked.value;
    };
    watch10(() => [innerChecked.value, checkboxGroupData?.value.isCheckAll, checkboxGroupData?.value.checkedValues?.join(",")], () => {
      tChecked.value = getChecked();
    }, {
      immediate: true
    });
    const beforeDisabled = computed11(() => {
      if (!props.checkAll && !tChecked.value && checkboxGroupData?.value.maxExceeded) {
        return true;
      }
      return null;
    });
    const afterDisabled = computed11(() => {
      return checkboxGroupData?.value.disabled;
    });
    const isDisabled = useDisabled({
      beforeDisabled,
      afterDisabled
    });
    const afterReadonly = computed11(() => {
      return checkboxGroupData?.value.readonly;
    });
    const isReadonly = useReadonly({
      afterReadonly
    });
    const tIndeterminate = ref16(false);
    watch10(() => [props.checkAll, props.indeterminate, checkboxGroupData?.value.indeterminate], () => {
      tIndeterminate.value = props.checkAll ? checkboxGroupData?.value.indeterminate : props.indeterminate;
    }, {
      immediate: true
    });
    const COMPONENT_NAME = usePrefixClass("checkbox");
    const labelClasses = ref16({});
    watch10([tChecked, isDisabled, tIndeterminate], () => {
      labelClasses.value = [`${COMPONENT_NAME.value}`, {
        [STATUS.value.checked]: tChecked.value,
        [STATUS.value.disabled]: isDisabled.value,
        [STATUS.value.indeterminate]: tIndeterminate.value
      }];
    }, {
      immediate: true
    });
    const handleChange = (e) => {
      if (isReadonly.value || isDisabled.value)
        return;
      const checked2 = !tChecked.value;
      setInnerChecked(checked2, {
        e
      });
      if (checkboxGroupData?.value.handleCheckboxChange) {
        checkboxGroupData.value.onCheckedChange({
          checked: checked2,
          checkAll: props.checkAll,
          e,
          option: props
        });
      }
    };
    const renderContent = useContent();
    const handleLabelClick = (e) => {
      if (props.stopLabelTrigger)
        e.preventDefault();
    };
    const {
      showCheckbox
    } = useCheckboxLazyLoad_default(labelRef, lazyLoad);
    const {
      onCheckboxFocus,
      onCheckboxBlur
    } = useKeyboardEvent_default(handleChange);
    return () => {
      const titleAttr = isString5(props.title) && props.title ? props.title : null;
      return _createVNode2("label", {
        "ref": labelRef,
        "class": labelClasses.value,
        "tabindex": isDisabled.value ? void 0 : "0",
        "onFocus": onCheckboxFocus,
        "onBlur": onCheckboxBlur,
        "onClick": handleLabelClick,
        "title": titleAttr
      }, [!showCheckbox.value ? null : [_createVNode2("input", {
        "type": "checkbox",
        "tabindex": "-1",
        "class": `${COMPONENT_NAME.value}__former`,
        "disabled": isDisabled.value,
        "readonly": isReadonly.value,
        "indeterminate": tIndeterminate.value,
        "name": tName.value,
        "value": props.value ? props.value : void 0,
        "checked": tChecked.value,
        "onChange": handleChange,
        "onClick": (e) => e.stopPropagation(),
        "key": "input"
      }, null), _createVNode2("span", {
        "class": `${COMPONENT_NAME.value}__input`,
        "key": "input-span",
        "onClick": props.stopLabelTrigger && handleChange
      }, null), _createVNode2("span", {
        "class": `${COMPONENT_NAME.value}__label`,
        "key": "label"
      }, [renderContent("default", "label")])]]);
    };
  }
});

// ../../../Users/rs/Documents/ChatGPT/tdesign-vue-next/packages/components/checkbox/group.tsx
import { defineComponent as defineComponent2, provide as provide3, computed as computed12, watchEffect, ref as ref17, toRefs as toRefs3, createVNode as _createVNode3 } from "vue";
import { isObject as isObject4, isUndefined, intersection } from "lodash-es";

// ../../../Users/rs/Documents/ChatGPT/tdesign-vue-next/packages/components/checkbox/checkbox-group-props.ts
var checkbox_group_props_default = {
  disabled: {
    type: Boolean,
    default: void 0
  },
  lazyLoad: Boolean,
  max: {
    type: Number,
    default: void 0
  },
  name: {
    type: String,
    default: ""
  },
  options: {
    type: Array
  },
  readonly: {
    type: Boolean,
    default: void 0
  },
  value: {
    type: Array,
    default: void 0
  },
  modelValue: {
    type: Array,
    default: void 0
  },
  defaultValue: {
    type: Array,
    default: () => []
  },
  onChange: Function
};

// ../../../Users/rs/Documents/ChatGPT/tdesign-vue-next/packages/components/checkbox/group.tsx
var group_default = defineComponent2({
  name: "TCheckboxGroup",
  props: checkbox_group_props_default,
  setup(props) {
    const COMPONENT_NAME = usePrefixClass("checkbox-group");
    const renderTNodeJSX = useTNodeJSX();
    const {
      isArray: isArray8
    } = Array;
    const {
      value,
      modelValue,
      onChange: onChangeRef
    } = toRefs3(props);
    const [rawValue, setRawValue] = useVModel(value, modelValue, props.defaultValue, onChangeRef);
    const innerValue = computed12(() => isArray8(rawValue.value) ? rawValue.value : []);
    const optionList = ref17([]);
    const intersectionLen = computed12(() => {
      const values = optionList.value.map((item) => item.value);
      const n = intersection(innerValue.value, values);
      return n.length;
    });
    const isCheckAll = computed12(() => {
      const optionItems = optionList.value.filter((item) => !item.disabled && !item.readonly && !item.checkAll).map((t2) => t2.value);
      const intersectionValues = intersection(optionItems, innerValue.value);
      return intersectionValues.length === optionItems.length;
    });
    const indeterminate = computed12(() => !isCheckAll.value && intersectionLen.value < optionList.value.length && intersectionLen.value !== 0);
    const maxExceeded = computed12(() => !isUndefined(props.max) && innerValue.value.length === props.max);
    watchEffect(() => {
      if (!props.options)
        return [];
      optionList.value = props.options.map((item) => {
        return isObject4(item) ? item : {
          label: String(item),
          value: item
        };
      });
    });
    const getAllCheckboxValue = () => {
      const checkAllVal = /* @__PURE__ */ new Set();
      const uncheckAllVal = /* @__PURE__ */ new Set();
      for (let i = 0, len = optionList.value.length; i < len; i++) {
        const item = optionList.value[i];
        if (item.checkAll)
          continue;
        if (item.disabled) {
          if (!innerValue.value.includes(item.value))
            continue;
          else
            uncheckAllVal.add(item.value);
        }
        if (item.readonly) {
          if (!innerValue.value.includes(item.value))
            continue;
          else
            uncheckAllVal.add(item.value);
        }
        checkAllVal.add(item.value);
        if (maxExceeded.value)
          break;
      }
      return {
        checkAllVal: [...checkAllVal],
        uncheckAllVal: [...uncheckAllVal]
      };
    };
    const onCheckAllChange = (checked, context) => {
      const {
        checkAllVal,
        uncheckAllVal
      } = getAllCheckboxValue();
      const value2 = checked ? checkAllVal : uncheckAllVal;
      setRawValue(value2, {
        e: context.e,
        type: checked ? "check" : "uncheck",
        current: void 0,
        option: void 0
      });
    };
    const handleCheckboxChange = (data) => {
      const currentValue = data.option.value;
      const val = [...innerValue.value];
      if (data.checked) {
        val.push(currentValue);
      } else {
        const i = val.indexOf(currentValue);
        val.splice(i, 1);
      }
      setRawValue(val, {
        e: data.e,
        current: data.option.value,
        option: data.option,
        type: data.checked ? "check" : "uncheck"
      });
    };
    const onCheckedChange = (p) => {
      const {
        checked,
        checkAll,
        e
      } = p;
      if (checkAll) {
        onCheckAllChange(checked, {
          e
        });
      } else {
        handleCheckboxChange(p);
      }
    };
    const getChildComponentSlots = useChildComponentSlots();
    const getOptionListBySlots = () => {
      const nodes = getChildComponentSlots("Checkbox");
      const arr = [];
      nodes?.forEach((node) => {
        const option = node.props;
        if (!option)
          return;
        if (option["check-all"] === "" || option["check-all"] === true) {
          option.checkAll = true;
        }
        arr.push(option);
      });
      return arr;
    };
    provide3(CheckboxGroupInjectionKey, computed12(() => ({
      name: props.name,
      isCheckAll: isCheckAll.value,
      checkedValues: innerValue.value,
      maxExceeded: maxExceeded.value,
      disabled: props.disabled,
      readonly: props.readonly,
      indeterminate: indeterminate.value,
      handleCheckboxChange,
      onCheckedChange
    })));
    return () => {
      let children = null;
      if (props.options?.length) {
        children = optionList.value?.map((option, index) => _createVNode3(checkbox_default, {
          "key": `${option.value || ""}${index}`,
          "lazyLoad": props.lazyLoad,
          ...option,
          "index": index,
          "checked": innerValue.value.includes(option.value),
          "data": option
        }, null));
      } else {
        const nodes = renderTNodeJSX("default");
        optionList.value = getOptionListBySlots();
        children = nodes;
      }
      return _createVNode3("div", {
        "class": COMPONENT_NAME.value,
        "role": "group",
        "aria-label": "checkbox-group"
      }, [children]);
    };
  }
});

// ../../../Users/rs/Documents/ChatGPT/tdesign-vue-next/packages/components/checkbox/index.ts
var Checkbox = withInstall(checkbox_default);
var CheckboxGroup = withInstall(group_default);

// ../../../Users/rs/Documents/ChatGPT/tdesign-vue-next/packages/components/loading/directive.ts
import { mapKeys, isEqual as isEqual2, isObject as isObject5 } from "lodash-es";

// ../../../Users/rs/Documents/ChatGPT/tdesign-vue-next/packages/components/loading/plugin.tsx
import { createVNode, defineComponent as defineComponent5, h as h4, reactive as reactive2, render, ref as ref20 } from "vue";
import { merge as merge2 } from "lodash-es";

// ../../../Users/rs/Documents/ChatGPT/tdesign-vue-next/packages/components/loading/loading.tsx
import { defineComponent as defineComponent4, ref as ref19, computed as computed13, watch as watch11, onMounted as onMounted11, toRefs as toRefs4, Teleport as Teleport2, createVNode as _createVNode5 } from "vue";

// ../../../Users/rs/Documents/ChatGPT/tdesign-vue-next/packages/components/loading/icon/gradient.tsx
import { defineComponent as defineComponent3, onMounted as onMounted10, nextTick as nextTick4, ref as ref18, createVNode as _createVNode4 } from "vue";

// ../tdesign-tree-visual/baseline/js/utils/helper.ts
import { isArray as isArray6, isNull, isNumber, isString as isString6, isUndefined as isUndefined2 } from "lodash-es";
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

// ../tdesign-tree-visual/baseline/js/loading/circle-adapter.ts
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

// ../../../Users/rs/Documents/ChatGPT/tdesign-vue-next/packages/components/loading/icon/gradient.tsx
var gradient_default = defineComponent3({
  name: "TLoadingGradient",
  setup() {
    const classPrefix = usePrefixClass();
    const circleRef = ref18();
    onMounted10(() => {
      nextTick4(() => {
        circleAdapter(circleRef.value);
      });
    });
    return () => {
      const name = `${classPrefix.value}-loading__gradient`;
      const classes = [name, `${classPrefix.value}-icon-loading`];
      return _createVNode4("svg", {
        "class": classes,
        "viewBox": "0 0 12 12",
        "version": "1.1",
        "width": "1em",
        "height": "1em",
        "xmlns": "http://www.w3.org/2000/svg"
      }, [_createVNode4("foreignObject", {
        "x": "0",
        "y": "0",
        "width": "12",
        "height": "12"
      }, [_createVNode4("div", {
        "class": `${name}-conic`,
        "ref": circleRef
      }, null)])]);
    };
  }
});

// ../../../Users/rs/Documents/ChatGPT/tdesign-vue-next/packages/components/loading/props.ts
var props_default2 = {
  attach: {
    type: [String, Function],
    default: ""
  },
  content: {
    type: [String, Function]
  },
  default: {
    type: [String, Function]
  },
  delay: {
    type: Number,
    default: void 0
  },
  fullscreen: Boolean,
  indicator: {
    type: [Boolean, Function],
    default: true
  },
  inheritColor: {
    type: Boolean,
    default: void 0
  },
  loading: {
    type: Boolean,
    default: true
  },
  preventScrollThrough: {
    type: Boolean,
    default: void 0
  },
  showOverlay: {
    type: Boolean,
    default: void 0
  },
  size: {
    type: String,
    default: void 0
  },
  text: {
    type: [String, Function]
  },
  zIndex: {
    type: Number
  }
};

// ../../../Users/rs/Documents/ChatGPT/tdesign-vue-next/packages/components/loading/loading.tsx
var useComponentClassName = () => {
  return {
    name: usePrefixClass("loading"),
    centerClass: usePrefixClass("loading--center"),
    fullscreenClass: usePrefixClass("loading__fullscreen"),
    lockClass: usePrefixClass("loading--lock"),
    overlayClass: usePrefixClass("loading__overlay"),
    relativeClass: usePrefixClass("loading__parent"),
    fullClass: usePrefixClass("loading--full"),
    inheritColorClass: usePrefixClass("loading--inherit-color")
  };
};
var loading_default = defineComponent4({
  name: "TLoading",
  inheritAttrs: false,
  props: props_default2,
  setup(props, {
    slots,
    attrs
  }) {
    const delayShowLoading = ref19(false);
    const {
      name,
      centerClass,
      fullscreenClass,
      lockClass,
      overlayClass,
      relativeClass,
      fullClass,
      inheritColorClass
    } = useComponentClassName();
    const classPrefix = usePrefixClass();
    const renderTNodeJSX = useTNodeJSX();
    const renderContent = useContent();
    const {
      SIZE
    } = useCommonClassName();
    const {
      globalConfig
    } = useConfig("loading");
    const delay = computed13(() => props.delay ?? globalConfig.value.delay);
    const size = computed13(() => props.size ?? globalConfig.value.size);
    const zIndex = computed13(() => props.zIndex ?? globalConfig.value.zIndex);
    const showOverlay = computed13(() => props.showOverlay ?? globalConfig.value.showOverlay);
    const inheritColor = computed13(() => props.inheritColor ?? globalConfig.value.inheritColor);
    const preventScrollThrough = computed13(() => props.preventScrollThrough ?? globalConfig.value.preventScrollThrough);
    const countDelay = () => {
      delayShowLoading.value = false;
      const timer = setTimeout(() => {
        delayShowLoading.value = true;
        clearTimeout(timer);
      }, delay.value);
    };
    const teleportElement = useTeleport(() => props.attach);
    const delayCounted = computed13(() => Boolean(!delay.value || delay.value && delayShowLoading.value));
    const styles = computed13(() => {
      const styles2 = {};
      if (zIndex.value !== void 0) {
        styles2.zIndex = zIndex.value;
      }
      if (!["small", "medium", "large"].includes(size.value)) {
        styles2["font-size"] = size.value;
      }
      return styles2;
    });
    const hasContent = computed13(() => Boolean(props.default || slots.default || props.content || slots.content));
    const lockFullscreen = computed13(() => preventScrollThrough.value && props.fullscreen);
    const showText = computed13(() => Boolean(props.text || slots.text));
    const showWrapLoading = computed13(() => hasContent.value && props.loading && delayCounted.value);
    const showFullScreenLoading = computed13(() => props.fullscreen && props.loading && delayCounted.value);
    const showAttachedLoading = computed13(() => props.attach && props.loading && delayCounted.value);
    const classes = computed13(() => {
      const baseClasses = [centerClass.value, getPropertyValFromObj(SIZE.value, size.value), {
        [inheritColorClass.value]: inheritColor.value
      }];
      const fullScreenClasses = [name.value, fullscreenClass.value, centerClass.value, overlayClass.value];
      return {
        baseClasses,
        attachClasses: baseClasses.concat([name.value, fullClass.value, {
          [overlayClass.value]: showOverlay.value
        }]),
        withContentClasses: baseClasses.concat([name.value, fullClass.value, {
          [overlayClass.value]: showOverlay.value
        }]),
        fullScreenClasses,
        normalClasses: baseClasses.concat([name.value])
      };
    });
    const {
      loading
    } = toRefs4(props);
    watch11([loading], ([isLoading]) => {
      if (isLoading) {
        countDelay();
        lockFullscreen.value && addClass(document.body, lockClass.value);
      } else {
        lockFullscreen.value && removeClass(document.body, lockClass.value);
      }
    });
    onMounted11(() => {
      delay.value && countDelay();
    });
    return () => {
      const {
        fullScreenClasses,
        baseClasses,
        withContentClasses,
        attachClasses,
        normalClasses
      } = classes.value;
      const defaultIndicator = _createVNode5(gradient_default, null, null);
      const indicator = loading.value && renderTNodeJSX("indicator", defaultIndicator);
      const text = showText.value && _createVNode5("div", {
        "class": `${classPrefix.value}-loading__text`
      }, [renderTNodeJSX("text")]);
      if (props.fullscreen) {
        if (!showFullScreenLoading.value || !props.loading)
          return null;
        return _createVNode5(Teleport2, {
          "disabled": !props.attach || !teleportElement.value,
          "to": teleportElement.value
        }, {
          default: () => [_createVNode5("div", {
            "class": fullScreenClasses,
            "style": styles.value,
            ...attrs
          }, [_createVNode5("div", {
            "class": baseClasses
          }, [indicator, text])])]
        });
      }
      if (hasContent.value) {
        return _createVNode5("div", {
          "class": relativeClass.value,
          ...attrs
        }, [renderContent("default", "content"), showWrapLoading.value && _createVNode5("div", {
          "class": withContentClasses,
          "style": styles.value
        }, [indicator, text])]);
      }
      if (props.attach) {
        if (!showAttachedLoading.value || !loading.value)
          return null;
        return _createVNode5(Teleport2, {
          "disabled": !props.attach || !teleportElement.value,
          "to": teleportElement.value
        }, {
          default: () => [_createVNode5("div", {
            "class": attachClasses,
            "style": styles.value,
            ...attrs
          }, [indicator, text])]
        });
      }
      return loading.value ? _createVNode5("div", {
        "class": normalClasses,
        "style": styles.value,
        ...attrs
      }, [indicator, text]) : null;
    };
  }
});

// ../../../Users/rs/Documents/ChatGPT/tdesign-vue-next/packages/components/loading/plugin.tsx
var fullScreenLoadingInstance = null;
function mergeDefaultProps(props) {
  const options = merge2({
    fullscreen: false,
    attach: "body",
    loading: true,
    preventScrollThrough: true
  }, props);
  return options;
}
function createLoading(props, context) {
  const mergedProps = mergeDefaultProps(props);
  if (mergedProps.fullscreen && fullScreenLoadingInstance) {
    return fullScreenLoadingInstance;
  }
  const parentRelativeClass = ref20("");
  const lockClass = ref20("");
  const component = defineComponent5({
    setup() {
      const loadingOptions = reactive2(mergedProps);
      parentRelativeClass.value = usePrefixClass("loading__parent--relative").value;
      lockClass.value = usePrefixClass("loading--lock").value;
      const {
        globalConfig
      } = useConfig("loading");
      return () => h4(loading_default, {
        ...globalConfig.value,
        ...loadingOptions
      });
    }
  });
  const attach = getAttach(mergedProps.fullscreen ? "body" : mergedProps.attach);
  const instance = createVNode(component);
  if (context ?? LoadingPlugin._context) {
    instance.appContext = context ?? LoadingPlugin._context;
  }
  const wrapper = document.createElement("div");
  render(instance, wrapper);
  const lockFullscreen = mergedProps.preventScrollThrough && mergedProps.fullscreen;
  if (lockFullscreen) {
    addClass(document.body, lockClass.value);
  }
  if (attach) {
    addClass(attach, parentRelativeClass.value);
  } else {
    console.error("attach is not exist");
  }
  const loadingInstance = {
    hide: () => {
      removeClass(attach, parentRelativeClass.value);
      removeClass(document.body, lockClass.value);
      render(null, wrapper);
      wrapper.remove();
    }
  };
  return loadingInstance;
}
function produceLoading(props, context) {
  if (props === true) {
    fullScreenLoadingInstance = createLoading({
      fullscreen: true,
      loading: true,
      attach: "body",
      preventScrollThrough: true
    }, context);
    return fullScreenLoadingInstance;
  }
  if (props === false) {
    fullScreenLoadingInstance?.hide();
    fullScreenLoadingInstance = null;
    return;
  }
  return createLoading(props);
}
var LoadingPlugin = produceLoading;
LoadingPlugin.install = (app) => {
  app.config.globalProperties.$loading = produceLoading;
  LoadingPlugin._context = app._context;
};
var plugin_default = LoadingPlugin;

// ../../../Users/rs/Documents/ChatGPT/tdesign-vue-next/packages/components/loading/directive.ts
var INSTANCE_KEY = Symbol("TdLoading");
var createInstance = (el, binding) => {
  const { fullscreen, inheritColor } = binding.modifiers;
  const options = {
    attach: () => el,
    fullscreen: fullscreen ?? false,
    inheritColor: inheritColor ?? false,
    loading: binding.value
  };
  if (isObject5(binding.value)) {
    mapKeys(binding.value, (value, key) => {
      options[key] = value;
    });
  }
  el[INSTANCE_KEY] = {
    options,
    instance: plugin_default(options)
  };
};
var vLoading = {
  mounted(el, binding) {
    if (binding.value) {
      createInstance(el, binding);
    }
  },
  updated(el, binding) {
    const instance = el[INSTANCE_KEY];
    const { value, oldValue } = binding;
    if (!isEqual2(value, oldValue)) {
      const loading = value?.loading ?? value;
      if (loading) {
        createInstance(el, binding);
      } else {
        instance?.instance.hide();
      }
    }
  },
  unmounted(el) {
    el[INSTANCE_KEY]?.instance.hide();
  }
};

// ../../../Users/rs/Documents/ChatGPT/tdesign-vue-next/packages/components/loading/index.ts
var Loading = withInstall(loading_default, loading_default.name, { name: "loading", comp: vLoading });

// ../tdesign-tree-visual/baseline/js/tree/tree-node.ts
import { get as get2, isBoolean as isBoolean4, isFunction as isFunction7, isNil, isNull as isNull2, isNumber as isNumber2, uniqueId } from "lodash-es";

// ../tdesign-tree-visual/baseline/js/log/index.ts
var log_default2 = log_default;

// ../tdesign-tree-visual/baseline/js/tree/tree-node-model.ts
import { isUndefined as isUndefined3, isBoolean as isBoolean3, omit, get } from "lodash-es";
var nodeKey = "__tdesign_tree-node__";
var TreeNodeModel = class {
  constructor(node) {
    this[nodeKey] = node;
  }
  get value() {
    const node = this[nodeKey];
    return node.value;
  }
  get label() {
    const node = this[nodeKey];
    return node.label;
  }
  get data() {
    const node = this[nodeKey];
    return node.data;
  }
  get actived() {
    const node = this[nodeKey];
    return node.actived;
  }
  get expanded() {
    const node = this[nodeKey];
    return node.expanded;
  }
  get checked() {
    const node = this[nodeKey];
    return node.checked;
  }
  get indeterminate() {
    const node = this[nodeKey];
    return node.indeterminate;
  }
  get loading() {
    const node = this[nodeKey];
    return node.loading;
  }
  get disabled() {
    const node = this[nodeKey];
    return node.isDisabled();
  }
  get level() {
    return this.getLevel();
  }
  getLevel() {
    const node = this[nodeKey];
    return node.getLevel();
  }
  getIndex() {
    const node = this[nodeKey];
    return node.getIndex();
  }
  isFirst() {
    const node = this[nodeKey];
    return node.isFirst();
  }
  isLast() {
    const node = this[nodeKey];
    return node.isLast();
  }
  isLeaf() {
    const node = this[nodeKey];
    return node.isLeaf();
  }
  insertBefore(newData) {
    const node = this[nodeKey];
    return node.insertBefore(newData);
  }
  insertAfter(newData) {
    const node = this[nodeKey];
    return node.insertAfter(newData);
  }
  appendData(data) {
    const node = this[nodeKey];
    return node.append(data);
  }
  getPath() {
    const node = this[nodeKey];
    const nodes = node.getPath();
    return nodes.map((item) => item.getModel());
  }
  getParent() {
    const node = this[nodeKey];
    return node.parent?.getModel();
  }
  getParents() {
    const node = this[nodeKey];
    const nodes = node.getParents();
    return nodes.map((item) => item.getModel());
  }
  getRoot() {
    const node = this[nodeKey];
    const root = node.getRoot();
    return root?.getModel();
  }
  getSiblings() {
    const node = this[nodeKey];
    const nodes = node.getSiblings();
    return nodes.map((item) => item.getModel());
  }
  getChildren(deep) {
    const node = this[nodeKey];
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
    } else if (isBoolean3(children)) {
      childrenModel = children;
    }
    return childrenModel;
  }
  remove(value) {
    const node = this[nodeKey];
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
  }
  setData(data) {
    const node = this[nodeKey];
    const syncAttrs = ["value", "label", "disabled"];
    const cleanData = omit(data, ["children", ...syncAttrs]);
    const { keys } = node.tree.config;
    syncAttrs.forEach((attr) => {
      const dataAttrValue = get(data, keys?.[attr] || attr);
      if (!isUndefined3(dataAttrValue))
        cleanData[attr] = dataAttrValue;
    });
    Object.assign(node.data, cleanData);
    Object.assign(node, cleanData);
    node.update();
  }
};
nodeKey;
function createNodeModel(node) {
  const model = new TreeNodeModel(node);
  return model;
}

// ../tdesign-tree-visual/baseline/js/tree/tree-node.ts
var { hasOwnProperty: hasOwnProperty2 } = Object.prototype;
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
    this.value = isNil(get2(data, propValue)) ? this[privateKey] : get2(data, propValue);
    const { nodeMap, privateMap } = tree;
    if (nodeMap.get(this.value)) {
      log_default2.warn("Tree", `Dulplicate value: ${this.value}`);
    }
    nodeMap.set(this.value, this);
    privateMap.set(this[privateKey], this);
    this.label = get2(data, propLabel) || "";
    const children = data[propChildren];
    if (children === true) {
      this.children = children;
    }
    if (parent && parent instanceof _TreeNode) {
      this.parent = parent;
    } else {
      this.parent = null;
    }
    syncableProps.forEach((prop) => {
      if (typeof data[prop] !== "undefined") {
        this[prop] = data[prop];
      }
    });
    this.initActived();
    this.initExpanded();
    if (Array.isArray(children)) {
      this.append(children);
    } else if (children === true && !config.lazy) {
      this.loadChildren();
    }
    if (this.isLeaf()) {
      this.expanded = false;
      this.tree.expandedMap.delete(this.value);
    }
    this.initChecked();
    this.updateChecked();
    this.update();
    tree.reflow(this);
  }
  initChecked() {
    const { tree, value, parent } = this;
    const { checkedMap } = tree;
    const { checkStrictly } = tree.config;
    if (this.checked) {
      checkedMap.set(value, true);
    }
    if (!checkStrictly && parent?.checked) {
      checkedMap.set(value, true);
    }
  }
  initExpanded() {
    const { tree } = this;
    let { expanded } = this;
    const { config } = tree;
    if (isNumber2(config.expandLevel) && this.getLevel() < config.expandLevel) {
      tree.expandedMap.set(this.value, true);
      expanded = true;
    }
    if (this.children === true && config.lazy) {
      expanded = false;
    }
    if (expanded) {
      tree.expandedMap.set(this.value, true);
    } else {
      tree.expandedMap.delete(this.value);
    }
    this.expanded = expanded;
  }
  initActived() {
    const { tree, actived } = this;
    if (actived && this.isActivable()) {
      tree.activedMap.set(this.value, true);
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
      tree.expandedMap.set(this.value, true);
      this.expanded = true;
    }
    tree.reflow(this);
    this.updateRelated();
  }
  appendTo(tree, parent, index) {
    const parentNode = parent;
    let targetIndex = -1;
    if (isNumber2(index)) {
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
    if (isNumber2(index)) {
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
      tree.nodeMap.set(node.value, node);
      tree.privateMap.set(node[privateKey], node);
      if (node.expanded) {
        tree.expandedMap.set(node.value, true);
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
      if (isNumber2(index)) {
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
    tree.activedMap.delete(value);
    tree.checkedMap.delete(value);
    tree.expandedMap.delete(value);
    tree.nodeMap.delete(value);
    tree.filterMap.delete(value);
    tree.privateMap.delete(this[privateKey]);
  }
  async loadChildren() {
    const config = get2(this, "tree.config") || {};
    if (this.children === true && !this.loading) {
      if (isFunction7(config.load)) {
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
      if (hasOwnProperty2.call(settableStatus, key) || key === "label") {
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
    } else if (isBoolean4(children)) {
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
    if (!nodeMap.get(this.value)) {
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
    const state = get2(this.data, propDisabled);
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
    let state = !!get2(this, "tree.config.draggable");
    if (typeof this.draggable === "boolean") {
      state = this.draggable;
    }
    return state;
  }
  isExpandMutex() {
    let state = !!get2(this, "tree.config.expandMutex");
    if (typeof this.expandMutex === "boolean") {
      state = this.expandMutex;
    }
    return state;
  }
  isActivable() {
    let state = !!get2(this, "tree.config.activable");
    if (typeof this.activable === "boolean") {
      state = this.activable;
    }
    return state;
  }
  isCheckable() {
    let state = !!get2(this, "tree.config.checkable");
    if (typeof this.checkable === "boolean") {
      state = this.checkable;
    }
    return state;
  }
  isActived(map) {
    const { tree, value } = this;
    const activedMap = map || tree.activedMap;
    return !!(tree.nodeMap.get(value) && activedMap.get(value));
  }
  isExpanded(map) {
    const { tree, value, vmIsLocked } = this;
    const { hasFilter, config } = tree;
    const { allowFoldNodeOnFilter } = config;
    if (hasFilter && !allowFoldNodeOnFilter && vmIsLocked)
      return true;
    const expandedMap = map || tree.expandedMap;
    return !!(tree.nodeMap.get(value) && expandedMap.get(value));
  }
  isChecked(map) {
    const { children, tree, value } = this;
    const { checkStrictly, valueMode } = tree.config;
    if (!tree.nodeMap.get(value))
      return false;
    if (!this.isCheckable())
      return false;
    const checkedMap = map || tree.checkedMap;
    if (checkStrictly) {
      return !!checkedMap.get(value);
    }
    let checked = false;
    if (checkedMap.get(value) && (valueMode !== "onlyLeaf" || this.isLeaf())) {
      return true;
    }
    if (Array.isArray(children) && children.length > 0) {
      checked = children.every((node) => {
        const childIsChecked = node.isChecked(checkedMap);
        return childIsChecked;
      });
    } else {
      const parents = this.getParents();
      checked = parents.some((node) => checkedMap.get(node.value));
    }
    return checked;
  }
  isIndeterminate() {
    const { children, tree, value } = this;
    const { checkStrictly } = tree.config;
    if (!tree.nodeMap.get(value))
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
      if (isNull2(childChecked)) {
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
  toggleExpanded(opts) {
    return this.setExpanded(!this.isExpanded(), opts);
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
            map.delete(snode.value);
            snode.update();
            snode.updateChildren();
          });
        }
        map.set(node.value, true);
        node.update();
        node.updateChildren();
      });
    } else {
      map.delete(this.value);
    }
    if (options.directly) {
      this.afterExpanded();
    }
    return tree.getExpanded(map);
  }
  toggleActived(opts) {
    return this.setActived(!this.isActived(), opts);
  }
  setActived(actived, opts) {
    const { tree } = this;
    const options = {
      isAction: true,
      directly: false,
      ...opts
    };
    const config = tree.config || {};
    let map = tree.activedMap;
    if (!options.directly) {
      map = new Map(tree.activedMap);
    }
    if (options.isAction && this.isDisabledState()) {
      return tree.getActived(map);
    }
    if (this.isActivable()) {
      if (actived) {
        const prevKeys = Array.from(map.keys());
        if (!config.activeMultiple) {
          map.clear();
        }
        prevKeys.forEach((value) => {
          const node = tree.getNode(value);
          node?.update();
        });
        map.set(this.value, true);
      } else {
        map.delete(this.value);
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
  toggleChecked(opts) {
    if (this.isIndeterminate()) {
      const expectState = this.hasEnableUnCheckedChild();
      return this.setChecked(expectState, opts);
    }
    return this.setChecked(!this.isChecked(), opts);
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
    if (checked) {
      map.set(this.value, true);
    } else {
      map.delete(this.value);
    }
    if (config.checkStrictly) {
      if (options.directly) {
        this.updateChecked();
      }
    } else {
      this.spreadChildrenChecked(checked, map, options);
      this.spreadParentChecked(checked, map, options);
      if (options.directly) {
        const relatedNodes = tree.getRelatedNodes([this.value], {
          reverse: true
        });
        relatedNodes.forEach((node) => {
          node.updateChecked();
        });
      }
    }
    return tree.getChecked(map);
  }
  spreadParentChecked(checked, map, opts) {
    const options = {
      isAction: true,
      directly: false,
      ...opts
    };
    if (!this.isCheckable())
      return;
    const { children } = this;
    if (Array.isArray(children) && children.length > 0) {
      map.delete(this.value);
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
    if (options.isAction && this.isDisabledState())
      return;
    const { children } = this;
    if (!Array.isArray(children))
      return;
    if (children.length <= 0)
      return;
    map.delete(this.value);
    children.forEach((node) => {
      if (options.isAction && node.isDisabledState())
        return;
      if (checked) {
        map.set(node.value, true);
      } else {
        map.delete(node.value);
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
  updateChecked() {
    const { tree, value } = this;
    const { checkedMap } = tree;
    this.checked = this.isChecked();
    this.indeterminate = this.isIndeterminate();
    if (this.checked) {
      checkedMap.set(value, true);
    }
    tree.updated(this);
  }
  updateChildren() {
    this.spreadChildren((node) => {
      if (node === this)
        return;
      node.update();
      node.updateChecked();
    });
  }
  updateParents() {
    this.spreadParents((node) => {
      if (node === this)
        return;
      node.update();
      node.updateChecked();
    });
  }
  updateRelated() {
    const { tree } = this;
    const relatedNodes = tree.getRelatedNodes([this.value]);
    relatedNodes.forEach((node) => {
      node.update();
      node.updateChecked();
    });
  }
  walk() {
    const list = [];
    this.spreadChildren((node) => {
      list.push(node);
    });
    return list;
  }
  spreadChildren(fn) {
    fn(this);
    const { children } = this;
    if (Array.isArray(children) && children.length > 0) {
      children.forEach((node) => {
        node?.spreadChildren(fn);
      });
    }
  }
  spreadParents(fn) {
    fn(this);
    const { parent } = this;
    if (!parent)
      return;
    parent?.spreadParents(fn);
  }
  getModel() {
    let { model } = this;
    if (!model) {
      model = createNodeModel(this);
      this.model = model;
    }
    return model;
  }
};
var TreeNode = _TreeNode;
privateKey;

// ../../../Users/rs/Documents/ChatGPT/tdesign-vue-next/packages/components/tree/utils/adapt.ts
var onDrag = {
  default: void 0
};
var isVueNext = true;
var TreeItemDefinition = {
  name: "TTreeNode",
  inject: {
    onDrag
  }
};
function useRipple2(el) {
}
function getCreateElement(h6) {
  if (h6) {
  }
  return Vue.h;
}
function getScopedSlots(instance) {
  return instance.$slots;
}
function useVModel2(props, refsProps, propName = "value", defaultPropName = "defaultValue", eventPropName = "onChange", eventName = "change") {
  if (eventName) {
  }
  const { modelValue } = refsProps;
  let vm;
  if (propName === "value") {
    vm = useVModel(refsProps[propName], modelValue, props[defaultPropName], refsProps[eventPropName], propName);
  } else {
    vm = useDefaultValue(refsProps[propName], props[defaultPropName], refsProps[eventPropName], propName);
  }
  return vm;
}

// ../../../Users/rs/Documents/ChatGPT/tdesign-vue-next/packages/components/tree/hooks/useDraggable.ts
import { throttle as throttle2 } from "lodash-es";
function useDraggable(state) {
  const { treeItemRef } = state;
  const dragStates = reactive3({
    isDragOver: false,
    isDragging: false,
    dropPosition: 0 /* Inside */
  });
  const updateDropPosition = (dragEvent) => {
    const rootNode = treeItemRef.value;
    if (!rootNode)
      return;
    const rect = rootNode?.getBoundingClientRect?.();
    const offsetY = window.scrollY + rect.top;
    const { pageY } = dragEvent;
    const gapHeight = rect.height / 4;
    const diff = pageY - offsetY;
    if (diff < gapHeight) {
      dragStates.dropPosition = -1 /* Before */;
    } else if (diff < rect.height - gapHeight) {
      dragStates.dropPosition = 0 /* Inside */;
    } else {
      dragStates.dropPosition = 1 /* After */;
    }
  };
  const setDragStatus = (status, dragEvent) => {
    const { node, treeScope } = state;
    const { drag } = treeScope;
    if (!drag)
      return;
    switch (status) {
      case "dragStart":
        dragStates.isDragging = true;
        dragStates.dropPosition = 0 /* Inside */;
        drag.handleDragStart?.({ node, dragEvent });
        break;
      case "dragEnd":
        dragStates.isDragging = false;
        dragStates.isDragOver = false;
        dragStates.dropPosition = 0 /* Inside */;
        throttleUpdateDropPosition.cancel();
        drag.handleDragEnd?.({ node, dragEvent });
        break;
      case "dragOver":
        dragStates.isDragOver = true;
        throttleUpdateDropPosition(dragEvent);
        drag.handleDragOver?.({ node, dragEvent });
        break;
      case "dragLeave":
        dragStates.isDragOver = false;
        dragStates.dropPosition = 0 /* Inside */;
        throttleUpdateDropPosition.cancel();
        drag.handleDragLeave?.({ node, dragEvent });
        break;
      case "drop":
        drag.handleDrop?.({ node, dropPosition: dragStates.dropPosition, dragEvent });
        dragStates.isDragOver = false;
        throttleUpdateDropPosition.cancel();
        break;
      default:
        break;
    }
  };
  const handleDragStart = (evt) => {
    const { node } = state;
    if (!node.isDraggable())
      return;
    evt.stopPropagation();
    setDragStatus("dragStart", evt);
    try {
      evt.dataTransfer?.setData("text/plain", "");
    } catch (e) {
    }
  };
  const handleDragEnd = (evt) => {
    const { node } = state;
    if (!node.isDraggable())
      return;
    evt.stopPropagation();
    setDragStatus("dragEnd", evt);
  };
  const handleDragOver = (evt) => {
    const { node } = state;
    if (!node.isDraggable())
      return;
    evt.stopPropagation();
    evt.preventDefault();
    setDragStatus("dragOver", evt);
  };
  const handleDragLeave = (evt) => {
    const { node } = state;
    if (!node.isDraggable())
      return;
    evt.stopPropagation();
    setDragStatus("dragLeave", evt);
  };
  const handleDrop = (evt) => {
    const { node } = state;
    if (!node.isDraggable())
      return;
    evt.stopPropagation();
    evt.preventDefault();
    setDragStatus("drop", evt);
  };
  const throttleUpdateDropPosition = throttle2((dragEvent) => {
    updateDropPosition(dragEvent);
  });
  return {
    dragStates,
    handleDragStart,
    handleDragEnd,
    handleDragOver,
    handleDragLeave,
    handleDrop
  };
}

// ../../../Users/rs/Documents/ChatGPT/tdesign-vue-next/packages/components/tree/utils/index.ts
import { camelCase as camelCase2 } from "lodash-es";
function emitEvent(props, context, evtName, ...args) {
  const apiName = camelCase2(`on-${evtName}`);
  evtName.replace(/^on/, "").toLowerCase();
  if (typeof props[apiName] === "function") {
    props[apiName](...args);
  }
  if (!isVueNext) {
    context.emit(evtName, ...args);
  }
}
function getParentsToRoot(element, root) {
  const list = [];
  let el = element;
  while (el && el.parentNode) {
    list.push(el);
    if (el === root) {
      break;
    }
    el = el.parentNode;
  }
  return list;
}
function getParentMarks(name, element, root) {
  const list = getParentsToRoot(element, root);
  return list.map((el) => {
    const mark = {
      name,
      value: el?.getAttribute(name) || "",
      el
    };
    return mark;
  }).filter((mark) => mark.value);
}
function getMark(name, element, root) {
  const list = getParentMarks(name, element, root);
  const info = list.pop() || null;
  return info;
}
function pathMatchClass(name, element, root) {
  const list = getParentsToRoot(element, root);
  const rs = list.some((el) => el.classList.contains(name));
  return rs;
}
function getTNode(prop, options) {
  let tnode = null;
  let item = null;
  const conf = {
    ...options
  };
  if (typeof prop === "function") {
    item = prop(conf.createElement, conf.node?.getModel());
  } else if (typeof prop === "string") {
    item = prop;
  }
  if (typeof item === "string") {
    tnode = item;
  } else if (item) {
    tnode = item;
  }
  return tnode;
}
function isTreeNodeValue(item) {
  return typeof item === "string" || typeof item === "number";
}
function getNode(store, item) {
  let node = null;
  let val = null;
  if (typeof item === "string" || typeof item === "number") {
    val = item;
  } else if (item && isTreeNodeValue(item.value)) {
    val = item.value;
  }
  node = store.getNode(val);
  return node;
}

// ../../../Users/rs/Documents/ChatGPT/tdesign-vue-next/packages/components/tree/hooks/useDragHandle.ts
function useDragHandle(state) {
  const { props, context, scope, store } = state;
  let dragNode = null;
  const handleDragStart = (state2) => {
    const { dragEvent, node } = state2;
    dragNode = node;
    const ctx = {
      node: node.getModel(),
      e: dragEvent
    };
    emitEvent(props, context, "drag-start", ctx);
  };
  const handleDragEnd = (state2) => {
    const { dragEvent, node } = state2;
    dragNode = node;
    const ctx = {
      node: node.getModel(),
      e: dragEvent
    };
    emitEvent(props, context, "drag-end", ctx);
  };
  const handleDragOver = (state2) => {
    const { dragEvent, node } = state2;
    const ctx = {
      node: node.getModel(),
      e: dragEvent
    };
    emitEvent(props, context, "drag-over", ctx);
  };
  const handleDragLeave = (state2) => {
    const { dragEvent, node } = state2;
    const ctx = {
      node: node.getModel(),
      e: dragEvent
    };
    emitEvent(props, context, "drag-leave", ctx);
  };
  const handleDrop = (state2) => {
    const { dragEvent, node, dropPosition } = state2;
    if (node.value === dragNode.value || node.getParents().some((_node) => _node.value === dragNode.value))
      return;
    const ctx = {
      dropNode: node.getModel(),
      dragNode: dragNode.getModel(),
      dropPosition,
      e: dragEvent
    };
    if (props.allowDrop?.(ctx) === false)
      return;
    const nodes = store.getNodes();
    nodes.some((_node) => {
      if (_node.value === node.value) {
        if (dropPosition === 0 /* Inside */) {
          dragNode.appendTo(store, _node);
        } else if (dropPosition === -1 /* Before */) {
          node.insertBefore(dragNode);
        } else {
          node.insertAfter(dragNode);
        }
        return true;
      }
      return false;
    });
    emitEvent(props, context, "drop", ctx);
  };
  const drag = {
    handleDragStart,
    handleDragEnd,
    handleDragOver,
    handleDragLeave,
    handleDrop
  };
  scope.drag = drag;
  return {
    drag
  };
}

// ../../../Users/rs/Documents/ChatGPT/tdesign-vue-next/packages/components/tree/hooks/useTreeAction.ts
function useTreeAction(state) {
  const treeState = state;
  const { store } = treeState;
  const componentName = usePrefixClass("tree").value;
  const [tValue, setTValue] = state.vmValue;
  const [tActived, setTActived] = state.vmActived;
  const [tExpanded, setTExpanded] = state.vmExpanded;
  const setExpanded = (item, isExpanded) => {
    const node = getNode(store, item);
    const mouseEvent = treeState.mouseEvent;
    const evtCtx = {
      node: node.getModel(),
      e: mouseEvent,
      trigger: "setItem"
    };
    if (mouseEvent) {
      evtCtx.trigger = "node-click";
      const target = mouseEvent.target;
      const currentTarget = mouseEvent.currentTarget;
      if (pathMatchClass(`${componentName}__icon`, target, currentTarget)) {
        evtCtx.trigger = "icon-click";
      }
    }
    const expanded = node.setExpanded(isExpanded, {
      directly: true
    });
    setTExpanded(expanded, evtCtx);
    if (evtCtx.trigger !== "setItem") {
      store.replaceExpanded(tExpanded.value || []);
    }
    return expanded;
  };
  const toggleExpanded = (item) => {
    const node = getNode(store, item);
    if (!node.children)
      return;
    return setExpanded(node, !node.isExpanded());
  };
  const setActived = (item, isActived) => {
    const node = getNode(store, item);
    const mouseEvent = treeState.mouseEvent;
    const evtCtx = {
      node: node.getModel(),
      e: mouseEvent,
      trigger: "setItem"
    };
    if (mouseEvent) {
      evtCtx.trigger = "node-click";
    }
    const actived = node.setActived(isActived, {
      isAction: evtCtx.trigger === "node-click",
      directly: true
    });
    setTActived(actived, evtCtx);
    if (evtCtx.trigger !== "setItem") {
      store.replaceActived(tActived.value || []);
    }
    return actived;
  };
  const toggleActived = (item) => {
    const node = getNode(store, item);
    return setActived(node, !node.isActived());
  };
  const setChecked = (item, isChecked, ctx) => {
    const node = getNode(store, item);
    const mouseEvent = ctx?.e;
    const evtCtx = {
      node: node.getModel(),
      e: mouseEvent,
      trigger: "setItem"
    };
    if (mouseEvent) {
      evtCtx.trigger = "node-click";
    }
    const checked = node.setChecked(isChecked, {
      isAction: evtCtx.trigger === "node-click",
      directly: true
    });
    setTValue(checked, evtCtx);
    if (evtCtx.trigger !== "setItem") {
      store.replaceChecked(tValue.value || []);
    }
    return checked;
  };
  const toggleChecked = (item, ctx) => {
    const node = getNode(store, item);
    if (node.isIndeterminate()) {
      const expectState = node.hasEnableUnCheckedChild();
      return setChecked(node, expectState, ctx);
    }
    return setChecked(node, !node.isChecked(), ctx);
  };
  return {
    setExpanded,
    toggleExpanded,
    setActived,
    toggleActived,
    setChecked,
    toggleChecked
  };
}

// ../../../Users/rs/Documents/ChatGPT/tdesign-vue-next/packages/components/tree/hooks/useTreeNodes.tsx
import { createVNode as _createVNode11 } from "vue";

// ../../../Users/rs/Documents/ChatGPT/tdesign-vue-next/packages/components/tree/hooks/useItemState.ts
function useItemState(props, context) {
  const refProps = toRefs5(props);
  const treeItemRef = ref21(null);
  const { treeScope } = props;
  const { store } = treeScope;
  const node = store.privateMap.get(props.itemKey);
  const state = {
    stateId: props.stateId,
    props,
    context,
    treeScope,
    refProps,
    node,
    treeItemRef
  };
  return {
    state
  };
}

// ../../../Users/rs/Documents/ChatGPT/tdesign-vue-next/packages/components/tree/hooks/useTreeItem.tsx
import { createVNode as _createVNode10 } from "vue";

// ../../../Users/rs/Documents/ChatGPT/tdesign-vue-next/packages/components/tree/hooks/useItemEvents.ts
function useItemEvents(state) {
  const { context } = state;
  const classPrefix = usePrefixClass().value;
  const handleChange = (_, ctx) => {
    const { node } = state;
    const event = new Event("change");
    const evtContext = {
      event,
      node
    };
    context.emit("change", evtContext, ctx);
  };
  let clicked = false;
  const handleClick = (evt) => {
    const { node, treeScope } = state;
    const { treeProps = {} } = treeScope;
    const { expandOnClickNode } = treeProps;
    const srcTarget = evt.target;
    const isBranchTrigger = node.children && expandOnClickNode && (srcTarget.className === `${classPrefix}-checkbox__input` || srcTarget.tagName.toLowerCase() === "input");
    if (clicked || isBranchTrigger)
      return;
    clicked = true;
    setTimeout(() => {
      clicked = false;
    });
    if (expandOnClickNode && node.children && srcTarget.className?.indexOf?.(`${classPrefix}-tree__label`) !== -1)
      evt.preventDefault();
    const evtContext = {
      mouseEvent: evt,
      event: evt,
      node,
      path: node.getPath()
    };
    context.emit("click", evtContext);
  };
  return {
    handleChange,
    handleClick
  };
}

// ../../../Users/rs/Documents/ChatGPT/tdesign-vue-next/packages/components/tree/hooks/useRenderIcon.tsx
import { createVNode as _createVNode6 } from "vue";
function useRenderIcon(state) {
  const classPrefix = usePrefixClass().value;
  const componentName = usePrefixClass("tree").value;
  const getFolderIcon = (h6) => {
    const {
      CaretRightSmallIcon: CaretRightSmallIcon2
    } = useGlobalIcon({
      CaretRightSmallIcon
    });
    return _createVNode6(CaretRightSmallIcon2, null, null);
  };
  const handleMousedown = (evt) => {
    evt.preventDefault();
  };
  const renderIcon = (h6) => {
    const {
      node,
      treeScope
    } = state;
    const {
      scopedSlots
    } = treeScope;
    const treeProps = treeScope?.treeProps || {};
    const {
      icon
    } = treeProps;
    let isDefaultIcon = false;
    let iconNode = null;
    if (icon === true) {
      if (scopedSlots?.icon) {
        iconNode = scopedSlots.icon({
          node: node?.getModel()
        });
      } else if (!node.vmIsLeaf) {
        isDefaultIcon = true;
        iconNode = getFolderIcon(h6);
        if (node.loading && node.expanded) {
          iconNode = _createVNode6(Loading, null, null);
        }
      } else {
        iconNode = "";
      }
    } else if (icon) {
      iconNode = getTNode(icon, {
        createElement: h6,
        node
      });
    }
    const wrapIconNode = _createVNode6("span", {
      "class": [`${componentName}__icon`, `${classPrefix}-folder-icon`, isDefaultIcon ? `${componentName}__icon--default` : ""],
      "trigger": "expand",
      "ignore": "active",
      "onmousedown": handleMousedown
    }, [iconNode]);
    return wrapIconNode;
  };
  return {
    renderIcon
  };
}

// ../../../Users/rs/Documents/ChatGPT/tdesign-vue-next/packages/components/tree/hooks/useRenderLabel.tsx
import { isVNode as _isVNode, createVNode as _createVNode7 } from "vue";
import { isBoolean as isBoolean5 } from "lodash-es";
function _isSlot(s) {
  return typeof s === "function" || Object.prototype.toString.call(s) === "[object Object]" && !_isVNode(s);
}
function useRenderLabel(state) {
  const classPrefix = usePrefixClass().value;
  const componentName = usePrefixClass("tree").value;
  const {
    handleChange
  } = useItemEvents(state);
  const renderLabel = (h6) => {
    const {
      node,
      treeScope
    } = state;
    const {
      scopedSlots,
      treeProps = {}
    } = treeScope;
    const {
      label,
      expandOnClickNode
    } = treeProps;
    const checkProps = treeProps?.checkProps || {};
    let labelNode = null;
    if (label === true) {
      if (scopedSlots?.label) {
        labelNode = scopedSlots.label({
          node: node?.getModel()
        });
      } else {
        labelNode = node.label || "";
      }
    } else {
      labelNode = getTNode(label, {
        createElement: h6,
        node
      });
    }
    const labelClasses = [`${componentName}__label`, {
      [`${classPrefix}-is-active`]: node.isActivable() ? node.actived : false
    }];
    const shouldStopLabelTrigger = computed14(() => {
      const isNormalBranchNode = Array.isArray(node.children) && node.children?.length > 0;
      const isLazyLoadChildBranchNode = isBoolean5(node.children) && node.children;
      const isBranchNode = isNormalBranchNode || isLazyLoadChildBranchNode;
      return expandOnClickNode && isBranchNode;
    });
    if (node.vmCheckable) {
      let checkboxDisabled = false;
      if (node.vmIsLocked && !node.vmIsRest) {
        checkboxDisabled = true;
      }
      if (node.isDisabled()) {
        checkboxDisabled = true;
      }
      const _labelNode = function() {
        return labelNode;
      }();
      labelNode = _createVNode7(Checkbox, {
        "class": labelClasses,
        "checked": node.checked,
        "indeterminate": node.indeterminate,
        "name": String(node.value),
        "onChange": handleChange,
        "stopLabelTrigger": shouldStopLabelTrigger.value,
        ...checkProps,
        "disabled": checkboxDisabled,
        "title": node.label
      }, _isSlot(labelNode) ? labelNode : {
        default: () => [_labelNode]
      });
    } else {
      const inner = _createVNode7("span", {
        "style": "position: relative"
      }, [labelNode]);
      labelNode = node.isActivable() ? _createVNode7("span", {
        "key": "1",
        "ref": "label",
        "class": labelClasses,
        "title": node.label
      }, [inner]) : _createVNode7("span", {
        "key": "2",
        "class": labelClasses,
        "title": node.label
      }, [inner]);
    }
    return labelNode;
  };
  return {
    renderLabel
  };
}

// ../../../Users/rs/Documents/ChatGPT/tdesign-vue-next/packages/components/tree/hooks/useRenderLine.tsx
import { createVNode as _createVNode8 } from "vue";
function useRenderLine(state) {
  const componentName = usePrefixClass("tree").value;
  const renderLine = (h6) => {
    const {
      node,
      treeScope
    } = state;
    const {
      scopedSlots
    } = treeScope;
    const treeProps = treeScope?.treeProps || {};
    const {
      line
    } = treeProps;
    const iconVisible = !!treeProps.icon;
    let lineNode = null;
    if (line === true) {
      if (scopedSlots?.line) {
        lineNode = scopedSlots.line({
          node: node?.getModel()
        });
      } else if (node.parent && node.tree) {
        const {
          vmIsLeaf,
          vmIsFirst,
          level
        } = node;
        const lineClasses = [];
        lineClasses.push(`${componentName}__line`);
        if (vmIsLeaf || !iconVisible) {
          lineClasses.push(`${componentName}__line--leaf`);
        }
        if (vmIsFirst && iconVisible) {
          lineClasses.push(`${componentName}__line--first`);
        }
        const shadowStyles = [];
        const parents = node.getParents();
        parents.pop();
        parents.forEach((pnode, index) => {
          if (!pnode.vmIsLast) {
            shadowStyles.push(`calc(-${index + 1} * var(--space)) 0 var(--color)`);
          }
        });
        const styles = {
          "--level": level ? String(level) : void 0,
          "box-shadow": shadowStyles.join(",")
        };
        lineNode = _createVNode8("span", {
          "class": lineClasses,
          "style": styles
        }, null);
      }
    } else {
      lineNode = getTNode(line, {
        createElement: h6,
        node
      });
    }
    return lineNode;
  };
  return {
    renderLine
  };
}

// ../../../Users/rs/Documents/ChatGPT/tdesign-vue-next/packages/components/tree/hooks/useRenderOperations.tsx
import { createVNode as _createVNode9 } from "vue";
function useRenderOperations(state) {
  const componentName = usePrefixClass("tree").value;
  const renderOperations = (h6) => {
    const {
      node,
      treeScope
    } = state;
    const {
      scopedSlots
    } = treeScope;
    const treeProps = treeScope?.treeProps || {};
    const {
      operations
    } = treeProps;
    let opNode = null;
    if (scopedSlots?.operations) {
      opNode = scopedSlots.operations({
        node: node?.getModel()
      });
    } else {
      opNode = getTNode(operations, {
        createElement: h6,
        node
      });
    }
    if (opNode) {
      const _opNode = function() {
        return opNode;
      }();
      opNode = _createVNode9("span", {
        "class": `${componentName}__operations`,
        "ignore": "active,expand"
      }, [opNode]);
    }
    return opNode;
  };
  return {
    renderOperations
  };
}

// ../../../Users/rs/Documents/ChatGPT/tdesign-vue-next/packages/components/tree/hooks/useTreeItem.tsx
import { onUpdated as onUpdated2 } from "vue";
function useTreeItem(state) {
  const {
    treeScope,
    treeItemRef
  } = state;
  const {
    virtualConfig,
    treeContentRef,
    scrollProps
  } = treeScope;
  const classPrefix = usePrefixClass().value;
  const componentName = usePrefixClass("tree").value;
  const {
    handleClick
  } = useItemEvents(state);
  const {
    renderIcon
  } = useRenderIcon(state);
  const {
    renderLabel
  } = useRenderLabel(state);
  const {
    renderLine
  } = useRenderLine(state);
  const {
    renderOperations
  } = useRenderOperations(state);
  const {
    dragStates,
    handleDragStart,
    handleDragEnd,
    handleDragOver,
    handleDragLeave,
    handleDrop
  } = useDraggable(state);
  const {
    hasLazyLoadHolder,
    tRowHeight
  } = useLazyLoad(treeContentRef, treeItemRef, reactive3({
    ...scrollProps?.value
  }));
  function tryNotifyVirtualScrollRowUpdate() {
    const {
      node
    } = state;
    const isVirtual = virtualConfig?.isVirtualScroll.value;
    if (isVirtual) {
      const timer = setTimeout(() => {
        virtualConfig.handleRowMounted({
          ref: treeItemRef,
          data: node
        });
        clearTimeout(timer);
      }, 100);
    }
  }
  onMounted12(() => {
    tryNotifyVirtualScrollRowUpdate();
  });
  onUpdated2(() => {
    tryNotifyVirtualScrollRowUpdate();
  });
  const getItemStyles = () => {
    const {
      node
    } = state;
    const {
      level
    } = node;
    const levelStyle = `--level: ${level};`;
    const strStyle = `${levelStyle}`;
    return strStyle;
  };
  const getItemClassList = () => {
    const {
      node
    } = state;
    const {
      isDragOver,
      isDragging,
      dropPosition
    } = dragStates;
    const list = [];
    list.push(`${componentName}__item`);
    list.push({
      [`${componentName}__item--open`]: node.expanded,
      [`${classPrefix}-is-active`]: node.isActivable() ? node.actived : false,
      [`${classPrefix}-is-disabled`]: node.isDisabled()
    });
    list.push({
      [`${componentName}__item--draggable`]: !node.isDisabled() && node.isDraggable()
    });
    if (node.visible) {
      list.push(`${componentName}__item--visible`);
    } else {
      list.push(`${componentName}__item--hidden`);
    }
    if (node.vmIsLocked) {
      list.push(`${componentName}__item--locked`);
    }
    if (node.vmIsRest) {
      list.push(`${componentName}__item--matched`);
    }
    list.push({
      [`${componentName}__item--dragging`]: isDragging,
      [`${componentName}__item--tip-top`]: isDragOver && dropPosition < 0,
      [`${componentName}__item--tip-bottom`]: isDragOver && dropPosition > 0,
      [`${componentName}__item--tip-highlight`]: !isDragging && isDragOver && dropPosition === 0
    });
    return list;
  };
  const renderItem = (h6) => {
    const itemNodes = [];
    const iconNode = renderIcon(h6);
    const lineNode = renderLine(h6);
    if (lineNode) {
      itemNodes.push(lineNode);
    }
    if (iconNode) {
      itemNodes.push(iconNode);
    }
    const labelNode = renderLabel(h6);
    if (labelNode) {
      itemNodes.push(labelNode);
    }
    const opNode = renderOperations(h6);
    if (opNode) {
      itemNodes.push(opNode);
    }
    return itemNodes;
  };
  const renderItemNode = (h6) => {
    const {
      node,
      props
    } = state;
    if (!node)
      return null;
    const {
      level,
      value
    } = node;
    const styles = getItemStyles();
    const classList = getItemClassList();
    const treeState = state;
    treeState.stateId = props.stateId;
    const itemNode = _createVNode10("div", {
      "ref": "treeItemRef",
      "class": classList,
      "data-value": value,
      "data-level": level,
      "style": styles,
      "onClick": (evt) => handleClick(evt),
      "draggable": !node.isDisabled() && node.isDraggable(),
      "onDragstart": (evt) => handleDragStart(evt),
      "onDragend": (evt) => handleDragEnd(evt),
      "onDragover": (evt) => handleDragOver(evt),
      "onDragleave": (evt) => handleDragLeave(evt),
      "onDrop": (evt) => handleDrop(evt)
    }, [hasLazyLoadHolder.value ? [_createVNode10("div", null, null)] : renderItem(h6)]);
    return itemNode;
  };
  return {
    hasLazyLoadHolder,
    tRowHeight,
    renderItemNode
  };
}

// ../../../Users/rs/Documents/ChatGPT/tdesign-vue-next/packages/components/tree/tree-item.tsx
var treeItemProps = {
  stateId: {
    type: String
  },
  itemKey: {
    type: String
  },
  rowIndex: {
    type: Number
  },
  treeScope: {
    type: Object
  }
};
var tree_item_default = defineComponent6({
  props: treeItemProps,
  ...TreeItemDefinition,
  setup(props, context) {
    const {
      state
    } = useItemState(props, context);
    const {
      treeItemRef
    } = state;
    const label = ref21();
    useRipple2(label);
    const {
      renderItemNode
    } = useTreeItem(state);
    return {
      treeItemRef,
      renderItemNode
    };
  },
  render(h6) {
    const createElement = getCreateElement(h6);
    if (typeof this.renderItemNode === "function") {
      return this.renderItemNode(createElement);
    }
    return null;
  }
});

// ../../../Users/rs/Documents/ChatGPT/tdesign-vue-next/packages/components/tree/hooks/useTreeEvents.ts
function useTreeEvents(state) {
  const treeState = state;
  const { props, context } = treeState;
  const { toggleExpanded, toggleActived, toggleChecked } = useTreeAction(state);
  const handleClick = (evtState) => {
    const { mouseEvent, event, node } = evtState;
    if (!node || !mouseEvent)
      return;
    treeState.mouseEvent = mouseEvent;
    let shouldExpand = props.expandOnClickNode;
    let shouldActive = !props.disabled && !node.disabled && node.isActivable();
    let isRightClick = false;
    ["trigger", "ignore"].forEach((markName) => {
      const mark = getMark(markName, event.target, event.currentTarget);
      const markValue = mark?.value || "";
      if (markValue.indexOf("expand") >= 0) {
        if (markName === "trigger") {
          shouldExpand = true;
          isRightClick = true;
        } else if (markName === "ignore") {
          shouldExpand = false;
        }
      }
      if (markValue.indexOf("active") >= 0) {
        if (markName === "ignore") {
          shouldActive = false;
        }
      }
    });
    if (shouldExpand) {
      toggleExpanded(node);
      if (isRightClick)
        return;
    }
    if (shouldActive) {
      toggleActived(node);
    }
    const evtCtx = {
      node: node.getModel(),
      e: mouseEvent
    };
    emitEvent(props, context, "click", evtCtx);
    treeState.mouseEvent = null;
  };
  const handleChange = (evtState, ctx) => {
    const { disabled } = props;
    const { node } = evtState;
    if (!node || disabled || node.disabled || !node.isCheckable()) {
      return;
    }
    toggleChecked(node, ctx);
  };
  return {
    handleChange,
    handleClick
  };
}

// ../../../Users/rs/Documents/ChatGPT/tdesign-vue-next/packages/components/tree/hooks/useTreeNodes.tsx
function useTreeNodes(state) {
  const {
    store,
    scope,
    allNodes,
    nodes,
    virtualConfig
  } = state;
  const {
    handleClick,
    handleChange
  } = useTreeEvents(state);
  const nodesEmpty = ref21(false);
  const cacheMap = /* @__PURE__ */ new Map();
  const refresh = () => {
    allNodes.value = store.getNodes();
  };
  const refreshVisibleNodes = () => {
    const isVirtual = virtualConfig?.isVirtualScroll.value;
    if (isVirtual)
      return;
    const list = [];
    let hasVisibleNode = false;
    allNodes.value.forEach((node) => {
      if (node.visible) {
        hasVisibleNode = true;
        cacheMap.set(node.value, node.value);
      }
      if (cacheMap.has(node.value)) {
        list.push(node);
      }
    });
    cacheMap.forEach((value) => {
      if (!store.getNode(value)) {
        cacheMap.delete(value);
      }
    });
    nodes.value = list;
    nodesEmpty.value = !hasVisibleNode;
  };
  const refreshVirtualNodes = () => {
    const isVirtual = virtualConfig?.isVirtualScroll.value;
    if (!isVirtual)
      return;
    const list = virtualConfig.visibleData.value;
    nodes.value = list;
    nodesEmpty.value = list.length <= 0;
  };
  const renderItem = (h6, node, index, stateId) => {
    const rowIndex = node.VIRTUAL_SCROLL_INDEX || index;
    const nodeUniqueId = node[privateKey];
    const treeItem = _createVNode11(tree_item_default, {
      "key": nodeUniqueId,
      "rowIndex": rowIndex,
      "stateId": stateId,
      "itemKey": nodeUniqueId,
      "treeScope": scope,
      "onClick": handleClick,
      "onChange": handleChange
    }, null);
    return treeItem;
  };
  const renderTreeNodes = (h6) => {
    const stateId = `render-${new Date().getTime()}`;
    const treeNodeViews = nodes.value.map((node, index) => renderItem(h6, node, index, stateId));
    return treeNodeViews;
  };
  watch12(allNodes, refreshVisibleNodes);
  watch12(virtualConfig.visibleData, refreshVirtualNodes);
  refresh();
  refreshVisibleNodes();
  refreshVirtualNodes();
  store.emitter.on("update", refresh);
  return {
    nodesEmpty,
    renderTreeNodes
  };
}

// ../../../Users/rs/Documents/ChatGPT/tdesign-vue-next/packages/components/tree/hooks/useTreeScroll.ts
import { get as get3 } from "lodash-es";
function useTreeScroll(state) {
  const treeState = state;
  const { props, context, allNodes, nodes, scope, treeContentRef, isScrolling } = treeState;
  const scrollProps = computed14(() => ({
    rowHeight: 34,
    ...props.scroll
  }));
  scope.scrollProps = scrollProps;
  const virtualScrollParams = computed14(() => {
    const list = allNodes.value.filter((node) => node.visible);
    return {
      data: list,
      scroll: scrollProps.value,
      preventResizeRefresh: true
    };
  });
  const virtualConfig = useVirtualScrollNew(treeContentRef, virtualScrollParams);
  scope.virtualConfig = virtualConfig;
  treeState.virtualConfig = virtualConfig;
  onMounted12(() => {
    const isVirtual = virtualConfig?.isVirtualScroll.value;
    if (isVirtual) {
      virtualConfig.handleScroll();
    }
  });
  const emitScrollEvent = (e) => {
    props.onScroll?.({ e });
    context.emit("scroll", { e });
  };
  let scrollStopTimer = null;
  const setScrolling = () => {
    isScrolling.value = true;
    if (scrollStopTimer) {
      clearTimeout(scrollStopTimer);
      scrollStopTimer = null;
    }
    scrollStopTimer = setTimeout(() => {
      scrollStopTimer = null;
      isScrolling.value = false;
    }, 100);
  };
  let lastScrollY = 0;
  const onInnerVirtualScroll = (e) => {
    setScrolling();
    const isVirtual = virtualConfig?.isVirtualScroll.value;
    const target = e.target || e.srcElement;
    const top = target.scrollTop;
    if (lastScrollY !== top) {
      if (isVirtual) {
        virtualConfig.handleScroll();
        nodes.value = virtualConfig.visibleData.value;
      }
    } else {
      lastScrollY = 0;
    }
    lastScrollY = top;
    emitScrollEvent(e);
  };
  const handleScrollTo = (params) => {
    let index = params.index;
    if (!index && index !== 0) {
      if (!params.key) {
        log_default2.error("Tree", "scrollToElement: one of `index` or `key` must exist.");
        return;
      }
      index = allNodes.value?.findIndex(
        (item) => [get3(item.data, "key"), get3(item.data, props.keys?.["value"] || "value")].includes(params.key)
      );
      if (index < 0) {
        log_default2.error("Tree", `${params.key} does not exist in data, check \`key\` or \`data\` please.`);
        return;
      }
    }
    virtualConfig.scrollToElement({ ...params, index: index - 1 });
  };
  return {
    treeContentRef,
    onInnerVirtualScroll,
    virtualConfig,
    scrollToElement: handleScrollTo
  };
}

// ../../../Users/rs/Documents/ChatGPT/tdesign-vue-next/packages/components/tree/hooks/useTreeState.ts
function useTreeState(props, context) {
  const treeContentRef = ref21();
  const nodes = ref21([]);
  const allNodes = ref21([]);
  const isScrolling = ref21(false);
  const refProps = toRefs5(props);
  const vmValue = useVModel2(props, refProps, "value", "defaultValue", "onChange", "change");
  const vmActived = useVModel2(props, refProps, "actived", "defaultActived", "onActive", "active");
  const vmExpanded = useVModel2(props, refProps, "expanded", "defaultExpanded", "onExpand", "expand");
  function setStore(store) {
    state.store = store;
    state.scope.store = store;
    allNodes.value = store.getNodes();
  }
  const state = {
    props,
    context,
    store: null,
    treeContentRef,
    nodes,
    allNodes,
    isScrolling,
    mouseEvent: null,
    virtualConfig: null,
    scope: {
      store: null,
      treeContentRef,
      treeProps: props,
      scopedSlots: {},
      virtualConfig: null
    },
    setStore,
    refProps,
    vmValue,
    vmActived,
    vmExpanded
  };
  return {
    state
  };
}

// ../../../Users/rs/Documents/ChatGPT/tdesign-vue-next/packages/components/tree/hooks/useTreeStore.ts
import { pick } from "lodash-es";

// ../tdesign-tree-visual/baseline/js/tree/tree-store.ts
import { isArray as isArray7, isFunction as isFunction8, isNumber as isNumber3, isString as isString7, difference, camelCase as camelCase3, isPlainObject } from "lodash-es";

// ../tdesign-tree-visual/node_modules/.pnpm/mitt@3.0.1/node_modules/mitt/dist/mitt.mjs
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

// ../tdesign-tree-visual/baseline/js/tree/tree-store.ts
function nextTick5(fn) {
  const pm = Promise.resolve();
  pm.then(fn);
  return pm;
}
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
      disableCheck: false,
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
    this.filterMap = /* @__PURE__ */ new Map();
    this.prevFilter = null;
    this.updateTick = null;
    this.shouldReflow = false;
    this.hasFilter = isFunction8(config.filter);
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
    this.hasFilter = isFunction8(config.filter);
    if (hasChanged) {
      this.refreshState();
    }
  }
  getChildren() {
    return this.children;
  }
  getNode(item) {
    let node = null;
    if (isString7(item) || isNumber3(item)) {
      node = this.nodeMap.get(item);
    } else if (item instanceof TreeNode) {
      node = this.nodeMap.get(item.value);
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
    if (isString7(item) || isNumber3(item)) {
      val = item;
    } else if (item instanceof TreeNode) {
      val = item.value;
    }
    if (!val && val !== 0) {
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
      if (isNumber3(conf.level) && conf.level !== Infinity) {
        nodes = nodes.filter((node) => node.level <= conf.level);
      }
      if (isFunction8(conf.filter)) {
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
    this.removeAll();
    this.append(list);
  }
  parseNodeData(para, item) {
    let value = "";
    let node = null;
    let data = null;
    if (isString7(para) || isNumber3(para)) {
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
        } else if (isArray7(spec.data)) {
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
  reflow(node) {
    this.shouldReflow = true;
    this.updated(node);
  }
  updated(node) {
    const { updatedMap } = this;
    if (node) {
      updatedMap.set(node[privateKey], "changed");
    } else {
      this.getNodes().forEach((itemNode) => {
        updatedMap.set(itemNode[privateKey], "changed");
      });
    }
    if (this.updateTick)
      return;
    this.updateTick = nextTick5(() => {
      this.updateTick = null;
      if (this.shouldReflow) {
        this.refreshNodes();
        this.emit("reflow");
      }
      this.lockFilterPathNodes();
      const stateId = `t${new Date().getTime()}`;
      const updatedList = Array.from(updatedMap.keys());
      const updatedNodes = updatedList.map((nodePrivateKey) => {
        updatedMap.set(nodePrivateKey, stateId);
        return this.privateMap.get(nodePrivateKey);
      });
      this.emit("update", {
        nodes: updatedNodes,
        map: updatedMap
      });
      this.shouldReflow = false;
      updatedMap.clear();
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
  setActived(actived) {
    const { activeMultiple } = this.config;
    const list = actived.slice(0);
    if (!activeMultiple) {
      list.length = 1;
    }
    list.forEach((val) => {
      this.activedMap.set(val, true);
      const node = this.getNode(val);
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
      const node = this.getNode(val);
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
      if (valueMode === "parentFirst" && !checkStrictly) {
        if (!node.parent || !node.parent.isChecked(checkedMap)) {
          list.push(node.value);
        }
      } else if (valueMode === "onlyLeaf" && !checkStrictly) {
        if (node.isLeaf()) {
          list.push(node.value);
        }
      } else {
        list.push(node.value);
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
      const node = this.getNode(val);
      if (!node)
        return;
      if (checkStrictly) {
        this.checkedMap.set(val, true);
        node.updateChecked();
      } else {
        const childrenNodes = node.walk();
        childrenNodes.forEach((childNode) => {
          this.checkedMap.set(childNode.value, true);
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
  refreshState() {
    const { nodeMap } = this;
    nodeMap.forEach((node) => {
      node.update();
    });
  }
  updateAll() {
    const { nodeMap } = this;
    nodeMap.forEach((node) => {
      node.update();
      node.updateChecked();
    });
  }
  remove(value) {
    const node = this.getNode(value);
    if (node) {
      node.remove();
    }
  }
  removeAll() {
    this.expandedMap.clear();
    this.checkedMap.clear();
    this.activedMap.clear();
    this.filterMap.clear();
    this.nodeMap.clear();
    this.privateMap.clear();
    this.updatedMap.clear();
    this.nodes = [];
    this.children = [];
    this.reflow();
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
      const node = this.getNode(value);
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
          map.set(relatedNode.value, relatedNode);
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
    const methodName = camelCase3(`on-${name}`);
    const method = config[methodName];
    if (isFunction8(method)) {
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
    if (!currentFilter || !isFunction8(currentFilter))
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

// ../../../Users/rs/Documents/ChatGPT/tdesign-vue-next/packages/components/tree/hooks/useTreeStore.ts
function useTreeStore(state) {
  const { props, context, refProps } = state;
  const { valueMode, filter, keys } = props;
  const store = new TreeStore({
    valueMode,
    filter
  });
  const tValue = state.vmValue[0];
  const tActived = state.vmActived[0];
  const tExpanded = state.vmExpanded[0];
  const updateStoreConfig = () => {
    const storeProps = pick(props, [
      "expandAll",
      "expandLevel",
      "expandMutex",
      "expandParent",
      "activable",
      "activeMultiple",
      "disabled",
      "disableCheck",
      "checkable",
      "draggable",
      "checkStrictly",
      "load",
      "lazy",
      "valueMode",
      "filter",
      "allowFoldNodeOnFilter"
    ]);
    store.setConfig(storeProps);
  };
  const updateExpanded = () => {
    const { expandParent } = props;
    if (!Array.isArray(tExpanded.value))
      return;
    const expandedMap = /* @__PURE__ */ new Map();
    tExpanded.value.forEach((val) => {
      expandedMap.set(val, true);
      if (expandParent) {
        const node = store.getNode(val);
        if (node) {
          node.getModel().getParents().forEach((tn) => {
            expandedMap.set(tn.value, true);
          });
        }
      }
    });
    const expandedArr = Array.from(expandedMap.keys());
    store.setExpanded(expandedArr);
  };
  let filterChanged = false;
  let prevExpanded = null;
  const expandFilterPath = () => {
    if (!props.allowFoldNodeOnFilter)
      return;
    if (!filterChanged)
      return;
    filterChanged = false;
    if (props.filter) {
      if (!prevExpanded) {
        prevExpanded = store.getExpanded();
      }
      const pathValues = [];
      const allNodes = store.getNodes();
      allNodes.forEach((node) => {
        if (node.vmIsLocked) {
          pathValues.push(node.value);
        }
      });
      store.setExpanded(pathValues);
    } else if (prevExpanded) {
      store.replaceExpanded(prevExpanded);
      prevExpanded = null;
    }
  };
  const checkFilterExpand = (newFilter, previousFilter) => {
    if (!props.allowFoldNodeOnFilter)
      return;
    filterChanged = newFilter !== previousFilter;
  };
  const handleLoad = (info) => {
    const { node } = info;
    const evtCtx = {
      node: node.getModel()
    };
    if (Array.isArray(tValue.value) && tValue.value.length > 0) {
      store.replaceChecked(tValue.value);
    }
    if (Array.isArray(tExpanded.value) && tExpanded.value.length > 0) {
      store.replaceExpanded(tExpanded.value);
    }
    if (Array.isArray(tActived.value) && tActived.value.length > 0) {
      store.replaceActived(tActived.value);
    }
    if (props?.onLoad) {
      props?.onLoad(evtCtx);
    }
    context.emit("load", evtCtx);
  };
  const rebuild = (list) => {
    store.reload(list || []);
    store.refreshNodes();
    if (Array.isArray(tValue.value)) {
      store.setChecked(tValue.value);
    }
    updateExpanded();
    if (Array.isArray(tActived.value)) {
      store.setActived(tActived.value);
    }
    store.refreshState();
  };
  function initStore() {
    store.setConfig({
      keys
    });
    updateStoreConfig();
    store.append(props.data || []);
    store.refreshNodes();
    if (Array.isArray(tValue.value)) {
      store.setChecked(tValue.value);
    }
    updateExpanded();
    if (Array.isArray(tActived.value)) {
      store.setActived(tActived.value);
    }
    store.emitter.on("load", handleLoad);
    store.emitter.on("update", expandFilterPath);
  }
  initStore();
  state.setStore(store);
  watch12(
    () => [...tValue.value || []],
    (nVal) => {
      store.replaceChecked(nVal);
    }
  );
  watch12(
    () => [...tExpanded.value || []],
    (nVal) => {
      store.replaceExpanded(nVal);
    }
  );
  watch12(
    () => [...tActived.value || []],
    (nVal) => {
      store.replaceActived(nVal);
    }
  );
  watch12(refProps.filter, (nVal, previousVal) => {
    checkFilterExpand(nVal, previousVal);
  });
  watch12(refProps.keys, (keys2) => {
    store.setConfig({
      keys: keys2
    });
  });
  watch12(refProps.expandAll, (nVal) => {
    if (nVal) {
      const valueList = store.getNodes().filter((node) => Array.isArray(node.children) && node.children.length).map((node) => node.value);
      store.setExpanded(valueList);
    } else {
      store.replaceExpanded(prevExpanded);
      prevExpanded = null;
    }
  });
  return {
    store,
    rebuild,
    checkFilterExpand,
    updateStoreConfig,
    updateExpanded,
    expandFilterPath
  };
}

// ../../../Users/rs/Documents/ChatGPT/tdesign-vue-next/packages/components/tree/hooks/useTreeStyles.ts
function formatCSSUnit(unit) {
  if (!unit)
    return unit;
  return isNaN(Number(unit)) ? unit : `${unit}px`;
}
function useTreeStyles(state) {
  const { props } = state;
  const componentName = usePrefixClass("tree").value;
  const classPrefix = usePrefixClass().value;
  const { virtualConfig, isScrolling, refProps } = state;
  const { height, maxHeight } = refProps;
  const treeClasses = computed14(() => {
    const list = [componentName];
    const { disabled, hover, transition, checkable, draggable, expandOnClickNode, scroll } = props;
    if (disabled) {
      list.push(`${classPrefix}-is-disabled`);
    }
    if (hover) {
      list.push(`${componentName}--hoverable`);
    }
    if (checkable) {
      list.push(`${componentName}--checkable`);
    }
    if (draggable) {
      list.push(`${componentName}--draggable`);
    }
    if (transition) {
      list.push(`${componentName}--transition`);
    }
    if (expandOnClickNode) {
      list.push(`${componentName}--block-node`);
    }
    const isVirtual = virtualConfig?.isVirtualScroll.value;
    if (isVirtual) {
      list.push(`${componentName}__vscroll`);
      if (isScrolling.value) {
        list.push(`${componentName}--scrolling`);
      }
    } else if (scroll && scroll.type === "lazy") {
      list.push(`${componentName}__lazyload`);
    }
    return list;
  });
  const treeContentStyles = computed14(() => ({
    height: formatCSSUnit(height.value),
    maxHeight: formatCSSUnit(maxHeight.value),
    overflowY: formatCSSUnit(height.value) || formatCSSUnit(maxHeight.value) ? "auto" : void 0
  }));
  const scrollStyles = computed14(() => {
    const isVirtual = virtualConfig?.isVirtualScroll.value;
    const translateY = isVirtual ? virtualConfig?.translateY.value : 0;
    const transform = `translateY(${translateY}px)`;
    const posStyle = {
      transform,
      "-ms-transform": transform,
      "-moz-transform": transform,
      "-webkit-transform": transform
    };
    return posStyle;
  });
  const cursorStyles = computed14(() => {
    const isVirtual = virtualConfig?.isVirtualScroll.value;
    const translateY = isVirtual ? virtualConfig?.translateY.value : 0;
    const translate = `translate(0, ${translateY}px)`;
    return {
      transform: translate,
      "-ms-transform": translate,
      "-moz-transform": translate,
      "-webkit-transform": translate
    };
  });
  return {
    treeClasses,
    treeContentStyles,
    scrollStyles,
    cursorStyles
  };
}

// ../../../Users/rs/Documents/ChatGPT/tdesign-vue-next/packages/components/tree/props.ts
var props_default3 = {
  activable: Boolean,
  activeMultiple: Boolean,
  actived: {
    type: Array,
    default: void 0
  },
  defaultActived: {
    type: Array
  },
  allowDrop: {
    type: Function
  },
  allowFoldNodeOnFilter: Boolean,
  checkProps: {
    type: Object
  },
  checkStrictly: Boolean,
  checkable: Boolean,
  data: {
    type: Array,
    default: () => []
  },
  disableCheck: {
    type: [Boolean, Function],
    default: false
  },
  disabled: Boolean,
  draggable: Boolean,
  empty: {
    type: [String, Function],
    default: ""
  },
  expandAll: Boolean,
  expandLevel: {
    type: Number,
    default: 0
  },
  expandMutex: Boolean,
  expandOnClickNode: Boolean,
  expandParent: Boolean,
  expanded: {
    type: Array,
    default: void 0
  },
  defaultExpanded: {
    type: Array,
    default: () => []
  },
  filter: {
    type: Function
  },
  height: {
    type: [String, Number]
  },
  hover: Boolean,
  icon: {
    type: [Boolean, Function],
    default: true
  },
  keys: {
    type: Object
  },
  label: {
    type: [String, Boolean, Function],
    default: true
  },
  lazy: {
    type: Boolean,
    default: true
  },
  line: {
    type: [Boolean, Function],
    default: false
  },
  load: {
    type: Function
  },
  maxHeight: {
    type: [String, Number]
  },
  operations: {
    type: Function
  },
  scroll: {
    type: Object
  },
  transition: {
    type: Boolean,
    default: true
  },
  value: {
    type: Array,
    default: void 0
  },
  modelValue: {
    type: Array,
    default: void 0
  },
  defaultValue: {
    type: Array,
    default: () => []
  },
  valueMode: {
    type: String,
    default: "onlyLeaf",
    validator(val) {
      if (!val)
        return true;
      return ["onlyLeaf", "parentFirst", "all"].includes(val);
    }
  },
  onActive: Function,
  onChange: Function,
  onClick: Function,
  onDragEnd: Function,
  onDragLeave: Function,
  onDragOver: Function,
  onDragStart: Function,
  onDrop: Function,
  onExpand: Function,
  onLoad: Function,
  onScroll: Function
};

// ../../../Users/rs/Documents/ChatGPT/tdesign-vue-next/packages/components/tree/tree.tsx
function _isSlot2(s) {
  return typeof s === "function" || Object.prototype.toString.call(s) === "[object Object]" && !_isVNode2(s);
}
var tree_default = defineComponent6({
  name: "TTree",
  model: {
    prop: "value",
    event: "change"
  },
  props: props_default3,
  setup(props, context) {
    const {
      t: t2,
      global: global2
    } = useConfig("tree");
    const classPrefix = usePrefixClass();
    const componentName = usePrefixClass("tree");
    const renderTNodeJSX = useTNodeJSX();
    const {
      state
    } = useTreeState(props, context);
    const {
      treeContentRef,
      isScrolling
    } = state;
    const {
      store,
      updateStoreConfig,
      rebuild
    } = useTreeStore(state);
    useDragHandle(state);
    const {
      setActived,
      setExpanded,
      setChecked
    } = useTreeAction(state);
    const {
      onInnerVirtualScroll,
      virtualConfig,
      scrollToElement
    } = useTreeScroll(state);
    const {
      renderTreeNodes,
      nodesEmpty
    } = useTreeNodes(state);
    const {
      treeClasses,
      treeContentStyles,
      scrollStyles,
      cursorStyles
    } = useTreeStyles(state);
    return {
      t: t2,
      global: global2,
      classPrefix,
      componentName,
      state,
      store,
      treeClasses,
      treeContentRef,
      renderTNodeJSX,
      rebuild,
      updateStoreConfig,
      setActived,
      setExpanded,
      setChecked,
      renderTreeNodes,
      nodesEmpty,
      isScrolling,
      onInnerVirtualScroll,
      treeContentStyles,
      scrollStyles,
      cursorStyles,
      virtualConfig,
      scrollToElement,
      scrollTo: scrollToElement
    };
  },
  watch: {
    data(list) {
      this.rebuild(list);
    }
  },
  methods: {
    refresh() {
      this.store.refreshState();
    },
    setItem(value, options) {
      const node = this.store.getNode(value);
      const spec = options;
      const keys = Object.keys(spec);
      if (node && spec) {
        ["expanded", "actived", "checked"].forEach((name) => {
          if (keys.includes(name)) {
            const val = spec[name];
            delete spec[name];
            const methodName = `set${upperFirst(name)}`;
            const setupMethod = this[methodName];
            if (isFunction9(setupMethod)) {
              setupMethod.call(this, node, val);
            }
          }
        });
        node.set(spec);
      }
    },
    getItem(value) {
      const node = this.store.getNode(value);
      return node?.getModel();
    },
    getItems(value) {
      const nodes = this.store.getNodes(value);
      return nodes.map((node) => node.getModel());
    },
    appendTo(para, item) {
      const {
        store
      } = this;
      let list = [];
      if (Array.isArray(item)) {
        list = item;
      } else {
        list = [item];
      }
      list.forEach((item2) => {
        const val = item2?.value || "";
        const node = getNode(store, val);
        if (node) {
          store.appendNodes(para, node);
        } else {
          store.appendNodes(para, item2);
        }
      });
    },
    insertBefore(value, item) {
      const {
        store
      } = this;
      const val = item?.value || "";
      const node = getNode(store, val);
      if (node) {
        store.insertBefore(value, node);
      } else {
        store.insertBefore(value, item);
      }
    },
    insertAfter(value, item) {
      const {
        store
      } = this;
      const val = item?.value || "";
      const node = getNode(store, val);
      if (node) {
        store.insertAfter(value, node);
      } else {
        store.insertAfter(value, item);
      }
    },
    remove(value) {
      return this.store.remove(value);
    },
    getIndex(value) {
      return this.store.getNodeIndex(value);
    },
    getParent(value) {
      const node = this.store.getParent(value);
      return node?.getModel();
    },
    getParents(value) {
      const nodes = this.store.getParents(value);
      return nodes.map((node) => node.getModel());
    },
    getPath(value) {
      const node = this.store.getNode(value);
      let pathNodes = [];
      if (node) {
        pathNodes = node.getPath().map((node2) => node2.getModel());
      }
      return pathNodes;
    },
    getTreeData(value) {
      let list = [];
      if (value) {
        const node = this.store.getNode(value);
        if (!node)
          return [];
        list = this.store.getNodes(value);
      } else {
        list = this.store.getNodes();
      }
      const nodeMap = {};
      const treeNodes = [];
      list.forEach((item) => {
        const {
          value: value2
        } = item;
        const itemData = {
          ...item.data,
          value: value2
        };
        if (itemData.children !== true) {
          delete itemData.children;
        }
        nodeMap[value2] = itemData;
        const parent = item.getParent();
        if (!parent) {
          treeNodes.push(itemData);
        } else {
          const parentData = nodeMap[parent.value];
          if (!parentData) {
            treeNodes.push(itemData);
          } else {
            if (!Array.isArray(parentData.children)) {
              parentData.children = [];
            }
            parentData.children.push(itemData);
          }
        }
      });
      return treeNodes;
    }
  },
  render(h6) {
    const {
      state,
      treeClasses,
      updateStoreConfig,
      renderTreeNodes,
      nodesEmpty,
      isScrolling,
      virtualConfig,
      treeContentStyles,
      scrollStyles,
      cursorStyles
    } = this;
    const createElement = getCreateElement(h6);
    const {
      scope,
      allNodes,
      refProps
    } = state;
    scope.scopedSlots = getScopedSlots(this);
    updateStoreConfig();
    const treeNodeViews = renderTreeNodes(createElement);
    const cname = this.componentName;
    const isVirtual = virtualConfig.isVirtualScroll.value;
    let emptyNode = null;
    if (nodesEmpty) {
      const useLocale = !this.empty && !this.$slots.empty;
      const emptyContent = useLocale ? this.t(this.global.empty) : this.renderTNodeJSX("empty");
      emptyNode = _createVNode12("div", {
        "class": `${cname}__empty`
      }, [emptyContent]);
    } else if (treeNodeViews.length <= 0) {
      emptyNode = _createVNode12("div", null, null);
    }
    const {
      $props
    } = this;
    const {
      transition
    } = $props;
    let treeNodeList = null;
    if (!transition || isVirtual && isScrolling) {
      treeNodeList = _createVNode12("div", {
        "class": `${cname}__list`,
        "style": scrollStyles
      }, [treeNodeViews]);
    } else {
      treeNodeList = _createVNode12(TransitionGroup, {
        "tag": "div",
        "class": `${cname}__list`,
        "enter-active-class": `${cname}__item--enter-active`,
        "leave-active-class": `${cname}__item--leave-active`,
        "style": scrollStyles
      }, _isSlot2(treeNodeViews) ? treeNodeViews : {
        default: () => [treeNodeViews]
      });
    }
    const topValue = (allNodes.value?.filter((node) => node.visible).length ?? 0) * (refProps.scroll.value?.rowHeight ?? 34);
    const placeholderStyles = {
      width: "1px",
      height: "1px",
      opacity: 0,
      pointerEvents: "none",
      position: "absolute",
      left: 0,
      top: `${topValue}px`
    };
    const placeholderEl = _createVNode12("div", {
      "style": placeholderStyles
    }, null);
    const treeNode = _createVNode12("div", {
      "class": treeClasses,
      "ref": "treeContentRef",
      "onScroll": this.onInnerVirtualScroll,
      "style": treeContentStyles
    }, [isVirtual && _createVNode12("div", {
      "class": `${cname}__vscroll-cursor`,
      "style": cursorStyles
    }, null), emptyNode || treeNodeList, isVirtual && placeholderEl]);
    return treeNode;
  }
});
export {
  tree_default as default
};
