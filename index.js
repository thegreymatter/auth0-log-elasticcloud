module.exports = (function (e) {
    function t(r) {
        if (n[r]) return n[r].exports;
        var o = (n[r] = { i: r, l: !1, exports: {} });
        return e[r].call(o.exports, o, o.exports, t), (o.l = !0), o.exports;
    }
    var n = {};
    return (
        (t.m = e),
        (t.c = n),
        (t.i = function (e) {
            return e;
        }),
        (t.d = function (e, n, r) {
            t.o(e, n) || Object.defineProperty(e, n, { configurable: !1, enumerable: !0, get: r });
        }),
        (t.n = function (e) {
            var n =
                e && e.__esModule
                    ? function () {
                          return e.default;
                      }
                    : function () {
                          return e;
                      };
            return t.d(n, "a", n), n;
        }),
        (t.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t);
        }),
        (t.p = ""),
        t((t.s = 76))
    );
})([
    function (e, t) {
        e.exports = require("auth0-extension-tools@1.3.1");
    },
    function (e, t) {
        var n = (e.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")());
        "number" == typeof __g && (__g = n);
    },
    function (e, t, n) {
        "use strict";
        e.exports = n(0).config();
    },
    function (e, t) {
        var n = {}.hasOwnProperty;
        e.exports = function (e, t) {
            return n.call(e, t);
        };
    },
    function (e, t, n) {
        e.exports = !n(15)(function () {
            return (
                7 !=
                Object.defineProperty({}, "a", {
                    get: function () {
                        return 7;
                    },
                }).a
            );
        });
    },
    function (e, t, n) {
        var r = n(6),
            o = n(16);
        e.exports = n(4)
            ? function (e, t, n) {
                  return r.f(e, t, o(1, n));
              }
            : function (e, t, n) {
                  return (e[t] = n), e;
              };
    },
    function (e, t, n) {
        var r = n(13),
            o = n(42),
            i = n(29),
            s = Object.defineProperty;
        t.f = n(4)
            ? Object.defineProperty
            : function (e, t, n) {
                  if ((r(e), (t = i(t, !0)), r(n), o))
                      try {
                          return s(e, t, n);
                      } catch (e) {}
                  if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
                  return "value" in n && (e[t] = n.value), e;
              };
    },
    function (e, t, n) {
        var r = n(89),
            o = n(19);
        e.exports = function (e) {
            return r(o(e));
        };
    },
    function (e, t, n) {
        var r = n(27)("wks"),
            o = n(17),
            i = n(1).Symbol,
            s = "function" == typeof i;
        (e.exports = function (e) {
            return r[e] || (r[e] = (s && i[e]) || (s ? i : o)("Symbol." + e));
        }).store = r;
    },
    function (e, t, n) {
        const r = n(65),
            o = n(34),
            i = n(58),
            s = n(64);
        (e.exports.createServer = r.createServer), (e.exports.urlHelpers = o), (e.exports.middlewares = i), (e.exports.routes = s);
    },
    function (e, t, n) {
        "use strict";
        var r = n(128);
        r.emitErrs = !0;
        var o = new r.Logger({ transports: [new r.transports.Console({ timestamp: !0, level: "debug", handleExceptions: !0, json: !1, colorize: !0 })], exitOnError: !1 });
        (e.exports = o),
            (e.exports.stream = {
                write: function (e) {
                    o.info(e.replace(/\n$/, ""));
                },
            });
    },
    function (e, t) {
        e.exports = function (e) {
            return "object" == typeof e ? null !== e : "function" == typeof e;
        };
    },
    function (e, t) {
        e.exports = require("express@4.17.1");
    },
    function (e, t, n) {
        var r = n(11);
        e.exports = function (e) {
            if (!r(e)) throw TypeError(e + " is not an object!");
            return e;
        };
    },
    function (e, t) {
        var n = (e.exports = { version: "2.5.5" });
        "number" == typeof __e && (__e = n);
    },
    function (e, t) {
        e.exports = function (e) {
            try {
                return !!e();
            } catch (e) {
                return !0;
            }
        };
    },
    function (e, t) {
        e.exports = function (e, t) {
            return { enumerable: !(1 & e), configurable: !(2 & e), writable: !(4 & e), value: t };
        };
    },
    function (e, t) {
        var n = 0,
            r = Math.random();
        e.exports = function (e) {
            return "Symbol(".concat(void 0 === e ? "" : e, ")_", (++n + r).toString(36));
        };
    },
    function (e, t, n) {
        e.exports = { default: n(80), __esModule: !0 };
    },
    function (e, t) {
        e.exports = function (e) {
            if (void 0 == e) throw TypeError("Can't call method on  " + e);
            return e;
        };
    },
    function (e, t) {
        e.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",");
    },
    function (e, t) {
        e.exports = {};
    },
    function (e, t) {
        e.exports = !0;
    },
    function (e, t, n) {
        var r = n(47),
            o = n(20);
        e.exports =
            Object.keys ||
            function (e) {
                return r(e, o);
            };
    },
    function (e, t) {
        t.f = {}.propertyIsEnumerable;
    },
    function (e, t, n) {
        var r = n(6).f,
            o = n(3),
            i = n(8)("toStringTag");
        e.exports = function (e, t, n) {
            e && !o((e = n ? e : e.prototype), i) && r(e, i, { configurable: !0, value: t });
        };
    },
    function (e, t, n) {
        var r = n(27)("keys"),
            o = n(17);
        e.exports = function (e) {
            return r[e] || (r[e] = o(e));
        };
    },
    function (e, t, n) {
        var r = n(1),
            o = r["__core-js_shared__"] || (r["__core-js_shared__"] = {});
        e.exports = function (e) {
            return o[e] || (o[e] = {});
        };
    },
    function (e, t) {
        var n = Math.ceil,
            r = Math.floor;
        e.exports = function (e) {
            return isNaN((e = +e)) ? 0 : (e > 0 ? r : n)(e);
        };
    },
    function (e, t, n) {
        var r = n(11);
        e.exports = function (e, t) {
            if (!r(e)) return e;
            var n, o;
            if (t && "function" == typeof (n = e.toString) && !r((o = n.call(e)))) return o;
            if ("function" == typeof (n = e.valueOf) && !r((o = n.call(e)))) return o;
            if (!t && "function" == typeof (n = e.toString) && !r((o = n.call(e)))) return o;
            throw TypeError("Can't convert object to primitive value");
        };
    },
    function (e, t, n) {
        var r = n(1),
            o = n(14),
            i = n(22),
            s = n(31),
            c = n(6).f;
        e.exports = function (e) {
            var t = o.Symbol || (o.Symbol = i ? {} : r.Symbol || {});
            "_" == e.charAt(0) || e in t || c(t, e, { value: s.f(e) });
        };
    },
    function (e, t, n) {
        t.f = n(8);
    },
    function (e, t) {
        e.exports = require("bluebird@3.4.6");
    },
    function (e, t) {
        e.exports = require("lodash@4.8.2");
    },
    function (e, t, n) {
        function r(e) {
            if (!e.container) return null;
            const t = e.container.replace(u, "\\$&"),
                n = e.jtn ? e.jtn.replace(u, "\\$&") : "";
            if (e.url_format === a) return new RegExp("^/api/run/" + t + "/(?:" + n + "/?)?");
            if (e.url_format === c) return new RegExp("^/" + t + "/(?:" + n + "/?)?");
            if (e.url_format === s) return new RegExp("^/(?:" + n + "/?)?");
            throw new Error("Unsupported webtask URL format.");
        }
        function o(e, t) {
            if (!e) return null;
            const n = e.indexOf("sandbox8") >= 0 ? "8" : "";
            return "https://" + t + "." + (e.split(".it.auth0.com")[0].split("-")[1] || "us") + n + ".webtask.io/";
        }
        const i = n(53),
            s = 3,
            c = 2,
            a = 1,
            u = /[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,
            l = function (e, t) {
                var n = i.parse(e).pathname || "";
                return (n = n.replace(t, "").replace(/^\/|\/$/g, "")), n.startsWith("/") || (n = "/" + n), n.endsWith("/") || (n += "/"), n;
            };
        (e.exports.getBasePath = function (e) {
            return l(e.originalUrl || "", e.path);
        }),
            (e.exports.getBaseUrl = function (e, t) {
                var n = t;
                const r = i.parse(e.originalUrl || "").pathname || "";
                return i.format({ protocol: n || "https", host: e.headers.host, pathname: r.replace(e.path, "").replace(/\/$/g, "") });
            }),
            (e.exports.getWebtaskUrl = function (e) {
                const t = r(e.x_wt),
                    n = e.url,
                    s = e.url.replace(t, "/"),
                    c = i.parse(s || "").pathname,
                    a = (e.x_wt && e.x_wt.ectx && e.x_wt.ectx.ISOLATED_DOMAIN) || !1,
                    u = i.parse(n || "").pathname || "";
                var l;
                if (a) {
                    l = i.format({ protocol: "https", host: e.headers.host, pathname: u.replace(c, "").replace(/\/$/g, "") });
                    const d = ".it.auth0.com/api/run/" + e.x_wt.container + "/",
                        f = o(l, e.x_wt.container);
                    l.indexOf(d) >= 0 && (l = l.replace("https://" + e.headers.host + "/api/run/" + e.x_wt.container + "/", f));
                } else l = u;
                return l;
            });
    },
    function (e, t, n) {
        "use strict";
        function r(e) {
            if (null === e || void 0 === e) throw new c.ArgumentError("Must provide an options object");
            if (null === e.domain || void 0 === e.domain) throw new c.ArgumentError("Must provide a valid domain");
            if ("string" != typeof e.domain || 0 === e.domain.length) throw new c.ArgumentError("The provided domain is invalid: " + e.domain);
            if (null === e.clientId || void 0 === e.clientId) throw new c.ArgumentError("Must provide a valid clientId");
            if ("string" != typeof e.clientId || 0 === e.clientId.length) throw new c.ArgumentError("The provided clientId is invalid: " + e.clientId);
            if (null === e.clientSecret || void 0 === e.clientSecret) throw new c.ArgumentError("Must provide a valid clientSecret");
            if ("string" != typeof e.clientSecret || 0 === e.clientSecret.length) throw new c.ArgumentError("The provided clientSecret is invalid: " + e.clientSecret);
            (this.options = e),
                (this.tokenCache = e.tokenCache || {
                    getToken: function () {
                        return o.resolve();
                    },
                    setToken: function () {
                        return o.resolve();
                    },
                });
        }
        var o = n(32),
            i = n(52),
            s = n(123),
            c = n(0);
        (r.prototype.getAccessToken = function () {
            var e = this;
            return new o(function (t, n) {
                i.post("https://" + e.options.domain + "/oauth/token")
                    .send({ audience: "https://" + e.options.domain + "/api/v2/", client_id: e.options.clientId, client_secret: e.options.clientSecret, grant_type: "client_credentials" })
                    .set("Accept", "application/json")
                    .end(function (r, o) {
                        if (r && 401 === r.status) return n(new c.ManagementApiError("unauthorized", "Invalid credentials for " + e.options.clientId, r.status));
                        if (r && o && o.body && o.body.error) return n(new c.ManagementApiError(o.body.error, o.body.error_description || o.body.error, r.status));
                        if (r) return n(r);
                        if (!o.ok || !o.body.access_token) return n(new c.ManagementApiError("unknown_error", "Unknown error from Management API or no access_token was provided: " + (o.text || o.status)));
                        var i = new Date();
                        return t({ token: o.body.access_token, expiresAt: i.setSeconds(i.getSeconds() + o.body.expires_in) });
                    });
            });
        }),
            (r.prototype.getAccessTokenCached = function () {
                var e = this;
                return e.tokenCache.getToken().then(function (t) {
                    if (t && t.token) {
                        var n = new Date().valueOf();
                        if (t.expiresAt - n > 1e4) return t;
                    }
                    return e.getAccessToken(e.options).then(function (t) {
                        return e.tokenCache.setToken(t).then(function () {
                            return t;
                        });
                    });
                });
            }),
            (r.prototype.getLogs = function (e) {
                var t = this;
                return new o(function (n, r) {
                    t.getAccessTokenCached(t.options, t.storage).then(function (o) {
                        var a = s.stringify(e);
                        i.get("https://" + t.options.domain + "/api/v2/logs?" + a)
                            .set("Authorization", "Bearer " + o.token)
                            .set("Content-Type", "application/json")
                            .end(function (e, o) {
                                if (e && 403 === e.status) {
                                    var i = function () {
                                        return r(new c.ManagementApiError(o.body.error, o.body.error_description || o.body.error, e.status));
                                    };
                                    t.tokenCache.setToken(null).then(i).catch(i);
                                }
                                return e && o && o.body && o.body.error
                                    ? r(new c.ManagementApiError(o.body.error, o.body.error_description || o.body.error, e.status))
                                    : e
                                    ? r(e)
                                    : o.ok
                                    ? n({ logs: o.body, limits: { limit: o.headers["x-ratelimit-limit"], remaining: o.headers["x-ratelimit-remaining"], reset: o.headers["x-ratelimit-reset"] } })
                                    : r(new c.ManagementApiError("unknown_error", "Unknown error from Management API: " + (o.text || o.status)));
                            });
                    });
                });
            }),
            (e.exports = r);
    },
    function (e, t, n) {
        "use strict";
        var r = { success: "success", error: "error", warning: "warning" },
            o = {
                s: { name: "Success Login", icon: "icon-budicon-448", severity: r.success, level: 1 },
                ssa: { name: "Success Silent Auth", icon: "icon-budicon-448", severity: r.success, level: 1 },
                fsa: { name: "Failed Silent Auth", icon: "icon-budicon-448", severity: r.error, level: 3 },
                seacft: { name: "Success Exchange", description: "Authorization Code for Access Token", icon: "icon-budicon-456", severity: r.success, level: 1 },
                feacft: { name: "Failed Exchange", description: "Authorization Code for Access Token", icon: "icon-budicon-456", severity: r.error, level: 3 },
                seccft: { name: "Success Exchange", description: "Client Credentials for Access Token", icon: "icon-budicon-456", severity: r.success, level: 1 },
                feccft: { name: "Failed Exchange", description: "Client Credentials for Access Token", icon: "icon-budicon-456", severity: r.error, level: 3 },
                sepft: { name: "Success Exchange", description: "Password for Access Token", icon: "icon-budicon-456", severity: r.success, level: 1 },
                fepft: { name: "Failed Exchange", description: "Password for Access Token", icon: "icon-budicon-456", severity: r.error, level: 3 },
                sertft: { name: "Success Exchange", description: "Refresh Token for Access Token", icon: "icon-budicon-456", severity: r.success, level: 1 },
                fertft: { name: "Failed Exchange", description: "Refresh Token for Access Token", icon: "icon-budicon-456", severity: r.error, level: 3 },
                seoobft: { name: "Success Exchange", description: "Password and OOB Challenge for Access Token", icon: "icon-budicon-456", severity: r.success, level: 1 },
                feoobft: { name: "Failed Exchange", description: "Password and OOB Challenge for Access Token", icon: "icon-budicon-456", severity: r.error, level: 3 },
                seotpft: { name: "Success Exchange", description: "Password and OTP Challenge for Access Token", icon: "icon-budicon-456", severity: r.success, level: 1 },
                feotpft: { name: "Failed Exchange", description: "Password and OTP Challenge for Access Token", icon: "icon-budicon-456", severity: r.error, level: 3 },
                sercft: { name: "Success Exchange", description: "Password and MFA Recovery code for Access Token", icon: "icon-budicon-456", severity: r.success, level: 1 },
                fercft: { name: "Failed Exchange", description: "Password and MFA Recovery code for Access Token", icon: "icon-budicon-456", severity: r.error, level: 3 },
                f: { name: "Failed Login", icon: "icon-budicon-448", severity: r.error, level: 3 },
                w: { name: "Warning", icon: "icon-budicon-354", severity: r.warning, level: 2 },
                depnote: { name: "Deprecation Notice", icon: "icon-budicon-354", severity: r.warning, level: 2 },
                du: { name: "Deleted User", icon: "icon-budicon-311", severity: r.error, level: 3 },
                fu: { name: "Failed Login (invalid email/username)", icon: "icon-budicon-311", severity: r.error, level: 3 },
                fp: { name: "Failed Login (wrong password)", icon: "icon-budicon-311", severity: r.error, level: 3 },
                fc: { name: "Failed by Connector", icon: "icon-budicon-313", severity: r.error, level: 3 },
                fco: { name: "Failed by CORS", icon: "icon-budicon-313", severity: r.error, level: 3 },
                con: { name: "Connector Online", icon: "icon-budicon-143", severity: r.success, level: 1 },
                coff: { name: "Connector Offline", icon: "icon-budicon-143", severity: r.error, level: 3 },
                fcpro: { name: "Failed Connector Provisioning", icon: "icon-budicon-143", severity: r.error, level: 4 },
                ss: { name: "Success Signup", icon: "icon-budicon-314", severity: r.success, level: 1 },
                fs: { name: "Failed Signup", icon: "icon-budicon-311", severity: r.error, level: 3 },
                cs: { name: "Code Sent", icon: "icon-budicon-243", severity: r.success, level: 1 },
                cls: { name: "Code/Link Sent", icon: "icon-budicon-781", severity: r.success, level: 1 },
                sv: { name: "Success Verification Email", icon: "icon-budicon-781", severity: r.success, level: 1 },
                fv: { name: "Failed Verification Email", icon: "icon-budicon-311", severity: r.error, level: 3 },
                scp: { name: "Success Change Password", icon: "icon-budicon-280", severity: r.success, level: 1 },
                fcp: { name: "Failed Change Password", icon: "icon-budicon-266", severity: r.error, level: 3 },
                scph: { name: "Success Post Change Password Hook", icon: "icon-budicon-280", severity: r.success, level: 1 },
                fcph: { name: "Failed Post Change Password Hook", icon: "icon-budicon-266", severity: r.error, level: 3 },
                sce: { name: "Success Change Email", icon: "icon-budicon-266", severity: r.success, level: 1 },
                fce: { name: "Failed Change Email", icon: "icon-budicon-266", severity: r.error, level: 3 },
                scu: { name: "Success Change Username", icon: "icon-budicon-266", severity: r.success, level: 1 },
                fcu: { name: "Failed Change Username", icon: "icon-budicon-266", severity: r.error, level: 3 },
                scpn: { name: "Success Change Phone Number", icon: "icon-budicon-266", severity: r.success, level: 1 },
                fcpn: { name: "Failed Change Phone Number", icon: "icon-budicon-266", severity: r.error, level: 3 },
                svr: { name: "Success Verification Email Request", icon: "icon-budicon-781", severity: r.success, level: 1 },
                fvr: { name: "Failed Verification Email Request", icon: "icon-budicon-311", severity: r.error, level: 3 },
                scpr: { name: "Success Change Password Request", icon: "icon-budicon-280", severity: r.success, level: 1 },
                fcpr: { name: "Failed Change Password Request", icon: "icon-budicon-311", severity: r.error, level: 3 },
                fn: { name: "Failed Sending Notification", icon: "icon-budicon-782", severity: r.error, level: 3 },
                sapi: { name: "API Operation", icon: "icon-budicon-546", severity: r.success, level: 1, category: "api" },
                fapi: { name: "Failed API Operation", icon: "icon-budicon-546", severity: r.error, level: 3, category: "api" },
                limit_wc: { name: "Blocked Account", icon: "icon-budicon-313", severity: r.error, level: 4 },
                limit_mu: { name: "Blocked IP Address", icon: "icon-budicon-313", severity: r.error, level: 4 },
                limit_ui: { name: "Too Many Calls to /userinfo", icon: "icon-budicon-313", severity: r.error, level: 4 },
                api_limit: { name: "Rate Limit On API", icon: "icon-budicon-313", severity: r.error, level: 4 },
                limit_delegation: { name: "Too Many Calls to /delegation", icon: "icon-budicon-313", severity: r.error, level: 4 },
                sdu: { name: "Successful User Deletion", icon: "icon-budicon-312", severity: r.success, level: 1 },
                fdu: { name: "Failed User Deletion", icon: "icon-budicon-311", severity: r.error, level: 3 },
                admin_update_launch: { name: "Auth0 Update Launched", icon: "icon-budicon-774", severity: r.success, level: 1 },
                sys_os_update_start: { name: "Auth0 OS Update Started", icon: "icon-budicon-661", severity: r.success, level: 1 },
                sys_os_update_end: { name: "Auth0 OS Update Ended", icon: "icon-budicon-661", severity: r.success, level: 1 },
                sys_update_start: { name: "Auth0 Update Started", icon: "icon-budicon-661", severity: r.success, level: 1 },
                sys_update_end: { name: "Auth0 Update Ended", icon: "icon-budicon-661", severity: r.success, level: 1 },
                slo: { name: "Success Logout", icon: "icon-budicon-449", severity: r.success, level: 1 },
                flo: { name: "Failed Logout", icon: "icon-budicon-449", severity: r.error, level: 3 },
                sd: { name: "Success Delegation", icon: "icon-budicon-456", severity: r.success, level: 1 },
                fd: { name: "Failed Delegation", icon: "icon-budicon-456", severity: r.error, level: 3 },
                gd_unenroll: { name: "Unenroll device account", icon: "icon-budicon-298", severity: r.success, level: 1 },
                gd_update_device_account: { name: "Update device account", icon: "icon-budicon-257", severity: r.success, level: 1 },
                gd_module_switch: { name: "Module switch", icon: "icon-budicon-329", severity: r.success, level: 1 },
                gd_tenant_update: { name: "Guardian tenant update", icon: "icon-budicon-170", severity: r.success, level: 1 },
                gd_start_auth: { name: "Second factor started", icon: "icon-budicon-285", severity: r.success, level: 1 },
                gd_start_enroll: { name: "Enroll started", icon: "icon-budicon-299", severity: r.success, level: 1 },
                gd_start_enroll_failed: { name: "MFA Enrollment start failed", icon: "icon-budicon-299", severity: r.error, level: 3 },
                gd_user_delete: { name: "User delete", icon: "icon-budicon-298", severity: r.success, level: 1 },
                gd_auth_succeed: { name: "OTP Auth suceed", icon: "icon-budicon-mfa-login-succeed", severity: r.success, level: 1 },
                gd_auth_failed: { name: "OTP Auth failed", icon: "icon-budicon-mfa-login-failed", severity: r.error, level: 3 },
                gd_send_pn: { name: "Push notification sent", icon: "icon-budicon-mfa-send-pn", severity: r.success, level: 1 },
                gd_send_pn_failure: { name: "Error sending MFA Push Notification", icon: "icon-budicon-mfa-send-pn", severity: r.error, level: 3 },
                gd_auth_rejected: { name: "OTP Auth rejected", icon: "icon-budicon-mfa-login-failed", severity: r.error, level: 3 },
                gd_recovery_succeed: { name: "Recovery succeed", icon: "icon-budicon-mfa-recovery-succeed", severity: r.success, level: 1 },
                gd_recovery_failed: { name: "Recovery failed", icon: "icon-budicon-mfa-recovery-failed", severity: r.error, level: 3 },
                gd_send_sms: { name: "SMS Sent", icon: "icon-budicon-799", severity: r.success, level: 1 },
                gd_send_sms_failure: { name: "Error sending MFA SMS", icon: "icon-budicon-799", severity: r.error, level: 3 },
                gd_otp_rate_limit_exceed: { name: "Too many failures", icon: "icon-budicon-435", severity: r.warning, level: 2 },
                gd_recovery_rate_limit_exceed: { name: "Too many failures", icon: "icon-budicon-435", severity: r.warning, level: 2 },
                gd_enrollment_complete: { name: "Guardian enrollment complete", icon: "icon-budicon-299", severity: r.success, level: 1 },
                fui: { name: "Users import", icon: "icon-budicon-299", severity: r.warning, level: 2 },
                sui: { name: "Users import", icon: "icon-budicon-299", severity: r.success, level: 1 },
                pwd_leak: { name: "Breached password", icon: "icon-budicon-313", severity: r.error, level: 3 },
                fcoa: { name: "Failed cross origin authentication", icon: "icon-budicon-448", severity: r.error, level: 3 },
                scoa: { name: "Success cross origin authentication", icon: "icon-budicon-448", severity: r.success, level: 1 },
                ublkdu: { name: "Account unblocked", icon: "icon-budicon-313", severity: r.success, level: 1 },
                sens: { name: "Success Exchange", icon: "icon-budicon-448", severity: r.success, level: 1 },
                fens: { name: "Failed Exchange", icon: "icon-budicon-448", severity: r.error, level: 3 },
            };
        (e.exports = o),
            (e.exports.get = function (e) {
                return (o[e] && o[e].name) || "Unknown Log Type: " + e;
            });
    },
    function (e, t, n) {
        "use strict";
        function r(e) {
            if (null === e || void 0 === e) throw new s.ArgumentError("Must provide an options object");
            i.call(this, { objectMode: !0 }),
                (this.client = new c(e)),
                (this.options = e),
                (this.remaining = 50),
                (this.lastBatch = 0),
                (this.retries = 0),
                (this.previousCheckpoint = e.checkpointId || null),
                (this.lastCheckpoint = e.checkpointId || null),
                (this.status = { startCheckpoint: e.checkpointId || null, start: new Date(), end: null, logsProcessed: 0 });
        }
        var o = n(126),
            i = n(125).Readable,
            s = n(0),
            c = n(35);
        o.inherits(r, i),
            (r.prototype.getQuery = function (e) {
                return e && e.length ? "type:" + e.join(" OR type:") : "";
            }),
            (r.prototype.done = function () {
                (this.status.end = new Date()), this.push(null);
            }),
            (r.prototype.next = function (e) {
                var t = this,
                    n = this.options.logger,
                    r = e;
                if (t.remaining < 1) (t.status.warning = "Auth0 Management API rate limit reached."), t.done();
                else {
                    var o = t.lastCheckpoint ? { take: r, from: t.lastCheckpoint } : { per_page: r, page: 0 };
                    if (((o.q = t.getQuery(t.options.types)), (o.sort = "date:1"), n)) {
                        var i = o.from ? "checkpoint " + o.from : "page " + o.page;
                        n.debug("Requesting logs from " + i);
                    }
                    var s = process.hrtime();
                    !(function r() {
                        t.client
                            .getLogs(o)
                            .then(function (r) {
                                var o = process.hrtime(s),
                                    i = 1e3 * o[0] + o[1] / 1e6;
                                n && n.debug("Retrieved logs in " + i + "ms.");
                                var c = r.logs;
                                if (((t.remaining = r.limits.remaining), c && c.length)) {
                                    var a = c;
                                    t.options.types &&
                                        t.options.types.length &&
                                        (a = c
                                            .filter(function (e) {
                                                return t.options.types.indexOf(e.type) >= 0;
                                            })
                                            .slice(0, e || 100)),
                                        a.length
                                            ? ((t.lastCheckpoint = a[a.length - 1]._id), (t.lastBatch += a.length), t.push({ logs: a, limits: r.limits }))
                                            : ((t.lastCheckpoint = c[c.length - 1]._id), (t.lastBatch += 0), t.push({ logs: [], limits: r.limits }));
                                } else (t.status.end = new Date()), t.push(null);
                                return c;
                            })
                            .catch(function (e) {
                                var n = t.options.start,
                                    o = t.options.maxRunTimeSeconds,
                                    i = new Date().getTime(),
                                    s = n + 1e3 * o >= i;
                                return t.options.maxRetries > t.retries && s ? (t.retries++, r()) : t.emit("error", e);
                            });
                    })();
                }
            }),
            (r.prototype.batchSaved = function () {
                (this.status.logsProcessed += this.lastBatch), (this.previousCheckpoint = this.lastCheckpoint), (this.lastBatch = 0);
            }),
            (r.prototype._read = function () {}),
            (e.exports = r);
    },
    function (e, t, n) {
        "use strict";
        var r = n(112);
        e.exports = function (e, t, n) {
            return function (o, i, s) {
                var c = r(s);
                return !0 === e || ("function" == typeof e && e(o, i, c)) ? t(o, i, c) : n ? n(o, i, c) : c();
            };
        };
    },
    function (e, t) {
        var n = {}.toString;
        e.exports = function (e) {
            return n.call(e).slice(8, -1);
        };
    },
    function (e, t, n) {
        var r = n(11),
            o = n(1).document,
            i = r(o) && r(o.createElement);
        e.exports = function (e) {
            return i ? o.createElement(e) : {};
        };
    },
    function (e, t, n) {
        var r = n(1),
            o = n(14),
            i = n(86),
            s = n(5),
            c = n(3),
            a = function (e, t, n) {
                var u,
                    l,
                    d,
                    f = e & a.F,
                    p = e & a.G,
                    h = e & a.S,
                    v = e & a.P,
                    g = e & a.B,
                    m = e & a.W,
                    y = p ? o : o[t] || (o[t] = {}),
                    x = y.prototype,
                    b = p ? r : h ? r[t] : (r[t] || {}).prototype;
                p && (n = t);
                for (u in n)
                    ((l = !f && b && void 0 !== b[u]) && c(y, u)) ||
                        ((d = l ? b[u] : n[u]),
                        (y[u] =
                            p && "function" != typeof b[u]
                                ? n[u]
                                : g && l
                                ? i(d, r)
                                : m && b[u] == d
                                ? (function (e) {
                                      var t = function (t, n, r) {
                                          if (this instanceof e) {
                                              switch (arguments.length) {
                                                  case 0:
                                                      return new e();
                                                  case 1:
                                                      return new e(t);
                                                  case 2:
                                                      return new e(t, n);
                                              }
                                              return new e(t, n, r);
                                          }
                                          return e.apply(this, arguments);
                                      };
                                      return (t.prototype = e.prototype), t;
                                  })(d)
                                : v && "function" == typeof d
                                ? i(Function.call, d)
                                : d),
                        v && (((y.virtual || (y.virtual = {}))[u] = d), e & a.R && x && !x[u] && s(x, u, d)));
            };
        (a.F = 1), (a.G = 2), (a.S = 4), (a.P = 8), (a.B = 16), (a.W = 32), (a.U = 64), (a.R = 128), (e.exports = a);
    },
    function (e, t, n) {
        e.exports =
            !n(4) &&
            !n(15)(function () {
                return (
                    7 !=
                    Object.defineProperty(n(40)("div"), "a", {
                        get: function () {
                            return 7;
                        },
                    }).a
                );
            });
    },
    function (e, t, n) {
        "use strict";
        var r = n(22),
            o = n(41),
            i = n(48),
            s = n(5),
            c = n(21),
            a = n(91),
            u = n(25),
            l = n(97),
            d = n(8)("iterator"),
            f = !([].keys && "next" in [].keys()),
            p = function () {
                return this;
            };
        e.exports = function (e, t, n, h, v, g, m) {
            a(n, t, h);
            var y,
                x,
                b,
                w = function (e) {
                    if (!f && e in E) return E[e];
                    switch (e) {
                        case "keys":
                        case "values":
                            return function () {
                                return new n(this, e);
                            };
                    }
                    return function () {
                        return new n(this, e);
                    };
                },
                _ = t + " Iterator",
                S = "values" == v,
                k = !1,
                E = e.prototype,
                A = E[d] || E["@@iterator"] || (v && E[v]),
                T = A || w(v),
                C = v ? (S ? w("entries") : T) : void 0,
                O = "Array" == t ? E.entries || A : A;
            if (
                (O && (b = l(O.call(new e()))) !== Object.prototype && b.next && (u(b, _, !0), r || "function" == typeof b[d] || s(b, d, p)),
                S &&
                    A &&
                    "values" !== A.name &&
                    ((k = !0),
                    (T = function () {
                        return A.call(this);
                    })),
                (r && !m) || (!f && !k && E[d]) || s(E, d, T),
                (c[t] = T),
                (c[_] = p),
                v)
            )
                if (((y = { values: S ? T : w("values"), keys: g ? T : w("keys"), entries: C }), m)) for (x in y) x in E || i(E, x, y[x]);
                else o(o.P + o.F * (f || k), t, y);
            return y;
        };
    },
    function (e, t, n) {
        var r = n(13),
            o = n(94),
            i = n(20),
            s = n(26)("IE_PROTO"),
            c = function () {},
            a = function () {
                var e,
                    t = n(40)("iframe"),
                    r = i.length;
                for (t.style.display = "none", n(88).appendChild(t), t.src = "javascript:", e = t.contentWindow.document, e.open(), e.write("<script>document.F=Object</script>"), e.close(), a = e.F; r--; ) delete a.prototype[i[r]];
                return a();
            };
        e.exports =
            Object.create ||
            function (e, t) {
                var n;
                return null !== e ? ((c.prototype = r(e)), (n = new c()), (c.prototype = null), (n[s] = e)) : (n = a()), void 0 === t ? n : o(n, t);
            };
    },
    function (e, t, n) {
        var r = n(47),
            o = n(20).concat("length", "prototype");
        t.f =
            Object.getOwnPropertyNames ||
            function (e) {
                return r(e, o);
            };
    },
    function (e, t) {
        t.f = Object.getOwnPropertySymbols;
    },
    function (e, t, n) {
        var r = n(3),
            o = n(7),
            i = n(85)(!1),
            s = n(26)("IE_PROTO");
        e.exports = function (e, t) {
            var n,
                c = o(e),
                a = 0,
                u = [];
            for (n in c) n != s && r(c, n) && u.push(n);
            for (; t.length > a; ) r(c, (n = t[a++])) && (~i(u, n) || u.push(n));
            return u;
        };
    },
    function (e, t, n) {
        e.exports = n(5);
    },
    function (e, t, n) {
        "use strict";
        function r(e) {
            this.message = e;
        }
        var o = n(111);
        (r.prototype = new Error()),
            (r.prototype.name = "InvalidTokenError"),
            (e.exports = function (e, t) {
                if ("string" != typeof e) throw new r("Invalid token specified");
                t = t || {};
                var n = !0 === t.header ? 0 : 1;
                try {
                    return JSON.parse(o(e.split(".")[n]));
                } catch (e) {
                    throw new r("Invalid token specified: " + e.message);
                }
            }),
            (e.exports.InvalidTokenError = r);
    },
    function (e, t) {
        e.exports = require("express-jwt@3.1.0");
    },
    function (e, t) {
        e.exports = require("path");
    },
    function (e, t) {
        e.exports = require("superagent@1.2.0");
    },
    function (e, t) {
        e.exports = require("url");
    },
    function (e, t, n) {
        "use strict";
        (function (t) {
            var r = (n(53), n(51)),
                o = n(122),
                i = n(12),
                s = n(114),
                c = n(0),
                a = n(9),
                u = n(74),
                l = n(75),
                d = n(72),
                f = n(10),
                p = n(2),
                h = n(70);
            e.exports = function (e, n) {
                p.setProvider(e);
                var v = n ? new c.WebtaskStorageContext(n, { force: 1 }) : new c.FileStorageContext(r.join(t, "./data.json"), { mergeWrites: !0 }),
                    g = new i();
                g.use(o(":method :url :status :response-time ms - :res[content-length]", { stream: f.stream }));
                var m = function (e) {
                    return function (t, n, r) {
                        return t.webtaskContext && t.webtaskContext.body ? ((t.body = t.webtaskContext.body), r()) : e(t, n, r);
                    };
                };
                return (
                    g.use(m(s.json())),
                    g.use(m(s.urlencoded({ extended: !1 }))),
                    g.use(
                        a.routes.dashboardAdmins({
                            secret: p("EXTENSION_SECRET"),
                            audience: "urn:logs-to-provider",
                            rta: p("AUTH0_RTA").replace("https://", ""),
                            domain: p("AUTH0_DOMAIN"),
                            baseUrl: p("PUBLIC_WT_URL") || p("WT_URL"),
                            clientName: "Logs to Any Provider",
                            urlPrefix: "",
                            sessionStorageKey: "logs-to-provider:apiToken",
                        })
                    ),
                    g.use("/meta", l()),
                    g.use("/.extensions", d()),
                    g.use("/app", i.static(r.join(t, "../dist"))),
                    g.use(h(v)),
                    g.use("/", u(v)),
                    g.use(a.middlewares.errorHandler(f.error.bind(f))),
                    g
                );
            };
        }.call(t, "/"));
    },
    function (e, t, n) {
        const r = n(49),
            o = n(50),
            i = n(0),
            s = n(38);
        (e.exports = function (e) {
            if (!e || "object" != typeof e) throw new i.ArgumentError("Must provide the options");
            if (null === e.secret || void 0 === e.secret) throw new i.ArgumentError("Must provide a valid secret");
            if ("string" != typeof e.secret || 0 === e.secret.length) throw new i.ArgumentError("The provided secret is invalid: " + e.secret);
            if (null === e.audience || void 0 === e.audience) throw new i.ArgumentError("Must provide a valid secret");
            if ("string" != typeof e.audience || 0 === e.audience.length) throw new i.ArgumentError("The provided audience is invalid: " + e.audience);
            if (null === e.baseUrl || void 0 === e.baseUrl) throw new i.ArgumentError("Must provide a valid base URL");
            if ("string" != typeof e.baseUrl || 0 === e.baseUrl.length) throw new i.ArgumentError("The provided base URL is invalid: " + e.baseUrl);
            const t = o({ audience: e.audience, issuer: e.baseUrl, secret: e.secret, algorithms: ["HS256"], credentialsRequired: e.credentialsRequired || !0 });
            return function (n, r, o) {
                t(n, r, function (t) {
                    return t ? o(t) : e.onLoginSuccess ? e.onLoginSuccess(n, r, o) : o();
                });
            };
        }),
            (e.exports.optional = function (t) {
                const n = e.exports(t);
                return s(function (e) {
                    if (e && e.headers && e.headers.authorization && 0 === e.headers.authorization.indexOf("Bearer "))
                        try {
                            const n = r(e.headers.authorization.split(" ")[1]);
                            return n && n.iss === t.baseUrl;
                        } catch (e) {
                            return !1;
                        }
                    return !1;
                }, n);
            });
    },
    function (e, t, n) {
        const r = n(49),
            o = n(50),
            i = n(120),
            s = n(0),
            c = n(38),
            a = n(0).UnauthorizedError;
        (e.exports = function (e) {
            if (!e || "object" != typeof e) throw new s.ArgumentError("Must provide the options");
            if (null === e.domain || void 0 === e.domain) throw new s.ArgumentError("Must provide a valid domain");
            if ("string" != typeof e.domain || 0 === e.domain.length) throw new s.ArgumentError("The provided domain is invalid: " + e.domain);
            if (null === e.audience || void 0 === e.audience) throw new s.ArgumentError("Must provide a valid audience");
            if ("string" != typeof e.audience || 0 === e.audience.length) throw new s.ArgumentError("The provided audience is invalid: " + e.audience);
            const t = o({
                secret: i.expressJwtSecret({
                    cache: !0,
                    rateLimit: !0,
                    jwksRequestsPerMinute: 5,
                    jwksUri: "https://" + e.domain + "/.well-known/jwks.json",
                    handleSigningKeyError: function (e, t) {
                        return t(e instanceof i.SigningKeyNotFoundError ? new a("A token was provided with an invalid kid") : e);
                    },
                }),
                audience: e.audience,
                issuer: "https://" + e.domain + "/",
                algorithms: ["RS256"],
                credentialsRequired: (e && e.credentialsRequired) || !0,
            });
            return function (n, r, o) {
                t(n, r, function (t) {
                    return t ? o(t) : e.onLoginSuccess ? e.onLoginSuccess(n, r, o) : o();
                });
            };
        }),
            (e.exports.optional = function (t) {
                const n = e.exports(t);
                return c(function (e) {
                    if (e && e.headers && e.headers.authorization && 0 === e.headers.authorization.indexOf("Bearer "))
                        try {
                            const n = r(e.headers.authorization.split(" ")[1]);
                            return n && n.iss === "https://" + t.domain + "/";
                        } catch (e) {
                            return !1;
                        }
                    return !1;
                }, n);
            });
    },
    function (e, t, n) {
        e.exports = function (e) {
            return function (t, n, r, o) {
                return e && e(t), t && t.status ? (r.status(t.status), r.json({ error: t.code || t.name, message: t.message || t.name })) : (r.status(t.status || 500), r.json({ error: "InternalServerError", message: t.message || t.name }));
            };
        };
    },
    function (e, t, n) {
        (e.exports.authenticateAdmins = n(55)),
            (e.exports.authenticateUsers = n(56)),
            (e.exports.requireAuthentication = n(60)),
            (e.exports.errorHandler = n(57)),
            (e.exports.managementApiClient = n(59)),
            (e.exports.validateHookToken = n(61)),
            (e.exports.webtaskConfig = n(62));
    },
    function (e, t, n) {
        const r = n(0);
        e.exports = function (e) {
            return function (t, n, o) {
                const i = t,
                    s = t.user && t.user.access_token && t.user.access_token.length,
                    c = s ? { domain: e.domain, accessToken: t.user.access_token } : e;
                r.managementApi
                    .getClient(c)
                    .then(function (e) {
                        return (i.auth0 = e), o(), null;
                    })
                    .catch(function (e) {
                        o(e);
                    });
            };
        };
    },
    function (e, t, n) {
        const r = n(0).UnauthorizedError;
        e.exports = function (e, t, n) {
            return e.user ? n() : n(new r("Authentication required for this endpoint."));
        };
    },
    function (e, t, n) {
        const r = n(0);
        e.exports = function (e, t, n) {
            if (null === e || void 0 === e) throw new r.ArgumentError("Must provide the domain");
            if ("string" != typeof e || 0 === e.length) throw new r.ArgumentError("The provided domain is invalid: " + e);
            if (null === t || void 0 === t) throw new r.ArgumentError("Must provide the webtaskUrl");
            if ("string" != typeof t || 0 === t.length) throw new r.ArgumentError("The provided webtaskUrl is invalid: " + t);
            if (null === n || void 0 === n) throw new r.ArgumentError("Must provide the extensionSecret");
            if ("string" != typeof n || 0 === n.length) throw new r.ArgumentError("The provided extensionSecret is invalid: " + n);
            return function (o) {
                if (null === o || void 0 === o) throw new r.ArgumentError("Must provide the hookPath");
                if ("string" != typeof o || 0 === o.length) throw new r.ArgumentError("The provided hookPath is invalid: " + o);
                return function (i, s, c) {
                    if (i.headers.authorization && "Bearer" === i.headers.authorization.split(" ")[0]) {
                        const a = i.headers.authorization.split(" ")[1];
                        try {
                            if (r.validateHookToken(e, t, o, n, a)) return c();
                        } catch (e) {
                            return c(e);
                        }
                    }
                    return c(new r.HookTokenError("Hook token missing for the call to: " + o));
                };
            };
        };
    },
    function (e, t, n) {
        const r = n(0);
        e.exports = function (e) {
            return function (t, n, o) {
                return t.webtaskContext && e.setProvider(r.configProvider.fromWebtaskContext(t.webtaskContext)), o();
            };
        };
    },
    function (e, t, n) {
        const r = n(12),
            o = n(116),
            i = n(115),
            s = n(119),
            c = n(0),
            a = n(34);
        e.exports = function (e) {
            if (!e || "object" != typeof e) throw new c.ArgumentError("Must provide the options");
            if (null === e.secret || void 0 === e.secret) throw new c.ArgumentError("Must provide a valid secret");
            if ("string" != typeof e.secret || 0 === e.secret.length) throw new c.ArgumentError("The provided secret is invalid: " + e.secret);
            if (null === e.audience || void 0 === e.audience) throw new c.ArgumentError("Must provide a valid audience");
            if ("string" != typeof e.audience || 0 === e.audience.length) throw new c.ArgumentError("The provided audience is invalid: " + e.audience);
            if (null === e.rta || void 0 === e.rta) throw new c.ArgumentError("Must provide a valid rta");
            if ("string" != typeof e.rta || 0 === e.rta.length) throw new c.ArgumentError("The provided rta is invalid: " + e.rta);
            if (null === e.domain || void 0 === e.domain) throw new c.ArgumentError("Must provide a valid domain");
            if ("string" != typeof e.domain || 0 === e.domain.length) throw new c.ArgumentError("The provided domain is invalid: " + e.domain);
            if (null === e.baseUrl || void 0 === e.baseUrl) throw new c.ArgumentError("Must provide a valid base URL");
            if ("string" != typeof e.baseUrl || 0 === e.baseUrl.length) throw new c.ArgumentError("The provided base URL is invalid: " + e.baseUrl);
            if (null === e.clientName || void 0 === e.clientName) throw new c.ArgumentError("Must provide a valid client name");
            if ("string" != typeof e.clientName || 0 === e.clientName.length) throw new c.ArgumentError("The provided client name is invalid: " + e.clientName);
            if (void 0 !== e.storageType && "sessionStorage" !== e.storageType && "localStorage" !== e.storageType)
                throw new c.ArgumentError('The storageType must be either "sessionStorage" or "localStorage". Incorrect storageType: ' + e.storageType);
            const t = e.stateKey || "state",
                n = e.nonceKey || "nonce",
                u = e.urlPrefix || "",
                l = e.storageType || "sessionStorage",
                d = e.storageKey || e.sessionStorageKey || "apiToken",
                f = new c.SessionManager(e.rta, e.domain, e.baseUrl),
                p = r.Router();
            return (
                p.get(u + "/login", function (r, i) {
                    const s = a.getBasePath(r),
                        c = o.randomBytes(16).toString("hex"),
                        l = o.randomBytes(16).toString("hex"),
                        d = { httpOnly: !0, path: s };
                    i.cookie(t, c, Object.assign({}, d, { sameSite: "None", secure: !0 })), i.cookie(n, l, Object.assign({}, d, { sameSite: "None", secure: !0 })), i.cookie(t + "_compat", c, d), i.cookie(n + "_compat", l, d);
                    const p = f.createAuthorizeUrl({ redirectUri: a.getBaseUrl(r) + u + "/login/callback", scopes: e.scopes, expiration: e.expiration, nonce: l, state: c });
                    i.redirect(p);
                }),
                p.post(u + "/login/callback", i(), function (r, o, i) {
                    var u;
                    try {
                        u = s.decode(r.body.id_token);
                    } catch (e) {
                        u = null;
                    }
                    if (!u) return i(new c.ValidationError("Login failed. Invalid token."));
                    if ((r.cookies && r.cookies[n] && r.cookies[n] !== u.nonce) || (r.cookies && r.cookies[n + "_compat"] && r.cookies[n + "_compat"] !== u.nonce)) return i(new c.ValidationError("Login failed. Nonce mismatch."));
                    if ((r.cookies && r.cookies[t] && r.cookies[t] !== r.body.state) || (r.cookies && r.cookies[t + "_compat"] && r.cookies[t + "_compat"] !== r.body.state)) return i(new c.ValidationError("Login failed. State mismatch."));
                    const p = a.getBasePath(r);
                    return f
                        .create(r.body.id_token, r.body.access_token, { secret: e.secret, issuer: e.baseUrl, audience: e.audience, noAccessToken: e.noAccessToken })
                        .then(function (e) {
                            o.clearCookie(t, { path: p }),
                                o.clearCookie(n, { path: p }),
                                o.clearCookie(t + "_compat", { path: p }),
                                o.clearCookie(n + "_compat", { path: p }),
                                o.header("Content-Type", "text/html"),
                                o.status(200).send('<html><head><script type="text/javascript">' + l + '.setItem("' + d + '", "' + e + '");window.location.href = "' + a.getBaseUrl(r) + '";</script></head></html>');
                        })
                        .catch(function (e) {
                            i(e);
                        });
                }),
                p.get(u + "/logout", function (r, o) {
                    const i = a.getBasePath(r),
                        s = encodeURIComponent(a.getBaseUrl(r));
                    o.clearCookie(t, { path: i }),
                        o.clearCookie(n, { path: i }),
                        o.clearCookie(t + "_compat", { path: i }),
                        o.clearCookie(n + "_compat", { path: i }),
                        o.header("Content-Type", "text/html"),
                        o
                            .status(200)
                            .send('<html><head><script type="text/javascript">' + l + '.removeItem("' + d + '");window.location.href = "https://' + e.rta + "/v2/logout/?returnTo=" + s + "&client_id=" + s + '";</script></head></html>');
                }),
                p.get("/.well-known/oauth2-client-configuration", function (t, n) {
                    n.header("Content-Type", "application/json"), n.status(200).send({ redirect_uris: [a.getBaseUrl(t) + u + "/login/callback"], client_name: e.clientName, post_logout_redirect_uris: [a.getBaseUrl(t)] });
                }),
                p
            );
        };
    },
    function (e, t, n) {
        e.exports.dashboardAdmins = n(63);
    },
    function (e, t, n) {
        const r = n(0),
            o = n(127);
        e.exports.createServer = function (e) {
            const t = r.createServer(e);
            var n = null;
            return o.fromExpress(function (e, r) {
                return n || (n = t(e.webtaskContext)), n(e, r);
            });
        };
    },
    function (e, t, n) {
        "use strict";
        var r = n(68);
        (e.exports.LogsProcessor = n(67)), (e.exports.LogsApiClient = n(35)), (e.exports.LogsApiStream = n(37)), (e.exports.logTypes = n(36)), (e.exports.reporters = { SlackReporter: r });
    },
    function (e, t, n) {
        "use strict";
        function r(e, t) {
            if (null === t || void 0 === t) throw new s.ArgumentError("Must provide an options object");
            (this.start = new Date().getTime()), (this.storage = new u(e)), (this.options = o.assign({}, { batchSize: 100, maxRetries: 5, maxRunTimeSeconds: 22 }, t));
        }
        var o = n(33),
            i = n(32),
            s = n(0),
            c = n(36),
            a = n(37),
            u = n(69);
        (r.prototype.hasTimeLeft = function (e, t) {
            var n = new Date().getTime(),
                r = (n - e) / t,
                o = this.options.maxRunTimeSeconds,
                i = e + 1e3 * o - n;
            return this.options.logger && this.options.logger.debug(i / 1e3 + " seconds run time left, average response time is " + r / 1e3 + " seconds."), i >= r;
        }),
            (r.prototype.getLogFilter = function (e) {
                var t = e.logTypes || [];
                if (e.logLevel) {
                    var n = o.map(c, function (e, t) {
                        var n = e;
                        return (n.type = t), n;
                    });
                    t = t.concat(
                        o.map(
                            o.filter(n, function (t) {
                                return t.level >= e.logLevel;
                            }),
                            "type"
                        )
                    );
                }
                return o.uniq(t);
            }),
            (r.prototype.getReport = function (e, t) {
                var n = new Date(e).getTime(),
                    r = t ? new Date(t).getTime() : new Date().getTime();
                return this.storage
                    .read()
                    .then(function (e) {
                        return o.filter(e.logs, function (e) {
                            var t = new Date(e.start).getTime(),
                                o = new Date(e.end).getTime();
                            return t >= n && o <= r;
                        });
                    })
                    .then(function (e) {
                        var t = { type: "report", processed: 0, warnings: 0, errors: 0, checkpoint: "" };
                        return (
                            o.each(e, function (e) {
                                (t.processed += e.logsProcessed), (t.checkpoint = e.checkpoint), e.error && (t.errors += 1), e.warning && (t.warnings += 1);
                            }),
                            t
                        );
                    });
            }),
            (r.prototype.createStream = function (e) {
                var t = this;
                return this.storage.getCheckpoint(e.startFrom).then(function (n) {
                    return (
                        e.logger && e.logger.debug("Starting logs processor from checkpoint:", n),
                        new a({
                            checkpointId: n,
                            types: t.getLogFilter(e),
                            start: t.start,
                            maxRetries: e.maxRetries,
                            maxRunTimeSeconds: e.maxRunTimeSeconds,
                            domain: e.domain,
                            clientId: e.clientId,
                            clientSecret: e.clientSecret,
                            tokenCache: t.storage,
                            logger: e.logger,
                        })
                    );
                });
            }),
            (r.prototype.run = function (e) {
                var t = this,
                    n = i.promisify(e);
                return new i(function (e, r) {
                    var o = t.start,
                        s = 0,
                        c = 0,
                        a = 0,
                        u = [],
                        l = t.storage,
                        d = t.options,
                        f = d.batchSize,
                        p = d.maxRetries,
                        h = function (t, n, o) {
                            d.logger && d.logger.debug("Processor failed:", t),
                                (n.error = t),
                                l
                                    .done(n, o)
                                    .then(function () {
                                        return e({ status: n, checkpoint: o });
                                    })
                                    .catch(r);
                        },
                        v = function (t, n) {
                            if ((d.logger && d.logger.debug("Processor run complete. Logs processed:", t.logsProcessed), n !== t.startCheckpoint)) {
                                return (
                                    new Date().getTime() - a >= 6048e5 && (t.warning = "Logs are outdated more than for week. Last processed log has date is " + new Date(a)),
                                    l
                                        .done(t, n)
                                        .then(function () {
                                            return e({ status: t, checkpoint: n });
                                        })
                                        .catch(r)
                                );
                            }
                            return e({ status: t, checkpoint: n });
                        },
                        g = function () {
                            var e = f;
                            return (e -= u.length), e > 1e3 && (e = 1e3), e;
                        },
                        m = function (e, r) {
                            if (!t.hasTimeLeft(o, s)) return i.reject({ err: e, status: r.status, checkpoint: r.previousCheckpoint, unrecoverable: !0 });
                            if (c < p) return (c += 1), n(u);
                            var a = [e, "Skipping logs from " + r.previousCheckpoint + " to " + r.lastCheckpoint + " after " + p + " retries."];
                            return d.logger && d.logger.error((a[0] && a[0].message) || a[0], a[1]), i.reject({ err: a, status: r.status, checkpoint: r.lastCheckpoint, unrecoverable: !0 });
                        };
                    t.createStream(d)
                        .then(function (e) {
                            return new i(function (r, c) {
                                var l = g();
                                d.logger && d.logger.debug("Loading next batch of logs. Next limit:", l),
                                    e.next(l),
                                    e.on("data", function (r) {
                                        var i = r.logs;
                                        if (((u = u.concat(i)), s++, i && i.length && (a = new Date(i[i.length - 1].date).getTime()), u.length < f && t.hasTimeLeft(o, s))) return e.next(g());
                                        var l = function n(r) {
                                            return r
                                                ? r.unrecoverable
                                                    ? c(r)
                                                    : m(r.err || r, e)
                                                          .then(function () {
                                                              return n();
                                                          })
                                                          .catch(function (e) {
                                                              return n(e);
                                                          })
                                                : ((u = []), t.hasTimeLeft(o, s) ? (e.batchSaved(), e.next(g())) : (d.logger && d.logger.debug("No time left for additional requests"), e.done()));
                                        };
                                        return n(u)
                                            .then(function () {
                                                return l();
                                            })
                                            .catch(function (e) {
                                                return l(e);
                                            });
                                    });
                                var p = function () {
                                    var t = function t(n) {
                                        return n
                                            ? n.unrecoverable
                                                ? c(n)
                                                : m(n.err || n, e)
                                                      .then(function () {
                                                          return t();
                                                      })
                                                      .catch(function (e) {
                                                          return t(e);
                                                      })
                                            : (e.batchSaved(), r({ status: e.status, checkpoint: e.lastCheckpoint }));
                                    };
                                    return n(u)
                                        .then(function () {
                                            return t();
                                        })
                                        .catch(function (e) {
                                            return t(e);
                                        });
                                };
                                new i(function (t) {
                                    e.on("end", t);
                                }).then(p),
                                    e.on("error", function (t) {
                                        return c({ err: t, status: e.status, checkpoint: e.previousCheckpoint });
                                    });
                            });
                        })
                        .then(function (e) {
                            return v(e.status, e.checkpoint);
                        })
                        .catch(function (e) {
                            return h(e.err, e.status, e.checkpoint);
                        });
                });
            }),
            (e.exports = r);
    },
    function (e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : { default: e };
        }
        function o(e) {
            this.options = e || {};
        }
        var i = n(18),
            s = r(i),
            c = n(79),
            a = r(c),
            u = n(32),
            l = n(52);
        (o.prototype.send = function (e, t) {
            if (!e || "object" !== (void 0 === e ? "undefined" : (0, a.default)(e))) throw new Error("object status is required");
            var n = this.options,
                r = this.createMessage(this.options, e, t);
            return new u(function (e, t) {
                return n.hook
                    ? l
                          .post(n.hook)
                          .send(r)
                          .set("Accept", "application/json")
                          .end(function (n) {
                              return n ? t(n) : e();
                          })
                    : e();
            });
        }),
            (o.prototype.createMessage = function (e, t, n) {
                var r = { username: e.username || "auth0-logger", icon_emoji: e.icon || ":rocket:", attachments: [] },
                    o = e.title || "Auth0 Logger",
                    i = "report" === t.type ? o + " Daily Report" : t.error ? o + " Error" : o + " Success",
                    c = t.error || null,
                    a = { fallback: e.fallback || i, text: e.text || i, error_field: { title: "Error", value: (0, s.default)(c), short: !1 } };
                "report" === t.type
                    ? (a.fields = [
                          { title: "Logs processed", value: t.processed, short: !0 },
                          { title: "Warnings", value: t.warnings, short: !0 },
                          { title: "Errors", value: t.errors, short: !0 },
                          { title: "Next checkpoint", value: t.checkpoint, short: !0 },
                      ])
                    : (a.fields = [
                          { title: "Start time", value: t.start, short: !0 },
                          { title: "End time", value: t.end, short: !0 },
                          { title: "Logs processed", value: t.logsProcessed, short: !0 },
                          { title: "Next checkpoint", value: n, short: !0 },
                      ]);
                var u = e.url ? " (<" + e.url + "|Details>)" : null,
                    l = a.fields;
                return t.error && l.push(a.error_field), r.attachments.push({ color: t.error ? "#d13f42" : "#7cd197", fallback: a.fallback, text: a.fallback + (u || ""), fields: l }), r;
            }),
            (e.exports = o);
    },
    function (e, t, n) {
        "use strict";
        function r(e, t) {
            if (!e) throw new c("The storageContext is required");
            (this.storageContext = e), (this.options = s({}, { limit: 400 }, t));
        }
        var o = n(18),
            i = (function (e) {
                return e && e.__esModule ? e : { default: e };
            })(o),
            s = n(33).assign,
            c = n(0).ArgumentError;
        (r.prototype.read = function () {
            return this.storageContext.read().then(function (e) {
                var t = e || {};
                return (t.logs = t.logs || []), t;
            });
        }),
            (r.prototype.write = function (e) {
                return this.storageContext.write(e);
            }),
            (r.prototype.getCheckpoint = function (e) {
                var t = this;
                return t.read().then(function (n) {
                    return e && e !== n.startFrom
                        ? ((n.startFrom = e),
                          (n.checkpointId = e),
                          t.write(n).then(function () {
                              return n.checkpointId || e || null;
                          }))
                        : n.checkpointId;
                });
            }),
            (r.prototype.getToken = function () {
                return this.read().then(function (e) {
                    return e.logs_access_token || null;
                });
            }),
            (r.prototype.setToken = function (e) {
                var t = this;
                return t.read().then(function (n) {
                    return (n.logs_access_token = e), t.write(n);
                });
            }),
            (r.prototype.done = function (e, t) {
                var n = this;
                return n.read().then(function (r) {
                    return Buffer.byteLength((0, i.default)(r), "utf8") >= 1024 * n.options.limit && r.logs && r.logs.length && r.logs.splice(0, 5), (e.checkpoint = t), r.logs.push(e), (r.checkpointId = t), n.write(r);
                });
            }),
            (e.exports = r);
    },
    function (e, t, n) {
        "use strict";
        var r = n(121),
            o = n(66),
            i = n(10),
            s = n(2),
            c = n(71);
        e.exports = function (e) {
            return function (t, n, a) {
                var u = (t.webtaskContext && t.webtaskContext.body) || t.body || {},
                    l = (t.webtaskContext && t.webtaskContext.headers) || {};
                if (!((u.schedule && "active" === u.state) || ("https://manage.auth0.com/" === l.referer && l["if-none-match"]))) return a();
                var d = c(),
                    f = "auth-webhooks",
                    p = function (e, t) {
                        var n = process.hrtime();
                        d(e, function (e) {
                            var r = process.hrtime(n),
                                o = 1e3 * r[0] + r[1] / 1e6;
                            i.info("Finished request to '" + f + "' in " + o + "ms."), t(e);
                        });
                    },
                    h = { hook: s("SLACK_INCOMING_WEBHOOK_URL"), username: "auth0-logs-to-" + f, title: "Logs Export" };
                (h.username = "auth0-authentication-api-webhooks"), (h.title = "Authentication API Webhooks");
                var v = new o.reporters.SlackReporter(h),
                    g = {
                        domain: s("AUTH0_DOMAIN"),
                        clientId: s("AUTH0_CLIENT_ID"),
                        clientSecret: s("AUTH0_CLIENT_SECRET"),
                        batchSize: parseInt(s("BATCH_SIZE")),
                        startFrom: s("START_FROM"),
                        logTypes: s("LOG_TYPES"),
                        logLevel: s("LOG_LEVEL"),
                        logger: i,
                    },
                    m = 100;
                1e3 === g.batchSize && (m = g.batchSize), (!g.batchSize || g.batchSize > m) && (g.batchSize = m), g.logTypes && !Array.isArray(g.logTypes) && (g.logTypes = g.logTypes.replace(/\s/g, "").split(","));
                var y = new o.LogsProcessor(e, g),
                    x = function (t) {
                        var n = new Date(),
                            r = n.getTime(),
                            o = r - 864e5;
                        y.getReport(o, r)
                            .then(function (e) {
                                return v.send(e, e.checkpoint);
                            })
                            .then(function () {
                                return e.read();
                            })
                            .then(function (n) {
                                return (n.lastReportDate = t), e.write(n);
                            });
                    },
                    b = function () {
                        e.read().then(function (e) {
                            var t = r().format("DD-MM-YYYY"),
                                n = s("DAILY_REPORT_TIME") || 16;
                            e.lastReportDate !== t && new Date().getHours() >= n && x(t);
                        });
                    };
                return (function () {
                    return e.read().then(function (t) {
                        return (t.lastRun = new Date()), e.write(t);
                    });
                })().then(function () {
                    return y
                        .run(p)
                        .then(function (e) {
                            e && e.status && e.status.error ? v.send(e.status, e.checkpoint) : (!0 !== s("SLACK_SEND_SUCCESS") && "true" !== s("SLACK_SEND_SUCCESS")) || v.send(e.status, e.checkpoint), b(), n.json(e);
                        })
                        .catch(function (e) {
                            v.send({ error: e, logsProcessed: 0 }, null), b(), a(e);
                        });
                });
            };
        };
    },
    function (e, t, n) {
        "use strict";
        var r = n(18),
            o = (function (e) {
                return e && e.__esModule ? e : { default: e };
            })(r),
            i = n(113),
            s = n(124),
            c = n(2),
            a = n(10);
        e.exports = function () {
            var e = c("ELASTIC_INDEX"),
                t = c("ELASTIC_HOST"),
                n =
                    (c("ELASTIC_USER"),
                    c("ELASTIC_PASSWORD"),
                    function (n, r) {
                        try {
                            if (!n) return r();
                            Date.now();
                            a.info((0, o.default)(n));
                            var i = { message: loggingTools.logTypes.get(n.type), auth: {}, event: { dataset: "auth0" }, log: { level: "info" } };
                            i["@timestamp"] = n.date;
                            var u = { method: "POST", timeout: 2e3, url: t + "/" + e + "/_doc/", headers: { "Content-Type": "application/json" }, body: i, json: !0 };
                            (u.auth = { user: c("ELASTIC_USER"), pass: c("ELASTIC_PASSWORD"), sendImmediately: !0 }),
                                s(u, function (e, t, n) {
                                    if (e || (t && t.statusCode >= 300)) {
                                        var i = { error: { req: u, error: e, resp: t, body: n }, status: (t && t.statusCode) || 500 };
                                        return a.error(e), a.error((0, o.default)(t)), r(i);
                                    }
                                    return r();
                                });
                        } catch (e) {
                            var l = { error: { req: e.message }, status: (resp && resp.statusCode) || 500 };
                            return r(l);
                        }
                    });
            return function (e, t) {
                return e && e.length ? (a.info(e.length + " logs found."), i.eachLimit(e, 10, n, t)) : t();
            };
        };
    },
    function (e, t, n) {
        "use strict";
        var r = n(12).Router,
            o = n(9).middlewares,
            i = n(2),
            s = n(10);
        e.exports = function () {
            var e = r(),
                t = o.validateHookToken(i("AUTH0_DOMAIN"), i("WT_URL"), i("EXTENSION_SECRET"));
            return (
                e.use("/on-uninstall", t("/.extensions/on-uninstall")),
                e.use(o.managementApiClient({ domain: i("AUTH0_DOMAIN"), clientId: i("AUTH0_CLIENT_ID"), clientSecret: i("AUTH0_CLIENT_SECRET") })),
                e.delete("/on-uninstall", function (e, t) {
                    var n = i("AUTH0_CLIENT_ID");
                    e.auth0.clients
                        .delete({ client_id: n })
                        .then(function () {
                            s.debug("Deleted client " + n), t.sendStatus(204);
                        })
                        .catch(function (e) {
                            s.debug("Error deleting client: " + i("AUTH0_CLIENT_ID")), s.error(e), t.sendStatus(204);
                        });
                }),
                e
            );
        };
    },
    function (e, t, n) {
        "use strict";
        (function (t) {
            var r = (n(118), n(117)),
                o = (n(51), n(9).urlHelpers),
                i = n(2);
            e.exports = function () {
                var e =
                    '\n  <!DOCTYPE html>\n  <html lang="en">\n  <head>\n    <title><%= config.TITLE %></title>\n    <meta charset="UTF-8" />\n    <meta http-equiv="X-UA-Compatible" content="IE=Edge" />\n    <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n    <link rel="shortcut icon" href="https://cdn.auth0.com/styleguide/4.6.13/lib/logos/img/favicon.png">\n    <meta name="viewport" content="width=device-width, initial-scale=1">\n    <link rel="stylesheet" type="text/css" href="https://cdn.auth0.com/styles/zocial.min.css" />\n    <link rel="stylesheet" type="text/css" href="https://cdn.auth0.com/manage/v0.3.1672/css/index.min.css" />\n    <link rel="stylesheet" type="text/css" href="https://cdn.auth0.com/styleguide/4.6.13/index.min.css" />\n    <% if (assets.style) { %><link rel="stylesheet" type="text/css" href="/app/<%= assets.style %>" /><% } %>\n    <% if (assets.useCdn) { %><link rel="stylesheet" type="text/css" href="//cdn.auth0.com/extensions/auth0-logs-to-provider/assets/auth0-logs-to-provider.ui.css" /><% } %>\n    <% if (assets.customCss) { %><link rel="stylesheet" type="text/css" href="<%= assets.customCss %>" /><% } %>\n  </head>\n  <body>\n    <div id="app"></div>\n    <script type="text/javascript" src="//cdn.auth0.com/w2/auth0-7.0.4.min.js"></script>\n    <script type="text/javascript" src="//cdn.auth0.com/manage/v0.3.1672/js/bundle.js"></script>\n    <script type="text/javascript">window.config = <%- JSON.stringify(config) %>;</script>\n    <% if (assets.vendors) { %><script type="text/javascript" src="/app/<%= assets.vendors %>"></script><% } %>\n    <% if (assets.app) { %><script type="text/javascript" src="<%= assets.app %>"></script><% } %>\n    <% if (assets.useCdn) { %>\n    <script type="text/javascript" src="//cdn.auth0.com/extensions/auth0-logs-to-provider/assets/auth0-logs-to-provider.ui.vendors.js"></script>\n    <script type="text/javascript" src="//cdn.auth0.com/extensions/auth0-logs-to-provider/assets/auth0-logs-to-provider.ui.js"></script>\n    <% } %>\n  </body>\n  </html>\n  ';
                return function (t, n, s) {
                    if (0 === t.url.indexOf("/api")) return s();
                    var c = {
                        AUTH0_DOMAIN: i("AUTH0_DOMAIN"),
                        AUTH0_CLIENT_ID: i("EXTENSION_CLIENT_ID"),
                        AUTH0_MANAGE_URL: i("AUTH0_MANAGE_URL") || "https://manage.auth0.com",
                        BASE_URL: o.getBaseUrl(t),
                        BASE_PATH: o.getBasePath(t),
                        TITLE: i("TITLE"),
                    };
                    return n.send(r.render(e, { config: c, assets: { customCss: i("CUSTOM_CSS"), useCdn: !0 } }));
                };
            };
        }.call(t, "/"));
    },
    function (e, t, n) {
        "use strict";
        var r = n(33),
            o = n(12).Router,
            i = n(9).middlewares,
            s = n(2),
            c = n(73);
        e.exports = function (e) {
            var t = o(),
                n = i.authenticateAdmins({
                    credentialsRequired: !0,
                    secret: s("EXTENSION_SECRET"),
                    audience: "urn:logs-to-provider",
                    baseUrl: s("PUBLIC_WT_URL") || s("WT_URL"),
                    onLoginSuccess: function (e, t, n) {
                        return n();
                    },
                });
            return (
                t.get("/", c()),
                t.get("/api/report", n, function (t, n, o) {
                    return e
                        .read()
                        .then(function (e) {
                            var o = e && e.lastRun,
                                i = e && e.logs ? r.orderBy(e.logs, "start", "desc") : [],
                                s =
                                    t.query.filter && "errors" === t.query.filter
                                        ? r.filter(i, function (e) {
                                              return !!e.error;
                                          })
                                        : i,
                                c = t.query.page && parseInt(t.query.page) ? parseInt(t.query.page) - 1 : 0,
                                a = (t.query.per_page && parseInt(t.query.per_page)) || 10,
                                u = a * c;
                            return n.json({ logs: s.slice(u, u + a), total: s.length, lastRun: o });
                        })
                        .catch(o);
                }),
                t
            );
        };
    },
    function (e, t, n) {
        "use strict";
        var r = n(12),
            o = n(109);
        e.exports = function () {
            var e = r.Router();
            return (
                e.get("/", function (e, t) {
                    t.status(200).send(o);
                }),
                e
            );
        };
    },
    function (e, t, n) {
        "use strict";
        var r = n(9),
            o = n(54),
            i = n(2),
            s = n(10),
            c = r.createServer(function (e, t) {
                return s.info("Starting Auth0 Logging Extension - Version:", "2.3.4"), o(e, t);
            });
        e.exports = function (e, t, n) {
            (t.x_wt && t.x_wt.ectx && t.x_wt.ectx.PUBLIC_WT_URL) || !1 || i.setValue("PUBLIC_WT_URL", r.urlHelpers.getWebtaskUrl(t)), c(e, t, n);
        };
    },
    function (e, t, n) {
        e.exports = { default: n(81), __esModule: !0 };
    },
    function (e, t, n) {
        e.exports = { default: n(82), __esModule: !0 };
    },
    function (e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : { default: e };
        }
        t.__esModule = !0;
        var o = n(78),
            i = r(o),
            s = n(77),
            c = r(s),
            a =
                "function" == typeof c.default && "symbol" == typeof i.default
                    ? function (e) {
                          return typeof e;
                      }
                    : function (e) {
                          return e && "function" == typeof c.default && e.constructor === c.default && e !== c.default.prototype ? "symbol" : typeof e;
                      };
        t.default =
            "function" == typeof c.default && "symbol" === a(i.default)
                ? function (e) {
                      return void 0 === e ? "undefined" : a(e);
                  }
                : function (e) {
                      return e && "function" == typeof c.default && e.constructor === c.default && e !== c.default.prototype ? "symbol" : void 0 === e ? "undefined" : a(e);
                  };
    },
    function (e, t, n) {
        var r = n(14),
            o = r.JSON || (r.JSON = { stringify: JSON.stringify });
        e.exports = function (e) {
            return o.stringify.apply(o, arguments);
        };
    },
    function (e, t, n) {
        n(105), n(103), n(106), n(107), (e.exports = n(14).Symbol);
    },
    function (e, t, n) {
        n(104), n(108), (e.exports = n(31).f("iterator"));
    },
    function (e, t) {
        e.exports = function (e) {
            if ("function" != typeof e) throw TypeError(e + " is not a function!");
            return e;
        };
    },
    function (e, t) {
        e.exports = function () {};
    },
    function (e, t, n) {
        var r = n(7),
            o = n(100),
            i = n(99);
        e.exports = function (e) {
            return function (t, n, s) {
                var c,
                    a = r(t),
                    u = o(a.length),
                    l = i(s, u);
                if (e && n != n) {
                    for (; u > l; ) if ((c = a[l++]) != c) return !0;
                } else for (; u > l; l++) if ((e || l in a) && a[l] === n) return e || l || 0;
                return !e && -1;
            };
        };
    },
    function (e, t, n) {
        var r = n(83);
        e.exports = function (e, t, n) {
            if ((r(e), void 0 === t)) return e;
            switch (n) {
                case 1:
                    return function (n) {
                        return e.call(t, n);
                    };
                case 2:
                    return function (n, r) {
                        return e.call(t, n, r);
                    };
                case 3:
                    return function (n, r, o) {
                        return e.call(t, n, r, o);
                    };
            }
            return function () {
                return e.apply(t, arguments);
            };
        };
    },
    function (e, t, n) {
        var r = n(23),
            o = n(46),
            i = n(24);
        e.exports = function (e) {
            var t = r(e),
                n = o.f;
            if (n) for (var s, c = n(e), a = i.f, u = 0; c.length > u; ) a.call(e, (s = c[u++])) && t.push(s);
            return t;
        };
    },
    function (e, t, n) {
        var r = n(1).document;
        e.exports = r && r.documentElement;
    },
    function (e, t, n) {
        var r = n(39);
        e.exports = Object("z").propertyIsEnumerable(0)
            ? Object
            : function (e) {
                  return "String" == r(e) ? e.split("") : Object(e);
              };
    },
    function (e, t, n) {
        var r = n(39);
        e.exports =
            Array.isArray ||
            function (e) {
                return "Array" == r(e);
            };
    },
    function (e, t, n) {
        "use strict";
        var r = n(44),
            o = n(16),
            i = n(25),
            s = {};
        n(5)(s, n(8)("iterator"), function () {
            return this;
        }),
            (e.exports = function (e, t, n) {
                (e.prototype = r(s, { next: o(1, n) })), i(e, t + " Iterator");
            });
    },
    function (e, t) {
        e.exports = function (e, t) {
            return { value: t, done: !!e };
        };
    },
    function (e, t, n) {
        var r = n(17)("meta"),
            o = n(11),
            i = n(3),
            s = n(6).f,
            c = 0,
            a =
                Object.isExtensible ||
                function () {
                    return !0;
                },
            u = !n(15)(function () {
                return a(Object.preventExtensions({}));
            }),
            l = function (e) {
                s(e, r, { value: { i: "O" + ++c, w: {} } });
            },
            d = function (e, t) {
                if (!o(e)) return "symbol" == typeof e ? e : ("string" == typeof e ? "S" : "P") + e;
                if (!i(e, r)) {
                    if (!a(e)) return "F";
                    if (!t) return "E";
                    l(e);
                }
                return e[r].i;
            },
            f = function (e, t) {
                if (!i(e, r)) {
                    if (!a(e)) return !0;
                    if (!t) return !1;
                    l(e);
                }
                return e[r].w;
            },
            p = function (e) {
                return u && h.NEED && a(e) && !i(e, r) && l(e), e;
            },
            h = (e.exports = { KEY: r, NEED: !1, fastKey: d, getWeak: f, onFreeze: p });
    },
    function (e, t, n) {
        var r = n(6),
            o = n(13),
            i = n(23);
        e.exports = n(4)
            ? Object.defineProperties
            : function (e, t) {
                  o(e);
                  for (var n, s = i(t), c = s.length, a = 0; c > a; ) r.f(e, (n = s[a++]), t[n]);
                  return e;
              };
    },
    function (e, t, n) {
        var r = n(24),
            o = n(16),
            i = n(7),
            s = n(29),
            c = n(3),
            a = n(42),
            u = Object.getOwnPropertyDescriptor;
        t.f = n(4)
            ? u
            : function (e, t) {
                  if (((e = i(e)), (t = s(t, !0)), a))
                      try {
                          return u(e, t);
                      } catch (e) {}
                  if (c(e, t)) return o(!r.f.call(e, t), e[t]);
              };
    },
    function (e, t, n) {
        var r = n(7),
            o = n(45).f,
            i = {}.toString,
            s = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [],
            c = function (e) {
                try {
                    return o(e);
                } catch (e) {
                    return s.slice();
                }
            };
        e.exports.f = function (e) {
            return s && "[object Window]" == i.call(e) ? c(e) : o(r(e));
        };
    },
    function (e, t, n) {
        var r = n(3),
            o = n(101),
            i = n(26)("IE_PROTO"),
            s = Object.prototype;
        e.exports =
            Object.getPrototypeOf ||
            function (e) {
                return (e = o(e)), r(e, i) ? e[i] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? s : null;
            };
    },
    function (e, t, n) {
        var r = n(28),
            o = n(19);
        e.exports = function (e) {
            return function (t, n) {
                var i,
                    s,
                    c = String(o(t)),
                    a = r(n),
                    u = c.length;
                return a < 0 || a >= u
                    ? e
                        ? ""
                        : void 0
                    : ((i = c.charCodeAt(a)), i < 55296 || i > 56319 || a + 1 === u || (s = c.charCodeAt(a + 1)) < 56320 || s > 57343 ? (e ? c.charAt(a) : i) : e ? c.slice(a, a + 2) : s - 56320 + ((i - 55296) << 10) + 65536);
            };
        };
    },
    function (e, t, n) {
        var r = n(28),
            o = Math.max,
            i = Math.min;
        e.exports = function (e, t) {
            return (e = r(e)), e < 0 ? o(e + t, 0) : i(e, t);
        };
    },
    function (e, t, n) {
        var r = n(28),
            o = Math.min;
        e.exports = function (e) {
            return e > 0 ? o(r(e), 9007199254740991) : 0;
        };
    },
    function (e, t, n) {
        var r = n(19);
        e.exports = function (e) {
            return Object(r(e));
        };
    },
    function (e, t, n) {
        "use strict";
        var r = n(84),
            o = n(92),
            i = n(21),
            s = n(7);
        (e.exports = n(43)(
            Array,
            "Array",
            function (e, t) {
                (this._t = s(e)), (this._i = 0), (this._k = t);
            },
            function () {
                var e = this._t,
                    t = this._k,
                    n = this._i++;
                return !e || n >= e.length ? ((this._t = void 0), o(1)) : "keys" == t ? o(0, n) : "values" == t ? o(0, e[n]) : o(0, [n, e[n]]);
            },
            "values"
        )),
            (i.Arguments = i.Array),
            r("keys"),
            r("values"),
            r("entries");
    },
    function (e, t) {},
    function (e, t, n) {
        "use strict";
        var r = n(98)(!0);
        n(43)(
            String,
            "String",
            function (e) {
                (this._t = String(e)), (this._i = 0);
            },
            function () {
                var e,
                    t = this._t,
                    n = this._i;
                return n >= t.length ? { value: void 0, done: !0 } : ((e = r(t, n)), (this._i += e.length), { value: e, done: !1 });
            }
        );
    },
    function (e, t, n) {
        "use strict";
        var r = n(1),
            o = n(3),
            i = n(4),
            s = n(41),
            c = n(48),
            a = n(93).KEY,
            u = n(15),
            l = n(27),
            d = n(25),
            f = n(17),
            p = n(8),
            h = n(31),
            v = n(30),
            g = n(87),
            m = n(90),
            y = n(13),
            x = n(11),
            b = n(7),
            w = n(29),
            _ = n(16),
            S = n(44),
            k = n(96),
            E = n(95),
            A = n(6),
            T = n(23),
            C = E.f,
            O = A.f,
            L = k.f,
            P = r.Symbol,
            I = r.JSON,
            U = I && I.stringify,
            R = p("_hidden"),
            M = p("toPrimitive"),
            j = {}.propertyIsEnumerable,
            F = l("symbol-registry"),
            N = l("symbols"),
            D = l("op-symbols"),
            q = Object.prototype,
            B = "function" == typeof P,
            H = r.QObject,
            W = !H || !H.prototype || !H.prototype.findChild,
            z =
                i &&
                u(function () {
                    return (
                        7 !=
                        S(
                            O({}, "a", {
                                get: function () {
                                    return O(this, "a", { value: 7 }).a;
                                },
                            })
                        ).a
                    );
                })
                    ? function (e, t, n) {
                          var r = C(q, t);
                          r && delete q[t], O(e, t, n), r && e !== q && O(q, t, r);
                      }
                    : O,
            V = function (e) {
                var t = (N[e] = S(P.prototype));
                return (t._k = e), t;
            },
            G =
                B && "symbol" == typeof P.iterator
                    ? function (e) {
                          return "symbol" == typeof e;
                      }
                    : function (e) {
                          return e instanceof P;
                      },
            K = function (e, t, n) {
                return (
                    e === q && K(D, t, n),
                    y(e),
                    (t = w(t, !0)),
                    y(n),
                    o(N, t) ? (n.enumerable ? (o(e, R) && e[R][t] && (e[R][t] = !1), (n = S(n, { enumerable: _(0, !1) }))) : (o(e, R) || O(e, R, _(1, {})), (e[R][t] = !0)), z(e, t, n)) : O(e, t, n)
                );
            },
            Y = function (e, t) {
                y(e);
                for (var n, r = g((t = b(t))), o = 0, i = r.length; i > o; ) K(e, (n = r[o++]), t[n]);
                return e;
            },
            J = function (e, t) {
                return void 0 === t ? S(e) : Y(S(e), t);
            },
            X = function (e) {
                var t = j.call(this, (e = w(e, !0)));
                return !(this === q && o(N, e) && !o(D, e)) && (!(t || !o(this, e) || !o(N, e) || (o(this, R) && this[R][e])) || t);
            },
            $ = function (e, t) {
                if (((e = b(e)), (t = w(t, !0)), e !== q || !o(N, t) || o(D, t))) {
                    var n = C(e, t);
                    return !n || !o(N, t) || (o(e, R) && e[R][t]) || (n.enumerable = !0), n;
                }
            },
            Z = function (e) {
                for (var t, n = L(b(e)), r = [], i = 0; n.length > i; ) o(N, (t = n[i++])) || t == R || t == a || r.push(t);
                return r;
            },
            Q = function (e) {
                for (var t, n = e === q, r = L(n ? D : b(e)), i = [], s = 0; r.length > s; ) !o(N, (t = r[s++])) || (n && !o(q, t)) || i.push(N[t]);
                return i;
            };
        B ||
            ((P = function () {
                if (this instanceof P) throw TypeError("Symbol is not a constructor!");
                var e = f(arguments.length > 0 ? arguments[0] : void 0),
                    t = function (n) {
                        this === q && t.call(D, n), o(this, R) && o(this[R], e) && (this[R][e] = !1), z(this, e, _(1, n));
                    };
                return i && W && z(q, e, { configurable: !0, set: t }), V(e);
            }),
            c(P.prototype, "toString", function () {
                return this._k;
            }),
            (E.f = $),
            (A.f = K),
            (n(45).f = k.f = Z),
            (n(24).f = X),
            (n(46).f = Q),
            i && !n(22) && c(q, "propertyIsEnumerable", X, !0),
            (h.f = function (e) {
                return V(p(e));
            })),
            s(s.G + s.W + s.F * !B, { Symbol: P });
        for (var ee = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), te = 0; ee.length > te; ) p(ee[te++]);
        for (var ne = T(p.store), re = 0; ne.length > re; ) v(ne[re++]);
        s(s.S + s.F * !B, "Symbol", {
            for: function (e) {
                return o(F, (e += "")) ? F[e] : (F[e] = P(e));
            },
            keyFor: function (e) {
                if (!G(e)) throw TypeError(e + " is not a symbol!");
                for (var t in F) if (F[t] === e) return t;
            },
            useSetter: function () {
                W = !0;
            },
            useSimple: function () {
                W = !1;
            },
        }),
            s(s.S + s.F * !B, "Object", { create: J, defineProperty: K, defineProperties: Y, getOwnPropertyDescriptor: $, getOwnPropertyNames: Z, getOwnPropertySymbols: Q }),
            I &&
                s(
                    s.S +
                        s.F *
                            (!B ||
                                u(function () {
                                    var e = P();
                                    return "[null]" != U([e]) || "{}" != U({ a: e }) || "{}" != U(Object(e));
                                })),
                    "JSON",
                    {
                        stringify: function (e) {
                            for (var t, n, r = [e], o = 1; arguments.length > o; ) r.push(arguments[o++]);
                            if (((n = t = r[1]), (x(t) || void 0 !== e) && !G(e)))
                                return (
                                    m(t) ||
                                        (t = function (e, t) {
                                            if (("function" == typeof n && (t = n.call(this, e, t)), !G(t))) return t;
                                        }),
                                    (r[1] = t),
                                    U.apply(I, r)
                                );
                        },
                    }
                ),
            P.prototype[M] || n(5)(P.prototype, M, P.prototype.valueOf),
            d(P, "Symbol"),
            d(Math, "Math", !0),
            d(r.JSON, "JSON", !0);
    },
    function (e, t, n) {
        n(30)("asyncIterator");
    },
    function (e, t, n) {
        n(30)("observable");
    },
    function (e, t, n) {
        n(102);
        for (
            var r = n(1),
                o = n(5),
                i = n(21),
                s = n(8)("toStringTag"),
                c = "CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(
                    ","
                ),
                a = 0;
            a < c.length;
            a++
        ) {
            var u = c[a],
                l = r[u],
                d = l && l.prototype;
            d && !d[s] && o(d, s, u), (i[u] = i.Array);
        }
    },
    function (e, t) {
        e.exports = {
            author: "auth0",
            type: "cron",
            category: "webhook",
            initialUrlPath: "/login",
            repository: "https://github.com/auth0-extensions/auth0-logs-to-provider",
            keywords: ["auth0", "extension"],
            schedule: "0 */5 * * * *",
            auth0: { createClient: !0, onUninstallPath: "/.extensions/on-uninstall", scopes: "read:logs delete:clients" },
            secrets: {
                BATCH_SIZE: { description: "The amount of logs to batch before sending. A single cron execution will send multiple batches. The maximum value is 100.", default: 100 },
                START_FROM: { description: "Checkpoint ID of log to start from." },
                SLACK_INCOMING_WEBHOOK_URL: { description: "Slack Incoming Webhook URL used to report statistics and possible failures" },
                SLACK_SEND_SUCCESS: {
                    description: "This setting will enable verbose notifications to Slack which are useful for troubleshooting",
                    type: "select",
                    allowMultiple: !1,
                    default: "false",
                    options: [
                        { value: "false", text: "No" },
                        { value: "true", text: "Yes" },
                    ],
                },
                LOG_LEVEL: {
                    description: "This allows you to specify the log level of events that need to be sent. Selected level includes all levels above.",
                    type: "select",
                    allowMultiple: !1,
                    options: [
                        { value: "-", text: "" },
                        { value: "4", text: "Critical" },
                        { value: "3", text: "Error" },
                        { value: "2", text: "Warning" },
                        { value: "1", text: "Info" },
                        { value: "0", text: "Debug" },
                    ],
                },
                LOG_TYPES: {
                    description: "If you only want to send events with a specific type (eg: failed logins)",
                    type: "select",
                    allowMultiple: !0,
                    options: [
                        { text: "", value: "-" },
                        { text: "Success Login", value: "s" },
                        { text: "Success Silent Auth", value: "ssa" },
                        { text: "Failed Silent Auth", value: "fsa" },
                        { text: "Success Exchange", value: "seacft" },
                        { text: "Failed Exchange", value: "feacft" },
                        { text: "Success Exchange", value: "seccft" },
                        { text: "Failed Exchange", value: "feccft" },
                        { text: "Success Exchange", value: "sepft" },
                        { text: "Failed Exchange", value: "fepft" },
                        { text: "Success Exchange", value: "sertft" },
                        { text: "Failed Exchange", value: "fertft" },
                        { text: "Success Exchange", value: "seoobft" },
                        { text: "Failed Exchange", value: "feoobft" },
                        { text: "Success Exchange", value: "seotpft" },
                        { text: "Failed Exchange", value: "feotpft" },
                        { text: "Success Exchange", value: "sercft" },
                        { text: "Failed Exchange", value: "fercft" },
                        { text: "Failed Login", value: "f" },
                        { text: "Warning", value: "w" },
                        { text: "Deprecation Notice", value: "depnote" },
                        { text: "Deleted User", value: "du" },
                        { text: "Failed Login (invalid email/username)", value: "fu" },
                        { text: "Failed Login (wrong password)", value: "fp" },
                        { text: "Failed by Connector", value: "fc" },
                        { text: "Failed by CORS", value: "fco" },
                        { text: "Connector Online", value: "con" },
                        { text: "Connector Offline", value: "coff" },
                        { text: "Failed Connector Provisioning", value: "fcpro" },
                        { text: "Success Signup", value: "ss" },
                        { text: "Failed Signup", value: "fs" },
                        { text: "Code Sent", value: "cs" },
                        { text: "Code/Link Sent", value: "cls" },
                        { text: "Success Verification Email", value: "sv" },
                        { text: "Failed Verification Email", value: "fv" },
                        { text: "Success Change Password", value: "scp" },
                        { text: "Failed Change Password", value: "fcp" },
                        { text: "Success Post Change Password Hook", value: "scph" },
                        { text: "Failed Post Change Password Hook", value: "fcph" },
                        { text: "Success Change Email", value: "sce" },
                        { text: "Failed Change Email", value: "fce" },
                        { text: "Success Change Username", value: "scu" },
                        { text: "Failed Change Username", value: "fcu" },
                        { text: "Success Change Phone Number", value: "scpn" },
                        { text: "Failed Change Phone Number", value: "fcpn" },
                        { text: "Success Verification Email Request", value: "svr" },
                        { text: "Failed Verification Email Request", value: "fvr" },
                        { text: "Success Change Password Request", value: "scpr" },
                        { text: "Failed Change Password Request", value: "fcpr" },
                        { text: "Failed Sending Notification", value: "fn" },
                        { text: "API Operation", value: "sapi" },
                        { text: "Failed API Operation", value: "fapi" },
                        { text: "Blocked Account", value: "limit_wc" },
                        { text: "Blocked IP Address", value: "limit_mu" },
                        { text: "Too Many Calls to /userinfo", value: "limit_ui" },
                        { text: "Rate Limit On API", value: "api_limit" },
                        { text: "Too Many Calls to /delegation", value: "limit_delegation" },
                        { text: "Successful User Deletion", value: "sdu" },
                        { text: "Failed User Deletion", value: "fdu" },
                        { text: "Auth0 Update Launched", value: "admin_update_launch" },
                        { text: "Auth0 OS Update Started", value: "sys_os_update_start" },
                        { text: "Auth0 OS Update Ended", value: "sys_os_update_end" },
                        { text: "Auth0 Update Started", value: "sys_update_start" },
                        { text: "Auth0 Update Ended", value: "sys_update_end" },
                        { text: "Success Logout", value: "slo" },
                        { text: "Failed Logout", value: "flo" },
                        { text: "Success Delegation", value: "sd" },
                        { text: "Failed Delegation", value: "fd" },
                        { text: "Unenroll device account", value: "gd_unenroll" },
                        { text: "Update device account", value: "gd_update_device_account" },
                        { text: "Module switch", value: "gd_module_switch" },
                        { text: "Guardian tenant update", value: "gd_tenant_update" },
                        { text: "Second factor started", value: "gd_start_auth" },
                        { text: "Enroll started", value: "gd_start_enroll" },
                        { text: "MFA Enrollment start failed", value: "gd_start_enroll_failed" },
                        { text: "User delete", value: "gd_user_delete" },
                        { text: "OTP Auth suceed", value: "gd_auth_succeed" },
                        { text: "OTP Auth failed", value: "gd_auth_failed" },
                        { text: "Push notification sent", value: "gd_send_pn" },
                        { text: "Error sending MFA Push Notification", value: "gd_send_pn_failure" },
                        { text: "OTP Auth rejected", value: "gd_auth_rejected" },
                        { text: "Recovery succeed", value: "gd_recovery_succeed" },
                        { text: "Recovery failed", value: "gd_recovery_failed" },
                        { text: "SMS Sent", value: "gd_send_sms" },
                        { text: "Error sending MFA SMS", value: "gd_send_sms_failure" },
                        { text: "Too many failures", value: "gd_otp_rate_limit_exceed" },
                        { text: "Too many failures", value: "gd_recovery_rate_limit_exceed" },
                        { text: "Guardian enrollment complete", value: "gd_enrollment_complete" },
                        { text: "Users import", value: "fui" },
                        { text: "Users import", value: "sui" },
                        { text: "Breached password", value: "pwd_leak" },
                        { text: "Failed cross origin authentication", value: "fcoa" },
                        { text: "Success cross origin authentication", value: "scoa" },
                        { text: "Account unblocked", value: "ublkdu" },
                        { text: "Success Exchange", value: "sens" },
                        { text: "Failed Exchange", value: "fens" },
                    ],
                },
                WEBHOOK_URL: { required: !0, type: "text" },
                AUTHORIZATION: { description: "Authorization Header (optional).", example: "Basic dm9yZGVsOnZvcmRlbA==", type: "text" },
                SEND_AS_BATCH: {
                    description: "If enabled, extension will send entire batch in one request. Otherwise, it will send requests one by one.",
                    type: "select",
                    allowMultiple: !1,
                    default: "true",
                    options: [
                        { value: "true", text: "Enabled" },
                        { value: "false", text: "Disabled" },
                    ],
                },
                WEBHOOK_CONCURRENT_CALLS: {
                    description: "The maximum concurrent calls that will be made to your webhook",
                    default: 5,
                    visibleIf: { SEND_AS_BATCH: "false" },
                    ELASTIC_HOST: { description: "elastic hostname", example: "blabla", required: !0 },
                    ELASTIC_USER: { description: "elastic cluster authenticatioj", example: "x:y", required: !0 },
                    ELASTIC_PASSWORD: { description: "elastic cluster authenticatioj", example: "x:y", required: !0 },
                    ELASTIC_INDEX: { description: "Index", required: !0, default: "auth-logs-" },
                },
            },
            title: "Auth0 Authentication API webhooks",
            name: "auth0-authentication-api-webhooks",
            version: "2.3.4",
            preVersion: "2.3.3",
            description: "Allows you to define webhooks for Auth0's Authentication API. It will go through the audit logs and call a webhook for specific events.",
            docsUrl: "https://auth0.com/docs/extensions/authentication-api-webhooks",
            logoUrl: "https://cdn.auth0.com/extensions/auth0-authentication-api-webhooks/assets/logo.svg",
        };
    },
    function (e, t) {
        function n(e) {
            this.message = e;
        }
        function r(e) {
            var t = String(e).replace(/=+$/, "");
            if (t.length % 4 == 1) throw new n("'atob' failed: The string to be decoded is not correctly encoded.");
            for (var r, i, s = 0, c = 0, a = ""; (i = t.charAt(c++)); ~i && ((r = s % 4 ? 64 * r + i : i), s++ % 4) ? (a += String.fromCharCode(255 & (r >> ((-2 * s) & 6)))) : 0) i = o.indexOf(i);
            return a;
        }
        var o = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
        (n.prototype = new Error()), (n.prototype.name = "InvalidCharacterError"), (e.exports = ("undefined" != typeof window && window.atob && window.atob.bind(window)) || r);
    },
    function (e, t, n) {
        function r(e) {
            return decodeURIComponent(
                o(e).replace(/(.)/g, function (e, t) {
                    var n = t.charCodeAt(0).toString(16).toUpperCase();
                    return n.length < 2 && (n = "0" + n), "%" + n;
                })
            );
        }
        var o = n(110);
        e.exports = function (e) {
            var t = e.replace(/-/g, "+").replace(/_/g, "/");
            switch (t.length % 4) {
                case 0:
                    break;
                case 2:
                    t += "==";
                    break;
                case 3:
                    t += "=";
                    break;
                default:
                    throw "Illegal base64url string!";
            }
            try {
                return r(t);
            } catch (e) {
                return o(t);
            }
        };
    },
    function (e, t, n) {
        function r(e) {
            var t = function () {
                return t.called ? t.value : ((t.called = !0), (t.value = e.apply(this, arguments)));
            };
            return (t.called = !1), t;
        }
        function o(e) {
            var t = function () {
                    if (t.called) throw new Error(t.onceError);
                    return (t.called = !0), (t.value = e.apply(this, arguments));
                },
                n = e.name || "Function wrapped with `once`";
            return (t.onceError = n + " shouldn't be called more than once"), (t.called = !1), t;
        }
        var i = n(129);
        (e.exports = i(r)),
            (e.exports.strict = i(o)),
            (r.proto = r(function () {
                Object.defineProperty(Function.prototype, "once", {
                    value: function () {
                        return r(this);
                    },
                    configurable: !0,
                }),
                    Object.defineProperty(Function.prototype, "onceStrict", {
                        value: function () {
                            return o(this);
                        },
                        configurable: !0,
                    });
            }));
    },
    function (e, t) {
        e.exports = require("async@2.1.2");
    },
    function (e, t) {
        e.exports = require("body-parser@1.12.4");
    },
    function (e, t) {
        e.exports = require("cookie-parser@1.4.4");
    },
    function (e, t) {
        e.exports = require("crypto");
    },
    function (e, t) {
        e.exports = require("ejs@2.3.1");
    },
    function (e, t) {
        e.exports = require("fs");
    },
    function (e, t) {
        e.exports = require("jsonwebtoken@7.1.9");
    },
    function (e, t) {
        e.exports = require("jwks-rsa@1.6.0");
    },
    function (e, t) {
        e.exports = require("moment@2.10.3");
    },
    function (e, t) {
        e.exports = require("morgan@1.5.3");
    },
    function (e, t) {
        e.exports = require("querystring");
    },
    function (e, t) {
        e.exports = require("request@2.56.0");
    },
    function (e, t) {
        e.exports = require("stream");
    },
    function (e, t) {
        e.exports = require("util");
    },
    function (e, t) {
        e.exports = require("webtask-tools");
    },
    function (e, t) {
        e.exports = require("winston@1.0.0");
    },
    function (e, t) {
        e.exports = require("wrappy@1.0.1");
    },
]);
