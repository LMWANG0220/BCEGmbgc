/* ============================================================
   施工工艺样板 · 三板块总目录
   —— 一张二维码 = 一个目录页 = 三个板块
   —— 加 / 删 / 改名只改这个文件
   ============================================================ */

/* ① 目录页顶部大字 */
window.DIR_TITLE = '模板工程施工方案展示';

/* ② 顶部小字 */
window.DIR_SUB = '点击对应板块，查看效果图及轻量化模型';

/* ③ 顶部标签文字（会显示"共 3 个板块"） */
window.DIR_UNIT = '板块';

/* ④ 底部小字，不需要就写 '' */
window.DIR_FOOT = '现场标准化工艺样板 · 点击对应板块查看';

/* ============================================================
   ⑤ 板块清单 —— 一段 = 一张卡片 = 一个页面

      name  : 卡片上的板块名称（大字）★要改★
      sub   : 卡片上的副标题（小字），不需要就写 ''
      cover : 缩略图，写对应文件夹里的第一张效果图
      url   : 点卡片跳到哪个页面
      folder: 该板块内容所在的文件夹名（改文件夹名时这里同步改）

      【想加第 4 个板块】
        复制一整段 { ... }, 粘到最后一段后面
        （记得给倒数第二段补逗号），再把文件夹也复制一份

      【想减到 2 个板块】
        删掉对应整段，文件夹留着也没关系

      ★ 注意：中间每段 } 后面有逗号，最后一段没有 ★
   ============================================================ */
window.SITES = [
  {
    name: '结构梁板模板搭设工艺样板展示',
    sub: 'STRUCTURAL BEAM & SLAB FORMWORK PROCESS SAMPLE',
    cover: 'part1/img/1.jpg',
    url: 'part1/index.html',
    folder: 'part1'
  },

  {
    name: '结构墙模板搭设工艺样板展示',
    sub: 'STRUCTURAL WALL FORMWORK PROCESS SAMPLE',
    cover: 'part2/img/1.jpg',
    url: 'part2/index.html',
    folder: 'part2'
  },

  {
    name: '结构柱模板搭设工艺样板展示',
    sub: 'STRUCTURAL COLUMN FORMWORK PROCESS SAMPLE',
    cover: 'part3/img/1.jpg',
    url: 'part3/index.html',
    folder: 'part3'
  }
];
