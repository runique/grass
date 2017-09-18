/*
 jQuery v1.10.2 | (c) 2005, 2013 jQuery Foundation, Inc. | jquery.org/license
//@ sourceMappingURL=jquery-1.10.2.min.map
*/
(function(n, k) {
    function H(a) {
        var b = a.length,
            d = c.type(a);
        return c.isWindow(a) ? !1 : 1 === a.nodeType && b ? !0 : "array" === d || "function" !== d && (0 === b || "number" == typeof b && 0 < b && b - 1 in a)
    }

    function ca(a) {
        var b = eb[a] = {};
        return c.each(a.match(oa) || [], function(a, c) {
            b[c] = !0
        }), b
    }

    function g(a, b, d, e) {
        if (c.acceptData(a)) {
            var f, h, l = c.expando,
                m = a.nodeType,
                x = m ? c.cache : a,
                p = m ? a[l] : a[l] && l;
            if (p && x[p] && (e || x[p].data) || d !== k || "string" != typeof b) return p || (p = m ? a[l] = na.pop() || c.guid++ : l), x[p] || (x[p] = m ? {} : {
                toJSON: c.noop
            }), ("object" ==
                typeof b || "function" == typeof b) && (e ? x[p] = c.extend(x[p], b) : x[p].data = c.extend(x[p].data, b)), h = x[p], e || (h.data || (h.data = {}), h = h.data), d !== k && (h[c.camelCase(b)] = d), "string" == typeof b ? (f = h[b], null == f && (f = h[c.camelCase(b)])) : f = h, f
        }
    }

    function q(a, b, d) {
        if (c.acceptData(a)) {
            var e, f, h = a.nodeType,
                l = h ? c.cache : a,
                m = h ? a[c.expando] : c.expando;
            if (l[m]) {
                if (b && (e = d ? l[m] : l[m].data)) {
                    c.isArray(b) ? b = b.concat(c.map(b, c.camelCase)) : b in e ? b = [b] : (b = c.camelCase(b), b = b in e ? [b] : b.split(" "));
                    for (f = b.length; f--;) delete e[b[f]];
                    if (d ? !z(e) : !c.isEmptyObject(e)) return
                }(d || (delete l[m].data, z(l[m]))) && (h ? c.cleanData([a], !0) : c.support.deleteExpando || l != l.window ? delete l[m] : l[m] = null)
            }
        }
    }

    function F(a, b, d) {
        if (d === k && 1 === a.nodeType) {
            var e = "data-" + b.replace(Eb, "-$1").toLowerCase();
            if (d = a.getAttribute(e), "string" == typeof d) {
                try {
                    d = "true" === d ? !0 : "false" === d ? !1 : "null" === d ? null : +d + "" === d ? +d : Fb.test(d) ? c.parseJSON(d) : d
                } catch (f) {}
                c.data(a, b, d)
            } else d = k
        }
        return d
    }

    function z(a) {
        for (var b in a)
            if (("data" !== b || !c.isEmptyObject(a[b])) && "toJSON" !==
                b) return !1;
        return !0
    }

    function S() {
        return !0
    }

    function ga() {
        return !1
    }

    function da() {
        try {
            return A.activeElement
        } catch (a) {}
    }

    function L(a, b) {
        do a = a[b]; while (a && 1 !== a.nodeType);
        return a
    }

    function N(a, b, d) {
        if (c.isFunction(b)) return c.grep(a, function(a, c) {
            return !!b.call(a, c, a) !== d
        });
        if (b.nodeType) return c.grep(a, function(a) {
            return a === b !== d
        });
        if ("string" == typeof b) {
            if (Gb.test(b)) return c.filter(b, a, d);
            b = c.filter(b, a)
        }
        return c.grep(a, function(a) {
            return 0 <= c.inArray(a, b) !== d
        })
    }

    function V(a) {
        var b = fb.split("|");
        a = a.createDocumentFragment();
        if (a.createElement)
            for (; b.length;) a.createElement(b.pop());
        return a
    }

    function aa(a, b) {
        return c.nodeName(a, "table") && c.nodeName(1 === b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
    }

    function ha(a) {
        return a.type = (null !== c.find.attr(a, "type")) + "/" + a.type, a
    }

    function ia(a) {
        var b = Hb.exec(a.type);
        return b ? a.type = b[1] : a.removeAttribute("type"), a
    }

    function ja(a, b) {
        for (var d, e = 0; null != (d = a[e]); e++) c._data(d,
            "globalEval", !b || c._data(b[e], "globalEval"))
    }

    function ma(a, b) {
        if (1 === b.nodeType && c.hasData(a)) {
            var d, e;
            var f = c._data(a);
            var h = c._data(b, f),
                l = f.events;
            if (l)
                for (d in delete h.handle, h.events = {}, l)
                    for (f = 0, e = l[d].length; e > f; f++) c.event.add(b, d, l[d][f]);
            h.data && (h.data = c.extend({}, h.data))
        }
    }

    function v(a, b) {
        var d, e, f = 0,
            h = typeof a.getElementsByTagName !== U ? a.getElementsByTagName(b || "*") : typeof a.querySelectorAll !== U ? a.querySelectorAll(b || "*") : k;
        if (!h)
            for (h = [], d = a.childNodes || a; null != (e = d[f]); f++) !b || c.nodeName(e,
                b) ? h.push(e) : c.merge(h, v(e, b));
        return b === k || b && c.nodeName(a, b) ? c.merge([a], h) : h
    }

    function ta(a) {
        Qa.test(a.type) && (a.defaultChecked = a.checked)
    }

    function ua(a, b) {
        if (b in a) return b;
        for (var c = b.charAt(0).toUpperCase() + b.slice(1), e = b, f = gb.length; f--;)
            if (b = gb[f] + c, b in a) return b;
        return e
    }

    function W(a, b) {
        return a = b || a, "none" === c.css(a, "display") || !c.contains(a.ownerDocument, a)
    }

    function ea(a, b) {
        for (var d, e, f, h = [], l = 0, m = a.length; m > l; l++) e = a[l], e.style && (h[l] = c._data(e, "olddisplay"), d = e.style.display, b ? (h[l] ||
            "none" !== d || (e.style.display = ""), "" === e.style.display && W(e) && (h[l] = c._data(e, "olddisplay", t(e.nodeName)))) : h[l] || (f = W(e), (d && "none" !== d || !f) && c._data(e, "olddisplay", f ? d : c.css(e, "display"))));
        for (l = 0; m > l; l++) e = a[l], e.style && (b && "none" !== e.style.display && "" !== e.style.display || (e.style.display = b ? h[l] || "" : "none"));
        return a
    }

    function w(a, b, c) {
        return (a = Ib.exec(b)) ? Math.max(0, a[1] - (c || 0)) + (a[2] || "px") : b
    }

    function E(a, b, d, e, f) {
        b = d === (e ? "border" : "content") ? 4 : "width" === b ? 1 : 0;
        for (var h = 0; 4 > b; b += 2) "margin" === d &&
            (h += c.css(a, d + ra[b], !0, f)), e ? ("content" === d && (h -= c.css(a, "padding" + ra[b], !0, f)), "margin" !== d && (h -= c.css(a, "border" + ra[b] + "Width", !0, f))) : (h += c.css(a, "padding" + ra[b], !0, f), "padding" !== d && (h += c.css(a, "border" + ra[b] + "Width", !0, f)));
        return h
    }

    function D(a, b, d) {
        var e = !0,
            f = "width" === b ? a.offsetWidth : a.offsetHeight,
            h = la(a),
            l = c.support.boxSizing && "border-box" === c.css(a, "boxSizing", !1, h);
        if (0 >= f || null == f) {
            if (f = pa(a, b, h), (0 > f || null == f) && (f = a.style[b]), Ja.test(f)) return f;
            e = l && (c.support.boxSizingReliable || f ===
                a.style[b]);
            f = parseFloat(f) || 0
        }
        return f + E(a, b, d || (l ? "border" : "content"), e, h) + "px"
    }

    function t(a) {
        var b = A,
            d = hb[a];
        return d || (d = J(a, b), "none" !== d && d || (Ha = (Ha || c("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(b.documentElement), b = (Ha[0].contentWindow || Ha[0].contentDocument).document, b.write("<!doctype html><html><body>"), b.close(), d = J(a, b), Ha.detach()), hb[a] = d), d
    }

    function J(a, b) {
        var d = c(b.createElement(a)).appendTo(b.body),
            e = c.css(d[0], "display");
        return d.remove(), e
    }

    function P(a, b, d, e) {
        var f;
        if (c.isArray(b)) c.each(b, function(b, c) {
            d || Jb.test(a) ? e(a, c) : P(a + "[" + ("object" == typeof c ? b : "") + "]", c, d, e)
        });
        else if (d || "object" !== c.type(b)) e(a, b);
        else
            for (f in b) P(a + "[" + f + "]", b[f], d, e)
    }

    function Aa(a) {
        return function(b, d) {
            "string" != typeof b && (d = b, b = "*");
            var e, f = 0,
                h = b.toLowerCase().match(oa) || [];
            if (c.isFunction(d))
                for (; e = h[f++];) "+" === e[0] ? (e = e.slice(1) || "*", (a[e] = a[e] || []).unshift(d)) : (a[e] = a[e] || []).push(d)
        }
    }

    function B(a, b, d, e) {
        function f(m) {
            var x;
            return h[m] = !0, c.each(a[m] || [], function(a, c) {
                var m = c(b, d, e);
                return "string" != typeof m || l || h[m] ? l ? !(x = m) : k : (b.dataTypes.unshift(m), f(m), !1)
            }), x
        }
        var h = {},
            l = a === Ra;
        return f(b.dataTypes[0]) || !h["*"] && f("*")
    }

    function O(a, b) {
        var d, e, f = c.ajaxSettings.flatOptions || {};
        for (e in b) b[e] !== k && ((f[e] ? a : d || (d = {}))[e] = b[e]);
        return d && c.extend(!0, a, d), a
    }

    function I() {
        try {
            return new n.XMLHttpRequest
        } catch (a) {}
    }

    function u() {
        return setTimeout(function() {
            Ba = k
        }), Ba = c.now()
    }

    function G(a, b, c) {
        for (var d, f = (Ia[b] || []).concat(Ia["*"]), h =
                0, l = f.length; l > h; h++)
            if (d = f[h].call(c, b, a)) return d
    }

    function y(a, b, d) {
        var e, f = 0,
            h = Ka.length,
            l = c.Deferred().always(function() {
                delete m.elem
            }),
            m = function() {
                if (e) return !1;
                for (var b = Ba || u(), b = Math.max(0, x.startTime + x.duration - b), c = 1 - (b / x.duration || 0), d = 0, f = x.tweens.length; f > d; d++) x.tweens[d].run(c);
                return l.notifyWith(a, [x, c, b]), 1 > c && f ? b : (l.resolveWith(a, [x]), !1)
            },
            x = l.promise({
                elem: a,
                props: c.extend({}, b),
                opts: c.extend(!0, {
                    specialEasing: {}
                }, d),
                originalProperties: b,
                originalOptions: d,
                startTime: Ba || u(),
                duration: d.duration,
                tweens: [],
                createTween: function(b, d) {
                    var e = c.Tween(a, x.opts, b, d, x.opts.specialEasing[b] || x.opts.easing);
                    return x.tweens.push(e), e
                },
                stop: function(b) {
                    var c = 0,
                        d = b ? x.tweens.length : 0;
                    if (e) return this;
                    for (e = !0; d > c; c++) x.tweens[c].run(1);
                    return b ? l.resolveWith(a, [x, b]) : l.rejectWith(a, [x, b]), this
                }
            });
        d = x.props;
        for (p(d, x.opts.specialEasing); h > f; f++)
            if (b = Ka[f].call(x, a, d, x.opts)) return b;
        return c.map(d, G, x), c.isFunction(x.opts.start) && x.opts.start.call(a, x), c.fx.timer(c.extend(m, {
                elem: a,
                anim: x,
                queue: x.opts.queue
            })),
            x.progress(x.opts.progress).done(x.opts.done, x.opts.complete).fail(x.opts.fail).always(x.opts.always)
    }

    function p(a, b) {
        var d, e, f, h, l;
        for (d in a)
            if (e = c.camelCase(d), f = b[e], h = a[d], c.isArray(h) && (f = h[1], h = a[d] = h[0]), d !== e && (a[e] = h, delete a[d]), l = c.cssHooks[e], l && "expand" in l)
                for (d in h = l.expand(h), delete a[e], h) d in a || (a[d] = h[d], b[d] = f);
            else b[e] = f
    }

    function r(a, b, c, e, f) {
        return new r.prototype.init(a, b, c, e, f)
    }

    function Y(a, b) {
        var c = {
                height: a
            },
            e = 0;
        for (b = b ? 1 : 0; 4 > e; e += 2 - b) {
            var f = ra[e];
            c["margin" + f] = c["padding" +
                f] = a
        }
        return b && (c.opacity = c.width = a), c
    }

    function T(a) {
        return c.isWindow(a) ? a : 9 === a.nodeType ? a.defaultView || a.parentWindow : !1
    }
    var ya, U = typeof k,
        Q = n.location,
        A = n.document,
        ba = A.documentElement,
        Ca = n.jQuery,
        Sa = n.$,
        va = {},
        na = [],
        wa = na.concat,
        Ta = na.push,
        sa = na.slice,
        ib = na.indexOf,
        Kb = va.toString,
        Da = va.hasOwnProperty,
        Ua = "1.10.2".trim,
        c = function(a, b) {
            return new c.fn.init(a, b, Lb)
        },
        La = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        oa = /\S+/g,
        Mb = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        Nb = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        jb = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        Ob = /^[\],:{}\s]*$/,
        Pb = /(?:^|:|,)(?:\s*\[)+/g,
        Qb = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
        Rb = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,
        Sb = /^-ms-/,
        Tb = /-([\da-z])/gi,
        Ub = function(a, b) {
            return b.toUpperCase()
        },
        fa = function(a) {
            (A.addEventListener || "load" === a.type || "complete" === A.readyState) && (kb(), c.ready())
        },
        kb = function() {
            A.addEventListener ? (A.removeEventListener("DOMContentLoaded", fa, !1), n.removeEventListener("load", fa, !1)) : (A.detachEvent("onreadystatechange",
                fa), n.detachEvent("onload", fa))
        };
    c.fn = c.prototype = {
        jquery: "1.10.2",
        constructor: c,
        init: function(a, b, d) {
            var e, f;
            if (!a) return this;
            if ("string" == typeof a) {
                if (e = "<" === a.charAt(0) && ">" === a.charAt(a.length - 1) && 3 <= a.length ? [null, a, null] : Nb.exec(a), !e || !e[1] && b) return !b || b.jquery ? (b || d).find(a) : this.constructor(b).find(a);
                if (e[1]) {
                    if (b = b instanceof c ? b[0] : b, c.merge(this, c.parseHTML(e[1], b && b.nodeType ? b.ownerDocument || b : A, !0)), jb.test(e[1]) && c.isPlainObject(b))
                        for (e in b) c.isFunction(this[e]) ? this[e](b[e]) :
                            this.attr(e, b[e]);
                    return this
                }
                if (f = A.getElementById(e[2]), f && f.parentNode) {
                    if (f.id !== e[2]) return d.find(a);
                    this.length = 1;
                    this[0] = f
                }
                return this.context = A, this.selector = a, this
            }
            return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : c.isFunction(a) ? d.ready(a) : (a.selector !== k && (this.selector = a.selector, this.context = a.context), c.makeArray(a, this))
        },
        selector: "",
        length: 0,
        toArray: function() {
            return sa.call(this)
        },
        get: function(a) {
            return null == a ? this.toArray() : 0 > a ? this[this.length + a] : this[a]
        },
        pushStack: function(a) {
            a =
                c.merge(this.constructor(), a);
            return a.prevObject = this, a.context = this.context, a
        },
        each: function(a, b) {
            return c.each(this, a, b)
        },
        ready: function(a) {
            return c.ready.promise().done(a), this
        },
        slice: function() {
            return this.pushStack(sa.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(a) {
            var b = this.length;
            a = +a + (0 > a ? b : 0);
            return this.pushStack(0 <= a && b > a ? [this[a]] : [])
        },
        map: function(a) {
            return this.pushStack(c.map(this, function(b, c) {
                return a.call(b, c, b)
            }))
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: Ta,
        sort: [].sort,
        splice: [].splice
    };
    c.fn.init.prototype = c.fn;
    c.extend = c.fn.extend = function() {
        var a, b, d, e, f = arguments[0] || {},
            h = 1,
            l = arguments.length,
            m = !1;
        "boolean" == typeof f && (m = f, f = arguments[1] || {}, h = 2);
        "object" == typeof f || c.isFunction(f) || (f = {});
        for (l === h && (f = this, --h); l > h; h++)
            if (null != (d = arguments[h]))
                for (b in d) {
                    var x = f[b];
                    var p = d[b];
                    f !== p && (m && p && (c.isPlainObject(p) || (a = c.isArray(p))) ? (a ? (a = !1, e = x && c.isArray(x) ? x : []) : e = x && c.isPlainObject(x) ?
                        x : {}, f[b] = c.extend(m, e, p)) : p !== k && (f[b] = p))
                }
        return f
    };
    c.extend({
        expando: "jQuery" + ("1.10.2" + Math.random()).replace(/\D/g, ""),
        noConflict: function(a) {
            return n.$ === c && (n.$ = Sa), a && n.jQuery === c && (n.jQuery = Ca), c
        },
        isReady: !1,
        readyWait: 1,
        holdReady: function(a) {
            a ? c.readyWait++ : c.ready(!0)
        },
        ready: function(a) {
            if (!0 === a ? !--c.readyWait : !c.isReady) {
                if (!A.body) return setTimeout(c.ready);
                c.isReady = !0;
                !0 !== a && 0 < --c.readyWait || (ya.resolveWith(A, [c]), c.fn.trigger && c(A).trigger("ready").off("ready"))
            }
        },
        isFunction: function(a) {
            return "function" ===
                c.type(a)
        },
        isArray: Array.isArray || function(a) {
            return "array" === c.type(a)
        },
        isWindow: function(a) {
            return null != a && a == a.window
        },
        isNumeric: function(a) {
            return !isNaN(parseFloat(a)) && isFinite(a)
        },
        type: function(a) {
            return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? va[Kb.call(a)] || "object" : typeof a
        },
        isPlainObject: function(a) {
            var b;
            if (!a || "object" !== c.type(a) || a.nodeType || c.isWindow(a)) return !1;
            try {
                if (a.constructor && !Da.call(a, "constructor") && !Da.call(a.constructor.prototype, "isPrototypeOf")) return !1
            } catch (d) {
                return !1
            }
            if (c.support.ownLast)
                for (b in a) return Da.call(a,
                    b);
            for (b in a);
            return b === k || Da.call(a, b)
        },
        isEmptyObject: function(a) {
            for (var b in a) return !1;
            return !0
        },
        error: function(a) {
            throw Error(a);
        },
        parseHTML: function(a, b, d) {
            if (!a || "string" != typeof a) return null;
            "boolean" == typeof b && (d = b, b = !1);
            b = b || A;
            var e = jb.exec(a);
            d = !d && [];
            return e ? [b.createElement(e[1])] : (e = c.buildFragment([a], b, d), d && c(d).remove(), c.merge([], e.childNodes))
        },
        parseJSON: function(a) {
            return n.JSON && n.JSON.parse ? n.JSON.parse(a) : null === a ? a : "string" == typeof a && (a = c.trim(a), a && Ob.test(a.replace(Qb,
                "@").replace(Rb, "]").replace(Pb, ""))) ? Function("return " + a)() : (c.error("Invalid JSON: " + a), k)
        },
        parseXML: function(a) {
            var b, d;
            if (!a || "string" != typeof a) return null;
            try {
                n.DOMParser ? (d = new DOMParser, b = d.parseFromString(a, "text/xml")) : (b = new ActiveXObject("Microsoft.XMLDOM"), b.async = "false", b.loadXML(a))
            } catch (e) {
                b = k
            }
            return b && b.documentElement && !b.getElementsByTagName("parsererror").length || c.error("Invalid XML: " + a), b
        },
        noop: function() {},
        globalEval: function(a) {
            a && c.trim(a) && (n.execScript || function(a) {
                n.eval.call(n,
                    a)
            })(a)
        },
        camelCase: function(a) {
            return a.replace(Sb, "ms-").replace(Tb, Ub)
        },
        nodeName: function(a, b) {
            return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
        },
        each: function(a, b, c) {
            var d, f = 0,
                h = a.length,
                l = H(a);
            if (c)
                if (l)
                    for (; h > f && (d = b.apply(a[f], c), !1 !== d); f++);
                else
                    for (f in a) {
                        if (d = b.apply(a[f], c), !1 === d) break
                    } else if (l)
                        for (; h > f && (d = b.call(a[f], f, a[f]), !1 !== d); f++);
                    else
                        for (f in a)
                            if (d = b.call(a[f], f, a[f]), !1 === d) break;
            return a
        },
        trim: Ua && !Ua.call("\ufeff\u00a0") ? function(a) {
            return null == a ? "" : Ua.call(a)
        } : function(a) {
            return null == a ? "" : (a + "").replace(Mb, "")
        },
        makeArray: function(a, b) {
            var d = b || [];
            return null != a && (H(Object(a)) ? c.merge(d, "string" == typeof a ? [a] : a) : Ta.call(d, a)), d
        },
        inArray: function(a, b, c) {
            if (b) {
                if (ib) return ib.call(b, a, c);
                var d = b.length;
                for (c = c ? 0 > c ? Math.max(0, d + c) : c : 0; d > c; c++)
                    if (c in b && b[c] === a) return c
            }
            return -1
        },
        merge: function(a, b) {
            var c = b.length,
                e = a.length,
                f = 0;
            if ("number" == typeof c)
                for (; c > f; f++) a[e++] = b[f];
            else
                for (; b[f] !== k;) a[e++] = b[f++];
            return a.length = e, a
        },
        grep: function(a, b, c) {
            var d = [],
                f = 0,
                h = a.length;
            for (c = !!c; h > f; f++) {
                var l = !!b(a[f], f);
                c !== l && d.push(a[f])
            }
            return d
        },
        map: function(a, b, c) {
            var d = 0,
                f = a.length,
                h = [];
            if (H(a))
                for (; f > d; d++) {
                    var l = b(a[d], d, c);
                    null != l && (h[h.length] = l)
                } else
                    for (d in a) l = b(a[d], d, c), null != l && (h[h.length] = l);
            return wa.apply([], h)
        },
        guid: 1,
        proxy: function(a, b) {
            var d, e, f;
            return "string" == typeof b && (f = a[b], b = a, a = f), c.isFunction(a) ? (d = sa.call(arguments, 2), e = function() {
                return a.apply(b || this, d.concat(sa.call(arguments)))
            }, e.guid = a.guid = a.guid || c.guid++, e) : k
        },
        access: function(a,
            b, d, e, f, h, l) {
            var m = 0,
                x = a.length,
                p = null == d;
            if ("object" === c.type(d))
                for (m in f = !0, d) c.access(a, b, m, d[m], !0, h, l);
            else if (e !== k && (f = !0, c.isFunction(e) || (l = !0), p && (l ? (b.call(a, e), b = null) : (p = b, b = function(a, b, d) {
                    return p.call(c(a), d)
                })), b))
                for (; x > m; m++) b(a[m], d, l ? e : e.call(a[m], m, b(a[m], d)));
            return f ? a : p ? b.call(a) : x ? b(a[0], d) : h
        },
        now: function() {
            return (new Date).getTime()
        },
        swap: function(a, b, c, e) {
            var d, h = {};
            for (d in b) h[d] = a.style[d], a.style[d] = b[d];
            c = c.apply(a, e || []);
            for (d in b) a.style[d] = h[d];
            return c
        }
    });
    c.ready.promise = function(a) {
        if (!ya)
            if (ya = c.Deferred(), "complete" === A.readyState) setTimeout(c.ready);
            else if (A.addEventListener) A.addEventListener("DOMContentLoaded", fa, !1), n.addEventListener("load", fa, !1);
        else {
            A.attachEvent("onreadystatechange", fa);
            n.attachEvent("onload", fa);
            var b = !1;
            try {
                b = null == n.frameElement && A.documentElement
            } catch (d) {}
            b && b.doScroll && function e() {
                if (!c.isReady) {
                    try {
                        b.doScroll("left")
                    } catch (f) {
                        return setTimeout(e, 50)
                    }
                    kb();
                    c.ready()
                }
            }()
        }
        return ya.promise(a)
    };
    c.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),
        function(a, b) {
            va["[object " + b + "]"] = b.toLowerCase()
        });
    var Lb = c(A);
    (function(a, b) {
        function d(a, b, c, d) {
            var e, f, h, l, K;
            if ((b ? b.ownerDocument || b : O) !== u && la(b), b = b || u, c = c || [], !a || "string" != typeof a) return c;
            if (1 !== (l = b.nodeType) && 9 !== l) return [];
            if (I && !d) {
                if (e = ma.exec(a))
                    if (h = e[1])
                        if (9 === l) {
                            if (f = b.getElementById(h), !f || !f.parentNode) return c;
                            if (f.id === h) return c.push(f), c
                        } else {
                            if (b.ownerDocument && (f = b.ownerDocument.getElementById(h)) && D(b, f) && f.id === h) return c.push(f), c
                        }
                else {
                    if (e[2]) return ea.apply(c, b.getElementsByTagName(a)),
                        c;
                    if ((h = e[3]) && X.getElementsByClassName && b.getElementsByClassName) return ea.apply(c, b.getElementsByClassName(h)), c
                }
                if (X.qsa && (!v || !v.test(a))) {
                    if (f = e = B, h = b, K = 9 === l && a, 1 === l && "object" !== b.nodeName.toLowerCase()) {
                        l = r(a);
                        (e = b.getAttribute("id")) ? f = e.replace(sa, "\\$&"): b.setAttribute("id", f);
                        f = "[id='" + f + "'] ";
                        for (h = l.length; h--;) l[h] = f + g(l[h]);
                        h = aa.test(a) && b.parentNode || b;
                        K = l.join(",")
                    }
                    if (K) try {
                        return ea.apply(c, h.querySelectorAll(K)), c
                    } catch (Ac) {} finally {
                        e || b.removeAttribute("id")
                    }
                }
            }
            var m;
            a: {
                a = a.replace(V,
                    "$1");
                var R, Z;f = r(a);
                if (!d && 1 === f.length) {
                    if (m = f[0] = f[0].slice(0), 2 < m.length && "ID" === (R = m[0]).type && X.getById && 9 === b.nodeType && I && M.relative[m[1].type]) {
                        if (b = (M.find.ID(R.matches[0].replace(fa, xa), b) || [])[0], !b) {
                            m = c;
                            break a
                        }
                        a = a.slice(m.shift().value.length)
                    }
                    for (l = Ca.needsContext.test(a) ? 0 : m.length; l-- && (R = m[l], !M.relative[e = R.type]);)
                        if ((Z = M.find[e]) && (d = Z(R.matches[0].replace(fa, xa), aa.test(m[0].type) && b.parentNode || b))) {
                            if (m.splice(l, 1), a = d.length && g(m), !a) {
                                m = (ea.apply(c, d), c);
                                break a
                            }
                            break
                        }
                }
                m =
                (qa(a, f)(d, b, !I, c, aa.test(a)), c)
            }
            return m
        }

        function e() {
            function a(c, d) {
                return b.push(c += " ") > M.cacheLength && delete a[b.shift()], a[c] = d
            }
            var b = [];
            return a
        }

        function f(a) {
            return a[B] = !0, a
        }

        function h(a) {
            var b = u.createElement("div");
            try {
                return !!a(b)
            } catch (R) {
                return !1
            } finally {
                b.parentNode && b.parentNode.removeChild(b)
            }
        }

        function l(a, b) {
            for (var c = a.split("|"), d = a.length; d--;) M.attrHandle[c[d]] = b
        }

        function m(a, b) {
            var c = b && a,
                d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || -2147483648) - (~a.sourceIndex || -2147483648);
            if (d) return d;
            if (c)
                for (; c = c.nextSibling;)
                    if (c === b) return -1;
            return a ? 1 : -1
        }

        function x(a) {
            return function(b) {
                return "input" === b.nodeName.toLowerCase() && b.type === a
            }
        }

        function p(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return ("input" === c || "button" === c) && b.type === a
            }
        }

        function C(a) {
            return f(function(b) {
                return b = +b, f(function(c, d) {
                    for (var e, f = a([], c.length, b), h = f.length; h--;) c[e = f[h]] && (c[e] = !(d[e] = c[e]))
                })
            })
        }

        function k() {}

        function r(a, b) {
            var c, e, f, h, l;
            if (h = z[a + " "]) return b ? 0 : h.slice(0);
            h = a;
            var K = [];
            for (l = M.preFilter; h;) {
                m && !(c = da.exec(h)) || (c && (h = h.slice(c[0].length) || h), K.push(e = []));
                var m = !1;
                (c = ga.exec(h)) && (m = c.shift(), e.push({
                    value: m,
                    type: c[0].replace(V, " ")
                }), h = h.slice(m.length));
                for (f in M.filter) !(c = Ca[f].exec(h)) || l[f] && !(c = l[f](c)) || (m = c.shift(), e.push({
                    value: m,
                    type: f,
                    matches: c
                }), h = h.slice(m.length));
                if (!m) break
            }
            return b ? h.length : h ? d.error(a) : z(a, K).slice(0)
        }

        function g(a) {
            for (var b = 0, c = a.length, d = ""; c > b; b++) d += a[b].value;
            return d
        }

        function y(a, b, c) {
            var d = b.dir,
                e = c && "parentNode" ===
                d,
                f = ta++;
            return b.first ? function(b, c, f) {
                for (; b = b[d];)
                    if (1 === b.nodeType || e) return a(b, c, f)
            } : function(b, c, h) {
                var l, K, m, R = Q + " " + f;
                if (h)
                    for (; b = b[d];) {
                        if ((1 === b.nodeType || e) && a(b, c, h)) return !0
                    } else
                        for (; b = b[d];)
                            if (1 === b.nodeType || e)
                                if (m = b[B] || (b[B] = {}), (K = m[d]) && K[0] === R) {
                                    if (!0 === (l = K[1]) || l === t) return !0 === l
                                } else if (K = m[d] = [R], K[1] = a(b, c, h) || t, !0 === K[1]) return !0
            }
        }

        function G(a) {
            return 1 < a.length ? function(b, c, d) {
                for (var e = a.length; e--;)
                    if (!a[e](b, c, d)) return !1;
                return !0
            } : a[0]
        }

        function J(a, b, c, d, e) {
            for (var f,
                    h = [], l = 0, K = a.length, m = null != b; K > l; l++)(f = a[l]) && (!c || c(f, d, e)) && (h.push(f), m && b.push(l));
            return h
        }

        function A(a, b, c, e, h, l) {
            return e && !e[B] && (e = A(e)), h && !h[B] && (h = A(h, l)), f(function(f, l, K, m) {
                var R, x = [],
                    C = [],
                    p = l.length,
                    Z;
                if (!(Z = f)) {
                    Z = b || "*";
                    for (var k = K.nodeType ? [K] : K, r = [], g = 0, y = k.length; y > g; g++) d(Z, k[g], r);
                    Z = r
                }
                Z = !a || !f && b ? Z : J(Z, x, a, K, m);
                k = c ? h || (f ? a : p || e) ? [] : l : Z;
                if (c && c(Z, k, K, m), e) {
                    var G = J(k, C);
                    e(G, [], K, m);
                    for (K = G.length; K--;)(R = G[K]) && (k[C[K]] = !(Z[C[K]] = R))
                }
                if (f) {
                    if (h || a) {
                        if (h) {
                            G = [];
                            for (K = k.length; K--;)(R =
                                k[K]) && G.push(Z[K] = R);
                            h(null, k = [], G, m)
                        }
                        for (K = k.length; K--;)(R = k[K]) && -1 < (G = h ? S.call(f, R) : x[K]) && (f[G] = !(l[G] = R))
                    }
                } else k = J(k === l ? k.splice(p, k.length) : k), h ? h(null, l, k, m) : ea.apply(l, k)
            })
        }

        function U(a) {
            var b, c, d = a.length,
                e = M.relative[a[0].type];
            var f = e || M.relative[" "];
            for (var h = e ? 1 : 0, l = y(function(a) {
                    return a === b
                }, f, !0), K = y(function(a) {
                    return -1 < S.call(b, a)
                }, f, !0), m = [function(a, c, d) {
                    return !e && (d || c !== T) || ((b = c).nodeType ? l(a, c, d) : K(a, c, d))
                }]; d > h; h++)
                if (f = M.relative[a[h].type]) m = [y(G(m), f)];
                else {
                    if (f = M.filter[a[h].type].apply(null,
                            a[h].matches), f[B]) {
                        for (c = ++h; d > c && !M.relative[a[c].type]; c++);
                        return A(1 < h && G(m), 1 < h && g(a.slice(0, h - 1).concat({
                            value: " " === a[h - 2].type ? "*" : ""
                        })).replace(V, "$1"), f, c > h && U(a.slice(h, c)), d > c && U(a = a.slice(c)), d > c && g(a))
                    }
                    m.push(f)
                }
            return G(m)
        }

        function Y(a, b) {
            var c = 0,
                e = 0 < b.length,
                h = 0 < a.length,
                l = function(f, l, m, K, R) {
                    var x, C, p = [],
                        Z = 0,
                        k = "0",
                        r = f && [],
                        g = null != R,
                        G = T,
                        y = f || h && M.find.TAG("*", R && l.parentNode || l),
                        A = Q += null == G ? 1 : Math.random() || .1;
                    for (g && (T = l !== u && l, t = c); null != (R = y[k]); k++) {
                        if (h && R) {
                            for (x = 0; C = a[x++];)
                                if (C(R,
                                        l, m)) {
                                    K.push(R);
                                    break
                                }
                            g && (Q = A, t = ++c)
                        }
                        e && ((R = !C && R) && Z--, f && r.push(R))
                    }
                    if (Z += k, e && k !== Z) {
                        for (x = 0; C = b[x++];) C(r, p, l, m);
                        if (f) {
                            if (0 < Z)
                                for (; k--;) r[k] || p[k] || (p[k] = ua.call(K));
                            p = J(p)
                        }
                        ea.apply(K, p);
                        g && !f && 0 < p.length && 1 < Z + b.length && d.uniqueSort(K)
                    }
                    return g && (Q = A, T = G), r
                };
            return e ? f(l) : l
        }
        var w, t, T, n, u, q, I, v, P, E, D, B = "sizzle" + -new Date,
            O = a.document,
            Q = 0,
            ta = 0,
            ya = e(),
            z = e(),
            F = e(),
            ba = !1,
            Aa = function(a, b) {
                return a === b ? (ba = !0, 0) : 0
            },
            W = typeof b,
            ca = {}.hasOwnProperty,
            H = [],
            ua = H.pop,
            Sa = H.push,
            ea = H.push,
            L = H.slice,
            S = H.indexOf ||
            function(a) {
                for (var b = 0, c = this.length; c > b; b++)
                    if (this[b] === a) return b;
                return -1
            },
            na = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+".replace("w", "w#"),
            N = "\\[[\\x20\\t\\r\\n\\f]*((?:\\\\.|[\\w-]|[^\\x00-\\xa0])+)[\\x20\\t\\r\\n\\f]*(?:([*^$|!~]?=)[\\x20\\t\\r\\n\\f]*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + na + ")|)|)[\\x20\\t\\r\\n\\f]*\\]",
            va = ":((?:\\\\.|[\\w-]|[^\\x00-\\xa0])+)(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + N.replace(3, 8) + ")*)|.*)\\)|)",
            V = RegExp("^[\\x20\\t\\r\\n\\f]+|((?:^|[^\\\\])(?:\\\\.)*)[\\x20\\t\\r\\n\\f]+$",
                "g"),
            da = /^[\x20\t\r\n\f]*,[\x20\t\r\n\f]*/,
            ga = /^[\x20\t\r\n\f]*([>+~]|[\x20\t\r\n\f])[\x20\t\r\n\f]*/,
            aa = /[\x20\t\r\n\f]*[+~]/,
            ha = RegExp("=[\\x20\\t\\r\\n\\f]*([^\\]'\"]*)[\\x20\\t\\r\\n\\f]*\\]", "g"),
            ia = RegExp(va),
            ja = RegExp("^" + na + "$"),
            Ca = {
                ID: /^#((?:\\.|[\w-]|[^\x00-\xa0])+)/,
                CLASS: /^\.((?:\\.|[\w-]|[^\x00-\xa0])+)/,
                TAG: RegExp("^(" + "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+".replace("w", "w*") + ")"),
                ATTR: RegExp("^" + N),
                PSEUDO: RegExp("^" + va),
                CHILD: /^:(only|first|last|nth|nth-last)-(child|of-type)(?:\([\x20\t\r\n\f]*(even|odd|(([+-]|)(\d*)n|)[\x20\t\r\n\f]*(?:([+-]|)[\x20\t\r\n\f]*(\d+)|))[\x20\t\r\n\f]*\)|)/i,
                bool: /^(?:checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)$/i,
                needsContext: /^[\x20\t\r\n\f]*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\([\x20\t\r\n\f]*((?:-\d)?\d*)[\x20\t\r\n\f]*\)|)(?=[^-]|$)/i
            },
            ka = /^[^{]+\{\s*\[native \w/,
            ma = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            wa = /^(?:input|select|textarea|button)$/i,
            oa = /^h\d$/i,
            sa = /'|\\/g,
            fa = RegExp("\\\\([\\da-f]{1,6}[\\x20\\t\\r\\n\\f]?|([\\x20\\t\\r\\n\\f])|.)", "ig"),
            xa = function(a, b,
                c) {
                a = "0x" + b - 65536;
                return a !== a || c ? b : 0 > a ? String.fromCharCode(a + 65536) : String.fromCharCode(55296 | a >> 10, 56320 | 1023 & a)
            };
        try {
            ea.apply(H = L.call(O.childNodes), O.childNodes), H[O.childNodes.length].nodeType
        } catch (K) {
            ea = {
                apply: H.length ? function(a, b) {
                    Sa.apply(a, L.call(b))
                } : function(a, b) {
                    for (var c = a.length, d = 0; a[c++] = b[d++];);
                    a.length = c - 1
                }
            }
        }
        var ra = d.isXML = function(a) {
            return (a = a && (a.ownerDocument || a).documentElement) ? "HTML" !== a.nodeName : !1
        };
        var X = d.support = {};
        var la = d.setDocument = function(a) {
            var c = a ? a.ownerDocument ||
                a : O;
            a = c.defaultView;
            return c !== u && 9 === c.nodeType && c.documentElement ? (u = c, q = c.documentElement, I = !ra(c), a && a.attachEvent && a !== a.top && a.attachEvent("onbeforeunload", function() {
                la()
            }), X.attributes = h(function(a) {
                return a.className = "i", !a.getAttribute("className")
            }), X.getElementsByTagName = h(function(a) {
                return a.appendChild(c.createComment("")), !a.getElementsByTagName("*").length
            }), X.getElementsByClassName = h(function(a) {
                return a.innerHTML = "<div class='a'></div><div class='a i'></div>", a.firstChild.className =
                    "i", 2 === a.getElementsByClassName("i").length
            }), X.getById = h(function(a) {
                return q.appendChild(a).id = B, !c.getElementsByName || !c.getElementsByName(B).length
            }), X.getById ? (M.find.ID = function(a, b) {
                if (typeof b.getElementById !== W && I) {
                    var c = b.getElementById(a);
                    return c && c.parentNode ? [c] : []
                }
            }, M.filter.ID = function(a) {
                var b = a.replace(fa, xa);
                return function(a) {
                    return a.getAttribute("id") === b
                }
            }) : (delete M.find.ID, M.filter.ID = function(a) {
                var b = a.replace(fa, xa);
                return function(a) {
                    return (a = typeof a.getAttributeNode !==
                        W && a.getAttributeNode("id")) && a.value === b
                }
            }), M.find.TAG = X.getElementsByTagName ? function(a, c) {
                return typeof c.getElementsByTagName !== W ? c.getElementsByTagName(a) : b
            } : function(a, b) {
                var c, d = [],
                    e = 0,
                    f = b.getElementsByTagName(a);
                if ("*" === a) {
                    for (; c = f[e++];) 1 === c.nodeType && d.push(c);
                    return d
                }
                return f
            }, M.find.CLASS = X.getElementsByClassName && function(a, c) {
                return typeof c.getElementsByClassName !== W && I ? c.getElementsByClassName(a) : b
            }, P = [], v = [], (X.qsa = ka.test(c.querySelectorAll)) && (h(function(a) {
                a.innerHTML = "<select><option selected=''></option></select>";
                a.querySelectorAll("[selected]").length || v.push("\\[[\\x20\\t\\r\\n\\f]*(?:value|checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)");
                a.querySelectorAll(":checked").length || v.push(":checked")
            }), h(function(a) {
                var b = c.createElement("input");
                b.setAttribute("type", "hidden");
                a.appendChild(b).setAttribute("t", "");
                a.querySelectorAll("[t^='']").length && v.push("[*^$]=[\\x20\\t\\r\\n\\f]*(?:''|\"\")");
                a.querySelectorAll(":enabled").length ||
                    v.push(":enabled", ":disabled");
                a.querySelectorAll("*,:x");
                v.push(",.*:")
            })), (X.matchesSelector = ka.test(E = q.webkitMatchesSelector || q.mozMatchesSelector || q.oMatchesSelector || q.msMatchesSelector)) && h(function(a) {
                X.disconnectedMatch = E.call(a, "div");
                E.call(a, "[s!='']:x");
                P.push("!=", va)
            }), v = v.length && RegExp(v.join("|")), P = P.length && RegExp(P.join("|")), D = ka.test(q.contains) || q.compareDocumentPosition ? function(a, b) {
                var c = 9 === a.nodeType ? a.documentElement : a,
                    d = b && b.parentNode;
                return a === d || !(!d || 1 !== d.nodeType ||
                    !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
            } : function(a, b) {
                if (b)
                    for (; b = b.parentNode;)
                        if (b === a) return !0;
                return !1
            }, Aa = q.compareDocumentPosition ? function(a, b) {
                if (a === b) return ba = !0, 0;
                var d = b.compareDocumentPosition && a.compareDocumentPosition && a.compareDocumentPosition(b);
                return d ? 1 & d || !X.sortDetached && b.compareDocumentPosition(a) === d ? a === c || D(O, a) ? -1 : b === c || D(O, b) ? 1 : n ? S.call(n, a) - S.call(n, b) : 0 : 4 & d ? -1 : 1 : a.compareDocumentPosition ? -1 : 1
            } : function(a, b) {
                var d = 0;
                var e = a.parentNode;
                var f = b.parentNode,
                    h = [a],
                    l = [b];
                if (a === b) return ba = !0, 0;
                if (!e || !f) return a === c ? -1 : b === c ? 1 : e ? -1 : f ? 1 : n ? S.call(n, a) - S.call(n, b) : 0;
                if (e === f) return m(a, b);
                for (e = a; e = e.parentNode;) h.unshift(e);
                for (e = b; e = e.parentNode;) l.unshift(e);
                for (; h[d] === l[d];) d++;
                return d ? m(h[d], l[d]) : h[d] === O ? -1 : l[d] === O ? 1 : 0
            }, c) : u
        };
        d.matches = function(a, b) {
            return d(a, null, null, b)
        };
        d.matchesSelector = function(a, b) {
            if ((a.ownerDocument || a) !== u && la(a), b = b.replace(ha, "='$1']"), !(!X.matchesSelector || !I || P && P.test(b) || v &&
                    v.test(b))) try {
                var c = E.call(a, b);
                if (c || X.disconnectedMatch || a.document && 11 !== a.document.nodeType) return c
            } catch (zc) {}
            return 0 < d(b, u, null, [a]).length
        };
        d.contains = function(a, b) {
            return (a.ownerDocument || a) !== u && la(a), D(a, b)
        };
        d.attr = function(a, c) {
            (a.ownerDocument || a) !== u && la(a);
            var d = M.attrHandle[c.toLowerCase()],
                d = d && ca.call(M.attrHandle, c.toLowerCase()) ? d(a, c, !I) : b;
            return d === b ? X.attributes || !I ? a.getAttribute(c) : (d = a.getAttributeNode(c)) && d.specified ? d.value : null : d
        };
        d.error = function(a) {
            throw Error("Syntax error, unrecognized expression: " +
                a);
        };
        d.uniqueSort = function(a) {
            var b, c = [],
                d = 0,
                e = 0;
            if (ba = !X.detectDuplicates, n = !X.sortStable && a.slice(0), a.sort(Aa), ba) {
                for (; b = a[e++];) b === a[e] && (d = c.push(e));
                for (; d--;) a.splice(c[d], 1)
            }
            return a
        };
        var pa = d.getText = function(a) {
            var b, c = "",
                d = 0;
            if (b = a.nodeType)
                if (1 === b || 9 === b || 11 === b) {
                    if ("string" == typeof a.textContent) return a.textContent;
                    for (a = a.firstChild; a; a = a.nextSibling) c += pa(a)
                } else {
                    if (3 === b || 4 === b) return a.nodeValue
                }
            else
                for (; b = a[d]; d++) c += pa(b);
            return c
        };
        var M = d.selectors = {
            cacheLength: 50,
            createPseudo: f,
            match: Ca,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(a) {
                    return a[1] = a[1].replace(fa, xa), a[3] = (a[4] || a[5] || "").replace(fa, xa), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4)
                },
                CHILD: function(a) {
                    return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || d.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && d.error(a[0]),
                        a
                },
                PSEUDO: function(a) {
                    var c, d = !a[5] && a[2];
                    return Ca.CHILD.test(a[0]) ? null : (a[3] && a[4] !== b ? a[2] = a[4] : d && ia.test(d) && (c = r(d, !0)) && (c = d.indexOf(")", d.length - c) - d.length) && (a[0] = a[0].slice(0, c), a[2] = d.slice(0, c)), a.slice(0, 3))
                }
            },
            filter: {
                TAG: function(a) {
                    var b = a.replace(fa, xa).toLowerCase();
                    return "*" === a ? function() {
                        return !0
                    } : function(a) {
                        return a.nodeName && a.nodeName.toLowerCase() === b
                    }
                },
                CLASS: function(a) {
                    var b = ya[a + " "];
                    return b || (b = RegExp("(^|[\\x20\\t\\r\\n\\f])" + a + "([\\x20\\t\\r\\n\\f]|$)")) && ya(a, function(a) {
                        return b.test("string" ==
                            typeof a.className && a.className || typeof a.getAttribute !== W && a.getAttribute("class") || "")
                    })
                },
                ATTR: function(a, b, c) {
                    return function(e) {
                        e = d.attr(e, a);
                        return null == e ? "!=" === b : b ? (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && -1 < e.indexOf(c) : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? -1 < (" " + e + " ").indexOf(c) : "|=" === b ? e === c || e.slice(0, c.length + 1) === c + "-" : !1) : !0
                    }
                },
                CHILD: function(a, b, c, d, e) {
                    var f = "nth" !== a.slice(0, 3),
                        h = "last" !== a.slice(-4),
                        l = "of-type" === b;
                    return 1 === d && 0 === e ?
                        function(a) {
                            return !!a.parentNode
                        } : function(b, c, m) {
                            var x;
                            c = f !== h ? "nextSibling" : "previousSibling";
                            var C = b.parentNode,
                                p = l && b.nodeName.toLowerCase();
                            m = !m && !l;
                            if (C) {
                                if (f) {
                                    for (; c;) {
                                        for (x = b; x = x[c];)
                                            if (l ? x.nodeName.toLowerCase() === p : 1 === x.nodeType) return !1;
                                        var k = c = "only" === a && !k && "nextSibling"
                                    }
                                    return !0
                                }
                                if (k = [h ? C.firstChild : C.lastChild], h && m) {
                                    m = C[B] || (C[B] = {});
                                    var K = m[a] || [];
                                    var r = K[0] === Q && K[1];
                                    var g = K[0] === Q && K[2];
                                    for (x = r && C.childNodes[r]; x = ++r && x && x[c] || (g = r = 0) || k.pop();)
                                        if (1 === x.nodeType && ++g && x === b) {
                                            m[a] = [Q, r, g];
                                            break
                                        }
                                } else if (m && (K = (b[B] || (b[B] = {}))[a]) && K[0] === Q) g = K[1];
                                else
                                    for (;
                                        (x = ++r && x && x[c] || (g = r = 0) || k.pop()) && ((l ? x.nodeName.toLowerCase() !== p : 1 !== x.nodeType) || !++g || (m && ((x[B] || (x[B] = {}))[a] = [Q, g]), x !== b)););
                                return g -= e, g === d || 0 === g % d && 0 <= g / d
                            }
                        }
                },
                PSEUDO: function(a, b) {
                    var c, e = M.pseudos[a] || M.setFilters[a.toLowerCase()] || d.error("unsupported pseudo: " + a);
                    return e[B] ? e(b) : 1 < e.length ? (c = [a, a, "", b], M.setFilters.hasOwnProperty(a.toLowerCase()) ? f(function(a, c) {
                        for (var d, f = e(a, b), h = f.length; h--;) d = S.call(a,
                            f[h]), a[d] = !(c[d] = f[h])
                    }) : function(a) {
                        return e(a, 0, c)
                    }) : e
                }
            },
            pseudos: {
                not: f(function(a) {
                    var b = [],
                        c = [],
                        d = qa(a.replace(V, "$1"));
                    return d[B] ? f(function(a, b, c, e) {
                        var f;
                        c = d(a, null, e, []);
                        for (e = a.length; e--;)(f = c[e]) && (a[e] = !(b[e] = f))
                    }) : function(a, e, f) {
                        return b[0] = a, d(b, null, f, c), !c.pop()
                    }
                }),
                has: f(function(a) {
                    return function(b) {
                        return 0 < d(a, b).length
                    }
                }),
                contains: f(function(a) {
                    return function(b) {
                        return -1 < (b.textContent || b.innerText || pa(b)).indexOf(a)
                    }
                }),
                lang: f(function(a) {
                    return ja.test(a || "") || d.error("unsupported lang: " +
                            a), a = a.replace(fa, xa).toLowerCase(),
                        function(b) {
                            var c;
                            do
                                if (c = I ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-"); while ((b = b.parentNode) && 1 === b.nodeType);
                            return !1
                        }
                }),
                target: function(b) {
                    var c = a.location && a.location.hash;
                    return c && c.slice(1) === b.id
                },
                root: function(a) {
                    return a === q
                },
                focus: function(a) {
                    return a === u.activeElement && (!u.hasFocus || u.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
                },
                enabled: function(a) {
                    return !1 === a.disabled
                },
                disabled: function(a) {
                    return !0 ===
                        a.disabled
                },
                checked: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && !!a.checked || "option" === b && !!a.selected
                },
                selected: function(a) {
                    return a.parentNode && a.parentNode.selectedIndex, !0 === a.selected
                },
                empty: function(a) {
                    for (a = a.firstChild; a; a = a.nextSibling)
                        if ("@" < a.nodeName || 3 === a.nodeType || 4 === a.nodeType) return !1;
                    return !0
                },
                parent: function(a) {
                    return !M.pseudos.empty(a)
                },
                header: function(a) {
                    return oa.test(a.nodeName)
                },
                input: function(a) {
                    return wa.test(a.nodeName)
                },
                button: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && "button" === a.type || "button" === b
                },
                text: function(a) {
                    var b;
                    return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || b.toLowerCase() === a.type)
                },
                first: C(function() {
                    return [0]
                }),
                last: C(function(a, b) {
                    return [b - 1]
                }),
                eq: C(function(a, b, c) {
                    return [0 > c ? c + b : c]
                }),
                even: C(function(a, b) {
                    for (var c = 0; b > c; c += 2) a.push(c);
                    return a
                }),
                odd: C(function(a, b) {
                    for (var c = 1; b > c; c += 2) a.push(c);
                    return a
                }),
                lt: C(function(a, b, c) {
                    for (b = 0 > c ? c + b : c; 0 <= --b;) a.push(b);
                    return a
                }),
                gt: C(function(a,
                    b, c) {
                    for (c = 0 > c ? c + b : c; b > ++c;) a.push(c);
                    return a
                })
            }
        };
        M.pseudos.nth = M.pseudos.eq;
        for (w in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) M.pseudos[w] = x(w);
        for (w in {
                submit: !0,
                reset: !0
            }) M.pseudos[w] = p(w);
        k.prototype = M.filters = M.pseudos;
        M.setFilters = new k;
        var qa = d.compile = function(a, b) {
            var c, d = [],
                e = [],
                f = F[a + " "];
            if (!f) {
                b || (b = r(a));
                for (c = b.length; c--;) f = U(b[c]), f[B] ? d.push(f) : e.push(f);
                f = F(a, Y(e, d))
            }
            return f
        };
        X.sortStable = B.split("").sort(Aa).join("") === B;
        X.detectDuplicates = ba;
        la();
        X.sortDetached = h(function(a) {
            return 1 &
                a.compareDocumentPosition(u.createElement("div"))
        });
        h(function(a) {
            return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href")
        }) || l("type|href|height|width", function(a, c, d) {
            return d ? b : a.getAttribute(c, "type" === c.toLowerCase() ? 1 : 2)
        });
        X.attributes && h(function(a) {
            return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value")
        }) || l("value", function(a, c, d) {
            return d || "input" !== a.nodeName.toLowerCase() ? b : a.defaultValue
        });
        h(function(a) {
            return null ==
                a.getAttribute("disabled")
        }) || l("checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", function(a, c, d) {
            var e;
            return d ? b : (e = a.getAttributeNode(c)) && e.specified ? e.value : !0 === a[c] ? c.toLowerCase() : null
        });
        c.find = d;
        c.expr = d.selectors;
        c.expr[":"] = c.expr.pseudos;
        c.unique = d.uniqueSort;
        c.text = d.getText;
        c.isXMLDoc = d.isXML;
        c.contains = d.contains
    })(n);
    var eb = {};
    c.Callbacks = function(a) {
        a = "string" == typeof a ? eb[a] || ca(a) : c.extend({}, a);
        var b, d,
            e, f, h, l, m = [],
            x = !a.once && [],
            p = function(c) {
                d = a.memory && c;
                e = !0;
                h = l || 0;
                l = 0;
                f = m.length;
                for (b = !0; m && f > h; h++)
                    if (!1 === m[h].apply(c[0], c[1]) && a.stopOnFalse) {
                        d = !1;
                        break
                    }
                b = !1;
                m && (x ? x.length && p(x.shift()) : d ? m = [] : C.disable())
            },
            C = {
                add: function() {
                    if (m) {
                        var e = m.length;
                        (function Ma(b) {
                            c.each(b, function(b, d) {
                                var e = c.type(d);
                                "function" === e ? a.unique && C.has(d) || m.push(d) : d && d.length && "string" !== e && Ma(d)
                            })
                        })(arguments);
                        b ? f = m.length : d && (l = e, p(d))
                    }
                    return this
                },
                remove: function() {
                    return m && c.each(arguments, function(a, d) {
                        for (var e; - 1 <
                            (e = c.inArray(d, m, e));) m.splice(e, 1), b && (f >= e && f--, h >= e && h--)
                    }), this
                },
                has: function(a) {
                    return a ? -1 < c.inArray(a, m) : !(!m || !m.length)
                },
                empty: function() {
                    return m = [], f = 0, this
                },
                disable: function() {
                    return m = x = d = k, this
                },
                disabled: function() {
                    return !m
                },
                lock: function() {
                    return x = k, d || C.disable(), this
                },
                locked: function() {
                    return !x
                },
                fireWith: function(a, c) {
                    return !m || e && !x || (c = c || [], c = [a, c.slice ? c.slice() : c], b ? x.push(c) : p(c)), this
                },
                fire: function() {
                    return C.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!e
                }
            };
        return C
    };
    c.extend({
        Deferred: function(a) {
            var b = [
                    ["resolve", "done", c.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", c.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", c.Callbacks("memory")]
                ],
                d = "pending",
                e = {
                    state: function() {
                        return d
                    },
                    always: function() {
                        return f.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var a = arguments;
                        return c.Deferred(function(d) {
                            c.each(b, function(b, h) {
                                var l = h[0],
                                    m = c.isFunction(a[b]) && a[b];
                                f[h[1]](function() {
                                    var a = m && m.apply(this, arguments);
                                    a && c.isFunction(a.promise) ?
                                        a.promise().done(d.resolve).fail(d.reject).progress(d.notify) : d[l + "With"](this === e ? d.promise() : this, m ? [a] : arguments)
                                })
                            });
                            a = null
                        }).promise()
                    },
                    promise: function(a) {
                        return null != a ? c.extend(a, e) : e
                    }
                },
                f = {};
            return e.pipe = e.then, c.each(b, function(a, c) {
                var h = c[2],
                    l = c[3];
                e[c[1]] = h.add;
                l && h.add(function() {
                    d = l
                }, b[1 ^ a][2].disable, b[2][2].lock);
                f[c[0]] = function() {
                    return f[c[0] + "With"](this === f ? e : this, arguments), this
                };
                f[c[0] + "With"] = h.fireWith
            }), e.promise(f), a && a.call(f, f), f
        },
        when: function(a) {
            var b = 0,
                d = sa.call(arguments),
                e = d.length,
                f = 1 !== e || a && c.isFunction(a.promise) ? e : 0,
                h = 1 === f ? a : c.Deferred(),
                l = function(a, b, c) {
                    return function(d) {
                        b[a] = this;
                        c[a] = 1 < arguments.length ? sa.call(arguments) : d;
                        c === x ? h.notifyWith(b, c) : --f || h.resolveWith(b, c)
                    }
                },
                m;
            if (1 < e) {
                var x = Array(e);
                var p = Array(e);
                for (m = Array(e); e > b; b++) d[b] && c.isFunction(d[b].promise) ? d[b].promise().done(l(b, m, d)).fail(h.reject).progress(l(b, p, x)) : --f
            }
            return f || h.resolveWith(m, d), h.promise()
        }
    });
    c.support = function(a) {
        var b, d, e, f, h = A.createElement("div");
        if (h.setAttribute("className",
                "t"), h.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", b = h.getElementsByTagName("*") || [], d = h.getElementsByTagName("a")[0], !d || !d.style || !b.length) return a;
        var l = A.createElement("select");
        var m = l.appendChild(A.createElement("option"));
        b = h.getElementsByTagName("input")[0];
        d.style.cssText = "top:1px;float:left;opacity:.5";
        a.getSetAttribute = "t" !== h.className;
        a.leadingWhitespace = 3 === h.firstChild.nodeType;
        a.tbody = !h.getElementsByTagName("tbody").length;
        a.htmlSerialize = !!h.getElementsByTagName("link").length;
        a.style = /top/.test(d.getAttribute("style"));
        a.hrefNormalized = "/a" === d.getAttribute("href");
        a.opacity = /^0.5/.test(d.style.opacity);
        a.cssFloat = !!d.style.cssFloat;
        a.checkOn = !!b.value;
        a.optSelected = m.selected;
        a.enctype = !!A.createElement("form").enctype;
        a.html5Clone = "<:nav></:nav>" !== A.createElement("nav").cloneNode(!0).outerHTML;
        a.inlineBlockNeedsLayout = !1;
        a.shrinkWrapBlocks = !1;
        a.pixelPosition = !1;
        a.deleteExpando = !0;
        a.noCloneEvent = !0;
        a.reliableMarginRight = !0;
        a.boxSizingReliable = !0;
        b.checked = !0;
        a.noCloneChecked =
            b.cloneNode(!0).checked;
        l.disabled = !0;
        a.optDisabled = !m.disabled;
        try {
            delete h.test
        } catch (x) {
            a.deleteExpando = !1
        }
        b = A.createElement("input");
        b.setAttribute("value", "");
        a.input = "" === b.getAttribute("value");
        b.value = "t";
        b.setAttribute("type", "radio");
        a.radioValue = "t" === b.value;
        b.setAttribute("checked", "t");
        b.setAttribute("name", "t");
        d = A.createDocumentFragment();
        d.appendChild(b);
        a.appendChecked = b.checked;
        a.checkClone = d.cloneNode(!0).cloneNode(!0).lastChild.checked;
        h.attachEvent && (h.attachEvent("onclick",
            function() {
                a.noCloneEvent = !1
            }), h.cloneNode(!0).click());
        for (f in {
                submit: !0,
                change: !0,
                focusin: !0
            }) h.setAttribute(d = "on" + f, "t"), a[f + "Bubbles"] = d in n || !1 === h.attributes[d].expando;
        h.style.backgroundClip = "content-box";
        h.cloneNode(!0).style.backgroundClip = "";
        a.clearCloneStyle = "content-box" === h.style.backgroundClip;
        for (f in c(a)) break;
        return a.ownLast = "0" !== f, c(function() {
            var b, d, f, l = A.getElementsByTagName("body")[0];
            l && (b = A.createElement("div"), b.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",
                l.appendChild(b).appendChild(h), h.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", f = h.getElementsByTagName("td"), f[0].style.cssText = "padding:0;margin:0;border:0;display:none", e = 0 === f[0].offsetHeight, f[0].style.display = "", f[1].style.display = "none", a.reliableHiddenOffsets = e && 0 === f[0].offsetHeight, h.innerHTML = "", h.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",
                c.swap(l, null != l.style.zoom ? {
                    zoom: 1
                } : {}, function() {
                    a.boxSizing = 4 === h.offsetWidth
                }), n.getComputedStyle && (a.pixelPosition = "1%" !== (n.getComputedStyle(h, null) || {}).top, a.boxSizingReliable = "4px" === (n.getComputedStyle(h, null) || {
                    width: "4px"
                }).width, d = h.appendChild(A.createElement("div")), d.style.cssText = h.style.cssText = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;", d.style.marginRight = d.style.width = "0", h.style.width = "1px", a.reliableMarginRight = !parseFloat((n.getComputedStyle(d, null) || {}).marginRight)), typeof h.style.zoom !== U && (h.innerHTML = "", h.style.cssText = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;width:1px;padding:1px;display:inline;zoom:1", a.inlineBlockNeedsLayout = 3 === h.offsetWidth, h.style.display = "block", h.innerHTML = "<div></div>", h.firstChild.style.width = "5px", a.shrinkWrapBlocks = 3 !== h.offsetWidth, a.inlineBlockNeedsLayout && (l.style.zoom = 1)), l.removeChild(b),
                b = h = f = d = null)
        }), b = l = d = m = d = b = null, a
    }({});
    var Fb = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
        Eb = /([A-Z])/g;
    c.extend({
        cache: {},
        noData: {
            applet: !0,
            embed: !0,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function(a) {
            return a = a.nodeType ? c.cache[a[c.expando]] : a[c.expando], !!a && !z(a)
        },
        data: function(a, b, c) {
            return g(a, b, c)
        },
        removeData: function(a, b) {
            return q(a, b)
        },
        _data: function(a, b, c) {
            return g(a, b, c, !0)
        },
        _removeData: function(a, b) {
            return q(a, b, !0)
        },
        acceptData: function(a) {
            if (a.nodeType && 1 !== a.nodeType && 9 !== a.nodeType) return !1;
            var b = a.nodeName && c.noData[a.nodeName.toLowerCase()];
            return !b || !0 !== b && a.getAttribute("classid") === b
        }
    });
    c.fn.extend({
        data: function(a, b) {
            var d, e = null,
                f = 0,
                h = this[0];
            if (a === k) {
                if (this.length && (e = c.data(h), 1 === h.nodeType && !c._data(h, "parsedAttrs"))) {
                    for (d = h.attributes; d.length > f; f++) {
                        var l = d[f].name;
                        0 === l.indexOf("data-") && (l = c.camelCase(l.slice(5)), F(h, l, e[l]))
                    }
                    c._data(h, "parsedAttrs", !0)
                }
                return e
            }
            return "object" == typeof a ? this.each(function() {
                c.data(this, a)
            }) : 1 < arguments.length ? this.each(function() {
                c.data(this,
                    a, b)
            }) : h ? F(h, a, c.data(h, a)) : null
        },
        removeData: function(a) {
            return this.each(function() {
                c.removeData(this, a)
            })
        }
    });
    c.extend({
        queue: function(a, b, d) {
            var e;
            return a ? (b = (b || "fx") + "queue", e = c._data(a, b), d && (!e || c.isArray(d) ? e = c._data(a, b, c.makeArray(d)) : e.push(d)), e || []) : k
        },
        dequeue: function(a, b) {
            b = b || "fx";
            var d = c.queue(a, b),
                e = d.length,
                f = d.shift(),
                h = c._queueHooks(a, b),
                l = function() {
                    c.dequeue(a, b)
                };
            "inprogress" === f && (f = d.shift(), e--);
            f && ("fx" === b && d.unshift("inprogress"), delete h.stop, f.call(a, l, h));
            !e && h && h.empty.fire()
        },
        _queueHooks: function(a, b) {
            var d = b + "queueHooks";
            return c._data(a, d) || c._data(a, d, {
                empty: c.Callbacks("once memory").add(function() {
                    c._removeData(a, b + "queue");
                    c._removeData(a, d)
                })
            })
        }
    });
    c.fn.extend({
        queue: function(a, b) {
            var d = 2;
            return "string" != typeof a && (b = a, a = "fx", d--), d > arguments.length ? c.queue(this[0], a) : b === k ? this : this.each(function() {
                var d = c.queue(this, a, b);
                c._queueHooks(this, a);
                "fx" === a && "inprogress" !== d[0] && c.dequeue(this, a)
            })
        },
        dequeue: function(a) {
            return this.each(function() {
                c.dequeue(this, a)
            })
        },
        delay: function(a, b) {
            return a = c.fx ? c.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function(b, c) {
                var d = setTimeout(b, a);
                c.stop = function() {
                    clearTimeout(d)
                }
            })
        },
        clearQueue: function(a) {
            return this.queue(a || "fx", [])
        },
        promise: function(a, b) {
            var d, e = 1,
                f = c.Deferred(),
                h = this,
                l = this.length,
                m = function() {
                    --e || f.resolveWith(h, [h])
                };
            "string" != typeof a && (b = a, a = k);
            for (a = a || "fx"; l--;)(d = c._data(h[l], a + "queueHooks")) && d.empty && (e++, d.empty.add(m));
            return m(), f.promise(b)
        }
    });
    var Ea, Va = /[\t\r\n\f]/g,
        Wb = /\r/g,
        Xb = /^(?:input|select|textarea|button|object)$/i,
        Yb = /^(?:a|area)$/i,
        Wa = /^(?:checked|selected)$/i,
        qa = c.support.getSetAttribute,
        Na = c.support.input;
    c.fn.extend({
        attr: function(a, b) {
            return c.access(this, c.attr, a, b, 1 < arguments.length)
        },
        removeAttr: function(a) {
            return this.each(function() {
                c.removeAttr(this, a)
            })
        },
        prop: function(a, b) {
            return c.access(this, c.prop, a, b, 1 < arguments.length)
        },
        removeProp: function(a) {
            return a = c.propFix[a] || a, this.each(function() {
                try {
                    this[a] = k, delete this[a]
                } catch (b) {}
            })
        },
        addClass: function(a) {
            var b, d, e, f, h = 0,
                l = this.length;
            var m = "string" ==
                typeof a && a;
            if (c.isFunction(a)) return this.each(function(b) {
                c(this).addClass(a.call(this, b, this.className))
            });
            if (m)
                for (m = (a || "").match(oa) || []; l > h; h++)
                    if (b = this[h], d = 1 === b.nodeType && (b.className ? (" " + b.className + " ").replace(Va, " ") : " ")) {
                        for (f = 0; e = m[f++];) 0 > d.indexOf(" " + e + " ") && (d += e + " ");
                        b.className = c.trim(d)
                    }
            return this
        },
        removeClass: function(a) {
            var b, d, e, f, h = 0,
                l = this.length;
            var m = 0 === arguments.length || "string" == typeof a && a;
            if (c.isFunction(a)) return this.each(function(b) {
                c(this).removeClass(a.call(this,
                    b, this.className))
            });
            if (m)
                for (m = (a || "").match(oa) || []; l > h; h++)
                    if (b = this[h], d = 1 === b.nodeType && (b.className ? (" " + b.className + " ").replace(Va, " ") : "")) {
                        for (f = 0; e = m[f++];)
                            for (; 0 <= d.indexOf(" " + e + " ");) d = d.replace(" " + e + " ", " ");
                        b.className = a ? c.trim(d) : ""
                    }
            return this
        },
        toggleClass: function(a, b) {
            var d = typeof a;
            return "boolean" == typeof b && "string" === d ? b ? this.addClass(a) : this.removeClass(a) : c.isFunction(a) ? this.each(function(d) {
                c(this).toggleClass(a.call(this, d, this.className, b), b)
            }) : this.each(function() {
                if ("string" ===
                    d)
                    for (var b, f = 0, h = c(this), l = a.match(oa) || []; b = l[f++];) h.hasClass(b) ? h.removeClass(b) : h.addClass(b);
                else(d === U || "boolean" === d) && (this.className && c._data(this, "__className__", this.className), this.className = this.className || !1 === a ? "" : c._data(this, "__className__") || "")
            })
        },
        hasClass: function(a) {
            a = " " + a + " ";
            for (var b = 0, c = this.length; c > b; b++)
                if (1 === this[b].nodeType && 0 <= (" " + this[b].className + " ").replace(Va, " ").indexOf(a)) return !0;
            return !1
        },
        val: function(a) {
            var b, d, e, f = this[0];
            if (arguments.length) return e =
                c.isFunction(a), this.each(function(b) {
                    var f;
                    1 === this.nodeType && (f = e ? a.call(this, b, c(this).val()) : a, null == f ? f = "" : "number" == typeof f ? f += "" : c.isArray(f) && (f = c.map(f, function(a) {
                        return null == a ? "" : a + ""
                    })), d = c.valHooks[this.type] || c.valHooks[this.nodeName.toLowerCase()], d && "set" in d && d.set(this, f, "value") !== k || (this.value = f))
                });
            if (f) return d = c.valHooks[f.type] || c.valHooks[f.nodeName.toLowerCase()], d && "get" in d && (b = d.get(f, "value")) !== k ? b : (b = f.value, "string" == typeof b ? b.replace(Wb, "") : null == b ? "" : b)
        }
    });
    c.extend({
        valHooks: {
            option: {
                get: function(a) {
                    var b =
                        c.find.attr(a, "value");
                    return null != b ? b : a.text
                }
            },
            select: {
                get: function(a) {
                    for (var b, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, h = f ? null : [], l = f ? e + 1 : d.length, m = 0 > e ? l : f ? e : 0; l > m; m++)
                        if (b = d[m], !(!b.selected && m !== e || (c.support.optDisabled ? b.disabled : null !== b.getAttribute("disabled")) || b.parentNode.disabled && c.nodeName(b.parentNode, "optgroup"))) {
                            if (a = c(b).val(), f) return a;
                            h.push(a)
                        }
                    return h
                },
                set: function(a, b) {
                    for (var d, e, f = a.options, h = c.makeArray(b), l = f.length; l--;) e = f[l], (e.selected = 0 <= c.inArray(c(e).val(),
                        h)) && (d = !0);
                    return d || (a.selectedIndex = -1), h
                }
            }
        },
        attr: function(a, b, d) {
            var e, f, h = a.nodeType;
            if (a && 3 !== h && 8 !== h && 2 !== h) return typeof a.getAttribute === U ? c.prop(a, b, d) : (1 === h && c.isXMLDoc(a) || (b = b.toLowerCase(), e = c.attrHooks[b] || (c.expr.match.bool.test(b) ? Zb : Ea)), d === k ? e && "get" in e && null !== (f = e.get(a, b)) ? f : (f = c.find.attr(a, b), null == f ? k : f) : null !== d ? e && "set" in e && (f = e.set(a, d, b)) !== k ? f : (a.setAttribute(b, d + ""), d) : (c.removeAttr(a, b), k))
        },
        removeAttr: function(a, b) {
            var d, e = 0,
                f = b && b.match(oa);
            if (f && 1 === a.nodeType)
                for (; d =
                    f[e++];) {
                    var h = c.propFix[d] || d;
                    c.expr.match.bool.test(d) ? Na && qa || !Wa.test(d) ? a[h] = !1 : a[c.camelCase("default-" + d)] = a[h] = !1 : c.attr(a, d, "");
                    a.removeAttribute(qa ? d : h)
                }
        },
        attrHooks: {
            type: {
                set: function(a, b) {
                    if (!c.support.radioValue && "radio" === b && c.nodeName(a, "input")) {
                        var d = a.value;
                        return a.setAttribute("type", b), d && (a.value = d), b
                    }
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(a, b, d) {
            var e, f, h, l = a.nodeType;
            if (a && 3 !== l && 8 !== l && 2 !== l) return h = 1 !== l || !c.isXMLDoc(a), h && (b = c.propFix[b] || b, f = c.propHooks[b]),
                d !== k ? f && "set" in f && (e = f.set(a, d, b)) !== k ? e : a[b] = d : f && "get" in f && null !== (e = f.get(a, b)) ? e : a[b]
        },
        propHooks: {
            tabIndex: {
                get: function(a) {
                    var b = c.find.attr(a, "tabindex");
                    return b ? parseInt(b, 10) : Xb.test(a.nodeName) || Yb.test(a.nodeName) && a.href ? 0 : -1
                }
            }
        }
    });
    var Zb = {
        set: function(a, b, d) {
            return !1 === b ? c.removeAttr(a, d) : Na && qa || !Wa.test(d) ? a.setAttribute(!qa && c.propFix[d] || d, d) : a[c.camelCase("default-" + d)] = a[d] = !0, d
        }
    };
    c.each(c.expr.match.bool.source.match(/\w+/g), function(a, b) {
        var d = c.expr.attrHandle[b] || c.find.attr;
        c.expr.attrHandle[b] = Na && qa || !Wa.test(b) ? function(a, b, h) {
            var e = c.expr.attrHandle[b];
            a = h ? k : (c.expr.attrHandle[b] = k) != d(a, b, h) ? b.toLowerCase() : null;
            return c.expr.attrHandle[b] = e, a
        } : function(a, b, d) {
            return d ? k : a[c.camelCase("default-" + b)] ? b.toLowerCase() : null
        }
    });
    Na && qa || (c.attrHooks.value = {
        set: function(a, b, d) {
            return c.nodeName(a, "input") ? (a.defaultValue = b, k) : Ea && Ea.set(a, b, d)
        }
    });
    qa || (Ea = {
        set: function(a, b, c) {
            var d = a.getAttributeNode(c);
            return d || a.setAttributeNode(d = a.ownerDocument.createAttribute(c)),
                d.value = b += "", "value" === c || b === a.getAttribute(c) ? b : k
        }
    }, c.expr.attrHandle.id = c.expr.attrHandle.name = c.expr.attrHandle.coords = function(a, b, c) {
        var d;
        return c ? k : (d = a.getAttributeNode(b)) && "" !== d.value ? d.value : null
    }, c.valHooks.button = {
        get: function(a, b) {
            var c = a.getAttributeNode(b);
            return c && c.specified ? c.value : k
        },
        set: Ea.set
    }, c.attrHooks.contenteditable = {
        set: function(a, b, c) {
            Ea.set(a, "" === b ? !1 : b, c)
        }
    }, c.each(["width", "height"], function(a, b) {
        c.attrHooks[b] = {
            set: function(a, c) {
                return "" === c ? (a.setAttribute(b,
                    "auto"), c) : k
            }
        }
    }));
    c.support.hrefNormalized || c.each(["href", "src"], function(a, b) {
        c.propHooks[b] = {
            get: function(a) {
                return a.getAttribute(b, 4)
            }
        }
    });
    c.support.style || (c.attrHooks.style = {
        get: function(a) {
            return a.style.cssText || k
        },
        set: function(a, b) {
            return a.style.cssText = b + ""
        }
    });
    c.support.optSelected || (c.propHooks.selected = {
        get: function(a) {
            a = a.parentNode;
            return a && (a.selectedIndex, a.parentNode && a.parentNode.selectedIndex), null
        }
    });
    c.each("tabIndex readOnly maxLength cellSpacing cellPadding rowSpan colSpan useMap frameBorder contentEditable".split(" "),
        function() {
            c.propFix[this.toLowerCase()] = this
        });
    c.support.enctype || (c.propFix.enctype = "encoding");
    c.each(["radio", "checkbox"], function() {
        c.valHooks[this] = {
            set: function(a, b) {
                return c.isArray(b) ? a.checked = 0 <= c.inArray(c(a).val(), b) : k
            }
        };
        c.support.checkOn || (c.valHooks[this].get = function(a) {
            return null === a.getAttribute("value") ? "on" : a.value
        })
    });
    var Xa = /^(?:input|select|textarea)$/i,
        $b = /^key/,
        ac = /^(?:mouse|contextmenu)|click/,
        mb = /^(?:focusinfocus|focusoutblur)$/,
        nb = /^([^.]*)(?:\.(.+)|)$/;
    c.event = {
        global: {},
        add: function(a, b, d, e, f) {
            var h, l, m, x, p, C, r, g;
            if (l = c._data(a)) {
                d.handler && (m = d, d = m.handler, f = m.selector);
                d.guid || (d.guid = c.guid++);
                (h = l.events) || (h = l.events = {});
                (p = l.handle) || (p = l.handle = function(a) {
                    return typeof c === U || a && c.event.triggered === a.type ? k : c.event.dispatch.apply(p.elem, arguments)
                }, p.elem = a);
                b = (b || "").match(oa) || [""];
                for (l = b.length; l--;) {
                    var G = nb.exec(b[l]) || [];
                    var y = g = G[1];
                    G = (G[2] || "").split(".").sort();
                    y && (x = c.event.special[y] || {}, y = (f ? x.delegateType : x.bindType) || y, x = c.event.special[y] || {}, C = c.extend({
                        type: y,
                        origType: g,
                        data: e,
                        handler: d,
                        guid: d.guid,
                        selector: f,
                        needsContext: f && c.expr.match.needsContext.test(f),
                        namespace: G.join(".")
                    }, m), (r = h[y]) || (r = h[y] = [], r.delegateCount = 0, x.setup && !1 !== x.setup.call(a, e, G, p) || (a.addEventListener ? a.addEventListener(y, p, !1) : a.attachEvent && a.attachEvent("on" + y, p))), x.add && (x.add.call(a, C), C.handler.guid || (C.handler.guid = d.guid)), f ? r.splice(r.delegateCount++, 0, C) : r.push(C), c.event.global[y] = !0)
                }
                a = null
            }
        },
        remove: function(a, b, d, e, f) {
            var h, l, m, p, k, C, r, g, G =
                c.hasData(a) && c._data(a);
            if (G && (k = G.events)) {
                b = (b || "").match(oa) || [""];
                for (p = b.length; p--;)
                    if (l = nb.exec(b[p]) || [], C = g = l[1], r = (l[2] || "").split(".").sort(), C) {
                        var y = c.event.special[C] || {};
                        C = (e ? y.delegateType : y.bindType) || C;
                        var A = k[C] || [];
                        l = l[2] && RegExp("(^|\\.)" + r.join("\\.(?:.*\\.|)") + "(\\.|$)");
                        for (m = h = A.length; h--;) {
                            var J = A[h];
                            !f && g !== J.origType || d && d.guid !== J.guid || l && !l.test(J.namespace) || e && e !== J.selector && ("**" !== e || !J.selector) || (A.splice(h, 1), J.selector && A.delegateCount--, y.remove && y.remove.call(a,
                                J))
                        }
                        m && !A.length && (y.teardown && !1 !== y.teardown.call(a, r, G.handle) || c.removeEvent(a, C, G.handle), delete k[C])
                    } else
                        for (C in k) c.event.remove(a, C + b[p], d, e, !0);
                c.isEmptyObject(k) && (delete G.handle, c._removeData(a, "events"))
            }
        },
        trigger: function(a, b, d, e) {
            var f, h, l, m, p = [d || A],
                r = Da.call(a, "type") ? a.type : a;
            var C = Da.call(a, "namespace") ? a.namespace.split(".") : [];
            if (l = f = d = d || A, 3 !== d.nodeType && 8 !== d.nodeType && !mb.test(r + c.event.triggered) && (0 <= r.indexOf(".") && (C = r.split("."), r = C.shift(), C.sort()), h = 0 > r.indexOf(":") &&
                    "on" + r, a = a[c.expando] ? a : new c.Event(r, "object" == typeof a && a), a.isTrigger = e ? 2 : 3, a.namespace = C.join("."), a.namespace_re = a.namespace ? RegExp("(^|\\.)" + C.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, a.result = k, a.target || (a.target = d), b = null == b ? [a] : c.makeArray(b, [a]), m = c.event.special[r] || {}, e || !m.trigger || !1 !== m.trigger.apply(d, b))) {
                if (!e && !m.noBubble && !c.isWindow(d)) {
                    var g = m.delegateType || r;
                    for (mb.test(g + r) || (l = l.parentNode); l; l = l.parentNode) p.push(l), f = l;
                    f === (d.ownerDocument || A) && p.push(f.defaultView || f.parentWindow ||
                        n)
                }
                for (C = 0;
                    (l = p[C++]) && !a.isPropagationStopped();) a.type = 1 < C ? g : m.bindType || r, (f = (c._data(l, "events") || {})[a.type] && c._data(l, "handle")) && f.apply(l, b), (f = h && l[h]) && c.acceptData(l) && f.apply && !1 === f.apply(l, b) && a.preventDefault();
                if (a.type = r, !(e || a.isDefaultPrevented() || m._default && !1 !== m._default.apply(p.pop(), b)) && c.acceptData(d) && h && d[r] && !c.isWindow(d)) {
                    (f = d[h]) && (d[h] = null);
                    c.event.triggered = r;
                    try {
                        d[r]()
                    } catch (yc) {}
                    c.event.triggered = k;
                    f && (d[h] = f)
                }
                return a.result
            }
        },
        dispatch: function(a) {
            a = c.event.fix(a);
            var b, d, e, f, h = sa.call(arguments);
            var l = (c._data(this, "events") || {})[a.type] || [];
            var m = c.event.special[a.type] || {};
            if (h[0] = a, a.delegateTarget = this, !m.preDispatch || !1 !== m.preDispatch.call(this, a)) {
                var p = c.event.handlers.call(this, a, l);
                for (l = 0;
                    (e = p[l++]) && !a.isPropagationStopped();)
                    for (a.currentTarget = e.elem, f = 0;
                        (d = e.handlers[f++]) && !a.isImmediatePropagationStopped();) a.namespace_re && !a.namespace_re.test(d.namespace) || (a.handleObj = d, a.data = d.data, b = ((c.event.special[d.origType] || {}).handle || d.handler).apply(e.elem,
                        h), b === k || !1 !== (a.result = b) || (a.preventDefault(), a.stopPropagation()));
                return m.postDispatch && m.postDispatch.call(this, a), a.result
            }
        },
        handlers: function(a, b) {
            var d, e = [],
                f = b.delegateCount,
                h = a.target;
            if (f && h.nodeType && (!a.button || "click" !== a.type))
                for (; h != this; h = h.parentNode || this)
                    if (1 === h.nodeType && (!0 !== h.disabled || "click" !== a.type)) {
                        var l = [];
                        for (d = 0; f > d; d++) {
                            var m = b[d];
                            var p = m.selector + " ";
                            l[p] === k && (l[p] = m.needsContext ? 0 <= c(p, this).index(h) : c.find(p, this, null, [h]).length);
                            l[p] && l.push(m)
                        }
                        l.length &&
                            e.push({
                                elem: h,
                                handlers: l
                            })
                    }
            return b.length > f && e.push({
                elem: this,
                handlers: b.slice(f)
            }), e
        },
        fix: function(a) {
            if (a[c.expando]) return a;
            var b = a.type;
            var d = a,
                e = this.fixHooks[b];
            e || (this.fixHooks[b] = e = ac.test(b) ? this.mouseHooks : $b.test(b) ? this.keyHooks : {});
            var f = e.props ? this.props.concat(e.props) : this.props;
            a = new c.Event(d);
            for (b = f.length; b--;) {
                var h = f[b];
                a[h] = d[h]
            }
            return a.target || (a.target = d.srcElement || A), 3 === a.target.nodeType && (a.target = a.target.parentNode), a.metaKey = !!a.metaKey, e.filter ? e.filter(a,
                d) : a
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: ["char", "charCode", "key", "keyCode"],
            filter: function(a, b) {
                return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(a, b) {
                var c, e, f, h = b.button,
                    l = b.fromElement;
                return null ==
                    a.pageX && null != b.clientX && (e = a.target.ownerDocument || A, f = e.documentElement, c = e.body, a.pageX = b.clientX + (f && f.scrollLeft || c && c.scrollLeft || 0) - (f && f.clientLeft || c && c.clientLeft || 0), a.pageY = b.clientY + (f && f.scrollTop || c && c.scrollTop || 0) - (f && f.clientTop || c && c.clientTop || 0)), !a.relatedTarget && l && (a.relatedTarget = l === a.target ? b.toElement : l), a.which || h === k || (a.which = 1 & h ? 1 : 2 & h ? 3 : 4 & h ? 2 : 0), a
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== da() && this.focus) try {
                        return this.focus(), !1
                    } catch (a) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === da() && this.blur ? (this.blur(), !1) : k
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return c.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : k
                },
                _default: function(a) {
                    return c.nodeName(a.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(a) {
                    a.result !== k && (a.originalEvent.returnValue = a.result)
                }
            }
        },
        simulate: function(a, b, d, e) {
            a = c.extend(new c.Event, d, {
                type: a,
                isSimulated: !0,
                originalEvent: {}
            });
            e ? c.event.trigger(a,
                null, b) : c.event.dispatch.call(b, a);
            a.isDefaultPrevented() && d.preventDefault()
        }
    };
    c.removeEvent = A.removeEventListener ? function(a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c, !1)
    } : function(a, b, c) {
        b = "on" + b;
        a.detachEvent && (typeof a[b] === U && (a[b] = null), a.detachEvent(b, c))
    };
    c.Event = function(a, b) {
        return this instanceof c.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || !1 === a.returnValue || a.getPreventDefault && a.getPreventDefault() ? S : ga) : this.type =
            a, b && c.extend(this, b), this.timeStamp = a && a.timeStamp || c.now(), this[c.expando] = !0, k) : new c.Event(a, b)
    };
    c.Event.prototype = {
        isDefaultPrevented: ga,
        isPropagationStopped: ga,
        isImmediatePropagationStopped: ga,
        preventDefault: function() {
            var a = this.originalEvent;
            this.isDefaultPrevented = S;
            a && (a.preventDefault ? a.preventDefault() : a.returnValue = !1)
        },
        stopPropagation: function() {
            var a = this.originalEvent;
            this.isPropagationStopped = S;
            a && (a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            this.isImmediatePropagationStopped =
                S;
            this.stopPropagation()
        }
    };
    c.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, function(a, b) {
        c.event.special[a] = {
            delegateType: b,
            bindType: b,
            handle: function(a) {
                var d, f = a.relatedTarget,
                    h = a.handleObj;
                return (!f || f !== this && !c.contains(this, f)) && (a.type = h.origType, d = h.handler.apply(this, arguments), a.type = b), d
            }
        }
    });
    c.support.submitBubbles || (c.event.special.submit = {
        setup: function() {
            return c.nodeName(this, "form") ? !1 : (c.event.add(this, "click._submit keypress._submit", function(a) {
                a = a.target;
                (a = c.nodeName(a,
                    "input") || c.nodeName(a, "button") ? a.form : k) && !c._data(a, "submitBubbles") && (c.event.add(a, "submit._submit", function(a) {
                    a._submit_bubble = !0
                }), c._data(a, "submitBubbles", !0))
            }), k)
        },
        postDispatch: function(a) {
            a._submit_bubble && (delete a._submit_bubble, this.parentNode && !a.isTrigger && c.event.simulate("submit", this.parentNode, a, !0))
        },
        teardown: function() {
            return c.nodeName(this, "form") ? !1 : (c.event.remove(this, "._submit"), k)
        }
    });
    c.support.changeBubbles || (c.event.special.change = {
        setup: function() {
            return Xa.test(this.nodeName) ?
                (("checkbox" === this.type || "radio" === this.type) && (c.event.add(this, "propertychange._change", function(a) {
                    "checked" === a.originalEvent.propertyName && (this._just_changed = !0)
                }), c.event.add(this, "click._change", function(a) {
                    this._just_changed && !a.isTrigger && (this._just_changed = !1);
                    c.event.simulate("change", this, a, !0)
                })), !1) : (c.event.add(this, "beforeactivate._change", function(a) {
                    a = a.target;
                    Xa.test(a.nodeName) && !c._data(a, "changeBubbles") && (c.event.add(a, "change._change", function(a) {
                        !this.parentNode || a.isSimulated ||
                            a.isTrigger || c.event.simulate("change", this.parentNode, a, !0)
                    }), c._data(a, "changeBubbles", !0))
                }), k)
        },
        handle: function(a) {
            var b = a.target;
            return this !== b || a.isSimulated || a.isTrigger || "radio" !== b.type && "checkbox" !== b.type ? a.handleObj.handler.apply(this, arguments) : k
        },
        teardown: function() {
            return c.event.remove(this, "._change"), !Xa.test(this.nodeName)
        }
    });
    c.support.focusinBubbles || c.each({
        focus: "focusin",
        blur: "focusout"
    }, function(a, b) {
        var d = 0,
            e = function(a) {
                c.event.simulate(b, a.target, c.event.fix(a), !0)
            };
        c.event.special[b] = {
            setup: function() {
                0 === d++ && A.addEventListener(a, e, !0)
            },
            teardown: function() {
                0 === --d && A.removeEventListener(a, e, !0)
            }
        }
    });
    c.fn.extend({
        on: function(a, b, d, e, f) {
            var h, l;
            if ("object" == typeof a) {
                "string" != typeof b && (d = d || b, b = k);
                for (h in a) this.on(h, b, d, a[h], f);
                return this
            }
            if (null == d && null == e ? (e = b, d = b = k) : null == e && ("string" == typeof b ? (e = d, d = k) : (e = d, d = b, b = k)), !1 === e) e = ga;
            else if (!e) return this;
            return 1 === f && (l = e, e = function(a) {
                return c().off(a), l.apply(this, arguments)
            }, e.guid = l.guid || (l.guid = c.guid++)), this.each(function() {
                c.event.add(this,
                    a, e, d, b)
            })
        },
        one: function(a, b, c, e) {
            return this.on(a, b, c, e, 1)
        },
        off: function(a, b, d) {
            var e, f;
            if (a && a.preventDefault && a.handleObj) return e = a.handleObj, c(a.delegateTarget).off(e.namespace ? e.origType + "." + e.namespace : e.origType, e.selector, e.handler), this;
            if ("object" == typeof a) {
                for (f in a) this.off(f, b, a[f]);
                return this
            }
            return (!1 === b || "function" == typeof b) && (d = b, b = k), !1 === d && (d = ga), this.each(function() {
                c.event.remove(this, a, d, b)
            })
        },
        trigger: function(a, b) {
            return this.each(function() {
                c.event.trigger(a, b, this)
            })
        },
        triggerHandler: function(a, b) {
            var d = this[0];
            return d ? c.event.trigger(a, b, d, !0) : k
        }
    });
    var Gb = /^.[^:#\[\.,]*$/,
        bc = /^(?:parents|prev(?:Until|All))/,
        ob = c.expr.match.needsContext,
        cc = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    c.fn.extend({
        find: function(a) {
            var b, d = [],
                e = this,
                f = e.length;
            if ("string" != typeof a) return this.pushStack(c(a).filter(function() {
                for (b = 0; f > b; b++)
                    if (c.contains(e[b], this)) return !0
            }));
            for (b = 0; f > b; b++) c.find(a, e[b], d);
            return d = this.pushStack(1 < f ? c.unique(d) : d), d.selector = this.selector ? this.selector +
                " " + a : a, d
        },
        has: function(a) {
            var b, d = c(a, this),
                e = d.length;
            return this.filter(function() {
                for (b = 0; e > b; b++)
                    if (c.contains(this, d[b])) return !0
            })
        },
        not: function(a) {
            return this.pushStack(N(this, a || [], !0))
        },
        filter: function(a) {
            return this.pushStack(N(this, a || [], !1))
        },
        is: function(a) {
            return !!N(this, "string" == typeof a && ob.test(a) ? c(a) : a || [], !1).length
        },
        closest: function(a, b) {
            for (var d, e = 0, f = this.length, h = [], l = ob.test(a) || "string" != typeof a ? c(a, b || this.context) : 0; f > e; e++)
                for (d = this[e]; d && d !== b; d = d.parentNode)
                    if (11 >
                        d.nodeType && (l ? -1 < l.index(d) : 1 === d.nodeType && c.find.matchesSelector(d, a))) {
                        h.push(d);
                        break
                    }
            return this.pushStack(1 < h.length ? c.unique(h) : h)
        },
        index: function(a) {
            return a ? "string" == typeof a ? c.inArray(this[0], c(a)) : c.inArray(a.jquery ? a[0] : a, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(a, b) {
            var d = "string" == typeof a ? c(a, b) : c.makeArray(a && a.nodeType ? [a] : a),
                d = c.merge(this.get(), d);
            return this.pushStack(c.unique(d))
        },
        addBack: function(a) {
            return this.add(null == a ? this.prevObject :
                this.prevObject.filter(a))
        }
    });
    c.each({
        parent: function(a) {
            return (a = a.parentNode) && 11 !== a.nodeType ? a : null
        },
        parents: function(a) {
            return c.dir(a, "parentNode")
        },
        parentsUntil: function(a, b, d) {
            return c.dir(a, "parentNode", d)
        },
        next: function(a) {
            return L(a, "nextSibling")
        },
        prev: function(a) {
            return L(a, "previousSibling")
        },
        nextAll: function(a) {
            return c.dir(a, "nextSibling")
        },
        prevAll: function(a) {
            return c.dir(a, "previousSibling")
        },
        nextUntil: function(a, b, d) {
            return c.dir(a, "nextSibling", d)
        },
        prevUntil: function(a, b, d) {
            return c.dir(a,
                "previousSibling", d)
        },
        siblings: function(a) {
            return c.sibling((a.parentNode || {}).firstChild, a)
        },
        children: function(a) {
            return c.sibling(a.firstChild)
        },
        contents: function(a) {
            return c.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : c.merge([], a.childNodes)
        }
    }, function(a, b) {
        c.fn[a] = function(d, e) {
            var f = c.map(this, b, d);
            return "Until" !== a.slice(-5) && (e = d), e && "string" == typeof e && (f = c.filter(e, f)), 1 < this.length && (cc[a] || (f = c.unique(f)), bc.test(a) && (f = f.reverse())), this.pushStack(f)
        }
    });
    c.extend({
        filter: function(a,
            b, d) {
            var e = b[0];
            return d && (a = ":not(" + a + ")"), 1 === b.length && 1 === e.nodeType ? c.find.matchesSelector(e, a) ? [e] : [] : c.find.matches(a, c.grep(b, function(a) {
                return 1 === a.nodeType
            }))
        },
        dir: function(a, b, d) {
            var e = [];
            for (a = a[b]; a && 9 !== a.nodeType && (d === k || 1 !== a.nodeType || !c(a).is(d));) 1 === a.nodeType && e.push(a), a = a[b];
            return e
        },
        sibling: function(a, b) {
            for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
            return c
        }
    });
    var fb = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        dc = / jQuery\d+="(?:null|\d+)"/g,
        pb = RegExp("<(?:" + fb + ")[\\s/>]", "i"),
        Ya = /^\s+/,
        qb = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        rb = /<([\w:]+)/,
        sb = /<tbody/i,
        ec = /<|&#?\w+;/,
        fc = /<(?:script|style|link)/i,
        Qa = /^(?:checkbox|radio)$/i,
        gc = /checked\s*(?:[^=]|=\s*.checked.)/i,
        tb = /^$|\/(?:java|ecma)script/i,
        Hb = /^true\/(.*)/,
        hc = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        ka = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            area: [1, "<map>", "</map>"],
            param: [1, "<object>", "</object>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: c.support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
        },
        Za = V(A).appendChild(A.createElement("div"));
    ka.optgroup = ka.option;
    ka.tbody = ka.tfoot = ka.colgroup = ka.caption = ka.thead;
    ka.th = ka.td;
    c.fn.extend({
        text: function(a) {
            return c.access(this, function(a) {
                return a === k ? c.text(this) :
                    this.empty().append((this[0] && this[0].ownerDocument || A).createTextNode(a))
            }, null, a, arguments.length)
        },
        append: function() {
            return this.domManip(arguments, function(a) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || aa(this, a).appendChild(a)
            })
        },
        prepend: function() {
            return this.domManip(arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = aa(this, a);
                    b.insertBefore(a, b.firstChild)
                }
            })
        },
        before: function() {
            return this.domManip(arguments, function(a) {
                this.parentNode &&
                    this.parentNode.insertBefore(a, this)
            })
        },
        after: function() {
            return this.domManip(arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
            })
        },
        remove: function(a, b) {
            for (var d, e = a ? c.filter(a, this) : this, f = 0; null != (d = e[f]); f++) b || 1 !== d.nodeType || c.cleanData(v(d)), d.parentNode && (b && c.contains(d.ownerDocument, d) && ja(v(d, "script")), d.parentNode.removeChild(d));
            return this
        },
        empty: function() {
            for (var a, b = 0; null != (a = this[b]); b++) {
                for (1 === a.nodeType && c.cleanData(v(a, !1)); a.firstChild;) a.removeChild(a.firstChild);
                a.options && c.nodeName(a, "select") && (a.options.length = 0)
            }
            return this
        },
        clone: function(a, b) {
            return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function() {
                return c.clone(this, a, b)
            })
        },
        html: function(a) {
            return c.access(this, function(a) {
                var b = this[0] || {},
                    e = 0,
                    f = this.length;
                if (a === k) return 1 === b.nodeType ? b.innerHTML.replace(dc, "") : k;
                if (!("string" != typeof a || fc.test(a) || !c.support.htmlSerialize && pb.test(a) || !c.support.leadingWhitespace && Ya.test(a) || ka[(rb.exec(a) || ["", ""])[1].toLowerCase()])) {
                    a = a.replace(qb, "<$1></$2>");
                    try {
                        for (; f > e; e++) b = this[e] || {}, 1 === b.nodeType && (c.cleanData(v(b, !1)), b.innerHTML = a);
                        b = 0
                    } catch (h) {}
                }
                b && this.empty().append(a)
            }, null, a, arguments.length)
        },
        replaceWith: function() {
            var a = c.map(this, function(a) {
                    return [a.nextSibling, a.parentNode]
                }),
                b = 0;
            return this.domManip(arguments, function(d) {
                var e = a[b++],
                    f = a[b++];
                f && (e && e.parentNode !== f && (e = this.nextSibling), c(this).remove(), f.insertBefore(d, e))
            }, !0), b ? this : this.remove()
        },
        detach: function(a) {
            return this.remove(a, !0)
        },
        domManip: function(a, b, d) {
            a = wa.apply([],
                a);
            var e, f, h, l = 0,
                m = this.length,
                p = this,
                k = m - 1,
                C = a[0],
                r = c.isFunction(C);
            if (r || !(1 >= m || "string" != typeof C || c.support.checkClone) && gc.test(C)) return this.each(function(c) {
                var e = p.eq(c);
                r && (a[0] = C.call(this, c, e.html()));
                e.domManip(a, b, d)
            });
            if (m && (h = c.buildFragment(a, this[0].ownerDocument, !1, !d && this), e = h.firstChild, 1 === h.childNodes.length && (h = e), e)) {
                var g = c.map(v(h, "script"), ha);
                for (f = g.length; m > l; l++) e = h, l !== k && (e = c.clone(e, !0, !0), f && c.merge(g, v(e, "script"))), b.call(this[l], e, l);
                if (f)
                    for (h = g[g.length -
                            1].ownerDocument, c.map(g, ia), l = 0; f > l; l++) e = g[l], tb.test(e.type || "") && !c._data(e, "globalEval") && c.contains(h, e) && (e.src ? c._evalUrl(e.src) : c.globalEval((e.text || e.textContent || e.innerHTML || "").replace(hc, "")));
                h = e = null
            }
            return this
        }
    });
    c.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(a, b) {
        c.fn[a] = function(a) {
            for (var d = 0, f = [], h = c(a), l = h.length - 1; l >= d; d++) a = d === l ? this : this.clone(!0), c(h[d])[b](a), Ta.apply(f, a.get());
            return this.pushStack(f)
        }
    });
    c.extend({
        clone: function(a, b, d) {
            var e, f, h, l = c.contains(a.ownerDocument, a);
            if (c.support.html5Clone || c.isXMLDoc(a) || !pb.test("<" + a.nodeName + ">") ? f = a.cloneNode(!0) : (Za.innerHTML = a.outerHTML, Za.removeChild(f = Za.firstChild)), !(c.support.noCloneEvent && c.support.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || c.isXMLDoc(a))) {
                var m = v(f);
                var p = v(a);
                for (h = 0; null != (e = p[h]); ++h)
                    if (m[h]) {
                        var k = void 0,
                            C, r = e,
                            g = m[h];
                        if (1 === g.nodeType) {
                            if (C = g.nodeName.toLowerCase(), !c.support.noCloneEvent && g[c.expando]) {
                                e = c._data(g);
                                for (k in e.events) c.removeEvent(g, k, e.handle);
                                g.removeAttribute(c.expando)
                            }
                            "script" === C && g.text !== r.text ? (ha(g).text = r.text, ia(g)) : "object" === C ? (g.parentNode && (g.outerHTML = r.outerHTML), c.support.html5Clone && r.innerHTML && !c.trim(g.innerHTML) && (g.innerHTML = r.innerHTML)) : "input" === C && Qa.test(r.type) ? (g.defaultChecked = g.checked = r.checked, g.value !== r.value && (g.value = r.value)) : "option" === C ? g.defaultSelected = g.selected = r.defaultSelected : ("input" === C || "textarea" === C) && (g.defaultValue = r.defaultValue)
                        }
                    }
            }
            if (b)
                if (d)
                    for (p =
                        p || v(a), m = m || v(f), h = 0; null != (e = p[h]); h++) ma(e, m[h]);
                else ma(a, f);
            return m = v(f, "script"), 0 < m.length && ja(m, !l && v(a, "script")), f
        },
        buildFragment: function(a, b, d, e) {
            for (var f, h, l, m, p, k, r, g = a.length, G = V(b), y = [], J = 0; g > J; J++)
                if (h = a[J], h || 0 === h)
                    if ("object" === c.type(h)) c.merge(y, h.nodeType ? [h] : h);
                    else if (ec.test(h)) {
                m = m || G.appendChild(b.createElement("div"));
                p = (rb.exec(h) || ["", ""])[1].toLowerCase();
                r = ka[p] || ka._default;
                m.innerHTML = r[1] + h.replace(qb, "<$1></$2>") + r[2];
                for (f = r[0]; f--;) m = m.lastChild;
                if (!c.support.leadingWhitespace &&
                    Ya.test(h) && y.push(b.createTextNode(Ya.exec(h)[0])), !c.support.tbody)
                    for (f = (h = "table" !== p || sb.test(h) ? "<table>" !== r[1] || sb.test(h) ? 0 : m : m.firstChild) && h.childNodes.length; f--;) c.nodeName(k = h.childNodes[f], "tbody") && !k.childNodes.length && h.removeChild(k);
                c.merge(y, m.childNodes);
                for (m.textContent = ""; m.firstChild;) m.removeChild(m.firstChild);
                m = G.lastChild
            } else y.push(b.createTextNode(h));
            m && G.removeChild(m);
            c.support.appendChecked || c.grep(v(y, "input"), ta);
            for (J = 0; h = y[J++];)
                if ((!e || -1 === c.inArray(h, e)) &&
                    (l = c.contains(h.ownerDocument, h), m = v(G.appendChild(h), "script"), l && ja(m), d))
                    for (f = 0; h = m[f++];) tb.test(h.type || "") && d.push(h);
            return G
        },
        cleanData: function(a, b) {
            for (var d, e, f, h, l = 0, m = c.expando, p = c.cache, k = c.support.deleteExpando, r = c.event.special; null != (d = a[l]); l++)
                if ((b || c.acceptData(d)) && (f = d[m], h = f && p[f])) {
                    if (h.events)
                        for (e in h.events) r[e] ? c.event.remove(d, e) : c.removeEvent(d, e, h.handle);
                    p[f] && (delete p[f], k ? delete d[m] : typeof d.removeAttribute !== U ? d.removeAttribute(m) : d[m] = null, na.push(f))
                }
        },
        _evalUrl: function(a) {
            return c.ajax({
                url: a,
                type: "GET",
                dataType: "script",
                async: !1,
                global: !1,
                "throws": !0
            })
        }
    });
    c.fn.extend({
        wrapAll: function(a) {
            if (c.isFunction(a)) return this.each(function(b) {
                c(this).wrapAll(a.call(this, b))
            });
            if (this[0]) {
                var b = c(a, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && b.insertBefore(this[0]);
                b.map(function() {
                    for (var a = this; a.firstChild && 1 === a.firstChild.nodeType;) a = a.firstChild;
                    return a
                }).append(this)
            }
            return this
        },
        wrapInner: function(a) {
            return c.isFunction(a) ? this.each(function(b) {
                c(this).wrapInner(a.call(this,
                    b))
            }) : this.each(function() {
                var b = c(this),
                    d = b.contents();
                d.length ? d.wrapAll(a) : b.append(a)
            })
        },
        wrap: function(a) {
            var b = c.isFunction(a);
            return this.each(function(d) {
                c(this).wrapAll(b ? a.call(this, d) : a)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                c.nodeName(this, "body") || c(this).replaceWith(this.childNodes)
            }).end()
        }
    });
    var Ha, la, pa, $a = /alpha\([^)]*\)/i,
        ic = /opacity\s*=\s*([^)]*)/,
        jc = /^(top|right|bottom|left)$/,
        kc = /^(none|table(?!-c[ea]).+)/,
        ub = /^margin/,
        Ib = RegExp("^(" + La + ")(.*)$", "i"),
        Ja = RegExp("^(" +
            La + ")(?!px)[a-z%]+$", "i"),
        lc = RegExp("^([+-])=(" + La + ")", "i"),
        hb = {
            BODY: "block"
        },
        mc = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        vb = {
            letterSpacing: 0,
            fontWeight: 400
        },
        ra = ["Top", "Right", "Bottom", "Left"],
        gb = ["Webkit", "O", "Moz", "ms"];
    c.fn.extend({
        css: function(a, b) {
            return c.access(this, function(a, b, f) {
                var d = {},
                    e = 0;
                if (c.isArray(b)) {
                    var m = la(a);
                    for (f = b.length; f > e; e++) d[b[e]] = c.css(a, b[e], !1, m);
                    return d
                }
                return f !== k ? c.style(a, b, f) : c.css(a, b)
            }, a, b, 1 < arguments.length)
        },
        show: function() {
            return ea(this, !0)
        },
        hide: function() {
            return ea(this)
        },
        toggle: function(a) {
            return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function() {
                W(this) ? c(this).show() : c(this).hide()
            })
        }
    });
    c.extend({
        cssHooks: {
            opacity: {
                get: function(a, b) {
                    if (b) {
                        var c = pa(a, "opacity");
                        return "" === c ? "1" : c
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": c.support.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(a, b, d, e) {
            if (a && 3 !== a.nodeType &&
                8 !== a.nodeType && a.style) {
                var f, h, l, m = c.camelCase(b),
                    p = a.style;
                if (b = c.cssProps[m] || (c.cssProps[m] = ua(p, m)), l = c.cssHooks[b] || c.cssHooks[m], d === k) return l && "get" in l && (f = l.get(a, !1, e)) !== k ? f : p[b];
                if (h = typeof d, "string" === h && (f = lc.exec(d)) && (d = (f[1] + 1) * f[2] + parseFloat(c.css(a, b)), h = "number"), !(null == d || "number" === h && isNaN(d) || ("number" !== h || c.cssNumber[m] || (d += "px"), c.support.clearCloneStyle || "" !== d || 0 !== b.indexOf("background") || (p[b] = "inherit"), l && "set" in l && (d = l.set(a, d, e)) === k))) try {
                    p[b] = d
                } catch (xc) {}
            }
        },
        css: function(a, b, d, e) {
            var f, h, l, m = c.camelCase(b);
            return b = c.cssProps[m] || (c.cssProps[m] = ua(a.style, m)), l = c.cssHooks[b] || c.cssHooks[m], l && "get" in l && (h = l.get(a, !0, d)), h === k && (h = pa(a, b, e)), "normal" === h && b in vb && (h = vb[b]), "" === d || d ? (f = parseFloat(h), !0 === d || c.isNumeric(f) ? f || 0 : h) : h
        }
    });
    n.getComputedStyle ? (la = function(a) {
        return n.getComputedStyle(a, null)
    }, pa = function(a, b, d) {
        var e, f, h, l = (d = d || la(a)) ? d.getPropertyValue(b) || d[b] : k,
            m = a.style;
        return d && ("" !== l || c.contains(a.ownerDocument, a) || (l = c.style(a, b)),
            Ja.test(l) && ub.test(b) && (e = m.width, f = m.minWidth, h = m.maxWidth, m.minWidth = m.maxWidth = m.width = l, l = d.width, m.width = e, m.minWidth = f, m.maxWidth = h)), l
    }) : A.documentElement.currentStyle && (la = function(a) {
        return a.currentStyle
    }, pa = function(a, b, c) {
        var d, f, h;
        c = (c = c || la(a)) ? c[b] : k;
        var l = a.style;
        return null == c && l && l[b] && (c = l[b]), Ja.test(c) && !jc.test(b) && (d = l.left, f = a.runtimeStyle, h = f && f.left, h && (f.left = a.currentStyle.left), l.left = "fontSize" === b ? "1em" : c, c = l.pixelLeft + "px", l.left = d, h && (f.left = h)), "" === c ? "auto" : c
    });
    c.each(["height", "width"], function(a, b) {
        c.cssHooks[b] = {
            get: function(a, e, f) {
                return e ? 0 === a.offsetWidth && kc.test(c.css(a, "display")) ? c.swap(a, mc, function() {
                    return D(a, b, f)
                }) : D(a, b, f) : k
            },
            set: function(a, e, f) {
                var d = f && la(a);
                return w(a, e, f ? E(a, b, f, c.support.boxSizing && "border-box" === c.css(a, "boxSizing", !1, d), d) : 0)
            }
        }
    });
    c.support.opacity || (c.cssHooks.opacity = {
        get: function(a, b) {
            return ic.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : b ? "1" : ""
        },
        set: function(a,
            b) {
            var d = a.style,
                e = a.currentStyle,
                f = c.isNumeric(b) ? "alpha(opacity=" + 100 * b + ")" : "",
                h = e && e.filter || d.filter || "";
            d.zoom = 1;
            (1 <= b || "" === b) && "" === c.trim(h.replace($a, "")) && d.removeAttribute && (d.removeAttribute("filter"), "" === b || e && !e.filter) || (d.filter = $a.test(h) ? h.replace($a, f) : h + " " + f)
        }
    });
    c(function() {
        c.support.reliableMarginRight || (c.cssHooks.marginRight = {
            get: function(a, b) {
                return b ? c.swap(a, {
                    display: "inline-block"
                }, pa, [a, "marginRight"]) : k
            }
        });
        !c.support.pixelPosition && c.fn.position && c.each(["top", "left"],
            function(a, b) {
                c.cssHooks[b] = {
                    get: function(a, e) {
                        return e ? (e = pa(a, b), Ja.test(e) ? c(a).position()[b] + "px" : e) : k
                    }
                }
            })
    });
    c.expr && c.expr.filters && (c.expr.filters.hidden = function(a) {
        return 0 >= a.offsetWidth && 0 >= a.offsetHeight || !c.support.reliableHiddenOffsets && "none" === (a.style && a.style.display || c.css(a, "display"))
    }, c.expr.filters.visible = function(a) {
        return !c.expr.filters.hidden(a)
    });
    c.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(a, b) {
        c.cssHooks[a + b] = {
            expand: function(c) {
                var d = 0,
                    f = {};
                for (c = "string" == typeof c ?
                    c.split(" ") : [c]; 4 > d; d++) f[a + ra[d] + b] = c[d] || c[d - 2] || c[0];
                return f
            }
        };
        ub.test(a) || (c.cssHooks[a + b].set = w)
    });
    var nc = /%20/g,
        Jb = /\[\]$/,
        wb = /\r?\n/g,
        oc = /^(?:submit|button|image|reset|file)$/i,
        pc = /^(?:input|select|textarea|keygen)/i;
    c.fn.extend({
        serialize: function() {
            return c.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var a = c.prop(this, "elements");
                return a ? c.makeArray(a) : this
            }).filter(function() {
                var a = this.type;
                return this.name && !c(this).is(":disabled") && pc.test(this.nodeName) &&
                    !oc.test(a) && (this.checked || !Qa.test(a))
            }).map(function(a, b) {
                var d = c(this).val();
                return null == d ? null : c.isArray(d) ? c.map(d, function(a) {
                    return {
                        name: b.name,
                        value: a.replace(wb, "\r\n")
                    }
                }) : {
                    name: b.name,
                    value: d.replace(wb, "\r\n")
                }
            }).get()
        }
    });
    c.param = function(a, b) {
        var d, e = [],
            f = function(a, b) {
                b = c.isFunction(b) ? b() : null == b ? "" : b;
                e[e.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
            };
        if (b === k && (b = c.ajaxSettings && c.ajaxSettings.traditional), c.isArray(a) || a.jquery && !c.isPlainObject(a)) c.each(a, function() {
            f(this.name,
                this.value)
        });
        else
            for (d in a) P(d, a[d], b, f);
        return e.join("&").replace(nc, "+")
    };
    c.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, b) {
        c.fn[b] = function(a, c) {
            return 0 < arguments.length ? this.on(b, null, a, c) : this.trigger(b)
        }
    });
    c.fn.extend({
        hover: function(a, b) {
            return this.mouseenter(a).mouseleave(b || a)
        },
        bind: function(a, b, c) {
            return this.on(a,
                null, b, c)
        },
        unbind: function(a, b) {
            return this.off(a, null, b)
        },
        delegate: function(a, b, c, e) {
            return this.on(b, a, c, e)
        },
        undelegate: function(a, b, c) {
            return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
        }
    });
    var ab = c.now(),
        bb = /\?/,
        qc = /#.*$/,
        xb = /([?&])_=[^&]*/,
        rc = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        sc = /^(?:GET|HEAD)$/,
        tc = /^\/\//,
        yb = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
        zb = c.fn.load,
        Ab = {},
        Ra = {},
        Bb = "*/".concat("*");
    try {
        var za = Q.href
    } catch (a) {
        za = A.createElement("a"), za.href = "", za = za.href
    }
    var Fa = yb.exec(za.toLowerCase()) || [];
    c.fn.load = function(a, b, d) {
        if ("string" != typeof a && zb) return zb.apply(this, arguments);
        var e, f, h, l = this,
            m = a.indexOf(" ");
        return 0 <= m && (e = a.slice(m, a.length), a = a.slice(0, m)), c.isFunction(b) ? (d = b, b = k) : b && "object" == typeof b && (h = "POST"), 0 < l.length && c.ajax({
            url: a,
            type: h,
            dataType: "html",
            data: b
        }).done(function(a) {
            f = arguments;
            l.html(e ? c("<div>").append(c.parseHTML(a)).find(e) : a)
        }).complete(d && function(a, b) {
            l.each(d, f || [a.responseText, b, a])
        }), this
    };
    c.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),
        function(a, b) {
            c.fn[b] = function(a) {
                return this.on(b, a)
            }
        });
    c.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: za,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Fa[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Bb,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": c.parseJSON,
                "text xml": c.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(a, b) {
            return b ? O(O(a, c.ajaxSettings), b) : O(c.ajaxSettings, a)
        },
        ajaxPrefilter: Aa(Ab),
        ajaxTransport: Aa(Ra),
        ajax: function(a, b) {
            function d(a, b, d, e) {
                var f, r, x, w = b;
                if (2 !== t) {
                    t = 2;
                    l && clearTimeout(l);
                    p = k;
                    h = e || "";
                    n.readyState = 0 < a ? 4 : 0;
                    e = 200 <= a && 300 > a || 304 === a;
                    if (d) {
                        var u = g;
                        for (var C = n, T, q, B, v, I = u.contents, P = u.dataTypes;
                            "*" === P[0];) P.shift(),
                            q === k && (q = u.mimeType || C.getResponseHeader("Content-Type"));
                        if (q)
                            for (v in I)
                                if (I[v] && I[v].test(q)) {
                                    P.unshift(v);
                                    break
                                }
                        if (P[0] in d) B = P[0];
                        else {
                            for (v in d) {
                                if (!P[0] || u.converters[v + " " + P[0]]) {
                                    B = v;
                                    break
                                }
                                T || (T = v)
                            }
                            B = B || T
                        }
                        u = B ? (B !== P[0] && P.unshift(B), d[B]) : k
                    }
                    a: {
                        d = g;T = u;q = n;B = e;
                        var E, D, O;u = {};C = d.dataTypes.slice();
                        if (C[1])
                            for (E in d.converters) u[E.toLowerCase()] = d.converters[E];
                        for (v = C.shift(); v;)
                            if (d.responseFields[v] && (q[d.responseFields[v]] = T), !O && B && d.dataFilter && (T = d.dataFilter(T, d.dataType)), O = v, v = C.shift())
                                if ("*" ===
                                    v) v = O;
                                else if ("*" !== O && O !== v) {
                            if (E = u[O + " " + v] || u["* " + v], !E)
                                for (Q in u)
                                    if (D = Q.split(" "), D[1] === v && (E = u[O + " " + D[0]] || u["* " + D[0]])) {
                                        !0 === E ? E = u[Q] : !0 !== u[Q] && (v = D[0], C.unshift(D[1]));
                                        break
                                    }
                            if (!0 !== E)
                                if (E && d["throws"]) T = E(T);
                                else try {
                                    T = E(T)
                                } catch (Vb) {
                                    var Q = {
                                        state: "parsererror",
                                        error: E ? Vb : "No conversion from " + O + " to " + v
                                    };
                                    break a
                                }
                        }
                        Q = {
                            state: "success",
                            data: T
                        }
                    }
                    u = Q;
                    e ? (g.ifModified && (x = n.getResponseHeader("Last-Modified"), x && (c.lastModified[Y] = x), x = n.getResponseHeader("etag"), x && (c.etag[Y] = x)), 204 === a || "HEAD" ===
                        g.type ? w = "nocontent" : 304 === a ? w = "notmodified" : (w = u.state, f = u.data, r = u.error, e = !r)) : (r = w, (a || !w) && (w = "error", 0 > a && (a = 0)));
                    n.status = a;
                    n.statusText = (b || w) + "";
                    e ? J.resolveWith(G, [f, w, n]) : J.rejectWith(G, [n, w, r]);
                    n.statusCode(U);
                    U = k;
                    m && y.trigger(e ? "ajaxSuccess" : "ajaxError", [n, g, e ? f : r]);
                    A.fireWith(G, [n, w]);
                    m && (y.trigger("ajaxComplete", [n, g]), --c.active || c.event.trigger("ajaxStop"))
                }
            }
            "object" == typeof a && (b = a, a = k);
            b = b || {};
            var e, f, h, l, m, p, r, g = c.ajaxSetup({}, b),
                G = g.context || g,
                y = g.context && (G.nodeType || G.jquery) ?
                c(G) : c.event,
                J = c.Deferred(),
                A = c.Callbacks("once memory"),
                U = g.statusCode || {},
                w = {},
                u = {},
                t = 0,
                T = "canceled",
                n = {
                    readyState: 0,
                    getResponseHeader: function(a) {
                        var b;
                        if (2 === t) {
                            if (!r)
                                for (r = {}; b = rc.exec(h);) r[b[1].toLowerCase()] = b[2];
                            b = r[a.toLowerCase()]
                        }
                        return null == b ? null : b
                    },
                    getAllResponseHeaders: function() {
                        return 2 === t ? h : null
                    },
                    setRequestHeader: function(a, b) {
                        var c = a.toLowerCase();
                        return t || (a = u[c] = u[c] || a, w[a] = b), this
                    },
                    overrideMimeType: function(a) {
                        return t || (g.mimeType = a), this
                    },
                    statusCode: function(a) {
                        var b;
                        if (a)
                            if (2 > t)
                                for (b in a) U[b] = [U[b], a[b]];
                            else n.always(a[n.status]);
                        return this
                    },
                    abort: function(a) {
                        a = a || T;
                        return p && p.abort(a), d(0, a), this
                    }
                };
            if (J.promise(n).complete = A.add, n.success = n.done, n.error = n.fail, g.url = ((a || g.url || za) + "").replace(qc, "").replace(tc, Fa[1] + "//"), g.type = b.method || b.type || g.method || g.type, g.dataTypes = c.trim(g.dataType || "*").toLowerCase().match(oa) || [""], null == g.crossDomain && (e = yb.exec(g.url.toLowerCase()), g.crossDomain = !(!e || e[1] === Fa[1] && e[2] === Fa[2] && (e[3] || ("http:" === e[1] ? "80" :
                    "443")) === (Fa[3] || ("http:" === Fa[1] ? "80" : "443")))), g.data && g.processData && "string" != typeof g.data && (g.data = c.param(g.data, g.traditional)), B(Ab, g, b, n), 2 === t) return n;
            (m = g.global) && 0 === c.active++ && c.event.trigger("ajaxStart");
            g.type = g.type.toUpperCase();
            g.hasContent = !sc.test(g.type);
            var Y = g.url;
            g.hasContent || (g.data && (Y = g.url += (bb.test(Y) ? "&" : "?") + g.data, delete g.data), !1 === g.cache && (g.url = xb.test(Y) ? Y.replace(xb, "$1_=" + ab++) : Y + (bb.test(Y) ? "&" : "?") + "_=" + ab++));
            g.ifModified && (c.lastModified[Y] && n.setRequestHeader("If-Modified-Since",
                c.lastModified[Y]), c.etag[Y] && n.setRequestHeader("If-None-Match", c.etag[Y]));
            (g.data && g.hasContent && !1 !== g.contentType || b.contentType) && n.setRequestHeader("Content-Type", g.contentType);
            n.setRequestHeader("Accept", g.dataTypes[0] && g.accepts[g.dataTypes[0]] ? g.accepts[g.dataTypes[0]] + ("*" !== g.dataTypes[0] ? ", " + Bb + "; q=0.01" : "") : g.accepts["*"]);
            for (f in g.headers) n.setRequestHeader(f, g.headers[f]);
            if (g.beforeSend && (!1 === g.beforeSend.call(G, n, g) || 2 === t)) return n.abort();
            T = "abort";
            for (f in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) n[f](g[f]);
            if (p = B(Ra, g, b, n)) {
                n.readyState = 1;
                m && y.trigger("ajaxSend", [n, g]);
                g.async && 0 < g.timeout && (l = setTimeout(function() {
                    n.abort("timeout")
                }, g.timeout));
                try {
                    t = 1, p.send(w, d)
                } catch (lb) {
                    if (!(2 > t)) throw lb;
                    d(-1, lb)
                }
            } else d(-1, "No Transport");
            return n
        },
        getJSON: function(a, b, d) {
            return c.get(a, b, d, "json")
        },
        getScript: function(a, b) {
            return c.get(a, k, b, "script")
        }
    });
    c.each(["get", "post"], function(a, b) {
        c[b] = function(a, e, f, h) {
            return c.isFunction(e) && (h = h || f, f = e, e = k), c.ajax({
                url: a,
                type: b,
                dataType: h,
                data: e,
                success: f
            })
        }
    });
    c.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(a) {
                return c.globalEval(a), a
            }
        }
    });
    c.ajaxPrefilter("script", function(a) {
        a.cache === k && (a.cache = !1);
        a.crossDomain && (a.type = "GET", a.global = !1)
    });
    c.ajaxTransport("script", function(a) {
        if (a.crossDomain) {
            var b, d = A.head || c("head")[0] || A.documentElement;
            return {
                send: function(c, f) {
                    b = A.createElement("script");
                    b.async = !0;
                    a.scriptCharset && (b.charset = a.scriptCharset);
                    b.src = a.url;
                    b.onload = b.onreadystatechange = function(a, c) {
                        (c || !b.readyState || /loaded|complete/.test(b.readyState)) && (b.onload = b.onreadystatechange = null, b.parentNode && b.parentNode.removeChild(b), b = null, c || f(200, "success"))
                    };
                    d.insertBefore(b, d.firstChild)
                },
                abort: function() {
                    b && b.onload(k, !0)
                }
            }
        }
    });
    var Cb = [],
        cb = /(=)\?(?=&|$)|\?\?/;
    c.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var a = Cb.pop() || c.expando + "_" + ab++;
            return this[a] = !0, a
        }
    });
    c.ajaxPrefilter("json jsonp",
        function(a, b, d) {
            var e, f, h, l = !1 !== a.jsonp && (cb.test(a.url) ? "url" : "string" == typeof a.data && !(a.contentType || "").indexOf("application/x-www-form-urlencoded") && cb.test(a.data) && "data");
            return l || "jsonp" === a.dataTypes[0] ? (e = a.jsonpCallback = c.isFunction(a.jsonpCallback) ? a.jsonpCallback() : a.jsonpCallback, l ? a[l] = a[l].replace(cb, "$1" + e) : !1 !== a.jsonp && (a.url += (bb.test(a.url) ? "&" : "?") + a.jsonp + "=" + e), a.converters["script json"] = function() {
                    return h || c.error(e + " was not called"), h[0]
                }, a.dataTypes[0] = "json", f = n[e],
                n[e] = function() {
                    h = arguments
                }, d.always(function() {
                    n[e] = f;
                    a[e] && (a.jsonpCallback = b.jsonpCallback, Cb.push(e));
                    h && c.isFunction(f) && f(h[0]);
                    h = f = k
                }), "script") : k
        });
    var Ga, uc = 0,
        db = n.ActiveXObject && function() {
            for (var a in Ga) Ga[a](k, !0)
        };
    c.ajaxSettings.xhr = n.ActiveXObject ? function() {
        var a;
        if (!(a = !this.isLocal && I())) a: {
            try {
                a = new n.ActiveXObject("Microsoft.XMLHTTP");
                break a
            } catch (b) {}
            a = void 0
        }
        return a
    } : I;
    var Oa = c.ajaxSettings.xhr();
    c.support.cors = !!Oa && "withCredentials" in Oa;
    (Oa = c.support.ajax = !!Oa) && c.ajaxTransport(function(a) {
        if (!a.crossDomain ||
            c.support.cors) {
            var b;
            return {
                send: function(d, e) {
                    var f, h, l = a.xhr();
                    if (a.username ? l.open(a.type, a.url, a.async, a.username, a.password) : l.open(a.type, a.url, a.async), a.xhrFields)
                        for (h in a.xhrFields) l[h] = a.xhrFields[h];
                    a.mimeType && l.overrideMimeType && l.overrideMimeType(a.mimeType);
                    a.crossDomain || d["X-Requested-With"] || (d["X-Requested-With"] = "XMLHttpRequest");
                    try {
                        for (h in d) l.setRequestHeader(h, d[h])
                    } catch (m) {}
                    l.send(a.hasContent && a.data || null);
                    b = function(d, h) {
                        try {
                            if (b && (h || 4 === l.readyState))
                                if (b = k, f && (l.onreadystatechange =
                                        c.noop, db && delete Ga[f]), h) 4 !== l.readyState && l.abort();
                                else {
                                    var m = {};
                                    var p = l.status;
                                    var g = l.getAllResponseHeaders();
                                    "string" == typeof l.responseText && (m.text = l.responseText);
                                    try {
                                        var r = l.statusText
                                    } catch (Ma) {
                                        r = ""
                                    }
                                    p || !a.isLocal || a.crossDomain ? 1223 === p && (p = 204) : p = m.text ? 200 : 404
                                }
                        } catch (Ma) {
                            h || e(-1, Ma)
                        }
                        m && e(p, r, m, g)
                    };
                    a.async ? 4 === l.readyState ? setTimeout(b) : (f = ++uc, db && (Ga || (Ga = {}, c(n).unload(db)), Ga[f] = b), l.onreadystatechange = b) : b()
                },
                abort: function() {
                    b && b(k, !0)
                }
            }
        }
    });
    var Ba, Pa, vc = /^(?:toggle|show|hide)$/,
        Db = RegExp("^(?:([+-])=|)(" + La + ")([a-z%]*)$", "i"),
        wc = /queueHooks$/,
        Ka = [function(a, b, d) {
            var e, f, h, l, m, p = this,
                g = {},
                r = a.style,
                k = a.nodeType && W(a),
                y = c._data(a, "fxshow");
            d.queue || (l = c._queueHooks(a, "fx"), null == l.unqueued && (l.unqueued = 0, m = l.empty.fire, l.empty.fire = function() {
                l.unqueued || m()
            }), l.unqueued++, p.always(function() {
                p.always(function() {
                    l.unqueued--;
                    c.queue(a, "fx").length || l.empty.fire()
                })
            }));
            1 === a.nodeType && ("height" in b || "width" in b) && (d.overflow = [r.overflow, r.overflowX, r.overflowY], "inline" ===
                c.css(a, "display") && "none" === c.css(a, "float") && (c.support.inlineBlockNeedsLayout && "inline" !== t(a.nodeName) ? r.zoom = 1 : r.display = "inline-block"));
            d.overflow && (r.overflow = "hidden", c.support.shrinkWrapBlocks || p.always(function() {
                r.overflow = d.overflow[0];
                r.overflowX = d.overflow[1];
                r.overflowY = d.overflow[2]
            }));
            for (e in b)(f = b[e], vc.exec(f)) && (delete b[e], h = h || "toggle" === f, f !== (k ? "hide" : "show")) && (g[e] = y && y[e] || c.style(a, e));
            if (!c.isEmptyObject(g))
                for (e in y ? "hidden" in y && (k = y.hidden) : y = c._data(a, "fxshow", {}), h && (y.hidden = !k), k ? c(a).show() : p.done(function() {
                        c(a).hide()
                    }), p.done(function() {
                        var b;
                        c._removeData(a, "fxshow");
                        for (b in g) c.style(a, b, g[b])
                    }), g) b = G(k ? y[e] : 0, e, p), e in y || (y[e] = b.start, k && (b.end = b.start, b.start = "width" === e || "height" === e ? 1 : 0))
        }],
        Ia = {
            "*": [function(a, b) {
                var d = this.createTween(a, b),
                    e = d.cur(),
                    f = Db.exec(b),
                    h = f && f[3] || (c.cssNumber[a] ? "" : "px"),
                    l = (c.cssNumber[a] || "px" !== h && +e) && Db.exec(c.css(d.elem, a)),
                    m = 1,
                    p = 20;
                if (l && l[3] !== h) {
                    h = h || l[3];
                    f = f || [];
                    l = +e || 1;
                    do m = m || ".5", l /= m, c.style(d.elem,
                        a, l + h); while (m !== (m = d.cur() / e) && 1 !== m && --p)
                }
                return f && (l = d.start = +l || +e || 0, d.unit = h, d.end = f[1] ? l + (f[1] + 1) * f[2] : +f[2]), d
            }]
        };
    c.Animation = c.extend(y, {
        tweener: function(a, b) {
            c.isFunction(a) ? (b = a, a = ["*"]) : a = a.split(" ");
            for (var d, e = 0, f = a.length; f > e; e++) d = a[e], Ia[d] = Ia[d] || [], Ia[d].unshift(b)
        },
        prefilter: function(a, b) {
            b ? Ka.unshift(a) : Ka.push(a)
        }
    });
    c.Tween = r;
    r.prototype = {
        constructor: r,
        init: function(a, b, d, e, f, h) {
            this.elem = a;
            this.prop = d;
            this.easing = f || "swing";
            this.options = b;
            this.start = this.now = this.cur();
            this.end =
                e;
            this.unit = h || (c.cssNumber[d] ? "" : "px")
        },
        cur: function() {
            var a = r.propHooks[this.prop];
            return a && a.get ? a.get(this) : r.propHooks._default.get(this)
        },
        run: function(a) {
            var b, d = r.propHooks[this.prop];
            return this.pos = b = this.options.duration ? c.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), d && d.set ? d.set(this) : r.propHooks._default.set(this), this
        }
    };
    r.prototype.init.prototype =
        r.prototype;
    r.propHooks = {
        _default: {
            get: function(a) {
                var b;
                return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = c.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0) : a.elem[a.prop]
            },
            set: function(a) {
                c.fx.step[a.prop] ? c.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[c.cssProps[a.prop]] || c.cssHooks[a.prop]) ? c.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now
            }
        }
    };
    r.propHooks.scrollTop = r.propHooks.scrollLeft = {
        set: function(a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
        }
    };
    c.each(["toggle", "show", "hide"], function(a, b) {
        var d = c.fn[b];
        c.fn[b] = function(a, c, h) {
            return null == a || "boolean" == typeof a ? d.apply(this, arguments) : this.animate(Y(b, !0), a, c, h)
        }
    });
    c.fn.extend({
        fadeTo: function(a, b, c, e) {
            return this.filter(W).css("opacity", 0).show().end().animate({
                opacity: b
            }, a, c, e)
        },
        animate: function(a, b, d, e) {
            var f = c.isEmptyObject(a),
                h = c.speed(b, d, e);
            b = function() {
                var b = y(this, c.extend({}, a), h);
                (f || c._data(this, "finish")) && b.stop(!0)
            };
            return b.finish = b, f || !1 === h.queue ? this.each(b) : this.queue(h.queue,
                b)
        },
        stop: function(a, b, d) {
            var e = function(a) {
                var b = a.stop;
                delete a.stop;
                b(d)
            };
            return "string" != typeof a && (d = b, b = a, a = k), b && !1 !== a && this.queue(a || "fx", []), this.each(function() {
                var b = !0,
                    h = null != a && a + "queueHooks",
                    l = c.timers,
                    m = c._data(this);
                if (h) m[h] && m[h].stop && e(m[h]);
                else
                    for (h in m) m[h] && m[h].stop && wc.test(h) && e(m[h]);
                for (h = l.length; h--;) l[h].elem !== this || null != a && l[h].queue !== a || (l[h].anim.stop(d), b = !1, l.splice(h, 1));
                !b && d || c.dequeue(this, a)
            })
        },
        finish: function(a) {
            return !1 !== a && (a = a || "fx"), this.each(function() {
                var b =
                    c._data(this),
                    d = b[a + "queue"];
                var e = b[a + "queueHooks"];
                var f = c.timers,
                    h = d ? d.length : 0;
                b.finish = !0;
                c.queue(this, a, []);
                e && e.stop && e.stop.call(this, !0);
                for (e = f.length; e--;) f[e].elem === this && f[e].queue === a && (f[e].anim.stop(!0), f.splice(e, 1));
                for (e = 0; h > e; e++) d[e] && d[e].finish && d[e].finish.call(this);
                delete b.finish
            })
        }
    });
    c.each({
        slideDown: Y("show"),
        slideUp: Y("hide"),
        slideToggle: Y("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(a, b) {
        c.fn[a] = function(a, c, f) {
            return this.animate(b,
                a, c, f)
        }
    });
    c.speed = function(a, b, d) {
        var e = a && "object" == typeof a ? c.extend({}, a) : {
            complete: d || !d && b || c.isFunction(a) && a,
            duration: a,
            easing: d && b || b && !c.isFunction(b) && b
        };
        return e.duration = c.fx.off ? 0 : "number" == typeof e.duration ? e.duration : e.duration in c.fx.speeds ? c.fx.speeds[e.duration] : c.fx.speeds._default, (null == e.queue || !0 === e.queue) && (e.queue = "fx"), e.old = e.complete, e.complete = function() {
            c.isFunction(e.old) && e.old.call(this);
            e.queue && c.dequeue(this, e.queue)
        }, e
    };
    c.easing = {
        linear: function(a) {
            return a
        },
        swing: function(a) {
            return .5 - Math.cos(a * Math.PI) / 2
        }
    };
    c.timers = [];
    c.fx = r.prototype.init;
    c.fx.tick = function() {
        var a = c.timers,
            b = 0;
        for (Ba = c.now(); a.length > b; b++) {
            var d = a[b];
            d() || a[b] !== d || a.splice(b--, 1)
        }
        a.length || c.fx.stop();
        Ba = k
    };
    c.fx.timer = function(a) {
        a() && c.timers.push(a) && c.fx.start()
    };
    c.fx.interval = 13;
    c.fx.start = function() {
        Pa || (Pa = setInterval(c.fx.tick, c.fx.interval))
    };
    c.fx.stop = function() {
        clearInterval(Pa);
        Pa = null
    };
    c.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    };
    c.fx.step = {};
    c.expr && c.expr.filters &&
        (c.expr.filters.animated = function(a) {
            return c.grep(c.timers, function(b) {
                return a === b.elem
            }).length
        });
    c.fn.offset = function(a) {
        if (arguments.length) return a === k ? this : this.each(function(b) {
            c.offset.setOffset(this, a, b)
        });
        var b, d, e = {
                top: 0,
                left: 0
            },
            f = this[0],
            h = f && f.ownerDocument;
        if (h) return b = h.documentElement, c.contains(b, f) ? (typeof f.getBoundingClientRect !== U && (e = f.getBoundingClientRect()), d = T(h), {
            top: e.top + (d.pageYOffset || b.scrollTop) - (b.clientTop || 0),
            left: e.left + (d.pageXOffset || b.scrollLeft) - (b.clientLeft ||
                0)
        }) : e
    };
    c.offset = {
        setOffset: function(a, b, d) {
            var e = c.css(a, "position");
            "static" === e && (a.style.position = "relative");
            var f = c(a),
                h = f.offset(),
                l = c.css(a, "top"),
                m = c.css(a, "left"),
                p = {},
                g = {},
                r, k;
            ("absolute" === e || "fixed" === e) && -1 < c.inArray("auto", [l, m]) ? (g = f.position(), r = g.top, k = g.left) : (r = parseFloat(l) || 0, k = parseFloat(m) || 0);
            c.isFunction(b) && (b = b.call(a, d, h));
            null != b.top && (p.top = b.top - h.top + r);
            null != b.left && (p.left = b.left - h.left + k);
            "using" in b ? b.using.call(a, p) : f.css(p)
        }
    };
    c.fn.extend({
        position: function() {
            if (this[0]) {
                var a,
                    b, d = {
                        top: 0,
                        left: 0
                    },
                    e = this[0];
                return "fixed" === c.css(e, "position") ? b = e.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), c.nodeName(a[0], "html") || (d = a.offset()), d.top += c.css(a[0], "borderTopWidth", !0), d.left += c.css(a[0], "borderLeftWidth", !0)), {
                    top: b.top - d.top - c.css(e, "marginTop", !0),
                    left: b.left - d.left - c.css(e, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var a = this.offsetParent || ba; a && !c.nodeName(a, "html") && "static" === c.css(a, "position");) a = a.offsetParent;
                return a ||
                    ba
            })
        }
    });
    c.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(a, b) {
        var d = /Y/.test(b);
        c.fn[a] = function(e) {
            return c.access(this, function(a, e, l) {
                var f = T(a);
                return l === k ? f ? b in f ? f[b] : f.document.documentElement[e] : a[e] : (f ? f.scrollTo(d ? c(f).scrollLeft() : l, d ? l : c(f).scrollTop()) : a[e] = l, k)
            }, a, e, arguments.length, null)
        }
    });
    c.each({
        Height: "height",
        Width: "width"
    }, function(a, b) {
        c.each({
            padding: "inner" + a,
            content: b,
            "": "outer" + a
        }, function(d, e) {
            c.fn[e] = function(e, h) {
                var f = arguments.length && (d || "boolean" !=
                        typeof e),
                    m = d || (!0 === e || !0 === h ? "margin" : "border");
                return c.access(this, function(b, d, e) {
                    var f;
                    return c.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (f = b.documentElement, Math.max(b.body["scroll" + a], f["scroll" + a], b.body["offset" + a], f["offset" + a], f["client" + a])) : e === k ? c.css(b, d, m) : c.style(b, d, e, m)
                }, b, f ? e : k, f, null)
            }
        })
    });
    c.fn.size = function() {
        return this.length
    };
    c.fn.andSelf = c.fn.addBack;
    "object" == typeof module && module && "object" == typeof module.exports ? module.exports = c : (n.jQuery = n.$ =
        c, "function" == typeof define && define.amd && define("jquery", [], function() {
            return c
        }))
})(window);
window.Modernizr = function(n, k, H) {
    function ca(g, k) {
        for (var n in g) {
            var v = g[n];
            if (!~("" + v).indexOf("-") && S[v] !== H) return "pfx" == k ? v : !0
        }
        return !1
    }

    function g(g, k, n) {
        var v = g.charAt(0).toUpperCase() + g.slice(1),
            q = (g + " " + da.join(v + " ") + v).split(" ");
        if ("string" === typeof k || "undefined" === typeof k) k = ca(q, k);
        else a: {
            q = (g + " " + L.join(v + " ") + v).split(" "),
            g = q;
            for (var w in g)
                if (v = k[g[w]], v !== H) {
                    k = !1 === n ? g[w] : "function" === typeof v ? v.bind(n || k) : v;
                    break a
                }
            k = !1
        }
        return k
    }
    var q = {},
        F = k.documentElement,
        z = k.createElement("modernizr"),
        S = z.style,
        ga = " -webkit- -moz- -o- -ms- ".split(" "),
        da = ["Webkit", "Moz", "O", "ms"],
        L = ["webkit", "moz", "o", "ms"],
        z = {},
        N = [],
        V = N.slice,
        aa, ha = function(g, n, q, z) {
            var v, w, E, D = k.createElement("div"),
                t = k.body,
                J = t || k.createElement("body");
            if (parseInt(q, 10))
                for (; q--;) {
                    var P = k.createElement("div");
                    P.id = z ? z[q] : "modernizr" + (q + 1);
                    D.appendChild(P)
                }
            return v = ['&#173;<style id="smodernizr">', g, "</style>"].join(""), D.id = "modernizr", (t ? D : J).innerHTML += v, J.appendChild(D), t || (J.style.background = "", J.style.overflow = "hidden",
                E = F.style.overflow, F.style.overflow = "hidden", F.appendChild(J)), w = n(D, g), t ? D.parentNode.removeChild(D) : (J.parentNode.removeChild(J), F.style.overflow = E), !!w
        },
        ia = {}.hasOwnProperty,
        ja;
    "undefined" === typeof ia || "undefined" === typeof ia.call ? ja = function(g, k) {
        return k in g && "undefined" === typeof g.constructor.prototype[k]
    } : ja = function(g, k) {
        return ia.call(g, k)
    };
    Function.prototype.bind || (Function.prototype.bind = function(g) {
        var k = this;
        if ("function" != typeof k) throw new TypeError;
        var n = V.call(arguments, 1),
            q = function() {
                if (this instanceof q) {
                    var v = function() {};
                    v.prototype = k.prototype;
                    var v = new v,
                        w = k.apply(v, n.concat(V.call(arguments)));
                    return Object(w) === w ? w : v
                }
                return k.apply(g, n.concat(V.call(arguments)))
            };
        return q
    });
    z.touch = function() {
        var g;
        return "ontouchstart" in n || n.DocumentTouch && k instanceof DocumentTouch ? g = !0 : ha(["@media (", ga.join("touch-enabled),("), "modernizr){#modernizr{top:9px;position:absolute}}"].join(""), function(k) {
            g = 9 === k.offsetTop
        }), g
    };
    z.csstransforms3d = function() {
        var k = !!g("perspective");
        return k && "webkitPerspective" in
            F.style && ha("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}", function(g, n) {
                k = 9 === g.offsetLeft && 3 === g.offsetHeight
            }), k
    };
    z.csstransitions = function() {
        return g("transition")
    };
    for (var ma in z) ja(z, ma) && (aa = ma.toLowerCase(), q[aa] = z[ma](), N.push((q[aa] ? "" : "no-") + aa));
    q.addTest = function(g, k) {
        if ("object" == typeof g)
            for (var n in g) ja(g, n) && q.addTest(n, g[n]);
        else {
            g = g.toLowerCase();
            if (q[g] !== H) return q;
            k = "function" == typeof k ? k() : k;
            F.className += " " + (k ? "" : "no-") +
                g;
            q[g] = k
        }
        return q
    };
    S.cssText = "";
    return z = null,
        function(g, k) {
            function n() {
                var g = u.elements;
                return "string" == typeof g ? g.split(" ") : g
            }

            function q(g) {
                var k = O[g[z]];
                return k || (k = {}, B++, g[z] = B, O[B] = k), k
            }

            function v(g, n, p) {
                n || (n = k);
                if (I) return n.createElement(g);
                p || (p = q(n));
                var r;
                return p.cache[g] ? r = p.cache[g].cloneNode() : J.test(g) ? r = (p.cache[g] = p.createElem(g)).cloneNode() : r = p.createElem(g), !r.canHaveChildren || t.test(g) || r.tagUrn ? r : p.frag.appendChild(r)
            }

            function w(g, k) {
                k.cache || (k.cache = {}, k.createElem = g.createElement,
                    k.createFrag = g.createDocumentFragment, k.frag = k.createFrag());
                g.createElement = function(p) {
                    return u.shivMethods ? v(p, g, k) : k.createElem(p)
                };
                g.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + n().join().replace(/[\w\-]+/g, function(g) {
                    return k.createElem(g), k.frag.createElement(g), 'c("' + g + '")'
                }) + ");return n}")(u, k.frag)
            }

            function E(g) {
                g || (g = k);
                var n = q(g);
                if (u.shivCSS && !P && !n.hasCSS) {
                    var p = g;
                    var r = p.createElement("p");
                    p = p.getElementsByTagName("head")[0] ||
                        p.documentElement;
                    r = (r.innerHTML = "x<style>article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}</style>", p.insertBefore(r.lastChild, p.firstChild));
                    n.hasCSS = !!r
                }
                return I || w(g, n), g
            }
            var D = g.html5 || {},
                t = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
                J = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
                P, z = "_html5shiv",
                B = 0,
                O = {},
                I;
            (function() {
                try {
                    var g =
                        k.createElement("a");
                    g.innerHTML = "<xyz></xyz>";
                    P = "hidden" in g;
                    var n;
                    if (!(n = 1 == g.childNodes.length)) {
                        k.createElement("a");
                        var p = k.createDocumentFragment();
                        n = "undefined" == typeof p.cloneNode || "undefined" == typeof p.createDocumentFragment || "undefined" == typeof p.createElement
                    }
                    I = n
                } catch (r) {
                    I = P = !0
                }
            })();
            var u = {
                elements: D.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",
                version: "3.7.0",
                shivCSS: !1 !== D.shivCSS,
                supportsUnknownElements: I,
                shivMethods: !1 !== D.shivMethods,
                type: "default",
                shivDocument: E,
                createElement: v,
                createDocumentFragment: function(g, J) {
                    g || (g = k);
                    if (I) return g.createDocumentFragment();
                    J = J || q(g);
                    for (var p = J.frag.cloneNode(), r = 0, u = n(), y = u.length; r < y; r++) p.createElement(u[r]);
                    return p
                }
            };
            g.html5 = u;
            E(k)
        }(this, k), q._version = "2.7.1", q._prefixes = ga, q._domPrefixes = L, q._cssomPrefixes = da, q.testProp = function(g) {
            return ca([g])
        }, q.testAllProps = g, q.testStyles = ha, q.prefixed =
        function(k, n, q) {
            return n ? g(k, n, q) : g(k, "pfx")
        }, F.className = F.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (" js " + N.join(" ")), q
}(this, this.document);
(function(n, k, H) {
    function ca(g) {
        return "[object Function]" == aa.call(g)
    }

    function g(g) {
        return "string" == typeof g
    }

    function q() {}

    function F(g) {
        return !g || "loaded" == g || "complete" == g || "uninitialized" == g
    }

    function z() {
        var g = ha.shift();
        ia = 1;
        g ? g.t ? N(function() {
            ("c" == g.t ? t.injectCss : t.injectJs)(g.s, 0, g.a, g.x, g.e, 1)
        }, 0) : (g(), z()) : ia = 0
    }

    function S(g, n, q, B, E, I, u) {
        function G(k) {
            if (!p && F(y.readyState) && (Y.r = p = 1, !ia && z(), y.onload = y.onreadystatechange = null, k)) {
                "img" != g && N(function() {
                    v.removeChild(y)
                }, 50);
                for (var r in w[n]) w[n].hasOwnProperty(r) &&
                    w[n][r].onload()
            }
        }
        u = u || t.errorTimeout;
        var y = k.createElement(g),
            p = 0,
            r = 0,
            Y = {
                t: q,
                s: n,
                e: E,
                a: I,
                x: u
            };
        1 === w[n] && (r = 1, w[n] = []);
        "object" == g ? y.data = n : (y.src = n, y.type = g);
        y.width = y.height = "0";
        y.onerror = y.onload = y.onreadystatechange = function() {
            G.call(this, r)
        };
        ha.splice(B, 0, Y);
        "img" != g && (r || 2 === w[n] ? (v.insertBefore(y, ma ? null : V), N(G, u)) : w[n].push(y))
    }

    function ga(k, n, q, w, t) {
        return ia = 0, n = n || "j", g(k) ? S("c" == n ? ua : ta, k, n, this.i++, q, w, t) : (ha.splice(this.i++, 0, k), 1 == ha.length && z()), this
    }

    function da() {
        var g = t;
        return g.loader = {
            load: ga,
            i: 0
        }, g
    }
    var L = k.documentElement,
        N = n.setTimeout,
        V = k.getElementsByTagName("script")[0],
        aa = {}.toString,
        ha = [],
        ia = 0,
        ja = "MozAppearance" in L.style,
        ma = ja && !!k.createRange().compareNode,
        v = ma ? L : V.parentNode,
        L = n.opera && "[object Opera]" == aa.call(n.opera),
        L = !!k.attachEvent && !L,
        ta = ja ? "object" : L ? "script" : "img",
        ua = L ? "script" : ta,
        W = Array.isArray || function(g) {
            return "[object Array]" == aa.call(g)
        },
        ea = [],
        w = {},
        E = {
            timeout: function(g, k) {
                return k.length && (g.timeout = k[0]), g
            }
        },
        D;
    var t = function(k) {
        function n(g) {
            g = g.split("!");
            var k = ea.length,
                p = g.pop(),
                r = g.length,
                p = {
                    url: p,
                    origUrl: p,
                    prefixes: g
                },
                n, u;
            for (u = 0; u < r; u++) {
                var q = g[u].split("=");
                (n = E[q.shift()]) && (p = n(p, q))
            }
            for (u = 0; u < k; u++) p = ea[u](p);
            return p
        }

        function v(g, k, p, r, u) {
            var q = n(g),
                t = q.autoCallback;
            q.url.split(".").pop().split("?").shift();
            q.bypass || (k && (k = ca(k) ? k : k[g] || k[r] || k[g.split("/").pop().split("?")[0]]), q.instead ? q.instead(g, k, p, r, u) : (w[q.url] ? q.noexec = !0 : w[q.url] = 1, p.load(q.url, q.forceCSS || !q.forceJS && "css" == q.url.split(".").pop().split("?").shift() ? "c" : H, q.noexec,
                q.attrs, q.timeout), (ca(k) || ca(t)) && p.load(function() {
                da();
                k && k(q.origUrl, u, r);
                t && t(q.origUrl, u, r);
                w[q.url] = 2
            })))
        }

        function B(k, n) {
            function p(k, p) {
                if (k)
                    if (g(k)) p || (w = function() {
                        var g = [].slice.call(arguments);
                        t.apply(this, g);
                        U()
                    }), v(k, w, n, 0, r);
                    else {
                        if (Object(k) === k)
                            for (A in y = function() {
                                    var g = 0,
                                        p;
                                    for (p in k) k.hasOwnProperty(p) && g++;
                                    return g
                                }(), k) k.hasOwnProperty(A) && (!p && !--y && (ca(w) ? w = function() {
                                var g = [].slice.call(arguments);
                                t.apply(this, g);
                                U()
                            } : w[A] = function(g) {
                                return function() {
                                    var k = [].slice.call(arguments);
                                    g && g.apply(this, k);
                                    U()
                                }
                            }(t[A])), v(k[A], w, n, A, r))
                    }
                else !p && U()
            }
            var r = !!k.test,
                u = k.load || k.both,
                w = k.callback || q,
                t = w,
                U = k.complete || q,
                y, A;
            p(r ? k.yep : k.nope, !!u);
            u && p(u)
        }
        var D, I = this.yepnope.loader;
        if (g(k)) v(k, 0, I, 0);
        else if (W(k))
            for (D = 0; D < k.length; D++) {
                var u = k[D];
                g(u) ? v(u, 0, I, 0) : W(u) ? t(u) : Object(u) === u && B(u, I)
            } else Object(k) === k && B(k, I)
    };
    t.addPrefix = function(g, k) {
        E[g] = k
    };
    t.addFilter = function(g) {
        ea.push(g)
    };
    t.errorTimeout = 1E4;
    null == k.readyState && k.addEventListener && (k.readyState = "loading", k.addEventListener("DOMContentLoaded",
        D = function() {
            k.removeEventListener("DOMContentLoaded", D, 0);
            k.readyState = "complete"
        }, 0));
    n.yepnope = da();
    n.yepnope.executeStack = z;
    n.yepnope.injectJs = function(g, n, w, B, v, E) {
        var u = k.createElement("script"),
            I, y;
        B = B || t.errorTimeout;
        u.src = g;
        for (y in w) u.setAttribute(y, w[y]);
        n = E ? z : n || q;
        u.onreadystatechange = u.onload = function() {
            !I && F(u.readyState) && (I = 1, n(), u.onload = u.onreadystatechange = null)
        };
        N(function() {
            I || (I = 1, n(1))
        }, B);
        v ? u.onload() : V.parentNode.insertBefore(u, V)
    };
    n.yepnope.injectCss = function(g, n, w, t, v,
        I) {
        t = k.createElement("link");
        var u;
        n = I ? z : n || q;
        t.href = g;
        t.rel = "stylesheet";
        t.type = "text/css";
        for (u in w) t.setAttribute(u, w[u]);
        v || (V.parentNode.insertBefore(t, V), N(n, 0))
    }
})(this, document);
Modernizr.load = function() {
    yepnope.apply(window, [].slice.call(arguments, 0))
};
! function() {
    window.PR_SHOULD_USE_CONTINUATION = !0;
    (function() {
        function n(g) {
            function k(g) {
                var k = g.charCodeAt(0);
                if (92 !== k) return k;
                var p = g.charAt(1);
                return (k = G[p]) ? k : "0" <= p && "7" >= p ? parseInt(g.substring(1), 8) : "u" === p || "x" === p ? parseInt(g.substring(2), 16) : g.charCodeAt(1)
            }

            function n(g) {
                if (32 > g) return (16 > g ? "\\x0" : "\\x") + g.toString(16);
                g = String.fromCharCode(g);
                return "\\" === g || "-" === g || "]" === g || "^" === g ? "\\" + g : g
            }

            function q(g) {
                var p = g.substring(1, g.length - 1).match(/\\u[\dA-Fa-f]{4}|\\x[\dA-Fa-f]{2}|\\[0-3][0-7]{0,2}|\\[0-7]{1,2}|\\[\S\s]|[^\\]/g);
                g = [];
                var q = "^" === p[0],
                    u = ["["];
                q && u.push("^");
                for (var q = q ? 1 : 0, w = p.length; q < w; ++q) {
                    var t = p[q];
                    if (/\\[bdsw]/i.test(t)) u.push(t);
                    else {
                        t = k(t);
                        var v;
                        q + 2 < w && "-" === p[q + 1] ? (v = k(p[q + 2]), q += 2) : v = t;
                        g.push([t, v]);
                        65 > v || 122 < t || (65 > v || 90 < t || g.push([Math.max(65, t) | 32, Math.min(v, 90) | 32]), 97 > v || 122 < t || g.push([Math.max(97, t) & -33, Math.min(v, 122) & -33]))
                    }
                }
                g.sort(function(g, k) {
                    return g[0] - k[0] || k[1] - g[1]
                });
                p = [];
                w = [];
                for (q = 0; q < g.length; ++q) t = g[q], t[0] <= w[1] + 1 ? w[1] = Math.max(w[1], t[1]) : p.push(w = t);
                for (q = 0; q < p.length; ++q) t =
                    p[q], u.push(n(t[0])), t[1] > t[0] && (t[1] + 1 > t[0] && u.push("-"), u.push(n(t[1])));
                u.push("]");
                return u.join("")
            }

            function w(g) {
                for (var k, p = g.source.match(/\[(?:[^\\\]]|\\[\S\s])*]|\\u[\dA-Fa-f]{4}|\\x[\dA-Fa-f]{2}|\\\d+|\\[^\dux]|\(\?[!:=]|[()^]|[^()[\\^]+/g), u = p.length, t = [], w = 0, v = 0; w < u; ++w) k = p[w], "(" === k ? ++v : "\\" === k.charAt(0) && (k = +k.substring(1)) && (k <= v ? t[k] = -1 : p[w] = n(k));
                for (w = 1; w < t.length; ++w) - 1 === t[w] && (t[w] = ++z);
                for (v = w = 0; w < u; ++w) k = p[w], "(" === k ? (++v, t[v] || (p[w] = "(?:")) : "\\" === k.charAt(0) && (k = +k.substring(1)) &&
                    k <= v && (p[w] = "\\" + t[k]);
                for (w = 0; w < u; ++w) "^" === p[w] && "^" !== p[w + 1] && (p[w] = "");
                if (g.ignoreCase && B)
                    for (w = 0; w < u; ++w) k = p[w], g = k.charAt(0), 2 <= k.length && "[" === g ? p[w] = q(k) : "\\" !== g && (p[w] = k.replace(/[A-Za-z]/g, function(g) {
                        g = g.charCodeAt(0);
                        return "[" + String.fromCharCode(g & -33, g | 32) + "]"
                    }));
                return p.join("")
            }
            for (var v, z = 0, B = !1, O = !1, I = 0, u = g.length; I < u; ++I)
                if (v = g[I], v.ignoreCase) O = !0;
                else if (/[a-z]/i.test(v.source.replace(/\\u[\da-f]{4}|\\x[\da-f]{2}|\\[^UXux]/gi, ""))) {
                B = !0;
                O = !1;
                break
            }
            for (var G = {
                    b: 8,
                    t: 9,
                    n: 10,
                    v: 11,
                    f: 12,
                    r: 13
                }, y = [], I = 0, u = g.length; I < u; ++I) {
                v = g[I];
                if (v.global || v.multiline) throw Error("" + v);
                y.push("(?:" + w(v) + ")")
            }
            return RegExp(y.join("|"), O ? "gi" : "g")
        }

        function k(g, k) {
            function n(g) {
                var t = g.nodeType;
                if (1 == t) {
                    if (!q.test(g.className)) {
                        for (t = g.firstChild; t; t = t.nextSibling) n(t);
                        t = g.nodeName.toLowerCase();
                        if ("br" === t || "li" === t) w[B] = "\n", E[B << 1] = v++, E[B++ << 1 | 1] = g
                    }
                } else if (3 == t || 4 == t) t = g.nodeValue, t.length && (t = k ? t.replace(/\r\n?/g, "\n") : t.replace(/[\t\n\r ]+/g, " "), w[B] = t, E[B << 1] = v, v += t.length, E[B++ << 1 | 1] =
                    g)
            }
            var q = /(?:^|\s)nocode(?:\s|$)/,
                w = [],
                v = 0,
                E = [],
                B = 0;
            n(g);
            return {
                a: w.join("").replace(/\n$/, ""),
                d: E
            }
        }

        function H(g, k, n, t) {
            k && (g = {
                a: k,
                e: g
            }, n(g), t.push.apply(t, g.g))
        }

        function ca(g) {
            var k = void 0;
            for (var n = g.firstChild; n; n = n.nextSibling) {
                var t = n.nodeType;
                k = 1 === t ? k ? g : n : 3 === t ? ta.test(n.nodeValue) ? g : k : k
            }
            return k === g ? void 0 : k
        }

        function g(g, k) {
            function q(g) {
                for (var n, E = g.e, I = [E, "pln"], u = 0, G = g.a.match(w) || [], y = {}, p = 0, r = G.length; p < r; ++p) {
                    var z = G[p],
                        D = y[z],
                        J = void 0;
                    if ("string" === typeof D) var F = !1;
                    else {
                        if (n = t[z.charAt(0)]) J =
                            z.match(n[1]), D = n[0];
                        else {
                            for (F = 0; F < v; ++F)
                                if (n = k[F], J = z.match(n[1])) {
                                    D = n[0];
                                    break
                                }
                            J || (D = "pln")
                        }!(F = 5 <= D.length && "lang-" === D.substring(0, 5)) || J && "string" === typeof J[1] || (F = !1, D = "src");
                        F || (y[z] = D)
                    }
                    n = u;
                    u += z.length;
                    if (F) {
                        F = J[1];
                        var Q = z.indexOf(F),
                            A = Q + F.length;
                        J[2] && (A = z.length - J[2].length, Q = A - F.length);
                        D = D.substring(5);
                        H(E + n, z.substring(0, Q), q, I);
                        H(E + n + Q, F, S(D, F), I);
                        H(E + n + A, z.substring(A), q, I)
                    } else I.push(E + n, D)
                }
                g.g = I
            }
            var t = {},
                w;
            (function() {
                for (var q = g.concat(k), v = [], E = {}, D = 0, u = q.length; D < u; ++D) {
                    var z =
                        q[D],
                        y = z[3];
                    if (y)
                        for (var p = y.length; 0 <= --p;) t[y.charAt(p)] = z;
                    z = z[1];
                    y = "" + z;
                    E.hasOwnProperty(y) || (v.push(z), E[y] = null)
                }
                v.push(/[\S\s]/);
                w = n(v)
            })();
            var v = k.length;
            return q
        }

        function q(k) {
            var n = [],
                q = [];
            k.tripleQuotedStrings ? n.push(["str", /^(?:'''(?:[^'\\]|\\[\S\s]|''?(?=[^']))*(?:'''|$)|"""(?:[^"\\]|\\[\S\s]|""?(?=[^"]))*(?:"""|$)|'(?:[^'\\]|\\[\S\s])*(?:'|$)|"(?:[^"\\]|\\[\S\s])*(?:"|$))/, null, "'\""]) : k.multiLineStrings ? n.push(["str", /^(?:'(?:[^'\\]|\\[\S\s])*(?:'|$)|"(?:[^"\\]|\\[\S\s])*(?:"|$)|`(?:[^\\`]|\\[\S\s])*(?:`|$))/,
                null, "'\"`"
            ]) : n.push(["str", /^(?:'(?:[^\n\r'\\]|\\.)*(?:'|$)|"(?:[^\n\r"\\]|\\.)*(?:"|$))/, null, "\"'"]);
            k.verbatimStrings && q.push(["str", /^@"(?:[^"]|"")*(?:"|$)/, null]);
            var t = k.hashComments;
            t && (k.cStyleComments ? (1 < t ? n.push(["com", /^#(?:##(?:[^#]|#(?!##))*(?:###|$)|.*)/, null, "#"]) : n.push(["com", /^#(?:(?:define|e(?:l|nd)if|else|error|ifn?def|include|line|pragma|undef|warning)\b|[^\n\r]*)/, null, "#"]), q.push(["str", /^<(?:(?:(?:\.\.\/)*|\/?)(?:[\w-]+(?:\/[\w-]+)+)?[\w-]+\.h(?:h|pp|\+\+)?|[a-z]\w*)>/, null])) :
                n.push(["com", /^#[^\n\r]*/, null, "#"]));
            k.cStyleComments && (q.push(["com", /^\/\/[^\n\r]*/, null]), q.push(["com", /^\/\*[\S\s]*?(?:\*\/|$)/, null]));
            if (t = k.regexLiterals) {
                var w = (t = 1 < t ? "" : "\n\r") ? "." : "[\\S\\s]";
                q.push(["lang-regex", RegExp("^(?:^^\\.?|[+-]|[!=]=?=?|\\#|%=?|&&?=?|\\(|\\*=?|[+\\-]=|->|\\/=?|::?|<<?=?|>>?>?=?|,|;|\\?|@|\\[|~|{|\\^\\^?=?|\\|\\|?=?|break|case|continue|delete|do|else|finally|instanceof|return|throw|try|typeof)\\s*(" + ("/(?=[^/*" + t + "])(?:[^/\\x5B\\x5C" + t + "]|\\x5C" + w + "|\\x5B(?:[^\\x5C\\x5D" +
                    t + "]|\\x5C" + w + ")*(?:\\x5D|$))+/") + ")")])
            }(t = k.types) && q.push(["typ", t]);
            t = ("" + k.keywords).replace(/^ | $/g, "");
            t.length && q.push(["kwd", RegExp("^(?:" + t.replace(/[\s,]+/g, "|") + ")\\b"), null]);
            n.push(["pln", /^\s+/, null, " \r\n\t\u00a0"]);
            t = "^.[^\\s\\w.$@'\"`/\\\\]*";
            k.regexLiterals && (t += "(?!s*/)");
            q.push(["lit", /^@[$_a-z][\w$@]*/i, null], ["typ", /^(?:[@_]?[A-Z]+[a-z][\w$@]*|\w+_t\b)/, null], ["pln", /^[$_a-z][\w$@]*/i, null], ["lit", /^(?:0x[\da-f]+|(?:\d(?:_\d+)*\d*(?:\.\d*)?|\.\d\+)(?:e[+-]?\d+)?)[a-z]*/i, null,
                "0123456789"
            ], ["pln", /^\\[\S\s]?/, null], ["pun", RegExp(t), null]);
            return g(n, q)
        }

        function F(g, k, n) {
            function q(g) {
                var k = g.nodeType;
                if (1 == k && !v.test(g.className))
                    if ("br" === g.nodeName) w(g), g.parentNode && g.parentNode.removeChild(g);
                    else
                        for (g = g.firstChild; g; g = g.nextSibling) q(g);
                else if ((3 == k || 4 == k) && n) {
                    var p = g.nodeValue,
                        t = p.match(z);
                    t && (k = p.substring(0, t.index), g.nodeValue = k, (p = p.substring(t.index + t[0].length)) && g.parentNode.insertBefore(B.createTextNode(p), g.nextSibling), w(g), k || g.parentNode.removeChild(g))
                }
            }

            function w(g) {
                function k(g, n) {
                    var p, q = n ? g.cloneNode(!1) : g;
                    if (p = g.parentNode) {
                        p = k(p, 1);
                        var r = g.nextSibling;
                        p.appendChild(q);
                        for (var t = r; t; t = r) r = t.nextSibling, p.appendChild(t)
                    }
                    return q
                }
                for (; !g.nextSibling;)
                    if (g = g.parentNode, !g) return;
                g = k(g.nextSibling, 0);
                for (var n;
                    (n = g.parentNode) && 1 === n.nodeType;) g = n;
                E.push(g)
            }
            for (var v = /(?:^|\s)nocode(?:\s|$)/, z = /\r\n?|\n/, B = g.ownerDocument, F = B.createElement("li"); g.firstChild;) F.appendChild(g.firstChild);
            for (var E = [F], u = 0; u < E.length; ++u) q(E[u]);
            k === (k | 0) && E[0].setAttribute("value",
                k);
            var D = B.createElement("ol");
            D.className = "linenums";
            k = Math.max(0, k - 1 | 0) || 0;
            for (var u = 0, y = E.length; u < y; ++u) F = E[u], F.className = "L" + (u + k) % 10, F.firstChild || F.appendChild(B.createTextNode("\u00a0")), D.appendChild(F);
            g.appendChild(D)
        }

        function z(g, k) {
            for (var n = k.length; 0 <= --n;) {
                var q = k[n];
                W.hasOwnProperty(q) ? da.console && console.warn("cannot override language handler %s", q) : W[q] = g
            }
        }

        function S(g, k) {
            g && W.hasOwnProperty(g) || (g = /^\s*</.test(k) ? "default-markup" : "default-code");
            return W[g]
        }

        function ga(g) {
            var n;
            var q = g.h;
            try {
                var t = k(g.c, g.i),
                    v = t.a;
                g.a = v;
                g.d = t.d;
                g.e = 0;
                S(q, v)(g);
                var w = /\bMSIE\s(\d+)/.exec(navigator.userAgent),
                    w = w && 8 >= +w[1];
                q = /\n/g;
                var z = g.a,
                    F = z.length,
                    t = 0,
                    H = g.d,
                    I = H.length,
                    v = 0,
                    u = g.g,
                    G = u.length,
                    y = 0;
                u[G] = F;
                var p, r;
                for (r = p = 0; r < G;) u[r] !== u[r + 2] ? (u[p++] = u[r++], u[p++] = u[r++]) : r += 2;
                G = p;
                for (r = p = 0; r < G;) {
                    var ca = u[r],
                        T = u[r + 1];
                    for (n = r + 2; n + 2 <= G && u[n + 1] === T;) n += 2;
                    u[p++] = ca;
                    u[p++] = T;
                    r = n
                }
                u.length = p;
                var L = g.c;
                if (L) {
                    var U = L.style.display;
                    L.style.display = "none"
                }
                try {
                    for (; v < I;) {
                        var Q = H[v + 2] || F,
                            A = u[y + 2] || F;
                        n = Math.min(Q,
                            A);
                        var ba = H[v + 1],
                            N;
                        if (1 !== ba.nodeType && (N = z.substring(t, n))) {
                            w && (N = N.replace(q, "\r"));
                            ba.nodeValue = N;
                            var V = ba.ownerDocument,
                                W = V.createElement("span");
                            W.className = u[y + 1];
                            var na = ba.parentNode;
                            na.replaceChild(W, ba);
                            W.appendChild(ba);
                            t < Q && (H[v + 1] = ba = V.createTextNode(z.substring(n, Q)), na.insertBefore(ba, W.nextSibling))
                        }
                        t = n;
                        t >= Q && (v += 2);
                        t >= A && (y += 2)
                    }
                } finally {
                    L && (L.style.display = U)
                }
            } catch (wa) {
                da.console && console.log(wa && wa.stack || wa)
            }
        }
        var da = window,
            L = ["break,continue,do,else,for,if,return,while"],
            N = [
                [L,
                    "auto,case,char,const,default,double,enum,extern,float,goto,inline,int,long,register,short,signed,sizeof,static,struct,switch,typedef,union,unsigned,void,volatile"
                ], "catch,class,delete,false,import,new,operator,private,protected,public,this,throw,true,try,typeof"
            ],
            V = [N, "alignof,align_union,asm,axiom,bool,concept,concept_map,const_cast,constexpr,decltype,delegate,dynamic_cast,explicit,export,friend,generic,late_check,mutable,namespace,nullptr,property,reinterpret_cast,static_assert,static_cast,template,typeid,typename,using,virtual,where"],
            aa = [N, "abstract,assert,boolean,byte,extends,final,finally,implements,import,instanceof,interface,null,native,package,strictfp,super,synchronized,throws,transient"],
            ha = [aa, "as,base,by,checked,decimal,delegate,descending,dynamic,event,fixed,foreach,from,group,implicit,in,internal,into,is,let,lock,object,out,override,orderby,params,partial,readonly,ref,sbyte,sealed,stackalloc,string,select,uint,ulong,unchecked,unsafe,ushort,var,virtual,where"],
            N = [N, "debugger,eval,export,function,get,null,set,undefined,var,with,Infinity,NaN"],
            ia = [L, "and,as,assert,class,def,del,elif,except,exec,finally,from,global,import,in,is,lambda,nonlocal,not,or,pass,print,raise,try,with,yield,False,True,None"],
            ja = [L, "alias,and,begin,case,class,def,defined,elsif,end,ensure,false,in,module,next,nil,not,or,redo,rescue,retry,self,super,then,true,undef,unless,until,when,yield,BEGIN,END"],
            ma = [L, "as,assert,const,copy,drop,enum,extern,fail,false,fn,impl,let,log,loop,match,mod,move,mut,priv,pub,pure,ref,self,static,struct,true,trait,type,unsafe,use"],
            L = [L,
                "case,done,elif,esac,eval,fi,function,in,local,set,then,until"
            ],
            v = /^(DIR|FILE|vector|(de|priority_)?queue|list|stack|(const_)?iterator|(multi)?(set|map)|bitset|u?(int|float)\d*)\b/,
            ta = /\S/,
            ua = q({
                keywords: [V, ha, N, "caller,delete,die,do,dump,elsif,eval,exit,foreach,for,goto,if,import,last,local,my,next,no,our,print,package,redo,require,sub,undef,unless,until,use,wantarray,while,BEGIN,END", ia, ja, L],
                hashComments: !0,
                cStyleComments: !0,
                multiLineStrings: !0,
                regexLiterals: !0
            }),
            W = {};
        z(ua, ["default-code"]);
        z(g([], [
            ["pln", /^[^<?]+/],
            ["dec", /^<!\w[^>]*(?:>|$)/],
            ["com", /^<\!--[\S\s]*?(?:--\>|$)/],
            ["lang-", /^<\?([\S\s]+?)(?:\?>|$)/],
            ["lang-", /^<%([\S\s]+?)(?:%>|$)/],
            ["pun", /^(?:<[%?]|[%?]>)/],
            ["lang-", /^<xmp\b[^>]*>([\S\s]+?)<\/xmp\b[^>]*>/i],
            ["lang-js", /^<script\b[^>]*>([\S\s]*?)(<\/script\b[^>]*>)/i],
            ["lang-css", /^<style\b[^>]*>([\S\s]*?)(<\/style\b[^>]*>)/i],
            ["lang-in.tag", /^(<\/?[a-z][^<>]*>)/i]
        ]), "default-markup htm html mxml xhtml xml xsl".split(" "));
        z(g([
            ["pln", /^\s+/, null, " \t\r\n"],
            ["atv", /^(?:"[^"]*"?|'[^']*'?)/,
                null, "\"'"
            ]
        ], [
            ["tag", /^^<\/?[a-z](?:[\w-.:]*\w)?|\/?>$/i],
            ["atn", /^(?!style[\s=]|on)[a-z](?:[\w:-]*\w)?/i],
            ["lang-uq.val", /^=\s*([^\s"'>]*(?:[^\s"'/>]|\/(?=\s)))/],
            ["pun", /^[/<->]+/],
            ["lang-js", /^on\w+\s*=\s*"([^"]+)"/i],
            ["lang-js", /^on\w+\s*=\s*'([^']+)'/i],
            ["lang-js", /^on\w+\s*=\s*([^\s"'>]+)/i],
            ["lang-css", /^style\s*=\s*"([^"]+)"/i],
            ["lang-css", /^style\s*=\s*'([^']+)'/i],
            ["lang-css", /^style\s*=\s*([^\s"'>]+)/i]
        ]), ["in.tag"]);
        z(g([], [
            ["atv", /^[\S\s]+/]
        ]), ["uq.val"]);
        z(q({
            keywords: V,
            hashComments: !0,
            cStyleComments: !0,
            types: v
        }), "c cc cpp cxx cyc m".split(" "));
        z(q({
            keywords: "null,true,false"
        }), ["json"]);
        z(q({
            keywords: ha,
            hashComments: !0,
            cStyleComments: !0,
            verbatimStrings: !0,
            types: v
        }), ["cs"]);
        z(q({
            keywords: aa,
            cStyleComments: !0
        }), ["java"]);
        z(q({
            keywords: L,
            hashComments: !0,
            multiLineStrings: !0
        }), ["bash", "bsh", "csh", "sh"]);
        z(q({
            keywords: ia,
            hashComments: !0,
            multiLineStrings: !0,
            tripleQuotedStrings: !0
        }), ["cv", "py", "python"]);
        z(q({
            keywords: "caller,delete,die,do,dump,elsif,eval,exit,foreach,for,goto,if,import,last,local,my,next,no,our,print,package,redo,require,sub,undef,unless,until,use,wantarray,while,BEGIN,END",
            hashComments: !0,
            multiLineStrings: !0,
            regexLiterals: 2
        }), ["perl", "pl", "pm"]);
        z(q({
            keywords: ja,
            hashComments: !0,
            multiLineStrings: !0,
            regexLiterals: !0
        }), ["rb", "ruby"]);
        z(q({
            keywords: N,
            cStyleComments: !0,
            regexLiterals: !0
        }), ["javascript", "js"]);
        z(q({
            keywords: "all,and,by,catch,class,else,extends,false,finally,for,if,in,is,isnt,loop,new,no,not,null,of,off,on,or,return,super,then,throw,true,try,unless,until,when,while,yes",
            hashComments: 3,
            cStyleComments: !0,
            multilineStrings: !0,
            tripleQuotedStrings: !0,
            regexLiterals: !0
        }), ["coffee"]);
        z(q({
            keywords: ma,
            cStyleComments: !0,
            multilineStrings: !0
        }), ["rc", "rs", "rust"]);
        z(g([], [
            ["str", /^[\S\s]+/]
        ]), ["regex"]);
        var ea = da.PR = {
            createSimpleLexer: g,
            registerLangHandler: z,
            sourceDecorator: q,
            PR_ATTRIB_NAME: "atn",
            PR_ATTRIB_VALUE: "atv",
            PR_COMMENT: "com",
            PR_DECLARATION: "dec",
            PR_KEYWORD: "kwd",
            PR_LITERAL: "lit",
            PR_NOCODE: "nocode",
            PR_PLAIN: "pln",
            PR_PUNCTUATION: "pun",
            PR_SOURCE: "src",
            PR_STRING: "str",
            PR_TAG: "tag",
            PR_TYPE: "typ",
            prettyPrintOne: da.prettyPrintOne = function(g, k, n) {
                var q = document.createElement("div");
                q.innerHTML = "<pre>" + g + "</pre>";
                q = q.firstChild;
                n && F(q, n, !0);
                ga({
                    h: k,
                    j: n,
                    c: q,
                    i: 1
                });
                return q.innerHTML
            },
            prettyPrint: da.prettyPrint = function(g, k) {
                function n() {
                    for (var k, q, t, z = da.PR_SHOULD_USE_CONTINUATION ? I.now() + 250 : Infinity; u < w.length && I.now() < z; u++) {
                        for (var B = w[u], E = N, D = B; D = D.previousSibling;) {
                            t = D.nodeType;
                            if ((k = (7 === t || 8 === t) && D.nodeValue) ? !/^\??prettify\b/.test(k) : 3 !== t || /\S/.test(D.nodeValue)) break;
                            if (k) {
                                E = {};
                                k.replace(/\b(\w+)=([\w%+\-.:]+)/g, function(g, k, n) {
                                    E[k] = n
                                });
                                break
                            }
                        }
                        D = B.className;
                        if ((E !==
                                N || p.test(D)) && !r.test(D)) {
                            t = !1;
                            for (k = B.parentNode; k; k = k.parentNode)
                                if (S.test(k.tagName) && k.className && p.test(k.className)) {
                                    t = !0;
                                    break
                                }
                            if (!t) {
                                B.className += " prettyprinted";
                                t = E.lang;
                                if (!t) {
                                    t = D.match(y);
                                    var J;
                                    !t && (J = ca(B)) && L.test(J.tagName) && (t = J.className.match(y));
                                    t && (t = t[1])
                                }
                                H.test(B.tagName) ? k = 1 : (k = B.currentStyle, q = v.defaultView, k = (k = k ? k.whiteSpace : q && q.getComputedStyle ? q.getComputedStyle(B, null).getPropertyValue("white-space") : 0) && "pre" === k.substring(0, 3));
                                q = E.linenums;
                                (q = "true" === q || +q) || (q =
                                    (q = D.match(/\blinenums\b(?::(\d+))?/)) ? q[1] && q[1].length ? +q[1] : !0 : !1);
                                q && F(B, q, k);
                                G = {
                                    h: t,
                                    c: B,
                                    j: q,
                                    i: k
                                };
                                ga(G)
                            }
                        }
                    }
                    u < w.length ? setTimeout(n, 250) : "function" === typeof g && g()
                }
                for (var q = k || document.body, v = q.ownerDocument || document, q = [q.getElementsByTagName("pre"), q.getElementsByTagName("code"), q.getElementsByTagName("xmp")], w = [], z = 0; z < q.length; ++z)
                    for (var B = 0, E = q[z].length; B < E; ++B) w.push(q[z][B]);
                var q = null,
                    I = Date;
                I.now || (I = {
                    now: function() {
                        return +new Date
                    }
                });
                var u = 0,
                    G, y = /\blang(?:uage)?-([\w.]+)(?!\S)/,
                    p = /\bprettyprint\b/,
                    r = /\bprettyprinted\b/,
                    H = /pre|xmp/i,
                    L = /^code$/i,
                    S = /^(?:pre|code|xmp)$/i,
                    N = {};
                n()
            }
        };
        "function" === typeof define && define.amd && define("google-code-prettify", [], function() {
            return ea
        })
    })()
}();
(function(n) {
    n.fn.autoComplete = function(k) {
        var H = n.extend({}, n.fn.autoComplete.defaults, k);
        return "string" == typeof k ? (this.each(function() {
            var H = n(this);
            "destroy" == k && (n(window).off("resize.autocomplete", H.updateSC), H.off("blur.autocomplete focus.autocomplete keydown.autocomplete keyup.autocomplete"), H.data("autocomplete") ? H.attr("autocomplete", H.data("autocomplete")) : H.removeAttr("autocomplete"), n(H.data("sc")).remove(), H.removeData("sc").removeData("autocomplete"))
        }), this) : this.each(function() {
            function k(k) {
                var n =
                    g.val();
                g.cache[n] = k;
                if (k.length && n.length >= H.minChars) {
                    for (var q = "", S = 0; S < k.length; S++) q += H.renderItem(k[S], n);
                    g.sc.html(q);
                    g.updateSC(0)
                } else g.sc.hide()
            }
            var g = n(this);
            g.sc = n('<div class="autocomplete-suggestions ' + H.menuClass + '"></div>');
            g.data("sc", g.sc).data("autocomplete", g.attr("autocomplete"));
            g.attr("autocomplete", "off");
            g.cache = {};
            g.last_val = "";
            g.updateSC = function(k, F) {
                g.sc.css({
                    top: g.offset().top + g.outerHeight(),
                    left: g.offset().left,
                    width: g.outerWidth()
                });
                if (!k && (g.sc.show(), g.sc.maxHeight ||
                        (g.sc.maxHeight = parseInt(g.sc.css("max-height"))), g.sc.suggestionHeight || (g.sc.suggestionHeight = n(".autocomplete-suggestion", g.sc).first().outerHeight()), g.sc.suggestionHeight))
                    if (F) {
                        var q = g.sc.scrollTop(),
                            H = F.offset().top - g.sc.offset().top;
                        0 < H + g.sc.suggestionHeight - g.sc.maxHeight ? g.sc.scrollTop(H + g.sc.suggestionHeight + q - g.sc.maxHeight) : 0 > H && g.sc.scrollTop(H + q)
                    } else g.sc.scrollTop(0)
            };
            n(window).on("resize.autocomplete", g.updateSC);
            g.sc.appendTo("body");
            g.sc.on("mouseleave", ".autocomplete-suggestion",
                function() {
                    n(".autocomplete-suggestion.selected").removeClass("selected")
                });
            g.sc.on("mouseenter", ".autocomplete-suggestion", function() {
                n(".autocomplete-suggestion.selected").removeClass("selected");
                n(this).addClass("selected")
            });
            g.sc.on("mouseup", ".autocomplete-suggestion", function(k) {
                var q = n(this),
                    z = q.data("val");
                if (z || q.hasClass("autocomplete-suggestion")) g.val(z), H.onSelect(k, z, q), g.focus().sc.hide()
            });
            g.on("blur.autocomplete", function() {
                try {
                    over_sb = n(".autocomplete-suggestions:hover").length
                } catch (q) {
                    over_sb =
                        0
                }
                over_sb ? g.focus() : (g.last_val = g.val(), g.sc.hide())
            });
            if (!H.minChars) g.on("focus.autocomplete", function() {
                g.last_val = "\n";
                g.trigger("keyup.autocomplete")
            });
            g.on("keydown.autocomplete", function(k) {
                if ((40 == k.which || 38 == k.which) && g.sc.html()) {
                    var q = n(".autocomplete-suggestion.selected", g.sc);
                    q.length ? (k = 40 == k.which ? q.next(".autocomplete-suggestion") : q.prev(".autocomplete-suggestion"), k.length ? (q.removeClass("selected"), g.val(k.addClass("selected").data("val"))) : (q.removeClass("selected"), g.val(g.last_val),
                        k = 0)) : (k = 40 == k.which ? n(".autocomplete-suggestion", g.sc).first() : n(".autocomplete-suggestion", g.sc).last(), g.val(k.addClass("selected").data("val")));
                    g.updateSC(0, k);
                    return !1
                }
                if (27 == k.which) g.val(g.last_val).sc.hide();
                else if (13 == k.which || 10 == k.which) q = n(".autocomplete-suggestion.selected", g.sc), q.length && (H.onSelect(k, q.data("val"), q), setTimeout(function() {
                    g.focus().sc.hide()
                }, 10))
            });
            g.on("keyup.autocomplete", function(q) {
                if (!~n.inArray(q.which, [27, 38, 40, 37, 39])) {
                    var F = g.val();
                    if (F.length >= H.minChars) {
                        if (F !=
                            g.last_val) {
                            g.last_val = F;
                            clearTimeout(g.timer);
                            if (H.cache) {
                                if (F in g.cache) {
                                    k(g.cache[F]);
                                    return
                                }
                                for (q = 1; q < F.length - H.minChars; q++) {
                                    var z = F.slice(0, F.length - q);
                                    if (z in g.cache && !g.cache[z].length) {
                                        k([]);
                                        return
                                    }
                                }
                            }
                            g.timer = setTimeout(function() {
                                H.source(F, k)
                            }, H.delay)
                        }
                    } else g.last_val = F, g.sc.hide()
                }
            })
        })
    };
    n.fn.autoComplete.defaults = {
        source: 0,
        minChars: 3,
        delay: 150,
        cache: 1,
        menuClass: "",
        renderItem: function(k, n) {
            var H = new RegExp("(" + n.split(" ").join("|") + ")", "gi"),
                g = k.split("_"),
                q = "video-media";
            "T" === g[0] &&
                (q = "text-media");
            return '<div class="autocomplete-suggestion ' + q + '" data-val="' + g[1] + '">' + g[1].replace(H, "<b>$1</b>") + "</div>"
        },
        onSelect: function(k, n, ca) {}
    }
})(jQuery);
$(document).ready(function() {
    $('input[name="q"]').autoComplete({
        minChars: 2,
        cache: 0,
        source: function(n, k) {
            n = n.toLowerCase();
            try {
                H.abort()
            } catch (ca) {}
            var H = $.getJSON("/keywords.htm?q=" + n, function(n) {
                k(n)
            })
        },
        onSelect: function(n, k, H) {
            $.get("getURL.php", {
                q: k
            }, function(k) {
                location.href = "https://www.tutorialspoint.com/" + k
            })
        }
    })
});