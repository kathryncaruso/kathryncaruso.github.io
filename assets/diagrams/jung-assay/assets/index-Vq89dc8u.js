(function () {
  const A = document.createElement("link").relList;
  if (A && A.supports && A.supports("modulepreload")) return;
  for (const H of document.querySelectorAll('link[rel="modulepreload"]')) m(H);
  new MutationObserver((H) => {
    for (const O of H) if (O.type === "childList") for (const w of O.addedNodes) w.tagName === "LINK" && w.rel === "modulepreload" && m(w);
  }).observe(document, { childList: !0, subtree: !0 });
  function E(H) {
    const O = {};
    return (
      H.integrity && (O.integrity = H.integrity),
      H.referrerPolicy && (O.referrerPolicy = H.referrerPolicy),
      H.crossOrigin === "use-credentials"
        ? (O.credentials = "include")
        : H.crossOrigin === "anonymous"
          ? (O.credentials = "omit")
          : (O.credentials = "same-origin"),
      O
    );
  }
  function m(H) {
    if (H.ep) return;
    H.ep = !0;
    const O = E(H);
    fetch(H.href, O);
  }
})();
function vh(z) {
  return z && z.__esModule && Object.prototype.hasOwnProperty.call(z, "default") ? z.default : z;
}
var bf = { exports: {} },
  Tn = {};
var Do;
function ph() {
  if (Do) return Tn;
  Do = 1;
  var z = Symbol.for("react.transitional.element"),
    A = Symbol.for("react.fragment");
  function E(m, H, O) {
    var w = null;
    if ((O !== void 0 && (w = "" + O), H.key !== void 0 && (w = "" + H.key), "key" in H)) {
      O = {};
      for (var tl in H) tl !== "key" && (O[tl] = H[tl]);
    } else O = H;
    return ((H = O.ref), { $$typeof: z, type: m, key: w, ref: H !== void 0 ? H : null, props: O });
  }
  return ((Tn.Fragment = A), (Tn.jsx = E), (Tn.jsxs = E), Tn);
}
var Bo;
function bh() {
  return (Bo || ((Bo = 1), (bf.exports = ph())), bf.exports);
}
var c = bh(),
  xf = { exports: {} },
  Q = {};
var Co;
function xh() {
  if (Co) return Q;
  Co = 1;
  var z = Symbol.for("react.transitional.element"),
    A = Symbol.for("react.portal"),
    E = Symbol.for("react.fragment"),
    m = Symbol.for("react.strict_mode"),
    H = Symbol.for("react.profiler"),
    O = Symbol.for("react.consumer"),
    w = Symbol.for("react.context"),
    tl = Symbol.for("react.forward_ref"),
    D = Symbol.for("react.suspense"),
    T = Symbol.for("react.memo"),
    X = Symbol.for("react.lazy"),
    q = Symbol.for("react.activity"),
    nl = Symbol.iterator;
  function R(r) {
    return r === null || typeof r != "object" ? null : ((r = (nl && r[nl]) || r["@@iterator"]), typeof r == "function" ? r : null);
  }
  var J = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    ul = Object.assign,
    bl = {};
  function Nl(r, j, M) {
    ((this.props = r), (this.context = j), (this.refs = bl), (this.updater = M || J));
  }
  ((Nl.prototype.isReactComponent = {}),
    (Nl.prototype.setState = function (r, j) {
      if (typeof r != "object" && typeof r != "function" && r != null)
        throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
      this.updater.enqueueSetState(this, r, j, "setState");
    }),
    (Nl.prototype.forceUpdate = function (r) {
      this.updater.enqueueForceUpdate(this, r, "forceUpdate");
    }));
  function El() {}
  El.prototype = Nl.prototype;
  function xl(r, j, M) {
    ((this.props = r), (this.context = j), (this.refs = bl), (this.updater = M || J));
  }
  var zl = (xl.prototype = new El());
  ((zl.constructor = xl), ul(zl, Nl.prototype), (zl.isPureReactComponent = !0));
  var wl = Array.isArray;
  function Gl() {}
  var k = { H: null, A: null, T: null, S: null },
    Dl = Object.prototype.hasOwnProperty;
  function Kl(r, j, M) {
    var C = M.ref;
    return { $$typeof: z, type: r, key: j, ref: C !== void 0 ? C : null, props: M };
  }
  function Ke(r, j) {
    return Kl(r.type, j, r.props);
  }
  function _t(r) {
    return typeof r == "object" && r !== null && r.$$typeof === z;
  }
  function Wl(r) {
    var j = { "=": "=0", ":": "=2" };
    return (
      "$" +
      r.replace(/[=:]/g, function (M) {
        return j[M];
      })
    );
  }
  var Te = /\/+/g;
  function Ut(r, j) {
    return typeof r == "object" && r !== null && r.key != null ? Wl("" + r.key) : j.toString(36);
  }
  function jt(r) {
    switch (r.status) {
      case "fulfilled":
        return r.value;
      case "rejected":
        throw r.reason;
      default:
        switch (
          (typeof r.status == "string"
            ? r.then(Gl, Gl)
            : ((r.status = "pending"),
              r.then(
                function (j) {
                  r.status === "pending" && ((r.status = "fulfilled"), (r.value = j));
                },
                function (j) {
                  r.status === "pending" && ((r.status = "rejected"), (r.reason = j));
                }
              )),
          r.status)
        ) {
          case "fulfilled":
            return r.value;
          case "rejected":
            throw r.reason;
        }
    }
    throw r;
  }
  function x(r, j, M, C, Z) {
    var $ = typeof r;
    ($ === "undefined" || $ === "boolean") && (r = null);
    var cl = !1;
    if (r === null) cl = !0;
    else
      switch ($) {
        case "bigint":
        case "string":
        case "number":
          cl = !0;
          break;
        case "object":
          switch (r.$$typeof) {
            case z:
            case A:
              cl = !0;
              break;
            case X:
              return ((cl = r._init), x(cl(r._payload), j, M, C, Z));
          }
      }
    if (cl)
      return (
        (Z = Z(r)),
        (cl = C === "" ? "." + Ut(r, 0) : C),
        wl(Z)
          ? ((M = ""),
            cl != null && (M = cl.replace(Te, "$&/") + "/"),
            x(Z, j, M, "", function (Da) {
              return Da;
            }))
          : Z != null &&
            (_t(Z) && (Z = Ke(Z, M + (Z.key == null || (r && r.key === Z.key) ? "" : ("" + Z.key).replace(Te, "$&/") + "/") + cl)), j.push(Z)),
        1
      );
    cl = 0;
    var kl = C === "" ? "." : C + ":";
    if (wl(r)) for (var _l = 0; _l < r.length; _l++) ((C = r[_l]), ($ = kl + Ut(C, _l)), (cl += x(C, j, M, $, Z)));
    else if (((_l = R(r)), typeof _l == "function"))
      for (r = _l.call(r), _l = 0; !(C = r.next()).done; ) ((C = C.value), ($ = kl + Ut(C, _l++)), (cl += x(C, j, M, $, Z)));
    else if ($ === "object") {
      if (typeof r.then == "function") return x(jt(r), j, M, C, Z);
      throw (
        (j = String(r)),
        Error(
          "Objects are not valid as a React child (found: " +
            (j === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : j) +
            "). If you meant to render a collection of children, use an array instead."
        )
      );
    }
    return cl;
  }
  function _(r, j, M) {
    if (r == null) return r;
    var C = [],
      Z = 0;
    return (
      x(r, C, "", "", function ($) {
        return j.call(M, $, Z++);
      }),
      C
    );
  }
  function L(r) {
    if (r._status === -1) {
      var j = r._result;
      ((j = j()),
        j.then(
          function (M) {
            (r._status === 0 || r._status === -1) && ((r._status = 1), (r._result = M));
          },
          function (M) {
            (r._status === 0 || r._status === -1) && ((r._status = 2), (r._result = M));
          }
        ),
        r._status === -1 && ((r._status = 0), (r._result = j)));
    }
    if (r._status === 1) return r._result.default;
    throw r._result;
  }
  var dl =
      typeof reportError == "function"
        ? reportError
        : function (r) {
            if (typeof window == "object" && typeof window.ErrorEvent == "function") {
              var j = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message: typeof r == "object" && r !== null && typeof r.message == "string" ? String(r.message) : String(r),
                error: r,
              });
              if (!window.dispatchEvent(j)) return;
            } else if (typeof process == "object" && typeof process.emit == "function") {
              process.emit("uncaughtException", r);
              return;
            }
            console.error(r);
          },
    hl = {
      map: _,
      forEach: function (r, j, M) {
        _(
          r,
          function () {
            j.apply(this, arguments);
          },
          M
        );
      },
      count: function (r) {
        var j = 0;
        return (
          _(r, function () {
            j++;
          }),
          j
        );
      },
      toArray: function (r) {
        return (
          _(r, function (j) {
            return j;
          }) || []
        );
      },
      only: function (r) {
        if (!_t(r)) throw Error("React.Children.only expected to receive a single React element child.");
        return r;
      },
    };
  return (
    (Q.Activity = q),
    (Q.Children = hl),
    (Q.Component = Nl),
    (Q.Fragment = E),
    (Q.Profiler = H),
    (Q.PureComponent = xl),
    (Q.StrictMode = m),
    (Q.Suspense = D),
    (Q.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = k),
    (Q.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function (r) {
        return k.H.useMemoCache(r);
      },
    }),
    (Q.cache = function (r) {
      return function () {
        return r.apply(null, arguments);
      };
    }),
    (Q.cacheSignal = function () {
      return null;
    }),
    (Q.cloneElement = function (r, j, M) {
      if (r == null) throw Error("The argument must be a React element, but you passed " + r + ".");
      var C = ul({}, r.props),
        Z = r.key;
      if (j != null)
        for ($ in (j.key !== void 0 && (Z = "" + j.key), j))
          !Dl.call(j, $) || $ === "key" || $ === "__self" || $ === "__source" || ($ === "ref" && j.ref === void 0) || (C[$] = j[$]);
      var $ = arguments.length - 2;
      if ($ === 1) C.children = M;
      else if (1 < $) {
        for (var cl = Array($), kl = 0; kl < $; kl++) cl[kl] = arguments[kl + 2];
        C.children = cl;
      }
      return Kl(r.type, Z, C);
    }),
    (Q.createContext = function (r) {
      return (
        (r = { $$typeof: w, _currentValue: r, _currentValue2: r, _threadCount: 0, Provider: null, Consumer: null }),
        (r.Provider = r),
        (r.Consumer = { $$typeof: O, _context: r }),
        r
      );
    }),
    (Q.createElement = function (r, j, M) {
      var C,
        Z = {},
        $ = null;
      if (j != null)
        for (C in (j.key !== void 0 && ($ = "" + j.key), j)) Dl.call(j, C) && C !== "key" && C !== "__self" && C !== "__source" && (Z[C] = j[C]);
      var cl = arguments.length - 2;
      if (cl === 1) Z.children = M;
      else if (1 < cl) {
        for (var kl = Array(cl), _l = 0; _l < cl; _l++) kl[_l] = arguments[_l + 2];
        Z.children = kl;
      }
      if (r && r.defaultProps) for (C in ((cl = r.defaultProps), cl)) Z[C] === void 0 && (Z[C] = cl[C]);
      return Kl(r, $, Z);
    }),
    (Q.createRef = function () {
      return { current: null };
    }),
    (Q.forwardRef = function (r) {
      return { $$typeof: tl, render: r };
    }),
    (Q.isValidElement = _t),
    (Q.lazy = function (r) {
      return { $$typeof: X, _payload: { _status: -1, _result: r }, _init: L };
    }),
    (Q.memo = function (r, j) {
      return { $$typeof: T, type: r, compare: j === void 0 ? null : j };
    }),
    (Q.startTransition = function (r) {
      var j = k.T,
        M = {};
      k.T = M;
      try {
        var C = r(),
          Z = k.S;
        (Z !== null && Z(M, C), typeof C == "object" && C !== null && typeof C.then == "function" && C.then(Gl, dl));
      } catch ($) {
        dl($);
      } finally {
        (j !== null && M.types !== null && (j.types = M.types), (k.T = j));
      }
    }),
    (Q.unstable_useCacheRefresh = function () {
      return k.H.useCacheRefresh();
    }),
    (Q.use = function (r) {
      return k.H.use(r);
    }),
    (Q.useActionState = function (r, j, M) {
      return k.H.useActionState(r, j, M);
    }),
    (Q.useCallback = function (r, j) {
      return k.H.useCallback(r, j);
    }),
    (Q.useContext = function (r) {
      return k.H.useContext(r);
    }),
    (Q.useDebugValue = function () {}),
    (Q.useDeferredValue = function (r, j) {
      return k.H.useDeferredValue(r, j);
    }),
    (Q.useEffect = function (r, j) {
      return k.H.useEffect(r, j);
    }),
    (Q.useEffectEvent = function (r) {
      return k.H.useEffectEvent(r);
    }),
    (Q.useId = function () {
      return k.H.useId();
    }),
    (Q.useImperativeHandle = function (r, j, M) {
      return k.H.useImperativeHandle(r, j, M);
    }),
    (Q.useInsertionEffect = function (r, j) {
      return k.H.useInsertionEffect(r, j);
    }),
    (Q.useLayoutEffect = function (r, j) {
      return k.H.useLayoutEffect(r, j);
    }),
    (Q.useMemo = function (r, j) {
      return k.H.useMemo(r, j);
    }),
    (Q.useOptimistic = function (r, j) {
      return k.H.useOptimistic(r, j);
    }),
    (Q.useReducer = function (r, j, M) {
      return k.H.useReducer(r, j, M);
    }),
    (Q.useRef = function (r) {
      return k.H.useRef(r);
    }),
    (Q.useState = function (r) {
      return k.H.useState(r);
    }),
    (Q.useSyncExternalStore = function (r, j, M) {
      return k.H.useSyncExternalStore(r, j, M);
    }),
    (Q.useTransition = function () {
      return k.H.useTransition();
    }),
    (Q.version = "19.2.4"),
    Q
  );
}
var Uo;
function _f() {
  return (Uo || ((Uo = 1), (xf.exports = xh())), xf.exports);
}
var Ct = _f();
const Af = vh(Ct);
var Sf = { exports: {} },
  An = {},
  Nf = { exports: {} },
  zf = {};
var Ho;
function Sh() {
  return (
    Ho ||
      ((Ho = 1),
      (function (z) {
        function A(x, _) {
          var L = x.length;
          x.push(_);
          l: for (; 0 < L; ) {
            var dl = (L - 1) >>> 1,
              hl = x[dl];
            if (0 < H(hl, _)) ((x[dl] = _), (x[L] = hl), (L = dl));
            else break l;
          }
        }
        function E(x) {
          return x.length === 0 ? null : x[0];
        }
        function m(x) {
          if (x.length === 0) return null;
          var _ = x[0],
            L = x.pop();
          if (L !== _) {
            x[0] = L;
            l: for (var dl = 0, hl = x.length, r = hl >>> 1; dl < r; ) {
              var j = 2 * (dl + 1) - 1,
                M = x[j],
                C = j + 1,
                Z = x[C];
              if (0 > H(M, L)) C < hl && 0 > H(Z, M) ? ((x[dl] = Z), (x[C] = L), (dl = C)) : ((x[dl] = M), (x[j] = L), (dl = j));
              else if (C < hl && 0 > H(Z, L)) ((x[dl] = Z), (x[C] = L), (dl = C));
              else break l;
            }
          }
          return _;
        }
        function H(x, _) {
          var L = x.sortIndex - _.sortIndex;
          return L !== 0 ? L : x.id - _.id;
        }
        if (((z.unstable_now = void 0), typeof performance == "object" && typeof performance.now == "function")) {
          var O = performance;
          z.unstable_now = function () {
            return O.now();
          };
        } else {
          var w = Date,
            tl = w.now();
          z.unstable_now = function () {
            return w.now() - tl;
          };
        }
        var D = [],
          T = [],
          X = 1,
          q = null,
          nl = 3,
          R = !1,
          J = !1,
          ul = !1,
          bl = !1,
          Nl = typeof setTimeout == "function" ? setTimeout : null,
          El = typeof clearTimeout == "function" ? clearTimeout : null,
          xl = typeof setImmediate < "u" ? setImmediate : null;
        function zl(x) {
          for (var _ = E(T); _ !== null; ) {
            if (_.callback === null) m(T);
            else if (_.startTime <= x) (m(T), (_.sortIndex = _.expirationTime), A(D, _));
            else break;
            _ = E(T);
          }
        }
        function wl(x) {
          if (((ul = !1), zl(x), !J))
            if (E(D) !== null) ((J = !0), Gl || ((Gl = !0), Wl()));
            else {
              var _ = E(T);
              _ !== null && jt(wl, _.startTime - x);
            }
        }
        var Gl = !1,
          k = -1,
          Dl = 5,
          Kl = -1;
        function Ke() {
          return bl ? !0 : !(z.unstable_now() - Kl < Dl);
        }
        function _t() {
          if (((bl = !1), Gl)) {
            var x = z.unstable_now();
            Kl = x;
            var _ = !0;
            try {
              l: {
                ((J = !1), ul && ((ul = !1), El(k), (k = -1)), (R = !0));
                var L = nl;
                try {
                  t: {
                    for (zl(x), q = E(D); q !== null && !(q.expirationTime > x && Ke()); ) {
                      var dl = q.callback;
                      if (typeof dl == "function") {
                        ((q.callback = null), (nl = q.priorityLevel));
                        var hl = dl(q.expirationTime <= x);
                        if (((x = z.unstable_now()), typeof hl == "function")) {
                          ((q.callback = hl), zl(x), (_ = !0));
                          break t;
                        }
                        (q === E(D) && m(D), zl(x));
                      } else m(D);
                      q = E(D);
                    }
                    if (q !== null) _ = !0;
                    else {
                      var r = E(T);
                      (r !== null && jt(wl, r.startTime - x), (_ = !1));
                    }
                  }
                  break l;
                } finally {
                  ((q = null), (nl = L), (R = !1));
                }
                _ = void 0;
              }
            } finally {
              _ ? Wl() : (Gl = !1);
            }
          }
        }
        var Wl;
        if (typeof xl == "function")
          Wl = function () {
            xl(_t);
          };
        else if (typeof MessageChannel < "u") {
          var Te = new MessageChannel(),
            Ut = Te.port2;
          ((Te.port1.onmessage = _t),
            (Wl = function () {
              Ut.postMessage(null);
            }));
        } else
          Wl = function () {
            Nl(_t, 0);
          };
        function jt(x, _) {
          k = Nl(function () {
            x(z.unstable_now());
          }, _);
        }
        ((z.unstable_IdlePriority = 5),
          (z.unstable_ImmediatePriority = 1),
          (z.unstable_LowPriority = 4),
          (z.unstable_NormalPriority = 3),
          (z.unstable_Profiling = null),
          (z.unstable_UserBlockingPriority = 2),
          (z.unstable_cancelCallback = function (x) {
            x.callback = null;
          }),
          (z.unstable_forceFrameRate = function (x) {
            0 > x || 125 < x
              ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported")
              : (Dl = 0 < x ? Math.floor(1e3 / x) : 5);
          }),
          (z.unstable_getCurrentPriorityLevel = function () {
            return nl;
          }),
          (z.unstable_next = function (x) {
            switch (nl) {
              case 1:
              case 2:
              case 3:
                var _ = 3;
                break;
              default:
                _ = nl;
            }
            var L = nl;
            nl = _;
            try {
              return x();
            } finally {
              nl = L;
            }
          }),
          (z.unstable_requestPaint = function () {
            bl = !0;
          }),
          (z.unstable_runWithPriority = function (x, _) {
            switch (x) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                x = 3;
            }
            var L = nl;
            nl = x;
            try {
              return _();
            } finally {
              nl = L;
            }
          }),
          (z.unstable_scheduleCallback = function (x, _, L) {
            var dl = z.unstable_now();
            switch ((typeof L == "object" && L !== null ? ((L = L.delay), (L = typeof L == "number" && 0 < L ? dl + L : dl)) : (L = dl), x)) {
              case 1:
                var hl = -1;
                break;
              case 2:
                hl = 250;
                break;
              case 5:
                hl = 1073741823;
                break;
              case 4:
                hl = 1e4;
                break;
              default:
                hl = 5e3;
            }
            return (
              (hl = L + hl),
              (x = { id: X++, callback: _, priorityLevel: x, startTime: L, expirationTime: hl, sortIndex: -1 }),
              L > dl
                ? ((x.sortIndex = L), A(T, x), E(D) === null && x === E(T) && (ul ? (El(k), (k = -1)) : (ul = !0), jt(wl, L - dl)))
                : ((x.sortIndex = hl), A(D, x), J || R || ((J = !0), Gl || ((Gl = !0), Wl()))),
              x
            );
          }),
          (z.unstable_shouldYield = Ke),
          (z.unstable_wrapCallback = function (x) {
            var _ = nl;
            return function () {
              var L = nl;
              nl = _;
              try {
                return x.apply(this, arguments);
              } finally {
                nl = L;
              }
            };
          }));
      })(zf)),
    zf
  );
}
var Ro;
function Nh() {
  return (Ro || ((Ro = 1), (Nf.exports = Sh())), Nf.exports);
}
var jf = { exports: {} },
  Jl = {};
var qo;
function zh() {
  if (qo) return Jl;
  qo = 1;
  var z = _f();
  function A(D) {
    var T = "https://react.dev/errors/" + D;
    if (1 < arguments.length) {
      T += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var X = 2; X < arguments.length; X++) T += "&args[]=" + encodeURIComponent(arguments[X]);
    }
    return (
      "Minified React error #" +
      D +
      "; visit " +
      T +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function E() {}
  var m = {
      d: {
        f: E,
        r: function () {
          throw Error(A(522));
        },
        D: E,
        C: E,
        L: E,
        m: E,
        X: E,
        S: E,
        M: E,
      },
      p: 0,
      findDOMNode: null,
    },
    H = Symbol.for("react.portal");
  function O(D, T, X) {
    var q = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: H, key: q == null ? null : "" + q, children: D, containerInfo: T, implementation: X };
  }
  var w = z.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function tl(D, T) {
    if (D === "font") return "";
    if (typeof T == "string") return T === "use-credentials" ? T : "";
  }
  return (
    (Jl.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = m),
    (Jl.createPortal = function (D, T) {
      var X = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!T || (T.nodeType !== 1 && T.nodeType !== 9 && T.nodeType !== 11)) throw Error(A(299));
      return O(D, T, null, X);
    }),
    (Jl.flushSync = function (D) {
      var T = w.T,
        X = m.p;
      try {
        if (((w.T = null), (m.p = 2), D)) return D();
      } finally {
        ((w.T = T), (m.p = X), m.d.f());
      }
    }),
    (Jl.preconnect = function (D, T) {
      typeof D == "string" &&
        (T ? ((T = T.crossOrigin), (T = typeof T == "string" ? (T === "use-credentials" ? T : "") : void 0)) : (T = null), m.d.C(D, T));
    }),
    (Jl.prefetchDNS = function (D) {
      typeof D == "string" && m.d.D(D);
    }),
    (Jl.preinit = function (D, T) {
      if (typeof D == "string" && T && typeof T.as == "string") {
        var X = T.as,
          q = tl(X, T.crossOrigin),
          nl = typeof T.integrity == "string" ? T.integrity : void 0,
          R = typeof T.fetchPriority == "string" ? T.fetchPriority : void 0;
        X === "style"
          ? m.d.S(D, typeof T.precedence == "string" ? T.precedence : void 0, { crossOrigin: q, integrity: nl, fetchPriority: R })
          : X === "script" && m.d.X(D, { crossOrigin: q, integrity: nl, fetchPriority: R, nonce: typeof T.nonce == "string" ? T.nonce : void 0 });
      }
    }),
    (Jl.preinitModule = function (D, T) {
      if (typeof D == "string")
        if (typeof T == "object" && T !== null) {
          if (T.as == null || T.as === "script") {
            var X = tl(T.as, T.crossOrigin);
            m.d.M(D, {
              crossOrigin: X,
              integrity: typeof T.integrity == "string" ? T.integrity : void 0,
              nonce: typeof T.nonce == "string" ? T.nonce : void 0,
            });
          }
        } else T == null && m.d.M(D);
    }),
    (Jl.preload = function (D, T) {
      if (typeof D == "string" && typeof T == "object" && T !== null && typeof T.as == "string") {
        var X = T.as,
          q = tl(X, T.crossOrigin);
        m.d.L(D, X, {
          crossOrigin: q,
          integrity: typeof T.integrity == "string" ? T.integrity : void 0,
          nonce: typeof T.nonce == "string" ? T.nonce : void 0,
          type: typeof T.type == "string" ? T.type : void 0,
          fetchPriority: typeof T.fetchPriority == "string" ? T.fetchPriority : void 0,
          referrerPolicy: typeof T.referrerPolicy == "string" ? T.referrerPolicy : void 0,
          imageSrcSet: typeof T.imageSrcSet == "string" ? T.imageSrcSet : void 0,
          imageSizes: typeof T.imageSizes == "string" ? T.imageSizes : void 0,
          media: typeof T.media == "string" ? T.media : void 0,
        });
      }
    }),
    (Jl.preloadModule = function (D, T) {
      if (typeof D == "string")
        if (T) {
          var X = tl(T.as, T.crossOrigin);
          m.d.m(D, {
            as: typeof T.as == "string" && T.as !== "script" ? T.as : void 0,
            crossOrigin: X,
            integrity: typeof T.integrity == "string" ? T.integrity : void 0,
          });
        } else m.d.m(D);
    }),
    (Jl.requestFormReset = function (D) {
      m.d.r(D);
    }),
    (Jl.unstable_batchedUpdates = function (D, T) {
      return D(T);
    }),
    (Jl.useFormState = function (D, T, X) {
      return w.H.useFormState(D, T, X);
    }),
    (Jl.useFormStatus = function () {
      return w.H.useHostTransitionStatus();
    }),
    (Jl.version = "19.2.4"),
    Jl
  );
}
var Yo;
function jh() {
  if (Yo) return jf.exports;
  Yo = 1;
  function z() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(z);
      } catch (A) {
        console.error(A);
      }
  }
  return (z(), (jf.exports = zh()), jf.exports);
}
var Go;
function Th() {
  if (Go) return An;
  Go = 1;
  var z = Nh(),
    A = _f(),
    E = jh();
  function m(l) {
    var t = "https://react.dev/errors/" + l;
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var e = 2; e < arguments.length; e++) t += "&args[]=" + encodeURIComponent(arguments[e]);
    }
    return (
      "Minified React error #" +
      l +
      "; visit " +
      t +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function H(l) {
    return !(!l || (l.nodeType !== 1 && l.nodeType !== 9 && l.nodeType !== 11));
  }
  function O(l) {
    var t = l,
      e = l;
    if (l.alternate) for (; t.return; ) t = t.return;
    else {
      l = t;
      do ((t = l), (t.flags & 4098) !== 0 && (e = t.return), (l = t.return));
      while (l);
    }
    return t.tag === 3 ? e : null;
  }
  function w(l) {
    if (l.tag === 13) {
      var t = l.memoizedState;
      if ((t === null && ((l = l.alternate), l !== null && (t = l.memoizedState)), t !== null)) return t.dehydrated;
    }
    return null;
  }
  function tl(l) {
    if (l.tag === 31) {
      var t = l.memoizedState;
      if ((t === null && ((l = l.alternate), l !== null && (t = l.memoizedState)), t !== null)) return t.dehydrated;
    }
    return null;
  }
  function D(l) {
    if (O(l) !== l) throw Error(m(188));
  }
  function T(l) {
    var t = l.alternate;
    if (!t) {
      if (((t = O(l)), t === null)) throw Error(m(188));
      return t !== l ? null : l;
    }
    for (var e = l, a = t; ; ) {
      var n = e.return;
      if (n === null) break;
      var u = n.alternate;
      if (u === null) {
        if (((a = n.return), a !== null)) {
          e = a;
          continue;
        }
        break;
      }
      if (n.child === u.child) {
        for (u = n.child; u; ) {
          if (u === e) return (D(n), l);
          if (u === a) return (D(n), t);
          u = u.sibling;
        }
        throw Error(m(188));
      }
      if (e.return !== a.return) ((e = n), (a = u));
      else {
        for (var i = !1, f = n.child; f; ) {
          if (f === e) {
            ((i = !0), (e = n), (a = u));
            break;
          }
          if (f === a) {
            ((i = !0), (a = n), (e = u));
            break;
          }
          f = f.sibling;
        }
        if (!i) {
          for (f = u.child; f; ) {
            if (f === e) {
              ((i = !0), (e = u), (a = n));
              break;
            }
            if (f === a) {
              ((i = !0), (a = u), (e = n));
              break;
            }
            f = f.sibling;
          }
          if (!i) throw Error(m(189));
        }
      }
      if (e.alternate !== a) throw Error(m(190));
    }
    if (e.tag !== 3) throw Error(m(188));
    return e.stateNode.current === e ? l : t;
  }
  function X(l) {
    var t = l.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return l;
    for (l = l.child; l !== null; ) {
      if (((t = X(l)), t !== null)) return t;
      l = l.sibling;
    }
    return null;
  }
  var q = Object.assign,
    nl = Symbol.for("react.element"),
    R = Symbol.for("react.transitional.element"),
    J = Symbol.for("react.portal"),
    ul = Symbol.for("react.fragment"),
    bl = Symbol.for("react.strict_mode"),
    Nl = Symbol.for("react.profiler"),
    El = Symbol.for("react.consumer"),
    xl = Symbol.for("react.context"),
    zl = Symbol.for("react.forward_ref"),
    wl = Symbol.for("react.suspense"),
    Gl = Symbol.for("react.suspense_list"),
    k = Symbol.for("react.memo"),
    Dl = Symbol.for("react.lazy"),
    Kl = Symbol.for("react.activity"),
    Ke = Symbol.for("react.memo_cache_sentinel"),
    _t = Symbol.iterator;
  function Wl(l) {
    return l === null || typeof l != "object" ? null : ((l = (_t && l[_t]) || l["@@iterator"]), typeof l == "function" ? l : null);
  }
  var Te = Symbol.for("react.client.reference");
  function Ut(l) {
    if (l == null) return null;
    if (typeof l == "function") return l.$$typeof === Te ? null : l.displayName || l.name || null;
    if (typeof l == "string") return l;
    switch (l) {
      case ul:
        return "Fragment";
      case Nl:
        return "Profiler";
      case bl:
        return "StrictMode";
      case wl:
        return "Suspense";
      case Gl:
        return "SuspenseList";
      case Kl:
        return "Activity";
    }
    if (typeof l == "object")
      switch (l.$$typeof) {
        case J:
          return "Portal";
        case xl:
          return l.displayName || "Context";
        case El:
          return (l._context.displayName || "Context") + ".Consumer";
        case zl:
          var t = l.render;
          return ((l = l.displayName), l || ((l = t.displayName || t.name || ""), (l = l !== "" ? "ForwardRef(" + l + ")" : "ForwardRef")), l);
        case k:
          return ((t = l.displayName || null), t !== null ? t : Ut(l.type) || "Memo");
        case Dl:
          ((t = l._payload), (l = l._init));
          try {
            return Ut(l(t));
          } catch {}
      }
    return null;
  }
  var jt = Array.isArray,
    x = A.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    _ = E.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    L = { pending: !1, data: null, method: null, action: null },
    dl = [],
    hl = -1;
  function r(l) {
    return { current: l };
  }
  function j(l) {
    0 > hl || ((l.current = dl[hl]), (dl[hl] = null), hl--);
  }
  function M(l, t) {
    (hl++, (dl[hl] = l.current), (l.current = t));
  }
  var C = r(null),
    Z = r(null),
    $ = r(null),
    cl = r(null);
  function kl(l, t) {
    switch ((M($, t), M(Z, l), M(C, null), t.nodeType)) {
      case 9:
      case 11:
        l = (l = t.documentElement) && (l = l.namespaceURI) ? Pr(l) : 0;
        break;
      default:
        if (((l = t.tagName), (t = t.namespaceURI))) ((t = Pr(t)), (l = lo(t, l)));
        else
          switch (l) {
            case "svg":
              l = 1;
              break;
            case "math":
              l = 2;
              break;
            default:
              l = 0;
          }
    }
    (j(C), M(C, l));
  }
  function _l() {
    (j(C), j(Z), j($));
  }
  function Da(l) {
    l.memoizedState !== null && M(cl, l);
    var t = C.current,
      e = lo(t, l.type);
    t !== e && (M(Z, l), M(C, e));
  }
  function On(l) {
    (Z.current === l && (j(C), j(Z)), cl.current === l && (j(cl), (Sn._currentValue = L)));
  }
  var li, Mf;
  function Ae(l) {
    if (li === void 0)
      try {
        throw Error();
      } catch (e) {
        var t = e.stack.trim().match(/\n( *(at )?)/);
        ((li = (t && t[1]) || ""),
          (Mf =
            -1 <
            e.stack.indexOf(`
    at`)
              ? " (<anonymous>)"
              : -1 < e.stack.indexOf("@")
                ? "@unknown:0:0"
                : ""));
      }
    return (
      `
` +
      li +
      l +
      Mf
    );
  }
  var ti = !1;
  function ei(l, t) {
    if (!l || ti) return "";
    ti = !0;
    var e = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var a = {
        DetermineComponentFrameRoot: function () {
          try {
            if (t) {
              var N = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(N.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == "object" && Reflect.construct)
              ) {
                try {
                  Reflect.construct(N, []);
                } catch (p) {
                  var v = p;
                }
                Reflect.construct(l, [], N);
              } else {
                try {
                  N.call();
                } catch (p) {
                  v = p;
                }
                l.call(N.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (p) {
                v = p;
              }
              (N = l()) && typeof N.catch == "function" && N.catch(function () {});
            }
          } catch (p) {
            if (p && v && typeof p.stack == "string") return [p.stack, v.stack];
          }
          return [null, null];
        },
      };
      a.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var n = Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot, "name");
      n && n.configurable && Object.defineProperty(a.DetermineComponentFrameRoot, "name", { value: "DetermineComponentFrameRoot" });
      var u = a.DetermineComponentFrameRoot(),
        i = u[0],
        f = u[1];
      if (i && f) {
        var s = i.split(`
`),
          g = f.split(`
`);
        for (n = a = 0; a < s.length && !s[a].includes("DetermineComponentFrameRoot"); ) a++;
        for (; n < g.length && !g[n].includes("DetermineComponentFrameRoot"); ) n++;
        if (a === s.length || n === g.length) for (a = s.length - 1, n = g.length - 1; 1 <= a && 0 <= n && s[a] !== g[n]; ) n--;
        for (; 1 <= a && 0 <= n; a--, n--)
          if (s[a] !== g[n]) {
            if (a !== 1 || n !== 1)
              do
                if ((a--, n--, 0 > n || s[a] !== g[n])) {
                  var b =
                    `
` + s[a].replace(" at new ", " at ");
                  return (l.displayName && b.includes("<anonymous>") && (b = b.replace("<anonymous>", l.displayName)), b);
                }
              while (1 <= a && 0 <= n);
            break;
          }
      }
    } finally {
      ((ti = !1), (Error.prepareStackTrace = e));
    }
    return (e = l ? l.displayName || l.name : "") ? Ae(e) : "";
  }
  function ko(l, t) {
    switch (l.tag) {
      case 26:
      case 27:
      case 5:
        return Ae(l.type);
      case 16:
        return Ae("Lazy");
      case 13:
        return l.child !== t && t !== null ? Ae("Suspense Fallback") : Ae("Suspense");
      case 19:
        return Ae("SuspenseList");
      case 0:
      case 15:
        return ei(l.type, !1);
      case 11:
        return ei(l.type.render, !1);
      case 1:
        return ei(l.type, !0);
      case 31:
        return Ae("Activity");
      default:
        return "";
    }
  }
  function Of(l) {
    try {
      var t = "",
        e = null;
      do ((t += ko(l, e)), (e = l), (l = l.return));
      while (l);
      return t;
    } catch (a) {
      return (
        `
Error generating stack: ` +
        a.message +
        `
` +
        a.stack
      );
    }
  }
  var ai = Object.prototype.hasOwnProperty,
    ni = z.unstable_scheduleCallback,
    ui = z.unstable_cancelCallback,
    $o = z.unstable_shouldYield,
    Wo = z.unstable_requestPaint,
    nt = z.unstable_now,
    Fo = z.unstable_getCurrentPriorityLevel,
    Df = z.unstable_ImmediatePriority,
    Bf = z.unstable_UserBlockingPriority,
    Dn = z.unstable_NormalPriority,
    Io = z.unstable_LowPriority,
    Cf = z.unstable_IdlePriority,
    Po = z.log,
    l0 = z.unstable_setDisableYieldValue,
    Ba = null,
    ut = null;
  function le(l) {
    if ((typeof Po == "function" && l0(l), ut && typeof ut.setStrictMode == "function"))
      try {
        ut.setStrictMode(Ba, l);
      } catch {}
  }
  var it = Math.clz32 ? Math.clz32 : a0,
    t0 = Math.log,
    e0 = Math.LN2;
  function a0(l) {
    return ((l >>>= 0), l === 0 ? 32 : (31 - ((t0(l) / e0) | 0)) | 0);
  }
  var Bn = 256,
    Cn = 262144,
    Un = 4194304;
  function Ee(l) {
    var t = l & 42;
    if (t !== 0) return t;
    switch (l & -l) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
        return l & 261888;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return l & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return l & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return l;
    }
  }
  function Hn(l, t, e) {
    var a = l.pendingLanes;
    if (a === 0) return 0;
    var n = 0,
      u = l.suspendedLanes,
      i = l.pingedLanes;
    l = l.warmLanes;
    var f = a & 134217727;
    return (
      f !== 0
        ? ((a = f & ~u), a !== 0 ? (n = Ee(a)) : ((i &= f), i !== 0 ? (n = Ee(i)) : e || ((e = f & ~l), e !== 0 && (n = Ee(e)))))
        : ((f = a & ~u), f !== 0 ? (n = Ee(f)) : i !== 0 ? (n = Ee(i)) : e || ((e = a & ~l), e !== 0 && (n = Ee(e)))),
      n === 0 ? 0 : t !== 0 && t !== n && (t & u) === 0 && ((u = n & -n), (e = t & -t), u >= e || (u === 32 && (e & 4194048) !== 0)) ? t : n
    );
  }
  function Ca(l, t) {
    return (l.pendingLanes & ~(l.suspendedLanes & ~l.pingedLanes) & t) === 0;
  }
  function n0(l, t) {
    switch (l) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return t + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Uf() {
    var l = Un;
    return ((Un <<= 1), (Un & 62914560) === 0 && (Un = 4194304), l);
  }
  function ii(l) {
    for (var t = [], e = 0; 31 > e; e++) t.push(l);
    return t;
  }
  function Ua(l, t) {
    ((l.pendingLanes |= t), t !== 268435456 && ((l.suspendedLanes = 0), (l.pingedLanes = 0), (l.warmLanes = 0)));
  }
  function u0(l, t, e, a, n, u) {
    var i = l.pendingLanes;
    ((l.pendingLanes = e),
      (l.suspendedLanes = 0),
      (l.pingedLanes = 0),
      (l.warmLanes = 0),
      (l.expiredLanes &= e),
      (l.entangledLanes &= e),
      (l.errorRecoveryDisabledLanes &= e),
      (l.shellSuspendCounter = 0));
    var f = l.entanglements,
      s = l.expirationTimes,
      g = l.hiddenUpdates;
    for (e = i & ~e; 0 < e; ) {
      var b = 31 - it(e),
        N = 1 << b;
      ((f[b] = 0), (s[b] = -1));
      var v = g[b];
      if (v !== null)
        for (g[b] = null, b = 0; b < v.length; b++) {
          var p = v[b];
          p !== null && (p.lane &= -536870913);
        }
      e &= ~N;
    }
    (a !== 0 && Hf(l, a, 0), u !== 0 && n === 0 && l.tag !== 0 && (l.suspendedLanes |= u & ~(i & ~t)));
  }
  function Hf(l, t, e) {
    ((l.pendingLanes |= t), (l.suspendedLanes &= ~t));
    var a = 31 - it(t);
    ((l.entangledLanes |= t), (l.entanglements[a] = l.entanglements[a] | 1073741824 | (e & 261930)));
  }
  function Rf(l, t) {
    var e = (l.entangledLanes |= t);
    for (l = l.entanglements; e; ) {
      var a = 31 - it(e),
        n = 1 << a;
      ((n & t) | (l[a] & t) && (l[a] |= t), (e &= ~n));
    }
  }
  function qf(l, t) {
    var e = t & -t;
    return ((e = (e & 42) !== 0 ? 1 : ci(e)), (e & (l.suspendedLanes | t)) !== 0 ? 0 : e);
  }
  function ci(l) {
    switch (l) {
      case 2:
        l = 1;
        break;
      case 8:
        l = 4;
        break;
      case 32:
        l = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        l = 128;
        break;
      case 268435456:
        l = 134217728;
        break;
      default:
        l = 0;
    }
    return l;
  }
  function fi(l) {
    return ((l &= -l), 2 < l ? (8 < l ? ((l & 134217727) !== 0 ? 32 : 268435456) : 8) : 2);
  }
  function Yf() {
    var l = _.p;
    return l !== 0 ? l : ((l = window.event), l === void 0 ? 32 : jo(l.type));
  }
  function Gf(l, t) {
    var e = _.p;
    try {
      return ((_.p = l), t());
    } finally {
      _.p = e;
    }
  }
  var te = Math.random().toString(36).slice(2),
    Ll = "__reactFiber$" + te,
    Fl = "__reactProps$" + te,
    Je = "__reactContainer$" + te,
    si = "__reactEvents$" + te,
    i0 = "__reactListeners$" + te,
    c0 = "__reactHandles$" + te,
    Lf = "__reactResources$" + te,
    Ha = "__reactMarker$" + te;
  function di(l) {
    (delete l[Ll], delete l[Fl], delete l[si], delete l[i0], delete l[c0]);
  }
  function ke(l) {
    var t = l[Ll];
    if (t) return t;
    for (var e = l.parentNode; e; ) {
      if ((t = e[Je] || e[Ll])) {
        if (((e = t.alternate), t.child !== null || (e !== null && e.child !== null)))
          for (l = co(l); l !== null; ) {
            if ((e = l[Ll])) return e;
            l = co(l);
          }
        return t;
      }
      ((l = e), (e = l.parentNode));
    }
    return null;
  }
  function $e(l) {
    if ((l = l[Ll] || l[Je])) {
      var t = l.tag;
      if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3) return l;
    }
    return null;
  }
  function Ra(l) {
    var t = l.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return l.stateNode;
    throw Error(m(33));
  }
  function We(l) {
    var t = l[Lf];
    return (t || (t = l[Lf] = { hoistableStyles: new Map(), hoistableScripts: new Map() }), t);
  }
  function ql(l) {
    l[Ha] = !0;
  }
  var Xf = new Set(),
    Qf = {};
  function _e(l, t) {
    (Fe(l, t), Fe(l + "Capture", t));
  }
  function Fe(l, t) {
    for (Qf[l] = t, l = 0; l < t.length; l++) Xf.add(t[l]);
  }
  var f0 = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ),
    Zf = {},
    Vf = {};
  function s0(l) {
    return ai.call(Vf, l) ? !0 : ai.call(Zf, l) ? !1 : f0.test(l) ? (Vf[l] = !0) : ((Zf[l] = !0), !1);
  }
  function Rn(l, t, e) {
    if (s0(t))
      if (e === null) l.removeAttribute(t);
      else {
        switch (typeof e) {
          case "undefined":
          case "function":
          case "symbol":
            l.removeAttribute(t);
            return;
          case "boolean":
            var a = t.toLowerCase().slice(0, 5);
            if (a !== "data-" && a !== "aria-") {
              l.removeAttribute(t);
              return;
            }
        }
        l.setAttribute(t, "" + e);
      }
  }
  function qn(l, t, e) {
    if (e === null) l.removeAttribute(t);
    else {
      switch (typeof e) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(t);
          return;
      }
      l.setAttribute(t, "" + e);
    }
  }
  function Ht(l, t, e, a) {
    if (a === null) l.removeAttribute(e);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(e);
          return;
      }
      l.setAttributeNS(t, e, "" + a);
    }
  }
  function ht(l) {
    switch (typeof l) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return l;
      case "object":
        return l;
      default:
        return "";
    }
  }
  function wf(l) {
    var t = l.type;
    return (l = l.nodeName) && l.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function d0(l, t, e) {
    var a = Object.getOwnPropertyDescriptor(l.constructor.prototype, t);
    if (!l.hasOwnProperty(t) && typeof a < "u" && typeof a.get == "function" && typeof a.set == "function") {
      var n = a.get,
        u = a.set;
      return (
        Object.defineProperty(l, t, {
          configurable: !0,
          get: function () {
            return n.call(this);
          },
          set: function (i) {
            ((e = "" + i), u.call(this, i));
          },
        }),
        Object.defineProperty(l, t, { enumerable: a.enumerable }),
        {
          getValue: function () {
            return e;
          },
          setValue: function (i) {
            e = "" + i;
          },
          stopTracking: function () {
            ((l._valueTracker = null), delete l[t]);
          },
        }
      );
    }
  }
  function ri(l) {
    if (!l._valueTracker) {
      var t = wf(l) ? "checked" : "value";
      l._valueTracker = d0(l, t, "" + l[t]);
    }
  }
  function Kf(l) {
    if (!l) return !1;
    var t = l._valueTracker;
    if (!t) return !0;
    var e = t.getValue(),
      a = "";
    return (l && (a = wf(l) ? (l.checked ? "true" : "false") : l.value), (l = a), l !== e ? (t.setValue(l), !0) : !1);
  }
  function Yn(l) {
    if (((l = l || (typeof document < "u" ? document : void 0)), typeof l > "u")) return null;
    try {
      return l.activeElement || l.body;
    } catch {
      return l.body;
    }
  }
  var r0 = /[\n"\\]/g;
  function yt(l) {
    return l.replace(r0, function (t) {
      return "\\" + t.charCodeAt(0).toString(16) + " ";
    });
  }
  function oi(l, t, e, a, n, u, i, f) {
    ((l.name = ""),
      i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" ? (l.type = i) : l.removeAttribute("type"),
      t != null
        ? i === "number"
          ? ((t === 0 && l.value === "") || l.value != t) && (l.value = "" + ht(t))
          : l.value !== "" + ht(t) && (l.value = "" + ht(t))
        : (i !== "submit" && i !== "reset") || l.removeAttribute("value"),
      t != null ? mi(l, i, ht(t)) : e != null ? mi(l, i, ht(e)) : a != null && l.removeAttribute("value"),
      n == null && u != null && (l.defaultChecked = !!u),
      n != null && (l.checked = n && typeof n != "function" && typeof n != "symbol"),
      f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" ? (l.name = "" + ht(f)) : l.removeAttribute("name"));
  }
  function Jf(l, t, e, a, n, u, i, f) {
    if ((u != null && typeof u != "function" && typeof u != "symbol" && typeof u != "boolean" && (l.type = u), t != null || e != null)) {
      if (!((u !== "submit" && u !== "reset") || t != null)) {
        ri(l);
        return;
      }
      ((e = e != null ? "" + ht(e) : ""), (t = t != null ? "" + ht(t) : e), f || t === l.value || (l.value = t), (l.defaultValue = t));
    }
    ((a = a ?? n),
      (a = typeof a != "function" && typeof a != "symbol" && !!a),
      (l.checked = f ? l.checked : !!a),
      (l.defaultChecked = !!a),
      i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" && (l.name = i),
      ri(l));
  }
  function mi(l, t, e) {
    (t === "number" && Yn(l.ownerDocument) === l) || l.defaultValue === "" + e || (l.defaultValue = "" + e);
  }
  function Ie(l, t, e, a) {
    if (((l = l.options), t)) {
      t = {};
      for (var n = 0; n < e.length; n++) t["$" + e[n]] = !0;
      for (e = 0; e < l.length; e++)
        ((n = t.hasOwnProperty("$" + l[e].value)), l[e].selected !== n && (l[e].selected = n), n && a && (l[e].defaultSelected = !0));
    } else {
      for (e = "" + ht(e), t = null, n = 0; n < l.length; n++) {
        if (l[n].value === e) {
          ((l[n].selected = !0), a && (l[n].defaultSelected = !0));
          return;
        }
        t !== null || l[n].disabled || (t = l[n]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function kf(l, t, e) {
    if (t != null && ((t = "" + ht(t)), t !== l.value && (l.value = t), e == null)) {
      l.defaultValue !== t && (l.defaultValue = t);
      return;
    }
    l.defaultValue = e != null ? "" + ht(e) : "";
  }
  function $f(l, t, e, a) {
    if (t == null) {
      if (a != null) {
        if (e != null) throw Error(m(92));
        if (jt(a)) {
          if (1 < a.length) throw Error(m(93));
          a = a[0];
        }
        e = a;
      }
      (e == null && (e = ""), (t = e));
    }
    ((e = ht(t)), (l.defaultValue = e), (a = l.textContent), a === e && a !== "" && a !== null && (l.value = a), ri(l));
  }
  function Pe(l, t) {
    if (t) {
      var e = l.firstChild;
      if (e && e === l.lastChild && e.nodeType === 3) {
        e.nodeValue = t;
        return;
      }
    }
    l.textContent = t;
  }
  var o0 = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function Wf(l, t, e) {
    var a = t.indexOf("--") === 0;
    e == null || typeof e == "boolean" || e === ""
      ? a
        ? l.setProperty(t, "")
        : t === "float"
          ? (l.cssFloat = "")
          : (l[t] = "")
      : a
        ? l.setProperty(t, e)
        : typeof e != "number" || e === 0 || o0.has(t)
          ? t === "float"
            ? (l.cssFloat = e)
            : (l[t] = ("" + e).trim())
          : (l[t] = e + "px");
  }
  function Ff(l, t, e) {
    if (t != null && typeof t != "object") throw Error(m(62));
    if (((l = l.style), e != null)) {
      for (var a in e)
        !e.hasOwnProperty(a) ||
          (t != null && t.hasOwnProperty(a)) ||
          (a.indexOf("--") === 0 ? l.setProperty(a, "") : a === "float" ? (l.cssFloat = "") : (l[a] = ""));
      for (var n in t) ((a = t[n]), t.hasOwnProperty(n) && e[n] !== a && Wf(l, n, a));
    } else for (var u in t) t.hasOwnProperty(u) && Wf(l, u, t[u]);
  }
  function hi(l) {
    if (l.indexOf("-") === -1) return !1;
    switch (l) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var m0 = new Map([
      ["acceptCharset", "accept-charset"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
      ["crossOrigin", "crossorigin"],
      ["accentHeight", "accent-height"],
      ["alignmentBaseline", "alignment-baseline"],
      ["arabicForm", "arabic-form"],
      ["baselineShift", "baseline-shift"],
      ["capHeight", "cap-height"],
      ["clipPath", "clip-path"],
      ["clipRule", "clip-rule"],
      ["colorInterpolation", "color-interpolation"],
      ["colorInterpolationFilters", "color-interpolation-filters"],
      ["colorProfile", "color-profile"],
      ["colorRendering", "color-rendering"],
      ["dominantBaseline", "dominant-baseline"],
      ["enableBackground", "enable-background"],
      ["fillOpacity", "fill-opacity"],
      ["fillRule", "fill-rule"],
      ["floodColor", "flood-color"],
      ["floodOpacity", "flood-opacity"],
      ["fontFamily", "font-family"],
      ["fontSize", "font-size"],
      ["fontSizeAdjust", "font-size-adjust"],
      ["fontStretch", "font-stretch"],
      ["fontStyle", "font-style"],
      ["fontVariant", "font-variant"],
      ["fontWeight", "font-weight"],
      ["glyphName", "glyph-name"],
      ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
      ["glyphOrientationVertical", "glyph-orientation-vertical"],
      ["horizAdvX", "horiz-adv-x"],
      ["horizOriginX", "horiz-origin-x"],
      ["imageRendering", "image-rendering"],
      ["letterSpacing", "letter-spacing"],
      ["lightingColor", "lighting-color"],
      ["markerEnd", "marker-end"],
      ["markerMid", "marker-mid"],
      ["markerStart", "marker-start"],
      ["overlinePosition", "overline-position"],
      ["overlineThickness", "overline-thickness"],
      ["paintOrder", "paint-order"],
      ["panose-1", "panose-1"],
      ["pointerEvents", "pointer-events"],
      ["renderingIntent", "rendering-intent"],
      ["shapeRendering", "shape-rendering"],
      ["stopColor", "stop-color"],
      ["stopOpacity", "stop-opacity"],
      ["strikethroughPosition", "strikethrough-position"],
      ["strikethroughThickness", "strikethrough-thickness"],
      ["strokeDasharray", "stroke-dasharray"],
      ["strokeDashoffset", "stroke-dashoffset"],
      ["strokeLinecap", "stroke-linecap"],
      ["strokeLinejoin", "stroke-linejoin"],
      ["strokeMiterlimit", "stroke-miterlimit"],
      ["strokeOpacity", "stroke-opacity"],
      ["strokeWidth", "stroke-width"],
      ["textAnchor", "text-anchor"],
      ["textDecoration", "text-decoration"],
      ["textRendering", "text-rendering"],
      ["transformOrigin", "transform-origin"],
      ["underlinePosition", "underline-position"],
      ["underlineThickness", "underline-thickness"],
      ["unicodeBidi", "unicode-bidi"],
      ["unicodeRange", "unicode-range"],
      ["unitsPerEm", "units-per-em"],
      ["vAlphabetic", "v-alphabetic"],
      ["vHanging", "v-hanging"],
      ["vIdeographic", "v-ideographic"],
      ["vMathematical", "v-mathematical"],
      ["vectorEffect", "vector-effect"],
      ["vertAdvY", "vert-adv-y"],
      ["vertOriginX", "vert-origin-x"],
      ["vertOriginY", "vert-origin-y"],
      ["wordSpacing", "word-spacing"],
      ["writingMode", "writing-mode"],
      ["xmlnsXlink", "xmlns:xlink"],
      ["xHeight", "x-height"],
    ]),
    h0 = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Gn(l) {
    return h0.test("" + l) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : l;
  }
  function Rt() {}
  var yi = null;
  function gi(l) {
    return (
      (l = l.target || l.srcElement || window),
      l.correspondingUseElement && (l = l.correspondingUseElement),
      l.nodeType === 3 ? l.parentNode : l
    );
  }
  var la = null,
    ta = null;
  function If(l) {
    var t = $e(l);
    if (t && (l = t.stateNode)) {
      var e = l[Fl] || null;
      l: switch (((l = t.stateNode), t.type)) {
        case "input":
          if (
            (oi(l, e.value, e.defaultValue, e.defaultValue, e.checked, e.defaultChecked, e.type, e.name),
            (t = e.name),
            e.type === "radio" && t != null)
          ) {
            for (e = l; e.parentNode; ) e = e.parentNode;
            for (e = e.querySelectorAll('input[name="' + yt("" + t) + '"][type="radio"]'), t = 0; t < e.length; t++) {
              var a = e[t];
              if (a !== l && a.form === l.form) {
                var n = a[Fl] || null;
                if (!n) throw Error(m(90));
                oi(a, n.value, n.defaultValue, n.defaultValue, n.checked, n.defaultChecked, n.type, n.name);
              }
            }
            for (t = 0; t < e.length; t++) ((a = e[t]), a.form === l.form && Kf(a));
          }
          break l;
        case "textarea":
          kf(l, e.value, e.defaultValue);
          break l;
        case "select":
          ((t = e.value), t != null && Ie(l, !!e.multiple, t, !1));
      }
    }
  }
  var vi = !1;
  function Pf(l, t, e) {
    if (vi) return l(t, e);
    vi = !0;
    try {
      var a = l(t);
      return a;
    } finally {
      if (((vi = !1), (la !== null || ta !== null) && (Au(), la && ((t = la), (l = ta), (ta = la = null), If(t), l))))
        for (t = 0; t < l.length; t++) If(l[t]);
    }
  }
  function qa(l, t) {
    var e = l.stateNode;
    if (e === null) return null;
    var a = e[Fl] || null;
    if (a === null) return null;
    e = a[t];
    l: switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        ((a = !a.disabled) || ((l = l.type), (a = !(l === "button" || l === "input" || l === "select" || l === "textarea"))), (l = !a));
        break l;
      default:
        l = !1;
    }
    if (l) return null;
    if (e && typeof e != "function") throw Error(m(231, t, typeof e));
    return e;
  }
  var qt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"),
    pi = !1;
  if (qt)
    try {
      var Ya = {};
      (Object.defineProperty(Ya, "passive", {
        get: function () {
          pi = !0;
        },
      }),
        window.addEventListener("test", Ya, Ya),
        window.removeEventListener("test", Ya, Ya));
    } catch {
      pi = !1;
    }
  var ee = null,
    bi = null,
    Ln = null;
  function ls() {
    if (Ln) return Ln;
    var l,
      t = bi,
      e = t.length,
      a,
      n = "value" in ee ? ee.value : ee.textContent,
      u = n.length;
    for (l = 0; l < e && t[l] === n[l]; l++);
    var i = e - l;
    for (a = 1; a <= i && t[e - a] === n[u - a]; a++);
    return (Ln = n.slice(l, 1 < a ? 1 - a : void 0));
  }
  function Xn(l) {
    var t = l.keyCode;
    return ("charCode" in l ? ((l = l.charCode), l === 0 && t === 13 && (l = 13)) : (l = t), l === 10 && (l = 13), 32 <= l || l === 13 ? l : 0);
  }
  function Qn() {
    return !0;
  }
  function ts() {
    return !1;
  }
  function Il(l) {
    function t(e, a, n, u, i) {
      ((this._reactName = e), (this._targetInst = n), (this.type = a), (this.nativeEvent = u), (this.target = i), (this.currentTarget = null));
      for (var f in l) l.hasOwnProperty(f) && ((e = l[f]), (this[f] = e ? e(u) : u[f]));
      return (
        (this.isDefaultPrevented = (u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1) ? Qn : ts),
        (this.isPropagationStopped = ts),
        this
      );
    }
    return (
      q(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var e = this.nativeEvent;
          e && (e.preventDefault ? e.preventDefault() : typeof e.returnValue != "unknown" && (e.returnValue = !1), (this.isDefaultPrevented = Qn));
        },
        stopPropagation: function () {
          var e = this.nativeEvent;
          e &&
            (e.stopPropagation ? e.stopPropagation() : typeof e.cancelBubble != "unknown" && (e.cancelBubble = !0), (this.isPropagationStopped = Qn));
        },
        persist: function () {},
        isPersistent: Qn,
      }),
      t
    );
  }
  var Me = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (l) {
        return l.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    Zn = Il(Me),
    Ga = q({}, Me, { view: 0, detail: 0 }),
    y0 = Il(Ga),
    xi,
    Si,
    La,
    Vn = q({}, Ga, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: zi,
      button: 0,
      buttons: 0,
      relatedTarget: function (l) {
        return l.relatedTarget === void 0 ? (l.fromElement === l.srcElement ? l.toElement : l.fromElement) : l.relatedTarget;
      },
      movementX: function (l) {
        return "movementX" in l
          ? l.movementX
          : (l !== La && (La && l.type === "mousemove" ? ((xi = l.screenX - La.screenX), (Si = l.screenY - La.screenY)) : (Si = xi = 0), (La = l)),
            xi);
      },
      movementY: function (l) {
        return "movementY" in l ? l.movementY : Si;
      },
    }),
    es = Il(Vn),
    g0 = q({}, Vn, { dataTransfer: 0 }),
    v0 = Il(g0),
    p0 = q({}, Ga, { relatedTarget: 0 }),
    Ni = Il(p0),
    b0 = q({}, Me, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    x0 = Il(b0),
    S0 = q({}, Me, {
      clipboardData: function (l) {
        return "clipboardData" in l ? l.clipboardData : window.clipboardData;
      },
    }),
    N0 = Il(S0),
    z0 = q({}, Me, { data: 0 }),
    as = Il(z0),
    j0 = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified",
    },
    T0 = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
    },
    A0 = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function E0(l) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(l) : (l = A0[l]) ? !!t[l] : !1;
  }
  function zi() {
    return E0;
  }
  var _0 = q({}, Ga, {
      key: function (l) {
        if (l.key) {
          var t = j0[l.key] || l.key;
          if (t !== "Unidentified") return t;
        }
        return l.type === "keypress"
          ? ((l = Xn(l)), l === 13 ? "Enter" : String.fromCharCode(l))
          : l.type === "keydown" || l.type === "keyup"
            ? T0[l.keyCode] || "Unidentified"
            : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: zi,
      charCode: function (l) {
        return l.type === "keypress" ? Xn(l) : 0;
      },
      keyCode: function (l) {
        return l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
      },
      which: function (l) {
        return l.type === "keypress" ? Xn(l) : l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
      },
    }),
    M0 = Il(_0),
    O0 = q({}, Vn, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    ns = Il(O0),
    D0 = q({}, Ga, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: zi }),
    B0 = Il(D0),
    C0 = q({}, Me, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    U0 = Il(C0),
    H0 = q({}, Vn, {
      deltaX: function (l) {
        return "deltaX" in l ? l.deltaX : "wheelDeltaX" in l ? -l.wheelDeltaX : 0;
      },
      deltaY: function (l) {
        return "deltaY" in l ? l.deltaY : "wheelDeltaY" in l ? -l.wheelDeltaY : "wheelDelta" in l ? -l.wheelDelta : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    R0 = Il(H0),
    q0 = q({}, Me, { newState: 0, oldState: 0 }),
    Y0 = Il(q0),
    G0 = [9, 13, 27, 32],
    ji = qt && "CompositionEvent" in window,
    Xa = null;
  qt && "documentMode" in document && (Xa = document.documentMode);
  var L0 = qt && "TextEvent" in window && !Xa,
    us = qt && (!ji || (Xa && 8 < Xa && 11 >= Xa)),
    is = " ",
    cs = !1;
  function fs(l, t) {
    switch (l) {
      case "keyup":
        return G0.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function ss(l) {
    return ((l = l.detail), typeof l == "object" && "data" in l ? l.data : null);
  }
  var ea = !1;
  function X0(l, t) {
    switch (l) {
      case "compositionend":
        return ss(t);
      case "keypress":
        return t.which !== 32 ? null : ((cs = !0), is);
      case "textInput":
        return ((l = t.data), l === is && cs ? null : l);
      default:
        return null;
    }
  }
  function Q0(l, t) {
    if (ea) return l === "compositionend" || (!ji && fs(l, t)) ? ((l = ls()), (Ln = bi = ee = null), (ea = !1), l) : null;
    switch (l) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return us && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var Z0 = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function ds(l) {
    var t = l && l.nodeName && l.nodeName.toLowerCase();
    return t === "input" ? !!Z0[l.type] : t === "textarea";
  }
  function rs(l, t, e, a) {
    (la ? (ta ? ta.push(a) : (ta = [a])) : (la = a),
      (t = Cu(t, "onChange")),
      0 < t.length && ((e = new Zn("onChange", "change", null, e, a)), l.push({ event: e, listeners: t })));
  }
  var Qa = null,
    Za = null;
  function V0(l) {
    Jr(l, 0);
  }
  function wn(l) {
    var t = Ra(l);
    if (Kf(t)) return l;
  }
  function os(l, t) {
    if (l === "change") return t;
  }
  var ms = !1;
  if (qt) {
    var Ti;
    if (qt) {
      var Ai = "oninput" in document;
      if (!Ai) {
        var hs = document.createElement("div");
        (hs.setAttribute("oninput", "return;"), (Ai = typeof hs.oninput == "function"));
      }
      Ti = Ai;
    } else Ti = !1;
    ms = Ti && (!document.documentMode || 9 < document.documentMode);
  }
  function ys() {
    Qa && (Qa.detachEvent("onpropertychange", gs), (Za = Qa = null));
  }
  function gs(l) {
    if (l.propertyName === "value" && wn(Za)) {
      var t = [];
      (rs(t, Za, l, gi(l)), Pf(V0, t));
    }
  }
  function w0(l, t, e) {
    l === "focusin" ? (ys(), (Qa = t), (Za = e), Qa.attachEvent("onpropertychange", gs)) : l === "focusout" && ys();
  }
  function K0(l) {
    if (l === "selectionchange" || l === "keyup" || l === "keydown") return wn(Za);
  }
  function J0(l, t) {
    if (l === "click") return wn(t);
  }
  function k0(l, t) {
    if (l === "input" || l === "change") return wn(t);
  }
  function $0(l, t) {
    return (l === t && (l !== 0 || 1 / l === 1 / t)) || (l !== l && t !== t);
  }
  var ct = typeof Object.is == "function" ? Object.is : $0;
  function Va(l, t) {
    if (ct(l, t)) return !0;
    if (typeof l != "object" || l === null || typeof t != "object" || t === null) return !1;
    var e = Object.keys(l),
      a = Object.keys(t);
    if (e.length !== a.length) return !1;
    for (a = 0; a < e.length; a++) {
      var n = e[a];
      if (!ai.call(t, n) || !ct(l[n], t[n])) return !1;
    }
    return !0;
  }
  function vs(l) {
    for (; l && l.firstChild; ) l = l.firstChild;
    return l;
  }
  function ps(l, t) {
    var e = vs(l);
    l = 0;
    for (var a; e; ) {
      if (e.nodeType === 3) {
        if (((a = l + e.textContent.length), l <= t && a >= t)) return { node: e, offset: t - l };
        l = a;
      }
      l: {
        for (; e; ) {
          if (e.nextSibling) {
            e = e.nextSibling;
            break l;
          }
          e = e.parentNode;
        }
        e = void 0;
      }
      e = vs(e);
    }
  }
  function bs(l, t) {
    return l && t
      ? l === t
        ? !0
        : l && l.nodeType === 3
          ? !1
          : t && t.nodeType === 3
            ? bs(l, t.parentNode)
            : "contains" in l
              ? l.contains(t)
              : l.compareDocumentPosition
                ? !!(l.compareDocumentPosition(t) & 16)
                : !1
      : !1;
  }
  function xs(l) {
    l = l != null && l.ownerDocument != null && l.ownerDocument.defaultView != null ? l.ownerDocument.defaultView : window;
    for (var t = Yn(l.document); t instanceof l.HTMLIFrameElement; ) {
      try {
        var e = typeof t.contentWindow.location.href == "string";
      } catch {
        e = !1;
      }
      if (e) l = t.contentWindow;
      else break;
      t = Yn(l.document);
    }
    return t;
  }
  function Ei(l) {
    var t = l && l.nodeName && l.nodeName.toLowerCase();
    return (
      t &&
      ((t === "input" && (l.type === "text" || l.type === "search" || l.type === "tel" || l.type === "url" || l.type === "password")) ||
        t === "textarea" ||
        l.contentEditable === "true")
    );
  }
  var W0 = qt && "documentMode" in document && 11 >= document.documentMode,
    aa = null,
    _i = null,
    wa = null,
    Mi = !1;
  function Ss(l, t, e) {
    var a = e.window === e ? e.document : e.nodeType === 9 ? e : e.ownerDocument;
    Mi ||
      aa == null ||
      aa !== Yn(a) ||
      ((a = aa),
      "selectionStart" in a && Ei(a)
        ? (a = { start: a.selectionStart, end: a.selectionEnd })
        : ((a = ((a.ownerDocument && a.ownerDocument.defaultView) || window).getSelection()),
          (a = { anchorNode: a.anchorNode, anchorOffset: a.anchorOffset, focusNode: a.focusNode, focusOffset: a.focusOffset })),
      (wa && Va(wa, a)) ||
        ((wa = a),
        (a = Cu(_i, "onSelect")),
        0 < a.length && ((t = new Zn("onSelect", "select", null, t, e)), l.push({ event: t, listeners: a }), (t.target = aa))));
  }
  function Oe(l, t) {
    var e = {};
    return ((e[l.toLowerCase()] = t.toLowerCase()), (e["Webkit" + l] = "webkit" + t), (e["Moz" + l] = "moz" + t), e);
  }
  var na = {
      animationend: Oe("Animation", "AnimationEnd"),
      animationiteration: Oe("Animation", "AnimationIteration"),
      animationstart: Oe("Animation", "AnimationStart"),
      transitionrun: Oe("Transition", "TransitionRun"),
      transitionstart: Oe("Transition", "TransitionStart"),
      transitioncancel: Oe("Transition", "TransitionCancel"),
      transitionend: Oe("Transition", "TransitionEnd"),
    },
    Oi = {},
    Ns = {};
  qt &&
    ((Ns = document.createElement("div").style),
    "AnimationEvent" in window || (delete na.animationend.animation, delete na.animationiteration.animation, delete na.animationstart.animation),
    "TransitionEvent" in window || delete na.transitionend.transition);
  function De(l) {
    if (Oi[l]) return Oi[l];
    if (!na[l]) return l;
    var t = na[l],
      e;
    for (e in t) if (t.hasOwnProperty(e) && e in Ns) return (Oi[l] = t[e]);
    return l;
  }
  var zs = De("animationend"),
    js = De("animationiteration"),
    Ts = De("animationstart"),
    F0 = De("transitionrun"),
    I0 = De("transitionstart"),
    P0 = De("transitioncancel"),
    As = De("transitionend"),
    Es = new Map(),
    Di =
      "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " "
      );
  Di.push("scrollEnd");
  function Tt(l, t) {
    (Es.set(l, t), _e(t, [l]));
  }
  var Kn =
      typeof reportError == "function"
        ? reportError
        : function (l) {
            if (typeof window == "object" && typeof window.ErrorEvent == "function") {
              var t = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message: typeof l == "object" && l !== null && typeof l.message == "string" ? String(l.message) : String(l),
                error: l,
              });
              if (!window.dispatchEvent(t)) return;
            } else if (typeof process == "object" && typeof process.emit == "function") {
              process.emit("uncaughtException", l);
              return;
            }
            console.error(l);
          },
    gt = [],
    ua = 0,
    Bi = 0;
  function Jn() {
    for (var l = ua, t = (Bi = ua = 0); t < l; ) {
      var e = gt[t];
      gt[t++] = null;
      var a = gt[t];
      gt[t++] = null;
      var n = gt[t];
      gt[t++] = null;
      var u = gt[t];
      if (((gt[t++] = null), a !== null && n !== null)) {
        var i = a.pending;
        (i === null ? (n.next = n) : ((n.next = i.next), (i.next = n)), (a.pending = n));
      }
      u !== 0 && _s(e, n, u);
    }
  }
  function kn(l, t, e, a) {
    ((gt[ua++] = l), (gt[ua++] = t), (gt[ua++] = e), (gt[ua++] = a), (Bi |= a), (l.lanes |= a), (l = l.alternate), l !== null && (l.lanes |= a));
  }
  function Ci(l, t, e, a) {
    return (kn(l, t, e, a), $n(l));
  }
  function Be(l, t) {
    return (kn(l, null, null, t), $n(l));
  }
  function _s(l, t, e) {
    l.lanes |= e;
    var a = l.alternate;
    a !== null && (a.lanes |= e);
    for (var n = !1, u = l.return; u !== null; )
      ((u.childLanes |= e),
        (a = u.alternate),
        a !== null && (a.childLanes |= e),
        u.tag === 22 && ((l = u.stateNode), l === null || l._visibility & 1 || (n = !0)),
        (l = u),
        (u = u.return));
    return l.tag === 3
      ? ((u = l.stateNode),
        n && t !== null && ((n = 31 - it(e)), (l = u.hiddenUpdates), (a = l[n]), a === null ? (l[n] = [t]) : a.push(t), (t.lane = e | 536870912)),
        u)
      : null;
  }
  function $n(l) {
    if (50 < hn) throw ((hn = 0), (Qc = null), Error(m(185)));
    for (var t = l.return; t !== null; ) ((l = t), (t = l.return));
    return l.tag === 3 ? l.stateNode : null;
  }
  var ia = {};
  function lm(l, t, e, a) {
    ((this.tag = l),
      (this.key = e),
      (this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null),
      (this.index = 0),
      (this.refCleanup = this.ref = null),
      (this.pendingProps = t),
      (this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null),
      (this.mode = a),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null));
  }
  function ft(l, t, e, a) {
    return new lm(l, t, e, a);
  }
  function Ui(l) {
    return ((l = l.prototype), !(!l || !l.isReactComponent));
  }
  function Yt(l, t) {
    var e = l.alternate;
    return (
      e === null
        ? ((e = ft(l.tag, t, l.key, l.mode)),
          (e.elementType = l.elementType),
          (e.type = l.type),
          (e.stateNode = l.stateNode),
          (e.alternate = l),
          (l.alternate = e))
        : ((e.pendingProps = t), (e.type = l.type), (e.flags = 0), (e.subtreeFlags = 0), (e.deletions = null)),
      (e.flags = l.flags & 65011712),
      (e.childLanes = l.childLanes),
      (e.lanes = l.lanes),
      (e.child = l.child),
      (e.memoizedProps = l.memoizedProps),
      (e.memoizedState = l.memoizedState),
      (e.updateQueue = l.updateQueue),
      (t = l.dependencies),
      (e.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
      (e.sibling = l.sibling),
      (e.index = l.index),
      (e.ref = l.ref),
      (e.refCleanup = l.refCleanup),
      e
    );
  }
  function Ms(l, t) {
    l.flags &= 65011714;
    var e = l.alternate;
    return (
      e === null
        ? ((l.childLanes = 0),
          (l.lanes = t),
          (l.child = null),
          (l.subtreeFlags = 0),
          (l.memoizedProps = null),
          (l.memoizedState = null),
          (l.updateQueue = null),
          (l.dependencies = null),
          (l.stateNode = null))
        : ((l.childLanes = e.childLanes),
          (l.lanes = e.lanes),
          (l.child = e.child),
          (l.subtreeFlags = 0),
          (l.deletions = null),
          (l.memoizedProps = e.memoizedProps),
          (l.memoizedState = e.memoizedState),
          (l.updateQueue = e.updateQueue),
          (l.type = e.type),
          (t = e.dependencies),
          (l.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext })),
      l
    );
  }
  function Wn(l, t, e, a, n, u) {
    var i = 0;
    if (((a = l), typeof l == "function")) Ui(l) && (i = 1);
    else if (typeof l == "string") i = uh(l, e, C.current) ? 26 : l === "html" || l === "head" || l === "body" ? 27 : 5;
    else
      l: switch (l) {
        case Kl:
          return ((l = ft(31, e, t, n)), (l.elementType = Kl), (l.lanes = u), l);
        case ul:
          return Ce(e.children, n, u, t);
        case bl:
          ((i = 8), (n |= 24));
          break;
        case Nl:
          return ((l = ft(12, e, t, n | 2)), (l.elementType = Nl), (l.lanes = u), l);
        case wl:
          return ((l = ft(13, e, t, n)), (l.elementType = wl), (l.lanes = u), l);
        case Gl:
          return ((l = ft(19, e, t, n)), (l.elementType = Gl), (l.lanes = u), l);
        default:
          if (typeof l == "object" && l !== null)
            switch (l.$$typeof) {
              case xl:
                i = 10;
                break l;
              case El:
                i = 9;
                break l;
              case zl:
                i = 11;
                break l;
              case k:
                i = 14;
                break l;
              case Dl:
                ((i = 16), (a = null));
                break l;
            }
          ((i = 29), (e = Error(m(130, l === null ? "null" : typeof l, ""))), (a = null));
      }
    return ((t = ft(i, e, t, n)), (t.elementType = l), (t.type = a), (t.lanes = u), t);
  }
  function Ce(l, t, e, a) {
    return ((l = ft(7, l, a, t)), (l.lanes = e), l);
  }
  function Hi(l, t, e) {
    return ((l = ft(6, l, null, t)), (l.lanes = e), l);
  }
  function Os(l) {
    var t = ft(18, null, null, 0);
    return ((t.stateNode = l), t);
  }
  function Ri(l, t, e) {
    return (
      (t = ft(4, l.children !== null ? l.children : [], l.key, t)),
      (t.lanes = e),
      (t.stateNode = { containerInfo: l.containerInfo, pendingChildren: null, implementation: l.implementation }),
      t
    );
  }
  var Ds = new WeakMap();
  function vt(l, t) {
    if (typeof l == "object" && l !== null) {
      var e = Ds.get(l);
      return e !== void 0 ? e : ((t = { value: l, source: t, stack: Of(t) }), Ds.set(l, t), t);
    }
    return { value: l, source: t, stack: Of(t) };
  }
  var ca = [],
    fa = 0,
    Fn = null,
    Ka = 0,
    pt = [],
    bt = 0,
    ae = null,
    Mt = 1,
    Ot = "";
  function Gt(l, t) {
    ((ca[fa++] = Ka), (ca[fa++] = Fn), (Fn = l), (Ka = t));
  }
  function Bs(l, t, e) {
    ((pt[bt++] = Mt), (pt[bt++] = Ot), (pt[bt++] = ae), (ae = l));
    var a = Mt;
    l = Ot;
    var n = 32 - it(a) - 1;
    ((a &= ~(1 << n)), (e += 1));
    var u = 32 - it(t) + n;
    if (30 < u) {
      var i = n - (n % 5);
      ((u = (a & ((1 << i) - 1)).toString(32)), (a >>= i), (n -= i), (Mt = (1 << (32 - it(t) + n)) | (e << n) | a), (Ot = u + l));
    } else ((Mt = (1 << u) | (e << n) | a), (Ot = l));
  }
  function qi(l) {
    l.return !== null && (Gt(l, 1), Bs(l, 1, 0));
  }
  function Yi(l) {
    for (; l === Fn; ) ((Fn = ca[--fa]), (ca[fa] = null), (Ka = ca[--fa]), (ca[fa] = null));
    for (; l === ae; ) ((ae = pt[--bt]), (pt[bt] = null), (Ot = pt[--bt]), (pt[bt] = null), (Mt = pt[--bt]), (pt[bt] = null));
  }
  function Cs(l, t) {
    ((pt[bt++] = Mt), (pt[bt++] = Ot), (pt[bt++] = ae), (Mt = t.id), (Ot = t.overflow), (ae = l));
  }
  var Xl = null,
    gl = null,
    ll = !1,
    ne = null,
    xt = !1,
    Gi = Error(m(519));
  function ue(l) {
    var t = Error(m(418, 1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML", ""));
    throw (Ja(vt(t, l)), Gi);
  }
  function Us(l) {
    var t = l.stateNode,
      e = l.type,
      a = l.memoizedProps;
    switch (((t[Ll] = l), (t[Fl] = a), e)) {
      case "dialog":
        (F("cancel", t), F("close", t));
        break;
      case "iframe":
      case "object":
      case "embed":
        F("load", t);
        break;
      case "video":
      case "audio":
        for (e = 0; e < gn.length; e++) F(gn[e], t);
        break;
      case "source":
        F("error", t);
        break;
      case "img":
      case "image":
      case "link":
        (F("error", t), F("load", t));
        break;
      case "details":
        F("toggle", t);
        break;
      case "input":
        (F("invalid", t), Jf(t, a.value, a.defaultValue, a.checked, a.defaultChecked, a.type, a.name, !0));
        break;
      case "select":
        F("invalid", t);
        break;
      case "textarea":
        (F("invalid", t), $f(t, a.value, a.defaultValue, a.children));
    }
    ((e = a.children),
      (typeof e != "string" && typeof e != "number" && typeof e != "bigint") ||
      t.textContent === "" + e ||
      a.suppressHydrationWarning === !0 ||
      Fr(t.textContent, e)
        ? (a.popover != null && (F("beforetoggle", t), F("toggle", t)),
          a.onScroll != null && F("scroll", t),
          a.onScrollEnd != null && F("scrollend", t),
          a.onClick != null && (t.onclick = Rt),
          (t = !0))
        : (t = !1),
      t || ue(l, !0));
  }
  function Hs(l) {
    for (Xl = l.return; Xl; )
      switch (Xl.tag) {
        case 5:
        case 31:
        case 13:
          xt = !1;
          return;
        case 27:
        case 3:
          xt = !0;
          return;
        default:
          Xl = Xl.return;
      }
  }
  function sa(l) {
    if (l !== Xl) return !1;
    if (!ll) return (Hs(l), (ll = !0), !1);
    var t = l.tag,
      e;
    if (
      ((e = t !== 3 && t !== 27) &&
        ((e = t === 5) && ((e = l.type), (e = !(e !== "form" && e !== "button") || af(l.type, l.memoizedProps))), (e = !e)),
      e && gl && ue(l),
      Hs(l),
      t === 13)
    ) {
      if (((l = l.memoizedState), (l = l !== null ? l.dehydrated : null), !l)) throw Error(m(317));
      gl = io(l);
    } else if (t === 31) {
      if (((l = l.memoizedState), (l = l !== null ? l.dehydrated : null), !l)) throw Error(m(317));
      gl = io(l);
    } else t === 27 ? ((t = gl), be(l.type) ? ((l = sf), (sf = null), (gl = l)) : (gl = t)) : (gl = Xl ? Nt(l.stateNode.nextSibling) : null);
    return !0;
  }
  function Ue() {
    ((gl = Xl = null), (ll = !1));
  }
  function Li() {
    var l = ne;
    return (l !== null && (et === null ? (et = l) : et.push.apply(et, l), (ne = null)), l);
  }
  function Ja(l) {
    ne === null ? (ne = [l]) : ne.push(l);
  }
  var Xi = r(null),
    He = null,
    Lt = null;
  function ie(l, t, e) {
    (M(Xi, t._currentValue), (t._currentValue = e));
  }
  function Xt(l) {
    ((l._currentValue = Xi.current), j(Xi));
  }
  function Qi(l, t, e) {
    for (; l !== null; ) {
      var a = l.alternate;
      if (
        ((l.childLanes & t) !== t
          ? ((l.childLanes |= t), a !== null && (a.childLanes |= t))
          : a !== null && (a.childLanes & t) !== t && (a.childLanes |= t),
        l === e)
      )
        break;
      l = l.return;
    }
  }
  function Zi(l, t, e, a) {
    var n = l.child;
    for (n !== null && (n.return = l); n !== null; ) {
      var u = n.dependencies;
      if (u !== null) {
        var i = n.child;
        u = u.firstContext;
        l: for (; u !== null; ) {
          var f = u;
          u = n;
          for (var s = 0; s < t.length; s++)
            if (f.context === t[s]) {
              ((u.lanes |= e), (f = u.alternate), f !== null && (f.lanes |= e), Qi(u.return, e, l), a || (i = null));
              break l;
            }
          u = f.next;
        }
      } else if (n.tag === 18) {
        if (((i = n.return), i === null)) throw Error(m(341));
        ((i.lanes |= e), (u = i.alternate), u !== null && (u.lanes |= e), Qi(i, e, l), (i = null));
      } else i = n.child;
      if (i !== null) i.return = n;
      else
        for (i = n; i !== null; ) {
          if (i === l) {
            i = null;
            break;
          }
          if (((n = i.sibling), n !== null)) {
            ((n.return = i.return), (i = n));
            break;
          }
          i = i.return;
        }
      n = i;
    }
  }
  function da(l, t, e, a) {
    l = null;
    for (var n = t, u = !1; n !== null; ) {
      if (!u) {
        if ((n.flags & 524288) !== 0) u = !0;
        else if ((n.flags & 262144) !== 0) break;
      }
      if (n.tag === 10) {
        var i = n.alternate;
        if (i === null) throw Error(m(387));
        if (((i = i.memoizedProps), i !== null)) {
          var f = n.type;
          ct(n.pendingProps.value, i.value) || (l !== null ? l.push(f) : (l = [f]));
        }
      } else if (n === cl.current) {
        if (((i = n.alternate), i === null)) throw Error(m(387));
        i.memoizedState.memoizedState !== n.memoizedState.memoizedState && (l !== null ? l.push(Sn) : (l = [Sn]));
      }
      n = n.return;
    }
    (l !== null && Zi(t, l, e, a), (t.flags |= 262144));
  }
  function In(l) {
    for (l = l.firstContext; l !== null; ) {
      if (!ct(l.context._currentValue, l.memoizedValue)) return !0;
      l = l.next;
    }
    return !1;
  }
  function Re(l) {
    ((He = l), (Lt = null), (l = l.dependencies), l !== null && (l.firstContext = null));
  }
  function Ql(l) {
    return Rs(He, l);
  }
  function Pn(l, t) {
    return (He === null && Re(l), Rs(l, t));
  }
  function Rs(l, t) {
    var e = t._currentValue;
    if (((t = { context: t, memoizedValue: e, next: null }), Lt === null)) {
      if (l === null) throw Error(m(308));
      ((Lt = t), (l.dependencies = { lanes: 0, firstContext: t }), (l.flags |= 524288));
    } else Lt = Lt.next = t;
    return e;
  }
  var tm =
      typeof AbortController < "u"
        ? AbortController
        : function () {
            var l = [],
              t = (this.signal = {
                aborted: !1,
                addEventListener: function (e, a) {
                  l.push(a);
                },
              });
            this.abort = function () {
              ((t.aborted = !0),
                l.forEach(function (e) {
                  return e();
                }));
            };
          },
    em = z.unstable_scheduleCallback,
    am = z.unstable_NormalPriority,
    Bl = { $$typeof: xl, Consumer: null, Provider: null, _currentValue: null, _currentValue2: null, _threadCount: 0 };
  function Vi() {
    return { controller: new tm(), data: new Map(), refCount: 0 };
  }
  function ka(l) {
    (l.refCount--,
      l.refCount === 0 &&
        em(am, function () {
          l.controller.abort();
        }));
  }
  var $a = null,
    wi = 0,
    ra = 0,
    oa = null;
  function nm(l, t) {
    if ($a === null) {
      var e = ($a = []);
      ((wi = 0),
        (ra = kc()),
        (oa = {
          status: "pending",
          value: void 0,
          then: function (a) {
            e.push(a);
          },
        }));
    }
    return (wi++, t.then(qs, qs), t);
  }
  function qs() {
    if (--wi === 0 && $a !== null) {
      oa !== null && (oa.status = "fulfilled");
      var l = $a;
      (($a = null), (ra = 0), (oa = null));
      for (var t = 0; t < l.length; t++) (0, l[t])();
    }
  }
  function um(l, t) {
    var e = [],
      a = {
        status: "pending",
        value: null,
        reason: null,
        then: function (n) {
          e.push(n);
        },
      };
    return (
      l.then(
        function () {
          ((a.status = "fulfilled"), (a.value = t));
          for (var n = 0; n < e.length; n++) (0, e[n])(t);
        },
        function (n) {
          for (a.status = "rejected", a.reason = n, n = 0; n < e.length; n++) (0, e[n])(void 0);
        }
      ),
      a
    );
  }
  var Ys = x.S;
  x.S = function (l, t) {
    ((Sr = nt()), typeof t == "object" && t !== null && typeof t.then == "function" && nm(l, t), Ys !== null && Ys(l, t));
  };
  var qe = r(null);
  function Ki() {
    var l = qe.current;
    return l !== null ? l : yl.pooledCache;
  }
  function lu(l, t) {
    t === null ? M(qe, qe.current) : M(qe, t.pool);
  }
  function Gs() {
    var l = Ki();
    return l === null ? null : { parent: Bl._currentValue, pool: l };
  }
  var ma = Error(m(460)),
    Ji = Error(m(474)),
    tu = Error(m(542)),
    eu = { then: function () {} };
  function Ls(l) {
    return ((l = l.status), l === "fulfilled" || l === "rejected");
  }
  function Xs(l, t, e) {
    switch (((e = l[e]), e === void 0 ? l.push(t) : e !== t && (t.then(Rt, Rt), (t = e)), t.status)) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw ((l = t.reason), Zs(l), l);
      default:
        if (typeof t.status == "string") t.then(Rt, Rt);
        else {
          if (((l = yl), l !== null && 100 < l.shellSuspendCounter)) throw Error(m(482));
          ((l = t),
            (l.status = "pending"),
            l.then(
              function (a) {
                if (t.status === "pending") {
                  var n = t;
                  ((n.status = "fulfilled"), (n.value = a));
                }
              },
              function (a) {
                if (t.status === "pending") {
                  var n = t;
                  ((n.status = "rejected"), (n.reason = a));
                }
              }
            ));
        }
        switch (t.status) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw ((l = t.reason), Zs(l), l);
        }
        throw ((Ge = t), ma);
    }
  }
  function Ye(l) {
    try {
      var t = l._init;
      return t(l._payload);
    } catch (e) {
      throw e !== null && typeof e == "object" && typeof e.then == "function" ? ((Ge = e), ma) : e;
    }
  }
  var Ge = null;
  function Qs() {
    if (Ge === null) throw Error(m(459));
    var l = Ge;
    return ((Ge = null), l);
  }
  function Zs(l) {
    if (l === ma || l === tu) throw Error(m(483));
  }
  var ha = null,
    Wa = 0;
  function au(l) {
    var t = Wa;
    return ((Wa += 1), ha === null && (ha = []), Xs(ha, l, t));
  }
  function Fa(l, t) {
    ((t = t.props.ref), (l.ref = t !== void 0 ? t : null));
  }
  function nu(l, t) {
    throw t.$$typeof === nl
      ? Error(m(525))
      : ((l = Object.prototype.toString.call(t)), Error(m(31, l === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : l)));
  }
  function Vs(l) {
    function t(h, d) {
      if (l) {
        var y = h.deletions;
        y === null ? ((h.deletions = [d]), (h.flags |= 16)) : y.push(d);
      }
    }
    function e(h, d) {
      if (!l) return null;
      for (; d !== null; ) (t(h, d), (d = d.sibling));
      return null;
    }
    function a(h) {
      for (var d = new Map(); h !== null; ) (h.key !== null ? d.set(h.key, h) : d.set(h.index, h), (h = h.sibling));
      return d;
    }
    function n(h, d) {
      return ((h = Yt(h, d)), (h.index = 0), (h.sibling = null), h);
    }
    function u(h, d, y) {
      return (
        (h.index = y),
        l
          ? ((y = h.alternate), y !== null ? ((y = y.index), y < d ? ((h.flags |= 67108866), d) : y) : ((h.flags |= 67108866), d))
          : ((h.flags |= 1048576), d)
      );
    }
    function i(h) {
      return (l && h.alternate === null && (h.flags |= 67108866), h);
    }
    function f(h, d, y, S) {
      return d === null || d.tag !== 6 ? ((d = Hi(y, h.mode, S)), (d.return = h), d) : ((d = n(d, y)), (d.return = h), d);
    }
    function s(h, d, y, S) {
      var Y = y.type;
      return Y === ul
        ? b(h, d, y.props.children, S, y.key)
        : d !== null && (d.elementType === Y || (typeof Y == "object" && Y !== null && Y.$$typeof === Dl && Ye(Y) === d.type))
          ? ((d = n(d, y.props)), Fa(d, y), (d.return = h), d)
          : ((d = Wn(y.type, y.key, y.props, null, h.mode, S)), Fa(d, y), (d.return = h), d);
    }
    function g(h, d, y, S) {
      return d === null || d.tag !== 4 || d.stateNode.containerInfo !== y.containerInfo || d.stateNode.implementation !== y.implementation
        ? ((d = Ri(y, h.mode, S)), (d.return = h), d)
        : ((d = n(d, y.children || [])), (d.return = h), d);
    }
    function b(h, d, y, S, Y) {
      return d === null || d.tag !== 7 ? ((d = Ce(y, h.mode, S, Y)), (d.return = h), d) : ((d = n(d, y)), (d.return = h), d);
    }
    function N(h, d, y) {
      if ((typeof d == "string" && d !== "") || typeof d == "number" || typeof d == "bigint") return ((d = Hi("" + d, h.mode, y)), (d.return = h), d);
      if (typeof d == "object" && d !== null) {
        switch (d.$$typeof) {
          case R:
            return ((y = Wn(d.type, d.key, d.props, null, h.mode, y)), Fa(y, d), (y.return = h), y);
          case J:
            return ((d = Ri(d, h.mode, y)), (d.return = h), d);
          case Dl:
            return ((d = Ye(d)), N(h, d, y));
        }
        if (jt(d) || Wl(d)) return ((d = Ce(d, h.mode, y, null)), (d.return = h), d);
        if (typeof d.then == "function") return N(h, au(d), y);
        if (d.$$typeof === xl) return N(h, Pn(h, d), y);
        nu(h, d);
      }
      return null;
    }
    function v(h, d, y, S) {
      var Y = d !== null ? d.key : null;
      if ((typeof y == "string" && y !== "") || typeof y == "number" || typeof y == "bigint") return Y !== null ? null : f(h, d, "" + y, S);
      if (typeof y == "object" && y !== null) {
        switch (y.$$typeof) {
          case R:
            return y.key === Y ? s(h, d, y, S) : null;
          case J:
            return y.key === Y ? g(h, d, y, S) : null;
          case Dl:
            return ((y = Ye(y)), v(h, d, y, S));
        }
        if (jt(y) || Wl(y)) return Y !== null ? null : b(h, d, y, S, null);
        if (typeof y.then == "function") return v(h, d, au(y), S);
        if (y.$$typeof === xl) return v(h, d, Pn(h, y), S);
        nu(h, y);
      }
      return null;
    }
    function p(h, d, y, S, Y) {
      if ((typeof S == "string" && S !== "") || typeof S == "number" || typeof S == "bigint") return ((h = h.get(y) || null), f(d, h, "" + S, Y));
      if (typeof S == "object" && S !== null) {
        switch (S.$$typeof) {
          case R:
            return ((h = h.get(S.key === null ? y : S.key) || null), s(d, h, S, Y));
          case J:
            return ((h = h.get(S.key === null ? y : S.key) || null), g(d, h, S, Y));
          case Dl:
            return ((S = Ye(S)), p(h, d, y, S, Y));
        }
        if (jt(S) || Wl(S)) return ((h = h.get(y) || null), b(d, h, S, Y, null));
        if (typeof S.then == "function") return p(h, d, y, au(S), Y);
        if (S.$$typeof === xl) return p(h, d, y, Pn(d, S), Y);
        nu(d, S);
      }
      return null;
    }
    function B(h, d, y, S) {
      for (var Y = null, el = null, U = d, K = (d = 0), P = null; U !== null && K < y.length; K++) {
        U.index > K ? ((P = U), (U = null)) : (P = U.sibling);
        var al = v(h, U, y[K], S);
        if (al === null) {
          U === null && (U = P);
          break;
        }
        (l && U && al.alternate === null && t(h, U), (d = u(al, d, K)), el === null ? (Y = al) : (el.sibling = al), (el = al), (U = P));
      }
      if (K === y.length) return (e(h, U), ll && Gt(h, K), Y);
      if (U === null) {
        for (; K < y.length; K++) ((U = N(h, y[K], S)), U !== null && ((d = u(U, d, K)), el === null ? (Y = U) : (el.sibling = U), (el = U)));
        return (ll && Gt(h, K), Y);
      }
      for (U = a(U); K < y.length; K++)
        ((P = p(U, h, K, y[K], S)),
          P !== null &&
            (l && P.alternate !== null && U.delete(P.key === null ? K : P.key),
            (d = u(P, d, K)),
            el === null ? (Y = P) : (el.sibling = P),
            (el = P)));
      return (
        l &&
          U.forEach(function (je) {
            return t(h, je);
          }),
        ll && Gt(h, K),
        Y
      );
    }
    function G(h, d, y, S) {
      if (y == null) throw Error(m(151));
      for (var Y = null, el = null, U = d, K = (d = 0), P = null, al = y.next(); U !== null && !al.done; K++, al = y.next()) {
        U.index > K ? ((P = U), (U = null)) : (P = U.sibling);
        var je = v(h, U, al.value, S);
        if (je === null) {
          U === null && (U = P);
          break;
        }
        (l && U && je.alternate === null && t(h, U), (d = u(je, d, K)), el === null ? (Y = je) : (el.sibling = je), (el = je), (U = P));
      }
      if (al.done) return (e(h, U), ll && Gt(h, K), Y);
      if (U === null) {
        for (; !al.done; K++, al = y.next())
          ((al = N(h, al.value, S)), al !== null && ((d = u(al, d, K)), el === null ? (Y = al) : (el.sibling = al), (el = al)));
        return (ll && Gt(h, K), Y);
      }
      for (U = a(U); !al.done; K++, al = y.next())
        ((al = p(U, h, K, al.value, S)),
          al !== null &&
            (l && al.alternate !== null && U.delete(al.key === null ? K : al.key),
            (d = u(al, d, K)),
            el === null ? (Y = al) : (el.sibling = al),
            (el = al)));
      return (
        l &&
          U.forEach(function (gh) {
            return t(h, gh);
          }),
        ll && Gt(h, K),
        Y
      );
    }
    function ml(h, d, y, S) {
      if ((typeof y == "object" && y !== null && y.type === ul && y.key === null && (y = y.props.children), typeof y == "object" && y !== null)) {
        switch (y.$$typeof) {
          case R:
            l: {
              for (var Y = y.key; d !== null; ) {
                if (d.key === Y) {
                  if (((Y = y.type), Y === ul)) {
                    if (d.tag === 7) {
                      (e(h, d.sibling), (S = n(d, y.props.children)), (S.return = h), (h = S));
                      break l;
                    }
                  } else if (d.elementType === Y || (typeof Y == "object" && Y !== null && Y.$$typeof === Dl && Ye(Y) === d.type)) {
                    (e(h, d.sibling), (S = n(d, y.props)), Fa(S, y), (S.return = h), (h = S));
                    break l;
                  }
                  e(h, d);
                  break;
                } else t(h, d);
                d = d.sibling;
              }
              y.type === ul
                ? ((S = Ce(y.props.children, h.mode, S, y.key)), (S.return = h), (h = S))
                : ((S = Wn(y.type, y.key, y.props, null, h.mode, S)), Fa(S, y), (S.return = h), (h = S));
            }
            return i(h);
          case J:
            l: {
              for (Y = y.key; d !== null; ) {
                if (d.key === Y)
                  if (d.tag === 4 && d.stateNode.containerInfo === y.containerInfo && d.stateNode.implementation === y.implementation) {
                    (e(h, d.sibling), (S = n(d, y.children || [])), (S.return = h), (h = S));
                    break l;
                  } else {
                    e(h, d);
                    break;
                  }
                else t(h, d);
                d = d.sibling;
              }
              ((S = Ri(y, h.mode, S)), (S.return = h), (h = S));
            }
            return i(h);
          case Dl:
            return ((y = Ye(y)), ml(h, d, y, S));
        }
        if (jt(y)) return B(h, d, y, S);
        if (Wl(y)) {
          if (((Y = Wl(y)), typeof Y != "function")) throw Error(m(150));
          return ((y = Y.call(y)), G(h, d, y, S));
        }
        if (typeof y.then == "function") return ml(h, d, au(y), S);
        if (y.$$typeof === xl) return ml(h, d, Pn(h, y), S);
        nu(h, y);
      }
      return (typeof y == "string" && y !== "") || typeof y == "number" || typeof y == "bigint"
        ? ((y = "" + y),
          d !== null && d.tag === 6
            ? (e(h, d.sibling), (S = n(d, y)), (S.return = h), (h = S))
            : (e(h, d), (S = Hi(y, h.mode, S)), (S.return = h), (h = S)),
          i(h))
        : e(h, d);
    }
    return function (h, d, y, S) {
      try {
        Wa = 0;
        var Y = ml(h, d, y, S);
        return ((ha = null), Y);
      } catch (U) {
        if (U === ma || U === tu) throw U;
        var el = ft(29, U, null, h.mode);
        return ((el.lanes = S), (el.return = h), el);
      }
    };
  }
  var Le = Vs(!0),
    ws = Vs(!1),
    ce = !1;
  function ki(l) {
    l.updateQueue = {
      baseState: l.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function $i(l, t) {
    ((l = l.updateQueue),
      t.updateQueue === l &&
        (t.updateQueue = {
          baseState: l.baseState,
          firstBaseUpdate: l.firstBaseUpdate,
          lastBaseUpdate: l.lastBaseUpdate,
          shared: l.shared,
          callbacks: null,
        }));
  }
  function fe(l) {
    return { lane: l, tag: 0, payload: null, callback: null, next: null };
  }
  function se(l, t, e) {
    var a = l.updateQueue;
    if (a === null) return null;
    if (((a = a.shared), (il & 2) !== 0)) {
      var n = a.pending;
      return (n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)), (a.pending = t), (t = $n(l)), _s(l, null, e), t);
    }
    return (kn(l, a, t, e), $n(l));
  }
  function Ia(l, t, e) {
    if (((t = t.updateQueue), t !== null && ((t = t.shared), (e & 4194048) !== 0))) {
      var a = t.lanes;
      ((a &= l.pendingLanes), (e |= a), (t.lanes = e), Rf(l, e));
    }
  }
  function Wi(l, t) {
    var e = l.updateQueue,
      a = l.alternate;
    if (a !== null && ((a = a.updateQueue), e === a)) {
      var n = null,
        u = null;
      if (((e = e.firstBaseUpdate), e !== null)) {
        do {
          var i = { lane: e.lane, tag: e.tag, payload: e.payload, callback: null, next: null };
          (u === null ? (n = u = i) : (u = u.next = i), (e = e.next));
        } while (e !== null);
        u === null ? (n = u = t) : (u = u.next = t);
      } else n = u = t;
      ((e = { baseState: a.baseState, firstBaseUpdate: n, lastBaseUpdate: u, shared: a.shared, callbacks: a.callbacks }), (l.updateQueue = e));
      return;
    }
    ((l = e.lastBaseUpdate), l === null ? (e.firstBaseUpdate = t) : (l.next = t), (e.lastBaseUpdate = t));
  }
  var Fi = !1;
  function Pa() {
    if (Fi) {
      var l = oa;
      if (l !== null) throw l;
    }
  }
  function ln(l, t, e, a) {
    Fi = !1;
    var n = l.updateQueue;
    ce = !1;
    var u = n.firstBaseUpdate,
      i = n.lastBaseUpdate,
      f = n.shared.pending;
    if (f !== null) {
      n.shared.pending = null;
      var s = f,
        g = s.next;
      ((s.next = null), i === null ? (u = g) : (i.next = g), (i = s));
      var b = l.alternate;
      b !== null &&
        ((b = b.updateQueue), (f = b.lastBaseUpdate), f !== i && (f === null ? (b.firstBaseUpdate = g) : (f.next = g), (b.lastBaseUpdate = s)));
    }
    if (u !== null) {
      var N = n.baseState;
      ((i = 0), (b = g = s = null), (f = u));
      do {
        var v = f.lane & -536870913,
          p = v !== f.lane;
        if (p ? (I & v) === v : (a & v) === v) {
          (v !== 0 && v === ra && (Fi = !0), b !== null && (b = b.next = { lane: 0, tag: f.tag, payload: f.payload, callback: null, next: null }));
          l: {
            var B = l,
              G = f;
            v = t;
            var ml = e;
            switch (G.tag) {
              case 1:
                if (((B = G.payload), typeof B == "function")) {
                  N = B.call(ml, N, v);
                  break l;
                }
                N = B;
                break l;
              case 3:
                B.flags = (B.flags & -65537) | 128;
              case 0:
                if (((B = G.payload), (v = typeof B == "function" ? B.call(ml, N, v) : B), v == null)) break l;
                N = q({}, N, v);
                break l;
              case 2:
                ce = !0;
            }
          }
          ((v = f.callback),
            v !== null && ((l.flags |= 64), p && (l.flags |= 8192), (p = n.callbacks), p === null ? (n.callbacks = [v]) : p.push(v)));
        } else
          ((p = { lane: v, tag: f.tag, payload: f.payload, callback: f.callback, next: null }),
            b === null ? ((g = b = p), (s = N)) : (b = b.next = p),
            (i |= v));
        if (((f = f.next), f === null)) {
          if (((f = n.shared.pending), f === null)) break;
          ((p = f), (f = p.next), (p.next = null), (n.lastBaseUpdate = p), (n.shared.pending = null));
        }
      } while (!0);
      (b === null && (s = N),
        (n.baseState = s),
        (n.firstBaseUpdate = g),
        (n.lastBaseUpdate = b),
        u === null && (n.shared.lanes = 0),
        (he |= i),
        (l.lanes = i),
        (l.memoizedState = N));
    }
  }
  function Ks(l, t) {
    if (typeof l != "function") throw Error(m(191, l));
    l.call(t);
  }
  function Js(l, t) {
    var e = l.callbacks;
    if (e !== null) for (l.callbacks = null, l = 0; l < e.length; l++) Ks(e[l], t);
  }
  var ya = r(null),
    uu = r(0);
  function ks(l, t) {
    ((l = Wt), M(uu, l), M(ya, t), (Wt = l | t.baseLanes));
  }
  function Ii() {
    (M(uu, Wt), M(ya, ya.current));
  }
  function Pi() {
    ((Wt = uu.current), j(ya), j(uu));
  }
  var st = r(null),
    St = null;
  function de(l) {
    var t = l.alternate;
    (M(Ml, Ml.current & 1), M(st, l), St === null && (t === null || ya.current !== null || t.memoizedState !== null) && (St = l));
  }
  function lc(l) {
    (M(Ml, Ml.current), M(st, l), St === null && (St = l));
  }
  function $s(l) {
    l.tag === 22 ? (M(Ml, Ml.current), M(st, l), St === null && (St = l)) : re();
  }
  function re() {
    (M(Ml, Ml.current), M(st, st.current));
  }
  function dt(l) {
    (j(st), St === l && (St = null), j(Ml));
  }
  var Ml = r(0);
  function iu(l) {
    for (var t = l; t !== null; ) {
      if (t.tag === 13) {
        var e = t.memoizedState;
        if (e !== null && ((e = e.dehydrated), e === null || cf(e) || ff(e))) return t;
      } else if (
        t.tag === 19 &&
        (t.memoizedProps.revealOrder === "forwards" ||
          t.memoizedProps.revealOrder === "backwards" ||
          t.memoizedProps.revealOrder === "unstable_legacy-backwards" ||
          t.memoizedProps.revealOrder === "together")
      ) {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        ((t.child.return = t), (t = t.child));
        continue;
      }
      if (t === l) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === l) return null;
        t = t.return;
      }
      ((t.sibling.return = t.return), (t = t.sibling));
    }
    return null;
  }
  var Qt = 0,
    V = null,
    rl = null,
    Cl = null,
    cu = !1,
    ga = !1,
    Xe = !1,
    fu = 0,
    tn = 0,
    va = null,
    im = 0;
  function jl() {
    throw Error(m(321));
  }
  function tc(l, t) {
    if (t === null) return !1;
    for (var e = 0; e < t.length && e < l.length; e++) if (!ct(l[e], t[e])) return !1;
    return !0;
  }
  function ec(l, t, e, a, n, u) {
    return (
      (Qt = u),
      (V = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (x.H = l === null || l.memoizedState === null ? Bd : vc),
      (Xe = !1),
      (u = e(a, n)),
      (Xe = !1),
      ga && (u = Fs(t, e, a, n)),
      Ws(l),
      u
    );
  }
  function Ws(l) {
    x.H = nn;
    var t = rl !== null && rl.next !== null;
    if (((Qt = 0), (Cl = rl = V = null), (cu = !1), (tn = 0), (va = null), t)) throw Error(m(300));
    l === null || Ul || ((l = l.dependencies), l !== null && In(l) && (Ul = !0));
  }
  function Fs(l, t, e, a) {
    V = l;
    var n = 0;
    do {
      if ((ga && (va = null), (tn = 0), (ga = !1), 25 <= n)) throw Error(m(301));
      if (((n += 1), (Cl = rl = null), l.updateQueue != null)) {
        var u = l.updateQueue;
        ((u.lastEffect = null), (u.events = null), (u.stores = null), u.memoCache != null && (u.memoCache.index = 0));
      }
      ((x.H = Cd), (u = t(e, a)));
    } while (ga);
    return u;
  }
  function cm() {
    var l = x.H,
      t = l.useState()[0];
    return (
      (t = typeof t.then == "function" ? en(t) : t),
      (l = l.useState()[0]),
      (rl !== null ? rl.memoizedState : null) !== l && (V.flags |= 1024),
      t
    );
  }
  function ac() {
    var l = fu !== 0;
    return ((fu = 0), l);
  }
  function nc(l, t, e) {
    ((t.updateQueue = l.updateQueue), (t.flags &= -2053), (l.lanes &= ~e));
  }
  function uc(l) {
    if (cu) {
      for (l = l.memoizedState; l !== null; ) {
        var t = l.queue;
        (t !== null && (t.pending = null), (l = l.next));
      }
      cu = !1;
    }
    ((Qt = 0), (Cl = rl = V = null), (ga = !1), (tn = fu = 0), (va = null));
  }
  function $l() {
    var l = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return (Cl === null ? (V.memoizedState = Cl = l) : (Cl = Cl.next = l), Cl);
  }
  function Ol() {
    if (rl === null) {
      var l = V.alternate;
      l = l !== null ? l.memoizedState : null;
    } else l = rl.next;
    var t = Cl === null ? V.memoizedState : Cl.next;
    if (t !== null) ((Cl = t), (rl = l));
    else {
      if (l === null) throw V.alternate === null ? Error(m(467)) : Error(m(310));
      ((rl = l),
        (l = { memoizedState: rl.memoizedState, baseState: rl.baseState, baseQueue: rl.baseQueue, queue: rl.queue, next: null }),
        Cl === null ? (V.memoizedState = Cl = l) : (Cl = Cl.next = l));
    }
    return Cl;
  }
  function su() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function en(l) {
    var t = tn;
    return (
      (tn += 1),
      va === null && (va = []),
      (l = Xs(va, l, t)),
      (t = V),
      (Cl === null ? t.memoizedState : Cl.next) === null && ((t = t.alternate), (x.H = t === null || t.memoizedState === null ? Bd : vc)),
      l
    );
  }
  function du(l) {
    if (l !== null && typeof l == "object") {
      if (typeof l.then == "function") return en(l);
      if (l.$$typeof === xl) return Ql(l);
    }
    throw Error(m(438, String(l)));
  }
  function ic(l) {
    var t = null,
      e = V.updateQueue;
    if ((e !== null && (t = e.memoCache), t == null)) {
      var a = V.alternate;
      a !== null &&
        ((a = a.updateQueue),
        a !== null &&
          ((a = a.memoCache),
          a != null &&
            (t = {
              data: a.data.map(function (n) {
                return n.slice();
              }),
              index: 0,
            })));
    }
    if (
      (t == null && (t = { data: [], index: 0 }),
      e === null && ((e = su()), (V.updateQueue = e)),
      (e.memoCache = t),
      (e = t.data[t.index]),
      e === void 0)
    )
      for (e = t.data[t.index] = Array(l), a = 0; a < l; a++) e[a] = Ke;
    return (t.index++, e);
  }
  function Zt(l, t) {
    return typeof t == "function" ? t(l) : t;
  }
  function ru(l) {
    var t = Ol();
    return cc(t, rl, l);
  }
  function cc(l, t, e) {
    var a = l.queue;
    if (a === null) throw Error(m(311));
    a.lastRenderedReducer = e;
    var n = l.baseQueue,
      u = a.pending;
    if (u !== null) {
      if (n !== null) {
        var i = n.next;
        ((n.next = u.next), (u.next = i));
      }
      ((t.baseQueue = n = u), (a.pending = null));
    }
    if (((u = l.baseState), n === null)) l.memoizedState = u;
    else {
      t = n.next;
      var f = (i = null),
        s = null,
        g = t,
        b = !1;
      do {
        var N = g.lane & -536870913;
        if (N !== g.lane ? (I & N) === N : (Qt & N) === N) {
          var v = g.revertLane;
          if (v === 0)
            (s !== null &&
              (s = s.next =
                { lane: 0, revertLane: 0, gesture: null, action: g.action, hasEagerState: g.hasEagerState, eagerState: g.eagerState, next: null }),
              N === ra && (b = !0));
          else if ((Qt & v) === v) {
            ((g = g.next), v === ra && (b = !0));
            continue;
          } else
            ((N = {
              lane: 0,
              revertLane: g.revertLane,
              gesture: null,
              action: g.action,
              hasEagerState: g.hasEagerState,
              eagerState: g.eagerState,
              next: null,
            }),
              s === null ? ((f = s = N), (i = u)) : (s = s.next = N),
              (V.lanes |= v),
              (he |= v));
          ((N = g.action), Xe && e(u, N), (u = g.hasEagerState ? g.eagerState : e(u, N)));
        } else
          ((v = {
            lane: N,
            revertLane: g.revertLane,
            gesture: g.gesture,
            action: g.action,
            hasEagerState: g.hasEagerState,
            eagerState: g.eagerState,
            next: null,
          }),
            s === null ? ((f = s = v), (i = u)) : (s = s.next = v),
            (V.lanes |= N),
            (he |= N));
        g = g.next;
      } while (g !== null && g !== t);
      if ((s === null ? (i = u) : (s.next = f), !ct(u, l.memoizedState) && ((Ul = !0), b && ((e = oa), e !== null)))) throw e;
      ((l.memoizedState = u), (l.baseState = i), (l.baseQueue = s), (a.lastRenderedState = u));
    }
    return (n === null && (a.lanes = 0), [l.memoizedState, a.dispatch]);
  }
  function fc(l) {
    var t = Ol(),
      e = t.queue;
    if (e === null) throw Error(m(311));
    e.lastRenderedReducer = l;
    var a = e.dispatch,
      n = e.pending,
      u = t.memoizedState;
    if (n !== null) {
      e.pending = null;
      var i = (n = n.next);
      do ((u = l(u, i.action)), (i = i.next));
      while (i !== n);
      (ct(u, t.memoizedState) || (Ul = !0), (t.memoizedState = u), t.baseQueue === null && (t.baseState = u), (e.lastRenderedState = u));
    }
    return [u, a];
  }
  function Is(l, t, e) {
    var a = V,
      n = Ol(),
      u = ll;
    if (u) {
      if (e === void 0) throw Error(m(407));
      e = e();
    } else e = t();
    var i = !ct((rl || n).memoizedState, e);
    if (
      (i && ((n.memoizedState = e), (Ul = !0)),
      (n = n.queue),
      rc(td.bind(null, a, n, l), [l]),
      n.getSnapshot !== t || i || (Cl !== null && Cl.memoizedState.tag & 1))
    ) {
      if (((a.flags |= 2048), pa(9, { destroy: void 0 }, ld.bind(null, a, n, e, t), null), yl === null)) throw Error(m(349));
      u || (Qt & 127) !== 0 || Ps(a, t, e);
    }
    return e;
  }
  function Ps(l, t, e) {
    ((l.flags |= 16384),
      (l = { getSnapshot: t, value: e }),
      (t = V.updateQueue),
      t === null ? ((t = su()), (V.updateQueue = t), (t.stores = [l])) : ((e = t.stores), e === null ? (t.stores = [l]) : e.push(l)));
  }
  function ld(l, t, e, a) {
    ((t.value = e), (t.getSnapshot = a), ed(t) && ad(l));
  }
  function td(l, t, e) {
    return e(function () {
      ed(t) && ad(l);
    });
  }
  function ed(l) {
    var t = l.getSnapshot;
    l = l.value;
    try {
      var e = t();
      return !ct(l, e);
    } catch {
      return !0;
    }
  }
  function ad(l) {
    var t = Be(l, 2);
    t !== null && at(t, l, 2);
  }
  function sc(l) {
    var t = $l();
    if (typeof l == "function") {
      var e = l;
      if (((l = e()), Xe)) {
        le(!0);
        try {
          e();
        } finally {
          le(!1);
        }
      }
    }
    return (
      (t.memoizedState = t.baseState = l),
      (t.queue = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: Zt, lastRenderedState: l }),
      t
    );
  }
  function nd(l, t, e, a) {
    return ((l.baseState = e), cc(l, rl, typeof a == "function" ? a : Zt));
  }
  function fm(l, t, e, a, n) {
    if (hu(l)) throw Error(m(485));
    if (((l = t.action), l !== null)) {
      var u = {
        payload: n,
        action: l,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function (i) {
          u.listeners.push(i);
        },
      };
      (x.T !== null ? e(!0) : (u.isTransition = !1),
        a(u),
        (e = t.pending),
        e === null ? ((u.next = t.pending = u), ud(t, u)) : ((u.next = e.next), (t.pending = e.next = u)));
    }
  }
  function ud(l, t) {
    var e = t.action,
      a = t.payload,
      n = l.state;
    if (t.isTransition) {
      var u = x.T,
        i = {};
      x.T = i;
      try {
        var f = e(n, a),
          s = x.S;
        (s !== null && s(i, f), id(l, t, f));
      } catch (g) {
        dc(l, t, g);
      } finally {
        (u !== null && i.types !== null && (u.types = i.types), (x.T = u));
      }
    } else
      try {
        ((u = e(n, a)), id(l, t, u));
      } catch (g) {
        dc(l, t, g);
      }
  }
  function id(l, t, e) {
    e !== null && typeof e == "object" && typeof e.then == "function"
      ? e.then(
          function (a) {
            cd(l, t, a);
          },
          function (a) {
            return dc(l, t, a);
          }
        )
      : cd(l, t, e);
  }
  function cd(l, t, e) {
    ((t.status = "fulfilled"),
      (t.value = e),
      fd(t),
      (l.state = e),
      (t = l.pending),
      t !== null && ((e = t.next), e === t ? (l.pending = null) : ((e = e.next), (t.next = e), ud(l, e))));
  }
  function dc(l, t, e) {
    var a = l.pending;
    if (((l.pending = null), a !== null)) {
      a = a.next;
      do ((t.status = "rejected"), (t.reason = e), fd(t), (t = t.next));
      while (t !== a);
    }
    l.action = null;
  }
  function fd(l) {
    l = l.listeners;
    for (var t = 0; t < l.length; t++) (0, l[t])();
  }
  function sd(l, t) {
    return t;
  }
  function dd(l, t) {
    if (ll) {
      var e = yl.formState;
      if (e !== null) {
        l: {
          var a = V;
          if (ll) {
            if (gl) {
              t: {
                for (var n = gl, u = xt; n.nodeType !== 8; ) {
                  if (!u) {
                    n = null;
                    break t;
                  }
                  if (((n = Nt(n.nextSibling)), n === null)) {
                    n = null;
                    break t;
                  }
                }
                ((u = n.data), (n = u === "F!" || u === "F" ? n : null));
              }
              if (n) {
                ((gl = Nt(n.nextSibling)), (a = n.data === "F!"));
                break l;
              }
            }
            ue(a);
          }
          a = !1;
        }
        a && (t = e[0]);
      }
    }
    return (
      (e = $l()),
      (e.memoizedState = e.baseState = t),
      (a = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: sd, lastRenderedState: t }),
      (e.queue = a),
      (e = Md.bind(null, V, a)),
      (a.dispatch = e),
      (a = sc(!1)),
      (u = gc.bind(null, V, !1, a.queue)),
      (a = $l()),
      (n = { state: t, dispatch: null, action: l, pending: null }),
      (a.queue = n),
      (e = fm.bind(null, V, n, u, e)),
      (n.dispatch = e),
      (a.memoizedState = l),
      [t, e, !1]
    );
  }
  function rd(l) {
    var t = Ol();
    return od(t, rl, l);
  }
  function od(l, t, e) {
    if (((t = cc(l, t, sd)[0]), (l = ru(Zt)[0]), typeof t == "object" && t !== null && typeof t.then == "function"))
      try {
        var a = en(t);
      } catch (i) {
        throw i === ma ? tu : i;
      }
    else a = t;
    t = Ol();
    var n = t.queue,
      u = n.dispatch;
    return (e !== t.memoizedState && ((V.flags |= 2048), pa(9, { destroy: void 0 }, sm.bind(null, n, e), null)), [a, u, l]);
  }
  function sm(l, t) {
    l.action = t;
  }
  function md(l) {
    var t = Ol(),
      e = rl;
    if (e !== null) return od(t, e, l);
    (Ol(), (t = t.memoizedState), (e = Ol()));
    var a = e.queue.dispatch;
    return ((e.memoizedState = l), [t, a, !1]);
  }
  function pa(l, t, e, a) {
    return (
      (l = { tag: l, create: e, deps: a, inst: t, next: null }),
      (t = V.updateQueue),
      t === null && ((t = su()), (V.updateQueue = t)),
      (e = t.lastEffect),
      e === null ? (t.lastEffect = l.next = l) : ((a = e.next), (e.next = l), (l.next = a), (t.lastEffect = l)),
      l
    );
  }
  function hd() {
    return Ol().memoizedState;
  }
  function ou(l, t, e, a) {
    var n = $l();
    ((V.flags |= l), (n.memoizedState = pa(1 | t, { destroy: void 0 }, e, a === void 0 ? null : a)));
  }
  function mu(l, t, e, a) {
    var n = Ol();
    a = a === void 0 ? null : a;
    var u = n.memoizedState.inst;
    rl !== null && a !== null && tc(a, rl.memoizedState.deps)
      ? (n.memoizedState = pa(t, u, e, a))
      : ((V.flags |= l), (n.memoizedState = pa(1 | t, u, e, a)));
  }
  function yd(l, t) {
    ou(8390656, 8, l, t);
  }
  function rc(l, t) {
    mu(2048, 8, l, t);
  }
  function dm(l) {
    V.flags |= 4;
    var t = V.updateQueue;
    if (t === null) ((t = su()), (V.updateQueue = t), (t.events = [l]));
    else {
      var e = t.events;
      e === null ? (t.events = [l]) : e.push(l);
    }
  }
  function gd(l) {
    var t = Ol().memoizedState;
    return (
      dm({ ref: t, nextImpl: l }),
      function () {
        if ((il & 2) !== 0) throw Error(m(440));
        return t.impl.apply(void 0, arguments);
      }
    );
  }
  function vd(l, t) {
    return mu(4, 2, l, t);
  }
  function pd(l, t) {
    return mu(4, 4, l, t);
  }
  function bd(l, t) {
    if (typeof t == "function") {
      l = l();
      var e = t(l);
      return function () {
        typeof e == "function" ? e() : t(null);
      };
    }
    if (t != null)
      return (
        (l = l()),
        (t.current = l),
        function () {
          t.current = null;
        }
      );
  }
  function xd(l, t, e) {
    ((e = e != null ? e.concat([l]) : null), mu(4, 4, bd.bind(null, t, l), e));
  }
  function oc() {}
  function Sd(l, t) {
    var e = Ol();
    t = t === void 0 ? null : t;
    var a = e.memoizedState;
    return t !== null && tc(t, a[1]) ? a[0] : ((e.memoizedState = [l, t]), l);
  }
  function Nd(l, t) {
    var e = Ol();
    t = t === void 0 ? null : t;
    var a = e.memoizedState;
    if (t !== null && tc(t, a[1])) return a[0];
    if (((a = l()), Xe)) {
      le(!0);
      try {
        l();
      } finally {
        le(!1);
      }
    }
    return ((e.memoizedState = [a, t]), a);
  }
  function mc(l, t, e) {
    return e === void 0 || ((Qt & 1073741824) !== 0 && (I & 261930) === 0)
      ? (l.memoizedState = t)
      : ((l.memoizedState = e), (l = zr()), (V.lanes |= l), (he |= l), e);
  }
  function zd(l, t, e, a) {
    return ct(e, t)
      ? e
      : ya.current !== null
        ? ((l = mc(l, e, a)), ct(l, t) || (Ul = !0), l)
        : (Qt & 42) === 0 || ((Qt & 1073741824) !== 0 && (I & 261930) === 0)
          ? ((Ul = !0), (l.memoizedState = e))
          : ((l = zr()), (V.lanes |= l), (he |= l), t);
  }
  function jd(l, t, e, a, n) {
    var u = _.p;
    _.p = u !== 0 && 8 > u ? u : 8;
    var i = x.T,
      f = {};
    ((x.T = f), gc(l, !1, t, e));
    try {
      var s = n(),
        g = x.S;
      if ((g !== null && g(f, s), s !== null && typeof s == "object" && typeof s.then == "function")) {
        var b = um(s, a);
        an(l, t, b, mt(l));
      } else an(l, t, a, mt(l));
    } catch (N) {
      an(l, t, { then: function () {}, status: "rejected", reason: N }, mt());
    } finally {
      ((_.p = u), i !== null && f.types !== null && (i.types = f.types), (x.T = i));
    }
  }
  function rm() {}
  function hc(l, t, e, a) {
    if (l.tag !== 5) throw Error(m(476));
    var n = Td(l).queue;
    jd(
      l,
      n,
      t,
      L,
      e === null
        ? rm
        : function () {
            return (Ad(l), e(a));
          }
    );
  }
  function Td(l) {
    var t = l.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: L,
      baseState: L,
      baseQueue: null,
      queue: { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: Zt, lastRenderedState: L },
      next: null,
    };
    var e = {};
    return (
      (t.next = {
        memoizedState: e,
        baseState: e,
        baseQueue: null,
        queue: { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: Zt, lastRenderedState: e },
        next: null,
      }),
      (l.memoizedState = t),
      (l = l.alternate),
      l !== null && (l.memoizedState = t),
      t
    );
  }
  function Ad(l) {
    var t = Td(l);
    (t.next === null && (t = l.alternate.memoizedState), an(l, t.next.queue, {}, mt()));
  }
  function yc() {
    return Ql(Sn);
  }
  function Ed() {
    return Ol().memoizedState;
  }
  function _d() {
    return Ol().memoizedState;
  }
  function om(l) {
    for (var t = l.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var e = mt();
          l = fe(e);
          var a = se(t, l, e);
          (a !== null && (at(a, t, e), Ia(a, t, e)), (t = { cache: Vi() }), (l.payload = t));
          return;
      }
      t = t.return;
    }
  }
  function mm(l, t, e) {
    var a = mt();
    ((e = { lane: a, revertLane: 0, gesture: null, action: e, hasEagerState: !1, eagerState: null, next: null }),
      hu(l) ? Od(t, e) : ((e = Ci(l, t, e, a)), e !== null && (at(e, l, a), Dd(e, t, a))));
  }
  function Md(l, t, e) {
    var a = mt();
    an(l, t, e, a);
  }
  function an(l, t, e, a) {
    var n = { lane: a, revertLane: 0, gesture: null, action: e, hasEagerState: !1, eagerState: null, next: null };
    if (hu(l)) Od(t, n);
    else {
      var u = l.alternate;
      if (l.lanes === 0 && (u === null || u.lanes === 0) && ((u = t.lastRenderedReducer), u !== null))
        try {
          var i = t.lastRenderedState,
            f = u(i, e);
          if (((n.hasEagerState = !0), (n.eagerState = f), ct(f, i))) return (kn(l, t, n, 0), yl === null && Jn(), !1);
        } catch {}
      if (((e = Ci(l, t, n, a)), e !== null)) return (at(e, l, a), Dd(e, t, a), !0);
    }
    return !1;
  }
  function gc(l, t, e, a) {
    if (((a = { lane: 2, revertLane: kc(), gesture: null, action: a, hasEagerState: !1, eagerState: null, next: null }), hu(l))) {
      if (t) throw Error(m(479));
    } else ((t = Ci(l, e, a, 2)), t !== null && at(t, l, 2));
  }
  function hu(l) {
    var t = l.alternate;
    return l === V || (t !== null && t === V);
  }
  function Od(l, t) {
    ga = cu = !0;
    var e = l.pending;
    (e === null ? (t.next = t) : ((t.next = e.next), (e.next = t)), (l.pending = t));
  }
  function Dd(l, t, e) {
    if ((e & 4194048) !== 0) {
      var a = t.lanes;
      ((a &= l.pendingLanes), (e |= a), (t.lanes = e), Rf(l, e));
    }
  }
  var nn = {
    readContext: Ql,
    use: du,
    useCallback: jl,
    useContext: jl,
    useEffect: jl,
    useImperativeHandle: jl,
    useLayoutEffect: jl,
    useInsertionEffect: jl,
    useMemo: jl,
    useReducer: jl,
    useRef: jl,
    useState: jl,
    useDebugValue: jl,
    useDeferredValue: jl,
    useTransition: jl,
    useSyncExternalStore: jl,
    useId: jl,
    useHostTransitionStatus: jl,
    useFormState: jl,
    useActionState: jl,
    useOptimistic: jl,
    useMemoCache: jl,
    useCacheRefresh: jl,
  };
  nn.useEffectEvent = jl;
  var Bd = {
      readContext: Ql,
      use: du,
      useCallback: function (l, t) {
        return (($l().memoizedState = [l, t === void 0 ? null : t]), l);
      },
      useContext: Ql,
      useEffect: yd,
      useImperativeHandle: function (l, t, e) {
        ((e = e != null ? e.concat([l]) : null), ou(4194308, 4, bd.bind(null, t, l), e));
      },
      useLayoutEffect: function (l, t) {
        return ou(4194308, 4, l, t);
      },
      useInsertionEffect: function (l, t) {
        ou(4, 2, l, t);
      },
      useMemo: function (l, t) {
        var e = $l();
        t = t === void 0 ? null : t;
        var a = l();
        if (Xe) {
          le(!0);
          try {
            l();
          } finally {
            le(!1);
          }
        }
        return ((e.memoizedState = [a, t]), a);
      },
      useReducer: function (l, t, e) {
        var a = $l();
        if (e !== void 0) {
          var n = e(t);
          if (Xe) {
            le(!0);
            try {
              e(t);
            } finally {
              le(!1);
            }
          }
        } else n = t;
        return (
          (a.memoizedState = a.baseState = n),
          (l = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: l, lastRenderedState: n }),
          (a.queue = l),
          (l = l.dispatch = mm.bind(null, V, l)),
          [a.memoizedState, l]
        );
      },
      useRef: function (l) {
        var t = $l();
        return ((l = { current: l }), (t.memoizedState = l));
      },
      useState: function (l) {
        l = sc(l);
        var t = l.queue,
          e = Md.bind(null, V, t);
        return ((t.dispatch = e), [l.memoizedState, e]);
      },
      useDebugValue: oc,
      useDeferredValue: function (l, t) {
        var e = $l();
        return mc(e, l, t);
      },
      useTransition: function () {
        var l = sc(!1);
        return ((l = jd.bind(null, V, l.queue, !0, !1)), ($l().memoizedState = l), [!1, l]);
      },
      useSyncExternalStore: function (l, t, e) {
        var a = V,
          n = $l();
        if (ll) {
          if (e === void 0) throw Error(m(407));
          e = e();
        } else {
          if (((e = t()), yl === null)) throw Error(m(349));
          (I & 127) !== 0 || Ps(a, t, e);
        }
        n.memoizedState = e;
        var u = { value: e, getSnapshot: t };
        return ((n.queue = u), yd(td.bind(null, a, u, l), [l]), (a.flags |= 2048), pa(9, { destroy: void 0 }, ld.bind(null, a, u, e, t), null), e);
      },
      useId: function () {
        var l = $l(),
          t = yl.identifierPrefix;
        if (ll) {
          var e = Ot,
            a = Mt;
          ((e = (a & ~(1 << (32 - it(a) - 1))).toString(32) + e),
            (t = "_" + t + "R_" + e),
            (e = fu++),
            0 < e && (t += "H" + e.toString(32)),
            (t += "_"));
        } else ((e = im++), (t = "_" + t + "r_" + e.toString(32) + "_"));
        return (l.memoizedState = t);
      },
      useHostTransitionStatus: yc,
      useFormState: dd,
      useActionState: dd,
      useOptimistic: function (l) {
        var t = $l();
        t.memoizedState = t.baseState = l;
        var e = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: null, lastRenderedState: null };
        return ((t.queue = e), (t = gc.bind(null, V, !0, e)), (e.dispatch = t), [l, t]);
      },
      useMemoCache: ic,
      useCacheRefresh: function () {
        return ($l().memoizedState = om.bind(null, V));
      },
      useEffectEvent: function (l) {
        var t = $l(),
          e = { impl: l };
        return (
          (t.memoizedState = e),
          function () {
            if ((il & 2) !== 0) throw Error(m(440));
            return e.impl.apply(void 0, arguments);
          }
        );
      },
    },
    vc = {
      readContext: Ql,
      use: du,
      useCallback: Sd,
      useContext: Ql,
      useEffect: rc,
      useImperativeHandle: xd,
      useInsertionEffect: vd,
      useLayoutEffect: pd,
      useMemo: Nd,
      useReducer: ru,
      useRef: hd,
      useState: function () {
        return ru(Zt);
      },
      useDebugValue: oc,
      useDeferredValue: function (l, t) {
        var e = Ol();
        return zd(e, rl.memoizedState, l, t);
      },
      useTransition: function () {
        var l = ru(Zt)[0],
          t = Ol().memoizedState;
        return [typeof l == "boolean" ? l : en(l), t];
      },
      useSyncExternalStore: Is,
      useId: Ed,
      useHostTransitionStatus: yc,
      useFormState: rd,
      useActionState: rd,
      useOptimistic: function (l, t) {
        var e = Ol();
        return nd(e, rl, l, t);
      },
      useMemoCache: ic,
      useCacheRefresh: _d,
    };
  vc.useEffectEvent = gd;
  var Cd = {
    readContext: Ql,
    use: du,
    useCallback: Sd,
    useContext: Ql,
    useEffect: rc,
    useImperativeHandle: xd,
    useInsertionEffect: vd,
    useLayoutEffect: pd,
    useMemo: Nd,
    useReducer: fc,
    useRef: hd,
    useState: function () {
      return fc(Zt);
    },
    useDebugValue: oc,
    useDeferredValue: function (l, t) {
      var e = Ol();
      return rl === null ? mc(e, l, t) : zd(e, rl.memoizedState, l, t);
    },
    useTransition: function () {
      var l = fc(Zt)[0],
        t = Ol().memoizedState;
      return [typeof l == "boolean" ? l : en(l), t];
    },
    useSyncExternalStore: Is,
    useId: Ed,
    useHostTransitionStatus: yc,
    useFormState: md,
    useActionState: md,
    useOptimistic: function (l, t) {
      var e = Ol();
      return rl !== null ? nd(e, rl, l, t) : ((e.baseState = l), [l, e.queue.dispatch]);
    },
    useMemoCache: ic,
    useCacheRefresh: _d,
  };
  Cd.useEffectEvent = gd;
  function pc(l, t, e, a) {
    ((t = l.memoizedState), (e = e(a, t)), (e = e == null ? t : q({}, t, e)), (l.memoizedState = e), l.lanes === 0 && (l.updateQueue.baseState = e));
  }
  var bc = {
    enqueueSetState: function (l, t, e) {
      l = l._reactInternals;
      var a = mt(),
        n = fe(a);
      ((n.payload = t), e != null && (n.callback = e), (t = se(l, n, a)), t !== null && (at(t, l, a), Ia(t, l, a)));
    },
    enqueueReplaceState: function (l, t, e) {
      l = l._reactInternals;
      var a = mt(),
        n = fe(a);
      ((n.tag = 1), (n.payload = t), e != null && (n.callback = e), (t = se(l, n, a)), t !== null && (at(t, l, a), Ia(t, l, a)));
    },
    enqueueForceUpdate: function (l, t) {
      l = l._reactInternals;
      var e = mt(),
        a = fe(e);
      ((a.tag = 2), t != null && (a.callback = t), (t = se(l, a, e)), t !== null && (at(t, l, e), Ia(t, l, e)));
    },
  };
  function Ud(l, t, e, a, n, u, i) {
    return (
      (l = l.stateNode),
      typeof l.shouldComponentUpdate == "function"
        ? l.shouldComponentUpdate(a, u, i)
        : t.prototype && t.prototype.isPureReactComponent
          ? !Va(e, a) || !Va(n, u)
          : !0
    );
  }
  function Hd(l, t, e, a) {
    ((l = t.state),
      typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(e, a),
      typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(e, a),
      t.state !== l && bc.enqueueReplaceState(t, t.state, null));
  }
  function Qe(l, t) {
    var e = t;
    if ("ref" in t) {
      e = {};
      for (var a in t) a !== "ref" && (e[a] = t[a]);
    }
    if ((l = l.defaultProps)) {
      e === t && (e = q({}, e));
      for (var n in l) e[n] === void 0 && (e[n] = l[n]);
    }
    return e;
  }
  function Rd(l) {
    Kn(l);
  }
  function qd(l) {
    console.error(l);
  }
  function Yd(l) {
    Kn(l);
  }
  function yu(l, t) {
    try {
      var e = l.onUncaughtError;
      e(t.value, { componentStack: t.stack });
    } catch (a) {
      setTimeout(function () {
        throw a;
      });
    }
  }
  function Gd(l, t, e) {
    try {
      var a = l.onCaughtError;
      a(e.value, { componentStack: e.stack, errorBoundary: t.tag === 1 ? t.stateNode : null });
    } catch (n) {
      setTimeout(function () {
        throw n;
      });
    }
  }
  function xc(l, t, e) {
    return (
      (e = fe(e)),
      (e.tag = 3),
      (e.payload = { element: null }),
      (e.callback = function () {
        yu(l, t);
      }),
      e
    );
  }
  function Ld(l) {
    return ((l = fe(l)), (l.tag = 3), l);
  }
  function Xd(l, t, e, a) {
    var n = e.type.getDerivedStateFromError;
    if (typeof n == "function") {
      var u = a.value;
      ((l.payload = function () {
        return n(u);
      }),
        (l.callback = function () {
          Gd(t, e, a);
        }));
    }
    var i = e.stateNode;
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (l.callback = function () {
        (Gd(t, e, a), typeof n != "function" && (ye === null ? (ye = new Set([this])) : ye.add(this)));
        var f = a.stack;
        this.componentDidCatch(a.value, { componentStack: f !== null ? f : "" });
      });
  }
  function hm(l, t, e, a, n) {
    if (((e.flags |= 32768), a !== null && typeof a == "object" && typeof a.then == "function")) {
      if (((t = e.alternate), t !== null && da(t, e, n, !0), (e = st.current), e !== null)) {
        switch (e.tag) {
          case 31:
          case 13:
            return (
              St === null ? Eu() : e.alternate === null && Tl === 0 && (Tl = 3),
              (e.flags &= -257),
              (e.flags |= 65536),
              (e.lanes = n),
              a === eu ? (e.flags |= 16384) : ((t = e.updateQueue), t === null ? (e.updateQueue = new Set([a])) : t.add(a), wc(l, a, n)),
              !1
            );
          case 22:
            return (
              (e.flags |= 65536),
              a === eu
                ? (e.flags |= 16384)
                : ((t = e.updateQueue),
                  t === null
                    ? ((t = { transitions: null, markerInstances: null, retryQueue: new Set([a]) }), (e.updateQueue = t))
                    : ((e = t.retryQueue), e === null ? (t.retryQueue = new Set([a])) : e.add(a)),
                  wc(l, a, n)),
              !1
            );
        }
        throw Error(m(435, e.tag));
      }
      return (wc(l, a, n), Eu(), !1);
    }
    if (ll)
      return (
        (t = st.current),
        t !== null
          ? ((t.flags & 65536) === 0 && (t.flags |= 256),
            (t.flags |= 65536),
            (t.lanes = n),
            a !== Gi && ((l = Error(m(422), { cause: a })), Ja(vt(l, e))))
          : (a !== Gi && ((t = Error(m(423), { cause: a })), Ja(vt(t, e))),
            (l = l.current.alternate),
            (l.flags |= 65536),
            (n &= -n),
            (l.lanes |= n),
            (a = vt(a, e)),
            (n = xc(l.stateNode, a, n)),
            Wi(l, n),
            Tl !== 4 && (Tl = 2)),
        !1
      );
    var u = Error(m(520), { cause: a });
    if (((u = vt(u, e)), mn === null ? (mn = [u]) : mn.push(u), Tl !== 4 && (Tl = 2), t === null)) return !0;
    ((a = vt(a, e)), (e = t));
    do {
      switch (e.tag) {
        case 3:
          return ((e.flags |= 65536), (l = n & -n), (e.lanes |= l), (l = xc(e.stateNode, a, l)), Wi(e, l), !1);
        case 1:
          if (
            ((t = e.type),
            (u = e.stateNode),
            (e.flags & 128) === 0 &&
              (typeof t.getDerivedStateFromError == "function" ||
                (u !== null && typeof u.componentDidCatch == "function" && (ye === null || !ye.has(u)))))
          )
            return ((e.flags |= 65536), (n &= -n), (e.lanes |= n), (n = Ld(n)), Xd(n, l, e, a), Wi(e, n), !1);
      }
      e = e.return;
    } while (e !== null);
    return !1;
  }
  var Sc = Error(m(461)),
    Ul = !1;
  function Zl(l, t, e, a) {
    t.child = l === null ? ws(t, null, e, a) : Le(t, l.child, e, a);
  }
  function Qd(l, t, e, a, n) {
    e = e.render;
    var u = t.ref;
    if ("ref" in a) {
      var i = {};
      for (var f in a) f !== "ref" && (i[f] = a[f]);
    } else i = a;
    return (
      Re(t),
      (a = ec(l, t, e, i, u, n)),
      (f = ac()),
      l !== null && !Ul ? (nc(l, t, n), Vt(l, t, n)) : (ll && f && qi(t), (t.flags |= 1), Zl(l, t, a, n), t.child)
    );
  }
  function Zd(l, t, e, a, n) {
    if (l === null) {
      var u = e.type;
      return typeof u == "function" && !Ui(u) && u.defaultProps === void 0 && e.compare === null
        ? ((t.tag = 15), (t.type = u), Vd(l, t, u, a, n))
        : ((l = Wn(e.type, null, a, t, t.mode, n)), (l.ref = t.ref), (l.return = t), (t.child = l));
    }
    if (((u = l.child), !Mc(l, n))) {
      var i = u.memoizedProps;
      if (((e = e.compare), (e = e !== null ? e : Va), e(i, a) && l.ref === t.ref)) return Vt(l, t, n);
    }
    return ((t.flags |= 1), (l = Yt(u, a)), (l.ref = t.ref), (l.return = t), (t.child = l));
  }
  function Vd(l, t, e, a, n) {
    if (l !== null) {
      var u = l.memoizedProps;
      if (Va(u, a) && l.ref === t.ref)
        if (((Ul = !1), (t.pendingProps = a = u), Mc(l, n))) (l.flags & 131072) !== 0 && (Ul = !0);
        else return ((t.lanes = l.lanes), Vt(l, t, n));
    }
    return Nc(l, t, e, a, n);
  }
  function wd(l, t, e, a) {
    var n = a.children,
      u = l !== null ? l.memoizedState : null;
    if (
      (l === null && t.stateNode === null && (t.stateNode = { _visibility: 1, _pendingMarkers: null, _retryCache: null, _transitions: null }),
      a.mode === "hidden")
    ) {
      if ((t.flags & 128) !== 0) {
        if (((u = u !== null ? u.baseLanes | e : e), l !== null)) {
          for (a = t.child = l.child, n = 0; a !== null; ) ((n = n | a.lanes | a.childLanes), (a = a.sibling));
          a = n & ~u;
        } else ((a = 0), (t.child = null));
        return Kd(l, t, u, e, a);
      }
      if ((e & 536870912) !== 0)
        ((t.memoizedState = { baseLanes: 0, cachePool: null }),
          l !== null && lu(t, u !== null ? u.cachePool : null),
          u !== null ? ks(t, u) : Ii(),
          $s(t));
      else return ((a = t.lanes = 536870912), Kd(l, t, u !== null ? u.baseLanes | e : e, e, a));
    } else u !== null ? (lu(t, u.cachePool), ks(t, u), re(), (t.memoizedState = null)) : (l !== null && lu(t, null), Ii(), re());
    return (Zl(l, t, n, e), t.child);
  }
  function un(l, t) {
    return (
      (l !== null && l.tag === 22) ||
        t.stateNode !== null ||
        (t.stateNode = { _visibility: 1, _pendingMarkers: null, _retryCache: null, _transitions: null }),
      t.sibling
    );
  }
  function Kd(l, t, e, a, n) {
    var u = Ki();
    return (
      (u = u === null ? null : { parent: Bl._currentValue, pool: u }),
      (t.memoizedState = { baseLanes: e, cachePool: u }),
      l !== null && lu(t, null),
      Ii(),
      $s(t),
      l !== null && da(l, t, a, !0),
      (t.childLanes = n),
      null
    );
  }
  function gu(l, t) {
    return ((t = pu({ mode: t.mode, children: t.children }, l.mode)), (t.ref = l.ref), (l.child = t), (t.return = l), t);
  }
  function Jd(l, t, e) {
    return (Le(t, l.child, null, e), (l = gu(t, t.pendingProps)), (l.flags |= 2), dt(t), (t.memoizedState = null), l);
  }
  function ym(l, t, e) {
    var a = t.pendingProps,
      n = (t.flags & 128) !== 0;
    if (((t.flags &= -129), l === null)) {
      if (ll) {
        if (a.mode === "hidden") return ((l = gu(t, a)), (t.lanes = 536870912), un(null, l));
        if (
          (lc(t),
          (l = gl)
            ? ((l = uo(l, xt)),
              (l = l !== null && l.data === "&" ? l : null),
              l !== null &&
                ((t.memoizedState = {
                  dehydrated: l,
                  treeContext: ae !== null ? { id: Mt, overflow: Ot } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (e = Os(l)),
                (e.return = t),
                (t.child = e),
                (Xl = t),
                (gl = null)))
            : (l = null),
          l === null)
        )
          throw ue(t);
        return ((t.lanes = 536870912), null);
      }
      return gu(t, a);
    }
    var u = l.memoizedState;
    if (u !== null) {
      var i = u.dehydrated;
      if ((lc(t), n))
        if (t.flags & 256) ((t.flags &= -257), (t = Jd(l, t, e)));
        else if (t.memoizedState !== null) ((t.child = l.child), (t.flags |= 128), (t = null));
        else throw Error(m(558));
      else if ((Ul || da(l, t, e, !1), (n = (e & l.childLanes) !== 0), Ul || n)) {
        if (((a = yl), a !== null && ((i = qf(a, e)), i !== 0 && i !== u.retryLane))) throw ((u.retryLane = i), Be(l, i), at(a, l, i), Sc);
        (Eu(), (t = Jd(l, t, e)));
      } else
        ((l = u.treeContext),
          (gl = Nt(i.nextSibling)),
          (Xl = t),
          (ll = !0),
          (ne = null),
          (xt = !1),
          l !== null && Cs(t, l),
          (t = gu(t, a)),
          (t.flags |= 4096));
      return t;
    }
    return ((l = Yt(l.child, { mode: a.mode, children: a.children })), (l.ref = t.ref), (t.child = l), (l.return = t), l);
  }
  function vu(l, t) {
    var e = t.ref;
    if (e === null) l !== null && l.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof e != "function" && typeof e != "object") throw Error(m(284));
      (l === null || l.ref !== e) && (t.flags |= 4194816);
    }
  }
  function Nc(l, t, e, a, n) {
    return (
      Re(t),
      (e = ec(l, t, e, a, void 0, n)),
      (a = ac()),
      l !== null && !Ul ? (nc(l, t, n), Vt(l, t, n)) : (ll && a && qi(t), (t.flags |= 1), Zl(l, t, e, n), t.child)
    );
  }
  function kd(l, t, e, a, n, u) {
    return (
      Re(t),
      (t.updateQueue = null),
      (e = Fs(t, a, e, n)),
      Ws(l),
      (a = ac()),
      l !== null && !Ul ? (nc(l, t, u), Vt(l, t, u)) : (ll && a && qi(t), (t.flags |= 1), Zl(l, t, e, u), t.child)
    );
  }
  function $d(l, t, e, a, n) {
    if ((Re(t), t.stateNode === null)) {
      var u = ia,
        i = e.contextType;
      (typeof i == "object" && i !== null && (u = Ql(i)),
        (u = new e(a, u)),
        (t.memoizedState = u.state !== null && u.state !== void 0 ? u.state : null),
        (u.updater = bc),
        (t.stateNode = u),
        (u._reactInternals = t),
        (u = t.stateNode),
        (u.props = a),
        (u.state = t.memoizedState),
        (u.refs = {}),
        ki(t),
        (i = e.contextType),
        (u.context = typeof i == "object" && i !== null ? Ql(i) : ia),
        (u.state = t.memoizedState),
        (i = e.getDerivedStateFromProps),
        typeof i == "function" && (pc(t, e, i, a), (u.state = t.memoizedState)),
        typeof e.getDerivedStateFromProps == "function" ||
          typeof u.getSnapshotBeforeUpdate == "function" ||
          (typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function") ||
          ((i = u.state),
          typeof u.componentWillMount == "function" && u.componentWillMount(),
          typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount(),
          i !== u.state && bc.enqueueReplaceState(u, u.state, null),
          ln(t, a, u, n),
          Pa(),
          (u.state = t.memoizedState)),
        typeof u.componentDidMount == "function" && (t.flags |= 4194308),
        (a = !0));
    } else if (l === null) {
      u = t.stateNode;
      var f = t.memoizedProps,
        s = Qe(e, f);
      u.props = s;
      var g = u.context,
        b = e.contextType;
      ((i = ia), typeof b == "object" && b !== null && (i = Ql(b)));
      var N = e.getDerivedStateFromProps;
      ((b = typeof N == "function" || typeof u.getSnapshotBeforeUpdate == "function"),
        (f = t.pendingProps !== f),
        b ||
          (typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function") ||
          ((f || g !== i) && Hd(t, u, a, i)),
        (ce = !1));
      var v = t.memoizedState;
      ((u.state = v),
        ln(t, a, u, n),
        Pa(),
        (g = t.memoizedState),
        f || v !== g || ce
          ? (typeof N == "function" && (pc(t, e, N, a), (g = t.memoizedState)),
            (s = ce || Ud(t, e, s, a, v, g, i))
              ? (b ||
                  (typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function") ||
                  (typeof u.componentWillMount == "function" && u.componentWillMount(),
                  typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()),
                typeof u.componentDidMount == "function" && (t.flags |= 4194308))
              : (typeof u.componentDidMount == "function" && (t.flags |= 4194308), (t.memoizedProps = a), (t.memoizedState = g)),
            (u.props = a),
            (u.state = g),
            (u.context = i),
            (a = s))
          : (typeof u.componentDidMount == "function" && (t.flags |= 4194308), (a = !1)));
    } else {
      ((u = t.stateNode),
        $i(l, t),
        (i = t.memoizedProps),
        (b = Qe(e, i)),
        (u.props = b),
        (N = t.pendingProps),
        (v = u.context),
        (g = e.contextType),
        (s = ia),
        typeof g == "object" && g !== null && (s = Ql(g)),
        (f = e.getDerivedStateFromProps),
        (g = typeof f == "function" || typeof u.getSnapshotBeforeUpdate == "function") ||
          (typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function") ||
          ((i !== N || v !== s) && Hd(t, u, a, s)),
        (ce = !1),
        (v = t.memoizedState),
        (u.state = v),
        ln(t, a, u, n),
        Pa());
      var p = t.memoizedState;
      i !== N || v !== p || ce || (l !== null && l.dependencies !== null && In(l.dependencies))
        ? (typeof f == "function" && (pc(t, e, f, a), (p = t.memoizedState)),
          (b = ce || Ud(t, e, b, a, v, p, s) || (l !== null && l.dependencies !== null && In(l.dependencies)))
            ? (g ||
                (typeof u.UNSAFE_componentWillUpdate != "function" && typeof u.componentWillUpdate != "function") ||
                (typeof u.componentWillUpdate == "function" && u.componentWillUpdate(a, p, s),
                typeof u.UNSAFE_componentWillUpdate == "function" && u.UNSAFE_componentWillUpdate(a, p, s)),
              typeof u.componentDidUpdate == "function" && (t.flags |= 4),
              typeof u.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
            : (typeof u.componentDidUpdate != "function" || (i === l.memoizedProps && v === l.memoizedState) || (t.flags |= 4),
              typeof u.getSnapshotBeforeUpdate != "function" || (i === l.memoizedProps && v === l.memoizedState) || (t.flags |= 1024),
              (t.memoizedProps = a),
              (t.memoizedState = p)),
          (u.props = a),
          (u.state = p),
          (u.context = s),
          (a = b))
        : (typeof u.componentDidUpdate != "function" || (i === l.memoizedProps && v === l.memoizedState) || (t.flags |= 4),
          typeof u.getSnapshotBeforeUpdate != "function" || (i === l.memoizedProps && v === l.memoizedState) || (t.flags |= 1024),
          (a = !1));
    }
    return (
      (u = a),
      vu(l, t),
      (a = (t.flags & 128) !== 0),
      u || a
        ? ((u = t.stateNode),
          (e = a && typeof e.getDerivedStateFromError != "function" ? null : u.render()),
          (t.flags |= 1),
          l !== null && a ? ((t.child = Le(t, l.child, null, n)), (t.child = Le(t, null, e, n))) : Zl(l, t, e, n),
          (t.memoizedState = u.state),
          (l = t.child))
        : (l = Vt(l, t, n)),
      l
    );
  }
  function Wd(l, t, e, a) {
    return (Ue(), (t.flags |= 256), Zl(l, t, e, a), t.child);
  }
  var zc = { dehydrated: null, treeContext: null, retryLane: 0, hydrationErrors: null };
  function jc(l) {
    return { baseLanes: l, cachePool: Gs() };
  }
  function Tc(l, t, e) {
    return ((l = l !== null ? l.childLanes & ~e : 0), t && (l |= ot), l);
  }
  function Fd(l, t, e) {
    var a = t.pendingProps,
      n = !1,
      u = (t.flags & 128) !== 0,
      i;
    if (
      ((i = u) || (i = l !== null && l.memoizedState === null ? !1 : (Ml.current & 2) !== 0),
      i && ((n = !0), (t.flags &= -129)),
      (i = (t.flags & 32) !== 0),
      (t.flags &= -33),
      l === null)
    ) {
      if (ll) {
        if (
          (n ? de(t) : re(),
          (l = gl)
            ? ((l = uo(l, xt)),
              (l = l !== null && l.data !== "&" ? l : null),
              l !== null &&
                ((t.memoizedState = {
                  dehydrated: l,
                  treeContext: ae !== null ? { id: Mt, overflow: Ot } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (e = Os(l)),
                (e.return = t),
                (t.child = e),
                (Xl = t),
                (gl = null)))
            : (l = null),
          l === null)
        )
          throw ue(t);
        return (ff(l) ? (t.lanes = 32) : (t.lanes = 536870912), null);
      }
      var f = a.children;
      return (
        (a = a.fallback),
        n
          ? (re(),
            (n = t.mode),
            (f = pu({ mode: "hidden", children: f }, n)),
            (a = Ce(a, n, e, null)),
            (f.return = t),
            (a.return = t),
            (f.sibling = a),
            (t.child = f),
            (a = t.child),
            (a.memoizedState = jc(e)),
            (a.childLanes = Tc(l, i, e)),
            (t.memoizedState = zc),
            un(null, a))
          : (de(t), Ac(t, f))
      );
    }
    var s = l.memoizedState;
    if (s !== null && ((f = s.dehydrated), f !== null)) {
      if (u)
        t.flags & 256
          ? (de(t), (t.flags &= -257), (t = Ec(l, t, e)))
          : t.memoizedState !== null
            ? (re(), (t.child = l.child), (t.flags |= 128), (t = null))
            : (re(),
              (f = a.fallback),
              (n = t.mode),
              (a = pu({ mode: "visible", children: a.children }, n)),
              (f = Ce(f, n, e, null)),
              (f.flags |= 2),
              (a.return = t),
              (f.return = t),
              (a.sibling = f),
              (t.child = a),
              Le(t, l.child, null, e),
              (a = t.child),
              (a.memoizedState = jc(e)),
              (a.childLanes = Tc(l, i, e)),
              (t.memoizedState = zc),
              (t = un(null, a)));
      else if ((de(t), ff(f))) {
        if (((i = f.nextSibling && f.nextSibling.dataset), i)) var g = i.dgst;
        ((i = g), (a = Error(m(419))), (a.stack = ""), (a.digest = i), Ja({ value: a, source: null, stack: null }), (t = Ec(l, t, e)));
      } else if ((Ul || da(l, t, e, !1), (i = (e & l.childLanes) !== 0), Ul || i)) {
        if (((i = yl), i !== null && ((a = qf(i, e)), a !== 0 && a !== s.retryLane))) throw ((s.retryLane = a), Be(l, a), at(i, l, a), Sc);
        (cf(f) || Eu(), (t = Ec(l, t, e)));
      } else
        cf(f)
          ? ((t.flags |= 192), (t.child = l.child), (t = null))
          : ((l = s.treeContext),
            (gl = Nt(f.nextSibling)),
            (Xl = t),
            (ll = !0),
            (ne = null),
            (xt = !1),
            l !== null && Cs(t, l),
            (t = Ac(t, a.children)),
            (t.flags |= 4096));
      return t;
    }
    return n
      ? (re(),
        (f = a.fallback),
        (n = t.mode),
        (s = l.child),
        (g = s.sibling),
        (a = Yt(s, { mode: "hidden", children: a.children })),
        (a.subtreeFlags = s.subtreeFlags & 65011712),
        g !== null ? (f = Yt(g, f)) : ((f = Ce(f, n, e, null)), (f.flags |= 2)),
        (f.return = t),
        (a.return = t),
        (a.sibling = f),
        (t.child = a),
        un(null, a),
        (a = t.child),
        (f = l.child.memoizedState),
        f === null
          ? (f = jc(e))
          : ((n = f.cachePool),
            n !== null ? ((s = Bl._currentValue), (n = n.parent !== s ? { parent: s, pool: s } : n)) : (n = Gs()),
            (f = { baseLanes: f.baseLanes | e, cachePool: n })),
        (a.memoizedState = f),
        (a.childLanes = Tc(l, i, e)),
        (t.memoizedState = zc),
        un(l.child, a))
      : (de(t),
        (e = l.child),
        (l = e.sibling),
        (e = Yt(e, { mode: "visible", children: a.children })),
        (e.return = t),
        (e.sibling = null),
        l !== null && ((i = t.deletions), i === null ? ((t.deletions = [l]), (t.flags |= 16)) : i.push(l)),
        (t.child = e),
        (t.memoizedState = null),
        e);
  }
  function Ac(l, t) {
    return ((t = pu({ mode: "visible", children: t }, l.mode)), (t.return = l), (l.child = t));
  }
  function pu(l, t) {
    return ((l = ft(22, l, null, t)), (l.lanes = 0), l);
  }
  function Ec(l, t, e) {
    return (Le(t, l.child, null, e), (l = Ac(t, t.pendingProps.children)), (l.flags |= 2), (t.memoizedState = null), l);
  }
  function Id(l, t, e) {
    l.lanes |= t;
    var a = l.alternate;
    (a !== null && (a.lanes |= t), Qi(l.return, t, e));
  }
  function _c(l, t, e, a, n, u) {
    var i = l.memoizedState;
    i === null
      ? (l.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: a, tail: e, tailMode: n, treeForkCount: u })
      : ((i.isBackwards = t), (i.rendering = null), (i.renderingStartTime = 0), (i.last = a), (i.tail = e), (i.tailMode = n), (i.treeForkCount = u));
  }
  function Pd(l, t, e) {
    var a = t.pendingProps,
      n = a.revealOrder,
      u = a.tail;
    a = a.children;
    var i = Ml.current,
      f = (i & 2) !== 0;
    if (
      (f ? ((i = (i & 1) | 2), (t.flags |= 128)) : (i &= 1), M(Ml, i), Zl(l, t, a, e), (a = ll ? Ka : 0), !f && l !== null && (l.flags & 128) !== 0)
    )
      l: for (l = t.child; l !== null; ) {
        if (l.tag === 13) l.memoizedState !== null && Id(l, e, t);
        else if (l.tag === 19) Id(l, e, t);
        else if (l.child !== null) {
          ((l.child.return = l), (l = l.child));
          continue;
        }
        if (l === t) break l;
        for (; l.sibling === null; ) {
          if (l.return === null || l.return === t) break l;
          l = l.return;
        }
        ((l.sibling.return = l.return), (l = l.sibling));
      }
    switch (n) {
      case "forwards":
        for (e = t.child, n = null; e !== null; ) ((l = e.alternate), l !== null && iu(l) === null && (n = e), (e = e.sibling));
        ((e = n), e === null ? ((n = t.child), (t.child = null)) : ((n = e.sibling), (e.sibling = null)), _c(t, !1, n, e, u, a));
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (e = null, n = t.child, t.child = null; n !== null; ) {
          if (((l = n.alternate), l !== null && iu(l) === null)) {
            t.child = n;
            break;
          }
          ((l = n.sibling), (n.sibling = e), (e = n), (n = l));
        }
        _c(t, !0, e, null, u, a);
        break;
      case "together":
        _c(t, !1, null, null, void 0, a);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function Vt(l, t, e) {
    if ((l !== null && (t.dependencies = l.dependencies), (he |= t.lanes), (e & t.childLanes) === 0))
      if (l !== null) {
        if ((da(l, t, e, !1), (e & t.childLanes) === 0)) return null;
      } else return null;
    if (l !== null && t.child !== l.child) throw Error(m(153));
    if (t.child !== null) {
      for (l = t.child, e = Yt(l, l.pendingProps), t.child = e, e.return = t; l.sibling !== null; )
        ((l = l.sibling), (e = e.sibling = Yt(l, l.pendingProps)), (e.return = t));
      e.sibling = null;
    }
    return t.child;
  }
  function Mc(l, t) {
    return (l.lanes & t) !== 0 ? !0 : ((l = l.dependencies), !!(l !== null && In(l)));
  }
  function gm(l, t, e) {
    switch (t.tag) {
      case 3:
        (kl(t, t.stateNode.containerInfo), ie(t, Bl, l.memoizedState.cache), Ue());
        break;
      case 27:
      case 5:
        Da(t);
        break;
      case 4:
        kl(t, t.stateNode.containerInfo);
        break;
      case 10:
        ie(t, t.type, t.memoizedProps.value);
        break;
      case 31:
        if (t.memoizedState !== null) return ((t.flags |= 128), lc(t), null);
        break;
      case 13:
        var a = t.memoizedState;
        if (a !== null)
          return a.dehydrated !== null
            ? (de(t), (t.flags |= 128), null)
            : (e & t.child.childLanes) !== 0
              ? Fd(l, t, e)
              : (de(t), (l = Vt(l, t, e)), l !== null ? l.sibling : null);
        de(t);
        break;
      case 19:
        var n = (l.flags & 128) !== 0;
        if (((a = (e & t.childLanes) !== 0), a || (da(l, t, e, !1), (a = (e & t.childLanes) !== 0)), n)) {
          if (a) return Pd(l, t, e);
          t.flags |= 128;
        }
        if (((n = t.memoizedState), n !== null && ((n.rendering = null), (n.tail = null), (n.lastEffect = null)), M(Ml, Ml.current), a)) break;
        return null;
      case 22:
        return ((t.lanes = 0), wd(l, t, e, t.pendingProps));
      case 24:
        ie(t, Bl, l.memoizedState.cache);
    }
    return Vt(l, t, e);
  }
  function lr(l, t, e) {
    if (l !== null)
      if (l.memoizedProps !== t.pendingProps) Ul = !0;
      else {
        if (!Mc(l, e) && (t.flags & 128) === 0) return ((Ul = !1), gm(l, t, e));
        Ul = (l.flags & 131072) !== 0;
      }
    else ((Ul = !1), ll && (t.flags & 1048576) !== 0 && Bs(t, Ka, t.index));
    switch (((t.lanes = 0), t.tag)) {
      case 16:
        l: {
          var a = t.pendingProps;
          if (((l = Ye(t.elementType)), (t.type = l), typeof l == "function"))
            Ui(l) ? ((a = Qe(l, a)), (t.tag = 1), (t = $d(null, t, l, a, e))) : ((t.tag = 0), (t = Nc(null, t, l, a, e)));
          else {
            if (l != null) {
              var n = l.$$typeof;
              if (n === zl) {
                ((t.tag = 11), (t = Qd(null, t, l, a, e)));
                break l;
              } else if (n === k) {
                ((t.tag = 14), (t = Zd(null, t, l, a, e)));
                break l;
              }
            }
            throw ((t = Ut(l) || l), Error(m(306, t, "")));
          }
        }
        return t;
      case 0:
        return Nc(l, t, t.type, t.pendingProps, e);
      case 1:
        return ((a = t.type), (n = Qe(a, t.pendingProps)), $d(l, t, a, n, e));
      case 3:
        l: {
          if ((kl(t, t.stateNode.containerInfo), l === null)) throw Error(m(387));
          a = t.pendingProps;
          var u = t.memoizedState;
          ((n = u.element), $i(l, t), ln(t, a, null, e));
          var i = t.memoizedState;
          if (((a = i.cache), ie(t, Bl, a), a !== u.cache && Zi(t, [Bl], e, !0), Pa(), (a = i.element), u.isDehydrated))
            if (((u = { element: a, isDehydrated: !1, cache: i.cache }), (t.updateQueue.baseState = u), (t.memoizedState = u), t.flags & 256)) {
              t = Wd(l, t, a, e);
              break l;
            } else if (a !== n) {
              ((n = vt(Error(m(424)), t)), Ja(n), (t = Wd(l, t, a, e)));
              break l;
            } else
              for (
                l = t.stateNode.containerInfo,
                  l.nodeType === 9 ? (l = l.body) : (l = l.nodeName === "HTML" ? l.ownerDocument.body : l),
                  gl = Nt(l.firstChild),
                  Xl = t,
                  ll = !0,
                  ne = null,
                  xt = !0,
                  e = ws(t, null, a, e),
                  t.child = e;
                e;
              )
                ((e.flags = (e.flags & -3) | 4096), (e = e.sibling));
          else {
            if ((Ue(), a === n)) {
              t = Vt(l, t, e);
              break l;
            }
            Zl(l, t, a, e);
          }
          t = t.child;
        }
        return t;
      case 26:
        return (
          vu(l, t),
          l === null
            ? (e = oo(t.type, null, t.pendingProps, null))
              ? (t.memoizedState = e)
              : ll ||
                ((e = t.type),
                (l = t.pendingProps),
                (a = Uu($.current).createElement(e)),
                (a[Ll] = t),
                (a[Fl] = l),
                Vl(a, e, l),
                ql(a),
                (t.stateNode = a))
            : (t.memoizedState = oo(t.type, l.memoizedProps, t.pendingProps, l.memoizedState)),
          null
        );
      case 27:
        return (
          Da(t),
          l === null &&
            ll &&
            ((a = t.stateNode = fo(t.type, t.pendingProps, $.current)),
            (Xl = t),
            (xt = !0),
            (n = gl),
            be(t.type) ? ((sf = n), (gl = Nt(a.firstChild))) : (gl = n)),
          Zl(l, t, t.pendingProps.children, e),
          vu(l, t),
          l === null && (t.flags |= 4194304),
          t.child
        );
      case 5:
        return (
          l === null &&
            ll &&
            ((n = a = gl) &&
              ((a = Km(a, t.type, t.pendingProps, xt)),
              a !== null ? ((t.stateNode = a), (Xl = t), (gl = Nt(a.firstChild)), (xt = !1), (n = !0)) : (n = !1)),
            n || ue(t)),
          Da(t),
          (n = t.type),
          (u = t.pendingProps),
          (i = l !== null ? l.memoizedProps : null),
          (a = u.children),
          af(n, u) ? (a = null) : i !== null && af(n, i) && (t.flags |= 32),
          t.memoizedState !== null && ((n = ec(l, t, cm, null, null, e)), (Sn._currentValue = n)),
          vu(l, t),
          Zl(l, t, a, e),
          t.child
        );
      case 6:
        return (
          l === null &&
            ll &&
            ((l = e = gl) && ((e = Jm(e, t.pendingProps, xt)), e !== null ? ((t.stateNode = e), (Xl = t), (gl = null), (l = !0)) : (l = !1)),
            l || ue(t)),
          null
        );
      case 13:
        return Fd(l, t, e);
      case 4:
        return (kl(t, t.stateNode.containerInfo), (a = t.pendingProps), l === null ? (t.child = Le(t, null, a, e)) : Zl(l, t, a, e), t.child);
      case 11:
        return Qd(l, t, t.type, t.pendingProps, e);
      case 7:
        return (Zl(l, t, t.pendingProps, e), t.child);
      case 8:
        return (Zl(l, t, t.pendingProps.children, e), t.child);
      case 12:
        return (Zl(l, t, t.pendingProps.children, e), t.child);
      case 10:
        return ((a = t.pendingProps), ie(t, t.type, a.value), Zl(l, t, a.children, e), t.child);
      case 9:
        return ((n = t.type._context), (a = t.pendingProps.children), Re(t), (n = Ql(n)), (a = a(n)), (t.flags |= 1), Zl(l, t, a, e), t.child);
      case 14:
        return Zd(l, t, t.type, t.pendingProps, e);
      case 15:
        return Vd(l, t, t.type, t.pendingProps, e);
      case 19:
        return Pd(l, t, e);
      case 31:
        return ym(l, t, e);
      case 22:
        return wd(l, t, e, t.pendingProps);
      case 24:
        return (
          Re(t),
          (a = Ql(Bl)),
          l === null
            ? ((n = Ki()),
              n === null && ((n = yl), (u = Vi()), (n.pooledCache = u), u.refCount++, u !== null && (n.pooledCacheLanes |= e), (n = u)),
              (t.memoizedState = { parent: a, cache: n }),
              ki(t),
              ie(t, Bl, n))
            : ((l.lanes & e) !== 0 && ($i(l, t), ln(t, null, null, e), Pa()),
              (n = l.memoizedState),
              (u = t.memoizedState),
              n.parent !== a
                ? ((n = { parent: a, cache: a }),
                  (t.memoizedState = n),
                  t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = n),
                  ie(t, Bl, a))
                : ((a = u.cache), ie(t, Bl, a), a !== n.cache && Zi(t, [Bl], e, !0))),
          Zl(l, t, t.pendingProps.children, e),
          t.child
        );
      case 29:
        throw t.pendingProps;
    }
    throw Error(m(156, t.tag));
  }
  function wt(l) {
    l.flags |= 4;
  }
  function Oc(l, t, e, a, n) {
    if (((t = (l.mode & 32) !== 0) && (t = !1), t)) {
      if (((l.flags |= 16777216), (n & 335544128) === n))
        if (l.stateNode.complete) l.flags |= 8192;
        else if (Er()) l.flags |= 8192;
        else throw ((Ge = eu), Ji);
    } else l.flags &= -16777217;
  }
  function tr(l, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0) l.flags &= -16777217;
    else if (((l.flags |= 16777216), !vo(t)))
      if (Er()) l.flags |= 8192;
      else throw ((Ge = eu), Ji);
  }
  function bu(l, t) {
    (t !== null && (l.flags |= 4), l.flags & 16384 && ((t = l.tag !== 22 ? Uf() : 536870912), (l.lanes |= t), (Na |= t)));
  }
  function cn(l, t) {
    if (!ll)
      switch (l.tailMode) {
        case "hidden":
          t = l.tail;
          for (var e = null; t !== null; ) (t.alternate !== null && (e = t), (t = t.sibling));
          e === null ? (l.tail = null) : (e.sibling = null);
          break;
        case "collapsed":
          e = l.tail;
          for (var a = null; e !== null; ) (e.alternate !== null && (a = e), (e = e.sibling));
          a === null ? (t || l.tail === null ? (l.tail = null) : (l.tail.sibling = null)) : (a.sibling = null);
      }
  }
  function vl(l) {
    var t = l.alternate !== null && l.alternate.child === l.child,
      e = 0,
      a = 0;
    if (t)
      for (var n = l.child; n !== null; )
        ((e |= n.lanes | n.childLanes), (a |= n.subtreeFlags & 65011712), (a |= n.flags & 65011712), (n.return = l), (n = n.sibling));
    else for (n = l.child; n !== null; ) ((e |= n.lanes | n.childLanes), (a |= n.subtreeFlags), (a |= n.flags), (n.return = l), (n = n.sibling));
    return ((l.subtreeFlags |= a), (l.childLanes = e), t);
  }
  function vm(l, t, e) {
    var a = t.pendingProps;
    switch ((Yi(t), t.tag)) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return (vl(t), null);
      case 1:
        return (vl(t), null);
      case 3:
        return (
          (e = t.stateNode),
          (a = null),
          l !== null && (a = l.memoizedState.cache),
          t.memoizedState.cache !== a && (t.flags |= 2048),
          Xt(Bl),
          _l(),
          e.pendingContext && ((e.context = e.pendingContext), (e.pendingContext = null)),
          (l === null || l.child === null) &&
            (sa(t) ? wt(t) : l === null || (l.memoizedState.isDehydrated && (t.flags & 256) === 0) || ((t.flags |= 1024), Li())),
          vl(t),
          null
        );
      case 26:
        var n = t.type,
          u = t.memoizedState;
        return (
          l === null
            ? (wt(t), u !== null ? (vl(t), tr(t, u)) : (vl(t), Oc(t, n, null, a, e)))
            : u
              ? u !== l.memoizedState
                ? (wt(t), vl(t), tr(t, u))
                : (vl(t), (t.flags &= -16777217))
              : ((l = l.memoizedProps), l !== a && wt(t), vl(t), Oc(t, n, l, a, e)),
          null
        );
      case 27:
        if ((On(t), (e = $.current), (n = t.type), l !== null && t.stateNode != null)) l.memoizedProps !== a && wt(t);
        else {
          if (!a) {
            if (t.stateNode === null) throw Error(m(166));
            return (vl(t), null);
          }
          ((l = C.current), sa(t) ? Us(t) : ((l = fo(n, a, e)), (t.stateNode = l), wt(t)));
        }
        return (vl(t), null);
      case 5:
        if ((On(t), (n = t.type), l !== null && t.stateNode != null)) l.memoizedProps !== a && wt(t);
        else {
          if (!a) {
            if (t.stateNode === null) throw Error(m(166));
            return (vl(t), null);
          }
          if (((u = C.current), sa(t))) Us(t);
          else {
            var i = Uu($.current);
            switch (u) {
              case 1:
                u = i.createElementNS("http://www.w3.org/2000/svg", n);
                break;
              case 2:
                u = i.createElementNS("http://www.w3.org/1998/Math/MathML", n);
                break;
              default:
                switch (n) {
                  case "svg":
                    u = i.createElementNS("http://www.w3.org/2000/svg", n);
                    break;
                  case "math":
                    u = i.createElementNS("http://www.w3.org/1998/Math/MathML", n);
                    break;
                  case "script":
                    ((u = i.createElement("div")), (u.innerHTML = "<script><\/script>"), (u = u.removeChild(u.firstChild)));
                    break;
                  case "select":
                    ((u = typeof a.is == "string" ? i.createElement("select", { is: a.is }) : i.createElement("select")),
                      a.multiple ? (u.multiple = !0) : a.size && (u.size = a.size));
                    break;
                  default:
                    u = typeof a.is == "string" ? i.createElement(n, { is: a.is }) : i.createElement(n);
                }
            }
            ((u[Ll] = t), (u[Fl] = a));
            l: for (i = t.child; i !== null; ) {
              if (i.tag === 5 || i.tag === 6) u.appendChild(i.stateNode);
              else if (i.tag !== 4 && i.tag !== 27 && i.child !== null) {
                ((i.child.return = i), (i = i.child));
                continue;
              }
              if (i === t) break l;
              for (; i.sibling === null; ) {
                if (i.return === null || i.return === t) break l;
                i = i.return;
              }
              ((i.sibling.return = i.return), (i = i.sibling));
            }
            t.stateNode = u;
            l: switch ((Vl(u, n, a), n)) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                a = !!a.autoFocus;
                break l;
              case "img":
                a = !0;
                break l;
              default:
                a = !1;
            }
            a && wt(t);
          }
        }
        return (vl(t), Oc(t, t.type, l === null ? null : l.memoizedProps, t.pendingProps, e), null);
      case 6:
        if (l && t.stateNode != null) l.memoizedProps !== a && wt(t);
        else {
          if (typeof a != "string" && t.stateNode === null) throw Error(m(166));
          if (((l = $.current), sa(t))) {
            if (((l = t.stateNode), (e = t.memoizedProps), (a = null), (n = Xl), n !== null))
              switch (n.tag) {
                case 27:
                case 5:
                  a = n.memoizedProps;
              }
            ((l[Ll] = t), (l = !!(l.nodeValue === e || (a !== null && a.suppressHydrationWarning === !0) || Fr(l.nodeValue, e))), l || ue(t, !0));
          } else ((l = Uu(l).createTextNode(a)), (l[Ll] = t), (t.stateNode = l));
        }
        return (vl(t), null);
      case 31:
        if (((e = t.memoizedState), l === null || l.memoizedState !== null)) {
          if (((a = sa(t)), e !== null)) {
            if (l === null) {
              if (!a) throw Error(m(318));
              if (((l = t.memoizedState), (l = l !== null ? l.dehydrated : null), !l)) throw Error(m(557));
              l[Ll] = t;
            } else (Ue(), (t.flags & 128) === 0 && (t.memoizedState = null), (t.flags |= 4));
            (vl(t), (l = !1));
          } else ((e = Li()), l !== null && l.memoizedState !== null && (l.memoizedState.hydrationErrors = e), (l = !0));
          if (!l) return t.flags & 256 ? (dt(t), t) : (dt(t), null);
          if ((t.flags & 128) !== 0) throw Error(m(558));
        }
        return (vl(t), null);
      case 13:
        if (((a = t.memoizedState), l === null || (l.memoizedState !== null && l.memoizedState.dehydrated !== null))) {
          if (((n = sa(t)), a !== null && a.dehydrated !== null)) {
            if (l === null) {
              if (!n) throw Error(m(318));
              if (((n = t.memoizedState), (n = n !== null ? n.dehydrated : null), !n)) throw Error(m(317));
              n[Ll] = t;
            } else (Ue(), (t.flags & 128) === 0 && (t.memoizedState = null), (t.flags |= 4));
            (vl(t), (n = !1));
          } else ((n = Li()), l !== null && l.memoizedState !== null && (l.memoizedState.hydrationErrors = n), (n = !0));
          if (!n) return t.flags & 256 ? (dt(t), t) : (dt(t), null);
        }
        return (
          dt(t),
          (t.flags & 128) !== 0
            ? ((t.lanes = e), t)
            : ((e = a !== null),
              (l = l !== null && l.memoizedState !== null),
              e &&
                ((a = t.child),
                (n = null),
                a.alternate !== null &&
                  a.alternate.memoizedState !== null &&
                  a.alternate.memoizedState.cachePool !== null &&
                  (n = a.alternate.memoizedState.cachePool.pool),
                (u = null),
                a.memoizedState !== null && a.memoizedState.cachePool !== null && (u = a.memoizedState.cachePool.pool),
                u !== n && (a.flags |= 2048)),
              e !== l && e && (t.child.flags |= 8192),
              bu(t, t.updateQueue),
              vl(t),
              null)
        );
      case 4:
        return (_l(), l === null && Ic(t.stateNode.containerInfo), vl(t), null);
      case 10:
        return (Xt(t.type), vl(t), null);
      case 19:
        if ((j(Ml), (a = t.memoizedState), a === null)) return (vl(t), null);
        if (((n = (t.flags & 128) !== 0), (u = a.rendering), u === null))
          if (n) cn(a, !1);
          else {
            if (Tl !== 0 || (l !== null && (l.flags & 128) !== 0))
              for (l = t.child; l !== null; ) {
                if (((u = iu(l)), u !== null)) {
                  for (
                    t.flags |= 128, cn(a, !1), l = u.updateQueue, t.updateQueue = l, bu(t, l), t.subtreeFlags = 0, l = e, e = t.child;
                    e !== null;
                  )
                    (Ms(e, l), (e = e.sibling));
                  return (M(Ml, (Ml.current & 1) | 2), ll && Gt(t, a.treeForkCount), t.child);
                }
                l = l.sibling;
              }
            a.tail !== null && nt() > ju && ((t.flags |= 128), (n = !0), cn(a, !1), (t.lanes = 4194304));
          }
        else {
          if (!n)
            if (((l = iu(u)), l !== null)) {
              if (
                ((t.flags |= 128),
                (n = !0),
                (l = l.updateQueue),
                (t.updateQueue = l),
                bu(t, l),
                cn(a, !0),
                a.tail === null && a.tailMode === "hidden" && !u.alternate && !ll)
              )
                return (vl(t), null);
            } else 2 * nt() - a.renderingStartTime > ju && e !== 536870912 && ((t.flags |= 128), (n = !0), cn(a, !1), (t.lanes = 4194304));
          a.isBackwards ? ((u.sibling = t.child), (t.child = u)) : ((l = a.last), l !== null ? (l.sibling = u) : (t.child = u), (a.last = u));
        }
        return a.tail !== null
          ? ((l = a.tail),
            (a.rendering = l),
            (a.tail = l.sibling),
            (a.renderingStartTime = nt()),
            (l.sibling = null),
            (e = Ml.current),
            M(Ml, n ? (e & 1) | 2 : e & 1),
            ll && Gt(t, a.treeForkCount),
            l)
          : (vl(t), null);
      case 22:
      case 23:
        return (
          dt(t),
          Pi(),
          (a = t.memoizedState !== null),
          l !== null ? (l.memoizedState !== null) !== a && (t.flags |= 8192) : a && (t.flags |= 8192),
          a ? (e & 536870912) !== 0 && (t.flags & 128) === 0 && (vl(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : vl(t),
          (e = t.updateQueue),
          e !== null && bu(t, e.retryQueue),
          (e = null),
          l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (e = l.memoizedState.cachePool.pool),
          (a = null),
          t.memoizedState !== null && t.memoizedState.cachePool !== null && (a = t.memoizedState.cachePool.pool),
          a !== e && (t.flags |= 2048),
          l !== null && j(qe),
          null
        );
      case 24:
        return ((e = null), l !== null && (e = l.memoizedState.cache), t.memoizedState.cache !== e && (t.flags |= 2048), Xt(Bl), vl(t), null);
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(m(156, t.tag));
  }
  function pm(l, t) {
    switch ((Yi(t), t.tag)) {
      case 1:
        return ((l = t.flags), l & 65536 ? ((t.flags = (l & -65537) | 128), t) : null);
      case 3:
        return (Xt(Bl), _l(), (l = t.flags), (l & 65536) !== 0 && (l & 128) === 0 ? ((t.flags = (l & -65537) | 128), t) : null);
      case 26:
      case 27:
      case 5:
        return (On(t), null);
      case 31:
        if (t.memoizedState !== null) {
          if ((dt(t), t.alternate === null)) throw Error(m(340));
          Ue();
        }
        return ((l = t.flags), l & 65536 ? ((t.flags = (l & -65537) | 128), t) : null);
      case 13:
        if ((dt(t), (l = t.memoizedState), l !== null && l.dehydrated !== null)) {
          if (t.alternate === null) throw Error(m(340));
          Ue();
        }
        return ((l = t.flags), l & 65536 ? ((t.flags = (l & -65537) | 128), t) : null);
      case 19:
        return (j(Ml), null);
      case 4:
        return (_l(), null);
      case 10:
        return (Xt(t.type), null);
      case 22:
      case 23:
        return (dt(t), Pi(), l !== null && j(qe), (l = t.flags), l & 65536 ? ((t.flags = (l & -65537) | 128), t) : null);
      case 24:
        return (Xt(Bl), null);
      case 25:
        return null;
      default:
        return null;
    }
  }
  function er(l, t) {
    switch ((Yi(t), t.tag)) {
      case 3:
        (Xt(Bl), _l());
        break;
      case 26:
      case 27:
      case 5:
        On(t);
        break;
      case 4:
        _l();
        break;
      case 31:
        t.memoizedState !== null && dt(t);
        break;
      case 13:
        dt(t);
        break;
      case 19:
        j(Ml);
        break;
      case 10:
        Xt(t.type);
        break;
      case 22:
      case 23:
        (dt(t), Pi(), l !== null && j(qe));
        break;
      case 24:
        Xt(Bl);
    }
  }
  function fn(l, t) {
    try {
      var e = t.updateQueue,
        a = e !== null ? e.lastEffect : null;
      if (a !== null) {
        var n = a.next;
        e = n;
        do {
          if ((e.tag & l) === l) {
            a = void 0;
            var u = e.create,
              i = e.inst;
            ((a = u()), (i.destroy = a));
          }
          e = e.next;
        } while (e !== n);
      }
    } catch (f) {
      sl(t, t.return, f);
    }
  }
  function oe(l, t, e) {
    try {
      var a = t.updateQueue,
        n = a !== null ? a.lastEffect : null;
      if (n !== null) {
        var u = n.next;
        a = u;
        do {
          if ((a.tag & l) === l) {
            var i = a.inst,
              f = i.destroy;
            if (f !== void 0) {
              ((i.destroy = void 0), (n = t));
              var s = e,
                g = f;
              try {
                g();
              } catch (b) {
                sl(n, s, b);
              }
            }
          }
          a = a.next;
        } while (a !== u);
      }
    } catch (b) {
      sl(t, t.return, b);
    }
  }
  function ar(l) {
    var t = l.updateQueue;
    if (t !== null) {
      var e = l.stateNode;
      try {
        Js(t, e);
      } catch (a) {
        sl(l, l.return, a);
      }
    }
  }
  function nr(l, t, e) {
    ((e.props = Qe(l.type, l.memoizedProps)), (e.state = l.memoizedState));
    try {
      e.componentWillUnmount();
    } catch (a) {
      sl(l, t, a);
    }
  }
  function sn(l, t) {
    try {
      var e = l.ref;
      if (e !== null) {
        switch (l.tag) {
          case 26:
          case 27:
          case 5:
            var a = l.stateNode;
            break;
          case 30:
            a = l.stateNode;
            break;
          default:
            a = l.stateNode;
        }
        typeof e == "function" ? (l.refCleanup = e(a)) : (e.current = a);
      }
    } catch (n) {
      sl(l, t, n);
    }
  }
  function Dt(l, t) {
    var e = l.ref,
      a = l.refCleanup;
    if (e !== null)
      if (typeof a == "function")
        try {
          a();
        } catch (n) {
          sl(l, t, n);
        } finally {
          ((l.refCleanup = null), (l = l.alternate), l != null && (l.refCleanup = null));
        }
      else if (typeof e == "function")
        try {
          e(null);
        } catch (n) {
          sl(l, t, n);
        }
      else e.current = null;
  }
  function ur(l) {
    var t = l.type,
      e = l.memoizedProps,
      a = l.stateNode;
    try {
      l: switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          e.autoFocus && a.focus();
          break l;
        case "img":
          e.src ? (a.src = e.src) : e.srcSet && (a.srcset = e.srcSet);
      }
    } catch (n) {
      sl(l, l.return, n);
    }
  }
  function Dc(l, t, e) {
    try {
      var a = l.stateNode;
      (Lm(a, l.type, e, t), (a[Fl] = t));
    } catch (n) {
      sl(l, l.return, n);
    }
  }
  function ir(l) {
    return l.tag === 5 || l.tag === 3 || l.tag === 26 || (l.tag === 27 && be(l.type)) || l.tag === 4;
  }
  function Bc(l) {
    l: for (;;) {
      for (; l.sibling === null; ) {
        if (l.return === null || ir(l.return)) return null;
        l = l.return;
      }
      for (l.sibling.return = l.return, l = l.sibling; l.tag !== 5 && l.tag !== 6 && l.tag !== 18; ) {
        if ((l.tag === 27 && be(l.type)) || l.flags & 2 || l.child === null || l.tag === 4) continue l;
        ((l.child.return = l), (l = l.child));
      }
      if (!(l.flags & 2)) return l.stateNode;
    }
  }
  function Cc(l, t, e) {
    var a = l.tag;
    if (a === 5 || a === 6)
      ((l = l.stateNode),
        t
          ? (e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e).insertBefore(l, t)
          : ((t = e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e),
            t.appendChild(l),
            (e = e._reactRootContainer),
            e != null || t.onclick !== null || (t.onclick = Rt)));
    else if (a !== 4 && (a === 27 && be(l.type) && ((e = l.stateNode), (t = null)), (l = l.child), l !== null))
      for (Cc(l, t, e), l = l.sibling; l !== null; ) (Cc(l, t, e), (l = l.sibling));
  }
  function xu(l, t, e) {
    var a = l.tag;
    if (a === 5 || a === 6) ((l = l.stateNode), t ? e.insertBefore(l, t) : e.appendChild(l));
    else if (a !== 4 && (a === 27 && be(l.type) && (e = l.stateNode), (l = l.child), l !== null))
      for (xu(l, t, e), l = l.sibling; l !== null; ) (xu(l, t, e), (l = l.sibling));
  }
  function cr(l) {
    var t = l.stateNode,
      e = l.memoizedProps;
    try {
      for (var a = l.type, n = t.attributes; n.length; ) t.removeAttributeNode(n[0]);
      (Vl(t, a, e), (t[Ll] = l), (t[Fl] = e));
    } catch (u) {
      sl(l, l.return, u);
    }
  }
  var Kt = !1,
    Hl = !1,
    Uc = !1,
    fr = typeof WeakSet == "function" ? WeakSet : Set,
    Yl = null;
  function bm(l, t) {
    if (((l = l.containerInfo), (tf = Xu), (l = xs(l)), Ei(l))) {
      if ("selectionStart" in l) var e = { start: l.selectionStart, end: l.selectionEnd };
      else
        l: {
          e = ((e = l.ownerDocument) && e.defaultView) || window;
          var a = e.getSelection && e.getSelection();
          if (a && a.rangeCount !== 0) {
            e = a.anchorNode;
            var n = a.anchorOffset,
              u = a.focusNode;
            a = a.focusOffset;
            try {
              (e.nodeType, u.nodeType);
            } catch {
              e = null;
              break l;
            }
            var i = 0,
              f = -1,
              s = -1,
              g = 0,
              b = 0,
              N = l,
              v = null;
            t: for (;;) {
              for (
                var p;
                N !== e || (n !== 0 && N.nodeType !== 3) || (f = i + n),
                  N !== u || (a !== 0 && N.nodeType !== 3) || (s = i + a),
                  N.nodeType === 3 && (i += N.nodeValue.length),
                  (p = N.firstChild) !== null;
              )
                ((v = N), (N = p));
              for (;;) {
                if (N === l) break t;
                if ((v === e && ++g === n && (f = i), v === u && ++b === a && (s = i), (p = N.nextSibling) !== null)) break;
                ((N = v), (v = N.parentNode));
              }
              N = p;
            }
            e = f === -1 || s === -1 ? null : { start: f, end: s };
          } else e = null;
        }
      e = e || { start: 0, end: 0 };
    } else e = null;
    for (ef = { focusedElem: l, selectionRange: e }, Xu = !1, Yl = t; Yl !== null; )
      if (((t = Yl), (l = t.child), (t.subtreeFlags & 1028) !== 0 && l !== null)) ((l.return = t), (Yl = l));
      else
        for (; Yl !== null; ) {
          switch (((t = Yl), (u = t.alternate), (l = t.flags), t.tag)) {
            case 0:
              if ((l & 4) !== 0 && ((l = t.updateQueue), (l = l !== null ? l.events : null), l !== null))
                for (e = 0; e < l.length; e++) ((n = l[e]), (n.ref.impl = n.nextImpl));
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((l & 1024) !== 0 && u !== null) {
                ((l = void 0), (e = t), (n = u.memoizedProps), (u = u.memoizedState), (a = e.stateNode));
                try {
                  var B = Qe(e.type, n);
                  ((l = a.getSnapshotBeforeUpdate(B, u)), (a.__reactInternalSnapshotBeforeUpdate = l));
                } catch (G) {
                  sl(e, e.return, G);
                }
              }
              break;
            case 3:
              if ((l & 1024) !== 0) {
                if (((l = t.stateNode.containerInfo), (e = l.nodeType), e === 9)) uf(l);
                else if (e === 1)
                  switch (l.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      uf(l);
                      break;
                    default:
                      l.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((l & 1024) !== 0) throw Error(m(163));
          }
          if (((l = t.sibling), l !== null)) {
            ((l.return = t.return), (Yl = l));
            break;
          }
          Yl = t.return;
        }
  }
  function sr(l, t, e) {
    var a = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        (kt(l, e), a & 4 && fn(5, e));
        break;
      case 1:
        if ((kt(l, e), a & 4))
          if (((l = e.stateNode), t === null))
            try {
              l.componentDidMount();
            } catch (i) {
              sl(e, e.return, i);
            }
          else {
            var n = Qe(e.type, t.memoizedProps);
            t = t.memoizedState;
            try {
              l.componentDidUpdate(n, t, l.__reactInternalSnapshotBeforeUpdate);
            } catch (i) {
              sl(e, e.return, i);
            }
          }
        (a & 64 && ar(e), a & 512 && sn(e, e.return));
        break;
      case 3:
        if ((kt(l, e), a & 64 && ((l = e.updateQueue), l !== null))) {
          if (((t = null), e.child !== null))
            switch (e.child.tag) {
              case 27:
              case 5:
                t = e.child.stateNode;
                break;
              case 1:
                t = e.child.stateNode;
            }
          try {
            Js(l, t);
          } catch (i) {
            sl(e, e.return, i);
          }
        }
        break;
      case 27:
        t === null && a & 4 && cr(e);
      case 26:
      case 5:
        (kt(l, e), t === null && a & 4 && ur(e), a & 512 && sn(e, e.return));
        break;
      case 12:
        kt(l, e);
        break;
      case 31:
        (kt(l, e), a & 4 && or(l, e));
        break;
      case 13:
        (kt(l, e),
          a & 4 && mr(l, e),
          a & 64 && ((l = e.memoizedState), l !== null && ((l = l.dehydrated), l !== null && ((e = _m.bind(null, e)), km(l, e)))));
        break;
      case 22:
        if (((a = e.memoizedState !== null || Kt), !a)) {
          ((t = (t !== null && t.memoizedState !== null) || Hl), (n = Kt));
          var u = Hl;
          ((Kt = a), (Hl = t) && !u ? $t(l, e, (e.subtreeFlags & 8772) !== 0) : kt(l, e), (Kt = n), (Hl = u));
        }
        break;
      case 30:
        break;
      default:
        kt(l, e);
    }
  }
  function dr(l) {
    var t = l.alternate;
    (t !== null && ((l.alternate = null), dr(t)),
      (l.child = null),
      (l.deletions = null),
      (l.sibling = null),
      l.tag === 5 && ((t = l.stateNode), t !== null && di(t)),
      (l.stateNode = null),
      (l.return = null),
      (l.dependencies = null),
      (l.memoizedProps = null),
      (l.memoizedState = null),
      (l.pendingProps = null),
      (l.stateNode = null),
      (l.updateQueue = null));
  }
  var Sl = null,
    Pl = !1;
  function Jt(l, t, e) {
    for (e = e.child; e !== null; ) (rr(l, t, e), (e = e.sibling));
  }
  function rr(l, t, e) {
    if (ut && typeof ut.onCommitFiberUnmount == "function")
      try {
        ut.onCommitFiberUnmount(Ba, e);
      } catch {}
    switch (e.tag) {
      case 26:
        (Hl || Dt(e, t), Jt(l, t, e), e.memoizedState ? e.memoizedState.count-- : e.stateNode && ((e = e.stateNode), e.parentNode.removeChild(e)));
        break;
      case 27:
        Hl || Dt(e, t);
        var a = Sl,
          n = Pl;
        (be(e.type) && ((Sl = e.stateNode), (Pl = !1)), Jt(l, t, e), pn(e.stateNode), (Sl = a), (Pl = n));
        break;
      case 5:
        Hl || Dt(e, t);
      case 6:
        if (((a = Sl), (n = Pl), (Sl = null), Jt(l, t, e), (Sl = a), (Pl = n), Sl !== null))
          if (Pl)
            try {
              (Sl.nodeType === 9 ? Sl.body : Sl.nodeName === "HTML" ? Sl.ownerDocument.body : Sl).removeChild(e.stateNode);
            } catch (u) {
              sl(e, t, u);
            }
          else
            try {
              Sl.removeChild(e.stateNode);
            } catch (u) {
              sl(e, t, u);
            }
        break;
      case 18:
        Sl !== null &&
          (Pl
            ? ((l = Sl), ao(l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l, e.stateNode), Oa(l))
            : ao(Sl, e.stateNode));
        break;
      case 4:
        ((a = Sl), (n = Pl), (Sl = e.stateNode.containerInfo), (Pl = !0), Jt(l, t, e), (Sl = a), (Pl = n));
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        (oe(2, e, t), Hl || oe(4, e, t), Jt(l, t, e));
        break;
      case 1:
        (Hl || (Dt(e, t), (a = e.stateNode), typeof a.componentWillUnmount == "function" && nr(e, t, a)), Jt(l, t, e));
        break;
      case 21:
        Jt(l, t, e);
        break;
      case 22:
        ((Hl = (a = Hl) || e.memoizedState !== null), Jt(l, t, e), (Hl = a));
        break;
      default:
        Jt(l, t, e);
    }
  }
  function or(l, t) {
    if (t.memoizedState === null && ((l = t.alternate), l !== null && ((l = l.memoizedState), l !== null))) {
      l = l.dehydrated;
      try {
        Oa(l);
      } catch (e) {
        sl(t, t.return, e);
      }
    }
  }
  function mr(l, t) {
    if (t.memoizedState === null && ((l = t.alternate), l !== null && ((l = l.memoizedState), l !== null && ((l = l.dehydrated), l !== null))))
      try {
        Oa(l);
      } catch (e) {
        sl(t, t.return, e);
      }
  }
  function xm(l) {
    switch (l.tag) {
      case 31:
      case 13:
      case 19:
        var t = l.stateNode;
        return (t === null && (t = l.stateNode = new fr()), t);
      case 22:
        return ((l = l.stateNode), (t = l._retryCache), t === null && (t = l._retryCache = new fr()), t);
      default:
        throw Error(m(435, l.tag));
    }
  }
  function Su(l, t) {
    var e = xm(l);
    t.forEach(function (a) {
      if (!e.has(a)) {
        e.add(a);
        var n = Mm.bind(null, l, a);
        a.then(n, n);
      }
    });
  }
  function lt(l, t) {
    var e = t.deletions;
    if (e !== null)
      for (var a = 0; a < e.length; a++) {
        var n = e[a],
          u = l,
          i = t,
          f = i;
        l: for (; f !== null; ) {
          switch (f.tag) {
            case 27:
              if (be(f.type)) {
                ((Sl = f.stateNode), (Pl = !1));
                break l;
              }
              break;
            case 5:
              ((Sl = f.stateNode), (Pl = !1));
              break l;
            case 3:
            case 4:
              ((Sl = f.stateNode.containerInfo), (Pl = !0));
              break l;
          }
          f = f.return;
        }
        if (Sl === null) throw Error(m(160));
        (rr(u, i, n), (Sl = null), (Pl = !1), (u = n.alternate), u !== null && (u.return = null), (n.return = null));
      }
    if (t.subtreeFlags & 13886) for (t = t.child; t !== null; ) (hr(t, l), (t = t.sibling));
  }
  var At = null;
  function hr(l, t) {
    var e = l.alternate,
      a = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        (lt(t, l), tt(l), a & 4 && (oe(3, l, l.return), fn(3, l), oe(5, l, l.return)));
        break;
      case 1:
        (lt(t, l),
          tt(l),
          a & 512 && (Hl || e === null || Dt(e, e.return)),
          a & 64 &&
            Kt &&
            ((l = l.updateQueue),
            l !== null &&
              ((a = l.callbacks), a !== null && ((e = l.shared.hiddenCallbacks), (l.shared.hiddenCallbacks = e === null ? a : e.concat(a))))));
        break;
      case 26:
        var n = At;
        if ((lt(t, l), tt(l), a & 512 && (Hl || e === null || Dt(e, e.return)), a & 4)) {
          var u = e !== null ? e.memoizedState : null;
          if (((a = l.memoizedState), e === null))
            if (a === null)
              if (l.stateNode === null) {
                l: {
                  ((a = l.type), (e = l.memoizedProps), (n = n.ownerDocument || n));
                  t: switch (a) {
                    case "title":
                      ((u = n.getElementsByTagName("title")[0]),
                        (!u || u[Ha] || u[Ll] || u.namespaceURI === "http://www.w3.org/2000/svg" || u.hasAttribute("itemprop")) &&
                          ((u = n.createElement(a)), n.head.insertBefore(u, n.querySelector("head > title"))),
                        Vl(u, a, e),
                        (u[Ll] = l),
                        ql(u),
                        (a = u));
                      break l;
                    case "link":
                      var i = yo("link", "href", n).get(a + (e.href || ""));
                      if (i) {
                        for (var f = 0; f < i.length; f++)
                          if (
                            ((u = i[f]),
                            u.getAttribute("href") === (e.href == null || e.href === "" ? null : e.href) &&
                              u.getAttribute("rel") === (e.rel == null ? null : e.rel) &&
                              u.getAttribute("title") === (e.title == null ? null : e.title) &&
                              u.getAttribute("crossorigin") === (e.crossOrigin == null ? null : e.crossOrigin))
                          ) {
                            i.splice(f, 1);
                            break t;
                          }
                      }
                      ((u = n.createElement(a)), Vl(u, a, e), n.head.appendChild(u));
                      break;
                    case "meta":
                      if ((i = yo("meta", "content", n).get(a + (e.content || "")))) {
                        for (f = 0; f < i.length; f++)
                          if (
                            ((u = i[f]),
                            u.getAttribute("content") === (e.content == null ? null : "" + e.content) &&
                              u.getAttribute("name") === (e.name == null ? null : e.name) &&
                              u.getAttribute("property") === (e.property == null ? null : e.property) &&
                              u.getAttribute("http-equiv") === (e.httpEquiv == null ? null : e.httpEquiv) &&
                              u.getAttribute("charset") === (e.charSet == null ? null : e.charSet))
                          ) {
                            i.splice(f, 1);
                            break t;
                          }
                      }
                      ((u = n.createElement(a)), Vl(u, a, e), n.head.appendChild(u));
                      break;
                    default:
                      throw Error(m(468, a));
                  }
                  ((u[Ll] = l), ql(u), (a = u));
                }
                l.stateNode = a;
              } else go(n, l.type, l.stateNode);
            else l.stateNode = ho(n, a, l.memoizedProps);
          else
            u !== a
              ? (u === null ? e.stateNode !== null && ((e = e.stateNode), e.parentNode.removeChild(e)) : u.count--,
                a === null ? go(n, l.type, l.stateNode) : ho(n, a, l.memoizedProps))
              : a === null && l.stateNode !== null && Dc(l, l.memoizedProps, e.memoizedProps);
        }
        break;
      case 27:
        (lt(t, l), tt(l), a & 512 && (Hl || e === null || Dt(e, e.return)), e !== null && a & 4 && Dc(l, l.memoizedProps, e.memoizedProps));
        break;
      case 5:
        if ((lt(t, l), tt(l), a & 512 && (Hl || e === null || Dt(e, e.return)), l.flags & 32)) {
          n = l.stateNode;
          try {
            Pe(n, "");
          } catch (B) {
            sl(l, l.return, B);
          }
        }
        (a & 4 && l.stateNode != null && ((n = l.memoizedProps), Dc(l, n, e !== null ? e.memoizedProps : n)), a & 1024 && (Uc = !0));
        break;
      case 6:
        if ((lt(t, l), tt(l), a & 4)) {
          if (l.stateNode === null) throw Error(m(162));
          ((a = l.memoizedProps), (e = l.stateNode));
          try {
            e.nodeValue = a;
          } catch (B) {
            sl(l, l.return, B);
          }
        }
        break;
      case 3:
        if (((qu = null), (n = At), (At = Hu(t.containerInfo)), lt(t, l), (At = n), tt(l), a & 4 && e !== null && e.memoizedState.isDehydrated))
          try {
            Oa(t.containerInfo);
          } catch (B) {
            sl(l, l.return, B);
          }
        Uc && ((Uc = !1), yr(l));
        break;
      case 4:
        ((a = At), (At = Hu(l.stateNode.containerInfo)), lt(t, l), tt(l), (At = a));
        break;
      case 12:
        (lt(t, l), tt(l));
        break;
      case 31:
        (lt(t, l), tt(l), a & 4 && ((a = l.updateQueue), a !== null && ((l.updateQueue = null), Su(l, a))));
        break;
      case 13:
        (lt(t, l),
          tt(l),
          l.child.flags & 8192 && (l.memoizedState !== null) != (e !== null && e.memoizedState !== null) && (zu = nt()),
          a & 4 && ((a = l.updateQueue), a !== null && ((l.updateQueue = null), Su(l, a))));
        break;
      case 22:
        n = l.memoizedState !== null;
        var s = e !== null && e.memoizedState !== null,
          g = Kt,
          b = Hl;
        if (((Kt = g || n), (Hl = b || s), lt(t, l), (Hl = b), (Kt = g), tt(l), a & 8192))
          l: for (
            t = l.stateNode, t._visibility = n ? t._visibility & -2 : t._visibility | 1, n && (e === null || s || Kt || Hl || Ze(l)), e = null, t = l;
            ;
          ) {
            if (t.tag === 5 || t.tag === 26) {
              if (e === null) {
                s = e = t;
                try {
                  if (((u = s.stateNode), n))
                    ((i = u.style), typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : (i.display = "none"));
                  else {
                    f = s.stateNode;
                    var N = s.memoizedProps.style,
                      v = N != null && N.hasOwnProperty("display") ? N.display : null;
                    f.style.display = v == null || typeof v == "boolean" ? "" : ("" + v).trim();
                  }
                } catch (B) {
                  sl(s, s.return, B);
                }
              }
            } else if (t.tag === 6) {
              if (e === null) {
                s = t;
                try {
                  s.stateNode.nodeValue = n ? "" : s.memoizedProps;
                } catch (B) {
                  sl(s, s.return, B);
                }
              }
            } else if (t.tag === 18) {
              if (e === null) {
                s = t;
                try {
                  var p = s.stateNode;
                  n ? no(p, !0) : no(s.stateNode, !1);
                } catch (B) {
                  sl(s, s.return, B);
                }
              }
            } else if (((t.tag !== 22 && t.tag !== 23) || t.memoizedState === null || t === l) && t.child !== null) {
              ((t.child.return = t), (t = t.child));
              continue;
            }
            if (t === l) break l;
            for (; t.sibling === null; ) {
              if (t.return === null || t.return === l) break l;
              (e === t && (e = null), (t = t.return));
            }
            (e === t && (e = null), (t.sibling.return = t.return), (t = t.sibling));
          }
        a & 4 && ((a = l.updateQueue), a !== null && ((e = a.retryQueue), e !== null && ((a.retryQueue = null), Su(l, e))));
        break;
      case 19:
        (lt(t, l), tt(l), a & 4 && ((a = l.updateQueue), a !== null && ((l.updateQueue = null), Su(l, a))));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        (lt(t, l), tt(l));
    }
  }
  function tt(l) {
    var t = l.flags;
    if (t & 2) {
      try {
        for (var e, a = l.return; a !== null; ) {
          if (ir(a)) {
            e = a;
            break;
          }
          a = a.return;
        }
        if (e == null) throw Error(m(160));
        switch (e.tag) {
          case 27:
            var n = e.stateNode,
              u = Bc(l);
            xu(l, u, n);
            break;
          case 5:
            var i = e.stateNode;
            e.flags & 32 && (Pe(i, ""), (e.flags &= -33));
            var f = Bc(l);
            xu(l, f, i);
            break;
          case 3:
          case 4:
            var s = e.stateNode.containerInfo,
              g = Bc(l);
            Cc(l, g, s);
            break;
          default:
            throw Error(m(161));
        }
      } catch (b) {
        sl(l, l.return, b);
      }
      l.flags &= -3;
    }
    t & 4096 && (l.flags &= -4097);
  }
  function yr(l) {
    if (l.subtreeFlags & 1024)
      for (l = l.child; l !== null; ) {
        var t = l;
        (yr(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), (l = l.sibling));
      }
  }
  function kt(l, t) {
    if (t.subtreeFlags & 8772) for (t = t.child; t !== null; ) (sr(l, t.alternate, t), (t = t.sibling));
  }
  function Ze(l) {
    for (l = l.child; l !== null; ) {
      var t = l;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          (oe(4, t, t.return), Ze(t));
          break;
        case 1:
          Dt(t, t.return);
          var e = t.stateNode;
          (typeof e.componentWillUnmount == "function" && nr(t, t.return, e), Ze(t));
          break;
        case 27:
          pn(t.stateNode);
        case 26:
        case 5:
          (Dt(t, t.return), Ze(t));
          break;
        case 22:
          t.memoizedState === null && Ze(t);
          break;
        case 30:
          Ze(t);
          break;
        default:
          Ze(t);
      }
      l = l.sibling;
    }
  }
  function $t(l, t, e) {
    for (e = e && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var a = t.alternate,
        n = l,
        u = t,
        i = u.flags;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          ($t(n, u, e), fn(4, u));
          break;
        case 1:
          if (($t(n, u, e), (a = u), (n = a.stateNode), typeof n.componentDidMount == "function"))
            try {
              n.componentDidMount();
            } catch (g) {
              sl(a, a.return, g);
            }
          if (((a = u), (n = a.updateQueue), n !== null)) {
            var f = a.stateNode;
            try {
              var s = n.shared.hiddenCallbacks;
              if (s !== null) for (n.shared.hiddenCallbacks = null, n = 0; n < s.length; n++) Ks(s[n], f);
            } catch (g) {
              sl(a, a.return, g);
            }
          }
          (e && i & 64 && ar(u), sn(u, u.return));
          break;
        case 27:
          cr(u);
        case 26:
        case 5:
          ($t(n, u, e), e && a === null && i & 4 && ur(u), sn(u, u.return));
          break;
        case 12:
          $t(n, u, e);
          break;
        case 31:
          ($t(n, u, e), e && i & 4 && or(n, u));
          break;
        case 13:
          ($t(n, u, e), e && i & 4 && mr(n, u));
          break;
        case 22:
          (u.memoizedState === null && $t(n, u, e), sn(u, u.return));
          break;
        case 30:
          break;
        default:
          $t(n, u, e);
      }
      t = t.sibling;
    }
  }
  function Hc(l, t) {
    var e = null;
    (l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (e = l.memoizedState.cachePool.pool),
      (l = null),
      t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool),
      l !== e && (l != null && l.refCount++, e != null && ka(e)));
  }
  function Rc(l, t) {
    ((l = null),
      t.alternate !== null && (l = t.alternate.memoizedState.cache),
      (t = t.memoizedState.cache),
      t !== l && (t.refCount++, l != null && ka(l)));
  }
  function Et(l, t, e, a) {
    if (t.subtreeFlags & 10256) for (t = t.child; t !== null; ) (gr(l, t, e, a), (t = t.sibling));
  }
  function gr(l, t, e, a) {
    var n = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        (Et(l, t, e, a), n & 2048 && fn(9, t));
        break;
      case 1:
        Et(l, t, e, a);
        break;
      case 3:
        (Et(l, t, e, a),
          n & 2048 &&
            ((l = null),
            t.alternate !== null && (l = t.alternate.memoizedState.cache),
            (t = t.memoizedState.cache),
            t !== l && (t.refCount++, l != null && ka(l))));
        break;
      case 12:
        if (n & 2048) {
          (Et(l, t, e, a), (l = t.stateNode));
          try {
            var u = t.memoizedProps,
              i = u.id,
              f = u.onPostCommit;
            typeof f == "function" && f(i, t.alternate === null ? "mount" : "update", l.passiveEffectDuration, -0);
          } catch (s) {
            sl(t, t.return, s);
          }
        } else Et(l, t, e, a);
        break;
      case 31:
        Et(l, t, e, a);
        break;
      case 13:
        Et(l, t, e, a);
        break;
      case 23:
        break;
      case 22:
        ((u = t.stateNode),
          (i = t.alternate),
          t.memoizedState !== null
            ? u._visibility & 2
              ? Et(l, t, e, a)
              : dn(l, t)
            : u._visibility & 2
              ? Et(l, t, e, a)
              : ((u._visibility |= 2), ba(l, t, e, a, (t.subtreeFlags & 10256) !== 0 || !1)),
          n & 2048 && Hc(i, t));
        break;
      case 24:
        (Et(l, t, e, a), n & 2048 && Rc(t.alternate, t));
        break;
      default:
        Et(l, t, e, a);
    }
  }
  function ba(l, t, e, a, n) {
    for (n = n && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child; t !== null; ) {
      var u = l,
        i = t,
        f = e,
        s = a,
        g = i.flags;
      switch (i.tag) {
        case 0:
        case 11:
        case 15:
          (ba(u, i, f, s, n), fn(8, i));
          break;
        case 23:
          break;
        case 22:
          var b = i.stateNode;
          (i.memoizedState !== null ? (b._visibility & 2 ? ba(u, i, f, s, n) : dn(u, i)) : ((b._visibility |= 2), ba(u, i, f, s, n)),
            n && g & 2048 && Hc(i.alternate, i));
          break;
        case 24:
          (ba(u, i, f, s, n), n && g & 2048 && Rc(i.alternate, i));
          break;
        default:
          ba(u, i, f, s, n);
      }
      t = t.sibling;
    }
  }
  function dn(l, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var e = l,
          a = t,
          n = a.flags;
        switch (a.tag) {
          case 22:
            (dn(e, a), n & 2048 && Hc(a.alternate, a));
            break;
          case 24:
            (dn(e, a), n & 2048 && Rc(a.alternate, a));
            break;
          default:
            dn(e, a);
        }
        t = t.sibling;
      }
  }
  var rn = 8192;
  function xa(l, t, e) {
    if (l.subtreeFlags & rn) for (l = l.child; l !== null; ) (vr(l, t, e), (l = l.sibling));
  }
  function vr(l, t, e) {
    switch (l.tag) {
      case 26:
        (xa(l, t, e), l.flags & rn && l.memoizedState !== null && ih(e, At, l.memoizedState, l.memoizedProps));
        break;
      case 5:
        xa(l, t, e);
        break;
      case 3:
      case 4:
        var a = At;
        ((At = Hu(l.stateNode.containerInfo)), xa(l, t, e), (At = a));
        break;
      case 22:
        l.memoizedState === null &&
          ((a = l.alternate), a !== null && a.memoizedState !== null ? ((a = rn), (rn = 16777216), xa(l, t, e), (rn = a)) : xa(l, t, e));
        break;
      default:
        xa(l, t, e);
    }
  }
  function pr(l) {
    var t = l.alternate;
    if (t !== null && ((l = t.child), l !== null)) {
      t.child = null;
      do ((t = l.sibling), (l.sibling = null), (l = t));
      while (l !== null);
    }
  }
  function on(l) {
    var t = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (t !== null)
        for (var e = 0; e < t.length; e++) {
          var a = t[e];
          ((Yl = a), xr(a, l));
        }
      pr(l);
    }
    if (l.subtreeFlags & 10256) for (l = l.child; l !== null; ) (br(l), (l = l.sibling));
  }
  function br(l) {
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        (on(l), l.flags & 2048 && oe(9, l, l.return));
        break;
      case 3:
        on(l);
        break;
      case 12:
        on(l);
        break;
      case 22:
        var t = l.stateNode;
        l.memoizedState !== null && t._visibility & 2 && (l.return === null || l.return.tag !== 13) ? ((t._visibility &= -3), Nu(l)) : on(l);
        break;
      default:
        on(l);
    }
  }
  function Nu(l) {
    var t = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (t !== null)
        for (var e = 0; e < t.length; e++) {
          var a = t[e];
          ((Yl = a), xr(a, l));
        }
      pr(l);
    }
    for (l = l.child; l !== null; ) {
      switch (((t = l), t.tag)) {
        case 0:
        case 11:
        case 15:
          (oe(8, t, t.return), Nu(t));
          break;
        case 22:
          ((e = t.stateNode), e._visibility & 2 && ((e._visibility &= -3), Nu(t)));
          break;
        default:
          Nu(t);
      }
      l = l.sibling;
    }
  }
  function xr(l, t) {
    for (; Yl !== null; ) {
      var e = Yl;
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          oe(8, e, t);
          break;
        case 23:
        case 22:
          if (e.memoizedState !== null && e.memoizedState.cachePool !== null) {
            var a = e.memoizedState.cachePool.pool;
            a != null && a.refCount++;
          }
          break;
        case 24:
          ka(e.memoizedState.cache);
      }
      if (((a = e.child), a !== null)) ((a.return = e), (Yl = a));
      else
        l: for (e = l; Yl !== null; ) {
          a = Yl;
          var n = a.sibling,
            u = a.return;
          if ((dr(a), a === e)) {
            Yl = null;
            break l;
          }
          if (n !== null) {
            ((n.return = u), (Yl = n));
            break l;
          }
          Yl = u;
        }
    }
  }
  var Sm = {
      getCacheForType: function (l) {
        var t = Ql(Bl),
          e = t.data.get(l);
        return (e === void 0 && ((e = l()), t.data.set(l, e)), e);
      },
      cacheSignal: function () {
        return Ql(Bl).controller.signal;
      },
    },
    Nm = typeof WeakMap == "function" ? WeakMap : Map,
    il = 0,
    yl = null,
    W = null,
    I = 0,
    fl = 0,
    rt = null,
    me = !1,
    Sa = !1,
    qc = !1,
    Wt = 0,
    Tl = 0,
    he = 0,
    Ve = 0,
    Yc = 0,
    ot = 0,
    Na = 0,
    mn = null,
    et = null,
    Gc = !1,
    zu = 0,
    Sr = 0,
    ju = 1 / 0,
    Tu = null,
    ye = null,
    Rl = 0,
    ge = null,
    za = null,
    Ft = 0,
    Lc = 0,
    Xc = null,
    Nr = null,
    hn = 0,
    Qc = null;
  function mt() {
    return (il & 2) !== 0 && I !== 0 ? I & -I : x.T !== null ? kc() : Yf();
  }
  function zr() {
    if (ot === 0)
      if ((I & 536870912) === 0 || ll) {
        var l = Cn;
        ((Cn <<= 1), (Cn & 3932160) === 0 && (Cn = 262144), (ot = l));
      } else ot = 536870912;
    return ((l = st.current), l !== null && (l.flags |= 32), ot);
  }
  function at(l, t, e) {
    (((l === yl && (fl === 2 || fl === 9)) || l.cancelPendingCommit !== null) && (ja(l, 0), ve(l, I, ot, !1)),
      Ua(l, e),
      ((il & 2) === 0 || l !== yl) && (l === yl && ((il & 2) === 0 && (Ve |= e), Tl === 4 && ve(l, I, ot, !1)), Bt(l)));
  }
  function jr(l, t, e) {
    if ((il & 6) !== 0) throw Error(m(327));
    var a = (!e && (t & 127) === 0 && (t & l.expiredLanes) === 0) || Ca(l, t),
      n = a ? Tm(l, t) : Vc(l, t, !0),
      u = a;
    do {
      if (n === 0) {
        Sa && !a && ve(l, t, 0, !1);
        break;
      } else {
        if (((e = l.current.alternate), u && !zm(e))) {
          ((n = Vc(l, t, !1)), (u = !1));
          continue;
        }
        if (n === 2) {
          if (((u = t), l.errorRecoveryDisabledLanes & u)) var i = 0;
          else ((i = l.pendingLanes & -536870913), (i = i !== 0 ? i : i & 536870912 ? 536870912 : 0));
          if (i !== 0) {
            t = i;
            l: {
              var f = l;
              n = mn;
              var s = f.current.memoizedState.isDehydrated;
              if ((s && (ja(f, i).flags |= 256), (i = Vc(f, i, !1)), i !== 2)) {
                if (qc && !s) {
                  ((f.errorRecoveryDisabledLanes |= u), (Ve |= u), (n = 4));
                  break l;
                }
                ((u = et), (et = n), u !== null && (et === null ? (et = u) : et.push.apply(et, u)));
              }
              n = i;
            }
            if (((u = !1), n !== 2)) continue;
          }
        }
        if (n === 1) {
          (ja(l, 0), ve(l, t, 0, !0));
          break;
        }
        l: {
          switch (((a = l), (u = n), u)) {
            case 0:
            case 1:
              throw Error(m(345));
            case 4:
              if ((t & 4194048) !== t) break;
            case 6:
              ve(a, t, ot, !me);
              break l;
            case 2:
              et = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(m(329));
          }
          if ((t & 62914560) === t && ((n = zu + 300 - nt()), 10 < n)) {
            if ((ve(a, t, ot, !me), Hn(a, 0, !0) !== 0)) break l;
            ((Ft = t), (a.timeoutHandle = to(Tr.bind(null, a, e, et, Tu, Gc, t, ot, Ve, Na, me, u, "Throttled", -0, 0), n)));
            break l;
          }
          Tr(a, e, et, Tu, Gc, t, ot, Ve, Na, me, u, null, -0, 0);
        }
      }
      break;
    } while (!0);
    Bt(l);
  }
  function Tr(l, t, e, a, n, u, i, f, s, g, b, N, v, p) {
    if (((l.timeoutHandle = -1), (N = t.subtreeFlags), N & 8192 || (N & 16785408) === 16785408)) {
      ((N = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: Rt,
      }),
        vr(t, u, N));
      var B = (u & 62914560) === u ? zu - nt() : (u & 4194048) === u ? Sr - nt() : 0;
      if (((B = ch(N, B)), B !== null)) {
        ((Ft = u), (l.cancelPendingCommit = B(Cr.bind(null, l, t, u, e, a, n, i, f, s, b, N, null, v, p))), ve(l, u, i, !g));
        return;
      }
    }
    Cr(l, t, u, e, a, n, i, f, s);
  }
  function zm(l) {
    for (var t = l; ; ) {
      var e = t.tag;
      if ((e === 0 || e === 11 || e === 15) && t.flags & 16384 && ((e = t.updateQueue), e !== null && ((e = e.stores), e !== null)))
        for (var a = 0; a < e.length; a++) {
          var n = e[a],
            u = n.getSnapshot;
          n = n.value;
          try {
            if (!ct(u(), n)) return !1;
          } catch {
            return !1;
          }
        }
      if (((e = t.child), t.subtreeFlags & 16384 && e !== null)) ((e.return = t), (t = e));
      else {
        if (t === l) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === l) return !0;
          t = t.return;
        }
        ((t.sibling.return = t.return), (t = t.sibling));
      }
    }
    return !0;
  }
  function ve(l, t, e, a) {
    ((t &= ~Yc), (t &= ~Ve), (l.suspendedLanes |= t), (l.pingedLanes &= ~t), a && (l.warmLanes |= t), (a = l.expirationTimes));
    for (var n = t; 0 < n; ) {
      var u = 31 - it(n),
        i = 1 << u;
      ((a[u] = -1), (n &= ~i));
    }
    e !== 0 && Hf(l, e, t);
  }
  function Au() {
    return (il & 6) === 0 ? (yn(0), !1) : !0;
  }
  function Zc() {
    if (W !== null) {
      if (fl === 0) var l = W.return;
      else ((l = W), (Lt = He = null), uc(l), (ha = null), (Wa = 0), (l = W));
      for (; l !== null; ) (er(l.alternate, l), (l = l.return));
      W = null;
    }
  }
  function ja(l, t) {
    var e = l.timeoutHandle;
    (e !== -1 && ((l.timeoutHandle = -1), Zm(e)),
      (e = l.cancelPendingCommit),
      e !== null && ((l.cancelPendingCommit = null), e()),
      (Ft = 0),
      Zc(),
      (yl = l),
      (W = e = Yt(l.current, null)),
      (I = t),
      (fl = 0),
      (rt = null),
      (me = !1),
      (Sa = Ca(l, t)),
      (qc = !1),
      (Na = ot = Yc = Ve = he = Tl = 0),
      (et = mn = null),
      (Gc = !1),
      (t & 8) !== 0 && (t |= t & 32));
    var a = l.entangledLanes;
    if (a !== 0)
      for (l = l.entanglements, a &= t; 0 < a; ) {
        var n = 31 - it(a),
          u = 1 << n;
        ((t |= l[n]), (a &= ~u));
      }
    return ((Wt = t), Jn(), e);
  }
  function Ar(l, t) {
    ((V = null),
      (x.H = nn),
      t === ma || t === tu
        ? ((t = Qs()), (fl = 3))
        : t === Ji
          ? ((t = Qs()), (fl = 4))
          : (fl = t === Sc ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1),
      (rt = t),
      W === null && ((Tl = 1), yu(l, vt(t, l.current))));
  }
  function Er() {
    var l = st.current;
    return l === null ? !0 : (I & 4194048) === I ? St === null : (I & 62914560) === I || (I & 536870912) !== 0 ? l === St : !1;
  }
  function _r() {
    var l = x.H;
    return ((x.H = nn), l === null ? nn : l);
  }
  function Mr() {
    var l = x.A;
    return ((x.A = Sm), l);
  }
  function Eu() {
    ((Tl = 4),
      me || ((I & 4194048) !== I && st.current !== null) || (Sa = !0),
      ((he & 134217727) === 0 && (Ve & 134217727) === 0) || yl === null || ve(yl, I, ot, !1));
  }
  function Vc(l, t, e) {
    var a = il;
    il |= 2;
    var n = _r(),
      u = Mr();
    ((yl !== l || I !== t) && ((Tu = null), ja(l, t)), (t = !1));
    var i = Tl;
    l: do
      try {
        if (fl !== 0 && W !== null) {
          var f = W,
            s = rt;
          switch (fl) {
            case 8:
              (Zc(), (i = 6));
              break l;
            case 3:
            case 2:
            case 9:
            case 6:
              st.current === null && (t = !0);
              var g = fl;
              if (((fl = 0), (rt = null), Ta(l, f, s, g), e && Sa)) {
                i = 0;
                break l;
              }
              break;
            default:
              ((g = fl), (fl = 0), (rt = null), Ta(l, f, s, g));
          }
        }
        (jm(), (i = Tl));
        break;
      } catch (b) {
        Ar(l, b);
      }
    while (!0);
    return (t && l.shellSuspendCounter++, (Lt = He = null), (il = a), (x.H = n), (x.A = u), W === null && ((yl = null), (I = 0), Jn()), i);
  }
  function jm() {
    for (; W !== null; ) Or(W);
  }
  function Tm(l, t) {
    var e = il;
    il |= 2;
    var a = _r(),
      n = Mr();
    yl !== l || I !== t ? ((Tu = null), (ju = nt() + 500), ja(l, t)) : (Sa = Ca(l, t));
    l: do
      try {
        if (fl !== 0 && W !== null) {
          t = W;
          var u = rt;
          t: switch (fl) {
            case 1:
              ((fl = 0), (rt = null), Ta(l, t, u, 1));
              break;
            case 2:
            case 9:
              if (Ls(u)) {
                ((fl = 0), (rt = null), Dr(t));
                break;
              }
              ((t = function () {
                ((fl !== 2 && fl !== 9) || yl !== l || (fl = 7), Bt(l));
              }),
                u.then(t, t));
              break l;
            case 3:
              fl = 7;
              break l;
            case 4:
              fl = 5;
              break l;
            case 7:
              Ls(u) ? ((fl = 0), (rt = null), Dr(t)) : ((fl = 0), (rt = null), Ta(l, t, u, 7));
              break;
            case 5:
              var i = null;
              switch (W.tag) {
                case 26:
                  i = W.memoizedState;
                case 5:
                case 27:
                  var f = W;
                  if (i ? vo(i) : f.stateNode.complete) {
                    ((fl = 0), (rt = null));
                    var s = f.sibling;
                    if (s !== null) W = s;
                    else {
                      var g = f.return;
                      g !== null ? ((W = g), _u(g)) : (W = null);
                    }
                    break t;
                  }
              }
              ((fl = 0), (rt = null), Ta(l, t, u, 5));
              break;
            case 6:
              ((fl = 0), (rt = null), Ta(l, t, u, 6));
              break;
            case 8:
              (Zc(), (Tl = 6));
              break l;
            default:
              throw Error(m(462));
          }
        }
        Am();
        break;
      } catch (b) {
        Ar(l, b);
      }
    while (!0);
    return ((Lt = He = null), (x.H = a), (x.A = n), (il = e), W !== null ? 0 : ((yl = null), (I = 0), Jn(), Tl));
  }
  function Am() {
    for (; W !== null && !$o(); ) Or(W);
  }
  function Or(l) {
    var t = lr(l.alternate, l, Wt);
    ((l.memoizedProps = l.pendingProps), t === null ? _u(l) : (W = t));
  }
  function Dr(l) {
    var t = l,
      e = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = kd(e, t, t.pendingProps, t.type, void 0, I);
        break;
      case 11:
        t = kd(e, t, t.pendingProps, t.type.render, t.ref, I);
        break;
      case 5:
        uc(t);
      default:
        (er(e, t), (t = W = Ms(t, Wt)), (t = lr(e, t, Wt)));
    }
    ((l.memoizedProps = l.pendingProps), t === null ? _u(l) : (W = t));
  }
  function Ta(l, t, e, a) {
    ((Lt = He = null), uc(t), (ha = null), (Wa = 0));
    var n = t.return;
    try {
      if (hm(l, n, t, e, I)) {
        ((Tl = 1), yu(l, vt(e, l.current)), (W = null));
        return;
      }
    } catch (u) {
      if (n !== null) throw ((W = n), u);
      ((Tl = 1), yu(l, vt(e, l.current)), (W = null));
      return;
    }
    t.flags & 32768
      ? (ll || a === 1
          ? (l = !0)
          : Sa || (I & 536870912) !== 0
            ? (l = !1)
            : ((me = l = !0), (a === 2 || a === 9 || a === 3 || a === 6) && ((a = st.current), a !== null && a.tag === 13 && (a.flags |= 16384))),
        Br(t, l))
      : _u(t);
  }
  function _u(l) {
    var t = l;
    do {
      if ((t.flags & 32768) !== 0) {
        Br(t, me);
        return;
      }
      l = t.return;
      var e = vm(t.alternate, t, Wt);
      if (e !== null) {
        W = e;
        return;
      }
      if (((t = t.sibling), t !== null)) {
        W = t;
        return;
      }
      W = t = l;
    } while (t !== null);
    Tl === 0 && (Tl = 5);
  }
  function Br(l, t) {
    do {
      var e = pm(l.alternate, l);
      if (e !== null) {
        ((e.flags &= 32767), (W = e));
        return;
      }
      if (((e = l.return), e !== null && ((e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null)), !t && ((l = l.sibling), l !== null))) {
        W = l;
        return;
      }
      W = l = e;
    } while (l !== null);
    ((Tl = 6), (W = null));
  }
  function Cr(l, t, e, a, n, u, i, f, s) {
    l.cancelPendingCommit = null;
    do Mu();
    while (Rl !== 0);
    if ((il & 6) !== 0) throw Error(m(327));
    if (t !== null) {
      if (t === l.current) throw Error(m(177));
      if (
        ((u = t.lanes | t.childLanes),
        (u |= Bi),
        u0(l, e, u, i, f, s),
        l === yl && ((W = yl = null), (I = 0)),
        (za = t),
        (ge = l),
        (Ft = e),
        (Lc = u),
        (Xc = n),
        (Nr = a),
        (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
          ? ((l.callbackNode = null),
            (l.callbackPriority = 0),
            Om(Dn, function () {
              return (Yr(), null);
            }))
          : ((l.callbackNode = null), (l.callbackPriority = 0)),
        (a = (t.flags & 13878) !== 0),
        (t.subtreeFlags & 13878) !== 0 || a)
      ) {
        ((a = x.T), (x.T = null), (n = _.p), (_.p = 2), (i = il), (il |= 4));
        try {
          bm(l, t, e);
        } finally {
          ((il = i), (_.p = n), (x.T = a));
        }
      }
      ((Rl = 1), Ur(), Hr(), Rr());
    }
  }
  function Ur() {
    if (Rl === 1) {
      Rl = 0;
      var l = ge,
        t = za,
        e = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || e) {
        ((e = x.T), (x.T = null));
        var a = _.p;
        _.p = 2;
        var n = il;
        il |= 4;
        try {
          hr(t, l);
          var u = ef,
            i = xs(l.containerInfo),
            f = u.focusedElem,
            s = u.selectionRange;
          if (i !== f && f && f.ownerDocument && bs(f.ownerDocument.documentElement, f)) {
            if (s !== null && Ei(f)) {
              var g = s.start,
                b = s.end;
              if ((b === void 0 && (b = g), "selectionStart" in f)) ((f.selectionStart = g), (f.selectionEnd = Math.min(b, f.value.length)));
              else {
                var N = f.ownerDocument || document,
                  v = (N && N.defaultView) || window;
                if (v.getSelection) {
                  var p = v.getSelection(),
                    B = f.textContent.length,
                    G = Math.min(s.start, B),
                    ml = s.end === void 0 ? G : Math.min(s.end, B);
                  !p.extend && G > ml && ((i = ml), (ml = G), (G = i));
                  var h = ps(f, G),
                    d = ps(f, ml);
                  if (
                    h &&
                    d &&
                    (p.rangeCount !== 1 ||
                      p.anchorNode !== h.node ||
                      p.anchorOffset !== h.offset ||
                      p.focusNode !== d.node ||
                      p.focusOffset !== d.offset)
                  ) {
                    var y = N.createRange();
                    (y.setStart(h.node, h.offset),
                      p.removeAllRanges(),
                      G > ml ? (p.addRange(y), p.extend(d.node, d.offset)) : (y.setEnd(d.node, d.offset), p.addRange(y)));
                  }
                }
              }
            }
            for (N = [], p = f; (p = p.parentNode); ) p.nodeType === 1 && N.push({ element: p, left: p.scrollLeft, top: p.scrollTop });
            for (typeof f.focus == "function" && f.focus(), f = 0; f < N.length; f++) {
              var S = N[f];
              ((S.element.scrollLeft = S.left), (S.element.scrollTop = S.top));
            }
          }
          ((Xu = !!tf), (ef = tf = null));
        } finally {
          ((il = n), (_.p = a), (x.T = e));
        }
      }
      ((l.current = t), (Rl = 2));
    }
  }
  function Hr() {
    if (Rl === 2) {
      Rl = 0;
      var l = ge,
        t = za,
        e = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || e) {
        ((e = x.T), (x.T = null));
        var a = _.p;
        _.p = 2;
        var n = il;
        il |= 4;
        try {
          sr(l, t.alternate, t);
        } finally {
          ((il = n), (_.p = a), (x.T = e));
        }
      }
      Rl = 3;
    }
  }
  function Rr() {
    if (Rl === 4 || Rl === 3) {
      ((Rl = 0), Wo());
      var l = ge,
        t = za,
        e = Ft,
        a = Nr;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (Rl = 5) : ((Rl = 0), (za = ge = null), qr(l, l.pendingLanes));
      var n = l.pendingLanes;
      if ((n === 0 && (ye = null), fi(e), (t = t.stateNode), ut && typeof ut.onCommitFiberRoot == "function"))
        try {
          ut.onCommitFiberRoot(Ba, t, void 0, (t.current.flags & 128) === 128);
        } catch {}
      if (a !== null) {
        ((t = x.T), (n = _.p), (_.p = 2), (x.T = null));
        try {
          for (var u = l.onRecoverableError, i = 0; i < a.length; i++) {
            var f = a[i];
            u(f.value, { componentStack: f.stack });
          }
        } finally {
          ((x.T = t), (_.p = n));
        }
      }
      ((Ft & 3) !== 0 && Mu(),
        Bt(l),
        (n = l.pendingLanes),
        (e & 261930) !== 0 && (n & 42) !== 0 ? (l === Qc ? hn++ : ((hn = 0), (Qc = l))) : (hn = 0),
        yn(0));
    }
  }
  function qr(l, t) {
    (l.pooledCacheLanes &= t) === 0 && ((t = l.pooledCache), t != null && ((l.pooledCache = null), ka(t)));
  }
  function Mu() {
    return (Ur(), Hr(), Rr(), Yr());
  }
  function Yr() {
    if (Rl !== 5) return !1;
    var l = ge,
      t = Lc;
    Lc = 0;
    var e = fi(Ft),
      a = x.T,
      n = _.p;
    try {
      ((_.p = 32 > e ? 32 : e), (x.T = null), (e = Xc), (Xc = null));
      var u = ge,
        i = Ft;
      if (((Rl = 0), (za = ge = null), (Ft = 0), (il & 6) !== 0)) throw Error(m(331));
      var f = il;
      if (((il |= 4), br(u.current), gr(u, u.current, i, e), (il = f), yn(0, !1), ut && typeof ut.onPostCommitFiberRoot == "function"))
        try {
          ut.onPostCommitFiberRoot(Ba, u);
        } catch {}
      return !0;
    } finally {
      ((_.p = n), (x.T = a), qr(l, t));
    }
  }
  function Gr(l, t, e) {
    ((t = vt(e, t)), (t = xc(l.stateNode, t, 2)), (l = se(l, t, 2)), l !== null && (Ua(l, 2), Bt(l)));
  }
  function sl(l, t, e) {
    if (l.tag === 3) Gr(l, l, e);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          Gr(t, l, e);
          break;
        } else if (t.tag === 1) {
          var a = t.stateNode;
          if (typeof t.type.getDerivedStateFromError == "function" || (typeof a.componentDidCatch == "function" && (ye === null || !ye.has(a)))) {
            ((l = vt(e, l)), (e = Ld(2)), (a = se(t, e, 2)), a !== null && (Xd(e, a, t, l), Ua(a, 2), Bt(a)));
            break;
          }
        }
        t = t.return;
      }
  }
  function wc(l, t, e) {
    var a = l.pingCache;
    if (a === null) {
      a = l.pingCache = new Nm();
      var n = new Set();
      a.set(t, n);
    } else ((n = a.get(t)), n === void 0 && ((n = new Set()), a.set(t, n)));
    n.has(e) || ((qc = !0), n.add(e), (l = Em.bind(null, l, t, e)), t.then(l, l));
  }
  function Em(l, t, e) {
    var a = l.pingCache;
    (a !== null && a.delete(t),
      (l.pingedLanes |= l.suspendedLanes & e),
      (l.warmLanes &= ~e),
      yl === l &&
        (I & e) === e &&
        (Tl === 4 || (Tl === 3 && (I & 62914560) === I && 300 > nt() - zu) ? (il & 2) === 0 && ja(l, 0) : (Yc |= e), Na === I && (Na = 0)),
      Bt(l));
  }
  function Lr(l, t) {
    (t === 0 && (t = Uf()), (l = Be(l, t)), l !== null && (Ua(l, t), Bt(l)));
  }
  function _m(l) {
    var t = l.memoizedState,
      e = 0;
    (t !== null && (e = t.retryLane), Lr(l, e));
  }
  function Mm(l, t) {
    var e = 0;
    switch (l.tag) {
      case 31:
      case 13:
        var a = l.stateNode,
          n = l.memoizedState;
        n !== null && (e = n.retryLane);
        break;
      case 19:
        a = l.stateNode;
        break;
      case 22:
        a = l.stateNode._retryCache;
        break;
      default:
        throw Error(m(314));
    }
    (a !== null && a.delete(t), Lr(l, e));
  }
  function Om(l, t) {
    return ni(l, t);
  }
  var Ou = null,
    Aa = null,
    Kc = !1,
    Du = !1,
    Jc = !1,
    pe = 0;
  function Bt(l) {
    (l !== Aa && l.next === null && (Aa === null ? (Ou = Aa = l) : (Aa = Aa.next = l)), (Du = !0), Kc || ((Kc = !0), Bm()));
  }
  function yn(l, t) {
    if (!Jc && Du) {
      Jc = !0;
      do
        for (var e = !1, a = Ou; a !== null; ) {
          if (l !== 0) {
            var n = a.pendingLanes;
            if (n === 0) var u = 0;
            else {
              var i = a.suspendedLanes,
                f = a.pingedLanes;
              ((u = (1 << (31 - it(42 | l) + 1)) - 1), (u &= n & ~(i & ~f)), (u = u & 201326741 ? (u & 201326741) | 1 : u ? u | 2 : 0));
            }
            u !== 0 && ((e = !0), Vr(a, u));
          } else
            ((u = I),
              (u = Hn(a, a === yl ? u : 0, a.cancelPendingCommit !== null || a.timeoutHandle !== -1)),
              (u & 3) === 0 || Ca(a, u) || ((e = !0), Vr(a, u)));
          a = a.next;
        }
      while (e);
      Jc = !1;
    }
  }
  function Dm() {
    Xr();
  }
  function Xr() {
    Du = Kc = !1;
    var l = 0;
    pe !== 0 && Qm() && (l = pe);
    for (var t = nt(), e = null, a = Ou; a !== null; ) {
      var n = a.next,
        u = Qr(a, t);
      (u === 0 ? ((a.next = null), e === null ? (Ou = n) : (e.next = n), n === null && (Aa = e)) : ((e = a), (l !== 0 || (u & 3) !== 0) && (Du = !0)),
        (a = n));
    }
    ((Rl !== 0 && Rl !== 5) || yn(l), pe !== 0 && (pe = 0));
  }
  function Qr(l, t) {
    for (var e = l.suspendedLanes, a = l.pingedLanes, n = l.expirationTimes, u = l.pendingLanes & -62914561; 0 < u; ) {
      var i = 31 - it(u),
        f = 1 << i,
        s = n[i];
      (s === -1 ? ((f & e) === 0 || (f & a) !== 0) && (n[i] = n0(f, t)) : s <= t && (l.expiredLanes |= f), (u &= ~f));
    }
    if (
      ((t = yl),
      (e = I),
      (e = Hn(l, l === t ? e : 0, l.cancelPendingCommit !== null || l.timeoutHandle !== -1)),
      (a = l.callbackNode),
      e === 0 || (l === t && (fl === 2 || fl === 9)) || l.cancelPendingCommit !== null)
    )
      return (a !== null && a !== null && ui(a), (l.callbackNode = null), (l.callbackPriority = 0));
    if ((e & 3) === 0 || Ca(l, e)) {
      if (((t = e & -e), t === l.callbackPriority)) return t;
      switch ((a !== null && ui(a), fi(e))) {
        case 2:
        case 8:
          e = Bf;
          break;
        case 32:
          e = Dn;
          break;
        case 268435456:
          e = Cf;
          break;
        default:
          e = Dn;
      }
      return ((a = Zr.bind(null, l)), (e = ni(e, a)), (l.callbackPriority = t), (l.callbackNode = e), t);
    }
    return (a !== null && a !== null && ui(a), (l.callbackPriority = 2), (l.callbackNode = null), 2);
  }
  function Zr(l, t) {
    if (Rl !== 0 && Rl !== 5) return ((l.callbackNode = null), (l.callbackPriority = 0), null);
    var e = l.callbackNode;
    if (Mu() && l.callbackNode !== e) return null;
    var a = I;
    return (
      (a = Hn(l, l === yl ? a : 0, l.cancelPendingCommit !== null || l.timeoutHandle !== -1)),
      a === 0 ? null : (jr(l, a, t), Qr(l, nt()), l.callbackNode != null && l.callbackNode === e ? Zr.bind(null, l) : null)
    );
  }
  function Vr(l, t) {
    if (Mu()) return null;
    jr(l, t, !0);
  }
  function Bm() {
    Vm(function () {
      (il & 6) !== 0 ? ni(Df, Dm) : Xr();
    });
  }
  function kc() {
    if (pe === 0) {
      var l = ra;
      (l === 0 && ((l = Bn), (Bn <<= 1), (Bn & 261888) === 0 && (Bn = 256)), (pe = l));
    }
    return pe;
  }
  function wr(l) {
    return l == null || typeof l == "symbol" || typeof l == "boolean" ? null : typeof l == "function" ? l : Gn("" + l);
  }
  function Kr(l, t) {
    var e = t.ownerDocument.createElement("input");
    return (
      (e.name = t.name),
      (e.value = t.value),
      l.id && e.setAttribute("form", l.id),
      t.parentNode.insertBefore(e, t),
      (l = new FormData(l)),
      e.parentNode.removeChild(e),
      l
    );
  }
  function Cm(l, t, e, a, n) {
    if (t === "submit" && e && e.stateNode === n) {
      var u = wr((n[Fl] || null).action),
        i = a.submitter;
      i && ((t = (t = i[Fl] || null) ? wr(t.formAction) : i.getAttribute("formAction")), t !== null && ((u = t), (i = null)));
      var f = new Zn("action", "action", null, a, n);
      l.push({
        event: f,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (a.defaultPrevented) {
                if (pe !== 0) {
                  var s = i ? Kr(n, i) : new FormData(n);
                  hc(e, { pending: !0, data: s, method: n.method, action: u }, null, s);
                }
              } else
                typeof u == "function" &&
                  (f.preventDefault(), (s = i ? Kr(n, i) : new FormData(n)), hc(e, { pending: !0, data: s, method: n.method, action: u }, u, s));
            },
            currentTarget: n,
          },
        ],
      });
    }
  }
  for (var $c = 0; $c < Di.length; $c++) {
    var Wc = Di[$c],
      Um = Wc.toLowerCase(),
      Hm = Wc[0].toUpperCase() + Wc.slice(1);
    Tt(Um, "on" + Hm);
  }
  (Tt(zs, "onAnimationEnd"),
    Tt(js, "onAnimationIteration"),
    Tt(Ts, "onAnimationStart"),
    Tt("dblclick", "onDoubleClick"),
    Tt("focusin", "onFocus"),
    Tt("focusout", "onBlur"),
    Tt(F0, "onTransitionRun"),
    Tt(I0, "onTransitionStart"),
    Tt(P0, "onTransitionCancel"),
    Tt(As, "onTransitionEnd"),
    Fe("onMouseEnter", ["mouseout", "mouseover"]),
    Fe("onMouseLeave", ["mouseout", "mouseover"]),
    Fe("onPointerEnter", ["pointerout", "pointerover"]),
    Fe("onPointerLeave", ["pointerout", "pointerover"]),
    _e("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")),
    _e("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),
    _e("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    _e("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")),
    _e("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")),
    _e("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" ")));
  var gn =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " "
      ),
    Rm = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(gn));
  function Jr(l, t) {
    t = (t & 4) !== 0;
    for (var e = 0; e < l.length; e++) {
      var a = l[e],
        n = a.event;
      a = a.listeners;
      l: {
        var u = void 0;
        if (t)
          for (var i = a.length - 1; 0 <= i; i--) {
            var f = a[i],
              s = f.instance,
              g = f.currentTarget;
            if (((f = f.listener), s !== u && n.isPropagationStopped())) break l;
            ((u = f), (n.currentTarget = g));
            try {
              u(n);
            } catch (b) {
              Kn(b);
            }
            ((n.currentTarget = null), (u = s));
          }
        else
          for (i = 0; i < a.length; i++) {
            if (((f = a[i]), (s = f.instance), (g = f.currentTarget), (f = f.listener), s !== u && n.isPropagationStopped())) break l;
            ((u = f), (n.currentTarget = g));
            try {
              u(n);
            } catch (b) {
              Kn(b);
            }
            ((n.currentTarget = null), (u = s));
          }
      }
    }
  }
  function F(l, t) {
    var e = t[si];
    e === void 0 && (e = t[si] = new Set());
    var a = l + "__bubble";
    e.has(a) || (kr(t, l, 2, !1), e.add(a));
  }
  function Fc(l, t, e) {
    var a = 0;
    (t && (a |= 4), kr(e, l, a, t));
  }
  var Bu = "_reactListening" + Math.random().toString(36).slice(2);
  function Ic(l) {
    if (!l[Bu]) {
      ((l[Bu] = !0),
        Xf.forEach(function (e) {
          e !== "selectionchange" && (Rm.has(e) || Fc(e, !1, l), Fc(e, !0, l));
        }));
      var t = l.nodeType === 9 ? l : l.ownerDocument;
      t === null || t[Bu] || ((t[Bu] = !0), Fc("selectionchange", !1, t));
    }
  }
  function kr(l, t, e, a) {
    switch (jo(t)) {
      case 2:
        var n = dh;
        break;
      case 8:
        n = rh;
        break;
      default:
        n = hf;
    }
    ((e = n.bind(null, t, e, l)),
      (n = void 0),
      !pi || (t !== "touchstart" && t !== "touchmove" && t !== "wheel") || (n = !0),
      a
        ? n !== void 0
          ? l.addEventListener(t, e, { capture: !0, passive: n })
          : l.addEventListener(t, e, !0)
        : n !== void 0
          ? l.addEventListener(t, e, { passive: n })
          : l.addEventListener(t, e, !1));
  }
  function Pc(l, t, e, a, n) {
    var u = a;
    if ((t & 1) === 0 && (t & 2) === 0 && a !== null)
      l: for (;;) {
        if (a === null) return;
        var i = a.tag;
        if (i === 3 || i === 4) {
          var f = a.stateNode.containerInfo;
          if (f === n) break;
          if (i === 4)
            for (i = a.return; i !== null; ) {
              var s = i.tag;
              if ((s === 3 || s === 4) && i.stateNode.containerInfo === n) return;
              i = i.return;
            }
          for (; f !== null; ) {
            if (((i = ke(f)), i === null)) return;
            if (((s = i.tag), s === 5 || s === 6 || s === 26 || s === 27)) {
              a = u = i;
              continue l;
            }
            f = f.parentNode;
          }
        }
        a = a.return;
      }
    Pf(function () {
      var g = u,
        b = gi(e),
        N = [];
      l: {
        var v = Es.get(l);
        if (v !== void 0) {
          var p = Zn,
            B = l;
          switch (l) {
            case "keypress":
              if (Xn(e) === 0) break l;
            case "keydown":
            case "keyup":
              p = M0;
              break;
            case "focusin":
              ((B = "focus"), (p = Ni));
              break;
            case "focusout":
              ((B = "blur"), (p = Ni));
              break;
            case "beforeblur":
            case "afterblur":
              p = Ni;
              break;
            case "click":
              if (e.button === 2) break l;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              p = es;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              p = v0;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              p = B0;
              break;
            case zs:
            case js:
            case Ts:
              p = x0;
              break;
            case As:
              p = U0;
              break;
            case "scroll":
            case "scrollend":
              p = y0;
              break;
            case "wheel":
              p = R0;
              break;
            case "copy":
            case "cut":
            case "paste":
              p = N0;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              p = ns;
              break;
            case "toggle":
            case "beforetoggle":
              p = Y0;
          }
          var G = (t & 4) !== 0,
            ml = !G && (l === "scroll" || l === "scrollend"),
            h = G ? (v !== null ? v + "Capture" : null) : v;
          G = [];
          for (var d = g, y; d !== null; ) {
            var S = d;
            if (
              ((y = S.stateNode),
              (S = S.tag),
              (S !== 5 && S !== 26 && S !== 27) || y === null || h === null || ((S = qa(d, h)), S != null && G.push(vn(d, S, y))),
              ml)
            )
              break;
            d = d.return;
          }
          0 < G.length && ((v = new p(v, B, null, e, b)), N.push({ event: v, listeners: G }));
        }
      }
      if ((t & 7) === 0) {
        l: {
          if (
            ((v = l === "mouseover" || l === "pointerover"),
            (p = l === "mouseout" || l === "pointerout"),
            v && e !== yi && (B = e.relatedTarget || e.fromElement) && (ke(B) || B[Je]))
          )
            break l;
          if (
            (p || v) &&
            ((v = b.window === b ? b : (v = b.ownerDocument) ? v.defaultView || v.parentWindow : window),
            p
              ? ((B = e.relatedTarget || e.toElement),
                (p = g),
                (B = B ? ke(B) : null),
                B !== null && ((ml = O(B)), (G = B.tag), B !== ml || (G !== 5 && G !== 27 && G !== 6)) && (B = null))
              : ((p = null), (B = g)),
            p !== B)
          ) {
            if (
              ((G = es),
              (S = "onMouseLeave"),
              (h = "onMouseEnter"),
              (d = "mouse"),
              (l === "pointerout" || l === "pointerover") && ((G = ns), (S = "onPointerLeave"), (h = "onPointerEnter"), (d = "pointer")),
              (ml = p == null ? v : Ra(p)),
              (y = B == null ? v : Ra(B)),
              (v = new G(S, d + "leave", p, e, b)),
              (v.target = ml),
              (v.relatedTarget = y),
              (S = null),
              ke(b) === g && ((G = new G(h, d + "enter", B, e, b)), (G.target = y), (G.relatedTarget = ml), (S = G)),
              (ml = S),
              p && B)
            )
              t: {
                for (G = qm, h = p, d = B, y = 0, S = h; S; S = G(S)) y++;
                S = 0;
                for (var Y = d; Y; Y = G(Y)) S++;
                for (; 0 < y - S; ) ((h = G(h)), y--);
                for (; 0 < S - y; ) ((d = G(d)), S--);
                for (; y--; ) {
                  if (h === d || (d !== null && h === d.alternate)) {
                    G = h;
                    break t;
                  }
                  ((h = G(h)), (d = G(d)));
                }
                G = null;
              }
            else G = null;
            (p !== null && $r(N, v, p, G, !1), B !== null && ml !== null && $r(N, ml, B, G, !0));
          }
        }
        l: {
          if (((v = g ? Ra(g) : window), (p = v.nodeName && v.nodeName.toLowerCase()), p === "select" || (p === "input" && v.type === "file")))
            var el = os;
          else if (ds(v))
            if (ms) el = k0;
            else {
              el = K0;
              var U = w0;
            }
          else
            ((p = v.nodeName),
              !p || p.toLowerCase() !== "input" || (v.type !== "checkbox" && v.type !== "radio") ? g && hi(g.elementType) && (el = os) : (el = J0));
          if (el && (el = el(l, g))) {
            rs(N, el, e, b);
            break l;
          }
          (U && U(l, v, g), l === "focusout" && g && v.type === "number" && g.memoizedProps.value != null && mi(v, "number", v.value));
        }
        switch (((U = g ? Ra(g) : window), l)) {
          case "focusin":
            (ds(U) || U.contentEditable === "true") && ((aa = U), (_i = g), (wa = null));
            break;
          case "focusout":
            wa = _i = aa = null;
            break;
          case "mousedown":
            Mi = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ((Mi = !1), Ss(N, e, b));
            break;
          case "selectionchange":
            if (W0) break;
          case "keydown":
          case "keyup":
            Ss(N, e, b);
        }
        var K;
        if (ji)
          l: {
            switch (l) {
              case "compositionstart":
                var P = "onCompositionStart";
                break l;
              case "compositionend":
                P = "onCompositionEnd";
                break l;
              case "compositionupdate":
                P = "onCompositionUpdate";
                break l;
            }
            P = void 0;
          }
        else ea ? fs(l, e) && (P = "onCompositionEnd") : l === "keydown" && e.keyCode === 229 && (P = "onCompositionStart");
        (P &&
          (us &&
            e.locale !== "ko" &&
            (ea || P !== "onCompositionStart"
              ? P === "onCompositionEnd" && ea && (K = ls())
              : ((ee = b), (bi = "value" in ee ? ee.value : ee.textContent), (ea = !0))),
          (U = Cu(g, P)),
          0 < U.length &&
            ((P = new as(P, l, null, e, b)), N.push({ event: P, listeners: U }), K ? (P.data = K) : ((K = ss(e)), K !== null && (P.data = K)))),
          (K = L0 ? X0(l, e) : Q0(l, e)) &&
            ((P = Cu(g, "onBeforeInput")),
            0 < P.length && ((U = new as("onBeforeInput", "beforeinput", null, e, b)), N.push({ event: U, listeners: P }), (U.data = K))),
          Cm(N, l, g, e, b));
      }
      Jr(N, t);
    });
  }
  function vn(l, t, e) {
    return { instance: l, listener: t, currentTarget: e };
  }
  function Cu(l, t) {
    for (var e = t + "Capture", a = []; l !== null; ) {
      var n = l,
        u = n.stateNode;
      if (
        ((n = n.tag),
        (n !== 5 && n !== 26 && n !== 27) ||
          u === null ||
          ((n = qa(l, e)), n != null && a.unshift(vn(l, n, u)), (n = qa(l, t)), n != null && a.push(vn(l, n, u))),
        l.tag === 3)
      )
        return a;
      l = l.return;
    }
    return [];
  }
  function qm(l) {
    if (l === null) return null;
    do l = l.return;
    while (l && l.tag !== 5 && l.tag !== 27);
    return l || null;
  }
  function $r(l, t, e, a, n) {
    for (var u = t._reactName, i = []; e !== null && e !== a; ) {
      var f = e,
        s = f.alternate,
        g = f.stateNode;
      if (((f = f.tag), s !== null && s === a)) break;
      ((f !== 5 && f !== 26 && f !== 27) ||
        g === null ||
        ((s = g), n ? ((g = qa(e, u)), g != null && i.unshift(vn(e, g, s))) : n || ((g = qa(e, u)), g != null && i.push(vn(e, g, s)))),
        (e = e.return));
    }
    i.length !== 0 && l.push({ event: t, listeners: i });
  }
  var Ym = /\r\n?/g,
    Gm = /\u0000|\uFFFD/g;
  function Wr(l) {
    return (typeof l == "string" ? l : "" + l)
      .replace(
        Ym,
        `
`
      )
      .replace(Gm, "");
  }
  function Fr(l, t) {
    return ((t = Wr(t)), Wr(l) === t);
  }
  function ol(l, t, e, a, n, u) {
    switch (e) {
      case "children":
        typeof a == "string"
          ? t === "body" || (t === "textarea" && a === "") || Pe(l, a)
          : (typeof a == "number" || typeof a == "bigint") && t !== "body" && Pe(l, "" + a);
        break;
      case "className":
        qn(l, "class", a);
        break;
      case "tabIndex":
        qn(l, "tabindex", a);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        qn(l, e, a);
        break;
      case "style":
        Ff(l, a, u);
        break;
      case "data":
        if (t !== "object") {
          qn(l, "data", a);
          break;
        }
      case "src":
      case "href":
        if (a === "" && (t !== "a" || e !== "href")) {
          l.removeAttribute(e);
          break;
        }
        if (a == null || typeof a == "function" || typeof a == "symbol" || typeof a == "boolean") {
          l.removeAttribute(e);
          break;
        }
        ((a = Gn("" + a)), l.setAttribute(e, a));
        break;
      case "action":
      case "formAction":
        if (typeof a == "function") {
          l.setAttribute(
            e,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof u == "function" &&
            (e === "formAction"
              ? (t !== "input" && ol(l, t, "name", n.name, n, null),
                ol(l, t, "formEncType", n.formEncType, n, null),
                ol(l, t, "formMethod", n.formMethod, n, null),
                ol(l, t, "formTarget", n.formTarget, n, null))
              : (ol(l, t, "encType", n.encType, n, null), ol(l, t, "method", n.method, n, null), ol(l, t, "target", n.target, n, null)));
        if (a == null || typeof a == "symbol" || typeof a == "boolean") {
          l.removeAttribute(e);
          break;
        }
        ((a = Gn("" + a)), l.setAttribute(e, a));
        break;
      case "onClick":
        a != null && (l.onclick = Rt);
        break;
      case "onScroll":
        a != null && F("scroll", l);
        break;
      case "onScrollEnd":
        a != null && F("scrollend", l);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a)) throw Error(m(61));
          if (((e = a.__html), e != null)) {
            if (n.children != null) throw Error(m(60));
            l.innerHTML = e;
          }
        }
        break;
      case "multiple":
        l.multiple = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "muted":
        l.muted = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (a == null || typeof a == "function" || typeof a == "boolean" || typeof a == "symbol") {
          l.removeAttribute("xlink:href");
          break;
        }
        ((e = Gn("" + a)), l.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", e));
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        a != null && typeof a != "function" && typeof a != "symbol" ? l.setAttribute(e, "" + a) : l.removeAttribute(e);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        a && typeof a != "function" && typeof a != "symbol" ? l.setAttribute(e, "") : l.removeAttribute(e);
        break;
      case "capture":
      case "download":
        a === !0
          ? l.setAttribute(e, "")
          : a !== !1 && a != null && typeof a != "function" && typeof a != "symbol"
            ? l.setAttribute(e, a)
            : l.removeAttribute(e);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        a != null && typeof a != "function" && typeof a != "symbol" && !isNaN(a) && 1 <= a ? l.setAttribute(e, a) : l.removeAttribute(e);
        break;
      case "rowSpan":
      case "start":
        a == null || typeof a == "function" || typeof a == "symbol" || isNaN(a) ? l.removeAttribute(e) : l.setAttribute(e, a);
        break;
      case "popover":
        (F("beforetoggle", l), F("toggle", l), Rn(l, "popover", a));
        break;
      case "xlinkActuate":
        Ht(l, "http://www.w3.org/1999/xlink", "xlink:actuate", a);
        break;
      case "xlinkArcrole":
        Ht(l, "http://www.w3.org/1999/xlink", "xlink:arcrole", a);
        break;
      case "xlinkRole":
        Ht(l, "http://www.w3.org/1999/xlink", "xlink:role", a);
        break;
      case "xlinkShow":
        Ht(l, "http://www.w3.org/1999/xlink", "xlink:show", a);
        break;
      case "xlinkTitle":
        Ht(l, "http://www.w3.org/1999/xlink", "xlink:title", a);
        break;
      case "xlinkType":
        Ht(l, "http://www.w3.org/1999/xlink", "xlink:type", a);
        break;
      case "xmlBase":
        Ht(l, "http://www.w3.org/XML/1998/namespace", "xml:base", a);
        break;
      case "xmlLang":
        Ht(l, "http://www.w3.org/XML/1998/namespace", "xml:lang", a);
        break;
      case "xmlSpace":
        Ht(l, "http://www.w3.org/XML/1998/namespace", "xml:space", a);
        break;
      case "is":
        Rn(l, "is", a);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < e.length) || (e[0] !== "o" && e[0] !== "O") || (e[1] !== "n" && e[1] !== "N")) && ((e = m0.get(e) || e), Rn(l, e, a));
    }
  }
  function lf(l, t, e, a, n, u) {
    switch (e) {
      case "style":
        Ff(l, a, u);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a)) throw Error(m(61));
          if (((e = a.__html), e != null)) {
            if (n.children != null) throw Error(m(60));
            l.innerHTML = e;
          }
        }
        break;
      case "children":
        typeof a == "string" ? Pe(l, a) : (typeof a == "number" || typeof a == "bigint") && Pe(l, "" + a);
        break;
      case "onScroll":
        a != null && F("scroll", l);
        break;
      case "onScrollEnd":
        a != null && F("scrollend", l);
        break;
      case "onClick":
        a != null && (l.onclick = Rt);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!Qf.hasOwnProperty(e))
          l: {
            if (
              e[0] === "o" &&
              e[1] === "n" &&
              ((n = e.endsWith("Capture")),
              (t = e.slice(2, n ? e.length - 7 : void 0)),
              (u = l[Fl] || null),
              (u = u != null ? u[e] : null),
              typeof u == "function" && l.removeEventListener(t, u, n),
              typeof a == "function")
            ) {
              (typeof u != "function" && u !== null && (e in l ? (l[e] = null) : l.hasAttribute(e) && l.removeAttribute(e)),
                l.addEventListener(t, a, n));
              break l;
            }
            e in l ? (l[e] = a) : a === !0 ? l.setAttribute(e, "") : Rn(l, e, a);
          }
    }
  }
  function Vl(l, t, e) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        (F("error", l), F("load", l));
        var a = !1,
          n = !1,
          u;
        for (u in e)
          if (e.hasOwnProperty(u)) {
            var i = e[u];
            if (i != null)
              switch (u) {
                case "src":
                  a = !0;
                  break;
                case "srcSet":
                  n = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(m(137, t));
                default:
                  ol(l, t, u, i, e, null);
              }
          }
        (n && ol(l, t, "srcSet", e.srcSet, e, null), a && ol(l, t, "src", e.src, e, null));
        return;
      case "input":
        F("invalid", l);
        var f = (u = i = n = null),
          s = null,
          g = null;
        for (a in e)
          if (e.hasOwnProperty(a)) {
            var b = e[a];
            if (b != null)
              switch (a) {
                case "name":
                  n = b;
                  break;
                case "type":
                  i = b;
                  break;
                case "checked":
                  s = b;
                  break;
                case "defaultChecked":
                  g = b;
                  break;
                case "value":
                  u = b;
                  break;
                case "defaultValue":
                  f = b;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (b != null) throw Error(m(137, t));
                  break;
                default:
                  ol(l, t, a, b, e, null);
              }
          }
        Jf(l, u, f, s, g, i, n, !1);
        return;
      case "select":
        (F("invalid", l), (a = i = u = null));
        for (n in e)
          if (e.hasOwnProperty(n) && ((f = e[n]), f != null))
            switch (n) {
              case "value":
                u = f;
                break;
              case "defaultValue":
                i = f;
                break;
              case "multiple":
                a = f;
              default:
                ol(l, t, n, f, e, null);
            }
        ((t = u), (e = i), (l.multiple = !!a), t != null ? Ie(l, !!a, t, !1) : e != null && Ie(l, !!a, e, !0));
        return;
      case "textarea":
        (F("invalid", l), (u = n = a = null));
        for (i in e)
          if (e.hasOwnProperty(i) && ((f = e[i]), f != null))
            switch (i) {
              case "value":
                a = f;
                break;
              case "defaultValue":
                n = f;
                break;
              case "children":
                u = f;
                break;
              case "dangerouslySetInnerHTML":
                if (f != null) throw Error(m(91));
                break;
              default:
                ol(l, t, i, f, e, null);
            }
        $f(l, a, n, u);
        return;
      case "option":
        for (s in e)
          e.hasOwnProperty(s) &&
            ((a = e[s]), a != null) &&
            (s === "selected" ? (l.selected = a && typeof a != "function" && typeof a != "symbol") : ol(l, t, s, a, e, null));
        return;
      case "dialog":
        (F("beforetoggle", l), F("toggle", l), F("cancel", l), F("close", l));
        break;
      case "iframe":
      case "object":
        F("load", l);
        break;
      case "video":
      case "audio":
        for (a = 0; a < gn.length; a++) F(gn[a], l);
        break;
      case "image":
        (F("error", l), F("load", l));
        break;
      case "details":
        F("toggle", l);
        break;
      case "embed":
      case "source":
      case "link":
        (F("error", l), F("load", l));
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (g in e)
          if (e.hasOwnProperty(g) && ((a = e[g]), a != null))
            switch (g) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(m(137, t));
              default:
                ol(l, t, g, a, e, null);
            }
        return;
      default:
        if (hi(t)) {
          for (b in e) e.hasOwnProperty(b) && ((a = e[b]), a !== void 0 && lf(l, t, b, a, e, void 0));
          return;
        }
    }
    for (f in e) e.hasOwnProperty(f) && ((a = e[f]), a != null && ol(l, t, f, a, e, null));
  }
  function Lm(l, t, e, a) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var n = null,
          u = null,
          i = null,
          f = null,
          s = null,
          g = null,
          b = null;
        for (p in e) {
          var N = e[p];
          if (e.hasOwnProperty(p) && N != null)
            switch (p) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                s = N;
              default:
                a.hasOwnProperty(p) || ol(l, t, p, null, a, N);
            }
        }
        for (var v in a) {
          var p = a[v];
          if (((N = e[v]), a.hasOwnProperty(v) && (p != null || N != null)))
            switch (v) {
              case "type":
                u = p;
                break;
              case "name":
                n = p;
                break;
              case "checked":
                g = p;
                break;
              case "defaultChecked":
                b = p;
                break;
              case "value":
                i = p;
                break;
              case "defaultValue":
                f = p;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (p != null) throw Error(m(137, t));
                break;
              default:
                p !== N && ol(l, t, v, p, a, N);
            }
        }
        oi(l, i, f, s, g, b, u, n);
        return;
      case "select":
        p = i = f = v = null;
        for (u in e)
          if (((s = e[u]), e.hasOwnProperty(u) && s != null))
            switch (u) {
              case "value":
                break;
              case "multiple":
                p = s;
              default:
                a.hasOwnProperty(u) || ol(l, t, u, null, a, s);
            }
        for (n in a)
          if (((u = a[n]), (s = e[n]), a.hasOwnProperty(n) && (u != null || s != null)))
            switch (n) {
              case "value":
                v = u;
                break;
              case "defaultValue":
                f = u;
                break;
              case "multiple":
                i = u;
              default:
                u !== s && ol(l, t, n, u, a, s);
            }
        ((t = f), (e = i), (a = p), v != null ? Ie(l, !!e, v, !1) : !!a != !!e && (t != null ? Ie(l, !!e, t, !0) : Ie(l, !!e, e ? [] : "", !1)));
        return;
      case "textarea":
        p = v = null;
        for (f in e)
          if (((n = e[f]), e.hasOwnProperty(f) && n != null && !a.hasOwnProperty(f)))
            switch (f) {
              case "value":
                break;
              case "children":
                break;
              default:
                ol(l, t, f, null, a, n);
            }
        for (i in a)
          if (((n = a[i]), (u = e[i]), a.hasOwnProperty(i) && (n != null || u != null)))
            switch (i) {
              case "value":
                v = n;
                break;
              case "defaultValue":
                p = n;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (n != null) throw Error(m(91));
                break;
              default:
                n !== u && ol(l, t, i, n, a, u);
            }
        kf(l, v, p);
        return;
      case "option":
        for (var B in e)
          ((v = e[B]), e.hasOwnProperty(B) && v != null && !a.hasOwnProperty(B) && (B === "selected" ? (l.selected = !1) : ol(l, t, B, null, a, v)));
        for (s in a)
          ((v = a[s]),
            (p = e[s]),
            a.hasOwnProperty(s) &&
              v !== p &&
              (v != null || p != null) &&
              (s === "selected" ? (l.selected = v && typeof v != "function" && typeof v != "symbol") : ol(l, t, s, v, a, p)));
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var G in e) ((v = e[G]), e.hasOwnProperty(G) && v != null && !a.hasOwnProperty(G) && ol(l, t, G, null, a, v));
        for (g in a)
          if (((v = a[g]), (p = e[g]), a.hasOwnProperty(g) && v !== p && (v != null || p != null)))
            switch (g) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (v != null) throw Error(m(137, t));
                break;
              default:
                ol(l, t, g, v, a, p);
            }
        return;
      default:
        if (hi(t)) {
          for (var ml in e) ((v = e[ml]), e.hasOwnProperty(ml) && v !== void 0 && !a.hasOwnProperty(ml) && lf(l, t, ml, void 0, a, v));
          for (b in a) ((v = a[b]), (p = e[b]), !a.hasOwnProperty(b) || v === p || (v === void 0 && p === void 0) || lf(l, t, b, v, a, p));
          return;
        }
    }
    for (var h in e) ((v = e[h]), e.hasOwnProperty(h) && v != null && !a.hasOwnProperty(h) && ol(l, t, h, null, a, v));
    for (N in a) ((v = a[N]), (p = e[N]), !a.hasOwnProperty(N) || v === p || (v == null && p == null) || ol(l, t, N, v, a, p));
  }
  function Ir(l) {
    switch (l) {
      case "css":
      case "script":
      case "font":
      case "img":
      case "image":
      case "input":
      case "link":
        return !0;
      default:
        return !1;
    }
  }
  function Xm() {
    if (typeof performance.getEntriesByType == "function") {
      for (var l = 0, t = 0, e = performance.getEntriesByType("resource"), a = 0; a < e.length; a++) {
        var n = e[a],
          u = n.transferSize,
          i = n.initiatorType,
          f = n.duration;
        if (u && f && Ir(i)) {
          for (i = 0, f = n.responseEnd, a += 1; a < e.length; a++) {
            var s = e[a],
              g = s.startTime;
            if (g > f) break;
            var b = s.transferSize,
              N = s.initiatorType;
            b && Ir(N) && ((s = s.responseEnd), (i += b * (s < f ? 1 : (f - g) / (s - g))));
          }
          if ((--a, (t += (8 * (u + i)) / (n.duration / 1e3)), l++, 10 < l)) break;
        }
      }
      if (0 < l) return t / l / 1e6;
    }
    return navigator.connection && ((l = navigator.connection.downlink), typeof l == "number") ? l : 5;
  }
  var tf = null,
    ef = null;
  function Uu(l) {
    return l.nodeType === 9 ? l : l.ownerDocument;
  }
  function Pr(l) {
    switch (l) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function lo(l, t) {
    if (l === 0)
      switch (t) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return l === 1 && t === "foreignObject" ? 0 : l;
  }
  function af(l, t) {
    return (
      l === "textarea" ||
      l === "noscript" ||
      typeof t.children == "string" ||
      typeof t.children == "number" ||
      typeof t.children == "bigint" ||
      (typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null)
    );
  }
  var nf = null;
  function Qm() {
    var l = window.event;
    return l && l.type === "popstate" ? (l === nf ? !1 : ((nf = l), !0)) : ((nf = null), !1);
  }
  var to = typeof setTimeout == "function" ? setTimeout : void 0,
    Zm = typeof clearTimeout == "function" ? clearTimeout : void 0,
    eo = typeof Promise == "function" ? Promise : void 0,
    Vm =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof eo < "u"
          ? function (l) {
              return eo.resolve(null).then(l).catch(wm);
            }
          : to;
  function wm(l) {
    setTimeout(function () {
      throw l;
    });
  }
  function be(l) {
    return l === "head";
  }
  function ao(l, t) {
    var e = t,
      a = 0;
    do {
      var n = e.nextSibling;
      if ((l.removeChild(e), n && n.nodeType === 8))
        if (((e = n.data), e === "/$" || e === "/&")) {
          if (a === 0) {
            (l.removeChild(n), Oa(t));
            return;
          }
          a--;
        } else if (e === "$" || e === "$?" || e === "$~" || e === "$!" || e === "&") a++;
        else if (e === "html") pn(l.ownerDocument.documentElement);
        else if (e === "head") {
          ((e = l.ownerDocument.head), pn(e));
          for (var u = e.firstChild; u; ) {
            var i = u.nextSibling,
              f = u.nodeName;
            (u[Ha] || f === "SCRIPT" || f === "STYLE" || (f === "LINK" && u.rel.toLowerCase() === "stylesheet") || e.removeChild(u), (u = i));
          }
        } else e === "body" && pn(l.ownerDocument.body);
      e = n;
    } while (e);
    Oa(t);
  }
  function no(l, t) {
    var e = l;
    l = 0;
    do {
      var a = e.nextSibling;
      if (
        (e.nodeType === 1
          ? t
            ? ((e._stashedDisplay = e.style.display), (e.style.display = "none"))
            : ((e.style.display = e._stashedDisplay || ""), e.getAttribute("style") === "" && e.removeAttribute("style"))
          : e.nodeType === 3 && (t ? ((e._stashedText = e.nodeValue), (e.nodeValue = "")) : (e.nodeValue = e._stashedText || "")),
        a && a.nodeType === 8)
      )
        if (((e = a.data), e === "/$")) {
          if (l === 0) break;
          l--;
        } else (e !== "$" && e !== "$?" && e !== "$~" && e !== "$!") || l++;
      e = a;
    } while (e);
  }
  function uf(l) {
    var t = l.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var e = t;
      switch (((t = t.nextSibling), e.nodeName)) {
        case "HTML":
        case "HEAD":
        case "BODY":
          (uf(e), di(e));
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (e.rel.toLowerCase() === "stylesheet") continue;
      }
      l.removeChild(e);
    }
  }
  function Km(l, t, e, a) {
    for (; l.nodeType === 1; ) {
      var n = e;
      if (l.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!a && (l.nodeName !== "INPUT" || l.type !== "hidden")) break;
      } else if (a) {
        if (!l[Ha])
          switch (t) {
            case "meta":
              if (!l.hasAttribute("itemprop")) break;
              return l;
            case "link":
              if (((u = l.getAttribute("rel")), u === "stylesheet" && l.hasAttribute("data-precedence"))) break;
              if (
                u !== n.rel ||
                l.getAttribute("href") !== (n.href == null || n.href === "" ? null : n.href) ||
                l.getAttribute("crossorigin") !== (n.crossOrigin == null ? null : n.crossOrigin) ||
                l.getAttribute("title") !== (n.title == null ? null : n.title)
              )
                break;
              return l;
            case "style":
              if (l.hasAttribute("data-precedence")) break;
              return l;
            case "script":
              if (
                ((u = l.getAttribute("src")),
                (u !== (n.src == null ? null : n.src) ||
                  l.getAttribute("type") !== (n.type == null ? null : n.type) ||
                  l.getAttribute("crossorigin") !== (n.crossOrigin == null ? null : n.crossOrigin)) &&
                  u &&
                  l.hasAttribute("async") &&
                  !l.hasAttribute("itemprop"))
              )
                break;
              return l;
            default:
              return l;
          }
      } else if (t === "input" && l.type === "hidden") {
        var u = n.name == null ? null : "" + n.name;
        if (n.type === "hidden" && l.getAttribute("name") === u) return l;
      } else return l;
      if (((l = Nt(l.nextSibling)), l === null)) break;
    }
    return null;
  }
  function Jm(l, t, e) {
    if (t === "") return null;
    for (; l.nodeType !== 3; )
      if (((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") && !e) || ((l = Nt(l.nextSibling)), l === null)) return null;
    return l;
  }
  function uo(l, t) {
    for (; l.nodeType !== 8; )
      if (((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") && !t) || ((l = Nt(l.nextSibling)), l === null)) return null;
    return l;
  }
  function cf(l) {
    return l.data === "$?" || l.data === "$~";
  }
  function ff(l) {
    return l.data === "$!" || (l.data === "$?" && l.ownerDocument.readyState !== "loading");
  }
  function km(l, t) {
    var e = l.ownerDocument;
    if (l.data === "$~") l._reactRetry = t;
    else if (l.data !== "$?" || e.readyState !== "loading") t();
    else {
      var a = function () {
        (t(), e.removeEventListener("DOMContentLoaded", a));
      };
      (e.addEventListener("DOMContentLoaded", a), (l._reactRetry = a));
    }
  }
  function Nt(l) {
    for (; l != null; l = l.nextSibling) {
      var t = l.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (((t = l.data), t === "$" || t === "$!" || t === "$?" || t === "$~" || t === "&" || t === "F!" || t === "F")) break;
        if (t === "/$" || t === "/&") return null;
      }
    }
    return l;
  }
  var sf = null;
  function io(l) {
    l = l.nextSibling;
    for (var t = 0; l; ) {
      if (l.nodeType === 8) {
        var e = l.data;
        if (e === "/$" || e === "/&") {
          if (t === 0) return Nt(l.nextSibling);
          t--;
        } else (e !== "$" && e !== "$!" && e !== "$?" && e !== "$~" && e !== "&") || t++;
      }
      l = l.nextSibling;
    }
    return null;
  }
  function co(l) {
    l = l.previousSibling;
    for (var t = 0; l; ) {
      if (l.nodeType === 8) {
        var e = l.data;
        if (e === "$" || e === "$!" || e === "$?" || e === "$~" || e === "&") {
          if (t === 0) return l;
          t--;
        } else (e !== "/$" && e !== "/&") || t++;
      }
      l = l.previousSibling;
    }
    return null;
  }
  function fo(l, t, e) {
    switch (((t = Uu(e)), l)) {
      case "html":
        if (((l = t.documentElement), !l)) throw Error(m(452));
        return l;
      case "head":
        if (((l = t.head), !l)) throw Error(m(453));
        return l;
      case "body":
        if (((l = t.body), !l)) throw Error(m(454));
        return l;
      default:
        throw Error(m(451));
    }
  }
  function pn(l) {
    for (var t = l.attributes; t.length; ) l.removeAttributeNode(t[0]);
    di(l);
  }
  var zt = new Map(),
    so = new Set();
  function Hu(l) {
    return typeof l.getRootNode == "function" ? l.getRootNode() : l.nodeType === 9 ? l : l.ownerDocument;
  }
  var It = _.d;
  _.d = { f: $m, r: Wm, D: Fm, C: Im, L: Pm, m: lh, X: eh, S: th, M: ah };
  function $m() {
    var l = It.f(),
      t = Au();
    return l || t;
  }
  function Wm(l) {
    var t = $e(l);
    t !== null && t.tag === 5 && t.type === "form" ? Ad(t) : It.r(l);
  }
  var Ea = typeof document > "u" ? null : document;
  function ro(l, t, e) {
    var a = Ea;
    if (a && typeof t == "string" && t) {
      var n = yt(t);
      ((n = 'link[rel="' + l + '"][href="' + n + '"]'),
        typeof e == "string" && (n += '[crossorigin="' + e + '"]'),
        so.has(n) ||
          (so.add(n),
          (l = { rel: l, crossOrigin: e, href: t }),
          a.querySelector(n) === null && ((t = a.createElement("link")), Vl(t, "link", l), ql(t), a.head.appendChild(t))));
    }
  }
  function Fm(l) {
    (It.D(l), ro("dns-prefetch", l, null));
  }
  function Im(l, t) {
    (It.C(l, t), ro("preconnect", l, t));
  }
  function Pm(l, t, e) {
    It.L(l, t, e);
    var a = Ea;
    if (a && l && t) {
      var n = 'link[rel="preload"][as="' + yt(t) + '"]';
      t === "image" && e && e.imageSrcSet
        ? ((n += '[imagesrcset="' + yt(e.imageSrcSet) + '"]'), typeof e.imageSizes == "string" && (n += '[imagesizes="' + yt(e.imageSizes) + '"]'))
        : (n += '[href="' + yt(l) + '"]');
      var u = n;
      switch (t) {
        case "style":
          u = _a(l);
          break;
        case "script":
          u = Ma(l);
      }
      zt.has(u) ||
        ((l = q({ rel: "preload", href: t === "image" && e && e.imageSrcSet ? void 0 : l, as: t }, e)),
        zt.set(u, l),
        a.querySelector(n) !== null ||
          (t === "style" && a.querySelector(bn(u))) ||
          (t === "script" && a.querySelector(xn(u))) ||
          ((t = a.createElement("link")), Vl(t, "link", l), ql(t), a.head.appendChild(t)));
    }
  }
  function lh(l, t) {
    It.m(l, t);
    var e = Ea;
    if (e && l) {
      var a = t && typeof t.as == "string" ? t.as : "script",
        n = 'link[rel="modulepreload"][as="' + yt(a) + '"][href="' + yt(l) + '"]',
        u = n;
      switch (a) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          u = Ma(l);
      }
      if (!zt.has(u) && ((l = q({ rel: "modulepreload", href: l }, t)), zt.set(u, l), e.querySelector(n) === null)) {
        switch (a) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (e.querySelector(xn(u))) return;
        }
        ((a = e.createElement("link")), Vl(a, "link", l), ql(a), e.head.appendChild(a));
      }
    }
  }
  function th(l, t, e) {
    It.S(l, t, e);
    var a = Ea;
    if (a && l) {
      var n = We(a).hoistableStyles,
        u = _a(l);
      t = t || "default";
      var i = n.get(u);
      if (!i) {
        var f = { loading: 0, preload: null };
        if ((i = a.querySelector(bn(u)))) f.loading = 5;
        else {
          ((l = q({ rel: "stylesheet", href: l, "data-precedence": t }, e)), (e = zt.get(u)) && df(l, e));
          var s = (i = a.createElement("link"));
          (ql(s),
            Vl(s, "link", l),
            (s._p = new Promise(function (g, b) {
              ((s.onload = g), (s.onerror = b));
            })),
            s.addEventListener("load", function () {
              f.loading |= 1;
            }),
            s.addEventListener("error", function () {
              f.loading |= 2;
            }),
            (f.loading |= 4),
            Ru(i, t, a));
        }
        ((i = { type: "stylesheet", instance: i, count: 1, state: f }), n.set(u, i));
      }
    }
  }
  function eh(l, t) {
    It.X(l, t);
    var e = Ea;
    if (e && l) {
      var a = We(e).hoistableScripts,
        n = Ma(l),
        u = a.get(n);
      u ||
        ((u = e.querySelector(xn(n))),
        u ||
          ((l = q({ src: l, async: !0 }, t)),
          (t = zt.get(n)) && rf(l, t),
          (u = e.createElement("script")),
          ql(u),
          Vl(u, "link", l),
          e.head.appendChild(u)),
        (u = { type: "script", instance: u, count: 1, state: null }),
        a.set(n, u));
    }
  }
  function ah(l, t) {
    It.M(l, t);
    var e = Ea;
    if (e && l) {
      var a = We(e).hoistableScripts,
        n = Ma(l),
        u = a.get(n);
      u ||
        ((u = e.querySelector(xn(n))),
        u ||
          ((l = q({ src: l, async: !0, type: "module" }, t)),
          (t = zt.get(n)) && rf(l, t),
          (u = e.createElement("script")),
          ql(u),
          Vl(u, "link", l),
          e.head.appendChild(u)),
        (u = { type: "script", instance: u, count: 1, state: null }),
        a.set(n, u));
    }
  }
  function oo(l, t, e, a) {
    var n = (n = $.current) ? Hu(n) : null;
    if (!n) throw Error(m(446));
    switch (l) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof e.precedence == "string" && typeof e.href == "string"
          ? ((t = _a(e.href)),
            (e = We(n).hoistableStyles),
            (a = e.get(t)),
            a || ((a = { type: "style", instance: null, count: 0, state: null }), e.set(t, a)),
            a)
          : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (e.rel === "stylesheet" && typeof e.href == "string" && typeof e.precedence == "string") {
          l = _a(e.href);
          var u = We(n).hoistableStyles,
            i = u.get(l);
          if (
            (i ||
              ((n = n.ownerDocument || n),
              (i = { type: "stylesheet", instance: null, count: 0, state: { loading: 0, preload: null } }),
              u.set(l, i),
              (u = n.querySelector(bn(l))) && !u._p && ((i.instance = u), (i.state.loading = 5)),
              zt.has(l) ||
                ((e = {
                  rel: "preload",
                  as: "style",
                  href: e.href,
                  crossOrigin: e.crossOrigin,
                  integrity: e.integrity,
                  media: e.media,
                  hrefLang: e.hrefLang,
                  referrerPolicy: e.referrerPolicy,
                }),
                zt.set(l, e),
                u || nh(n, l, e, i.state))),
            t && a === null)
          )
            throw Error(m(528, ""));
          return i;
        }
        if (t && a !== null) throw Error(m(529, ""));
        return null;
      case "script":
        return (
          (t = e.async),
          (e = e.src),
          typeof e == "string" && t && typeof t != "function" && typeof t != "symbol"
            ? ((t = Ma(e)),
              (e = We(n).hoistableScripts),
              (a = e.get(t)),
              a || ((a = { type: "script", instance: null, count: 0, state: null }), e.set(t, a)),
              a)
            : { type: "void", instance: null, count: 0, state: null }
        );
      default:
        throw Error(m(444, l));
    }
  }
  function _a(l) {
    return 'href="' + yt(l) + '"';
  }
  function bn(l) {
    return 'link[rel="stylesheet"][' + l + "]";
  }
  function mo(l) {
    return q({}, l, { "data-precedence": l.precedence, precedence: null });
  }
  function nh(l, t, e, a) {
    l.querySelector('link[rel="preload"][as="style"][' + t + "]")
      ? (a.loading = 1)
      : ((t = l.createElement("link")),
        (a.preload = t),
        t.addEventListener("load", function () {
          return (a.loading |= 1);
        }),
        t.addEventListener("error", function () {
          return (a.loading |= 2);
        }),
        Vl(t, "link", e),
        ql(t),
        l.head.appendChild(t));
  }
  function Ma(l) {
    return '[src="' + yt(l) + '"]';
  }
  function xn(l) {
    return "script[async]" + l;
  }
  function ho(l, t, e) {
    if ((t.count++, t.instance === null))
      switch (t.type) {
        case "style":
          var a = l.querySelector('style[data-href~="' + yt(e.href) + '"]');
          if (a) return ((t.instance = a), ql(a), a);
          var n = q({}, e, { "data-href": e.href, "data-precedence": e.precedence, href: null, precedence: null });
          return ((a = (l.ownerDocument || l).createElement("style")), ql(a), Vl(a, "style", n), Ru(a, e.precedence, l), (t.instance = a));
        case "stylesheet":
          n = _a(e.href);
          var u = l.querySelector(bn(n));
          if (u) return ((t.state.loading |= 4), (t.instance = u), ql(u), u);
          ((a = mo(e)), (n = zt.get(n)) && df(a, n), (u = (l.ownerDocument || l).createElement("link")), ql(u));
          var i = u;
          return (
            (i._p = new Promise(function (f, s) {
              ((i.onload = f), (i.onerror = s));
            })),
            Vl(u, "link", a),
            (t.state.loading |= 4),
            Ru(u, e.precedence, l),
            (t.instance = u)
          );
        case "script":
          return (
            (u = Ma(e.src)),
            (n = l.querySelector(xn(u)))
              ? ((t.instance = n), ql(n), n)
              : ((a = e),
                (n = zt.get(u)) && ((a = q({}, e)), rf(a, n)),
                (l = l.ownerDocument || l),
                (n = l.createElement("script")),
                ql(n),
                Vl(n, "link", a),
                l.head.appendChild(n),
                (t.instance = n))
          );
        case "void":
          return null;
        default:
          throw Error(m(443, t.type));
      }
    else t.type === "stylesheet" && (t.state.loading & 4) === 0 && ((a = t.instance), (t.state.loading |= 4), Ru(a, e.precedence, l));
    return t.instance;
  }
  function Ru(l, t, e) {
    for (
      var a = e.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),
        n = a.length ? a[a.length - 1] : null,
        u = n,
        i = 0;
      i < a.length;
      i++
    ) {
      var f = a[i];
      if (f.dataset.precedence === t) u = f;
      else if (u !== n) break;
    }
    u ? u.parentNode.insertBefore(l, u.nextSibling) : ((t = e.nodeType === 9 ? e.head : e), t.insertBefore(l, t.firstChild));
  }
  function df(l, t) {
    (l.crossOrigin == null && (l.crossOrigin = t.crossOrigin),
      l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy),
      l.title == null && (l.title = t.title));
  }
  function rf(l, t) {
    (l.crossOrigin == null && (l.crossOrigin = t.crossOrigin),
      l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy),
      l.integrity == null && (l.integrity = t.integrity));
  }
  var qu = null;
  function yo(l, t, e) {
    if (qu === null) {
      var a = new Map(),
        n = (qu = new Map());
      n.set(e, a);
    } else ((n = qu), (a = n.get(e)), a || ((a = new Map()), n.set(e, a)));
    if (a.has(l)) return a;
    for (a.set(l, null), e = e.getElementsByTagName(l), n = 0; n < e.length; n++) {
      var u = e[n];
      if (!(u[Ha] || u[Ll] || (l === "link" && u.getAttribute("rel") === "stylesheet")) && u.namespaceURI !== "http://www.w3.org/2000/svg") {
        var i = u.getAttribute(t) || "";
        i = l + i;
        var f = a.get(i);
        f ? f.push(u) : a.set(i, [u]);
      }
    }
    return a;
  }
  function go(l, t, e) {
    ((l = l.ownerDocument || l), l.head.insertBefore(e, t === "title" ? l.querySelector("head > title") : null));
  }
  function uh(l, t, e) {
    if (e === 1 || t.itemProp != null) return !1;
    switch (l) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (typeof t.precedence != "string" || typeof t.href != "string" || t.href === "") break;
        return !0;
      case "link":
        if (typeof t.rel != "string" || typeof t.href != "string" || t.href === "" || t.onLoad || t.onError) break;
        return t.rel === "stylesheet" ? ((l = t.disabled), typeof t.precedence == "string" && l == null) : !0;
      case "script":
        if (t.async && typeof t.async != "function" && typeof t.async != "symbol" && !t.onLoad && !t.onError && t.src && typeof t.src == "string")
          return !0;
    }
    return !1;
  }
  function vo(l) {
    return !(l.type === "stylesheet" && (l.state.loading & 3) === 0);
  }
  function ih(l, t, e, a) {
    if (e.type === "stylesheet" && (typeof a.media != "string" || matchMedia(a.media).matches !== !1) && (e.state.loading & 4) === 0) {
      if (e.instance === null) {
        var n = _a(a.href),
          u = t.querySelector(bn(n));
        if (u) {
          ((t = u._p),
            t !== null && typeof t == "object" && typeof t.then == "function" && (l.count++, (l = Yu.bind(l)), t.then(l, l)),
            (e.state.loading |= 4),
            (e.instance = u),
            ql(u));
          return;
        }
        ((u = t.ownerDocument || t), (a = mo(a)), (n = zt.get(n)) && df(a, n), (u = u.createElement("link")), ql(u));
        var i = u;
        ((i._p = new Promise(function (f, s) {
          ((i.onload = f), (i.onerror = s));
        })),
          Vl(u, "link", a),
          (e.instance = u));
      }
      (l.stylesheets === null && (l.stylesheets = new Map()),
        l.stylesheets.set(e, t),
        (t = e.state.preload) &&
          (e.state.loading & 3) === 0 &&
          (l.count++, (e = Yu.bind(l)), t.addEventListener("load", e), t.addEventListener("error", e)));
    }
  }
  var of = 0;
  function ch(l, t) {
    return (
      l.stylesheets && l.count === 0 && Lu(l, l.stylesheets),
      0 < l.count || 0 < l.imgCount
        ? function (e) {
            var a = setTimeout(function () {
              if ((l.stylesheets && Lu(l, l.stylesheets), l.unsuspend)) {
                var u = l.unsuspend;
                ((l.unsuspend = null), u());
              }
            }, 6e4 + t);
            0 < l.imgBytes && of === 0 && (of = 62500 * Xm());
            var n = setTimeout(
              function () {
                if (((l.waitingForImages = !1), l.count === 0 && (l.stylesheets && Lu(l, l.stylesheets), l.unsuspend))) {
                  var u = l.unsuspend;
                  ((l.unsuspend = null), u());
                }
              },
              (l.imgBytes > of ? 50 : 800) + t
            );
            return (
              (l.unsuspend = e),
              function () {
                ((l.unsuspend = null), clearTimeout(a), clearTimeout(n));
              }
            );
          }
        : null
    );
  }
  function Yu() {
    if ((this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages))) {
      if (this.stylesheets) Lu(this, this.stylesheets);
      else if (this.unsuspend) {
        var l = this.unsuspend;
        ((this.unsuspend = null), l());
      }
    }
  }
  var Gu = null;
  function Lu(l, t) {
    ((l.stylesheets = null), l.unsuspend !== null && (l.count++, (Gu = new Map()), t.forEach(fh, l), (Gu = null), Yu.call(l)));
  }
  function fh(l, t) {
    if (!(t.state.loading & 4)) {
      var e = Gu.get(l);
      if (e) var a = e.get(null);
      else {
        ((e = new Map()), Gu.set(l, e));
        for (var n = l.querySelectorAll("link[data-precedence],style[data-precedence]"), u = 0; u < n.length; u++) {
          var i = n[u];
          (i.nodeName === "LINK" || i.getAttribute("media") !== "not all") && (e.set(i.dataset.precedence, i), (a = i));
        }
        a && e.set(null, a);
      }
      ((n = t.instance),
        (i = n.getAttribute("data-precedence")),
        (u = e.get(i) || a),
        u === a && e.set(null, n),
        e.set(i, n),
        this.count++,
        (a = Yu.bind(this)),
        n.addEventListener("load", a),
        n.addEventListener("error", a),
        u ? u.parentNode.insertBefore(n, u.nextSibling) : ((l = l.nodeType === 9 ? l.head : l), l.insertBefore(n, l.firstChild)),
        (t.state.loading |= 4));
    }
  }
  var Sn = { $$typeof: xl, Provider: null, Consumer: null, _currentValue: L, _currentValue2: L, _threadCount: 0 };
  function sh(l, t, e, a, n, u, i, f, s) {
    ((this.tag = 1),
      (this.containerInfo = l),
      (this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null),
      (this.callbackPriority = 0),
      (this.expirationTimes = ii(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = ii(0)),
      (this.hiddenUpdates = ii(null)),
      (this.identifierPrefix = a),
      (this.onUncaughtError = n),
      (this.onCaughtError = u),
      (this.onRecoverableError = i),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = s),
      (this.incompleteTransitions = new Map()));
  }
  function po(l, t, e, a, n, u, i, f, s, g, b, N) {
    return (
      (l = new sh(l, t, e, i, s, g, b, N, f)),
      (t = 1),
      u === !0 && (t |= 24),
      (u = ft(3, null, null, t)),
      (l.current = u),
      (u.stateNode = l),
      (t = Vi()),
      t.refCount++,
      (l.pooledCache = t),
      t.refCount++,
      (u.memoizedState = { element: a, isDehydrated: e, cache: t }),
      ki(u),
      l
    );
  }
  function bo(l) {
    return l ? ((l = ia), l) : ia;
  }
  function xo(l, t, e, a, n, u) {
    ((n = bo(n)),
      a.context === null ? (a.context = n) : (a.pendingContext = n),
      (a = fe(t)),
      (a.payload = { element: e }),
      (u = u === void 0 ? null : u),
      u !== null && (a.callback = u),
      (e = se(l, a, t)),
      e !== null && (at(e, l, t), Ia(e, l, t)));
  }
  function So(l, t) {
    if (((l = l.memoizedState), l !== null && l.dehydrated !== null)) {
      var e = l.retryLane;
      l.retryLane = e !== 0 && e < t ? e : t;
    }
  }
  function mf(l, t) {
    (So(l, t), (l = l.alternate) && So(l, t));
  }
  function No(l) {
    if (l.tag === 13 || l.tag === 31) {
      var t = Be(l, 67108864);
      (t !== null && at(t, l, 67108864), mf(l, 67108864));
    }
  }
  function zo(l) {
    if (l.tag === 13 || l.tag === 31) {
      var t = mt();
      t = ci(t);
      var e = Be(l, t);
      (e !== null && at(e, l, t), mf(l, t));
    }
  }
  var Xu = !0;
  function dh(l, t, e, a) {
    var n = x.T;
    x.T = null;
    var u = _.p;
    try {
      ((_.p = 2), hf(l, t, e, a));
    } finally {
      ((_.p = u), (x.T = n));
    }
  }
  function rh(l, t, e, a) {
    var n = x.T;
    x.T = null;
    var u = _.p;
    try {
      ((_.p = 8), hf(l, t, e, a));
    } finally {
      ((_.p = u), (x.T = n));
    }
  }
  function hf(l, t, e, a) {
    if (Xu) {
      var n = yf(a);
      if (n === null) (Pc(l, t, a, Qu, e), To(l, a));
      else if (mh(n, l, t, e, a)) a.stopPropagation();
      else if ((To(l, a), t & 4 && -1 < oh.indexOf(l))) {
        for (; n !== null; ) {
          var u = $e(n);
          if (u !== null)
            switch (u.tag) {
              case 3:
                if (((u = u.stateNode), u.current.memoizedState.isDehydrated)) {
                  var i = Ee(u.pendingLanes);
                  if (i !== 0) {
                    var f = u;
                    for (f.pendingLanes |= 2, f.entangledLanes |= 2; i; ) {
                      var s = 1 << (31 - it(i));
                      ((f.entanglements[1] |= s), (i &= ~s));
                    }
                    (Bt(u), (il & 6) === 0 && ((ju = nt() + 500), yn(0)));
                  }
                }
                break;
              case 31:
              case 13:
                ((f = Be(u, 2)), f !== null && at(f, u, 2), Au(), mf(u, 2));
            }
          if (((u = yf(a)), u === null && Pc(l, t, a, Qu, e), u === n)) break;
          n = u;
        }
        n !== null && a.stopPropagation();
      } else Pc(l, t, a, null, e);
    }
  }
  function yf(l) {
    return ((l = gi(l)), gf(l));
  }
  var Qu = null;
  function gf(l) {
    if (((Qu = null), (l = ke(l)), l !== null)) {
      var t = O(l);
      if (t === null) l = null;
      else {
        var e = t.tag;
        if (e === 13) {
          if (((l = w(t)), l !== null)) return l;
          l = null;
        } else if (e === 31) {
          if (((l = tl(t)), l !== null)) return l;
          l = null;
        } else if (e === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
          l = null;
        } else t !== l && (l = null);
      }
    }
    return ((Qu = l), null);
  }
  function jo(l) {
    switch (l) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (Fo()) {
          case Df:
            return 2;
          case Bf:
            return 8;
          case Dn:
          case Io:
            return 32;
          case Cf:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var vf = !1,
    xe = null,
    Se = null,
    Ne = null,
    Nn = new Map(),
    zn = new Map(),
    ze = [],
    oh =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
        " "
      );
  function To(l, t) {
    switch (l) {
      case "focusin":
      case "focusout":
        xe = null;
        break;
      case "dragenter":
      case "dragleave":
        Se = null;
        break;
      case "mouseover":
      case "mouseout":
        Ne = null;
        break;
      case "pointerover":
      case "pointerout":
        Nn.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        zn.delete(t.pointerId);
    }
  }
  function jn(l, t, e, a, n, u) {
    return l === null || l.nativeEvent !== u
      ? ((l = { blockedOn: t, domEventName: e, eventSystemFlags: a, nativeEvent: u, targetContainers: [n] }),
        t !== null && ((t = $e(t)), t !== null && No(t)),
        l)
      : ((l.eventSystemFlags |= a), (t = l.targetContainers), n !== null && t.indexOf(n) === -1 && t.push(n), l);
  }
  function mh(l, t, e, a, n) {
    switch (t) {
      case "focusin":
        return ((xe = jn(xe, l, t, e, a, n)), !0);
      case "dragenter":
        return ((Se = jn(Se, l, t, e, a, n)), !0);
      case "mouseover":
        return ((Ne = jn(Ne, l, t, e, a, n)), !0);
      case "pointerover":
        var u = n.pointerId;
        return (Nn.set(u, jn(Nn.get(u) || null, l, t, e, a, n)), !0);
      case "gotpointercapture":
        return ((u = n.pointerId), zn.set(u, jn(zn.get(u) || null, l, t, e, a, n)), !0);
    }
    return !1;
  }
  function Ao(l) {
    var t = ke(l.target);
    if (t !== null) {
      var e = O(t);
      if (e !== null) {
        if (((t = e.tag), t === 13)) {
          if (((t = w(e)), t !== null)) {
            ((l.blockedOn = t),
              Gf(l.priority, function () {
                zo(e);
              }));
            return;
          }
        } else if (t === 31) {
          if (((t = tl(e)), t !== null)) {
            ((l.blockedOn = t),
              Gf(l.priority, function () {
                zo(e);
              }));
            return;
          }
        } else if (t === 3 && e.stateNode.current.memoizedState.isDehydrated) {
          l.blockedOn = e.tag === 3 ? e.stateNode.containerInfo : null;
          return;
        }
      }
    }
    l.blockedOn = null;
  }
  function Zu(l) {
    if (l.blockedOn !== null) return !1;
    for (var t = l.targetContainers; 0 < t.length; ) {
      var e = yf(l.nativeEvent);
      if (e === null) {
        e = l.nativeEvent;
        var a = new e.constructor(e.type, e);
        ((yi = a), e.target.dispatchEvent(a), (yi = null));
      } else return ((t = $e(e)), t !== null && No(t), (l.blockedOn = e), !1);
      t.shift();
    }
    return !0;
  }
  function Eo(l, t, e) {
    Zu(l) && e.delete(t);
  }
  function hh() {
    ((vf = !1),
      xe !== null && Zu(xe) && (xe = null),
      Se !== null && Zu(Se) && (Se = null),
      Ne !== null && Zu(Ne) && (Ne = null),
      Nn.forEach(Eo),
      zn.forEach(Eo));
  }
  function Vu(l, t) {
    l.blockedOn === t && ((l.blockedOn = null), vf || ((vf = !0), z.unstable_scheduleCallback(z.unstable_NormalPriority, hh)));
  }
  var wu = null;
  function _o(l) {
    wu !== l &&
      ((wu = l),
      z.unstable_scheduleCallback(z.unstable_NormalPriority, function () {
        wu === l && (wu = null);
        for (var t = 0; t < l.length; t += 3) {
          var e = l[t],
            a = l[t + 1],
            n = l[t + 2];
          if (typeof a != "function") {
            if (gf(a || e) === null) continue;
            break;
          }
          var u = $e(e);
          u !== null && (l.splice(t, 3), (t -= 3), hc(u, { pending: !0, data: n, method: e.method, action: a }, a, n));
        }
      }));
  }
  function Oa(l) {
    function t(s) {
      return Vu(s, l);
    }
    (xe !== null && Vu(xe, l), Se !== null && Vu(Se, l), Ne !== null && Vu(Ne, l), Nn.forEach(t), zn.forEach(t));
    for (var e = 0; e < ze.length; e++) {
      var a = ze[e];
      a.blockedOn === l && (a.blockedOn = null);
    }
    for (; 0 < ze.length && ((e = ze[0]), e.blockedOn === null); ) (Ao(e), e.blockedOn === null && ze.shift());
    if (((e = (l.ownerDocument || l).$$reactFormReplay), e != null))
      for (a = 0; a < e.length; a += 3) {
        var n = e[a],
          u = e[a + 1],
          i = n[Fl] || null;
        if (typeof u == "function") i || _o(e);
        else if (i) {
          var f = null;
          if (u && u.hasAttribute("formAction")) {
            if (((n = u), (i = u[Fl] || null))) f = i.formAction;
            else if (gf(n) !== null) continue;
          } else f = i.action;
          (typeof f == "function" ? (e[a + 1] = f) : (e.splice(a, 3), (a -= 3)), _o(e));
        }
      }
  }
  function Mo() {
    function l(u) {
      u.canIntercept &&
        u.info === "react-transition" &&
        u.intercept({
          handler: function () {
            return new Promise(function (i) {
              return (n = i);
            });
          },
          focusReset: "manual",
          scroll: "manual",
        });
    }
    function t() {
      (n !== null && (n(), (n = null)), a || setTimeout(e, 20));
    }
    function e() {
      if (!a && !navigation.transition) {
        var u = navigation.currentEntry;
        u && u.url != null && navigation.navigate(u.url, { state: u.getState(), info: "react-transition", history: "replace" });
      }
    }
    if (typeof navigation == "object") {
      var a = !1,
        n = null;
      return (
        navigation.addEventListener("navigate", l),
        navigation.addEventListener("navigatesuccess", t),
        navigation.addEventListener("navigateerror", t),
        setTimeout(e, 100),
        function () {
          ((a = !0),
            navigation.removeEventListener("navigate", l),
            navigation.removeEventListener("navigatesuccess", t),
            navigation.removeEventListener("navigateerror", t),
            n !== null && (n(), (n = null)));
        }
      );
    }
  }
  function pf(l) {
    this._internalRoot = l;
  }
  ((Ku.prototype.render = pf.prototype.render =
    function (l) {
      var t = this._internalRoot;
      if (t === null) throw Error(m(409));
      var e = t.current,
        a = mt();
      xo(e, a, l, t, null, null);
    }),
    (Ku.prototype.unmount = pf.prototype.unmount =
      function () {
        var l = this._internalRoot;
        if (l !== null) {
          this._internalRoot = null;
          var t = l.containerInfo;
          (xo(l.current, 2, null, l, null, null), Au(), (t[Je] = null));
        }
      }));
  function Ku(l) {
    this._internalRoot = l;
  }
  Ku.prototype.unstable_scheduleHydration = function (l) {
    if (l) {
      var t = Yf();
      l = { blockedOn: null, target: l, priority: t };
      for (var e = 0; e < ze.length && t !== 0 && t < ze[e].priority; e++);
      (ze.splice(e, 0, l), e === 0 && Ao(l));
    }
  };
  var Oo = A.version;
  if (Oo !== "19.2.4") throw Error(m(527, Oo, "19.2.4"));
  _.findDOMNode = function (l) {
    var t = l._reactInternals;
    if (t === void 0) throw typeof l.render == "function" ? Error(m(188)) : ((l = Object.keys(l).join(",")), Error(m(268, l)));
    return ((l = T(t)), (l = l !== null ? X(l) : null), (l = l === null ? null : l.stateNode), l);
  };
  var yh = { bundleType: 0, version: "19.2.4", rendererPackageName: "react-dom", currentDispatcherRef: x, reconcilerVersion: "19.2.4" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Ju = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Ju.isDisabled && Ju.supportsFiber)
      try {
        ((Ba = Ju.inject(yh)), (ut = Ju));
      } catch {}
  }
  return (
    (An.createRoot = function (l, t) {
      if (!H(l)) throw Error(m(299));
      var e = !1,
        a = "",
        n = Rd,
        u = qd,
        i = Yd;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (e = !0),
          t.identifierPrefix !== void 0 && (a = t.identifierPrefix),
          t.onUncaughtError !== void 0 && (n = t.onUncaughtError),
          t.onCaughtError !== void 0 && (u = t.onCaughtError),
          t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
        (t = po(l, 1, !1, null, null, e, a, null, n, u, i, Mo)),
        (l[Je] = t.current),
        Ic(l),
        new pf(t)
      );
    }),
    (An.hydrateRoot = function (l, t, e) {
      if (!H(l)) throw Error(m(299));
      var a = !1,
        n = "",
        u = Rd,
        i = qd,
        f = Yd,
        s = null;
      return (
        e != null &&
          (e.unstable_strictMode === !0 && (a = !0),
          e.identifierPrefix !== void 0 && (n = e.identifierPrefix),
          e.onUncaughtError !== void 0 && (u = e.onUncaughtError),
          e.onCaughtError !== void 0 && (i = e.onCaughtError),
          e.onRecoverableError !== void 0 && (f = e.onRecoverableError),
          e.formState !== void 0 && (s = e.formState)),
        (t = po(l, 1, !0, t, e ?? null, a, n, s, u, i, f, Mo)),
        (t.context = bo(null)),
        (e = t.current),
        (a = mt()),
        (a = ci(a)),
        (n = fe(a)),
        (n.callback = null),
        se(e, n, a),
        (e = a),
        (t.current.lanes = e),
        Ua(t, e),
        Bt(t),
        (l[Je] = t.current),
        Ic(l),
        new Ku(t)
      );
    }),
    (An.version = "19.2.4"),
    An
  );
}
var Lo;
function Ah() {
  if (Lo) return Sf.exports;
  Lo = 1;
  function z() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(z);
      } catch (A) {
        console.error(A);
      }
  }
  return (z(), (Sf.exports = Th()), Sf.exports);
}
var Eh = Ah();
const _h = "modulepreload",
  Mh = function (z, A) {
    return new URL(z, A).href;
  },
  Xo = {},
  Oh = function (A, E, m) {
    let H = Promise.resolve();
    if (E && E.length > 0) {
      let T = function (X) {
        return Promise.all(
          X.map((q) =>
            Promise.resolve(q).then(
              (nl) => ({ status: "fulfilled", value: nl }),
              (nl) => ({ status: "rejected", reason: nl })
            )
          )
        );
      };
      const w = document.getElementsByTagName("link"),
        tl = document.querySelector("meta[property=csp-nonce]"),
        D = tl?.nonce || tl?.getAttribute("nonce");
      H = T(
        E.map((X) => {
          if (((X = Mh(X, m)), X in Xo)) return;
          Xo[X] = !0;
          const q = X.endsWith(".css"),
            nl = q ? '[rel="stylesheet"]' : "";
          if (m)
            for (let J = w.length - 1; J >= 0; J--) {
              const ul = w[J];
              if (ul.href === X && (!q || ul.rel === "stylesheet")) return;
            }
          else if (document.querySelector(`link[href="${X}"]${nl}`)) return;
          const R = document.createElement("link");
          if (
            ((R.rel = q ? "stylesheet" : _h),
            q || (R.as = "script"),
            (R.crossOrigin = ""),
            (R.href = X),
            D && R.setAttribute("nonce", D),
            document.head.appendChild(R),
            q)
          )
            return new Promise((J, ul) => {
              (R.addEventListener("load", J), R.addEventListener("error", () => ul(new Error(`Unable to preload CSS for ${X}`))));
            });
        })
      );
    }
    function O(w) {
      const tl = new Event("vite:preloadError", { cancelable: !0 });
      if (((tl.payload = w), window.dispatchEvent(tl), !tl.defaultPrevented)) throw w;
    }
    return H.then((w) => {
      for (const tl of w || []) tl.status === "rejected" && O(tl.reason);
      return A().catch(O);
    });
  };
const Ko = (...z) =>
  z
    .filter((A, E, m) => !!A && A.trim() !== "" && m.indexOf(A) === E)
    .join(" ")
    .trim();
const Dh = (z) => z.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
const Bh = (z) => z.replace(/^([A-Z])|[\s-_]+(\w)/g, (A, E, m) => (m ? m.toUpperCase() : E.toLowerCase()));
const Qo = (z) => {
  const A = Bh(z);
  return A.charAt(0).toUpperCase() + A.slice(1);
};
var Ch = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};
const Uh = (z) => {
  for (const A in z) if (A.startsWith("aria-") || A === "role" || A === "title") return !0;
  return !1;
};
const Hh = Ct.forwardRef(
  ({ color: z = "currentColor", size: A = 24, strokeWidth: E = 2, absoluteStrokeWidth: m, className: H = "", children: O, iconNode: w, ...tl }, D) =>
    Ct.createElement(
      "svg",
      {
        ref: D,
        ...Ch,
        width: A,
        height: A,
        stroke: z,
        strokeWidth: m ? (Number(E) * 24) / Number(A) : E,
        className: Ko("lucide", H),
        ...(!O && !Uh(tl) && { "aria-hidden": "true" }),
        ...tl,
      },
      [...w.map(([T, X]) => Ct.createElement(T, X)), ...(Array.isArray(O) ? O : [O])]
    )
);
const pl = (z, A) => {
  const E = Ct.forwardRef(({ className: m, ...H }, O) =>
    Ct.createElement(Hh, { ref: O, iconNode: A, className: Ko(`lucide-${Dh(Qo(z))}`, `lucide-${z}`, m), ...H })
  );
  return ((E.displayName = Qo(z)), E);
};
const Rh = [
    ["path", { d: "M12 5v14", key: "s699le" }],
    ["path", { d: "m19 12-7 7-7-7", key: "1idqje" }],
  ],
  qh = pl("arrow-down", Rh);
const Yh = [
    ["path", { d: "M5 12h14", key: "1ays0h" }],
    ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }],
  ],
  Jo = pl("arrow-right", Yh);
const Gh = [
    ["path", { d: "M4.5 3h15", key: "c7n0jr" }],
    ["path", { d: "M6 3v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V3", key: "m1uhx7" }],
    ["path", { d: "M6 14h12", key: "4cwo0f" }],
  ],
  ku = pl("beaker", Gh);
const Lh = [
    ["path", { d: "M3 3v16a2 2 0 0 0 2 2h16", key: "c24i48" }],
    ["path", { d: "M18 17V9", key: "2bz60n" }],
    ["path", { d: "M13 17V5", key: "1frdt8" }],
    ["path", { d: "M8 17v-3", key: "17ska0" }],
  ],
  $u = pl("chart-column", Lh);
const Xh = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]],
  Qh = pl("chevron-down", Xh);
const Zh = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]],
  Vh = pl("chevron-up", Zh);
const wh = [
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
    ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }],
  ],
  Zo = pl("circle-check", wh);
const Kh = [
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
    ["path", { d: "M12 6v6l4 2", key: "mmk7yg" }],
  ],
  Ef = pl("clock", Kh);
const Jh = [
    [
      "path",
      {
        d: "M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z",
        key: "1ptgy4",
      },
    ],
    ["path", { d: "M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97", key: "1sl1rz" }],
  ],
  Vo = pl("droplets", Jh);
const kh = [
    ["path", { d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0", key: "1nclc0" }],
    ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }],
  ],
  Wu = pl("eye", kh);
const $h = [
    ["path", { d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z", key: "1oefj6" }],
    ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5", key: "wfsgrz" }],
    ["path", { d: "M10 9H8", key: "b1mrlr" }],
    ["path", { d: "M16 13H8", key: "t4e002" }],
    ["path", { d: "M16 17H8", key: "z1uh3a" }],
  ],
  Wh = pl("file-text", $h);
const Fh = [["path", { d: "M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4", key: "1slcih" }]],
  Tf = pl("flame", Fh);
const Ih = [
    ["path", { d: "M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2", key: "18mbvz" }],
    ["path", { d: "M6.453 15h11.094", key: "3shlmq" }],
    ["path", { d: "M8.5 2h7", key: "csnxdl" }],
  ],
  En = pl("flask-conical", Ih);
const Ph = [
    ["path", { d: "M10 2v6.292a7 7 0 1 0 4 0V2", key: "1s42pc" }],
    ["path", { d: "M5 15h14", key: "m0yey3" }],
    ["path", { d: "M8.5 2h7", key: "csnxdl" }],
  ],
  ly = pl("flask-round", Ph);
const ty = [
    [
      "path",
      {
        d: "M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z",
        key: "sc7q7i",
      },
    ],
  ],
  ey = pl("funnel", ty);
const ay = [
    ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2", key: "1m3agn" }],
    ["circle", { cx: "9", cy: "9", r: "2", key: "af1f0g" }],
    ["path", { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21", key: "1xmnt7" }],
  ],
  ny = pl("image", ay);
const uy = [
    ["path", { d: "M6 18h8", key: "1borvv" }],
    ["path", { d: "M3 22h18", key: "8prr45" }],
    ["path", { d: "M14 22a7 7 0 1 0 0-14h-1", key: "1jwaiy" }],
    ["path", { d: "M9 14h2", key: "197e7h" }],
    ["path", { d: "M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z", key: "1bmzmy" }],
    ["path", { d: "M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3", key: "1drr47" }],
  ],
  Iu = pl("microscope", uy);
const iy = [
    [
      "path",
      { d: "m12 9-8.414 8.414A2 2 0 0 0 3 18.828v1.344a2 2 0 0 1-.586 1.414A2 2 0 0 1 3.828 21h1.344a2 2 0 0 0 1.414-.586L15 12", key: "1y3wsu" },
    ],
    ["path", { d: "m18 9 .4.4a1 1 0 1 1-3 3l-3.8-3.8a1 1 0 1 1 3-3l.4.4 3.4-3.4a1 1 0 1 1 3 3z", key: "110lr1" }],
    ["path", { d: "m2 22 .414-.414", key: "jhxm08" }],
  ],
  cy = pl("pipette", iy);
const fy = [
    ["path", { d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8", key: "v9h5vc" }],
    ["path", { d: "M21 3v5h-5", key: "1q7to0" }],
    ["path", { d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16", key: "3uifl3" }],
    ["path", { d: "M8 16H3v5", key: "1cv678" }],
  ],
  Mn = pl("refresh-cw", fy);
const sy = [
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
    ["circle", { cx: "12", cy: "12", r: "6", key: "1vlfrh" }],
    ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }],
  ],
  wo = pl("target", sy);
const dy = [
    ["path", { d: "M21 7 6.82 21.18a2.83 2.83 0 0 1-3.99-.01a2.83 2.83 0 0 1 0-4L17 3", key: "1ub6xw" }],
    ["path", { d: "m16 2 6 6", key: "1gw87d" }],
    ["path", { d: "M12 16H4", key: "1cjfip" }],
  ],
  Pu = pl("test-tube-diagonal", dy);
const ry = [["path", { d: "M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z", key: "17jzev" }]],
  oy = pl("thermometer", ry);
const my = [
    ["path", { d: "M12 2v2", key: "tus03m" }],
    ["path", { d: "M12 8a4 4 0 0 0-1.645 7.647", key: "wz5p04" }],
    ["path", { d: "M2 12h2", key: "1t8f8n" }],
    ["path", { d: "M20 14.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0z", key: "yu0u2z" }],
    ["path", { d: "m4.93 4.93 1.41 1.41", key: "149t6j" }],
    ["path", { d: "m6.34 17.66-1.41 1.41", key: "1m8zz5" }],
  ],
  hy = pl("thermometer-sun", my);
const yy = [
    ["line", { x1: "10", x2: "14", y1: "2", y2: "2", key: "14vaq8" }],
    ["line", { x1: "12", x2: "15", y1: "14", y2: "11", key: "17fdiu" }],
    ["circle", { cx: "12", cy: "14", r: "8", key: "1e1u0o" }],
  ],
  gy = pl("timer", yy);
const vy = [
    ["path", { d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3", key: "wmoenq" }],
    ["path", { d: "M12 9v4", key: "juzpu7" }],
    ["path", { d: "M12 17h.01", key: "p32p05" }],
  ],
  we = pl("triangle-alert", vy),
  o = {
    i: {
      primary: "#4338ca",
      secondary: "#6366f1",
      light: "#818cf8",
      cardBg: "#eef2ff",
      cardBorder: "#c7d2fe",
      darkText: "#312e81",
      gradient: "linear-gradient(135deg, #4338ca, #6366f1)",
    },
    ii: {
      primary: "#0e7490",
      secondary: "#0891b2",
      light: "#06b6d4",
      cardBg: "#ecfeff",
      cardBorder: "#a5f3fc",
      darkText: "#164e63",
      gradient: "linear-gradient(135deg, #0e7490, #06b6d4)",
    },
    iii: {
      primary: "#047857",
      secondary: "#059669",
      light: "#10b981",
      cardBg: "#ecfdf5",
      cardBorder: "#a7f3d0",
      darkText: "#064e3b",
      gradient: "linear-gradient(135deg, #047857, #10b981)",
    },
    warn: "#dc2626",
    warnBg: "#fef2f2",
    warnBorder: "#fecaca",
    amber: "#d97706",
    amberBg: "#fffbeb",
    amberBorder: "#fde68a",
    slate: "#64748b",
  };
async function py(z) {
  const { default: A } = await Oh(
      async () => {
        const { default: H } = await import("https://cdn.jsdelivr.net/npm/html2canvas@1.4.1/+esm");
        return { default: H };
      },
      [],
      import.meta.url
    ),
    E = await A(z, { scale: 2, useCORS: !0, backgroundColor: null, width: z.scrollWidth, height: z.scrollHeight }),
    m = document.createElement("a");
  ((m.download = "jung-assay-v2-protocol.png"), (m.href = E.toDataURL("image/png")), m.click());
}
function by(z) {
  const A = z.scrollWidth,
    E = z.scrollHeight,
    m = Array.from(document.styleSheets).map((tl) => {
      try {
        return Array.from(tl.cssRules).map((D) => D.cssText).join(`
`);
      } catch {
        return "";
      }
    }).join(`
`),
    H = new Blob(
      [
        `<?xml version="1.0" encoding="UTF-8"?><svg xmlns="http://www.w3.org/2000/svg" width="${A}" height="${E}" viewBox="0 0 ${A} ${E}"><defs><style type="text/css"><![CDATA[${m}]]></style></defs><foreignObject width="100%" height="100%"><div xmlns="http://www.w3.org/1999/xhtml">${z.outerHTML}</div></foreignObject></svg>`,
      ],
      { type: "image/svg+xml;charset=utf-8" }
    ),
    O = URL.createObjectURL(H),
    w = document.createElement("a");
  ((w.download = "jung-assay-v2-protocol.svg"), (w.href = O), w.click(), URL.revokeObjectURL(O));
}
const xy = ({ contentRef: z }) => {
    const [A, E] = Ct.useState(!1),
      m = Ct.useCallback(async () => {
        if (z.current) {
          E(!0);
          try {
            await py(z.current);
          } catch (H) {
            console.error(H);
          }
          E(!1);
        }
      }, [z]);
    return c.jsxs("div", {
      className: "fixed top-3 right-3 z-50 flex gap-2",
      style: { fontFamily: "'Roboto', sans-serif" },
      children: [
        c.jsxs("button", {
          onClick: m,
          disabled: A,
          className: "flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium shadow-md",
          style: { background: o.i.gradient, color: "white", opacity: A ? 0.6 : 1, border: "none", cursor: A ? "wait" : "pointer" },
          children: [c.jsx(ny, { className: "w-3.5 h-3.5" }), A ? "Exporting…" : "PNG"],
        }),
        c.jsxs("button", {
          onClick: () => z.current && by(z.current),
          className: "flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium shadow-md",
          style: { background: o.ii.gradient, color: "white", border: "none", cursor: "pointer" },
          children: [c.jsx(Wh, { className: "w-3.5 h-3.5" }), "SVG"],
        }),
      ],
    });
  },
  Al = ({
    number: z,
    title: A,
    icon: E,
    children: m,
    accent: H = o.ii.secondary,
    accentLight: O = o.ii.cardBg,
    accentBorder: w = o.ii.cardBorder,
    className: tl = "",
  }) =>
    c.jsx("div", {
      className: `relative rounded-xl border p-3 shadow-sm ${tl}`,
      style: { background: O, borderColor: w },
      children: c.jsxs("div", {
        className: "flex items-start gap-2.5",
        children: [
          c.jsx("div", {
            className: "flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold text-xs shadow-sm",
            style: { background: H },
            children: z,
          }),
          c.jsxs("div", {
            className: "flex-1 min-w-0",
            children: [
              c.jsxs("div", {
                className: "flex items-center gap-1.5 mb-1",
                children: [
                  c.jsx(E, { className: "w-3.5 h-3.5 flex-shrink-0", style: { color: H } }),
                  c.jsx("h3", { className: "font-medium text-gray-800 text-sm leading-tight", children: A }),
                ],
              }),
              c.jsx("div", { className: "text-gray-600 text-xs leading-relaxed", children: m }),
            ],
          }),
        ],
      }),
    }),
  Sy = () => c.jsx("div", { className: "flex justify-center py-0.5", children: c.jsx(qh, { className: "w-4 h-4 text-slate-300" }) }),
  Fu = ({ title: z, subtitle: A, icon: E, gradient: m }) =>
    c.jsx("div", {
      className: "rounded-xl px-4 py-3 text-white shadow-md mb-3",
      style: { background: m },
      children: c.jsxs("div", {
        className: "flex items-center gap-2.5",
        children: [
          E && c.jsx(E, { className: "w-5 h-5 opacity-90" }),
          c.jsxs("div", {
            children: [
              c.jsx("h2", { className: "text-base font-bold tracking-tight", style: { fontFamily: "'Roboto', sans-serif" }, children: z }),
              A && c.jsx("p", { className: "text-xs opacity-85 mt-0.5", children: A }),
            ],
          }),
        ],
      }),
    }),
  Pt = ({ label: z, value: A, icon: E, color: m = o.slate }) =>
    c.jsxs("div", {
      className: "flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 shadow-sm border text-xs",
      style: { background: "rgba(255,255,255,0.85)", borderColor: "#e2e8f0" },
      children: [
        E && c.jsx(E, { className: "w-3 h-3", style: { color: m } }),
        c.jsxs("span", { className: "text-slate-500", children: [z, ":"] }),
        c.jsx("span", { className: "font-semibold text-slate-800", children: A }),
      ],
    }),
  _n = ({ title: z, icon: A, children: E, defaultOpen: m = !1, accentColor: H = o.slate }) => {
    const [O, w] = Ct.useState(m);
    return c.jsxs("div", {
      className: "rounded-xl overflow-hidden shadow-sm",
      style: { border: "1.5px solid #e2e8f0", background: "white" },
      children: [
        c.jsxs("button", {
          onClick: () => w(!O),
          className: "w-full px-4 py-2.5 flex items-center justify-between",
          style: { background: "#f8fafc", cursor: "pointer", border: "none" },
          children: [
            c.jsxs("div", {
              className: "flex items-center gap-2",
              children: [
                c.jsx(A, { className: "w-4 h-4", style: { color: H } }),
                c.jsx("span", { className: "font-medium text-slate-800 text-sm", children: z }),
              ],
            }),
            O ? c.jsx(Vh, { className: "w-4 h-4 text-slate-400" }) : c.jsx(Qh, { className: "w-4 h-4 text-slate-400" }),
          ],
        }),
        O && c.jsx("div", { className: "px-4 py-3 border-t border-slate-100", children: E }),
      ],
    });
  },
  Ny = () => {
    const A = (R) => (R / 28) * 100,
      E = (R) => `calc(2% + ${A(R)}% * 0.96)`,
      m = [
        { label: "T0", day: 0, phase: "w1", role: "t0" },
        { label: "Mid", day: 3.5, phase: "w1", role: "mid" },
        { label: "Final", day: 7, phase: "w1", role: "final" },
        { label: "T0", day: 7, phase: "w2", role: "t0" },
        { label: "Mid", day: 10.5, phase: "w2", role: "mid" },
        { label: "Final", day: 14, phase: "w2", role: "final" },
        { label: "T0", day: 14, phase: "w3", role: "t0" },
        { label: "Mid", day: 17.5, phase: "w3", role: "mid" },
        { label: "Final", day: 21, phase: "w3", role: "final" },
        { label: "T0", day: 21, phase: "w4", role: "t0" },
        { label: "Mid", day: 24.5, phase: "w4", role: "mid" },
        { label: "Final", day: 28, phase: "w4", role: "final" },
      ],
      H = {
        w1: { bg: "#eef2ff", ring: "#6366f1", dot: "#4338ca", text: "#312e81" },
        w2: { bg: "#ecfeff", ring: "#06b6d4", dot: "#0891b2", text: "#164e63" },
        w3: { bg: "#ecfdf5", ring: "#10b981", dot: "#059669", text: "#064e3b" },
        w4: { bg: "#fffbeb", ring: "#f59e0b", dot: "#d97706", text: "#92400e" },
      },
      O = { bg: "#fce7f3", ring: "#ec4899", dot: "#db2777", text: "#9d174d", light: "#fbcfe8" },
      w = [
        { key: "w1", startDay: 0, endDay: 7, label: "Window 1" },
        { key: "w2", startDay: 7, endDay: 14, label: "Window 2" },
        { key: "w3", startDay: 14, endDay: 21, label: "Window 3" },
        { key: "w4", startDay: 21, endDay: 28, label: "Window 4" },
      ],
      tl = [
        { label: "P0", day: 0, note: "Inoculate", isInoc: !0 },
        { label: "P1", day: 7, note: "1st transfer", isInoc: !1 },
        { label: "P2", day: 14, note: "2nd transfer", isInoc: !1 },
        { label: "P3", day: 21, note: "3rd transfer", isInoc: !1 },
      ],
      D = {};
    m.forEach((R) => {
      (D[R.day] || (D[R.day] = []), D[R.day].push(R));
    });
    const T = [0, 3, 4, 7, 10, 11, 14, 17, 18, 21, 24, 25, 28];
    return c.jsxs("div", {
      className: "rounded-xl overflow-hidden mb-3",
      style: { background: "#ffffff", border: "2px solid #c7d2fe", boxShadow: "0 4px 24px rgba(99,102,241,0.06)" },
      children: [
        c.jsxs("div", {
          className: "flex items-center justify-between",
          style: { padding: "12px 24px", background: o.ii.gradient, color: "white" },
          children: [
            c.jsxs("div", {
              className: "flex items-center gap-2.5",
              children: [
                c.jsx(Ef, { className: "w-4 h-4", style: { opacity: 0.9 } }),
                c.jsx("h2", { className: "text-sm font-light tracking-wide", children: "Sampling & Culture Transfer Timeline" }),
              ],
            }),
            c.jsx("span", { className: "text-xs font-light", style: { opacity: 0.8 }, children: "28-Day Assay Window" }),
          ],
        }),
        c.jsxs("div", {
          className: "flex flex-wrap gap-2.5 justify-center",
          style: { padding: "12px 24px 6px" },
          children: [
            c.jsxs("div", {
              className: "flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-light",
              style: { background: o.ii.cardBg, color: o.ii.darkText, border: `1px solid ${o.ii.secondary}` },
              children: [
                c.jsx(Pu, { className: "w-3 h-3" }),
                "Sampling Timepoints ",
                c.jsx("span", { style: { opacity: 0.6 }, children: "(12 measurements)" }),
              ],
            }),
            c.jsxs("div", {
              className: "flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-light",
              style: { background: O.bg, color: O.text, border: `1px solid ${O.ring}` },
              children: [
                c.jsx(Mn, { className: "w-3 h-3" }),
                "Serial Transfer ",
                c.jsx("span", { style: { opacity: 0.6 }, children: "(every 7 d)" }),
              ],
            }),
          ],
        }),
        c.jsxs("div", {
          style: { padding: "12px 0 0" },
          children: [
            c.jsxs("div", {
              className: "flex items-center gap-1.5",
              style: { padding: "0 24px", marginBottom: 6 },
              children: [
                c.jsx("div", { className: "rounded-full", style: { width: 8, height: 8, background: o.ii.primary } }),
                c.jsx("span", {
                  className: "uppercase tracking-wider font-light",
                  style: { fontSize: "0.6rem", color: o.ii.primary },
                  children: "Sampling Timepoints",
                }),
                c.jsx("span", {
                  className: "font-light",
                  style: { fontSize: "0.6rem", color: "#9ca3af" },
                  children: "(T0 / Mid / Final per window)",
                }),
              ],
            }),
            c.jsxs("div", {
              className: "relative",
              style: { height: 110, margin: "0 24px" },
              children: [
                c.jsx("div", {
                  className: "absolute rounded-full",
                  style: {
                    left: "2%",
                    right: "2%",
                    top: 48,
                    height: 6,
                    background: "linear-gradient(90deg, #c7d2fe, #a5f3fc, #a7f3d0, #fde68a)",
                    opacity: 0.35,
                  },
                }),
                w.map((R) => {
                  const J = H[R.key],
                    ul = A(R.startDay),
                    bl = A(R.endDay);
                  return c.jsxs(
                    Af.Fragment,
                    {
                      children: [
                        c.jsx("div", {
                          className: "absolute",
                          style: {
                            left: `calc(2% + ${ul}% * 0.96)`,
                            width: `calc(${bl - ul}% * 0.96)`,
                            top: 75,
                            height: 12,
                            borderBottom: `2px solid ${J.ring}`,
                            opacity: 0.25,
                          },
                        }),
                        c.jsx("div", {
                          className: "absolute text-center uppercase tracking-wider font-light",
                          style: {
                            left: `calc(2% + ${(ul + bl) / 2}% * 0.96)`,
                            top: 92,
                            transform: "translateX(-50%)",
                            fontSize: "0.55rem",
                            color: J.text,
                          },
                          children: R.label,
                        }),
                      ],
                    },
                    R.key
                  );
                }),
                Object.entries(D).map(([R, J]) => {
                  const ul = parseFloat(R),
                    bl = E(ul);
                  if (J.length === 2) {
                    const Gl = J[0],
                      k = J[1],
                      Dl = H[Gl.phase],
                      Kl = H[k.phase];
                    return c.jsxs(
                      "div",
                      {
                        className: "absolute flex flex-col items-center",
                        style: { left: bl, top: 0, transform: "translateX(-50%)", width: 72 },
                        children: [
                          c.jsxs("div", {
                            className: "flex gap-1",
                            style: { marginBottom: 3 },
                            children: [
                              c.jsx("div", {
                                className: "rounded-md font-light",
                                style: {
                                  padding: "1px 5px",
                                  fontSize: "0.55rem",
                                  background: Dl.bg,
                                  color: Dl.text,
                                  border: `1.5px solid ${Dl.ring}`,
                                },
                                children: Gl.label,
                              }),
                              c.jsx("div", {
                                className: "rounded-md font-light",
                                style: {
                                  padding: "1px 5px",
                                  fontSize: "0.55rem",
                                  background: Kl.bg,
                                  color: Kl.text,
                                  border: `1.5px solid ${Kl.ring}`,
                                },
                                children: k.label,
                              }),
                            ],
                          }),
                          c.jsx("div", {
                            style: { width: 4, height: 8, background: `linear-gradient(to right, ${Dl.ring}, ${Kl.ring})`, opacity: 0.4 },
                          }),
                          c.jsx("div", {
                            className: "rounded-full shadow-sm",
                            style: {
                              width: 18,
                              height: 18,
                              background: `conic-gradient(${Dl.dot} 0deg 180deg, ${Kl.dot} 180deg 360deg)`,
                              border: "2px solid white",
                            },
                          }),
                        ],
                      },
                      R
                    );
                  }
                  const Nl = J[0],
                    El = H[Nl.phase],
                    xl = Nl.role === "t0",
                    zl = xl ? 18 : Nl.role === "final" ? 16 : 14,
                    wl = zl + 6;
                  return c.jsxs(
                    "div",
                    {
                      className: "absolute flex flex-col items-center",
                      style: { left: bl, top: 0, transform: "translateX(-50%)", width: 52 },
                      children: [
                        c.jsx("div", {
                          className: "rounded-md font-light",
                          style: {
                            padding: "2px 8px",
                            fontSize: "0.65rem",
                            marginBottom: 3,
                            background: El.bg,
                            color: El.text,
                            border: `1.5px solid ${El.ring}`,
                          },
                          children: Nl.label,
                        }),
                        c.jsx("div", { style: { width: 2, height: 8, background: El.ring, opacity: 0.4 } }),
                        xl
                          ? c.jsx("div", {
                              className: "rounded-full flex items-center justify-center",
                              style: { width: wl, height: wl, border: `1.5px dashed ${El.ring}`, opacity: 0.8 },
                              children: c.jsx("div", {
                                className: "rounded-full shadow-sm",
                                style: {
                                  width: zl,
                                  height: zl,
                                  background: `radial-gradient(circle at 35% 35%, ${El.ring}, ${El.dot})`,
                                  border: "2px solid white",
                                },
                              }),
                            })
                          : c.jsx("div", {
                              className: "rounded-full shadow-sm",
                              style: {
                                width: zl,
                                height: zl,
                                background: `radial-gradient(circle at 35% 35%, ${El.ring}, ${El.dot})`,
                                border: "2px solid white",
                              },
                            }),
                      ],
                    },
                    R
                  );
                }),
              ],
            }),
          ],
        }),
        c.jsx("div", {
          style: { padding: "6px 0" },
          children: c.jsxs("div", {
            className: "relative",
            style: { height: 28, margin: "0 24px" },
            children: [
              c.jsx("div", { className: "absolute", style: { left: "2%", right: "2%", top: 0, height: 2, background: "#cbd5e1", borderRadius: 1 } }),
              T.map((R) =>
                c.jsxs(
                  "div",
                  {
                    className: "absolute flex flex-col items-center",
                    style: { left: E(R), top: -3, transform: "translateX(-50%)" },
                    children: [
                      c.jsx("div", { style: { width: 1.5, height: 8, background: "#94a3b8" } }),
                      c.jsx("span", { className: "font-light", style: { fontSize: "0.65rem", color: "#6b7280", marginTop: 2 }, children: R }),
                    ],
                  },
                  R
                )
              ),
              c.jsx("div", {
                className: "absolute font-light",
                style: { left: "50%", bottom: 0, transform: "translateX(-50%) translateY(calc(100% + 2px))", fontSize: "0.65rem", color: "#9ca3af" },
                children: "Day",
              }),
            ],
          }),
        }),
        c.jsxs("div", {
          style: { padding: "0 0 16px" },
          children: [
            c.jsxs("div", {
              className: "flex items-center gap-1.5",
              style: { padding: "0 24px", marginBottom: 6 },
              children: [
                c.jsx("div", { className: "rounded-full", style: { width: 8, height: 8, background: O.dot } }),
                c.jsx("span", {
                  className: "uppercase tracking-wider font-light",
                  style: { fontSize: "0.6rem", color: O.text },
                  children: "Serial Transfers",
                }),
                c.jsx("span", {
                  className: "font-light",
                  style: { fontSize: "0.6rem", color: "#9ca3af" },
                  children: "(1:100 dilution every 7 days)",
                }),
              ],
            }),
            c.jsxs("div", {
              className: "relative",
              style: { height: 105, margin: "0 24px" },
              children: [
                c.jsx("div", {
                  className: "absolute rounded-full",
                  style: { left: "2%", right: "2%", top: 48, height: 6, background: O.light, opacity: 0.5 },
                }),
                [7, 14, 21, 28].map((R, J) => {
                  const ul = J === 0 ? 0 : [7, 14, 21][J - 1],
                    bl = A(ul),
                    Nl = A(R);
                  return c.jsx(
                    "div",
                    {
                      className: "absolute",
                      style: {
                        left: `calc(2% + ${bl}% * 0.96)`,
                        width: `calc(${Nl - bl}% * 0.96)`,
                        top: 42,
                        height: 18,
                        borderBottom: `2px dashed ${O.ring}`,
                        borderRight: `1.5px solid ${O.ring}`,
                        ...(J === 0 ? { borderLeft: `1.5px solid ${O.ring}` } : {}),
                        opacity: 0.35,
                        borderRadius: "0 0 4px 4px",
                      },
                    },
                    `br-${J}`
                  );
                }),
                tl.map((R, J) => {
                  const ul = J % 2 === 0,
                    bl = R.isInoc,
                    Nl = bl
                      ? `radial-gradient(circle at 35% 35%, ${o.ii.light}, ${o.ii.primary})`
                      : `radial-gradient(circle at 35% 35%, ${O.ring}, ${O.dot})`,
                    El = bl ? o.ii.cardBg : O.bg,
                    xl = bl ? o.ii.darkText : O.text,
                    zl = bl ? o.ii.secondary : O.ring,
                    wl = bl ? Iu : Mn;
                  return c.jsx(
                    "div",
                    {
                      className: "absolute flex flex-col items-center",
                      style: { left: E(R.day), transform: "translateX(-50%)", width: 70, top: ul ? 0 : 37 },
                      children: ul
                        ? c.jsxs(c.Fragment, {
                            children: [
                              c.jsx("div", {
                                className: "rounded-md font-light",
                                style: { padding: "2px 8px", fontSize: "0.65rem", background: El, color: xl, border: `1.5px solid ${zl}` },
                                children: R.label,
                              }),
                              c.jsx("span", {
                                className: "font-light",
                                style: { fontSize: "0.6rem", color: xl, opacity: 0.7, whiteSpace: "nowrap" },
                                children: R.note,
                              }),
                              c.jsx("div", { style: { width: 2, height: 6, background: zl, opacity: 0.4 } }),
                              c.jsx("div", {
                                className: "rounded-full flex items-center justify-center shadow-sm",
                                style: { width: 22, height: 22, background: Nl, border: "2px solid white" },
                                children: c.jsx(wl, { className: "text-white", style: { width: 11, height: 11 } }),
                              }),
                            ],
                          })
                        : c.jsxs(c.Fragment, {
                            children: [
                              c.jsx("div", {
                                className: "rounded-full flex items-center justify-center shadow-sm",
                                style: { width: 22, height: 22, background: Nl, border: "2px solid white" },
                                children: c.jsx(wl, { className: "text-white", style: { width: 11, height: 11 } }),
                              }),
                              c.jsx("div", { style: { width: 2, height: 6, background: zl, opacity: 0.4 } }),
                              c.jsx("div", {
                                className: "rounded-md font-light",
                                style: { padding: "2px 8px", fontSize: "0.65rem", background: El, color: xl, border: `1.5px solid ${zl}` },
                                children: R.label,
                              }),
                              c.jsx("span", {
                                className: "font-light",
                                style: { fontSize: "0.6rem", color: xl, opacity: 0.7, whiteSpace: "nowrap" },
                                children: R.note,
                              }),
                            ],
                          }),
                    },
                    R.label
                  );
                }),
              ],
            }),
          ],
        }),
        c.jsx("div", {
          style: { margin: "0 24px 12px" },
          children: c.jsxs("div", {
            className: "rounded-lg",
            style: { background: o.ii.cardBg, border: `1px solid ${o.ii.cardBorder}`, padding: "8px 12px" },
            children: [
              c.jsxs("p", {
                className: "font-light flex items-center gap-1.5",
                style: { fontSize: "0.6rem", color: o.ii.darkText, marginBottom: 4 },
                children: [
                  c.jsx(we, { className: "w-3 h-3", style: { color: o.ii.secondary } }),
                  c.jsx("span", { className: "font-medium", children: "Transfer Day Workflow (Days 7, 14, 21)" }),
                ],
              }),
              c.jsx("div", {
                className: "flex items-center gap-1.5 flex-wrap",
                style: { fontSize: "0.6rem" },
                children: [
                  { label: "① Final sample (outgoing)", bg: O.bg, color: O.text },
                  { label: "② Prep fresh tubes", bg: o.iii.cardBg, color: o.iii.darkText },
                  { label: "③ Transfer 1:100", bg: o.iii.cardBg, color: o.iii.darkText },
                  { label: "④ T₀ sample (incoming)", bg: o.i.cardBg, color: o.i.darkText },
                  { label: "⑤ Incubate 15°C", bg: o.ii.cardBg, color: o.ii.darkText },
                ].map((R, J) =>
                  c.jsxs(
                    Af.Fragment,
                    {
                      children: [
                        c.jsx("span", {
                          className: "rounded px-1.5 py-0.5 font-medium",
                          style: { background: R.bg, color: R.color },
                          children: R.label,
                        }),
                        J < 4 && c.jsx(Jo, { className: "w-2.5 h-2.5 text-slate-300" }),
                      ],
                    },
                    J
                  )
                ),
              }),
            ],
          }),
        }),
      ],
    });
  },
  zy = () => {
    const z = [
      { name: "Gilkey Glacier", isolates: ["GG7", "GG8", "GG22", "GG27B"], color: o.i.primary, bg: o.i.cardBg },
      { name: "Glacier NP", isolates: ["GNP009", "GNP012", "GNP013", "GNP014"], color: o.ii.secondary, bg: o.ii.cardBg },
      {
        name: "Cotton Glacier",
        isolates: ["CGS1", "CGS6", "CGS7", "CG23.3", "CG23.4", "CG23.6", "CG9.2", "CG9.7", "CG9.11"],
        color: o.ii.primary,
        bg: "#e0f2fe",
      },
      { name: "Pony Lake", isolates: ["PL15", "PL16"], color: o.iii.secondary, bg: o.iii.cardBg },
      { name: "Marr Pond", isolates: ["MP_M2"], color: o.amber, bg: o.amberBg },
    ];
    return c.jsxs("div", {
      className: "relative rounded-lg p-3",
      style: { background: "rgba(255,255,255,0.7)", border: "1px solid #e2e8f0" },
      children: [
        c.jsx("p", {
          className: "text-xs font-medium text-slate-600 mb-2 uppercase tracking-wider",
          children: "20 Isolates · 5 Source Environments",
        }),
        c.jsx("div", {
          className: "flex flex-wrap gap-1.5",
          children: z.map((A) =>
            c.jsxs(
              "div",
              {
                className: "rounded-md px-2 py-1.5",
                style: { background: A.bg, border: `1px solid ${A.color}22` },
                children: [
                  c.jsx("p", { className: "font-medium mb-0.5", style: { color: A.color, fontSize: "10px" }, children: A.name }),
                  c.jsx("div", {
                    className: "flex flex-wrap gap-0.5",
                    children: A.isolates.map((E) =>
                      c.jsx(
                        "span",
                        {
                          className: "rounded px-1 py-0.5 font-medium",
                          style: { background: "rgba(255,255,255,0.8)", color: A.color, fontSize: "9px" },
                          children: E,
                        },
                        E
                      )
                    ),
                  }),
                ],
              },
              A.name
            )
          ),
        }),
      ],
    });
  };
function jy() {
  const z = Ct.useRef(null);
  return c.jsxs(c.Fragment, {
    children: [
      c.jsx("style", {
        children: `
        @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap');
      `,
      }),
      c.jsx(xy, { contentRef: z }),
      c.jsx("div", {
        ref: z,
        className: "min-h-screen p-4",
        style: {
          background: "linear-gradient(135deg, #f0f4ff 0%, #ecfeff 40%, #ecfdf5 80%, #f8fafc 100%)",
          fontFamily: "'Roboto', sans-serif",
          fontWeight: 300,
        },
        children: c.jsxs("div", {
          className: "max-w-5xl mx-auto",
          children: [
            c.jsxs("div", {
              className: "text-center mb-6 pt-2",
              children: [
                c.jsxs("div", {
                  className: "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium mb-3",
                  style: { background: o.i.primary, color: "white" },
                  children: [c.jsx(En, { className: "w-3.5 h-3.5" }), "SOP — v2"],
                }),
                c.jsx("h1", {
                  className: "text-3xl mb-2 tracking-tight",
                  style: { color: "#0f172a", fontWeight: 700 },
                  children: "28-Day Ureolytic Activity Assay",
                }),
                c.jsx("p", {
                  className: "text-sm mb-1",
                  style: { color: o.i.secondary, fontWeight: 400 },
                  children: "Serial Transfer Design · Jung et al. (1975) Colorimetric Method",
                }),
                c.jsx("p", { className: "text-xs", style: { color: "#64748b" }, children: "OPA + NED → pink chromophore → 505 nm" }),
                c.jsxs("div", {
                  className: "flex flex-wrap justify-center gap-2 mt-4",
                  children: [
                    c.jsx(Pt, { label: "Isolates", value: "20 × 3 reps", icon: Iu, color: o.i.secondary }),
                    c.jsx(Pt, { label: "Tubes", value: "66/transfer", icon: Pu, color: o.ii.secondary }),
                    c.jsx(Pt, { label: "Timepoints", value: "12 total", icon: Ef, color: o.ii.primary }),
                    c.jsx(Pt, { label: "Transfers", value: "4 (every 7d)", icon: Mn, color: o.iii.secondary }),
                    c.jsx(Pt, { label: "Detection", value: "505 nm", icon: Wu, color: o.iii.primary }),
                  ],
                }),
              ],
            }),
            c.jsx(Fu, {
              title: "Part I — Media Preparation",
              subtitle: "Succinate-based defined medium · Complete before Day 0",
              icon: ku,
              gradient: o.i.gradient,
            }),
            c.jsxs("div", {
              className: "grid grid-cols-2 gap-2 mb-2",
              children: [
                c.jsxs(Al, {
                  number: "1A",
                  title: "Combust Glass Culture Tubes",
                  icon: Tf,
                  accent: o.i.primary,
                  accentLight: o.i.cardBg,
                  accentBorder: o.i.cardBorder,
                  children: [
                    c.jsxs("div", {
                      className: "grid grid-cols-2 gap-1 mt-1",
                      children: [
                        c.jsxs("div", {
                          className: "bg-white rounded px-1.5 py-1 border text-center",
                          style: { borderColor: o.i.cardBorder },
                          children: [
                            c.jsx("p", { className: "text-lg font-bold", style: { color: o.i.primary }, children: "450°C" }),
                            c.jsx("p", { className: "text-slate-500", style: { fontSize: "9px" }, children: "5 hours" }),
                          ],
                        }),
                        c.jsxs("div", {
                          className: "bg-white rounded px-1.5 py-1 border text-center",
                          style: { borderColor: o.i.cardBorder },
                          children: [
                            c.jsx("p", { className: "text-lg font-bold", style: { color: o.i.primary }, children: "66+" }),
                            c.jsx("p", { className: "text-slate-500", style: { fontSize: "9px" }, children: "tubes/transfer" }),
                          ],
                        }),
                      ],
                    }),
                    c.jsx("p", {
                      className: "text-slate-400 mt-1",
                      style: { fontSize: "9px" },
                      children: "16×150 mm borosilicate · Cool in oven · No scratches near OD read zone",
                    }),
                  ],
                }),
                c.jsxs(Al, {
                  number: "1B",
                  title: "Autoclave Tube Closures",
                  icon: Tf,
                  accent: o.i.secondary,
                  accentLight: o.i.cardBg,
                  accentBorder: o.i.cardBorder,
                  children: [
                    c.jsx("div", {
                      className: "bg-white rounded px-2 py-1.5 border mt-0.5",
                      style: { borderColor: o.i.cardBorder },
                      children: c.jsxs("p", {
                        className: "text-xs",
                        children: [
                          c.jsx("span", { className: "font-bold", style: { color: o.i.secondary }, children: "121°C" }),
                          " · 15 psi · 15–20 min dry cycle",
                        ],
                      }),
                    }),
                    c.jsx("p", {
                      className: "text-slate-400 mt-1",
                      style: { fontSize: "9px" },
                      children: "Wrap in foil · Label autoclave tape with date/initials",
                    }),
                  ],
                }),
              ],
            }),
            c.jsxs("div", {
              className: "grid grid-cols-2 gap-2 mb-2",
              children: [
                c.jsxs(Al, {
                  number: "1C",
                  title: "Prepare Base Medium",
                  icon: ku,
                  accent: o.i.primary,
                  accentLight: o.i.cardBg,
                  accentBorder: o.i.cardBorder,
                  children: [
                    c.jsx("div", {
                      className: "grid grid-cols-2 gap-1 mt-1",
                      children: [
                        ["Succinate·6H₂O", "1.126 g/L"],
                        ["Yeast extract", "0.1 g/L"],
                        ["K₂HPO₄", "0.3 g/L"],
                        ["Milli-Q", "to 1 L"],
                      ].map(([A, E]) =>
                        c.jsxs(
                          "div",
                          {
                            className: "bg-white rounded px-1.5 py-1 border text-center",
                            style: { borderColor: o.i.cardBorder },
                            children: [
                              c.jsx("p", { className: "text-slate-500", style: { fontSize: "9px" }, children: A }),
                              c.jsx("p", { className: "font-bold text-xs", style: { color: o.i.primary }, children: E }),
                            ],
                          },
                          A
                        )
                      ),
                    }),
                    c.jsx("p", {
                      className: "text-slate-400 mt-1",
                      style: { fontSize: "9px" },
                      children: "Carbon-matched to 0.5 g/L glucose (16.67 mmol C/L)",
                    }),
                  ],
                }),
                c.jsx(Al, {
                  number: "1D",
                  title: "Adjust pH",
                  icon: Vo,
                  accent: o.i.secondary,
                  accentLight: o.i.cardBg,
                  accentBorder: o.i.cardBorder,
                  children: c.jsxs("div", {
                    className: "flex items-center gap-2",
                    children: [
                      c.jsx("div", {
                        className: "bg-white rounded px-2.5 py-1.5 border text-center flex-shrink-0",
                        style: { borderColor: o.i.cardBorder },
                        children: c.jsxs("p", {
                          className: "text-lg font-bold leading-tight",
                          style: { color: o.i.secondary },
                          children: ["6.8 ", c.jsx("span", { className: "text-xs font-normal text-slate-400", children: "± 0.2" })],
                        }),
                      }),
                      c.jsx("p", { className: "text-xs text-slate-600", children: "Adjust with 1 M HCl or 1 M NaOH" }),
                    ],
                  }),
                }),
              ],
            }),
            c.jsxs("div", {
              className: "grid grid-cols-2 gap-2 mb-2",
              children: [
                c.jsx(Al, {
                  number: "1E",
                  title: "Autoclave Base Medium",
                  icon: Tf,
                  accent: o.i.light,
                  accentLight: o.i.cardBg,
                  accentBorder: o.i.cardBorder,
                  children: c.jsx("p", { className: "mt-0.5", children: "Liquid cycle · 121°C, 15 psi, 20 min/L · ~230 mL/transfer · ~1 L total" }),
                }),
                c.jsxs(Al, {
                  number: "1F",
                  title: "Filter-Sterilize Urea Stock",
                  icon: ey,
                  accent: o.i.primary,
                  accentLight: o.i.cardBg,
                  accentBorder: o.i.cardBorder,
                  children: [
                    c.jsxs("p", {
                      className: "mt-0.5",
                      children: [
                        c.jsx("span", { className: "font-medium", style: { color: o.i.primary }, children: "10% (w/v)" }),
                        " — 20 g in 200 mL · Filter 0.22 µm",
                      ],
                    }),
                    c.jsx("p", { className: "text-slate-400 mt-0.5", style: { fontSize: "9px" }, children: "Store 4°C · Use within 1 week" }),
                    c.jsxs("p", {
                      className: "mt-1 flex items-center gap-1",
                      style: { fontSize: "9px", color: o.warn },
                      children: [c.jsx(we, { className: "w-2.5 h-2.5" }), "Do NOT autoclave urea — degrades at high temp"],
                    }),
                  ],
                }),
              ],
            }),
            c.jsxs("div", {
              className: "grid grid-cols-2 gap-2 mb-6",
              children: [
                c.jsxs(Al, {
                  number: "1G",
                  title: "Combine to Final Medium",
                  icon: ly,
                  accent: o.i.secondary,
                  accentLight: o.i.cardBg,
                  accentBorder: o.i.cardBorder,
                  children: [
                    c.jsx("p", { className: "font-medium text-slate-700 mt-0.5", children: "Final: 2% urea (20 g/L)" }),
                    c.jsxs("div", {
                      className: "grid grid-cols-2 gap-1.5 mt-1",
                      children: [
                        c.jsxs("div", {
                          className: "bg-white rounded px-2 py-1.5 border text-center",
                          style: { borderColor: o.i.cardBorder },
                          children: [
                            c.jsx("p", { className: "text-lg font-bold", style: { color: o.i.primary }, children: "80%" }),
                            c.jsx("p", { className: "text-slate-500", style: { fontSize: "9px" }, children: "Base medium" }),
                          ],
                        }),
                        c.jsxs("div", {
                          className: "bg-white rounded px-2 py-1.5 border text-center",
                          style: { borderColor: o.i.cardBorder },
                          children: [
                            c.jsx("p", { className: "text-lg font-bold", style: { color: o.i.secondary }, children: "20%" }),
                            c.jsx("p", { className: "text-slate-500", style: { fontSize: "9px" }, children: "10% Urea stock" }),
                          ],
                        }),
                      ],
                    }),
                    c.jsx("p", { className: "text-slate-400 mt-1", style: { fontSize: "9px" }, children: "Work in BSC · Mix gently by swirling" }),
                  ],
                }),
                c.jsxs(Al, {
                  number: "1H",
                  title: "Prepare 5% Nitric Acid",
                  icon: we,
                  accent: o.warn,
                  accentLight: o.warnBg,
                  accentBorder: o.warnBorder,
                  children: [
                    c.jsx("p", { className: "mt-0.5", children: "For sample preservation" }),
                    c.jsx("div", {
                      className: "bg-white rounded px-2 py-1.5 border mt-1",
                      style: { borderColor: o.warnBorder },
                      children: c.jsxs("p", {
                        className: "text-xs",
                        children: [
                          c.jsx("span", { className: "font-bold", style: { color: o.warn }, children: "950 mL" }),
                          " DI + ",
                          c.jsx("span", { className: "font-bold", style: { color: o.warn }, children: "50 mL" }),
                          " conc. HNO₃",
                        ],
                      }),
                    }),
                    c.jsxs("p", {
                      className: "mt-1 flex items-center gap-1",
                      style: { fontSize: "9px", color: o.warn },
                      children: [c.jsx(we, { className: "w-2.5 h-2.5" }), "Always add acid to water! Fume hood."],
                    }),
                  ],
                }),
              ],
            }),
            c.jsx(Fu, {
              title: "Part II — Experiment Setup & Serial Transfers",
              subtitle: "Days 0–28 · Inoculation, transfers, and sampling",
              icon: Iu,
              gradient: o.ii.gradient,
            }),
            c.jsx(zy, {}),
            c.jsx(Sy, {}),
            c.jsxs("div", {
              className: "grid grid-cols-2 gap-2 mb-2",
              children: [
                c.jsx(Al, {
                  number: "2A",
                  title: "Prepare Starter Cultures",
                  icon: En,
                  accent: o.ii.primary,
                  accentLight: o.ii.cardBg,
                  accentBorder: o.ii.cardBorder,
                  children: c.jsxs("div", {
                    className: "space-y-1.5 mt-0.5",
                    children: [
                      c.jsxs("div", {
                        className: "bg-white rounded px-2 py-1.5 border",
                        style: { borderColor: o.ii.cardBorder },
                        children: [
                          c.jsx("p", { className: "font-medium", style: { color: o.ii.primary, fontSize: "10px" }, children: "Test Isolates (20)" }),
                          c.jsx("p", {
                            className: "text-slate-600",
                            style: { fontSize: "9px" },
                            children: "R2A plate → colony → 10 mL R2A broth in 50 mL Falcon",
                          }),
                          c.jsx("p", { className: "text-slate-600", style: { fontSize: "9px" }, children: "15°C, 150 RPM, 4 days (Day −4)" }),
                        ],
                      }),
                      c.jsxs("div", {
                        className: "bg-white rounded px-2 py-1.5 border",
                        style: { borderColor: o.ii.cardBorder },
                        children: [
                          c.jsxs("p", {
                            className: "font-medium",
                            style: { color: o.ii.primary, fontSize: "10px" },
                            children: ["Positive Control (", c.jsx("em", { children: "S. pasteurii" }), ")"],
                          }),
                          c.jsx("p", {
                            className: "text-slate-600",
                            style: { fontSize: "9px" },
                            children: "−80°C freezer stock → 10 mL BHI broth in 50 mL Falcon",
                          }),
                          c.jsx("p", { className: "text-slate-600", style: { fontSize: "9px" }, children: "15°C, 150 RPM, 4 days" }),
                        ],
                      }),
                    ],
                  }),
                }),
                c.jsxs(Al, {
                  number: "2B",
                  title: "Standardize Inocula",
                  icon: $u,
                  accent: o.ii.secondary,
                  accentLight: o.ii.cardBg,
                  accentBorder: o.ii.cardBorder,
                  children: [
                    c.jsxs("div", {
                      className: "bg-white rounded-lg px-3 py-2 border text-center mt-1",
                      style: { borderColor: o.ii.cardBorder },
                      children: [
                        c.jsx("p", { className: "text-slate-600", style: { fontSize: "10px" }, children: "Target OD₆₀₀" }),
                        c.jsx("p", { className: "text-2xl font-bold", style: { color: o.ii.secondary }, children: "0.02–0.04" }),
                      ],
                    }),
                    c.jsx("p", {
                      className: "text-slate-500 mt-1",
                      style: { fontSize: "9px" },
                      children: "V₁ = (0.025 × 3,000 µL) ÷ True OD · Round to nearest 5 µL",
                    }),
                  ],
                }),
              ],
            }),
            c.jsxs("div", {
              className: "grid grid-cols-2 gap-2 mb-6",
              children: [
                c.jsxs(Al, {
                  number: "2C",
                  title: "Inoculate — Day 0",
                  icon: Iu,
                  accent: o.ii.light,
                  accentLight: o.ii.cardBg,
                  accentBorder: o.ii.cardBorder,
                  children: [
                    c.jsx("div", {
                      className: "grid grid-cols-3 gap-1 mt-1",
                      children: [
                        ["60", "Isolates", "20×3"],
                        ["3", "Pos ctrl", "S. pasteurii"],
                        ["3", "Neg ctrl", "Uninoc."],
                      ].map(([A, E, m]) =>
                        c.jsxs(
                          "div",
                          {
                            className: "bg-white rounded px-1.5 py-1.5 border text-center",
                            style: { borderColor: o.ii.cardBorder },
                            children: [
                              c.jsx("p", { className: "text-lg font-bold", style: { color: o.ii.primary }, children: A }),
                              c.jsx("p", { className: "text-slate-600", style: { fontSize: "9px" }, children: E }),
                              c.jsx("p", { className: "text-slate-400 italic", style: { fontSize: "8px" }, children: m }),
                            ],
                          },
                          E
                        )
                      ),
                    }),
                    c.jsxs("p", {
                      className: "rounded px-2 py-1 mt-1.5 flex items-center gap-1 border",
                      style: { fontSize: "9px", color: o.ii.darkText, background: o.ii.cardBg, borderColor: o.ii.cardBorder },
                      children: [c.jsx(Zo, { className: "w-2.5 h-2.5" }), "T₀ samples · OD₆₀₀ · pH · 15°C, 150 RPM"],
                    }),
                  ],
                }),
                c.jsxs(Al, {
                  number: "2D",
                  title: "Culture Maintenance",
                  icon: Mn,
                  accent: o.ii.primary,
                  accentLight: o.ii.cardBg,
                  accentBorder: o.ii.cardBorder,
                  children: [
                    c.jsx("div", {
                      className: "bg-white rounded px-2 py-1.5 border mt-0.5",
                      style: { borderColor: o.ii.cardBorder },
                      children: c.jsxs("div", {
                        className: "flex gap-4",
                        children: [
                          c.jsxs("span", {
                            className: "text-xs flex items-center gap-1",
                            children: [
                              c.jsx(oy, { className: "w-3 h-3", style: { color: o.ii.secondary } }),
                              c.jsx("span", { className: "font-medium", children: "15°C" }),
                            ],
                          }),
                          c.jsxs("span", {
                            className: "text-xs flex items-center gap-1",
                            children: [
                              c.jsx(Mn, { className: "w-3 h-3", style: { color: o.ii.secondary } }),
                              c.jsx("span", { className: "font-medium", children: "150 RPM" }),
                            ],
                          }),
                        ],
                      }),
                    }),
                    c.jsxs("div", {
                      className: "rounded px-2 py-1.5 mt-1.5",
                      style: { background: "rgba(255,255,255,0.5)", border: `1px dashed ${o.ii.cardBorder}` },
                      children: [
                        c.jsxs("p", {
                          className: "font-medium flex items-center gap-1",
                          style: { color: o.ii.darkText, fontSize: "10px" },
                          children: [c.jsx(Ef, { className: "w-3 h-3" }), "Transfer every 7 days (Days 7, 14, 21)"],
                        }),
                        c.jsx("p", {
                          className: "text-slate-600 mt-0.5",
                          style: { fontSize: "9px" },
                          children: "30 µL → 3 mL fresh medium (1:100) · BSC · Label clearly",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            c.jsx(Fu, { title: "Sampling", subtitle: "3 timepoints per window · 12 total", icon: Pu, gradient: o.ii.gradient }),
            c.jsx(Ny, {}),
            c.jsxs("div", {
              className: "grid grid-cols-3 gap-2 mb-6",
              children: [
                c.jsx(Al, {
                  number: "3A",
                  title: "Measure pH",
                  icon: Vo,
                  accent: o.ii.primary,
                  accentLight: o.ii.cardBg,
                  accentBorder: o.ii.cardBorder,
                  children: c.jsx("p", { className: "mt-0.5", children: "Record at each timepoint · Tracks alkalinization from urea hydrolysis" }),
                }),
                c.jsxs(Al, {
                  number: "3B",
                  title: "Measure OD₆₀₀",
                  icon: Wu,
                  accent: o.ii.secondary,
                  accentLight: o.ii.cardBg,
                  accentBorder: o.ii.cardBorder,
                  children: [
                    c.jsxs("div", {
                      className: "bg-white rounded px-2 py-1.5 border mt-0.5",
                      style: { borderColor: o.ii.cardBorder },
                      children: [
                        c.jsx("p", { className: "text-xs font-medium", style: { color: o.ii.secondary }, children: "Direct reads in glass tubes" }),
                        c.jsx("p", { className: "text-slate-500", style: { fontSize: "9px" }, children: "Blank with uninoculated neg. ctrl tube" }),
                      ],
                    }),
                    c.jsx("p", {
                      className: "text-slate-400 mt-1",
                      style: { fontSize: "9px" },
                      children: "Same spectrophotometer · Same tube orientation · Record time (HH:MM)",
                    }),
                  ],
                }),
                c.jsxs(Al, {
                  number: "3C",
                  title: "Preserve Urea Samples",
                  icon: Pu,
                  accent: o.ii.light,
                  accentLight: o.ii.cardBg,
                  accentBorder: o.ii.cardBorder,
                  children: [
                    c.jsxs("div", {
                      className: "bg-white rounded px-2 py-1.5 border mt-0.5",
                      style: { borderColor: o.ii.cardBorder },
                      children: [
                        c.jsxs("p", {
                          className: "text-xs",
                          children: [
                            c.jsx("span", { className: "font-medium", style: { color: o.ii.primary }, children: "30 µL" }),
                            " sample + ",
                            c.jsx("span", { className: "font-medium", style: { color: o.ii.primary }, children: "570 µL" }),
                            " 5% HNO₃",
                          ],
                        }),
                        c.jsx("p", { className: "text-slate-400", style: { fontSize: "9px" }, children: "1:20 dilution · Vortex · 4°C" }),
                      ],
                    }),
                    c.jsxs("p", {
                      className: "mt-1 flex items-center gap-1",
                      style: { fontSize: "9px", color: o.amber },
                      children: [c.jsx(we, { className: "w-2.5 h-2.5" }), "Matrix-match standards!"],
                    }),
                  ],
                }),
              ],
            }),
            c.jsx(Fu, {
              title: "Part III — Reading the Jung Assay",
              subtitle: "Colorimetric urea quantification · Can be batched",
              icon: En,
              gradient: o.iii.gradient,
            }),
            c.jsxs("div", {
              className: "flex flex-wrap justify-center gap-2 mb-3",
              children: [
                c.jsx(Pt, { label: "λ", value: "505 nm", icon: Wu, color: o.iii.primary }),
                c.jsx(Pt, { label: "Range", value: "0–2 g/L", icon: wo, color: o.iii.secondary }),
                c.jsx(Pt, { label: "Incubation", value: "37°C, 30 min", icon: hy, color: o.iii.light }),
                c.jsx(Pt, { label: "Scale", value: "216 wells/tp (3 plates)", icon: $u, color: o.iii.primary }),
              ],
            }),
            c.jsxs(Al, {
              number: "4A",
              title: "Prepare Reagents",
              icon: ku,
              accent: o.iii.primary,
              accentLight: o.iii.cardBg,
              accentBorder: o.iii.cardBorder,
              className: "mb-2",
              children: [
                c.jsx("div", {
                  className: "grid grid-cols-3 gap-1.5 mt-1",
                  children: [
                    { label: "R1", name: "Brij-L23", detail: "33% v/v · 1 mL + 29 mL DI" },
                    { label: "R2", name: "OPA", detail: "200 mg OPA + 74 mL H₂SO₄ + R1 → 1 L" },
                    { label: "R3", name: "NED", detail: "600 mg NED + 5 g boric + 222 mL H₂SO₄ + R1 → 1 L" },
                  ].map((A) =>
                    c.jsxs(
                      "div",
                      {
                        className: "bg-white rounded px-2 py-1.5 border",
                        style: { borderColor: o.iii.cardBorder },
                        children: [
                          c.jsx("p", { className: "font-bold uppercase text-slate-400", style: { fontSize: "9px" }, children: A.label }),
                          c.jsx("p", { className: "font-medium text-xs", style: { color: o.iii.primary }, children: A.name }),
                          c.jsx("p", { className: "text-slate-500", style: { fontSize: "9px" }, children: A.detail }),
                        ],
                      },
                      A.label
                    )
                  ),
                }),
                c.jsx("p", {
                  className: "text-slate-400 mt-1",
                  style: { fontSize: "9px" },
                  children: "Amber bottles · RT · Stable several weeks · Discard NED if dark brown",
                }),
              ],
            }),
            c.jsxs("div", {
              className: "grid grid-cols-2 gap-2 mb-2",
              children: [
                c.jsx(Al, {
                  number: "4B",
                  title: "Standards (Fresh Daily)",
                  icon: $u,
                  accent: o.iii.secondary,
                  accentLight: o.iii.cardBg,
                  accentBorder: o.iii.cardBorder,
                  children: c.jsxs("div", {
                    className: "bg-white rounded px-2 py-1.5 border mt-0.5",
                    style: { borderColor: o.iii.cardBorder },
                    children: [
                      c.jsx("p", { className: "text-xs font-medium text-slate-700 mb-1", children: "Stock: 2.0 g/L (0.200 g / 100 mL)" }),
                      c.jsxs("div", {
                        className: "flex items-center gap-0.5 flex-wrap",
                        children: [
                          ["0.00", "0.25", "0.50", "1.00", "1.50", "2.00"].map((A, E) =>
                            c.jsxs(
                              Af.Fragment,
                              {
                                children: [
                                  c.jsx("span", {
                                    className: "rounded px-1.5 py-0.5 font-medium",
                                    style: { background: `rgba(4,120,87,${0.08 + E * 0.15})`, color: o.iii.darkText, fontSize: "9px" },
                                    children: A,
                                  }),
                                  E < 5 && c.jsx(Jo, { className: "w-2 h-2 text-slate-300" }),
                                ],
                              },
                              A
                            )
                          ),
                          c.jsx("span", { className: "text-slate-400 ml-1", style: { fontSize: "9px" }, children: "g/L" }),
                        ],
                      }),
                    ],
                  }),
                }),
                c.jsxs(Al, {
                  number: "4C",
                  title: "Load Samples & Standards",
                  icon: cy,
                  accent: o.iii.light,
                  accentLight: o.iii.cardBg,
                  accentBorder: o.iii.cardBorder,
                  children: [
                    c.jsxs("p", {
                      className: "mt-0.5",
                      children: [
                        "Pipette ",
                        c.jsx("span", { className: "font-medium", style: { color: o.iii.primary }, children: "10 µL" }),
                        " per well (triplicates)",
                      ],
                    }),
                    c.jsx("p", {
                      className: "text-slate-400 mt-1",
                      style: { fontSize: "9px" },
                      children: "66 samples × 3 + 18 std = 216 wells → 3 plates/tp",
                    }),
                  ],
                }),
              ],
            }),
            c.jsxs("div", {
              className: "grid grid-cols-2 gap-2 mb-2",
              children: [
                c.jsx(Al, {
                  number: "4D",
                  title: "Add Reagent 2 (OPA)",
                  icon: En,
                  accent: o.iii.primary,
                  accentLight: o.iii.cardBg,
                  accentBorder: o.iii.cardBorder,
                  children: c.jsxs("p", {
                    className: "mt-0.5",
                    children: [
                      c.jsx("span", { className: "font-medium", style: { color: o.iii.primary }, children: "125 µL" }),
                      " to all wells · Multi-channel · Slowly",
                    ],
                  }),
                }),
                c.jsx(Al, {
                  number: "4E",
                  title: "Add Reagent 3 (NED)",
                  icon: En,
                  accent: o.iii.secondary,
                  accentLight: o.iii.cardBg,
                  accentBorder: o.iii.cardBorder,
                  children: c.jsxs("p", {
                    className: "mt-0.5",
                    children: [
                      c.jsx("span", { className: "font-medium", style: { color: o.iii.secondary }, children: "125 µL" }),
                      " to all wells · Total: ",
                      c.jsx("span", { className: "font-medium", children: "260 µL" }),
                      "/well",
                    ],
                  }),
                }),
              ],
            }),
            c.jsxs("div", {
              className: "grid grid-cols-2 gap-2 mb-6",
              children: [
                c.jsx(Al, {
                  number: "4F",
                  title: "Mix & Incubate",
                  icon: gy,
                  accent: o.iii.light,
                  accentLight: o.iii.cardBg,
                  accentBorder: o.iii.cardBorder,
                  children: c.jsxs("div", {
                    className: "grid grid-cols-2 gap-1.5 mt-1",
                    children: [
                      c.jsxs("div", {
                        className: "bg-white rounded px-2 py-2 border text-center",
                        style: { borderColor: o.iii.cardBorder },
                        children: [
                          c.jsx("p", { className: "text-xl font-bold", style: { color: o.iii.secondary }, children: "450" }),
                          c.jsx("p", { className: "text-slate-500", style: { fontSize: "9px" }, children: "RPM · 1 min" }),
                        ],
                      }),
                      c.jsxs("div", {
                        className: "bg-white rounded px-2 py-2 border text-center",
                        style: { borderColor: o.iii.cardBorder },
                        children: [
                          c.jsx("p", { className: "text-xl font-bold", style: { color: o.iii.secondary }, children: "37°C" }),
                          c.jsx("p", { className: "text-slate-500", style: { fontSize: "9px" }, children: "30 min · lid on" }),
                        ],
                      }),
                    ],
                  }),
                }),
                c.jsxs(Al, {
                  number: "4G",
                  title: "Read at 505 nm",
                  icon: Wu,
                  accent: o.iii.primary,
                  accentLight: o.iii.cardBg,
                  accentBorder: o.iii.cardBorder,
                  children: [
                    c.jsx("div", {
                      className: "bg-white rounded px-2 py-1.5 border mt-0.5",
                      style: { borderColor: o.iii.cardBorder },
                      children: c.jsx("div", {
                        className: "flex items-center gap-0.5",
                        children: [
                          { color: "#fefce8", label: "0" },
                          { color: "#fde68a", label: ".25" },
                          { color: "#fdba74", label: ".50" },
                          { color: "#f9a8d4", label: "1.0" },
                          { color: "#f472b6", label: "1.5" },
                          { color: "#ec4899", label: "2.0" },
                        ].map(({ color: A, label: E }) =>
                          c.jsxs(
                            "div",
                            {
                              className: "flex-1 text-center",
                              children: [
                                c.jsx("div", { className: "h-4 rounded", style: { background: A } }),
                                c.jsx("p", { className: "text-slate-400", style: { fontSize: "8px" }, children: E }),
                              ],
                            },
                            E
                          )
                        ),
                      }),
                    }),
                    c.jsxs("p", {
                      className: "mt-1 flex items-center gap-1",
                      style: { fontSize: "9px", color: o.warn },
                      children: [c.jsx(we, { className: "w-2.5 h-2.5" }), "Hazardous waste only — no drain"],
                    }),
                  ],
                }),
              ],
            }),
            c.jsxs("div", {
              className: "space-y-2 mb-6",
              children: [
                c.jsx(_n, {
                  title: "Quality Control Criteria",
                  icon: Zo,
                  defaultOpen: !0,
                  accentColor: o.iii.secondary,
                  children: c.jsx("div", {
                    className: "grid grid-cols-3 gap-3",
                    children: [
                      ["R² ≥ 0.97", "Standard Curve", "(pref. ≥ 0.99)"],
                      ["< 5%", "Triplicate CV", ""],
                      ["< 0.05", "Blank Abs.", ""],
                    ].map(([A, E, m]) =>
                      c.jsxs(
                        "div",
                        {
                          className: "rounded-lg p-3 text-center",
                          style: { background: o.iii.cardBg, border: `1px solid ${o.iii.cardBorder}` },
                          children: [
                            c.jsx("p", { className: "text-2xl font-bold", style: { color: o.iii.secondary }, children: A }),
                            c.jsx("p", { className: "text-xs text-slate-600 mt-0.5", children: E }),
                            m && c.jsx("p", { className: "text-slate-400", style: { fontSize: "9px" }, children: m }),
                          ],
                        },
                        E
                      )
                    ),
                  }),
                }),
                c.jsx(_n, {
                  title: "Analysis Workflow",
                  icon: $u,
                  accentColor: o.iii.primary,
                  children: c.jsxs("div", {
                    className: "grid grid-cols-2 gap-3",
                    children: [
                      c.jsxs("div", {
                        className: "rounded-lg p-3",
                        style: { background: "#f8fafc", border: "1px solid #e2e8f0" },
                        children: [
                          c.jsx("p", { className: "font-medium text-xs text-slate-700 mb-2", children: "Standard Curve" }),
                          c.jsxs("div", {
                            className: "text-slate-600 space-y-1",
                            style: { fontSize: "10px" },
                            children: [
                              c.jsx("p", { children: "1. Average triplicates: A_mean = (A₁+A₂+A₃)/3" }),
                              c.jsx("p", { children: "2. Blank subtract: A_corr = A_mean − A_blank" }),
                              c.jsx("p", { children: "3. Plot A_corr vs [urea]" }),
                              c.jsx("p", { children: "4. Linear fit: y = mx + b (R² ≥ 0.97)" }),
                            ],
                          }),
                        ],
                      }),
                      c.jsxs("div", {
                        className: "rounded-lg p-3",
                        style: { background: "#f8fafc", border: "1px solid #e2e8f0" },
                        children: [
                          c.jsx("p", { className: "font-medium text-xs text-slate-700 mb-2", children: "Sample Concentration" }),
                          c.jsxs("div", {
                            className: "text-slate-600 space-y-1",
                            style: { fontSize: "10px" },
                            children: [
                              c.jsx("p", { children: "1. Average & blank-subtract samples" }),
                              c.jsx("p", { children: "2. C_meas = (A_corr − b) / m" }),
                              c.jsx("p", { children: "3. C_sample = C_meas × DF" }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
                c.jsxs("div", {
                  className: "grid grid-cols-2 gap-2",
                  children: [
                    c.jsx(_n, {
                      title: "Controls",
                      icon: wo,
                      accentColor: o.ii.secondary,
                      children: c.jsxs("div", {
                        className: "space-y-2",
                        children: [
                          c.jsxs("div", {
                            className: "rounded-lg p-3",
                            style: { background: o.i.cardBg, border: `1px solid ${o.i.cardBorder}` },
                            children: [
                              c.jsxs("p", {
                                className: "font-medium text-xs",
                                style: { color: o.i.primary },
                                children: ["➕ Positive — ", c.jsx("em", { children: "S. pasteurii" }), " (×3)"],
                              }),
                              c.jsx("p", { className: "text-slate-600", style: { fontSize: "10px" }, children: "Expect rapid urea depletion" }),
                            ],
                          }),
                          c.jsxs("div", {
                            className: "rounded-lg p-3",
                            style: { background: "#f8fafc", border: "1px solid #cbd5e1" },
                            children: [
                              c.jsx("p", { className: "font-medium text-xs text-slate-700", children: "➖ Negative — Uninoculated (×3)" }),
                              c.jsx("p", { className: "text-slate-600", style: { fontSize: "10px" }, children: "Urea stays ~20 g/L" }),
                            ],
                          }),
                        ],
                      }),
                    }),
                    c.jsx(_n, {
                      title: "Safety",
                      icon: we,
                      accentColor: o.warn,
                      children: c.jsxs("div", {
                        className: "rounded-lg p-3",
                        style: { background: o.amberBg, border: `1px solid ${o.amberBorder}` },
                        children: [
                          c.jsx("p", {
                            className: "font-medium text-xs mb-1.5",
                            style: { color: o.amber },
                            children: "⚠️ Fume hood for all acid/reagent work",
                          }),
                          c.jsxs("div", {
                            className: "grid grid-cols-2 gap-2",
                            style: { fontSize: "10px" },
                            children: [
                              c.jsxs("div", {
                                className: "text-slate-600 space-y-0.5",
                                children: [
                                  c.jsx("p", { className: "font-medium text-slate-700", children: "Hazards:" }),
                                  c.jsx("p", { children: "• H₂SO₄ — Corrosive" }),
                                  c.jsx("p", { children: "• HNO₃ — Oxidizer" }),
                                  c.jsx("p", { children: "• OPA — Toxic" }),
                                  c.jsx("p", { children: "• NED — Carcinogen risk" }),
                                ],
                              }),
                              c.jsxs("div", {
                                className: "text-slate-600 space-y-0.5",
                                children: [
                                  c.jsx("p", { className: "font-medium text-slate-700", children: "PPE:" }),
                                  c.jsx("p", { children: "• Lab coat" }),
                                  c.jsx("p", { children: "• Nitrile gloves" }),
                                  c.jsx("p", { children: "• Safety glasses/shield" }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
                c.jsx(_n, {
                  title: "Materials Estimate",
                  icon: ku,
                  accentColor: o.ii.primary,
                  children: c.jsxs("table", {
                    className: "w-full text-xs",
                    children: [
                      c.jsx("thead", {
                        children: c.jsxs("tr", {
                          style: { borderBottom: "2px solid #e2e8f0" },
                          children: [
                            c.jsx("th", { className: "py-1.5 pr-3 text-left text-slate-600 font-medium", children: "Item" }),
                            c.jsx("th", { className: "py-1.5 pr-3 text-left text-slate-600 font-medium", children: "Qty" }),
                            c.jsx("th", { className: "py-1.5 text-left text-slate-600 font-medium", children: "Notes" }),
                          ],
                        }),
                      }),
                      c.jsx("tbody", {
                        className: "text-slate-600",
                        style: { fontSize: "11px" },
                        children: [
                          ["Growth medium", "~1 L", "~230 mL × 4 transfers"],
                          ["Glass culture tubes", "~66/transfer", "Combusted; replaced each window"],
                          ["Microcentrifuge tubes", "~792", "66/tp × 12 timepoints"],
                          ["96-well plates (Jung)", "~36", "3/tp × 12"],
                          ["50 mL Falcon tubes", "~25", "For starter cultures"],
                        ].map(([A, E, m]) =>
                          c.jsxs(
                            "tr",
                            {
                              style: { borderBottom: "1px solid #f1f5f9" },
                              children: [
                                c.jsx("td", { className: "py-1.5 pr-3 font-medium text-slate-700", children: A }),
                                c.jsx("td", { className: "py-1.5 pr-3 font-semibold", style: { color: o.ii.secondary }, children: E }),
                                c.jsx("td", { className: "py-1.5 text-slate-500", children: m }),
                              ],
                            },
                            A
                          )
                        ),
                      }),
                    ],
                  }),
                }),
              ],
            }),
            c.jsx("div", {
              className: "text-center text-xs pb-4",
              style: { color: "#94a3b8" },
              children: c.jsxs("p", {
                children: [
                  "Jung, D., Biggs, H., Erikson, J., & Ledyard, P. U. (1975) ",
                  c.jsx("em", { children: "Clinical Chemistry" }),
                  " 21(8):1136–1140",
                ],
              }),
            }),
          ],
        }),
      }),
    ],
  });
}
Eh.createRoot(document.getElementById("diagram-root")).render(c.jsx(jy, {}));
