/*! artDialog v6.0.5 | https://github.com/aui/artDialog */
!(function () {
    var b = {};

    function a(f) {
        var e = b[f];
        var d = "exports";
        if (typeof e === "object") {
            return e
        }
        if (!e[d]) {
            e[d] = {};
            e[d] = e.call(e[d], a, e[d], e) || e[d]
        }
        return e[d]
    }

    function c(e, d) {b[e] = d}

    c("jquery", function () {return jQuery});
    /*!
     * PopupJS
     * Date: 2014-11-09
     * https://github.com/aui/popupjs
     * (c) 2009-2014 TangBin, http://www.planeArt.cn
     *
     * This is licensed under the GNU LGPL, version 2.1 or later.
     * For details, see: http://www.gnu.org/licenses/lgpl-2.1.html
     */
    c("popup", function (e) {
        var i = e("jquery");
        var d = 0;
        var f = !("minWidth" in i("html")[0].style);
        var h = !f;

        function g() {
            this.destroyed  = false;
            this.__popup    = i("<div />").css({display: "none", position: "absolute", outline: 0}).attr("tabindex", "-1").html(this.innerHTML).appendTo("body");
            this.__backdrop = this.__mask = i("<div />").css({opacity: 0.7, background: "#000"});
            this.node     = this.__popup[0];
            this.backdrop = this.__backdrop[0];
            d++
        }

        i.extend(g.prototype, {
            node               : null,
            backdrop           : null,
            fixed              : false,
            destroyed          : true,
            open               : false,
            returnValue        : "",
            autofocus          : true,
            align              : "bottom left",
            innerHTML          : "",
            className          : "ui-popup",
            show               : function (l) {
                if (this.destroyed) {
                    return this
                }
                var n                = this;
                var j                = this.__popup;
                var k                = this.__backdrop;
                this.__activeElement = this.__getActive();
                this.open            = true;
                this.follow          = l || this.follow;
                if (!this.__ready) {
                    j.addClass(this.className).attr("role", this.modal ? "alertdialog" : "dialog").css("position", this.fixed ? "fixed" : "absolute");
                    if (!f) {
                        i(window).on("resize", i.proxy(this.reset, this))
                    }
                    if (this.modal) {
                        var m = {position: "fixed", left: 0, top: 0, width: "100%", height: "100%", overflow: "hidden", userSelect: "none", zIndex: this.zIndex || g.zIndex};
                        j.addClass(this.className + "-modal");
                        if (!h) {
                            i.extend(m, {position: "absolute", width: i(window).width() + "px", height: i(document).height() + "px"})
                        }
                        k.css(m).attr({tabindex: "0"}).on("focus", i.proxy(this.focus, this));
                        this.__mask = k.clone(true).attr("style", "").insertAfter(j);
                        k.addClass(this.className + "-backdrop").insertBefore(j);
                        this.__ready = true
                    }
                    if (!j.html()) {
                        j.html(this.innerHTML)
                    }
                }
                j.addClass(this.className + "-show").show();
                k.show();
                this.reset().focus();
                this.__dispatchEvent("show");
                return this
            },
            showModal          : function () {
                this.modal = true;
                return this.show.apply(this, arguments)
            },
            close              : function (j) {
                if (!this.destroyed && this.open) {
                    if (j !== undefined) {
                        this.returnValue = j
                    }
                    this.__popup.hide().removeClass(this.className + "-show");
                    this.__backdrop.hide();
                    this.open = false;
                    this.blur();
                    this.__dispatchEvent("close")
                }
                return this
            },
            remove             : function () {
                if (this.destroyed) {
                    return this
                }
                this.__dispatchEvent("beforeremove");
                if (g.current === this) {
                    g.current = null
                }
                this.__popup.remove();
                this.__backdrop.remove();
                this.__mask.remove();
                if (!f) {
                    i(window).off("resize", this.reset)
                }
                this.__dispatchEvent("remove");
                for (var j in this) {
                    delete this[j]
                }
                return this
            },
            reset              : function () {
                var j = this.follow;
                if (j) {
                    this.__follow(j)
                } else {
                    this.__center()
                }
                this.__dispatchEvent("reset");
                return this
            },
            focus              : function () {
                var l = this.node;
                var j = this.__popup;
                var m = g.current;
                var k = this.zIndex = g.zIndex++;
                if (m && m !== this) {
                    m.blur(false)
                }
                if (!i.contains(l, this.__getActive())) {
                    var n = j.find("[autofocus]")[0];
                    if (!this._autofocus && n) {
                        this._autofocus = true
                    } else {
                        n = l
                    }
                    this.__focus(n)
                }
                j.css("zIndex", k);
                g.current = this;
                j.addClass(this.className + "-focus");
                this.__dispatchEvent("focus");
                return this
            },
            blur               : function () {
                var j = this.__activeElement;
                var k = arguments[0];
                if (k !== false) {
                    this.__focus(j)
                }
                this._autofocus = false;
                this.__popup.removeClass(this.className + "-focus");
                this.__dispatchEvent("blur");
                return this
            },
            addEventListener   : function (j, k) {
                this.__getEventListener(j).push(k);
                return this
            },
            removeEventListener: function (l, m) {
                var k = this.__getEventListener(l);
                for (var j = 0; j < k.length; j++) {
                    if (m === k[j]) {
                        k.splice(j--, 1)
                    }
                }
                return this
            },
            __getEventListener : function (j) {
                var k = this.__listener;
                if (!k) {
                    k = this.__listener = {}
                }
                if (!k[j]) {
                    k[j] = []
                }
                return k[j]
            },
            __dispatchEvent    : function (l) {
                var k = this.__getEventListener(l);
                if (this["on" + l]) {
                    this["on" + l]()
                }
                for (var j = 0; j < k.length; j++) {
                    k[j].call(this)
                }
            },
            __focus            : function (j) {
                try {
                    if (this.autofocus && !/^iframe$/i.test(j.nodeName)) {
                        j.focus()
                    }
                } catch (k) {
                }
            },
            __getActive        : function () {
                try {
                    var l = document.activeElement;
                    var j = l.contentDocument;
                    var k = j && j.activeElement || l;
                    return k
                } catch (m) {
                }
            },
            __center           : function () {
                var k  = this.__popup;
                var m  = i(window);
                var q  = i(document);
                var r  = this.fixed;
                var t  = r ? 0 : q.scrollLeft();
                var n  = r ? 0 : q.scrollTop();
                var s  = m.width();
                var l  = m.height();
                var o  = k.width();
                var v  = k.height();
                var p  = (s - o) / 2 + t;
                var u  = (l - v) * 382 / 1000 + n;
                var j  = k[0].style;
                j.left = Math.max(parseInt(p), t) + "px";
                j.top  = Math.max(parseInt(u), n) + "px"
            },
            __follow           : function (t) {
                var k = t.parentNode && i(t);
                var j = this.__popup;
                if (this.__followSkin) {
                    j.removeClass(this.__followSkin)
                }
                if (k) {
                    var J = k.offset();
                    if (J.left * J.top < 0) {
                        return this.__center()
                    }
                }
                var u = this;
                var p = this.fixed;
                var F = i(window);
                var Q = i(document);
                var E = F.width();
                var l = F.height();
                var q = Q.scrollLeft();
                var s = Q.scrollTop();
                var L = j.width();
                var C = j.height();
                var K = k ? k.outerWidth() : 0;
                var H = k ? k.outerHeight() : 0;
                var r = this.__offset(t);
                var A = r.left;
                var z = r.top;
                var n = p ? A - q : A;
                var G = p ? z - s : z;
                var I = p ? 0 : q;
                var w = p ? 0 : s;
                var N = I + E - L;
                var R = w + l - C;
                var B = {};
                var M = this.align.split(" ");
                var m = this.className + "-";
                var v = {top: "bottom", bottom: "top", left: "right", right: "left"};
                var S = {top: "top", bottom: "top", left: "left", right: "left"};
                var O = [{top: G - C, bottom: G + H, left: n - L, right: n + K}, {top: G, bottom: G - C + H, left: n, right: n - L + K}];
                var P = {left: n + K / 2 - L / 2, top: G + H / 2 - C / 2};
                var D = {left: [I, N], top: [w, R]};
                i.each(M, function (o, x) {
                    if (O[o][x] > D[S[x]][1]) {
                        x = M[o] = v[x]
                    }
                    if (O[o][x] < D[S[x]][0]) {
                        M[o] = v[x]
                    }
                });
                if (!M[1]) {
                    S[M[1]]    = S[M[0]] === "left" ? "top" : "left";
                    O[1][M[1]] = P[S[M[1]]]
                }
                m += M.join("-") + " " + this.className + "-follow";
                u.__followSkin = m;
                if (k) {
                    j.addClass(m)
                }
                B[S[M[0]]] = parseInt(O[0][M[0]]);
                B[S[M[1]]] = parseInt(O[1][M[1]]);
                j.css(B)
            },
            __offset           : function (n) {
                var r = n.parentNode;
                var l = r ? i(n).offset() : {left: n.pageX, top: n.pageY};
                n     = r ? n : n.target;
                var u = n.ownerDocument;
                var o = u.defaultView || u.parentWindow;
                if (o == window) {
                    return l
                }
                var m = o.frameElement;
                var s = i(u);
                var j = s.scrollLeft();
                var t = s.scrollTop();
                var q = i(m).offset();
                var p = q.left;
                var k = q.top;
                return {left: l.left + p - j, top: l.top + k - t}
            }
        });
        g.zIndex  = 1024;
        g.current = null;
        return g
    });
    c("dialog-config", {
        backdropBackground: "#000",
        backdropOpacity   : 0.7,
        content           : '<span class="ui-dialog-loading">Loading..</span>',
        title             : "",
        statusbar         : "",
        button            : null,
        ok                : null,
        cancel            : null,
        okValue           : "ok",
        cancelValue       : "cancel",
        cancelDisplay     : true,
        width             : "",
        height            : "",
        padding           : "",
        skin              : "",
        quickClose        : false,
        cssUri            : "../css/ui-dialog.css",
        innerHTML         : '<div i="dialog" class="ui-dialog">' + '<div class="ui-dialog-arrow-a"></div>' + '<div class="ui-dialog-arrow-b"></div>' + '<table class="ui-dialog-grid">' + "<tr>" + '<td i="header" class="ui-dialog-header">' + '<button i="close" class="ui-dialog-close">&#215;</button>' + '<div i="title" class="ui-dialog-title"></div>' + "</td>" + "</tr>" + "<tr>" + '<td i="body" class="ui-dialog-body">' + '<div i="content" class="ui-dialog-content"></div>' + "</td>" + "</tr>" + "<tr>" + '<td i="footer" class="ui-dialog-footer">' + '<div i="statusbar" class="ui-dialog-statusbar"></div>' + '<div i="button" class="ui-dialog-button"></div>' + "</td>" + "</tr>" + "</table>" + "</div>"
    });
    /*!
     * artDialog
     * Date: 2014-11-09
     * https://github.com/aui/artDialog
     * (c) 2009-2014 TangBin, http://www.planeArt.cn
     *
     * This is licensed under the GNU LGPL, version 2.1 or later.
     * For details, see: http://www.gnu.org/licenses/lgpl-2.1.html
     */
    c("dialog", function (f) {
        var i = f("jquery");
        var q = f("popup");
        var g = f("dialog-config");
        var j = g.cssUri;
        if (j) {
            var l = f[f.toUrl ? "toUrl" : "resolve"];
            if (l) {
                j = l(j);
                j = '<link rel="stylesheet" href="' + j + '" />';
                if (i("base")[0]) {
                    i("base").before(j)
                } else {
                    i("head").append(j)
                }
            }
        }
        var m       = 0;
        var p       = new Date() - 0;
        var k       = !("minWidth" in i("html")[0].style);
        var o       = "createTouch" in document && !("onmousemove" in document) || /(iPhone|iPad|iPod)/i.test(navigator.userAgent);
        var h       = !k && !o;
        var e       = function (r, s, u) {
            var w = r = r || {};
            if (typeof r === "string" || r.nodeType === 1) {
                r = {content: r, fixed: !o}
            }
            r          = i.extend(true, {}, e.defaults, r);
            r.original = w;
            var v      = r.id = r.id || p + m;
            var t = e.get(v);
            if (t) {
                return t.focus()
            }
            if (!h) {
                r.fixed = false
            }
            if (r.quickClose) {
                r.modal           = true;
                r.backdropOpacity = 0
            }
            if (!i.isArray(r.button)) {
                r.button = []
            }
            if (u !== undefined) {
                r.cancel = u
            }
            if (r.cancel) {
                r.button.push({id: "cancel", value: r.cancelValue, callback: r.cancel, display: r.cancelDisplay})
            }
            if (s !== undefined) {
                r.ok = s
            }
            if (r.ok) {
                r.button.push({id: "ok", value: r.okValue, callback: r.ok, autofocus: true})
            }
            return e.list[v] = new e.create(r)
        };
        var d       = function () {};
        d.prototype = q.prototype;
        var n       = e.prototype = new d();
        e.create           = function (s) {
            var t = this;
            i.extend(this, new q());
            var v        = s.original;
            var u        = i(this.node).html(s.innerHTML);
            var r        = i(this.backdrop);
            this.options = s;
            this._popup  = u;
            i.each(s, function (w, x) {
                if (typeof t[w] === "function") {
                    t[w](x)
                } else {
                    t[w] = x
                }
            });
            if (s.zIndex) {
                q.zIndex = s.zIndex
            }
            u.attr({
                "aria-labelledby" : this._$("title").attr("id", "title:" + this.id).attr("id"),
                "aria-describedby": this._$("content").attr("id", "content:" + this.id).attr("id")
            });
            this._$("close").css("display", this.cancel === false ? "none" : "").attr("title", this.cancelValue).on("click", function (w) {
                t._trigger("cancel");
                w.preventDefault()
            });
            this._$("dialog").addClass(this.skin);
            this._$("body").css("padding", this.padding);
            if (s.quickClose) {
                r.on("onmousedown" in document ? "mousedown" : "click", function () {
                    t._trigger("cancel");
                    return false
                })
            }
            this.addEventListener("show", function () {r.css({opacity: 0, background: s.backdropBackground}).animate({opacity: s.backdropOpacity}, 150)});
            this._esc = function (y) {
                var A = y.target;
                var B = A.nodeName;
                var w = /^input|textarea$/i;
                var x = q.current === t;
                var z = y.keyCode;
                if (!x || w.test(B) && A.type !== "button") {
                    return
                }
                if (z === 27) {
                    t._trigger("cancel")
                }
            };
            i(document).on("keydown", this._esc);
            this.addEventListener("remove", function () {
                i(document).off("keydown", this._esc);
                delete e.list[this.id]
            });
            m++;
            e.oncreate(this);
            return this
        };
        e.create.prototype = n;
        i.extend(n, {
            content     : function (s) {
                var r = this._$("content");
                if (typeof s === "object") {
                    s = i(s);
                    r.empty("").append(s.show());
                    this.addEventListener("beforeremove", function () {i("body").append(s.hide())})
                } else {
                    r.html(s)
                }
                return this.reset()
            }, title    : function (r) {
                this._$("title").text(r);
                this._$("header")[r ? "show" : "hide"]();
                return this
            }, width    : function (r) {
                this._$("content").css("width", r);
                return this.reset()
            }, height   : function (r) {
                this._$("content").css("height", r);
                return this.reset()
            }, button   : function (r) {
                r              = r || [];
                var u          = this;
                var s          = "";
                var t          = 0;
                this.callbacks = {};
                if (typeof r === "string") {
                    s = r;
                    t++
                } else {
                    i.each(r, function (v, x) {
                        var y = x.id = x.id || x.value;
                        var w          = "";
                        u.callbacks[y] = x.callback;
                        if (x.display === false) {
                            w = ' style="display:none"'
                        } else {
                            t++
                        }
                        s += "<button" + ' type="button"' + ' i-id="' + y + '"' + w + (x.disabled ? " disabled" : "") + (x.autofocus ? ' autofocus class="ui-dialog-autofocus"' : "") + ">" + x.value + "</button>";
                        u._$("button").on("click", "[i-id=" + y + "]", function (z) {
                            var A = i(this);
                            if (!A.attr("disabled")) {
                                u._trigger(y)
                            }
                            z.preventDefault()
                        })
                    })
                }
                this._$("button").html(s);
                this._$("footer")[t ? "show" : "hide"]();
                return this
            }, statusbar: function (r) {
                this._$("statusbar").html(r)[r ? "show" : "hide"]();
                return this
            }, _$       : function (r) {return this._popup.find("[i=" + r + "]")}, _trigger: function (s) {
                var r = this.callbacks[s];
                return typeof r !== "function" || r.call(this) !== false ? this.close().remove() : this
            }
        });
        e.oncreate   = i.noop;
        e.getCurrent = function () {return q.current};
        e.get        = function (r) {return r === undefined ? e.list : e.list[r]};
        e.list       = {};
        e.defaults   = g;
        return e
    });
    window.dialog = a("dialog")
})();