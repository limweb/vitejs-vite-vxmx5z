(() => {
  const t = /(?!\d|-{2}|-\d)[a-zA-Z0-9\u00A0-\uFFFF-_:%-?]/;
  function e(e = '') {
    return t.test(e);
  }
  Map;
  const r = (t) => t.split(/[\s'"`;>=]+/g).filter(e),
    n = { name: 'split', order: 0, extract: ({ code: t }) => new Set(r(t)) };
  const s = '__TAGIFY__',
    a = /<([\w\d-:]+)/g,
    c = (t) => {
      const { prefix: e = '' } = t;
      return {
        name: 'tagify',
        extract: ({ code: t }) =>
          new Set(
            Array.from(t.matchAll(a))
              .filter(({ 1: t }) => t.startsWith(e))
              .map(([, t]) => `__TAGIFY__${t}`)
          ),
      };
    },
    o = (t) => {
      const { extraProperties: e } = t,
        r = `__TAGIFY__${t.prefix ?? ''}`;
      return {
        name: 'tagify',
        match(t) {
          if (!t.startsWith(r)) return;
          const n = t.slice(r.length),
            a = { matcher: n, selector: (t) => t.slice(s.length + 1) };
          return (
            e &&
              (a.body =
                'function' == typeof e
                  ? (t) => [...t, ...Object.entries(e(n) ?? {})]
                  : (t) => [...t, ...Object.entries(e)]),
            a
          );
        },
      };
    },
    i = (t = {}) => {
      const { defaultExtractor: e = !0 } = t,
        r = [o(t)],
        s = [c(t)];
      return (
        e && s.push(n),
        { name: '@unocss/preset-tagify', variants: r, extractors: s }
      );
    };
  (window.preseTagify = i), console.log('-preseTagify----\x3e', i);
})();
//# sourceMappingURL=preseTagify.js.map
