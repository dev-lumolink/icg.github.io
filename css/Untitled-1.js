function filter_button() {
    var t = !1;
    $(".catalog-filter input[type=checkbox]").each(function () {
        !0 === $(this).prop("checked") && (t = !0)
    }), t ? $(".show-button-cont").fadeIn(200) : $(".show-button-cont").fadeOut(200)
}

function complete_url() {
    var t = "",
        e = "",
        n = 0,
        i = "",
        r = !1,
        o = brand_url;
    show_button_brands_okay && ($(".filter-brand input[type=checkbox]").each(function () {
        $(this).prop("checked") && 0 < parseInt($(this).val()) ? (e.length ? e += "_" + $(this).val() : e = "" + $(this).val(), n++) : r = !0
    }), e = 0 < n && r ? (console.log("i hope im here"), "collections=" + e) : "", r = !1, $(".filter-category input[type=checkbox]").each(function () {
        $(this).prop("checked") ? i.length ? i += "_" + $(this).val() : i = "" + $(this).val() : r = !0
    }), (i = i.length && r ? "categories=" + i : "").length && 0 < n ? t = "?" + e + "&" + i : (console.log("and here"), 0 < n && (t = "?" + e), i.length && (t = "?" + i)), 1 == n && 0 < $(".filter-category").length && (t = "", $(".filter-brand .filter-item").each(function () {
        $(this).find("input[type=checkbox]").prop("checked") && 0 < parseInt($(this).find("input[type=checkbox]").val()) && (o = $(this).find("a.filter-item__title").attr("href"))
    }), i.length && (t = "?" + i)), window.location.href = o + t)
}! function (t, e) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function (t) {
        if (!t.document) throw new Error("jQuery requires a window with a document");
        return e(t)
    } : e(t)
}("undefined" != typeof window ? window : this, function (k, t) {
    "use strict";
    var e = [],
        C = k.document,
        i = Object.getPrototypeOf,
        a = e.slice,
        g = e.concat,
        l = e.push,
        r = e.indexOf,
        n = {},
        o = n.toString,
        m = n.hasOwnProperty,
        s = m.toString,
        u = s.call(Object),
        v = {},
        y = function (t) {
            return "function" == typeof t && "number" != typeof t.nodeType
        },
        b = function (t) {
            return null != t && t === t.window
        },
        c = {
            type: !0,
            src: !0,
            noModule: !0
        };

    function x(t, e, n) {
        var i, r = (e = e || C).createElement("script");
        if (r.text = t, n)
            for (i in c) n[i] && (r[i] = n[i]);
        e.head.appendChild(r).parentNode.removeChild(r)
    }

    function w(t) {
        return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? n[o.call(t)] || "object" : typeof t
    }
    var T = function (t, e) {
            return new T.fn.init(t, e)
        },
        h = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

    function d(t) {
        var e = !!t && "length" in t && t.length,
            n = w(t);
        return !y(t) && !b(t) && ("array" === n || 0 === e || "number" == typeof e && 0 < e && e - 1 in t)
    }
    T.fn = T.prototype = {
        jquery: "3.3.1",
        constructor: T,
        length: 0,
        toArray: function () {
            return a.call(this)
        },
        get: function (t) {
            return null == t ? a.call(this) : t < 0 ? this[t + this.length] : this[t]
        },
        pushStack: function (t) {
            var e = T.merge(this.constructor(), t);
            return e.prevObject = this, e
        },
        each: function (t) {
            return T.each(this, t)
        },
        map: function (n) {
            return this.pushStack(T.map(this, function (t, e) {
                return n.call(t, e, t)
            }))
        },
        slice: function () {
            return this.pushStack(a.apply(this, arguments))
        },
        first: function () {
            return this.eq(0)
        },
        last: function () {
            return this.eq(-1)
        },
        eq: function (t) {
            var e = this.length,
                n = +t + (t < 0 ? e : 0);
            return this.pushStack(0 <= n && n < e ? [this[n]] : [])
        },
        end: function () {
            return this.prevObject || this.constructor()
        },
        push: l,
        sort: e.sort,
        splice: e.splice
    }, T.extend = T.fn.extend = function () {
        var t, e, n, i, r, o, s = arguments[0] || {},
            a = 1,
            l = arguments.length,
            u = !1;
        for ("boolean" == typeof s && (u = s, s = arguments[a] || {}, a++), "object" == typeof s || y(s) || (s = {}), a === l && (s = this, a--); a < l; a++)
            if (null != (t = arguments[a]))
                for (e in t) n = s[e], s !== (i = t[e]) && (u && i && (T.isPlainObject(i) || (r = Array.isArray(i))) ? (o = r ? (r = !1, n && Array.isArray(n) ? n : []) : n && T.isPlainObject(n) ? n : {}, s[e] = T.extend(u, o, i)) : void 0 !== i && (s[e] = i));
        return s
    }, T.extend({
        expando: "jQuery" + ("3.3.1" + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function (t) {
            throw new Error(t)
        },
        noop: function () {},
        isPlainObject: function (t) {
            var e, n;
            return !(!t || "[object Object]" !== o.call(t) || (e = i(t)) && ("function" != typeof (n = m.call(e, "constructor") && e.constructor) || s.call(n) !== u))
        },
        isEmptyObject: function (t) {
            var e;
            for (e in t) return !1;
            return !0
        },
        globalEval: function (t) {
            x(t)
        },
        each: function (t, e) {
            var n, i = 0;
            if (d(t))
                for (n = t.length; i < n && !1 !== e.call(t[i], i, t[i]); i++);
            else
                for (i in t)
                    if (!1 === e.call(t[i], i, t[i])) break;
            return t
        },
        trim: function (t) {
            return null == t ? "" : (t + "").replace(h, "")
        },
        makeArray: function (t, e) {
            var n = e || [];
            return null != t && (d(Object(t)) ? T.merge(n, "string" == typeof t ? [t] : t) : l.call(n, t)), n
        },
        inArray: function (t, e, n) {
            return null == e ? -1 : r.call(e, t, n)
        },
        merge: function (t, e) {
            for (var n = +e.length, i = 0, r = t.length; i < n; i++) t[r++] = e[i];
            return t.length = r, t
        },
        grep: function (t, e, n) {
            for (var i = [], r = 0, o = t.length, s = !n; r < o; r++) !e(t[r], r) !== s && i.push(t[r]);
            return i
        },
        map: function (t, e, n) {
            var i, r, o = 0,
                s = [];
            if (d(t))
                for (i = t.length; o < i; o++) null != (r = e(t[o], o, n)) && s.push(r);
            else
                for (o in t) null != (r = e(t[o], o, n)) && s.push(r);
            return g.apply([], s)
        },
        guid: 1,
        support: v
    }), "function" == typeof Symbol && (T.fn[Symbol.iterator] = e[Symbol.iterator]), T.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (t, e) {
        n["[object " + e + "]"] = e.toLowerCase()
    });
    var p = function (n) {
        var t, p, x, o, r, f, h, g, w, l, u, _, k, s, C, m, a, c, v, T = "sizzle" + 1 * new Date,
            y = n.document,
            $ = 0,
            i = 0,
            d = st(),
            b = st(),
            E = st(),
            D = function (t, e) {
                return t === e && (u = !0), 0
            },
            A = {}.hasOwnProperty,
            e = [],
            S = e.pop,
            I = e.push,
            j = e.push,
            N = e.slice,
            P = function (t, e) {
                for (var n = 0, i = t.length; n < i; n++)
                    if (t[n] === e) return n;
                return -1
            },
            O = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            L = "[\\x20\\t\\r\\n\\f]",
            M = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
            z = "\\[" + L + "*(" + M + ")(?:" + L + "*([*^$|!~]?=)" + L + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + M + "))|)" + L + "*\\]",
            H = ":(" + M + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + z + ")*)|.*)\\)|)",
            q = new RegExp(L + "+", "g"),
            R = new RegExp("^" + L + "+|((?:^|[^\\\\])(?:\\\\.)*)" + L + "+$", "g"),
            W = new RegExp("^" + L + "*," + L + "*"),
            B = new RegExp("^" + L + "*([>+~]|" + L + ")" + L + "*"),
            F = new RegExp("=" + L + "*([^\\]'\"]*?)" + L + "*\\]", "g"),
            G = new RegExp(H),
            U = new RegExp("^" + M + "$"),
            V = {
                ID: new RegExp("^#(" + M + ")"),
                CLASS: new RegExp("^\\.(" + M + ")"),
                TAG: new RegExp("^(" + M + "|[*])"),
                ATTR: new RegExp("^" + z),
                PSEUDO: new RegExp("^" + H),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + L + "*(even|odd|(([+-]|)(\\d*)n|)" + L + "*(?:([+-]|)" + L + "*(\\d+)|))" + L + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + O + ")$", "i"),
                needsContext: new RegExp("^" + L + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + L + "*((?:-\\d)?\\d*)" + L + "*\\)|)(?=[^-]|$)", "i")
            },
            K = /^(?:input|select|textarea|button)$/i,
            X = /^h\d$/i,
            Q = /^[^{]+\{\s*\[native \w/,
            Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            Y = /[+~]/,
            J = new RegExp("\\\\([\\da-f]{1,6}" + L + "?|(" + L + ")|.)", "ig"),
            tt = function (t, e, n) {
                var i = "0x" + e - 65536;
                return i != i || n ? e : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
            },
            et = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            nt = function (t, e) {
                return e ? "\0" === t ? "�" : t.slice(0, -1) + "\\" + t.charCodeAt(t.length - 1).toString(16) + " " : "\\" + t
            },
            it = function () {
                _()
            },
            rt = yt(function (t) {
                return !0 === t.disabled && ("form" in t || "label" in t)
            }, {
                dir: "parentNode",
                next: "legend"
            });
        try {
            j.apply(e = N.call(y.childNodes), y.childNodes), e[y.childNodes.length].nodeType
        } catch (n) {
            j = {
                apply: e.length ? function (t, e) {
                    I.apply(t, N.call(e))
                } : function (t, e) {
                    for (var n = t.length, i = 0; t[n++] = e[i++];);
                    t.length = n - 1
                }
            }
        }

        function ot(t, e, n, i) {
            var r, o, s, a, l, u, c, h = e && e.ownerDocument,
                d = e ? e.nodeType : 9;
            if (n = n || [], "string" != typeof t || !t || 1 !== d && 9 !== d && 11 !== d) return n;
            if (!i && ((e ? e.ownerDocument || e : y) !== k && _(e), e = e || k, C)) {
                if (11 !== d && (l = Z.exec(t)))
                    if (r = l[1]) {
                        if (9 === d) {
                            if (!(s = e.getElementById(r))) return n;
                            if (s.id === r) return n.push(s), n
                        } else if (h && (s = h.getElementById(r)) && v(e, s) && s.id === r) return n.push(s), n
                    } else {
                        if (l[2]) return j.apply(n, e.getElementsByTagName(t)), n;
                        if ((r = l[3]) && p.getElementsByClassName && e.getElementsByClassName) return j.apply(n, e.getElementsByClassName(r)), n
                    } if (p.qsa && !E[t + " "] && (!m || !m.test(t))) {
                    if (1 !== d) h = e, c = t;
                    else if ("object" !== e.nodeName.toLowerCase()) {
                        for ((a = e.getAttribute("id")) ? a = a.replace(et, nt) : e.setAttribute("id", a = T), o = (u = f(t)).length; o--;) u[o] = "#" + a + " " + vt(u[o]);
                        c = u.join(","), h = Y.test(t) && gt(e.parentNode) || e
                    }
                    if (c) try {
                        return j.apply(n, h.querySelectorAll(c)), n
                    } catch (t) {} finally {
                        a === T && e.removeAttribute("id")
                    }
                }
            }
            return g(t.replace(R, "$1"), e, n, i)
        }

        function st() {
            var i = [];
            return function t(e, n) {
                return i.push(e + " ") > x.cacheLength && delete t[i.shift()], t[e + " "] = n
            }
        }

        function at(t) {
            return t[T] = !0, t
        }

        function lt(t) {
            var e = k.createElement("fieldset");
            try {
                return !!t(e)
            } catch (t) {
                return !1
            } finally {
                e.parentNode && e.parentNode.removeChild(e), e = null
            }
        }

        function ut(t, e) {
            for (var n = t.split("|"), i = n.length; i--;) x.attrHandle[n[i]] = e
        }

        function ct(t, e) {
            var n = e && t,
                i = n && 1 === t.nodeType && 1 === e.nodeType && t.sourceIndex - e.sourceIndex;
            if (i) return i;
            if (n)
                for (; n = n.nextSibling;)
                    if (n === e) return -1;
            return t ? 1 : -1
        }

        function ht(e) {
            return function (t) {
                return "input" === t.nodeName.toLowerCase() && t.type === e
            }
        }

        function dt(n) {
            return function (t) {
                var e = t.nodeName.toLowerCase();
                return ("input" === e || "button" === e) && t.type === n
            }
        }

        function pt(e) {
            return function (t) {
                return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && rt(t) === e : t.disabled === e : "label" in t && t.disabled === e
            }
        }

        function ft(s) {
            return at(function (o) {
                return o = +o, at(function (t, e) {
                    for (var n, i = s([], t.length, o), r = i.length; r--;) t[n = i[r]] && (t[n] = !(e[n] = t[n]))
                })
            })
        }

        function gt(t) {
            return t && void 0 !== t.getElementsByTagName && t
        }
        for (t in p = ot.support = {}, r = ot.isXML = function (t) {
                var e = t && (t.ownerDocument || t).documentElement;
                return !!e && "HTML" !== e.nodeName
            }, _ = ot.setDocument = function (t) {
                var e, n, i = t ? t.ownerDocument || t : y;
                return i !== k && 9 === i.nodeType && i.documentElement && (s = (k = i).documentElement, C = !r(k), y !== k && (n = k.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", it, !1) : n.attachEvent && n.attachEvent("onunload", it)), p.attributes = lt(function (t) {
                    return t.className = "i", !t.getAttribute("className")
                }), p.getElementsByTagName = lt(function (t) {
                    return t.appendChild(k.createComment("")), !t.getElementsByTagName("*").length
                }), p.getElementsByClassName = Q.test(k.getElementsByClassName), p.getById = lt(function (t) {
                    return s.appendChild(t).id = T, !k.getElementsByName || !k.getElementsByName(T).length
                }), p.getById ? (x.filter.ID = function (t) {
                    var e = t.replace(J, tt);
                    return function (t) {
                        return t.getAttribute("id") === e
                    }
                }, x.find.ID = function (t, e) {
                    if (void 0 !== e.getElementById && C) {
                        var n = e.getElementById(t);
                        return n ? [n] : []
                    }
                }) : (x.filter.ID = function (t) {
                    var n = t.replace(J, tt);
                    return function (t) {
                        var e = void 0 !== t.getAttributeNode && t.getAttributeNode("id");
                        return e && e.value === n
                    }
                }, x.find.ID = function (t, e) {
                    if (void 0 !== e.getElementById && C) {
                        var n, i, r, o = e.getElementById(t);
                        if (o) {
                            if ((n = o.getAttributeNode("id")) && n.value === t) return [o];
                            for (r = e.getElementsByName(t), i = 0; o = r[i++];)
                                if ((n = o.getAttributeNode("id")) && n.value === t) return [o]
                        }
                        return []
                    }
                }), x.find.TAG = p.getElementsByTagName ? function (t, e) {
                    return void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t) : p.qsa ? e.querySelectorAll(t) : void 0
                } : function (t, e) {
                    var n, i = [],
                        r = 0,
                        o = e.getElementsByTagName(t);
                    if ("*" !== t) return o;
                    for (; n = o[r++];) 1 === n.nodeType && i.push(n);
                    return i
                }, x.find.CLASS = p.getElementsByClassName && function (t, e) {
                    if (void 0 !== e.getElementsByClassName && C) return e.getElementsByClassName(t)
                }, a = [], m = [], (p.qsa = Q.test(k.querySelectorAll)) && (lt(function (t) {
                    s.appendChild(t).innerHTML = "<a id='" + T + "'></a><select id='" + T + "-\r\\' msallowcapture=''><option selected=''></option></select>", t.querySelectorAll("[msallowcapture^='']").length && m.push("[*^$]=" + L + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || m.push("\\[" + L + "*(?:value|" + O + ")"), t.querySelectorAll("[id~=" + T + "-]").length || m.push("~="), t.querySelectorAll(":checked").length || m.push(":checked"), t.querySelectorAll("a#" + T + "+*").length || m.push(".#.+[+~]")
                }), lt(function (t) {
                    t.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                    var e = k.createElement("input");
                    e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && m.push("name" + L + "*[*^$|!~]?="), 2 !== t.querySelectorAll(":enabled").length && m.push(":enabled", ":disabled"), s.appendChild(t).disabled = !0, 2 !== t.querySelectorAll(":disabled").length && m.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), m.push(",.*:")
                })), (p.matchesSelector = Q.test(c = s.matches || s.webkitMatchesSelector || s.mozMatchesSelector || s.oMatchesSelector || s.msMatchesSelector)) && lt(function (t) {
                    p.disconnectedMatch = c.call(t, "*"), c.call(t, "[s!='']:x"), a.push("!=", H)
                }), m = m.length && new RegExp(m.join("|")), a = a.length && new RegExp(a.join("|")), e = Q.test(s.compareDocumentPosition), v = e || Q.test(s.contains) ? function (t, e) {
                    var n = 9 === t.nodeType ? t.documentElement : t,
                        i = e && e.parentNode;
                    return t === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(i)))
                } : function (t, e) {
                    if (e)
                        for (; e = e.parentNode;)
                            if (e === t) return !0;
                    return !1
                }, D = e ? function (t, e) {
                    if (t === e) return u = !0, 0;
                    var n = !t.compareDocumentPosition - !e.compareDocumentPosition;
                    return n || (1 & (n = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1) || !p.sortDetached && e.compareDocumentPosition(t) === n ? t === k || t.ownerDocument === y && v(y, t) ? -1 : e === k || e.ownerDocument === y && v(y, e) ? 1 : l ? P(l, t) - P(l, e) : 0 : 4 & n ? -1 : 1)
                } : function (t, e) {
                    if (t === e) return u = !0, 0;
                    var n, i = 0,
                        r = t.parentNode,
                        o = e.parentNode,
                        s = [t],
                        a = [e];
                    if (!r || !o) return t === k ? -1 : e === k ? 1 : r ? -1 : o ? 1 : l ? P(l, t) - P(l, e) : 0;
                    if (r === o) return ct(t, e);
                    for (n = t; n = n.parentNode;) s.unshift(n);
                    for (n = e; n = n.parentNode;) a.unshift(n);
                    for (; s[i] === a[i];) i++;
                    return i ? ct(s[i], a[i]) : s[i] === y ? -1 : a[i] === y ? 1 : 0
                }), k
            }, ot.matches = function (t, e) {
                return ot(t, null, null, e)
            }, ot.matchesSelector = function (t, e) {
                if ((t.ownerDocument || t) !== k && _(t), e = e.replace(F, "='$1']"), p.matchesSelector && C && !E[e + " "] && (!a || !a.test(e)) && (!m || !m.test(e))) try {
                    var n = c.call(t, e);
                    if (n || p.disconnectedMatch || t.document && 11 !== t.document.nodeType) return n
                } catch (t) {}
                return 0 < ot(e, k, null, [t]).length
            }, ot.contains = function (t, e) {
                return (t.ownerDocument || t) !== k && _(t), v(t, e)
            }, ot.attr = function (t, e) {
                (t.ownerDocument || t) !== k && _(t);
                var n = x.attrHandle[e.toLowerCase()],
                    i = n && A.call(x.attrHandle, e.toLowerCase()) ? n(t, e, !C) : void 0;
                return void 0 !== i ? i : p.attributes || !C ? t.getAttribute(e) : (i = t.getAttributeNode(e)) && i.specified ? i.value : null
            }, ot.escape = function (t) {
                return (t + "").replace(et, nt)
            }, ot.error = function (t) {
                throw new Error("Syntax error, unrecognized expression: " + t)
            }, ot.uniqueSort = function (t) {
                var e, n = [],
                    i = 0,
                    r = 0;
                if (u = !p.detectDuplicates, l = !p.sortStable && t.slice(0), t.sort(D), u) {
                    for (; e = t[r++];) e === t[r] && (i = n.push(r));
                    for (; i--;) t.splice(n[i], 1)
                }
                return l = null, t
            }, o = ot.getText = function (t) {
                var e, n = "",
                    i = 0,
                    r = t.nodeType;
                if (r) {
                    if (1 === r || 9 === r || 11 === r) {
                        if ("string" == typeof t.textContent) return t.textContent;
                        for (t = t.firstChild; t; t = t.nextSibling) n += o(t)
                    } else if (3 === r || 4 === r) return t.nodeValue
                } else
                    for (; e = t[i++];) n += o(e);
                return n
            }, (x = ot.selectors = {
                cacheLength: 50,
                createPseudo: at,
                match: V,
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
                    ATTR: function (t) {
                        return t[1] = t[1].replace(J, tt), t[3] = (t[3] || t[4] || t[5] || "").replace(J, tt), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
                    },
                    CHILD: function (t) {
                        return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || ot.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && ot.error(t[0]), t
                    },
                    PSEUDO: function (t) {
                        var e, n = !t[6] && t[2];
                        return V.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : n && G.test(n) && (e = f(n, !0)) && (e = n.indexOf(")", n.length - e) - n.length) && (t[0] = t[0].slice(0, e), t[2] = n.slice(0, e)), t.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function (t) {
                        var e = t.replace(J, tt).toLowerCase();
                        return "*" === t ? function () {
                            return !0
                        } : function (t) {
                            return t.nodeName && t.nodeName.toLowerCase() === e
                        }
                    },
                    CLASS: function (t) {
                        var e = d[t + " "];
                        return e || (e = new RegExp("(^|" + L + ")" + t + "(" + L + "|$)")) && d(t, function (t) {
                            return e.test("string" == typeof t.className && t.className || void 0 !== t.getAttribute && t.getAttribute("class") || "")
                        })
                    },
                    ATTR: function (n, i, r) {
                        return function (t) {
                            var e = ot.attr(t, n);
                            return null == e ? "!=" === i : !i || (e += "", "=" === i ? e === r : "!=" === i ? e !== r : "^=" === i ? r && 0 === e.indexOf(r) : "*=" === i ? r && -1 < e.indexOf(r) : "$=" === i ? r && e.slice(-r.length) === r : "~=" === i ? -1 < (" " + e.replace(q, " ") + " ").indexOf(r) : "|=" === i && (e === r || e.slice(0, r.length + 1) === r + "-"))
                        }
                    },
                    CHILD: function (f, t, e, g, m) {
                        var v = "nth" !== f.slice(0, 3),
                            y = "last" !== f.slice(-4),
                            b = "of-type" === t;
                        return 1 === g && 0 === m ? function (t) {
                            return !!t.parentNode
                        } : function (t, e, n) {
                            var i, r, o, s, a, l, u = v !== y ? "nextSibling" : "previousSibling",
                                c = t.parentNode,
                                h = b && t.nodeName.toLowerCase(),
                                d = !n && !b,
                                p = !1;
                            if (c) {
                                if (v) {
                                    for (; u;) {
                                        for (s = t; s = s[u];)
                                            if (b ? s.nodeName.toLowerCase() === h : 1 === s.nodeType) return !1;
                                        l = u = "only" === f && !l && "nextSibling"
                                    }
                                    return !0
                                }
                                if (l = [y ? c.firstChild : c.lastChild], y && d) {
                                    for (p = (a = (i = (r = (o = (s = c)[T] || (s[T] = {}))[s.uniqueID] || (o[s.uniqueID] = {}))[f] || [])[0] === $ && i[1]) && i[2], s = a && c.childNodes[a]; s = ++a && s && s[u] || (p = a = 0) || l.pop();)
                                        if (1 === s.nodeType && ++p && s === t) {
                                            r[f] = [$, a, p];
                                            break
                                        }
                                } else if (d && (p = a = (i = (r = (o = (s = t)[T] || (s[T] = {}))[s.uniqueID] || (o[s.uniqueID] = {}))[f] || [])[0] === $ && i[1]), !1 === p)
                                    for (;
                                        (s = ++a && s && s[u] || (p = a = 0) || l.pop()) && ((b ? s.nodeName.toLowerCase() !== h : 1 !== s.nodeType) || !++p || (d && ((r = (o = s[T] || (s[T] = {}))[s.uniqueID] || (o[s.uniqueID] = {}))[f] = [$, p]), s !== t)););
                                return (p -= m) === g || p % g == 0 && 0 <= p / g
                            }
                        }
                    },
                    PSEUDO: function (t, o) {
                        var e, s = x.pseudos[t] || x.setFilters[t.toLowerCase()] || ot.error("unsupported pseudo: " + t);
                        return s[T] ? s(o) : 1 < s.length ? (e = [t, t, "", o], x.setFilters.hasOwnProperty(t.toLowerCase()) ? at(function (t, e) {
                            for (var n, i = s(t, o), r = i.length; r--;) t[n = P(t, i[r])] = !(e[n] = i[r])
                        }) : function (t) {
                            return s(t, 0, e)
                        }) : s
                    }
                },
                pseudos: {
                    not: at(function (t) {
                        var i = [],
                            r = [],
                            a = h(t.replace(R, "$1"));
                        return a[T] ? at(function (t, e, n, i) {
                            for (var r, o = a(t, null, i, []), s = t.length; s--;)(r = o[s]) && (t[s] = !(e[s] = r))
                        }) : function (t, e, n) {
                            return i[0] = t, a(i, null, n, r), i[0] = null, !r.pop()
                        }
                    }),
                    has: at(function (e) {
                        return function (t) {
                            return 0 < ot(e, t).length
                        }
                    }),
                    contains: at(function (e) {
                        return e = e.replace(J, tt),
                            function (t) {
                                return -1 < (t.textContent || t.innerText || o(t)).indexOf(e)
                            }
                    }),
                    lang: at(function (n) {
                        return U.test(n || "") || ot.error("unsupported lang: " + n), n = n.replace(J, tt).toLowerCase(),
                            function (t) {
                                var e;
                                do {
                                    if (e = C ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (e = e.toLowerCase()) === n || 0 === e.indexOf(n + "-")
                                } while ((t = t.parentNode) && 1 === t.nodeType);
                                return !1
                            }
                    }),
                    target: function (t) {
                        var e = n.location && n.location.hash;
                        return e && e.slice(1) === t.id
                    },
                    root: function (t) {
                        return t === s
                    },
                    focus: function (t) {
                        return t === k.activeElement && (!k.hasFocus || k.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                    },
                    enabled: pt(!1),
                    disabled: pt(!0),
                    checked: function (t) {
                        var e = t.nodeName.toLowerCase();
                        return "input" === e && !!t.checked || "option" === e && !!t.selected
                    },
                    selected: function (t) {
                        return t.parentNode && t.parentNode.selectedIndex, !0 === t.selected
                    },
                    empty: function (t) {
                        for (t = t.firstChild; t; t = t.nextSibling)
                            if (t.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function (t) {
                        return !x.pseudos.empty(t)
                    },
                    header: function (t) {
                        return X.test(t.nodeName)
                    },
                    input: function (t) {
                        return K.test(t.nodeName)
                    },
                    button: function (t) {
                        var e = t.nodeName.toLowerCase();
                        return "input" === e && "button" === t.type || "button" === e
                    },
                    text: function (t) {
                        var e;
                        return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                    },
                    first: ft(function () {
                        return [0]
                    }),
                    last: ft(function (t, e) {
                        return [e - 1]
                    }),
                    eq: ft(function (t, e, n) {
                        return [n < 0 ? n + e : n]
                    }),
                    even: ft(function (t, e) {
                        for (var n = 0; n < e; n += 2) t.push(n);
                        return t
                    }),
                    odd: ft(function (t, e) {
                        for (var n = 1; n < e; n += 2) t.push(n);
                        return t
                    }),
                    lt: ft(function (t, e, n) {
                        for (var i = n < 0 ? n + e : n; 0 <= --i;) t.push(i);
                        return t
                    }),
                    gt: ft(function (t, e, n) {
                        for (var i = n < 0 ? n + e : n; ++i < e;) t.push(i);
                        return t
                    })
                }
            }).pseudos.nth = x.pseudos.eq, {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) x.pseudos[t] = ht(t);
        for (t in {
                submit: !0,
                reset: !0
            }) x.pseudos[t] = dt(t);

        function mt() {}

        function vt(t) {
            for (var e = 0, n = t.length, i = ""; e < n; e++) i += t[e].value;
            return i
        }

        function yt(a, t, e) {
            var l = t.dir,
                u = t.next,
                c = u || l,
                h = e && "parentNode" === c,
                d = i++;
            return t.first ? function (t, e, n) {
                for (; t = t[l];)
                    if (1 === t.nodeType || h) return a(t, e, n);
                return !1
            } : function (t, e, n) {
                var i, r, o, s = [$, d];
                if (n) {
                    for (; t = t[l];)
                        if ((1 === t.nodeType || h) && a(t, e, n)) return !0
                } else
                    for (; t = t[l];)
                        if (1 === t.nodeType || h)
                            if (r = (o = t[T] || (t[T] = {}))[t.uniqueID] || (o[t.uniqueID] = {}), u && u === t.nodeName.toLowerCase()) t = t[l] || t;
                            else {
                                if ((i = r[c]) && i[0] === $ && i[1] === d) return s[2] = i[2];
                                if ((r[c] = s)[2] = a(t, e, n)) return !0
                            } return !1
            }
        }

        function bt(r) {
            return 1 < r.length ? function (t, e, n) {
                for (var i = r.length; i--;)
                    if (!r[i](t, e, n)) return !1;
                return !0
            } : r[0]
        }

        function xt(t, e, n, i, r) {
            for (var o, s = [], a = 0, l = t.length, u = null != e; a < l; a++)(o = t[a]) && (n && !n(o, i, r) || (s.push(o), u && e.push(a)));
            return s
        }

        function wt(p, f, g, m, v, t) {
            return m && !m[T] && (m = wt(m)), v && !v[T] && (v = wt(v, t)), at(function (t, e, n, i) {
                var r, o, s, a = [],
                    l = [],
                    u = e.length,
                    c = t || function (t, e, n) {
                        for (var i = 0, r = e.length; i < r; i++) ot(t, e[i], n);
                        return n
                    }(f || "*", n.nodeType ? [n] : n, []),
                    h = !p || !t && f ? c : xt(c, a, p, n, i),
                    d = g ? v || (t ? p : u || m) ? [] : e : h;
                if (g && g(h, d, n, i), m)
                    for (r = xt(d, l), m(r, [], n, i), o = r.length; o--;)(s = r[o]) && (d[l[o]] = !(h[l[o]] = s));
                if (t) {
                    if (v || p) {
                        if (v) {
                            for (r = [], o = d.length; o--;)(s = d[o]) && r.push(h[o] = s);
                            v(null, d = [], r, i)
                        }
                        for (o = d.length; o--;)(s = d[o]) && -1 < (r = v ? P(t, s) : a[o]) && (t[r] = !(e[r] = s))
                    }
                } else d = xt(d === e ? d.splice(u, d.length) : d), v ? v(null, e, d, i) : j.apply(e, d)
            })
        }

        function _t(t) {
            for (var r, e, n, i = t.length, o = x.relative[t[0].type], s = o || x.relative[" "], a = o ? 1 : 0, l = yt(function (t) {
                    return t === r
                }, s, !0), u = yt(function (t) {
                    return -1 < P(r, t)
                }, s, !0), c = [function (t, e, n) {
                    var i = !o && (n || e !== w) || ((r = e).nodeType ? l(t, e, n) : u(t, e, n));
                    return r = null, i
                }]; a < i; a++)
                if (e = x.relative[t[a].type]) c = [yt(bt(c), e)];
                else {
                    if ((e = x.filter[t[a].type].apply(null, t[a].matches))[T]) {
                        for (n = ++a; n < i && !x.relative[t[n].type]; n++);
                        return wt(1 < a && bt(c), 1 < a && vt(t.slice(0, a - 1).concat({
                            value: " " === t[a - 2].type ? "*" : ""
                        })).replace(R, "$1"), e, a < n && _t(t.slice(a, n)), n < i && _t(t = t.slice(n)), n < i && vt(t))
                    }
                    c.push(e)
                } return bt(c)
        }
        return mt.prototype = x.filters = x.pseudos, x.setFilters = new mt, f = ot.tokenize = function (t, e) {
            var n, i, r, o, s, a, l, u = b[t + " "];
            if (u) return e ? 0 : u.slice(0);
            for (s = t, a = [], l = x.preFilter; s;) {
                for (o in n && !(i = W.exec(s)) || (i && (s = s.slice(i[0].length) || s), a.push(r = [])), n = !1, (i = B.exec(s)) && (n = i.shift(), r.push({
                        value: n,
                        type: i[0].replace(R, " ")
                    }), s = s.slice(n.length)), x.filter) !(i = V[o].exec(s)) || l[o] && !(i = l[o](i)) || (n = i.shift(), r.push({
                    value: n,
                    type: o,
                    matches: i
                }), s = s.slice(n.length));
                if (!n) break
            }
            return e ? s.length : s ? ot.error(t) : b(t, a).slice(0)
        }, h = ot.compile = function (t, e) {
            var n, m, v, y, b, i, r = [],
                o = [],
                s = E[t + " "];
            if (!s) {
                for (e || (e = f(t)), n = e.length; n--;)(s = _t(e[n]))[T] ? r.push(s) : o.push(s);
                (s = E(t, (m = o, v = r, y = 0 < v.length, b = 0 < m.length, i = function (t, e, n, i, r) {
                    var o, s, a, l = 0,
                        u = "0",
                        c = t && [],
                        h = [],
                        d = w,
                        p = t || b && x.find.TAG("*", r),
                        f = $ += null == d ? 1 : Math.random() || .1,
                        g = p.length;
                    for (r && (w = e === k || e || r); u !== g && null != (o = p[u]); u++) {
                        if (b && o) {
                            for (s = 0, e || o.ownerDocument === k || (_(o), n = !C); a = m[s++];)
                                if (a(o, e || k, n)) {
                                    i.push(o);
                                    break
                                } r && ($ = f)
                        }
                        y && ((o = !a && o) && l--, t && c.push(o))
                    }
                    if (l += u, y && u !== l) {
                        for (s = 0; a = v[s++];) a(c, h, e, n);
                        if (t) {
                            if (0 < l)
                                for (; u--;) c[u] || h[u] || (h[u] = S.call(i));
                            h = xt(h)
                        }
                        j.apply(i, h), r && !t && 0 < h.length && 1 < l + v.length && ot.uniqueSort(i)
                    }
                    return r && ($ = f, w = d), c
                }, y ? at(i) : i))).selector = t
            }
            return s
        }, g = ot.select = function (t, e, n, i) {
            var r, o, s, a, l, u = "function" == typeof t && t,
                c = !i && f(t = u.selector || t);
            if (n = n || [], 1 === c.length) {
                if (2 < (o = c[0] = c[0].slice(0)).length && "ID" === (s = o[0]).type && 9 === e.nodeType && C && x.relative[o[1].type]) {
                    if (!(e = (x.find.ID(s.matches[0].replace(J, tt), e) || [])[0])) return n;
                    u && (e = e.parentNode), t = t.slice(o.shift().value.length)
                }
                for (r = V.needsContext.test(t) ? 0 : o.length; r-- && (s = o[r], !x.relative[a = s.type]);)
                    if ((l = x.find[a]) && (i = l(s.matches[0].replace(J, tt), Y.test(o[0].type) && gt(e.parentNode) || e))) {
                        if (o.splice(r, 1), !(t = i.length && vt(o))) return j.apply(n, i), n;
                        break
                    }
            }
            return (u || h(t, c))(i, e, !C, n, !e || Y.test(t) && gt(e.parentNode) || e), n
        }, p.sortStable = T.split("").sort(D).join("") === T, p.detectDuplicates = !!u, _(), p.sortDetached = lt(function (t) {
            return 1 & t.compareDocumentPosition(k.createElement("fieldset"))
        }), lt(function (t) {
            return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
        }) || ut("type|href|height|width", function (t, e, n) {
            if (!n) return t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
        }), p.attributes && lt(function (t) {
            return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
        }) || ut("value", function (t, e, n) {
            if (!n && "input" === t.nodeName.toLowerCase()) return t.defaultValue
        }), lt(function (t) {
            return null == t.getAttribute("disabled")
        }) || ut(O, function (t, e, n) {
            var i;
            if (!n) return !0 === t[e] ? e.toLowerCase() : (i = t.getAttributeNode(e)) && i.specified ? i.value : null
        }), ot
    }(k);
    T.find = p, T.expr = p.selectors, T.expr[":"] = T.expr.pseudos, T.uniqueSort = T.unique = p.uniqueSort, T.text = p.getText, T.isXMLDoc = p.isXML, T.contains = p.contains, T.escapeSelector = p.escape;
    var f = function (t, e, n) {
            for (var i = [], r = void 0 !== n;
                (t = t[e]) && 9 !== t.nodeType;)
                if (1 === t.nodeType) {
                    if (r && T(t).is(n)) break;
                    i.push(t)
                } return i
        },
        _ = function (t, e) {
            for (var n = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && n.push(t);
            return n
        },
        $ = T.expr.match.needsContext;

    function E(t, e) {
        return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
    }
    var D = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

    function A(t, n, i) {
        return y(n) ? T.grep(t, function (t, e) {
            return !!n.call(t, e, t) !== i
        }) : n.nodeType ? T.grep(t, function (t) {
            return t === n !== i
        }) : "string" != typeof n ? T.grep(t, function (t) {
            return -1 < r.call(n, t) !== i
        }) : T.filter(n, t, i)
    }
    T.filter = function (t, e, n) {
        var i = e[0];
        return n && (t = ":not(" + t + ")"), 1 === e.length && 1 === i.nodeType ? T.find.matchesSelector(i, t) ? [i] : [] : T.find.matches(t, T.grep(e, function (t) {
            return 1 === t.nodeType
        }))
    }, T.fn.extend({
        find: function (t) {
            var e, n, i = this.length,
                r = this;
            if ("string" != typeof t) return this.pushStack(T(t).filter(function () {
                for (e = 0; e < i; e++)
                    if (T.contains(r[e], this)) return !0
            }));
            for (n = this.pushStack([]), e = 0; e < i; e++) T.find(t, r[e], n);
            return 1 < i ? T.uniqueSort(n) : n
        },
        filter: function (t) {
            return this.pushStack(A(this, t || [], !1))
        },
        not: function (t) {
            return this.pushStack(A(this, t || [], !0))
        },
        is: function (t) {
            return !!A(this, "string" == typeof t && $.test(t) ? T(t) : t || [], !1).length
        }
    });
    var S, I = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (T.fn.init = function (t, e, n) {
        var i, r;
        if (!t) return this;
        if (n = n || S, "string" != typeof t) return t.nodeType ? (this[0] = t, this.length = 1, this) : y(t) ? void 0 !== n.ready ? n.ready(t) : t(T) : T.makeArray(t, this);
        if (!(i = "<" === t[0] && ">" === t[t.length - 1] && 3 <= t.length ? [null, t, null] : I.exec(t)) || !i[1] && e) return !e || e.jquery ? (e || n).find(t) : this.constructor(e).find(t);
        if (i[1]) {
            if (e = e instanceof T ? e[0] : e, T.merge(this, T.parseHTML(i[1], e && e.nodeType ? e.ownerDocument || e : C, !0)), D.test(i[1]) && T.isPlainObject(e))
                for (i in e) y(this[i]) ? this[i](e[i]) : this.attr(i, e[i]);
            return this
        }
        return (r = C.getElementById(i[2])) && (this[0] = r, this.length = 1), this
    }).prototype = T.fn, S = T(C);
    var j = /^(?:parents|prev(?:Until|All))/,
        N = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };

    function P(t, e) {
        for (;
            (t = t[e]) && 1 !== t.nodeType;);
        return t
    }
    T.fn.extend({
        has: function (t) {
            var e = T(t, this),
                n = e.length;
            return this.filter(function () {
                for (var t = 0; t < n; t++)
                    if (T.contains(this, e[t])) return !0
            })
        },
        closest: function (t, e) {
            var n, i = 0,
                r = this.length,
                o = [],
                s = "string" != typeof t && T(t);
            if (!$.test(t))
                for (; i < r; i++)
                    for (n = this[i]; n && n !== e; n = n.parentNode)
                        if (n.nodeType < 11 && (s ? -1 < s.index(n) : 1 === n.nodeType && T.find.matchesSelector(n, t))) {
                            o.push(n);
                            break
                        } return this.pushStack(1 < o.length ? T.uniqueSort(o) : o)
        },
        index: function (t) {
            return t ? "string" == typeof t ? r.call(T(t), this[0]) : r.call(this, t.jquery ? t[0] : t) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function (t, e) {
            return this.pushStack(T.uniqueSort(T.merge(this.get(), T(t, e))))
        },
        addBack: function (t) {
            return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
        }
    }), T.each({
        parent: function (t) {
            var e = t.parentNode;
            return e && 11 !== e.nodeType ? e : null
        },
        parents: function (t) {
            return f(t, "parentNode")
        },
        parentsUntil: function (t, e, n) {
            return f(t, "parentNode", n)
        },
        next: function (t) {
            return P(t, "nextSibling")
        },
        prev: function (t) {
            return P(t, "previousSibling")
        },
        nextAll: function (t) {
            return f(t, "nextSibling")
        },
        prevAll: function (t) {
            return f(t, "previousSibling")
        },
        nextUntil: function (t, e, n) {
            return f(t, "nextSibling", n)
        },
        prevUntil: function (t, e, n) {
            return f(t, "previousSibling", n)
        },
        siblings: function (t) {
            return _((t.parentNode || {}).firstChild, t)
        },
        children: function (t) {
            return _(t.firstChild)
        },
        contents: function (t) {
            return E(t, "iframe") ? t.contentDocument : (E(t, "template") && (t = t.content || t), T.merge([], t.childNodes))
        }
    }, function (i, r) {
        T.fn[i] = function (t, e) {
            var n = T.map(this, r, t);
            return "Until" !== i.slice(-5) && (e = t), e && "string" == typeof e && (n = T.filter(e, n)), 1 < this.length && (N[i] || T.uniqueSort(n), j.test(i) && n.reverse()), this.pushStack(n)
        }
    });
    var O = /[^\x20\t\r\n\f]+/g;

    function L(t) {
        return t
    }

    function M(t) {
        throw t
    }

    function z(t, e, n, i) {
        var r;
        try {
            t && y(r = t.promise) ? r.call(t).done(e).fail(n) : t && y(r = t.then) ? r.call(t, e, n) : e.apply(void 0, [t].slice(i))
        } catch (t) {
            n.apply(void 0, [t])
        }
    }
    T.Callbacks = function (i) {
        var t, n;
        i = "string" == typeof i ? (t = i, n = {}, T.each(t.match(O) || [], function (t, e) {
            n[e] = !0
        }), n) : T.extend({}, i);
        var r, e, o, s, a = [],
            l = [],
            u = -1,
            c = function () {
                for (s = s || i.once, o = r = !0; l.length; u = -1)
                    for (e = l.shift(); ++u < a.length;) !1 === a[u].apply(e[0], e[1]) && i.stopOnFalse && (u = a.length, e = !1);
                i.memory || (e = !1), r = !1, s && (a = e ? [] : "")
            },
            h = {
                add: function () {
                    return a && (e && !r && (u = a.length - 1, l.push(e)), function n(t) {
                        T.each(t, function (t, e) {
                            y(e) ? i.unique && h.has(e) || a.push(e) : e && e.length && "string" !== w(e) && n(e)
                        })
                    }(arguments), e && !r && c()), this
                },
                remove: function () {
                    return T.each(arguments, function (t, e) {
                        for (var n; - 1 < (n = T.inArray(e, a, n));) a.splice(n, 1), n <= u && u--
                    }), this
                },
                has: function (t) {
                    return t ? -1 < T.inArray(t, a) : 0 < a.length
                },
                empty: function () {
                    return a && (a = []), this
                },
                disable: function () {
                    return s = l = [], a = e = "", this
                },
                disabled: function () {
                    return !a
                },
                lock: function () {
                    return s = l = [], e || r || (a = e = ""), this
                },
                locked: function () {
                    return !!s
                },
                fireWith: function (t, e) {
                    return s || (e = [t, (e = e || []).slice ? e.slice() : e], l.push(e), r || c()), this
                },
                fire: function () {
                    return h.fireWith(this, arguments), this
                },
                fired: function () {
                    return !!o
                }
            };
        return h
    }, T.extend({
        Deferred: function (t) {
            var o = [
                    ["notify", "progress", T.Callbacks("memory"), T.Callbacks("memory"), 2],
                    ["resolve", "done", T.Callbacks("once memory"), T.Callbacks("once memory"), 0, "resolved"],
                    ["reject", "fail", T.Callbacks("once memory"), T.Callbacks("once memory"), 1, "rejected"]
                ],
                r = "pending",
                s = {
                    state: function () {
                        return r
                    },
                    always: function () {
                        return a.done(arguments).fail(arguments), this
                    },
                    catch: function (t) {
                        return s.then(null, t)
                    },
                    pipe: function () {
                        var r = arguments;
                        return T.Deferred(function (i) {
                            T.each(o, function (t, e) {
                                var n = y(r[e[4]]) && r[e[4]];
                                a[e[1]](function () {
                                    var t = n && n.apply(this, arguments);
                                    t && y(t.promise) ? t.promise().progress(i.notify).done(i.resolve).fail(i.reject) : i[e[0] + "With"](this, n ? [t] : arguments)
                                })
                            }), r = null
                        }).promise()
                    },
                    then: function (e, n, i) {
                        var l = 0;

                        function u(r, o, s, a) {
                            return function () {
                                var n = this,
                                    i = arguments,
                                    t = function () {
                                        var t, e;
                                        if (!(r < l)) {
                                            if ((t = s.apply(n, i)) === o.promise()) throw new TypeError("Thenable self-resolution");
                                            e = t && ("object" == typeof t || "function" == typeof t) && t.then, y(e) ? a ? e.call(t, u(l, o, L, a), u(l, o, M, a)) : (l++, e.call(t, u(l, o, L, a), u(l, o, M, a), u(l, o, L, o.notifyWith))) : (s !== L && (n = void 0, i = [t]), (a || o.resolveWith)(n, i))
                                        }
                                    },
                                    e = a ? t : function () {
                                        try {
                                            t()
                                        } catch (t) {
                                            T.Deferred.exceptionHook && T.Deferred.exceptionHook(t, e.stackTrace), l <= r + 1 && (s !== M && (n = void 0, i = [t]), o.rejectWith(n, i))
                                        }
                                    };
                                r ? e() : (T.Deferred.getStackHook && (e.stackTrace = T.Deferred.getStackHook()), k.setTimeout(e))
                            }
                        }
                        return T.Deferred(function (t) {
                            o[0][3].add(u(0, t, y(i) ? i : L, t.notifyWith)), o[1][3].add(u(0, t, y(e) ? e : L)), o[2][3].add(u(0, t, y(n) ? n : M))
                        }).promise()
                    },
                    promise: function (t) {
                        return null != t ? T.extend(t, s) : s
                    }
                },
                a = {};
            return T.each(o, function (t, e) {
                var n = e[2],
                    i = e[5];
                s[e[1]] = n.add, i && n.add(function () {
                    r = i
                }, o[3 - t][2].disable, o[3 - t][3].disable, o[0][2].lock, o[0][3].lock), n.add(e[3].fire), a[e[0]] = function () {
                    return a[e[0] + "With"](this === a ? void 0 : this, arguments), this
                }, a[e[0] + "With"] = n.fireWith
            }), s.promise(a), t && t.call(a, a), a
        },
        when: function (t) {
            var n = arguments.length,
                e = n,
                i = Array(e),
                r = a.call(arguments),
                o = T.Deferred(),
                s = function (e) {
                    return function (t) {
                        i[e] = this, r[e] = 1 < arguments.length ? a.call(arguments) : t, --n || o.resolveWith(i, r)
                    }
                };
            if (n <= 1 && (z(t, o.done(s(e)).resolve, o.reject, !n), "pending" === o.state() || y(r[e] && r[e].then))) return o.then();
            for (; e--;) z(r[e], s(e), o.reject);
            return o.promise()
        }
    });
    var H = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    T.Deferred.exceptionHook = function (t, e) {
        k.console && k.console.warn && t && H.test(t.name) && k.console.warn("jQuery.Deferred exception: " + t.message, t.stack, e)
    }, T.readyException = function (t) {
        k.setTimeout(function () {
            throw t
        })
    };
    var q = T.Deferred();

    function R() {
        C.removeEventListener("DOMContentLoaded", R), k.removeEventListener("load", R), T.ready()
    }
    T.fn.ready = function (t) {
        return q.then(t).catch(function (t) {
            T.readyException(t)
        }), this
    }, T.extend({
        isReady: !1,
        readyWait: 1,
        ready: function (t) {
            (!0 === t ? --T.readyWait : T.isReady) || ((T.isReady = !0) !== t && 0 < --T.readyWait || q.resolveWith(C, [T]))
        }
    }), T.ready.then = q.then, "complete" === C.readyState || "loading" !== C.readyState && !C.documentElement.doScroll ? k.setTimeout(T.ready) : (C.addEventListener("DOMContentLoaded", R), k.addEventListener("load", R));
    var W = function (t, e, n, i, r, o, s) {
            var a = 0,
                l = t.length,
                u = null == n;
            if ("object" === w(n))
                for (a in r = !0, n) W(t, e, a, n[a], !0, o, s);
            else if (void 0 !== i && (r = !0, y(i) || (s = !0), u && (e = s ? (e.call(t, i), null) : (u = e, function (t, e, n) {
                    return u.call(T(t), n)
                })), e))
                for (; a < l; a++) e(t[a], n, s ? i : i.call(t[a], a, e(t[a], n)));
            return r ? t : u ? e.call(t) : l ? e(t[0], n) : o
        },
        B = /^-ms-/,
        F = /-([a-z])/g;

    function G(t, e) {
        return e.toUpperCase()
    }

    function U(t) {
        return t.replace(B, "ms-").replace(F, G)
    }
    var V = function (t) {
        return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType
    };

    function K() {
        this.expando = T.expando + K.uid++
    }
    K.uid = 1, K.prototype = {
        cache: function (t) {
            var e = t[this.expando];
            return e || (e = {}, V(t) && (t.nodeType ? t[this.expando] = e : Object.defineProperty(t, this.expando, {
                value: e,
                configurable: !0
            }))), e
        },
        set: function (t, e, n) {
            var i, r = this.cache(t);
            if ("string" == typeof e) r[U(e)] = n;
            else
                for (i in e) r[U(i)] = e[i];
            return r
        },
        get: function (t, e) {
            return void 0 === e ? this.cache(t) : t[this.expando] && t[this.expando][U(e)]
        },
        access: function (t, e, n) {
            return void 0 === e || e && "string" == typeof e && void 0 === n ? this.get(t, e) : (this.set(t, e, n), void 0 !== n ? n : e)
        },
        remove: function (t, e) {
            var n, i = t[this.expando];
            if (void 0 !== i) {
                if (void 0 !== e) {
                    n = (e = Array.isArray(e) ? e.map(U) : (e = U(e)) in i ? [e] : e.match(O) || []).length;
                    for (; n--;) delete i[e[n]]
                }(void 0 === e || T.isEmptyObject(i)) && (t.nodeType ? t[this.expando] = void 0 : delete t[this.expando])
            }
        },
        hasData: function (t) {
            var e = t[this.expando];
            return void 0 !== e && !T.isEmptyObject(e)
        }
    };
    var X = new K,
        Q = new K,
        Z = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        Y = /[A-Z]/g;

    function J(t, e, n) {
        var i, r;
        if (void 0 === n && 1 === t.nodeType)
            if (i = "data-" + e.replace(Y, "-$&").toLowerCase(), "string" == typeof (n = t.getAttribute(i))) {
                try {
                    n = "true" === (r = n) || "false" !== r && ("null" === r ? null : r === +r + "" ? +r : Z.test(r) ? JSON.parse(r) : r)
                } catch (t) {}
                Q.set(t, e, n)
            } else n = void 0;
        return n
    }
    T.extend({
        hasData: function (t) {
            return Q.hasData(t) || X.hasData(t)
        },
        data: function (t, e, n) {
            return Q.access(t, e, n)
        },
        removeData: function (t, e) {
            Q.remove(t, e)
        },
        _data: function (t, e, n) {
            return X.access(t, e, n)
        },
        _removeData: function (t, e) {
            X.remove(t, e)
        }
    }), T.fn.extend({
        data: function (n, t) {
            var e, i, r, o = this[0],
                s = o && o.attributes;
            if (void 0 !== n) return "object" == typeof n ? this.each(function () {
                Q.set(this, n)
            }) : W(this, function (t) {
                var e;
                if (o && void 0 === t) {
                    if (void 0 !== (e = Q.get(o, n))) return e;
                    if (void 0 !== (e = J(o, n))) return e
                } else this.each(function () {
                    Q.set(this, n, t)
                })
            }, null, t, 1 < arguments.length, null, !0);
            if (this.length && (r = Q.get(o), 1 === o.nodeType && !X.get(o, "hasDataAttrs"))) {
                for (e = s.length; e--;) s[e] && 0 === (i = s[e].name).indexOf("data-") && (i = U(i.slice(5)), J(o, i, r[i]));
                X.set(o, "hasDataAttrs", !0)
            }
            return r
        },
        removeData: function (t) {
            return this.each(function () {
                Q.remove(this, t)
            })
        }
    }), T.extend({
        queue: function (t, e, n) {
            var i;
            if (t) return e = (e || "fx") + "queue", i = X.get(t, e), n && (!i || Array.isArray(n) ? i = X.access(t, e, T.makeArray(n)) : i.push(n)), i || []
        },
        dequeue: function (t, e) {
            e = e || "fx";
            var n = T.queue(t, e),
                i = n.length,
                r = n.shift(),
                o = T._queueHooks(t, e);
            "inprogress" === r && (r = n.shift(), i--), r && ("fx" === e && n.unshift("inprogress"), delete o.stop, r.call(t, function () {
                T.dequeue(t, e)
            }, o)), !i && o && o.empty.fire()
        },
        _queueHooks: function (t, e) {
            var n = e + "queueHooks";
            return X.get(t, n) || X.access(t, n, {
                empty: T.Callbacks("once memory").add(function () {
                    X.remove(t, [e + "queue", n])
                })
            })
        }
    }), T.fn.extend({
        queue: function (e, n) {
            var t = 2;
            return "string" != typeof e && (n = e, e = "fx", t--), arguments.length < t ? T.queue(this[0], e) : void 0 === n ? this : this.each(function () {
                var t = T.queue(this, e, n);
                T._queueHooks(this, e), "fx" === e && "inprogress" !== t[0] && T.dequeue(this, e)
            })
        },
        dequeue: function (t) {
            return this.each(function () {
                T.dequeue(this, t)
            })
        },
        clearQueue: function (t) {
            return this.queue(t || "fx", [])
        },
        promise: function (t, e) {
            var n, i = 1,
                r = T.Deferred(),
                o = this,
                s = this.length,
                a = function () {
                    --i || r.resolveWith(o, [o])
                };
            for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; s--;)(n = X.get(o[s], t + "queueHooks")) && n.empty && (i++, n.empty.add(a));
            return a(), r.promise(e)
        }
    });
    var tt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        et = new RegExp("^(?:([+-])=|)(" + tt + ")([a-z%]*)$", "i"),
        nt = ["Top", "Right", "Bottom", "Left"],
        it = function (t, e) {
            return "none" === (t = e || t).style.display || "" === t.style.display && T.contains(t.ownerDocument, t) && "none" === T.css(t, "display")
        },
        rt = function (t, e, n, i) {
            var r, o, s = {};
            for (o in e) s[o] = t.style[o], t.style[o] = e[o];
            for (o in r = n.apply(t, i || []), e) t.style[o] = s[o];
            return r
        };

    function ot(t, e, n, i) {
        var r, o, s = 20,
            a = i ? function () {
                return i.cur()
            } : function () {
                return T.css(t, e, "")
            },
            l = a(),
            u = n && n[3] || (T.cssNumber[e] ? "" : "px"),
            c = (T.cssNumber[e] || "px" !== u && +l) && et.exec(T.css(t, e));
        if (c && c[3] !== u) {
            for (l /= 2, u = u || c[3], c = +l || 1; s--;) T.style(t, e, c + u), (1 - o) * (1 - (o = a() / l || .5)) <= 0 && (s = 0), c /= o;
            c *= 2, T.style(t, e, c + u), n = n || []
        }
        return n && (c = +c || +l || 0, r = n[1] ? c + (n[1] + 1) * n[2] : +n[2], i && (i.unit = u, i.start = c, i.end = r)), r
    }
    var st = {};

    function at(t, e) {
        for (var n, i, r = [], o = 0, s = t.length; o < s; o++)(i = t[o]).style && (n = i.style.display, e ? ("none" === n && (r[o] = X.get(i, "display") || null, r[o] || (i.style.display = "")), "" === i.style.display && it(i) && (r[o] = (h = u = l = void 0, u = (a = i).ownerDocument, c = a.nodeName, (h = st[c]) || (l = u.body.appendChild(u.createElement(c)), h = T.css(l, "display"), l.parentNode.removeChild(l), "none" === h && (h = "block"), st[c] = h)))) : "none" !== n && (r[o] = "none", X.set(i, "display", n)));
        var a, l, u, c, h;
        for (o = 0; o < s; o++) null != r[o] && (t[o].style.display = r[o]);
        return t
    }
    T.fn.extend({
        show: function () {
            return at(this, !0)
        },
        hide: function () {
            return at(this)
        },
        toggle: function (t) {
            return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function () {
                it(this) ? T(this).show() : T(this).hide()
            })
        }
    });
    var lt = /^(?:checkbox|radio)$/i,
        ut = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
        ct = /^$|^module$|\/(?:java|ecma)script/i,
        ht = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };

    function dt(t, e) {
        var n;
        return n = void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e || "*") : void 0 !== t.querySelectorAll ? t.querySelectorAll(e || "*") : [], void 0 === e || e && E(t, e) ? T.merge([t], n) : n
    }

    function pt(t, e) {
        for (var n = 0, i = t.length; n < i; n++) X.set(t[n], "globalEval", !e || X.get(e[n], "globalEval"))
    }
    ht.optgroup = ht.option, ht.tbody = ht.tfoot = ht.colgroup = ht.caption = ht.thead, ht.th = ht.td;
    var ft, gt, mt = /<|&#?\w+;/;

    function vt(t, e, n, i, r) {
        for (var o, s, a, l, u, c, h = e.createDocumentFragment(), d = [], p = 0, f = t.length; p < f; p++)
            if ((o = t[p]) || 0 === o)
                if ("object" === w(o)) T.merge(d, o.nodeType ? [o] : o);
                else if (mt.test(o)) {
            for (s = s || h.appendChild(e.createElement("div")), a = (ut.exec(o) || ["", ""])[1].toLowerCase(), l = ht[a] || ht._default, s.innerHTML = l[1] + T.htmlPrefilter(o) + l[2], c = l[0]; c--;) s = s.lastChild;
            T.merge(d, s.childNodes), (s = h.firstChild).textContent = ""
        } else d.push(e.createTextNode(o));
        for (h.textContent = "", p = 0; o = d[p++];)
            if (i && -1 < T.inArray(o, i)) r && r.push(o);
            else if (u = T.contains(o.ownerDocument, o), s = dt(h.appendChild(o), "script"), u && pt(s), n)
            for (c = 0; o = s[c++];) ct.test(o.type || "") && n.push(o);
        return h
    }
    ft = C.createDocumentFragment().appendChild(C.createElement("div")), (gt = C.createElement("input")).setAttribute("type", "radio"), gt.setAttribute("checked", "checked"), gt.setAttribute("name", "t"), ft.appendChild(gt), v.checkClone = ft.cloneNode(!0).cloneNode(!0).lastChild.checked, ft.innerHTML = "<textarea>x</textarea>", v.noCloneChecked = !!ft.cloneNode(!0).lastChild.defaultValue;
    var yt = C.documentElement,
        bt = /^key/,
        xt = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        wt = /^([^.]*)(?:\.(.+)|)/;

    function _t() {
        return !0
    }

    function kt() {
        return !1
    }

    function Ct() {
        try {
            return C.activeElement
        } catch (t) {}
    }

    function Tt(t, e, n, i, r, o) {
        var s, a;
        if ("object" == typeof e) {
            for (a in "string" != typeof n && (i = i || n, n = void 0), e) Tt(t, a, n, i, e[a], o);
            return t
        }
        if (null == i && null == r ? (r = n, i = n = void 0) : null == r && ("string" == typeof n ? (r = i, i = void 0) : (r = i, i = n, n = void 0)), !1 === r) r = kt;
        else if (!r) return t;
        return 1 === o && (s = r, (r = function (t) {
            return T().off(t), s.apply(this, arguments)
        }).guid = s.guid || (s.guid = T.guid++)), t.each(function () {
            T.event.add(this, e, r, i, n)
        })
    }
    T.event = {
        global: {},
        add: function (e, t, n, i, r) {
            var o, s, a, l, u, c, h, d, p, f, g, m = X.get(e);
            if (m)
                for (n.handler && (n = (o = n).handler, r = o.selector), r && T.find.matchesSelector(yt, r), n.guid || (n.guid = T.guid++), (l = m.events) || (l = m.events = {}), (s = m.handle) || (s = m.handle = function (t) {
                        return void 0 !== T && T.event.triggered !== t.type ? T.event.dispatch.apply(e, arguments) : void 0
                    }), u = (t = (t || "").match(O) || [""]).length; u--;) p = g = (a = wt.exec(t[u]) || [])[1], f = (a[2] || "").split(".").sort(), p && (h = T.event.special[p] || {}, p = (r ? h.delegateType : h.bindType) || p, h = T.event.special[p] || {}, c = T.extend({
                    type: p,
                    origType: g,
                    data: i,
                    handler: n,
                    guid: n.guid,
                    selector: r,
                    needsContext: r && T.expr.match.needsContext.test(r),
                    namespace: f.join(".")
                }, o), (d = l[p]) || ((d = l[p] = []).delegateCount = 0, h.setup && !1 !== h.setup.call(e, i, f, s) || e.addEventListener && e.addEventListener(p, s)), h.add && (h.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), r ? d.splice(d.delegateCount++, 0, c) : d.push(c), T.event.global[p] = !0)
        },
        remove: function (t, e, n, i, r) {
            var o, s, a, l, u, c, h, d, p, f, g, m = X.hasData(t) && X.get(t);
            if (m && (l = m.events)) {
                for (u = (e = (e || "").match(O) || [""]).length; u--;)
                    if (p = g = (a = wt.exec(e[u]) || [])[1], f = (a[2] || "").split(".").sort(), p) {
                        for (h = T.event.special[p] || {}, d = l[p = (i ? h.delegateType : h.bindType) || p] || [], a = a[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = o = d.length; o--;) c = d[o], !r && g !== c.origType || n && n.guid !== c.guid || a && !a.test(c.namespace) || i && i !== c.selector && ("**" !== i || !c.selector) || (d.splice(o, 1), c.selector && d.delegateCount--, h.remove && h.remove.call(t, c));
                        s && !d.length && (h.teardown && !1 !== h.teardown.call(t, f, m.handle) || T.removeEvent(t, p, m.handle), delete l[p])
                    } else
                        for (p in l) T.event.remove(t, p + e[u], n, i, !0);
                T.isEmptyObject(l) && X.remove(t, "handle events")
            }
        },
        dispatch: function (t) {
            var e, n, i, r, o, s, a = T.event.fix(t),
                l = new Array(arguments.length),
                u = (X.get(this, "events") || {})[a.type] || [],
                c = T.event.special[a.type] || {};
            for (l[0] = a, e = 1; e < arguments.length; e++) l[e] = arguments[e];
            if (a.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, a)) {
                for (s = T.event.handlers.call(this, a, u), e = 0;
                    (r = s[e++]) && !a.isPropagationStopped();)
                    for (a.currentTarget = r.elem, n = 0;
                        (o = r.handlers[n++]) && !a.isImmediatePropagationStopped();) a.rnamespace && !a.rnamespace.test(o.namespace) || (a.handleObj = o, a.data = o.data, void 0 !== (i = ((T.event.special[o.origType] || {}).handle || o.handler).apply(r.elem, l)) && !1 === (a.result = i) && (a.preventDefault(), a.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, a), a.result
            }
        },
        handlers: function (t, e) {
            var n, i, r, o, s, a = [],
                l = e.delegateCount,
                u = t.target;
            if (l && u.nodeType && !("click" === t.type && 1 <= t.button))
                for (; u !== this; u = u.parentNode || this)
                    if (1 === u.nodeType && ("click" !== t.type || !0 !== u.disabled)) {
                        for (o = [], s = {}, n = 0; n < l; n++) void 0 === s[r = (i = e[n]).selector + " "] && (s[r] = i.needsContext ? -1 < T(r, this).index(u) : T.find(r, this, null, [u]).length), s[r] && o.push(i);
                        o.length && a.push({
                            elem: u,
                            handlers: o
                        })
                    } return u = this, l < e.length && a.push({
                elem: u,
                handlers: e.slice(l)
            }), a
        },
        addProp: function (e, t) {
            Object.defineProperty(T.Event.prototype, e, {
                enumerable: !0,
                configurable: !0,
                get: y(t) ? function () {
                    if (this.originalEvent) return t(this.originalEvent)
                } : function () {
                    if (this.originalEvent) return this.originalEvent[e]
                },
                set: function (t) {
                    Object.defineProperty(this, e, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: t
                    })
                }
            })
        },
        fix: function (t) {
            return t[T.expando] ? t : new T.Event(t)
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function () {
                    if (this !== Ct() && this.focus) return this.focus(), !1
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function () {
                    if (this === Ct() && this.blur) return this.blur(), !1
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function () {
                    if ("checkbox" === this.type && this.click && E(this, "input")) return this.click(), !1
                },
                _default: function (t) {
                    return E(t.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function (t) {
                    void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
                }
            }
        }
    }, T.removeEvent = function (t, e, n) {
        t.removeEventListener && t.removeEventListener(e, n)
    }, T.Event = function (t, e) {
        if (!(this instanceof T.Event)) return new T.Event(t, e);
        t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && !1 === t.returnValue ? _t : kt, this.target = t.target && 3 === t.target.nodeType ? t.target.parentNode : t.target, this.currentTarget = t.currentTarget, this.relatedTarget = t.relatedTarget) : this.type = t, e && T.extend(this, e), this.timeStamp = t && t.timeStamp || Date.now(), this[T.expando] = !0
    }, T.Event.prototype = {
        constructor: T.Event,
        isDefaultPrevented: kt,
        isPropagationStopped: kt,
        isImmediatePropagationStopped: kt,
        isSimulated: !1,
        preventDefault: function () {
            var t = this.originalEvent;
            this.isDefaultPrevented = _t, t && !this.isSimulated && t.preventDefault()
        },
        stopPropagation: function () {
            var t = this.originalEvent;
            this.isPropagationStopped = _t, t && !this.isSimulated && t.stopPropagation()
        },
        stopImmediatePropagation: function () {
            var t = this.originalEvent;
            this.isImmediatePropagationStopped = _t, t && !this.isSimulated && t.stopImmediatePropagation(), this.stopPropagation()
        }
    }, T.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function (t) {
            var e = t.button;
            return null == t.which && bt.test(t.type) ? null != t.charCode ? t.charCode : t.keyCode : !t.which && void 0 !== e && xt.test(t.type) ? 1 & e ? 1 : 2 & e ? 3 : 4 & e ? 2 : 0 : t.which
        }
    }, T.event.addProp), T.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function (t, r) {
        T.event.special[t] = {
            delegateType: r,
            bindType: r,
            handle: function (t) {
                var e, n = t.relatedTarget,
                    i = t.handleObj;
                return n && (n === this || T.contains(this, n)) || (t.type = i.origType, e = i.handler.apply(this, arguments), t.type = r), e
            }
        }
    }), T.fn.extend({
        on: function (t, e, n, i) {
            return Tt(this, t, e, n, i)
        },
        one: function (t, e, n, i) {
            return Tt(this, t, e, n, i, 1)
        },
        off: function (t, e, n) {
            var i, r;
            if (t && t.preventDefault && t.handleObj) return i = t.handleObj, T(t.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
            if ("object" != typeof t) return !1 !== e && "function" != typeof e || (n = e, e = void 0), !1 === n && (n = kt), this.each(function () {
                T.event.remove(this, t, n, e)
            });
            for (r in t) this.off(r, e, t[r]);
            return this
        }
    });
    var $t = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        Et = /<script|<style|<link/i,
        Dt = /checked\s*(?:[^=]|=\s*.checked.)/i,
        At = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

    function St(t, e) {
        return E(t, "table") && E(11 !== e.nodeType ? e : e.firstChild, "tr") && T(t).children("tbody")[0] || t
    }

    function It(t) {
        return t.type = (null !== t.getAttribute("type")) + "/" + t.type, t
    }

    function jt(t) {
        return "true/" === (t.type || "").slice(0, 5) ? t.type = t.type.slice(5) : t.removeAttribute("type"), t
    }

    function Nt(t, e) {
        var n, i, r, o, s, a, l, u;
        if (1 === e.nodeType) {
            if (X.hasData(t) && (o = X.access(t), s = X.set(e, o), u = o.events))
                for (r in delete s.handle, s.events = {}, u)
                    for (n = 0, i = u[r].length; n < i; n++) T.event.add(e, r, u[r][n]);
            Q.hasData(t) && (a = Q.access(t), l = T.extend({}, a), Q.set(e, l))
        }
    }

    function Pt(n, i, r, o) {
        i = g.apply([], i);
        var t, e, s, a, l, u, c = 0,
            h = n.length,
            d = h - 1,
            p = i[0],
            f = y(p);
        if (f || 1 < h && "string" == typeof p && !v.checkClone && Dt.test(p)) return n.each(function (t) {
            var e = n.eq(t);
            f && (i[0] = p.call(this, t, e.html())), Pt(e, i, r, o)
        });
        if (h && (e = (t = vt(i, n[0].ownerDocument, !1, n, o)).firstChild, 1 === t.childNodes.length && (t = e), e || o)) {
            for (a = (s = T.map(dt(t, "script"), It)).length; c < h; c++) l = t, c !== d && (l = T.clone(l, !0, !0), a && T.merge(s, dt(l, "script"))), r.call(n[c], l, c);
            if (a)
                for (u = s[s.length - 1].ownerDocument, T.map(s, jt), c = 0; c < a; c++) l = s[c], ct.test(l.type || "") && !X.access(l, "globalEval") && T.contains(u, l) && (l.src && "module" !== (l.type || "").toLowerCase() ? T._evalUrl && T._evalUrl(l.src) : x(l.textContent.replace(At, ""), u, l))
        }
        return n
    }

    function Ot(t, e, n) {
        for (var i, r = e ? T.filter(e, t) : t, o = 0; null != (i = r[o]); o++) n || 1 !== i.nodeType || T.cleanData(dt(i)), i.parentNode && (n && T.contains(i.ownerDocument, i) && pt(dt(i, "script")), i.parentNode.removeChild(i));
        return t
    }
    T.extend({
        htmlPrefilter: function (t) {
            return t.replace($t, "<$1></$2>")
        },
        clone: function (t, e, n) {
            var i, r, o, s, a, l, u, c = t.cloneNode(!0),
                h = T.contains(t.ownerDocument, t);
            if (!(v.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || T.isXMLDoc(t)))
                for (s = dt(c), i = 0, r = (o = dt(t)).length; i < r; i++) a = o[i], l = s[i], void 0, "input" === (u = l.nodeName.toLowerCase()) && lt.test(a.type) ? l.checked = a.checked : "input" !== u && "textarea" !== u || (l.defaultValue = a.defaultValue);
            if (e)
                if (n)
                    for (o = o || dt(t), s = s || dt(c), i = 0, r = o.length; i < r; i++) Nt(o[i], s[i]);
                else Nt(t, c);
            return 0 < (s = dt(c, "script")).length && pt(s, !h && dt(t, "script")), c
        },
        cleanData: function (t) {
            for (var e, n, i, r = T.event.special, o = 0; void 0 !== (n = t[o]); o++)
                if (V(n)) {
                    if (e = n[X.expando]) {
                        if (e.events)
                            for (i in e.events) r[i] ? T.event.remove(n, i) : T.removeEvent(n, i, e.handle);
                        n[X.expando] = void 0
                    }
                    n[Q.expando] && (n[Q.expando] = void 0)
                }
        }
    }), T.fn.extend({
        detach: function (t) {
            return Ot(this, t, !0)
        },
        remove: function (t) {
            return Ot(this, t)
        },
        text: function (t) {
            return W(this, function (t) {
                return void 0 === t ? T.text(this) : this.empty().each(function () {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = t)
                })
            }, null, t, arguments.length)
        },
        append: function () {
            return Pt(this, arguments, function (t) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || St(this, t).appendChild(t)
            })
        },
        prepend: function () {
            return Pt(this, arguments, function (t) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var e = St(this, t);
                    e.insertBefore(t, e.firstChild)
                }
            })
        },
        before: function () {
            return Pt(this, arguments, function (t) {
                this.parentNode && this.parentNode.insertBefore(t, this)
            })
        },
        after: function () {
            return Pt(this, arguments, function (t) {
                this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
            })
        },
        empty: function () {
            for (var t, e = 0; null != (t = this[e]); e++) 1 === t.nodeType && (T.cleanData(dt(t, !1)), t.textContent = "");
            return this
        },
        clone: function (t, e) {
            return t = null != t && t, e = null == e ? t : e, this.map(function () {
                return T.clone(this, t, e)
            })
        },
        html: function (t) {
            return W(this, function (t) {
                var e = this[0] || {},
                    n = 0,
                    i = this.length;
                if (void 0 === t && 1 === e.nodeType) return e.innerHTML;
                if ("string" == typeof t && !Et.test(t) && !ht[(ut.exec(t) || ["", ""])[1].toLowerCase()]) {
                    t = T.htmlPrefilter(t);
                    try {
                        for (; n < i; n++) 1 === (e = this[n] || {}).nodeType && (T.cleanData(dt(e, !1)), e.innerHTML = t);
                        e = 0
                    } catch (t) {}
                }
                e && this.empty().append(t)
            }, null, t, arguments.length)
        },
        replaceWith: function () {
            var n = [];
            return Pt(this, arguments, function (t) {
                var e = this.parentNode;
                T.inArray(this, n) < 0 && (T.cleanData(dt(this)), e && e.replaceChild(t, this))
            }, n)
        }
    }), T.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (t, s) {
        T.fn[t] = function (t) {
            for (var e, n = [], i = T(t), r = i.length - 1, o = 0; o <= r; o++) e = o === r ? this : this.clone(!0), T(i[o])[s](e), l.apply(n, e.get());
            return this.pushStack(n)
        }
    });
    var Lt = new RegExp("^(" + tt + ")(?!px)[a-z%]+$", "i"),
        Mt = function (t) {
            var e = t.ownerDocument.defaultView;
            return e && e.opener || (e = k), e.getComputedStyle(t)
        },
        zt = new RegExp(nt.join("|"), "i");

    function Ht(t, e, n) {
        var i, r, o, s, a = t.style;
        return (n = n || Mt(t)) && ("" !== (s = n.getPropertyValue(e) || n[e]) || T.contains(t.ownerDocument, t) || (s = T.style(t, e)), !v.pixelBoxStyles() && Lt.test(s) && zt.test(e) && (i = a.width, r = a.minWidth, o = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = i, a.minWidth = r, a.maxWidth = o)), void 0 !== s ? s + "" : s
    }

    function qt(t, e) {
        return {
            get: function () {
                if (!t()) return (this.get = e).apply(this, arguments);
                delete this.get
            }
        }
    }! function () {
        function t() {
            if (l) {
                a.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", l.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", yt.appendChild(a).appendChild(l);
                var t = k.getComputedStyle(l);
                n = "1%" !== t.top, s = 12 === e(t.marginLeft), l.style.right = "60%", o = 36 === e(t.right), i = 36 === e(t.width), l.style.position = "absolute", r = 36 === l.offsetWidth || "absolute", yt.removeChild(a), l = null
            }
        }

        function e(t) {
            return Math.round(parseFloat(t))
        }
        var n, i, r, o, s, a = C.createElement("div"),
            l = C.createElement("div");
        l.style && (l.style.backgroundClip = "content-box", l.cloneNode(!0).style.backgroundClip = "", v.clearCloneStyle = "content-box" === l.style.backgroundClip, T.extend(v, {
            boxSizingReliable: function () {
                return t(), i
            },
            pixelBoxStyles: function () {
                return t(), o
            },
            pixelPosition: function () {
                return t(), n
            },
            reliableMarginLeft: function () {
                return t(), s
            },
            scrollboxSize: function () {
                return t(), r
            }
        }))
    }();
    var Rt = /^(none|table(?!-c[ea]).+)/,
        Wt = /^--/,
        Bt = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Ft = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        Gt = ["Webkit", "Moz", "ms"],
        Ut = C.createElement("div").style;

    function Vt(t) {
        var e = T.cssProps[t];
        return e || (e = T.cssProps[t] = function (t) {
            if (t in Ut) return t;
            for (var e = t[0].toUpperCase() + t.slice(1), n = Gt.length; n--;)
                if ((t = Gt[n] + e) in Ut) return t
        }(t) || t), e
    }

    function Kt(t, e, n) {
        var i = et.exec(e);
        return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : e
    }

    function Xt(t, e, n, i, r, o) {
        var s = "width" === e ? 1 : 0,
            a = 0,
            l = 0;
        if (n === (i ? "border" : "content")) return 0;
        for (; s < 4; s += 2) "margin" === n && (l += T.css(t, n + nt[s], !0, r)), i ? ("content" === n && (l -= T.css(t, "padding" + nt[s], !0, r)), "margin" !== n && (l -= T.css(t, "border" + nt[s] + "Width", !0, r))) : (l += T.css(t, "padding" + nt[s], !0, r), "padding" !== n ? l += T.css(t, "border" + nt[s] + "Width", !0, r) : a += T.css(t, "border" + nt[s] + "Width", !0, r));
        return !i && 0 <= o && (l += Math.max(0, Math.ceil(t["offset" + e[0].toUpperCase() + e.slice(1)] - o - l - a - .5))), l
    }

    function Qt(t, e, n) {
        var i = Mt(t),
            r = Ht(t, e, i),
            o = "border-box" === T.css(t, "boxSizing", !1, i),
            s = o;
        if (Lt.test(r)) {
            if (!n) return r;
            r = "auto"
        }
        return s = s && (v.boxSizingReliable() || r === t.style[e]), ("auto" === r || !parseFloat(r) && "inline" === T.css(t, "display", !1, i)) && (r = t["offset" + e[0].toUpperCase() + e.slice(1)], s = !0), (r = parseFloat(r) || 0) + Xt(t, e, n || (o ? "border" : "content"), s, i, r) + "px"
    }

    function Zt(t, e, n, i, r) {
        return new Zt.prototype.init(t, e, n, i, r)
    }
    T.extend({
        cssHooks: {
            opacity: {
                get: function (t, e) {
                    if (e) {
                        var n = Ht(t, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {},
        style: function (t, e, n, i) {
            if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                var r, o, s, a = U(e),
                    l = Wt.test(e),
                    u = t.style;
                if (l || (e = Vt(a)), s = T.cssHooks[e] || T.cssHooks[a], void 0 === n) return s && "get" in s && void 0 !== (r = s.get(t, !1, i)) ? r : u[e];
                "string" == (o = typeof n) && (r = et.exec(n)) && r[1] && (n = ot(t, e, r), o = "number"), null != n && n == n && ("number" === o && (n += r && r[3] || (T.cssNumber[a] ? "" : "px")), v.clearCloneStyle || "" !== n || 0 !== e.indexOf("background") || (u[e] = "inherit"), s && "set" in s && void 0 === (n = s.set(t, n, i)) || (l ? u.setProperty(e, n) : u[e] = n))
            }
        },
        css: function (t, e, n, i) {
            var r, o, s, a = U(e);
            return Wt.test(e) || (e = Vt(a)), (s = T.cssHooks[e] || T.cssHooks[a]) && "get" in s && (r = s.get(t, !0, n)), void 0 === r && (r = Ht(t, e, i)), "normal" === r && e in Ft && (r = Ft[e]), "" === n || n ? (o = parseFloat(r), !0 === n || isFinite(o) ? o || 0 : r) : r
        }
    }), T.each(["height", "width"], function (t, a) {
        T.cssHooks[a] = {
            get: function (t, e, n) {
                if (e) return !Rt.test(T.css(t, "display")) || t.getClientRects().length && t.getBoundingClientRect().width ? Qt(t, a, n) : rt(t, Bt, function () {
                    return Qt(t, a, n)
                })
            },
            set: function (t, e, n) {
                var i, r = Mt(t),
                    o = "border-box" === T.css(t, "boxSizing", !1, r),
                    s = n && Xt(t, a, n, o, r);
                return o && v.scrollboxSize() === r.position && (s -= Math.ceil(t["offset" + a[0].toUpperCase() + a.slice(1)] - parseFloat(r[a]) - Xt(t, a, "border", !1, r) - .5)), s && (i = et.exec(e)) && "px" !== (i[3] || "px") && (t.style[a] = e, e = T.css(t, a)), Kt(0, e, s)
            }
        }
    }), T.cssHooks.marginLeft = qt(v.reliableMarginLeft, function (t, e) {
        if (e) return (parseFloat(Ht(t, "marginLeft")) || t.getBoundingClientRect().left - rt(t, {
            marginLeft: 0
        }, function () {
            return t.getBoundingClientRect().left
        })) + "px"
    }), T.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function (r, o) {
        T.cssHooks[r + o] = {
            expand: function (t) {
                for (var e = 0, n = {}, i = "string" == typeof t ? t.split(" ") : [t]; e < 4; e++) n[r + nt[e] + o] = i[e] || i[e - 2] || i[0];
                return n
            }
        }, "margin" !== r && (T.cssHooks[r + o].set = Kt)
    }), T.fn.extend({
        css: function (t, e) {
            return W(this, function (t, e, n) {
                var i, r, o = {},
                    s = 0;
                if (Array.isArray(e)) {
                    for (i = Mt(t), r = e.length; s < r; s++) o[e[s]] = T.css(t, e[s], !1, i);
                    return o
                }
                return void 0 !== n ? T.style(t, e, n) : T.css(t, e)
            }, t, e, 1 < arguments.length)
        }
    }), ((T.Tween = Zt).prototype = {
        constructor: Zt,
        init: function (t, e, n, i, r, o) {
            this.elem = t, this.prop = n, this.easing = r || T.easing._default, this.options = e, this.start = this.now = this.cur(), this.end = i, this.unit = o || (T.cssNumber[n] ? "" : "px")
        },
        cur: function () {
            var t = Zt.propHooks[this.prop];
            return t && t.get ? t.get(this) : Zt.propHooks._default.get(this)
        },
        run: function (t) {
            var e, n = Zt.propHooks[this.prop];
            return this.options.duration ? this.pos = e = T.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : Zt.propHooks._default.set(this), this
        }
    }).init.prototype = Zt.prototype, (Zt.propHooks = {
        _default: {
            get: function (t) {
                var e;
                return 1 !== t.elem.nodeType || null != t.elem[t.prop] && null == t.elem.style[t.prop] ? t.elem[t.prop] : (e = T.css(t.elem, t.prop, "")) && "auto" !== e ? e : 0
            },
            set: function (t) {
                T.fx.step[t.prop] ? T.fx.step[t.prop](t) : 1 !== t.elem.nodeType || null == t.elem.style[T.cssProps[t.prop]] && !T.cssHooks[t.prop] ? t.elem[t.prop] = t.now : T.style(t.elem, t.prop, t.now + t.unit)
            }
        }
    }).scrollTop = Zt.propHooks.scrollLeft = {
        set: function (t) {
            t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
        }
    }, T.easing = {
        linear: function (t) {
            return t
        },
        swing: function (t) {
            return .5 - Math.cos(t * Math.PI) / 2
        },
        _default: "swing"
    }, T.fx = Zt.prototype.init, T.fx.step = {};
    var Yt, Jt, te, ee, ne = /^(?:toggle|show|hide)$/,
        ie = /queueHooks$/;

    function re() {
        Jt && (!1 === C.hidden && k.requestAnimationFrame ? k.requestAnimationFrame(re) : k.setTimeout(re, T.fx.interval), T.fx.tick())
    }

    function oe() {
        return k.setTimeout(function () {
            Yt = void 0
        }), Yt = Date.now()
    }

    function se(t, e) {
        var n, i = 0,
            r = {
                height: t
            };
        for (e = e ? 1 : 0; i < 4; i += 2 - e) r["margin" + (n = nt[i])] = r["padding" + n] = t;
        return e && (r.opacity = r.width = t), r
    }

    function ae(t, e, n) {
        for (var i, r = (le.tweeners[e] || []).concat(le.tweeners["*"]), o = 0, s = r.length; o < s; o++)
            if (i = r[o].call(n, e, t)) return i
    }

    function le(o, t, e) {
        var n, s, i = 0,
            r = le.prefilters.length,
            a = T.Deferred().always(function () {
                delete l.elem
            }),
            l = function () {
                if (s) return !1;
                for (var t = Yt || oe(), e = Math.max(0, u.startTime + u.duration - t), n = 1 - (e / u.duration || 0), i = 0, r = u.tweens.length; i < r; i++) u.tweens[i].run(n);
                return a.notifyWith(o, [u, n, e]), n < 1 && r ? e : (r || a.notifyWith(o, [u, 1, 0]), a.resolveWith(o, [u]), !1)
            },
            u = a.promise({
                elem: o,
                props: T.extend({}, t),
                opts: T.extend(!0, {
                    specialEasing: {},
                    easing: T.easing._default
                }, e),
                originalProperties: t,
                originalOptions: e,
                startTime: Yt || oe(),
                duration: e.duration,
                tweens: [],
                createTween: function (t, e) {
                    var n = T.Tween(o, u.opts, t, e, u.opts.specialEasing[t] || u.opts.easing);
                    return u.tweens.push(n), n
                },
                stop: function (t) {
                    var e = 0,
                        n = t ? u.tweens.length : 0;
                    if (s) return this;
                    for (s = !0; e < n; e++) u.tweens[e].run(1);
                    return t ? (a.notifyWith(o, [u, 1, 0]), a.resolveWith(o, [u, t])) : a.rejectWith(o, [u, t]), this
                }
            }),
            c = u.props;
        for (function (t, e) {
                var n, i, r, o, s;
                for (n in t)
                    if (r = e[i = U(n)], o = t[n], Array.isArray(o) && (r = o[1], o = t[n] = o[0]), n !== i && (t[i] = o, delete t[n]), (s = T.cssHooks[i]) && "expand" in s)
                        for (n in o = s.expand(o), delete t[i], o) n in t || (t[n] = o[n], e[n] = r);
                    else e[i] = r
            }(c, u.opts.specialEasing); i < r; i++)
            if (n = le.prefilters[i].call(u, o, c, u.opts)) return y(n.stop) && (T._queueHooks(u.elem, u.opts.queue).stop = n.stop.bind(n)), n;
        return T.map(c, ae, u), y(u.opts.start) && u.opts.start.call(o, u), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always), T.fx.timer(T.extend(l, {
            elem: o,
            anim: u,
            queue: u.opts.queue
        })), u
    }
    T.Animation = T.extend(le, {
        tweeners: {
            "*": [function (t, e) {
                var n = this.createTween(t, e);
                return ot(n.elem, t, et.exec(e), n), n
            }]
        },
        tweener: function (t, e) {
            for (var n, i = 0, r = (t = y(t) ? (e = t, ["*"]) : t.match(O)).length; i < r; i++) n = t[i], le.tweeners[n] = le.tweeners[n] || [], le.tweeners[n].unshift(e)
        },
        prefilters: [function (t, e, n) {
            var i, r, o, s, a, l, u, c, h = "width" in e || "height" in e,
                d = this,
                p = {},
                f = t.style,
                g = t.nodeType && it(t),
                m = X.get(t, "fxshow");
            for (i in n.queue || (null == (s = T._queueHooks(t, "fx")).unqueued && (s.unqueued = 0, a = s.empty.fire, s.empty.fire = function () {
                    s.unqueued || a()
                }), s.unqueued++, d.always(function () {
                    d.always(function () {
                        s.unqueued--, T.queue(t, "fx").length || s.empty.fire()
                    })
                })), e)
                if (r = e[i], ne.test(r)) {
                    if (delete e[i], o = o || "toggle" === r, r === (g ? "hide" : "show")) {
                        if ("show" !== r || !m || void 0 === m[i]) continue;
                        g = !0
                    }
                    p[i] = m && m[i] || T.style(t, i)
                } if ((l = !T.isEmptyObject(e)) || !T.isEmptyObject(p))
                for (i in h && 1 === t.nodeType && (n.overflow = [f.overflow, f.overflowX, f.overflowY], null == (u = m && m.display) && (u = X.get(t, "display")), "none" === (c = T.css(t, "display")) && (u ? c = u : (at([t], !0), u = t.style.display || u, c = T.css(t, "display"), at([t]))), ("inline" === c || "inline-block" === c && null != u) && "none" === T.css(t, "float") && (l || (d.done(function () {
                        f.display = u
                    }), null == u && (c = f.display, u = "none" === c ? "" : c)), f.display = "inline-block")), n.overflow && (f.overflow = "hidden", d.always(function () {
                        f.overflow = n.overflow[0], f.overflowX = n.overflow[1], f.overflowY = n.overflow[2]
                    })), l = !1, p) l || (m ? "hidden" in m && (g = m.hidden) : m = X.access(t, "fxshow", {
                    display: u
                }), o && (m.hidden = !g), g && at([t], !0), d.done(function () {
                    for (i in g || at([t]), X.remove(t, "fxshow"), p) T.style(t, i, p[i])
                })), l = ae(g ? m[i] : 0, i, d), i in m || (m[i] = l.start, g && (l.end = l.start, l.start = 0))
        }],
        prefilter: function (t, e) {
            e ? le.prefilters.unshift(t) : le.prefilters.push(t)
        }
    }), T.speed = function (t, e, n) {
        var i = t && "object" == typeof t ? T.extend({}, t) : {
            complete: n || !n && e || y(t) && t,
            duration: t,
            easing: n && e || e && !y(e) && e
        };
        return T.fx.off ? i.duration = 0 : "number" != typeof i.duration && (i.duration in T.fx.speeds ? i.duration = T.fx.speeds[i.duration] : i.duration = T.fx.speeds._default), null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function () {
            y(i.old) && i.old.call(this), i.queue && T.dequeue(this, i.queue)
        }, i
    }, T.fn.extend({
        fadeTo: function (t, e, n, i) {
            return this.filter(it).css("opacity", 0).show().end().animate({
                opacity: e
            }, t, n, i)
        },
        animate: function (e, t, n, i) {
            var r = T.isEmptyObject(e),
                o = T.speed(t, n, i),
                s = function () {
                    var t = le(this, T.extend({}, e), o);
                    (r || X.get(this, "finish")) && t.stop(!0)
                };
            return s.finish = s, r || !1 === o.queue ? this.each(s) : this.queue(o.queue, s)
        },
        stop: function (r, t, o) {
            var s = function (t) {
                var e = t.stop;
                delete t.stop, e(o)
            };
            return "string" != typeof r && (o = t, t = r, r = void 0), t && !1 !== r && this.queue(r || "fx", []), this.each(function () {
                var t = !0,
                    e = null != r && r + "queueHooks",
                    n = T.timers,
                    i = X.get(this);
                if (e) i[e] && i[e].stop && s(i[e]);
                else
                    for (e in i) i[e] && i[e].stop && ie.test(e) && s(i[e]);
                for (e = n.length; e--;) n[e].elem !== this || null != r && n[e].queue !== r || (n[e].anim.stop(o), t = !1, n.splice(e, 1));
                !t && o || T.dequeue(this, r)
            })
        },
        finish: function (s) {
            return !1 !== s && (s = s || "fx"), this.each(function () {
                var t, e = X.get(this),
                    n = e[s + "queue"],
                    i = e[s + "queueHooks"],
                    r = T.timers,
                    o = n ? n.length : 0;
                for (e.finish = !0, T.queue(this, s, []), i && i.stop && i.stop.call(this, !0), t = r.length; t--;) r[t].elem === this && r[t].queue === s && (r[t].anim.stop(!0), r.splice(t, 1));
                for (t = 0; t < o; t++) n[t] && n[t].finish && n[t].finish.call(this);
                delete e.finish
            })
        }
    }), T.each(["toggle", "show", "hide"], function (t, i) {
        var r = T.fn[i];
        T.fn[i] = function (t, e, n) {
            return null == t || "boolean" == typeof t ? r.apply(this, arguments) : this.animate(se(i, !0), t, e, n)
        }
    }), T.each({
        slideDown: se("show"),
        slideUp: se("hide"),
        slideToggle: se("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function (t, i) {
        T.fn[t] = function (t, e, n) {
            return this.animate(i, t, e, n)
        }
    }), T.timers = [], T.fx.tick = function () {
        var t, e = 0,
            n = T.timers;
        for (Yt = Date.now(); e < n.length; e++)(t = n[e])() || n[e] !== t || n.splice(e--, 1);
        n.length || T.fx.stop(), Yt = void 0
    }, T.fx.timer = function (t) {
        T.timers.push(t), T.fx.start()
    }, T.fx.interval = 13, T.fx.start = function () {
        Jt || (Jt = !0, re())
    }, T.fx.stop = function () {
        Jt = null
    }, T.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, T.fn.delay = function (i, t) {
        return i = T.fx && T.fx.speeds[i] || i, t = t || "fx", this.queue(t, function (t, e) {
            var n = k.setTimeout(t, i);
            e.stop = function () {
                k.clearTimeout(n)
            }
        })
    }, te = C.createElement("input"), ee = C.createElement("select").appendChild(C.createElement("option")), te.type = "checkbox", v.checkOn = "" !== te.value, v.optSelected = ee.selected, (te = C.createElement("input")).value = "t", te.type = "radio", v.radioValue = "t" === te.value;
    var ue, ce = T.expr.attrHandle;
    T.fn.extend({
        attr: function (t, e) {
            return W(this, T.attr, t, e, 1 < arguments.length)
        },
        removeAttr: function (t) {
            return this.each(function () {
                T.removeAttr(this, t)
            })
        }
    }), T.extend({
        attr: function (t, e, n) {
            var i, r, o = t.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return void 0 === t.getAttribute ? T.prop(t, e, n) : (1 === o && T.isXMLDoc(t) || (r = T.attrHooks[e.toLowerCase()] || (T.expr.match.bool.test(e) ? ue : void 0)), void 0 !== n ? null === n ? void T.removeAttr(t, e) : r && "set" in r && void 0 !== (i = r.set(t, n, e)) ? i : (t.setAttribute(e, n + ""), n) : r && "get" in r && null !== (i = r.get(t, e)) ? i : null == (i = T.find.attr(t, e)) ? void 0 : i)
        },
        attrHooks: {
            type: {
                set: function (t, e) {
                    if (!v.radioValue && "radio" === e && E(t, "input")) {
                        var n = t.value;
                        return t.setAttribute("type", e), n && (t.value = n), e
                    }
                }
            }
        },
        removeAttr: function (t, e) {
            var n, i = 0,
                r = e && e.match(O);
            if (r && 1 === t.nodeType)
                for (; n = r[i++];) t.removeAttribute(n)
        }
    }), ue = {
        set: function (t, e, n) {
            return !1 === e ? T.removeAttr(t, n) : t.setAttribute(n, n), n
        }
    }, T.each(T.expr.match.bool.source.match(/\w+/g), function (t, e) {
        var s = ce[e] || T.find.attr;
        ce[e] = function (t, e, n) {
            var i, r, o = e.toLowerCase();
            return n || (r = ce[o], ce[o] = i, i = null != s(t, e, n) ? o : null, ce[o] = r), i
        }
    });
    var he = /^(?:input|select|textarea|button)$/i,
        de = /^(?:a|area)$/i;

    function pe(t) {
        return (t.match(O) || []).join(" ")
    }

    function fe(t) {
        return t.getAttribute && t.getAttribute("class") || ""
    }

    function ge(t) {
        return Array.isArray(t) ? t : "string" == typeof t && t.match(O) || []
    }
    T.fn.extend({
        prop: function (t, e) {
            return W(this, T.prop, t, e, 1 < arguments.length)
        },
        removeProp: function (t) {
            return this.each(function () {
                delete this[T.propFix[t] || t]
            })
        }
    }), T.extend({
        prop: function (t, e, n) {
            var i, r, o = t.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return 1 === o && T.isXMLDoc(t) || (e = T.propFix[e] || e, r = T.propHooks[e]), void 0 !== n ? r && "set" in r && void 0 !== (i = r.set(t, n, e)) ? i : t[e] = n : r && "get" in r && null !== (i = r.get(t, e)) ? i : t[e]
        },
        propHooks: {
            tabIndex: {
                get: function (t) {
                    var e = T.find.attr(t, "tabindex");
                    return e ? parseInt(e, 10) : he.test(t.nodeName) || de.test(t.nodeName) && t.href ? 0 : -1
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        }
    }), v.optSelected || (T.propHooks.selected = {
        get: function (t) {
            var e = t.parentNode;
            return e && e.parentNode && e.parentNode.selectedIndex, null
        },
        set: function (t) {
            var e = t.parentNode;
            e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex)
        }
    }), T.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        T.propFix[this.toLowerCase()] = this
    }), T.fn.extend({
        addClass: function (e) {
            var t, n, i, r, o, s, a, l = 0;
            if (y(e)) return this.each(function (t) {
                T(this).addClass(e.call(this, t, fe(this)))
            });
            if ((t = ge(e)).length)
                for (; n = this[l++];)
                    if (r = fe(n), i = 1 === n.nodeType && " " + pe(r) + " ") {
                        for (s = 0; o = t[s++];) i.indexOf(" " + o + " ") < 0 && (i += o + " ");
                        r !== (a = pe(i)) && n.setAttribute("class", a)
                    } return this
        },
        removeClass: function (e) {
            var t, n, i, r, o, s, a, l = 0;
            if (y(e)) return this.each(function (t) {
                T(this).removeClass(e.call(this, t, fe(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ((t = ge(e)).length)
                for (; n = this[l++];)
                    if (r = fe(n), i = 1 === n.nodeType && " " + pe(r) + " ") {
                        for (s = 0; o = t[s++];)
                            for (; - 1 < i.indexOf(" " + o + " ");) i = i.replace(" " + o + " ", " ");
                        r !== (a = pe(i)) && n.setAttribute("class", a)
                    } return this
        },
        toggleClass: function (r, e) {
            var o = typeof r,
                s = "string" === o || Array.isArray(r);
            return "boolean" == typeof e && s ? e ? this.addClass(r) : this.removeClass(r) : y(r) ? this.each(function (t) {
                T(this).toggleClass(r.call(this, t, fe(this), e), e)
            }) : this.each(function () {
                var t, e, n, i;
                if (s)
                    for (e = 0, n = T(this), i = ge(r); t = i[e++];) n.hasClass(t) ? n.removeClass(t) : n.addClass(t);
                else void 0 !== r && "boolean" !== o || ((t = fe(this)) && X.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === r ? "" : X.get(this, "__className__") || ""))
            })
        },
        hasClass: function (t) {
            var e, n, i = 0;
            for (e = " " + t + " "; n = this[i++];)
                if (1 === n.nodeType && -1 < (" " + pe(fe(n)) + " ").indexOf(e)) return !0;
            return !1
        }
    });
    var me = /\r/g;
    T.fn.extend({
        val: function (n) {
            var i, t, r, e = this[0];
            return arguments.length ? (r = y(n), this.each(function (t) {
                var e;
                1 === this.nodeType && (null == (e = r ? n.call(this, t, T(this).val()) : n) ? e = "" : "number" == typeof e ? e += "" : Array.isArray(e) && (e = T.map(e, function (t) {
                    return null == t ? "" : t + ""
                })), (i = T.valHooks[this.type] || T.valHooks[this.nodeName.toLowerCase()]) && "set" in i && void 0 !== i.set(this, e, "value") || (this.value = e))
            })) : e ? (i = T.valHooks[e.type] || T.valHooks[e.nodeName.toLowerCase()]) && "get" in i && void 0 !== (t = i.get(e, "value")) ? t : "string" == typeof (t = e.value) ? t.replace(me, "") : null == t ? "" : t : void 0
        }
    }), T.extend({
        valHooks: {
            option: {
                get: function (t) {
                    var e = T.find.attr(t, "value");
                    return null != e ? e : pe(T.text(t))
                }
            },
            select: {
                get: function (t) {
                    var e, n, i, r = t.options,
                        o = t.selectedIndex,
                        s = "select-one" === t.type,
                        a = s ? null : [],
                        l = s ? o + 1 : r.length;
                    for (i = o < 0 ? l : s ? o : 0; i < l; i++)
                        if (((n = r[i]).selected || i === o) && !n.disabled && (!n.parentNode.disabled || !E(n.parentNode, "optgroup"))) {
                            if (e = T(n).val(), s) return e;
                            a.push(e)
                        } return a
                },
                set: function (t, e) {
                    for (var n, i, r = t.options, o = T.makeArray(e), s = r.length; s--;)((i = r[s]).selected = -1 < T.inArray(T.valHooks.option.get(i), o)) && (n = !0);
                    return n || (t.selectedIndex = -1), o
                }
            }
        }
    }), T.each(["radio", "checkbox"], function () {
        T.valHooks[this] = {
            set: function (t, e) {
                if (Array.isArray(e)) return t.checked = -1 < T.inArray(T(t).val(), e)
            }
        }, v.checkOn || (T.valHooks[this].get = function (t) {
            return null === t.getAttribute("value") ? "on" : t.value
        })
    }), v.focusin = "onfocusin" in k;
    var ve = /^(?:focusinfocus|focusoutblur)$/,
        ye = function (t) {
            t.stopPropagation()
        };
    T.extend(T.event, {
        trigger: function (t, e, n, i) {
            var r, o, s, a, l, u, c, h, d = [n || C],
                p = m.call(t, "type") ? t.type : t,
                f = m.call(t, "namespace") ? t.namespace.split(".") : [];
            if (o = h = s = n = n || C, 3 !== n.nodeType && 8 !== n.nodeType && !ve.test(p + T.event.triggered) && (-1 < p.indexOf(".") && (p = (f = p.split(".")).shift(), f.sort()), l = p.indexOf(":") < 0 && "on" + p, (t = t[T.expando] ? t : new T.Event(p, "object" == typeof t && t)).isTrigger = i ? 2 : 3, t.namespace = f.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = n), e = null == e ? [t] : T.makeArray(e, [t]), c = T.event.special[p] || {}, i || !c.trigger || !1 !== c.trigger.apply(n, e))) {
                if (!i && !c.noBubble && !b(n)) {
                    for (a = c.delegateType || p, ve.test(a + p) || (o = o.parentNode); o; o = o.parentNode) d.push(o), s = o;
                    s === (n.ownerDocument || C) && d.push(s.defaultView || s.parentWindow || k)
                }
                for (r = 0;
                    (o = d[r++]) && !t.isPropagationStopped();) h = o, t.type = 1 < r ? a : c.bindType || p, (u = (X.get(o, "events") || {})[t.type] && X.get(o, "handle")) && u.apply(o, e), (u = l && o[l]) && u.apply && V(o) && (t.result = u.apply(o, e), !1 === t.result && t.preventDefault());
                return t.type = p, i || t.isDefaultPrevented() || c._default && !1 !== c._default.apply(d.pop(), e) || !V(n) || l && y(n[p]) && !b(n) && ((s = n[l]) && (n[l] = null), T.event.triggered = p, t.isPropagationStopped() && h.addEventListener(p, ye), n[p](), t.isPropagationStopped() && h.removeEventListener(p, ye), T.event.triggered = void 0, s && (n[l] = s)), t.result
            }
        },
        simulate: function (t, e, n) {
            var i = T.extend(new T.Event, n, {
                type: t,
                isSimulated: !0
            });
            T.event.trigger(i, null, e)
        }
    }), T.fn.extend({
        trigger: function (t, e) {
            return this.each(function () {
                T.event.trigger(t, e, this)
            })
        },
        triggerHandler: function (t, e) {
            var n = this[0];
            if (n) return T.event.trigger(t, e, n, !0)
        }
    }), v.focusin || T.each({
        focus: "focusin",
        blur: "focusout"
    }, function (n, i) {
        var r = function (t) {
            T.event.simulate(i, t.target, T.event.fix(t))
        };
        T.event.special[i] = {
            setup: function () {
                var t = this.ownerDocument || this,
                    e = X.access(t, i);
                e || t.addEventListener(n, r, !0), X.access(t, i, (e || 0) + 1)
            },
            teardown: function () {
                var t = this.ownerDocument || this,
                    e = X.access(t, i) - 1;
                e ? X.access(t, i, e) : (t.removeEventListener(n, r, !0), X.remove(t, i))
            }
        }
    });
    var be = k.location,
        xe = Date.now(),
        we = /\?/;
    T.parseXML = function (t) {
        var e;
        if (!t || "string" != typeof t) return null;
        try {
            e = (new k.DOMParser).parseFromString(t, "text/xml")
        } catch (t) {
            e = void 0
        }
        return e && !e.getElementsByTagName("parsererror").length || T.error("Invalid XML: " + t), e
    };
    var _e = /\[\]$/,
        ke = /\r?\n/g,
        Ce = /^(?:submit|button|image|reset|file)$/i,
        Te = /^(?:input|select|textarea|keygen)/i;

    function $e(n, t, i, r) {
        var e;
        if (Array.isArray(t)) T.each(t, function (t, e) {
            i || _e.test(n) ? r(n, e) : $e(n + "[" + ("object" == typeof e && null != e ? t : "") + "]", e, i, r)
        });
        else if (i || "object" !== w(t)) r(n, t);
        else
            for (e in t) $e(n + "[" + e + "]", t[e], i, r)
    }
    T.param = function (t, e) {
        var n, i = [],
            r = function (t, e) {
                var n = y(e) ? e() : e;
                i[i.length] = encodeURIComponent(t) + "=" + encodeURIComponent(null == n ? "" : n)
            };
        if (Array.isArray(t) || t.jquery && !T.isPlainObject(t)) T.each(t, function () {
            r(this.name, this.value)
        });
        else
            for (n in t) $e(n, t[n], e, r);
        return i.join("&")
    }, T.fn.extend({
        serialize: function () {
            return T.param(this.serializeArray())
        },
        serializeArray: function () {
            return this.map(function () {
                var t = T.prop(this, "elements");
                return t ? T.makeArray(t) : this
            }).filter(function () {
                var t = this.type;
                return this.name && !T(this).is(":disabled") && Te.test(this.nodeName) && !Ce.test(t) && (this.checked || !lt.test(t))
            }).map(function (t, e) {
                var n = T(this).val();
                return null == n ? null : Array.isArray(n) ? T.map(n, function (t) {
                    return {
                        name: e.name,
                        value: t.replace(ke, "\r\n")
                    }
                }) : {
                    name: e.name,
                    value: n.replace(ke, "\r\n")
                }
            }).get()
        }
    });
    var Ee = /%20/g,
        De = /#.*$/,
        Ae = /([?&])_=[^&]*/,
        Se = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Ie = /^(?:GET|HEAD)$/,
        je = /^\/\//,
        Ne = {},
        Pe = {},
        Oe = "*/".concat("*"),
        Le = C.createElement("a");

    function Me(o) {
        return function (t, e) {
            "string" != typeof t && (e = t, t = "*");
            var n, i = 0,
                r = t.toLowerCase().match(O) || [];
            if (y(e))
                for (; n = r[i++];) "+" === n[0] ? (n = n.slice(1) || "*", (o[n] = o[n] || []).unshift(e)) : (o[n] = o[n] || []).push(e)
        }
    }

    function ze(e, r, o, s) {
        var a = {},
            l = e === Pe;

        function u(t) {
            var i;
            return a[t] = !0, T.each(e[t] || [], function (t, e) {
                var n = e(r, o, s);
                return "string" != typeof n || l || a[n] ? l ? !(i = n) : void 0 : (r.dataTypes.unshift(n), u(n), !1)
            }), i
        }
        return u(r.dataTypes[0]) || !a["*"] && u("*")
    }

    function He(t, e) {
        var n, i, r = T.ajaxSettings.flatOptions || {};
        for (n in e) void 0 !== e[n] && ((r[n] ? t : i || (i = {}))[n] = e[n]);
        return i && T.extend(!0, t, i), t
    }
    Le.href = be.href, T.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: be.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(be.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Oe,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": T.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function (t, e) {
            return e ? He(He(t, T.ajaxSettings), e) : He(T.ajaxSettings, t)
        },
        ajaxPrefilter: Me(Ne),
        ajaxTransport: Me(Pe),
        ajax: function (t, e) {
            "object" == typeof t && (e = t, t = void 0), e = e || {};
            var c, h, d, n, p, i, f, g, r, o, m = T.ajaxSetup({}, e),
                v = m.context || m,
                y = m.context && (v.nodeType || v.jquery) ? T(v) : T.event,
                b = T.Deferred(),
                x = T.Callbacks("once memory"),
                w = m.statusCode || {},
                s = {},
                a = {},
                l = "canceled",
                _ = {
                    readyState: 0,
                    getResponseHeader: function (t) {
                        var e;
                        if (f) {
                            if (!n)
                                for (n = {}; e = Se.exec(d);) n[e[1].toLowerCase()] = e[2];
                            e = n[t.toLowerCase()]
                        }
                        return null == e ? null : e
                    },
                    getAllResponseHeaders: function () {
                        return f ? d : null
                    },
                    setRequestHeader: function (t, e) {
                        return null == f && (t = a[t.toLowerCase()] = a[t.toLowerCase()] || t, s[t] = e), this
                    },
                    overrideMimeType: function (t) {
                        return null == f && (m.mimeType = t), this
                    },
                    statusCode: function (t) {
                        var e;
                        if (t)
                            if (f) _.always(t[_.status]);
                            else
                                for (e in t) w[e] = [w[e], t[e]];
                        return this
                    },
                    abort: function (t) {
                        var e = t || l;
                        return c && c.abort(e), u(0, e), this
                    }
                };
            if (b.promise(_), m.url = ((t || m.url || be.href) + "").replace(je, be.protocol + "//"), m.type = e.method || e.type || m.method || m.type, m.dataTypes = (m.dataType || "*").toLowerCase().match(O) || [""], null == m.crossDomain) {
                i = C.createElement("a");
                try {
                    i.href = m.url, i.href = i.href, m.crossDomain = Le.protocol + "//" + Le.host != i.protocol + "//" + i.host
                } catch (t) {
                    m.crossDomain = !0
                }
            }
            if (m.data && m.processData && "string" != typeof m.data && (m.data = T.param(m.data, m.traditional)), ze(Ne, m, e, _), f) return _;
            for (r in (g = T.event && m.global) && 0 == T.active++ && T.event.trigger("ajaxStart"), m.type = m.type.toUpperCase(), m.hasContent = !Ie.test(m.type), h = m.url.replace(De, ""), m.hasContent ? m.data && m.processData && 0 === (m.contentType || "").indexOf("application/x-www-form-urlencoded") && (m.data = m.data.replace(Ee, "+")) : (o = m.url.slice(h.length), m.data && (m.processData || "string" == typeof m.data) && (h += (we.test(h) ? "&" : "?") + m.data, delete m.data), !1 === m.cache && (h = h.replace(Ae, "$1"), o = (we.test(h) ? "&" : "?") + "_=" + xe++ + o), m.url = h + o), m.ifModified && (T.lastModified[h] && _.setRequestHeader("If-Modified-Since", T.lastModified[h]), T.etag[h] && _.setRequestHeader("If-None-Match", T.etag[h])), (m.data && m.hasContent && !1 !== m.contentType || e.contentType) && _.setRequestHeader("Content-Type", m.contentType), _.setRequestHeader("Accept", m.dataTypes[0] && m.accepts[m.dataTypes[0]] ? m.accepts[m.dataTypes[0]] + ("*" !== m.dataTypes[0] ? ", " + Oe + "; q=0.01" : "") : m.accepts["*"]), m.headers) _.setRequestHeader(r, m.headers[r]);
            if (m.beforeSend && (!1 === m.beforeSend.call(v, _, m) || f)) return _.abort();
            if (l = "abort", x.add(m.complete), _.done(m.success), _.fail(m.error), c = ze(Pe, m, e, _)) {
                if (_.readyState = 1, g && y.trigger("ajaxSend", [_, m]), f) return _;
                m.async && 0 < m.timeout && (p = k.setTimeout(function () {
                    _.abort("timeout")
                }, m.timeout));
                try {
                    f = !1, c.send(s, u)
                } catch (t) {
                    if (f) throw t;
                    u(-1, t)
                }
            } else u(-1, "No Transport");

            function u(t, e, n, i) {
                var r, o, s, a, l, u = e;
                f || (f = !0, p && k.clearTimeout(p), c = void 0, d = i || "", _.readyState = 0 < t ? 4 : 0, r = 200 <= t && t < 300 || 304 === t, n && (a = function (t, e, n) {
                    for (var i, r, o, s, a = t.contents, l = t.dataTypes;
                        "*" === l[0];) l.shift(), void 0 === i && (i = t.mimeType || e.getResponseHeader("Content-Type"));
                    if (i)
                        for (r in a)
                            if (a[r] && a[r].test(i)) {
                                l.unshift(r);
                                break
                            } if (l[0] in n) o = l[0];
                    else {
                        for (r in n) {
                            if (!l[0] || t.converters[r + " " + l[0]]) {
                                o = r;
                                break
                            }
                            s || (s = r)
                        }
                        o = o || s
                    }
                    if (o) return o !== l[0] && l.unshift(o), n[o]
                }(m, _, n)), a = function (t, e, n, i) {
                    var r, o, s, a, l, u = {},
                        c = t.dataTypes.slice();
                    if (c[1])
                        for (s in t.converters) u[s.toLowerCase()] = t.converters[s];
                    for (o = c.shift(); o;)
                        if (t.responseFields[o] && (n[t.responseFields[o]] = e), !l && i && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = o, o = c.shift())
                            if ("*" === o) o = l;
                            else if ("*" !== l && l !== o) {
                        if (!(s = u[l + " " + o] || u["* " + o]))
                            for (r in u)
                                if ((a = r.split(" "))[1] === o && (s = u[l + " " + a[0]] || u["* " + a[0]])) {
                                    !0 === s ? s = u[r] : !0 !== u[r] && (o = a[0], c.unshift(a[1]));
                                    break
                                } if (!0 !== s)
                            if (s && t.throws) e = s(e);
                            else try {
                                e = s(e)
                            } catch (t) {
                                return {
                                    state: "parsererror",
                                    error: s ? t : "No conversion from " + l + " to " + o
                                }
                            }
                    }
                    return {
                        state: "success",
                        data: e
                    }
                }(m, a, _, r), r ? (m.ifModified && ((l = _.getResponseHeader("Last-Modified")) && (T.lastModified[h] = l), (l = _.getResponseHeader("etag")) && (T.etag[h] = l)), 204 === t || "HEAD" === m.type ? u = "nocontent" : 304 === t ? u = "notmodified" : (u = a.state, o = a.data, r = !(s = a.error))) : (s = u, !t && u || (u = "error", t < 0 && (t = 0))), _.status = t, _.statusText = (e || u) + "", r ? b.resolveWith(v, [o, u, _]) : b.rejectWith(v, [_, u, s]), _.statusCode(w), w = void 0, g && y.trigger(r ? "ajaxSuccess" : "ajaxError", [_, m, r ? o : s]), x.fireWith(v, [_, u]), g && (y.trigger("ajaxComplete", [_, m]), --T.active || T.event.trigger("ajaxStop")))
            }
            return _
        },
        getJSON: function (t, e, n) {
            return T.get(t, e, n, "json")
        },
        getScript: function (t, e) {
            return T.get(t, void 0, e, "script")
        }
    }), T.each(["get", "post"], function (t, r) {
        T[r] = function (t, e, n, i) {
            return y(e) && (i = i || n, n = e, e = void 0), T.ajax(T.extend({
                url: t,
                type: r,
                dataType: i,
                data: e,
                success: n
            }, T.isPlainObject(t) && t))
        }
    }), T._evalUrl = function (t) {
        return T.ajax({
            url: t,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            throws: !0
        })
    }, T.fn.extend({
        wrapAll: function (t) {
            var e;
            return this[0] && (y(t) && (t = t.call(this[0])), e = T(t, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), e.map(function () {
                for (var t = this; t.firstElementChild;) t = t.firstElementChild;
                return t
            }).append(this)), this
        },
        wrapInner: function (n) {
            return y(n) ? this.each(function (t) {
                T(this).wrapInner(n.call(this, t))
            }) : this.each(function () {
                var t = T(this),
                    e = t.contents();
                e.length ? e.wrapAll(n) : t.append(n)
            })
        },
        wrap: function (e) {
            var n = y(e);
            return this.each(function (t) {
                T(this).wrapAll(n ? e.call(this, t) : e)
            })
        },
        unwrap: function (t) {
            return this.parent(t).not("body").each(function () {
                T(this).replaceWith(this.childNodes)
            }), this
        }
    }), T.expr.pseudos.hidden = function (t) {
        return !T.expr.pseudos.visible(t)
    }, T.expr.pseudos.visible = function (t) {
        return !!(t.offsetWidth || t.offsetHeight || t.getClientRects().length)
    }, T.ajaxSettings.xhr = function () {
        try {
            return new k.XMLHttpRequest
        } catch (t) {}
    };
    var qe = {
            0: 200,
            1223: 204
        },
        Re = T.ajaxSettings.xhr();
    v.cors = !!Re && "withCredentials" in Re, v.ajax = Re = !!Re, T.ajaxTransport(function (r) {
        var o, s;
        if (v.cors || Re && !r.crossDomain) return {
            send: function (t, e) {
                var n, i = r.xhr();
                if (i.open(r.type, r.url, r.async, r.username, r.password), r.xhrFields)
                    for (n in r.xhrFields) i[n] = r.xhrFields[n];
                for (n in r.mimeType && i.overrideMimeType && i.overrideMimeType(r.mimeType), r.crossDomain || t["X-Requested-With"] || (t["X-Requested-With"] = "XMLHttpRequest"), t) i.setRequestHeader(n, t[n]);
                o = function (t) {
                    return function () {
                        o && (o = s = i.onload = i.onerror = i.onabort = i.ontimeout = i.onreadystatechange = null, "abort" === t ? i.abort() : "error" === t ? "number" != typeof i.status ? e(0, "error") : e(i.status, i.statusText) : e(qe[i.status] || i.status, i.statusText, "text" !== (i.responseType || "text") || "string" != typeof i.responseText ? {
                            binary: i.response
                        } : {
                            text: i.responseText
                        }, i.getAllResponseHeaders()))
                    }
                }, i.onload = o(), s = i.onerror = i.ontimeout = o("error"), void 0 !== i.onabort ? i.onabort = s : i.onreadystatechange = function () {
                    4 === i.readyState && k.setTimeout(function () {
                        o && s()
                    })
                }, o = o("abort");
                try {
                    i.send(r.hasContent && r.data || null)
                } catch (t) {
                    if (o) throw t
                }
            },
            abort: function () {
                o && o()
            }
        }
    }), T.ajaxPrefilter(function (t) {
        t.crossDomain && (t.contents.script = !1)
    }), T.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function (t) {
                return T.globalEval(t), t
            }
        }
    }), T.ajaxPrefilter("script", function (t) {
        void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET")
    }), T.ajaxTransport("script", function (n) {
        var i, r;
        if (n.crossDomain) return {
            send: function (t, e) {
                i = T("<script>").prop({
                    charset: n.scriptCharset,
                    src: n.url
                }).on("load error", r = function (t) {
                    i.remove(), r = null, t && e("error" === t.type ? 404 : 200, t.type)
                }), C.head.appendChild(i[0])
            },
            abort: function () {
                r && r()
            }
        }
    });
    var We, Be = [],
        Fe = /(=)\?(?=&|$)|\?\?/;
    T.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
            var t = Be.pop() || T.expando + "_" + xe++;
            return this[t] = !0, t
        }
    }), T.ajaxPrefilter("json jsonp", function (t, e, n) {
        var i, r, o, s = !1 !== t.jsonp && (Fe.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Fe.test(t.data) && "data");
        if (s || "jsonp" === t.dataTypes[0]) return i = t.jsonpCallback = y(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(Fe, "$1" + i) : !1 !== t.jsonp && (t.url += (we.test(t.url) ? "&" : "?") + t.jsonp + "=" + i), t.converters["script json"] = function () {
            return o || T.error(i + " was not called"), o[0]
        }, t.dataTypes[0] = "json", r = k[i], k[i] = function () {
            o = arguments
        }, n.always(function () {
            void 0 === r ? T(k).removeProp(i) : k[i] = r, t[i] && (t.jsonpCallback = e.jsonpCallback, Be.push(i)), o && y(r) && r(o[0]), o = r = void 0
        }), "script"
    }), v.createHTMLDocument = ((We = C.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === We.childNodes.length), T.parseHTML = function (t, e, n) {
        return "string" != typeof t ? [] : ("boolean" == typeof e && (n = e, e = !1), e || (v.createHTMLDocument ? ((i = (e = C.implementation.createHTMLDocument("")).createElement("base")).href = C.location.href, e.head.appendChild(i)) : e = C), o = !n && [], (r = D.exec(t)) ? [e.createElement(r[1])] : (r = vt([t], e, o), o && o.length && T(o).remove(), T.merge([], r.childNodes)));
        var i, r, o
    }, T.fn.load = function (t, e, n) {
        var i, r, o, s = this,
            a = t.indexOf(" ");
        return -1 < a && (i = pe(t.slice(a)), t = t.slice(0, a)), y(e) ? (n = e, e = void 0) : e && "object" == typeof e && (r = "POST"), 0 < s.length && T.ajax({
            url: t,
            type: r || "GET",
            dataType: "html",
            data: e
        }).done(function (t) {
            o = arguments, s.html(i ? T("<div>").append(T.parseHTML(t)).find(i) : t)
        }).always(n && function (t, e) {
            s.each(function () {
                n.apply(this, o || [t.responseText, e, t])
            })
        }), this
    }, T.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (t, e) {
        T.fn[e] = function (t) {
            return this.on(e, t)
        }
    }), T.expr.pseudos.animated = function (e) {
        return T.grep(T.timers, function (t) {
            return e === t.elem
        }).length
    }, T.offset = {
        setOffset: function (t, e, n) {
            var i, r, o, s, a, l, u = T.css(t, "position"),
                c = T(t),
                h = {};
            "static" === u && (t.style.position = "relative"), a = c.offset(), o = T.css(t, "top"), l = T.css(t, "left"), r = ("absolute" === u || "fixed" === u) && -1 < (o + l).indexOf("auto") ? (s = (i = c.position()).top, i.left) : (s = parseFloat(o) || 0, parseFloat(l) || 0), y(e) && (e = e.call(t, n, T.extend({}, a))), null != e.top && (h.top = e.top - a.top + s), null != e.left && (h.left = e.left - a.left + r), "using" in e ? e.using.call(t, h) : c.css(h)
        }
    }, T.fn.extend({
        offset: function (e) {
            if (arguments.length) return void 0 === e ? this : this.each(function (t) {
                T.offset.setOffset(this, e, t)
            });
            var t, n, i = this[0];
            return i ? i.getClientRects().length ? (t = i.getBoundingClientRect(), n = i.ownerDocument.defaultView, {
                top: t.top + n.pageYOffset,
                left: t.left + n.pageXOffset
            }) : {
                top: 0,
                left: 0
            } : void 0
        },
        position: function () {
            if (this[0]) {
                var t, e, n, i = this[0],
                    r = {
                        top: 0,
                        left: 0
                    };
                if ("fixed" === T.css(i, "position")) e = i.getBoundingClientRect();
                else {
                    for (e = this.offset(), n = i.ownerDocument, t = i.offsetParent || n.documentElement; t && (t === n.body || t === n.documentElement) && "static" === T.css(t, "position");) t = t.parentNode;
                    t && t !== i && 1 === t.nodeType && ((r = T(t).offset()).top += T.css(t, "borderTopWidth", !0), r.left += T.css(t, "borderLeftWidth", !0))
                }
                return {
                    top: e.top - r.top - T.css(i, "marginTop", !0),
                    left: e.left - r.left - T.css(i, "marginLeft", !0)
                }
            }
        },
        offsetParent: function () {
            return this.map(function () {
                for (var t = this.offsetParent; t && "static" === T.css(t, "position");) t = t.offsetParent;
                return t || yt
            })
        }
    }), T.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function (e, r) {
        var o = "pageYOffset" === r;
        T.fn[e] = function (t) {
            return W(this, function (t, e, n) {
                var i;
                if (b(t) ? i = t : 9 === t.nodeType && (i = t.defaultView), void 0 === n) return i ? i[r] : t[e];
                i ? i.scrollTo(o ? i.pageXOffset : n, o ? n : i.pageYOffset) : t[e] = n
            }, e, t, arguments.length)
        }
    }), T.each(["top", "left"], function (t, n) {
        T.cssHooks[n] = qt(v.pixelPosition, function (t, e) {
            if (e) return e = Ht(t, n), Lt.test(e) ? T(t).position()[n] + "px" : e
        })
    }), T.each({
        Height: "height",
        Width: "width"
    }, function (s, a) {
        T.each({
            padding: "inner" + s,
            content: a,
            "": "outer" + s
        }, function (i, o) {
            T.fn[o] = function (t, e) {
                var n = arguments.length && (i || "boolean" != typeof t),
                    r = i || (!0 === t || !0 === e ? "margin" : "border");
                return W(this, function (t, e, n) {
                    var i;
                    return b(t) ? 0 === o.indexOf("outer") ? t["inner" + s] : t.document.documentElement["client" + s] : 9 === t.nodeType ? (i = t.documentElement, Math.max(t.body["scroll" + s], i["scroll" + s], t.body["offset" + s], i["offset" + s], i["client" + s])) : void 0 === n ? T.css(t, e, r) : T.style(t, e, n, r)
                }, a, n ? t : void 0, n)
            }
        })
    }), T.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (t, n) {
        T.fn[n] = function (t, e) {
            return 0 < arguments.length ? this.on(n, null, t, e) : this.trigger(n)
        }
    }), T.fn.extend({
        hover: function (t, e) {
            return this.mouseenter(t).mouseleave(e || t)
        }
    }), T.fn.extend({
        bind: function (t, e, n) {
            return this.on(t, null, e, n)
        },
        unbind: function (t, e) {
            return this.off(t, null, e)
        },
        delegate: function (t, e, n, i) {
            return this.on(e, t, n, i)
        },
        undelegate: function (t, e, n) {
            return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", n)
        }
    }), T.proxy = function (t, e) {
        var n, i, r;
        if ("string" == typeof e && (n = t[e], e = t, t = n), y(t)) return i = a.call(arguments, 2), (r = function () {
            return t.apply(e || this, i.concat(a.call(arguments)))
        }).guid = t.guid = t.guid || T.guid++, r
    }, T.holdReady = function (t) {
        t ? T.readyWait++ : T.ready(!0)
    }, T.isArray = Array.isArray, T.parseJSON = JSON.parse, T.nodeName = E, T.isFunction = y, T.isWindow = b, T.camelCase = U, T.type = w, T.now = Date.now, T.isNumeric = function (t) {
        var e = T.type(t);
        return ("number" === e || "string" === e) && !isNaN(t - parseFloat(t))
    }, "function" == typeof define && define.amd && define("jquery", [], function () {
        return T
    });
    var Ge = k.jQuery,
        Ue = k.$;
    return T.noConflict = function (t) {
        return k.$ === T && (k.$ = Ue), t && k.jQuery === T && (k.jQuery = Ge), T
    }, t || (k.jQuery = k.$ = T), T
}),
function (f) {
    var i = {
        url: !1,
        callback: !1,
        target: !1,
        duration: 120,
        on: "mouseover",
        touch: !0,
        onZoomIn: !1,
        onZoomOut: !1,
        magnify: 1
    };
    f.zoom = function (t, e, i, n) {
        var r, o, s, a, l, u, c, h = f(t),
            d = h.css("position"),
            p = f(e);
        return t.style.position = /(absolute|fixed)/.test(d) ? d : "relative", t.style.overflow = "hidden", i.style.width = i.style.height = "", f(i).addClass("zoomImg").css({
            position: "absolute",
            top: 0,
            left: 0,
            opacity: 0,
            width: i.width * n,
            height: i.height * n,
            border: "none",
            maxWidth: "none",
            maxHeight: "none"
        }).appendTo(t), {
            init: function () {
                o = h.outerWidth(), r = h.outerHeight(), s = e === t ? (a = o, r) : (a = p.outerWidth(), p.outerHeight()), l = (i.width - o) / a, u = (i.height - r) / s, c = p.offset()
            },
            move: function (t) {
                var e = t.pageX - c.left,
                    n = t.pageY - c.top;
                n = Math.max(Math.min(n, s), 0), e = Math.max(Math.min(e, a), 0), i.style.left = e * -l + "px", i.style.top = n * -u + "px"
            }
        }
    }, f.fn.zoom = function (n) {
        return this.each(function () {
            var r = f.extend({}, i, n || {}),
                o = r.target && f(r.target)[0] || this,
                t = this,
                s = f(t),
                a = document.createElement("img"),
                l = f(a),
                u = "mousemove.zoom",
                c = !1,
                h = !1;
            if (!r.url) {
                var e = t.querySelector("img");
                if (e && (r.url = e.getAttribute("data-src") || e.currentSrc || e.src), !r.url) return
            }
            s.one("zoom.destroy", function (t, e) {
                s.off(".zoom"), o.style.position = t, o.style.overflow = e, a.onload = null, l.remove()
            }.bind(this, o.style.position, o.style.overflow)), a.onload = function () {
                var e = f.zoom(o, t, a, r.magnify);

                function n(t) {
                    e.init(), e.move(t), l.stop().fadeTo(f.support.opacity ? r.duration : 0, 1, !!f.isFunction(r.onZoomIn) && r.onZoomIn.call(a))
                }

                function i() {
                    l.stop().fadeTo(r.duration, 0, !!f.isFunction(r.onZoomOut) && r.onZoomOut.call(a))
                }
                "grab" === r.on ? s.on("mousedown.zoom", function (t) {
                    1 === t.which && (f(document).one("mouseup.zoom", function () {
                        i(), f(document).off(u, e.move)
                    }), n(t), f(document).on(u, e.move), t.preventDefault())
                }) : "click" === r.on ? s.on("click.zoom", function (t) {
                    return c ? void 0 : (c = !0, n(t), f(document).on(u, e.move), f(document).one("click.zoom", function () {
                        i(), c = !1, f(document).off(u, e.move)
                    }), !1)
                }) : "toggle" === r.on ? s.on("click.zoom", function (t) {
                    c ? i() : n(t), c = !c
                }) : "mouseover" === r.on && (e.init(), s.on("mouseenter.zoom", n).on("mouseleave.zoom", i).on(u, e.move)), r.touch && s.on("touchstart.zoom", function (t) {
                    t.preventDefault(), h ? (h = !1, i()) : (h = !0, n(t.originalEvent.touches[0] || t.originalEvent.changedTouches[0]))
                }).on("touchmove.zoom", function (t) {
                    t.preventDefault(), e.move(t.originalEvent.touches[0] || t.originalEvent.changedTouches[0])
                }).on("touchend.zoom", function (t) {
                    t.preventDefault(), h && (h = !1, i())
                }), f.isFunction(r.callback) && r.callback.call(a)
            }, a.setAttribute("role", "presentation"), a.alt = "", a.src = r.url
        })
    }, f.fn.zoom.defaults = i
}(window.jQuery),
function (t, e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof exports ? module.exports = e(require("jquery")) : t.lightbox = e(t.jQuery)
}(this, function (h) {
    function t(t) {
        this.album = [], this.currentImageIndex = void 0, this.init(), this.options = h.extend({}, this.constructor.defaults), this.option(t)
    }
    return t.defaults = {
        albumLabel: "Image %1 of %2",
        alwaysShowNavOnTouchDevices: !1,
        fadeDuration: 600,
        fitImagesInViewport: !0,
        imageFadeDuration: 600,
        positionFromTop: 50,
        resizeDuration: 700,
        showImageNumberLabel: !0,
        wrapAround: !1,
        disableScrolling: !1,
        sanitizeTitle: !1
    }, t.prototype.option = function (t) {
        h.extend(this.options, t)
    }, t.prototype.imageCountLabel = function (t, e) {
        return this.options.albumLabel.replace(/%1/g, t).replace(/%2/g, e)
    }, t.prototype.init = function () {
        var t = this;
        h(document).ready(function () {
            t.enable(), t.build()
        })
    }, t.prototype.enable = function () {
        var e = this;
        h("body").on("click", "a[rel^=lightbox], area[rel^=lightbox], a[data-lightbox], area[data-lightbox]", function (t) {
            return e.start(h(t.currentTarget)), !1
        })
    }, t.prototype.build = function () {
        if (!(0 < h("#lightbox").length)) {
            var e = this;
            h('<div id="lightboxOverlay" class="lightboxOverlay"></div><div id="lightbox" class="lightbox"><div class="lb-outerContainer"><div class="lb-container"><img class="lb-image" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" /><div class="lb-nav"><a class="lb-prev" href="" ></a><a class="lb-next" href="" ></a></div><div class="lb-loader"><a class="lb-cancel"></a></div></div></div><div class="lb-dataContainer"><div class="lb-data"><div class="lb-details"><span class="lb-caption"></span><span class="lb-number"></span></div><div class="lb-closeContainer"><a class="lb-close"></a></div></div></div></div>').appendTo(h("body")), this.$lightbox = h("#lightbox"), this.$overlay = h("#lightboxOverlay"), this.$outerContainer = this.$lightbox.find(".lb-outerContainer"), this.$container = this.$lightbox.find(".lb-container"), this.$image = this.$lightbox.find(".lb-image"), this.$nav = this.$lightbox.find(".lb-nav"), this.containerPadding = {
                top: parseInt(this.$container.css("padding-top"), 10),
                right: parseInt(this.$container.css("padding-right"), 10),
                bottom: parseInt(this.$container.css("padding-bottom"), 10),
                left: parseInt(this.$container.css("padding-left"), 10)
            }, this.imageBorderWidth = {
                top: parseInt(this.$image.css("border-top-width"), 10),
                right: parseInt(this.$image.css("border-right-width"), 10),
                bottom: parseInt(this.$image.css("border-bottom-width"), 10),
                left: parseInt(this.$image.css("border-left-width"), 10)
            }, this.$overlay.hide().on("click", function () {
                return e.end(), !1
            }), this.$lightbox.hide().on("click", function (t) {
                return "lightbox" === h(t.target).attr("id") && e.end(), !1
            }), this.$outerContainer.on("click", function (t) {
                return "lightbox" === h(t.target).attr("id") && e.end(), !1
            }), this.$lightbox.find(".lb-prev").on("click", function () {
                return 0 === e.currentImageIndex ? e.changeImage(e.album.length - 1) : e.changeImage(e.currentImageIndex - 1), !1
            }), this.$lightbox.find(".lb-next").on("click", function () {
                return e.currentImageIndex === e.album.length - 1 ? e.changeImage(0) : e.changeImage(e.currentImageIndex + 1), !1
            }), this.$nav.on("mousedown", function (t) {
                3 === t.which && (e.$nav.css("pointer-events", "none"), e.$lightbox.one("contextmenu", function () {
                    setTimeout(function () {
                        this.$nav.css("pointer-events", "auto")
                    }.bind(e), 0)
                }))
            }), this.$lightbox.find(".lb-loader, .lb-close").on("click", function () {
                return e.end(), !1
            })
        }
    }, t.prototype.start = function (t) {
        var e = this,
            n = h(window);
        n.on("resize", h.proxy(this.sizeOverlay, this)), h("select, object, embed").css({
            visibility: "hidden"
        }), this.sizeOverlay(), this.album = [];
        var i = 0;

        function r(t) {
            e.album.push({
                alt: t.attr("data-alt"),
                link: t.attr("href"),
                title: t.attr("data-title") || t.attr("title")
            })
        }
        var o, s = t.attr("data-lightbox");
        if (s) {
            o = h(t.prop("tagName") + '[data-lightbox="' + s + '"]');
            for (var a = 0; a < o.length; a = ++a) r(h(o[a])), o[a] === t[0] && (i = a)
        } else if ("lightbox" === t.attr("rel")) r(t);
        else {
            o = h(t.prop("tagName") + '[rel="' + t.attr("rel") + '"]');
            for (var l = 0; l < o.length; l = ++l) r(h(o[l])), o[l] === t[0] && (i = l)
        }
        var u = n.scrollTop() + this.options.positionFromTop,
            c = n.scrollLeft();
        this.$lightbox.css({
            top: u + "px",
            left: c + "px"
        }).fadeIn(this.options.fadeDuration), this.options.disableScrolling && h("html").addClass("lb-disable-scrolling"), this.changeImage(i)
    }, t.prototype.changeImage = function (s) {
        var a = this;
        this.disableKeyboardNav();
        var l = this.$lightbox.find(".lb-image");
        this.$overlay.fadeIn(this.options.fadeDuration), h(".lb-loader").fadeIn("slow"), this.$lightbox.find(".lb-image, .lb-nav, .lb-prev, .lb-next, .lb-dataContainer, .lb-numbers, .lb-caption").hide(), this.$outerContainer.addClass("animating");
        var u = new Image;
        u.onload = function () {
            var t, e, n, i, r, o;
            l.attr({
                alt: a.album[s].alt,
                src: a.album[s].link
            }), h(u), l.width(u.width), l.height(u.height), a.options.fitImagesInViewport && (o = h(window).width(), r = h(window).height(), i = o - a.containerPadding.left - a.containerPadding.right - a.imageBorderWidth.left - a.imageBorderWidth.right - 20, n = r - a.containerPadding.top - a.containerPadding.bottom - a.imageBorderWidth.top - a.imageBorderWidth.bottom - 120, a.options.maxWidth && a.options.maxWidth < i && (i = a.options.maxWidth), a.options.maxHeight && a.options.maxHeight < i && (n = a.options.maxHeight), (u.width > i || u.height > n) && (u.width / i > u.height / n ? (e = i, t = parseInt(u.height / (u.width / e), 10)) : (t = n, e = parseInt(u.width / (u.height / t), 10)), l.width(e), l.height(t))), a.sizeContainer(l.width(), l.height())
        }, u.src = this.album[s].link, this.currentImageIndex = s
    }, t.prototype.sizeOverlay = function () {
        this.$overlay.width(h(document).width()).height(h(document).height())
    }, t.prototype.sizeContainer = function (t, e) {
        var n = this,
            i = this.$outerContainer.outerWidth(),
            r = this.$outerContainer.outerHeight(),
            o = t + this.containerPadding.left + this.containerPadding.right + this.imageBorderWidth.left + this.imageBorderWidth.right,
            s = e + this.containerPadding.top + this.containerPadding.bottom + this.imageBorderWidth.top + this.imageBorderWidth.bottom;

        function a() {
            n.$lightbox.find(".lb-dataContainer").width(o), n.$lightbox.find(".lb-prevLink").height(s), n.$lightbox.find(".lb-nextLink").height(s), n.showImage()
        }
        i !== o || r !== s ? this.$outerContainer.animate({
            width: o,
            height: s
        }, this.options.resizeDuration, "swing", function () {
            a()
        }) : a()
    }, t.prototype.showImage = function () {
        this.$lightbox.find(".lb-loader").stop(!0).hide(), this.$lightbox.find(".lb-image").fadeIn(this.options.imageFadeDuration), this.updateNav(), this.updateDetails(), this.preloadNeighboringImages(), this.enableKeyboardNav()
    }, t.prototype.updateNav = function () {
        var t = !1;
        try {
            document.createEvent("TouchEvent"), t = !!this.options.alwaysShowNavOnTouchDevices
        } catch (t) {}
        this.$lightbox.find(".lb-nav").show(), 1 < this.album.length && (this.options.wrapAround ? (t && this.$lightbox.find(".lb-prev, .lb-next").css("opacity", "1"), this.$lightbox.find(".lb-prev, .lb-next").show()) : (0 < this.currentImageIndex && (this.$lightbox.find(".lb-prev").show(), t && this.$lightbox.find(".lb-prev").css("opacity", "1")), this.currentImageIndex < this.album.length - 1 && (this.$lightbox.find(".lb-next").show(), t && this.$lightbox.find(".lb-next").css("opacity", "1"))))
    }, t.prototype.updateDetails = function () {
        var t = this;
        if (void 0 !== this.album[this.currentImageIndex].title && "" !== this.album[this.currentImageIndex].title) {
            var e = this.$lightbox.find(".lb-caption");
            this.options.sanitizeTitle ? e.text(this.album[this.currentImageIndex].title) : e.html(this.album[this.currentImageIndex].title), e.fadeIn("fast").find("a").on("click", function (t) {
                void 0 !== h(this).attr("target") ? window.open(h(this).attr("href"), h(this).attr("target")) : location.href = h(this).attr("href")
            })
        }
        if (1 < this.album.length && this.options.showImageNumberLabel) {
            var n = this.imageCountLabel(this.currentImageIndex + 1, this.album.length);
            this.$lightbox.find(".lb-number").text(n).fadeIn("fast")
        } else this.$lightbox.find(".lb-number").hide();
        this.$outerContainer.removeClass("animating"), this.$lightbox.find(".lb-dataContainer").fadeIn(this.options.resizeDuration, function () {
            return t.sizeOverlay()
        })
    }, t.prototype.preloadNeighboringImages = function () {
        this.album.length > this.currentImageIndex + 1 && ((new Image).src = this.album[this.currentImageIndex + 1].link);
        0 < this.currentImageIndex && ((new Image).src = this.album[this.currentImageIndex - 1].link)
    }, t.prototype.enableKeyboardNav = function () {
        h(document).on("keyup.keyboard", h.proxy(this.keyboardAction, this))
    }, t.prototype.disableKeyboardNav = function () {
        h(document).off(".keyboard")
    }, t.prototype.keyboardAction = function (t) {
        var e = t.keyCode,
            n = String.fromCharCode(e).toLowerCase();
        27 === e || n.match(/x|o|c/) ? this.end() : "p" === n || 37 === e ? 0 !== this.currentImageIndex ? this.changeImage(this.currentImageIndex - 1) : this.options.wrapAround && 1 < this.album.length && this.changeImage(this.album.length - 1) : "n" !== n && 39 !== e || (this.currentImageIndex !== this.album.length - 1 ? this.changeImage(this.currentImageIndex + 1) : this.options.wrapAround && 1 < this.album.length && this.changeImage(0))
    }, t.prototype.end = function () {
        this.disableKeyboardNav(), h(window).off("resize", this.sizeOverlay), this.$lightbox.fadeOut(this.options.fadeDuration), this.$overlay.fadeOut(this.options.fadeDuration), h("select, object, embed").css({
            visibility: "visible"
        }), this.options.disableScrolling && h("html").removeClass("lb-disable-scrolling")
    }, new t
}),
function (l, n, r, o) {
    function u(t, e) {
        this.settings = null, this.options = l.extend({}, u.Defaults, e), this.$element = l(t), this._handlers = {}, this._plugins = {}, this._supress = {}, this._current = null, this._speed = null, this._coordinates = [], this._breakpoint = null, this._width = null, this._items = [], this._clones = [], this._mergers = [], this._widths = [], this._invalidated = {}, this._pipe = [], this._drag = {
            time: null,
            target: null,
            pointer: null,
            stage: {
                start: null,
                current: null
            },
            direction: null
        }, this._states = {
            current: {},
            tags: {
                initializing: ["busy"],
                animating: ["busy"],
                dragging: ["interacting"]
            }
        }, l.each(["onResize", "onThrottledResize"], l.proxy(function (t, e) {
            this._handlers[e] = l.proxy(this[e], this)
        }, this)), l.each(u.Plugins, l.proxy(function (t, e) {
            this._plugins[t.charAt(0).toLowerCase() + t.slice(1)] = new e(this)
        }, this)), l.each(u.Workers, l.proxy(function (t, e) {
            this._pipe.push({
                filter: e.filter,
                run: l.proxy(e.run, this)
            })
        }, this)), this.setup(), this.initialize()
    }
    u.Defaults = {
        items: 3,
        loop: !1,
        center: !1,
        rewind: !1,
        mouseDrag: !0,
        touchDrag: !0,
        pullDrag: !0,
        freeDrag: !1,
        margin: 0,
        stagePadding: 0,
        merge: !1,
        mergeFit: !0,
        autoWidth: !1,
        startPosition: 0,
        rtl: !1,
        smartSpeed: 250,
        fluidSpeed: !1,
        dragEndSpeed: !1,
        responsive: {},
        responsiveRefreshRate: 200,
        responsiveBaseElement: n,
        fallbackEasing: "swing",
        info: !1,
        nestedItemSelector: !1,
        itemElement: "div",
        stageElement: "div",
        refreshClass: "owl-refresh",
        loadedClass: "owl-loaded",
        loadingClass: "owl-loading",
        rtlClass: "owl-rtl",
        responsiveClass: "owl-responsive",
        dragClass: "owl-drag",
        itemClass: "owl-item",
        stageClass: "owl-stage",
        stageOuterClass: "owl-stage-outer",
        grabClass: "owl-grab"
    }, u.Width = {
        Default: "default",
        Inner: "inner",
        Outer: "outer"
    }, u.Type = {
        Event: "event",
        State: "state"
    }, u.Plugins = {}, u.Workers = [{
        filter: ["width", "settings"],
        run: function () {
            this._width = this.$element.width()
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function (t) {
            t.current = this._items && this._items[this.relative(this._current)]
        }
    }, {
        filter: ["items", "settings"],
        run: function () {
            this.$stage.children(".cloned").remove()
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function (t) {
            var e = this.settings.margin || "",
                n = !this.settings.autoWidth,
                i = this.settings.rtl,
                r = {
                    width: "auto",
                    "margin-left": i ? e : "",
                    "margin-right": i ? "" : e
                };
            !n && this.$stage.children().css(r), t.css = r
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function (t) {
            var e = (this.width() / this.settings.items).toFixed(3) - this.settings.margin,
                n = null,
                i = this._items.length,
                r = !this.settings.autoWidth,
                o = [];
            for (t.items = {
                    merge: !1,
                    width: e
                }; i--;) n = this._mergers[i], n = this.settings.mergeFit && Math.min(n, this.settings.items) || n, t.items.merge = 1 < n || t.items.merge, o[i] = r ? e * n : this._items[i].width();
            this._widths = o
        }
    }, {
        filter: ["items", "settings"],
        run: function () {
            var t = [],
                e = this._items,
                n = this.settings,
                i = Math.max(2 * n.items, 4),
                r = 2 * Math.ceil(e.length / 2),
                o = n.loop && e.length ? n.rewind ? i : Math.max(i, r) : 0,
                s = "",
                a = "";
            for (o /= 2; o--;) t.push(this.normalize(t.length / 2, !0)), s += e[t[t.length - 1]][0].outerHTML, t.push(this.normalize(e.length - 1 - (t.length - 1) / 2, !0)), a = e[t[t.length - 1]][0].outerHTML + a;
            this._clones = t, l(s).addClass("cloned").appendTo(this.$stage), l(a).addClass("cloned").prependTo(this.$stage)
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function () {
            for (var t = this.settings.rtl ? 1 : -1, e = this._clones.length + this._items.length, n = -1, i = 0, r = 0, o = []; ++n < e;) i = o[n - 1] || 0, r = this._widths[this.relative(n)] + this.settings.margin, o.push(i + r * t);
            this._coordinates = o
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function () {
            var t = this.settings.stagePadding,
                e = this._coordinates,
                n = {
                    width: Math.ceil(Math.abs(e[e.length - 1])) + 2 * t,
                    "padding-left": t || "",
                    "padding-right": t || ""
                };
            this.$stage.css(n)
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function (t) {
            var e = this._coordinates.length,
                n = !this.settings.autoWidth,
                i = this.$stage.children();
            if (n && t.items.merge)
                for (; e--;) t.css.width = this._widths[this.relative(e)], i.eq(e).css(t.css);
            else n && (t.css.width = t.items.width, i.css(t.css))
        }
    }, {
        filter: ["items"],
        run: function () {
            this._coordinates.length < 1 && this.$stage.removeAttr("style")
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function (t) {
            t.current = t.current ? this.$stage.children().index(t.current) : 0, t.current = Math.max(this.minimum(), Math.min(this.maximum(), t.current)), this.reset(t.current)
        }
    }, {
        filter: ["position"],
        run: function () {
            this.animate(this.coordinates(this._current))
        }
    }, {
        filter: ["width", "position", "items", "settings"],
        run: function () {
            var t, e, n, i, r = this.settings.rtl ? 1 : -1,
                o = 2 * this.settings.stagePadding,
                s = this.coordinates(this.current()) + o,
                a = s + this.width() * r,
                l = [];
            for (n = 0, i = this._coordinates.length; n < i; n++) t = this._coordinates[n - 1] || 0, e = Math.abs(this._coordinates[n]) + o * r, (this.op(t, "<=", s) && this.op(t, ">", a) || this.op(e, "<", s) && this.op(e, ">", a)) && l.push(n);
            this.$stage.children(".active").removeClass("active"), this.$stage.children(":eq(" + l.join("), :eq(") + ")").addClass("active"), this.settings.center && (this.$stage.children(".center").removeClass("center"), this.$stage.children().eq(this.current()).addClass("center"))
        }
    }], u.prototype.initialize = function () {
        var t, e, n;
        (this.enter("initializing"), this.trigger("initialize"), this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl), this.settings.autoWidth && !this.is("pre-loading")) && (t = this.$element.find("img"), e = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : o, n = this.$element.children(e).width(), t.length && n <= 0 && this.preloadAutoWidthImages(t));
        this.$element.addClass(this.options.loadingClass), this.$stage = l("<" + this.settings.stageElement + ' class="' + this.settings.stageClass + '"/>').wrap('<div class="' + this.settings.stageOuterClass + '"/>'), this.$element.append(this.$stage.parent()), this.replace(this.$element.children().not(this.$stage.parent())), this.$element.is(":visible") ? this.refresh() : this.invalidate("width"), this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass), this.registerEventHandlers(), this.leave("initializing"), this.trigger("initialized")
    }, u.prototype.setup = function () {
        var e = this.viewport(),
            t = this.options.responsive,
            n = -1,
            i = null;
        t ? (l.each(t, function (t) {
            t <= e && n < t && (n = Number(t))
        }), "function" == typeof (i = l.extend({}, this.options, t[n])).stagePadding && (i.stagePadding = i.stagePadding()), delete i.responsive, i.responsiveClass && this.$element.attr("class", this.$element.attr("class").replace(new RegExp("(" + this.options.responsiveClass + "-)\\S+\\s", "g"), "$1" + n))) : i = l.extend({}, this.options), this.trigger("change", {
            property: {
                name: "settings",
                value: i
            }
        }), this._breakpoint = n, this.settings = i, this.invalidate("settings"), this.trigger("changed", {
            property: {
                name: "settings",
                value: this.settings
            }
        })
    }, u.prototype.optionsLogic = function () {
        this.settings.autoWidth && (this.settings.stagePadding = !1, this.settings.merge = !1)
    }, u.prototype.prepare = function (t) {
        var e = this.trigger("prepare", {
            content: t
        });
        return e.data || (e.data = l("<" + this.settings.itemElement + "/>").addClass(this.options.itemClass).append(t)), this.trigger("prepared", {
            content: e.data
        }), e.data
    }, u.prototype.update = function () {
        for (var t = 0, e = this._pipe.length, n = l.proxy(function (t) {
                return this[t]
            }, this._invalidated), i = {}; t < e;)(this._invalidated.all || 0 < l.grep(this._pipe[t].filter, n).length) && this._pipe[t].run(i), t++;
        this._invalidated = {}, !this.is("valid") && this.enter("valid")
    }, u.prototype.width = function (t) {
        switch (t = t || u.Width.Default) {
            case u.Width.Inner:
            case u.Width.Outer:
                return this._width;
            default:
                return this._width - 2 * this.settings.stagePadding + this.settings.margin
        }
    }, u.prototype.refresh = function () {
        this.enter("refreshing"), this.trigger("refresh"), this.setup(), this.optionsLogic(), this.$element.addClass(this.options.refreshClass), this.update(), this.$element.removeClass(this.options.refreshClass), this.leave("refreshing"), this.trigger("refreshed")
    }, u.prototype.onThrottledResize = function () {
        n.clearTimeout(this.resizeTimer), this.resizeTimer = n.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate)
    }, u.prototype.onResize = function () {
        return !!this._items.length && this._width !== this.$element.width() && !!this.$element.is(":visible") && (this.enter("resizing"), this.trigger("resize").isDefaultPrevented() ? (this.leave("resizing"), !1) : (this.invalidate("width"), this.refresh(), this.leave("resizing"), void this.trigger("resized")))
    }, u.prototype.registerEventHandlers = function () {
        l.support.transition && this.$stage.on(l.support.transition.end + ".owl.core", l.proxy(this.onTransitionEnd, this)), !1 !== this.settings.responsive && this.on(n, "resize", this._handlers.onThrottledResize), this.settings.mouseDrag && (this.$element.addClass(this.options.dragClass), this.$stage.on("mousedown.owl.core", l.proxy(this.onDragStart, this)), this.$stage.on("dragstart.owl.core selectstart.owl.core", function () {
            return !1
        })), this.settings.touchDrag && (this.$stage.on("touchstart.owl.core", l.proxy(this.onDragStart, this)), this.$stage.on("touchcancel.owl.core", l.proxy(this.onDragEnd, this)))
    }, u.prototype.onDragStart = function (t) {
        var e = null;
        3 !== t.which && (e = l.support.transform ? {
            x: (e = this.$stage.css("transform").replace(/.*\(|\)| /g, "").split(","))[16 === e.length ? 12 : 4],
            y: e[16 === e.length ? 13 : 5]
        } : (e = this.$stage.position(), {
            x: this.settings.rtl ? e.left + this.$stage.width() - this.width() + this.settings.margin : e.left,
            y: e.top
        }), this.is("animating") && (l.support.transform ? this.animate(e.x) : this.$stage.stop(), this.invalidate("position")), this.$element.toggleClass(this.options.grabClass, "mousedown" === t.type), this.speed(0), this._drag.time = (new Date).getTime(), this._drag.target = l(t.target), this._drag.stage.start = e, this._drag.stage.current = e, this._drag.pointer = this.pointer(t), l(r).on("mouseup.owl.core touchend.owl.core", l.proxy(this.onDragEnd, this)), l(r).one("mousemove.owl.core touchmove.owl.core", l.proxy(function (t) {
            var e = this.difference(this._drag.pointer, this.pointer(t));
            l(r).on("mousemove.owl.core touchmove.owl.core", l.proxy(this.onDragMove, this)), Math.abs(e.x) < Math.abs(e.y) && this.is("valid") || (t.preventDefault(), this.enter("dragging"), this.trigger("drag"))
        }, this)))
    }, u.prototype.onDragMove = function (t) {
        var e = null,
            n = null,
            i = null,
            r = this.difference(this._drag.pointer, this.pointer(t)),
            o = this.difference(this._drag.stage.start, r);
        this.is("dragging") && (t.preventDefault(), this.settings.loop ? (e = this.coordinates(this.minimum()), n = this.coordinates(this.maximum() + 1) - e, o.x = ((o.x - e) % n + n) % n + e) : (e = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum()), n = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum()), i = this.settings.pullDrag ? -1 * r.x / 5 : 0, o.x = Math.max(Math.min(o.x, e + i), n + i)), this._drag.stage.current = o, this.animate(o.x))
    }, u.prototype.onDragEnd = function (t) {
        var e = this.difference(this._drag.pointer, this.pointer(t)),
            n = this._drag.stage.current,
            i = 0 < e.x ^ this.settings.rtl ? "left" : "right";
        l(r).off(".owl.core"), this.$element.removeClass(this.options.grabClass), (0 !== e.x && this.is("dragging") || !this.is("valid")) && (this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed), this.current(this.closest(n.x, 0 !== e.x ? i : this._drag.direction)), this.invalidate("position"), this.update(), this._drag.direction = i, (3 < Math.abs(e.x) || 300 < (new Date).getTime() - this._drag.time) && this._drag.target.one("click.owl.core", function () {
            return !1
        })), this.is("dragging") && (this.leave("dragging"), this.trigger("dragged"))
    }, u.prototype.closest = function (n, i) {
        var r = -1,
            o = this.width(),
            s = this.coordinates();
        return this.settings.freeDrag || l.each(s, l.proxy(function (t, e) {
            return "left" === i && e - 30 < n && n < e + 30 ? r = t : "right" === i && e - o - 30 < n && n < e - o + 30 ? r = t + 1 : this.op(n, "<", e) && this.op(n, ">", s[t + 1] || e - o) && (r = "left" === i ? t + 1 : t), -1 === r
        }, this)), this.settings.loop || (this.op(n, ">", s[this.minimum()]) ? r = n = this.minimum() : this.op(n, "<", s[this.maximum()]) && (r = n = this.maximum())), r
    }, u.prototype.animate = function (t) {
        var e = 0 < this.speed();
        this.is("animating") && this.onTransitionEnd(), e && (this.enter("animating"), this.trigger("translate")), l.support.transform3d && l.support.transition ? this.$stage.css({
            transform: "translate3d(" + t + "px,0px,0px)",
            transition: this.speed() / 1e3 + "s"
        }) : e ? this.$stage.animate({
            left: t + "px"
        }, this.speed(), this.settings.fallbackEasing, l.proxy(this.onTransitionEnd, this)) : this.$stage.css({
            left: t + "px"
        })
    }, u.prototype.is = function (t) {
        return this._states.current[t] && 0 < this._states.current[t]
    }, u.prototype.current = function (t) {
        if (t === o) return this._current;
        if (0 === this._items.length) return o;
        if (t = this.normalize(t), this._current !== t) {
            var e = this.trigger("change", {
                property: {
                    name: "position",
                    value: t
                }
            });
            e.data !== o && (t = this.normalize(e.data)), this._current = t, this.invalidate("position"), this.trigger("changed", {
                property: {
                    name: "position",
                    value: this._current
                }
            })
        }
        return this._current
    }, u.prototype.invalidate = function (t) {
        return "string" === l.type(t) && (this._invalidated[t] = !0, this.is("valid") && this.leave("valid")), l.map(this._invalidated, function (t, e) {
            return e
        })
    }, u.prototype.reset = function (t) {
        (t = this.normalize(t)) !== o && (this._speed = 0, this._current = t, this.suppress(["translate", "translated"]), this.animate(this.coordinates(t)), this.release(["translate", "translated"]))
    }, u.prototype.normalize = function (t, e) {
        var n = this._items.length,
            i = e ? 0 : this._clones.length;
        return !this.isNumeric(t) || n < 1 ? t = o : (t < 0 || n + i <= t) && (t = ((t - i / 2) % n + n) % n + i / 2), t
    }, u.prototype.relative = function (t) {
        return t -= this._clones.length / 2, this.normalize(t, !0)
    }, u.prototype.maximum = function (t) {
        var e, n, i, r = this.settings,
            o = this._coordinates.length;
        if (r.loop) o = this._clones.length / 2 + this._items.length - 1;
        else if (r.autoWidth || r.merge) {
            for (e = this._items.length, n = this._items[--e].width(), i = this.$element.width(); e-- && !(i < (n += this._items[e].width() + this.settings.margin)););
            o = e + 1
        } else o = r.center ? this._items.length - 1 : this._items.length - r.items;
        return t && (o -= this._clones.length / 2), Math.max(o, 0)
    }, u.prototype.minimum = function (t) {
        return t ? 0 : this._clones.length / 2
    }, u.prototype.items = function (t) {
        return t === o ? this._items.slice() : (t = this.normalize(t, !0), this._items[t])
    }, u.prototype.mergers = function (t) {
        return t === o ? this._mergers.slice() : (t = this.normalize(t, !0), this._mergers[t])
    }, u.prototype.clones = function (n) {
        var e = this._clones.length / 2,
            i = e + this._items.length,
            r = function (t) {
                return t % 2 == 0 ? i + t / 2 : e - (t + 1) / 2
            };
        return n === o ? l.map(this._clones, function (t, e) {
            return r(e)
        }) : l.map(this._clones, function (t, e) {
            return t === n ? r(e) : null
        })
    }, u.prototype.speed = function (t) {
        return t !== o && (this._speed = t), this._speed
    }, u.prototype.coordinates = function (t) {
        var e, n = 1,
            i = t - 1;
        return t === o ? l.map(this._coordinates, l.proxy(function (t, e) {
            return this.coordinates(e)
        }, this)) : (this.settings.center ? (this.settings.rtl && (n = -1, i = t + 1), e = this._coordinates[t], e += (this.width() - e + (this._coordinates[i] || 0)) / 2 * n) : e = this._coordinates[i] || 0, e = Math.ceil(e))
    }, u.prototype.duration = function (t, e, n) {
        return 0 === n ? 0 : Math.min(Math.max(Math.abs(e - t), 1), 6) * Math.abs(n || this.settings.smartSpeed)
    }, u.prototype.to = function (t, e) {
        var n = this.current(),
            i = null,
            r = t - this.relative(n),
            o = (0 < r) - (r < 0),
            s = this._items.length,
            a = this.minimum(),
            l = this.maximum();
        this.settings.loop ? (!this.settings.rewind && Math.abs(r) > s / 2 && (r += -1 * o * s), (i = (((t = n + r) - a) % s + s) % s + a) !== t && i - r <= l && 0 < i - r && (n = i - r, t = i, this.reset(n))) : t = this.settings.rewind ? (t % (l += 1) + l) % l : Math.max(a, Math.min(l, t)), this.speed(this.duration(n, t, e)), this.current(t), this.$element.is(":visible") && this.update()
    }, u.prototype.next = function (t) {
        t = t || !1, this.to(this.relative(this.current()) + 1, t)
    }, u.prototype.prev = function (t) {
        t = t || !1, this.to(this.relative(this.current()) - 1, t)
    }, u.prototype.onTransitionEnd = function (t) {
        if (t !== o && (t.stopPropagation(), (t.target || t.srcElement || t.originalTarget) !== this.$stage.get(0))) return !1;
        this.leave("animating"), this.trigger("translated")
    }, u.prototype.viewport = function () {
        var t;
        return this.options.responsiveBaseElement !== n ? t = l(this.options.responsiveBaseElement).width() : n.innerWidth ? t = n.innerWidth : r.documentElement && r.documentElement.clientWidth ? t = r.documentElement.clientWidth : console.warn("Can not detect viewport width."), t
    }, u.prototype.replace = function (t) {
        this.$stage.empty(), this._items = [], t && (t = t instanceof jQuery ? t : l(t)), this.settings.nestedItemSelector && (t = t.find("." + this.settings.nestedItemSelector)), t.filter(function () {
            return 1 === this.nodeType
        }).each(l.proxy(function (t, e) {
            e = this.prepare(e), this.$stage.append(e), this._items.push(e), this._mergers.push(1 * e.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)
        }, this)), this.reset(this.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0), this.invalidate("items")
    }, u.prototype.add = function (t, e) {
        var n = this.relative(this._current);
        e = e === o ? this._items.length : this.normalize(e, !0), t = t instanceof jQuery ? t : l(t), this.trigger("add", {
            content: t,
            position: e
        }), t = this.prepare(t), 0 === this._items.length || e === this._items.length ? (0 === this._items.length && this.$stage.append(t), 0 !== this._items.length && this._items[e - 1].after(t), this._items.push(t), this._mergers.push(1 * t.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)) : (this._items[e].before(t), this._items.splice(e, 0, t), this._mergers.splice(e, 0, 1 * t.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)), this._items[n] && this.reset(this._items[n].index()), this.invalidate("items"), this.trigger("added", {
            content: t,
            position: e
        })
    }, u.prototype.remove = function (t) {
        (t = this.normalize(t, !0)) !== o && (this.trigger("remove", {
            content: this._items[t],
            position: t
        }), this._items[t].remove(), this._items.splice(t, 1), this._mergers.splice(t, 1), this.invalidate("items"), this.trigger("removed", {
            content: null,
            position: t
        }))
    }, u.prototype.preloadAutoWidthImages = function (t) {
        t.each(l.proxy(function (t, e) {
            this.enter("pre-loading"), e = l(e), l(new Image).one("load", l.proxy(function (t) {
                e.attr("src", t.target.src), e.css("opacity", 1), this.leave("pre-loading"), !this.is("pre-loading") && !this.is("initializing") && this.refresh()
            }, this)).attr("src", e.attr("src") || e.attr("data-src") || e.attr("data-src-retina"))
        }, this))
    }, u.prototype.destroy = function () {
        for (var t in this.$element.off(".owl.core"), this.$stage.off(".owl.core"), l(r).off(".owl.core"), !1 !== this.settings.responsive && (n.clearTimeout(this.resizeTimer), this.off(n, "resize", this._handlers.onThrottledResize)), this._plugins) this._plugins[t].destroy();
        this.$stage.children(".cloned").remove(), this.$stage.unwrap(), this.$stage.children().contents().unwrap(), this.$stage.children().unwrap(), this.$element.removeClass(this.options.refreshClass).removeClass(this.options.loadingClass).removeClass(this.options.loadedClass).removeClass(this.options.rtlClass).removeClass(this.options.dragClass).removeClass(this.options.grabClass).attr("class", this.$element.attr("class").replace(new RegExp(this.options.responsiveClass + "-\\S+\\s", "g"), "")).removeData("owl.carousel")
    }, u.prototype.op = function (t, e, n) {
        var i = this.settings.rtl;
        switch (e) {
            case "<":
                return i ? n < t : t < n;
            case ">":
                return i ? t < n : n < t;
            case ">=":
                return i ? t <= n : n <= t;
            case "<=":
                return i ? n <= t : t <= n
        }
    }, u.prototype.on = function (t, e, n, i) {
        t.addEventListener ? t.addEventListener(e, n, i) : t.attachEvent && t.attachEvent("on" + e, n)
    }, u.prototype.off = function (t, e, n, i) {
        t.removeEventListener ? t.removeEventListener(e, n, i) : t.detachEvent && t.detachEvent("on" + e, n)
    }, u.prototype.trigger = function (t, e, n, i, r) {
        var o = {
                item: {
                    count: this._items.length,
                    index: this.current()
                }
            },
            s = l.camelCase(l.grep(["on", t, n], function (t) {
                return t
            }).join("-").toLowerCase()),
            a = l.Event([t, "owl", n || "carousel"].join(".").toLowerCase(), l.extend({
                relatedTarget: this
            }, o, e));
        return this._supress[t] || (l.each(this._plugins, function (t, e) {
            e.onTrigger && e.onTrigger(a)
        }), this.register({
            type: u.Type.Event,
            name: t
        }), this.$element.trigger(a), this.settings && "function" == typeof this.settings[s] && this.settings[s].call(this, a)), a
    }, u.prototype.enter = function (t) {
        l.each([t].concat(this._states.tags[t] || []), l.proxy(function (t, e) {
            this._states.current[e] === o && (this._states.current[e] = 0), this._states.current[e]++
        }, this))
    }, u.prototype.leave = function (t) {
        l.each([t].concat(this._states.tags[t] || []), l.proxy(function (t, e) {
            this._states.current[e]--
        }, this))
    }, u.prototype.register = function (n) {
        if (n.type === u.Type.Event) {
            if (l.event.special[n.name] || (l.event.special[n.name] = {}), !l.event.special[n.name].owl) {
                var e = l.event.special[n.name]._default;
                l.event.special[n.name]._default = function (t) {
                    return !e || !e.apply || t.namespace && -1 !== t.namespace.indexOf("owl") ? t.namespace && -1 < t.namespace.indexOf("owl") : e.apply(this, arguments)
                }, l.event.special[n.name].owl = !0
            }
        } else n.type === u.Type.State && (this._states.tags[n.name] ? this._states.tags[n.name] = this._states.tags[n.name].concat(n.tags) : this._states.tags[n.name] = n.tags, this._states.tags[n.name] = l.grep(this._states.tags[n.name], l.proxy(function (t, e) {
            return l.inArray(t, this._states.tags[n.name]) === e
        }, this)))
    }, u.prototype.suppress = function (t) {
        l.each(t, l.proxy(function (t, e) {
            this._supress[e] = !0
        }, this))
    }, u.prototype.release = function (t) {
        l.each(t, l.proxy(function (t, e) {
            delete this._supress[e]
        }, this))
    }, u.prototype.pointer = function (t) {
        var e = {
            x: null,
            y: null
        };
        return (t = (t = t.originalEvent || t || n.event).touches && t.touches.length ? t.touches[0] : t.changedTouches && t.changedTouches.length ? t.changedTouches[0] : t).pageX ? (e.x = t.pageX, e.y = t.pageY) : (e.x = t.clientX, e.y = t.clientY), e
    }, u.prototype.isNumeric = function (t) {
        return !isNaN(parseFloat(t))
    }, u.prototype.difference = function (t, e) {
        return {
            x: t.x - e.x,
            y: t.y - e.y
        }
    }, l.fn.owlCarousel = function (e) {
        var i = Array.prototype.slice.call(arguments, 1);
        return this.each(function () {
            var t = l(this),
                n = t.data("owl.carousel");
            n || (n = new u(this, "object" == typeof e && e), t.data("owl.carousel", n), l.each(["next", "prev", "to", "destroy", "refresh", "replace", "add", "remove"], function (t, e) {
                n.register({
                    type: u.Type.Event,
                    name: e
                }), n.$element.on(e + ".owl.carousel.core", l.proxy(function (t) {
                    t.namespace && t.relatedTarget !== this && (this.suppress([e]), n[e].apply(this, [].slice.call(arguments, 1)), this.release([e]))
                }, n))
            })), "string" == typeof e && "_" !== e.charAt(0) && n[e].apply(n, i)
        })
    }, l.fn.owlCarousel.Constructor = u
}(window.Zepto || window.jQuery, window, document),
function (e, n, t, i) {
    var r = function (t) {
        this._core = t, this._interval = null, this._visible = null, this._handlers = {
            "initialized.owl.carousel": e.proxy(function (t) {
                t.namespace && this._core.settings.autoRefresh && this.watch()
            }, this)
        }, this._core.options = e.extend({}, r.Defaults, this._core.options), this._core.$element.on(this._handlers)
    };
    r.Defaults = {
        autoRefresh: !0,
        autoRefreshInterval: 500
    }, r.prototype.watch = function () {
        this._interval || (this._visible = this._core.$element.is(":visible"), this._interval = n.setInterval(e.proxy(this.refresh, this), this._core.settings.autoRefreshInterval))
    }, r.prototype.refresh = function () {
        this._core.$element.is(":visible") !== this._visible && (this._visible = !this._visible, this._core.$element.toggleClass("owl-hidden", !this._visible), this._visible && this._core.invalidate("width") && this._core.refresh())
    }, r.prototype.destroy = function () {
        var t, e;
        for (t in n.clearInterval(this._interval), this._handlers) this._core.$element.off(t, this._handlers[t]);
        for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
    }, e.fn.owlCarousel.Constructor.Plugins.AutoRefresh = r
}(window.Zepto || window.jQuery, window, document),
function (a, o, t, e) {
    var n = function (t) {
        this._core = t, this._loaded = [], this._handlers = {
            "initialized.owl.carousel change.owl.carousel resized.owl.carousel": a.proxy(function (t) {
                if (t.namespace && this._core.settings && this._core.settings.lazyLoad && (t.property && "position" == t.property.name || "initialized" == t.type))
                    for (var e = this._core.settings, n = e.center && Math.ceil(e.items / 2) || e.items, i = e.center && -1 * n || 0, r = (t.property && void 0 !== t.property.value ? t.property.value : this._core.current()) + i, o = this._core.clones().length, s = a.proxy(function (t, e) {
                            this.load(e)
                        }, this); i++ < n;) this.load(o / 2 + this._core.relative(r)), o && a.each(this._core.clones(this._core.relative(r)), s), r++
            }, this)
        }, this._core.options = a.extend({}, n.Defaults, this._core.options), this._core.$element.on(this._handlers)
    };
    n.Defaults = {
        lazyLoad: !1
    }, n.prototype.load = function (t) {
        var e = this._core.$stage.children().eq(t),
            n = e && e.find(".owl-lazy");
        !n || -1 < a.inArray(e.get(0), this._loaded) || (n.each(a.proxy(function (t, e) {
            var n, i = a(e),
                r = 1 < o.devicePixelRatio && i.attr("data-src-retina") || i.attr("data-src");
            this._core.trigger("load", {
                element: i,
                url: r
            }, "lazy"), i.is("img") ? i.one("load.owl.lazy", a.proxy(function () {
                i.css("opacity", 1), this._core.trigger("loaded", {
                    element: i,
                    url: r
                }, "lazy")
            }, this)).attr("src", r) : ((n = new Image).onload = a.proxy(function () {
                i.css({
                    "background-image": 'url("' + r + '")',
                    opacity: "1"
                }), this._core.trigger("loaded", {
                    element: i,
                    url: r
                }, "lazy")
            }, this), n.src = r)
        }, this)), this._loaded.push(e.get(0)))
    }, n.prototype.destroy = function () {
        var t, e;
        for (t in this.handlers) this._core.$element.off(t, this.handlers[t]);
        for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
    }, a.fn.owlCarousel.Constructor.Plugins.Lazy = n
}(window.Zepto || window.jQuery, window, document),
function (o, t, e, n) {
    var i = function (t) {
        this._core = t, this._handlers = {
            "initialized.owl.carousel refreshed.owl.carousel": o.proxy(function (t) {
                t.namespace && this._core.settings.autoHeight && this.update()
            }, this),
            "changed.owl.carousel": o.proxy(function (t) {
                t.namespace && this._core.settings.autoHeight && "position" == t.property.name && this.update()
            }, this),
            "loaded.owl.lazy": o.proxy(function (t) {
                t.namespace && this._core.settings.autoHeight && t.element.closest("." + this._core.settings.itemClass).index() === this._core.current() && this.update()
            }, this)
        }, this._core.options = o.extend({}, i.Defaults, this._core.options), this._core.$element.on(this._handlers)
    };
    i.Defaults = {
        autoHeight: !1,
        autoHeightClass: "owl-height"
    }, i.prototype.update = function () {
        var t, e = this._core._current,
            n = e + this._core.settings.items,
            i = this._core.$stage.children().toArray().slice(e, n),
            r = [];
        o.each(i, function (t, e) {
            r.push(o(e).height())
        }), t = Math.max.apply(null, r), this._core.$stage.parent().height(t).addClass(this._core.settings.autoHeightClass)
    }, i.prototype.destroy = function () {
        var t, e;
        for (t in this._handlers) this._core.$element.off(t, this._handlers[t]);
        for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
    }, o.fn.owlCarousel.Constructor.Plugins.AutoHeight = i
}(window.Zepto || window.jQuery, window, document),
function (c, t, e, n) {
    var i = function (t) {
        this._core = t, this._videos = {}, this._playing = null, this._handlers = {
            "initialized.owl.carousel": c.proxy(function (t) {
                t.namespace && this._core.register({
                    type: "state",
                    name: "playing",
                    tags: ["interacting"]
                })
            }, this),
            "resize.owl.carousel": c.proxy(function (t) {
                t.namespace && this._core.settings.video && this.isInFullScreen() && t.preventDefault()
            }, this),
            "refreshed.owl.carousel": c.proxy(function (t) {
                t.namespace && this._core.is("resizing") && this._core.$stage.find(".cloned .owl-video-frame").remove()
            }, this),
            "changed.owl.carousel": c.proxy(function (t) {
                t.namespace && "position" === t.property.name && this._playing && this.stop()
            }, this),
            "prepared.owl.carousel": c.proxy(function (t) {
                if (t.namespace) {
                    var e = c(t.content).find(".owl-video");
                    e.length && (e.css("display", "none"), this.fetch(e, c(t.content)))
                }
            }, this)
        }, this._core.options = c.extend({}, i.Defaults, this._core.options), this._core.$element.on(this._handlers), this._core.$element.on("click.owl.video", ".owl-video-play-icon", c.proxy(function (t) {
            this.play(t)
        }, this))
    };
    i.Defaults = {
        video: !1,
        videoHeight: !1,
        videoWidth: !1
    }, i.prototype.fetch = function (t, e) {
        var n = t.attr("data-vimeo-id") ? "vimeo" : t.attr("data-vzaar-id") ? "vzaar" : "youtube",
            i = t.attr("data-vimeo-id") || t.attr("data-youtube-id") || t.attr("data-vzaar-id"),
            r = t.attr("data-width") || this._core.settings.videoWidth,
            o = t.attr("data-height") || this._core.settings.videoHeight,
            s = t.attr("href");
        if (!s) throw new Error("Missing video URL.");
        if (-1 < (i = s.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/))[3].indexOf("youtu")) n = "youtube";
        else if (-1 < i[3].indexOf("vimeo")) n = "vimeo";
        else {
            if (!(-1 < i[3].indexOf("vzaar"))) throw new Error("Video URL not supported.");
            n = "vzaar"
        }
        i = i[6], this._videos[s] = {
            type: n,
            id: i,
            width: r,
            height: o
        }, e.attr("data-video", s), this.thumbnail(t, this._videos[s])
    }, i.prototype.thumbnail = function (e, t) {
        var n, i, r = t.width && t.height ? 'style="width:' + t.width + "px;height:" + t.height + 'px;"' : "",
            o = e.find("img"),
            s = "src",
            a = "",
            l = this._core.settings,
            u = function (t) {
                '<div class="owl-video-play-icon"></div>',
                n = l.lazyLoad ? '<div class="owl-video-tn ' + a + '" ' + s + '="' + t + '"></div>' : '<div class="owl-video-tn" style="opacity:1;background-image:url(' + t + ')"></div>',
                e.after(n),
                e.after('<div class="owl-video-play-icon"></div>')
            };
        if (e.wrap('<div class="owl-video-wrapper"' + r + "></div>"), this._core.settings.lazyLoad && (s = "data-src", a = "owl-lazy"), o.length) return u(o.attr(s)), o.remove(), !1;
        "youtube" === t.type ? (i = "//img.youtube.com/vi/" + t.id + "/hqdefault.jpg", u(i)) : "vimeo" === t.type ? c.ajax({
            type: "GET",
            url: "//vimeo.com/api/v2/video/" + t.id + ".json",
            jsonp: "callback",
            dataType: "jsonp",
            success: function (t) {
                i = t[0].thumbnail_large, u(i)
            }
        }) : "vzaar" === t.type && c.ajax({
            type: "GET",
            url: "//vzaar.com/api/videos/" + t.id + ".json",
            jsonp: "callback",
            dataType: "jsonp",
            success: function (t) {
                i = t.framegrab_url, u(i)
            }
        })
    }, i.prototype.stop = function () {
        this._core.trigger("stop", null, "video"), this._playing.find(".owl-video-frame").remove(), this._playing.removeClass("owl-video-playing"), this._playing = null, this._core.leave("playing"), this._core.trigger("stopped", null, "video")
    }, i.prototype.play = function (t) {
        var e, n = c(t.target).closest("." + this._core.settings.itemClass),
            i = this._videos[n.attr("data-video")],
            r = i.width || "100%",
            o = i.height || this._core.$stage.height();
        this._playing || (this._core.enter("playing"), this._core.trigger("play", null, "video"), n = this._core.items(this._core.relative(n.index())), this._core.reset(n.index()), "youtube" === i.type ? e = '<iframe width="' + r + '" height="' + o + '" src="//www.youtube.com/embed/' + i.id + "?autoplay=1&rel=0&v=" + i.id + '" frameborder="0" allowfullscreen></iframe>' : "vimeo" === i.type ? e = '<iframe src="//player.vimeo.com/video/' + i.id + '?autoplay=1" width="' + r + '" height="' + o + '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>' : "vzaar" === i.type && (e = '<iframe frameborder="0"height="' + o + '"width="' + r + '" allowfullscreen mozallowfullscreen webkitAllowFullScreen src="//view.vzaar.com/' + i.id + '/player?autoplay=true"></iframe>'), c('<div class="owl-video-frame">' + e + "</div>").insertAfter(n.find(".owl-video")), this._playing = n.addClass("owl-video-playing"))
    }, i.prototype.isInFullScreen = function () {
        var t = e.fullscreenElement || e.mozFullScreenElement || e.webkitFullscreenElement;
        return t && c(t).parent().hasClass("owl-video-frame")
    }, i.prototype.destroy = function () {
        var t, e;
        for (t in this._core.$element.off("click.owl.video"), this._handlers) this._core.$element.off(t, this._handlers[t]);
        for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
    }, c.fn.owlCarousel.Constructor.Plugins.Video = i
}(window.Zepto || window.jQuery, window, document),
function (s, t, e, n) {
    var i = function (t) {
        this.core = t, this.core.options = s.extend({}, i.Defaults, this.core.options), this.swapping = !0, this.previous = void 0, this.next = void 0, this.handlers = {
            "change.owl.carousel": s.proxy(function (t) {
                t.namespace && "position" == t.property.name && (this.previous = this.core.current(), this.next = t.property.value)
            }, this),
            "drag.owl.carousel dragged.owl.carousel translated.owl.carousel": s.proxy(function (t) {
                t.namespace && (this.swapping = "translated" == t.type)
            }, this),
            "translate.owl.carousel": s.proxy(function (t) {
                t.namespace && this.swapping && (this.core.options.animateOut || this.core.options.animateIn) && this.swap()
            }, this)
        }, this.core.$element.on(this.handlers)
    };
    i.Defaults = {
        animateOut: !1,
        animateIn: !1
    }, i.prototype.swap = function () {
        if (1 === this.core.settings.items && s.support.animation && s.support.transition) {
            this.core.speed(0);
            var t, e = s.proxy(this.clear, this),
                n = this.core.$stage.children().eq(this.previous),
                i = this.core.$stage.children().eq(this.next),
                r = this.core.settings.animateIn,
                o = this.core.settings.animateOut;
            this.core.current() !== this.previous && (o && (t = this.core.coordinates(this.previous) - this.core.coordinates(this.next), n.one(s.support.animation.end, e).css({
                left: t + "px"
            }).addClass("animated owl-animated-out").addClass(o)), r && i.one(s.support.animation.end, e).addClass("animated owl-animated-in").addClass(r))
        }
    }, i.prototype.clear = function (t) {
        s(t.target).css({
            left: ""
        }).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut), this.core.onTransitionEnd()
    }, i.prototype.destroy = function () {
        var t, e;
        for (t in this.handlers) this.core.$element.off(t, this.handlers[t]);
        for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
    }, s.fn.owlCarousel.Constructor.Plugins.Animate = i
}(window.Zepto || window.jQuery, window, document),
function (n, i, r, t) {
    var e = function (t) {
        this._core = t, this._timeout = null, this._paused = !1, this._handlers = {
            "changed.owl.carousel": n.proxy(function (t) {
                t.namespace && "settings" === t.property.name ? this._core.settings.autoplay ? this.play() : this.stop() : t.namespace && "position" === t.property.name && this._core.settings.autoplay && this._setAutoPlayInterval()
            }, this),
            "initialized.owl.carousel": n.proxy(function (t) {
                t.namespace && this._core.settings.autoplay && this.play()
            }, this),
            "play.owl.autoplay": n.proxy(function (t, e, n) {
                t.namespace && this.play(e, n)
            }, this),
            "stop.owl.autoplay": n.proxy(function (t) {
                t.namespace && this.stop()
            }, this),
            "mouseover.owl.autoplay": n.proxy(function () {
                this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause()
            }, this),
            "mouseleave.owl.autoplay": n.proxy(function () {
                this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.play()
            }, this),
            "touchstart.owl.core": n.proxy(function () {
                this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause()
            }, this),
            "touchend.owl.core": n.proxy(function () {
                this._core.settings.autoplayHoverPause && this.play()
            }, this)
        }, this._core.$element.on(this._handlers), this._core.options = n.extend({}, e.Defaults, this._core.options)
    };
    e.Defaults = {
        autoplay: !1,
        autoplayTimeout: 5e3,
        autoplayHoverPause: !1,
        autoplaySpeed: !1
    }, e.prototype.play = function (t, e) {
        this._paused = !1, this._core.is("rotating") || (this._core.enter("rotating"), this._setAutoPlayInterval())
    }, e.prototype._getNextTimeout = function (t, e) {
        return this._timeout && i.clearTimeout(this._timeout), i.setTimeout(n.proxy(function () {
            this._paused || this._core.is("busy") || this._core.is("interacting") || r.hidden || this._core.next(e || this._core.settings.autoplaySpeed)
        }, this), t || this._core.settings.autoplayTimeout)
    }, e.prototype._setAutoPlayInterval = function () {
        this._timeout = this._getNextTimeout()
    }, e.prototype.stop = function () {
        this._core.is("rotating") && (i.clearTimeout(this._timeout), this._core.leave("rotating"))
    }, e.prototype.pause = function () {
        this._core.is("rotating") && (this._paused = !0)
    }, e.prototype.destroy = function () {
        var t, e;
        for (t in this.stop(), this._handlers) this._core.$element.off(t, this._handlers[t]);
        for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
    }, n.fn.owlCarousel.Constructor.Plugins.autoplay = e
}(window.Zepto || window.jQuery, window, document),
function (o, t, e, n) {
    "use strict";
    var i = function (t) {
        this._core = t, this._initialized = !1, this._pages = [], this._controls = {}, this._templates = [], this.$element = this._core.$element, this._overrides = {
            next: this._core.next,
            prev: this._core.prev,
            to: this._core.to
        }, this._handlers = {
            "prepared.owl.carousel": o.proxy(function (t) {
                t.namespace && this._core.settings.dotsData && this._templates.push('<div class="' + this._core.settings.dotClass + '">' + o(t.content).find("[data-dot]").addBack("[data-dot]").attr("data-dot") + "</div>")
            }, this),
            "added.owl.carousel": o.proxy(function (t) {
                t.namespace && this._core.settings.dotsData && this._templates.splice(t.position, 0, this._templates.pop())
            }, this),
            "remove.owl.carousel": o.proxy(function (t) {
                t.namespace && this._core.settings.dotsData && this._templates.splice(t.position, 1)
            }, this),
            "changed.owl.carousel": o.proxy(function (t) {
                t.namespace && "position" == t.property.name && this.draw()
            }, this),
            "initialized.owl.carousel": o.proxy(function (t) {
                t.namespace && !this._initialized && (this._core.trigger("initialize", null, "navigation"), this.initialize(), this.update(), this.draw(), this._initialized = !0, this._core.trigger("initialized", null, "navigation"))
            }, this),
            "refreshed.owl.carousel": o.proxy(function (t) {
                t.namespace && this._initialized && (this._core.trigger("refresh", null, "navigation"), this.update(), this.draw(), this._core.trigger("refreshed", null, "navigation"))
            }, this)
        }, this._core.options = o.extend({}, i.Defaults, this._core.options), this.$element.on(this._handlers)
    };
    i.Defaults = {
        nav: !1,
        navText: ["prev", "next"],
        navSpeed: !1,
        navElement: "div",
        navContainer: !1,
        navContainerClass: "owl-nav",
        navClass: ["owl-prev", "owl-next"],
        slideBy: 1,
        dotClass: "owl-dot",
        dotsClass: "owl-dots",
        dots: !0,
        dotsEach: !1,
        dotsData: !1,
        dotsSpeed: !1,
        dotsContainer: !1
    }, i.prototype.initialize = function () {
        var t, n = this._core.settings;
        for (t in this._controls.$relative = (n.navContainer ? o(n.navContainer) : o("<div>").addClass(n.navContainerClass).appendTo(this.$element)).addClass("disabled"), this._controls.$previous = o("<" + n.navElement + ">").addClass(n.navClass[0]).html(n.navText[0]).prependTo(this._controls.$relative).on("click", o.proxy(function (t) {
                this.prev(n.navSpeed)
            }, this)), this._controls.$next = o("<" + n.navElement + ">").addClass(n.navClass[1]).html(n.navText[1]).appendTo(this._controls.$relative).on("click", o.proxy(function (t) {
                this.next(n.navSpeed)
            }, this)), n.dotsData || (this._templates = [o("<div>").addClass(n.dotClass).append(o("<span>")).prop("outerHTML")]), this._controls.$absolute = (n.dotsContainer ? o(n.dotsContainer) : o("<div>").addClass(n.dotsClass).appendTo(this.$element)).addClass("disabled"), this._controls.$absolute.on("click", "div", o.proxy(function (t) {
                var e = o(t.target).parent().is(this._controls.$absolute) ? o(t.target).index() : o(t.target).parent().index();
                t.preventDefault(), this.to(e, n.dotsSpeed)
            }, this)), this._overrides) this._core[t] = o.proxy(this[t], this)
    }, i.prototype.destroy = function () {
        var t, e, n, i;
        for (t in this._handlers) this.$element.off(t, this._handlers[t]);
        for (e in this._controls) this._controls[e].remove();
        for (i in this.overides) this._core[i] = this._overrides[i];
        for (n in Object.getOwnPropertyNames(this)) "function" != typeof this[n] && (this[n] = null)
    }, i.prototype.update = function () {
        var t, e, n = this._core.clones().length / 2,
            i = n + this._core.items().length,
            r = this._core.maximum(!0),
            o = this._core.settings,
            s = o.center || o.autoWidth || o.dotsData ? 1 : o.dotsEach || o.items;
        if ("page" !== o.slideBy && (o.slideBy = Math.min(o.slideBy, o.items)), o.dots || "page" == o.slideBy)
            for (this._pages = [], t = n, e = 0; t < i; t++) {
                if (s <= e || 0 === e) {
                    if (this._pages.push({
                            start: Math.min(r, t - n),
                            end: t - n + s - 1
                        }), Math.min(r, t - n) === r) break;
                    e = 0, 0
                }
                e += this._core.mergers(this._core.relative(t))
            }
    }, i.prototype.draw = function () {
        var t, e = this._core.settings,
            n = this._core.items().length <= e.items,
            i = this._core.relative(this._core.current()),
            r = e.loop || e.rewind;
        this._controls.$relative.toggleClass("disabled", !e.nav || n), e.nav && (this._controls.$previous.toggleClass("disabled", !r && i <= this._core.minimum(!0)), this._controls.$next.toggleClass("disabled", !r && i >= this._core.maximum(!0))), this._controls.$absolute.toggleClass("disabled", !e.dots || n), e.dots && (t = this._pages.length - this._controls.$absolute.children().length, e.dotsData && 0 !== t ? this._controls.$absolute.html(this._templates.join("")) : 0 < t ? this._controls.$absolute.append(new Array(t + 1).join(this._templates[0])) : t < 0 && this._controls.$absolute.children().slice(t).remove(), this._controls.$absolute.find(".active").removeClass("active"), this._controls.$absolute.children().eq(o.inArray(this.current(), this._pages)).addClass("active"))
    }, i.prototype.onTrigger = function (t) {
        var e = this._core.settings;
        t.page = {
            index: o.inArray(this.current(), this._pages),
            count: this._pages.length,
            size: e && (e.center || e.autoWidth || e.dotsData ? 1 : e.dotsEach || e.items)
        }
    }, i.prototype.current = function () {
        var n = this._core.relative(this._core.current());
        return o.grep(this._pages, o.proxy(function (t, e) {
            return t.start <= n && t.end >= n
        }, this)).pop()
    }, i.prototype.getPosition = function (t) {
        var e, n, i = this._core.settings;
        return "page" == i.slideBy ? (e = o.inArray(this.current(), this._pages), n = this._pages.length, t ? ++e : --e, e = this._pages[(e % n + n) % n].start) : (e = this._core.relative(this._core.current()), n = this._core.items().length, t ? e += i.slideBy : e -= i.slideBy), e
    }, i.prototype.next = function (t) {
        o.proxy(this._overrides.to, this._core)(this.getPosition(!0), t)
    }, i.prototype.prev = function (t) {
        o.proxy(this._overrides.to, this._core)(this.getPosition(!1), t)
    }, i.prototype.to = function (t, e, n) {
        var i;
        !n && this._pages.length ? (i = this._pages.length, o.proxy(this._overrides.to, this._core)(this._pages[(t % i + i) % i].start, e)) : o.proxy(this._overrides.to, this._core)(t, e)
    }, o.fn.owlCarousel.Constructor.Plugins.Navigation = i
}(window.Zepto || window.jQuery, window, document),
function (i, r, t, e) {
    "use strict";
    var n = function (t) {
        this._core = t, this._hashes = {}, this.$element = this._core.$element, this._handlers = {
            "initialized.owl.carousel": i.proxy(function (t) {
                t.namespace && "URLHash" === this._core.settings.startPosition && i(r).trigger("hashchange.owl.navigation")
            }, this),
            "prepared.owl.carousel": i.proxy(function (t) {
                if (t.namespace) {
                    var e = i(t.content).find("[data-hash]").addBack("[data-hash]").attr("data-hash");
                    if (!e) return;
                    this._hashes[e] = t.content
                }
            }, this),
            "changed.owl.carousel": i.proxy(function (t) {
                if (t.namespace && "position" === t.property.name) {
                    var n = this._core.items(this._core.relative(this._core.current())),
                        e = i.map(this._hashes, function (t, e) {
                            return t === n ? e : null
                        }).join();
                    if (!e || r.location.hash.slice(1) === e) return;
                    r.location.hash = e
                }
            }, this)
        }, this._core.options = i.extend({}, n.Defaults, this._core.options), this.$element.on(this._handlers), i(r).on("hashchange.owl.navigation", i.proxy(function (t) {
            var e = r.location.hash.substring(1),
                n = this._core.$stage.children(),
                i = this._hashes[e] && n.index(this._hashes[e]);
            void 0 !== i && i !== this._core.current() && this._core.to(this._core.relative(i), !1, !0)
        }, this))
    };
    n.Defaults = {
        URLhashListener: !1
    }, n.prototype.destroy = function () {
        var t, e;
        for (t in i(r).off("hashchange.owl.navigation"), this._handlers) this._core.$element.off(t, this._handlers[t]);
        for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
    }, i.fn.owlCarousel.Constructor.Plugins.Hash = n
}(window.Zepto || window.jQuery, window, document),
function (r, t, e, o) {
    function n(t, n) {
        var i = !1,
            e = t.charAt(0).toUpperCase() + t.slice(1);
        return r.each((t + " " + a.join(e + " ") + e).split(" "), function (t, e) {
            if (s[e] !== o) return i = !n || e, !1
        }), i
    }

    function i(t) {
        return n(t, !0)
    }
    var s = r("<support>").get(0).style,
        a = "Webkit Moz O ms".split(" "),
        l = {
            transition: {
                end: {
                    WebkitTransition: "webkitTransitionEnd",
                    MozTransition: "transitionend",
                    OTransition: "oTransitionEnd",
                    transition: "transitionend"
                }
            },
            animation: {
                end: {
                    WebkitAnimation: "webkitAnimationEnd",
                    MozAnimation: "animationend",
                    OAnimation: "oAnimationEnd",
                    animation: "animationend"
                }
            }
        },
        u = function () {
            return !!n("transform")
        },
        c = function () {
            return !!n("perspective")
        },
        h = function () {
            return !!n("animation")
        };
    (function () {
        return !!n("transition")
    })() && (r.support.transition = new String(i("transition")), r.support.transition.end = l.transition.end[r.support.transition]), h() && (r.support.animation = new String(i("animation")), r.support.animation.end = l.animation.end[r.support.animation]), u() && (r.support.transform = new String(i("transform")), r.support.transform3d = c())
}(window.Zepto || window.jQuery, window, document),
function (U) {
    null == U.fn.inputmask && (U.inputmask = {
        defaults: {
            placeholder: "_",
            optionalmarker: {
                start: "[",
                end: "]"
            },
            escapeChar: "\\",
            mask: null,
            oncomplete: U.noop,
            onincomplete: U.noop,
            oncleared: U.noop,
            repeat: 0,
            greedy: !0,
            autoUnmask: !1,
            clearMaskOnLostFocus: !0,
            insertMode: !0,
            clearIncomplete: !1,
            aliases: {},
            onKeyUp: U.noop,
            onKeyDown: U.noop,
            showMaskOnFocus: !0,
            showMaskOnHover: !0,
            onKeyValidation: U.noop,
            skipOptionalPartCharacter: " ",
            numericInput: !1,
            radixPoint: "",
            definitions: {
                9: {
                    validator: "[0-9]",
                    cardinality: 1
                },
                a: {
                    validator: "[A-Za-zА-яЁё]",
                    cardinality: 1
                },
                "*": {
                    validator: "[A-Za-zА-яЁё0-9]",
                    cardinality: 1
                }
            },
            keyCode: {
                ALT: 18,
                BACKSPACE: 8,
                CAPS_LOCK: 20,
                COMMA: 188,
                COMMAND: 91,
                COMMAND_LEFT: 91,
                COMMAND_RIGHT: 93,
                CONTROL: 17,
                DELETE: 46,
                DOWN: 40,
                END: 35,
                ENTER: 13,
                ESCAPE: 27,
                HOME: 36,
                INSERT: 45,
                LEFT: 37,
                MENU: 93,
                NUMPAD_ADD: 107,
                NUMPAD_DECIMAL: 110,
                NUMPAD_DIVIDE: 111,
                NUMPAD_ENTER: 108,
                NUMPAD_MULTIPLY: 106,
                NUMPAD_SUBTRACT: 109,
                PAGE_DOWN: 34,
                PAGE_UP: 33,
                PERIOD: 190,
                RIGHT: 39,
                SHIFT: 16,
                SPACE: 32,
                TAB: 9,
                UP: 38,
                WINDOWS: 91
            },
            ignorables: [9, 13, 19, 27, 33, 34, 35, 36, 37, 38, 39, 40, 45, 46, 93, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123],
            getMaskLength: function (t, e, n, i, r) {
                var o = t.length;
                return !e && 1 < n && (o += t.length * (n - 1)), o
            }
        },
        val: U.fn.val,
        escapeRegex: function (t) {
            return t.replace(new RegExp("(\\" + ["/", ".", "*", "+", "?", "|", "(", ")", "[", "]", "{", "}", "\\"].join("|\\") + ")", "gim"), "\\$1")
        }
    }, U.fn.inputmask = function (t, e) {
        var a, T = U.extend(!0, {}, U.inputmask.defaults, e),
            c = function (t) {
                var e = document.createElement("input"),
                    n = (t = "on" + t) in e;
                n || (e.setAttribute(t, "return;"), n = "function" == typeof e[t]);
                return e = null, n
            }("paste") ? "paste" : "input",
            h = null != navigator.userAgent.match(/iphone/i),
            $ = null != navigator.userAgent.match(/android.*safari.*/i);
        if ($) {
            var n = navigator.userAgent.match(/safari.*/i),
                i = parseInt(new RegExp(/[0-9]+/).exec(n));
            $ = i <= 533, a = 533 < i <= 534
        }
        var d, p = 0;
        if ("string" == typeof t) switch (t) {
            case "mask":
                return r(T.alias, e), d = o(), this.each(function () {
                    y(this)
                });
            case "unmaskedvalue":
                return d = this.data("inputmask").masksets, p = this.data("inputmask").activeMasksetIndex, T.definitions = this.data("inputmask").definitions, l(this);
            case "remove":
                return this.each(function () {
                    var e = U(this),
                        n = this;
                    setTimeout(function () {
                        var t;
                        e.data("inputmask") && (d = e.data("inputmask").masksets, p = e.data("inputmask").activeMasksetIndex, T.definitions = e.data("inputmask").definitions, n._valueSet(l(e, !0)), e.removeData("inputmask"), e.unbind(".inputmask"), e.removeClass("focus.inputmask"), Object.getOwnPropertyDescriptor && (t = Object.getOwnPropertyDescriptor(n, "value")), t && t.get ? n._valueGet && Object.defineProperty(n, "value", {
                            get: n._valueGet,
                            set: n._valueSet
                        }) : document.__lookupGetter__ && n.__lookupGetter__("value") && n._valueGet && (n.__defineGetter__("value", n._valueGet), n.__defineSetter__("value", n._valueSet)), delete n._valueGet, delete n._valueSet)
                    }, 0)
                });
            case "getemptymask":
                return this.data("inputmask") ? (d = this.data("inputmask").masksets, p = this.data("inputmask").activeMasksetIndex, d[p]._buffer.join("")) : "";
            case "hasMaskedValue":
                return !!this.data("inputmask") && !this.data("inputmask").autoUnmask;
            case "isComplete":
                return d = this.data("inputmask").masksets, p = this.data("inputmask").activeMasksetIndex, T.definitions = this.data("inputmask").definitions, G(this[0].split(""));
            default:
                return r(t, e) || (T.mask = t), d = o(), this.each(function () {
                    y(this)
                })
        } else {
            if ("object" == typeof t) return r((T = U.extend(!0, {}, U.inputmask.defaults, t)).alias, t), d = o(), this.each(function () {
                y(this)
            });
            if (null == t) return this.each(function () {
                var t = U(this).attr("data-inputmask");
                if (t && "" != t) try {
                    t = t.replace(new RegExp("'", "g"), '"');
                    var e = U.parseJSON("{" + t + "}");
                    r((T = U.extend(!0, {}, U.inputmask.defaults, e)).alias, e), T.alias = void 0, U(this).inputmask(T)
                } catch (t) {}
            })
        }

        function r(t, e) {
            var n = T.aliases[t];
            return !!n && (n.alias && r(n.alias), U.extend(!0, T, n), U.extend(!0, T, e), !0)
        }

        function u(t) {
            var o = !1,
                s = 0,
                e = T.greedy,
                n = T.repeat;
            1 == t.length && 0 == e && (T.placeholder = "");
            for (var i = U.map(t.split(""), function (t, e) {
                    var n = [];
                    if (t == T.escapeChar) o = !0;
                    else if (t != T.optionalmarker.start && t != T.optionalmarker.end || o) {
                        var i = T.definitions[t];
                        if (i && !o)
                            for (var r = 0; r < i.cardinality; r++) n.push(N(s + r));
                        else n.push(t), o = !1;
                        return s += n.length, n
                    }
                }), r = i.slice(), a = 1; a < n && e; a++) r = r.concat(i.slice());
            return {
                mask: r,
                repeat: n,
                greedy: e
            }
        }

        function f(t) {
            var c = !1,
                h = !1,
                d = !1;
            return U.map(t.split(""), function (t, e) {
                var n = [];
                if (t == T.escapeChar) h = !0;
                else if (t != T.optionalmarker.start || h) {
                    if (t != T.optionalmarker.end || h) {
                        var i = T.definitions[t];
                        if (i && !h) {
                            for (var r = i.prevalidator, o = r ? r.length : 0, s = 1; s < i.cardinality; s++) {
                                var a = s <= o ? r[s - 1] : [],
                                    l = a.validator,
                                    u = a.cardinality;
                                n.push({
                                    fn: l ? "string" == typeof l ? new RegExp(l) : new function () {
                                        this.test = l
                                    } : new RegExp("."),
                                    cardinality: u || 1,
                                    optionality: c,
                                    newBlockMarker: 1 == c && d,
                                    offset: 0,
                                    casing: i.casing,
                                    def: t
                                }), 1 == c && (d = !1)
                            }
                            n.push({
                                fn: i.validator ? "string" == typeof i.validator ? new RegExp(i.validator) : new function () {
                                    this.test = i.validator
                                } : new RegExp("."),
                                cardinality: i.cardinality,
                                optionality: c,
                                newBlockMarker: d,
                                offset: 0,
                                casing: i.casing,
                                def: t
                            })
                        } else n.push({
                            fn: null,
                            cardinality: 0,
                            optionality: c,
                            newBlockMarker: d,
                            offset: 0,
                            casing: null,
                            def: t
                        }), h = !1;
                        return d = !1, n
                    }
                    d = !(c = !1)
                } else d = c = !0
            })
        }

        function o() {
            var a = [];

            function l(t) {
                return T.optionalmarker.start + t + T.optionalmarker.end
            }
            return function t(e, n) {
                var i, r, o = n.split(T.optionalmarker.end, 2),
                    s = o[0].split(T.optionalmarker.start);
                1 < s.length ? (r = u(i = e + s[0] + l(s[1]) + (1 < o.length ? o[1] : "")), a.push({
                    _buffer: r.mask,
                    tests: f(i),
                    lastValidPosition: 0,
                    greedy: r.greedy,
                    repeat: r.repeat
                }), r = u(i = e + s[0] + (1 < o.length ? o[1] : "")), a.push({
                    _buffer: r.mask,
                    tests: f(i),
                    lastValidPosition: 0,
                    greedy: r.greedy,
                    repeat: r.repeat
                }), 1 < o.length && 1 < o[1].split(T.optionalmarker.start).length && (t(e + s[0] + l(s[1]), o[1]), t(e + s[0], o[1]))) : (r = u(i = e + o), a.push({
                    _buffer: r.mask,
                    tests: f(i),
                    lastValidPosition: 0,
                    greedy: r.greedy,
                    repeat: r.repeat
                }))
            }("", T.mask.toString()), a
        }

        function E() {
            return d[p]
        }

        function D() {
            return E().tests
        }

        function A() {
            return E()._buffer
        }

        function S(r, s, a, l, o) {
            function u(t, e) {
                for (var n = j(t), i = s ? 1 : 0, r = "", o = e.tests[n].cardinality; i < o; o--) r += z(a, n - (o - 1));
                return s && (r += s), null != e.tests[n].fn && e.tests[n].fn.test(r, a, t, l, T)
            }
            if (l) return u(r, E());
            var c = [],
                t = !1,
                h = p;
            return U.each(d, function (t, e) {
                var n = this,
                    i = r;
                if (h != (p = t) && !I(r)) {
                    if (s == n._buffer[i] || s == T.skipOptionalPartCharacter) return c[t] = {
                        refresh: !0
                    }, n.lastValidPosition = i, !1;
                    i = o ? L(a, r) : O(a, r)
                }(o || T.numericInput ? n.lastValidPosition <= T.numericInput ? P(a) : O(a, i) : n.lastValidPosition >= L(a, i)) && 0 <= i && i < P(a) && (c[t] = u(i, n), !1 !== c[t] ? (!0 === c[t] && (c[t] = {
                    pos: i
                }), n.lastValidPosition = c[t].pos || i) : n.lastValidPosition = o ? O(a, r) : L(a, r))
            }), g(a, r, p = h, o), t = c[p] || t, setTimeout(function () {
                T.onKeyValidation.call(this, t, T)
            }, 0), t
        }

        function g(s, a, l, u) {
            U.each(d, function (t, e) {
                if (u || T.numericInput ? this.lastValidPosition <= a : this.lastValidPosition >= a) {
                    if ((p = t) != l) {
                        var n = P(s),
                            i = A();
                        (u || T.numericInput) && (s.reverse(), i.reverse());
                        for (var r = s.length = a; r < n; r++) {
                            var o = j(r);
                            M(s, r, z(i, o))
                        }
                        u && s.reverse()
                    }
                    return !1
                }
            })
        }

        function I(t) {
            var e = j(t),
                n = D()[e];
            return null != n && n.fn
        }

        function j(t) {
            return t % D().length
        }

        function N(t) {
            return T.placeholder.charAt(t % T.placeholder.length)
        }

        function P(t) {
            return T.getMaskLength(A(), E().greedy, E().repeat, t, T)
        }

        function O(t, e) {
            var n = P(t);
            if (n <= e) return n;
            for (var i = e; ++i < n && !I(i););
            return i
        }

        function L(t, e) {
            var n = e;
            if (n <= 0) return 0;
            for (; 0 < --n && !I(n););
            return n
        }

        function M(t, e, n) {
            var i = D()[j(e)],
                r = n;
            if (null != r) switch (i.casing) {
                case "upper":
                    r = n.toUpperCase();
                    break;
                case "lower":
                    r = n.toLowerCase()
            }
            t[e] = r
        }

        function z(t, e, n) {
            return n && (e = H(t, e)), t[e]
        }

        function H(t, e, n) {
            var i;
            if (n)
                for (; e < 0 && t.length < P(t);)
                    for (i = A().length - 1, e = A().length; void 0 !== A()[i];) t.unshift(A()[i--]);
            else
                for (; null == t[e] && t.length < P(t);)
                    for (i = 0; void 0 !== A()[i];) t.push(A()[i++]);
            return e
        }

        function q(t, e, n) {
            t._valueSet(e.join("")), null != n && ($ ? setTimeout(function () {
                F(t, n)
            }, 100) : F(t, n))
        }

        function R(t, e, n) {
            for (var i = e, r = P(t); i < n && i < r; i++) M(t, i, z(A().slice(), i))
        }

        function W(t, e) {
            var n = j(e);
            M(t, e, z(A(), n))
        }

        function m(t, e, n, i) {
            var r = U(t).data("inputmask").isRTL,
                o = B(t._valueGet(), r).split(""),
                s = P(e);
            if (r) {
                var a = o.reverse();
                a.length = s;
                for (var l = 0; l < s; l++) {
                    var u = j(s - (l + 1));
                    null == D()[u].fn && a[l] != z(A(), u) ? (a.splice(l, 0, z(A(), u)), a.length = s) : a[l] = a[l] || z(A(), u)
                }
                o = a.reverse()
            }
            R(e, 0, e.length), e.length = A().length;
            var c, h = -1,
                d = -1,
                p = o.length,
                f = 0 == p ? s : -1;
            for (l = 0; l < p; l++)
                for (var g = d + 1; g < s; g++) {
                    if (I(g)) {
                        var m = o[l];
                        !1 !== (c = S(g, m, e, !n, r)) ? (!0 !== c && (g = null != c.pos ? c.pos : g, m = null != c.c ? c.c : m), M(e, g, m), h = d = g) : (W(e, g), m == N(g) && (f = d = g));
                        break
                    }
                    if (W(e, g), h == d && (h = g), d = g, o[l] == z(e, g)) break
                }
            if (0 == E().greedy)
                for (var v = B(e.join(""), r).split(""); e.length != v.length;) r ? e.shift() : e.pop();
            return n && q(t, e), r ? T.numericInput ? "" != T.radixPoint && -1 != U.inArray(T.radixPoint, e) && !0 !== i ? U.inArray(T.radixPoint, e) : O(e, s) : O(e, f) : O(e, h)
        }

        function s(t) {
            return U.inputmask.escapeRegex.call(this, t)
        }

        function B(t, e) {
            return e ? t.replace(new RegExp("^(" + s(A().join("")) + ")*"), "") : t.replace(new RegExp("(" + s(A().join("")) + ")*$"), "")
        }

        function v(t, e) {
            m(t, e, !1);
            var n = e.slice();
            if (U(t).data("inputmask").isRTL)
                for (var i = 0; i <= n.length - 1; i++) {
                    var r = j(i);
                    if (!D()[r].optionality) break;
                    if (I(i) && S(i, e[i], e, !0)) break;
                    n.splice(0, 1)
                } else
                    for (i = n.length - 1; 0 <= i; i--) {
                        r = j(i);
                        if (!D()[r].optionality) break;
                        if (I(i) && S(i, e[i], e, !0)) break;
                        n.pop()
                    }
            q(t, n)
        }

        function l(t, e) {
            var n = t[0];
            if (!D() || !0 !== e && t.hasClass("hasDatepicker")) return n._valueGet();
            var i = A().slice();
            return m(n, i), U.map(i, function (t, e) {
                return I(e) && S(e, t, i, !0) ? t : null
            }).join("")
        }

        function F(t, e, n) {
            var i = t.jquery && 0 < t.length ? t[0] : t;
            if ("number" != typeof e) {
                if (!U(t).is(":visible")) return {
                    begin: 0,
                    end: 0
                };
                var r = $ ? o : null,
                    o = null;
                if (null == r) {
                    if (i.setSelectionRange) e = i.selectionStart, n = i.selectionEnd;
                    else if (document.selection && document.selection.createRange) {
                        n = (e = 0 - (s = document.selection.createRange()).duplicate().moveStart("character", -1e5)) + s.text.length
                    }
                    r = {
                        begin: e,
                        end: n
                    }
                }
                return r
            }
            if (U(t).is(":visible")) {
                if (n = "number" == typeof n ? n : e, 0 == T.insertMode && e == n && n++, i.setSelectionRange) n == e ? (i.focus(), i.setSelectionRange(e, n)) : (i.select(), i.selectionStart = e, i.selectionEnd = a ? e : n);
                else if (i.createTextRange) {
                    var s;
                    (s = i.createTextRange()).collapse(!0), s.moveEnd("character", n), s.moveStart("character", e), s.select()
                }
                i.focus(), $ && n != i.selectionEnd && (o = {
                    begin: e,
                    end: n
                })
            }
        }

        function G(s) {
            var a = !1;
            return currentActiveMasksetIndex = p, highestValidPosition = 0, U.each(d, function (t, e) {
                p = t;
                var n = P(s);
                if (e.lastValidPosition >= highestValidPosition && e.lastValidPosition == n - 1) {
                    for (var i = !0, r = 0; r < n; r++) {
                        var o = I(r);
                        if (o && s[r] == N(r) || !o && s[r] != A()[r]) {
                            i = !1;
                            break
                        }
                    }
                    if (a = a || i) return !1
                }
                highestValidPosition = e.lastValidPosition
            }), p = currentActiveMasksetIndex, a
        }

        function y(t) {
            var e = U(t);
            if (e.is(":input")) {
                var y = A().slice();
                E().greedy = E().greedy ? E().greedy : 0 == E().repeat;
                var n = e.prop("maxLength");
                P(y) > n && -1 < n && (n < A().length && (A().length = n), 0 == E().greedy && (E().repeat = Math.round(n / A().length)), e.prop("maxLength", 2 * P(y))), e.data("inputmask", {
                        masksets: d,
                        activeMasksetIndex: p,
                        autoUnmask: T.autoUnmask,
                        definitions: T.definitions,
                        isRTL: !1
                    }),
                    function (t) {
                        var e;
                        Object.getOwnPropertyDescriptor && (e = Object.getOwnPropertyDescriptor(t, "value"));
                        e && e.get ? t._valueGet || (t._valueGet = e.get, t._valueSet = e.set, Object.defineProperty(t, "value", {
                            get: function () {
                                var t = U(this),
                                    e = U(this).data("inputmask"),
                                    n = e.masksets,
                                    i = e.activeMasksetIndex;
                                return e && e.autoUnmask ? t.inputmask("unmaskedvalue") : this._valueGet() != n[i]._buffer.join("") ? this._valueGet() : ""
                            },
                            set: function (t) {
                                this._valueSet(t), U(this).triggerHandler("setvalue.inputmask")
                            }
                        })) : document.__lookupGetter__ && t.__lookupGetter__("value") ? t._valueGet || (t._valueGet = t.__lookupGetter__("value"), t._valueSet = t.__lookupSetter__("value"), t.__defineGetter__("value", function () {
                            var t = U(this),
                                e = U(this).data("inputmask"),
                                n = e.masksets,
                                i = e.activeMasksetIndex;
                            return e && e.autoUnmask ? t.inputmask("unmaskedvalue") : this._valueGet() != n[i]._buffer.join("") ? this._valueGet() : ""
                        }), t.__defineSetter__("value", function (t) {
                            this._valueSet(t), U(this).triggerHandler("setvalue.inputmask")
                        })) : (t._valueGet || (t._valueGet = function () {
                            return this.value
                        }, t._valueSet = function (t) {
                            this.value = t
                        }), 1 != U.fn.val.inputmaskpatch && (U.fn.val = function () {
                            if (0 == arguments.length) {
                                var t = U(this);
                                if (t.data("inputmask")) {
                                    if (t.data("inputmask").autoUnmask) return t.inputmask("unmaskedvalue");
                                    var e = U.inputmask.val.apply(t),
                                        n = U(this).data("inputmask"),
                                        i = n.masksets,
                                        r = n.activeMasksetIndex;
                                    return e != i[r]._buffer.join("") ? e : ""
                                }
                                return U.inputmask.val.apply(t)
                            }
                            var o = arguments;
                            return this.each(function () {
                                var t = U(this),
                                    e = U.inputmask.val.apply(t, o);
                                return t.data("inputmask") && t.triggerHandler("setvalue.inputmask"), e
                            })
                        }, U.extend(U.fn.val, {
                            inputmaskpatch: !0
                        })))
                    }(t);
                y = A().slice();
                var i, r, o, a = t._valueGet(),
                    b = !1,
                    x = !1,
                    s = -1,
                    w = O(y, -1),
                    _ = (L(0, P(y)), !1);
                if ("rtl" == t.dir || T.numericInput) {
                    t.dir = "ltr", e.css("text-align", "right"), e.removeAttr("dir");
                    var l = e.data("inputmask");
                    l.isRTL = !0, e.data("inputmask", l), _ = !0
                }
                e.unbind(".inputmask"), e.removeClass("focus.inputmask"), e.bind("mouseenter.inputmask", function () {
                    if (!U(this).hasClass("focus.inputmask") && T.showMaskOnHover) {
                        var t = this._valueGet().length;
                        t < y.length && (0 == t && (y = A().slice()), q(this, y))
                    }
                }).bind("blur.inputmask", function () {
                    var t = U(this),
                        e = this,
                        n = e._valueGet();
                    t.removeClass("focus.inputmask"), n != a && t.change(), T.clearMaskOnLostFocus && "" != n && (n == A().join("") ? e._valueSet("") : v(e, y)), G(y) || (t.trigger("incomplete"), T.clearIncomplete && (T.clearMaskOnLostFocus ? e._valueSet("") : q(e, y = A().slice())))
                }).bind("focus.inputmask", function () {
                    var t = U(this),
                        e = this._valueGet();
                    if (T.showMaskOnFocus && !t.hasClass("focus.inputmask") && (!T.showMaskOnHover || T.showMaskOnHover && "" == e)) {
                        var n = e.length;
                        n < y.length && (0 == n && (y = A().slice()), F(this, m(this, y, !0)))
                    }
                    t.addClass("focus.inputmask"), a = this._valueGet()
                }).bind("mouseleave.inputmask", function () {
                    var t = U(this);
                    T.clearMaskOnLostFocus && (t.hasClass("focus.inputmask") || (this._valueGet() == A().join("") || "" == this._valueGet() ? this._valueSet("") : v(this, y)))
                }).bind("click.inputmask", function () {
                    var n = this;
                    setTimeout(function () {
                        var t = F(n);
                        if (t.begin == t.end) {
                            var e = t.begin;
                            s = m(n, y, !1), u(n, t), F(n, _ ? s < e && (!1 !== S(e, y[e], y, !0, _) || !I(e)) ? e : s : e < s && (!1 !== S(e, y[e], y, !0, _) || !I(e)) ? e : s)
                        }
                    }, 0)
                }).bind("dblclick.inputmask", function () {
                    var t = this;
                    setTimeout(function () {
                        F(t, 0, s)
                    }, 0)
                }).bind("keydown.inputmask", function (e) {
                    b = !1;
                    var n = this,
                        t = e.keyCode,
                        i = F(n);
                    if (u(n, i), t == T.keyCode.BACKSPACE || t == T.keyCode.DELETE || h && 127 == t) {
                        var r = P(y);
                        if (0 == i.begin && i.end == r) p = 0, y = A().slice(), q(n, y), F(n, m(n, y, !1));
                        else if (1 < i.end - i.begin || i.end - i.begin == 1 && T.insertMode) R(y, i.begin, i.end), g(y, i.begin, p), q(n, y, _ ? m(n, y, !1) : i.begin);
                        else {
                            var o = i.begin;
                            t == T.keyCode.DELETE ? (o < w && (o = w), o < r && (o = T.numericInput && "" != T.radixPoint && y[o] == T.radixPoint ? k(o = y.length - 1 == o ? o : O(y, o), r) : _ ? (o = C(w, o, N(o), !0), O(y, o)) : k(o, r), g(y, o, p), q(n, y, o))) : t == T.keyCode.BACKSPACE && w < o && (o -= 1, T.numericInput && "" != T.radixPoint && y[o] == T.radixPoint ? (o = C(w, y.length - 1 == o ? o : o - 1, N(o), !0), o++) : o = _ ? (o = C(w, o, N(o), !0), y[o + 1] == T.radixPoint ? o + 1 : O(y, o)) : k(o, r), g(y, o, p), q(n, y, o))
                        }
                        n._valueGet() == A().join("") && U(n).trigger("cleared"), e.preventDefault()
                    } else if (t == T.keyCode.END || t == T.keyCode.PAGE_DOWN) setTimeout(function () {
                        var t = m(n, y, !1, !0);
                        T.insertMode || t != P(y) || e.shiftKey || t--, F(n, e.shiftKey ? i.begin : t, t)
                    }, 0);
                    else if (t == T.keyCode.HOME || t == T.keyCode.PAGE_UP) F(n, 0, e.shiftKey ? i.begin : 0);
                    else if (t == T.keyCode.ESCAPE) n._valueSet(a), F(n, 0, m(n, y));
                    else if (t == T.keyCode.INSERT) T.insertMode = !T.insertMode, F(n, T.insertMode || i.begin != P(y) ? i.begin : i.begin - 1);
                    else if (e.ctrlKey && 88 == t) setTimeout(function () {
                        F(n, m(n, y, !0))
                    }, 0);
                    else if (!T.insertMode)
                        if (t == T.keyCode.RIGHT) {
                            var s = i.begin == i.end ? i.end + 1 : i.end;
                            s = s < P(y) ? s : i.end, F(n, e.shiftKey ? i.begin : s, e.shiftKey ? s + 1 : s)
                        } else if (t == T.keyCode.LEFT) {
                        var s = i.begin - 1;
                        F(n, s = 0 < s ? s : 0, e.shiftKey ? i.end : s)
                    }
                    T.onKeyDown.call(this, e, y, T), x = -1 != U.inArray(t, T.ignorables)
                }).bind("keypress.inputmask", function (t) {
                    if (b) return !1;
                    b = !0;
                    var e = this,
                        n = U(e),
                        i = (t = t || window.event).which || t.charCode || t.keyCode,
                        r = String.fromCharCode(i);
                    if (T.numericInput && r == T.radixPoint) {
                        var o = e._valueGet(),
                            s = o.indexOf(T.radixPoint);
                        F(e, O(y, -1 != s ? s : P(y)))
                    } {
                        if (t.ctrlKey || t.altKey || t.metaKey || x) return !0;
                        if (i) {
                            n.trigger("input");
                            var a = F(e),
                                l = P(y),
                                u = !0;
                            if (R(y, a.begin, a.end), _) {
                                var c = L(0, a.end);
                                if (!1 !== (g = S(c == l || z(y, c) == T.radixPoint ? L(0, c) : c, r, y, !1, _))) {
                                    var h = !1;
                                    if (!0 !== g && (h = g.refresh, c = null != g.pos ? g.pos : c, r = null != g.c ? g.c : r), !0 !== h) {
                                        l = P(y);
                                        var d = w;
                                        if (1 == T.insertMode) {
                                            if (1 == E().greedy)
                                                for (var p = y.slice(); z(p, d, !0) != N(d) && d <= c;) d = d == l ? l + 1 : O(y, d);
                                            if (d <= c && (E().greedy || y.length < l)) {
                                                if (y[w] != N(w) && y.length < l) {
                                                    var f = H(y, -1, _);
                                                    0 != a.end && (c += f), l = y.length
                                                }
                                                k(d, c, r)
                                            } else u = !1
                                        } else M(y, c, r)
                                    }
                                    u && (q(e, y, T.numericInput ? c + 1 : c), setTimeout(function () {
                                        G(y) && n.trigger("complete")
                                    }, 0))
                                } else $ && q(e, y, a.begin)
                            } else {
                                var g, c = O(y, a.begin - 1);
                                if (H(y, c, _), !1 !== (g = S(c, r, y, !1, _))) {
                                    var h = !1;
                                    if (!0 !== g && (h = g.refresh, c = null != g.pos ? g.pos : c, r = null != g.c ? g.c : r), !0 !== h)
                                        if (1 == T.insertMode) {
                                            for (var m = P(y), p = y.slice(); z(p, m, !0) != N(m) && c <= m;) m = 0 == m ? -1 : L(0, m);
                                            c <= m ? C(c, y.length, r) : u = !1
                                        } else M(y, c, r);
                                    if (u) {
                                        var v = O(y, c);
                                        q(e, y, v), setTimeout(function () {
                                            G(y) && n.trigger("complete")
                                        }, 0)
                                    }
                                } else $ && q(e, y, a.begin)
                            }
                            t.preventDefault()
                        }
                    }
                }).bind("keyup.inputmask", function (t) {
                    var e = U(this),
                        n = t.keyCode;
                    T.onKeyUp.call(this, t, y, T), n == T.keyCode.TAB && e.hasClass("focus.inputmask") && 0 == this._valueGet().length && T.showMaskOnFocus && (q(this, y = A().slice()), _ || F(this, 0), a = this._valueGet())
                }).bind(c + ".inputmask dragdrop.inputmask drop.inputmask", function () {
                    var t = this;
                    setTimeout(function () {
                        F(t, m(t, y, !0)), G(y) && e.trigger("complete")
                    }, 0)
                }).bind("setvalue.inputmask", function () {
                    a = this._valueGet(), m(this, y, !0), this._valueGet() == A().join("") && this._valueSet("")
                }).bind("complete.inputmask", T.oncomplete).bind("incomplete.inputmask", T.onincomplete).bind("cleared.inputmask", T.oncleared), s = m(t, y, !0);
                try {
                    i = document.activeElement
                } catch (t) {}
                i === t ? (e.addClass("focus.inputmask"), F(t, s)) : T.clearMaskOnLostFocus && (t._valueGet() == A().join("") ? t._valueSet("") : v(t, y)), r = t, o = U._data(r).events, U.each(o, function (t, e) {
                    U.each(e, function (t, e) {
                        if ("inputmask" == e.namespace) {
                            var n = e.handler;
                            e.handler = function () {
                                return !this.readOnly && !this.disabled && n.apply(this, arguments)
                            }
                        }
                    })
                })
            }

            function u(t, e) {
                if (T.numericInput && "" != T.radixPoint) {
                    var n = t._valueGet().indexOf(T.radixPoint);
                    _ = e.begin <= n || e.end <= n || -1 == n
                }
            }

            function k(t, e, n) {
                for (; !I(t) && 0 <= t - 1;) t--;
                for (var i = t; i < e && i < P(y); i++)
                    if (I(i)) {
                        W(y, i);
                        var r = O(y, i),
                            o = z(y, r);
                        if (o != N(r)) {
                            if (r < P(y) && !1 !== S(i, o, y, !0, _) && D()[j(i)].def == D()[j(r)].def) M(y, i, z(y, r)), W(y, r);
                            else if (I(i)) break
                        } else if (null == n) break
                    } else W(y, i);
                return null != n && M(y, _ ? e : L(0, e), n), 0 == (y = B(y.join(""), _).split("")).length && (y = A().slice()), t
            }

            function C(t, e, n, i) {
                for (var r = t; r <= e && r < P(y); r++)
                    if (I(r)) {
                        var o = z(y, r);
                        if (M(y, r, n), o != N(r)) {
                            var s = O(y, r);
                            if (!(s < P(y))) break;
                            if (!1 !== S(s, o, y, !0, _) && D()[j(r)].def == D()[j(s)].def) n = o;
                            else {
                                if (I(s)) break;
                                n = o
                            }
                        } else if (!0 !== i) break
                    } else W(y, r);
                var a = y.length;
                return 0 == (y = B(y.join(""), _).split("")).length && (y = A().slice()), e - (a - y.length)
            }
        }
        return this
    })
}(jQuery);
var show_button_brands_okay = !0;
$(document).ready(function () {
    if ($(".city ul li").click(function () {
            $(this).closest(".city__list");
            $(this).closest(".city").find("label span.current-city")
        }), $(".city__close").click(function () {
            $(this).closest(".city__list").removeClass("expand")
        }), jQuery(function (n) {
            n(document).mouseup(function (t) {
                var e = n(".city");
                if (!e.is(t.target) && 0 === e.has(t.target).length && !e.find("ul li").is(t.target)) return e.find(".city__list").removeClass("expand"), !1
            })
        }), 0 < $(".main-slider").length && ($(".slider.owl-carousel").owlCarousel({
            items: 1,
            margin: 0,
            mouseDrag: !0,
            nav: !0,
            lazyLoad: !0,
            navText: ["", ""],
            dots: !1,
            loop: !0,
            autoplay: !0,
            autoplayTimeout: 5e3
        }), $(".brands-slider.owl-carousel").owlCarousel({
            items: 2,
            margin: 10,
            mouseDrag: !0,
            nav: !0,
            lazyLoad: !0,
            navText: ["", ""],
            dots: !1,
            loop: !0,
            responsive: {
                768: {
                    items: 4,
                    margin: 10,
                    nav: !0,
                    navText: ["", ""]
                },
                1280: {
                    items: 7,
                    margin: 10,
                    nav: !0,
                    navText: ["", ""]
                }
            }
        })), $(".filter-item__expand").click(function () {
            $(this).toggleClass("opened"), $(this).hasClass("opened") ? $(this).next().slideDown(200) : $(this).next().slideUp(200)
        }), $(".top-checkbox input[type=checkbox]").change(function () {
            var t = $(this).closest(".filter-item").find(".collections");
            $(this).prop("checked") && 0 < t.length ? t.find("input[type=checkbox]").prop("checked", !0) : t.find("input[type=checkbox]").prop("checked", !1), show_button_brands_okay = !1, $(".filter-brand").find("input[type=checkbox]").each(function () {
                $(this).prop("checked") && (show_button_brands_okay = !0)
            }), filter_button()
        }), $(".collections input[type=checkbox]").change(function () {
            var t = $(this).closest(".collections"),
                e = t.closest(".filter-item").find(".top-checkbox").find("input[type=checkbox]"),
                n = !0;
            t.find("input[type=checkbox]").each(function () {
                $(this).prop("checked") && (n = !1)
            }), n ? e.prop("checked", !1) : e.prop("checked", !0), show_button_brands_okay = !1, $(".filter-brand").find("input[type=checkbox]").each(function () {
                $(this).prop("checked") && (show_button_brands_okay = !0)
            }), filter_button()
        }), 0 < $(".sticky").length) {
        var t = $(".sticky"),
            e = $(".sticky-stopper"),
            n = t.innerHeight(),
            i = t.offset().top,
            r = e.offset().top,
            o = r - n - 255,
            s = o + 255;
        1920 < $(window).width() ? (left_var = ($(window).width() - 1720) / 2 + 255, t.css({
            left: left_var + "px"
        })) : $(window).width() < 1481 && 1319 < $(window).width() && (left_var = ($(window).width() - 1280) / 2 + 255, t.css({
            left: left_var + "px"
        }));
        var a = $(window).scrollTop();
        t.css({
            position: "fixed",
            top: 255
        }), $(window).scroll(function () {
            r = e.offset().top, s = (o = r - n - 255) + 255, a = $(window).scrollTop(), o < a ? t.css({
                position: "absolute",
                top: s
            }) : i < a + 255 ? t.css({
                position: "fixed",
                top: 255
            }) : t.css({
                position: "absolute",
                top: "255px"
            })
        })
    }
    $(".overlay").click(function () {
        $(".modal-outer").fadeOut(200), $(this).fadeOut(200)
    }), $(".modal-outer").click(function () {
        $(".modal-outer").fadeOut(200), $(".overlay").fadeOut(200), $(".modal.z-good .z-good__img img").attr("src", ""), $(".modal.z-good .z-good__img img.zoomImg").remove()
    }), 0 < $(".modal.z-good").length && $(".modal.z-good .z-good__img").zoom(), $(".good .good__img").click(function () {
        $(".overlay").fadeIn(200), $(".modal-outer.good-modal").fadeIn(200);
        var t = $(this).closest(".good").data("image");
        $(".modal.z-good .z-good__img img").attr("src", t), $(".modal.z-good .z-good__title").text($(this).next().text()), $(".modal.z-good .z-good__img").zoom({
            url: t
        })
    }), $(".modal__close").click(function () {
        $(".modal-outer").fadeOut(200), $(".overlay").fadeOut(200)
    }), $(".static-reset-button").click(function () {
        $(".catalog-filter input[type=checkbox]").prop("checked", !1), filter_button(), show_button_brands_okay = !1, show_button_cats_okay = !1
    }), $(".static-show-button").click(function () {
        complete_url()
    }), $(".show-button").click(function () {
        complete_url()
    }), $("input[type=tel]").inputmask("mask", {
        "mask": "+7 (999) 9999-999X",
        definitions: {
            'X': {
                validator: "9",
                placeholder: "9"
            }
        }
    }), $(".mobile-filter").click(function () {
        $(this).toggleClass("opened"), $(this).hasClass("opened") ? $(".catalog-filter").addClass("opened") : $(".catalog-filter").removeClass("opened")
    }), $("footer form").submit(function (t) {
        var e = $(this);
        $("footer form .f-button").prop("disabled", !0);
        var n = !0;
        return e.find("[required]").each(function () {
            return "" == $(this).val() ? (n = !1, $(this).focus(), $("footer form .f-button").prop("disabled", !1), !1) : "tel" == $(this).attr("type") && 0 < $(this).val().indexOf("_") ? (n = !1, $(this).focus(), $("footer form .f-button").prop("disabled", !1), !1) : void 0
        }), n && $.ajax({
            type: "POST",
            url: "/wp-admin/admin-ajax.php",
            data: e.serialize(),
            success: function (t) {
                $(".overlay").fadeIn(200), $(".modal-outer.ty-modal").fadeIn(200), $("footer form .f-button").prop("disabled", !1)
            },
            error: function (t) {
                console.log(t)
            }
        }), t.preventDefault(), !1
    }), $("form#sotr").submit(function (t) {
        var e = $(this);
        $("form#sotr input[type=submit]").prop("disabled", !0);
        var n = !0;
        return e.find("[required]").each(function () {
            return "" == $(this).val() ? (n = !1, $(this).focus(), $("form#sotr input[type=submit]").prop("disabled", !1), !1) : "tel" == $(this).attr("type") && 0 < $(this).val().indexOf("_") ? (n = !1, $(this).focus(), !1) : void 0
        }), n && $.ajax({
            type: "POST",
            url: "/wp-admin/admin-ajax.php",
            data: e.serialize(),
            success: function (t) {
                $(".overlay").fadeIn(200), $(".modal-outer.ty-modal").fadeIn(200), $("form#sotr input[type=submit]").prop("disabled", !1), e[0].reset()
            },
            error: function (t) {
                console.log(t)
            }
        }), t.preventDefault(), !1
    })
});