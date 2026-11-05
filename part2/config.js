/* ============================================================
   【结构墙模板搭设工艺样板展示】配置文件 —— 只改这个文件
   ============================================================ */

/* ① 换照片或改文字后 +1，否则微信一直显示旧的 */
window.VERSION = '2';

/* ② 板块名称（页面顶部大字 + 微信标题） */
window.TITLE = '结构墙模板搭设工艺样板展示';

/* ③ 副标题（顶部小字），不需要就写 '' */
window.SUBTITLE = 'STRUCTURAL WALL FORMWORK PROCESS SAMPLE';

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
    title: '查看结构墙模板搭设轻量化模型',
    link: 'https://share-xt.hwbim.com/qlh/647ad1db12a048d4a5137b4b5dd8ab3f',
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
