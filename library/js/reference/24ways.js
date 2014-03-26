(function (a) {
    String.prototype.trim === a && (String.prototype.trim = function () {
        return this.replace(/^\s+|\s+$/g, "")
    }), Array.prototype.reduce === a && (Array.prototype.reduce = function (b) {
        if (this === void 0 || this === null) throw new TypeError;
        var c = Object(this),
            d = c.length >>> 0,
            e = 0,
            f;
        if (typeof b != "function") throw new TypeError;
        if (d == 0 && arguments.length == 1) throw new TypeError;
        if (arguments.length >= 2) f = arguments[1];
        else
            do {
                if (e in c) {
                    f = c[e++];
                    break
                }
                if (++e >= d) throw new TypeError
            } while (!0);
        while (e < d) e in c && (f = b.call(a, f, c[e], e, c)), e++;
        return f
    })
})();
var Zepto = function () {
    function E(a) {
        return a == null ? String(a) : y[z.call(a)] || "object"
    }

    function F(a) {
        return E(a) == "function"
    }

    function G(a) {
        return a != null && a == a.window
    }

    function H(a) {
        return a != null && a.nodeType == a.DOCUMENT_NODE
    }

    function I(a) {
        return E(a) == "object"
    }

    function J(a) {
        return I(a) && !G(a) && a.__proto__ == Object.prototype
    }

    function K(a) {
        return a instanceof Array
    }

    function L(a) {
        return typeof a.length == "number"
    }

    function M(a) {
        return g.call(a, function (a) {
            return a != null
        })
    }

    function N(a) {
        return a.length > 0 ? c.fn.concat.apply([], a) : a
    }

    function O(a) {
        return a.replace(/::/g, "/").replace(/([A-Z]+)([A-Z][a-z])/g, "$1_$2").replace(/([a-z\d])([A-Z])/g, "$1_$2").replace(/_/g, "-").toLowerCase()
    }

    function P(a) {
        return a in j ? j[a] : j[a] = new RegExp("(^|\\s)" + a + "(\\s|$)")
    }

    function Q(a, b) {
        return typeof b == "number" && !l[O(a)] ? b + "px" : b
    }

    function R(a) {
        var b, c;
        return i[a] || (b = h.createElement(a), h.body.appendChild(b), c = k(b, "").getPropertyValue("display"), b.parentNode.removeChild(b), c == "none" && (c = "block"), i[a] = c), i[a]
    }

    function S(a) {
        return "children" in a ? f.call(a.children) : c.map(a.childNodes, function (a) {
            if (a.nodeType == 1) return a
        })
    }

    function T(c, d, e) {
        for (b in d) e && (J(d[b]) || K(d[b])) ? (J(d[b]) && !J(c[b]) && (c[b] = {}), K(d[b]) && !K(c[b]) && (c[b] = []), T(c[b], d[b], e)) : d[b] !== a && (c[b] = d[b])
    }

    function U(b, d) {
        return d === a ? c(b) : c(b).filter(d)
    }

    function V(a, b, c, d) {
        return F(b) ? b.call(a, c, d) : b
    }

    function W(a, b, c) {
        c == null ? a.removeAttribute(b) : a.setAttribute(b, c)
    }

    function X(b, c) {
        var d = b.className,
            e = d && d.baseVal !== a;
        if (c === a) return e ? d.baseVal : d;
        e ? d.baseVal = c : b.className = c
    }

    function Y(a) {
        var b;
        try {
            return a ? a == "true" || (a == "false" ? !1 : a == "null" ? null : isNaN(b = Number(a)) ? /^[\[\{]/.test(a) ? c.parseJSON(a) : a : b) : a
        } catch (d) {
            return a
        }
    }

    function Z(a, b) {
        b(a);
        for (var c in a.childNodes) Z(a.childNodes[c], b)
    }
    var a, b, c, d, e = [],
        f = e.slice,
        g = e.filter,
        h = window.document,
        i = {}, j = {}, k = h.defaultView.getComputedStyle,
        l = {
            "column-count": 1,
            columns: 1,
            "font-weight": 1,
            "line-height": 1,
            opacity: 1,
            "z-index": 1,
            zoom: 1
        }, m = /^\s*<(\w+|!)[^>]*>/,
        n = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,
        o = /^(?:body|html)$/i,
        p = ["val", "css", "html", "text", "data", "width", "height", "offset"],
        q = ["after", "prepend", "before", "append"],
        r = h.createElement("table"),
        s = h.createElement("tr"),
        t = {
            tr: h.createElement("tbody"),
            tbody: r,
            thead: r,
            tfoot: r,
            td: s,
            th: s,
            "*": h.createElement("div")
        }, u = /complete|loaded|interactive/,
        v = /^\.([\w-]+)$/,
        w = /^#([\w-]*)$/,
        x = /^[\w-]+$/,
        y = {}, z = y.toString,
        A = {}, B, C, D = h.createElement("div");
    return A.matches = function (a, b) {
        if (!a || a.nodeType !== 1) return !1;
        var c = a.webkitMatchesSelector || a.mozMatchesSelector || a.oMatchesSelector || a.matchesSelector;
        if (c) return c.call(a, b);
        var d, e = a.parentNode,
            f = !e;
        return f && (e = D).appendChild(a), d = ~A.qsa(e, b).indexOf(a), f && D.removeChild(a), d
    }, B = function (a) {
        return a.replace(/-+(.)?/g, function (a, b) {
            return b ? b.toUpperCase() : ""
        })
    }, C = function (a) {
        return g.call(a, function (b, c) {
            return a.indexOf(b) == c
        })
    }, A.fragment = function (b, d, e) {
        b.replace && (b = b.replace(n, "<$1></$2>")), d === a && (d = m.test(b) && RegExp.$1), d in t || (d = "*");
        var g, h, i = t[d];
        return i.innerHTML = "" + b, h = c.each(f.call(i.childNodes), function () {
            i.removeChild(this)
        }), J(e) && (g = c(h), c.each(e, function (a, b) {
            p.indexOf(a) > -1 ? g[a](b) : g.attr(a, b)
        })), h
    }, A.Z = function (a, b) {
        return a = a || [], a.__proto__ = c.fn, a.selector = b || "", a
    }, A.isZ = function (a) {
        return a instanceof A.Z
    }, A.init = function (b, d) {
        if (!b) return A.Z();
        if (F(b)) return c(h).ready(b);
        if (A.isZ(b)) return b;
        var e;
        if (K(b)) e = M(b);
        else if (I(b)) e = [J(b) ? c.extend({}, b) : b], b = null;
        else if (m.test(b)) e = A.fragment(b.trim(), RegExp.$1, d), b = null;
        else {
            if (d !== a) return c(d).find(b);
            e = A.qsa(h, b)
        }
        return A.Z(e, b)
    }, c = function (a, b) {
        return A.init(a, b)
    }, c.extend = function (a) {
        var b, c = f.call(arguments, 1);
        return typeof a == "boolean" && (b = a, a = c.shift()), c.forEach(function (c) {
            T(a, c, b)
        }), a
    }, A.qsa = function (a, b) {
        var c;
        return H(a) && w.test(b) ? (c = a.getElementById(RegExp.$1)) ? [c] : [] : a.nodeType !== 1 && a.nodeType !== 9 ? [] : f.call(v.test(b) ? a.getElementsByClassName(RegExp.$1) : x.test(b) ? a.getElementsByTagName(b) : a.querySelectorAll(b))
    }, c.contains = function (a, b) {
        return a !== b && a.contains(b)
    }, c.type = E, c.isFunction = F, c.isWindow = G, c.isArray = K, c.isPlainObject = J, c.isEmptyObject = function (a) {
        var b;
        for (b in a) return !1;
        return !0
    }, c.inArray = function (a, b, c) {
        return e.indexOf.call(b, a, c)
    }, c.camelCase = B, c.trim = function (a) {
        return a.trim()
    }, c.uuid = 0, c.support = {}, c.expr = {}, c.map = function (a, b) {
        var c, d = [],
            e, f;
        if (L(a))
            for (e = 0; e < a.length; e++) c = b(a[e], e), c != null && d.push(c);
        else
            for (f in a) c = b(a[f], f), c != null && d.push(c);
        return N(d)
    }, c.each = function (a, b) {
        var c, d;
        if (L(a)) {
            for (c = 0; c < a.length; c++)
                if (b.call(a[c], c, a[c]) === !1) return a
        } else
            for (d in a)
                if (b.call(a[d], d, a[d]) === !1) return a; return a
    }, c.grep = function (a, b) {
        return g.call(a, b)
    }, window.JSON && (c.parseJSON = JSON.parse), c.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (a, b) {
        y["[object " + b + "]"] = b.toLowerCase()
    }), c.fn = {
        forEach: e.forEach,
        reduce: e.reduce,
        push: e.push,
        sort: e.sort,
        indexOf: e.indexOf,
        concat: e.concat,
        map: function (a) {
            return c(c.map(this, function (b, c) {
                return a.call(b, c, b)
            }))
        },
        slice: function () {
            return c(f.apply(this, arguments))
        },
        ready: function (a) {
            return u.test(h.readyState) ? a(c) : h.addEventListener("DOMContentLoaded", function () {
                a(c)
            }, !1), this
        },
        get: function (b) {
            return b === a ? f.call(this) : this[b >= 0 ? b : b + this.length]
        },
        toArray: function () {
            return this.get()
        },
        size: function () {
            return this.length
        },
        remove: function () {
            return this.each(function () {
                this.parentNode != null && this.parentNode.removeChild(this)
            })
        },
        each: function (a) {
            return e.every.call(this, function (b, c) {
                return a.call(b, c, b) !== !1
            }), this
        },
        filter: function (a) {
            return F(a) ? this.not(this.not(a)) : c(g.call(this, function (b) {
                return A.matches(b, a)
            }))
        },
        add: function (a, b) {
            return c(C(this.concat(c(a, b))))
        },
        is: function (a) {
            return this.length > 0 && A.matches(this[0], a)
        },
        not: function (b) {
            var d = [];
            if (F(b) && b.call !== a) this.each(function (a) {
                b.call(this, a) || d.push(this)
            });
            else {
                var e = typeof b == "string" ? this.filter(b) : L(b) && F(b.item) ? f.call(b) : c(b);
                this.forEach(function (a) {
                    e.indexOf(a) < 0 && d.push(a)
                })
            }
            return c(d)
        },
        has: function (a) {
            return this.filter(function () {
                return I(a) ? c.contains(this, a) : c(this).find(a).size()
            })
        },
        eq: function (a) {
            return a === -1 ? this.slice(a) : this.slice(a, +a + 1)
        },
        first: function () {
            var a = this[0];
            return a && !I(a) ? a : c(a)
        },
        last: function () {
            var a = this[this.length - 1];
            return a && !I(a) ? a : c(a)
        },
        find: function (a) {
            var b, d = this;
            return typeof a == "object" ? b = c(a).filter(function () {
                var a = this;
                return e.some.call(d, function (b) {
                    return c.contains(b, a)
                })
            }) : this.length == 1 ? b = c(A.qsa(this[0], a)) : b = this.map(function () {
                return A.qsa(this, a)
            }), b
        },
        closest: function (a, b) {
            var d = this[0],
                e = !1;
            typeof a == "object" && (e = c(a));
            while (d && !(e ? e.indexOf(d) >= 0 : A.matches(d, a))) d = d !== b && !H(d) && d.parentNode;
            return c(d)
        },
        parents: function (a) {
            var b = [],
                d = this;
            while (d.length > 0) d = c.map(d, function (a) {
                if ((a = a.parentNode) && !H(a) && b.indexOf(a) < 0) return b.push(a), a
            });
            return U(b, a)
        },
        parent: function (a) {
            return U(C(this.pluck("parentNode")), a)
        },
        children: function (a) {
            return U(this.map(function () {
                return S(this)
            }), a)
        },
        contents: function () {
            return this.map(function () {
                return f.call(this.childNodes)
            })
        },
        siblings: function (a) {
            return U(this.map(function (a, b) {
                return g.call(S(b.parentNode), function (a) {
                    return a !== b
                })
            }), a)
        },
        empty: function () {
            return this.each(function () {
                this.innerHTML = ""
            })
        },
        pluck: function (a) {
            return c.map(this, function (b) {
                return b[a]
            })
        },
        show: function () {
            return this.each(function () {
                this.style.display == "none" && (this.style.display = null), k(this, "").getPropertyValue("display") == "none" && (this.style.display = R(this.nodeName))
            })
        },
        replaceWith: function (a) {
            return this.before(a).remove()
        },
        wrap: function (a) {
            var b = F(a);
            if (this[0] && !b) var d = c(a).get(0),
            e = d.parentNode || this.length > 1;
            return this.each(function (f) {
                c(this).wrapAll(b ? a.call(this, f) : e ? d.cloneNode(!0) : d)
            })
        },
        wrapAll: function (a) {
            if (this[0]) {
                c(this[0]).before(a = c(a));
                var b;
                while ((b = a.children()).length) a = b.first();
                c(a).append(this)
            }
            return this
        },
        wrapInner: function (a) {
            var b = F(a);
            return this.each(function (d) {
                var e = c(this),
                    f = e.contents(),
                    g = b ? a.call(this, d) : a;
                f.length ? f.wrapAll(g) : e.append(g)
            })
        },
        unwrap: function () {
            return this.parent().each(function () {
                c(this).replaceWith(c(this).children())
            }), this
        },
        clone: function () {
            return this.map(function () {
                return this.cloneNode(!0)
            })
        },
        hide: function () {
            return this.css("display", "none")
        },
        toggle: function (b) {
            return this.each(function () {
                var d = c(this);
                (b === a ? d.css("display") == "none" : b) ? d.show() : d.hide()
            })
        },
        prev: function (a) {
            return c(this.pluck("previousElementSibling")).filter(a || "*")
        },
        next: function (a) {
            return c(this.pluck("nextElementSibling")).filter(a || "*")
        },
        html: function (b) {
            return b === a ? this.length > 0 ? this[0].innerHTML : null : this.each(function (a) {
                var d = this.innerHTML;
                c(this).empty().append(V(this, b, a, d))
            })
        },
        text: function (b) {
            return b === a ? this.length > 0 ? this[0].textContent : null : this.each(function () {
                this.textContent = b
            })
        },
        attr: function (c, d) {
            var e;
            return typeof c == "string" && d === a ? this.length == 0 || this[0].nodeType !== 1 ? a : c == "value" && this[0].nodeName == "INPUT" ? this.val() : !(e = this[0].getAttribute(c)) && c in this[0] ? this[0][c] : e : this.each(function (a) {
                if (this.nodeType !== 1) return;
                if (I(c))
                    for (b in c) W(this, b, c[b]);
                else W(this, c, V(this, d, a, this.getAttribute(c)))
            })
        },
        removeAttr: function (a) {
            return this.each(function () {
                this.nodeType === 1 && W(this, a)
            })
        },
        prop: function (b, c) {
            return c === a ? this[0] && this[0][b] : this.each(function (a) {
                this[b] = V(this, c, a, this[b])
            })
        },
        data: function (b, c) {
            var d = this.attr("data-" + O(b), c);
            return d !== null ? Y(d) : a
        },
        val: function (b) {
            return b === a ? this[0] && (this[0].multiple ? c(this[0]).find("option").filter(function (a) {
                return this.selected
            }).pluck("value") : this[0].value) : this.each(function (a) {
                this.value = V(this, b, a, this.value)
            })
        },
        offset: function (a) {
            if (a) return this.each(function (b) {
                var d = c(this),
                    e = V(this, a, b, d.offset()),
                    f = d.offsetParent().offset(),
                    g = {
                        top: e.top - f.top,
                        left: e.left - f.left
                    };
                d.css("position") == "static" && (g.position = "relative"), d.css(g)
            });
            if (this.length == 0) return null;
            var b = this[0].getBoundingClientRect();
            return {
                left: b.left + window.pageXOffset,
                top: b.top + window.pageYOffset,
                width: Math.round(b.width),
                height: Math.round(b.height)
            }
        },
        css: function (a, c) {
            if (arguments.length < 2 && typeof a == "string") return this[0] && (this[0].style[B(a)] || k(this[0], "").getPropertyValue(a));
            var d = "";
            if (E(a) == "string")!c && c !== 0 ? this.each(function () {
                this.style.removeProperty(O(a))
            }) : d = O(a) + ":" + Q(a, c);
            else
                for (b in a)!a[b] && a[b] !== 0 ? this.each(function () {
                    this.style.removeProperty(O(b))
                }) : d += O(b) + ":" + Q(b, a[b]) + ";";
            return this.each(function () {
                this.style.cssText += ";" + d
            })
        },
        index: function (a) {
            return a ? this.indexOf(c(a)[0]) : this.parent().children().indexOf(this[0])
        },
        hasClass: function (a) {
            return e.some.call(this, function (a) {
                return this.test(X(a))
            }, P(a))
        },
        addClass: function (a) {
            return this.each(function (b) {
                d = [];
                var e = X(this),
                    f = V(this, a, b, e);
                f.split(/\s+/g).forEach(function (a) {
                    c(this).hasClass(a) || d.push(a)
                }, this), d.length && X(this, e + (e ? " " : "") + d.join(" "))
            })
        },
        removeClass: function (b) {
            return this.each(function (c) {
                if (b === a) return X(this, "");
                d = X(this), V(this, b, c, d).split(/\s+/g).forEach(function (a) {
                    d = d.replace(P(a), " ")
                }), X(this, d.trim())
            })
        },
        toggleClass: function (b, d) {
            return this.each(function (e) {
                var f = c(this),
                    g = V(this, b, e, X(this));
                g.split(/\s+/g).forEach(function (b) {
                    (d === a ? !f.hasClass(b) : d) ? f.addClass(b) : f.removeClass(b)
                })
            })
        },
        scrollTop: function () {
            if (!this.length) return;
            return "scrollTop" in this[0] ? this[0].scrollTop : this[0].scrollY
        },
        position: function () {
            if (!this.length) return;
            var a = this[0],
                b = this.offsetParent(),
                d = this.offset(),
                e = o.test(b[0].nodeName) ? {
                    top: 0,
                    left: 0
                } : b.offset();
            return d.top -= parseFloat(c(a).css("margin-top")) || 0, d.left -= parseFloat(c(a).css("margin-left")) || 0, e.top += parseFloat(c(b[0]).css("border-top-width")) || 0, e.left += parseFloat(c(b[0]).css("border-left-width")) || 0, {
                top: d.top - e.top,
                left: d.left - e.left
            }
        },
        offsetParent: function () {
            return this.map(function () {
                var a = this.offsetParent || h.body;
                while (a && !o.test(a.nodeName) && c(a).css("position") == "static") a = a.offsetParent;
                return a
            })
        }
    }, c.fn.detach = c.fn.remove, ["width", "height"].forEach(function (b) {
        c.fn[b] = function (d) {
            var e, f = this[0],
                g = b.replace(/./, function (a) {
                    return a[0].toUpperCase()
                });
            return d === a ? G(f) ? f["inner" + g] : H(f) ? f.documentElement["offset" + g] : (e = this.offset()) && e[b] : this.each(function (a) {
                f = c(this), f.css(b, V(this, d, a, f[b]()))
            })
        }
    }), q.forEach(function (a, b) {
        var d = b % 2;
        c.fn[a] = function () {
            var a, e = c.map(arguments, function (b) {
                    return a = E(b), a == "object" || a == "array" || b == null ? b : A.fragment(b)
                }),
                f, g = this.length > 1;
            return e.length < 1 ? this : this.each(function (a, h) {
                f = d ? h : h.parentNode, h = b == 0 ? h.nextSibling : b == 1 ? h.firstChild : b == 2 ? h : null, e.forEach(function (a) {
                    if (g) a = a.cloneNode(!0);
                    else if (!f) return c(a).remove();
                    Z(f.insertBefore(a, h), function (a) {
                        a.nodeName != null && a.nodeName.toUpperCase() === "SCRIPT" && (!a.type || a.type === "text/javascript") && !a.src && window.eval.call(window, a.innerHTML)
                    })
                })
            })
        }, c.fn[d ? a + "To" : "insert" + (b ? "Before" : "After")] = function (b) {
            return c(b)[a](this), this
        }
    }), A.Z.prototype = c.fn, A.uniq = C, A.deserializeValue = Y, c.zepto = A, c
}();
window.Zepto = Zepto, "$" in window || (window.$ = Zepto),
function (a) {
    function b(a) {
        var b = this.os = {}, c = this.browser = {}, d = a.match(/WebKit\/([\d.]+)/),
            e = a.match(/(Android)\s+([\d.]+)/),
            f = a.match(/(iPad).*OS\s([\d_]+)/),
            g = !f && a.match(/(iPhone\sOS)\s([\d_]+)/),
            h = a.match(/(webOS|hpwOS)[\s\/]([\d.]+)/),
            i = h && a.match(/TouchPad/),
            j = a.match(/Kindle\/([\d.]+)/),
            k = a.match(/Silk\/([\d._]+)/),
            l = a.match(/(BlackBerry).*Version\/([\d.]+)/),
            m = a.match(/(BB10).*Version\/([\d.]+)/),
            n = a.match(/(RIM\sTablet\sOS)\s([\d.]+)/),
            o = a.match(/PlayBook/),
            p = a.match(/Chrome\/([\d.]+)/) || a.match(/CriOS\/([\d.]+)/),
            q = a.match(/Firefox\/([\d.]+)/);
        if (c.webkit = !! d) c.version = d[1];
        e && (b.android = !0, b.version = e[2]), g && (b.ios = b.iphone = !0, b.version = g[2].replace(/_/g, ".")), f && (b.ios = b.ipad = !0, b.version = f[2].replace(/_/g, ".")), h && (b.webos = !0, b.version = h[2]), i && (b.touchpad = !0), l && (b.blackberry = !0, b.version = l[2]), m && (b.bb10 = !0, b.version = m[2]), n && (b.rimtabletos = !0, b.version = n[2]), o && (c.playbook = !0), j && (b.kindle = !0, b.version = j[1]), k && (c.silk = !0, c.version = k[1]), !k && b.android && a.match(/Kindle Fire/) && (c.silk = !0), p && (c.chrome = !0, c.version = p[1]), q && (c.firefox = !0, c.version = q[1]), b.tablet = !! (f || o || e && !a.match(/Mobile/) || q && a.match(/Tablet/)), b.phone = !b.tablet && !! (e || g || h || l || m || p && a.match(/Android/) || p && a.match(/CriOS\/([\d.]+)/) || q && a.match(/Mobile/))
    }
    b.call(a, navigator.userAgent), a.__detect = b
}(Zepto),
function (a) {
    function g(a) {
        return a._zid || (a._zid = d++)
    }

    function h(a, b, d, e) {
        b = i(b);
        if (b.ns) var f = j(b.ns);
        return (c[g(a)] || []).filter(function (a) {
            return a && (!b.e || a.e == b.e) && (!b.ns || f.test(a.ns)) && (!d || g(a.fn) === g(d)) && (!e || a.sel == e)
        })
    }

    function i(a) {
        var b = ("" + a).split(".");
        return {
            e: b[0],
            ns: b.slice(1).sort().join(" ")
        }
    }

    function j(a) {
        return new RegExp("(?:^| )" + a.replace(" ", " .* ?") + "(?: |$)")
    }

    function k(b, c, d) {
        a.type(b) != "string" ? a.each(b, d) : b.split(/\s/).forEach(function (a) {
            d(a, c)
        })
    }

    function l(a, b) {
        return a.del && (a.e == "focus" || a.e == "blur") || !! b
    }

    function m(a) {
        return f[a] || a
    }

    function n(b, d, e, h, j, n) {
        var o = g(b),
            p = c[o] || (c[o] = []);
        k(d, e, function (c, d) {
            var e = i(c);
            e.fn = d, e.sel = h, e.e in f && (d = function (b) {
                var c = b.relatedTarget;
                if (!c || c !== this && !a.contains(this, c)) return e.fn.apply(this, arguments)
            }), e.del = j && j(d, c);
            var g = e.del || d;
            e.proxy = function (a) {
                var c = g.apply(b, [a].concat(a.data));
                return c === !1 && (a.preventDefault(), a.stopPropagation()), c
            }, e.i = p.length, p.push(e), b.addEventListener(m(e.e), e.proxy, l(e, n))
        })
    }

    function o(a, b, d, e, f) {
        var i = g(a);
        k(b || "", d, function (b, d) {
            h(a, b, d, e).forEach(function (b) {
                delete c[i][b.i], a.removeEventListener(m(b.e), b.proxy, l(b, f))
            })
        })
    }

    function t(b) {
        var c, d = {
                originalEvent: b
            };
        for (c in b)!r.test(c) && b[c] !== undefined && (d[c] = b[c]);
        return a.each(s, function (a, c) {
            d[a] = function () {
                return this[c] = p, b[a].apply(b, arguments)
            }, d[c] = q
        }), d
    }

    function u(a) {
        if (!("defaultPrevented" in a)) {
            a.defaultPrevented = !1;
            var b = a.preventDefault;
            a.preventDefault = function () {
                this.defaultPrevented = !0, b.call(this)
            }
        }
    }
    var b = a.zepto.qsa,
        c = {}, d = 1,
        e = {}, f = {
            mouseenter: "mouseover",
            mouseleave: "mouseout"
        };
    e.click = e.mousedown = e.mouseup = e.mousemove = "MouseEvents", a.event = {
        add: n,
        remove: o
    }, a.proxy = function (b, c) {
        if (a.isFunction(b)) {
            var d = function () {
                return b.apply(c, arguments)
            };
            return d._zid = g(b), d
        }
        if (typeof c == "string") return a.proxy(b[c], b);
        throw new TypeError("expected function")
    }, a.fn.bind = function (a, b) {
        return this.each(function () {
            n(this, a, b)
        })
    }, a.fn.unbind = function (a, b) {
        return this.each(function () {
            o(this, a, b)
        })
    }, a.fn.one = function (a, b) {
        return this.each(function (c, d) {
            n(this, a, b, null, function (a, b) {
                return function () {
                    var c = a.apply(d, arguments);
                    return o(d, b, a), c
                }
            })
        })
    };
    var p = function () {
        return !0
    }, q = function () {
            return !1
        }, r = /^([A-Z]|layer[XY]$)/,
        s = {
            preventDefault: "isDefaultPrevented",
            stopImmediatePropagation: "isImmediatePropagationStopped",
            stopPropagation: "isPropagationStopped"
        };
    a.fn.delegate = function (b, c, d) {
        return this.each(function (e, f) {
            n(f, c, d, b, function (c) {
                return function (d) {
                    var e, g = a(d.target).closest(b, f).get(0);
                    if (g) return e = a.extend(t(d), {
                        currentTarget: g,
                        liveFired: f
                    }), c.apply(g, [e].concat([].slice.call(arguments, 1)))
                }
            })
        })
    }, a.fn.undelegate = function (a, b, c) {
        return this.each(function () {
            o(this, b, c, a)
        })
    }, a.fn.live = function (b, c) {
        return a(document.body).delegate(this.selector, b, c), this
    }, a.fn.die = function (b, c) {
        return a(document.body).undelegate(this.selector, b, c), this
    }, a.fn.on = function (b, c, d) {
        return !c || a.isFunction(c) ? this.bind(b, c || d) : this.delegate(c, b, d)
    }, a.fn.off = function (b, c, d) {
        return !c || a.isFunction(c) ? this.unbind(b, c || d) : this.undelegate(c, b, d)
    }, a.fn.trigger = function (b, c) {
        if (typeof b == "string" || a.isPlainObject(b)) b = a.Event(b);
        return u(b), b.data = c, this.each(function () {
            "dispatchEvent" in this && this.dispatchEvent(b)
        })
    }, a.fn.triggerHandler = function (b, c) {
        var d, e;
        return this.each(function (f, g) {
            d = t(typeof b == "string" ? a.Event(b) : b), d.data = c, d.target = g, a.each(h(g, b.type || b), function (a, b) {
                e = b.proxy(d);
                if (d.isImmediatePropagationStopped()) return !1
            })
        }), e
    }, "focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function (b) {
        a.fn[b] = function (a) {
            return a ? this.bind(b, a) : this.trigger(b)
        }
    }), ["focus", "blur"].forEach(function (b) {
        a.fn[b] = function (a) {
            return a ? this.bind(b, a) : this.each(function () {
                try {
                    this[b]()
                } catch (a) {}
            }), this
        }
    }), a.Event = function (a, b) {
        typeof a != "string" && (b = a, a = b.type);
        var c = document.createEvent(e[a] || "Events"),
            d = !0;
        if (b)
            for (var f in b) f == "bubbles" ? d = !! b[f] : c[f] = b[f];
        return c.initEvent(a, d, !0, null, null, null, null, null, null, null, null, null, null, null, null), c.isDefaultPrevented = function () {
            return this.defaultPrevented
        }, c
    }
}(Zepto),
function ($) {
    function triggerAndReturn(a, b, c) {
        var d = $.Event(b);
        return $(a).trigger(d, c), !d.defaultPrevented
    }

    function triggerGlobal(a, b, c, d) {
        if (a.global) return triggerAndReturn(b || document, c, d)
    }

    function ajaxStart(a) {
        a.global && $.active++ === 0 && triggerGlobal(a, null, "ajaxStart")
    }

    function ajaxStop(a) {
        a.global && !--$.active && triggerGlobal(a, null, "ajaxStop")
    }

    function ajaxBeforeSend(a, b) {
        var c = b.context;
        if (b.beforeSend.call(c, a, b) === !1 || triggerGlobal(b, c, "ajaxBeforeSend", [a, b]) === !1) return !1;
        triggerGlobal(b, c, "ajaxSend", [a, b])
    }

    function ajaxSuccess(a, b, c) {
        var d = c.context,
            e = "success";
        c.success.call(d, a, e, b), triggerGlobal(c, d, "ajaxSuccess", [b, c, a]), ajaxComplete(e, b, c)
    }

    function ajaxError(a, b, c, d) {
        var e = d.context;
        d.error.call(e, c, b, a), triggerGlobal(d, e, "ajaxError", [c, d, a]), ajaxComplete(b, c, d)
    }

    function ajaxComplete(a, b, c) {
        var d = c.context;
        c.complete.call(d, b, a), triggerGlobal(c, d, "ajaxComplete", [b, c]), ajaxStop(c)
    }

    function empty() {}

    function mimeToDataType(a) {
        return a && (a = a.split(";", 2)[0]), a && (a == htmlType ? "html" : a == jsonType ? "json" : scriptTypeRE.test(a) ? "script" : xmlTypeRE.test(a) && "xml") || "text"
    }

    function appendQuery(a, b) {
        return (a + "&" + b).replace(/[&?]{1,2}/, "?")
    }

    function serializeData(a) {
        a.processData && a.data && $.type(a.data) != "string" && (a.data = $.param(a.data, a.traditional)), a.data && (!a.type || a.type.toUpperCase() == "GET") && (a.url = appendQuery(a.url, a.data))
    }

    function parseArguments(a, b, c, d) {
        var e = !$.isFunction(b);
        return {
            url: a,
            data: e ? b : undefined,
            success: e ? $.isFunction(c) ? c : undefined : b,
            dataType: e ? d || c : c
        }
    }

    function serialize(a, b, c, d) {
        var e, f = $.isArray(b);
        $.each(b, function (b, g) {
            e = $.type(g), d && (b = c ? d : d + "[" + (f ? "" : b) + "]"), !d && f ? a.add(g.name, g.value) : e == "array" || !c && e == "object" ? serialize(a, g, c, b) : a.add(b, g)
        })
    }
    var jsonpID = 0,
        document = window.document,
        key, name, rscript = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
        scriptTypeRE = /^(?:text|application)\/javascript/i,
        xmlTypeRE = /^(?:text|application)\/xml/i,
        jsonType = "application/json",
        htmlType = "text/html",
        blankRE = /^\s*$/;
    $.active = 0, $.ajaxJSONP = function (a) {
        if ("type" in a) {
            var b = "jsonp" + (++jsonpID),
                c = document.createElement("script"),
                d = function () {
                    clearTimeout(g), $(c).remove(), delete window[b]
                }, e = function (c) {
                    d();
                    if (!c || c == "timeout") window[b] = empty;
                    ajaxError(null, c || "abort", f, a)
                }, f = {
                    abort: e
                }, g;
            return ajaxBeforeSend(f, a) === !1 ? (e("abort"), !1) : (window[b] = function (b) {
                d(), ajaxSuccess(b, f, a)
            }, c.onerror = function () {
                e("error")
            }, c.src = a.url.replace(/=\?/, "=" + b), $("head").append(c), a.timeout > 0 && (g = setTimeout(function () {
                e("timeout")
            }, a.timeout)), f)
        }
        return $.ajax(a)
    }, $.ajaxSettings = {
        type: "GET",
        beforeSend: empty,
        success: empty,
        error: empty,
        complete: empty,
        context: null,
        global: !0,
        xhr: function () {
            return new window.XMLHttpRequest
        },
        accepts: {
            script: "text/javascript, application/javascript",
            json: jsonType,
            xml: "application/xml, text/xml",
            html: htmlType,
            text: "text/plain"
        },
        crossDomain: !1,
        timeout: 0,
        processData: !0,
        cache: !0
    }, $.ajax = function (options) {
        var settings = $.extend({}, options || {});
        for (key in $.ajaxSettings) settings[key] === undefined && (settings[key] = $.ajaxSettings[key]);
        ajaxStart(settings), settings.crossDomain || (settings.crossDomain = /^([\w-]+:)?\/\/([^\/]+)/.test(settings.url) && RegExp.$2 != window.location.host), settings.url || (settings.url = window.location.toString()), serializeData(settings), settings.cache === !1 && (settings.url = appendQuery(settings.url, "_=" + Date.now()));
        var dataType = settings.dataType,
            hasPlaceholder = /=\?/.test(settings.url);
        if (dataType == "jsonp" || hasPlaceholder) return hasPlaceholder || (settings.url = appendQuery(settings.url, "callback=?")), $.ajaxJSONP(settings);
        var mime = settings.accepts[dataType],
            baseHeaders = {}, protocol = /^([\w-]+:)\/\//.test(settings.url) ? RegExp.$1 : window.location.protocol,
            xhr = settings.xhr(),
            abortTimeout;
        settings.crossDomain || (baseHeaders["X-Requested-With"] = "XMLHttpRequest"), mime && (baseHeaders.Accept = mime, mime.indexOf(",") > -1 && (mime = mime.split(",", 2)[0]), xhr.overrideMimeType && xhr.overrideMimeType(mime));
        if (settings.contentType || settings.contentType !== !1 && settings.data && settings.type.toUpperCase() != "GET") baseHeaders["Content-Type"] = settings.contentType || "application/x-www-form-urlencoded";
        settings.headers = $.extend(baseHeaders, settings.headers || {}), xhr.onreadystatechange = function () {
            if (xhr.readyState == 4) {
                xhr.onreadystatechange = empty, clearTimeout(abortTimeout);
                var result, error = !1;
                if (xhr.status >= 200 && xhr.status < 300 || xhr.status == 304 || xhr.status == 0 && protocol == "file:") {
                    dataType = dataType || mimeToDataType(xhr.getResponseHeader("content-type")), result = xhr.responseText;
                    try {
                        dataType == "script" ? (1, eval)(result) : dataType == "xml" ? result = xhr.responseXML : dataType == "json" && (result = blankRE.test(result) ? null : $.parseJSON(result))
                    } catch (e) {
                        error = e
                    }
                    error ? ajaxError(error, "parsererror", xhr, settings) : ajaxSuccess(result, xhr, settings)
                } else ajaxError(null, xhr.status ? "error" : "abort", xhr, settings)
            }
        };
        var async = "async" in settings ? settings.async : !0;
        xhr.open(settings.type, settings.url, async);
        for (name in settings.headers) xhr.setRequestHeader(name, settings.headers[name]);
        return ajaxBeforeSend(xhr, settings) === !1 ? (xhr.abort(), !1) : (settings.timeout > 0 && (abortTimeout = setTimeout(function () {
            xhr.onreadystatechange = empty, xhr.abort(), ajaxError(null, "timeout", xhr, settings)
        }, settings.timeout)), xhr.send(settings.data ? settings.data : null), xhr)
    }, $.get = function (a, b, c, d) {
        return $.ajax(parseArguments.apply(null, arguments))
    }, $.post = function (a, b, c, d) {
        var e = parseArguments.apply(null, arguments);
        return e.type = "POST", $.ajax(e)
    }, $.getJSON = function (a, b, c) {
        var d = parseArguments.apply(null, arguments);
        return d.dataType = "json", $.ajax(d)
    }, $.fn.load = function (a, b, c) {
        if (!this.length) return this;
        var d = this,
            e = a.split(/\s/),
            f, g = parseArguments(a, b, c),
            h = g.success;
        return e.length > 1 && (g.url = e[0], f = e[1]), g.success = function (a) {
            d.html(f ? $("<div>").html(a.replace(rscript, "")).find(f) : a), h && h.apply(d, arguments)
        }, $.ajax(g), this
    };
    var escape = encodeURIComponent;
    $.param = function (a, b) {
        var c = [];
        return c.add = function (a, b) {
            this.push(escape(a) + "=" + escape(b))
        }, serialize(c, a, b), c.join("&").replace(/%20/g, "+")
    }
}(Zepto),
function (a) {
    a.fn.serializeArray = function () {
        var b = [],
            c;
        return a(Array.prototype.slice.call(this.get(0).elements)).each(function () {
            c = a(this);
            var d = c.attr("type");
            this.nodeName.toLowerCase() != "fieldset" && !this.disabled && d != "submit" && d != "reset" && d != "button" && (d != "radio" && d != "checkbox" || this.checked) && b.push({
                name: c.attr("name"),
                value: c.val()
            })
        }), b
    }, a.fn.serialize = function () {
        var a = [];
        return this.serializeArray().forEach(function (b) {
            a.push(encodeURIComponent(b.name) + "=" + encodeURIComponent(b.value))
        }), a.join("&")
    }, a.fn.submit = function (b) {
        if (b) this.bind("submit", b);
        else if (this.length) {
            var c = a.Event("submit");
            this.eq(0).trigger(c), c.defaultPrevented || this.get(0).submit()
        }
        return this
    }
}(Zepto),
function (a, b) {
    function s(a) {
        return t(a.replace(/([a-z])([A-Z])/, "$1-$2"))
    }

    function t(a) {
        return a.toLowerCase()
    }

    function u(a) {
        return d ? d + a : t(a)
    }
    var c = "",
        d, e, f, g = {
            Webkit: "webkit",
            Moz: "",
            O: "o",
            ms: "MS"
        }, h = window.document,
        i = h.createElement("div"),
        j = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i,
        k, l, m, n, o, p, q, r = {};
    a.each(g, function (a, e) {
        if (i.style[a + "TransitionProperty"] !== b) return c = "-" + t(a) + "-", d = e, !1
    }), k = c + "transform", r[l = c + "transition-property"] = r[m = c + "transition-duration"] = r[n = c + "transition-timing-function"] = r[o = c + "animation-name"] = r[p = c + "animation-duration"] = r[q = c + "animation-timing-function"] = "", a.fx = {
        off: d === b && i.style.transitionProperty === b,
        speeds: {
            _default: 400,
            fast: 200,
            slow: 600
        },
        cssPrefix: c,
        transitionEnd: u("TransitionEnd"),
        animationEnd: u("AnimationEnd")
    }, a.fn.animate = function (b, c, d, e) {
        return a.isPlainObject(c) && (d = c.easing, e = c.complete, c = c.duration), c && (c = (typeof c == "number" ? c : a.fx.speeds[c] || a.fx.speeds._default) / 1e3), this.anim(b, c, d, e)
    }, a.fn.anim = function (c, d, e, f) {
        var g, h = {}, i, t = "",
            u = this,
            v, w = a.fx.transitionEnd;
        d === b && (d = .4), a.fx.off && (d = 0);
        if (typeof c == "string") h[o] = c, h[p] = d + "s", h[q] = e || "linear", w = a.fx.animationEnd;
        else {
            i = [];
            for (g in c) j.test(g) ? t += g + "(" + c[g] + ") " : (h[g] = c[g], i.push(s(g)));
            t && (h[k] = t, i.push(k)), d > 0 && typeof c == "object" && (h[l] = i.join(", "), h[m] = d + "s", h[n] = e || "linear")
        }
        return v = function (b) {
            if (typeof b != "undefined") {
                if (b.target !== b.currentTarget) return;
                a(b.target).unbind(w, v)
            }
            a(this).css(r), f && f.call(this)
        }, d > 0 && this.bind(w, v), this.size() && this.get(0).clientLeft, this.css(h), d <= 0 && setTimeout(function () {
            u.each(function () {
                v.call(this)
            })
        }, 0), this
    }, i = null
}(Zepto)
jQuery = Zepto;
(function (win, doc) {
    if (enhanced === false) return;
    var toggleClassName = function (element, toggleClass) {
        var reg = new RegExp('(\\s|^)' + toggleClass + '(\\s|$)');
        if (!element.className.match(reg)) {
            element.className += ' ' + toggleClass;
        } else {
            element.className = element.className.replace(reg, '');
        }
    };
    doc.querySelector('a[href="#menu"]').addEventListener('click', function (ev) {
        ev.preventDefault();
        toggleClassName(doc.body, 'js-menu-active');
    });
}(this, this.document));
(function () {
    var lang = /\blang(?:uage)?-(?!\*)(\w+)\b/i;
    var _ = self.Prism = {
        util: {
            type: function (o) {
                return Object.prototype.toString.call(o).match(/\[object (\w+)\]/)[1];
            },
            clone: function (o) {
                var type = _.util.type(o);
                switch (type) {
                case 'Object':
                    var clone = {};
                    for (var key in o) {
                        if (o.hasOwnProperty(key)) {
                            clone[key] = _.util.clone(o[key]);
                        }
                    }
                    return clone;
                case 'Array':
                    return o.slice();
                }
                return o;
            }
        },
        languages: {
            extend: function (id, redef) {
                var lang = _.util.clone(_.languages[id]);
                for (var key in redef) {
                    lang[key] = redef[key];
                }
                return lang;
            },
            insertBefore: function (inside, before, insert, root) {
                root = root || _.languages;
                var grammar = root[inside];
                var ret = {};
                for (var token in grammar) {
                    if (grammar.hasOwnProperty(token)) {
                        if (token == before) {
                            for (var newToken in insert) {
                                if (insert.hasOwnProperty(newToken)) {
                                    ret[newToken] = insert[newToken];
                                }
                            }
                        }
                        ret[token] = grammar[token];
                    }
                }
                return root[inside] = ret;
            },
            DFS: function (o, callback) {
                for (var i in o) {
                    callback.call(o, i, o[i]);
                    if (_.util.type(o) === 'Object') {
                        _.languages.DFS(o[i], callback);
                    }
                }
            }
        },
        highlightAll: function (async, callback) {
            var elements = document.querySelectorAll('code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code');
            for (var i = 0, element; element = elements[i++];) {
                _.highlightElement(element, async === true, callback);
            }
        },
        highlightElement: function (element, async, callback) {
            var language, grammar, parent = element;
            while (parent && !lang.test(parent.className)) {
                parent = parent.parentNode;
            }
            if (parent) {
                language = (parent.className.match(lang) || [, ''])[1];
                grammar = _.languages[language];
            }
            if (!grammar) {
                return;
            }
            element.className = element.className.replace(lang, '').replace(/\s+/g, ' ') + ' language-' + language;
            parent = element.parentNode;
            if (/pre/i.test(parent.nodeName)) {
                parent.className = parent.className.replace(lang, '').replace(/\s+/g, ' ') + ' language-' + language;
            }
            var code = element.textContent;
            if (!code) {
                return;
            }
            code = code.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/\u00a0/g, ' ');
            var env = {
                element: element,
                language: language,
                grammar: grammar,
                code: code
            };
            _.hooks.run('before-highlight', env);
            if (async && self.Worker) {
                var worker = new Worker(_.filename);
                worker.onmessage = function (evt) {
                    env.highlightedCode = Token.stringify(JSON.parse(evt.data), language);
                    _.hooks.run('before-insert', env);
                    env.element.innerHTML = env.highlightedCode;
                    callback && callback.call(env.element);
                    _.hooks.run('after-highlight', env);
                };
                worker.postMessage(JSON.stringify({
                    language: env.language,
                    code: env.code
                }));
            } else {
                env.highlightedCode = _.highlight(env.code, env.grammar, env.language)
                _.hooks.run('before-insert', env);
                env.element.innerHTML = env.highlightedCode;
                callback && callback.call(element);
                _.hooks.run('after-highlight', env);
            }
        },
        highlight: function (text, grammar, language) {
            return Token.stringify(_.tokenize(text, grammar), language);
        },
        tokenize: function (text, grammar, language) {
            var Token = _.Token;
            var strarr = [text];
            var rest = grammar.rest;
            if (rest) {
                for (var token in rest) {
                    grammar[token] = rest[token];
                }
                delete grammar.rest;
            }
            tokenloop: for (var token in grammar) {
                if (!grammar.hasOwnProperty(token) || !grammar[token]) {
                    continue;
                }
                var pattern = grammar[token],
                    inside = pattern.inside,
                    lookbehind = !! pattern.lookbehind,
                    lookbehindLength = 0;
                pattern = pattern.pattern || pattern;
                for (var i = 0; i < strarr.length; i++) {
                    var str = strarr[i];
                    if (strarr.length > text.length) {
                        break tokenloop;
                    }
                    if (str instanceof Token) {
                        continue;
                    }
                    pattern.lastIndex = 0;
                    var match = pattern.exec(str);
                    if (match) {
                        if (lookbehind) {
                            lookbehindLength = match[1].length;
                        }
                        var from = match.index - 1 + lookbehindLength,
                            match = match[0].slice(lookbehindLength),
                            len = match.length,
                            to = from + len,
                            before = str.slice(0, from + 1),
                            after = str.slice(to + 1);
                        var args = [i, 1];
                        if (before) {
                            args.push(before);
                        }
                        var wrapped = new Token(token, inside ? _.tokenize(match, inside) : match);
                        args.push(wrapped);
                        if (after) {
                            args.push(after);
                        }
                        Array.prototype.splice.apply(strarr, args);
                    }
                }
            }
            return strarr;
        },
        hooks: {
            all: {},
            add: function (name, callback) {
                var hooks = _.hooks.all;
                hooks[name] = hooks[name] || [];
                hooks[name].push(callback);
            },
            run: function (name, env) {
                var callbacks = _.hooks.all[name];
                if (!callbacks || !callbacks.length) {
                    return;
                }
                for (var i = 0, callback; callback = callbacks[i++];) {
                    callback(env);
                }
            }
        }
    };
    var Token = _.Token = function (type, content) {
        this.type = type;
        this.content = content;
    };
    Token.stringify = function (o, language, parent) {
        if (typeof o == 'string') {
            return o;
        }
        if (Object.prototype.toString.call(o) == '[object Array]') {
            return o.map(function (element) {
                return Token.stringify(element, language, o);
            }).join('');
        }
        var env = {
            type: o.type,
            content: Token.stringify(o.content, language, parent),
            tag: 'span',
            classes: ['token', o.type],
            attributes: {},
            language: language,
            parent: parent
        };
        if (env.type == 'comment') {
            env.attributes['spellcheck'] = 'true';
        }
        _.hooks.run('wrap', env);
        var attributes = '';
        for (var name in env.attributes) {
            attributes += name + '="' + (env.attributes[name] || '') + '"';
        }
        return '<' + env.tag + ' class="' + env.classes.join(' ') + '" ' + attributes + '>' + env.content + '</' + env.tag + '>';
    };
    if (!self.document) {
        self.addEventListener('message', function (evt) {
            var message = JSON.parse(evt.data),
                lang = message.language,
                code = message.code;
            self.postMessage(JSON.stringify(_.tokenize(code, _.languages[lang])));
            self.close();
        }, false);
        return;
    }
    var script = document.getElementsByTagName('script');
    script = script[script.length - 1];
    if (script) {
        _.filename = script.src;
        if (document.addEventListener && !script.hasAttribute('data-manual')) {
            document.addEventListener('DOMContentLoaded', _.highlightAll);
        }
    }
})();;
Prism.languages.markup = {
    'comment': /&lt;!--[\w\W]*?-->/g,
    'prolog': /&lt;\?.+?\?>/,
    'doctype': /&lt;!DOCTYPE.+?>/,
    'cdata': /&lt;!\[CDATA\[[\w\W]*?]]>/i,
    'tag': {
        pattern: /&lt;\/?[\w:-]+\s*(?:\s+[\w:-]+(?:=(?:("|')(\\?[\w\W])*?\1|\w+))?\s*)*\/?>/gi,
        inside: {
            'tag': {
                pattern: /^&lt;\/?[\w:-]+/i,
                inside: {
                    'punctuation': /^&lt;\/?/,
                    'namespace': /^[\w-]+?:/
                }
            },
            'attr-value': {
                pattern: /=(?:('|")[\w\W]*?(\1)|[^\s>]+)/gi,
                inside: {
                    'punctuation': /=|>|"/g
                }
            },
            'punctuation': /\/?>/g,
            'attr-name': {
                pattern: /[\w:-]+/g,
                inside: {
                    'namespace': /^[\w-]+?:/
                }
            }
        }
    },
    'entity': /&amp;#?[\da-z]{1,8};/gi
};
Prism.hooks.add('wrap', function (env) {
    if (env.type === 'entity') {
        env.attributes['title'] = env.content.replace(/&amp;/, '&');
    }
});;
Prism.languages.css = {
    'comment': /\/\*[\w\W]*?\*\//g,
    'atrule': {
        pattern: /@[\w-]+?.*?(;|(?=\s*{))/gi,
        inside: {
            'punctuation': /[;:]/g
        }
    },
    'url': /url\((["']?).*?\1\)/gi,
    'selector': /[^\{\}\s][^\{\};]*(?=\s*\{)/g,
    'property': /(\b|\B)[\w-]+(?=\s*:)/ig,
    'string': /("|')(\\?.)*?\1/g,
    'important': /\B!important\b/gi,
    'ignore': /&(lt|gt|amp);/gi,
    'punctuation': /[\{\};:]/g
};
if (Prism.languages.markup) {
    Prism.languages.insertBefore('markup', 'tag', {
        'style': {
            pattern: /(&lt;|<)style[\w\W]*?(>|&gt;)[\w\W]*?(&lt;|<)\/style(>|&gt;)/ig,
            inside: {
                'tag': {
                    pattern: /(&lt;|<)style[\w\W]*?(>|&gt;)|(&lt;|<)\/style(>|&gt;)/ig,
                    inside: Prism.languages.markup.tag.inside
                },
                rest: Prism.languages.css
            }
        }
    });
};
Prism.languages.clike = {
    'comment': {
        pattern: /(^|[^\\])(\/\*[\w\W]*?\*\/|(^|[^:])\/\/.*?(\r?\n|$))/g,
        lookbehind: true
    },
    'string': /("|')(\\?.)*?\1/g,
    'class-name': {
        pattern: /((?:(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[a-z0-9_\.\\]+/ig,
        lookbehind: true,
        inside: {
            punctuation: /(\.|\\)/
        }
    },
    'keyword': /\b(if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/g,
    'boolean': /\b(true|false)\b/g,
    'function': {
        pattern: /[a-z0-9_]+\(/ig,
        inside: {
            punctuation: /\(/
        }
    },
    'number': /\b-?(0x[\dA-Fa-f]+|\d*\.?\d+([Ee]-?\d+)?)\b/g,
    'operator': /[-+]{1,2}|!|&lt;=?|>=?|={1,3}|(&amp;){1,2}|\|?\||\?|\*|\/|\~|\^|\%/g,
    'ignore': /&(lt|gt|amp);/gi,
    'punctuation': /[{}[\];(),.:]/g
};;
Prism.languages.javascript = Prism.languages.extend('clike', {
    'keyword': /\b(var|let|if|else|while|do|for|return|in|instanceof|function|new|with|typeof|try|throw|catch|finally|null|break|continue)\b/g,
    'number': /\b-?(0x[\dA-Fa-f]+|\d*\.?\d+([Ee]-?\d+)?|NaN|-?Infinity)\b/g
});
Prism.languages.insertBefore('javascript', 'keyword', {
    'regex': {
        pattern: /(^|[^/])\/(?!\/)(\[.+?]|\\.|[^/\r\n])+\/[gim]{0,3}(?=\s*($|[\r\n,.;})]))/g,
        lookbehind: true
    }
});
if (Prism.languages.markup) {
    Prism.languages.insertBefore('markup', 'tag', {
        'script': {
            pattern: /(&lt;|<)script[\w\W]*?(>|&gt;)[\w\W]*?(&lt;|<)\/script(>|&gt;)/ig,
            inside: {
                'tag': {
                    pattern: /(&lt;|<)script[\w\W]*?(>|&gt;)|(&lt;|<)\/script(>|&gt;)/ig,
                    inside: Prism.languages.markup.tag.inside
                },
                rest: Prism.languages.javascript
            }
        }
    });
};
Prism.languages.php = Prism.languages.extend('clike', {
    'keyword': /\b(and|or|xor|array|as|break|case|cfunction|class|const|continue|declare|default|die|do|else|elseif|enddeclare|endfor|endforeach|endif|endswitch|endwhile|extends|for|foreach|function|include|include_once|global|if|new|return|static|switch|use|require|require_once|var|while|abstract|interface|public|implements|extends|private|protected|parent|static|throw|null|echo|print|trait|namespace|use|final|yield|goto|instanceof|finally|try|catch)\b/ig,
    'constant': /\b[A-Z0-9_]{2,}\b/g
});
Prism.languages.insertBefore('php', 'keyword', {
    'delimiter': /(\?>|&lt;\?php|&lt;\?)/ig,
    'variable': /(\$\w+)\b/ig,
    'package': {
        pattern: /(\\|namespace\s+|use\s+)[\w\\]+/g,
        lookbehind: true,
        inside: {
            punctuation: /\\/
        }
    }
});
Prism.languages.insertBefore('php', 'operator', {
    'property': {
        pattern: /(->)[\w]+/g,
        lookbehind: true
    }
});
if (Prism.languages.markup) {
    Prism.hooks.add('before-highlight', function (env) {
        if (env.language !== 'php') {
            return;
        }
        env.tokenStack = [];
        env.code = env.code.replace(/(?:&lt;\?php|&lt;\?|<\?php|<\?)[\w\W]*?(?:\?&gt;|\?>)/ig, function (match) {
            env.tokenStack.push(match);
            return '{{{PHP' + env.tokenStack.length + '}}}';
        });
    });
    Prism.hooks.add('after-highlight', function (env) {
        if (env.language !== 'php') {
            return;
        }
        for (var i = 0, t; t = env.tokenStack[i]; i++) {
            env.highlightedCode = env.highlightedCode.replace('{{{PHP' + (i + 1) + '}}}', Prism.highlight(t, env.grammar, 'php'));
        }
        env.element.innerHTML = env.highlightedCode;
    });
    Prism.hooks.add('wrap', function (env) {
        if (env.language === 'php' && env.type === 'markup') {
            env.content = env.content.replace(/(\{\{\{PHP[0-9]+\}\}\})/g, "<span class=\"token php\">$1</span>");
        }
    });
    Prism.languages.insertBefore('php', 'comment', {
        'markup': {
            pattern: /(&lt;|<)[^?]\/?(.*?)(>|&gt;)/g,
            inside: Prism.languages.markup
        },
        'php': /\{\{\{PHP[0-9]+\}\}\}/g
    });
}
/*! Ajax-Include - v0.1.3 - 2013-11-11
 * http://filamentgroup.com/lab/ajax_includes_modular_content/
 * Copyright (c) 2013 @scottjehl, Filament Group, Inc.; Licensed MIT */
;
(function ($, win, undefined) {
    var AI = {
        boundAttr: "data-ajax-bound",
        interactionAttr: "data-interaction",
        makeReq: function (url, els, isHijax) {
            $.get(url, function (data, status, xhr) {
                els.trigger("ajaxIncludeResponse", [data, xhr]);
            });
        },
        plugins: {}
    };
    $.fn.ajaxInclude = function (options) {
        var urllist = [],
            elQueue = $(),
            o = {
                proxy: null
            };
        if (typeof options === "string") {
            o.proxy = options;
        } else {
            o = $.extend(o, options);
        }

        function queueOrRequest(el) {
            var url = el.data("url");
            if (o.proxy && $.inArray(url, urllist) === -1) {
                urllist.push(url);
                elQueue = elQueue.add(el);
            } else {
                AI.makeReq(url, el);
            }
        }

        function runQueue() {
            if (urllist.length) {
                AI.makeReq(o.proxy + urllist.join(","), elQueue);
                elQueue = $();
                urllist = [];
            }
        }

        function bindForLater(el, media) {
            var mm = win.matchMedia(media);

            function cb() {
                queueOrRequest(el);
                runQueue();
                mm.removeListener(cb);
            }
            if (mm.addListener) {
                mm.addListener(cb);
            }
        }
        this.not("[" + AI.boundAttr + "]").not("[" + AI.interactionAttr + "]").each(function (k) {
            var el = $(this),
                media = el.attr("data-media"),
                methods = ["append", "replace", "before", "after"],
                method, url, isHijax = false,
                target = el.attr("data-target");
            for (var ml = methods.length, i = 0; i < ml; i++) {
                if (el.is("[data-" + methods[i] + "]")) {
                    method = methods[i];
                    url = el.attr("data-" + method);
                }
            }
            if (!url) {
                url = el.attr("href") || el.attr("action");
                isHijax = true;
            }
            if (method === "replace") {
                method += "With";
            }
            el.data("method", method).data("url", url).data("target", target).attr(AI.boundAttr, true).each(function () {
                for (var j in AI.plugins) {
                    AI.plugins[j].call(this, o);
                }
            }).bind("ajaxIncludeResponse", function (e, data, xhr) {
                var content = data,
                    targetEl = target ? $(target) : el;
                if (o.proxy) {
                    var subset = content.match(new RegExp("<entry url=[\"']?" + el.data("url") + "[\"']?>(?:(?!</entry>)(.|\n))*", "gmi"));
                    if (subset) {
                        content = subset[0];
                    }
                }
                var filteredContent = el.triggerHandler("ajaxIncludeFilter", [content]);
                if (filteredContent) {
                    content = filteredContent;
                }
                if (method === 'replaceWith') {
                    el.trigger("ajaxInclude", [content]);
                    targetEl[el.data("method")](content);
                } else {
                    targetEl[el.data("method")](content);
                    el.trigger("ajaxInclude", [content]);
                }
            });
            if (isHijax) {
                AI.makeReq(url, el, true);
            } else if (!media || (win.matchMedia && win.matchMedia(media).matches)) {
                queueOrRequest(el);
            } else if (media && win.matchMedia) {
                bindForLater(el, media);
            }
        });
        runQueue();
        return this;
    };
    win.AjaxInclude = AI;
}(jQuery, this));
$("a[data-interaction]").bind("click", function (e) {
    e.preventDefault();
    $(this).removeAttr("data-interaction").ajaxInclude();
});
var cornerOver = function () {
    this.className = this.className.replace(' js-mouseout', '');
};
var cornerOut = function () {
    this.className += ' js-mouseout';
};
var corners = document.querySelectorAll('.summary-article');
for (var i = corners.length - 1; i >= 0; i--) {
    corners[i].addEventListener('js-mouseover', cornerOver, false);
    corners[i].addEventListener('js-mouseout', cornerOut, false);
};
if (window.innerWidth > 640) {
    equalheight = function (container) {
        var currentTallest = 0,
            currentRowStart = 0,
            rowDivs = new Array(),
            $el, topPosition = 0;
        $(container).each(function () {
            $el = $(this);
            $($el).height('auto')
            topPostion = $el.position().top;
            if (currentRowStart != topPostion) {
                for (currentDiv = 0; currentDiv < rowDivs.length; currentDiv++) {
                    rowDivs[currentDiv].height(currentTallest);
                }
                rowDivs.length = 0;
                currentRowStart = topPostion;
                currentTallest = $el.height();
                rowDivs.push($el);
            } else {
                rowDivs.push($el);
                currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
            }
            for (currentDiv = 0; currentDiv < rowDivs.length; currentDiv++) {
                rowDivs[currentDiv].height(currentTallest);
            }
        });
    }
    $(document).ready(function () {
        equalheight('.list_item .summary-article');
    });
    $(window).resize(function () {
        equalheight('.list_item .summary-article');
    });
}
if (window.innerWidth > 504) {
    $('.navigation').append('<a class="nav nav-top" href="#top" data-icon="&#x2303;">Return to the top of this page</a>');
    $(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 400) {
                $('.nav-top').animate({
                    opacity: 1
                }, 500, 'ease-in')
            } else {
                $('.nav-top').animate({
                    opacity: 0
                }, 500, 'ease-out')
            }
        });

        function smoothScroll(el, to, duration) {
            if (duration < 0) {
                return;
            }
            var difference = to - $(window).scrollTop();
            var perTick = difference / duration * 10;
            this.scrollToTimerCache = setTimeout(function () {
                if (!isNaN(parseInt(perTick, 10))) {
                    window.scrollTo(0, $(window).scrollTop() + perTick);
                    smoothScroll(el, to, duration - 10);
                }
            }.bind(this), 10);
        }
        $('.nav-top').on('click', function (e) {
            e.preventDefault();
            smoothScroll($(window), $($(e.currentTarget).attr('href')).offset().top, 500);
        });
    });
}
$('body').on('click', '.summary_vote a', function (e) {
    e.preventDefault();
    var link = $(this);
    var resultdiv = $('<div />');
    resultdiv.load(link.attr('href'), function (r) {
        var postdata = resultdiv.find('form').serialize();
        $.post(link.attr('href'), postdata, function () {
            link.parents('p').text('Thanks for voting!');
        });
    });
});
$('a.continue[data-interaction]').addClass('continue-ajax').on('click', function (e) {
    e.preventDefault();
    $('#comments').addClass('section-loading');
    $(this).removeAttr('data-interaction').ajaxInclude();
});
(function (i, s, o, g, r, a, m) {
    i['GoogleAnalyticsObject'] = r;
    i[r] = i[r] || function () {
        (i[r].q = i[r].q || []).push(arguments)
    }, i[r].l = 1 * new Date();
    a = s.createElement(o), m = s.getElementsByTagName(o)[0];
    a.async = 1;
    a.src = g;
    m.parentNode.insertBefore(a, m)
})(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');
ga('create', 'UA-46113717-1', '24ways.org');
ga('send', 'pageview');
var _gauges = _gauges || [];
(function () {
    var t = document.createElement('script');
    t.type = 'text/javascript';
    t.async = true;
    t.id = 'gauges-tracker';
    t.setAttribute('data-site-id', '5299b018f5a1f50cc600011d');
    t.src = '//secure.gaug.es/track.js';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(t, s);
})();