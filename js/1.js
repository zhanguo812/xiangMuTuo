import index from './index.js'
let body = document.body;
for (var i = 1; i < 9; i++) {
  if (i == 1) {
    index.rili(false);//日历模块
    // let scriptRiLi = document.createElement('script');
    // scriptRiLi.src = '/js/rili.js';
    // body.appendChild(scriptRiLi);
  }
  if (i == 2) {
    index.gongzuo(false);//工作模块
  }
  if (i == 3) {
    index.email(false);//未读邮件模块
  }
  if (i == 4) {
    index.main(false);//企业资讯模块
    // let scriptMain = document.createElement('script');
    // scriptMain.src = '/js/Carousel.js';
    // body.appendChild(scriptMain);
  }
  if (i == 5) {
    index.xinwen(false);//新闻模块
  }
  if (i == 6) {
    // index.main(true);//企业资讯模块
    // index.mubanAdd("凯越远软件---柱状图", 1, true);
    // index.mubanAdd("凯越远软件---折线", 2, true);
    // index.mubanAdd("图1", 3, true);
    // index.mubanAdd("图1", 4, true);
    // index.mubanAdd("图1", 5, true);
    // index.mubanAdd("图1", 6, true);
    // index.mubanAdd("图1", 7, true);
  }
}
window.onresize = resize;//当窗口改变宽度时执行此函专数
function resize() {
  window.location.reload();
}