$(() => {
  //轮播图
  var i = 0; //现在正在显示第几张图片，从0开始
  //每个li的固定宽度
  var LIWIDTH = 345;
  var DURATION = 500; //每次轮播动画持续的时间
  var LICOUNT = 4; //li的总个数
  //要移动的ul
  var ulImgs = document.getElementById("ul-imgs");
  //包含小圆点列表的ul
  var ulIdxs = document.getElementById("ul-idxs");
  //小圆点的列表
  var lis = ulIdxs.children;
  //从当前位置移动到任意一个范围内的位置
  function moveTo(to) {
    //如果用户没有传入要跳到第几周昂图，就默认调到当前图的下一张
    if (to == undefined) {
      to = i + 1;
    }
    if (i == 0) { //如果滚动从头开始，再重新叫上transition
      if (to > i) { //如果要看当前位置右边的图片，是不会出现问题的
        ulImgs.className = "transition";
      } else { //只有i=0在开头，且还要看左边的图片时，才会出问题
        //为了避免用户再次看到偷梁换柱的效果，先把transition class去掉
        ulImgs.className = "";
        //将ulImgs拉取到最左侧
        ulImgs.style.marginLeft = -LIWIDTH * LICOUNT + "px";
        //定时器是为了将偷梁换柱操作和加回transition属性的操作强行隔离开
        setTimeout(function () {
          moveTo(LICOUNT - 1);
        }, 100);
        return;
      }
    }
    i = to; //先将表示几张图片的变量i变为不免位置
    //再用i计算ulimgs的marginLeft距离
    ulImgs.style.marginLeft = -i * LIWIDTH + "px";
    //先删除所有的小圆点的class
    for (var li of lis) {
      li.className = "";
    }
    if (i == LICOUNT) {
      i = 0;
      //当transition动画播放完之后，才
      setTimeout(function () {
        ulImgs.className = ""; //清除transition属性
        ulImgs.style.marginLeft = 0; //将ulImgs拉回0位置
      }, DURATION)
    }
    //再给当前位置的小圆点添加class active
    lis[i].className = "active";
  }
  /*左右开关*/
  var btnLeft = document.getElementById("btn-left");
  var btnRight = document.getElementById("btn-right");
  //用开关，控制，上次动画没有播放完，下次动画不能开始！
  var canClick = true;
  btnRight.onclick = function () {
    //调用两个按钮公共的移动方法，参数1表示移动到i+1的位置，相当于左移一个
    move(1);
  }
  //两个按钮公用的移动函数，n传入1时，移动到i+1位置，左移。n传入-1时，移动到i-1位置，右移
  function move(n) {
    if (canClick) { //只有可以点击时
      moveTo(i + n); //才调用真正移动ul的方法
      canClick = false; //马上把开关关上，禁止再次点击
      //只有本地transtion动画播放完，才能自动打开开关，点击按钮才有反应。
      setTimeout(function () {
        canClick = true;
      }, DURATION + 100);
    }
  }
  btnLeft.onclick = function () {
    move(-1);
  }
  /*自动轮播*/
  var interval = 3000; //每次轮播之间间隔3秒
  var timer = setInterval(function () {
    moveTo() //周期性定时器，每隔3秒钟自动调用
  }, interval);
  var banner = document.getElementById("banner");
  var btn_right = document.getElementById("btn-right");
  var btn_left = document.getElementById("btn-left");
  var ul_imgs_li = document.getElementById("ul-idxs");
  banner.onmouseover = function () { //鼠标移入上的时候清除定时播放
    clearInterval(timer); //
    btn_left.className = "display_block";
    btn_right.className = "display_block";
    ul_imgs_li.className = "display_block";
  }
  banner.onmouseout = function () { //当鼠标移除时，启动定时器
    timer = setInterval(function () {
      moveTo(); //再次每隔3秒钟调用默认的下一个函数
    }, interval)
    btn_left.className = "display_none";
    btn_right.className = "display_none";
    ul_imgs_li.className = "display_none";

  }
  /*小圆点事件*/
  var ulIdxs = document.getElementById("ul-idxs");
  var canClick = true;
  ulIdxs.onclick = function (e) { //给父元素上一个绑定事件
    if (canClick) {
      var li = e.target; //获得li
      if (li.nodeName == "LI") { //只有点击的是li的时候
        if (li.className !== "active") { //只有点击的不是当前小圆点的时候
          for (var i = 0; i < lis.length; i++) {
            if (lis[i] == li) { //只要遍历到的li和当前点击的li是一样的就退出循环
              break;
            }
          }
          moveTo(i); //此时i定格的位置就是我们要跳转的位置
          setTimeout(function () { //等待500毫秒才可以再次点击
            canClick = true;
          }, DURATION);
        }
      }
    }
  }
})
// $("#banner").hover(
//   function () {

//   },
//   function () {
//     $("#btn-left").className("dispaly_black");
//     $("#btn-right").className("dispaly_block");
//   }
// )
