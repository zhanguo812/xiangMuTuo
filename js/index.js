export default {
  a: function (j) {
    let i = "javascript:;";
    let a = $("<a href></a>");
    a.href = i;
    a.html("(如有需要可致电凯悦软件)");
    $("#" + j).prev().append(a);
  },
  rili: function (i, j) {
    if (i == true) {
      $("#rili").css("display", "block");
      $("#mo1").css("display", "block");
    } else {
      this.hidden(1);
    }
  },
  email: function (i, j) {
    if (i) {
      $("#email").css("display", "block");
      $("#mo3").css("display", "block");

    } else {
      this.hidden(3);
    }
  },
  main: function (i, j) {
    if (i) {
      $("#main").css("display", "block");
      $("#mo4").css("display", "block");

    } else {
      this.hidden(4);
    }
  },
  xinwen: function (i, j) {
    if (i) {
      $("#xinwen").css("display", "block");
      $("#mo5").css("display", "block");

    } else {
      this.hidden(5);
    }
  },
  gongzuo: function (i, j) {
    if (i) {
      $("#div1").css("display", "block");
      $("#mo2").css("display", "block");
      this.gongzuoClick();
    } else {
      this.hidden(2);
    }
  },
  mubanAdd: function (title, j, b) {
    let muban = $(`
      <div class="index-content" id="biao${j}">
      <div class="index-content-header">
        <span>${title}</span>
        <span style="clear: both;"></span>
      </div>
    </div>
      `)
    let munban = muban.appendTo($("#index"));
    let child = document.getElementById('index').children;
    for (var i = 9; i <= child.length - 1; i++) {
      if (i % 2 == 0) {
        muban.css("margin-left", "15px");
      }
    }
    container(j, b);
    function container(z, x) {
      x == undefined || false
      var div = $(`
      <div id="container${z}" style="height: 85%;width: 100%;"></div>
      `);
      let a = $("<a href></a>");
      a.href = "javascript:;";
      a.html("(如有需要可致电凯悦软件设置主页)");
      if (x) {
        div.appendTo($("#biao" + z));
        biao(z);
      } else {
        $("#biao" + z).children(":first-child").append(a);
        // index.hidden(z);
      }
    }
  },
  hidden: function (i) {
    i == 1 && $("#mo1").remove();
    i == 2 && $("#mo2").remove();
    i == 3 && $("#mo3").remove();
    i == 4 && $("#mo4").remove();
    i == 5 && $("#mo5").remove();
    i == 6 && $("#biao1").remove();
    i == 7 && $("#biao2").remove();
    i == 8 && $("#biao3").remove();
    i == 9 && $("#biao4").remove();
  },
  gongzuoClick: () => {
    $('#daibanshixiang').on("click", "span", function () {
      $(this).addClass('active_1').siblings(".active").removeClass("active_1 display")
      $("#" + $(this).attr("div_obj")).css("display", "block").siblings(".table-shixiang").css("display",
        "none");
    });
  }
}