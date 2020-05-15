import index from './index.js'
let body = document.body;
for (var i = 1; i < 9; i++) {
  if (i == 1) {
    index.rili(true);//日历模块
    let scriptRiLi = document.createElement('script');
    scriptRiLi.src = '/js/rili.js';
    body.appendChild(scriptRiLi);
  }
  if (i == 2) {
    index.gongzuo(true);//工作模块
  }
  if (i == 3) {
    index.email(true);//未读邮件模块
  }
  if (i == 4) {
    index.main(true);//企业资讯模块
    let scriptMain = document.createElement('script');
    scriptMain.src = '/js/Carousel.js';
    body.appendChild(scriptMain);
  }
  if (i == 5) {
    index.xinwen(true);//新闻模块
  }
  if (i == 6) {
    // index.main(true);//企业资讯模块
    index.mubanAdd("凯悦软件---柱状图", 1, true);
    index.mubanAdd("凯悦软件---折线", 2, true);
    index.mubanAdd("凯悦软件", 3, true);
    index.mubanAdd("凯悦软件", 4, true);
    index.mubanAdd("凯悦软件", 5, true);
    index.mubanAdd("凯悦软件", 6, false);
    // index.mubanAdd("图1", 7, true);
  }
}
window.onresize = resize;//当窗口改变宽度时执行此函专数
function resize() {
  window.location.reload();
}