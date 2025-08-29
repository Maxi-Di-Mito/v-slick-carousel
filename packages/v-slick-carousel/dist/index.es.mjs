var bt = Object.defineProperty;
var xt = (e, r, o) => r in e ? bt(e, r, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[r] = o;
var rt = (e, r, o) => xt(e, typeof r != "symbol" ? r + "" : r, o);
import { defineComponent as Le, computed as D, renderSlot as ie, normalizeProps as ce, mergeProps as fe, createElementVNode as pe, normalizeClass as ve, toDisplayString as Pe, openBlock as N, createElementBlock as A, normalizeStyle as ze, Fragment as Z, renderList as J, createBlock as le, resolveDynamicComponent as Me, useSlots as Ct, ref as U, getCurrentInstance as It, watch as de, onMounted as Et, onUpdated as Ot, onBeforeUnmount as Mt, withCtx as _e, guardReactiveProps as Ne, createCommentVNode as De, createVNode as _t } from "vue";
var T = /* @__PURE__ */ ((e) => (e.play = "play", e.playing = "playing", e.paused = "paused", e.hovered = "hovered", e.focused = "focused", e.update = "update", e.leave = "leave", e.blur = "blur", e))(T || {}), at = /* @__PURE__ */ ((e) => (e.ondemand = "ondemand", e.progressive = "progressive", e))(at || {}), V = /* @__PURE__ */ ((e) => (e.left = "left", e.right = "right", e.up = "up", e.down = "down", e.vertical = "vertical", e))(V || {}), z = /* @__PURE__ */ ((e) => (e.next = "next", e.previous = "previous", e))(z || {}), oe = /* @__PURE__ */ ((e) => (e.auto = "auto", e.manual = "manual", e))(oe || {});
const We = (e) => e.flatMap(
  (r) => Nt(r) ? [r] : Array.isArray(r.children) && r.children.length > 0 ? We(r.children) : []
);
function Nt(e) {
  return !e.type.toString().startsWith("Symbol");
}
const Dt = (e, r, o) => {
  var t;
  return (t = e.target) != null && t.tagName.match("TEXTAREA|INPUT|SELECT") || !r ? "" : e.key === "ArrowLeft" ? o ? z.next : z.previous : e.key === "ArrowRight" ? o ? z.previous : z.next : "";
}, Pt = (e, r) => {
  let o;
  const {
    centerMode: t,
    groupsToShow: s,
    groupsToScroll: u,
    slideGroupCount: n,
    currentSlideGroupIndex: g,
    infinite: y,
    infiniteLoopOnEdge: k,
    pivotSlideGroupIndices: L,
    currentPage: x
  } = e;
  if (r.message === z.previous)
    L[x] !== g ? o = L[x] : x === 0 ? t || k ? o = g - 1 : o = -s : o = L[x - 1];
  else if (r.message === z.next)
    x === L.length - 1 ? t || k ? o = g + 1 : o = n + (n % u === 0 ? 0 : s) : o = L[x + 1];
  else if (r.message === "dots") {
    if (o = L[r.index || 0], o === g)
      return null;
  } else if (r.message === "children") {
    if (o = r.index || 0, o === g)
      return null;
    if (y) {
      let m = zt({ ...e, targetSlideGroupIndex: o });
      o > g && m === "left" ? o = o - n : o < g && m === "right" && (o = o + n);
    }
  } else if (r.message === "index" && (o = Number(r.index), o === g))
    return null;
  return o;
}, zt = (e) => e.targetSlideGroupIndex > e.currentSlideGroupIndex ? e.targetSlideGroupIndex > e.currentSlideGroupIndex + Wt(e) ? "left" : "right" : e.targetSlideGroupIndex < e.currentSlideGroupIndex - At(e) ? "right" : "left", Wt = ({
  groupsToShow: e,
  centerMode: r,
  rtl: o,
  centerPadding: t
}) => {
  if (r) {
    let s = (e - 1) / 2 + 1;
    return parseInt(t) > 0 && (s += 1), o && e % 2 === 0 && (s += 1), s;
  }
  return o ? 0 : e - 1;
}, At = ({
  groupsToShow: e,
  centerMode: r,
  rtl: o,
  centerPadding: t
}) => {
  if (r) {
    let s = (e - 1) / 2 + 1;
    return parseInt(t) > 0 && (s += 1), !o && e % 2 === 0 && (s += 1), s;
  }
  return o ? e - 1 : 0;
}, Vt = (e) => {
  let r = e.infinite ? e.slideGroupCount * 2 : e.slideGroupCount, o = e.infinite ? e.groupsToShow * -1 : 0, t = e.infinite ? e.groupsToShow * -1 : 0, s = [];
  for (; o < r; )
    s.push(o), o = t + e.groupsToScroll, t += Math.min(e.groupsToScroll, e.groupsToShow);
  return s;
}, ot = (e, r) => {
  const o = Vt(e);
  let t = 0;
  if (r > o[o.length - 1])
    r = o[o.length - 1];
  else
    for (let s in o) {
      if (r < o[s]) {
        r = t;
        break;
      }
      t = o[s];
    }
  return r;
}, Ht = (e, r, o) => {
  if (!(!r || !o && e.type.indexOf("mouse") !== -1))
    return {
      dragging: !0,
      touchObject: {
        startX: window.TouchEvent && e instanceof TouchEvent ? e.touches[0].pageX : e.clientX,
        startY: window.TouchEvent && e instanceof TouchEvent ? e.touches[0].pageY : e.clientY,
        curX: window.TouchEvent && e instanceof TouchEvent ? e.touches[0].pageX : e.clientX,
        curY: window.TouchEvent && e instanceof TouchEvent ? e.touches[0].pageY : e.clientY
      }
    };
}, it = (e) => {
  var y;
  const r = e.centerMode ? +e.slideGroupWidth * Math.floor(e.groupsToShow / 2) : 0;
  let o;
  const s = e.listEl.querySelectorAll(
    ".v-slick-slide-group"
  );
  if (Array.from(s).every((k) => {
    if (e.vertical) {
      if (k.offsetTop + k.offsetHeight / 2 > e.swipeLeft * -1)
        return o = k, !1;
    } else if (k.offsetLeft - r + k.offsetWidth / 2 > e.swipeLeft * -1)
      return o = k, !1;
    return !0;
  }), !o)
    return 0;
  const u = e.rtl === !0 ? e.slideGroupCount - e.currentSlideGroupIndex : e.currentSlideGroupIndex, n = (y = o == null ? void 0 : o.dataset) == null ? void 0 : y.index;
  return Math.abs(
    n ? parseInt(n) : 0 - u
  );
}, st = (e, r = !1) => {
  let o, t, s, u;
  return o = e.startX - e.curX, t = e.startY - e.curY, s = Math.atan2(t, o), u = Math.round(s * 180 / Math.PI), u < 0 && (u = 360 - Math.abs(u)), u <= 45 && u >= 0 || u <= 360 && u >= 315 ? V.left : u >= 135 && u <= 225 ? V.right : r === !0 ? u >= 35 && u <= 135 ? V.up : V.down : V.vertical;
}, Bt = (e, r) => {
  const {
    dragging: o,
    swipe: t,
    touchObject: s,
    listWidth: u,
    touchThreshold: n,
    verticalSwiping: g,
    listHeight: y,
    currentSlideGroupIndex: k,
    swipeToSlide: L,
    scrolling: x,
    onSwipe: m,
    rtl: G
  } = r;
  if (!o) {
    t && e.cancelable && e.preventDefault();
    return;
  }
  let c = g ? y / n : u / n, h = st(s, g);
  G && (h === V.left ? h = V.right : h === V.right && (h = V.left));
  let w = {
    dragging: !1,
    edgeDragged: !1,
    scrolling: !1,
    swiping: !1,
    swiped: !1,
    swipeLeft: null,
    touchObject: {}
  };
  if (x || !s.swipeLength)
    return w;
  if (s.swipeLength > c) {
    e.cancelable && e.preventDefault(), m && m(h);
    let f, I;
    switch (h) {
      case "left":
      case "up":
        I = r.swipeToSlide ? it(r) : k + r.groupsToScroll, f = L ? ot(r, I) : I, w.currentDirection = 0;
        break;
      case "right":
      case "down":
        I = r.swipeToSlide ? it(r) : k - r.groupsToScroll, f = L ? ot(r, I) : I, w.currentDirection = 1;
        break;
      default:
        f = k;
    }
    w.triggerSlideGroupHandler = f;
  } else {
    let f = he(r);
    w.trackStyle = ct(r, f);
  }
  return w;
};
function Rt(e) {
  return e.centerMode ? Math.floor(e.groupsToShow / 2) + (parseInt(e.centerPadding) > 0 ? 1 : 0) : 0;
}
function jt(e) {
  return e.centerMode ? Math.floor((e.groupsToShow - 1) / 2) + 1 + (parseInt(e.centerPadding) > 0 ? 1 : 0) : e.groupsToShow;
}
function ut(e) {
  return e.currentSlideGroupIndex - Rt(e);
}
function dt(e) {
  return e.currentSlideGroupIndex + jt(e);
}
function He(e) {
  var s;
  let r = [];
  const o = ut(e), t = dt(e);
  for (let u = o; u < t; u++)
    ((s = e.lazyLoadedList) == null ? void 0 : s.indexOf(u)) < 0 && r.push(u);
  return r;
}
function ge(e, r) {
  let o, t;
  const s = e.slideGroupCount + 2 * e.groupsToShow;
  e.vertical ? t = s * parseInt(`${e.slideGroupHeight || 0}`) : o = Xt(e) * parseInt(`${e.slideGroupWidth || 0}`);
  let u = {
    opacity: 1,
    transition: ""
  };
  if (e.useCSSTransform) {
    if (e.slideGroupCount > e.groupsToShow || e.infinite && e.infiniteLoopOnEdge) {
      let n = e.vertical ? "translate3d(0px, " + r + "px, 0px)" : "translate3d(" + r + "px, 0px, 0px)";
      u = {
        ...u,
        transform: n
      };
    }
  } else
    e.vertical ? u.top = r : u.left = r;
  return e.fade && (u = { opacity: 1 }), o && (u.width = o + "px"), t && (u.height = t + "px"), u;
}
function Xt(e) {
  return e.slideGroupCount <= e.groupsToShow ? e.slideGroupCount : $(e) + e.slideGroupCount + Ae(e);
}
function ct(e, r) {
  let o = ge(e, r);
  return e.useCSSTransform ? o.transition = "transform " + e.speed + "ms " + e.cssEase : e.vertical ? o.transition = "top " + e.speed + "ms " + e.cssEase : o.transition = "left " + e.speed + "ms " + e.cssEase, e.ignorePrefersReducedMotion && (o.transition += " !important"), o;
}
function he(e) {
  let {
    centerPadding: r,
    currentSlideGroupIndex: o,
    trackEl: t,
    infinite: s,
    centerMode: u,
    slideGroupCount: n,
    groupsToShow: g,
    groupsToScroll: y,
    slideGroupWidth: k,
    listWidth: L,
    variableWidth: x,
    slideGroupHeight: m,
    fade: G,
    vertical: c,
    rtl: h
  } = e;
  L = L || 0, k = k || 0, m = m || 0;
  let w = 0, f, I, j = 0;
  if (G || n === 1)
    return 0;
  let H = 0;
  if (s ? (H = -$(e), n % y !== 0 && o + y > n && (H = -(o > n ? g - (o - n) : n % y)), u && (H += Math.floor(g / 2))) : (n % y !== 0 && o + y > n && (H = g - n % y), u && (H = Math.floor(g / 2))), w = H * parseInt(`${k}`), j = H * parseInt(`${m}`), c ? f = o * parseInt(`${m}`) * -1 + j : f = o * parseInt(`${k}`) * -1 + w, x) {
    let P;
    P = o + $(e);
    const B = Array.from((t == null ? void 0 : t.childNodes) || []).filter(
      (M) => {
        var W;
        return (W = M == null ? void 0 : M.classList) == null ? void 0 : W.contains("v-slick-slide-group");
      }
    );
    if (I = t && B[P], f = I ? I.offsetLeft * -1 : 0, u) {
      if (P = s ? o + $(e) : o, f = 0, t) {
        I = t.children[P];
        for (let M = 0; M < P; M++)
          t.children[M] && (f -= t.children[M].offsetWidth);
      }
      f -= parseInt(r), I && (f += L - I.offsetWidth / 2);
    }
  }
  return h && (f = -f), f;
}
const Yt = (e) => {
  let {
    waitForAnimate: r,
    animating: o,
    fade: t,
    infinite: s,
    index: u,
    slideGroupCount: n,
    lazyLoadedList: g,
    lazyLoad: y,
    currentSlideGroupIndex: k,
    centerMode: L,
    groupsToScroll: x,
    groupsToShow: m,
    useCSSTransitions: G
  } = e;
  if (r && o || t && !s && (u < 0 || u >= n))
    return;
  let c = u, h, w = {}, f = {};
  if (t)
    return u < 0 ? c += n : u >= n && (c -= n), y && g.indexOf(c) < 0 && g.push(c), w = {
      animating: !0,
      currentSlideGroupIndex: c,
      lazyLoadedList: g
    }, f = { animating: !1 }, {
      slidingState: w,
      afterSlidingState: f
    };
  h = c, c < 0 ? (h = c + n, s ? n % x !== 0 && (h = n - n % x) : h = 0) : !e.canGoNext && c > k ? c = h = k : L && c >= n ? (c = s ? n : n - 1, h = s ? 0 : n - 1) : c >= n && (h = c - n, s ? n % x !== 0 && (h = 0) : h = n - m);
  let I = he({
    ...e,
    currentSlideGroupIndex: h
  }), j = he({
    ...e,
    currentSlideGroupIndex: c
  });
  return s || (j === I && (c = h), j = I), y && (g = g.concat(
    He({
      ...e,
      currentSlideGroupIndex: c
    })
  )), G ? (w = {
    animating: !0,
    currentSlideGroupIndex: h,
    trackStyle: ct(e, j),
    lazyLoadedList: g
  }, f = {
    animating: !1,
    currentSlideGroupIndex: h,
    trackStyle: ge(e, I),
    swipeLeft: void 0
  }, { slidingState: w, afterSlidingState: f }) : (w = {
    currentSlideGroupIndex: h,
    trackStyle: ge(e, I),
    lazyLoadedList: g
  }, {
    slidingState: w,
    afterSlidingState: f
  });
};
function $(e) {
  return e.infinite ? e.variableWidth ? e.slideGroupCount : e.groupsToShow + (e.centerMode ? 1 : 0) : 0;
}
function Ae(e) {
  return e.infinite ? e.slideGroupCount : 0;
}
const qt = (e, r) => {
  const {
    scrolling: o,
    animating: t,
    vertical: s,
    swipeToSlide: u,
    verticalSwiping: n,
    rtl: g,
    currentSlideGroupIndex: y,
    edgeFriction: k,
    edgeDragged: L,
    onEdge: x,
    swiped: m,
    swiping: G,
    slideGroupCount: c,
    groupsToScroll: h,
    infinite: w,
    touchObject: f,
    swipeEvent: I,
    listHeight: j,
    listWidth: H
  } = r;
  if (o) return;
  if (t) {
    e.cancelable && e.preventDefault();
    return;
  }
  s && u && n && e.cancelable && e.preventDefault();
  let P, B = {}, M = he(r);
  f.curX = window.TouchEvent && e instanceof TouchEvent ? e.touches[0].pageX : e.clientX, f.curY = window.TouchEvent && e instanceof TouchEvent ? e.touches[0].pageY : e.clientY, f.swipeLength = Math.round(
    Math.sqrt(Math.pow(f.curX - f.startX, 2))
  );
  let W = Math.round(
    Math.sqrt(Math.pow(f.curY - f.startY, 2))
  );
  if (!n && !G && W > 10)
    return { scrolling: !0 };
  n && (f.swipeLength = W);
  let X = (g ? -1 : 1) * (f.curX > f.startX ? 1 : -1);
  n && (X = f.curY > f.startY ? 1 : -1);
  let Se = Math.ceil(c / h), Y = st(r.touchObject, n), K = f.swipeLength;
  return w || (y === 0 && Y === "right" || y + 1 >= Se && Y === "left" || !r.canGoNext && Y === "left") && (K = Math.round(f.swipeLength * k), L === !1 && x && (x(Y), B.edgeDragged = !0)), !m && I && (I(Y), B.swiped = !0), s ? P = M + K * (j / H) * X : g ? P = M - K * X : P = M + K * X, n && (P = M + K * X), B = {
    ...B,
    touchObject: f,
    swipeLeft: P,
    trackStyle: ge(r, P),
    swipeDirection: Y
  }, Math.abs(f.curX - f.startX) < Math.abs(f.curY - f.startY) * 0.8 || f.swipeLength > 10 && (B.swiping = !0, e.cancelable && e.preventDefault()), B;
};
function ft(e, r) {
  return Math.ceil(e / r);
}
function Ft(e) {
  var x, m, G;
  let r = ft(
    e.slides.length,
    e.groupsToShow
  ), o = Math.ceil(((x = e.listEl) == null ? void 0 : x.offsetWidth) || 0), t = Math.ceil(((m = e.trackEl) == null ? void 0 : m.offsetWidth) || 0), s;
  if (e.vertical)
    s = o;
  else {
    let c = e.centerMode ? parseInt(e.centerPadding) * 2 : 0;
    typeof e.centerPadding == "string" && e.centerPadding.slice(-1) === "%" && (c *= o / 100), s = Math.ceil(
      (o - c) / e.groupsToShow
    );
  }
  let u = e.listEl && e.listEl.querySelector('[data-index="0"]') && ((G = e.listEl.querySelector('[data-index="0"]')) == null ? void 0 : G.offsetHeight) || 0, n = u * e.groupsToShow, g = e.currentSlideGroupIndex === void 0 ? e.initialGroupIndex : e.currentSlideGroupIndex;
  e.rtl && e.currentSlideGroupIndex === void 0 && (g = r - 1 - e.initialGroupIndex);
  let y = e.lazyLoadedList || [], k = He(e);
  y.concat(k);
  let L = {
    slideGroupCount: r,
    slideGroupWidth: s,
    listWidth: o,
    trackWidth: t,
    currentSlideGroupIndex: g,
    slideGroupHeight: u,
    listHeight: n,
    lazyLoadedList: y
  };
  return e.autoplaying === null && e.autoplay && (L.autoplaying = T.playing), L;
}
class Ut {
  constructor() {
    rt(this, "mqlRecords", {});
  }
  register(r, o) {
    this.mqlRecords[r] ? this.addMqlListener(r, o) : (this.mqlRecords[r] = window.matchMedia(r), this.addMqlListener(r, o)), this.mqlRecords[r].matches && o({ matches: !0 });
  }
  unregister(r, o) {
    this.mqlRecords[r] && this.removeMqlListener(r, o);
  }
  addMqlListener(r, o) {
    try {
      this.mqlRecords[r].addEventListener("change", o);
    } catch {
      try {
        this.mqlRecords[r].addListener(o);
      } catch (s) {
        console.error(s);
      }
    }
  }
  removeMqlListener(r, o) {
    try {
      this.mqlRecords[r].removeEventListener("change", o);
    } catch {
      try {
        this.mqlRecords[r].removeListener(o);
      } catch (s) {
        console.error(s);
      }
    }
  }
}
const Kt = () => !!(typeof window < "u" && window.document && window.document.createElement), lt = (e) => Object.keys(e).filter((r) => e[r] !== void 0).reduce((r, o) => (r[o] = e[o], r), {});
function Qt() {
  var e, r;
  window.getSelection && ((e = window.getSelection()) != null && e.empty ? window.getSelection().empty() : (r = window.getSelection()) != null && r.removeAllRanges && window.getSelection().removeAllRanges());
}
function Zt(e) {
  return Object.keys(e).map((o) => {
    let t = e[o];
    return Array.isArray(t) && (t = t.join(" and ")), `(${o}: ${t})`;
  }).join(" and ");
}
function Jt(e, r) {
  const o = setTimeout(e, r);
  return { cancel: () => clearTimeout(o) };
}
const be = (e) => {
  const r = {
    accessibility: { type: Boolean, default: !0 },
    adaptiveHeight: { type: Boolean, default: !1 },
    arrows: { type: Boolean, default: !0 },
    asNavFor: {
      type: Object,
      default: null
    },
    autoplay: { type: Boolean, default: !1 },
    autoplaySpeed: { type: Number, default: 3e3 },
    centerMode: { type: Boolean, default: !1 },
    centerPadding: { type: String, default: "50px" },
    cssEase: { type: String, default: "ease" },
    dots: { type: Boolean, default: !1 },
    draggable: { type: Boolean, default: !0 },
    edgeFriction: { type: Number, default: 0.35 },
    fade: { type: Boolean, default: !1 },
    focusOnSelect: { type: Boolean, default: !1 },
    ignorePrefersReducedMotion: { type: Boolean, default: !1 },
    infinite: { type: Boolean, default: !0 },
    infiniteLoopOnEdge: { type: Boolean, default: !1 },
    initialGroupIndex: { type: Number, default: 0 },
    lazyLoad: { type: String, default: null },
    nextArrowLabel: { type: String, default: "Next" },
    pauseOnDotsHover: { type: Boolean, default: !1 },
    pauseOnFocus: { type: Boolean, default: !1 },
    pauseOnHover: { type: Boolean, default: !0 },
    prevArrowLabel: { type: String, default: "Previous" },
    responsive: { type: Array, default: [] },
    responsiveBehavior: {
      type: String,
      default: "mobile-first"
    },
    rtl: { type: Boolean, default: !1 },
    slidesPerGroup: { type: Number, default: 1 },
    groupsToScroll: { type: Number, default: 1 },
    groupsToShow: { type: Number, default: 1 },
    speed: { type: Number, default: 500 },
    swipe: { type: Boolean, default: !0 },
    swipeToSlide: { type: Boolean, default: !1 },
    touchMove: { type: Boolean, default: !0 },
    touchThreshold: { type: Number, default: 5 },
    unslick: { type: Boolean, default: !1 },
    useCSSTransitions: { type: Boolean, default: !0 },
    useCSSTransform: { type: Boolean, default: !0 },
    variableWidth: { type: Boolean, default: !1 },
    vertical: { type: Boolean, default: !1 },
    verticalSwiping: { type: Boolean, default: !1 },
    waitForAnimate: { type: Boolean, default: !0 },
    widthDetection: { type: String, default: oe.auto }
  };
  return e ? Object.keys(r).reduce((o, t) => (e.includes(t) && (o[t] = r[t]), o), {}) : r;
}, Ve = be(), $t = Object.keys(Ve).reduce((e, r) => (e[r] = Ve[r].default, e), {}), er = () => ({
  animating: !1,
  autoplaying: null,
  autoplayTimer: null,
  currentDirection: 0,
  currentLeft: null,
  currentSlideGroupIndex: 0,
  detectingWidth: !1,
  direction: 1,
  dragging: !1,
  edgeDragged: !1,
  initialized: !1,
  lazyLoadedList: [],
  listHeight: void 0,
  listWidth: void 0,
  scrolling: !1,
  slideGroupHeight: void 0,
  slideGroupWidth: void 0,
  swipeLeft: void 0,
  swiped: !1,
  swiping: !1,
  touchObject: { startX: 0, startY: 0, curX: 0, curY: 0, swipeLength: 0 },
  trackStyle: {},
  trackWidth: 0
}), tr = {
  ...be([
    "centerMode",
    "centerPadding",
    "cssEase",
    "fade",
    "ignorePrefersReducedMotion",
    "infinite",
    "infiniteLoopOnEdge",
    "lazyLoad",
    "rtl",
    "groupsToScroll",
    "groupsToShow",
    "speed",
    "variableWidth",
    "vertical"
  ]),
  currentSlideGroupIndex: { type: Number, default: 0 },
  detectingWidth: { type: Boolean, default: !1 },
  lazyLoadedList: {
    type: Array,
    default: []
  },
  listHeight: { type: Number, default: void 0 },
  trackStyle: { type: Object, default: {} },
  slideGroupCount: { type: Number, default: 0 },
  rawSlideGroups: { type: Array, default: [] },
  slideGroupHeight: { type: [String, Number], default: void 0 },
  slideGroupWidth: { type: [String, Number], default: void 0 }
}, rr = {
  ...be([
    "centerMode",
    "infinite",
    "groupsToShow",
    "prevArrowLabel",
    "nextArrowLabel"
  ]),
  currentSlideGroupIndex: { type: Number, default: 0 },
  disabled: { type: Boolean, default: !1 },
  slideGroupCount: { type: Number, default: 0 },
  type: { type: String, default: "prev" }
}, or = {
  ...be(["infinite", "groupsToScroll", "groupsToShow"]),
  currentSlideGroupIndex: { type: Number, default: 0 },
  slideGroupCount: { type: Number, default: 0 },
  pageCount: { type: Number, default: 0 },
  currentPage: { type: Number, default: 0 }
}, ir = /* @__PURE__ */ Le({
  __name: "VSlickArrow",
  props: rr,
  emits: [z.previous, z.next],
  setup(e, { expose: r, emit: o }) {
    r();
    const t = e, s = o, u = D(() => () => {
      t.disabled || s(t.type);
    }), n = D(() => ({
      currentSlideGroupIndex: t.currentSlideGroupIndex,
      slideGroupCount: t.slideGroupCount,
      onClick: u.value,
      disabled: !t.disabled
    })), g = { props: t, emit: s, clickHandler: u, arrowSlotProps: n, get SlideNavigation() {
      return z;
    } };
    return Object.defineProperty(g, "__isScriptSetup", { enumerable: !1, value: !0 }), g;
  }
}), xe = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [t, s] of r)
    o[t] = s;
  return o;
};
function lr(e, r, o, t, s, u) {
  return e.type === t.SlideNavigation.previous ? ie(e.$slots, "prevArrow", ce(fe({ key: 0 }, t.arrowSlotProps)), () => [
    pe(
      "button",
      {
        type: "button",
        "data-role": "none",
        class: ve(["v-slick-arrow prev", { disabled: e.disabled }]),
        onClick: r[0] || (r[0] = (...n) => t.clickHandler && t.clickHandler(...n))
      },
      Pe(e.prevArrowLabel),
      3
      /* TEXT, CLASS */
    )
  ], !0) : ie(e.$slots, "nextArrow", ce(fe({ key: 1 }, t.arrowSlotProps)), () => [
    pe(
      "button",
      {
        type: "button",
        "data-role": "none",
        class: ve(["v-slick-arrow next", { disabled: e.disabled }]),
        onClick: r[1] || (r[1] = (...n) => t.clickHandler && t.clickHandler(...n))
      },
      Pe(e.nextArrowLabel),
      3
      /* TEXT, CLASS */
    )
  ], !0);
}
const nr = /* @__PURE__ */ xe(ir, [["render", lr], ["__scopeId", "data-v-78e31814"], ["__file", "/Users/maximilianodimito/Documents/PERSONAL/v-slick-carousel/packages/v-slick-carousel/lib/components/VSlickArrow.vue"]]), ar = /* @__PURE__ */ Le({
  __name: "VSlickTrack",
  props: tr,
  emits: ["childClick"],
  setup(e, { expose: r, emit: o }) {
    r();
    const t = e, s = o, u = (m) => {
      let G = !1, c = !1, h = !1, w;
      return t.centerMode ? (w = Math.floor(t.groupsToShow / 2), c = (m - t.currentSlideGroupIndex) % t.slideGroupCount === 0, m > t.currentSlideGroupIndex - w - 1 && m <= t.currentSlideGroupIndex + w && (G = !0)) : G = t.currentSlideGroupIndex <= m && m < t.currentSlideGroupIndex + t.groupsToShow, h = m === t.currentSlideGroupIndex, Object.entries({
        active: G,
        center: c,
        current: h
      }).filter(([, f]) => f).map(([f]) => f);
    }, n = (m) => {
      let G = {};
      if ((t.variableWidth === void 0 || t.variableWidth === !1) && (G.width = typeof t.slideGroupWidth == "number" ? `${t.slideGroupWidth}px` : t.slideGroupWidth), t.fade) {
        if (G.position = "relative", t.vertical) {
          const c = t.slideGroupHeight ? typeof t.slideGroupHeight == "string" ? parseFloat(t.slideGroupHeight) : t.slideGroupHeight : 0;
          G.top = `${-m * c}px`;
        } else {
          const c = t.slideGroupWidth ? typeof t.slideGroupWidth == "string" ? parseFloat(t.slideGroupWidth) : t.slideGroupWidth : 0, h = t.rtl ? m * c : -m * c;
          G.left = `${h}px`;
        }
        G.opacity = t.currentSlideGroupIndex === m ? 1 : 0, G.transition = "opacity " + t.speed + "ms " + t.cssEase + ", visibility " + t.speed + "ms " + t.cssEase, t.ignorePrefersReducedMotion && (G.transition += " !important");
      }
      return G;
    }, g = D(() => t.rawSlideGroups.map((G, c) => {
      const h = n(c), w = u(c);
      t.fade && w.includes("active") && Object.assign(h, { zIndex: 1 });
      const f = {
        slides: [],
        key: `original-${c}`,
        class: w,
        style: h,
        attrs: {
          "data-index": c,
          ...w.includes("active") ? {} : { inert: "true" }
        },
        onClick: () => {
          s("childClick", {
            index: t.rtl && t.infinite ? t.slideGroupCount + c : c
          });
        }
      };
      return (!t.lazyLoad || t.lazyLoad && t.lazyLoadedList.indexOf(c) >= 0) && (f.slides = G), f;
    })), y = D(() => t.infinite && !t.fade && (t.slideGroupCount > t.groupsToShow || t.infiniteLoopOnEdge && t.slideGroupCount >= t.groupsToShow)), k = D(() => y.value ? t.rawSlideGroups.map((G, c) => {
      const h = t.slideGroupCount - c;
      if (h > $(t)) return;
      const w = -h, f = {
        slides: [],
        key: `preclone-${w}`,
        class: u(w),
        style: n(c),
        attrs: {
          "data-index": w,
          inert: "true"
        },
        onClick: () => {
          s("childClick", {
            index: w
          });
        }
      };
      return (w >= ut(t) || !t.lazyLoad || t.lazyLoad && t.lazyLoadedList.indexOf(c) >= 0) && (f.slides = G), f;
    }).filter((G) => G) : []), L = D(() => y.value ? t.rawSlideGroups.map((G, c) => {
      const h = t.slideGroupCount + c, w = {
        slides: [],
        key: `postclone-${h}`,
        class: u(h),
        style: n(c),
        attrs: {
          "data-index": h,
          ...t.infinite && t.slideGroupCount - t.currentSlideGroupIndex < t.groupsToShow && c < t.groupsToShow - (t.slideGroupCount - t.currentSlideGroupIndex) ? {} : { inert: "true" }
        },
        onClick: () => {
          s("childClick", {
            index: t.rtl ? t.slideGroupCount + h : h
          });
        }
      };
      return (h < dt(t) || !t.lazyLoad || t.lazyLoad && t.lazyLoadedList.indexOf(c) >= 0) && (w.slides = G), w;
    }) : []), x = { props: t, emit: s, getSlideGroupClasses: u, getSlideGroupStyle: n, originalSlideGroups: g, shouldClone: y, preCloneSlideGroups: k, postCloneSlideGroups: L };
    return Object.defineProperty(x, "__isScriptSetup", { enumerable: !1, value: !0 }), x;
  }
}), sr = ["onClick"], ur = ["onClick"], dr = ["onClick"];
function cr(e, r, o, t, s, u) {
  return N(), A(
    "div",
    {
      class: ve(["v-slick-track", { center: e.centerMode, vertical: e.vertical }]),
      style: ze([e.trackStyle, e.detectingWidth ? { width: "0 !important" } : {}])
    },
    [
      (N(!0), A(
        Z,
        null,
        J(t.preCloneSlideGroups, (n, g) => (N(), A("div", fe({
          key: n.key,
          tabindex: "-1",
          class: [n.class, "v-slick-slide-group clone"],
          style: n.style,
          ref_for: !0
        }, n.attrs, {
          onClick: n.onClick
        }), [
          (N(!0), A(
            Z,
            null,
            J(n.slides, (y, k) => (N(), le(Me(y), {
              key: `slide-${g}-${k}` + (y.key ? `-${String(y.key)}` : "")
            }))),
            128
            /* KEYED_FRAGMENT */
          ))
        ], 16, sr))),
        128
        /* KEYED_FRAGMENT */
      )),
      (N(!0), A(
        Z,
        null,
        J(t.originalSlideGroups, (n, g) => (N(), A("div", fe({
          key: n.key,
          tabindex: "-1",
          class: ["v-slick-slide-group", n.class],
          style: n.style,
          ref_for: !0
        }, n.attrs, {
          onClick: n.onClick
        }), [
          (N(!0), A(
            Z,
            null,
            J(n.slides, (y, k) => (N(), le(Me(y), {
              key: `slide-${g}-${k}` + (y.key ? `-${String(y.key)}` : "")
            }))),
            128
            /* KEYED_FRAGMENT */
          ))
        ], 16, ur))),
        128
        /* KEYED_FRAGMENT */
      )),
      (N(!0), A(
        Z,
        null,
        J(t.postCloneSlideGroups, (n, g) => (N(), A("div", fe({
          key: n.key,
          tabindex: "-1",
          class: [n.class, "v-slick-slide-group clone"],
          style: n.style,
          ref_for: !0
        }, n.attrs, {
          onClick: n.onClick
        }), [
          (N(!0), A(
            Z,
            null,
            J(n.slides, (y, k) => (N(), le(Me(y), {
              key: `slide-${g}-${k}` + (y.key ? `-${String(y.key)}` : "")
            }))),
            128
            /* KEYED_FRAGMENT */
          ))
        ], 16, dr))),
        128
        /* KEYED_FRAGMENT */
      ))
    ],
    6
    /* CLASS, STYLE */
  );
}
const fr = /* @__PURE__ */ xe(ar, [["render", cr], ["__scopeId", "data-v-97e5688f"], ["__file", "/Users/maximilianodimito/Documents/PERSONAL/v-slick-carousel/packages/v-slick-carousel/lib/components/VSlickTrack.vue"]]), pr = /* @__PURE__ */ Le({
  __name: "VSlickDots",
  props: or,
  emits: ["dotClick", "dotsOver", "dotsLeave"],
  setup(e, { expose: r }) {
    r();
    const o = e, s = { props: o, isActive: (u) => u === o.currentPage };
    return Object.defineProperty(s, "__isScriptSetup", { enumerable: !1, value: !0 }), s;
  }
}), vr = ["onClick"];
function gr(e, r, o, t, s, u) {
  return N(), A(
    "ul",
    {
      class: "v-slick-dots",
      style: { display: "block" },
      onMouseenter: r[0] || (r[0] = (n) => e.$emit("dotsLeave")),
      onMouseleave: r[1] || (r[1] = (n) => e.$emit("dotsLeave")),
      onMouseover: r[2] || (r[2] = (n) => e.$emit("dotsOver"))
    },
    [
      (N(!0), A(
        Z,
        null,
        J(e.pageCount, (n) => (N(), A("li", {
          key: n,
          class: ve({ active: t.isActive(n - 1) }),
          onClick: (g) => e.$emit("dotClick", {
            index: n - 1,
            groupsToScroll: e.groupsToScroll
          })
        }, [
          ie(e.$slots, "customPaging", {
            page: n - 1
          }, () => [
            pe(
              "button",
              null,
              Pe(n),
              1
              /* TEXT */
            )
          ])
        ], 10, vr))),
        128
        /* KEYED_FRAGMENT */
      ))
    ],
    32
    /* NEED_HYDRATION */
  );
}
const hr = /* @__PURE__ */ xe(pr, [["render", gr], ["__file", "/Users/maximilianodimito/Documents/PERSONAL/v-slick-carousel/packages/v-slick-carousel/lib/components/VSlickDots.vue"]]), nt = 50, Sr = /* @__PURE__ */ Le({
  inheritAttrs: !1,
  __name: "VSlickCarousel",
  props: Ve,
  emits: [
    "init",
    "beforeChange",
    "afterChange",
    "lazyLoad",
    "lazyLoadError",
    "reInit",
    "edge",
    "swipe"
  ],
  setup(e, { expose: r, emit: o }) {
    var $e, et, tt;
    const t = e, s = o, u = Ct(), n = Kt() ? new Ut() : void 0;
    let g, y = null, k = null, L = [];
    const x = U({
      ...((tt = (et = ($e = It()) == null ? void 0 : $e.vnode) == null ? void 0 : et.props) == null ? void 0 : tt.style) || {}
    });
    let m = !0, G = null, c = null, h = [];
    const w = (i, l, S) => {
      if (!n) return;
      const v = (p) => {
        p.matches ? l() : S();
      };
      n.register(i, v), h.push({ query: i, handler: v });
    }, f = () => {
      h.forEach(
        ({ query: i, handler: l }) => n == null ? void 0 : n.unregister(i, l)
      ), h = [];
    }, I = () => {
      if (!t.responsive.length) return;
      let i = "min-width";
      t.responsiveBehavior === "desktop-first" && (i = "max-width");
      const l = t.responsive.map((S) => S.breakpoint);
      l.sort((S, v) => S - v), l.forEach((S, v) => {
        const p = Zt({
          [i]: `${S}px`
        }), b = () => {
          ee.value = v === l.length - 1 ? void 0 : l[v + 1];
        }, _ = () => {
          ee.value = v === 0 ? void 0 : l[v + 1];
        };
        w(
          p,
          () => {
            ee.value = S;
          },
          t.responsiveBehavior === "desktop-first" ? b : _
        );
      });
    }, j = (i) => {
      setTimeout(() => {
        i.cancelable && i.preventDefault();
      });
      const l = Ht(
        i,
        a.value.swipe,
        a.value.draggable
      );
      Object.assign(d.value, l);
    }, H = (i) => {
      var p;
      const l = Bt(i, {
        ...a.value,
        ...d.value,
        trackEl: (p = F.value) == null ? void 0 : p.$el,
        listEl: E.value,
        slideGroupIndex: d.value.currentSlideGroupIndex,
        slideGroupCount: O.value
      });
      if (!l) return;
      const { triggerSlideGroupHandler: S, ...v } = l;
      g = S, Object.assign(d.value, v), g !== void 0 && ne(g);
    }, P = (i) => {
      var v;
      Qt();
      const { swipeDirection: l, ...S } = qt(i, {
        ...a.value,
        ...d.value,
        trackEl: (v = F.value) == null ? void 0 : v.$el,
        listEl: E.value,
        slideGroupIndex: d.value.currentSlideGroupIndex,
        slideGroupCount: O.value,
        onEdge: (p) => s("edge", p),
        swipeEvent: (p) => s("swipe", p),
        canGoNext: ae.value
      }) || {};
      (a.value.verticalSwiping && l === V.up || l === V.down || !a.value.verticalSwiping && l === V.left || l === V.right) && i.cancelable && i.preventDefault(), S && (S.swiping && (m = !1), Object.assign(d.value, S));
    }, B = () => {
      let i;
      if (a.value.rtl)
        i = d.value.currentSlideGroupIndex - a.value.groupsToScroll;
      else if (ae.value)
        i = d.value.currentSlideGroupIndex + a.value.groupsToScroll;
      else
        return !1;
      ne(i);
    }, M = (i = null) => {
      d.value.autoplayTimer && (clearInterval(d.value.autoplayTimer), d.value.autoplayTimer = null);
      const l = d.value.autoplaying;
      i === T.paused ? d.value.autoplaying = T.paused : i === T.focused && (l === T.hovered || l === T.playing) ? d.value.autoplaying = T.focused : l === T.playing ? d.value.autoplaying = T.hovered : l === null && (d.value.autoplaying = null);
    }, W = (i) => {
      d.value.autoplayTimer && clearInterval(d.value.autoplayTimer);
      const l = d.value.autoplaying;
      if (i === T.update) {
        if (l === T.hovered || l === T.focused || l === T.paused)
          return;
      } else if (i === T.leave) {
        if (l === T.paused || l === T.focused)
          return;
      } else if (i === T.blur && (l === T.paused || l === T.hovered))
        return;
      d.value.autoplayTimer = setInterval(
        B,
        a.value.autoplaySpeed + 50
      ), d.value.autoplaying = T.playing;
    }, X = () => {
      if (a.value.adaptiveHeight && E.value) {
        const i = E.value.querySelectorAll(
          ".v-slick-slide-group.active"
        );
        let l = 0;
        i.forEach((S) => {
          l = Math.max(l, S.offsetHeight);
        }), E.value.style.height = l + "px";
      }
    }, Se = () => {
      a.value.autoplay && M(T.hovered);
    }, Y = () => {
      a.value.autoplay && d.value.autoplaying === T.hovered && W(T.leave);
    }, K = (i) => {
      m === !1 && (i.stopPropagation(), i.preventDefault()), m = !0;
    }, pt = ({ index: i }) => {
      !a.value.focusOnSelect || a.value.unslick || q({
        message: "children",
        index: i
      });
    }, vt = (i) => {
      if (!a.value.accessibility || a.value.unslick) return;
      const l = Dt(
        i,
        a.value.accessibility,
        a.value.rtl
      );
      l && q({ message: l });
    }, gt = (i) => {
      if (!a.value.touchMove || a.value.unslick) return;
      const l = i.target;
      l != null && l.classList.contains("no-swipe") || j(i);
    }, ye = (i) => {
      if (!d.value.dragging || !a.value.touchMove || a.value.unslick)
        return;
      const l = i.target;
      l != null && l.classList.contains("no-swipe") || P(i);
    }, ke = (i) => {
      !a.value.touchMove || a.value.unslick || H(i);
    }, we = (i) => {
      !d.value.dragging || !a.value.touchMove || a.value.unslick || H(i);
    }, ht = () => {
      !a.value.pauseOnHover || a.value.unslick || Se();
    }, St = () => {
      !a.value.pauseOnHover || a.value.unslick || Y();
    }, yt = () => {
      a.value.pauseOnDotsHover && a.value.autoplay && M(T.hovered);
    }, kt = () => {
      a.value.pauseOnDotsHover && a.value.autoplay && d.value.autoplaying === T.hovered && W(T.leave);
    }, wt = ({ index: i }) => {
      q({
        message: "dots",
        index: i
      });
    }, mt = () => {
      q({
        message: z.next
      });
    }, Gt = () => {
      q({
        message: z.previous
      });
    }, q = (i, l = !1) => {
      const S = {
        ...a.value,
        ...d.value,
        slideGroupCount: O.value,
        pivotSlideGroupIndices: Oe.value,
        currentPage: Ge.value
      }, v = Pt(
        S,
        i
      );
      v != null && ne(
        v,
        l === !0 ? !0 : void 0
      );
    }, ne = async (i, l = !1) => {
      var Te, ue;
      const { asNavFor: S, speed: v } = a.value, p = d.value.currentSlideGroupIndex, b = Yt({
        index: i,
        ...a.value,
        ...d.value,
        slideGroupCount: O.value,
        trackEl: (Te = F.value) == null ? void 0 : Te.$el,
        useCSSTransitions: a.value.useCSSTransitions && !l,
        canGoNext: ae.value
      });
      if (!b) return;
      const { slidingState: _, afterSlidingState: C } = b;
      s(
        "beforeChange",
        p,
        _.currentSlideGroupIndex
      );
      const R = ((ue = _.lazyLoadedList) == null ? void 0 : ue.filter(
        (re) => d.value.lazyLoadedList.indexOf(re) < 0
      )) || [];
      R.length && s("lazyLoad", R), Object.assign(d.value, _), S && S.goTo(i), C && await new Promise((re) => {
        y = setTimeout(() => {
          const { animating: Tt, ...Lt } = C;
          (a.value.waitForAnimate || d.value.currentSlideGroupIndex === _.currentSlideGroupIndex) && Object.assign(d.value, Lt), L.push(
            setTimeout(() => {
              d.value.animating = Tt || !1;
            })
          ), s("afterChange", _.currentSlideGroupIndex), y = null, re();
        }, v);
      });
    }, me = (i) => {
      var b, _;
      const l = Ft({
        ...a.value,
        ...d.value,
        listEl: E.value,
        trackEl: (b = F.value) == null ? void 0 : b.$el,
        slides: se.value
      }), S = {
        ...a.value,
        ...d,
        ...l,
        trackEl: (_ = F.value) == null ? void 0 : _.$el,
        slideGroupCount: O.value
      }, v = he(S), p = ge(S, v);
      (i || O.value !== S.slideGroupCount) && (l.trackStyle = p), Object.assign(d.value, l);
    }, Be = async (i = {
      shouldSetTrackStyle: !0
    }) => {
      !F.value || !F.value.$el || (a.value.widthDetection === oe.manual && i.isWindowResize && await Ie(), me(
        i.shouldSetTrackStyle || a.value.widthDetection === oe.manual && i.isWindowResize
      ), a.value.autoplay ? W(T.update) : M());
    }, Q = (i) => {
      G == null || G.cancel(), G = Jt(() => Be(i), nt);
    }, Ce = () => Q({
      isWindowResize: !0
    }), Re = () => {
      a.value.autoplay && M(T.focused);
    }, je = () => {
      a.value.autoplay && d.value.autoplaying === T.focused && W(T.blur);
    }, Xe = () => {
      const i = [], l = { ...a.value, ...d.value }, S = Ae({
        ...l,
        slideGroupCount: O.value
      }), v = $({
        ...l,
        slideGroupCount: O.value
      });
      for (let p = d.value.currentSlideGroupIndex; p < O.value + S; p++)
        if (d.value.lazyLoadedList.indexOf(p) < 0) {
          i.push(p);
          break;
        }
      for (let p = d.value.currentSlideGroupIndex - 1; p >= -v; p--)
        if (d.value.lazyLoadedList.indexOf(p) < 0) {
          i.push(p);
          break;
        }
      i.length > 0 ? (d.value.lazyLoadedList = d.value.lazyLoadedList.concat(i), s("lazyLoad", i)) : k && (clearInterval(k), k = null);
    }, Ye = () => {
      var v;
      const i = (v = E.value) == null ? void 0 : v.querySelectorAll(
        ".v-slick-slide-group img"
      ), l = (i == null ? void 0 : i.length) || 0;
      let S = 0;
      i == null || i.forEach((p) => {
        const b = () => {
          ++S >= l && Q();
        };
        if (!p.onclick)
          p.onclick = () => {
            var _;
            (_ = p.closest(".v-slick-slide-group")) == null || _.focus();
          };
        else {
          const _ = p.onclick.bind(p);
          p.onclick = (C) => {
            var R;
            _(C), (R = p.closest(".v-slick-slide-group")) == null || R.focus();
          };
        }
        if (p.onload)
          p.onload = b, p.onerror = () => {
            b(), s("lazyLoadError");
          };
        else {
          if (!a.value.lazyLoad) return;
          p.onload = () => {
            X(), L.push(setTimeout(Q, a.value.speed));
          };
        }
      });
    }, Ie = async () => (d.value.detectingWidth = !0, new Promise(
      (i) => setTimeout(() => {
        var l;
        Object.assign(Ue.value, {
          width: `${(l = Fe.value) == null ? void 0 : l.offsetWidth}px`
        }), d.value.detectingWidth = !1, i();
      })
    )), qe = () => {
      const i = {
        ...a.value,
        ...d.value,
        slideGroupCount: O.value
      }, l = $(i), S = Ae(i);
      if (a.value.variableWidth) {
        let v = [], p = [];
        const b = [];
        Ze.value.forEach((C) => {
          let R = 0;
          C.forEach((Te) => {
            var re;
            const { width: ue } = ((re = Te.props) == null ? void 0 : re.style) || {};
            ue && (R = Math.max(R, ue));
          }), b.push(R), v.push(R);
        });
        for (let C = 0; C < l; C++)
          p.push(b[b.length - 1 - C]), v.push(b[b.length - 1 - C]);
        for (let C = 0; C < S; C++)
          v.push(b[C]);
        for (let C = 0; C < d.value.currentSlideGroupIndex; C++)
          p.push(b[C]);
        v = v.filter((C) => C), p = p.filter((C) => C);
        const _ = {
          width: `calc(${v.join(" + ")})`,
          left: `calc(${p.map((C) => `-${C}`).join(" + ")})`
        };
        if (a.value.centerMode) {
          const C = b[d.value.currentSlideGroupIndex];
          _.left = `calc(${p.map((R) => `-${R}`).join(" + ")} + (100% - ${C}) / 2 )`;
        }
        d.value.trackStyle = _;
      } else {
        const v = l + S + O.value, p = 100 / a.value.groupsToShow * v, b = 100 / v;
        let _ = -b * (l + d.value.currentSlideGroupIndex) * p / 100;
        a.value.centerMode && (_ += (100 - b * p / 100) / 2), d.value.slideGroupWidth = b + "%", d.value.trackStyle = {
          width: p + "%",
          left: _ + "%"
        };
      }
    }, ee = U(), Fe = U(), Ue = U({}), E = U(), F = U(), a = D(() => {
      const i = lt(t);
      let l = { ...$t, ...i };
      if (ee.value) {
        const S = t.responsive.find(
          (v) => v.breakpoint === ee.value
        );
        l = {
          ...l,
          ...S == null ? void 0 : S.settings
        };
      }
      return l.centerMode && (l.groupsToScroll > 1 && process.env.NODE_ENV !== "production" && console.warn(
        `centerMode is enabled: groupsToScroll should be 1; you are using ${l.groupsToScroll}`
      ), l.groupsToScroll = 1, l.infinite && (l.infiniteLoopOnEdge = !0)), l.fade && (l.groupsToShow > 1 && process.env.NODE_ENV !== "production" && console.warn(
        `fade is enabled: groupsToShow should be 1; you are using ${l.groupsToShow}`
      ), l.groupsToScroll > 1 && process.env.NODE_ENV !== "production" && console.warn(
        `fade is enabled: groupsToScroll should be 1; you are using ${l.groupsToScroll}`
      ), l.groupsToShow = 1, l.groupsToScroll = 1), l.infiniteLoopOnEdge && (!l.infinite && process.env.NODE_ENV !== "production" && console.warn(
        "infiniteLoopOnEdge is enabled: infinite needs to be enabled for this option to work"
      ), l.groupsToScroll > 1 && process.env.NODE_ENV !== "production" && console.warn(
        `infiniteLoopOnEdge is enabled: groupsToScroll needs to be 1 for this option to work; you are using ${l.groupsToScroll}`
      )), l.slidesPerGroup > 1 && (l.variableWidth && process.env.NODE_ENV !== "production" && console.warn("slidesPerGroup is bigger than 1: variableWidth is disabled"), l.variableWidth = !1), l.vertical && l.rtl && (process.env.NODE_ENV !== "production" && console.warn("vertical mode is enabled: rtl is disabled"), l.rtl = !1), l.groupsToScroll > l.groupsToShow && (process.env.NODE_ENV !== "production" && console.warn(
        `groupsToScroll (${l.groupsToScroll}) can be at most groupsToShow (${l.groupsToShow})`
      ), l.groupsToScroll = l.groupsToShow), l.unslick && (l.dots = !1, l.arrows = !1, l.autoplay = !1, l.infinite = !1, l.draggable = !1, l.fade = !1, l.centerMode = !1), l;
    }), Ke = D(
      () => a.value.infinite && (a.value.infiniteLoopOnEdge && O.value >= a.value.groupsToShow || O.value > a.value.groupsToShow) || Ge.value > 0
    ), ae = D(
      () => a.value.infinite && (a.value.infiniteLoopOnEdge && O.value >= a.value.groupsToShow || O.value > a.value.groupsToShow) || te.value > Ge.value + 1
    ), se = U(u.default ? We(u.default()) : []), d = U({
      ...er(),
      currentSlideGroupIndex: a.value.initialGroupIndex
    }), Ee = D(
      () => d.value.currentSlideGroupIndex
    ), Qe = D(() => a.value.groupsToShow), O = D(
      () => ft(se.value.length, a.value.slidesPerGroup)
    ), te = D(() => a.value.infinite && a.value.infiniteLoopOnEdge && a.value.groupsToScroll === 1 && O.value >= a.value.groupsToShow ? O.value : Math.ceil(
      Math.max(
        O.value - a.value.groupsToShow + (a.value.centerMode ? a.value.infinite ? a.value.groupsToShow - 1 : Math.floor(a.value.groupsToShow / 2) : 0),
        0
      ) / a.value.groupsToScroll
    ) + 1), Oe = D(() => Array.from({ length: te.value }, (i, l) => {
      if (l !== te.value - 1 || a.value.infinite && (a.value.centerMode || a.value.infiniteLoopOnEdge))
        return l * a.value.groupsToScroll;
      const S = (O.value - (l - 1) * a.value.groupsToScroll) % a.value.groupsToShow;
      return S === 0 ? l * a.value.groupsToScroll : (l - 1) * a.value.groupsToScroll + S;
    })), Ge = D(() => {
      const i = Oe.value.findIndex(
        (l) => l > Ee.value
      );
      return i === -1 ? te.value - 1 : i - 1;
    }), Ze = D(() => {
      const i = [], l = a.value.slidesPerGroup, S = O.value;
      for (let v = 0; v < S; v++) {
        const p = v * l, b = p + l;
        i.push(se.value.slice(p, b));
      }
      return i;
    });
    de(
      () => t.responsive,
      () => {
        f(), I();
      },
      { deep: !0 }
    ), de(
      a,
      (i, l) => {
        let S = !1;
        for (const v of Object.keys(a.value)) {
          if (!i.hasOwnProperty(v)) {
            S = !0;
            break;
          }
          if (!(typeof i[v] == "object" || typeof i[v] == "function") && i[v] !== l[v]) {
            S = !0;
            break;
          }
        }
        me(S), d.value.currentSlideGroupIndex >= O.value && q({
          message: "index",
          index: O.value - i.groupsToShow
        }), i.autoplay ? W(T.play) : M(T.paused);
      },
      {
        deep: !0
      }
    ), de(
      () => {
        var i;
        return ((i = u.default) == null ? void 0 : i.call(u)) || [];
      },
      (i) => {
        se.value = We(i);
      }
    ), de(
      () => [
        d.value.listHeight,
        a.value.centerMode,
        a.value.centerPadding,
        a.value.vertical
      ],
      ([i, l, S, v]) => {
        let p = {
          height: "auto"
        };
        v && (p = {
          height: `${i}px`
        });
        let b;
        l ? v ? b = {
          padding: S + " 0px"
        } : b = {
          padding: "0px " + S
        } : b = {
          padding: "0"
        }, x.value = {
          ...x.value,
          ...lt(p),
          ...b
        };
      }
    ), de(
      () => d.value.dragging,
      (i) => {
        E.value && (i ? (E.value.onmousemove = ye, E.value.addEventListener(
          "touchmove",
          ye,
          { passive: !1 }
        ), E.value.onmouseup = ke, E.value.addEventListener(
          "touchend",
          ke,
          { passive: !1 }
        ), E.value.onmouseleave = we, E.value.addEventListener(
          "touchcancel",
          we,
          { passive: !1 }
        )) : (E.value.onmousemove = null, E.value.removeEventListener(
          "touchmove",
          ye
        ), E.value.onmouseup = null, E.value.removeEventListener(
          "touchend",
          ke
        ), E.value.onmouseleave = null, E.value.removeEventListener(
          "touchcancel",
          we
        )));
      }
    ), r({
      goTo: ne,
      next: () => q({ message: z.next }),
      prev: () => q({ message: z.previous }),
      canGoNext: ae,
      canGoPrev: Ke,
      play: B,
      pause: M,
      autoPlay: W,
      slideGroupCount: O,
      currentSlideGroupIndex: Ee,
      currentGroupsToShow: Qe,
      pageCount: te
    }), Et(async () => {
      var i;
      window.addEventListener("resize", Ce), a.value.widthDetection === oe.manual && await Ie(), me(!0), X(), a.value.autoplay && W(T.update), a.value.lazyLoad === at.progressive && (k = setInterval(Xe, 1e3)), c = new ResizeObserver(() => {
        d.value.animating ? (Q({ shouldSetTrackStyle: !1 }), L.push(setTimeout(() => Q(), a.value.speed))) : Q();
      }), c.observe(E.value), (i = E.value) == null || i.querySelectorAll(".v-slick-slide-group").forEach((l) => {
        l.onfocus = a.value.pauseOnFocus ? Re : null, l.onblur = a.value.pauseOnFocus ? je : null;
      });
    }), Ot(() => {
      if (Ye(), s("reInit"), a.value.lazyLoad) {
        const i = He({
          ...a.value,
          ...d.value
        });
        i.length && (d.value.lazyLoadedList = d.value.lazyLoadedList.concat(i), s("lazyLoad", i));
      }
      X();
    }), Mt(() => {
      window.removeEventListener("resize", Ce), c == null || c.unobserve(E.value), y && clearTimeout(y), k && clearInterval(k), L.length && (L.forEach((i) => clearTimeout(i)), L = []), d.value.autoplayTimer && clearInterval(d.value.autoplayTimer);
    }), I(), qe(), s("init");
    const Je = { props: t, emit: s, slots: u, enquire: n, DEBOUNCE_RESIZE_DURATION: nt, get triggerSlideGroupHandler() {
      return g;
    }, set triggerSlideGroupHandler(i) {
      g = i;
    }, get animationEndCallback() {
      return y;
    }, set animationEndCallback(i) {
      y = i;
    }, get lazyLoadTimer() {
      return k;
    }, set lazyLoadTimer(i) {
      k = i;
    }, get callbackTimers() {
      return L;
    }, set callbackTimers(i) {
      L = i;
    }, vSlickListStyle: x, get isVSlickListClickable() {
      return m;
    }, set isVSlickListClickable(i) {
      m = i;
    }, get debouncedResize() {
      return G;
    }, set debouncedResize(i) {
      G = i;
    }, get ro() {
      return c;
    }, set ro(i) {
      c = i;
    }, get responsiveMediaHandlers() {
      return h;
    }, set responsiveMediaHandlers(i) {
      h = i;
    }, media: w, clearBreakpoints: f, makeBreakpoints: I, swipeStart: j, swipeEnd: H, swipeMove: P, play: B, pause: M, autoPlay: W, adaptHeight: X, onTrackOver: Se, onTrackLeave: Y, handleClickVSlickList: K, handleChildClickVSlickTrack: pt, handleKeyDownVSlickList: vt, handleMouseDownOrTouchStartVSlickList: gt, handleMouseMoveOrTouchMoveVSlickList: ye, handleMouseUpOrTouchEndVSlickList: ke, handleMouseLeaveOrTouchCancelVSlickList: we, handleMouseEnterOrOverVSlickTrack: ht, handleMouseLeaveVSlickTrack: St, handleOverDots: yt, handleLeaveDots: kt, handleClickDot: wt, handleNextVSlickArrow: mt, handlePrevVSlickArrow: Gt, changeSlideGroup: q, slideGroupHandler: ne, updateState: me, resize: Be, onResize: Q, onResizeEventListener: Ce, onSlideGroupFocus: Re, onSlideGroupBlur: je, progressiveLazyLoad: Xe, checkImagesLoad: Ye, detectWidth: Ie, ssrInit: qe, breakpoint: ee, vSlickCarouselRef: Fe, vSlickCarouselStyle: Ue, vSlickListRef: E, vSlickTrackRef: F, settings: a, canGoPrev: Ke, canGoNext: ae, slides: se, state: d, currentSlideGroupIndex: Ee, currentGroupsToShow: Qe, slideGroupCount: O, pageCount: te, pivotSlideGroupIndices: Oe, currentPage: Ge, rawSlideGroups: Ze, get SlideNavigation() {
      return z;
    }, get WidthDetection() {
      return oe;
    }, VSlickArrow: nr, VSlickTrack: fr, VSlickDots: hr };
    return Object.defineProperty(Je, "__isScriptSetup", { enumerable: !1, value: !0 }), Je;
  }
}), yr = ["dir"];
function kr(e, r, o, t, s, u) {
  return N(), A(
    "div",
    {
      ref: "vSlickCarouselRef",
      class: "v-slick-carousel",
      style: ze(
        e.widthDetection === t.WidthDetection.manual ? t.state.detectingWidth ? { width: "100%" } : t.vSlickCarouselStyle : {}
      )
    },
    [
      pe("div", {
        class: "v-slick-slider",
        dir: t.settings.rtl ? "rtl" : "ltr"
      }, [
        t.settings.arrows && !t.settings.unslick ? (N(), le(t.VSlickArrow, {
          key: 0,
          type: t.SlideNavigation.previous,
          "center-mode": t.settings.centerMode,
          infinite: t.settings.infinite,
          "groups-to-show": t.settings.groupsToShow,
          "slide-group-count": t.slideGroupCount,
          "current-slide-group-index": t.state.currentSlideGroupIndex,
          disabled: !t.canGoPrev,
          onPrevious: t.handlePrevVSlickArrow
        }, {
          prevArrow: _e((n) => [
            ie(e.$slots, "prevArrow", ce(Ne(n)), void 0, !0)
          ]),
          _: 3
          /* FORWARDED */
        }, 8, ["type", "center-mode", "infinite", "groups-to-show", "slide-group-count", "current-slide-group-index", "disabled"])) : De("v-if", !0),
        pe(
          "div",
          {
            ref: "vSlickListRef",
            class: ve(["v-slick-list", { dragging: t.state.dragging }]),
            style: ze(t.vSlickListStyle),
            onClick: t.handleClickVSlickList,
            onMousedown: t.handleMouseDownOrTouchStartVSlickList,
            onTouchstartPassive: t.handleMouseDownOrTouchStartVSlickList,
            onKeydown: t.handleKeyDownVSlickList
          },
          [
            _t(t.VSlickTrack, {
              ref: "vSlickTrackRef",
              "center-mode": t.settings.centerMode,
              "center-padding": t.settings.centerPadding,
              "raw-slide-groups": t.rawSlideGroups,
              "css-ease": e.cssEase,
              "current-slide-group-index": t.state.currentSlideGroupIndex,
              "detecting-width": t.state.detectingWidth,
              fade: t.settings.fade,
              "ignore-prefers-reduced-motion": t.settings.ignorePrefersReducedMotion,
              infinite: t.settings.infinite,
              "infinite-loop-on-edge": t.settings.infiniteLoopOnEdge,
              "lazy-load": t.settings.lazyLoad,
              "lazy-loaded-list": t.state.lazyLoadedList,
              "list-height": t.state.listHeight,
              rtl: t.settings.rtl,
              "slide-group-count": t.slideGroupCount,
              "slide-group-height": t.state.slideGroupHeight,
              "slide-group-width": t.state.slideGroupWidth,
              "groups-to-scroll": t.settings.groupsToScroll,
              "groups-to-show": t.settings.groupsToShow,
              speed: t.settings.speed,
              "track-style": t.state.trackStyle,
              "variable-width": t.settings.variableWidth,
              vertical: t.settings.vertical,
              onMouseenter: t.handleMouseEnterOrOverVSlickTrack,
              onMouseleave: t.handleMouseLeaveVSlickTrack,
              onMouseover: t.handleMouseEnterOrOverVSlickTrack,
              onChildClick: t.handleChildClickVSlickTrack
            }, null, 8, ["center-mode", "center-padding", "raw-slide-groups", "css-ease", "current-slide-group-index", "detecting-width", "fade", "ignore-prefers-reduced-motion", "infinite", "infinite-loop-on-edge", "lazy-load", "lazy-loaded-list", "list-height", "rtl", "slide-group-count", "slide-group-height", "slide-group-width", "groups-to-scroll", "groups-to-show", "speed", "track-style", "variable-width", "vertical"])
          ],
          38
          /* CLASS, STYLE, NEED_HYDRATION */
        ),
        t.settings.arrows && !t.settings.unslick ? (N(), le(t.VSlickArrow, {
          key: 1,
          type: t.SlideNavigation.next,
          "center-mode": t.settings.centerMode,
          infinite: t.settings.infinite,
          "groups-to-show": t.settings.groupsToShow,
          "slide-group-count": t.slideGroupCount,
          "current-slide-group-index": t.state.currentSlideGroupIndex,
          disabled: !t.canGoNext,
          onNext: t.handleNextVSlickArrow
        }, {
          nextArrow: _e((n) => [
            ie(e.$slots, "nextArrow", ce(Ne(n)), void 0, !0)
          ]),
          _: 3
          /* FORWARDED */
        }, 8, ["type", "center-mode", "infinite", "groups-to-show", "slide-group-count", "current-slide-group-index", "disabled"])) : De("v-if", !0)
      ], 8, yr),
      t.settings.dots && !t.settings.unslick ? (N(), le(t.VSlickDots, {
        key: 0,
        "current-slide-group-index": t.state.currentSlideGroupIndex,
        infinite: t.settings.infinite,
        "slide-group-count": t.slideGroupCount,
        "groups-to-scroll": t.settings.groupsToScroll,
        "groups-to-show": t.settings.groupsToShow,
        "page-count": t.pageCount,
        "current-page": t.currentPage,
        onDotClick: t.handleClickDot,
        onDotsOver: t.handleOverDots,
        onDotsLeave: t.handleLeaveDots
      }, {
        customPaging: _e((n) => [
          ie(e.$slots, "customPaging", ce(Ne(n)), void 0, !0)
        ]),
        _: 3
        /* FORWARDED */
      }, 8, ["current-slide-group-index", "infinite", "slide-group-count", "groups-to-scroll", "groups-to-show", "page-count", "current-page"])) : De("v-if", !0)
    ],
    4
    /* STYLE */
  );
}
const Gr = /* @__PURE__ */ xe(Sr, [["render", kr], ["__scopeId", "data-v-08a0b0f3"], ["__file", "/Users/maximilianodimito/Documents/PERSONAL/v-slick-carousel/packages/v-slick-carousel/lib/components/VSlickCarousel.vue"]]);
export {
  at as LazyLoadType,
  T as PlayingType,
  z as SlideNavigation,
  V as SwipeDirection,
  Gr as VSlickCarousel,
  oe as WidthDetection
};
//# sourceMappingURL=index.es.mjs.map
