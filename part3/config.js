/* ============================================================
   【结构柱模板搭设工艺样板展示】配置文件 —— 只改这个文件
   ============================================================ */

/* ① 换照片或改文字后 +1，否则微信一直显示旧的 */
window.VERSION = '1';

/* ② 板块名称（页面顶部大字 + 微信标题） */
window.TITLE = '结构柱模板搭设工艺样板展示';

/* ③ 副标题（顶部小字），不需要就写 '' */
window.SUBTITLE = 'STRUCTURAL COLUMN FORMWORK PROCESS SAMPLE';

/* ④ 效果图：把真实照片改名 1.jpg / 2.jpg / 3.jpg 覆盖到 img 里
      张数随便，多加就多写一行 */
window.IMAGES = [
  'img/1.jpg',
  'img/2.jpg',
  'img/3.jpg'
];

/* ⑤ 照片后面的二维码卡片页（配几段就出几页）
      link 是长按识别后要跳的网址，页面自动画成二维码 */
window.CARDS = [
  {
    title: '查看结构柱模板搭设轻量化模型',
    link: 'https://share-xt.hwbim.com/qlh/f2d69331c3dc45afbfe967d43bf7989e',
    tip: '长按识别二维码',
    btn: '直接打开'
  },

  {
    title: '查看模板工程施工方案交底资料',
    link: 'https://www.kdocs.cn/l/ccxWwdhn9TgU',
    tip: '长按识别二维码',
    btn: '直接打开'
  }
];

/* 返回主菜单按钮：整段粘贴到 config.js 最末尾，前面内容一个字都不用动 */
(function () {
  if (document.getElementById('backBtn')) return;
  var s = document.createElement('style');
  s.textContent =
    '#backBtn{position:fixed;z-index:10;left:14px;bottom:calc(env(safe-area-inset-bottom) + 16px);' +
    'display:inline-flex;align-items:center;padding:9px 14px;border-radius:22px;' +
    'background:rgba(0,0,0,.42);color:#fff;font-size:13px;line-height:1;' +
    'text-decoration:none;border:1px solid rgba(255,255,255,.16);' +
    'box-shadow:0 2px 10px rgba(0,0,0,.3);font-family:inherit}' +
    '#backBtn:active{transform:scale(.94)}';
  document.head.appendChild(s);
  var a = document.createElement('a');
  a.id = 'backBtn';
  a.href = '../index.html';
  a.textContent = '‹ 返回主菜单';
  a.setAttribute('aria-label', '返回主菜单');
  document.body.appendChild(a);
})();
