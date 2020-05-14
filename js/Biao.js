function biao(i) {
  if (i == 1) biao1();
  if (i == 2) biao2();
  if (i == 3) biao3();
  if (i == 4) biao4();
  if (i == 5) biao5();

  function biao1() {
    var dom = document.getElementById("container1");
    var myChart = echarts.init(dom);
    var app = {};
    option = null;
    option = {
      legend: {},
      tooltip: {},
      dataset: {
        source: [
          ['product', '2015', '2016', '2017'],
          ['Matcha Latte', 43.3, 85.8, 93.7],
          ['Milk Tea', 83.1, 73.4, 55.1],
          ['Cheese Cocoa', 86.4, 65.2, 82.5],
          ['Walnut Brownie', 72.4, 53.9, 39.1]
        ]
      },
      xAxis: {
        type: 'category'
      },
      yAxis: {},
      // Declare several bar series, each will be mapped
      // to a column of dataset.source by default.
      series: [{
        type: 'bar'
      },
      {
        type: 'bar'
      },
      {
        type: 'bar'
      }
      ]
    };;
    if (option && typeof option === "object") {
      myChart.setOption(option, true);
    }
    window.addEventListener("resize", () => {
      myChart.resize();
    });
  }

  function biao2() {
    var dom = document.getElementById("container2");
    var myChart = echarts.init(dom);
    var app = {};
    option = null;
    option = {
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
        type: 'value'
      },
      series: [{
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line',
        smooth: true
      }]
    };;
    if (option && typeof option === "object") {
      myChart.setOption(option, true);
    }
    window.addEventListener("resize", () => {
      myChart.resize();
    });
  }

  function biao3() {
    var dom = document.getElementById("container3");
    var myChart = echarts.init(dom);
    var app = {};
    option = null;
    option = {
      title: {
        text: '某站点用户访问来源',
        subtext: '纯属虚构',
        left: 'center'
      },
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
      },
      legend: {
        orient: 'vertical',
        left: 'left',
        data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
      },
      series: [{
        name: '访问来源',
        type: 'pie',
        radius: '55%',
        center: ['50%', '60%'],
        data: [{
          value: 335,
          name: '直接访问'
        },
        {
          value: 310,
          name: '邮件营销'
        },
        {
          value: 234,
          name: '联盟广告'
        },
        {
          value: 135,
          name: '视频广告'
        },
        {
          value: 1548,
          name: '搜索引擎'
        }
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }]
    };;
    if (option && typeof option === "object") {
      myChart.setOption(option, true);
    }
    window.addEventListener("resize", () => {
      myChart.resize();
    });
  }

  function biao4() {
    var dom = document.getElementById("container4");
    var myChart = echarts.init(dom);
    var app = {};
    option = null;
    option = {
      tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
          type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        }
      },
      legend: {
        data: ['利润', '支出', '收入']
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: [{
        type: 'value'
      }],
      yAxis: [{
        type: 'category',
        axisTick: {
          show: false
        },
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
      }],
      series: [{
        name: '利润',
        type: 'bar',
        label: {
          show: true,
          position: 'inside'
        },
        data: [200, 170, 240, 244, 200, 220, 210]
      },
      {
        name: '收入',
        type: 'bar',
        stack: '总量',
        label: {
          show: true
        },
        data: [320, 302, 341, 374, 390, 450, 420]
      },
      {
        name: '支出',
        type: 'bar',
        stack: '总量',
        label: {
          show: true,
          position: 'left'
        },
        data: [-120, -132, -101, -134, -190, -230, -210]
      }
      ]
    };;
    if (option && typeof option === "object") {
      myChart.setOption(option, true);
    }
    window.addEventListener("resize", () => {
      myChart.resize();
    });
  }
  function biao5() {
    var dom = document.getElementById("container5");
    var myChart = echarts.init(dom);
    var app = {};
    option = null;
    option = {
      tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
          type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        }
      },
      legend: {
        data: ['利润', '支出', '收入']
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: [{
        type: 'value'
      }],
      yAxis: [{
        type: 'category',
        axisTick: {
          show: false
        },
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
      }],
      series: [{
        name: '利润',
        type: 'bar',
        label: {
          show: true,
          position: 'inside'
        },
        data: [200, 170, 240, 244, 200, 220, 210]
      },
      {
        name: '收入',
        type: 'bar',
        stack: '总量',
        label: {
          show: true
        },
        data: [320, 302, 341, 374, 390, 450, 420]
      },
      {
        name: '支出',
        type: 'bar',
        stack: '总量',
        label: {
          show: true,
          position: 'left'
        },
        data: [-120, -132, -101, -134, -190, -230, -210]
      }
      ]
    };;
    if (option && typeof option === "object") {
      myChart.setOption(option, true);
    }
    window.addEventListener("resize", () => {
      myChart.resize();
    });
  }
}