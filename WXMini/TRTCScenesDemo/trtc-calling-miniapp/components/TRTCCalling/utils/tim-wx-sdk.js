!function(e, t) {
  'object' === typeof exports && 'undefined' !== typeof module ? module.exports = t() : 'function' === typeof define && define.amd ? define(t) : (e = e || self).TIM = t()
}(this, (function() {
  const e = { SDK_READY: 'sdkStateReady', SDK_NOT_READY: 'sdkStateNotReady', SDK_DESTROY: 'sdkDestroy', MESSAGE_RECEIVED: 'onMessageReceived', MESSAGE_REVOKED: 'onMessageRevoked', MESSAGE_READ_BY_PEER: 'onMessageReadByPeer', CONVERSATION_LIST_UPDATED: 'onConversationListUpdated', GROUP_LIST_UPDATED: 'onGroupListUpdated', GROUP_SYSTEM_NOTICE_RECEIVED: 'receiveGroupSystemNotice', PROFILE_UPDATED: 'onProfileUpdated', BLACKLIST_UPDATED: 'blacklistUpdated', KICKED_OUT: 'kickedOut', ERROR: 'error', NET_STATE_CHANGE: 'netStateChange', SDK_RELOAD: 'sdkReload' }; const t = { MSG_TEXT: 'TIMTextElem', MSG_IMAGE: 'TIMImageElem', MSG_SOUND: 'TIMSoundElem', MSG_AUDIO: 'TIMSoundElem', MSG_FILE: 'TIMFileElem', MSG_FACE: 'TIMFaceElem', MSG_VIDEO: 'TIMVideoFileElem', MSG_GEO: 'TIMLocationElem', MSG_GRP_TIP: 'TIMGroupTipElem', MSG_GRP_SYS_NOTICE: 'TIMGroupSystemNoticeElem', MSG_CUSTOM: 'TIMCustomElem', MSG_PRIORITY_HIGH: 'High', MSG_PRIORITY_NORMAL: 'Normal', MSG_PRIORITY_LOW: 'Low', MSG_PRIORITY_LOWEST: 'Lowest', CONV_C2C: 'C2C', CONV_GROUP: 'GROUP', CONV_SYSTEM: '@TIM#SYSTEM', CONV_AT_ME: 1, CONV_AT_ALL: 2, CONV_AT_ALL_AT_ME: 3, GRP_PRIVATE: 'Private', GRP_WORK: 'Private', GRP_PUBLIC: 'Public', GRP_CHATROOM: 'ChatRoom', GRP_MEETING: 'ChatRoom', GRP_AVCHATROOM: 'AVChatRoom', GRP_MBR_ROLE_OWNER: 'Owner', GRP_MBR_ROLE_ADMIN: 'Admin', GRP_MBR_ROLE_MEMBER: 'Member', GRP_TIP_MBR_JOIN: 1, GRP_TIP_MBR_QUIT: 2, GRP_TIP_MBR_KICKED_OUT: 3, GRP_TIP_MBR_SET_ADMIN: 4, GRP_TIP_MBR_CANCELED_ADMIN: 5, GRP_TIP_GRP_PROFILE_UPDATED: 6, GRP_TIP_MBR_PROFILE_UPDATED: 7, MSG_REMIND_ACPT_AND_NOTE: 'AcceptAndNotify', MSG_REMIND_ACPT_NOT_NOTE: 'AcceptNotNotify', MSG_REMIND_DISCARD: 'Discard', GENDER_UNKNOWN: 'Gender_Type_Unknown', GENDER_FEMALE: 'Gender_Type_Female', GENDER_MALE: 'Gender_Type_Male', KICKED_OUT_MULT_ACCOUNT: 'multipleAccount', KICKED_OUT_MULT_DEVICE: 'multipleDevice', KICKED_OUT_USERSIG_EXPIRED: 'userSigExpired', ALLOW_TYPE_ALLOW_ANY: 'AllowType_Type_AllowAny', ALLOW_TYPE_NEED_CONFIRM: 'AllowType_Type_NeedConfirm', ALLOW_TYPE_DENY_ANY: 'AllowType_Type_DenyAny', FORBID_TYPE_NONE: 'AdminForbid_Type_None', FORBID_TYPE_SEND_OUT: 'AdminForbid_Type_SendOut', JOIN_OPTIONS_FREE_ACCESS: 'FreeAccess', JOIN_OPTIONS_NEED_PERMISSION: 'NeedPermission', JOIN_OPTIONS_DISABLE_APPLY: 'DisableApply', JOIN_STATUS_SUCCESS: 'JoinedSuccess', JOIN_STATUS_ALREADY_IN_GROUP: 'AlreadyInGroup', JOIN_STATUS_WAIT_APPROVAL: 'WaitAdminApproval', GRP_PROFILE_OWNER_ID: 'ownerID', GRP_PROFILE_CREATE_TIME: 'createTime', GRP_PROFILE_LAST_INFO_TIME: 'lastInfoTime', GRP_PROFILE_MEMBER_NUM: 'memberNum', GRP_PROFILE_MAX_MEMBER_NUM: 'maxMemberNum', GRP_PROFILE_JOIN_OPTION: 'joinOption', GRP_PROFILE_INTRODUCTION: 'introduction', GRP_PROFILE_NOTIFICATION: 'notification', GRP_PROFILE_MUTE_ALL_MBRS: 'muteAllMembers', NET_STATE_CONNECTED: 'connected', NET_STATE_CONNECTING: 'connecting', NET_STATE_DISCONNECTED: 'disconnected', MSG_AT_ALL: '__kImSDK_MesssageAtALL__' }; function n(e) {
    return (n = 'function' === typeof Symbol && 'symbol' === typeof Symbol.iterator ? function(e) {
      return typeof e
    } : function(e) {
      return e && 'function' === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e
    })(e)
  } function o(e, t) {
    if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
  } function r(e, t) {
    for (let n = 0; n < t.length; n++) {
      const o = t[n]; o.enumerable = o.enumerable || !1, o.configurable = !0, 'value' in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
    }
  } function i(e, t, n) {
    return t && r(e.prototype, t), n && r(e, n), e
  } function s(e, t, n) {
    return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e
  } function a(e, t) {
    const n = Object.keys(e); if (Object.getOwnPropertySymbols) {
      let o = Object.getOwnPropertySymbols(e); t && (o = o.filter((function(t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable
      }))), n.push.apply(n, o)
    } return n
  } function u(e) {
    for (let t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {}; t % 2 ? a(Object(n), !0).forEach((function(t) {
        s(e, t, n[t])
      })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : a(Object(n)).forEach((function(t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
      }))
    } return e
  } function c(e, t) {
    if ('function' !== typeof t && null !== t) throw new TypeError('Super expression must either be null or a function'); e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && p(e, t)
  } function l(e) {
    return (l = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
      return e.__proto__ || Object.getPrototypeOf(e)
    })(e)
  } function p(e, t) {
    return (p = Object.setPrototypeOf || function(e, t) {
      return e.__proto__ = t, e
    })(e, t)
  } function g() {
    if ('undefined' === typeof Reflect || !Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ('function' === typeof Proxy) return !0; try {
      return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
    } catch (e) {
      return !1
    }
  } function h(e, t, n) {
    return (h = g() ? Reflect.construct : function(e, t, n) {
      const o = [null]; o.push.apply(o, t); const r = new (Function.bind.apply(e, o)); return n && p(r, n.prototype), r
    }).apply(null, arguments)
  } function d(e) {
    const t = 'function' === typeof Map ? new Map : void 0; return (d = function(e) {
      if (null === e || (n = e, -1 === Function.toString.call(n).indexOf('[native code]'))) return e; let n; if ('function' !== typeof e) throw new TypeError('Super expression must either be null or a function'); if (void 0 !== t) {
        if (t.has(e)) return t.get(e); t.set(e, o)
      } function o() {
        return h(e, arguments, l(this).constructor)
      } return o.prototype = Object.create(e.prototype, { constructor: { value: o, enumerable: !1, writable: !0, configurable: !0 } }), p(o, e)
    })(e)
  } function m(e, t) {
    if (null == e) return {}; let n; let o; const r = function(e, t) {
      if (null == e) return {}; let n; let o; const r = {}; const i = Object.keys(e); for (o = 0; o < i.length; o++)n = i[o], t.indexOf(n) >= 0 || (r[n] = e[n]); return r
    }(e, t); if (Object.getOwnPropertySymbols) {
      const i = Object.getOwnPropertySymbols(e); for (o = 0; o < i.length; o++)n = i[o], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
    } return r
  } function f(e) {
    if (void 0 === e) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called'); return e
  } function _(e, t) {
    return !t || 'object' !== typeof t && 'function' !== typeof t ? f(e) : t
  } function v(e) {
    const t = g(); return function() {
      let n; const o = l(e); if (t) {
        const r = l(this).constructor; n = Reflect.construct(o, arguments, r)
      } else n = o.apply(this, arguments); return _(this, n)
    }
  } function y(e, t) {
    return M(e) || function(e, t) {
      if ('undefined' === typeof Symbol || !(Symbol.iterator in Object(e))) return; const n = []; let o = !0; let r = !1; let i = void 0; try {
        for (var s, a = e[Symbol.iterator](); !(o = (s = a.next()).done) && (n.push(s.value), !t || n.length !== t); o = !0);
      } catch (u) {
        r = !0, i = u
      } finally {
        try {
          o || null == a.return || a.return()
        } finally {
          if (r) throw i
        }
      } return n
    }(e, t) || E(e, t) || D()
  } function I(e) {
    return function(e) {
      if (Array.isArray(e)) return T(e)
    }(e) || C(e) || E(e) || function() {
      throw new TypeError('Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.')
    }()
  } function M(e) {
    if (Array.isArray(e)) return e
  } function C(e) {
    if ('undefined' !== typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
  } function E(e, t) {
    if (e) {
      if ('string' === typeof e) return T(e, t); let n = Object.prototype.toString.call(e).slice(8, -1); return 'Object' === n && e.constructor && (n = e.constructor.name), 'Map' === n || 'Set' === n ? Array.from(e) : 'Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? T(e, t) : void 0
    }
  } function T(e, t) {
    (null == t || t > e.length) && (t = e.length); for (var n = 0, o = new Array(t); n < t; n++)o[n] = e[n]; return o
  } function D() {
    throw new TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.')
  } function S(e, t) {
    let n; if ('undefined' === typeof Symbol || null == e[Symbol.iterator]) {
      if (Array.isArray(e) || (n = E(e)) || t && e && 'number' === typeof e.length) {
        n && (e = n); let o = 0; const r = function() {}; return { s: r, n: function() {
          return o >= e.length ? { done: !0 } : { done: !1, value: e[o++] }
        }, e: function(e) {
          throw e
        }, f: r }
      } throw new TypeError('Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.')
    } let i; let s = !0; let a = !1; return { s: function() {
      n = e[Symbol.iterator]()
    }, n: function() {
      const e = n.next(); return s = e.done, e
    }, e: function(e) {
      a = !0, i = e
    }, f: function() {
      try {
        s || null == n.return || n.return()
      } finally {
        if (a) throw i
      }
    } }
  } const k = function() {
    function e() {
      o(this, e), this.cache = [], this.options = null
    } return i(e, [{ key: 'use', value: function(e) {
      if ('function' !== typeof e) throw 'middleware must be a function'; return this.cache.push(e), this
    } }, { key: 'next', value: function(e) {
      if (this.middlewares && this.middlewares.length > 0) return this.middlewares.shift().call(this, this.options, this.next.bind(this))
    } }, { key: 'run', value: function(e) {
      return this.middlewares = this.cache.map((function(e) {
        return e
      })), this.options = e, this.next()
    } }]), e
  }(); const A = 'undefined' !== typeof globalThis ? globalThis : 'undefined' !== typeof window ? window : 'undefined' !== typeof global ? global : 'undefined' !== typeof self ? self : {}; function O(e, t) {
    return e(t = { exports: {} }, t.exports), t.exports
  } let R; let N; let L; let w; const P = O((function(e, t) {
    let n; let o; let r; let i; let s; let a; let u; let c; let l; let p; let g; let h; let d; let m; let f; let _; let v; let y; e.exports = (n = 'function' === typeof Promise, o = 'object' === typeof self ? self : A, r = 'undefined' !== typeof Symbol, i = 'undefined' !== typeof Map, s = 'undefined' !== typeof Set, a = 'undefined' !== typeof WeakMap, u = 'undefined' !== typeof WeakSet, c = 'undefined' !== typeof DataView, l = r && void 0 !== Symbol.iterator, p = r && void 0 !== Symbol.toStringTag, g = s && 'function' === typeof Set.prototype.entries, h = i && 'function' === typeof Map.prototype.entries, d = g && Object.getPrototypeOf((new Set).entries()), m = h && Object.getPrototypeOf((new Map).entries()), f = l && 'function' === typeof Array.prototype[Symbol.iterator], _ = f && Object.getPrototypeOf([][Symbol.iterator]()), v = l && 'function' === typeof String.prototype[Symbol.iterator], y = v && Object.getPrototypeOf(''[Symbol.iterator]()), function(e) {
      const t = typeof e; if ('object' !== t) return t; if (null === e) return 'null'; if (e === o) return 'global'; if (Array.isArray(e) && (!1 === p || !(Symbol.toStringTag in e))) return 'Array'; if ('object' === typeof window && null !== window) {
        if ('object' === typeof window.location && e === window.location) return 'Location'; if ('object' === typeof window.document && e === window.document) return 'Document'; if ('object' === typeof window.navigator) {
          if ('object' === typeof window.navigator.mimeTypes && e === window.navigator.mimeTypes) return 'MimeTypeArray'; if ('object' === typeof window.navigator.plugins && e === window.navigator.plugins) return 'PluginArray'
        } if (('function' === typeof window.HTMLElement || 'object' === typeof window.HTMLElement) && e instanceof window.HTMLElement) {
          if ('BLOCKQUOTE' === e.tagName) return 'HTMLQuoteElement'; if ('TD' === e.tagName) return 'HTMLTableDataCellElement'; if ('TH' === e.tagName) return 'HTMLTableHeaderCellElement'
        }
      } const r = p && e[Symbol.toStringTag]; if ('string' === typeof r) return r; const l = Object.getPrototypeOf(e); return l === RegExp.prototype ? 'RegExp' : l === Date.prototype ? 'Date' : n && l === Promise.prototype ? 'Promise' : s && l === Set.prototype ? 'Set' : i && l === Map.prototype ? 'Map' : u && l === WeakSet.prototype ? 'WeakSet' : a && l === WeakMap.prototype ? 'WeakMap' : c && l === DataView.prototype ? 'DataView' : i && l === m ? 'Map Iterator' : s && l === d ? 'Set Iterator' : f && l === _ ? 'Array Iterator' : v && l === y ? 'String Iterator' : null === l ? 'Object' : Object.prototype.toString.call(e).slice(8, -1)
    })
  })); const G = 'undefined' !== typeof window; const b = 'undefined' !== typeof wx && 'function' === typeof wx.getSystemInfoSync; const U = 'undefined' !== typeof qq && 'function' === typeof qq.getSystemInfoSync; const q = 'undefined' !== typeof tt && 'function' === typeof tt.getSystemInfoSync; const F = 'undefined' !== typeof swan && 'function' === typeof swan.getSystemInfoSync; const x = 'undefined' !== typeof my && 'function' === typeof my.getSystemInfoSync; const V = b || U || q || F || x; const K = U ? qq : q ? tt : F ? swan : x ? my : b ? wx : {}; const H = (R = 'web', oe ? R = 'wechat' : U ? R = 'qqmp' : q ? R = 'ttmp' : F ? R = 'baidump' : x ? R = 'alipaymp' : b && (R = 'wxmp'), R); const B = G && window.navigator && window.navigator.userAgent || ''; const j = /AppleWebKit\/([\d.]+)/i.exec(B); const $ = (j && parseFloat(j.pop()), /iPad/i.test(B)); const Y = /iPhone/i.test(B) && !$; const z = /iPod/i.test(B); const W = Y || $ || z; const J = ((N = B.match(/OS (\d+)_/i)) && N[1] && N[1], /Android/i.test(B)); const X = function() {
    const e = B.match(/Android (\d+)(?:\.(\d+))?(?:\.(\d+))*/i); if (!e) return null; const t = e[1] && parseFloat(e[1]); const n = e[2] && parseFloat(e[2]); return t && n ? parseFloat(e[1] + '.' + e[2]) : t || null
  }(); const Q = (J && /webkit/i.test(B), /Firefox/i.test(B), /Edge/i.test(B)); const Z = !Q && /Chrome/i.test(B); const ee = (function() {
    const e = B.match(/Chrome\/(\d+)/); e && e[1] && parseFloat(e[1])
  }(), /MSIE/.test(B)); const te = (/MSIE\s8\.0/.test(B), function() {
    const e = /MSIE\s(\d+)\.\d/.exec(B); let t = e && parseFloat(e[1]); return !t && /Trident\/7.0/i.test(B) && /rv:11.0/.test(B) && (t = 11), t
  }()); const ne = (/Safari/i.test(B), /TBS\/\d+/i.test(B)); var oe = (function() {
    const e = B.match(/TBS\/(\d+)/i); if (e && e[1])e[1]
  }(), !ne && /MQQBrowser\/\d+/i.test(B), !ne && / QQBrowser\/\d+/i.test(B), /(micromessenger|webbrowser)/i.test(B)); const re = /Windows/i.test(B); const ie = /MAC OS X/i.test(B); const se = (/MicroMessenger/i.test(B), 'undefined' !== typeof global ? global : 'undefined' !== typeof self ? self : 'undefined' !== typeof window ? window : {}); L = 'undefined' !== typeof console ? console : void 0 !== se && se.console ? se.console : 'undefined' !== typeof window && window.console ? window.console : {}; for (var ae = function() {}, ue = ['assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error', 'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log', 'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd', 'timeStamp', 'trace', 'warn'], ce = ue.length; ce--;)w = ue[ce], console[w] || (L[w] = ae); L.methods = ue; const le = L; let pe = 0; const ge = new Map; function he() {
    const e = new Date; return 'TIM ' + e.toLocaleTimeString('en-US', { hour12: !1 }) + '.' + function(e) {
      let t; switch (e.toString().length) {
        case 1: t = '00' + e; break; case 2: t = '0' + e; break; default: t = e
      } return t
    }(e.getMilliseconds()) + ':'
  } const de = { arguments2String: function(e) {
    let t; if (1 === e.length)t = he() + e[0]; else {
      t = he(); for (let n = 0, o = e.length; n < o; n++)Ce(e[n]) ? Te(e[n]) ? t += Re(e[n]) : t += JSON.stringify(e[n]) : t += e[n], t += ' '
    } return t
  }, debug: function() {
    if (pe <= -1) {
      const e = this.arguments2String(arguments); le.debug(e)
    }
  }, log: function() {
    if (pe <= 0) {
      const e = this.arguments2String(arguments); le.log(e)
    }
  }, info: function() {
    if (pe <= 1) {
      const e = this.arguments2String(arguments); le.info(e)
    }
  }, warn: function() {
    if (pe <= 2) {
      const e = this.arguments2String(arguments); le.warn(e)
    }
  }, error: function() {
    if (pe <= 3) {
      const e = this.arguments2String(arguments); le.error(e)
    }
  }, time: function(e) {
    ge.set(e, Ae.now())
  }, timeEnd: function(e) {
    if (ge.has(e)) {
      const t = Ae.now() - ge.get(e); return ge.delete(e), t
    } return le.warn('未找到对应label: '.concat(e, ', 请在调用 logger.timeEnd 前，调用 logger.time')), 0
  }, setLevel: function(e) {
    e < 4 && le.log(he() + 'set level from ' + pe + ' to ' + e), pe = e
  } }; const me = function(e) {
    return 'file' === De(e)
  }; const fe = function(e) {
    return null !== e && ('number' === typeof e && !isNaN(e - 0) || 'object' === n(e) && e.constructor === Number)
  }; const _e = function(e) {
    return 'string' === typeof e
  }; const ve = function(e) {
    return null !== e && 'object' === n(e)
  }; const ye = function(e) {
    if ('object' !== n(e) || null === e) return !1; const t = Object.getPrototypeOf(e); if (null === t) return !0; for (var o = t; null !== Object.getPrototypeOf(o);)o = Object.getPrototypeOf(o); return t === o
  }; const Ie = function(e) {
    return 'function' === typeof Array.isArray ? Array.isArray(e) : 'array' === De(e)
  }; const Me = function(e) {
    return void 0 === e
  }; var Ce = function(e) {
    return Ie(e) || ve(e)
  }; const Ee = function(e) {
    return 'function' === typeof e
  }; var Te = function(e) {
    return e instanceof Error
  }; var De = function(e) {
    return Object.prototype.toString.call(e).match(/^\[object (.*)\]$/)[1].toLowerCase()
  }; const Se = function(e) {
    if ('string' !== typeof e) return !1; const t = e[0]; return !/[^a-zA-Z0-9]/.test(t)
  }; let ke = 0; Date.now || (Date.now = function() {
    return (new Date).getTime()
  }); var Ae = { now: function() {
    0 === ke && (ke = Date.now() - 1); const e = Date.now() - ke; return e > 4294967295 ? (ke += 4294967295, Date.now() - ke) : e
  }, utc: function() {
    return Math.round(Date.now() / 1e3)
  } }; const Oe = function e(t, n, o, r) {
    if (!Ce(t) || !Ce(n)) return 0; for (var i, s = 0, a = Object.keys(n), u = 0, c = a.length; u < c; u++) {
      if (i = a[u], !(Me(n[i]) || o && o.includes(i))) {
        if (Ce(t[i]) && Ce(n[i]))s += e(t[i], n[i], o, r); else {
          if (r && r.includes(n[i])) continue; t[i] !== n[i] && (t[i] = n[i], s += 1)
        }
      }
    } return s
  }; var Re = function(e) {
    return JSON.stringify(e, ['message', 'code'])
  }; const Ne = function() {
    const e = new Date; const t = e.toISOString(); const n = e.getTimezoneOffset() / 60; let o = ''; return o = n < 0 ? n > -10 ? '+0' + Math.abs(100 * n) : '+' + Math.abs(100 * n) : n >= 10 ? '-' + 100 * n : '-0' + 100 * n, t.replace('Z', o)
  }; const Le = function(e) {
    if (0 === e.length) return 0; for (var t = 0, n = 0, o = 'undefined' !== typeof document && void 0 !== document.characterSet ? document.characterSet : 'UTF-8'; void 0 !== e[t];)n += e[t++].charCodeAt[t] <= 255 ? 1 : !1 === o ? 3 : 2; return n
  }; const we = function(e) {
    const t = e || 99999999; return Math.round(Math.random() * t)
  }; const Pe = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'; const Ge = Pe.length; const be = function(e, t) {
    for (const n in e) if (e[n] === t) return !0; return !1
  }; const Ue = {}; const qe = function() {
    if (V) return 'https:'; let e = window.location.protocol; return ['http:', 'https:'].indexOf(e) < 0 && (e = 'http:'), e
  }; const Fe = function(e) {
    return -1 === e.indexOf('http://') || -1 === e.indexOf('https://') ? 'https://' + e : e.replace(/https|http/, 'https')
  }; function xe(e, t) {
    Ie(e) && Ie(t) ? t.forEach((function(t) {
      const n = t.key; const o = t.value; const r = e.find((function(e) {
        return e.key === n
      })); r ? r.value = o : e.push({ key: n, value: o })
    })) : de.warn('updateCustomField target 或 source 不是数组，忽略此次更新。')
  } const Ve = function(e) {
    return e === t.GRP_WORK
  }; const Ke = function(e) {
    return e === t.GRP_PUBLIC
  }; const He = function(e) {
    return e === t.GRP_MEETING
  }; const Be = function(e) {
    return e === t.GRP_AVCHATROOM
  }; const je = function(e) {
    return _e(e) && e === t.CONV_SYSTEM
  }; function $e(e, t) {
    const n = {}; return Object.keys(e).forEach((function(o) {
      n[o] = t(e[o], o)
    })), n
  } function Ye() {
    function e() {
      return (65536 * (1 + Math.random()) | 0).toString(16).substring(1)
    } return ''.concat(e() + e()).concat(e()).concat(e()).concat(e()).concat(e()).concat(e()).concat(e())
  } function ze(e) {
    const t = e.originUrl; const n = void 0 === t ? void 0 : t; const o = e.originWidth; const r = e.originHeight; const i = e.min; const s = void 0 === i ? 198 : i; const a = parseInt(o); const u = parseInt(r); const c = { url: void 0, width: 0, height: 0 }; return (a <= u ? a : u) <= s ? (c.url = n, c.width = a, c.height = u) : (u <= a ? (c.width = Math.ceil(a * s / u), c.height = s) : (c.width = s, c.height = Math.ceil(u * s / a)), c.url = ''.concat(n, 198 === s ? '?imageView2/3/w/198/h/198' : '?imageView2/3/w/720/h/720')), Me(n) ? m(c, ['url']) : c
  } function We(e) {
    const t = e[2]; e[2] = e[1], e[1] = t; for (let n = 0; n < e.length; n++)e[n].setSizeType(n + 1), e[n].setType(n)
  } const Je = Object.prototype.hasOwnProperty; function Xe(e) {
    if (null == e) return !0; if ('boolean' === typeof e) return !1; if ('number' === typeof e) return 0 === e; if ('string' === typeof e) return 0 === e.length; if ('function' === typeof e) return 0 === e.length; if (Array.isArray(e)) return 0 === e.length; if (e instanceof Error) return '' === e.message; if (ye(e)) {
      for (const t in e) if (Je.call(e, t)) return !1; return !0
    } return !('map' !== De(e) && !function(e) {
      return 'set' === De(e)
    }(e) && !me(e)) && 0 === e.size
  } function Qe(e, t, n) {
    if (void 0 === t) return !0; let o = !0; if ('object' === P(t).toLowerCase()) {
      Object.keys(t).forEach((function(r) {
        const i = 1 === e.length ? e[0][r] : void 0; o = !!Ze(i, t[r], n, r) && o
      }))
    } else if ('array' === P(t).toLowerCase()) for (let r = 0; r < t.length; r++)o = !!Ze(e[r], t[r], n, t[r].name) && o; if (o) return o; throw new Error('Params validate failed.')
  } function Ze(e, t, n, o) {
    if (void 0 === t) return !0; let r = !0; return t.required && Xe(e) && (le.error('TIM ['.concat(n, '] Missing required params: "').concat(o, '".')), r = !1), Xe(e) || P(e).toLowerCase() === t.type.toLowerCase() || (le.error('TIM ['.concat(n, '] Invalid params: type check failed for "').concat(o, '".Expected ').concat(t.type, '.')), r = !1), t.validator && !t.validator(e) && (le.error('TIM ['.concat(n, '] Invalid params: custom validator check failed for params.')), r = !1), r
  } const et = { SUCCESS: 'JoinedSuccess', WAIT_APPROVAL: 'WaitAdminApproval' }; const nt = { SUCCESS: 0 }; const ot = { IS_LOGIN: 1, IS_NOT_LOGIN: 0 }; const rt = { UNSEND: 'unSend', SUCCESS: 'success', FAIL: 'fail' }; const it = { NOT_START: 'notStart', PENDING: 'pengding', RESOLVED: 'resolved', REJECTED: 'rejected' }; const st = function() {
    function e(n) {
      o(this, e), this.type = t.MSG_TEXT, this.content = { text: n.text || '' }
    } return i(e, [{ key: 'setText', value: function(e) {
      this.content.text = e
    } }, { key: 'sendable', value: function() {
      return 0 !== this.content.text.length
    } }]), e
  }(); const at = { JSON: { TYPE: { C2C: { NOTICE: 1, COMMON: 9, EVENT: 10 }, GROUP: { COMMON: 3, TIP: 4, SYSTEM: 5, TIP2: 6 }, FRIEND: { NOTICE: 7 }, PROFILE: { NOTICE: 8 } }, SUBTYPE: { C2C: { COMMON: 0, READED: 92, KICKEDOUT: 96 }, GROUP: { COMMON: 0, LOVEMESSAGE: 1, TIP: 2, REDPACKET: 3 } }, OPTIONS: { GROUP: { JOIN: 1, QUIT: 2, KICK: 3, SET_ADMIN: 4, CANCEL_ADMIN: 5, MODIFY_GROUP_INFO: 6, MODIFY_MEMBER_INFO: 7 } } }, PROTOBUF: {}, IMAGE_TYPES: { ORIGIN: 1, LARGE: 2, SMALL: 3 }, IMAGE_FORMAT: { JPG: 1, JPEG: 1, GIF: 2, PNG: 3, BMP: 4, UNKNOWN: 255 } }; const ut = 1; const ct = 2; const lt = 3; const pt = 4; const gt = 5; const ht = 7; const dt = 8; const mt = 9; const ft = 10; const _t = 15; const vt = 255; const yt = 2; const It = 0; const Mt = 1; const Ct = { NICK: 'Tag_Profile_IM_Nick', GENDER: 'Tag_Profile_IM_Gender', BIRTHDAY: 'Tag_Profile_IM_BirthDay', LOCATION: 'Tag_Profile_IM_Location', SELFSIGNATURE: 'Tag_Profile_IM_SelfSignature', ALLOWTYPE: 'Tag_Profile_IM_AllowType', LANGUAGE: 'Tag_Profile_IM_Language', AVATAR: 'Tag_Profile_IM_Image', MESSAGESETTINGS: 'Tag_Profile_IM_MsgSettings', ADMINFORBIDTYPE: 'Tag_Profile_IM_AdminForbidType', LEVEL: 'Tag_Profile_IM_Level', ROLE: 'Tag_Profile_IM_Role' }; const Et = { UNKNOWN: 'Gender_Type_Unknown', FEMALE: 'Gender_Type_Female', MALE: 'Gender_Type_Male' }; const Tt = { NONE: 'AdminForbid_Type_None', SEND_OUT: 'AdminForbid_Type_SendOut' }; const Dt = { NEED_CONFIRM: 'AllowType_Type_NeedConfirm', ALLOW_ANY: 'AllowType_Type_AllowAny', DENY_ANY: 'AllowType_Type_DenyAny' }; const St = function() {
    function e(n) {
      o(this, e), this._imageMemoryURL = '', this._file = n.file, V ? this.createImageDataASURLInWXMiniApp(n.file) : this.createImageDataASURLInWeb(n.file), this._initImageInfoModel(), this.type = t.MSG_IMAGE, this._percent = 0, this.content = { imageFormat: n.imageFormat || at.IMAGE_FORMAT.UNKNOWN, uuid: n.uuid, imageInfoArray: [] }, this.initImageInfoArray(n.imageInfoArray), this._defaultImage = 'http://imgcache.qq.com/open/qcloud/video/act/webim-images/default.jpg', this._autoFixUrl()
    } return i(e, [{ key: '_initImageInfoModel', value: function() {
      const e = this; this._ImageInfoModel = function(t) {
        this.instanceID = we(9999999), this.sizeType = t.type || 0, this.type = 0, this.size = t.size || 0, this.width = t.width || 0, this.height = t.height || 0, this.imageUrl = t.url || '', this.url = t.url || e._imageMemoryURL || e._defaultImage
      }, this._ImageInfoModel.prototype = { setSizeType: function(e) {
        this.sizeType = e
      }, setType: function(e) {
        this.type = e
      }, setImageUrl: function(e) {
        e && (this.imageUrl = e)
      }, getImageUrl: function() {
        return this.imageUrl
      } }
    } }, { key: 'initImageInfoArray', value: function(e) {
      for (let t = 0, n = null, o = null; t <= 2;)o = Me(e) || Me(e[t]) ? { type: 0, size: 0, width: 0, height: 0, url: '' } : e[t], (n = new this._ImageInfoModel(o)).setSizeType(t + 1), n.setType(t), this.addImageInfo(n), t++; this.updateAccessSideImageInfoArray()
    } }, { key: 'updateImageInfoArray', value: function(e) {
      for (var t, n = this.content.imageInfoArray.length, o = 0; o < n; o++)t = this.content.imageInfoArray[o], e[o].size && (t.size = e[o].size), e[o].url && t.setImageUrl(e[o].url), e[o].width && (t.width = e[o].width), e[o].height && (t.height = e[o].height)
    } }, { key: '_autoFixUrl', value: function() {
      for (let e = this.content.imageInfoArray.length, t = '', n = '', o = ['http', 'https'], r = null, i = 0; i < e; i++) this.content.imageInfoArray[i].url && '' !== (r = this.content.imageInfoArray[i]).imageUrl && (n = r.imageUrl.slice(0, r.imageUrl.indexOf('://') + 1), t = r.imageUrl.slice(r.imageUrl.indexOf('://') + 1), o.indexOf(n) < 0 && (n = 'https:'), this.content.imageInfoArray[i].setImageUrl([n, t].join('')))
    } }, { key: 'updatePercent', value: function(e) {
      this._percent = e, this._percent > 1 && (this._percent = 1)
    } }, { key: 'updateImageFormat', value: function(e) {
      this.content.imageFormat = at.IMAGE_FORMAT[e.toUpperCase()] || at.IMAGE_FORMAT.UNKNOWN
    } }, { key: 'createImageDataASURLInWeb', value: function(e) {
      void 0 !== e && e.files.length > 0 && (this._imageMemoryURL = window.URL.createObjectURL(e.files[0]))
    } }, { key: 'createImageDataASURLInWXMiniApp', value: function(e) {
      e && e.url && (this._imageMemoryURL = e.url)
    } }, { key: 'replaceImageInfo', value: function(e, t) {
      this.content.imageInfoArray[t] instanceof this._ImageInfoModel || (this.content.imageInfoArray[t] = e)
    } }, { key: 'addImageInfo', value: function(e) {
      this.content.imageInfoArray.length >= 3 || this.content.imageInfoArray.push(e)
    } }, { key: 'updateAccessSideImageInfoArray', value: function() {
      const e = this.content.imageInfoArray; const t = e[0]; const n = t.width; const o = void 0 === n ? 0 : n; const r = t.height; const i = void 0 === r ? 0 : r; 0 !== o && 0 !== i && (We(e), Object.assign(e[2], ze({ originWidth: o, originHeight: i, min: 720 })))
    } }, { key: 'sendable', value: function() {
      return 0 !== this.content.imageInfoArray.length && ('' !== this.content.imageInfoArray[0].imageUrl && 0 !== this.content.imageInfoArray[0].size)
    } }]), e
  }(); const kt = function() {
    function e(n) {
      o(this, e), this.type = t.MSG_FACE, this.content = n || null
    } return i(e, [{ key: 'sendable', value: function() {
      return null !== this.content
    } }]), e
  }(); const At = function() {
    function e(n) {
      o(this, e), this.type = t.MSG_AUDIO, this._percent = 0, this.content = { downloadFlag: 2, second: n.second, size: n.size, url: n.url, remoteAudioUrl: '', uuid: n.uuid }
    } return i(e, [{ key: 'updatePercent', value: function(e) {
      this._percent = e, this._percent > 1 && (this._percent = 1)
    } }, { key: 'updateAudioUrl', value: function(e) {
      this.content.remoteAudioUrl = e
    } }, { key: 'sendable', value: function() {
      return '' !== this.content.remoteAudioUrl
    } }]), e
  }(); const Ot = { from: !0, groupID: !0, groupName: !0, to: !0 }; const Rt = function() {
    function e(n) {
      o(this, e), this.type = t.MSG_GRP_TIP, this.content = {}, this._initContent(n)
    } return i(e, [{ key: '_initContent', value: function(e) {
      const t = this; Object.keys(e).forEach((function(n) {
        switch (n) {
          case 'remarkInfo': break; case 'groupProfile': t.content.groupProfile = {}, t._initGroupProfile(e[n]); break; case 'operatorInfo': case 'memberInfoList': break; case 'msgMemberInfo': t.content.memberList = e[n], Object.defineProperty(t.content, 'msgMemberInfo', { get: function() {
            return de.warn('!!! 禁言的群提示消息中的 payload.msgMemberInfo 属性即将废弃，请使用 payload.memberList 属性替代。 \n', 'msgMemberInfo 中的 shutupTime 属性对应更改为 memberList 中的 muteTime 属性，表示禁言时长。 \n', '参考：群提示消息 https://imsdk-1252463788.file.myqcloud.com/IM_DOC/Web/Message.html#.GroupTipPayload'), t.content.memberList.map((function(e) {
              return { userID: e.userID, shutupTime: e.muteTime }
            }))
          } }); break; case 'onlineMemberInfo': break; case 'memberNum': t.content[n] = e[n], t.content.memberCount = e[n]; break; default: t.content[n] = e[n]
        }
      })), this.content.userIDList || (this.content.userIDList = [this.content.operatorID])
    } }, { key: '_initGroupProfile', value: function(e) {
      for (let t = Object.keys(e), n = 0; n < t.length; n++) {
        const o = t[n]; Ot[o] && (this.content.groupProfile[o] = e[o])
      }
    } }]), e
  }(); const Nt = { from: !0, groupID: !0, name: !0, to: !0 }; const Lt = function() {
    function e(n) {
      o(this, e), this.type = t.MSG_GRP_SYS_NOTICE, this.content = {}, this._initContent(n)
    } return i(e, [{ key: '_initContent', value: function(e) {
      const t = this; Object.keys(e).forEach((function(n) {
        switch (n) {
          case 'memberInfoList': break; case 'remarkInfo': t.content.handleMessage = e[n]; break; case 'groupProfile': t.content.groupProfile = {}, t._initGroupProfile(e[n]); break; default: t.content[n] = e[n]
        }
      }))
    } }, { key: '_initGroupProfile', value: function(e) {
      for (let t = Object.keys(e), n = 0; n < t.length; n++) {
        const o = t[n]; Nt[o] && (this.content.groupProfile[o] = e[o])
      }
    } }]), e
  }(); const wt = 'https://cloud.tencent.com/document/product/'; const Pt = '您可以在即时通信 IM 控制台的【开发辅助工具(https://console.cloud.tencent.com/im-detail/tool-usersig)】页面校验 UserSig。'; const Gt = 'UserSig 非法，请使用官网提供的 API 重新生成 UserSig('.concat(wt, '269/32688)。'); const bt = { 70001: 'UserSig 已过期，请重新生成。建议 UserSig 有效期设置不小于24小时。', 70002: 'UserSig 长度为0，请检查传入的 UserSig 是否正确。', 70003: Gt, 70005: Gt, 70009: 'UserSig 验证失败，可能因为生成 UserSig 时混用了其他 SDKAppID 的私钥或密钥导致，请使用对应 SDKAppID 下的私钥或密钥重新生成 UserSig('.concat(wt, '269/32688)。'), 70013: '请求中的 UserID 与生成 UserSig 时使用的 UserID 不匹配。'.concat(Pt), 70014: '请求中的 SDKAppID 与生成 UserSig 时使用的 SDKAppID 不匹配。'.concat(Pt), 70016: '密钥不存在，UserSig 验证失败，请在即时通信 IM 控制台获取密钥('.concat(wt, '269/32578#.E8.8E.B7.E5.8F.96.E5.AF.86.E9.92.A5)。'), 70020: 'SDKAppID 未找到，请在即时通信 IM 控制台确认应用信息。', 70050: 'UserSig 验证次数过于频繁。请检查 UserSig 是否正确，并于1分钟后重新验证。'.concat(Pt), 70051: '帐号被拉入黑名单。', 70052: 'UserSig 已经失效，请重新生成，再次尝试。', 70107: '因安全原因被限制登录，请不要频繁登录。', 70169: '请求的用户帐号不存在。', 70114: ''.concat('服务端内部超时，请稍后重试。'), 70202: ''.concat('服务端内部超时，请稍后重试。'), 70206: '请求中批量数量不合法。', 70402: '参数非法，请检查必填字段是否填充，或者字段的填充是否满足协议要求。', 70403: '请求失败，需要 App 管理员权限。', 70398: '帐号数超限。如需创建多于100个帐号，请将应用升级为专业版，具体操作指引请参见购买指引('.concat(wt, '269/32458)。'), 70500: ''.concat('服务端内部错误，请重试。'), 71e3: '删除帐号失败。仅支持删除体验版帐号，您当前应用为专业版，暂不支持帐号删除。', 20001: '请求包非法。', 20002: 'UserSig 或 A2 失效。', 20003: '消息发送方或接收方 UserID 无效或不存在，请检查 UserID 是否已导入即时通信 IM。', 20004: '网络异常，请重试。', 20005: ''.concat('服务端内部错误，请重试。'), 20006: '触发发送'.concat('单聊消息', '之前回调，App 后台返回禁止下发该消息。'), 20007: '发送'.concat('单聊消息', '，被对方拉黑，禁止发送。消息发送状态默认展示为失败，您可以登录控制台修改该场景下的消息发送状态展示结果，具体操作请参见消息保留设置(').concat(wt, '269/38656)。'), 20009: '消息发送双方互相不是好友，禁止发送（配置'.concat('单聊消息', '校验好友关系才会出现）。'), 20010: '发送'.concat('单聊消息', '，自己不是对方的好友（单向关系），禁止发送。'), 20011: '发送'.concat('单聊消息', '，对方不是自己的好友（单向关系），禁止发送。'), 20012: '发送方被禁言，该条消息被禁止发送。', 20016: '消息撤回超过了时间限制（默认2分钟）。', 20018: '删除漫游内部错误。', 90001: 'JSON 格式解析失败，请检查请求包是否符合 JSON 规范。', 90002: ''.concat('JSON 格式请求包体', '中 MsgBody 不符合消息格式描述，或者 MsgBody 不是 Array 类型，请参考 TIMMsgElement 对象的定义(').concat(wt, '269/2720#.E6.B6.88.E6.81.AF.E5.85.83.E7.B4.A0-timmsgelement)。'), 90003: ''.concat('JSON 格式请求包体', '中缺少 To_Account 字段或者 To_Account 帐号不存在。'), 90005: ''.concat('JSON 格式请求包体', '中缺少 MsgRandom 字段或者 MsgRandom 字段不是 Integer 类型。'), 90006: ''.concat('JSON 格式请求包体', '中缺少 MsgTimeStamp 字段或者 MsgTimeStamp 字段不是 Integer 类型。'), 90007: ''.concat('JSON 格式请求包体', '中 MsgBody 类型不是 Array 类型，请将其修改为 Array 类型。'), 90008: ''.concat('JSON 格式请求包体', '中缺少 From_Account 字段或者 From_Account 帐号不存在。'), 90009: '请求需要 App 管理员权限。', 90010: ''.concat('JSON 格式请求包体', '不符合消息格式描述，请参考 TIMMsgElement 对象的定义(').concat(wt, '269/2720#.E6.B6.88.E6.81.AF.E5.85.83.E7.B4.A0-timmsgelement)。'), 90011: '批量发消息目标帐号超过500，请减少 To_Account 中目标帐号数量。', 90012: 'To_Account 没有注册或不存在，请确认 To_Account 是否导入即时通信 IM 或者是否拼写错误。', 90026: '消息离线存储时间错误（最多不能超过7天）。', 90031: ''.concat('JSON 格式请求包体', '中 SyncOtherMachine 字段不是 Integer 类型。'), 90044: ''.concat('JSON 格式请求包体', '中 MsgLifeTime 字段不是 Integer 类型。'), 90048: '请求的用户帐号不存在。', 90054: '撤回请求中的 MsgKey 不合法。', 90994: ''.concat('服务端内部错误，请重试。'), 90995: ''.concat('服务端内部错误，请重试。'), 91e3: ''.concat('服务端内部错误，请重试。'), 90992: ''.concat('服务端内部错误，请重试。', '如果所有请求都返回该错误码，且 App 配置了第三方回调，请检查 App 服务端是否正常向即时通信 IM 后台服务端返回回调结果。'), 93e3: 'JSON 数据包超长，消息包体请不要超过8k。', 91101: 'Web 端长轮询被踢（Web 端同时在线实例个数超出限制）。', 10002: ''.concat('服务端内部错误，请重试。'), 10003: '请求中的接口名称错误，请核对接口名称并重试。', 10004: '参数非法，请根据错误描述检查请求是否正确。', 10005: '请求包体中携带的帐号数量过多。', 10006: '操作频率限制，请尝试降低调用的频率。', 10007: '操作权限不足，例如 Work '.concat('群组', '中普通成员尝试执行踢人操作，但只有 App 管理员才有权限。'), 10008: '请求非法，可能是请求中携带的签名信息验证不正确，请再次尝试。', 10009: '该群不允许群主主动退出。', 10010: ''.concat('群组', '不存在，或者曾经存在过，但是目前已经被解散。'), 10011: '解析 JSON 包体失败，请检查包体的格式是否符合 JSON 格式。', 10012: '发起操作的 UserID 非法，请检查发起操作的用户 UserID 是否填写正确。', 10013: '被邀请加入的用户已经是群成员。', 10014: '群已满员，无法将请求中的用户加入'.concat('群组', '，如果是批量加人，可以尝试减少加入用户的数量。'), 10015: '找不到指定 ID 的'.concat('群组', '。'), 10016: 'App 后台通过第三方回调拒绝本次操作。', 10017: '因被禁言而不能发送消息，请检查发送者是否被设置禁言。', 10018: '应答包长度超过最大包长（1MB），请求的内容过多，请尝试减少单次请求的数据量。', 10019: '请求的用户帐号不存在。', 10021: ''.concat('群组', ' ID 已被使用，请选择其他的').concat('群组', ' ID。'), 10023: '发消息的频率超限，请延长两次发消息时间的间隔。', 10024: '此邀请或者申请请求已经被处理。', 10025: ''.concat('群组', ' ID 已被使用，并且操作者为群主，可以直接使用。'), 10026: '该 SDKAppID 请求的命令字已被禁用。', 10030: '请求撤回的消息不存在。', 10031: '消息撤回超过了时间限制（默认2分钟）。', 10032: '请求撤回的消息不支持撤回操作。', 10033: ''.concat('群组', '类型不支持消息撤回操作。'), 10034: '该消息类型不支持删除操作。', 10035: '直播群和在线成员广播大群不支持删除消息。', 10036: '直播群创建数量超过了限制，请参考价格说明('.concat(wt, '269/11673)购买预付费套餐“IM直播群”。'), 10037: '单个用户可创建和加入的'.concat('群组', '数量超过了限制，请参考价格说明(').concat(wt, '269/11673)购买或升级预付费套餐“单人可创建与加入').concat('群组', '数”。'), 10038: '群成员数量超过限制，请参考价格说明('.concat(wt, '269/11673)购买或升级预付费套餐“扩展群人数上限”。'), 10041: '该应用（SDKAppID）已配置不支持群消息撤回。' }; const Ut = function(e) {
    c(n, e); const t = v(n); function n(e) {
      let r; return o(this, n), (r = t.call(this)).code = e.code, r.message = bt[e.code] || e.message, r.data = e.data || {}, r
    } return n
  }(d(Error)); const qt = { NO_SDKAPPID: 2e3, NO_ACCOUNT_TYPE: 2001, NO_IDENTIFIER: 2002, NO_USERSIG: 2003, NO_TINYID: 2022, NO_A2KEY: 2023, USER_NOT_LOGGED_IN: 2024, COS_UNDETECTED: 2040, MESSAGE_SEND_FAIL: 2100, MESSAGE_LIST_CONSTRUCTOR_NEED_OPTIONS: 2103, MESSAGE_SEND_NEED_MESSAGE_INSTANCE: 2105, MESSAGE_SEND_INVALID_CONVERSATION_TYPE: 2106, MESSAGE_FILE_IS_EMPTY: 2108, MESSAGE_ONPROGRESS_FUNCTION_ERROR: 2109, MESSAGE_REVOKE_FAIL: 2110, MESSAGE_IMAGE_SELECT_FILE_FIRST: 2251, MESSAGE_IMAGE_TYPES_LIMIT: 2252, MESSAGE_IMAGE_SIZE_LIMIT: 2253, MESSAGE_AUDIO_UPLOAD_FAIL: 2300, MESSAGE_AUDIO_SIZE_LIMIT: 2301, MESSAGE_VIDEO_UPLOAD_FAIL: 2350, MESSAGE_VIDEO_SIZE_LIMIT: 2351, MESSAGE_VIDEO_TYPES_LIMIT: 2352, MESSAGE_FILE_UPLOAD_FAIL: 2400, MESSAGE_FILE_SELECT_FILE_FIRST: 2401, MESSAGE_FILE_SIZE_LIMIT: 2402, MESSAGE_FILE_URL_IS_EMPTY: 2403, CONVERSATION_NOT_FOUND: 2500, USER_OR_GROUP_NOT_FOUND: 2501, CONVERSATION_UN_RECORDED_TYPE: 2502, ILLEGAL_GROUP_TYPE: 2600, CANNOT_JOIN_WORK: 2601, CANNOT_CHANGE_OWNER_IN_AVCHATROOM: 2620, CANNOT_CHANGE_OWNER_TO_SELF: 2621, CANNOT_DISMISS_Work: 2622, JOIN_GROUP_FAIL: 2660, CANNOT_ADD_MEMBER_IN_AVCHATROOM: 2661, CANNOT_JOIN_NON_AVCHATROOM_WITHOUT_LOGIN: 2662, CANNOT_KICK_MEMBER_IN_AVCHATROOM: 2680, NOT_OWNER: 2681, CANNOT_SET_MEMBER_ROLE_IN_WORK_AND_AVCHATROOM: 2682, INVALID_MEMBER_ROLE: 2683, CANNOT_SET_SELF_MEMBER_ROLE: 2684, CANNOT_MUTE_SELF: 2685, DEL_FRIEND_INVALID_PARAM: 2700, UPDATE_PROFILE_INVALID_PARAM: 2721, UPDATE_PROFILE_NO_KEY: 2722, ADD_BLACKLIST_INVALID_PARAM: 2740, DEL_BLACKLIST_INVALID_PARAM: 2741, CANNOT_ADD_SELF_TO_BLACKLIST: 2742, NETWORK_ERROR: 2800, NETWORK_TIMEOUT: 2801, NETWORK_BASE_OPTIONS_NO_URL: 2802, NETWORK_UNDEFINED_SERVER_NAME: 2803, NETWORK_PACKAGE_UNDEFINED: 2804, NO_NETWORK: 2805, CONVERTOR_IRREGULAR_PARAMS: 2900, NOTICE_RUNLOOP_UNEXPECTED_CONDITION: 2901, NOTICE_RUNLOOP_OFFSET_LOST: 2902, UNCAUGHT_ERROR: 2903, GET_LONGPOLL_ID_FAILED: 2904, INVALID_OPERATION: 2905, SDK_IS_NOT_READY: 2999, LONG_POLL_KICK_OUT: 91101, MESSAGE_A2KEY_EXPIRED: 20002, ACCOUNT_A2KEY_EXPIRED: 70001, LONG_POLL_API_PARAM_ERROR: 90001 }; const Ft = '无 SDKAppID'; const xt = '无 accountType'; const Vt = '无 userID'; const Kt = '无 userSig'; const Ht = '无 tinyID'; const Bt = '无 a2key'; const jt = '用户未登录'; const $t = '未检测到 COS 上传插件'; const Yt = '消息发送失败'; const zt = 'MessageController.constructor() 需要参数 options'; const Wt = '需要 Message 的实例'; const Jt = 'Message.conversationType 只能为 "C2C" 或 "GROUP"'; const Xt = '无法发送空文件'; const Qt = '回调函数运行时遇到错误，请检查接入侧代码'; const Zt = '消息撤回失败'; const en = '请先选择一个图片'; const tn = '只允许上传 jpg png jpeg gif bmp格式的图片'; const nn = '图片大小超过20M，无法发送'; const on = '语音上传失败'; const rn = '语音大小大于20M，无法发送'; const sn = '视频上传失败'; const an = '视频大小超过100M，无法发送'; const un = '只允许上传 mp4 格式的视频'; const cn = '文件上传失败'; const ln = '请先选择一个文件'; const pn = '文件大小超过100M，无法发送 '; const gn = '缺少必要的参数文件 URL'; const hn = '没有找到相应的会话，请检查传入参数'; const dn = '没有找到相应的用户或群组，请检查传入参数'; const mn = '未记录的会话类型'; const fn = '非法的群类型，请检查传入参数'; const _n = '不能加入 Work 类型的群组'; const vn = 'AVChatRoom 类型的群组不能转让群主'; const yn = '不能把群主转让给自己'; const In = '不能解散 Work 类型的群组'; const Mn = '加群失败，请检查传入参数或重试'; const Cn = 'AVChatRoom 类型的群不支持邀请群成员'; const En = '非 AVChatRoom 类型的群组不允许匿名加群，请先登录后再加群'; const Tn = '不能在 AVChatRoom 类型的群组踢人'; const Dn = '你不是群主，只有群主才有权限操作'; const Sn = '不能在 Work / AVChatRoom 类型的群中设置群成员身份'; const kn = '不合法的群成员身份，请检查传入参数'; const An = '不能设置自己的群成员身份，请检查传入参数'; const On = '不能将自己禁言，请检查传入参数'; const Rn = '传入 deleteFriend 接口的参数无效'; const Nn = '传入 updateMyProfile 接口的参数无效'; const Ln = 'updateMyProfile 无标配资料字段或自定义资料字段'; const wn = '传入 addToBlacklist 接口的参数无效'; const Pn = '传入 removeFromBlacklist 接口的参数无效'; const Gn = '不能拉黑自己'; const bn = '网络层初始化错误，缺少 URL 参数'; const Un = '打包错误，未定义的 serverName'; const qn = '未定义的 packageConfig'; const Fn = '未连接到网络'; const xn = '不规范的参数名称'; const Vn = '_syncOffset 丢失'; const Kn = '获取 longpolling id 失败'; const Hn = '无效操作，如调用了未定义或者未实现的方法等'; const Bn = '接口需要 SDK 处于 ready 状态后才能调用'; const jn = ['jpg', 'jpeg', 'gif', 'png', 'bmp']; const $n = ['mp4']; const Yn = function() {
    function e(n) {
      o(this, e); const r = this._check(n); if (r instanceof Ut) throw r; this.type = t.MSG_FILE, this._percent = 0; const i = this._getFileInfo(n); this.content = { downloadFlag: 2, fileUrl: n.url || '', uuid: n.uuid, fileName: i.name || '', fileSize: i.size || 0 }
    } return i(e, [{ key: '_getFileInfo', value: function(e) {
      if (e.fileName && e.fileSize) return { size: e.fileSize, name: e.fileName }; if (V) return {}; const t = e.file.files[0]; return { size: t.size, name: t.name, type: t.type.slice(t.type.lastIndexOf('/') + 1).toLowerCase() }
    } }, { key: 'updatePercent', value: function(e) {
      this._percent = e, this._percent > 1 && (this._percent = 1)
    } }, { key: 'updateFileUrl', value: function(e) {
      this.content.fileUrl = e
    } }, { key: '_check', value: function(e) {
      if (e.size > 104857600) return new Ut({ code: qt.MESSAGE_FILE_SIZE_LIMIT, message: ''.concat(pn, ': ').concat(104857600, ' bytes') })
    } }, { key: 'sendable', value: function() {
      return '' !== this.content.fileUrl && ('' !== this.content.fileName && 0 !== this.content.fileSize)
    } }]), e
  }(); const zn = function() {
    function e(n) {
      o(this, e), this.type = t.MSG_CUSTOM, this.content = { data: n.data || '', description: n.description || '', extension: n.extension || '' }
    } return i(e, [{ key: 'setData', value: function(e) {
      return this.content.data = e, this
    } }, { key: 'setDescription', value: function(e) {
      return this.content.description = e, this
    } }, { key: 'setExtension', value: function(e) {
      return this.content.extension = e, this
    } }, { key: 'sendable', value: function() {
      return 0 !== this.content.data.length || 0 !== this.content.description.length || 0 !== this.content.extension.length
    } }]), e
  }(); const Wn = function() {
    function e(n) {
      o(this, e), this.type = t.MSG_VIDEO, this._percent = 0, this.content = { remoteVideoUrl: n.remoteVideoUrl, videoFormat: n.videoFormat, videoSecond: parseInt(n.videoSecond, 10), videoSize: n.videoSize, videoUrl: n.videoUrl, videoDownloadFlag: 2, videoUUID: n.videoUUID, thumbUUID: n.thumbUUID, thumbFormat: n.thumbFormat, thumbWidth: n.thumbWidth, thumbHeight: n.thumbHeight, thumbSize: n.thumbSize, thumbDownloadFlag: 2, thumbUrl: n.thumbUrl }
    } return i(e, [{ key: 'updatePercent', value: function(e) {
      this._percent = e, this._percent > 1 && (this._percent = 1)
    } }, { key: 'updateVideoUrl', value: function(e) {
      e && (this.content.remoteVideoUrl = e)
    } }, { key: 'sendable', value: function() {
      return '' !== this.content.remoteVideoUrl
    } }]), e
  }(); const Jn = function e(n) {
    o(this, e), this.type = t.MSG_GEO, this.content = n
  }; const Xn = { 1: t.MSG_PRIORITY_HIGH, 2: t.MSG_PRIORITY_NORMAL, 3: t.MSG_PRIORITY_LOW, 4: t.MSG_PRIORITY_LOWEST }; const Qn = function() {
    function e(n) {
      o(this, e), this.ID = '', this.conversationID = n.conversationID || null, this.conversationType = n.conversationType || t.CONV_C2C, this.conversationSubType = n.conversationSubType, this.time = n.time || Math.ceil(Date.now() / 1e3), this.sequence = n.sequence || 0, this.clientSequence = n.clientSequence || n.sequence || 0, this.random = n.random || we(), this.priority = this._computePriority(n.priority), this.nick = '', this.avatar = '', this.isPeerRead = !1, this.nameCard = '', this._elements = [], this.isPlaceMessage = n.isPlaceMessage || 0, this.isRevoked = 2 === n.isPlaceMessage || 8 === n.msgFlagBits, this.geo = {}, this.from = n.from || null, this.to = n.to || null, this.flow = '', this.isSystemMessage = n.isSystemMessage || !1, this.protocol = n.protocol || 'JSON', this.isResend = !1, this.isRead = !1, this.status = n.status || rt.SUCCESS, this._onlineOnlyFlag = !1, this._groupAtInfoList = [], this.atUserList = [], this.reInitialize(n.currentUser), this.extractGroupInfo(n.groupProfile || null), this.handleGroupAtInfo(n)
    } return i(e, [{ key: 'getElements', value: function() {
      return this._elements
    } }, { key: 'extractGroupInfo', value: function(e) {
      if (null !== e) {
        _e(e.fromAccountNick) && (this.nick = e.fromAccountNick), _e(e.fromAccountHeadurl) && (this.avatar = e.fromAccountHeadurl); const t = e.messageFromAccountExtraInformation; ye(t) && _e(t.nameCard) && (this.nameCard = t.nameCard)
      }
    } }, { key: 'handleGroupAtInfo', value: function(e) {
      const n = this; e.payload && e.payload.atUserList && e.payload.atUserList.forEach((function(e) {
        e !== t.MSG_AT_ALL ? (n._groupAtInfoList.push({ groupAtAllFlag: 0, groupAtUserID: e }), n.atUserList.push(e)) : (n._groupAtInfoList.push({ groupAtAllFlag: 1 }), n.atUserList.push(t.MSG_AT_ALL))
      })), Ie(e.groupAtInfo) && e.groupAtInfo.forEach((function(e) {
        1 === e.groupAtAllFlag ? n.atUserList.push(e.groupAtUserID) : 2 === e.groupAtAllFlag && n.atUserList.push(t.MSG_AT_ALL)
      }))
    } }, { key: 'getGroupAtInfoList', value: function() {
      return this._groupAtInfoList
    } }, { key: '_initProxy', value: function() {
      this.payload = this._elements[0].content, this.type = this._elements[0].type
    } }, { key: 'reInitialize', value: function(e) {
      e && (this.status = this.from ? rt.SUCCESS : rt.UNSEND, !this.from && (this.from = e)), this._initFlow(e), this._initielizeSequence(e), this._concactConversationID(e), this.generateMessageID(e)
    } }, { key: 'isSendable', value: function() {
      return 0 !== this._elements.length && ('function' !== typeof this._elements[0].sendable ? (de.warn(''.concat(this._elements[0].type, ' need "boolean : sendable()" method')), !1) : this._elements[0].sendable())
    } }, { key: '_initTo', value: function(e) {
      this.conversationType === t.CONV_GROUP && (this.to = e.groupID)
    } }, { key: '_initielizeSequence', value: function(e) {
      0 === this.clientSequence && e && (this.clientSequence = function(e) {
        if (!e) return de.error('autoincrementIndex(string: key) need key parameter'), !1; if (void 0 === Ue[e]) {
          const t = new Date; let n = '3'.concat(t.getHours()).slice(-2); let o = '0'.concat(t.getMinutes()).slice(-2); let r = '0'.concat(t.getSeconds()).slice(-2); Ue[e] = parseInt([n, o, r, '0001'].join('')), n = null, o = null, r = null, de.warn('utils.autoincrementIndex() create new sequence : '.concat(e, ' = ').concat(Ue[e]))
        } return Ue[e]++
      }(e)), 0 === this.sequence && this.conversationType === t.CONV_C2C && (this.sequence = this.clientSequence)
    } }, { key: 'generateMessageID', value: function(e) {
      const t = e === this.from ? 1 : 0; const n = this.sequence > 0 ? this.sequence : this.clientSequence; this.ID = ''.concat(this.conversationID, '-').concat(n, '-').concat(this.random, '-').concat(t)
    } }, { key: '_initFlow', value: function(e) {
      '' !== e && (e === this.from ? (this.flow = 'out', this.isRead = !0) : this.flow = 'in')
    } }, { key: '_concactConversationID', value: function(e) {
      const n = this.to; let o = ''; const r = this.conversationType; r !== t.CONV_SYSTEM ? (o = r === t.CONV_C2C ? e === this.from ? n : this.from : this.to, this.conversationID = ''.concat(r).concat(o)) : this.conversationID = t.CONV_SYSTEM
    } }, { key: 'isElement', value: function(e) {
      return e instanceof st || e instanceof St || e instanceof kt || e instanceof At || e instanceof Yn || e instanceof Wn || e instanceof Rt || e instanceof Lt || e instanceof zn || e instanceof Jn
    } }, { key: 'setElement', value: function(e) {
      const n = this; if (this.isElement(e)) return this._elements = [e], void this._initProxy(); const o = function(e) {
        switch (e.type) {
          case t.MSG_TEXT: n.setTextElement(e.content); break; case t.MSG_IMAGE: n.setImageElement(e.content); break; case t.MSG_AUDIO: n.setAudioElement(e.content); break; case t.MSG_FILE: n.setFileElement(e.content); break; case t.MSG_VIDEO: n.setVideoElement(e.content); break; case t.MSG_CUSTOM: n.setCustomElement(e.content); break; case t.MSG_GEO: n.setGEOElement(e.content); break; case t.MSG_GRP_TIP: n.setGroupTipElement(e.content); break; case t.MSG_GRP_SYS_NOTICE: n.setGroupSystemNoticeElement(e.content); break; case t.MSG_FACE: n.setFaceElement(e.content); break; default: de.warn(e.type, e.content, 'no operation......')
        }
      }; if (Ie(e)) for (let r = 0; r < e.length; r++)o(e[r]); else o(e); this._initProxy()
    } }, { key: 'setTextElement', value: function(e) {
      const t = 'string' === typeof e ? e : e.text; const n = new st({ text: t }); this._elements.push(n)
    } }, { key: 'setImageElement', value: function(e) {
      const t = new St(e); this._elements.push(t)
    } }, { key: 'setAudioElement', value: function(e) {
      const t = new At(e); this._elements.push(t)
    } }, { key: 'setFileElement', value: function(e) {
      const t = new Yn(e); this._elements.push(t)
    } }, { key: 'setVideoElement', value: function(e) {
      const t = new Wn(e); this._elements.push(t)
    } }, { key: 'setGEOElement', value: function(e) {
      const t = new Jn(e); this._elements.push(t)
    } }, { key: 'setCustomElement', value: function(e) {
      const t = new zn(e); this._elements.push(t)
    } }, { key: 'setGroupTipElement', value: function(e) {
      let n = {}; const o = e.operationType; Xe(e.memberInfoList) || o !== t.GRP_TIP_MBR_JOIN && o !== t.GRP_TIP_MBR_KICKED_OUT ? e.operatorInfo && (n = e.operatorInfo) : n = e.memberInfoList[0]; const r = n; const i = r.nick; const s = r.avatar; _e(i) && (this.nick = i), _e(s) && (this.avatar = s); const a = new Rt(e); this._elements.push(a)
    } }, { key: 'setGroupSystemNoticeElement', value: function(e) {
      const t = new Lt(e); this._elements.push(t)
    } }, { key: 'setFaceElement', value: function(e) {
      const t = new kt(e); this._elements.push(t)
    } }, { key: 'setIsRead', value: function(e) {
      this.isRead = e
    } }, { key: 'setOnlineOnlyFlag', value: function(e) {
      this._onlineOnlyFlag = e
    } }, { key: 'getOnlineOnlyFlag', value: function() {
      return this._onlineOnlyFlag
    } }, { key: '_computePriority', value: function(e) {
      if (Me(e)) return t.MSG_PRIORITY_NORMAL; if (_e(e) && -1 !== Object.values(Xn).indexOf(e)) return e; if (fe(e)) {
        const n = '' + e; if (-1 !== Object.keys(Xn).indexOf(n)) return Xn[n]
      } return t.MSG_PRIORITY_NORMAL
    } }, { key: 'elements', get: function() {
      return de.warn('！！！Message 实例的 elements 属性即将废弃，请尽快修改。使用 type 和 payload 属性处理单条消息，兼容组合消息使用 _elements 属性！！！'), this._elements
    } }]), e
  }(); const Zn = function(e) {
    return !!e && (!!(function(e) {
      return _e(e) && e.slice(0, 3) === t.CONV_C2C
    }(e) || function(e) {
      return _e(e) && e.slice(0, 5) === t.CONV_GROUP
    }(e) || je(e)) || (console.warn('非法的会话 ID:'.concat(e, '。会话 ID 组成方式：C2C + userID（单聊）GROUP + groupID（群聊）@TIM#SYSTEM（系统通知会话）')), !1))
  }; const eo = '请参考 https://imsdk-1252463788.file.myqcloud.com/IM_DOC/Web/SDK.html#'; const to = function(e) {
    return e.param ? ''.concat(e.api, ' ').concat(e.param, ' ').concat(e.desc, '。').concat(eo).concat(e.api) : ''.concat(e.api, ' ').concat(e.desc, '。').concat(eo).concat(e.api)
  }; const no = { type: 'String', required: !0 }; const oo = { type: 'Array', required: !0 }; const ro = { type: 'Object', required: !0 }; const io = { login: { userID: no, userSig: no }, addToBlacklist: { userIDList: oo }, on: [{ name: 'eventName', type: 'String', validator: function(e) {
    return 'string' === typeof e && 0 !== e.length || (console.warn(to({ api: 'on', param: 'eventName', desc: '类型必须为 String，且不能为空' })), !1)
  } }, { name: 'handler', type: 'Function', validator: function(e) {
    return 'function' !== typeof e ? (console.warn(to({ api: 'on', param: 'handler', desc: '参数必须为 Function' })), !1) : ('' === e.name && console.warn('on 接口的 handler 参数推荐使用具名函数。具名函数可以使用 off 接口取消订阅，匿名函数无法取消订阅。'), !0)
  } }], once: [{ name: 'eventName', type: 'String', validator: function(e) {
    return 'string' === typeof e && 0 !== e.length || (console.warn(to({ api: 'once', param: 'eventName', desc: '类型必须为 String，且不能为空' })), !1)
  } }, { name: 'handler', type: 'Function', validator: function(e) {
    return 'function' !== typeof e ? (console.warn(to({ api: 'once', param: 'handler', desc: '参数必须为 Function' })), !1) : ('' === e.name && console.warn('once 接口的 handler 参数推荐使用具名函数。'), !0)
  } }], off: [{ name: 'eventName', type: 'String', validator: function(e) {
    return 'string' === typeof e && 0 !== e.length || (console.warn(to({ api: 'off', param: 'eventName', desc: '类型必须为 String，且不能为空' })), !1)
  } }, { name: 'handler', type: 'Function', validator: function(e) {
    return 'function' !== typeof e ? (console.warn(to({ api: 'off', param: 'handler', desc: '参数必须为 Function' })), !1) : ('' === e.name && console.warn('off 接口无法为匿名函数取消监听事件。'), !0)
  } }], sendMessage: [u({ name: 'message' }, ro)], getMessageList: { conversationID: u(u({}, no), {}, { validator: function(e) {
    return Zn(e)
  } }), nextReqMessageID: { type: 'String' }, count: { type: 'Number', validator: function(e) {
    return !(!Me(e) && !/^[1-9][0-9]*$/.test(e)) || (console.warn(to({ api: 'getMessageList', param: 'count', desc: '必须为正整数' })), !1)
  } } }, setMessageRead: { conversationID: u(u({}, no), {}, { validator: function(e) {
    return Zn(e)
  } }) }, getConversationProfile: [u(u({ name: 'conversationID' }, no), {}, { validator: function(e) {
    return Zn(e)
  } })], deleteConversation: [u(u({ name: 'conversationID' }, no), {}, { validator: function(e) {
    return Zn(e)
  } })], getGroupList: { groupProfileFilter: { type: 'Array' } }, getGroupProfile: { groupID: no, groupCustomFieldFilter: { type: 'Array' }, memberCustomFieldFilter: { type: 'Array' } }, getGroupProfileAdvance: { groupIDList: oo }, createGroup: { name: no }, joinGroup: { groupID: no, type: { type: 'String' }, applyMessage: { type: 'String' } }, quitGroup: [u({ name: 'groupID' }, no)], handleApplication: { message: ro, handleAction: no, handleMessage: { type: 'String' } }, changeGroupOwner: { groupID: no, newOwnerID: no }, updateGroupProfile: { groupID: no, muteAllMembers: { type: 'Boolean' } }, dismissGroup: [u({ name: 'groupID' }, no)], searchGroupByID: [u({ name: 'groupID' }, no)], getGroupMemberList: { groupID: no, offset: { type: 'Number' }, count: { type: 'Number' } }, getGroupMemberProfile: { groupID: no, userIDList: oo, memberCustomFieldFilter: { type: 'Array' } }, addGroupMemeber: { groupID: no, userIDList: oo }, setGroupMemberRole: { groupID: no, userID: no, role: no }, setGroupMemberMuteTime: { groupID: no, userID: no, muteTime: { type: 'Number', validator: function(e) {
    return e >= 0
  } } }, setGroupMemberNameCard: { groupID: no, userID: { type: 'String' }, nameCard: u(u({}, no), {}, { validator: function(e) {
    return !0 !== /^\s+$/.test(e)
  } }) }, setMessageRemindType: { groupID: no, messageRemindType: no }, setGroupMemberCustomField: { groupID: no, userID: { type: 'String' }, memberCustomField: oo }, deleteGroupMember: { groupID: no }, createTextMessage: { to: no, conversationType: no, payload: u(u({}, ro), {}, { validator: function(e) {
    return ye(e) ? _e(e.text) ? 0 !== e.text.length || (console.warn(to({ api: 'createTextMessage', desc: '消息内容不能为空' })), !1) : (console.warn(to({ api: 'createTextMessage', param: 'payload.text', desc: '类型必须为 String' })), !1) : (console.warn(to({ api: 'createTextMessage', param: 'payload', desc: '类型必须为 plain object' })), !1)
  } }) }, createTextAtMessage: { to: no, conversationType: no, payload: u(u({}, ro), {}, { validator: function(e) {
    return ye(e) ? _e(e.text) ? 0 === e.text.length ? (console.warn(to({ api: 'createTextAtMessage', desc: '消息内容不能为空' })), !1) : !(e.atUserList && !Ie(e.atUserList)) || (console.warn(to({ api: 'createTextAtMessage', desc: 'payload.atUserList 类型必须为数组' })), !1) : (console.warn(to({ api: 'createTextAtMessage', param: 'payload.text', desc: '类型必须为 String' })), !1) : (console.warn(to({ api: 'createTextAtMessage', param: 'payload', desc: '类型必须为 plain object' })), !1)
  } }) }, createCustomMessage: { to: no, conversationType: no, payload: u(u({}, ro), {}, { validator: function(e) {
    return ye(e) ? e.data && !_e(e.data) ? (console.warn(to({ api: 'createCustomMessage', param: 'payload.data', desc: '类型必须为 String' })), !1) : e.description && !_e(e.description) ? (console.warn(to({ api: 'createCustomMessage', param: 'payload.description', desc: '类型必须为 String' })), !1) : !(e.extension && !_e(e.extension)) || (console.warn(to({ api: 'createCustomMessage', param: 'payload.extension', desc: '类型必须为 String' })), !1) : (console.warn(to({ api: 'createCustomMessage', param: 'payload', desc: '类型必须为 plain object' })), !1)
  } }) }, createImageMessage: { to: no, conversationType: no, payload: u(u({}, ro), {}, { validator: function(e) {
    if (!ye(e)) return console.warn(to({ api: 'createImageMessage', param: 'payload', desc: '类型必须为 plain object' })), !1; if (Me(e.file)) return console.warn(to({ api: 'createImageMessage', param: 'payload.file', desc: '不能为 undefined' })), !1; if (G) {
      if (!(e.file instanceof HTMLInputElement || me(e.file))) return console.warn(to({ api: 'createImageMessage', param: 'payload.file', desc: '类型必须是 HTMLInputElement 或 File' })), !1; if (e.file instanceof HTMLInputElement && 0 === e.file.files.length) return console.warn(to({ api: 'createImageMessage', param: 'payload.file', desc: '您没有选择文件，无法发送' })), !1
    } return !0
  }, onProgress: { type: 'Function', required: !1, validator: function(e) {
    return Me(e) && console.warn(to({ api: 'createImageMessage', desc: '没有 onProgress 回调，您将无法获取上传进度' })), !0
  } } }) }, createAudioMessage: { to: no, conversationType: no, payload: u(u({}, ro), {}, { validator: function(e) {
    return !!ye(e) || (console.warn(to({ api: 'createAudioMessage', param: 'payload', desc: '类型必须为 plain object' })), !1)
  } }), onProgress: { type: 'Function', required: !1, validator: function(e) {
    return Me(e) && console.warn(to({ api: 'createAudioMessage', desc: '没有 onProgress 回调，您将无法获取上传进度' })), !0
  } } }, createVideoMessage: { to: no, conversationType: no, payload: u(u({}, ro), {}, { validator: function(e) {
    if (!ye(e)) return console.warn(to({ api: 'createVideoMessage', param: 'payload', desc: '类型必须为 plain object' })), !1; if (Me(e.file)) return console.warn(to({ api: 'createVideoMessage', param: 'payload.file', desc: '不能为 undefined' })), !1; if (G) {
      if (!(e.file instanceof HTMLInputElement || me(e.file))) return console.warn(to({ api: 'createVideoMessage', param: 'payload.file', desc: '类型必须是 HTMLInputElement 或 File' })), !1; if (e.file instanceof HTMLInputElement && 0 === e.file.files.length) return console.warn(to({ api: 'createVideoMessage', param: 'payload.file', desc: '您没有选择文件，无法发送' })), !1
    } return !0
  } }), onProgress: { type: 'Function', required: !1, validator: function(e) {
    return Me(e) && console.warn(to({ api: 'createVideoMessage', desc: '没有 onProgress 回调，您将无法获取上传进度' })), !0
  } } }, createFaceMessage: { to: no, conversationType: no, payload: u(u({}, ro), {}, { validator: function(e) {
    return ye(e) ? fe(e.index) ? !!_e(e.data) || (console.warn(to({ api: 'createFaceMessage', param: 'payload.data', desc: '类型必须为 String' })), !1) : (console.warn(to({ api: 'createFaceMessage', param: 'payload.index', desc: '类型必须为 Number' })), !1) : (console.warn(to({ api: 'createFaceMessage', param: 'payload', desc: '类型必须为 plain object' })), !1)
  } }) }, createFileMessage: { to: no, conversationType: no, payload: u(u({}, ro), {}, { validator: function(e) {
    if (!ye(e)) return console.warn(to({ api: 'createFileMessage', param: 'payload', desc: '类型必须为 plain object' })), !1; if (Me(e.file)) return console.warn(to({ api: 'createFileMessage', param: 'payload.file', desc: '不能为 undefined' })), !1; if (G) {
      if (!(e.file instanceof HTMLInputElement || me(e.file))) return console.warn(to({ api: 'createFileMessage', param: 'payload.file', desc: '类型必须是 HTMLInputElement 或 File' })), !1; if (e.file instanceof HTMLInputElement && 0 === e.file.files.length) return console.warn(to({ api: 'createFileMessage', desc: '您没有选择文件，无法发送' })), !1
    } return !0
  } }), onProgress: { type: 'Function', required: !1, validator: function(e) {
    return Me(e) && console.warn(to({ api: 'createFileMessage', desc: '没有 onProgress 回调，您将无法获取上传进度' })), !0
  } } }, revokeMessage: [u(u({ name: 'message' }, ro), {}, { validator: function(e) {
    return e instanceof Qn ? e.conversationType === t.CONV_SYSTEM ? (console.warn('revokeMessage 不能撤回系统会话消息，只能撤回单聊消息或群消息'), !1) : !0 !== e.isRevoked || (console.warn('revokeMessage 消息已经被撤回，请勿重复操作'), !1) : (console.warn('revokeMessage 参数 message 必须为 Message('.concat(eo, 'Message.html) 实例。')), !1)
  } })], getUserProfile: { userIDList: { type: 'Array', validator: function(e) {
    return Ie(e) ? (0 === e.length && console.warn(to({ api: 'getUserProfile', param: 'userIDList', desc: '不能为空数组' })), !0) : (console.warn(to({ api: 'getUserProfile', param: 'userIDList', desc: '必须为数组' })), !1)
  } } }, updateMyProfile: { profileCustomField: { type: 'Array', validator: function(e) {
    return !!Me(e) || (!!Ie(e) || (console.warn(to({ api: 'updateMyProfile', param: 'profileCustomField', desc: '必须为数组' })), !1))
  } } } }; const so = { login: 'login', logout: 'logout', on: 'on', once: 'once', off: 'off', setLogLevel: 'setLogLevel', registerPlugin: 'registerPlugin', destroy: 'destroy', createTextMessage: 'createTextMessage', createTextAtMessage: 'createTextAtMessage', createImageMessage: 'createImageMessage', createAudioMessage: 'createAudioMessage', createVideoMessage: 'createVideoMessage', createCustomMessage: 'createCustomMessage', createFaceMessage: 'createFaceMessage', createFileMessage: 'createFileMessage', sendMessage: 'sendMessage', resendMessage: 'resendMessage', getMessageList: 'getMessageList', setMessageRead: 'setMessageRead', revokeMessage: 'revokeMessage', getConversationList: 'getConversationList', getConversationProfile: 'getConversationProfile', deleteConversation: 'deleteConversation', getGroupList: 'getGroupList', getGroupProfile: 'getGroupProfile', createGroup: 'createGroup', joinGroup: 'joinGroup', updateGroupProfile: 'updateGroupProfile', quitGroup: 'quitGroup', dismissGroup: 'dismissGroup', changeGroupOwner: 'changeGroupOwner', searchGroupByID: 'searchGroupByID', setMessageRemindType: 'setMessageRemindType', handleGroupApplication: 'handleGroupApplication', getGroupMemberProfile: 'getGroupMemberProfile', getGroupMemberList: 'getGroupMemberList', addGroupMember: 'addGroupMember', deleteGroupMember: 'deleteGroupMember', setGroupMemberNameCard: 'setGroupMemberNameCard', setGroupMemberMuteTime: 'setGroupMemberMuteTime', setGroupMemberRole: 'setGroupMemberRole', setGroupMemberCustomField: 'setGroupMemberCustomField', getGroupOnlineMemberCount: 'getGroupOnlineMemberCount', getMyProfile: 'getMyProfile', getUserProfile: 'getUserProfile', updateMyProfile: 'updateMyProfile', getBlacklist: 'getBlacklist', addToBlacklist: 'addToBlacklist', removeFromBlacklist: 'removeFromBlacklist', getFriendList: 'getFriendList', callExperimentalAPI: 'callExperimentalAPI' }; const ao = '1.7.3'; const uo = '537048168'; const co = '10'; const lo = 'protobuf'; const po = 'json'; const go = 1; const ho = 2; const mo = 3; const fo = 4; const _o = { HOST: { CURRENT: { COMMON: 'https://webim.tim.qq.com', PIC: 'https://pic.tim.qq.com', COS: 'https://yun.tim.qq.com' }, PRODUCTION: { COMMON: 'https://webim.tim.qq.com', PIC: 'https://pic.tim.qq.com', COS: 'https://yun.tim.qq.com' }, OVERSEA_PRODUCTION: { COMMON: 'https://api.im.qcloud.com', PIC: 'https://api.im.qcloud.com', COS: 'https://api.im.qcloud.com' }, SANDBOX: { COMMON: 'https://events.tim.qq.com', PIC: 'https://pic.tim.qq.com', COS: 'https://yun.tim.qq.com' }, TEST: { COMMON: 'https://test.tim.qq.com', PIC: 'https://pic.tim.qq.com', COS: 'https://test.tim.qq.com' }, setCurrent: function() {
    const e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 3; e === go ? this.CURRENT = this.SANDBOX : e === ho ? this.CURRENT = this.TEST : e === mo ? this.CURRENT = this.PRODUCTION : e === fo && (this.CURRENT = this.OVERSEA_PRODUCTION)
  } }, NAME: { OPEN_IM: 'openim', GROUP: 'group_open_http_svc', FRIEND: 'sns', PROFILE: 'profile', RECENT_CONTACT: 'recentcontact', PIC: 'openpic', BIG_GROUP_NO_AUTH: 'group_open_http_noauth_svc', BIG_GROUP_LONG_POLLING: 'group_open_long_polling_http_svc', BIG_GROUP_LONG_POLLING_NO_AUTH: 'group_open_long_polling_http_noauth_svc', IM_OPEN_STAT: 'imopenstat', WEB_IM: 'webim', IM_COS_SIGN: 'im_cos_sign_svr' }, CMD: { ACCESS_LAYER: 'accesslayer', LOGIN: 'login', LOGOUT_LONG_POLL: 'longpollinglogout', LOGOUT_ALL: 'logout', PORTRAIT_GET: 'portrait_get_all', PORTRAIT_SET: 'portrait_set', GET_LONG_POLL_ID: 'getlongpollingid', LONG_POLL: 'longpolling', AVCHATROOM_LONG_POLL: 'get_msg', FRIEND_ADD: 'friend_add', FRIEND_GET_ALL: 'friend_get_all', FRIEND_DELETE: 'friend_delete', RESPONSE_PENDENCY: 'friend_response', GET_PENDENCY: 'pendency_get', DELETE_PENDENCY: 'pendency_delete', GET_GROUP_PENDENCY: 'get_pendency', GET_BLACKLIST: 'black_list_get', ADD_BLACKLIST: 'black_list_add', DELETE_BLACKLIST: 'black_list_delete', CREATE_GROUP: 'create_group', GET_JOINED_GROUPS: 'get_joined_group_list', SEND_MESSAGE: 'sendmsg', REVOKE_C2C_MESSAGE: 'msgwithdraw', SEND_GROUP_MESSAGE: 'send_group_msg', REVOKE_GROUP_MESSAGE: 'group_msg_recall', GET_GROUP_INFO: 'get_group_info', GET_GROUP_MEMBER_INFO: 'get_specified_group_member_info', GET_GROUP_MEMBER_LIST: 'get_group_member_info', QUIT_GROUP: 'quit_group', CHANGE_GROUP_OWNER: 'change_group_owner', DESTROY_GROUP: 'destroy_group', ADD_GROUP_MEMBER: 'add_group_member', DELETE_GROUP_MEMBER: 'delete_group_member', SEARCH_GROUP_BY_ID: 'get_group_public_info', APPLY_JOIN_GROUP: 'apply_join_group', HANDLE_APPLY_JOIN_GROUP: 'handle_apply_join_group', MODIFY_GROUP_INFO: 'modify_group_base_info', MODIFY_GROUP_MEMBER_INFO: 'modify_group_member_info', DELETE_GROUP_SYSTEM_MESSAGE: 'deletemsg', DELETE_GROUP_AT_TIPS: 'deletemsg', GET_CONVERSATION_LIST: 'get', PAGING_GET_CONVERSATION_LIST: 'page_get', DELETE_CONVERSATION: 'delete', GET_MESSAGES: 'getmsg', GET_C2C_ROAM_MESSAGES: 'getroammsg', GET_GROUP_ROAM_MESSAGES: 'group_msg_get', SET_C2C_MESSAGE_READ: 'msgreaded', GET_PEER_READ_TIME: 'get_peer_read_time', SET_GROUP_MESSAGE_READ: 'msg_read_report', FILE_READ_AND_WRITE_AUTHKEY: 'authkey', FILE_UPLOAD: 'pic_up', COS_SIGN: 'cos', TIM_WEB_REPORT: 'tim_web_report', BIG_DATA_HALLWAY_AUTH_KEY: 'authkey', GET_ONLINE_MEMBER_NUM: 'get_online_member_num' }, CHANNEL: { SOCKET: 1, XHR: 2, AUTO: 0 }, NAME_VERSION: { openim: 'v4', group_open_http_svc: 'v4', sns: 'v4', profile: 'v4', recentcontact: 'v4', openpic: 'v4', group_open_http_noauth_svc: 'v4', group_open_long_polling_http_svc: 'v4', group_open_long_polling_http_noauth_svc: 'v4', imopenstat: 'v4', im_cos_sign_svr: 'v4', webim: 'v4' } }; _o.HOST.setCurrent(mo); const vo = { request: { toAccount: 'To_Account', fromAccount: 'From_Account', to: 'To_Account', from: 'From_Account', groupID: 'GroupId', avatar: 'FaceUrl', groupAtUserID: 'GroupAt_Account' }, response: { GroupId: 'groupID', Member_Account: 'userID', MsgList: 'messageList', SyncFlag: 'syncFlag', To_Account: 'to', From_Account: 'from', MsgSeq: 'sequence', MsgRandom: 'random', MsgTimeStamp: 'time', MsgContent: 'content', MsgBody: 'elements', GroupWithdrawInfoArray: 'revokedInfos', WithdrawC2cMsgNotify: 'c2cMessageRevokedNotify', C2cWithdrawInfoArray: 'revokedInfos', C2cReadedReceipt: 'c2cMessageReadReceipt', LastReadTime: 'peerReadTime', MsgRand: 'random', MsgType: 'type', MsgShow: 'messageShow', NextMsgSeq: 'nextMessageSeq', FaceUrl: 'avatar', ProfileDataMod: 'profileModify', Profile_Account: 'userID', ValueBytes: 'value', ValueNum: 'value', NoticeSeq: 'noticeSequence', NotifySeq: 'notifySequence', MsgFrom_AccountExtraInfo: 'messageFromAccountExtraInformation', Operator_Account: 'operatorID', OpType: 'operationType', ReportType: 'operationType', UserId: 'userID', User_Account: 'userID', List_Account: 'userIDList', MsgOperatorMemberExtraInfo: 'operatorInfo', MsgMemberExtraInfo: 'memberInfoList', ImageUrl: 'avatar', NickName: 'nick', MsgGroupNewInfo: 'newGroupProfile', MsgAppDefinedData: 'groupCustomField', Owner_Account: 'ownerID', GroupName: 'name', GroupFaceUrl: 'avatar', GroupIntroduction: 'introduction', GroupNotification: 'notification', GroupApplyJoinOption: 'joinOption', MsgKey: 'messageKey', GroupInfo: 'groupProfile', ShutupTime: 'muteTime', Desc: 'description', Ext: 'extension', GroupAt_Account: 'groupAtUserID' }, ignoreKeyWord: ['C2C', 'ID', 'USP'] }; const yo = '_contextWasUpdated'; const Io = '_contextWasReset'; const Mo = '_a2KeyAndTinyIDUpdated'; const Co = '_specifiedConfigUpdated'; const Eo = '_noticeIsSynchronizing'; const To = '_noticeIsSynchronized'; const Do = '_messageSent'; const So = '_syncMessageProcessing'; const ko = '_syncMessageFinished'; const Ao = '_receiveInstantMessage'; const Oo = '_receiveGroupInstantMessage'; const Ro = '_receveGroupSystemNotice'; const No = '_messageRevoked'; const Lo = '_longPollGetIDFailed'; const wo = '_longPollRequestFailed'; const Po = '_longPollResponseOK'; const Go = '_longPollKickedOut'; const bo = '_longPollMitipuleDeviceKickedOut'; const Uo = '_longPollGetNewC2CNotice'; const qo = '_longPollGetNewGroupMessages'; const Fo = '_longPollGetNewGroupTips'; const xo = '_longPollGetNewGroupAtTips'; const Vo = '_longPollGetNewGroupNotice'; const Ko = '_longPollGetNewFriendMessages'; const Ho = '_longPollProfileModified'; const Bo = ' _longpollGroupMessageRevoked'; const jo = '_longpollC2CMessageRevoked'; const $o = '_longpollC2CMessageReadReceipt'; const Yo = '_avlongPollRequestFailed'; const zo = '_avlongPollResponseOK'; const Wo = '_onGroupListUpdated'; const Jo = '_loginSuccess'; const Xo = '_signLogoutExcuting'; const Qo = '_logoutSuccess'; const Zo = '_a2keyExpired'; const er = '_errorHasBeenDetected'; const tr = '_onConversationListUpdated'; const nr = '_onConversationListProfileUpdated'; const or = '_conversationDeleted'; const rr = 'onProfileUpdated'; const ir = 'joinAVChatRoomSuccess'; const sr = 'joinAVChatRoomSuccessNoAuth'; const ar = '_sdkStateReady'; const ur = '_sdkReload'; function cr(e, t) {
    if ('string' !== typeof e && !Array.isArray(e)) throw new TypeError('Expected the input to be `string | string[]`'); t = Object.assign({ pascalCase: !1 }, t); let n; return 0 === (e = Array.isArray(e) ? e.map((function(e) {
      return e.trim()
    })).filter((function(e) {
      return e.length
    })).join('-') : e.trim()).length ? '' : 1 === e.length ? t.pascalCase ? e.toUpperCase() : e.toLowerCase() : (e !== e.toLowerCase() && (e = lr(e)), e = e.replace(/^[_.\- ]+/, '').toLowerCase().replace(/[_.\- ]+(\w|$)/g, (function(e, t) {
        return t.toUpperCase()
      })).replace(/\d+(\w|$)/g, (function(e) {
        return e.toUpperCase()
      })), n = e, t.pascalCase ? n.charAt(0).toUpperCase() + n.slice(1) : n)
  } var lr = function(e) {
    for (let t = !1, n = !1, o = !1, r = 0; r < e.length; r++) {
      const i = e[r]; t && /[a-zA-Z]/.test(i) && i.toUpperCase() === i ? (e = e.slice(0, r) + '-' + e.slice(r), t = !1, o = n, n = !0, r++) : n && o && /[a-zA-Z]/.test(i) && i.toLowerCase() === i ? (e = e.slice(0, r - 1) + '-' + e.slice(r - 1), o = n, n = !1, t = !0) : (t = i.toLowerCase() === i && i.toUpperCase() !== i, o = n, n = i.toUpperCase() === i && i.toLowerCase() !== i)
    } return e
  }; function pr(e, t, n) {
    const o = []; let r = 0; const i = function e(t, n) {
      if (++r > 10) return r--, t; if (Ie(t)) {
        const i = t.map((function(t) {
          return ve(t) ? e(t, n) : t
        })); return r--, i
      } if (ve(t)) {
        let s = (a = t, u = function(e, t) {
          if (!Se(t)) return !1; if ((s = t) !== cr(s)) {
            for (var r = !0, i = 0; i < vo.ignoreKeyWord.length; i++) {
              if (t.includes(vo.ignoreKeyWord[i])) {
                r = !1; break
              }
            }r && o.push(t)
          } let s; return Me(n[t]) ? function(e) {
            return 'OPPOChannelID' === e ? e : e[0].toUpperCase() + cr(e).slice(1)
          }(t) : n[t]
        }, c = Object.create(null), Object.keys(a).forEach((function(e) {
          const t = u(a[e], e); t && (c[t] = a[e])
        })), c); return s = $e(s, (function(t, o) {
          return Ie(t) || ve(t) ? e(t, n) : t
        })), r--, s
      } let a; let u; let c
    }(e, t = u(u({}, vo.request), t)); return o.length > 0 && n.innerEmitter.emit(er, { code: qt.CONVERTOR_IRREGULAR_PARAMS, message: xn }), i
  } function gr(e, t) {
    if (t = u(u({}, vo.response), t), Ie(e)) {
      return e.map((function(e) {
        return ve(e) ? gr(e, t) : e
      }))
    } if (ve(e)) {
      let n = (o = e, r = function(e, n) {
        return Me(t[n]) ? cr(n) : t[n]
      }, i = {}, Object.keys(o).forEach((function(e) {
        i[r(o[e], e)] = o[e]
      })), i); return n = $e(n, (function(e) {
        return Ie(e) || ve(e) ? gr(e, t) : e
      }))
    } let o; let r; let i
  } const hr = function() {
    function e(t) {
      const n = this; o(this, e), this.url = '', this.requestData = null, this.method = t.method || 'POST', this.callback = function(e) {
        return gr(e = t.decode(e), n._getResponseMap(t))
      }, this._initializeServerMap(), this._initializeURL(t), this._initializeRequestData(t)
    } return i(e, [{ key: '_initializeServerMap', value: function() {
      this._serverMap = Object.create(null); let e = ''; for (const t in _o.NAME) {
        if (Object.prototype.hasOwnProperty.call(_o.NAME, t)) {
          switch (e = _o.NAME[t]) {
            case _o.NAME.PIC: this._serverMap[e] = _o.HOST.CURRENT.PIC; break; case _o.NAME.IM_COS_SIGN: this._serverMap[e] = _o.HOST.CURRENT.COS; break; default: this._serverMap[e] = _o.HOST.CURRENT.COMMON
          }
        }
      }
    } }, { key: '_getHost', value: function(e) {
      if (void 0 !== this._serverMap[e]) return this._serverMap[e]; throw new Ut({ code: qt.NETWORK_UNDEFINED_SERVER_NAME, message: Un })
    } }, { key: '_initializeURL', value: function(e) {
      const t = e.serverName; const n = e.cmd; const o = this._getHost(t); let r = ''.concat(o, '/').concat(_o.NAME_VERSION[t], '/').concat(t, '/').concat(n); r += '?'.concat(this._getQueryString(e.queryString)), this.url = r
    } }, { key: 'getUrl', value: function() {
      return this.url.replace(/&reqtime=(\d+)/, '&reqtime='.concat(Math.ceil(+new Date / 1e3)))
    } }, { key: '_initializeRequestData', value: function(e) {
      let t; const n = e.requestData; t = this._requestDataCleaner(n), this.requestData = e.encode(t)
    } }, { key: '_requestDataCleaner', value: function(e) {
      const t = Array.isArray(e) ? [] : Object.create(null); for (const o in e)Object.prototype.hasOwnProperty.call(e, o) && Se(o) && null !== e[o] && ('object' !== n(e[o]) ? t[o] = e[o] : t[o] = this._requestDataCleaner.bind(this)(e[o])); return t
    } }, { key: '_getQueryString', value: function(e) {
      const t = []; for (const n in e)Object.prototype.hasOwnProperty.call(e, n) && ('function' !== typeof e[n] ? t.push(''.concat(n, '=').concat(e[n])) : t.push(''.concat(n, '=').concat(e[n]()))); return t.join('&')
    } }, { key: '_getResponseMap', value: function(e) {
      if (e.keyMaps && e.keyMaps.response && Object.keys(e.keyMaps.response).length > 0) return e.keyMaps.response
    } }]), e
  }(); function dr(e) {
    this.mixin(e)
  }dr.mixin = function(e) {
    const t = e.prototype || e; t._isReady = !1, t.ready = function(e) {
      const t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]; if (e) return this._isReady ? void (t ? e.call(this) : setTimeout(e, 1)) : (this._readyQueue = this._readyQueue || [], void this._readyQueue.push(e))
    }, t.triggerReady = function() {
      const e = this; this._isReady = !0, setTimeout((function() {
        const t = e._readyQueue; e._readyQueue = [], t && t.length > 0 && t.forEach((function(e) {
          e.call(this)
        }), e)
      }), 1)
    }, t.resetReady = function() {
      this._isReady = !1, this._readyQueue = []
    }, t.isReady = function() {
      return this._isReady
    }
  }; const mr = function() {
    function e(t) {
      o(this, e), dr.mixin(this), this.tim = t
    } return i(e, [{ key: 'isLoggedIn', value: function() {
      return this.tim.context.login === ot.IS_LOGIN || !!this.tim.context.a2Key
    } }, { key: 'createTransportCapsule', value: function(e) {
      const t = this.tim.packageConfig.get(e); return t ? new hr(t) : null
    } }, { key: 'request', value: function(e) {
      const t = this.createTransportCapsule(e); return t || de.error('unknown transport capsule, please check!', e), this.tim.connectionController.request(t)
    } }, { key: 'emitInnerEvent', value: function(e, t) {
      this.tim.innerEmitter.emit(e, t)
    } }, { key: 'emitOuterEvent', value: function(e, t) {
      this.tim.outerEmitter.emit(e, t)
    } }, { key: 'reset', value: function() {
      de.warn(['method: IMController.reset() method must be implemented'].join())
    } }, { key: 'probeNetwork', value: function() {
      return this.tim.netMonitor.probe()
    } }, { key: 'getNetworkType', value: function() {
      return this.tim.netMonitor.getNetworkType()
    } }, { key: 'getPlatform', value: function() {
      return H
    } }]), e
  }(); const fr = function() {
    function e(t, n) {
      o(this, e), this.data = t, this._innerEmitter = n, this.defaultData = {}, Object.assign(this.defaultData, t), this.initGetterAndSetter()
    } return i(e, [{ key: 'initGetterAndSetter', value: function() {
      const e = this; const t = function(t) {
        Object.defineProperty(e, t, { enumerable: !0, configurable: !0, get: function() {
          return e.data[t]
        }, set: function(n) {
          e.data[t] !== n && (e.data[t] = n, e.onChange.bind(e)(t, n))
        } })
      }; for (const n in e.data)Object.prototype.hasOwnProperty.call(e.data, n) && t(n)
    } }, { key: 'onChange', value: function(e, t) {
      this._innerEmitter.emit(yo, { key: e, value: t })
    } }, { key: 'reset', value: function() {
      for (const e in de.log('Context.reset'), this.data)Object.prototype.hasOwnProperty.call(this.data, e) && (this.data[e] = this.defaultData.hasOwnProperty(e) ? this.defaultData[e] : null)
    } }]), e
  }(); const _r = function(e) {
    c(n, e); const t = v(n); function n(e) {
      let r; o(this, n); const i = (r = t.call(this, e)).tim.loginInfo; return r._context = new fr({ login: ot.IS_NOT_LOGIN, SDKAppID: i.SDKAppID, appIDAt3rd: null, accountType: i.accountType, identifier: i.identifier, tinyID: null, identifierNick: i.identifierNick, userSig: i.userSig, a2Key: null, contentType: 'json', apn: 1, unlimitedAVChatRoom: i.unlimitedAVChatRoom, scene: i.scene, oversea: i.oversea, instanceID: i.instanceID }, r.tim.innerEmitter), r._initListener(), r
    } return i(n, [{ key: 'reset', value: function() {
      this._context.reset(), this.emitInnerEvent(Io)
    } }, { key: '_initListener', value: function() {
      this.tim.innerEmitter.on(yo, this._onContextMemberChange, this), this.tim.innerEmitter.on(Jo, this._updateA2KeyAndTinyID, this)
    } }, { key: '_updateA2KeyAndTinyID', value: function(e) {
      const t = e.data; const n = t.a2Key; const o = t.tinyID; this._context.a2Key = n, this._context.tinyID = o, this.emitInnerEvent(Mo), this.triggerReady()
    } }, { key: 'getContext', value: function() {
      return this._context
    } }, { key: '_onContextMemberChange', value: function(e) {
      const t = e.data; const n = t.key; const o = t.value; ('tinyID' === n || 'a2Key' === n) && (o.length <= 0 ? this._context.login = ot.IS_NOT_LOGIN : this._context.login = null !== this._context.a2Key ? ot.IS_LOGIN : ot.IS_NOT_LOGIN)
    } }]), n
  }(mr); const vr = function e(t) {
    o(this, e), this.code = 0, this.data = t || {}
  }; let yr = null; const Ir = function(e) {
    yr = e
  }; const Mr = function(e) {
    return e instanceof vr ? (de.warn('IMPromise.resolve 此函数会自动用options创建IMResponse实例，调用侧不需创建，建议修改！'), Promise.resolve(e)) : Promise.resolve(new vr(e))
  }; const Cr = function(t) {
    const n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]; if (t instanceof Ut) return n && null !== yr && yr.emit(e.ERROR, t), Promise.reject(t); if (t instanceof Error) {
      const o = new Ut({ code: qt.UNCAUGHT_ERROR, message: t.message }); return n && null !== yr && yr.emit(e.ERROR, o), Promise.reject(o)
    } if (Me(t) || Me(t.code) || Me(t.message))de.error('IMPromise.reject 必须指定code(错误码)和message(错误信息)!!!'); else {
      if (fe(t.code) && _e(t.message)) {
        const r = new Ut(t); return n && null !== yr && yr.emit(e.ERROR, r), Promise.reject(r)
      }de.error('IMPromise.reject code(错误码)必须为数字，message(错误信息)必须为字符串!!!')
    }
  }; const Er = 'sdkReady'; const Tr = 'login'; const Dr = 'longpolling'; const Sr = 'longpollingAV'; const kr = 'sendMessage'; const Ar = 'sendMessageC2C'; const Or = 'sendMessageGroupWork'; const Rr = 'sendMessageGroupPublic'; const Nr = 'sendMessageGroupMeeting'; const Lr = 'sendMessageGroupAV'; const wr = 'messageReceived'; const Pr = 'messageReceivedAV'; const Gr = 'initConversationList'; const br = 'initGroupList'; const Ur = 'upload'; const qr = function() {
    function e(t) {
      o(this, e), this.SDKAppID = '', this.version = '', this.tinyID = '', this.userID = '', this.platform = '', this.method = t, this.time = '', this.startts = Date.now(), this.endts = 0, this.timespan = 0, this.codeint = 0, this.message = '', this.text = '', this.msgType = '', this.networkType = '', this.platform = '', this.scene = '', this._sentFlag = !1, this.instanceID = '', this.host = function() {
        let e = 'unknown'; if (ie && (e = 'mac'), re && (e = 'windows'), W && (e = 'ios'), J && (e = 'android'), V) {
          try {
            const t = K.getSystemInfoSync().platform; void 0 !== t && (e = t)
          } catch (n) {}
        } return e
      }(), this.mpLibVersion = function() {
        if (V) {
          try {
            let e; return void 0 === (e = x ? my.getSystemInfoSync().version : K.getSystemInfoSync().SDKVersion) ? '-' : e
          } catch (t) {
            return '-'
          }
        } return '-'
      }()
    } return i(e, [{ key: 'setCommonInfo', value: function(e) {
      const t = e.SDKAppID; const n = e.version; const o = e.tinyID; const r = e.userID; const i = e.platform; const s = e.scene; const a = e.instanceID; this.SDKAppID = ''.concat(t), this.version = ''.concat(n), this.tinyID = o, this.userID = r, this.platform = i, this.scene = s, this.time = Ne(), this.instanceID = a, this.startts && this.endts && !this.timespan && (this.timespan = Math.abs(this.endts - this.startts))
    } }, { key: 'setEnd', value: function() {
      const e = this; const t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0]; this._sentFlag || (this.endts = Date.now(), t ? (this._sentFlag = !0, this._eventStatController.pushIn(this)) : setTimeout((function() {
        e._sentFlag = !0, e._eventStatController.pushIn(e)
      }), 0))
    } }, { key: 'setError', value: function(e, t, n) {
      return e instanceof Error ? (this._sentFlag || (this.setNetworkType(n), t ? (e.code && this.setCode(e.code), e.message && this.setMessage(e.message)) : (this.setCode(qt.NO_NETWORK), this.setMessage(Fn))), this) : (de.warn('SSOLogData.setError value not instanceof Error, please check!'), this)
    } }, { key: 'setCode', value: function(e) {
      return Me(e) || this._sentFlag || ('ECONNABORTED' === e && (this.codeint = 103), fe(e) ? this.codeint = e : de.warn('SSOLogData.setCode value not a number, please check!', e, n(e))), this
    } }, { key: 'setMessage', value: function(e) {
      return Me(e) || this._sentFlag ? this : _e(e) ? (this.message = e, this) : this
    } }, { key: 'setText', value: function(e) {
      return fe(e) ? this.text = e.toString() : _e(e) && (this.text = e), this
    } }, { key: 'setMessageType', value: function(e) {
      return this.msgType = e, this
    } }, { key: 'setNetworkType', value: function(e) {
      return Me(e) ? de.warn('SSOLogData.setNetworkType value is undefined, please check!') : this.networkType = e, this
    } }], [{ key: 'bindController', value: function(t) {
      e.prototype._eventStatController = t
    } }]), e
  }(); const Fr = 'sdkConstruct'; const xr = 'sdkReady'; const Vr = 'accessLayer'; const Kr = 'login'; const Hr = 'logout'; const Br = 'kickedOut'; const jr = 'registerPlugin'; const $r = 'getCosAuthKey'; const Yr = 'upload'; const zr = 'sendMessage'; const Wr = 'sendComboMessage'; const Jr = 'getC2CRoamingMessages'; const Xr = 'getGroupRoamingMessages'; const Qr = 'revokeMessage'; const Zr = 'setC2CMessageRead'; const ei = 'setGroupMessageRead'; const ti = 'emptyMessageBody'; const ni = 'getPeerReadTime'; const oi = 'getConversationList'; const ri = 'getConversationProfile'; const ii = 'deleteConversation'; const si = 'getConversationListInStorage'; const ai = 'syncConversationList'; const ui = 'createGroup'; const ci = 'applyJoinGroup'; const li = 'joinAVChatRoomSilently'; const pi = 'quitGroup'; const gi = 'searchGroupByID'; const hi = 'changeGroupOwner'; const di = 'handleGroupApplication'; const mi = 'setMessageRemindType'; const fi = 'dismissGroup'; const _i = 'updateGroupProfile'; const vi = 'getGroupList'; const yi = 'getGroupProfile'; const Ii = 'getGroupListInStorage'; const Mi = 'getGroupLastSequence'; const Ci = 'getGroupMemberList'; const Ei = 'getGroupMemberProfile'; const Ti = 'addGroupMember'; const Di = 'deleteGroupMember'; const Si = 'setGroupMemberMuteTime'; const ki = 'setGroupMemberNameCard'; const Ai = 'setGroupMemberRole'; const Oi = 'setGroupMemberCustomField'; const Ri = 'getGroupOnlineMemberCount'; const Ni = 'getLongPollID'; const Li = 'longPollingError'; const wi = 'networkJitter'; const Pi = 'sdkReload'; const Gi = 'messageLoss'; const bi = 'messageStacked'; const Ui = 'getUserProfile'; const qi = 'updateMyProfile'; const Fi = 'getBlacklist'; const xi = 'addToBlacklist'; const Vi = 'removeFromBlacklist'; const Ki = 'mpHideToShow'; const Hi = 'callbackFunctionError'; const Bi = 'exceptionError'; const ji = function(n) {
    c(s, n); const r = v(s); function s(e) {
      let t; return o(this, s), !0 === (t = r.call(this, e)).tim.context.oversea && _o.HOST.setCurrent(fo), t._initializeListener(), t
    } return i(s, [{ key: 'login', value: function(e) {
      if (this.isLoggedIn()) {
        const t = '您已经登录账号'.concat(e.identifier, '！如需切换账号登录，请先调用 logout 接口登出，再调用 login 接口登录。'); return de.warn(t), Mr({ actionStatus: 'OK', errorCode: 0, errorInfo: t, repeatLogin: !0 })
      }de.log('SignController.login userID='.concat(e.identifier)), de.time(Tr); const n = this._checkLoginInfo(e); return Xe(n) ? (this.tim.context.identifier = e.identifier, this.tim.context.userSig = e.userSig, this.tim.context.identifier && this.tim.context.userSig ? this._accessLayer() : void 0) : Cr(n)
    } }, { key: '_isLoginCurrentUser', value: function(e) {
      return this.tim.context.identifier === e
    } }, { key: '_initializeListener', value: function() {
      const e = this.tim.innerEmitter; e.on(Go, this._onMultipleAccountKickedOut, this), e.on(bo, this._onMultipleDeviceKickedOut, this), e.on(Zo, this._onUserSigExpired, this)
    } }, { key: '_accessLayer', value: function() {
      const e = this; const t = new qr(Vr); return de.log('SignController._accessLayer.'), this.request({ name: 'accessLayer', action: 'query' }).then((function(n) {
        return t.setNetworkType(e.getNetworkType()).setText(n.data.webImAccessLayer).setEnd(), de.log('SignController._accessLayer ok. webImAccessLayer='.concat(n.data.webImAccessLayer)), e.tim.context.oversea || n.data.webImAccessLayer !== go || _o.HOST.setCurrent(n.data.webImAccessLayer), e._login()
      })).catch((function(n) {
        return e.probeNetwork().then((function(o) {
          const r = y(o, 2); const i = r[0]; const s = r[1]; t.setError(n, i, s).setEnd(!0), e.tim.eventStatController.reportAtOnce()
        })), de.error('SignController._accessLayer failed. error:', n), Cr(n)
      }))
    } }, { key: '_login', value: function() {
      const e = this; const t = new qr(Kr); return this.request({ name: 'login', action: 'query' }).then((function(n) {
        let o = null; if (!n.data.tinyID) throw o = new Ut({ code: qt.NO_TINYID, message: Ht }), t.setError(o, !0, e.getNetworkType()).setEnd(), o; if (!n.data.a2Key) throw o = new Ut({ code: qt.NO_A2KEY, message: Bt }), t.setError(o, !0, e.getNetworkType()).setEnd(), o; return t.setNetworkType(e.getNetworkType()).setText(''.concat(e.tim.loginInfo.identifier)).setEnd(), de.log('SignController.login ok. userID='.concat(e.tim.loginInfo.identifier, ' loginCost=').concat(de.timeEnd(Tr), 'ms')), e.emitInnerEvent(Jo, { a2Key: n.data.a2Key, tinyID: n.data.tinyID }), Mr(n.data)
      })).catch((function(n) {
        return e.probeNetwork().then((function(e) {
          const o = y(e, 2); const r = o[0]; const i = o[1]; t.setError(n, r, i).setEnd(!0)
        })), de.error('SignController.login failed. error:', n), Cr(n)
      }))
    } }, { key: 'logout', value: function() {
      return this.isLoggedIn() ? (new qr(Hr).setNetworkType(this.getNetworkType()).setText('userID='.concat(this.tim.loginInfo.identifier, ' type=').concat('longPollLogout')).setEnd(!0), de.info('SignController.logout'), this.emitInnerEvent(Xo), this._logout(Mt).then(this._emitLogoutSuccess.bind(this)).catch(this._emitLogoutSuccess.bind(this))) : Cr({ code: qt.USER_NOT_LOGGED_IN, message: jt })
    } }, { key: '_logout', value: function(e) {
      const t = this.tim.notificationController; const n = e === It ? 'logout' : 'longPollLogout'; const o = e === It ? { name: n, action: 'query' } : { name: n, action: 'query', param: { longPollID: t.getLongPollID() } }; return this.request(o).catch((function(e) {
        return de.error('SignController._logout error:', e), Cr(e)
      }))
    } }, { key: '_checkLoginInfo', value: function(e) {
      let t = 0; let n = ''; return null === e.SDKAppID ? (t = qt.NO_SDKAPPID, n = Ft) : null === e.accountType ? (t = qt.NO_ACCOUNT_TYPE, n = xt) : null === e.identifier ? (t = qt.NO_IDENTIFIER, n = Vt) : null === e.userSig && (t = qt.NO_USERSIG, n = Kt), Xe(t) || Xe(n) ? {} : { code: t, message: n }
    } }, { key: '_emitLogoutSuccess', value: function() {
      return this.emitInnerEvent(Qo), Mr({})
    } }, { key: '_onMultipleAccountKickedOut', value: function() {
      const n = this; new qr(Br).setNetworkType(this.getNetworkType()).setText(t.KICKED_OUT_MULT_ACCOUNT).setEnd(!0), de.warn('SignController._onMultipleAccountKickedOut kicked out. userID='.concat(this.tim.loginInfo.identifier)), this.tim.logout().then((function() {
        n.emitOuterEvent(e.KICKED_OUT, { type: t.KICKED_OUT_MULT_ACCOUNT })
      }))
    } }, { key: '_onMultipleDeviceKickedOut', value: function() {
      const n = this; new qr(Br).setNetworkType(this.getNetworkType()).setText(t.KICKED_OUT_MULT_DEVICE).setEnd(!0), de.warn('SignController._onMultipleDeviceKickedOut kicked out. userID='.concat(this.tim.loginInfo.identifier)), this.tim.logout().then((function() {
        n.emitOuterEvent(e.KICKED_OUT, { type: t.KICKED_OUT_MULT_DEVICE })
      }))
    } }, { key: '_onUserSigExpired', value: function() {
      new qr(Br).setNetworkType(this.getNetworkType()).setText(t.KICKED_OUT_USERSIG_EXPIRED).setEnd(!0), de.warn('SignController._onUserSigExpired: userSig 签名过期被踢下线'), this.emitOuterEvent(e.KICKED_OUT, { type: t.KICKED_OUT_USERSIG_EXPIRED }), this.tim.resetSDK()
    } }, { key: 'reset', value: function() {
      de.info('SignController.reset')
    } }]), s
  }(mr); const $i = function e() {
    o(this, e)
  }; const Yi = function(e) {
    c(n, e); const t = v(n); function n() {
      let e; return o(this, n), (e = t.call(this)).retry = 2, e._request = e.promisify(K.request), e
    } return i(n, [{ key: 'request', value: function(e) {
      return this._checkOptions(e), this._initOptions(e), e = u(u({}, e), {}, { responseType: 'text' }), this._requestWithRetry(e)
    } }, { key: '_requestWithRetry', value: function(e) {
      const t = this; let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0; return this._request(e).then(this._handleResolve).catch((function(o) {
        if (_e(o.errMsg)) {
          if (o.errMsg.includes('abort')) return Mr({}); if (o.errMsg.includes('timeout')) return t.retry > 0 && n < t.retry ? t._requestWithRetry(e, ++n) : Cr(new Ut({ code: qt.NETWORK_TIMEOUT, message: o.errMsg })); if (o.errMsg.includes('fail')) return t.retry > 0 && n < t.retry ? t._requestWithRetry(e, ++n) : Cr(new Ut({ code: qt.NETWORK_ERROR, message: o.errMsg }))
        } return Cr(new Ut(u({ code: qt.UNCAUGHT_ERROR, message: o.message }, o)))
      }))
    } }, { key: '_handleResolve', value: function(e) {
      const t = e.data; const n = t.error_code; let o = t.ErrorCode; return fe(n) && (o = n), o !== nt.SUCCESS && (e.data.ErrorCode = Number(''.concat(o))), e
    } }, { key: 'promisify', value: function(e) {
      return function(t) {
        return new Promise((function(n, o) {
          const r = e(Object.assign({}, t, { success: n, fail: o })); t.updateAbort && t.updateAbort((function() {
            r && Ee(r.abort) && r.abort()
          }))
        }))
      }
    } }]), n
  }(function() {
    function e() {
      o(this, e)
    } return i(e, [{ key: 'request', value: function(e) {
      console.warn('请注意： ConnectionBase.request() 方法必须被派生类重写:')
    } }, { key: '_checkOptions', value: function(e) {
      if (!1 == !!e.url) throw new Ut({ code: qt.NETWORK_BASE_OPTIONS_NO_URL, message: bn })
    } }, { key: '_initOptions', value: function(e) {
      e.method = ['POST', 'GET', 'PUT', 'DELETE', 'OPTION'].indexOf(e.method) >= 0 ? e.method : 'POST', e.dataType = e.dataType || 'json', e.responseType = e.responseType || 'json'
    } }]), e
  }()); const zi = function e() {
    o(this, e)
  }; const Wi = function() {
    function e() {
      o(this, e), this.request = 0, this.success = 0, this.fail = 0, this.reportRate = 10, this.requestTimeCost = []
    } return i(e, [{ key: 'report', value: function() {
      if (1 !== this.request) {
        if (this.request % this.reportRate != 0) return null; const e = this.avgRequestTime(); const t = 'runLoop reports: success='.concat(this.success, ',fail=').concat(this.fail, ',total=').concat(this.request, ',avg=').concat(e, ',cur=').concat(this.requestTimeCost[this.requestTimeCost.length - 1], ',max=').concat(Math.max.apply(null, this.requestTimeCost), ',min=').concat(Math.min.apply(null, this.requestTimeCost)); de.log(t)
      }
    } }, { key: 'setRequestTime', value: function(e, t) {
      const n = Math.abs(t - e); 100 === this.requestTimeCost.length && this.requestTimeCost.shift(), this.requestTimeCost.push(n)
    } }, { key: 'avgRequestTime', value: function() {
      for (var e, t = this.requestTimeCost.length, n = 0, o = 0; o < t; o++)n += this.requestTimeCost[o]; return e = n / t, Math.round(100 * e) / 100
    } }]), e
  }(); const Ji = function() {
    function e(t) {
      o(this, e), this._initializeOptions(t), this._initializeMembers(), this.status = new Wi
    } return i(e, [{ key: 'destructor', value: function() {
      clearTimeout(this._seedID); const e = this._index(); for (const t in this)Object.prototype.hasOwnProperty.call(this, t) && (this[t] = null); return e
    } }, { key: 'setIndex', value: function(e) {
      this._index = e
    } }, { key: 'isRunning', value: function() {
      return !this._stoped
    } }, { key: 'getIndex', value: function() {
      return this._index
    } }, { key: '_initializeOptions', value: function(e) {
      this.options = e
    } }, { key: '_initializeMembers', value: function() {
      this._index = -1, this._seedID = 0, this._requestStatus = !1, this._stoped = !1, this._intervalTime = 0, this._intervalIncreaseStep = 1e3, this._intervalDecreaseStep = 1e3, this._intervalTimeMax = 5e3, this._protectTimeout = 3e3, this._getNoticeSeq = this.options.getNoticeSeq, this._retryCount = 0, this._responseTime = Date.now(), this._responseTimeThreshold = 2e3, this.requestor = new Yi, this.abort = null
    } }, { key: 'start', value: function() {
      0 === this._seedID ? (this._stoped = !1, this._send()) : de.log('WXRunLoop.start(): WXRunLoop is running now, if you want to restart runLoop , please run "stop()" first.')
    } }, { key: '_reset', value: function() {
      de.log('WXRunLoop.reset(), long poll _intervalMaxRate', this._intervalMaxRate), this.stop(), this.start()
    } }, { key: '_intervalTimeIncrease', value: function() {
      this._intervalTime !== this._responseTimeThreshold && (this._intervalTime < this._responseTimeThreshold && (this._intervalTime += this._intervalIncreaseStep), this._intervalTime > this._responseTimeThreshold && (this._intervalTime = this._responseTimeThreshold))
    } }, { key: '_intervalTimeDecrease', value: function() {
      0 !== this._intervalTime && (this._intervalTime > 0 && (this._intervalTime -= this._intervalDecreaseStep), this._intervalTime < 0 && (this._intervalTime = 0))
    } }, { key: '_intervalTimeAdjustment', value: function() {
      const e = Date.now(); 100 * Math.floor((e - this._responseTime) / 100) <= this._responseTimeThreshold ? this._intervalTimeIncrease() : this._intervalTimeDecrease(), this._responseTime = e
    } }, { key: '_intervalTimeAdjustmentBaseOnResponseData', value: function(e) {
      e.ErrorCode === nt.SUCCESS ? this._intervalTimeDecrease() : this._intervalTimeIncrease()
    } }, { key: '_send', value: function() {
      const e = this; if (!0 !== this._requestStatus) {
        const t = this; this._requestStatus = !0, this.status.request++, 'function' === typeof this.options.before && this.options.before(t.options.pack.requestData); const n = Date.now(); let o = 0; this.requestor.request({ url: t.options.pack.getUrl(), data: t.options.pack.requestData, method: t.options.pack.method, updateAbort: function(t) {
          e.abort = t
        } }).then((function(r) {
          if (t._intervalTimeAdjustmentBaseOnResponseData.bind(e)(r.data), t._retryCount > 0 && (t._retryCount = 0), e.status.success++, o = Date.now(), e.status.setRequestTime(n, o), r.data.timecost = o - n, 'function' === typeof t.options.success) {
            try {
              e.options.success({ pack: e.options.pack, error: !1, data: e.options.pack.callback(r.data) })
            } catch (i) {
              de.warn('WXRunLoop._send(), error:', i)
            }
          }t._requestStatus = !1, !1 === t._stoped && (t._seedID = setTimeout(t._send.bind(t), t._intervalTime)), e.status.report()
        })).catch((function(r) {
          if (e.status.fail++, t._retryCount++, t._intervalTimeAdjustment.bind(e)(), !1 === t._stoped && (t._seedID = setTimeout(t._send.bind(t), t._intervalTime)), t._requestStatus = !1, 'function' === typeof t.options.fail) {
            try {
              e.options.fail({ pack: e.options.pack, error: r, data: !1 })
            } catch (i) {
              de.warn('WXRunLoop._send(), fail callback error:', i), de.error(i)
            }
          }o = Date.now(), e.status.setRequestTime(n, o), e.status.report()
        }))
      }
    } }, { key: 'stop', value: function() {
      this._clearAllTimeOut(), this._stoped = !0
    } }, { key: '_clearAllTimeOut', value: function() {
      clearTimeout(this._seedID), this._seedID = 0
    } }]), e
  }(); const Xi = function() {
    function e(t) {
      o(this, e), this.tim = t, this.httpConnection = V ? new Yi : new $i, this.keepAliveConnections = []
    } return i(e, [{ key: 'initializeListener', value: function() {
      this.tim.innerEmitter.on(Xo, this._stopAllRunLoop, this)
    } }, { key: 'request', value: function(e) {
      const t = { url: e.url, data: e.requestData, method: e.method, callback: e.callback }; return this.httpConnection.request(t).then((function(t) {
        return t.data = e.callback(t.data), t.data.errorCode !== nt.SUCCESS ? Cr(new Ut({ code: t.data.errorCode, message: t.data.errorInfo })) : t
      }))
    } }, { key: 'createRunLoop', value: function(e) {
      const t = this.createKeepAliveConnection(e); return t.setIndex(this.keepAliveConnections.push(t) - 1), t
    } }, { key: 'stopRunLoop', value: function(e) {
      e.stop()
    } }, { key: '_stopAllRunLoop', value: function() {
      for (let e = this.keepAliveConnections.length, t = 0; t < e; t++) this.keepAliveConnections[t].stop()
    } }, { key: 'destroyRunLoop', value: function(e) {
      e.stop(); const t = e.destructor(); this.keepAliveConnections.slice(t, 1)
    } }, { key: 'startRunLoopExclusive', value: function(e) {
      for (let t = e.getIndex(), n = 0; n < this.keepAliveConnections.length; n++)n !== t && this.keepAliveConnections[n].stop(); e.start()
    } }, { key: 'createKeepAliveConnection', value: function(e) {
      return V ? new Ji(e) : (this.tim.options.runLoopNetType === yt || this.tim.options.runLoopNetType, new zi(e))
    } }, { key: 'clearAll', value: function() {
      this.conn.cancelAll()
    } }, { key: 'reset', value: function() {
      this.keepAliveConnections = []
    } }]), e
  }(); const Qi = function() {
    function t(e) {
      o(this, t), this.tim = e, this.tim.innerEmitter.on(er, this._onErrorDetected, this)
    } return i(t, [{ key: '_onErrorDetected', value: function(t) {
      const n = t.data; new qr(Bi).setText('code='.concat(n.code, ' message=').concat(n.message)).setNetworkType(this.tim.netMonitor.getNetworkType()).setEnd(), n.code ? de.warn('Oops! code:'.concat(n.code, ' message:').concat(n.message)) : de.warn('Oops! message:'.concat(n.message, ' stack:').concat(n.stack)), this.tim.outerEmitter.emit(e.ERROR, n)
    } }]), t
  }(); const Zi = function() {
    function e(n) {
      const r = this; o(this, e), Xe(n) || (this.userID = n.userID || '', this.nick = n.nick || '', this.gender = n.gender || '', this.birthday = n.birthday || 0, this.location = n.location || '', this.selfSignature = n.selfSignature || '', this.allowType = n.allowType || t.ALLOW_TYPE_ALLOW_ANY, this.language = n.language || 0, this.avatar = n.avatar || '', this.messageSettings = n.messageSettings || 0, this.adminForbidType = n.adminForbidType || t.FORBID_TYPE_NONE, this.level = n.level || 0, this.role = n.role || 0, this.lastUpdatedTime = 0, this.profileCustomField = [], Xe(n.profileCustomField) || n.profileCustomField.forEach((function(e) {
        r.profileCustomField.push({ key: e.key, value: e.value })
      })))
    } return i(e, [{ key: 'validate', value: function(e) {
      let t = !0; let n = ''; if (Xe(e)) return { valid: !1, tips: 'empty options' }; if (e.profileCustomField) {
        for (let o = e.profileCustomField.length, r = null, i = 0; i < o; i++) {
          if (r = e.profileCustomField[i], !_e(r.key) || -1 === r.key.indexOf('Tag_Profile_Custom')) return { valid: !1, tips: '自定义资料字段的前缀必须是 Tag_Profile_Custom' }; if (!_e(r.value)) return { valid: !1, tips: '自定义资料字段的 value 必须是字符串' }
        }
      } for (const s in e) {
        if (Object.prototype.hasOwnProperty.call(e, s)) {
          if ('profileCustomField' === s) continue; if (Xe(e[s]) && !_e(e[s]) && !fe(e[s])) {
            n = 'key:' + s + ', invalid value:' + e[s], t = !1; continue
          } switch (s) {
            case 'nick': _e(e[s]) || (n = 'nick should be a string', t = !1), Le(e[s]) > 500 && (n = 'nick name limited: must less than or equal to '.concat(500, ' bytes, current size: ').concat(Le(e[s]), ' bytes'), t = !1); break; case 'gender': be(Et, e.gender) || (n = 'key:gender, invalid value:' + e.gender, t = !1); break; case 'birthday': fe(e.birthday) || (n = 'birthday should be a number', t = !1); break; case 'location': _e(e.location) || (n = 'location should be a string', t = !1); break; case 'selfSignature': _e(e.selfSignature) || (n = 'selfSignature should be a string', t = !1); break; case 'allowType': be(Dt, e.allowType) || (n = 'key:allowType, invalid value:' + e.allowType, t = !1); break; case 'language': fe(e.language) || (n = 'language should be a number', t = !1); break; case 'avatar': _e(e.avatar) || (n = 'avatar should be a string', t = !1); break; case 'messageSettings': 0 !== e.messageSettings && 1 !== e.messageSettings && (n = 'messageSettings should be 0 or 1', t = !1); break; case 'adminForbidType': be(Tt, e.adminForbidType) || (n = 'key:adminForbidType, invalid value:' + e.adminForbidType, t = !1); break; case 'level': fe(e.level) || (n = 'level should be a number', t = !1); break; case 'role': fe(e.role) || (n = 'role should be a number', t = !1); break; default: n = 'unknown key:' + s + '  ' + e[s], t = !1
          }
        }
      } return { valid: t, tips: n }
    } }]), e
  }(); const es = function() {
    function t(e) {
      o(this, t), this.userController = e, this.TAG = 'profile', this.Actions = { Q: 'query', U: 'update' }, this.accountProfileMap = new Map, this.expirationTime = 864e5
    } return i(t, [{ key: 'setExpirationTime', value: function(e) {
      this.expirationTime = e
    } }, { key: 'getUserProfile', value: function(e) {
      const t = this; const n = e.userIDList; e.fromAccount = this.userController.getMyAccount(), n.length > 100 && (de.warn('ProfileHandler.getUserProfile 获取用户资料人数不能超过100人'), n.length = 100); for (var o, r = [], i = [], s = 0, a = n.length; s < a; s++)o = n[s], this.userController.isMyFriend(o) && this._containsAccount(o) ? i.push(this._getProfileFromMap(o)) : r.push(o); if (0 === r.length) return Mr(i); e.toAccount = r; const u = e.bFromGetMyProfile || !1; const c = []; e.toAccount.forEach((function(e) {
        c.push({ toAccount: e, standardSequence: 0, customSequence: 0 })
      })), e.userItem = c; const l = new qr(Ui); l.setText(n.length > 5 ? 'userIDList.length='.concat(n.length) : 'userIDList='.concat(n)); const p = this.userController.generateConfig(this.TAG, this.Actions.Q, e); return this.userController.request(p).then((function(e) {
        l.setNetworkType(t.userController.getNetworkType()).setEnd(), de.info('ProfileHandler.getUserProfile ok'); const n = t._handleResponse(e).concat(i); return u ? (t.userController.onGotMyProfile(), new vr(n[0])) : new vr(n)
      })).catch((function(e) {
        return t.userController.probeNetwork().then((function(t) {
          const n = y(t, 2); const o = n[0]; const r = n[1]; l.setError(e, o, r).setEnd()
        })), de.error('ProfileHandler.getUserProfile error:', e), Cr(e)
      }))
    } }, { key: 'getMyProfile', value: function() {
      const e = this.userController.getMyAccount(); if (de.log('ProfileHandler.getMyProfile myAccount=' + e), this._fillMap(), this._containsAccount(e)) {
        const t = this._getProfileFromMap(e); return de.debug('ProfileHandler.getMyProfile from cache, myProfile:' + JSON.stringify(t)), this.userController.onGotMyProfile(), Mr(t)
      } return this.getUserProfile({ fromAccount: e, userIDList: [e], bFromGetMyProfile: !0 })
    } }, { key: '_handleResponse', value: function(e) {
      for (var t, n, o = Ae.now(), r = e.data.userProfileItem, i = [], s = 0, a = r.length; s < a; s++)'@TLS#NOT_FOUND' !== r[s].to && '' !== r[s].to && (t = r[s].to, n = this._updateMap(t, this._getLatestProfileFromResponse(t, r[s].profileItem)), i.push(n)); return de.log('ProfileHandler._handleResponse cost ' + (Ae.now() - o) + ' ms'), i
    } }, { key: '_getLatestProfileFromResponse', value: function(e, t) {
      const n = {}; if (n.userID = e, n.profileCustomField = [], !Xe(t)) {
        for (let o = 0, r = t.length; o < r; o++) {
          if (t[o].tag.indexOf('Tag_Profile_Custom') > -1)n.profileCustomField.push({ key: t[o].tag, value: t[o].value }); else {
            switch (t[o].tag) {
              case Ct.NICK: n.nick = t[o].value; break; case Ct.GENDER: n.gender = t[o].value; break; case Ct.BIRTHDAY: n.birthday = t[o].value; break; case Ct.LOCATION: n.location = t[o].value; break; case Ct.SELFSIGNATURE: n.selfSignature = t[o].value; break; case Ct.ALLOWTYPE: n.allowType = t[o].value; break; case Ct.LANGUAGE: n.language = t[o].value; break; case Ct.AVATAR: n.avatar = t[o].value; break; case Ct.MESSAGESETTINGS: n.messageSettings = t[o].value; break; case Ct.ADMINFORBIDTYPE: n.adminForbidType = t[o].value; break; case Ct.LEVEL: n.level = t[o].value; break; case Ct.ROLE: n.role = t[o].value; break; default: de.warn('ProfileHandler._handleResponse unkown tag->', t[o].tag, t[o].value)
            }
          }
        }
      } return n
    } }, { key: 'updateMyProfile', value: function(t) {
      const n = this; const o = new qr(qi); o.setText(JSON.stringify(t)); const r = (new Zi).validate(t); if (!r.valid) return o.setCode(qt.UPDATE_PROFILE_INVALID_PARAM).setMessage('ProfileHandler.updateMyProfile info:'.concat(r.tips)).setNetworkType(this.userController.getNetworkType()).setEnd(), de.error('ProfileHandler.updateMyProfile info:'.concat(r.tips, '，请参考 https://imsdk-1252463788.file.myqcloud.com/IM_DOC/Web/SDK.html#updateMyProfile')), Cr({ code: qt.UPDATE_PROFILE_INVALID_PARAM, message: Nn }); const i = []; for (const s in t) {
        Object.prototype.hasOwnProperty.call(t, s) && ('profileCustomField' === s ? t.profileCustomField.forEach((function(e) {
          i.push({ tag: e.key, value: e.value })
        })) : i.push({ tag: Ct[s.toUpperCase()], value: t[s] }))
      } if (0 === i.length) return o.setCode(qt.UPDATE_PROFILE_NO_KEY).setMessage(Ln).setNetworkType(this.userController.getNetworkType()).setEnd(), de.error('ProfileHandler.updateMyProfile info:'.concat(Ln, '，请参考 https://imsdk-1252463788.file.myqcloud.com/IM_DOC/Web/SDK.html#updateMyProfile')), Cr({ code: qt.UPDATE_PROFILE_NO_KEY, message: Ln }); const a = this.userController.generateConfig(this.TAG, this.Actions.U, { fromAccount: this.userController.getMyAccount(), profileItem: i }); return this.userController.request(a).then((function(r) {
        o.setNetworkType(n.userController.getNetworkType()).setEnd(), de.info('ProfileHandler.updateMyProfile ok'); const i = n._updateMap(n.userController.getMyAccount(), t); return n.userController.emitOuterEvent(e.PROFILE_UPDATED, [i]), Mr(i)
      })).catch((function(e) {
        return n.userController.probeNetwork().then((function(t) {
          const n = y(t, 2); const r = n[0]; const i = n[1]; o.setError(e, r, i).setEnd()
        })), de.error('ProfileHandler.updateMyProfile error:', e), Cr(e)
      }))
    } }, { key: 'onProfileModified', value: function(t) {
      const n = t.data; if (!Xe(n)) {
        let o; let r; const i = n.length; de.info('ProfileHandler.onProfileModified length=' + i); for (var s = [], a = 0; a < i; a++)o = n[a].userID, r = this._updateMap(o, this._getLatestProfileFromResponse(o, n[a].profileList)), s.push(r); this.userController.emitInnerEvent(rr, s), this.userController.emitOuterEvent(e.PROFILE_UPDATED, s)
      }
    } }, { key: '_fillMap', value: function() {
      if (0 === this.accountProfileMap.size) {
        for (let e = this._getCachedProfiles(), t = Date.now(), n = 0, o = e.length; n < o; n++)t - e[n].lastUpdatedTime < this.expirationTime && this.accountProfileMap.set(e[n].userID, e[n]); de.log('ProfileHandler._fillMap from cache, map.size=' + this.accountProfileMap.size)
      }
    } }, { key: '_updateMap', value: function(e, t) {
      let n; const o = Date.now(); return this._containsAccount(e) ? (n = this._getProfileFromMap(e), t.profileCustomField && xe(n.profileCustomField, t.profileCustomField), Oe(n, t, ['profileCustomField']), n.lastUpdatedTime = o) : (n = new Zi(t), (this.userController.isMyFriend(e) || e === this.userController.getMyAccount()) && (n.lastUpdatedTime = o, this.accountProfileMap.set(e, n))), this._flushMap(e === this.userController.getMyAccount()), n
    } }, { key: '_flushMap', value: function(e) {
      const t = I(this.accountProfileMap.values()); const n = this.userController.tim.storage; de.debug('ProfileHandler._flushMap length='.concat(t.length, ' flushAtOnce=').concat(e)), n.setItem(this.TAG, t, e)
    } }, { key: '_containsAccount', value: function(e) {
      return this.accountProfileMap.has(e)
    } }, { key: '_getProfileFromMap', value: function(e) {
      return this.accountProfileMap.get(e)
    } }, { key: '_getCachedProfiles', value: function() {
      const e = this.userController.tim.storage.getItem(this.TAG); return Xe(e) ? [] : e
    } }, { key: 'onConversationsProfileUpdated', value: function(e) {
      for (var t, n, o, r = [], i = 0, s = e.length; i < s; i++)n = (t = e[i]).userID, this.userController.isMyFriend(n) && (this._containsAccount(n) ? (o = this._getProfileFromMap(n), Oe(o, t) > 0 && r.push(n)) : r.push(t.userID)); 0 !== r.length && (de.info('ProfileHandler.onConversationsProfileUpdated toAccount:', r), this.getUserProfile({ userIDList: r }))
    } }, { key: 'reset', value: function() {
      this._flushMap(!0), this.accountProfileMap.clear()
    } }]), t
  }(); const ts = function() {
    function e(t) {
      o(this, e), this.options = t ? t.options : { enablePointer: !0 }, this.pointsList = {}, this.reportText = {}, this.maxNameLen = 0, this.gapChar = '-', this.log = console.log, this.currentTask = ''
    } return i(e, [{ key: 'newTask', value: function(e) {
      !1 !== this.options.enablePointer && (e || (e = ['task', this._timeFormat()].join('-')), this.pointsList[e] = [], this.currentTask = e, console.log('Pointer new Task : '.concat(this.currentTask)))
    } }, { key: 'deleteTask', value: function(e) {
      !1 !== this.options.enablePointer && (e || (e = this.currentTask), this.pointsList[e].length = 0, delete this.pointsList[e])
    } }, { key: 'dot', value: function() {
      const e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ''; let t = arguments.length > 1 ? arguments[1] : void 0; if (!1 !== this.options.enablePointer) {
        t = t || this.currentTask; const n = +new Date; this.maxNameLen = this.maxNameLen < e.length ? e.length : this.maxNameLen, this.flen = this.maxNameLen + 10, this.pointsList[t].push({ pointerName: e, time: n })
      }
    } }, { key: '_analisys', value: function(e) {
      if (!1 !== this.options.enablePointer) {
        e = e || this.currentTask; for (var t = this.pointsList[e], n = t.length, o = [], r = [], i = 0; i < n; i++)0 !== i && (r = this._analisysTowPoints(t[i - 1], t[i]), o.push(r.join(''))); return r = this._analisysTowPoints(t[0], t[n - 1], !0), o.push(r.join('')), o.join('')
      }
    } }, { key: '_analisysTowPoints', value: function(e, t) {
      const n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2]; if (!1 !== this.options.enablePointer) {
        const o = this.flen; const r = t.time - e.time; const i = r.toString(); const s = e.pointerName + this.gapChar.repeat(o - e.pointerName.length); const a = t.pointerName + this.gapChar.repeat(o - t.pointerName.length); const u = this.gapChar.repeat(4 - i.length) + i; const c = n ? ['%c', s, a, u, 'ms\n%c'] : [s, a, u, 'ms\n']; return c
      }
    } }, { key: 'report', value: function(e) {
      if (!1 !== this.options.enablePointer) {
        e = e || this.currentTask; const t = this._analisys(e); this.pointsList = []; const n = this._timeFormat(); const o = 'Pointer['.concat(e, '(').concat(n, ')]'); const r = 4 * this.maxNameLen; const i = (r - o.length) / 2; console.log(['-'.repeat(i), o, '-'.repeat(i)].join('')), console.log('%c' + t, 'color:#66a', 'color:red', 'color:#66a'), console.log('-'.repeat(r))
      }
    } }, { key: '_timeFormat', value: function() {
      const e = new Date; const t = this.zeroFix(e.getMonth() + 1, 2); const n = this.zeroFix(e.getDate(), 2); return ''.concat(t, '-').concat(n, ' ').concat(e.getHours(), ':').concat(e.getSeconds(), ':').concat(e.getMinutes(), '~').concat(e.getMilliseconds())
    } }, { key: 'zeroFix', value: function(e, t) {
      return ('000000000' + e).slice(-t)
    } }, { key: 'reportAll', value: function() {
      if (!1 !== this.options.enablePointer) for (const e in this.pointsList)Object.prototype.hasOwnProperty.call(this.pointsList, e) && this.eport(e)
    } }]), e
  }(); const ns = function e(t, n) {
    o(this, e), this.userID = t; const r = {}; if (r.userID = t, !Xe(n)) {
      for (let i = 0, s = n.length; i < s; i++) {
        switch (n[i].tag) {
          case Ct.NICK: r.nick = n[i].value; break; case Ct.GENDER: r.gender = n[i].value; break; case Ct.BIRTHDAY: r.birthday = n[i].value; break; case Ct.LOCATION: r.location = n[i].value; break; case Ct.SELFSIGNATURE: r.selfSignature = n[i].value; break; case Ct.ALLOWTYPE: r.allowType = n[i].value; break; case Ct.LANGUAGE: r.language = n[i].value; break; case Ct.AVATAR: r.avatar = n[i].value; break; case Ct.MESSAGESETTINGS: r.messageSettings = n[i].value; break; case Ct.ADMINFORBIDTYPE: r.adminForbidType = n[i].value; break; case Ct.LEVEL: r.level = n[i].value; break; case Ct.ROLE: r.role = n[i].value; break; default: de.debug('snsProfileItem unkown tag->', n[i].tag)
        }
      }
    } this.profile = new Zi(r)
  }; const os = function() {
    function e(t) {
      o(this, e), this.userController = t, this.TAG = 'friend', this.Actions = { G: 'get', D: 'delete' }, this.friends = new Map, this.pointer = new ts
    } return i(e, [{ key: 'isMyFriend', value: function(e) {
      const t = this.friends.has(e); return t || de.debug('FriendHandler.isMyFriend ' + e + ' is not my friend'), t
    } }, { key: '_transformFriendList', value: function(e) {
      if (!Xe(e) && !Xe(e.infoItem)) {
        de.info('FriendHandler._transformFriendList friendNum=' + e.friendNum); for (var t, n, o = e.infoItem, r = 0, i = o.length; r < i; r++)n = o[r].infoAccount, t = new ns(n, o[r].snsProfileItem), this.friends.set(n, t)
      }
    } }, { key: '_friends2map', value: function(e) {
      const t = new Map; for (const n in e)Object.prototype.hasOwnProperty.call(e, n) && t.set(n, e[n]); return t
    } }, { key: 'getFriendList', value: function() {
      const e = this; const t = {}; t.fromAccount = this.userController.getMyAccount(), de.info('FriendHandler.getFriendList myAccount=' + t.fromAccount); const n = this.userController.generateConfig(this.TAG, this.Actions.G, t); return this.userController.request(n).then((function(t) {
        de.info('FriendHandler.getFriendList ok'), e._transformFriendList(t.data); const n = I(e.friends.values()); return Mr(n)
      })).catch((function(e) {
        return de.error('FriendHandler.getFriendList error:', e), Cr(e)
      }))
    } }, { key: 'deleteFriend', value: function(e) {
      if (!Array.isArray(e.toAccount)) return de.error('FriendHandler.deleteFriend options.toAccount 必需是数组'), Cr({ code: qt.DEL_FRIEND_INVALID_PARAM, message: Rn }); e.toAccount.length > 1e3 && (de.warn('FriendHandler.deleteFriend 删除好友人数不能超过1000人'), e.toAccount.length = 1e3); const t = this.userController.generateConfig(this.TAG, this.Actions.D, e); return this.userController.request(t).then((function(e) {
        return de.info('FriendHandler.deleteFriend ok'), Mr()
      })).catch((function(e) {
        return de.error('FriendHandler.deleteFriend error:', e), Cr(e)
      }))
    } }]), e
  }(); const rs = function e(t) {
    o(this, e), Xe || (this.userID = t.userID || '', this.timeStamp = t.timeStamp || 0)
  }; const is = function() {
    function t(e) {
      o(this, t), this.userController = e, this.TAG = 'blacklist', this.Actions = { G: 'get', C: 'create', D: 'delete' }, this.blacklistMap = new Map, this.startIndex = 0, this.maxLimited = 100, this.curruentSequence = 0
    } return i(t, [{ key: 'getBlacklist', value: function() {
      const e = this; const t = {}; t.fromAccount = this.userController.getMyAccount(), t.maxLimited = this.maxLimited, t.startIndex = 0, t.lastSequence = this.curruentSequence; const n = new qr(Fi); const o = this.userController.generateConfig(this.TAG, this.Actions.G, t); return this.userController.request(o).then((function(t) {
        const o = Xe(t.data.blackListItem) ? 0 : t.data.blackListItem.length; return n.setNetworkType(e.userController.getNetworkType()).setText(o).setEnd(), de.info('BlacklistHandler.getBlacklist ok'), e.curruentSequence = t.data.curruentSequence, e._handleResponse(t.data.blackListItem, !0), e._onBlacklistUpdated()
      })).catch((function(t) {
        return e.userController.probeNetwork().then((function(e) {
          const o = y(e, 2); const r = o[0]; const i = o[1]; n.setError(t, r, i).setEnd()
        })), de.error('BlacklistHandler.getBlacklist error:', t), Cr(t)
      }))
    } }, { key: 'addBlacklist', value: function(e) {
      const t = this; const n = new qr(xi); if (!Ie(e.userIDList)) return n.setCode(qt.ADD_BLACKLIST_INVALID_PARAM).setMessage('BlacklistHandler.addBlacklist options.userIDList 必需是数组').setNetworkType(this.userController.getNetworkType()).setEnd(), de.error('BlacklistHandler.addBlacklist options.userIDList 必需是数组'), Cr({ code: qt.ADD_BLACKLIST_INVALID_PARAM, message: wn }); const o = this.userController.tim.loginInfo.identifier; if (1 === e.userIDList.length && e.userIDList[0] === o) return n.setCode(qt.CANNOT_ADD_SELF_TO_BLACKLIST).setMessage(Gn).setNetworkType(this.userController.getNetworkType()).setEnd(), de.error('BlacklistHandler.addBlacklist 不能把自己拉黑'), Cr({ code: qt.CANNOT_ADD_SELF_TO_BLACKLIST, message: Gn }); e.userIDList.includes(o) && (e.userIDList = e.userIDList.filter((function(e) {
        return e !== o
      })), de.warn('BlacklistHandler.addBlacklist 不能把自己拉黑，已过滤')), e.fromAccount = this.userController.getMyAccount(), e.toAccount = e.userIDList; const r = this.userController.generateConfig(this.TAG, this.Actions.C, e); return this.userController.request(r).then((function(o) {
        return n.setNetworkType(t.userController.getNetworkType()).setText(e.userIDList.length > 5 ? 'userIDList.length='.concat(e.userIDList.length) : 'userIDList='.concat(e.userIDList)).setEnd(), de.info('BlacklistHandler.addBlacklist ok'), t._handleResponse(o.data.resultItem, !0), t._onBlacklistUpdated()
      })).catch((function(e) {
        return t.userController.probeNetwork().then((function(t) {
          const o = y(t, 2); const r = o[0]; const i = o[1]; n.setError(e, r, i).setEnd()
        })), de.error('BlacklistHandler.addBlacklist error:', e), Cr(e)
      }))
    } }, { key: '_handleResponse', value: function(e, t) {
      if (!Xe(e)) for (var n, o, r, i = 0, s = e.length; i < s; i++)o = e[i].to, r = e[i].resultCode, (Me(r) || 0 === r) && (t ? ((n = this.blacklistMap.has(o) ? this.blacklistMap.get(o) : new rs).userID = o, !Xe(e[i].addBlackTimeStamp) && (n.timeStamp = e[i].addBlackTimeStamp), this.blacklistMap.set(o, n)) : this.blacklistMap.has(o) && (n = this.blacklistMap.get(o), this.blacklistMap.delete(o))); de.log('BlacklistHandler._handleResponse total=' + this.blacklistMap.size + ' bAdd=' + t)
    } }, { key: 'deleteBlacklist', value: function(e) {
      const t = this; const n = new qr(Vi); if (!Ie(e.userIDList)) return n.setCode(qt.DEL_BLACKLIST_INVALID_PARAM).setMessage('BlacklistHandler.deleteBlacklist options.userIDList 必需是数组').setNetworkType(this.userController.getNetworkType()).setEnd(), de.error('BlacklistHandler.deleteBlacklist options.userIDList 必需是数组'), Cr({ code: qt.DEL_BLACKLIST_INVALID_PARAM, message: Pn }); e.fromAccount = this.userController.getMyAccount(), e.toAccount = e.userIDList; const o = this.userController.generateConfig(this.TAG, this.Actions.D, e); return this.userController.request(o).then((function(o) {
        return n.setNetworkType(t.userController.getNetworkType()).setText(e.userIDList.length > 5 ? 'userIDList.length='.concat(e.userIDList.length) : 'userIDList='.concat(e.userIDList)).setEnd(), de.info('BlacklistHandler.deleteBlacklist ok'), t._handleResponse(o.data.resultItem, !1), t._onBlacklistUpdated()
      })).catch((function(e) {
        return t.userController.probeNetwork().then((function(t) {
          const o = y(t, 2); const r = o[0]; const i = o[1]; n.setError(e, r, i).setEnd()
        })), de.error('BlacklistHandler.deleteBlacklist error:', e), Cr(e)
      }))
    } }, { key: '_onBlacklistUpdated', value: function() {
      const t = I(this.blacklistMap.keys()); return this.userController.emitOuterEvent(e.BLACKLIST_UPDATED, t), Mr(t)
    } }, { key: 'handleBlackListDelAccount', value: function(t) {
      for (var n, o = [], r = 0, i = t.length; r < i; r++)n = t[r], this.blacklistMap.has(n) && (this.blacklistMap.delete(n), o.push(n)); o.length > 0 && (de.log('BlacklistHandler.handleBlackListDelAccount delCount=' + o.length + ' : ' + o.join(',')), this.userController.emitOuterEvent(e.BLACKLIST_UPDATED, I(this.blacklistMap.keys())))
    } }, { key: 'handleBlackListAddAccount', value: function(t) {
      for (var n, o = [], r = 0, i = t.length; r < i; r++)n = t[r], this.blacklistMap.has(n) || (this.blacklistMap.set(n, new rs({ userID: n })), o.push(n)); o.length > 0 && (de.log('BlacklistHandler.handleBlackListAddAccount addCount=' + o.length + ' : ' + o.join(',')), this.userController.emitOuterEvent(e.BLACKLIST_UPDATED, I(this.blacklistMap.keys())))
    } }, { key: 'reset', value: function() {
      this.blacklistMap.clear(), this.startIndex = 0, this.maxLimited = 100, this.curruentSequence = 0
    } }]), t
  }(); const ss = function() {
    function e(t) {
      o(this, e), this.userController = t, this.TAG = 'applyC2C', this.Actions = { C: 'create', G: 'get', D: 'delete', U: 'update' }
    } return i(e, [{ key: 'applyAddFriend', value: function(e) {
      const t = this; const n = this.userController.generateConfig(this.TAG, this.Actions.C, e); const o = this.userController.request(n); return o.then((function(e) {
        t.userController.isActionSuccessful('applyAddFriend', t.Actions.C, e)
      })).catch((function(e) {})), o
    } }, { key: 'getPendency', value: function(e) {
      const t = this; const n = this.userController.generateConfig(this.TAG, this.Actions.G, e); const o = this.userController.request(n); return o.then((function(e) {
        t.userController.isActionSuccessful('getPendency', t.Actions.G, e)
      })).catch((function(e) {})), o
    } }, { key: 'deletePendency', value: function(e) {
      const t = this; const n = this.userController.generateConfig(this.TAG, this.Actions.D, e); const o = this.userController.request(n); return o.then((function(e) {
        t.userController.isActionSuccessful('deletePendency', t.Actions.D, e)
      })).catch((function(e) {})), o
    } }, { key: 'replyPendency', value: function() {
      const e = this; const t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}; const n = this.userController.generateConfig(this.TAG, this.Actions.U, t); const o = this.userController.request(n); return o.then((function(t) {
        e.userController.isActionSuccessful('replyPendency', e.Actions.U, t)
      })).catch((function(e) {})), o
    } }]), e
  }(); const as = function(e) {
    c(n, e); const t = v(n); function n(e) {
      let r; return o(this, n), (r = t.call(this, e)).profileHandler = new es(f(r)), r.friendHandler = new os(f(r)), r.blacklistHandler = new is(f(r)), r.applyC2CHandler = new ss(f(r)), r._initializeListener(), r
    } return i(n, [{ key: '_initializeListener', value: function(e) {
      const t = this.tim.innerEmitter; t.on(Mo, this.onContextUpdated, this), t.on(Ho, this.onProfileModified, this), t.on(Ko, this.onNewFriendMessages, this), t.on(nr, this.onConversationsProfileUpdated, this)
    } }, { key: 'onContextUpdated', value: function(e) {
      const t = this.tim.context; !1 != !!t.a2Key && !1 != !!t.tinyID && (this.profileHandler.getMyProfile(), this.friendHandler.getFriendList(), this.blacklistHandler.getBlacklist())
    } }, { key: 'onGotMyProfile', value: function() {
      this.triggerReady()
    } }, { key: 'onProfileModified', value: function(e) {
      this.profileHandler.onProfileModified(e)
    } }, { key: 'onNewFriendMessages', value: function(e) {
      de.debug('onNewFriendMessages', JSON.stringify(e.data)), Xe(e.data.blackListDelAccount) || this.blacklistHandler.handleBlackListDelAccount(e.data.blackListDelAccount), Xe(e.data.blackListAddAccount) || this.blacklistHandler.handleBlackListAddAccount(e.data.blackListAddAccount)
    } }, { key: 'onConversationsProfileUpdated', value: function(e) {
      this.profileHandler.onConversationsProfileUpdated(e.data)
    } }, { key: 'getMyAccount', value: function() {
      return this.tim.context.identifier
    } }, { key: 'isMyFriend', value: function(e) {
      return this.friendHandler.isMyFriend(e)
    } }, { key: 'generateConfig', value: function(e, t, n) {
      return { name: e, action: t, param: n }
    } }, { key: 'getMyProfile', value: function() {
      return this.profileHandler.getMyProfile()
    } }, { key: 'getUserProfile', value: function(e) {
      return this.profileHandler.getUserProfile(e)
    } }, { key: 'updateMyProfile', value: function(e) {
      return this.profileHandler.updateMyProfile(e)
    } }, { key: 'getFriendList', value: function() {
      return this.friendHandler.getFriendList()
    } }, { key: 'deleteFriend', value: function(e) {
      return this.friendHandler.deleteFriend(e)
    } }, { key: 'getBlacklist', value: function() {
      return this.blacklistHandler.getBlacklist()
    } }, { key: 'addBlacklist', value: function(e) {
      return this.blacklistHandler.addBlacklist(e)
    } }, { key: 'deleteBlacklist', value: function(e) {
      return this.blacklistHandler.deleteBlacklist(e)
    } }, { key: 'applyAddFriend', value: function(e) {
      return this.applyC2CHandler.applyAddFriend(e)
    } }, { key: 'getPendency', value: function(e) {
      return this.applyC2CHandler.getPendency(e)
    } }, { key: 'deletePendency', value: function(e) {
      return this.applyC2CHandler.deletePendency(e)
    } }, { key: 'replyPendency', value: function(e) {
      return this.applyC2CHandler.replyPendency(e)
    } }, { key: 'reset', value: function() {
      de.info('UserController.reset'), this.resetReady(), this.profileHandler.reset(), this.blacklistHandler.reset(), this.checkTimes = 0
    } }]), n
  }(mr); const us = ['groupID', 'name', 'avatar', 'type', 'introduction', 'notification', 'ownerID', 'selfInfo', 'createTime', 'infoSequence', 'lastInfoTime', 'lastMessage', 'nextMessageSeq', 'memberNum', 'maxMemberNum', 'memberList', 'joinOption', 'groupCustomField', 'muteAllMembers']; const cs = function() {
    function e(t) {
      o(this, e), this.groupID = '', this.name = '', this.avatar = '', this.type = '', this.introduction = '', this.notification = '', this.ownerID = '', this.createTime = '', this.infoSequence = '', this.lastInfoTime = '', this.selfInfo = { messageRemindType: '', joinTime: '', nameCard: '', role: '' }, this.lastMessage = { lastTime: '', lastSequence: '', fromAccount: '', messageForShow: '' }, this.nextMessageSeq = '', this.memberNum = '', this.memberCount = '', this.maxMemberNum = '', this.maxMemberCount = '', this.joinOption = '', this.groupCustomField = [], this.muteAllMembers = void 0, this._initGroup(t)
    } return i(e, [{ key: '_initGroup', value: function(e) {
      for (const t in e)us.indexOf(t) < 0 || ('selfInfo' !== t ? ('memberNum' === t && (this.memberCount = e[t]), 'maxMemberNum' === t && (this.maxMemberCount = e[t]), this[t] = e[t]) : this.updateSelfInfo(e[t]))
    } }, { key: 'updateGroup', value: function(e) {
      const t = JSON.parse(JSON.stringify(e)); t.lastMsgTime && (this.lastMessage.lastTime = t.lastMsgTime), Me(t.muteAllMembers) || ('On' === t.muteAllMembers ? t.muteAllMembers = !0 : t.muteAllMembers = !1), t.groupCustomField && xe(this.groupCustomField, t.groupCustomField), Me(t.memberNum) || (this.memberCount = t.memberNum), Me(t.maxMemberNum) || (this.maxMemberCount = t.maxMemberNum), Oe(this, t, ['members', 'errorCode', 'lastMsgTime', 'groupCustomField', 'memberNum', 'maxMemberNum'])
    } }, { key: 'updateSelfInfo', value: function(e) {
      const t = e.nameCard; const n = e.joinTime; const o = e.role; const r = e.messageRemindType; Oe(this.selfInfo, { nameCard: t, joinTime: n, role: o, messageRemindType: r }, [], ['', null, void 0, 0, NaN])
    } }, { key: 'setSelfNameCard', value: function(e) {
      this.selfInfo.nameCard = e
    } }, { key: 'memberNum', set: function(e) {}, get: function() {
      return de.warn('！！！v2.8.0起弃用memberNum，请使用 memberCount'), this.memberCount
    } }, { key: 'maxMemberNum', set: function(e) {}, get: function() {
      return de.warn('！！！v2.8.0起弃用maxMemberNum，请使用 maxMemberCount'), this.maxMemberCount
    } }]), e
  }(); const ls = function(e, n) {
    if (Me(n)) return ''; switch (e) {
      case t.MSG_TEXT: return n.text; case t.MSG_IMAGE: return '[图片]'; case t.MSG_GEO: return '[位置]'; case t.MSG_AUDIO: return '[语音]'; case t.MSG_VIDEO: return '[视频]'; case t.MSG_FILE: return '[文件]'; case t.MSG_CUSTOM: return '[自定义消息]'; case t.MSG_GRP_TIP: return '[群提示消息]'; case t.MSG_GRP_SYS_NOTICE: return '[群系统通知]'; case t.MSG_FACE: return '[动画表情]'; default: return ''
    }
  }; const ps = function(e) {
    return Me(e) ? { lastTime: 0, lastSequence: 0, fromAccount: 0, messageForShow: '', payload: null, type: '', isRevoked: !1 } : e instanceof Qn ? { lastTime: e.time || 0, lastSequence: e.sequence || 0, fromAccount: e.from || '', messageForShow: ls(e.type, e.payload), payload: e.payload || null, type: e.type || null, isRevoked: !1 } : u(u({}, e), {}, { isRevoked: !1, messageForShow: ls(e.type, e.payload) })
  }; const gs = function() {
    function e(t) {
      o(this, e), this.conversationID = t.conversationID || '', this.unreadCount = t.unreadCount || 0, this.type = t.type || '', this.lastMessage = ps(t.lastMessage), t.lastMsgTime && (this.lastMessage.lastTime = t.lastMsgTime), this._isInfoCompleted = !1, this.peerReadTime = t.peerReadTime || 0, this.groupAtInfoList = [], this._initProfile(t)
    } return i(e, [{ key: '_initProfile', value: function(e) {
      const n = this; Object.keys(e).forEach((function(t) {
        switch (t) {
          case 'userProfile': n.userProfile = e.userProfile; break; case 'groupProfile': n.groupProfile = e.groupProfile
        }
      })), Me(this.userProfile) && this.type === t.CONV_C2C ? this.userProfile = new Zi({ userID: e.conversationID.replace('C2C', '') }) : Me(this.groupProfile) && this.type === t.CONV_GROUP && (this.groupProfile = new cs({ groupID: e.conversationID.replace('GROUP', '') }))
    } }, { key: 'updateUnreadCount', value: function(e, n) {
      Me(e) || (He(this.subType) || Be(this.subType) ? this.unreadCount = 0 : n && this.type === t.CONV_GROUP ? this.unreadCount = e : this.unreadCount = this.unreadCount + e)
    } }, { key: 'updateLastMessage', value: function(e) {
      this.lastMessage = ps(e)
    } }, { key: 'updateGroupAtInfoList', value: function(e) {
      let n; let o = (M(n = e.groupAtType) || C(n) || E(n) || D()).slice(0); -1 !== o.indexOf(t.CONV_AT_ME) && -1 !== o.indexOf(t.CONV_AT_ALL) && (o = [t.CONV_AT_ALL_AT_ME]); const r = { from: e.from, groupID: e.groupID, messageSequence: e.sequence, atTypeArray: o, __random: e.__random, __sequence: e.__sequence }; this.groupAtInfoList.push(r), de.debug('Conversation.updateGroupAtInfoList conversationID='.concat(this.conversationID), this.groupAtInfoList)
    } }, { key: 'clearGroupAtInfoList', value: function() {
      this.groupAtInfoList.length = 0
    } }, { key: 'reduceUnreadCount', value: function() {
      this.unreadCount >= 1 && (this.unreadCount -= 1)
    } }, { key: 'isLastMessageRevoked', value: function(e) {
      const n = e.sequence; const o = e.time; return this.type === t.CONV_C2C && n === this.lastMessage.lastSequence && o === this.lastMessage.lastTime || this.type === t.CONV_GROUP && n === this.lastMessage.lastSequence
    } }, { key: 'setLastMessageRevoked', value: function(e) {
      this.lastMessage.isRevoked = e
    } }, { key: 'toAccount', get: function() {
      return this.conversationID.replace('C2C', '').replace('GROUP', '')
    } }, { key: 'subType', get: function() {
      return this.groupProfile ? this.groupProfile.type : ''
    } }]), e
  }(); const hs = function(n) {
    c(s, n); const r = v(s); function s(e) {
      let t; return o(this, s), (t = r.call(this, e)).pagingStatus = it.NOT_START, t.pagingTimeStamp = 0, t.conversationMap = new Map, t.tempGroupList = [], t.tempGroupAtTipsList = [], t._initListeners(), t
    } return i(s, [{ key: 'hasLocalConversationMap', value: function() {
      return this.conversationMap.size > 0
    } }, { key: '_createLocalConversation', value: function(e) {
      return this.conversationMap.has(e) ? this.conversationMap.get(e) : (de.log('ConversationController._createLocalConversation conversationID:'.concat(e)), new gs({ conversationID: e, type: e.slice(0, 3) === t.CONV_C2C ? t.CONV_C2C : t.CONV_GROUP }))
    } }, { key: 'hasLocalConversation', value: function(e) {
      return this.conversationMap.has(e)
    } }, { key: 'getConversationList', value: function() {
      const e = this; de.log('ConversationController.getConversationList.'), this.pagingStatus === it.REJECTED && (de.log('ConversationController.getConversationList. continue to sync conversationList'), this._syncConversationList()); const t = new qr(oi); return this.request({ name: 'conversation', action: 'query' }).then((function(n) {
        const o = n.data.conversations; const r = void 0 === o ? [] : o; const i = e._getConversationOptions(r); return e._updateLocalConversationList(i, !0), e._setStorageConversationList(), e._handleC2CPeerReadTime(), t.setText(r.length).setNetworkType(e.getNetworkType()).setEnd(), de.log('ConversationController.getConversationList ok.'), Mr({ conversationList: e.getLocalConversationList() })
      })).catch((function(n) {
        return e.probeNetwork().then((function(e) {
          const o = y(e, 2); const r = o[0]; const i = o[1]; t.setError(n, r, i).setEnd()
        })), de.error('ConversationController.getConversationList error:', n), Cr(n)
      }))
    } }, { key: '_syncConversationList', value: function() {
      const e = this; const t = new qr(ai); return this.pagingStatus === it.NOT_START && this.conversationMap.clear(), this._autoPagingSyncConversationList().then((function(n) {
        return e.pagingStatus = it.RESOLVED, e._setStorageConversationList(), e._handleC2CPeerReadTime(), t.setText(''.concat(e.conversationMap.size)).setNetworkType(e.getNetworkType()).setEnd(), n
      })).catch((function(n) {
        return e.pagingStatus = it.REJECTED, t.setText(e.pagingTimeStamp), e.probeNetwork().then((function(e) {
          const o = y(e, 2); const r = o[0]; const i = o[1]; t.setError(n, r, i).setEnd()
        })), Cr(n)
      }))
    } }, { key: '_autoPagingSyncConversationList', value: function() {
      const e = this; return this.pagingStatus = it.PENDING, this.request({ name: 'conversation', action: 'pagingQuery', param: { fromAccount: this.tim.context.identifier, timeStamp: this.pagingTimeStamp, orderType: 1 } }).then((function(t) {
        const n = t.data; const o = n.completeFlag; const r = n.conversations; const i = void 0 === r ? [] : r; const s = n.timeStamp; if (de.log('ConversationController._autoPagingSyncConversationList completeFlag='.concat(o, ' nums=').concat(i.length)), i.length > 0) {
          const a = e._getConversationOptions(i); e._updateLocalConversationList(a, !0)
        } if (e._isReady)e._emitConversationUpdate(); else {
          if (!e.isLoggedIn()) return Mr(); e.triggerReady()
        } return e.pagingTimeStamp = s, 1 !== o ? e._autoPagingSyncConversationList() : (e._handleGroupAtTipsList(), Mr())
      })).catch((function(t) {
        throw e.isLoggedIn() && (e._isReady || (de.warn('ConversationController._autoPagingSyncConversationList failed. error:'.concat(Re(t))), e.triggerReady())), t
      }))
    } }, { key: '_handleC2CPeerReadTime', value: function() {
      let e; const n = this.tim.messageController; const o = S(this.conversationMap); try {
        for (o.s(); !(e = o.n()).done;) {
          const r = y(e.value, 2); const i = r[0]; const s = r[1]; s.type === t.CONV_C2C && (de.debug('ConversationController._handleC2CPeerReadTime', i, s.peerReadTime), n.recordPeerReadTime(i, s.peerReadTime))
        }
      } catch (a) {
        o.e(a)
      } finally {
        o.f()
      }
    } }, { key: 'getConversationProfile', value: function(e) {
      const n = this; const o = this.conversationMap.has(e) ? this.conversationMap.get(e) : this._createLocalConversation(e); if (o._isInfoCompleted || o.type === t.CONV_SYSTEM) return Mr({ conversation: o }); const r = new qr(ri); return de.log('ConversationController.getConversationProfile. conversationID:'.concat(e, ' lastMessage:'), o.lastMessage), this._updateUserOrGroupProfileCompletely(o).then((function(t) {
        return r.setNetworkType(n.getNetworkType()).setText('conversationID='.concat(e, ' unreadCount=').concat(t.data.conversation.unreadCount)).setEnd(), de.log('ConversationController.getConversationProfile ok. conversationID:', e), t
      })).catch((function(t) {
        return n.probeNetwork().then((function(n) {
          const o = y(n, 2); const i = o[0]; const s = o[1]; r.setError(t, i, s).setText('conversationID='.concat(e)).setEnd()
        })), de.error('ConversationController.getConversationProfile error:', t), Cr(t)
      }))
    } }, { key: 'deleteConversation', value: function(e) {
      const n = this; const o = {}; if (!this.conversationMap.has(e)) {
        const r = new Ut({ code: qt.CONVERSATION_NOT_FOUND, message: hn }); return Cr(r)
      } switch (this.conversationMap.get(e).type) {
        case t.CONV_C2C: o.type = 1, o.toAccount = e.replace(t.CONV_C2C, ''); break; case t.CONV_GROUP: o.type = 2, o.toGroupID = e.replace(t.CONV_GROUP, ''); break; case t.CONV_SYSTEM: return this.tim.groupController.deleteGroupSystemNotice({ messageList: this.tim.messageController.getLocalMessageList(e) }), this.deleteLocalConversation(e), Mr({ conversationID: e }); default: var i = new Ut({ code: qt.CONVERSATION_UN_RECORDED_TYPE, message: mn }); return Cr(i)
      } const s = new qr(ii); return s.setText('conversationID='.concat(e)), de.log('ConversationController.deleteConversation. conversationID='.concat(e)), this.tim.setMessageRead({ conversationID: e }).then((function() {
        return n.request({ name: 'conversation', action: 'delete', param: o })
      })).then((function() {
        return s.setNetworkType(n.getNetworkType()).setEnd(), de.log('ConversationController.deleteConversation ok.'), n.deleteLocalConversation(e), Mr({ conversationID: e })
      })).catch((function(e) {
        return n.probeNetwork().then((function(t) {
          const n = y(t, 2); const o = n[0]; const r = n[1]; s.setError(e, o, r).setEnd()
        })), de.error('ConversationController.deleteConversation error:', e), Cr(e)
      }))
    } }, { key: 'getLocalConversationList', value: function() {
      return I(this.conversationMap.values())
    } }, { key: 'getLocalConversation', value: function(e) {
      return this.conversationMap.get(e)
    } }, { key: '_initLocalConversationList', value: function() {
      const e = new qr(si); de.time(Gr), de.log('ConversationController._initLocalConversationList.'); const t = this._getStorageConversationList(); if (t) {
        for (var n = t.length, o = 0; o < n; o++) this.conversationMap.set(t[o].conversationID, new gs(t[o])); this._emitConversationUpdate(!0, !1), e.setNetworkType(this.getNetworkType()).setText(n).setEnd()
      } else e.setNetworkType(this.getNetworkType()).setText(0).setEnd(); this._syncConversationList()
    } }, { key: '_getStorageConversationList', value: function() {
      return this.tim.storage.getItem('conversationMap')
    } }, { key: '_setStorageConversationList', value: function() {
      const e = this.getLocalConversationList().slice(0, 20).map((function(e) {
        return { conversationID: e.conversationID, type: e.type, subType: e.subType, lastMessage: e.lastMessage, groupProfile: e.groupProfile, userProfile: e.userProfile }
      })); this.tim.storage.setItem('conversationMap', e)
    } }, { key: '_initListeners', value: function() {
      const e = this; this.tim.innerEmitter.once(Mo, this._initLocalConversationList, this), this.tim.innerEmitter.on(Do, this._onSendOrReceiveMessage, this), this.tim.innerEmitter.on(So, this._handleSyncMessages, this), this.tim.innerEmitter.on(ko, this._handleSyncMessages, this), this.tim.innerEmitter.on(Ao, this._onSendOrReceiveMessage, this), this.tim.innerEmitter.on(Oo, this._onSendOrReceiveMessage, this), this.tim.innerEmitter.on(Ro, this._onSendOrReceiveMessage, this), this.tim.innerEmitter.on(Wo, this._onGroupListUpdated, this), this.tim.innerEmitter.on(rr, this._updateConversationUserProfile, this), this.tim.innerEmitter.on(No, this._onMessageRevoked, this), this.tim.innerEmitter.on(xo, this._onReceiveGroupAtTips, this), this.ready((function() {
        e.tempGroupList.length > 0 && (e._updateConversationGroupProfile(e.tempGroupList), e.tempGroupList.length = 0)
      }))
    } }, { key: '_onGroupListUpdated', value: function(e) {
      this._updateConversationGroupProfile(e.data)
    } }, { key: '_updateConversationGroupProfile', value: function(e) {
      const t = this; Ie(e) && 0 === e.length || (this.hasLocalConversationMap() ? (e.forEach((function(e) {
        const n = 'GROUP'.concat(e.groupID); if (t.conversationMap.has(n)) {
          const o = t.conversationMap.get(n); o.groupProfile = e, o.lastMessage.lastSequence < e.nextMessageSeq && (o.lastMessage.lastSequence = e.nextMessageSeq - 1), o.subType || (o.subType = e.type)
        }
      })), this._emitConversationUpdate(!0, !1)) : this.tempGroupList = e)
    } }, { key: '_updateConversationUserProfile', value: function(e) {
      const t = this; e.data.forEach((function(e) {
        const n = 'C2C'.concat(e.userID); t.conversationMap.has(n) && (t.conversationMap.get(n).userProfile = e)
      })), this._emitConversationUpdate(!0, !1)
    } }, { key: '_onMessageRevoked', value: function(e) {
      const t = this; const n = e.data; if (0 !== n.length) {
        let o = null; let r = !1; n.forEach((function(e) {
          (o = t.conversationMap.get(e.conversationID)) && o.isLastMessageRevoked(e) && (r = !0, o.setLastMessageRevoked(!0))
        })), r && this._emitConversationUpdate(!0, !1)
      }
    } }, { key: '_onReceiveGroupAtTips', value: function(e) {
      const t = this; const n = e.data; let o = null; n.forEach((function(e) {
        e.groupAtTips ? o = e.groupAtTips : e.elements && (o = e.elements), o.__random = e.random, o.__sequence = e.clientSequence, t.tempGroupAtTipsList.push(o)
      })), de.debug('ConversationController._onReceiveGroupAtTips isReady='.concat(this._isReady), this.tempGroupAtTipsList), this._isReady && this._handleGroupAtTipsList()
    } }, { key: '_handleGroupAtTipsList', value: function() {
      const e = this; if (0 !== this.tempGroupAtTipsList.length) {
        let n = !1; this.tempGroupAtTipsList.forEach((function(o) {
          const r = o.groupID; if (o.from !== e.tim.context.identifier) {
            const i = e.conversationMap.get(''.concat(t.CONV_GROUP).concat(r)); i && (i.updateGroupAtInfoList(o), n = !0)
          }
        })), n && this._emitConversationUpdate(!0, !1), this.tempGroupAtTipsList.length = 0
      }
    } }, { key: 'deleteGroupAtTips', value: function(e) {
      de.log('ConversationController.deleteGroupAtTips'); const t = this.conversationMap.get(e); if (!t) return Promise.resolve(); const n = t.groupAtInfoList; if (0 === n.length) return Promise.resolve(); const o = this.tim.context.identifier; return this.request({ name: 'conversation', action: 'deleteGroupAtTips', param: { messageListToDelete: n.map((function(e) {
        return { from: e.from, to: o, messageSeq: e.__sequence, messageRandom: e.__random, groupID: e.groupID }
      })) } }).then((function() {
        return de.log('ConversationController.deleteGroupAtTips ok. nums='.concat(n.length)), t.clearGroupAtInfoList(), Promise.resolve()
      })).catch((function(e) {
        return de.error('ConversationController.deleteGroupAtTips error:', e), Cr(e)
      }))
    } }, { key: '_handleSyncMessages', value: function(e) {
      this._onSendOrReceiveMessage(e, !0)
    } }, { key: '_onSendOrReceiveMessage', value: function(e) {
      const t = this; const n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]; const o = e.data.eventDataList; this._isReady ? 0 !== o.length && (this._getPeerReadTime(o), this._updateLocalConversationList(o, !1, n), this._setStorageConversationList(), this._emitConversationUpdate()) : this.ready((function() {
        t._onSendOrReceiveMessage(e, n)
      }))
    } }, { key: '_getPeerReadTime', value: function(e) {
      const n = this; const o = []; e.forEach((function(e) {
        n.conversationMap.has(e.conversationID) || e.type !== t.CONV_C2C || o.push(e.conversationID.replace(t.CONV_C2C, ''))
      })), o.length > 0 && (de.debug('ConversationController._getPeerReadTime userIDList:'.concat(o)), this.tim.messageController.getPeerReadTime(o))
    } }, { key: '_updateLocalConversationList', value: function(e, t, n) {
      let o; o = this._updateTempConversations(e, t, n), this.conversationMap = new Map(this._sortConversations([].concat(I(o.conversations), I(this.conversationMap)))), t || this._updateUserOrGroupProfile(o.newerConversations)
    } }, { key: '_updateTempConversations', value: function(e, n, o) {
      for (var r = [], i = [], s = 0, a = e.length; s < a; s++) {
        const u = new gs(e[s]); const c = this.conversationMap.get(u.conversationID); if (this.conversationMap.has(u.conversationID)) {
          const l = ['unreadCount', 'allowType', 'adminForbidType', 'payload']; o && l.push('lastMessage'), Oe(c, u, l, [null, void 0, '', 0, NaN]), c.updateUnreadCount(u.unreadCount, n), o || (c.lastMessage.payload = e[s].lastMessage.payload), this.conversationMap.delete(c.conversationID), r.push([c.conversationID, c])
        } else {
          if (u.type === t.CONV_GROUP) {
            const p = u.groupProfile.groupID; const g = this.tim.groupController.getLocalGroupProfile(p); g && (u.groupProfile = g, u.updateUnreadCount(0))
          }i.push(u), r.push([u.conversationID, u])
        }
      } return { conversations: r, newerConversations: i }
    } }, { key: '_sortConversations', value: function(e) {
      return e.sort((function(e, t) {
        return t[1].lastMessage.lastTime - e[1].lastMessage.lastTime
      }))
    } }, { key: '_updateUserOrGroupProfile', value: function(e) {
      const n = this; if (0 !== e.length) {
        const o = []; const r = []; e.forEach((function(e) {
          if (e.type === t.CONV_C2C)o.push(e.toAccount); else if (e.type === t.CONV_GROUP) {
            const i = e.toAccount; n.tim.groupController.hasLocalGroup(i) ? e.groupProfile = n.tim.groupController.getLocalGroupProfile(i) : r.push(i)
          }
        })), o.length > 0 && this.tim.getUserProfile({ userIDList: o }).then((function(e) {
          const t = e.data; Ie(t) ? t.forEach((function(e) {
            n.conversationMap.get('C2C'.concat(e.userID)).userProfile = e
          })) : n.conversationMap.get('C2C'.concat(t.userID)).userProfile = t
        })), r.length > 0 && this.tim.groupController.getGroupProfileAdvance({ groupIDList: r, responseFilter: { groupBaseInfoFilter: ['Type', 'Name', 'FaceUrl'] } }).then((function(e) {
          e.data.successGroupList.forEach((function(e) {
            const t = 'GROUP'.concat(e.groupID); if (n.conversationMap.has(t)) {
              const o = n.conversationMap.get(t); Oe(o.groupProfile, e, [], [null, void 0, '', 0, NaN]), !o.subType && e.type && (o.subType = e.type)
            }
          }))
        }))
      }
    } }, { key: '_updateUserOrGroupProfileCompletely', value: function(e) {
      const n = this; return e.type === t.CONV_C2C ? this.tim.getUserProfile({ userIDList: [e.toAccount] }).then((function(t) {
        const o = t.data; return 0 === o.length ? Cr(new Ut({ code: qt.USER_OR_GROUP_NOT_FOUND, message: dn })) : (e.userProfile = o[0], e._isInfoCompleted = !0, n._unshiftConversation(e), Mr({ conversation: e }))
      })) : this.tim.getGroupProfile({ groupID: e.toAccount }).then((function(t) {
        return e.groupProfile = t.data.group, e._isInfoCompleted = !0, n._unshiftConversation(e), Mr({ conversation: e })
      }))
    } }, { key: '_unshiftConversation', value: function(e) {
      e instanceof gs && !this.conversationMap.has(e.conversationID) && (this.conversationMap = new Map([[e.conversationID, e]].concat(I(this.conversationMap))), this._setStorageConversationList(), this._emitConversationUpdate(!0, !1))
    } }, { key: 'deleteLocalConversation', value: function(e) {
      this.conversationMap.delete(e), this._setStorageConversationList(), this.emitInnerEvent(or, e), this._emitConversationUpdate(!0, !1)
    } }, { key: '_getConversationOptions', value: function(e) {
      const t = []; const n = e.filter((function(e) {
        const t = e.lastMsg; return ye(t)
      })).map((function(e) {
        if (1 === e.type) {
          const n = { userID: e.userID, nick: e.c2CNick, avatar: e.c2CImage }; return t.push(n), { conversationID: 'C2C'.concat(e.userID), type: 'C2C', lastMessage: { lastTime: e.time, lastSequence: e.sequence, fromAccount: e.lastC2CMsgFromAccount, messageForShow: e.messageShow, type: e.lastMsg.elements[0] ? e.lastMsg.elements[0].type : null, payload: e.lastMsg.elements[0] ? e.lastMsg.elements[0].content : null }, userProfile: new Zi(n), peerReadTime: e.c2cPeerReadTime }
        } return { conversationID: 'GROUP'.concat(e.groupID), type: 'GROUP', lastMessage: { lastTime: e.time, lastSequence: e.messageReadSeq + e.unreadCount, fromAccount: e.msgGroupFromAccount, messageForShow: e.messageShow, type: e.lastMsg.elements[0] ? e.lastMsg.elements[0].type : null, payload: e.lastMsg.elements[0] ? e.lastMsg.elements[0].content : null }, groupProfile: new cs({ groupID: e.groupID, name: e.groupNick, avatar: e.groupImage }), unreadCount: e.unreadCount, peerReadTime: 0 }
      })); return t.length > 0 && this.emitInnerEvent(nr, t), n
    } }, { key: '_emitConversationUpdate', value: function() {
      const t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0]; const n = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]; const o = I(this.conversationMap.values()); n && this.emitInnerEvent(tr, o), t && this.emitOuterEvent(e.CONVERSATION_LIST_UPDATED, o)
    } }, { key: '_conversationMapTreeShaking', value: function(e) {
      const n = this; const o = new Map(I(this.conversationMap)); e.forEach((function(e) {
        return o.delete(e.conversationID)
      })), o.has(t.CONV_SYSTEM) && o.delete(t.CONV_SYSTEM); const r = this.tim.groupController.getJoinedAVChatRoom(); r && r.forEach((function(e) {
        o.delete(''.concat(t.CONV_GROUP).concat(e))
      })), I(o.keys()).forEach((function(e) {
        return n.conversationMap.delete(e)
      }))
    } }, { key: 'reset', value: function() {
      this.pagingStatus = it.NOT_START, this.pagingTimeStamp = 0, this.conversationMap.clear(), this.tempGroupAtTipsList.length = 0, this.resetReady(), this.tim.innerEmitter.once(Mo, this._initLocalConversationList, this)
    } }]), s
  }(mr); const ds = function() {
    function e(t) {
      if (o(this, e), void 0 === t) throw new Ut({ code: qt.MESSAGE_LIST_CONSTRUCTOR_NEED_OPTIONS, message: zt }); if (void 0 === t.tim) throw new Ut({ code: qt.MESSAGE_LIST_CONSTRUCTOR_NEED_OPTIONS, message: ''.concat(zt, '.tim') }); this.list = new Map, this.tim = t.tim, this._initializeOptions(t)
    } return i(e, [{ key: 'getLocalOldestMessageByConversationID', value: function(e) {
      if (!e) return null; if (!this.list.has(e)) return null; const t = this.list.get(e).values(); return t ? t.next().value : null
    } }, { key: '_initializeOptions', value: function(e) {
      this.options = {}; const t = { memory: { maxDatasPerKey: 100, maxBytesPerData: 256, maxKeys: 0 }, cache: { maxDatasPerKey: 10, maxBytesPerData: 256, maxKeys: 0 } }; for (const n in t) {
        if (Object.prototype.hasOwnProperty.call(t, n)) {
          if (void 0 === e[n]) {
            this.options[n] = t[n]; continue
          } const o = t[n]; for (const r in o) {
            if (Object.prototype.hasOwnProperty.call(o, r)) {
              if (void 0 === e[n][r]) {
                this.options[n][r] = o[r]; continue
              } this.options[n][r] = e[n][r]
            }
          }
        }
      }
    } }, { key: 'pushIn', value: function(e) {
      const t = e.conversationID; const n = e.ID; let o = !0; return this.list.has(t) || this.list.set(t, new Map), this.list.has(t) && this.list.get(t).has(n) ? o = !1 : this.list.get(t).set(n, e), o
    } }, { key: 'unshift', value: function(e) {
      Ie(e) ? e.length > 0 && this._unshiftMultipleMessages(e) : this._unshiftSingleMessage(e)
    } }, { key: '_unshiftSingleMessage', value: function(e) {
      const t = e.conversationID; const n = e.ID; if (!this.list.has(t)) return this.list.set(t, new Map), void this.list.get(t).set(n, e); const o = Array.from(this.list.get(t)); o.unshift([n, e]), this.list.set(t, new Map(o))
    } }, { key: '_unshiftMultipleMessages', value: function(e) {
      for (var t = e.length, n = [], o = e[0].conversationID, r = this.list.has(o) ? Array.from(this.list.get(o)) : [], i = 0; i < t; i++)n.push([e[i].ID, e[i]]); this.list.set(o, new Map(n.concat(r)))
    } }, { key: 'remove', value: function(e) {
      const t = e.conversationID; const n = e.ID; this.list.has(t) && this.list.get(t).delete(n)
    } }, { key: 'revoke', value: function(e, t, n) {
      if (de.debug('revoke message', e, t, n), this.list.has(e)) {
        let o; const r = S(this.list.get(e)); try {
          for (r.s(); !(o = r.n()).done;) {
            const i = y(o.value, 2)[1]; if (i.sequence === t && !i.isRevoked && (Me(n) || i.random === n)) return i.isRevoked = !0, i
          }
        } catch (s) {
          r.e(s)
        } finally {
          r.f()
        }
      } return null
    } }, { key: 'removeByConversationID', value: function(e) {
      this.list.has(e) && this.list.delete(e)
    } }, { key: 'updateMessageIsPeerReadProperty', value: function(e, t) {
      const n = []; if (this.list.has(e)) {
        let o; const r = S(this.list.get(e)); try {
          for (r.s(); !(o = r.n()).done;) {
            const i = y(o.value, 2)[1]; i.time <= t && !i.isPeerRead && 'out' === i.flow && (i.isPeerRead = !0, n.push(i))
          }
        } catch (s) {
          r.e(s)
        } finally {
          r.f()
        }de.log('MessagesList.updateMessageIsPeerReadProperty conversationID='.concat(e, ' peerReadTime=').concat(t, ' count=').concat(n.length))
      } return n
    } }, { key: 'hasLocalMessageList', value: function(e) {
      return this.list.has(e)
    } }, { key: 'getLocalMessageList', value: function(e) {
      return this.hasLocalMessageList(e) ? I(this.list.get(e).values()) : []
    } }, { key: 'hasLocalMessage', value: function(e, t) {
      return !!this.hasLocalMessageList(e) && this.list.get(e).has(t)
    } }, { key: 'getLocalMessage', value: function(e, t) {
      return this.hasLocalMessage(e, t) ? this.list.get(e).get(t) : null
    } }, { key: 'reset', value: function() {
      this.list.clear()
    } }]), e
  }(); const ms = function() {
    function e(t) {
      o(this, e), this.tim = t
    } return i(e, [{ key: 'setMessageRead', value: function(e) {
      const n = e.conversationID; const o = e.messageID; const r = this.tim.conversationController; const i = r.getLocalConversation(n); if (de.log('ReadReportHandler.setMessageRead conversationID='.concat(n, ' unreadCount=').concat(i ? i.unreadCount : 0)), !i) return Mr(); if (i.type !== t.CONV_GROUP || Xe(i.groupAtInfoList) || r.deleteGroupAtTips(n), 0 === i.unreadCount) return Mr(); const s = o ? this.tim.messageController.getLocalMessage(n, o) : null; switch (i.type) {
        case t.CONV_C2C: return this._setC2CMessageRead({ conversationID: n, lastMessageTime: s ? s.time : i.lastMessage.lastTime }); case t.CONV_GROUP: return this._setGroupMessageRead({ conversationID: n, lastMessageSeq: s ? s.sequence : i.lastMessage.lastSequence }); case t.CONV_SYSTEM: return i.unreadCount = 0, Mr(); default: return Mr()
      }
    } }, { key: '_setC2CMessageRead', value: function(e) {
      const t = this; const n = e.conversationID; const o = e.lastMessageTime; de.log('ReadReportHandler._setC2CMessageRead conversationID='.concat(n, ' lastMessageTime=').concat(o)), fe(o) || de.warn('ReadReportHandler._setC2CMessageRead 请勿修改 Conversation.lastMessage.lastTime，否则可能会导致已读上报结果不准确'); const r = new qr(Zr); return r.setText(''.concat(n, '-').concat(o)), this.tim.messageController.request({ name: 'conversation', action: 'setC2CMessageRead', param: { C2CMsgReaded: { cookie: '', C2CMsgReadedItem: [{ toAccount: n.replace('C2C', ''), lastMessageTime: o, receipt: 1 }] } } }).then((function() {
        return r.setNetworkType(t.tim.netMonitor.getNetworkType()).setEnd(), de.log('ReadReportHandler._setC2CMessageRead ok.'), t._updateIsReadAfterReadReport({ conversationID: n, lastMessageTime: o }), t._updateUnreadCount(n), new vr
      })).catch((function(e) {
        return t.tim.netMonitor.probe().then((function(t) {
          const n = y(t, 2); const o = n[0]; const i = n[1]; r.setError(e, o, i).setEnd()
        })), de.log('ReadReportHandler._setC2CMessageRead failed. '.concat(Re(e))), Cr(e)
      }))
    } }, { key: '_setGroupMessageRead', value: function(e) {
      const t = this; const n = e.conversationID; const o = e.lastMessageSeq; de.log('ReadReportHandler._setGroupMessageRead conversationID='.concat(n, ' lastMessageSeq=').concat(o)), fe(o) || de.warn('ReadReportHandler._setGroupMessageRead 请勿修改 Conversation.lastMessage.lastSequence，否则可能会导致已读上报结果不准确'); const r = new qr(ei); return r.setText(''.concat(n, '-').concat(o)), this.tim.messageController.request({ name: 'conversation', action: 'setGroupMessageRead', param: { groupID: n.replace('GROUP', ''), messageReadSeq: o } }).then((function() {
        return r.setNetworkType(t.tim.netMonitor.getNetworkType()).setEnd(), de.log('ReadReportHandler._setGroupMessageRead ok.'), t._updateIsReadAfterReadReport({ conversationID: n, lastMessageSeq: o }), t._updateUnreadCount(n), new vr
      })).catch((function(e) {
        return t.tim.netMonitor.probe().then((function(t) {
          const n = y(t, 2); const o = n[0]; const i = n[1]; r.setError(e, o, i).setEnd()
        })), de.log('ReadReportHandler._setGroupMessageRead failed. '.concat(Re(e))), Cr(e)
      }))
    } }, { key: '_updateUnreadCount', value: function(e) {
      const t = this.tim; const n = t.conversationController; const o = t.messageController; const r = n.getLocalConversation(e); const i = o.getLocalMessageList(e); r && (r.unreadCount = i.filter((function(e) {
        return !e.isRead && !e.getOnlineOnlyFlag()
      })).length, de.log('ReadReportHandler._updateUnreadCount conversationID='.concat(r.conversationID, ' unreadCount=').concat(r.unreadCount)))
    } }, { key: '_updateIsReadAfterReadReport', value: function(e) {
      const t = e.conversationID; const n = e.lastMessageSeq; const o = e.lastMessageTime; const r = this.tim.messageController.getLocalMessageList(t); if (0 !== r.length) {
        for (var i, s = r.length - 1; s >= 0; s--) {
          if (i = r[s], !(o && i.time > o || n && i.sequence > n)) {
            if ('in' === i.flow && i.isRead) break; i.setIsRead(!0)
          }
        }
      }
    } }, { key: 'updateIsRead', value: function(e) {
      const n = this.tim; const o = n.conversationController; const r = n.messageController; const i = o.getLocalConversation(e); const s = r.getLocalMessageList(e); if (i && 0 !== s.length && !je(i.type)) {
        for (var a = [], u = 0; u < s.length; u++)'in' !== s[u].flow ? 'out' !== s[u].flow || s[u].isRead || s[u].setIsRead(!0) : a.push(s[u]); let c = 0; if (i.type === t.CONV_C2C) {
          const l = a.slice(-i.unreadCount).filter((function(e) {
            return e.isRevoked
          })).length; c = a.length - i.unreadCount - l
        } else c = a.length - i.unreadCount; for (let p = 0; p < c && !a[p].isRead; p++)a[p].setIsRead(!0)
      }
    } }]), e
  }(); const fs = function() {
    function e(t) {
      const n = t.tim; const r = t.messageController; o(this, e), this.tim = n, this.messageController = r, this.completedMap = new Map, this._initListener()
    } return i(e, [{ key: 'getMessageList', value: function(e) {
      const t = this; const n = e.conversationID; const o = e.nextReqMessageID; let r = e.count; if (this.tim.groupController.checkJoinedAVChatRoomByID(n.replace('GROUP', ''))) return de.log('GetMessageHandler.getMessageList not available in avchatroom. conversationID='.concat(n)), Mr({ messageList: [], nextReqMessageID: '', isCompleted: !0 }); (Me(r) || r > 15) && (r = 15); let i = this._computeLeftCount({ conversationID: n, nextReqMessageID: o }); return de.log('GetMessageHandler.getMessageList. conversationID='.concat(n, ' leftCount=').concat(i, ' count=').concat(r, ' nextReqMessageID=').concat(o)), this._needGetHistory({ conversationID: n, leftCount: i, count: r }) ? this.messageController.getHistoryMessages({ conversationID: n, count: 20 }).then((function() {
        return i = t._computeLeftCount({ conversationID: n, nextReqMessageID: o }), new vr(t._computeResult({ conversationID: n, nextReqMessageID: o, count: r, leftCount: i }))
      })) : (de.log('GetMessageHandler.getMessageList. get messagelist from memory'), Mr(this._computeResult({ conversationID: n, nextReqMessageID: o, count: r, leftCount: i })))
    } }, { key: 'setCompleted', value: function(e) {
      de.log('GetMessageHandler.setCompleted. conversationID='.concat(e)), this.completedMap.set(e, !0)
    } }, { key: 'deleteCompletedItem', value: function(e) {
      de.log('GetMessageHandler.deleteCompletedItem. conversationID='.concat(e)), this.completedMap.delete(e)
    } }, { key: '_initListener', value: function() {
      const e = this; this.tim.innerEmitter.on(ar, (function() {
        e.setCompleted(t.CONV_SYSTEM)
      })), this.tim.innerEmitter.on(ir, (function(n) {
        const o = n.data; e.setCompleted(''.concat(t.CONV_GROUP).concat(o))
      }))
    } }, { key: '_getMessageListSize', value: function(e) {
      return this.messageController.getLocalMessageList(e).length
    } }, { key: '_needGetHistory', value: function(e) {
      const n = e.conversationID; const o = e.leftCount; const r = e.count; const i = this.tim.conversationController.getLocalConversation(n); const s = !!i && i.type === t.CONV_SYSTEM; const a = !!i && i.subType === t.GRP_AVCHATROOM; return !s && !a && (o < r && !this.completedMap.has(n))
    } }, { key: '_computeResult', value: function(e) {
      const t = e.conversationID; const n = e.nextReqMessageID; const o = e.count; const r = e.leftCount; const i = this._computeMessageList({ conversationID: t, nextReqMessageID: n, count: o }); const s = this._computeIsCompleted({ conversationID: t, leftCount: r, count: o }); const a = this._computeNextReqMessageID({ messageList: i, isCompleted: s, conversationID: t }); return de.log('GetMessageHandler._computeResult. conversationID='.concat(t, ' leftCount=').concat(r, ' count=').concat(o, ' nextReqMessageID=').concat(a, ' nums=').concat(i.length, ' isCompleted=').concat(s)), { messageList: i, nextReqMessageID: a, isCompleted: s }
    } }, { key: '_computeNextReqMessageID', value: function(e) {
      const t = e.messageList; const n = e.isCompleted; const o = e.conversationID; if (!n) return 0 === t.length ? '' : t[0].ID; const r = this.messageController.getLocalMessageList(o); return 0 === r.length ? '' : r[0].ID
    } }, { key: '_computeMessageList', value: function(e) {
      const t = e.conversationID; const n = e.nextReqMessageID; const o = e.count; const r = this.messageController.getLocalMessageList(t); const i = this._computeIndexEnd({ nextReqMessageID: n, messageList: r }); const s = this._computeIndexStart({ indexEnd: i, count: o }); return r.slice(s, i)
    } }, { key: '_computeIndexEnd', value: function(e) {
      const t = e.messageList; const n = void 0 === t ? [] : t; const o = e.nextReqMessageID; return o ? n.findIndex((function(e) {
        return e.ID === o
      })) : n.length
    } }, { key: '_computeIndexStart', value: function(e) {
      const t = e.indexEnd; const n = e.count; return t > n ? t - n : 0
    } }, { key: '_computeLeftCount', value: function(e) {
      const t = e.conversationID; const n = e.nextReqMessageID; return n ? this.messageController.getLocalMessageList(t).findIndex((function(e) {
        return e.ID === n
      })) : this._getMessageListSize(t)
    } }, { key: '_computeIsCompleted', value: function(e) {
      const t = e.conversationID; return !!(e.leftCount <= e.count && this.completedMap.has(t))
    } }, { key: 'reset', value: function() {
      de.log('GetMessageHandler.reset'), this.completedMap.clear()
    } }]), e
  }(); const _s = function e(t) {
    o(this, e), this.value = t, this.next = null
  }; const vs = function() {
    function e(t) {
      o(this, e), this.MAX_LENGTH = t, this.pTail = null, this.pNodeToDel = null, this.map = new Map, de.log('SinglyLinkedList init MAX_LENGTH='.concat(this.MAX_LENGTH))
    } return i(e, [{ key: 'pushIn', value: function(e) {
      const t = new _s(e); if (this.map.size < this.MAX_LENGTH)null === this.pTail ? (this.pTail = t, this.pNodeToDel = t) : (this.pTail.next = t, this.pTail = t), this.map.set(e, 1); else {
        let n = this.pNodeToDel; this.pNodeToDel = this.pNodeToDel.next, this.map.delete(n.value), n.next = null, n = null, this.pTail.next = t, this.pTail = t, this.map.set(e, 1)
      }
    } }, { key: 'has', value: function(e) {
      return this.map.has(e)
    } }, { key: 'tail', value: function() {
      return this.pTail
    } }, { key: 'size', value: function() {
      return this.map.size
    } }, { key: 'data', value: function() {
      return Array.from(this.map.keys())
    } }, { key: 'reset', value: function() {
      for (var e; null !== this.pNodeToDel;)e = this.pNodeToDel, this.pNodeToDel = this.pNodeToDel.next, e.next = null, e = null; this.pTail = null, this.map.clear()
    } }]), e
  }(); const ys = function() {
    function e(t) {
      o(this, e), this.tim = t
    } return i(e, [{ key: 'upload', value: function(e) {
      switch (e.type) {
        case t.MSG_IMAGE: return this._uploadImage(e); case t.MSG_FILE: return this._uploadFile(e); case t.MSG_AUDIO: return this._uploadAudio(e); case t.MSG_VIDEO: return this._uploadVideo(e); default: return Promise.resolve()
      }
    } }, { key: '_uploadImage', value: function(e) {
      const t = this.tim; const n = t.uploadController; const o = t.messageController; const r = e.getElements()[0]; const i = o.getMessageOptionByID(e.messageID); return n.uploadImage({ file: i.payload.file, to: i.to, onProgress: function(e) {
        if (r.updatePercent(e), Ee(i.onProgress)) {
          try {
            i.onProgress(e)
          } catch (t) {
            return Cr(new Ut({ code: qt.MESSAGE_ONPROGRESS_FUNCTION_ERROR, message: ''.concat(Qt) }))
          }
        }
      } }).then((function(t) {
        const n = t.location; const o = t.fileType; const i = t.fileSize; const s = t.width; const a = t.height; const c = Fe(n); r.updateImageFormat(o); const l = ze({ originUrl: c, originWidth: s, originHeight: a, min: 198 }); const p = ze({ originUrl: c, originWidth: s, originHeight: a, min: 720 }); return r.updateImageInfoArray([{ size: i, url: c, width: s, height: a }, u({}, p), u({}, l)]), e
      }))
    } }, { key: '_uploadFile', value: function(e) {
      const t = this.tim; const n = t.uploadController; const o = t.messageController; const r = e.getElements()[0]; const i = o.getMessageOptionByID(e.messageID); return n.uploadFile({ file: i.payload.file, to: i.to, onProgress: function(e) {
        if (r.updatePercent(e), Ee(i.onProgress)) {
          try {
            i.onProgress(e)
          } catch (t) {
            return Cr(new Ut({ code: qt.MESSAGE_ONPROGRESS_FUNCTION_ERROR, message: ''.concat(Qt) }))
          }
        }
      } }).then((function(t) {
        const n = t.location; const o = Fe(n); return r.updateFileUrl(o), e
      }))
    } }, { key: '_uploadAudio', value: function(e) {
      const t = this.tim; const n = t.uploadController; const o = t.messageController; const r = e.getElements()[0]; const i = o.getMessageOptionByID(e.messageID); return n.uploadAudio({ file: i.payload.file, to: i.to, onProgress: function(e) {
        if (r.updatePercent(e), Ee(i.onProgress)) {
          try {
            i.onProgress(e)
          } catch (t) {
            return Cr(new Ut({ code: qt.MESSAGE_ONPROGRESS_FUNCTION_ERROR, message: ''.concat(Qt) }))
          }
        }
      } }).then((function(t) {
        const n = t.location; const o = Fe(n); return r.updateAudioUrl(o), e
      }))
    } }, { key: '_uploadVideo', value: function(e) {
      const t = this.tim; const n = t.uploadController; const o = t.messageController; const r = e.getElements()[0]; const i = o.getMessageOptionByID(e.messageID); return n.uploadVideo({ file: i.payload.file, to: i.to, onProgress: function(e) {
        if (r.updatePercent(e), Ee(i.onProgress)) {
          try {
            i.onProgress(e)
          } catch (t) {
            return Cr(new Ut({ code: qt.MESSAGE_ONPROGRESS_FUNCTION_ERROR, message: ''.concat(Qt) }))
          }
        }
      } }).then((function(t) {
        const n = Fe(t.location); return r.updateVideoUrl(n), e
      }))
    } }]), e
  }(); const Is = function(n) {
    c(s, n); const r = v(s); function s(e) {
      let t; return o(this, s), (t = r.call(this, e))._initializeMembers(), t._initializeListener(), t._initializeHandlers(), t.messageOptionMap = new Map, t
    } return i(s, [{ key: '_initializeMembers', value: function() {
      this.messagesList = new ds({ tim: this.tim }), this.currentMessageKey = {}, this.singlyLinkedList = new vs(100), this._peerReadTimeMap = new Map
    } }, { key: '_initializeHandlers', value: function() {
      this.readReportHandler = new ms(this.tim, this), this.getMessageHandler = new fs({ messageController: this, tim: this.tim }), this.uploadFileHandler = new ys(this.tim)
    } }, { key: 'reset', value: function() {
      this.messagesList.reset(), this.currentMessageKey = {}, this.getMessageHandler.reset(), this.singlyLinkedList.reset(), this._peerReadTimeMap.clear(), this.messageOptionMap.clear()
    } }, { key: '_initializeListener', value: function() {
      const e = this.tim.innerEmitter; e.on(Uo, this._onReceiveC2CMessage, this), e.on(Eo, this._onSyncMessagesProcessing, this), e.on(To, this._onSyncMessagesFinished, this), e.on(qo, this._onReceiveGroupMessage, this), e.on(Fo, this._onReceiveGroupTips, this), e.on(Vo, this._onReceiveSystemNotice, this), e.on(Bo, this._onReceiveGroupMessageRevokedNotice, this), e.on(jo, this._onReceiveC2CMessageRevokedNotice, this), e.on($o, this._onC2CMessageReadReceipt, this), e.on(or, this._clearConversationMessages, this)
    } }, { key: '_guardForAVChatRoom', value: function(e) {
      if (e.conversationType === t.CONV_GROUP) {
        const n = this.tim.groupController; const o = e.to; return n.hasLocalGroup(o) ? Promise.resolve() : n.getGroupProfile({ groupID: o }).then((function(n) {
          const r = n.data.group.type; if (de.log('MessageController._guardForAVChatRoom. groupID='.concat(o, ' type=').concat(r)), r === t.GRP_AVCHATROOM) {
            const i = 'userId='.concat(e.from, ' 未加入群 groupID=').concat(o, '。发消息前先使用 joinGroup 接口申请加群，详细请参考 https://imsdk-1252463788.file.myqcloud.com/IM_DOC/Web/SDK.html#joinGroup'); return de.warn('MessageController._guardForAVChatRoom sendMessage not allowed. '.concat(i)), Cr(new Ut({ code: qt.MESSAGE_SEND_FAIL, message: i, data: { message: e } }))
          } return Promise.resolve()
        }))
      } return Promise.resolve()
    } }, { key: 'sendMessageInstance', value: function(e, n) {
      let o; const r = this; let i = null; switch (e.conversationType) {
        case t.CONV_C2C: i = this._handleOnSendC2CMessageSuccess.bind(this); break; case t.CONV_GROUP: i = this._handleOnSendGroupMessageSuccess.bind(this); break; default: return Cr(new Ut({ code: qt.MESSAGE_SEND_INVALID_CONVERSATION_TYPE, message: Jt }))
      } return this.singlyLinkedList.pushIn(e.random), this.uploadFileHandler.upload(e).then((function() {
        return r._guardForAVChatRoom(e).then((function() {
          let i = null; return e.isSendable() ? (r._addSendMessageTotalCount(e), o = Date.now(), e.conversationType === t.CONV_C2C ? i = r._createC2CMessagePack(e, n) : e.conversationType === t.CONV_GROUP && (i = r._createGroupMessagePack(e, n)), r.request(i)) : Cr({ code: qt.MESSAGE_FILE_URL_IS_EMPTY, message: gn })
        })).then((function(s) {
          return r._addSendMessageSuccessCount(e, o), e.conversationType === t.CONV_GROUP && (e.sequence = s.data.sequence, e.time = s.data.time, e.generateMessageID(r.tim.context.identifier)), r.messagesList.pushIn(e), i(e, s.data), r.messageOptionMap.delete(e.messageID), r._isOnlineMessage(e, n) ? e.setOnlineOnlyFlag(!0) : r.emitInnerEvent(Do, { eventDataList: [{ conversationID: e.conversationID, unreadCount: 0, type: e.conversationType, subType: e.conversationSubType, lastMessage: e }] }), 'TIMImageElem' === e.type && We(e.payload.imageInfoArray), new vr({ message: e })
        })).catch((function(t) {
          e.status = rt.FAIL; const n = new qr(zr); return n.setMessageType(e.type).setText(''.concat(r._generateTjgID(e), '-').concat(e.type, '-').concat(e.from, '-').concat(e.to)), r.probeNetwork().then((function(e) {
            const o = y(e, 2); const r = o[0]; const i = o[1]; n.setError(t, r, i).setEnd()
          })), de.error('MessageController.sendMessageInstance error:', t), Cr(new Ut({ code: t && t.code ? t.code : qt.MESSAGE_SEND_FAIL, message: t && t.message ? t.message : Yt, data: { message: e } }))
        }))
      }))
    } }, { key: '_getSendMessageSpecifiedKey', value: function(e) {
      if (e.conversationType === t.CONV_C2C) return Ar; if (e.conversationType === t.CONV_GROUP) {
        const n = this.tim.groupController.getLocalGroupProfile(e.to); if (!n) return; const o = n.type; if (Ve(o)) return Or; if (Ke(o)) return Rr; if (He(o)) return Nr; if (Be(o)) return Lr
      }
    } }, { key: '_addSendMessageTotalCount', value: function(e) {
      const t = this.tim.sumStatController; t.addTotalCount(kr); const n = this._getSendMessageSpecifiedKey(e); n && t.addTotalCount(n)
    } }, { key: '_addSendMessageSuccessCount', value: function(e, t) {
      const n = this.tim.sumStatController; const o = Math.abs(Date.now() - t); n.addSuccessCount(kr), n.addCost(kr, o); const r = this._getSendMessageSpecifiedKey(e); r && (n.addSuccessCount(r), n.addCost(r, o))
    } }, { key: 'resendMessage', value: function(e) {
      return e.isResend = !0, e.status = rt.UNSEND, this.sendMessageInstance(e)
    } }, { key: '_isFileLikeMessage', value: function(e) {
      return [t.MSG_IMAGE, t.MSG_FILE, t.MSG_AUDIO, t.MSG_VIDEO].indexOf(e.type) >= 0
    } }, { key: '_resendBinaryTypeMessage', value: function() {} }, { key: '_canIUseOnlineOnlyFlag', value: function(e) {
      const n = this.tim.groupController.getJoinedAVChatRoom(); return !n || !n.includes(e.to) || e.conversationType !== t.CONV_GROUP
    } }, { key: '_isOnlineMessage', value: function(e, t) {
      return !(!this._canIUseOnlineOnlyFlag(e) || !t || !0 !== t.onlineUserOnly)
    } }, { key: '_createC2CMessagePack', value: function(e, t) {
      let n = null; return t && (t.offlinePushInfo && (n = t.offlinePushInfo), !0 === t.onlineUserOnly && (n ? n.disablePush = !0 : n = { disablePush: !0 })), { name: 'c2cMessage', action: 'create', tjgID: this._generateTjgID(e), param: { toAccount: e.to, msgBody: e.getElements(), msgSeq: e.sequence, msgRandom: e.random, msgLifeTime: this._isOnlineMessage(e, t) ? 0 : void 0, offlinePushInfo: n ? { pushFlag: !0 === n.disablePush ? 1 : 0, title: n.title || '', desc: n.description || '', ext: n.extension || '', apnsInfo: { badgeMode: !0 === n.ignoreIOSBadge ? 1 : 0 }, androidInfo: { OPPOChannelID: n.androidOPPOChannelID || '' } } : void 0 } }
    } }, { key: '_handleOnSendC2CMessageSuccess', value: function(e, t) {
      e.status = rt.SUCCESS, e.time = t.time
    } }, { key: '_createGroupMessagePack', value: function(e, n) {
      let o = null; n && n.offlinePushInfo && (o = n.offlinePushInfo); const r = e.getGroupAtInfoList(); return { name: 'groupMessage', action: 'create', tjgID: this._generateTjgID(e), param: { groupID: e.to, msgBody: e.getElements(), random: e.random, priority: e.priority, clientSequence: e.clientSequence, groupAtInfo: e.type !== t.MSG_TEXT || Xe(r) ? void 0 : r, onlineOnlyFlag: this._isOnlineMessage(e, n) ? 1 : 0, offlinePushInfo: o ? { pushFlag: !0 === o.disablePush ? 1 : 0, title: o.title || '', desc: o.description || '', ext: o.extension || '', apnsInfo: { badgeMode: !0 === o.ignoreIOSBadge ? 1 : 0 }, androidInfo: { OPPOChannelID: o.androidOPPOChannelID || '' } } : void 0 } }
    } }, { key: '_handleOnSendGroupMessageSuccess', value: function(e, t) {
      e.sequence = t.sequence, e.time = t.time, e.status = rt.SUCCESS
    } }, { key: '_onReceiveC2CMessage', value: function(n) {
      de.debug('MessageController._onReceiveC2CMessage nums='.concat(n.data.length)); const o = Date.now(); const r = this._newC2CMessageStoredAndSummary({ notifiesList: n.data, type: t.CONV_C2C, C2CRemainingUnreadList: n.C2CRemainingUnreadList }); const i = r.eventDataList; const s = r.result; if (i.length > 0 && this.emitInnerEvent(Ao, { eventDataList: i, result: s }), s.length > 0) {
        const a = this.tim.sumStatController; a.addTotalCount(wr), a.addSuccessCount(wr), a.addCost(wr, Date.now() - o), this.emitOuterEvent(e.MESSAGE_RECEIVED, s)
      }
    } }, { key: '_onReceiveGroupMessage', value: function(t) {
      de.debug('MessageController._onReceiveGroupMessage nums='.concat(t.data.length)); const n = Date.now(); const o = this.newGroupMessageStoredAndSummary(t.data); const r = o.eventDataList; const i = o.result; if (r.length > 0 && this.emitInnerEvent(Oo, { eventDataList: r, result: i, isGroupTip: !1 }), i.length > 0) {
        const s = this.tim.sumStatController; s.addTotalCount(wr), s.addSuccessCount(wr), s.addCost(wr, Date.now() - n), this.emitOuterEvent(e.MESSAGE_RECEIVED, i)
      }
    } }, { key: '_onReceiveGroupTips', value: function(t) {
      const n = Date.now(); const o = t.data; de.debug('MessageController._onReceiveGroupTips nums='.concat(o.length)); const r = this.newGroupTipsStoredAndSummary(o); const i = r.eventDataList; const s = r.result; if (i.length > 0 && this.emitInnerEvent(Oo, { eventDataList: i, result: s, isGroupTip: !0 }), s.length > 0) {
        const a = this.tim.sumStatController; a.addTotalCount(wr), a.addSuccessCount(wr), a.addCost(wr, Date.now() - n), this.emitOuterEvent(e.MESSAGE_RECEIVED, s)
      }
    } }, { key: '_onReceiveSystemNotice', value: function(t) {
      const n = Date.now(); const o = t.data; const r = o.groupSystemNotices; const i = o.type; de.debug('MessageController._onReceiveSystemNotice nums='.concat(r.length)); const s = this.newSystemNoticeStoredAndSummary({ notifiesList: r, type: i }); const a = s.eventDataList; const u = s.result; if (a.length > 0 && this.emitInnerEvent(Ro, { eventDataList: a, result: u, type: i }), u.length > 0 && 'poll' === i) {
        const c = this.tim.sumStatController; c.addTotalCount(wr), c.addSuccessCount(wr), c.addCost(wr, Date.now() - n), this.emitOuterEvent(e.MESSAGE_RECEIVED, u)
      }
    } }, { key: '_onReceiveGroupMessageRevokedNotice', value: function(t) {
      const n = this; de.debug('MessageController._onReceiveGroupMessageRevokedNotice nums='.concat(t.data.length)); const o = []; let r = null; t.data.forEach((function(e) {
        e.elements.revokedInfos.forEach((function(e) {
          (r = n.messagesList.revoke('GROUP'.concat(e.groupID), e.sequence)) && o.push(r)
        }))
      })), 0 !== o.length && (this.emitInnerEvent(No, o), this.emitOuterEvent(e.MESSAGE_REVOKED, o))
    } }, { key: '_onReceiveC2CMessageRevokedNotice', value: function(t) {
      const n = this; de.debug('MessageController._onReceiveC2CMessageRevokedNotice nums='.concat(t.data.length)); const o = []; let r = null; t.data.forEach((function(e) {
        e.c2cMessageRevokedNotify.revokedInfos.forEach((function(e) {
          const t = n.tim.context.identifier === e.from ? 'C2C'.concat(e.to) : 'C2C'.concat(e.from); (r = n.messagesList.revoke(t, e.sequence, e.random)) && o.push(r)
        }))
      })), 0 !== o.length && (this.emitInnerEvent(No, o), this.emitOuterEvent(e.MESSAGE_REVOKED, o))
    } }, { key: '_onC2CMessageReadReceipt', value: function(e) {
      const t = this; e.data.forEach((function(e) {
        if (!Xe(e.c2cMessageReadReceipt)) {
          const n = e.c2cMessageReadReceipt.to; e.c2cMessageReadReceipt.uinPairReadArray.forEach((function(e) {
            const o = e.peerReadTime; de.debug('MessageController._onC2CMessageReadReceipt to='.concat(n, ' peerReadTime=').concat(o)); const r = 'C2C'.concat(n); t.recordPeerReadTime(r, o), t._updateMessageIsPeerReadProperty(r, o)
          }))
        }
      }))
    } }, { key: '_updateMessageIsPeerReadProperty', value: function(n, o) {
      if (n.startsWith(t.CONV_C2C) && o > 0) {
        const r = this.messagesList.updateMessageIsPeerReadProperty(n, o); r.length > 0 && this.emitOuterEvent(e.MESSAGE_READ_BY_PEER, r)
      }
    } }, { key: 'getPeerReadTime', value: function(e) {
      const t = this; if (!Xe(e)) {
        const n = new qr(ni); return de.log('MessageController.getPeerReadTime userIDList:'.concat(e)), this.request({ name: 'c2cPeerReadTime', action: 'get', param: { userIDList: e } }).then((function(o) {
          const r = o.data.peerReadTimeList; de.log('MessageController.getPeerReadTime ok. peerReadTimeList:'.concat(r)); for (var i = '', s = 0; s < e.length; s++)i += ''.concat(e[s], '-').concat(r[s], ' '), r[s] > 0 && t.recordPeerReadTime('C2C'.concat(e[s]), r[s]); n.setNetworkType(t.getNetworkType()).setText(i).setEnd()
        })).catch((function(e) {
          t.probeNetwork().then((function(t) {
            const o = y(t, 2); const r = o[0]; const i = o[1]; n.setError(e, r, i).setEnd()
          })), de.warn('MessageController.getPeerReadTime failed. error:', e)
        }))
      }
    } }, { key: 'recordPeerReadTime', value: function(e, t) {
      this._peerReadTimeMap.has(e) ? this._peerReadTimeMap.get(e) < t && this._peerReadTimeMap.set(e, t) : this._peerReadTimeMap.set(e, t)
    } }, { key: '_clearConversationMessages', value: function(e) {
      const t = e.data; this.messagesList.removeByConversationID(t), this.getMessageHandler.deleteCompletedItem(t)
    } }, { key: '_pushIntoNoticeResult', value: function(e, t) {
      return !(!this.messagesList.pushIn(t) || this.singlyLinkedList.has(t.random)) && (e.push(t), !0)
    } }, { key: '_newC2CMessageStoredAndSummary', value: function(e) {
      for (var n = e.notifiesList, o = e.type, r = e.C2CRemainingUnreadList, i = e.isFromSync, s = null, a = [], u = [], c = {}, l = this.tim.bigDataHallwayController, p = 0, g = n.length; p < g; p++) {
        const h = n[p]; if (h.currentUser = this.tim.context.identifier, h.conversationType = o, h.isSystemMessage = !!h.isSystemMessage, s = new Qn(h), h.elements = l.parseElements(h.elements, h.from), s.setElement(h.elements), !i) if (!this._pushIntoNoticeResult(u, s)) continue; 0 !== h.msgLifeTime ? void 0 === c[s.conversationID] ? c[s.conversationID] = a.push({ conversationID: s.conversationID, unreadCount: 'out' === s.flow ? 0 : 1, type: s.conversationType, subType: s.conversationSubType, lastMessage: s }) - 1 : (a[c[s.conversationID]].type = s.conversationType, a[c[s.conversationID]].subType = s.conversationSubType, a[c[s.conversationID]].lastMessage = s, 'in' === s.flow && a[c[s.conversationID]].unreadCount++) : s.setOnlineOnlyFlag(!0)
      } if (Ie(r)) {
        for (let d = function(e, n) {
            const o = a.find((function(t) {
              return t.conversationID === 'C2C'.concat(r[e].from)
            })); o ? o.unreadCount += r[e].count : a.push({ conversationID: 'C2C'.concat(r[e].from), unreadCount: r[e].count, type: t.CONV_C2C, lastMsgTime: r[e].lastMsgTime })
          }, m = 0, f = r.length; m < f; m++)d(m)
      } return { eventDataList: a, result: u }
    } }, { key: 'newGroupMessageStoredAndSummary', value: function(e) {
      let n = null; const o = []; const r = {}; const i = []; const s = t.CONV_GROUP; const a = this.tim.bigDataHallwayController; const u = e.length; u > 1 && e.sort((function(e, t) {
        return e.sequence - t.sequence
      })); for (let c = 0; c < u; c++) {
        const l = e[c]; if (l.currentUser = this.tim.context.identifier, l.conversationType = s, l.isSystemMessage = !!l.isSystemMessage, n = new Qn(l), l.elements = a.parseElements(l.elements, l.from), n.setElement(l.elements), !this._isMessageFromAVChatroom(n)) this._pushIntoNoticeResult(i, n) && (1 !== l.onlineOnlyFlag ? void 0 === r[n.conversationID] ? r[n.conversationID] = o.push({ conversationID: n.conversationID, unreadCount: 'out' === n.flow ? 0 : 1, type: n.conversationType, subType: n.conversationSubType, lastMessage: n }) - 1 : (o[r[n.conversationID]].type = n.conversationType, o[r[n.conversationID]].subType = n.conversationSubType, o[r[n.conversationID]].lastMessage = n, 'in' === n.flow && o[r[n.conversationID]].unreadCount++) : n.setOnlineOnlyFlag(!0))
      } return { eventDataList: o, result: i }
    } }, { key: '_isMessageFromAVChatroom', value: function(e) {
      const t = e.conversationID.slice(5); return this.tim.groupController.checkJoinedAVChatRoomByID(t)
    } }, { key: 'newGroupTipsStoredAndSummary', value: function(e) {
      for (var n = null, o = [], r = [], i = {}, s = 0, a = e.length; s < a; s++) {
        const c = e[s]; if (c.currentUser = this.tim.context.identifier, c.conversationType = t.CONV_GROUP, (n = new Qn(c)).setElement({ type: t.MSG_GRP_TIP, content: u(u({}, c.elements), {}, { groupProfile: c.groupProfile }) }), n.isSystemMessage = !1, !this._isMessageFromAVChatroom(n)) this._pushIntoNoticeResult(r, n) && (void 0 === i[n.conversationID] ? i[n.conversationID] = o.push({ conversationID: n.conversationID, unreadCount: 'out' === n.flow ? 0 : 1, type: n.conversationType, subType: n.conversationSubType, lastMessage: n }) - 1 : (o[i[n.conversationID]].type = n.conversationType, o[i[n.conversationID]].subType = n.conversationSubType, o[i[n.conversationID]].lastMessage = n, 'in' === n.flow && o[i[n.conversationID]].unreadCount++))
      } return { eventDataList: o, result: r }
    } }, { key: 'newSystemNoticeStoredAndSummary', value: function(e) {
      const n = e.notifiesList; const o = e.type; let r = null; const i = n.length; let s = 0; const a = []; const c = { conversationID: t.CONV_SYSTEM, unreadCount: 0, type: t.CONV_SYSTEM, subType: null, lastMessage: null }; for (s = 0; s < i; s++) {
        const l = n[s]; if (l.elements.operationType !== _t)l.currentUser = this.tim.context.identifier, l.conversationType = t.CONV_SYSTEM, l.conversationID = t.CONV_SYSTEM, (r = new Qn(l)).setElement({ type: t.MSG_GRP_SYS_NOTICE, content: u(u({}, l.elements), {}, { groupProfile: l.groupProfile }) }), r.isSystemMessage = !0, (1 === r.sequence && 1 === r.random || 2 === r.sequence && 2 === r.random) && (r.sequence = we(), r.random = we(), r.generateMessageID(l.currentUser), de.log('MessageController.newSystemNoticeStoredAndSummary sequence and random maybe duplicated, regenerate. ID='.concat(r.ID))), this._pushIntoNoticeResult(a, r) && ('poll' === o ? c.unreadCount++ : 'sync' === o && r.setIsRead(!0), c.subType = r.conversationSubType)
      } return c.lastMessage = a[a.length - 1], { eventDataList: a.length > 0 ? [c] : [], result: a }
    } }, { key: '_onSyncMessagesProcessing', value: function(e) {
      const n = this._newC2CMessageStoredAndSummary({ notifiesList: e.data, type: t.CONV_C2C, isFromSync: !0, C2CRemainingUnreadList: e.C2CRemainingUnreadList }); const o = n.eventDataList; const r = n.result; this.emitInnerEvent(So, { eventDataList: o, result: r })
    } }, { key: '_onSyncMessagesFinished', value: function(e) {
      this.triggerReady(); const n = this._newC2CMessageStoredAndSummary({ notifiesList: e.data.messageList, type: t.CONV_C2C, isFromSync: !0, C2CRemainingUnreadList: e.data.C2CRemainingUnreadList }); const o = n.eventDataList; const r = n.result; this.emitInnerEvent(ko, { eventDataList: o, result: r })
    } }, { key: 'getHistoryMessages', value: function(e) {
      if (e.conversationID === t.CONV_SYSTEM) return Mr(); !e.count && (e.count = 15), e.count > 20 && (e.count = 20); let n = this.messagesList.getLocalOldestMessageByConversationID(e.conversationID); n || ((n = {}).time = 0, n.sequence = 0, 0 === e.conversationID.indexOf(t.CONV_C2C) ? (n.to = e.conversationID.replace(t.CONV_C2C, ''), n.conversationType = t.CONV_C2C) : 0 === e.conversationID.indexOf(t.CONV_GROUP) && (n.to = e.conversationID.replace(t.CONV_GROUP, ''), n.conversationType = t.CONV_GROUP)); let o = ''; switch (n.conversationType) {
        case t.CONV_C2C: return o = e.conversationID.replace(t.CONV_C2C, ''), this.getC2CRoamMessages({ conversationID: e.conversationID, peerAccount: o, count: e.count, lastMessageTime: void 0 === this.currentMessageKey[e.conversationID] ? 0 : n.time }); case t.CONV_GROUP: return this.getGroupRoamMessages({ conversationID: e.conversationID, groupID: n.to, count: e.count, sequence: n.sequence - 1 }); default: return Mr()
      }
    } }, { key: 'getC2CRoamMessages', value: function(e) {
      const n = this; const o = e.conversationID; const r = void 0 !== this.currentMessageKey[o] ? this.currentMessageKey[o] : ''; de.log('MessageController.getC2CRoamMessages toAccount='.concat(e.peerAccount, ' count=').concat(e.count || 15, ' lastMessageTime=').concat(e.lastMessageTime || 0, ' messageKey=').concat(r)); const i = new qr(Jr); return this.request({ name: 'c2cMessage', action: 'query', param: { peerAccount: e.peerAccount, count: e.count || 15, lastMessageTime: e.lastMessageTime || 0, messageKey: r } }).then((function(s) {
        const a = s.data; const u = a.complete; const c = a.messageList; Me(c) ? de.log('MessageController.getC2CRoamMessages ok. complete='.concat(u, ' but messageList is undefined!')) : de.log('MessageController.getC2CRoamMessages ok. complete='.concat(u, ' nums=').concat(c.length)), i.setNetworkType(n.getNetworkType()).setText(''.concat(e.peerAccount, '-').concat(e.count || 15, '-').concat(e.lastMessageTime || 0, '-').concat(r, '-').concat(u, '-').concat(c ? c.length : 'undefined')).setEnd(), 1 === u && n.getMessageHandler.setCompleted(o); const l = n._roamMessageStore(c, t.CONV_C2C, o); n.readReportHandler.updateIsRead(o), n.currentMessageKey[o] = s.data.messageKey; const p = n._peerReadTimeMap.get(o); if (de.log('MessageController.getC2CRoamMessages update isPeerRead property. conversationID='.concat(o, ' peerReadTime=').concat(p)), p)n._updateMessageIsPeerReadProperty(o, p); else {
          const g = o.replace(t.CONV_C2C, ''); n.getPeerReadTime([g]).then((function() {
            n._updateMessageIsPeerReadProperty(o, n._peerReadTimeMap.get(o))
          }))
        } return l
      })).catch((function(t) {
        return n.probeNetwork().then((function(n) {
          const o = y(n, 2); const s = o[0]; const a = o[1]; i.setError(t, s, a).setText(''.concat(e.peerAccount, '-').concat(e.count || 15, '-').concat(e.lastMessageTime || 0, '-').concat(r)).setEnd()
        })), de.warn('MessageController.getC2CRoamMessages failed. '.concat(t)), Cr(t)
      }))
    } }, { key: '_computeLastSequence', value: function(e) {
      return e.sequence >= 0 ? Promise.resolve(e.sequence) : this.tim.groupController.getGroupLastSequence(e.groupID)
    } }, { key: 'getGroupRoamMessages', value: function(e) {
      const n = this; const o = new qr(Xr); let r = 0; return this._computeLastSequence(e).then((function(t) {
        return r = t, de.log('MessageController.getGroupRoamMessages groupID='.concat(e.groupID, ' lastSequence=').concat(r)), n.request({ name: 'groupMessage', action: 'query', param: { groupID: e.groupID, count: 21, sequence: r } })
      })).then((function(i) {
        const s = i.data; const a = s.messageList; const u = s.complete; Me(a) ? de.log('MessageController.getGroupRoamMessages ok. complete='.concat(u, ' but messageList is undefined!')) : de.log('MessageController.getGroupRoamMessages ok. complete='.concat(u, ' nums=').concat(a.length)), o.setNetworkType(n.getNetworkType()).setText(''.concat(e.groupID, '-').concat(r, '-').concat(u, '-').concat(a ? a.length : 'undefined')).setEnd(); const c = 'GROUP'.concat(e.groupID); if (2 === u || Xe(a)) return n.getMessageHandler.setCompleted(c), []; const l = n._roamMessageStore(a, t.CONV_GROUP, c); return n.readReportHandler.updateIsRead(c), n._patchConversationLastMessage(c), l
      })).catch((function(t) {
        return n.probeNetwork().then((function(n) {
          const i = y(n, 2); const s = i[0]; const a = i[1]; o.setError(t, s, a).setText(''.concat(e.groupID, '-').concat(r)).setEnd()
        })), de.warn('MessageController.getGroupRoamMessages failed. '.concat(t)), Cr(t)
      }))
    } }, { key: '_patchConversationLastMessage', value: function(e) {
      const t = this.tim.conversationController.getLocalConversation(e); if (t) {
        const n = t.lastMessage; const o = n.messageForShow; const r = n.payload; if (Xe(o) || Xe(r)) {
          const i = this.messagesList.getLocalMessageList(e); if (0 === i.length) return; const s = i[i.length - 1]; de.log('MessageController._patchConversationLastMessage conversationID:'.concat(e, ' payload:'), s.payload), t.updateLastMessage(s)
        }
      }
    } }, { key: '_roamMessageStore', value: function() {
      const e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []; const n = arguments.length > 1 ? arguments[1] : void 0; const o = arguments.length > 2 ? arguments[2] : void 0; let r = null; const i = []; let s = 0; let a = e.length; let c = null; const l = n === t.CONV_GROUP; const p = this.tim.bigDataHallwayController; let g = function() {
        s = l ? e.length - 1 : 0, a = l ? 0 : e.length
      }; let h = function() {
        l ? --s : ++s
      }; let d = function() {
        return l ? s >= a : s < a
      }; for (g(); d(); h()) {
        if (l && 1 === e[s].sequence && this.getMessageHandler.setCompleted(o), 1 !== e[s].isPlaceMessage) {
          if ((r = new Qn(e[s])).to = e[s].to, r.isSystemMessage = !!e[s].isSystemMessage, r.conversationType = n, e[s].event === at.JSON.TYPE.GROUP.TIP ? c = { type: t.MSG_GRP_TIP, content: u(u({}, e[s].elements), {}, { groupProfile: e[s].groupProfile }) } : (e[s].elements = p.parseElements(e[s].elements, e[s].from), c = e[s].elements), Xe(c)) {
            const m = new qr(ti); m.setText('from:'.concat(r.from, ' to:').concat(r.to, ' sequence:').concat(r.sequence, ' event:').concat(e[s].event)), m.setNetworkType(this.getNetworkType()).setEnd()
          } else r.setElement(c), r.reInitialize(this.tim.context.identifier), i.push(r)
        }
      } return this.messagesList.unshift(i), g = h = d = null, i
    } }, { key: 'getLocalMessageList', value: function(e) {
      return this.messagesList.getLocalMessageList(e)
    } }, { key: 'getLocalMessage', value: function(e, t) {
      return this.messagesList.getLocalMessage(e, t)
    } }, { key: 'hasLocalMessage', value: function(e, t) {
      return this.messagesList.hasLocalMessage(e, t)
    } }, { key: 'deleteLocalMessage', value: function(e) {
      e instanceof Qn && this.messagesList.remove(e)
    } }, { key: 'revokeMessage', value: function(e) {
      let n; const o = this; e.conversationType === t.CONV_C2C ? n = { name: 'c2cMessageWillBeRevoked', action: 'create', param: { msgInfo: { fromAccount: e.from, toAccount: e.to, msgSeq: e.sequence, msgRandom: e.random, msgTimeStamp: e.time } } } : e.conversationType === t.CONV_GROUP && (n = { name: 'groupMessageWillBeRevoked', action: 'create', param: { to: e.to, msgSeqList: [{ msgSeq: e.sequence }] } }); const r = new qr(Qr); return r.setMessageType(e.type).setText(''.concat(this._generateTjgID(e), '-').concat(e.type, '-').concat(e.from, '-').concat(e.to)), this.request(n).then((function(t) {
        const n = t.data.recallRetList; if (!Xe(n) && 0 !== n[0].retCode) {
          const i = new Ut({ code: n[0].retCode, message: bt[n[0].retCode] || Zt, data: { message: e } }); return r.setCode(i.code).setMessage(i.message).setEnd(), Cr(i)
        } return de.info('MessageController.revokeMessage ok. ID='.concat(e.ID)), e.isRevoked = !0, r.setEnd(), o.emitInnerEvent(No, [e]), new vr({ message: e })
      })).catch((function(t) {
        o.probeNetwork().then((function(e) {
          const n = y(e, 2); const o = n[0]; const i = n[1]; r.setError(t, o, i).setEnd()
        })); const n = new Ut({ code: t && t.code ? t.code : qt.MESSAGE_REVOKE_FAIL, message: t && t.message ? t.message : Zt, data: { message: e } }); return de.warn('MessageController.revokeMessage failed. ID='.concat(e.ID, ' code=').concat(n.code, ' message=').concat(n.message)), Cr(n)
      }))
    } }, { key: 'setMessageRead', value: function(e) {
      const t = this; return new Promise((function(n, o) {
        t.ready((function() {
          t.readReportHandler.setMessageRead(e).then(n).catch(o)
        }))
      }))
    } }, { key: 'getMessageList', value: function(e) {
      return this.getMessageHandler.getMessageList(e)
    } }, { key: 'createTextMessage', value: function(e) {
      e.currentUser = this.tim.context.identifier; const t = new Qn(e); const n = 'string' === typeof e.payload ? e.payload : e.payload.text; const o = new st({ text: n }); return t.setElement(o), t
    } }, { key: 'createCustomMessage', value: function(e) {
      e.currentUser = this.tim.context.identifier; const t = new Qn(e); const n = new zn({ data: e.payload.data, description: e.payload.description, extension: e.payload.extension }); return t.setElement(n), t
    } }, { key: 'createImageMessage', value: function(e) {
      e.currentUser = this.tim.context.identifier; const t = new Qn(e); if (V) {
        const n = e.payload.file; if (me(n)) return void de.warn('小程序环境下调用 createImageMessage 接口时，payload.file 不支持传入 File 对象'); const o = n.tempFilePaths[0]; const r = { url: o, name: o.slice(o.lastIndexOf('/') + 1), size: n.tempFiles[0].size, type: o.slice(o.lastIndexOf('.') + 1).toLowerCase() }; e.payload.file = r
      } else if (G && me(e.payload.file)) {
        const i = e.payload.file; e.payload.file = { files: [i] }
      } const s = new St({ imageFormat: at.IMAGE_FORMAT.UNKNOWN, uuid: this._generateUUID(), file: e.payload.file }); return t.setElement(s), this.messageOptionMap.set(t.messageID, e), t
    } }, { key: 'createFileMessage', value: function(e) {
      if (!V) {
        if (G && me(e.payload.file)) {
          const t = e.payload.file; e.payload.file = { files: [t] }
        }e.currentUser = this.tim.context.identifier; const n = new Qn(e); const o = new Yn({ uuid: this._generateUUID(), file: e.payload.file }); return n.setElement(o), this.messageOptionMap.set(n.messageID, e), n
      }de.warn('小程序目前不支持选择文件， createFileMessage 接口不可用！')
    } }, { key: 'createAudioMessage', value: function(e) {
      if (V) {
        const t = e.payload.file; if (V) {
          const n = { url: t.tempFilePath, name: t.tempFilePath.slice(t.tempFilePath.lastIndexOf('/') + 1), size: t.fileSize, second: parseInt(t.duration) / 1e3, type: t.tempFilePath.slice(t.tempFilePath.lastIndexOf('.') + 1).toLowerCase() }; e.payload.file = n
        }e.currentUser = this.tim.context.identifier; const o = new Qn(e); const r = new At({ second: Math.floor(t.duration / 1e3), size: t.fileSize, url: t.tempFilePath, uuid: this._generateUUID() }); return o.setElement(r), this.messageOptionMap.set(o.messageID, e), o
      }de.warn('createAudioMessage 目前只支持小程序环境下发语音消息')
    } }, { key: 'createVideoMessage', value: function(e) {
      e.currentUser = this.tim.context.identifier, e.payload.file.thumbUrl = 'https://webim-1252463788.cos.ap-shanghai.myqcloud.com/assets/images/transparent.png', e.payload.file.thumbSize = 1668; const t = {}; if (V) {
        if (me(e.payload.file)) return void de.warn('小程序环境下调用 createVideoMessage 接口时，payload.file 不支持传入 File 对象'); const n = e.payload.file; t.url = n.tempFilePath, t.name = n.tempFilePath.slice(n.tempFilePath.lastIndexOf('/') + 1), t.size = n.size, t.second = n.duration, t.type = n.tempFilePath.slice(n.tempFilePath.lastIndexOf('.') + 1).toLowerCase()
      } else if (G) {
        if (me(e.payload.file)) {
          const o = e.payload.file; e.payload.file.files = [o]
        } const r = e.payload.file; t.url = window.URL.createObjectURL(r.files[0]), t.name = r.files[0].name, t.size = r.files[0].size, t.second = r.files[0].duration || 0, t.type = r.files[0].type.split('/')[1]
      }e.payload.file.videoFile = t; const i = new Qn(e); const s = new Wn({ videoFormat: t.type, videoSecond: Number(t.second.toFixed(0)), videoSize: t.size, remoteVideoUrl: '', videoUrl: t.url, videoUUID: this._generateUUID(), thumbUUID: this._generateUUID(), thumbWidth: e.payload.file.width || 200, thumbHeight: e.payload.file.height || 200, thumbUrl: e.payload.file.thumbUrl, thumbSize: e.payload.file.thumbSize, thumbFormat: e.payload.file.thumbUrl.slice(e.payload.file.thumbUrl.lastIndexOf('.') + 1).toLowerCase() }); return i.setElement(s), this.messageOptionMap.set(i.messageID, e), i
    } }, { key: 'createFaceMessage', value: function(e) {
      e.currentUser = this.tim.context.identifier; const t = new Qn(e); const n = new kt(e.payload); return t.setElement(n), t
    } }, { key: '_generateUUID', value: function() {
      const e = this.tim.context; return ''.concat(e.SDKAppID, '-').concat(e.identifier, '-').concat(function() {
        for (var e = '', t = 32; t > 0; --t)e += Pe[Math.floor(Math.random() * Ge)]; return e
      }())
    } }, { key: '_generateTjgID', value: function(e) {
      return this.tim.context.tinyID + '-' + e.random
    } }, { key: 'getMessageOptionByID', value: function(e) {
      return this.messageOptionMap.get(e)
    } }, { key: 'isMessageSentByCurrentInstance', value: function(e) {
      return !(!this.messagesList.hasLocalMessage(e.conversationID, e.ID) && !this.singlyLinkedList.has(e.random))
    } }, { key: 'pushToMessageList', value: function(e) {
      this.messagesList.pushIn(e)
    } }]), s
  }(mr); const Ms = function() {
    function e(t) {
      o(this, e), this.userID = '', this.avatar = '', this.nick = '', this.role = '', this.joinTime = '', this.lastSendMsgTime = '', this.nameCard = '', this.muteUntil = 0, this.memberCustomField = [], this._initMember(t)
    } return i(e, [{ key: '_initMember', value: function(e) {
      this.updateMember(e)
    } }, { key: 'updateMember', value: function(e) {
      const t = [null, void 0, '', 0, NaN]; e.memberCustomField && xe(this.memberCustomField, e.memberCustomField), Oe(this, e, ['memberCustomField'], t)
    } }, { key: 'updateRole', value: function(e) {
      ['Owner', 'Admin', 'Member'].indexOf(e) < 0 || (this.role = e)
    } }, { key: 'updateMuteUntil', value: function(e) {
      Me(e) || (this.muteUntil = Math.floor((Date.now() + 1e3 * e) / 1e3))
    } }, { key: 'updateNameCard', value: function(e) {
      Me(e) || (this.nameCard = e)
    } }, { key: 'updateMemberCustomField', value: function(e) {
      e && xe(this.memberCustomField, e)
    } }]), e
  }(); const Cs = function() {
    function e(t) {
      o(this, e), this.tim = t.tim, this.groupController = t.groupController, this._initListeners()
    } return i(e, [{ key: '_initListeners', value: function() {
      this.tim.innerEmitter.on(Oo, this._onReceivedGroupTips, this)
    } }, { key: '_onReceivedGroupTips', value: function(e) {
      const t = this; const n = e.data; const o = n.result; n.isGroupTip && o.forEach((function(e) {
        switch (e.payload.operationType) {
          case 1: t._onNewMemberComeIn(e); break; case 2: t._onMemberQuit(e); break; case 3: t._onMemberKickedOut(e); break; case 4: t._onMemberSetAdmin(e); break; case 5: t._onMemberCancelledAdmin(e); break; case 6: t._onGroupProfileModified(e); break; case 7: t._onMemberInfoModified(e); break; default: de.warn('GroupTipsHandler._onReceivedGroupTips Unhandled groupTips. operationType=', e.payload.operationType)
        }
      }))
    } }, { key: '_onNewMemberComeIn', value: function(e) {
      const t = e.payload; const n = t.memberNum; const o = t.groupProfile.groupID; const r = this.groupController.getLocalGroupProfile(o); r && fe(n) && (r.memberNum = n)
    } }, { key: '_onMemberQuit', value: function(e) {
      const t = e.payload; const n = t.memberNum; const o = t.groupProfile.groupID; const r = this.groupController.getLocalGroupProfile(o); r && fe(n) && (r.memberNum = n), this.groupController.deleteLocalGroupMembers(o, e.payload.userIDList)
    } }, { key: '_onMemberKickedOut', value: function(e) {
      const t = e.payload; const n = t.memberNum; const o = t.groupProfile.groupID; const r = this.groupController.getLocalGroupProfile(o); r && fe(n) && (r.memberNum = n), this.groupController.deleteLocalGroupMembers(o, e.payload.userIDList)
    } }, { key: '_onMemberSetAdmin', value: function(e) {
      const n = this; const o = e.payload.groupProfile.groupID; e.payload.userIDList.forEach((function(e) {
        const r = n.groupController.getLocalGroupMemberInfo(o, e); r && r.updateRole(t.GRP_MBR_ROLE_ADMIN)
      }))
    } }, { key: '_onMemberCancelledAdmin', value: function(e) {
      const n = this; const o = e.payload.groupProfile.groupID; e.payload.userIDList.forEach((function(e) {
        const r = n.groupController.getLocalGroupMemberInfo(o, e); r && r.updateRole(t.GRP_MBR_ROLE_MEMBER)
      }))
    } }, { key: '_onGroupProfileModified', value: function(e) {
      const t = this; const n = e.payload.newGroupProfile; const o = e.payload.groupProfile.groupID; const r = this.groupController.getLocalGroupProfile(o); Object.keys(n).forEach((function(e) {
        switch (e) {
          case 'ownerID': t._ownerChaged(r, n); break; default: r[e] = n[e]
        }
      })), this.groupController.emitGroupListUpdate(!0, !0)
    } }, { key: '_ownerChaged', value: function(e, n) {
      const o = e.groupID; const r = this.groupController.getLocalGroupProfile(o); const i = this.tim.context.identifier; if (i === n.ownerID) {
        r.updateGroup({ selfInfo: { role: t.GRP_MBR_ROLE_OWNER } }); const s = this.groupController.getLocalGroupMemberInfo(o, i); const a = this.groupController.getLocalGroupProfile(o).ownerID; const u = this.groupController.getLocalGroupMemberInfo(o, a); s && s.updateRole(t.GRP_MBR_ROLE_OWNER), u && u.updateRole(t.GRP_MBR_ROLE_MEMBER)
      }
    } }, { key: '_onMemberInfoModified', value: function(e) {
      const t = this; const n = e.payload.groupProfile.groupID; e.payload.memberList.forEach((function(e) {
        const o = t.groupController.getLocalGroupMemberInfo(n, e.userID); o && e.muteTime && o.updateMuteUntil(e.muteTime)
      }))
    } }]), e
  }(); const Es = function() {
    function n(e) {
      o(this, n), this.groupController = e.groupController, this.tim = e.tim, this.pendencyMap = new Map, this._initLiceners()
    } return i(n, [{ key: '_initLiceners', value: function() {
      this.tim.innerEmitter.on(Ro, this._onReceivedGroupSystemNotice, this), this.tim.innerEmitter.on(To, this._clearGroupSystemNotice, this)
    } }, { key: '_clearGroupSystemNotice', value: function() {
      const e = this; this.getPendencyList().then((function(n) {
        n.forEach((function(t) {
          e.pendencyMap.set(''.concat(t.from, '_').concat(t.groupID, '_').concat(t.to), t)
        })); const o = e.tim.messageController.getLocalMessageList(t.CONV_SYSTEM); const r = []; o.forEach((function(t) {
          const n = t.payload; const o = n.operatorID; const i = n.operationType; const s = n.groupProfile; if (i === ut) {
            const a = ''.concat(o, '_').concat(s.groupID, '_').concat(s.to); const u = e.pendencyMap.get(a); u && fe(u.handled) && 0 !== u.handled && r.push(t)
          }
        })), e.groupController.deleteGroupSystemNotice({ messageList: r })
      }))
    } }, { key: 'getPendencyList', value: function(e) {
      const t = this; return this.groupController.request({ name: 'group', action: 'getGroupPendency', param: { startTime: e && e.startTime ? e.startTime : 0, limit: e && e.limit ? e.limit : 10, handleAccount: this.tim.context.identifier } }).then((function(e) {
        const n = e.data; const o = n.pendencyList; return 0 !== n.nextStartTime ? t.getPendencyList({ startTime: n.nextStartTime }).then((function(e) {
          return [].concat(I(o), I(e))
        })) : o
      }))
    } }, { key: '_onReceivedGroupSystemNotice', value: function(t) {
      const n = this; const o = t.data; const r = o.result; 'sync' !== o.type && r.forEach((function(t) {
        switch (t.payload.operationType) {
          case 1: n._onApplyGroupRequest(t); break; case 2: n._onApplyGroupRequestAgreed(t); break; case 3: n._onApplyGroupRequestRefused(t); break; case 4: n._onMemberKicked(t); break; case 5: n._onGroupDismissed(t); break; case 6: break; case 7: n._onInviteGroup(t); break; case 8: n._onQuitGroup(t); break; case 9: n._onSetManager(t); break; case 10: n._onDeleteManager(t); break; case 11: case 12: case 15: break; case 255: n.groupController.emitOuterEvent(e.GROUP_SYSTEM_NOTICE_RECEIVED, { message: t, type: vt })
        }
      }))
    } }, { key: '_onApplyGroupRequest', value: function(t) {
      this.groupController.emitOuterEvent(e.GROUP_SYSTEM_NOTICE_RECEIVED, { message: t, type: ut })
    } }, { key: '_onApplyGroupRequestAgreed', value: function(t) {
      const n = this; const o = t.payload.groupProfile.groupID; this.groupController.hasLocalGroup(o) || this.groupController.getGroupProfile({ groupID: o }).then((function(e) {
        const t = e.data.group; t && (n.groupController.updateGroupMap([t]), n.groupController.emitGroupListUpdate())
      })), this.groupController.emitOuterEvent(e.GROUP_SYSTEM_NOTICE_RECEIVED, { message: t, type: ct })
    } }, { key: '_onApplyGroupRequestRefused', value: function(t) {
      this.groupController.emitOuterEvent(e.GROUP_SYSTEM_NOTICE_RECEIVED, { message: t, type: lt })
    } }, { key: '_onMemberKicked', value: function(t) {
      const n = t.payload.groupProfile.groupID; this.groupController.hasLocalGroup(n) && this.groupController.deleteLocalGroupAndConversation(n), this.groupController.emitOuterEvent(e.GROUP_SYSTEM_NOTICE_RECEIVED, { message: t, type: pt })
    } }, { key: '_onGroupDismissed', value: function(t) {
      const n = t.payload.groupProfile.groupID; const o = this.groupController.hasLocalGroup(n); const r = this.groupController.AVChatRoomHandler; o && this.groupController.deleteLocalGroupAndConversation(n), r.checkJoinedAVChatRoomByID(n) && r.reset(n), this.groupController.emitOuterEvent(e.GROUP_SYSTEM_NOTICE_RECEIVED, { message: t, type: gt })
    } }, { key: '_onInviteGroup', value: function(t) {
      const n = this; const o = t.payload.groupProfile.groupID; this.groupController.hasLocalGroup(o) || this.groupController.getGroupProfile({ groupID: o }).then((function(e) {
        const t = e.data.group; t && (n.groupController.updateGroupMap([t]), n.groupController.emitGroupListUpdate())
      })), this.groupController.emitOuterEvent(e.GROUP_SYSTEM_NOTICE_RECEIVED, { message: t, type: ht })
    } }, { key: '_onQuitGroup', value: function(t) {
      const n = t.payload.groupProfile.groupID; this.groupController.hasLocalGroup(n) && this.groupController.deleteLocalGroupAndConversation(n), this.groupController.emitOuterEvent(e.GROUP_SYSTEM_NOTICE_RECEIVED, { message: t, type: dt })
    } }, { key: '_onSetManager', value: function(n) {
      const o = n.payload.groupProfile; const r = o.to; const i = o.groupID; const s = this.groupController.getLocalGroupMemberInfo(i, r); s && s.updateRole(t.GRP_MBR_ROLE_ADMIN), this.groupController.emitOuterEvent(e.GROUP_SYSTEM_NOTICE_RECEIVED, { message: n, type: mt })
    } }, { key: '_onDeleteManager', value: function(n) {
      const o = n.payload.groupProfile; const r = o.to; const i = o.groupID; const s = this.groupController.getLocalGroupMemberInfo(i, r); s && s.updateRole(t.GRP_MBR_ROLE_MEMBER), this.groupController.emitOuterEvent(e.GROUP_SYSTEM_NOTICE_RECEIVED, { message: n, type: ft })
    } }, { key: 'reset', value: function() {
      this.pendencyMap.clear()
    } }]), n
  }(); const Ts = { 3: !0, 4: !0, 5: !0, 6: !0 }; const Ds = function() {
    function n(e) {
      const t = e.tim; const r = e.groupController; o(this, n), this.tim = t, this.groupController = r, this.sequencesLinkedList = new vs(100), this.receivedMessageCount = 0, this._pollingRequestInfoMap = new Map, this._pollingInstanceMap = new Map, this._joinedGroupMap = new Map, this._reportMessageStackedCount = 0, this._onlineMemberCountMap = new Map, this.DEFAULT_EXPIRE_TIME = 60
    } return i(n, [{ key: 'hasJoinedAVChatRoom', value: function() {
      return this._joinedGroupMap.size > 0
    } }, { key: 'checkJoinedAVChatRoomByID', value: function(e) {
      return this._joinedGroupMap.has(e)
    } }, { key: 'getJoinedAVChatRoom', value: function() {
      return this._joinedGroupMap.size > 0 ? I(this._joinedGroupMap.keys()) : null
    } }, { key: 'start', value: function(e) {
      const t = this._pollingRequestInfoMap.get(e); const n = { key: t.key, startSeq: t.startSeq }; if (this._pollingInstanceMap.has(e)) {
        const o = this._pollingInstanceMap.get(e); o.isRunning() || o.start()
      } else {
        const r = this.groupController.createTransportCapsule({ name: 'AVChatRoom', action: 'startLongPoll', param: n }); const i = this.tim.connectionController.createRunLoop({ pack: r, before: this._updateRequestData.bind(this, e), success: this._handleSuccess.bind(this, e), fail: this._handleFailure.bind(this), isAVChatRoomLoop: !0 }); i.start(), this._pollingInstanceMap.set(e, i), de.log('AVChatRoomHandler.start message channel started. groupID='.concat(e))
      }
    } }, { key: 'stop', value: function(e) {
      const t = this._pollingInstanceMap.get(e); t && t.isRunning() && (t.abort(), t.stop(), de.log('AVChatRoomHandler.stop message channel stopped. groupID='.concat(e)))
    } }, { key: 'startRunLoop', value: function(e) {
      const t = this; return this._precheck().then((function() {
        const n = e.longPollingKey; const o = e.group; const r = o.groupID; return t._pollingRequestInfoMap.set(r, { key: n, startSeq: 0 }), t._joinedGroupMap.set(r, o), t._addAVChatRoomID(r), t.groupController.updateGroupMap([o]), t.groupController.emitGroupListUpdate(!0, !1), t.start(r), t.groupController.isLoggedIn() ? Mr({ status: et.SUCCESS, group: o }) : Mr({ status: et.SUCCESS })
      }))
    } }, { key: 'joinWithoutAuth', value: function(e) {
      const t = this; return this.groupController.request({ name: 'group', action: 'applyJoinAVChatRoom', param: e }).then((function(n) {
        const o = n.data.longPollingKey; if (Me(o)) return Cr(new Ut({ code: qt.CANNOT_JOIN_NON_AVCHATROOM_WITHOUT_LOGIN, message: En })); de.log('AVChatRoomHandler.joinWithoutAuth ok. groupID:'.concat(e.groupID)), t.groupController.emitInnerEvent(sr), t.groupController.emitInnerEvent(ir, e.groupID); const r = new cs({ groupID: e.groupID }); return t.startRunLoop({ group: r, longPollingKey: o }), new vr({ status: et.SUCCESS })
      })).catch((function(t) {
        return de.error('AVChatRoomHandler.joinWithoutAuth error:'.concat(Re(t), '. groupID:').concat(e.groupID)), Cr(t)
      }))
    } }, { key: '_precheck', value: function() {
      if (this.tim.context.unlimitedAVChatRoom) return Promise.resolve(); if (!this.hasJoinedAVChatRoom()) return Promise.resolve(); const e = y(this._joinedGroupMap.entries().next().value, 2); const n = e[0]; const o = e[1]; if (this.groupController.isLoggedIn()) {
        if (!(o.selfInfo.role === t.GRP_MBR_ROLE_OWNER || o.ownerID === this.tim.loginInfo.identifier)) return this.groupController.quitGroup(n); this.groupController.deleteLocalGroupAndConversation(n)
      } else this.groupController.deleteLocalGroupAndConversation(n); return this.reset(n), Promise.resolve()
    } }, { key: '_updateRequestData', value: function(e, t) {
      const n = this._pollingRequestInfoMap.get(e); const o = n.key; const r = n.startSeq; t.StartSeq = r, t.Key = o, this.tim.sumStatController.addTotalCount(Sr)
    } }, { key: '_handleSuccess', value: function(e, t) {
      this.tim.sumStatController.addSuccessCount(Sr), this.tim.sumStatController.addCost(Sr, t.data.timecost); const n = t.data; const o = n.errorCode; const r = n.errorInfo; const i = n.key; const s = n.nextSeq; const a = n.rspMsgList; if (o !== nt.SUCCESS) {
        const u = this._pollingRequestInfoMap.get(e); const c = new qr(Li); const l = u ? ''.concat(u.key, '-').concat(u.startSeq) : 'requestInfo is undefined'; c.setMessage(''.concat(e, '-').concat(l, '-').concat(r || JSON.stringify(t.data))).setCode(o).setNetworkType(this.groupController.getNetworkType()).setEnd(!0)
      } else {
        _e(i) && fe(s) && this._pollingRequestInfoMap.set(e, { key: i, startSeq: s }), Ie(a) && a.length > 0 && (a.forEach((function(e) {
          e.to = e.groupID
        })), this._dispatchNotice(a))
      } this.groupController.emitInnerEvent(zo)
    } }, { key: '_handleFailure', value: function(e) {
      if (e.error) {
        if ('ECONNABORTED' === e.error.code || e.error.code === qt.NETWORK_TIMEOUT) {
          if (e.error.config) {
            const t = e.error.config.url; const n = e.error.config.data; de.log('AVChatRoomHandler._handleFailure request timed out. url='.concat(t, ' data=').concat(n))
          } else de.log('AVChatRoomHandler._handleFailure request timed out')
        } else de.log('AVChatRoomHandler._handleFailure request failed due to network error')
      } this.groupController.emitInnerEvent(Yo)
    } }, { key: '_dispatchNotice', value: function(n) {
      if (Ie(n) && 0 !== n.length) {
        const o = Date.now(); let r = null; const i = []; const s = []; const a = n.length; a > 1 && n.sort((function(e, t) {
          return e.sequence - t.sequence
        })); for (let u = 0; u < a; u++) {
          if (Ts[n[u].event]) {
            if (this.receivedMessageCount += 1, r = this.packMessage(n[u], n[u].event), this.tim.context.unlimitedAVChatRoom || !this.sequencesLinkedList.has(r.sequence)) {
              const c = r.conversationID; if (this.receivedMessageCount % 40 == 0 && this.tim.messageLossController.detectMessageLoss(c, this.sequencesLinkedList.data()), null !== this.sequencesLinkedList.tail()) {
                const l = this.sequencesLinkedList.tail().value; const p = r.sequence - l; p > 1 && p <= 20 ? this.tim.messageLossController.onMessageMaybeLost(c, l + 1, p - 1) : p < -1 && p >= -20 && this.tim.messageLossController.onMessageMaybeLost(c, r.sequence + 1, Math.abs(p) - 1)
              } this.sequencesLinkedList.pushIn(r.sequence), this._isMessageSentByCurrentInstance(r) || (r.conversationType === t.CONV_SYSTEM && s.push(r), i.push(r))
            }
          } else de.warn('AVChatRoomHandler._dispatchMessage 未处理的 event 类型: '.concat(n[u].event))
        } if (s.length > 0 && this.groupController.emitInnerEvent(Ro, { result: s, eventDataList: [], type: 'poll' }), 0 !== i.length) {
          const g = this.packConversationOption(i); g.length > 0 && this.groupController.emitInnerEvent(Oo, { eventDataList: g, type: 'poll' }), de.debug('AVChatRoomHandler._dispatchNotice nums='.concat(i.length)); const h = this.tim.sumStatController; h.addTotalCount(Pr), h.addSuccessCount(Pr), h.addCost(Pr, Date.now() - o), this._checkMessageStacked(i), this.groupController.emitOuterEvent(e.MESSAGE_RECEIVED, i)
        }
      }
    } }, { key: '_checkMessageStacked', value: function(e) {
      const t = e.length; t >= 100 && (de.warn('AVChatRoomHandler.checkMessageStacked 直播群消息堆积数:'.concat(e.length, '！可能会导致微信小程序渲染时遇到 "Dom limit exceeded" 的错误，建议接入侧此时只渲染最近的10条消息')), this._reportMessageStackedCount < 5 && (new qr(bi).setNetworkType(this.groupController.getNetworkType()).setText('nums='.concat(t, ' groupID=').concat(I(this._joinedGroupMap.keys()))).setEnd(), this._reportMessageStackedCount += 1))
    } }, { key: '_isMessageSentByCurrentInstance', value: function(e) {
      return !!this.tim.messageController.isMessageSentByCurrentInstance(e)
    } }, { key: 'packMessage', value: function(e, n) {
      e.currentUser = this.tim.context.identifier, e.conversationType = 5 === n ? t.CONV_SYSTEM : t.CONV_GROUP, e.isSystemMessage = !!e.isSystemMessage; const o = new Qn(e); const r = this.packElements(e, n); return o.setElement(r), o
    } }, { key: 'packElements', value: function(e, n) {
      return 4 === n || 6 === n ? (this._updateMemberCountByGroupTips(e), { type: t.MSG_GRP_TIP, content: u(u({}, e.elements), {}, { groupProfile: e.groupProfile }) }) : 5 === n ? { type: t.MSG_GRP_SYS_NOTICE, content: u(u({}, e.elements), {}, { groupProfile: e.groupProfile }) } : this.tim.bigDataHallwayController.parseElements(e.elements, e.from)
    } }, { key: 'packConversationOption', value: function(e) {
      for (var t = new Map, n = 0; n < e.length; n++) {
        const o = e[n]; const r = o.conversationID; if (t.has(r)) {
          const i = t.get(r); i.lastMessage = o, 'in' === o.flow && i.unreadCount++
        } else t.set(r, { conversationID: o.conversationID, unreadCount: 'out' === o.flow ? 0 : 1, type: o.conversationType, subType: o.conversationSubType, lastMessage: o })
      } return I(t.values())
    } }, { key: '_addAVChatRoomID', value: function(e) {
      const t = this.tim.loginInfo.avchatroomIDList || []; t.includes(e) || (this.tim.context.unlimitedAVChatRoom ? t.push(e) : t.splice(0, 1, e), this.tim.loginInfo.avchatroomIDList = t)
    } }, { key: '_deleteAVChatRoomID', value: function(e) {
      const t = this.tim.loginInfo.avchatroomIDList || []; const n = t.indexOf(e); -1 !== n && (t.splice(n, 1), this.tim.loginInfo.avchatroomIDList = t)
    } }, { key: 'joinAVChatRoomSilently', value: function() {
      const e = this; const t = this.tim.loginInfo.avchatroomIDList || []; if (0 !== t.length) {
        const n = new qr(li); t.forEach((function(t) {
          e.groupController.joinGroup({ groupID: t }).then((function(o) {
            de.warn('AVChatRoomHandler.joinAVChatRoomSilently silently join group ok:'.concat(t)), n.setCode(o.code).setText('groupID='.concat(t)).setNetworkType(e.groupController.getNetworkType()).setEnd(!0)
          })).catch((function(o) {
            de.warn('AVChatRoomHandler.joinAVChatRoomSilently silently join group failed:'.concat(Re(o))), n.setMessage(''.concat(t, '-').concat(JSON.stringify(o))).setCode(o.code).setNetworkType(e.groupController.getNetworkType()).setEnd(!0)
          }))
        }))
      }
    } }, { key: 'getGroupOnlineMemberCount', value: function(e) {
      const t = this._onlineMemberCountMap.get(e) || {}; const n = Date.now(); return Xe(t) || n - t.lastSyncTime > 1e3 * t.expireTime && n - t.latestUpdateTime > 1e4 && n - t.lastReqTime > 3e3 ? (t.lastReqTime = n, this._onlineMemberCountMap.set(e, t), this._getGroupOnlineMemberCount(e).then((function(e) {
        return new vr({ memberCount: e.memberCount })
      })).catch((function(e) {
        return Cr(e)
      }))) : Mr({ memberCount: t.memberCount })
    } }, { key: '_getGroupOnlineMemberCount', value: function(e) {
      const t = this; return this.groupController.request({ name: 'group', action: 'getOnlineMemberNum', param: { groupID: e } }).then((function(n) {
        const o = t._onlineMemberCountMap.get(e) || {}; const r = n.data; const i = r.onlineMemberNum; const s = void 0 === i ? 0 : i; const a = r.expireTime; const u = void 0 === a ? t.DEFAULT_EXPIRE_TIME : a; de.log('AVChatRoomHandler._getGroupOnlineMemberCount ok. groupID='.concat(e, ' memberCount=').concat(s, ' expireTime=').concat(u)); const c = Date.now(); return Xe(o) && (o.lastReqTime = c), t._onlineMemberCountMap.set(e, Object.assign(o, { lastSyncTime: c, latestUpdateTime: c, memberCount: s, expireTime: u })), { memberCount: s }
      })).catch((function(n) {
        return de.warn('AVChatRoomHandler._getGroupOnlineMemberCount failed. error:'.concat(Re(n))), new qr(Ri).setCode(n.code).setMessage(''.concat(e, '-').concat(JSON.stringify(n))).setNetworkType(t.groupController.getNetworkType()).setEnd(), Promise.reject(n)
      }))
    } }, { key: '_updateMemberCountByGroupTips', value: function(e) {
      const t = e.groupProfile.groupID; const n = e.elements.onlineMemberInfo; const o = void 0 === n ? void 0 : n; if (void 0 !== o) {
        const r = o.onlineMemberNum; const i = void 0 === r ? 0 : r; const s = o.expireTime; const a = void 0 === s ? this.DEFAULT_EXPIRE_TIME : s; const u = this._onlineMemberCountMap.get(t) || {}; const c = Date.now(); Xe(u) ? Object.assign(u, { lastReqTime: 0, lastSyncTime: 0, latestUpdateTime: c, memberCount: i, expireTime: a }) : (u.latestUpdateTime = c, u.memberCount = i), de.debug('AVChatRoomHandler._updateMemberCountByGroupTips info:', u), this._onlineMemberCountMap.set(t, u)
      }
    } }, { key: 'reset', value: function(e) {
      if (0 !== this._pollingInstanceMap.size) {
        if (e)de.log('AVChatRoomHandler.reset groupID='.concat(e)), this.stop(e), this._pollingInstanceMap.delete(e), this._joinedGroupMap.delete(e), this._pollingRequestInfoMap.delete(e), this._onlineMemberCountMap.delete(e); else {
          de.log('AVChatRoomHandler.reset all'); let t; const n = S(this._pollingInstanceMap.keys()); try {
            for (n.s(); !(t = n.n()).done;) {
              const o = t.value; this.stop(o)
            }
          } catch (r) {
            n.e(r)
          } finally {
            n.f()
          } this._pollingInstanceMap.clear(), this._joinedGroupMap.clear(), this._pollingRequestInfoMap.clear(), this._onlineMemberCountMap.clear()
        } this.sequencesLinkedList.reset(), this.receivedMessageCount = 0, this._reportMessageStackedCount = 0, this._deleteAVChatRoomID(e)
      }
    } }]), n
  }(); const Ss = 'GroupController'; const ks = function(n) {
    c(s, n); const r = v(s); function s(e) {
      let t; return o(this, s), (t = r.call(this, e)).groupMap = new Map, t.groupMemberListMap = new Map, t.groupNoticeHandler = new Es({ tim: e, groupController: f(t) }), t.groupTipsHandler = new Cs({ tim: e, groupController: f(t) }), t.AVChatRoomHandler = new Ds({ tim: e, groupController: f(t) }), t._initListeners(), t
    } return i(s, [{ key: 'createGroup', value: function(e) {
      const n = this; const o = ''.concat(Ss, '.createGroup'); if (!['Public', 'Private', 'ChatRoom', 'AVChatRoom'].includes(e.type)) {
        const r = new Ut({ code: qt.ILLEGAL_GROUP_TYPE, message: fn }); return Cr(r)
      }Be(e.type) && !Me(e.memberList) && e.memberList.length > 0 && (de.warn(''.concat(o, '创建AVChatRoom时不能添加群成员，自动忽略该字段')), e.memberList = void 0), Ke(e.type) || Me(e.joinOption) || (de.warn(''.concat(o, ' 创建Work/Meeting/AVChatRoom群时不能设置字段：joinOption，自动忽略该字段')), e.joinOption = void 0); const i = new qr(ui); return de.log(''.concat(o)), this.request({ name: 'group', action: 'create', param: e }).then((function(r) {
        if (i.setNetworkType(n.getNetworkType()).setText('groupType='.concat(e.type, ' groupID=').concat(r.data.groupID)).setEnd(), de.log(''.concat(o, ' ok. groupID:'), r.data.groupID), e.type === t.GRP_AVCHATROOM) return n.getGroupProfile({ groupID: r.data.groupID }); n.updateGroupMap([u(u({}, e), {}, { groupID: r.data.groupID })]); const s = n.tim.createCustomMessage({ to: r.data.groupID, conversationType: t.CONV_GROUP, payload: { data: 'group_create', extension: ''.concat(n.tim.context.identifier, '创建群组') } }); return n.tim.sendMessage(s), n.emitGroupListUpdate(), n.getGroupProfile({ groupID: r.data.groupID })
      })).then((function(e) {
        const n = e.data.group; return n.selfInfo.messageRemindType = t.MSG_REMIND_ACPT_AND_NOTE, n.selfInfo.role = t.GRP_MBR_ROLE_OWNER, e
      })).catch((function(t) {
        return i.setText('groupType='.concat(e.type)), n.probeNetwork().then((function(e) {
          const n = y(e, 2); const o = n[0]; const r = n[1]; i.setError(t, o, r).setEnd()
        })), de.error(''.concat(o, ' error:'), t), Cr(t)
      }))
    } }, { key: 'joinGroup', value: function(e) {
      const n = this; const o = e.groupID; const r = e.type; const i = ''.concat(Ss, '.joinGroup'); if (r === t.GRP_WORK) {
        const s = new Ut({ code: qt.CANNOT_JOIN_WORK, message: _n }); return Cr(s)
      } if (this.hasLocalGroup(o)) {
        if (!this.isLoggedIn()) return Mr({ status: t.JOIN_STATUS_ALREADY_IN_GROUP }); const a = new qr(ci); return this.getGroupProfile({ groupID: o }).then((function(e) {
          return a.setNetworkType(n.getNetworkType()).setText('groupID='.concat(o, ' joinedStatus=').concat(t.JOIN_STATUS_ALREADY_IN_GROUP)).setEnd(), Mr({ status: t.JOIN_STATUS_ALREADY_IN_GROUP })
        })).catch((function(t) {
          return a.setNetworkType(n.getNetworkType()).setText('groupID='.concat(o, ' unjoined')).setEnd(), de.warn(''.concat(i, ' ').concat(o, ' was unjoined, now join!')), n.groupMap.delete(o), n.applyJoinGroup(e)
        }))
      } return de.log(''.concat(i, ' groupID:'), o), this.isLoggedIn() ? this.applyJoinGroup(e) : this.AVChatRoomHandler.joinWithoutAuth(e)
    } }, { key: 'quitGroup', value: function(e) {
      const t = this; const n = ''.concat(Ss, '.quitGroup'); de.log(''.concat(n, ' groupID:'), e); const o = this.AVChatRoomHandler.checkJoinedAVChatRoomByID(e); if (o && !this.isLoggedIn()) return de.log(''.concat(n, ' anonymously ok. groupID:'), e), this.deleteLocalGroupAndConversation(e), this.AVChatRoomHandler.reset(e), Mr({ groupID: e }); const r = new qr(pi); return this.request({ name: 'group', action: 'quitGroup', param: { groupID: e } }).then((function() {
        return r.setNetworkType(t.getNetworkType()).setText('groupID='.concat(e)).setEnd(), de.log(''.concat(n, ' ok. groupID:'), e), o && t.AVChatRoomHandler.reset(e), t.deleteLocalGroupAndConversation(e), new vr({ groupID: e })
      })).catch((function(o) {
        return r.setText('groupID='.concat(e)), t.probeNetwork().then((function(e) {
          const t = y(e, 2); const n = t[0]; const i = t[1]; r.setError(o, n, i).setEnd()
        })), de.error(''.concat(n, ' error. error:').concat(Re(o), ' groupID:').concat(e)), Cr(o)
      }))
    } }, { key: 'changeGroupOwner', value: function(e) {
      const n = this; const o = ''.concat(Ss, '.changeGroupOwner'); if (this.hasLocalGroup(e.groupID) && this.getLocalGroupProfile(e.groupID).type === t.GRP_AVCHATROOM) return Cr(new Ut({ code: qt.CANNOT_CHANGE_OWNER_IN_AVCHATROOM, message: vn })); if (e.newOwnerID === this.tim.loginInfo.identifier) return Cr(new Ut({ code: qt.CANNOT_CHANGE_OWNER_TO_SELF, message: yn })); const r = new qr(hi); return de.log(''.concat(o, ' groupID:'), e.groupID), this.request({ name: 'group', action: 'changeGroupOwner', param: e }).then((function() {
        r.setNetworkType(n.getNetworkType()).setText('groupID='.concat(e.groupID)).setEnd(), de.log(''.concat(o, ' ok. groupID:'), e.groupID); const t = e.groupID; const i = e.newOwnerID; n.groupMap.get(t).ownerID = i; const s = n.groupMemberListMap.get(t); if (s instanceof Map) {
          const a = s.get(n.tim.loginInfo.identifier); Me(a) || (a.updateRole('Member'), n.groupMap.get(t).selfInfo.role = 'Member'); const u = s.get(i); Me(u) || u.updateRole('Owner')
        } return n.emitGroupListUpdate(!0, !1), new vr({ group: n.groupMap.get(t) })
      })).catch((function(t) {
        return r.setText('groupID='.concat(e.groupID)), n.probeNetwork().then((function(e) {
          const n = y(e, 2); const o = n[0]; const i = n[1]; r.setError(t, o, i).setEnd()
        })), de.error(''.concat(o, ' error:').concat(Re(t), ' groupID:').concat(e.groupID)), Cr(t)
      }))
    } }, { key: 'dismissGroup', value: function(e) {
      const n = this; const o = ''.concat(Ss, '.dismissGroup'); if (this.hasLocalGroup(e) && this.getLocalGroupProfile(e).type === t.GRP_WORK) return Cr(new Ut({ code: qt.CANNOT_DISMISS_WORK, message: In })); const r = new qr(fi); return de.log(''.concat(o, ' groupID:').concat(e)), this.request({ name: 'group', action: 'destroyGroup', param: { groupID: e } }).then((function() {
        return r.setNetworkType(n.getNetworkType()).setText('groupID='.concat(e)).setEnd(), de.log(''.concat(o, ' ok. groupID:').concat(e)), n.deleteLocalGroupAndConversation(e), n.checkJoinedAVChatRoomByID(e) && n.AVChatRoomHandler.reset(e), new vr({ groupID: e })
      })).catch((function(t) {
        return r.setText('groupID='.concat(e)), n.probeNetwork().then((function(e) {
          const n = y(e, 2); const o = n[0]; const i = n[1]; r.setError(t, o, i).setEnd()
        })), de.error(''.concat(o, ' error:').concat(Re(t), ' groupID:').concat(e)), Cr(t)
      }))
    } }, { key: 'updateGroupProfile', value: function(e) {
      const t = this; const n = ''.concat(Ss, '.updateGroupProfile'); !this.hasLocalGroup(e.groupID) || Ke(this.getLocalGroupProfile(e.groupID).type) || Me(e.joinOption) || (de.warn(''.concat(n, ' Work/Meeting/AVChatRoom群不能设置字段：joinOption，自动忽略该字段')), e.joinOption = void 0), Me(e.muteAllMembers) || (e.muteAllMembers ? e.muteAllMembers = 'On' : e.muteAllMembers = 'Off'); const o = new qr(_i); return o.setText(JSON.stringify(e)), de.log(''.concat(n, ' groupID:'), e.groupID), this.request({ name: 'group', action: 'updateGroupProfile', param: e }).then((function() {
        (o.setNetworkType(t.getNetworkType()).setEnd(), de.log(''.concat(n, ' ok. groupID:'), e.groupID), t.hasLocalGroup(e.groupID)) && (t.groupMap.get(e.groupID).updateGroup(e), t._setStorageGroupList()); return new vr({ group: t.groupMap.get(e.groupID) })
      })).catch((function(r) {
        return t.probeNetwork().then((function(e) {
          const t = y(e, 2); const n = t[0]; const i = t[1]; o.setError(r, n, i).setEnd()
        })), de.log(''.concat(n, ' failed. error:').concat(Re(r), ' groupID:').concat(e.groupID)), Cr(r)
      }))
    } }, { key: 'setGroupMemberRole', value: function(e) {
      const n = this; const o = ''.concat(Ss, '.setGroupMemberRole'); const r = e.groupID; const i = e.userID; const s = e.role; const a = this.groupMap.get(r); if (a.selfInfo.role !== t.GRP_MBR_ROLE_OWNER) return Cr(new Ut({ code: qt.NOT_OWNER, message: Dn })); if ([t.GRP_WORK, t.GRP_AVCHATROOM].includes(a.type)) return Cr(new Ut({ code: qt.CANNOT_SET_MEMBER_ROLE_IN_WORK_AND_AVCHATROOM, message: Sn })); if ([t.GRP_MBR_ROLE_ADMIN, t.GRP_MBR_ROLE_MEMBER].indexOf(s) < 0) return Cr(new Ut({ code: qt.INVALID_MEMBER_ROLE, message: kn })); if (i === this.tim.loginInfo.identifier) return Cr(new Ut({ code: qt.CANNOT_SET_SELF_MEMBER_ROLE, message: An })); const u = new qr(Ai); return u.setText('groupID='.concat(r, ' userID=').concat(i, ' role=').concat(s)), de.log(''.concat(o, ' groupID:').concat(r, '. userID: ').concat(i)), this._modifyGroupMemberInfo({ groupID: r, userID: i, role: s }).then((function(e) {
        return u.setNetworkType(n.getNetworkType()).setEnd(), de.log(''.concat(o, ' ok. groupID:').concat(r, '. userID: ').concat(i)), new vr({ group: a, member: e })
      })).catch((function(e) {
        return n.probeNetwork().then((function(t) {
          const n = y(t, 2); const o = n[0]; const r = n[1]; u.setError(e, o, r).setEnd()
        })), de.error(''.concat(o, ' error:').concat(Re(e), ' groupID:').concat(r, ' userID:').concat(i)), Cr(e)
      }))
    } }, { key: 'setGroupMemberMuteTime', value: function(e) {
      const t = this; const n = e.groupID; const o = e.userID; const r = e.muteTime; const i = ''.concat(Ss, '.setGroupMemberMuteTime'); if (o === this.tim.loginInfo.identifier) return Cr(new Ut({ code: qt.CANNOT_MUTE_SELF, message: On })); de.log(''.concat(i, ' groupID:').concat(n, '. userID: ').concat(o)); const s = new qr(Si); return s.setText('groupID='.concat(n, ' userID=').concat(o, ' muteTime=').concat(r)), this._modifyGroupMemberInfo({ groupID: n, userID: o, muteTime: r }).then((function(e) {
        return s.setNetworkType(t.getNetworkType()).setEnd(), de.log(''.concat(i, ' ok. groupID:').concat(n, '. userID: ').concat(o)), new vr({ group: t.getLocalGroupProfile(n), member: e })
      })).catch((function(e) {
        return t.probeNetwork().then((function(t) {
          const n = y(t, 2); const o = n[0]; const r = n[1]; s.setError(e, o, r).setEnd()
        })), de.error(''.concat(i, ' error:').concat(Re(e), ' groupID:').concat(n, ' userID:').concat(o)), Cr(e)
      }))
    } }, { key: 'setMessageRemindType', value: function(e) {
      const t = this; const n = ''.concat(Ss, '.setMessageRemindType'); const o = new qr(mi); o.setText('groupID='.concat(e.groupID, ' userID=').concat(e.userID || this.tim.loginInfo.identifier)), de.log(''.concat(n, ' groupID:').concat(e.groupID, '. userID: ').concat(e.userID || this.tim.loginInfo.identifier)); const r = e.groupID; const i = e.messageRemindType; return this._modifyGroupMemberInfo({ groupID: r, messageRemindType: i, userID: this.tim.loginInfo.identifier }).then((function() {
        o.setNetworkType(t.getNetworkType()).setEnd(), de.log(''.concat(n, ' ok. groupID:').concat(e.groupID, ' userID:').concat(e.userID || t.tim.loginInfo.identifier)); const r = t.getLocalGroupProfile(e.groupID); return r && (r.selfInfo.messageRemindType = i), new vr({ group: r })
      })).catch((function(r) {
        return t.probeNetwork().then((function(e) {
          const t = y(e, 2); const n = t[0]; const i = t[1]; o.setError(r, n, i).setEnd()
        })), de.error(''.concat(n, ' error:').concat(Re(r), ' groupID:').concat(e.groupID, ' userID:').concat(e.userID || t.tim.loginInfo.identifier)), Cr(r)
      }))
    } }, { key: 'setGroupMemberNameCard', value: function(e) {
      const t = this; const n = ''.concat(Ss, '.setGroupMemberNameCard'); const o = e.groupID; const r = e.userID; const i = void 0 === r ? this.tim.loginInfo.identifier : r; const s = e.nameCard; de.log(''.concat(n, ' groupID:').concat(o, '. userID: ').concat(i)); const a = new qr(ki); return a.setText('groupID='.concat(o, ' userID=').concat(i, ' nameCard=').concat(s)), this._modifyGroupMemberInfo({ groupID: o, userID: i, nameCard: s }).then((function(e) {
        de.log(''.concat(n, ' ok. groupID:').concat(o, '. userID: ').concat(i)), a.setNetworkType(t.getNetworkType()).setEnd(); const r = t.getLocalGroupProfile(o); return i === t.tim.loginInfo.identifier && r && r.setSelfNameCard(s), new vr({ group: r, member: e })
      })).catch((function(e) {
        return t.probeNetwork().then((function(t) {
          const n = y(t, 2); const o = n[0]; const r = n[1]; a.setError(e, o, r).setEnd()
        })), de.error(''.concat(n, ' error:').concat(Re(e), ' groupID:').concat(o, ' userID:').concat(i)), Cr(e)
      }))
    } }, { key: 'setGroupMemberCustomField', value: function(e) {
      const t = this; const n = ''.concat(Ss, '.setGroupMemberCustomField'); const o = e.groupID; const r = e.userID; const i = void 0 === r ? this.tim.loginInfo.identifier : r; const s = e.memberCustomField; de.log(''.concat(n, ' groupID:').concat(o, '. userID: ').concat(i)); const a = new qr(Oi); return a.setText('groupID='.concat(o, ' userID=').concat(i, ' memberCustomField=').concat(s)), this._modifyGroupMemberInfo({ groupID: o, userID: i, memberCustomField: s }).then((function(e) {
        return a.setNetworkType(t.getNetworkType()).setEnd(), de.log(''.concat(n, ' ok. groupID:').concat(o, '. userID: ').concat(i)), new vr({ group: t.groupMap.get(o), member: e })
      })).catch((function(e) {
        return t.probeNetwork().then((function(t) {
          const n = y(t, 2); const o = n[0]; const r = n[1]; a.setError(e, o, r).setEnd()
        })), de.error(''.concat(n, ' error:').concat(Re(e), ' groupID:').concat(o, ' userID:').concat(i)), Cr(e)
      }))
    } }, { key: 'getGroupList', value: function(e) {
      const t = this; const n = ''.concat(Ss, '.getGroupList'); const o = new qr(vi); de.log(''.concat(n)); const r = { introduction: 'Introduction', notification: 'Notification', createTime: 'CreateTime', ownerID: 'Owner_Account', lastInfoTime: 'LastInfoTime', memberNum: 'MemberNum', maxMemberNum: 'MaxMemberNum', joinOption: 'ApplyJoinOption', muteAllMembers: 'ShutUpAllMember' }; const i = ['Type', 'Name', 'FaceUrl', 'NextMsgSeq', 'LastMsgTime']; return e && e.groupProfileFilter && e.groupProfileFilter.forEach((function(e) {
        r[e] && i.push(r[e])
      })), this.request({ name: 'group', action: 'list', param: { responseFilter: { groupBaseInfoFilter: i, selfInfoFilter: ['Role', 'JoinTime', 'MsgFlag'] } } }).then((function(e) {
        const r = e.data.groups; return de.log(''.concat(n, ' ok. nums=').concat(r.length)), t._groupListTreeShaking(r), t.updateGroupMap(r), o.setNetworkType(t.getNetworkType()).setText(''.concat(r.length, '-afterTreeshaking-').concat(t.groupMap.size)).setEnd(), t.tempConversationList && (de.log(''.concat(n, ' update last message with tempConversationList, nums=').concat(t.tempConversationList.length)), t._handleUpdateGroupLastMessage({ data: t.tempConversationList }), t.tempConversationList = null), t.emitGroupListUpdate(), new vr({ groupList: t.getLocalGroups() })
      })).catch((function(e) {
        return t.probeNetwork().then((function(t) {
          const n = y(t, 2); const r = n[0]; const i = n[1]; o.setError(e, r, i).setEnd()
        })), de.error(''.concat(n, ' error:'), e), Cr(e)
      }))
    } }, { key: 'getGroupMemberList', value: function(e) {
      const t = this; const n = e.groupID; const o = e.offset; const r = void 0 === o ? 0 : o; const i = e.count; const s = void 0 === i ? 15 : i; const a = ''.concat(Ss, '.getGroupMemberList'); const u = new qr(Ci); de.log(''.concat(a, ' groupID: ').concat(n, ' offset: ').concat(r, ' count: ').concat(s)); let c = []; return this.request({ name: 'group', action: 'getGroupMemberList', param: { groupID: n, offset: r, limit: s > 100 ? 100 : s, memberInfoFilter: ['Role', 'NameCard', 'ShutUpUntil'] } }).then((function(e) {
        const o = e.data; const r = o.members; const i = o.memberNum; return Ie(r) && 0 !== r.length ? (t.hasLocalGroup(n) && (t.getLocalGroupProfile(n).memberNum = i), c = t._updateLocalGroupMemberMap(n, r), t.tim.getUserProfile({ userIDList: r.map((function(e) {
          return e.userID
        })), tagList: [Ct.NICK, Ct.AVATAR] })) : Promise.resolve([])
      })).then((function(e) {
        const o = e.data; if (!Ie(o) || 0 === o.length) return Mr({ memberList: [] }); const i = o.map((function(e) {
          return { userID: e.userID, nick: e.nick, avatar: e.avatar }
        })); return t._updateLocalGroupMemberMap(n, i), u.setNetworkType(t.getNetworkType()).setText('groupID='.concat(n, ' offset=').concat(r, ' count=').concat(s)).setEnd(), de.log(''.concat(a, ' ok.')), new vr({ memberList: c })
      })).catch((function(e) {
        return t.probeNetwork().then((function(t) {
          const n = y(t, 2); const o = n[0]; const r = n[1]; u.setError(e, o, r).setEnd()
        })), de.error(''.concat(a, ' error:'), e), Cr(e)
      }))
    } }, { key: 'getLocalGroups', value: function() {
      return I(this.groupMap.values())
    } }, { key: 'getLocalGroupProfile', value: function(e) {
      return this.groupMap.get(e)
    } }, { key: 'hasLocalGroup', value: function(e) {
      return this.groupMap.has(e)
    } }, { key: 'getLocalGroupMemberInfo', value: function(e, t) {
      return this.groupMemberListMap.has(e) ? this.groupMemberListMap.get(e).get(t) : null
    } }, { key: 'setLocalGroupMember', value: function(e, t) {
      if (this.groupMemberListMap.has(e)) this.groupMemberListMap.get(e).set(t.userID, t); else {
        const n = (new Map).set(t.userID, t); this.groupMemberListMap.set(e, n)
      }
    } }, { key: 'hasLocalGroupMember', value: function(e, t) {
      return this.groupMemberListMap.has(e) && this.groupMemberListMap.get(e).has(t)
    } }, { key: 'hasLocalGroupMemberMap', value: function(e) {
      return this.groupMemberListMap.has(e)
    } }, { key: 'getGroupProfile', value: function(e) {
      const t = this; const n = ''.concat(Ss, '.getGroupProfile'); const o = new qr(yi); de.log(''.concat(n, ' groupID:'), e.groupID); const r = e.groupID; const i = e.groupCustomFieldFilter; const s = { groupIDList: [r], responseFilter: { groupBaseInfoFilter: ['Type', 'Name', 'Introduction', 'Notification', 'FaceUrl', 'Owner_Account', 'CreateTime', 'InfoSeq', 'LastInfoTime', 'LastMsgTime', 'MemberNum', 'MaxMemberNum', 'ApplyJoinOption', 'NextMsgSeq', 'ShutUpAllMember'], groupCustomFieldFilter: i } }; return this.getGroupProfileAdvance(s).then((function(i) {
        let s; const a = i.data; const u = a.successGroupList; const c = a.failureGroupList; return de.log(''.concat(n, ' ok. groupID:').concat(e.groupID)), c.length > 0 ? Cr(c[0]) : (Be(u[0].type) && !t.hasLocalGroup(r) ? s = new cs(u[0]) : (t.updateGroupMap(u), s = t.getLocalGroupProfile(r)), o.setNetworkType(t.getNetworkType()).setText('groupID='.concat(s.groupID, ' type=').concat(s.type, ' muteAllMembers=').concat(s.muteAllMembers, ' ownerID=').concat(s.ownerID)).setEnd(), s && s.selfInfo && !s.selfInfo.nameCard ? t.updateSelfInfo(s).then((function(e) {
          return new vr({ group: e })
        })) : new vr({ group: s }))
      })).catch((function(r) {
        return t.probeNetwork().then((function(t) {
          const n = y(t, 2); const i = n[0]; const s = n[1]; o.setError(r, i, s).setText('groupID='.concat(e.groupID)).setEnd()
        })), de.error(''.concat(n, ' error:').concat(Re(r), ' groupID:').concat(e.groupID)), Cr(r)
      }))
    } }, { key: 'getGroupMemberProfile', value: function(e) {
      const t = this; const n = ''.concat(Ss, '.getGroupMemberProfile'); const o = new qr(Ei); o.setText(e.userIDList.length > 5 ? 'userIDList.length='.concat(e.userIDList.length) : 'userIDList='.concat(e.userIDList)), de.log(''.concat(n, ' groupID:').concat(e.groupID, ' userIDList:').concat(e.userIDList.join(','))), e.userIDList.length > 50 && (e.userIDList = e.userIDList.slice(0, 50)); const r = e.groupID; const i = e.userIDList; return this._getGroupMemberProfileAdvance(u(u({}, e), {}, { userIDList: i })).then((function(e) {
        const n = e.data.members; return Ie(n) && 0 !== n.length ? (t._updateLocalGroupMemberMap(r, n), t.tim.getUserProfile({ userIDList: n.map((function(e) {
          return e.userID
        })), tagList: [Ct.NICK, Ct.AVATAR] })) : Mr([])
      })).then((function(e) {
        const n = e.data.map((function(e) {
          return { userID: e.userID, nick: e.nick, avatar: e.avatar }
        })); t._updateLocalGroupMemberMap(r, n); const s = i.filter((function(e) {
          return t.hasLocalGroupMember(r, e)
        })).map((function(e) {
          return t.getLocalGroupMemberInfo(r, e)
        })); return o.setNetworkType(t.getNetworkType()).setEnd(), new vr({ memberList: s })
      }))
    } }, { key: '_getGroupMemberProfileAdvance', value: function(e) {
      return this.request({ name: 'group', action: 'getGroupMemberProfile', param: u(u({}, e), {}, { memberInfoFilter: e.memberInfoFilter ? e.memberInfoFilter : ['Role', 'JoinTime', 'NameCard', 'ShutUpUntil'] }) })
    } }, { key: 'updateSelfInfo', value: function(e) {
      const t = ''.concat(Ss, '.updateSelfInfo'); const n = e.groupID; de.log(''.concat(t, ' groupID:'), n); const o = { groupID: n, userIDList: [this.tim.loginInfo.identifier] }; return this.getGroupMemberProfile(o).then((function(o) {
        const r = o.data.memberList; return de.log(''.concat(t, ' ok. groupID:'), n), e && 0 !== r.length && e.updateSelfInfo(r[0]), e
      }))
    } }, { key: 'addGroupMember', value: function(e) {
      const t = this; const n = ''.concat(Ss, '.addGroupMember'); const o = new qr(Ti); o.setText('groupID='.concat(e.groupID)); const r = this.getLocalGroupProfile(e.groupID); if (Be(r.type)) {
        const i = new Ut({ code: qt.CANNOT_ADD_MEMBER_IN_AVCHATROOM, message: Cn }); return o.setCode(qt.CANNOT_ADD_MEMBER_IN_AVCHATROOM).setMessage(Cn).setNetworkType(this.getNetworkType()).setText('groupID='.concat(e.groupID, ' groupType=').concat(r.type)).setEnd(), Cr(i)
      } return e.userIDList = e.userIDList.map((function(e) {
        return { userID: e }
      })), de.log(''.concat(n, ' groupID:'), e.groupID), this.request({ name: 'group', action: 'addGroupMember', param: e }).then((function(i) {
        const s = i.data.members; o.setNetworkType(t.getNetworkType()).setText('groupID='.concat(e.groupID)).setEnd(), de.log(''.concat(n, ' ok. groupID:'), e.groupID); const a = s.filter((function(e) {
          return 1 === e.result
        })).map((function(e) {
          return e.userID
        })); const u = s.filter((function(e) {
          return 0 === e.result
        })).map((function(e) {
          return e.userID
        })); const c = s.filter((function(e) {
          return 2 === e.result
        })).map((function(e) {
          return e.userID
        })); return 0 === a.length ? new vr({ successUserIDList: a, failureUserIDList: u, existedUserIDList: c }) : (r.memberNum += a.length, new vr({ successUserIDList: a, failureUserIDList: u, existedUserIDList: c, group: r }))
      })).catch((function(r) {
        return t.probeNetwork().then((function(t) {
          const n = y(t, 2); const i = n[0]; const s = n[1]; o.setError(r, i, s).setText('groupID='.concat(e.groupID)).setEnd()
        })), de.error(''.concat(n, ' error:').concat(Re(r), ' groupID:').concat(e.groupID)), Cr(r)
      }))
    } }, { key: 'deleteGroupMember', value: function(e) {
      const n = this; const o = ''.concat(Ss, '.deleteGroupMember'); const r = new qr(Di); r.setText(e.userIDList.length > 5 ? 'userIDList.length='.concat(e.userIDList.length) : 'userIDList='.concat(e.userIDList)), de.log(''.concat(o, ' groupID:').concat(e.groupID, ' userIDList:').concat(e.userIDList)); const i = this.getLocalGroupProfile(e.groupID); return i.type === t.GRP_AVCHATROOM ? Cr(new Ut({ code: qt.CANNOT_KICK_MEMBER_IN_AVCHATROOM, message: Tn })) : this.request({ name: 'group', action: 'deleteGroupMember', param: e }).then((function() {
        return r.setNetworkType(n.getNetworkType()).setEnd(), de.log(''.concat(o, ' ok')), i.memberNum--, n.deleteLocalGroupMembers(e.groupID, e.userIDList), new vr({ group: i, userIDList: e.userIDList })
      })).catch((function(t) {
        return n.probeNetwork().then((function(n) {
          const o = y(n, 2); const i = o[0]; const s = o[1]; r.setError(t, i, s).setText('groupID='.concat(e.groupID)).setEnd()
        })), de.error(''.concat(o, ' error:').concat(Re(t), ' groupID:').concat(e.groupID)), Cr(t)
      }))
    } }, { key: 'searchGroupByID', value: function(e) {
      const t = this; const n = ''.concat(Ss, '.searchGroupByID'); const o = { groupIDList: [e] }; const r = new qr(gi); return r.setText('groupID='.concat(e)), de.log(''.concat(n, ' groupID:').concat(e)), this.request({ name: 'group', action: 'searchGroupByID', param: o }).then((function(o) {
        const i = o.data.groupProfile; if (i[0].errorCode !== nt.SUCCESS) throw new Ut({ code: i[0].errorCode, message: i[0].errorInfo }); return r.setNetworkType(t.getNetworkType()).setEnd(), de.log(''.concat(n, ' ok. groupID:').concat(e)), new vr({ group: new cs(i[0]) })
      })).catch((function(o) {
        return t.probeNetwork().then((function(e) {
          const t = y(e, 2); const n = t[0]; const i = t[1]; r.setError(o, n, i).setEnd()
        })), de.warn(''.concat(n, ' error:').concat(Re(o), ' groupID:').concat(e)), Cr(o)
      }))
    } }, { key: 'applyJoinGroup', value: function(e) {
      const t = this; const n = ''.concat(Ss, '.applyJoinGroup'); const o = new qr(ci); return this.request({ name: 'group', action: 'applyJoinGroup', param: e }).then((function(r) {
        const i = r.data; const s = i.joinedStatus; const a = i.longPollingKey; switch (o.setNetworkType(t.getNetworkType()).setText('groupID='.concat(e.groupID, ' joinedStatus=').concat(s)).setEnd(), de.log(''.concat(n, ' ok. groupID:').concat(e.groupID, ' joinedStatus:').concat(s, ' longPollingKey:').concat(a)), s) {
          case et.WAIT_APPROVAL: return new vr({ status: et.WAIT_APPROVAL }); case et.SUCCESS: return t.getGroupProfile({ groupID: e.groupID }).then((function(n) {
            const o = n.data.group; const r = { status: et.SUCCESS, group: o }; return Me(a) ? (t.emitGroupListUpdate(!0, !1), new vr(r)) : (t.emitInnerEvent(ir, e.groupID), t.AVChatRoomHandler.startRunLoop({ longPollingKey: a, group: o }))
          })); default: var u = new Ut({ code: qt.JOIN_GROUP_FAIL, message: Mn }); return de.error(''.concat(n, ' error:').concat(Re(u), ' groupID:').concat(e.groupID)), Cr(u)
        }
      })).catch((function(r) {
        return o.setText('groupID='.concat(e.groupID)), t.probeNetwork().then((function(e) {
          const t = y(e, 2); const n = t[0]; const i = t[1]; o.setError(r, n, i).setEnd()
        })), de.error(''.concat(n, ' error:').concat(Re(r), ' groupID:').concat(e.groupID)), Cr(r)
      }))
    } }, { key: 'applyJoinAVChatRoom', value: function(e) {
      return this.AVChatRoomHandler.applyJoinAVChatRoom(e)
    } }, { key: 'handleGroupApplication', value: function(e) {
      const t = this; const n = ''.concat(Ss, '.handleGroupApplication'); const o = e.message.payload; const r = o.groupProfile.groupID; const i = o.authentication; const s = o.messageKey; const a = o.operatorID; const c = new qr(di); return c.setText('groupID='.concat(r)), de.log(''.concat(n, ' groupID:'), r), this.request({ name: 'group', action: 'handleApplyJoinGroup', param: u(u({}, e), {}, { applicant: a, groupID: r, authentication: i, messageKey: s }) }).then((function() {
        return c.setNetworkType(t.getNetworkType()).setEnd(), de.log(''.concat(n, ' ok. groupID:'), r), t.deleteGroupSystemNotice({ messageList: [e.message] }), new vr({ group: t.getLocalGroupProfile(r) })
      })).catch((function(e) {
        return t.probeNetwork().then((function(t) {
          const n = y(t, 2); const o = n[0]; const r = n[1]; c.setError(e, o, r).setEnd()
        })), de.error(''.concat(n, ' error. error:').concat(Re(e), ' groupID:').concat(r)), Cr(e)
      }))
    } }, { key: 'deleteGroupSystemNotice', value: function(e) {
      const n = this; const o = ''.concat(Ss, '.deleteGroupSystemNotice'); return Ie(e.messageList) && 0 !== e.messageList.length ? (de.log(''.concat(o) + e.messageList.map((function(e) {
        return e.ID
      }))), this.request({ name: 'group', action: 'deleteGroupSystemNotice', param: { messageListToDelete: e.messageList.map((function(e) {
        return { from: t.CONV_SYSTEM, messageSeq: e.clientSequence, messageRandom: e.random }
      })) } }).then((function() {
        return de.log(''.concat(o, ' ok')), e.messageList.forEach((function(e) {
          n.tim.messageController.deleteLocalMessage(e)
        })), new vr
      })).catch((function(e) {
        return de.error(''.concat(o, ' error:'), e), Cr(e)
      }))) : Mr()
    } }, { key: 'getGroupProfileAdvance', value: function(e) {
      const t = ''.concat(Ss, '.getGroupProfileAdvance'); return Ie(e.groupIDList) && e.groupIDList.length > 50 && (de.warn(''.concat(t, ' 获取群资料的数量不能超过50个')), e.groupIDList.length = 50), de.log(''.concat(t, ' groupIDList:'), e.groupIDList), this.request({ name: 'group', action: 'query', param: e }).then((function(e) {
        de.log(''.concat(t, ' ok.')); const n = e.data.groups; const o = n.filter((function(e) {
          return Me(e.errorCode) || e.errorCode === nt.SUCCESS
        })); const r = n.filter((function(e) {
          return e.errorCode && e.errorCode !== nt.SUCCESS
        })).map((function(e) {
          return new Ut({ code: e.errorCode, message: e.errorInfo, data: { groupID: e.groupID } })
        })); return new vr({ successGroupList: o, failureGroupList: r })
      })).catch((function(n) {
        return de.error(''.concat(t, ' error:').concat(Re(n), ' groupIDList:').concat(e.groupIDList)), Cr(n)
      }))
    } }, { key: '_deleteLocalGroup', value: function(e) {
      return this.groupMap.delete(e), this.groupMemberListMap.delete(e), this._setStorageGroupList(), this.groupMap.has(e) && this.groupMemberListMap.has(e)
    } }, { key: '_initGroupList', value: function() {
      const e = this; const t = ''.concat(Ss, '._initGroupList'); const n = new qr(Ii); de.time(br), de.log(''.concat(t)); const o = this._getStorageGroupList(); Ie(o) && o.length > 0 ? (o.forEach((function(t) {
        e.groupMap.set(t.groupID, new cs(t))
      })), this.emitGroupListUpdate(!0, !1), n.setNetworkType(this.getNetworkType()).setText(this.groupMap.size).setEnd()) : n.setNetworkType(this.getNetworkType()).setText(0).setEnd(), this.triggerReady(), de.log(''.concat(t, ' ok. initCost=').concat(de.timeEnd(br), 'ms')), this.getGroupList()
    } }, { key: '_initListeners', value: function() {
      const e = this.tim.innerEmitter; e.once(Mo, this._initGroupList, this), e.on(tr, this._handleUpdateGroupLastMessage, this), e.on(Oo, this._handleReceivedGroupMessage, this), e.on(rr, this._handleProfileUpdated, this)
    } }, { key: 'emitGroupListUpdate', value: function() {
      const t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0]; const n = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]; const o = this.getLocalGroups(); const r = JSON.parse(JSON.stringify(o)); n && this.emitInnerEvent(Wo, r), t && this.emitOuterEvent(e.GROUP_LIST_UPDATED, o)
    } }, { key: '_handleReceivedGroupMessage', value: function(e) {
      const n = this; const o = e.data.eventDataList; Array.isArray(o) && o.forEach((function(e) {
        const o = e.conversationID.replace(t.CONV_GROUP, ''); n.groupMap.has(o) && (n.groupMap.get(o).nextMessageSeq = e.lastMessage.sequence + 1)
      }))
    } }, { key: '_onReceivedGroupSystemNotice', value: function(e) {
      const t = e.data; this.groupNoticeHandler._onReceivedGroupNotice(t)
    } }, { key: '_handleUpdateGroupLastMessage', value: function(e) {
      const n = ''.concat(Ss, '._handleUpdateGroupLastMessage'); const o = e.data; if (de.log(''.concat(n, ' convNums=').concat(o.length, ' groupNums=').concat(this.groupMap.size)), 0 !== this.groupMap.size) {
        for (var r, i, s, a = !1, u = 0, c = o.length; u < c; u++)(r = o[u]).conversationID && r.type !== t.CONV_GROUP && (i = r.conversationID.split(/^GROUP/)[1], (s = this.getLocalGroupProfile(i)) && (s.lastMessage = r.lastMessage, a = !0)); a && (this.groupMap = this._sortLocalGroupList(this.groupMap), this.emitGroupListUpdate(!0, !1))
      } else this.tempConversationList = o
    } }, { key: '_sortLocalGroupList', value: function(e) {
      const t = I(e).filter((function(e) {
        const t = y(e, 2); t[0]; return !Xe(t[1].lastMessage)
      })); return t.sort((function(e, t) {
        return t[1].lastMessage.lastTime - e[1].lastMessage.lastTime
      })), new Map([].concat(I(t), I(e)))
    } }, { key: '_getStorageGroupList', value: function() {
      return this.tim.storage.getItem('groupMap')
    } }, { key: '_setStorageGroupList', value: function() {
      const e = this.getLocalGroups().filter((function(e) {
        const t = e.type; return !Be(t)
      })).slice(0, 20).map((function(e) {
        return { groupID: e.groupID, name: e.name, avatar: e.avatar, type: e.type }
      })); this.tim.storage.setItem('groupMap', e)
    } }, { key: 'updateGroupMap', value: function(e) {
      const t = this; e.forEach((function(e) {
        t.groupMap.has(e.groupID) ? t.groupMap.get(e.groupID).updateGroup(e) : t.groupMap.set(e.groupID, new cs(e))
      })), this._setStorageGroupList()
    } }, { key: '_updateLocalGroupMemberMap', value: function(e, t) {
      const n = this; return Ie(t) && 0 !== t.length ? t.map((function(t) {
        return n.hasLocalGroupMember(e, t.userID) ? n.getLocalGroupMemberInfo(e, t.userID).updateMember(t) : n.setLocalGroupMember(e, new Ms(t)), n.getLocalGroupMemberInfo(e, t.userID)
      })) : []
    } }, { key: 'deleteLocalGroupMembers', value: function(e, t) {
      const n = this.groupMemberListMap.get(e); n && t.forEach((function(e) {
        n.delete(e)
      }))
    } }, { key: '_modifyGroupMemberInfo', value: function(e) {
      const t = this; const n = e.groupID; const o = e.userID; return this.request({ name: 'group', action: 'modifyGroupMemberInfo', param: e }).then((function() {
        if (t.hasLocalGroupMember(n, o)) {
          const r = t.getLocalGroupMemberInfo(n, o); return Me(e.muteTime) || r.updateMuteUntil(e.muteTime), Me(e.role) || r.updateRole(e.role), Me(e.nameCard) || r.updateNameCard(e.nameCard), Me(e.memberCustomField) || r.updateMemberCustomField(e.memberCustomField), r
        } return t.getGroupMemberProfile({ groupID: n, userIDList: [o] }).then((function(e) {
          return y(e.data.memberList, 1)[0]
        }))
      }))
    } }, { key: '_groupListTreeShaking', value: function(e) {
      for (var t = new Map(I(this.groupMap)), n = 0, o = e.length; n < o; n++)t.delete(e[n].groupID); this.AVChatRoomHandler.hasJoinedAVChatRoom() && this.AVChatRoomHandler.getJoinedAVChatRoom().forEach((function(e) {
        t.delete(e)
      })); for (let r = I(t.keys()), i = 0, s = r.length; i < s; i++) this.groupMap.delete(r[i])
    } }, { key: '_handleProfileUpdated', value: function(e) {
      for (var t = this, n = e.data, o = function(e) {
          const o = n[e]; t.groupMemberListMap.forEach((function(e) {
            e.has(o.userID) && e.get(o.userID).updateMember({ nick: o.nick, avatar: o.avatar })
          }))
        }, r = 0; r < n.length; r++)o(r)
    } }, { key: 'getJoinedAVChatRoom', value: function() {
      return this.AVChatRoomHandler.getJoinedAVChatRoom()
    } }, { key: 'deleteLocalGroupAndConversation', value: function(e) {
      this._deleteLocalGroup(e), this.tim.conversationController.deleteLocalConversation('GROUP'.concat(e)), this.emitGroupListUpdate(!0, !1)
    } }, { key: 'checkJoinedAVChatRoomByID', value: function(e) {
      return this.AVChatRoomHandler.checkJoinedAVChatRoomByID(e)
    } }, { key: 'getGroupLastSequence', value: function(e) {
      const t = this; const n = ''.concat(Ss, '.getGroupLastSequence'); const o = new qr(Mi); let r = 0; if (this.hasLocalGroup(e)) {
        const i = this.getLocalGroupProfile(e); if (i.lastMessage.lastSequence > 0) return r = i.lastMessage.lastSequence, de.log(''.concat(n, ' got lastSequence=').concat(r, ' from local group profile[lastMessage.lastSequence]. groupID=').concat(e)), o.setNetworkType(this.getNetworkType()).setText('got lastSequence='.concat(r, ' from local group profile[lastMessage.lastSequence]. groupID=').concat(e)).setEnd(), Promise.resolve(r); if (i.nextMessageSeq > 1) return r = i.nextMessageSeq - 1, de.log(''.concat(n, ' got lastSequence=').concat(r, ' from local group profile[nextMessageSeq]. groupID=').concat(e)), o.setNetworkType(this.getNetworkType()).setText('got lastSequence='.concat(r, ' from local group profile[nextMessageSeq]. groupID=').concat(e)).setEnd(), Promise.resolve(r)
      } const s = 'GROUP'.concat(e); const a = this.tim.conversationController.getLocalConversation(s); if (a && a.lastMessage.lastSequence) return r = a.lastMessage.lastSequence, de.log(''.concat(n, ' got lastSequence=').concat(r, ' from local conversation profile[lastMessage.lastSequence]. groupID=').concat(e)), o.setNetworkType(this.getNetworkType()).setText('got lastSequence='.concat(r, ' from local conversation profile[lastMessage.lastSequence]. groupID=').concat(e)).setEnd(), Promise.resolve(r); const u = { groupIDList: [e], responseFilter: { groupBaseInfoFilter: ['NextMsgSeq'] } }; return this.getGroupProfileAdvance(u).then((function(i) {
        const s = i.data.successGroupList; return Xe(s) ? de.log(''.concat(n, ' successGroupList is empty. groupID=').concat(e)) : (r = s[0].nextMessageSeq - 1, de.log(''.concat(n, ' got lastSequence=').concat(r, ' from getGroupProfileAdvance. groupID=').concat(e))), o.setNetworkType(t.getNetworkType()).setText('got lastSequence='.concat(r, ' from getGroupProfileAdvance. groupID=').concat(e)).setEnd(), r
      })).catch((function(r) {
        return t.probeNetwork().then((function(t) {
          const n = y(t, 2); const i = n[0]; const s = n[1]; o.setError(r, i, s).setText('get lastSequence failed from getGroupProfileAdvance. groupID='.concat(e)).setEnd()
        })), de.warn(''.concat(n, ' failed. ').concat(r)), Cr(r)
      }))
    } }, { key: 'getGroupOnlineMemberCount', value: function(e) {
      return this.AVChatRoomHandler.checkJoinedAVChatRoomByID(e) ? this.AVChatRoomHandler.getGroupOnlineMemberCount(e) : Mr({ memberCount: 0 })
    } }, { key: 'reset', value: function() {
      this.groupMap.clear(), this.groupMemberListMap.clear(), this.resetReady(), this.groupNoticeHandler.reset(), this.AVChatRoomHandler.reset(), this.tim.innerEmitter.once(Mo, this._initGroupList, this)
    } }]), s
  }(mr); const As = function(n) {
    c(s, n); const r = v(s); function s(e) {
      let n; o(this, s), (n = r.call(this, e)).REALTIME_MESSAGE_TIMEOUT = 3e5, n.LONGPOLLING_ID_TIMEOUT = 3e5, n._currentState = t.NET_STATE_CONNECTED, n._status = { OPENIM: { lastResponseReceivedTime: 0, jitterCount: 0, failedCount: 0 }, AVCHATROOM: { lastResponseReceivedTime: 0, jitterCount: 0, failedCount: 0 } }; const i = n.tim.innerEmitter; return i.on(Lo, n._onGetLongPollIDFailed, f(n)), i.on(Po, n._onOpenIMResponseOK, f(n)), i.on(wo, n._onOpenIMRequestFailed, f(n)), i.on(zo, n._onAVChatroomResponseOK, f(n)), i.on(Yo, n._onAVChatroomRequestFailed, f(n)), n
    } return i(s, [{ key: '_onGetLongPollIDFailed', value: function() {
      this._currentState !== t.NET_STATE_DISCONNECTED && this._emitNetStateChangeEvent(t.NET_STATE_DISCONNECTED)
    } }, { key: '_onOpenIMResponseOK', value: function() {
      this._onResponseOK('OPENIM')
    } }, { key: '_onOpenIMRequestFailed', value: function() {
      this._onRequestFailed('OPENIM')
    } }, { key: '_onAVChatroomResponseOK', value: function() {
      this.isLoggedIn() || this._onResponseOK('AVCHATROOM')
    } }, { key: '_onAVChatroomRequestFailed', value: function() {
      this.isLoggedIn() || this._onRequestFailed('AVCHATROOM')
    } }, { key: '_onResponseOK', value: function(e) {
      const n = this._status[e]; const o = Date.now(); if (0 !== n.lastResponseReceivedTime) {
        const r = o - n.lastResponseReceivedTime; de.debug('StatusController._onResponseOK key='.concat(e, ' currentState=').concat(this._currentState, ' interval=').concat(r, ' failedCount=').concat(n.failedCount, ' jitterCount=').concat(n.jitterCount)), n.failedCount > 0 && (n.failedCount = 0, n.jitterCount += 1, this._currentState !== t.NET_STATE_CONNECTED && this._emitNetStateChangeEvent(t.NET_STATE_CONNECTED)); r <= this.LONGPOLLING_ID_TIMEOUT ? n.jitterCount >= 3 && (new qr(wi).setText(''.concat(e, '-').concat(r, '-').concat(n.jitterCount)).setNetworkType(this.getNetworkType()).setEnd(), n.jitterCount = 0) : (new qr(Pi).setText(''.concat(e, '-').concat(r)).setNetworkType(this.getNetworkType()).setEnd(), de.warn('StatusController._onResponseOK, sdk reload. key='.concat(e, ' interval=').concat(r, 'ms. https://imsdk-1252463788.file.myqcloud.com/IM_DOC/Web/module-EVENT.html#.SDK_RELOAD')), this.emitInnerEvent(ur)), n.lastResponseReceivedTime = o
      } else n.lastResponseReceivedTime = o
    } }, { key: '_onRequestFailed', value: function(e) {
      const n = this; const o = this._status[e]; Date.now() - o.lastResponseReceivedTime >= this.LONGPOLLING_ID_TIMEOUT ? this._currentState !== t.NET_STATE_DISCONNECTED && (de.warn('StatusController._onRequestFailed, disconnected, longpolling unavailable more than 5min. key='.concat(e, ' networkType=').concat(this.getNetworkType())), this._emitNetStateChangeEvent(t.NET_STATE_DISCONNECTED)) : (o.failedCount += 1, o.failedCount > 5 ? this.probeNetwork().then((function(r) {
        const i = y(r, 2); const s = i[0]; const a = i[1]; s ? (n._currentState !== t.NET_STATE_CONNECTING && n._emitNetStateChangeEvent(t.NET_STATE_CONNECTING), de.warn('StatusController._onRequestFailed, connecting, network jitter. key='.concat(e, ' networkType=').concat(a))) : (n._currentState !== t.NET_STATE_DISCONNECTED && n._emitNetStateChangeEvent(t.NET_STATE_DISCONNECTED), de.warn('StatusController._onRequestFailed, disconnected, longpolling unavailable. key='.concat(e, ' networkType=').concat(a))), o.failedCount = 0, o.jitterCount = 0
      })) : this._currentState === t.NET_STATE_CONNECTED && this._emitNetStateChangeEvent(t.NET_STATE_CONNECTING))
    } }, { key: '_emitNetStateChangeEvent', value: function(t) {
      de.log('StatusController._emitNetStateChangeEvent net state changed from '.concat(this._currentState, ' to ').concat(t)), this._currentState = t, this.emitOuterEvent(e.NET_STATE_CHANGE, { state: t })
    } }, { key: 'reset', value: function() {
      de.log('StatusController.reset'), this._currentState = t.NET_STATE_CONNECTED, this._status = { OPENIM: { lastResponseReceivedTime: 0, jitterCount: 0, failedCount: 0 }, AVCHATROOM: { lastResponseReceivedTime: 0, jitterCount: 0, failedCount: 0 } }
    } }]), s
  }(mr); function Os() {
    return null
  } const Rs = function() {
    function e(t) {
      o(this, e), this.tim = t, this.storageQueue = new Map, this.checkTimes = 0, this.checkTimer = setInterval(this._onCheckTimer.bind(this), 1e3), this._errorTolerantHandle()
    } return i(e, [{ key: '_errorTolerantHandle', value: function() {
      !V && Me(window.localStorage) && (this.getItem = Os, this.setItem = Os, this.removeItem = Os, this.clear = Os)
    } }, { key: '_onCheckTimer', value: function() {
      if (this.checkTimes++, this.checkTimes % 20 == 0) {
        if (0 === this.storageQueue.size) return; this._doFlush()
      }
    } }, { key: '_doFlush', value: function() {
      try {
        let e; const t = S(this.storageQueue); try {
          for (t.s(); !(e = t.n()).done;) {
            const n = y(e.value, 2); const o = n[0]; const r = n[1]; this._setStorageSync(this._getKey(o), r)
          }
        } catch (i) {
          t.e(i)
        } finally {
          t.f()
        } this.storageQueue.clear()
      } catch (s) {
        de.warn('Storage._doFlush error', s)
      }
    } }, { key: '_getPrefix', value: function() {
      const e = this.tim.loginInfo; const t = e.SDKAppID; const n = e.identifier; return 'TIM_'.concat(t, '_').concat(n, '_')
    } }, { key: 'getItem', value: function(e) {
      const t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]; try {
        const n = t ? this._getKey(e) : e; return this._getStorageSync(n)
      } catch (o) {
        return de.warn('Storage.getItem error:', o), {}
      }
    } }, { key: 'setItem', value: function(e, t) {
      const n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2]; const o = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3]; if (n) {
        const r = o ? this._getKey(e) : e; this._setStorageSync(r, t)
      } else this.storageQueue.set(e, t)
    } }, { key: 'clear', value: function() {
      try {
        V ? K.clearStorageSync() : localStorage.clear()
      } catch (e) {
        de.warn('Storage.clear error:', e)
      }
    } }, { key: 'removeItem', value: function(e) {
      const t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]; try {
        const n = t ? this._getKey(e) : e; this._removeStorageSync(n)
      } catch (o) {
        de.warn('Storage.removeItem error:', o)
      }
    } }, { key: 'getSize', value: function(e) {
      const t = this; const n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'b'; try {
        const o = { size: 0, limitSize: 5242880, unit: n }; if (Object.defineProperty(o, 'leftSize', { enumerable: !0, get: function() {
          return o.limitSize - o.size
        } }), V && (o.limitSize = 1024 * K.getStorageInfoSync().limitSize), e)o.size = JSON.stringify(this.getItem(e)).length + this._getKey(e).length; else if (V) {
          const r = K.getStorageInfoSync(); const i = r.keys; i.forEach((function(e) {
            o.size += JSON.stringify(t._getStorageSync(e)).length + t._getKey(e).length
          }))
        } else for (const s in localStorage)localStorage.hasOwnProperty(s) && (o.size += localStorage.getItem(s).length + s.length); return this._convertUnit(o)
      } catch (a) {
        de.warn('Storage.getSize error:', a)
      }
    } }, { key: '_convertUnit', value: function(e) {
      const t = {}; const n = e.unit; for (const o in t.unit = n, e)'number' === typeof e[o] && ('kb' === n.toLowerCase() ? t[o] = Math.round(e[o] / 1024) : 'mb' === n.toLowerCase() ? t[o] = Math.round(e[o] / 1024 / 1024) : t[o] = e[o]); return t
    } }, { key: '_getKey', value: function(e) {
      return ''.concat(this._getPrefix()).concat(e)
    } }, { key: '_setStorageSync', value: function(e, t) {
      V ? x ? my.setStorageSync({ key: e, data: t }) : K.setStorageSync(e, t) : localStorage.setItem(e, JSON.stringify(t))
    } }, { key: '_getStorageSync', value: function(e) {
      return V ? x ? my.getStorageSync({ key: e }).data : K.getStorageSync(e) : JSON.parse(localStorage.getItem(e))
    } }, { key: '_removeStorageSync', value: function(e) {
      V ? x ? my.removeStorageSync({ key: e }) : K.removeStorageSync(e) : localStorage.removeItem(e)
    } }, { key: 'reset', value: function() {
      this._doFlush(), this.checkTimes = 0
    } }]), e
  }(); const Ns = O((function(e) {
    const t = Object.prototype.hasOwnProperty; let n = '~'; function o() {} function r(e, t, n) {
      this.fn = e, this.context = t, this.once = n || !1
    } function i(e, t, o, i, s) {
      if ('function' !== typeof o) throw new TypeError('The listener must be a function'); const a = new r(o, i || e, s); const u = n ? n + t : t; return e._events[u] ? e._events[u].fn ? e._events[u] = [e._events[u], a] : e._events[u].push(a) : (e._events[u] = a, e._eventsCount++), e
    } function s(e, t) {
      0 == --e._eventsCount ? e._events = new o : delete e._events[t]
    } function a() {
      this._events = new o, this._eventsCount = 0
    }Object.create && (o.prototype = Object.create(null), (new o).__proto__ || (n = !1)), a.prototype.eventNames = function() {
      let e; let o; const r = []; if (0 === this._eventsCount) return r; for (o in e = this._events)t.call(e, o) && r.push(n ? o.slice(1) : o); return Object.getOwnPropertySymbols ? r.concat(Object.getOwnPropertySymbols(e)) : r
    }, a.prototype.listeners = function(e) {
      const t = n ? n + e : e; const o = this._events[t]; if (!o) return []; if (o.fn) return [o.fn]; for (var r = 0, i = o.length, s = new Array(i); r < i; r++)s[r] = o[r].fn; return s
    }, a.prototype.listenerCount = function(e) {
      const t = n ? n + e : e; const o = this._events[t]; return o ? o.fn ? 1 : o.length : 0
    }, a.prototype.emit = function(e, t, o, r, i, s) {
      const a = n ? n + e : e; if (!this._events[a]) return !1; let u; let c; const l = this._events[a]; const p = arguments.length; if (l.fn) {
        switch (l.once && this.removeListener(e, l.fn, void 0, !0), p) {
          case 1: return l.fn.call(l.context), !0; case 2: return l.fn.call(l.context, t), !0; case 3: return l.fn.call(l.context, t, o), !0; case 4: return l.fn.call(l.context, t, o, r), !0; case 5: return l.fn.call(l.context, t, o, r, i), !0; case 6: return l.fn.call(l.context, t, o, r, i, s), !0
        } for (c = 1, u = new Array(p - 1); c < p; c++)u[c - 1] = arguments[c]; l.fn.apply(l.context, u)
      } else {
        let g; const h = l.length; for (c = 0; c < h; c++) {
          switch (l[c].once && this.removeListener(e, l[c].fn, void 0, !0), p) {
            case 1: l[c].fn.call(l[c].context); break; case 2: l[c].fn.call(l[c].context, t); break; case 3: l[c].fn.call(l[c].context, t, o); break; case 4: l[c].fn.call(l[c].context, t, o, r); break; default: if (!u) for (g = 1, u = new Array(p - 1); g < p; g++)u[g - 1] = arguments[g]; l[c].fn.apply(l[c].context, u)
          }
        }
      } return !0
    }, a.prototype.on = function(e, t, n) {
      return i(this, e, t, n, !1)
    }, a.prototype.once = function(e, t, n) {
      return i(this, e, t, n, !0)
    }, a.prototype.removeListener = function(e, t, o, r) {
      const i = n ? n + e : e; if (!this._events[i]) return this; if (!t) return s(this, i), this; const a = this._events[i]; if (a.fn)a.fn !== t || r && !a.once || o && a.context !== o || s(this, i); else {
        for (var u = 0, c = [], l = a.length; u < l; u++)(a[u].fn !== t || r && !a[u].once || o && a[u].context !== o) && c.push(a[u]); c.length ? this._events[i] = 1 === c.length ? c[0] : c : s(this, i)
      } return this
    }, a.prototype.removeAllListeners = function(e) {
      let t; return e ? (t = n ? n + e : e, this._events[t] && s(this, t)) : (this._events = new o, this._eventsCount = 0), this
    }, a.prototype.off = a.prototype.removeListener, a.prototype.addListener = a.prototype.on, a.prefixed = n, a.EventEmitter = a, e.exports = a
  })); function Ls(e) {
    const t = e.context || null; return { platform: co, websdkappid: uo, v: ao, a2: t && t.a2Key || void 0, tinyid: t && t.tinyID || void 0, sdkappid: t && t.SDKAppID || 0, contentType: t && t.contentType || 0, apn: t && t.apn || 1, accounttype: t && t.accountType || 0 }
  } const ws = function() {
    function e(t) {
      o(this, e), this.tim = t, this.tim.innerEmitter.on(yo, this._update, this), this.tim.innerEmitter.on(Io, this._update, this), this.tim.innerEmitter.on(Co, this._updateSpecifiedConfig, this), this._initConfig()
    } return i(e, [{ key: '_update', value: function(e) {
      this._initConfig()
    } }, { key: '_updateSpecifiedConfig', value: function(e) {
      const t = this; e.data.forEach((function(e) {
        t._set(e)
      }))
    } }, { key: 'get', value: function(e) {
      const t = e.name; const o = e.action; const r = e.param; const i = e.tjgID; if (Me(this.config[t]) || Me(this.config[t][o])) throw new Ut({ code: qt.NETWORK_PACKAGE_UNDEFINED, message: ''.concat(qn, ': PackageConfig.').concat(t) }); const s = function e(t) {
        if (0 === Object.getOwnPropertyNames(t).length) return Object.create(null); const o = Array.isArray(t) ? [] : Object.create(null); let r = ''; for (const i in t)null !== t[i] ? void 0 !== t[i] ? (r = n(t[i]), ['string', 'number', 'function', 'boolean'].indexOf(r) >= 0 ? o[i] = t[i] : o[i] = e(t[i])) : o[i] = void 0 : o[i] = null; return o
      }(this.config[t][o]); return s.requestData = this._initRequestData(r, s), s.encode = this._initEncoder(s), s.decode = this._initDecoder(s), i && (s.queryString.tjg_id = i), s
    } }, { key: '_set', value: function(e) {
      const t = e.key; const o = e.value; if (!1 != !!t) {
        const r = t.split('.'); if (!(r.length <= 0)) {
          !function e(t, o, r, i) {
            const s = o[r]; 'object' === n(t[s]) ? e(t[s], o, r + 1, i) : t[s] = i
          }(this.config, r, 0, o)
        }
      }
    } }, { key: '_initConfig', value: function() {
      let e; this.config = {}, this.config.accessLayer = (e = this.tim, { create: null, query: { serverName: _o.NAME.WEB_IM, cmd: _o.CMD.ACCESS_LAYER, channel: _o.CHANNEL.XHR, protocol: po, method: 'POST', queryString: u(u({}, Ls(e)), {}, { identifier: e.context.identifier, usersig: e.context.userSig }), requestData: {} }, update: null, delete: null }), this.config.login = function(e) {
        return { create: null, query: { serverName: _o.NAME.OPEN_IM, cmd: _o.CMD.LOGIN, channel: _o.CHANNEL.XHR, protocol: po, method: 'POST', queryString: u(u({}, Ls(e)), {}, { identifier: e.loginInfo.identifier, usersig: e.loginInfo.userSig, sdkappid: e.loginInfo.SDKAppID, accounttype: e.loginInfo.accountType, reqtime: +new Date / 1e3 }), requestData: { state: 'Online' }, keyMaps: { request: { tinyID: 'tinyId' }, response: { TinyId: 'tinyID' } } }, update: null, delete: null }
      }(this.tim), this.config.logout = function(e) {
        return { create: null, query: { serverName: _o.NAME.OPEN_IM, cmd: _o.CMD.LOGOUT_ALL, channel: _o.CHANNEL.XHR, protocol: po, method: 'POST', queryString: u(u({}, Ls(e)), {}, { reqtime: +new Date / 1e3 }), requestData: {} }, update: null, delete: null }
      }(this.tim), this.config.longPollLogout = function(e) {
        return { create: null, query: { serverName: _o.NAME.OPEN_IM, cmd: _o.CMD.LOGOUT_LONG_POLL, channel: _o.CHANNEL.XHR, protocol: po, method: 'POST', queryString: u(u({}, Ls(e)), {}, { reqtime: +new Date }), requestData: { longPollID: '' }, keyMaps: { request: { longPollID: 'LongPollingId' } } }, update: null, delete: null }
      }(this.tim), this.config.profile = function(e) {
        const t = Ls(e); const n = { serverName: _o.NAME.PROFILE, channel: _o.CHANNEL.XHR, protocol: po, method: 'POST', queryString: t }; return { query: u(u({}, n), {}, { cmd: _o.CMD.PORTRAIT_GET, requestData: { fromAccount: '', userItem: [] }, keyMaps: { request: { toAccount: 'To_Account', standardSequence: 'StandardSequence', customSequence: 'CustomSequence' } } }), update: u(u({}, n), {}, { cmd: _o.CMD.PORTRAIT_SET, requestData: { fromAccount: '', profileItem: [{ tag: Ct.NICK, value: '' }, { tag: Ct.GENDER, value: '' }, { tag: Ct.ALLOWTYPE, value: '' }, { tag: Ct.AVATAR, value: '' }] } }) }
      }(this.tim), this.config.group = function(e) {
        let n = _o.NAME.GROUP; let o = Ls(e); if (e.context.login !== ot.IS_LOGIN || !e.context.a2Key) {
          n = _o.NAME.BIG_GROUP_NO_AUTH; const r = Ls(e); r.a2, r.tinyid; o = m(r, ['a2', 'tinyid'])
        } const i = { request: { ownerID: 'Owner_Account', userID: 'Member_Account', newOwnerID: 'NewOwner_Account', maxMemberNum: 'MaxMemberCount', groupCustomField: 'AppDefinedData', memberCustomField: 'AppMemberDefinedData', groupCustomFieldFilter: 'AppDefinedDataFilter_Group', memberCustomFieldFilter: 'AppDefinedDataFilter_GroupMember', messageRemindType: 'MsgFlag', userIDList: 'MemberList', groupIDList: 'GroupIdList', applyMessage: 'ApplyMsg', muteTime: 'ShutUpTime', muteAllMembers: 'ShutUpAllMember', joinOption: 'ApplyJoinOption' }, response: { GroupIdList: 'groups', MsgFlag: 'messageRemindType', AppDefinedData: 'groupCustomField', AppMemberDefinedData: 'memberCustomField', AppDefinedDataFilter_Group: 'groupCustomFieldFilter', AppDefinedDataFilter_GroupMember: 'memberCustomFieldFilter', InfoSeq: 'infoSequence', MemberList: 'members', GroupInfo: 'groups', ShutUpUntil: 'muteUntil', ShutUpAllMember: 'muteAllMembers', ApplyJoinOption: 'joinOption' } }; const s = { serverName: _o.NAME.GROUP, channel: _o.CHANNEL.XHR, protocol: po, queryString: o }; return { create: u(u({}, s), {}, { cmd: _o.CMD.CREATE_GROUP, requestData: { type: t.GRP_WORK, name: void 0, groupID: void 0, ownerID: e.loginInfo.identifier, introduction: void 0, notification: void 0, avatar: void 0, maxMemberNum: void 0, joinOption: void 0, memberList: void 0, groupCustomField: void 0 }, keyMaps: i }), list: u(u({}, s), {}, { cmd: _o.CMD.GET_JOINED_GROUPS, requestData: { userID: e.loginInfo.identifier, limit: void 0, offset: void 0, groupType: void 0, responseFilter: void 0 }, keyMaps: i }), query: u(u({}, s), {}, { cmd: _o.CMD.GET_GROUP_INFO, requestData: { groupIDList: void 0, responseFilter: void 0 }, keyMaps: i }), getGroupMemberProfile: u(u({}, s), {}, { cmd: _o.CMD.GET_GROUP_MEMBER_INFO, requestData: { groupID: void 0, userIDList: void 0, memberInfoFilter: void 0, memberCustomFieldFilter: void 0 }, keyMaps: { request: u(u({}, i.request), {}, { userIDList: 'Member_List_Account' }), response: i.response } }), getGroupMemberList: u(u({}, s), {}, { cmd: _o.CMD.GET_GROUP_MEMBER_LIST, requestData: { groupID: void 0, limit: 0, offset: 0, memberRoleFilter: void 0, memberInfoFilter: void 0 }, keyMaps: i }), quitGroup: u(u({}, s), {}, { cmd: _o.CMD.QUIT_GROUP, requestData: { groupID: void 0 } }), changeGroupOwner: u(u({}, s), {}, { cmd: _o.CMD.CHANGE_GROUP_OWNER, queryString: o, requestData: { groupID: void 0, newOwnerID: void 0 }, keyMaps: i }), destroyGroup: u(u({}, s), {}, { cmd: _o.CMD.DESTROY_GROUP, requestData: { groupID: void 0 } }), updateGroupProfile: u(u({}, s), {}, { cmd: _o.CMD.MODIFY_GROUP_INFO, requestData: { groupID: void 0, name: void 0, introduction: void 0, notification: void 0, avatar: void 0, maxMemberNum: void 0, joinOption: void 0, groupCustomField: void 0, muteAllMembers: void 0 }, keyMaps: { request: u(u({}, i.request), {}, { groupCustomField: 'AppDefinedData' }), response: i.response } }), modifyGroupMemberInfo: u(u({}, s), {}, { cmd: _o.CMD.MODIFY_GROUP_MEMBER_INFO, requestData: { groupID: void 0, userID: void 0, messageRemindType: void 0, nameCard: void 0, role: void 0, memberCustomField: void 0, muteTime: void 0 }, keyMaps: i }), addGroupMember: u(u({}, s), {}, { cmd: _o.CMD.ADD_GROUP_MEMBER, requestData: { groupID: void 0, silence: void 0, userIDList: void 0 }, keyMaps: i }), deleteGroupMember: u(u({}, s), {}, { cmd: _o.CMD.DELETE_GROUP_MEMBER, requestData: { groupID: void 0, userIDList: void 0, reason: void 0 }, keyMaps: { request: { userIDList: 'MemberToDel_Account' } } }), searchGroupByID: u(u({}, s), {}, { cmd: _o.CMD.SEARCH_GROUP_BY_ID, requestData: { groupIDList: void 0, responseFilter: { groupBasePublicInfoFilter: ['Type', 'Name', 'Introduction', 'Notification', 'FaceUrl', 'CreateTime', 'Owner_Account', 'LastInfoTime', 'LastMsgTime', 'NextMsgSeq', 'MemberNum', 'MaxMemberNum', 'ApplyJoinOption'] } }, keyMaps: { request: { groupIDList: 'GroupIdList' } } }), applyJoinGroup: u(u({}, s), {}, { cmd: _o.CMD.APPLY_JOIN_GROUP, requestData: { groupID: void 0, applyMessage: void 0, userDefinedField: void 0 }, keyMaps: i }), applyJoinAVChatRoom: u(u({}, s), {}, { serverName: _o.NAME.BIG_GROUP_NO_AUTH, cmd: _o.CMD.APPLY_JOIN_GROUP, requestData: { groupID: void 0, applyMessage: void 0, userDefinedField: void 0 }, keyMaps: i }), handleApplyJoinGroup: u(u({}, s), {}, { cmd: _o.CMD.HANDLE_APPLY_JOIN_GROUP, requestData: { groupID: void 0, applicant: void 0, handleAction: void 0, handleMessage: void 0, authentication: void 0, messageKey: void 0, userDefinedField: void 0 }, keyMaps: { request: { applicant: 'Applicant_Account', handleAction: 'HandleMsg', handleMessage: 'ApprovalMsg', messageKey: 'MsgKey' }, response: { MsgKey: 'messageKey' } } }), deleteGroupSystemNotice: u(u({}, s), {}, { serverName: _o.NAME.OPEN_IM, cmd: _o.CMD.DELETE_GROUP_SYSTEM_MESSAGE, requestData: { messageListToDelete: void 0 }, keyMaps: { request: { messageListToDelete: 'DelMsgList', messageSeq: 'MsgSeq', messageRandom: 'MsgRandom' } } }), getGroupPendency: u(u({}, s), {}, { cmd: _o.CMD.GET_GROUP_PENDENCY, requestData: { startTime: void 0, limit: void 0, handleAccount: void 0 }, keyMaps: { request: { handleAccount: 'Handle_Account' } } }), getOnlineMemberNum: { serverName: n, cmd: _o.CMD.GET_ONLINE_MEMBER_NUM, channel: _o.CHANNEL.XHR, protocol: po, queryString: o, requestData: { groupID: void 0 } } }
      }(this.tim), this.config.longPollID = function(e) {
        return { create: {}, query: { serverName: _o.NAME.OPEN_IM, cmd: _o.CMD.GET_LONG_POLL_ID, channel: _o.CHANNEL.XHR, protocol: po, queryString: u(u({}, Ls(e)), {}, { instanceid: e.context.instanceID, reqtime: +new Date / 1e3 }), requestData: {}, keyMaps: { response: { LongPollingId: 'longPollingID' } } }, update: {}, delete: {} }
      }(this.tim), this.config.longPoll = function(e) {
        const t = u(u({}, Ls(e)), {}, { instanceid: e.context.instanceID, reqtime: Math.ceil(+new Date / 1e3) }); return { create: {}, query: { serverName: _o.NAME.OPEN_IM, cmd: _o.CMD.LONG_POLL, channel: _o.CHANNEL.AUTO, protocol: po, queryString: t, requestData: { timeout: null, cookie: { notifySeq: 0, noticeSeq: 0, longPollingID: 0 } }, keyMaps: { response: { C2cMsgArray: 'C2CMessageArray', GroupMsgArray: 'groupMessageArray', GroupTips: 'groupTips', C2cNotifyMsgArray: 'C2CNotifyMessageArray', ClientSeq: 'clientSequence', MsgPriority: 'priority', NoticeSeq: 'noticeSequence', MsgContent: 'content', MsgType: 'type', MsgBody: 'elements', ToGroupId: 'to', Desc: 'description', Ext: 'extension' } } }, update: {}, delete: {} }
      }(this.tim), this.config.applyC2C = function(e) {
        const t = Ls(e); const n = { serverName: _o.NAME.FRIEND, channel: _o.CHANNEL.XHR, protocol: po, queryString: t }; return { create: u(u({}, n), {}, { cmd: _o.CMD.FRIEND_ADD, requestData: { fromAccount: '', addFriendItem: [] } }), get: u(u({}, n), {}, { cmd: _o.CMD.GET_PENDENCY, requestData: { fromAccount: '', pendencyType: 'Pendency_Type_ComeIn' } }), update: u(u({}, n), {}, { cmd: _o.CMD.RESPONSE_PENDENCY, requestData: { fromAccount: '', responseFriendItem: [] } }), delete: u(u({}, n), {}, { cmd: _o.CMD.DELETE_PENDENCY, requestData: { fromAccount: '', toAccount: [], pendencyType: 'Pendency_Type_ComeIn' } }) }
      }(this.tim), this.config.friend = function(e) {
        const t = u(u({}, Ls(e)), {}, { reqtime: function() {
          return +new Date
        } }); const n = { serverName: _o.NAME.FRIEND, channel: _o.CHANNEL.XHR, protocol: po, method: 'POST', queryString: t }; return { get: u(u({}, n), {}, { cmd: _o.CMD.FRIEND_GET_ALL, requestData: { fromAccount: '', timeStamp: 0, tagList: [Ct.NICK, 'Tag_SNS_IM_Remark', Ct.AVATAR] }, keyMaps: { request: {}, response: {} } }), delete: u(u({}, n), {}, { cmd: _o.CMD.FRIEND_DELETE, requestData: { fromAccount: '', toAccount: [], deleteType: 'Delete_Type_Single' } }) }
      }(this.tim), this.config.blacklist = function(e) {
        const t = Ls(e); const n = { serverName: _o.NAME.FRIEND, channel: _o.CHANNEL.XHR, protocol: po, method: 'POST', queryString: t }; return { create: u(u({}, n), {}, { cmd: _o.CMD.ADD_BLACKLIST, requestData: { fromAccount: '', toAccount: [] } }), get: u(u({}, n), {}, { cmd: _o.CMD.GET_BLACKLIST, requestData: { fromAccount: '', startIndex: 0, maxLimited: 30, lastSequence: 0 } }), delete: u(u({}, n), {}, { cmd: _o.CMD.DELETE_BLACKLIST, requestData: { fromAccount: '', toAccount: [] } }), update: {} }
      }(this.tim), this.config.c2cMessage = function(e) {
        const t = u(u({}, Ls(e)), {}, { reqtime: function() {
          return +new Date
        } }); const n = { request: { fromAccount: 'From_Account', toAccount: 'To_Account', msgTimeStamp: 'MsgTimeStamp', msgSeq: 'MsgSeq', msgRandom: 'MsgRandom', msgBody: 'MsgBody', count: 'MaxCnt', lastMessageTime: 'LastMsgTime', messageKey: 'MsgKey', peerAccount: 'Peer_Account', data: 'Data', description: 'Desc', extension: 'Ext', type: 'MsgType', content: 'MsgContent', sizeType: 'Type', uuid: 'UUID', imageUrl: 'URL', fileUrl: 'Url', remoteAudioUrl: 'Url', remoteVideoUrl: 'VideoUrl', thumbUUID: 'ThumbUUID', videoUUID: 'VideoUUID', videoUrl: '', downloadFlag: 'Download_Flag' }, response: { MsgContent: 'content', MsgTime: 'time', Data: 'data', Desc: 'description', Ext: 'extension', MsgKey: 'messageKey', MsgType: 'type', MsgBody: 'elements', Download_Flag: 'downloadFlag', ThumbUUID: 'thumbUUID', VideoUUID: 'videoUUID' } }; const o = { serverName: _o.NAME.OPEN_IM, channel: _o.CHANNEL.XHR, protocol: po, method: 'POST', queryString: t }; return { create: u(u({}, o), {}, { cmd: _o.CMD.SEND_MESSAGE, requestData: { fromAccount: e.loginInfo.identifier, toAccount: '', msgTimeStamp: Math.ceil(+new Date / 1e3), msgSeq: 0, msgRandom: 0, msgBody: [], msgLifeTime: void 0, offlinePushInfo: { pushFlag: 0, title: '', desc: '', ext: '', apnsInfo: { badgeMode: 0 }, androidInfo: { OPPOChannelID: '' } } }, keyMaps: n }), query: u(u({}, o), {}, { cmd: _o.CMD.GET_C2C_ROAM_MESSAGES, requestData: { peerAccount: '', count: 15, lastMessageTime: 0, messageKey: '', withRecalledMsg: 1 }, keyMaps: n }) }
      }(this.tim), this.config.c2cMessageWillBeRevoked = function(e) {
        const t = u(u({}, Ls(e)), {}, { reqtime: function() {
          return +new Date
        } }); return { create: { serverName: _o.NAME.OPEN_IM, cmd: _o.CMD.REVOKE_C2C_MESSAGE, channel: _o.CHANNEL.XHR, protocol: po, method: 'POST', queryString: t, requestData: { msgInfo: { fromAccount: '', toAccount: '', msgTimeStamp: Math.ceil(+new Date / 1e3), msgSeq: 0, msgRandom: 0 } }, keyMaps: { request: { msgInfo: 'MsgInfo', fromAccount: 'From_Account', toAccount: 'To_Account', msgTimeStamp: 'MsgTimeStamp', msgSeq: 'MsgSeq', msgRandom: 'MsgRandom', msgBody: 'MsgBody' } } } }
      }(this.tim), this.config.c2cPeerReadTime = function(e) {
        const t = u(u({}, Ls(e)), {}, { reqtime: function() {
          return +new Date
        } }); return { get: { serverName: _o.NAME.OPEN_IM, cmd: _o.CMD.GET_PEER_READ_TIME, channel: _o.CHANNEL.XHR, protocol: po, method: 'POST', queryString: t, requestData: { userIDList: void 0 }, keyMaps: { request: { userIDList: 'To_Account' }, response: { ReadTime: 'peerReadTimeList' } } } }
      }(this.tim), this.config.groupMessage = function(e) {
        const t = u(u({}, Ls(e)), {}, { reqtime: function() {
          return +new Date
        } }); const n = { request: { to: 'GroupId', extension: 'Ext', data: 'Data', description: 'Desc', random: 'Random', sequence: 'ReqMsgSeq', count: 'ReqMsgNumber', type: 'MsgType', priority: 'MsgPriority', content: 'MsgContent', elements: 'MsgBody', sizeType: 'Type', uuid: 'UUID', imageUrl: 'URL', fileUrl: 'Url', remoteAudioUrl: 'Url', remoteVideoUrl: 'VideoUrl', thumbUUID: 'ThumbUUID', videoUUID: 'VideoUUID', videoUrl: '', downloadFlag: 'Download_Flag', clientSequence: 'ClientSeq' }, response: { Random: 'random', MsgTime: 'time', MsgSeq: 'sequence', ReqMsgSeq: 'sequence', RspMsgList: 'messageList', IsPlaceMsg: 'isPlaceMessage', IsSystemMsg: 'isSystemMessage', ToGroupId: 'to', EnumFrom_AccountType: 'fromAccountType', EnumTo_AccountType: 'toAccountType', GroupCode: 'groupCode', MsgPriority: 'priority', MsgBody: 'elements', MsgType: 'type', MsgContent: 'content', IsFinished: 'complete', Download_Flag: 'downloadFlag', ClientSeq: 'clientSequence', ThumbUUID: 'thumbUUID', VideoUUID: 'videoUUID' } }; const o = { serverName: _o.NAME.GROUP, channel: _o.CHANNEL.XHR, protocol: po, method: 'POST', queryString: t }; return { create: u(u({}, o), {}, { cmd: _o.CMD.SEND_GROUP_MESSAGE, requestData: { groupID: '', fromAccount: e.loginInfo.identifier, random: 0, clientSequence: 0, priority: '', msgBody: [], onlineOnlyFlag: 0, offlinePushInfo: { pushFlag: 0, title: '', desc: '', ext: '', apnsInfo: { badgeMode: 0 }, androidInfo: { OPPOChannelID: '' } }, groupAtInfo: [] }, keyMaps: n }), query: u(u({}, o), {}, { cmd: _o.CMD.GET_GROUP_ROAM_MESSAGES, requestData: { withRecalledMsg: 1, groupID: '', count: 15, sequence: '' }, keyMaps: n }), update: null, delete: null }
      }(this.tim), this.config.groupMessageWillBeRevoked = function(e) {
        const t = u(u({}, Ls(e)), {}, { reqtime: function() {
          return +new Date
        } }); return { create: { serverName: _o.NAME.GROUP, cmd: _o.CMD.REVOKE_GROUP_MESSAGE, channel: _o.CHANNEL.XHR, protocol: po, method: 'POST', queryString: t, requestData: { to: '', msgSeqList: [] }, keyMaps: { request: { to: 'GroupId', msgSeqList: 'MsgSeqList', msgSeq: 'MsgSeq' } } } }
      }(this.tim), this.config.conversation = function(e) {
        const t = Ls(e); const n = { serverName: _o.NAME.RECENT_CONTACT, channel: _o.CHANNEL.XHR, protocol: po, method: 'POST', queryString: t }; return { query: u(u({}, n), {}, { cmd: _o.CMD.GET_CONVERSATION_LIST, requestData: { fromAccount: e.loginInfo.identifier, count: 0 }, keyMaps: { request: {}, response: { SessionItem: 'conversations', ToAccount: 'groupID', To_Account: 'userID', UnreadMsgCount: 'unreadCount', MsgGroupReadedSeq: 'messageReadSeq' } } }), pagingQuery: u(u({}, n), {}, { cmd: _o.CMD.PAGING_GET_CONVERSATION_LIST, requestData: { fromAccount: void 0, timeStamp: void 0, orderType: void 0 }, keyMaps: { request: {}, response: { SessionItem: 'conversations', ToAccount: 'groupID', To_Account: 'userID', UnreadMsgCount: 'unreadCount', MsgGroupReadedSeq: 'messageReadSeq', C2cPeerReadTime: 'c2cPeerReadTime' } } }), delete: u(u({}, n), {}, { cmd: _o.CMD.DELETE_CONVERSATION, requestData: { fromAccount: e.loginInfo.identifier, toAccount: void 0, type: 1, toGroupID: void 0 }, keyMaps: { request: { toGroupID: 'ToGroupid' } } }), setC2CMessageRead: u(u({}, n), {}, { serverName: _o.NAME.OPEN_IM, cmd: _o.CMD.SET_C2C_MESSAGE_READ, requestData: { C2CMsgReaded: void 0 }, keyMaps: { request: { lastMessageTime: 'LastedMsgTime' } } }), setGroupMessageRead: u(u({}, n), {}, { serverName: _o.NAME.GROUP, cmd: _o.CMD.SET_GROUP_MESSAGE_READ, requestData: { groupID: void 0, messageReadSeq: void 0 }, keyMaps: { request: { messageReadSeq: 'MsgReadedSeq' } } }), deleteGroupAtTips: u(u({}, n), {}, { serverName: _o.NAME.OPEN_IM, cmd: _o.CMD.DELETE_GROUP_AT_TIPS, requestData: { messageListToDelete: void 0 }, keyMaps: { request: { messageListToDelete: 'DelMsgList', messageSeq: 'MsgSeq', messageRandom: 'MsgRandom' } } }) }
      }(this.tim), this.config.syncMessage = function(e) {
        const t = u(u({}, Ls(e)), {}, { reqtime: function() {
          return [Math.ceil(+new Date), Math.random()].join('')
        } }); return { create: null, query: { serverName: _o.NAME.OPEN_IM, cmd: _o.CMD.GET_MESSAGES, channel: _o.CHANNEL.XHR, protocol: po, method: 'POST', queryString: t, requestData: { cookie: '', syncFlag: 0, needAbstract: 1 }, keyMaps: { request: { fromAccount: 'From_Account', toAccount: 'To_Account', from: 'From_Account', to: 'To_Account', time: 'MsgTimeStamp', sequence: 'MsgSeq', random: 'MsgRandom', elements: 'MsgBody' }, response: { MsgList: 'messageList', SyncFlag: 'syncFlag', To_Account: 'to', From_Account: 'from', ClientSeq: 'clientSequence', MsgSeq: 'sequence', NoticeSeq: 'noticeSequence', NotifySeq: 'notifySequence', MsgRandom: 'random', MsgTimeStamp: 'time', MsgContent: 'content', ToGroupId: 'groupID', MsgKey: 'messageKey', GroupTips: 'groupTips', MsgBody: 'elements', MsgType: 'type', C2CRemainingUnreadCount: 'C2CRemainingUnreadList' } } }, update: null, delete: null }
      }(this.tim), this.config.AVChatRoom = function(e) {
        let t = _o.NAME.BIG_GROUP_LONG_POLLING_NO_AUTH; const n = u(u({}, Ls(e)), {}, { accounttype: '792', reqtime: function() {
          return +new Date
        } }); return (e.context.login === ot.IS_LOGIN || e.context.a2Key) && (t = _o.NAME.BIG_GROUP_LONG_POLLING), { startLongPoll: { serverName: t, cmd: _o.CMD.AVCHATROOM_LONG_POLL, channel: _o.CHANNEL.XHR, protocol: po, method: 'POST', queryString: n, requestData: { USP: 1, startSeq: 1, holdTime: 90, key: void 0 }, keyMaps: { request: { USP: 'USP' }, response: { ToGroupId: 'groupID', MsgPriority: 'priority' } } } }
      }(this.tim), this.config.cosUpload = function(e) {
        const t = u(u({}, Ls(e)), {}, { reqtime: function() {
          return +new Date
        } }); return { create: { serverName: _o.NAME.OPEN_IM, cmd: _o.CMD.FILE_UPLOAD, channel: _o.CHANNEL.XHR, protocol: po, method: 'POST', queryString: t, requestData: { appVersion: '2.1', fromAccount: '', toAccount: '', sequence: 0, time: function() {
          return Math.ceil(Date.now() / 1e3)
        }, random: function() {
          return we()
        }, fileStrMd5: '', fileSize: '', serverVer: 1, authKey: '', busiId: 1, pkgFlag: 1, sliceOffset: 0, sliceSize: 0, sliceData: '', contentType: 'application/x-www-form-urlencoded' }, keyMaps: { request: {}, response: {} } }, update: null, delete: null }
      }(this.tim), this.config.cosSig = function(e) {
        const t = { sdkappid: e.loginInfo.SDKAppID, identifier: e.loginInfo.identifier, userSig: e.context.userSig }; return { create: null, query: { serverName: _o.NAME.IM_COS_SIGN, cmd: _o.CMD.COS_SIGN, channel: _o.CHANNEL.XHR, protocol: po, method: 'POST', queryString: t, requestData: { cmd: 'open_im_cos_svc', subCmd: 'get_cos_token', duration: 300, version: 2 }, keyMaps: { request: { userSig: 'usersig', subCmd: 'sub_cmd', cmd: 'cmd', duration: 'duration', version: 'version' }, response: { expired_time: 'expiredTime', bucket_name: 'bucketName', session_token: 'sessionToken', tmp_secret_id: 'secretId', tmp_secret_key: 'secretKey' } } }, update: null, delete: null }
      }(this.tim), this.config.bigDataHallwayAuthKey = function(e) {
        return { create: null, query: { serverName: _o.NAME.OPEN_IM, cmd: _o.CMD.BIG_DATA_HALLWAY_AUTH_KEY, channel: _o.CHANNEL.XHR, protocol: po, method: 'POST', queryString: u(u({}, Ls(e)), {}, { accounttype: '792', reqtime: function() {
          return +new Date
        } }), requestData: {} } }
      }(this.tim), this.config.ssoEventStat = function(e) {
        const t = { sdkappid: e.loginInfo.SDKAppID, reqtime: Math.ceil(+new Date / 1e3) }; return { create: { serverName: _o.NAME.IM_OPEN_STAT, cmd: _o.CMD.TIM_WEB_REPORT, channel: _o.CHANNEL.AUTO, protocol: po, queryString: t, requestData: { table: '', report: [] }, keyMaps: { request: { table: 'table', report: 'report', SDKAppID: 'sdkappid', version: 'version', tinyID: 'tinyid', userID: 'userid', platform: 'platform', method: 'method', time: 'time', start: 'start', end: 'end', cost: 'cost', status: 'status', codeint: 'codeint', message: 'message', pointer: 'pointer', text: 'text', msgType: 'msgtype', networkType: 'networktype', startts: 'startts', endts: 'endts', timespan: 'timespan' } } }, query: {}, update: {}, delete: {} }
      }(this.tim), this.config.ssoSumStat = function(e) {
        let t = null; null !== e.context && (t = { sdkappid: e.context.SDKAppID, reqtime: Math.ceil(+new Date / 1e3) }); return { create: { serverName: _o.NAME.IM_OPEN_STAT, cmd: _o.CMD.TIM_WEB_REPORT, channel: _o.CHANNEL.AUTO, protocol: po, queryString: t, requestData: { table: '', report: [] }, keyMaps: { request: { table: 'table', report: 'report', SDKAppID: 'sdkappid', version: 'version', tinyID: 'tinyid', userID: 'userid', item: 'item', lpID: 'lpid', platform: 'platform', scene: 'scene', networkType: 'networktype', total: 'total', successRate: 'successrate', avg: 'avg', timespan: 'timespan', time: 'time' } } }, query: {}, update: {}, delete: {} }
      }(this.tim)
    } }, { key: '_initRequestData', value: function(e, t) {
      if (void 0 === e) return pr(t.requestData, this._getRequestMap(t), this.tim); const n = t.requestData; let o = Object.create(null); for (const r in n) {
        if (Object.prototype.hasOwnProperty.call(n, r)) {
          if (o[r] = 'function' === typeof n[r] ? n[r]() : n[r], void 0 === e[r]) continue; o[r] = e[r]
        }
      } return o = pr(o, this._getRequestMap(t), this.tim)
    } }, { key: '_getRequestMap', value: function(e) {
      if (e.keyMaps && e.keyMaps.request && Object.keys(e.keyMaps.request).length > 0) return e.keyMaps.request
    } }, { key: '_initEncoder', value: function(e) {
      switch (e.protocol) {
        case po: return function(e) {
          if ('string' === n(e)) {
            try {
              return JSON.parse(e)
            } catch (t) {
              return e
            }
          } return e
        }; case lo: return function(e) {
          return e
        }; default: return function(e) {
          return de.warn('PackageConfig._initEncoder(), unknow response type, data: ', JSON.stringify(e)), e
        }
      }
    } }, { key: '_initDecoder', value: function(e) {
      switch (e.protocol) {
        case po: return function(e) {
          if ('string' === n(e)) {
            try {
              return JSON.parse(e)
            } catch (t) {
              return e
            }
          } return e
        }; case lo: return function(e) {
          return e
        }; default: return function(e) {
          return de.warn('PackageConfig._initDecoder(), unknow response type, data: ', e), e
        }
      }
    } }]), e
  }(); const Ps = function() {
    for (var e = [], t = Gs(arguments), n = 0; n < arguments.length; n++)Number.isInteger(arguments[n]) ? e.push(arguments[n]) : e.push(!0 == !!arguments[n] ? '1' : '0'); return e.join(t)
  }; var Gs = function(e) {
    const t = e.length; const n = e[t - 1]; if ('string' !== typeof n) return ''; if (n.length > 1) return ''; const o = e[t - 1]; return delete e[t - 1], e.length -= t === e.length ? 1 : 0, o
  }; const bs = { C2CMessageArray: 1, groupMessageArray: 1, groupTips: 1, C2CNotifyMessageArray: 1, profileModify: 1, friendListMod: 1 }; const Us = function(e) {
    c(n, e); const t = v(n); function n(e) {
      let r; return o(this, n), (r = t.call(this, e))._initialization(), r
    } return i(n, [{ key: '_initialization', value: function() {
      this._syncOffset = '', this._syncNoticeList = [], this._syncEventArray = [], this._syncMessagesIsRunning = !1, this._syncMessagesFinished = !1, this._isLongPoll = !1, this._longPollID = '0', this._noticeSequence = 0, this._initializeListener(), this._runLoop = null, this._initShuntChannels()
    } }, { key: '_initShuntChannels', value: function() {
      this._shuntChannels = Object.create(null), this._shuntChannels.C2CMessageArray = this._C2CMessageArrayChannel.bind(this), this._shuntChannels.groupMessageArray = this._groupMessageArrayChannel.bind(this), this._shuntChannels.groupTips = this._groupTipsChannel.bind(this), this._shuntChannels.C2CNotifyMessageArray = this._C2CNotifyMessageArrayChannel.bind(this), this._shuntChannels.profileModify = this._profileModifyChannel.bind(this), this._shuntChannels.friendListMod = this._friendListModChannel.bind(this)
    } }, { key: '_C2CMessageArrayChannel', value: function(e, t, n) {
      this.emitInnerEvent(Uo, t)
    } }, { key: '_groupMessageArrayChannel', value: function(e, t, n) {
      this.emitInnerEvent(qo, t)
    } }, { key: '_groupTipsChannel', value: function(e, t, n) {
      const o = this; switch (e) {
        case 4: case 6: this.emitInnerEvent(Fo, t); break; case 5: t.forEach((function(e) {
          Ie(e.elements.revokedInfos) ? o.emitInnerEvent(Bo, t) : o.emitInnerEvent(Vo, { groupSystemNotices: t, type: n })
        })); break; case 12: this.emitInnerEvent(xo, t); break; default: de.log('NotificationController._groupTipsChannel unknown event='.concat(e, ' type=').concat(n), t)
      }
    } }, { key: '_C2CNotifyMessageArrayChannel', value: function(e, t, n) {
      if (t[0]) {
        const o = t[0]; o.hasOwnProperty('kickoutMsgNotify') ? this.emitInnerEvent(bo) : o.hasOwnProperty('c2cMessageRevokedNotify') ? this.emitInnerEvent(jo, t) : o.hasOwnProperty('c2cMessageReadReceipt') && this.emitInnerEvent($o, t)
      }
    } }, { key: '_profileModifyChannel', value: function(e, t, n) {
      this.emitInnerEvent(Ho, t)
    } }, { key: '_friendListModChannel', value: function(e, t, n) {
      this.emitInnerEvent(Ko, t)
    } }, { key: '_dispatchNotice', value: function(e) {
      const t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'poll'; if (Ie(e)) {
        for (let n = null, o = null, r = '', i = 0, s = 0, a = e.length; s < a; s++) {
          i = (n = e[s]).event, r = Object.keys(n).find((function(e) {
            return void 0 !== bs[e]
          })), Ee(this._shuntChannels[r]) ? (o = n[r], 'poll' === t && this._updatenoticeSequence(o), this._shuntChannels[r](i, o, t)) : ('poll' === t && this._updatenoticeSequence(), de.log('NotificationController._dispatchNotice unknown eventItem=', n))
        }
      }
    } }, { key: 'getLongPollID', value: function() {
      return this._longPollID
    } }, { key: '_IAmReady', value: function() {
      this.triggerReady()
    } }, { key: 'reset', value: function() {
      this._noticeSequence = 0, this._resetSync(), this.closeNoticeChannel()
    } }, { key: '_resetSync', value: function() {
      this._syncOffset = '', this._syncNoticeList = [], this._syncEventArray = [], this._syncMessagesIsRunning = !1, this._syncMessagesFinished = !1
    } }, { key: '_setNoticeSeqInRequestData', value: function(e) {
      e.Cookie.NoticeSeq = this._noticeSequence, this.tim.sumStatController.addTotalCount(Dr)
    } }, { key: '_updatenoticeSequence', value: function(e) {
      if (e) {
        const t = e[e.length - 1].noticeSequence; t && 'number' === typeof t ? t <= this._noticeSequence || (this._noticeSequence = t) : this._noticeSequence++
      } else this._noticeSequence++
    } }, { key: '_initializeListener', value: function() {
      const e = this.tim.innerEmitter; e.on(Mo, this._startSyncMessages, this), e.on(Qo, this.closeNoticeChannel, this)
    } }, { key: 'openNoticeChannel', value: function() {
      de.log('NotificationController.openNoticeChannel'), this._getLongPollID()
    } }, { key: 'closeNoticeChannel', value: function() {
      de.log('NotificationController.closeNoticeChannel'), (this._runLoop instanceof zi || this._runLoop instanceof Ji) && (this._runLoop.abort(), this._runLoop.stop()), this._longPollID = '0', this._isLongPoll = !1
    } }, { key: '_getLongPollID', value: function() {
      const e = this; if ('0' === this._longPollID) {
        const t = new qr(Ni); this.request({ name: 'longPollID', action: 'query' }).then((function(n) {
          const o = n.data.longPollingID; e._onGetLongPollIDSuccess(o), t.setText('longPollingID='.concat(o)).setNetworkType(e.getNetworkType()).setEnd()
        })).catch((function(n) {
          const o = new Ut({ code: n.code || qt.GET_LONGPOLL_ID_FAILED, message: n.message || Kn }); e.emitInnerEvent(Lo), e.emitInnerEvent(er, o), e.probeNetwork().then((function(e) {
            const n = y(e, 2); const r = n[0]; const i = n[1]; t.setError(o, r, i).setEnd()
          }))
        }))
      } else this._onGetLongPollIDSuccess(this._longPollID)
    } }, { key: '_onGetLongPollIDSuccess', value: function(e) {
      this.emitInnerEvent(Co, [{ key: 'long_poll_logout.query.requestData.longPollingID', value: e }, { key: 'longPoll.query.requestData.cookie.longPollingID', value: e }]), this._longPollID = e, this._startLongPoll(), this._IAmReady(), this.tim.sumStatController.recordLongPollingID(this._longPollID)
    } }, { key: '_startLongPoll', value: function() {
      if (!0 !== this._isLongPoll) {
        de.log('NotificationController._startLongPoll...'); const e = this.tim.connectionController; const t = this.createTransportCapsule({ name: 'longPoll', action: 'query' }); this._isLongPoll = !0, this._runLoop = e.createRunLoop({ pack: t, before: this._setNoticeSeqInRequestData.bind(this), success: this._onNoticeReceived.bind(this), fail: this._onNoticeFail.bind(this) }), this._runLoop.start()
      } else de.log('NotificationController._startLongPoll is running...')
    } }, { key: '_onNoticeReceived', value: function(e) {
      const t = e.data; t.errorCode !== nt.SUCCESS ? (new qr(Li).setMessage(t.errorInfo || JSON.stringify(t)).setCode(t.errorCode).setNetworkType(this.getNetworkType()).setEnd(!0), this._onResponseError(t)) : this.emitInnerEvent(Po); this.tim.sumStatController.addSuccessCount(Dr), this.tim.sumStatController.addCost(Dr, t.timecost), e.data.eventArray && this._dispatchNotice(e.data.eventArray)
    } }, { key: '_onResponseError', value: function(e) {
      switch (e.errorCode) {
        case qt.LONG_POLL_KICK_OUT: de.warn('NotificationController._onResponseError, longPollingID='.concat(this._longPollID, ' was kicked out')), this.emitInnerEvent(Go), this.closeNoticeChannel(); break; case qt.MESSAGE_A2KEY_EXPIRED: case qt.ACCOUNT_A2KEY_EXPIRED: this.emitInnerEvent(Zo); break; default: Me(e.errorCode) || Me(e.errorInfo) ? de.log('NotificationController._onResponseError, errorCode or errorInfo undefined!', e) : this.emitInnerEvent(er, new Ut({ code: e.errorCode, message: e.errorInfo }))
      }
    } }, { key: '_onNoticeFail', value: function(e) {
      if (e.error) {
        if ('ECONNABORTED' === e.error.code || e.error.code === qt.NETWORK_TIMEOUT) {
          if (e.error.config) {
            const t = e.error.config.url; const n = e.error.config.data; de.log('NotificationController._onNoticeFail request timed out. url='.concat(t, ' data=').concat(n))
          } else de.log('NotificationController._onNoticeFail request timed out.')
        } else de.log('NotificationController._onNoticeFail request failed due to network error')
      } this.emitInnerEvent(wo)
    } }, { key: '_startSyncMessages', value: function(e) {
      !0 !== this._syncMessagesFinished && this.syncMessage()
    } }, { key: 'syncMessage', value: function() {
      const e = this; const t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ''; const n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0; this._syncMessagesIsRunning = !0, this.request({ name: 'syncMessage', action: 'query', param: { cookie: t, syncFlag: n } }).then((function(t) {
        const n = t.data; switch (Ps(n.cookie, n.syncFlag)) {
          case '00': case '01': e.emitInnerEvent(er, { code: qt.NOTICE_RUNLOOP_OFFSET_LOST, message: Vn }); break; case '10': case '11': n.eventArray && e._dispatchNotice(n.eventArray, 'sync'), e._syncNoticeList = e._syncNoticeList.concat(n.messageList), e.emitInnerEvent(Eo, { data: n.messageList, C2CRemainingUnreadList: n.C2CRemainingUnreadList }), e._syncOffset = n.cookie, e.syncMessage(n.cookie, n.syncFlag); break; case '12': n.eventArray && e._dispatchNotice(n.eventArray, 'sync'), e.openNoticeChannel(), e._syncNoticeList = e._syncNoticeList.concat(n.messageList), e.emitInnerEvent(To, { messageList: n.messageList, C2CRemainingUnreadList: n.C2CRemainingUnreadList }), e._syncOffset = n.cookie, e._syncNoticeList = [], e._syncMessagesIsRunning = !1, e._syncMessagesFinished = !0
        }
      })).catch((function(t) {
        e._syncMessagesIsRunning = !1, de.error('NotificationController.syncMessage failed. error:', t)
      }))
    } }]), n
  }(mr); const qs = function(e) {
    c(n, e); const t = v(n); function n(e) {
      let r; return o(this, n), (r = t.call(this, e)).COSSDK = null, r._cosUploadMethod = null, r.expiredTimeLimit = 600, r.appid = 0, r.bucketName = '', r.ciUrl = '', r.directory = '', r.downloadUrl = '', r.uploadUrl = '', r.expiredTimeOut = r.expiredTimeLimit, r.region = 'ap-shanghai', r.cos = null, r.cosOptions = { secretId: '', secretKey: '', sessionToken: '', expiredTime: 0 }, r._timer = 0, r.tim.innerEmitter.on(Mo, r._init, f(r)), r.triggerReady(), r
    } return i(n, [{ key: '_expiredTimer', value: function() {
      const e = this; this._timer = setInterval((function() {
        Math.ceil(Date.now() / 1e3) >= e.cosOptions.expiredTime - 120 && (e._getAuthorizationKey(), clearInterval(e._timer))
      }), 6e4)
    } }, { key: '_init', value: function() {
      const e = V ? 'cos-wx-sdk' : 'cos-js-sdk'; this.COSSDK = this.tim.getPlugin(e), this.COSSDK ? this._getAuthorizationKey() : de.warn('UploadController._init 没有检测到上传插件，将无法发送图片、音频、视频、文件等类型的消息。详细请参考 https://imsdk-1252463788.file.myqcloud.com/IM_DOC/Web/SDK.html#registerPlugin')
    } }, { key: '_getAuthorizationKey', value: function() {
      const e = this; const t = Math.ceil(Date.now() / 1e3); const n = new qr($r); this.request({ name: 'cosSig', action: 'query', param: { duration: this.expiredTimeLimit } }).then((function(o) {
        de.log('UploadController._getAuthorizationKey ok. data:', o.data); const r = o.data; const i = r.expiredTime - t; n.setText('requestId='.concat(r.requestId, ' requestTime=').concat(t, ' expiredTime=').concat(r.expiredTime, ' timeout=').concat(i, 's')).setNetworkType(e.getNetworkType()).setEnd(), !V && r.region && (e.region = r.region), e.appid = r.appid, e.bucketName = r.bucketName, e.ciUrl = r.ciUrl, e.directory = r.directory, e.downloadUrl = r.downloadUrl, e.uploadUrl = r.uploadUrl, e.expiredTimeOut = i, e.cosOptions = { secretId: r.secretId, secretKey: r.secretKey, sessionToken: r.sessionToken, expiredTime: r.expiredTime }, de.log('UploadController._getAuthorizationKey cos.config:', 'region='.concat(e.region, ',bucketName=').concat(e.bucketName)), e._initUploaderMethod(), e._expiredTimer()
      })).catch((function(t) {
        e.probeNetwork().then((function(e) {
          const o = y(e, 2); const r = o[0]; const i = o[1]; n.setError(t, r, i).setEnd()
        })), de.warn('UploadController._getAuthorizationKey failed. error:', t)
      }))
    } }, { key: '_initUploaderMethod', value: function() {
      const e = this; this.appid && (this.cos = V ? new this.COSSDK({ ForcePathStyle: !0, getAuthorization: this._getAuthorization.bind(this) }) : new this.COSSDK({ getAuthorization: this._getAuthorization.bind(this) }), this._cosUploadMethod = V ? function(t, n) {
        e.cos.postObject(t, n)
      } : function(t, n) {
        e.cos.uploadFiles(t, n)
      })
    } }, { key: '_getAuthorization', value: function(e, t) {
      t({ TmpSecretId: this.cosOptions.secretId, TmpSecretKey: this.cosOptions.secretKey, XCosSecurityToken: this.cosOptions.sessionToken, ExpiredTime: this.cosOptions.expiredTime })
    } }, { key: 'uploadImage', value: function(e) {
      if (!e.file) return Cr(new Ut({ code: qt.MESSAGE_IMAGE_SELECT_FILE_FIRST, message: en })); const t = this._checkImageType(e.file); if (!0 !== t) return t; const n = this._checkImageMime(e.file); if (!0 !== n) return n; const o = this._checkImageSize(e.file); if (!0 !== o) return o; let r = null; return this.upload(e).then((function(e) {
        return r = e, t = 'https://'.concat(e.location), V ? new Promise((function(e, n) {
          K.getImageInfo({ src: t, success: function(t) {
            e({ width: t.width, height: t.height })
          }, fail: function() {
            e({ width: 0, height: 0 })
          } })
        })) : ee && 9 === te ? Promise.resolve({ width: 0, height: 0 }) : new Promise((function(e, n) {
          let o = new Image; o.onload = function() {
            e({ width: this.width, height: this.height }), o = null
          }, o.onerror = function() {
            e({ width: 0, height: 0 }), o = null
          }, o.src = t
        })); let t
      })).then((function(e) {
        return r.width = e.width, r.height = e.height, Promise.resolve(r)
      }))
    } }, { key: '_checkImageType', value: function(e) {
      let t = ''; return t = V ? e.url.slice(e.url.lastIndexOf('.') + 1) : e.files[0].name.slice(e.files[0].name.lastIndexOf('.') + 1), jn.indexOf(t.toLowerCase()) >= 0 || Cr(new Ut({ coe: qt.MESSAGE_IMAGE_TYPES_LIMIT, message: tn }))
    } }, { key: '_checkImageMime', value: function(e) {
      return !0
    } }, { key: '_checkImageSize', value: function(e) {
      let t = 0; return 0 === (t = V ? e.size : e.files[0].size) ? Cr(new Ut({ code: qt.MESSAGE_FILE_IS_EMPTY, message: ''.concat(Xt) })) : t < 20971520 || Cr(new Ut({ coe: qt.MESSAGE_IMAGE_SIZE_LIMIT, message: ''.concat(nn) }))
    } }, { key: 'uploadFile', value: function(e) {
      let t = null; return e.file ? e.file.files[0].size > 104857600 ? (t = new Ut({ code: qt.MESSAGE_FILE_SIZE_LIMIT, message: pn }), Cr(t)) : 0 === e.file.files[0].size ? (t = new Ut({ code: qt.MESSAGE_FILE_IS_EMPTY, message: ''.concat(Xt) }), Cr(t)) : this.upload(e) : (t = new Ut({ code: qt.MESSAGE_FILE_SELECT_FILE_FIRST, message: ln }), Cr(t))
    } }, { key: 'uploadVideo', value: function(e) {
      return e.file.videoFile.size > 104857600 ? Cr(new Ut({ code: qt.MESSAGE_VIDEO_SIZE_LIMIT, message: ''.concat(an) })) : 0 === e.file.videoFile.size ? Cr(new Ut({ code: qt.MESSAGE_FILE_IS_EMPTY, message: ''.concat(Xt) })) : -1 === $n.indexOf(e.file.videoFile.type) ? Cr(new Ut({ code: qt.MESSAGE_VIDEO_TYPES_LIMIT, message: ''.concat(un) })) : V ? this.handleVideoUpload({ file: e.file.videoFile }) : G ? this.handleVideoUpload(e) : void 0
    } }, { key: 'handleVideoUpload', value: function(e) {
      const t = this; return new Promise((function(n, o) {
        t.upload(e).then((function(e) {
          n(e)
        })).catch((function() {
          t.upload(e).then((function(e) {
            n(e)
          })).catch((function() {
            o(new Ut({ code: qt.MESSAGE_VIDEO_UPLOAD_FAIL, message: sn }))
          }))
        }))
      }))
    } }, { key: 'uploadAudio', value: function(e) {
      return e.file ? e.file.size > 20971520 ? Cr(new Ut({ code: qt.MESSAGE_AUDIO_SIZE_LIMIT, message: ''.concat(rn) })) : 0 === e.file.size ? Cr(new Ut({ code: qt.MESSAGE_FILE_IS_EMPTY, message: ''.concat(Xt) })) : this.upload(e) : Cr(new Ut({ code: qt.MESSAGE_AUDIO_UPLOAD_FAIL, message: on }))
    } }, { key: 'upload', value: function(e) {
      const t = this; if (!Ee(this._cosUploadMethod)) return de.warn('UploadController.upload 没有检测到上传插件，将无法发送图片、音频、视频、文件等类型的消息。详细请参考 https://imsdk-1252463788.file.myqcloud.com/IM_DOC/Web/SDK.html#registerPlugin'), Cr(new Ut({ code: qt.COS_UNDETECTED, message: $t })); const n = new qr(Yr); de.time(Ur); const o = V ? e.file : e.file.files[0]; return new Promise((function(r, i) {
        const s = V ? t._createCosOptionsWXMiniApp(e) : t._createCosOptionsWeb(e); const a = t; t._cosUploadMethod(s, (function(e, s) {
          const u = Object.create(null); if (s) {
            if (e || Ie(s.files) && s.files[0].error) {
              const c = new Ut({ code: qt.MESSAGE_FILE_UPLOAD_FAIL, message: cn }); return n.setError(c, !0, t.getNetworkType()).setEnd(), de.log('UploadController.upload failed, error:', s.files[0].error), 403 === s.files[0].error.statusCode && (de.warn('UploadController.upload failed. cos AccessKeyId was invalid, regain auth key!'), t._getAuthorizationKey()), void i(c)
            }u.fileName = o.name, u.fileSize = o.size, u.fileType = o.type.slice(o.type.indexOf('/') + 1).toLowerCase(), u.location = V ? s.Location : s.files[0].data.Location; const l = de.timeEnd(Ur); const p = a._formatFileSize(o.size); const g = a._formatSpeed(1e3 * o.size / l); const h = 'size='.concat(p, ',time=').concat(l, 'ms,speed=').concat(g); return de.log('UploadController.upload success name='.concat(o.name, ',').concat(h)), r(u), void n.setNetworkType(t.getNetworkType()).setText(h).setEnd()
          } const d = new Ut({ code: qt.MESSAGE_FILE_UPLOAD_FAIL, message: cn }); n.setError(d, !0, a.getNetworkType()).setEnd(), de.warn('UploadController.upload failed, error:', e), 403 === e.statusCode && (de.warn('UploadController.upload failed. cos AccessKeyId was invalid, regain auth key!'), t._getAuthorizationKey()), i(d)
        }))
      }))
    } }, { key: '_formatFileSize', value: function(e) {
      return e < 1024 ? e + 'B' : e < 1048576 ? Math.floor(e / 1024) + 'KB' : Math.floor(e / 1048576) + 'MB'
    } }, { key: '_formatSpeed', value: function(e) {
      return e <= 1048576 ? (e / 1024).toFixed(1) + 'KB/s' : (e / 1048576).toFixed(1) + 'MB/s'
    } }, { key: '_createCosOptionsWeb', value: function(e) {
      const t = this.tim.context.identifier; const n = this._genFileName(t, e.to, e.file.files[0].name); return { files: [{ Bucket: ''.concat(this.bucketName, '-').concat(this.appid), Region: this.region, Key: ''.concat(this.directory, '/').concat(n), Body: e.file.files[0] }], SliceSize: 1048576, onProgress: function(t) {
        if ('function' === typeof e.onProgress) {
          try {
            e.onProgress(t.percent)
          } catch (n) {
            de.warn('onProgress callback error:', n), de.error(n)
          }
        }
      }, onFileFinish: function(e, t, n) {} }
    } }, { key: '_createCosOptionsWXMiniApp', value: function(e) {
      const t = this.tim.context.identifier; const n = this._genFileName(t, e.to, e.file.name); const o = e.file.url; return { Bucket: ''.concat(this.bucketName, '-').concat(this.appid), Region: this.region, Key: ''.concat(this.directory, '/').concat(n), FilePath: o, onProgress: function(t) {
        if (de.log(JSON.stringify(t)), 'function' === typeof e.onProgress) {
          try {
            e.onProgress(t.percent)
          } catch (n) {
            de.warn('onProgress callback error:', n), de.error(n)
          }
        }
      } }
    } }, { key: '_genFileName', value: function(e, t, n) {
      return ''.concat(e, '-').concat(t, '-').concat(we(99999), '-').concat(n)
    } }, { key: 'reset', value: function() {
      this._timer && (clearInterval(this._timer), this._timer = 0)
    } }]), n
  }(mr); const Fs = function(e) {
    c(r, e); const n = v(r); function r(e) {
      let t; return o(this, r), (t = n.call(this, e)).FILETYPE = { SOUND: 2106, FILE: 2107, VIDEO: 2113 }, t._bdh_download_server = 'grouptalk.c2c.qq.com', t._BDHBizID = 10001, t._authKey = '', t._expireTime = 0, t.tim.innerEmitter.on(Mo, t._getAuthKey, f(t)), t
    } return i(r, [{ key: '_getAuthKey', value: function() {
      const e = this; this.request({ name: 'bigDataHallwayAuthKey', action: 'query' }).then((function(t) {
        t.data.authKey && (e._authKey = t.data.authKey, e._expireTime = parseInt(t.data.expireTime))
      }))
    } }, { key: '_isFromOlderVersion', value: function(e) {
      return 2 !== e.content.downloadFlag
    } }, { key: 'parseElements', value: function(e, t) {
      if (!Ie(e) || !t) return []; for (var n = [], o = null, r = 0; r < e.length; r++)o = e[r], this._needParse(o) ? n.push(this._parseElement(o, t)) : n.push(e[r]); return n
    } }, { key: '_needParse', value: function(e) {
      return !(!this._isFromOlderVersion(e) || e.type !== t.MSG_AUDIO && e.type !== t.MSG_FILE && e.type !== t.MSG_VIDEO)
    } }, { key: '_parseElement', value: function(e, n) {
      switch (e.type) {
        case t.MSG_AUDIO: return this._parseAudioElement(e, n); case t.MSG_FILE: return this._parseFileElement(e, n); case t.MSG_VIDEO: return this._parseVideoElement(e, n)
      }
    } }, { key: '_parseAudioElement', value: function(e, t) {
      return e.content.url = this._genAudioUrl(e.content.uuid, t), e
    } }, { key: '_parseFileElement', value: function(e, t) {
      return e.content.url = this._genFileUrl(e.content.uuid, t, e.content.fileName), e
    } }, { key: '_parseVideoElement', value: function(e, t) {
      return e.content.url = this._genVideoUrl(e.content.uuid, t), e
    } }, { key: '_genAudioUrl', value: function(e, t) {
      return '' === this._authKey ? (de.warn('BigDataHallwayController._genAudioUrl no authKey!'), '') : 'https://'.concat(this._bdh_download_server, '/asn.com/stddownload_common_file?authkey=').concat(this._authKey, '&bid=').concat(this._BDHBizID, '&subbid=').concat(this.tim.context.SDKAppID, '&fileid=').concat(e, '&filetype=').concat(this.FILETYPE.SOUND, '&openid=').concat(t, '&ver=0')
    } }, { key: '_genFileUrl', value: function(e, t, n) {
      return '' === this._authKey ? (de.warn('BigDataHallwayController._genFileUrl no authKey!'), '') : (n || (n = ''.concat(Math.floor(1e5 * Math.random()), '-').concat(Date.now())), 'https://'.concat(this._bdh_download_server, '/asn.com/stddownload_common_file?authkey=').concat(this._authKey, '&bid=').concat(this._BDHBizID, '&subbid=').concat(this.tim.context.SDKAppID, '&fileid=').concat(e, '&filetype=').concat(this.FILETYPE.FILE, '&openid=').concat(t, '&ver=0&filename=').concat(encodeURIComponent(n)))
    } }, { key: '_genVideoUrl', value: function(e, t) {
      return '' === this._authKey ? (de.warn('BigDataHallwayController._genVideoUrl no authKey!'), '') : 'https://'.concat(this._bdh_download_server, '/asn.com/stddownload_common_file?authkey=').concat(this._authKey, '&bid=').concat(this._BDHBizID, '&subbid=').concat(this.tim.context.SDKAppID, '&fileid=').concat(e, '&filetype=').concat(this.FILETYPE.VIDEO, '&openid=').concat(t, '&ver=0')
    } }, { key: 'reset', value: function() {
      this._authKey = '', this.expireTime = 0
    } }]), r
  }(mr); const xs = { app_id: '', event_id: '', api_base: 'https://pingtas.qq.com/pingd', prefix: '_mta_', version: '1.3.9', stat_share_app: !1, stat_pull_down_fresh: !1, stat_reach_bottom: !1, stat_param: !0 }; function Vs() {
    try {
      const e = 's' + Ks(); return wx.setStorageSync(xs.prefix + 'ssid', e), e
    } catch (t) {}
  } function Ks(e) {
    for (var t = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], n = 10; 1 < n; n--) {
      var o = Math.floor(10 * Math.random()); const r = t[o]; t[o] = t[n - 1], t[n - 1] = r
    } for (n = o = 0; 5 > n; n++)o = 10 * o + t[n]; return (e || '') + (o + '') + +new Date
  } function Hs() {
    try {
      const e = getCurrentPages(); let t = '/'; return 0 < e.length && (t = e.pop().__route__), t
    } catch (n) {
      console.log('get current page path error:' + n)
    }
  } function Bs() {
    let e; const t = { dm: 'wechat.apps.xx', url: encodeURIComponent(Hs() + Ys(zs.Data.pageQuery)), pvi: '', si: '', ty: 0 }; return t.pvi = ((e = function() {
      try {
        return wx.getStorageSync(xs.prefix + 'auid')
      } catch (t) {}
    }()) || (e = function() {
      try {
        const t = Ks(); return wx.setStorageSync(xs.prefix + 'auid', t), t
      } catch (e) {}
    }(), t.ty = 1), e), t.si = function() {
      let e = function() {
        try {
          return wx.getStorageSync(xs.prefix + 'ssid')
        } catch (e) {}
      }(); return e || (e = Vs()), e
    }(), t
  } function js() {
    const e = function() {
      const e = wx.getSystemInfoSync(); return { adt: encodeURIComponent(e.model), scl: e.pixelRatio, scr: e.windowWidth + 'x' + e.windowHeight, lg: e.language, fl: e.version, jv: encodeURIComponent(e.system), tz: encodeURIComponent(e.platform) }
    }(); return function(e) {
      wx.getNetworkType({ success: function(t) {
        e(t.networkType)
      } })
    }((function(e) {
      try {
        wx.setStorageSync(xs.prefix + 'ntdata', e)
      } catch (t) {}
    })), e.ct = wx.getStorageSync(xs.prefix + 'ntdata') || '4g', e
  } function $s() {
    let e; let t = zs.Data.userInfo; const n = []; for (e in t)t.hasOwnProperty(e) && n.push(e + '=' + t[e]); return t = n.join(';'), { r2: xs.app_id, r4: 'wx', ext: 'v=' + xs.version + (null !== t && '' !== t ? ';ui=' + encodeURIComponent(t) : '') }
  } function Ys(e) {
    if (!xs.stat_param || !e) return ''; e = function(e) {
      if (1 > xs.ignore_params.length) return e; let t; const n = {}; for (t in e)0 <= xs.ignore_params.indexOf(t) || (n[t] = e[t]); return n
    }(e); let t; const n = []; for (t in e)n.push(t + '=' + e[t]); return 0 < n.length ? '?' + n.join('&') : ''
  } var zs = { App: { init: function(e) {
    'appID' in e && (xs.app_id = e.appID), 'eventID' in e && (xs.event_id = e.eventID), 'statShareApp' in e && (xs.stat_share_app = e.statShareApp), 'statPullDownFresh' in e && (xs.stat_pull_down_fresh = e.statPullDownFresh), 'statReachBottom' in e && (xs.stat_reach_bottom = e.statReachBottom), 'ignoreParams' in e && (xs.ignore_params = e.ignoreParams), 'statParam' in e && (xs.stat_param = e.statParam), Vs(); try {
      'lauchOpts' in e && (zs.Data.lanchInfo = e.lauchOpts, zs.Data.lanchInfo.landing = 1)
    } catch (t) {}'autoReport' in e && e.autoReport && function() {
      const e = Page; Page = function(t) {
        const n = t.onLoad; t.onLoad = function(e) {
          n && n.call(this, e), zs.Data.lastPageQuery = zs.Data.pageQuery, zs.Data.pageQuery = e, zs.Data.lastPageUrl = zs.Data.pageUrl, zs.Data.pageUrl = Hs(), zs.Data.show = !1, zs.Page.init()
        }, e(t)
      }
    }()
  } }, Page: { init: function() {
    let e; const t = getCurrentPages()[getCurrentPages().length - 1]; t.onShow && (e = t.onShow, t.onShow = function() {
      if (!0 === zs.Data.show) {
        const t = zs.Data.lastPageQuery; zs.Data.lastPageQuery = zs.Data.pageQuery, zs.Data.pageQuery = t, zs.Data.lastPageUrl = zs.Data.pageUrl, zs.Data.pageUrl = Hs()
      }zs.Data.show = !0, zs.Page.stat(), e.apply(this, arguments)
    }), xs.stat_pull_down_fresh && t.onPullDownRefresh && function() {
      const e = t.onPullDownRefresh; t.onPullDownRefresh = function() {
        zs.Event.stat(xs.prefix + 'pulldownfresh', { url: t.__route__ }), e.apply(this, arguments)
      }
    }(), xs.stat_reach_bottom && t.onReachBottom && function() {
      const e = t.onReachBottom; t.onReachBottom = function() {
        zs.Event.stat(xs.prefix + 'reachbottom', { url: t.__route__ }), e.apply(this, arguments)
      }
    }(), xs.stat_share_app && t.onShareAppMessage && function() {
      const e = t.onShareAppMessage; t.onShareAppMessage = function() {
        return zs.Event.stat(xs.prefix + 'shareapp', { url: t.__route__ }), e.apply(this, arguments)
      }
    }()
  }, multiStat: function(e, t) {
    if (1 == t)zs.Page.stat(e); else {
      const n = getCurrentPages()[getCurrentPages().length - 1]; n.onShow && function() {
        const t = n.onShow; n.onShow = function() {
          zs.Page.stat(e), t.call(this, arguments)
        }
      }()
    }
  }, stat: function(e) {
    if ('' != xs.app_id) {
      const t = []; let n = $s(); if (e && (n.r2 = e), e = [Bs(), n, js()], zs.Data.lanchInfo) {
        e.push({ ht: zs.Data.lanchInfo.scene }), zs.Data.pageQuery && zs.Data.pageQuery._mta_ref_id && e.push({ rarg: zs.Data.pageQuery._mta_ref_id }); try {
          1 == zs.Data.lanchInfo.landing && (n.ext += ';lp=1', zs.Data.lanchInfo.landing = 0)
        } catch (i) {}
      }e.push({ rdm: '/', rurl: 0 >= zs.Data.lastPageUrl.length ? zs.Data.pageUrl + Ys(zs.Data.lastPageQuery) : encodeURIComponent(zs.Data.lastPageUrl + Ys(zs.Data.lastPageQuery)) }), e.push({ rand: +new Date }), n = 0; for (let o = e.length; n < o; n++) for (const r in e[n])e[n].hasOwnProperty(r) && t.push(r + '=' + (void 0 === e[n][r] ? '' : e[n][r])); wx.request({ url: xs.api_base + '?' + t.join('&').toLowerCase() })
    }
  } }, Event: { stat: function(e, t) {
    if ('' != xs.event_id) {
      const n = []; let o = Bs(); let r = $s(); o.dm = 'wxapps.click', o.url = e, r.r2 = xs.event_id; let i; let s = void 0 === t ? {} : t; const a = []; for (i in s)s.hasOwnProperty(i) && a.push(encodeURIComponent(i) + '=' + encodeURIComponent(s[i])); for (s = a.join(';'), r.r5 = s, s = 0, r = (o = [o, r, js(), { rand: +new Date }]).length; s < r; s++) for (const u in o[s])o[s].hasOwnProperty(u) && n.push(u + '=' + (void 0 === o[s][u] ? '' : o[s][u])); wx.request({ url: xs.api_base + '?' + n.join('&').toLowerCase() })
    }
  } }, Data: { userInfo: null, lanchInfo: null, pageQuery: null, lastPageQuery: null, pageUrl: '', lastPageUrl: '', show: !1 } }; const Ws = zs; const Js = function() {
    function e() {
      o(this, e); try {
        Ws.App.init({ appID: '500690995', eventID: '500691014', autoReport: !1, statParam: !0 })
      } catch (t) {}
    } return i(e, [{ key: 'report', value: function(e, t) {
      try {
        Ws.Event.stat(e, t)
      } catch (n) {}
    } }, { key: 'stat', value: function() {
      try {
        Ws.Page.stat()
      } catch (e) {}
    } }]), e
  }(); const Xs = function(e) {
    c(n, e); const t = v(n); function n(e) {
      let r; o(this, n), (r = t.call(this, e)).MTA = new Js; const i = r.tim.innerEmitter; return i.on(ar, r._stat, f(r)), i.on(sr, r._stat, f(r)), r
    } return i(n, [{ key: '_stat', value: function() {
      this.MTA.report('sdkappid', { value: this.tim.context.SDKAppID }), this.MTA.report('version', { value: '2.9.1' }), this.MTA.stat()
    } }]), n
  }(mr); const Qs = function() {
    function e(t) {
      o(this, e), this._table = 'timwebii', this._report = []
    } return i(e, [{ key: 'pushIn', value: function(e) {
      de.debug('SSOLogBody.pushIn', this._report.length, e), this._report.push(e)
    } }, { key: 'backfill', value: function(e) {
      let t; Ie(e) && 0 !== e.length && (de.debug('SSOLogBody.backfill', this._report.length, e.length), (t = this._report).unshift.apply(t, I(e)))
    } }, { key: 'getLogsNumInMemory', value: function() {
      return this._report.length
    } }, { key: 'isEmpty', value: function() {
      return 0 === this._report.length
    } }, { key: '_reset', value: function() {
      this._report.length = 0, this._report = []
    } }, { key: 'getTable', value: function() {
      return this._table
    } }, { key: 'getLogsInMemory', value: function() {
      const e = this._report.slice(); return this._reset(), e
    } }]), e
  }(); const Zs = function(e) {
    c(n, e); const t = v(n); function n(e) {
      let r; return o(this, n), (r = t.call(this, e)).TAG = 'im-ssolog-event', r._reportBody = new Qs, r._version = '2.9.1', r.MIN_THRESHOLD = 20, r.MAX_THRESHOLD = 100, r.WAITING_TIME = 6e4, r.INTERVAL = 2e4, r._timerID = 0, r._resetLastReportTime(), r._startReportTimer(), r._retryCount = 0, r.MAX_RETRY_COUNT = 3, r.tim.innerEmitter.on(Jo, r._onLoginSuccess, f(r)), r
    } return i(n, [{ key: 'reportAtOnce', value: function() {
      de.debug('EventStatController.reportAtOnce'), this._report()
    } }, { key: '_onLoginSuccess', value: function() {
      const e = this; const t = this.tim.storage; const n = t.getItem(this.TAG, !1); !Xe(n) && Ee(n.forEach) && (de.log('EventStatController._onLoginSuccess get ssolog in storage, nums=' + n.length), n.forEach((function(t) {
        e._reportBody.pushIn(t)
      })), t.removeItem(this.TAG, !1))
    } }, { key: 'pushIn', value: function(e) {
      e instanceof qr && (e.setCommonInfo({ SDKAppID: this.tim.context.SDKAppID, version: this._version, tinyID: this.tim.context.tinyID, userID: this.tim.loginInfo.identifier, platform: this.getPlatform(), scene: this.tim.context.scene, instanceID: this.tim.context.instanceID }), this._reportBody.pushIn(e), this._reportBody.getLogsNumInMemory() >= this.MIN_THRESHOLD && this._report())
    } }, { key: '_resetLastReportTime', value: function() {
      this._lastReportTime = Date.now()
    } }, { key: '_startReportTimer', value: function() {
      const e = this; this._timerID = setInterval((function() {
        Date.now() < e._lastReportTime + e.WAITING_TIME || e._reportBody.isEmpty() || e._report()
      }), this.INTERVAL)
    } }, { key: '_stopReportTimer', value: function() {
      this._timerID > 0 && (clearInterval(this._timerID), this._timerID = 0)
    } }, { key: '_report', value: function() {
      const e = this; if (!this._reportBody.isEmpty()) {
        const t = this._reportBody.getLogsInMemory(); this.request({ name: 'ssoEventStat', action: 'create', param: { table: this._reportBody.getTable(), report: t } }).then((function() {
          e._resetLastReportTime(), e._retryCount > 0 && (de.debug('EventStatController.report retry success'), e._retryCount = 0)
        })).catch((function(n) {
          if (de.warn('EventStatController.report, networkType:'.concat(e.getNetworkType(), ' error:').concat(Re(n))), e._reportBody.backfill(t), e._reportBody.getLogsNumInMemory() > e.MAX_THRESHOLD || e._retryCount === e.MAX_RETRY_COUNT || 0 === e._timerID) return e._retryCount = 0, void e._flushAtOnce(); e._retryCount += 1
        }))
      }
    } }, { key: '_flushAtOnce', value: function() {
      const e = this.tim.storage; const t = e.getItem(this.TAG, !1); const n = this._reportBody.getLogsInMemory(); if (Xe(t))de.log('EventStatController._flushAtOnce nums=' + n.length), e.setItem(this.TAG, n, !0, !1); else {
        let o = n.concat(t); o.length > this.MAX_THRESHOLD && (o = o.slice(0, this.MAX_THRESHOLD)), de.log('EventStatController._flushAtOnce nums=' + o.length), e.setItem(this.TAG, o, !0, !1)
      }
    } }, { key: 'reset', value: function() {
      de.log('EventStatController.reset'), this._stopReportTimer(), this._report()
    } }]), n
  }(mr); const ea = 'none'; const ta = 'online'; const na = function() {
    function e() {
      o(this, e), this._networkType = '', this.maxWaitTime = 3e3
    } return i(e, [{ key: 'start', value: function() {
      const e = this; V ? (K.getNetworkType({ success: function(t) {
        e._networkType = t.networkType, t.networkType === ea ? de.warn('NetMonitor no network, please check!') : de.info('NetMonitor networkType:'.concat(t.networkType))
      } }), K.onNetworkStatusChange(this._onNetworkStatusChange.bind(this))) : this._networkType = ta
    } }, { key: '_onNetworkStatusChange', value: function(e) {
      this._networkType = e.networkType, e.isConnected ? de.info('NetMonitor networkType:'.concat(e.networkType)) : de.warn('NetMonitor no network, please check!')
    } }, { key: 'probe', value: function() {
      const e = this; return new Promise((function(t, n) {
        if (V) {
          K.getNetworkType({ success: function(n) {
            e._networkType = n.networkType, n.networkType === ea ? (de.warn('NetMonitor no network, please check!'), t([!1, n.networkType])) : (de.info('NetMonitor networkType:'.concat(n.networkType)), t([!0, n.networkType]))
          } })
        } else if (window && window.fetch) {
          fetch(''.concat(qe(), '//webim-1252463788.file.myqcloud.com/assets/test/speed.xml?random=').concat(Math.random())).then((function(e) {
            e.ok ? t([!0, ta]) : t([!1, ea])
          })).catch((function(e) {
            t([!1, ea])
          }))
        } else {
          const o = new XMLHttpRequest; const r = setTimeout((function() {
            de.warn('NetMonitor fetch timeout. Probably no network, please check!'), o.abort(), e._networkType = ea, t([!1, ea])
          }), e.maxWaitTime); o.onreadystatechange = function() {
            4 === o.readyState && (clearTimeout(r), 200 === o.status || 304 === o.status ? (this._networkType = ta, t([!0, ta])) : (de.warn('NetMonitor fetch status:'.concat(o.status, '. Probably no network, please check!')), this._networkType = ea, t([!1, ea])))
          }, o.open('GET', ''.concat(qe(), '//webim-1252463788.file.myqcloud.com/assets/test/speed.xml?random=').concat(Math.random())), o.send()
        }
      }))
    } }, { key: 'getNetworkType', value: function() {
      return this._networkType
    } }, { key: 'reset', value: function() {
      this._networkType = ''
    } }]), e
  }(); const oa = function() {
    function e(t) {
      const n = this; o(this, e), Ie(t) ? (this._map = new Map, t.forEach((function(e) {
        n._map.set(e, [])
      }))) : de.warn('AverageCalculator.constructor need keys')
    } return i(e, [{ key: 'push', value: function(e, t) {
      return !(Me(e) || !this._map.has(e) || !fe(t)) && (this._map.get(e).push(t), !0)
    } }, { key: 'getSize', value: function(e) {
      return Me(e) || !this._map.has(e) ? -1 : this._map.get(e).length
    } }, { key: 'getAvg', value: function(e) {
      if (Me(e) || !this._map.has(e)) return -1; const t = this._map.get(e); const n = t.length; if (0 === n) return 0; let o = 0; return t.forEach((function(e) {
        o += e
      })), t.length = 0, this._map.set(e, []), parseInt(o / n)
    } }, { key: 'getMax', value: function(e) {
      return Me(e) || !this._map.has(e) ? -1 : Math.max.apply(null, this._map.get(e))
    } }, { key: 'getMin', value: function(e) {
      return Me(e) || !this._map.has(e) ? -1 : Math.min.apply(null, this._map.get(e))
    } }, { key: 'reset', value: function() {
      this._map.forEach((function(e) {
        e.length = 0
      }))
    } }]), e
  }(); const ra = function() {
    function e(t) {
      const n = this; o(this, e), Ie(t) ? (this._map = new Map, t.forEach((function(e) {
        n._map.set(e, { totalCount: 0, successCount: 0 })
      }))) : de.warn('SuccessRateCalculator.constructor need keys')
    } return i(e, [{ key: 'addTotalCount', value: function(e) {
      return !(Me(e) || !this._map.has(e)) && (this._map.get(e).totalCount += 1, !0)
    } }, { key: 'addSuccessCount', value: function(e) {
      return !(Me(e) || !this._map.has(e)) && (this._map.get(e).successCount += 1, !0)
    } }, { key: 'getSuccessRate', value: function(e) {
      if (Me(e) || !this._map.has(e)) return -1; const t = this._map.get(e); if (0 === t.totalCount) return 1; let n = parseFloat((t.successCount / t.totalCount).toFixed(2)); return n > 1 && (n = 1), t.totalCount = t.successCount = 0, n
    } }, { key: 'getTotalCount', value: function(e) {
      return Me(e) || !this._map.has(e) ? -1 : this._map.get(e).totalCount
    } }, { key: 'reset', value: function() {
      this._map.forEach((function(e) {
        e.totalCount = 0, e.successCount = 0
      }))
    } }]), e
  }(); const ia = function(e) {
    c(n, e); const t = v(n); function n(e) {
      let r; return o(this, n), (r = t.call(this, e)).TABLE = 'timwebsum', r.TAG = 'im-ssolog-sumstat', r._items = [Dr, Sr, kr, Ar, Or, Rr, Nr, Lr, wr, Pr], r._thresholdMap = new Map, r._thresholdMap.set(Dr, 100), r._thresholdMap.set(Sr, 150), r._thresholdMap.set(kr, 15), r._thresholdMap.set(Ar, 6), r._thresholdMap.set(Or, 6), r._thresholdMap.set(Rr, 6), r._thresholdMap.set(Nr, 6), r._thresholdMap.set(Lr, 6), r._thresholdMap.set(wr, 50), r._thresholdMap.set(Pr, 50), r._lpID = '', r._platform = r.getPlatform(), r._lastReportTime = 0, r._statInfoArr = [], r._retryCount = 0, r._avgCalc = new oa(r._items), r._successRateCalc = new ra(r._items), r.tim.innerEmitter.on(Jo, r._onLoginSuccess, f(r)), r
    } return i(n, [{ key: '_onLoginSuccess', value: function() {
      const e = this; const t = this.tim.storage; const n = t.getItem(this.TAG, !1); !Xe(n) && Ee(n.forEach) && (de.log('SumStatController._onLoginSuccess get sumstatlog in storage, nums=' + n.length), n.forEach((function(t) {
        e._statInfoArr.push(t)
      })), t.removeItem(this.TAG, !1))
    } }, { key: 'recordLongPollingID', value: function(e) {
      this._lpID = e
    } }, { key: 'addTotalCount', value: function(e) {
      this._successRateCalc.addTotalCount(e) ? 1 === this._successRateCalc.getTotalCount(e) && (this._lastReportTime = Date.now()) : de.warn('SumStatController.addTotalCount invalid key:', e)
    } }, { key: 'addSuccessCount', value: function(e) {
      this._successRateCalc.addSuccessCount(e) || de.warn('SumStatController.addSuccessCount invalid key:', e)
    } }, { key: 'addCost', value: function(e, t) {
      this._avgCalc.push(e, t) ? (de.debug('SumStatController.addCost', e, t, this._avgCalc.getSize(e)), this._avgCalc.getSize(e) >= this._thresholdMap.get(e) && this._report(e)) : de.warn('SumStatController.addCost invalid key or cost:', e, t)
    } }, { key: '_getItemNum', value: function(e) {
      switch (e) {
        case Dr: return 1; case Sr: return 2; case kr: return 3; case wr: return 4; case Pr: return 5; case Ar: return 6; case Or: return 7; case Rr: return 8; case Nr: return 9; case Lr: return 10; default: return 100
      }
    } }, { key: '_getStatInfo', value: function(e) {
      let t = null; return this._avgCalc.getSize(e) > 0 && (t = { SDKAppID: ''.concat(this.tim.context.SDKAppID), version: ''.concat('2.9.1'), tinyID: this.tim.context.tinyID, userID: this.tim.loginInfo.identifier, item: this._getItemNum(e), lpID: e === Dr ? this._lpID : '', platform: this._platform, scene: this.tim.context.scene, networkType: this.getNetworkType(), total: this._successRateCalc.getTotalCount(e), successRate: this._successRateCalc.getSuccessRate(e), avg: this._avgCalc.getAvg(e), timespan: Date.now() - this._lastReportTime, time: Ne() }), t
    } }, { key: '_report', value: function(e) {
      const t = this; let n = []; let o = null; Me(e) ? this._items.forEach((function(e) {
        null !== (o = t._getStatInfo(e)) && n.push(o)
      })) : null !== (o = this._getStatInfo(e)) && n.push(o), de.debug('SumStatController._report', n), this._statInfoArr.length > 0 && (n = n.concat(this.statInfoArr), this._statInfoArr = []), this._doReport(n)
    } }, { key: '_doReport', value: function(e) {
      const t = this; Xe(e) ? de.warn('SumStatController._doReport statInfoArr is empty, do nothing') : this.request({ name: 'ssoSumStat', action: 'create', param: { table: this.TABLE, report: e } }).then((function() {
        t._lastReportTime = Date.now(), t._retryCount > 0 && (de.debug('SumStatController._doReport retry success'), t._retryCount = 0)
      })).catch((function(n) {
        de.warn('SumStatController._doReport, online:'.concat(t.getNetworkType(), ' error:').concat(Re(n)), e), t._retryCount <= 1 ? setTimeout((function() {
          de.info('SumStatController._doReport retry', e), t._retryCount += 1, t._doReport(e)
        }), 5e3) : (t._retryCount = 0, t._statInfoArr = t._statInfoArr.concat(e), t._flushAtOnce())
      }))
    } }, { key: '_flushAtOnce', value: function() {
      const e = this.tim.storage; const t = e.getItem(this.TAG, !1); const n = this._statInfoArr; if (Xe(t))de.log('SumStatController._flushAtOnce nums=' + n.length), e.setItem(this.TAG, n, !0, !1); else {
        let o = n.concat(t); o.length > 10 && (o = o.slice(0, 10)), de.log('SumStatController._flushAtOnce nums=' + o.length), e.setItem(this.TAG, o, !0, !1)
      } this._statInfoArr = []
    } }, { key: 'reset', value: function() {
      de.info('SumStatController.reset'), this._report(), this._avgCalc.reset(), this._successRateCalc.reset()
    } }]), n
  }(mr); const sa = function() {
    function t() {
      o(this, t), this._funcMap = new Map
    } return i(t, [{ key: 'defense', value: function(e, t) {
      const n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0; if ('string' !== typeof e) return null; if (0 === e.length) return null; if ('function' !== typeof t) return null; if (this._funcMap.has(e) && this._funcMap.get(e).has(t)) return this._funcMap.get(e).get(t); this._funcMap.has(e) || this._funcMap.set(e, new Map); let o = null; return this._funcMap.get(e).has(t) ? o = this._funcMap.get(e).get(t) : (o = this._pack(e, t, n), this._funcMap.get(e).set(t, o)), o
    } }, { key: 'defenseOnce', value: function(e, t) {
      const n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0; return 'function' !== typeof t ? null : this._pack(e, t, n)
    } }, { key: 'find', value: function(e, t) {
      return 'string' !== typeof e || 0 === e.length || 'function' !== typeof t ? null : this._funcMap.has(e) ? this._funcMap.get(e).has(t) ? this._funcMap.get(e).get(t) : (de.log('SafetyCallback.find: 找不到 func —— '.concat(e, '/').concat('' !== t.name ? t.name : '[anonymous]')), null) : (de.log('SafetyCallback.find: 找不到 eventName-'.concat(e, ' 对应的 func')), null)
    } }, { key: 'delete', value: function(e, t) {
      return 'function' === typeof t && (!!this._funcMap.has(e) && (!!this._funcMap.get(e).has(t) && (this._funcMap.get(e).delete(t), 0 === this._funcMap.get(e).size && this._funcMap.delete(e), !0)))
    } }, { key: '_pack', value: function(t, n, o) {
      return function() {
        try {
          n.apply(o, Array.from(arguments))
        } catch (a) {
          const r = Object.values(e).indexOf(t); if (-1 !== r) {
            const i = Object.keys(e)[r]; de.warn('接入侧事件 TIM.EVENT.'.concat(i, ' 对应的回调函数逻辑存在问题，请检查！'), a)
          } const s = new qr(Hi); s.setText('eventName='.concat(t)).setMessage(a.message).setEnd()
        }
      }
    } }]), t
  }(); const aa = function(e) {
    c(n, e); const t = v(n); function n(e) {
      let r; return o(this, n), (r = t.call(this, e))._maybeLostSequencesMap = new Map, r
    } return i(n, [{ key: 'onMessageMaybeLost', value: function(e, t, n) {
      this._maybeLostSequencesMap.has(e) || this._maybeLostSequencesMap.set(e, []); for (var o = this._maybeLostSequencesMap.get(e), r = 0; r < n; r++)o.push(t + r); de.debug('MessageLossController.onMessageMaybeLost. maybeLostSequences:'.concat(o))
    } }, { key: 'detectMessageLoss', value: function(e, t) {
      const n = this._maybeLostSequencesMap.get(e); if (!Xe(n) && !Xe(t)) {
        const o = t.filter((function(e) {
          return -1 !== n.indexOf(e)
        })); if (de.debug('MessageLossController.detectMessageLoss. matchedSequences:'.concat(o)), n.length === o.length)de.info('MessageLossController.detectMessageLoss no message loss. conversationID='.concat(e)); else {
          let r; const i = n.filter((function(e) {
            return -1 === o.indexOf(e)
          })); const s = i.length; s <= 5 ? r = e + '-' + i.join('-') : (i.sort((function(e, t) {
            return e - t
          })), r = e + ' start:' + i[0] + ' end:' + i[s - 1] + ' count:' + s), new qr(Gi).setText(r).setNetworkType(this.getNetworkType()).setEnd(), de.warn('MessageLossController.detectMessageLoss message loss detected. conversationID:'.concat(e, ' lostSequences:').concat(i))
        }n.length = 0
      }
    } }, { key: 'reset', value: function() {
      de.log('MessageLossController.reset'), this._maybeLostSequencesMap.clear()
    } }]), n
  }(mr); const ua = function(e) {
    c(r, e); const n = v(r); function r(e) {
      let t; return o(this, r), (t = n.call(this, e))._request = V ? new Yi : new $i, t
    } return i(r, [{ key: 'sendMessage', value: function(e) {
      const t = this; const n = this._constructMessageInstance(e); if (null === n) return Cr({ code: qt.MESSAGE_SEND_FAIL, message: Yt }); const o = Date.now(); const r = Xe(e.GroupId) ? 'openim/sendmsg' : 'group_open_http_svc/send_group_msg'; const i = this.tim.context; const s = i.a2Key; const a = i.tinyID; const u = i.SDKAppID; const c = i.identifier; const l = { url: 'https://' + (!0 === this.tim.context.oversea ? 'api.im.qcloud.com' : 'webim.tim.qq.com') + '/v4/' + r + '?platform=10&websdkappid=537048168&v=1.7.3&a2=' + s + '&tinyid=' + a + '&sdkappid=' + u + '&contentType=json&apn=1&reqtime=' + Date.now() + 'tjg_id=' + this._generateTjgID(n), data: e, method: 'POST' }; this._addSendMessageTotalCount(n); const p = new qr(Wr); return p.setText(''.concat(this._generateTjgID(n), '-').concat(n.from, '-').concat(n.to, '-').concat(n.getElements().length)), this._request.request(l).then((function(e) {
        const r = e.data; const i = r.ErrorCode; const s = r.ErrorInfo; if (0 !== i) return p.setCode(i).setMessage(s).setNetworkType(t.getNetworkType()).setEnd(), n.status = rt.FAIL, Cr(new Ut({ code: i, message: s || Yt, data: { message: n } })); t._addSendMessageSuccessCount(n, o), n.status = rt.SUCCESS; const a = e.data; const u = a.MsgTime; const l = a.MsgSeq; return n.time = u, l && (n.sequence = l), n.generateMessageID(c), t.tim.messageController.pushToMessageList(n), t.emitInnerEvent(Do, { eventDataList: [{ conversationID: n.conversationID, unreadCount: 0, type: n.conversationType, subType: n.conversationSubType, lastMessage: n }] }), Mr(n)
      })).catch((function(e) {
        return t.probeNetwork().then((function(t) {
          const n = y(t, 2); const o = n[0]; const r = n[1]; p.setError(e, o, r).setEnd()
        })), de.warn('ComboMessageController.sendMessage failed. error:', e), n.status = rt.FAIL, Cr(new Ut({ code: qt.MESSAGE_SEND_FAIL, message: Yt, data: { message: n } }))
      }))
    } }, { key: '_constructMessageInstance', value: function(e) {
      let n = null; try {
        const o = this.tim.context.identifier; const r = {}; r.currentUser = o, r.from = e.From_Account || o, e.GroupId ? (r.conversationID = ''.concat(t.CONV_GROUP).concat(e.GroupId), r.conversationType = t.CONV_GROUP, r.to = e.GroupId) : e.To_Account && (r.conversationID = ''.concat(t.CONV_C2C).concat(e.To_Account), r.conversationType = t.CONV_C2C, r.to = e.To_Account), r.time = e.MsgTimeStamp || 0, r.random = e.Random || e.MsgRandom || 0, r.priority = e.MsgPriority, (n = new Qn(r)).status = rt.UNSEND; for (var i, s = e.MsgBody.length, a = 0; a < s; a++)'TIMTextElem' === (i = e.MsgBody[a]).MsgType ? n.setTextElement(i.MsgContent.Text) : 'TIMCustomElem' === i.MsgType ? n.setCustomElement({ data: i.MsgContent.Data || '', description: i.MsgContent.Desc || '', extension: i.MsgContent.Ext || '' }) : 'TIMFaceElem' === i.MsgType && n.setFaceElement({ index: i.MsgContent.Index, data: i.MsgContent.Data }); const u = n.getElements(); n.payload = u[0].content, n.type = u[0].type
      } catch (c) {
        n = null, de.error('ComboMessageController._constructMessageInstance failed. error:', c)
      } return n
    } }, { key: '_addSendMessageSuccessCount', value: function(e, t) {
      const n = this.tim.sumStatController; const o = Math.abs(Date.now() - t); n.addSuccessCount(kr), n.addCost(kr, o); const r = this._getSendMessageSpecifiedKey(e); r && (n.addSuccessCount(r), n.addCost(r, o))
    } }, { key: '_addSendMessageTotalCount', value: function(e) {
      const t = this.tim.sumStatController; t.addTotalCount(kr); const n = this._getSendMessageSpecifiedKey(e); n && t.addTotalCount(n)
    } }, { key: '_getSendMessageSpecifiedKey', value: function(e) {
      if (e.conversationType === t.CONV_C2C) return Ar; if (e.conversationType === t.CONV_GROUP) {
        const n = this.tim.groupController.getLocalGroupProfile(e.to); if (!n) return; const o = n.type; if (Ve(o)) return Or; if (Ke(o)) return Rr; if (He(o)) return Nr; if (Be(o)) return Lr
      }
    } }, { key: '_generateTjgID', value: function(e) {
      return this.tim.context.tinyID + '-' + e.random
    } }, { key: 'reset', value: function() {
      de.info('ComboMessageController.reset')
    } }]), r
  }(mr); const ca = function() {
    function t(e) {
      o(this, t); const n = new qr(Fr); dr.mixin(this), this._initOptions(e), this._initMemberVariables(), this._initControllers(), this._initListener(), qr.bindController(this.eventStatController), n.setText('instanceID='.concat(this.loginInfo.instanceID, '-oversea=').concat(this.loginInfo.oversea, '-mp=').concat(V, '-ua=').concat(B)).setEnd(), de.info('SDK instanceID:'.concat(this.loginInfo.instanceID, ' oversea:').concat(this.loginInfo.oversea, ' inMiniApp:').concat(V, ', SDKAppID:').concat(e.SDKAppID, ', UserAgent:').concat(B)), this._safetyCallbackFactory = new sa
    } return i(t, [{ key: 'login', value: function(e) {
      return de.time(Er), this._ssoLog = new qr(xr), this.netMonitor.start(), this.loginInfo.identifier = e.identifier || e.userID, this.loginInfo.userSig = e.userSig, this.signController.login(this.loginInfo)
    } }, { key: 'logout', value: function() {
      const e = this.signController.logout(); return this.resetSDK(), e
    } }, { key: 'on', value: function(t, n, o) {
      t === e.GROUP_SYSTEM_NOTICE_RECEIVED && de.warn('！！！TIM.EVENT.GROUP_SYSTEM_NOTICE_RECEIVED v2.6.0起弃用，为了更好的体验，请在 TIM.EVENT.MESSAGE_RECEIVED 事件回调内接收处理群系统通知，详细请参考：https://imsdk-1252463788.file.myqcloud.com/IM_DOC/Web/Message.html#.GroupSystemNoticePayload'), de.debug('on', 'eventName:'.concat(t)), this.outerEmitter.on(t, this._safetyCallbackFactory.defense(t, n, o), o)
    } }, { key: 'once', value: function(e, t, n) {
      de.debug('once', 'eventName:'.concat(e)), this.outerEmitter.once(e, this._safetyCallbackFactory.defenseOnce(e, t, n), n || this)
    } }, { key: 'off', value: function(e, t, n, o) {
      de.debug('off', 'eventName:'.concat(e)); const r = this._safetyCallbackFactory.find(e, t); null !== r && (this.outerEmitter.off(e, r, n, o), this._safetyCallbackFactory.delete(e, t))
    } }, { key: 'registerPlugin', value: function(e) {
      const t = this; this.plugins || (this.plugins = {}), Object.keys(e).forEach((function(n) {
        t.plugins[n] = e[n]
      })), new qr(jr).setText('key='.concat(Object.keys(e))).setEnd()
    } }, { key: 'getPlugin', value: function(e) {
      return this.plugins[e] || void 0
    } }, { key: 'setLogLevel', value: function(e) {
      if (e <= 0) {
        console.log(['', ' ________  ______  __       __  __       __  ________  _______', '|        \\|      \\|  \\     /  \\|  \\  _  |  \\|        \\|       \\', ' \\$$$$$$$$ \\$$$$$$| $$\\   /  $$| $$ / \\ | $$| $$$$$$$$| $$$$$$$\\', '   | $$     | $$  | $$$\\ /  $$$| $$/  $\\| $$| $$__    | $$__/ $$', '   | $$     | $$  | $$$$\\  $$$$| $$  $$$\\ $$| $$  \\   | $$    $$', '   | $$     | $$  | $$\\$$ $$ $$| $$ $$\\$$\\$$| $$$$$   | $$$$$$$\\', '   | $$    _| $$_ | $$ \\$$$| $$| $$$$  \\$$$$| $$_____ | $$__/ $$', '   | $$   |   $$ \\| $$  \\$ | $$| $$$    \\$$$| $$     \\| $$    $$', '    \\$$    \\$$$$$$ \\$$      \\$$ \\$$      \\$$ \\$$$$$$$$ \\$$$$$$$', '', ''].join('\n')), console.log('%cIM 智能客服，随时随地解决您的问题 →_→ https://cloud.tencent.com/act/event/smarty-service?from=im-doc', 'color:#ff0000'); console.log(['', '参考以下文档，会更快解决问题哦！(#^.^#)\n', 'SDK 更新日志: https://cloud.tencent.com/document/product/269/38492\n', 'SDK 接口文档: https://imsdk-1252463788.file.myqcloud.com/IM_DOC/Web/SDK.html\n', '常见问题: https://imsdk-1252463788.file.myqcloud.com/IM_DOC/Web/tutorial-01-faq.html\n', '反馈问题？戳我提 issue: https://github.com/tencentyun/TIMSDK/issues\n', '如果您需要在生产环境关闭上面的日志，请 tim.setLogLevel(1)\n'].join('\n'))
      }de.setLevel(e)
    } }, { key: 'destroy', value: function() {
      const t = this; return this.logout().finally((function() {
        t.outerEmitter.emit(e.SDK_DESTROY, { SDKAppID: t.loginInfo.SDKAppID })
      }))
    } }, { key: 'createTextMessage', value: function(e) {
      return this.messageController.createTextMessage(e)
    } }, { key: 'createTextAtMessage', value: function(e) {
      return this.messageController.createTextMessage(e)
    } }, { key: 'createImageMessage', value: function(e) {
      return this.messageController.createImageMessage(e)
    } }, { key: 'createAudioMessage', value: function(e) {
      return this.messageController.createAudioMessage(e)
    } }, { key: 'createVideoMessage', value: function(e) {
      return this.messageController.createVideoMessage(e)
    } }, { key: 'createCustomMessage', value: function(e) {
      return this.messageController.createCustomMessage(e)
    } }, { key: 'createFaceMessage', value: function(e) {
      return this.messageController.createFaceMessage(e)
    } }, { key: 'createFileMessage', value: function(e) {
      return this.messageController.createFileMessage(e)
    } }, { key: 'sendMessage', value: function(e, t) {
      return e instanceof Qn ? this.messageController.sendMessageInstance(e, t) : Cr(new Ut({ code: qt.MESSAGE_SEND_NEED_MESSAGE_INSTANCE, message: Wt }))
    } }, { key: 'callExperimentalAPI', value: function(e, t) {
      return 'sendComboMessage' === e ? this.comboMessageController.sendMessage(t) : Cr(new Ut({ code: qt.INVALID_OPERATION, message: Hn }))
    } }, { key: 'revokeMessage', value: function(e) {
      return this.messageController.revokeMessage(e)
    } }, { key: 'resendMessage', value: function(e) {
      return this.messageController.resendMessage(e)
    } }, { key: 'getMessageList', value: function(e) {
      return this.messageController.getMessageList(e)
    } }, { key: 'setMessageRead', value: function(e) {
      return this.messageController.setMessageRead(e)
    } }, { key: 'getConversationList', value: function() {
      return this.conversationController.getConversationList()
    } }, { key: 'getConversationProfile', value: function(e) {
      return this.conversationController.getConversationProfile(e)
    } }, { key: 'deleteConversation', value: function(e) {
      return this.conversationController.deleteConversation(e)
    } }, { key: 'getMyProfile', value: function() {
      return this.userController.getMyProfile()
    } }, { key: 'getUserProfile', value: function(e) {
      return this.userController.getUserProfile(e)
    } }, { key: 'updateMyProfile', value: function(e) {
      return this.userController.updateMyProfile(e)
    } }, { key: 'getFriendList', value: function() {
      return this.userController.getFriendList()
    } }, { key: 'deleteFriend', value: function(e) {
      return this.userController.deleteFriend(e)
    } }, { key: 'getBlacklist', value: function() {
      return this.userController.getBlacklist()
    } }, { key: 'addToBlacklist', value: function(e) {
      return this.userController.addBlacklist(e)
    } }, { key: 'removeFromBlacklist', value: function(e) {
      return this.userController.deleteBlacklist(e)
    } }, { key: 'getGroupList', value: function(e) {
      return this.groupController.getGroupList(e)
    } }, { key: 'getGroupProfile', value: function(e) {
      return this.groupController.getGroupProfile(e)
    } }, { key: 'createGroup', value: function(e) {
      return this.groupController.createGroup(e)
    } }, { key: 'dismissGroup', value: function(e) {
      return this.groupController.dismissGroup(e)
    } }, { key: 'updateGroupProfile', value: function(e) {
      return this.groupController.updateGroupProfile(e)
    } }, { key: 'joinGroup', value: function(e) {
      return this.groupController.joinGroup(e)
    } }, { key: 'quitGroup', value: function(e) {
      return this.groupController.quitGroup(e)
    } }, { key: 'searchGroupByID', value: function(e) {
      return this.groupController.searchGroupByID(e)
    } }, { key: 'changeGroupOwner', value: function(e) {
      return this.groupController.changeGroupOwner(e)
    } }, { key: 'handleGroupApplication', value: function(e) {
      return this.groupController.handleGroupApplication(e)
    } }, { key: 'setMessageRemindType', value: function(e) {
      return this.groupController.setMessageRemindType(e)
    } }, { key: 'getGroupMemberList', value: function(e) {
      return this.groupController.getGroupMemberList(e)
    } }, { key: 'getGroupMemberProfile', value: function(e) {
      return this.groupController.getGroupMemberProfile(e)
    } }, { key: 'getGroupOnlineMemberCount', value: function(e) {
      return this.groupController.getGroupOnlineMemberCount(e)
    } }, { key: 'addGroupMember', value: function(e) {
      return this.groupController.addGroupMember(e)
    } }, { key: 'deleteGroupMember', value: function(e) {
      return this.groupController.deleteGroupMember(e)
    } }, { key: 'setGroupMemberMuteTime', value: function(e) {
      return this.groupController.setGroupMemberMuteTime(e)
    } }, { key: 'setGroupMemberRole', value: function(e) {
      return this.groupController.setGroupMemberRole(e)
    } }, { key: 'setGroupMemberNameCard', value: function(e) {
      return this.groupController.setGroupMemberNameCard(e)
    } }, { key: 'setGroupMemberCustomField', value: function(e) {
      return this.groupController.setGroupMemberCustomField(e)
    } }, { key: '_initOptions', value: function(e) {
      this.plugins = {}, this._sdkReloadFlag = !1; const t = e.SDKAppID || 0; const n = we(); this.context = { SDKAppID: t, accountType: n }, this.loginInfo = { SDKAppID: t, accountType: n, identifier: null, userSig: null, unlimitedAVChatRoom: e.unlimitedAVChatRoom || !1, scene: e.scene || '', oversea: e.oversea || !1, avchatroomIDList: [], instanceID: Ye() }, this.options = { runLoopNetType: e.runLoopNetType || yt, enablePointer: e.enablePointer || !1 }
    } }, { key: '_initMemberVariables', value: function() {
      this.innerEmitter = new Ns, this.outerEmitter = new Ns, Ir(this.outerEmitter), this.packageConfig = new ws(this), this.storage = new Rs(this), this.netMonitor = new na, this.outerEmitter._emit = this.outerEmitter.emit, this.outerEmitter.emit = function(e, t) {
        const n = arguments[0]; const o = [n, { name: arguments[0], data: arguments[1] }]; this.outerEmitter._emit.apply(this.outerEmitter, o)
      }.bind(this), this.innerEmitter._emit = this.innerEmitter.emit, this.innerEmitter.emit = function(e, t) {
        let n; ye(arguments[1]) && arguments[1].data ? (de.warn('inner eventData has data property, please check!'), n = [e, { name: arguments[0], data: arguments[1].data }]) : n = [e, { name: arguments[0], data: arguments[1] }], this.innerEmitter._emit.apply(this.innerEmitter, n)
      }.bind(this)
    } }, { key: '_initControllers', value: function() {
      this.exceptionController = new Qi(this), this.connectionController = new Xi(this), this.contextController = new _r(this), this.context = this.contextController.getContext(), this.signController = new ji(this), this.messageController = new Is(this), this.comboMessageController = new ua(this), this.conversationController = new hs(this), this.userController = new as(this), this.groupController = new ks(this), this.notificationController = new Us(this), this.bigDataHallwayController = new Fs(this), this.statusController = new As(this), this.uploadController = new qs(this), this.messageLossController = new aa(this), this.eventStatController = new Zs(this), this.sumStatController = new ia(this), this.mtaReportController = new Xs(this), this._initReadyListener()
    } }, { key: '_initListener', value: function() {
      const e = this; if (this.innerEmitter.on(ur, this._onSDKReload, this), V && 'function' === typeof K.onAppShow && 'function' === typeof K.onAppHide) {
        let t = null; K.onAppHide((function() {
          t = new qr(Ki)
        })), K.onAppShow((function() {
          null !== t && t.setNetworkType(e.netMonitor.getNetworkType()).setEnd()
        }))
      }
    } }, { key: '_initReadyListener', value: function() {
      for (var e = this, t = this.readyList, n = 0, o = t.length; n < o; n++) {
        this[t[n]].ready((function() {
          return e._readyHandle()
        }))
      }
    } }, { key: '_onSDKReload', value: function() {
      const e = this; de.log('sdk reloading...'), this.resetSDK(), this.login(this.loginInfo).then((function(t) {
        e._sdkReloadFlag = !0
      }))
    } }, { key: 'resetSDK', value: function() {
      const t = this; this.initList.forEach((function(e) {
        t[e].reset && t[e].reset()
      })), this.netMonitor.reset(), this.storage.reset(), this.resetReady(), this._initReadyListener(), this.outerEmitter.emit(e.SDK_NOT_READY)
    } }, { key: '_readyHandle', value: function() {
      for (var t = this.readyList, n = !0, o = 0, r = t.length; o < r; o++) {
        if (!this[t[o]].isReady()) {
          n = !1; break
        }
      } if (n) {
        const i = de.timeEnd(Er); de.warn('SDK is ready. cost='.concat(i, 'ms')), this.triggerReady(), this.innerEmitter.emit(ar), this.outerEmitter.emit(e.SDK_READY), this._sdkReloadFlag && (this.outerEmitter.emit(e.SDK_RELOAD), this.groupController.AVChatRoomHandler.joinAVChatRoomSilently(), this._sdkReloadFlag = !1), this._ssoLog.setNetworkType(this.netMonitor.getNetworkType()).setText(i).setEnd()
      }
    } }]), t
  }(); ca.prototype.readyList = ['conversationController'], ca.prototype.initList = ['exceptionController', 'connectionController', 'signController', 'contextController', 'messageController', 'comboMessageController', 'conversationController', 'userController', 'groupController', 'notificationController', 'eventStatController', 'sumStatController', 'messageLossController', 'statusController']; const la = { login: 'login', logout: 'logout', destroy: 'destroy', on: 'on', off: 'off', ready: 'ready', setLogLevel: 'setLogLevel', joinGroup: 'joinGroup', quitGroup: 'quitGroup', registerPlugin: 'registerPlugin', getGroupOnlineMemberCount: 'getGroupOnlineMemberCount' }; function pa(e, t) {
    return !(!e.isReady() && void 0 === la[t]) || (e.innerEmitter.emit(er, new Ut({ code: qt.SDK_IS_NOT_READY, message: ''.concat(t, ' ').concat(Bn, '，请参考 https://imsdk-1252463788.file.myqcloud.com/IM_DOC/Web/module-EVENT.html#.SDK_READY') })), !1)
  } const ga = {}; const ha = {}; return ha.create = function(t) {
    if (t.SDKAppID && ga[t.SDKAppID]) return ga[t.SDKAppID]; de.log('TIM.create'); const n = new ca(t); n.on(e.SDK_DESTROY, (function(e) {
      ga[e.data.SDKAppID] = null, delete ga[e.data.SDKAppID]
    })); const o = function(e) {
      const t = Object.create(null); return Object.keys(so).forEach((function(n) {
        if (e[n]) {
          const o = so[n]; const r = new k; t[o] = function() {
            const t = Array.from(arguments); return r.use((function(t, o) {
              return pa(e, n) ? o() : Cr(new Ut({ code: qt.SDK_IS_NOT_READY, message: ''.concat(n, ' ').concat(Bn, '。') }))
            })).use((function(e, t) {
              if (!0 === Qe(e, io[n], o)) return t()
            })).use((function(t, o) {
              return e[n].apply(e, t)
            })), r.run(t)
          }
        }
      })), t
    }(n); return ga[t.SDKAppID] = o, de.log('TIM.create ok'), o
  }, ha.TYPES = t, ha.EVENT = e, ha.VERSION = '2.9.1', de.log('TIM.VERSION: '.concat(ha.VERSION)), ha
}))
