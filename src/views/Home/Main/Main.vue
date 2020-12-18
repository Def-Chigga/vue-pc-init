<template>
    <div class="home-main">
      home-main
      <div class="monitor">
        <div id="monitor" style="width: 100%;height: 100%;"></div>
      </div>
      <div class="online">
        <div id="online" style="width: 100%;height: 100%;"></div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Main',
  data() {
    return {
      charts: {
        monitorChart: null,
        onlineChart: null
      }
    };
  },
  created() {
    this.$nextTick(() => {
      this.initMonitorChart();
      this.initOnlineCharts();
    });
  },
  mounted() {
    // 监听尺寸变化 调用函数防抖
    window.onresize = this.$throttle(() => {
      // 使图标大小自适应
      this.charts.monitorChart.resize();
      this.charts.onlineChart.resize();
    }, 1000);
  },
  methods: {
    // 初始化监控分布饼图
    initMonitorChart() {
      const option = {
        // 饼图颜色
        color: ['#407FFF', '#A682E6', '#E15D68', '#F29961', '#00CCCD', '#1e2188', '#00fef3', '#0007d5', '#de00c5', '#81be00', '#ff0059', '#ffa000'],
        // 提示框 / 鼠标停留显示
        tooltip: {
          show: true,
          trigger: 'item' // 柱状图，折线图 axis / 散点图，饼图 item / 什么都不触发 none
        },
        // 图例
        legend: {
          show: true,
          type: 'plain', // 默认值为 plain / 可滚动翻页的图例。当图例数量较多时可以使用 scroll
          data: ['普达措', '绿春', '植物系统', '黄连山', '广西铁塔'],
          // 文本样式
          textStyle: {
            color: '#01D4F9',
            fontStyle: 'normal' // 默认 'normal' / 斜体 'italic' / 'oblique'，
            // fontSize: 13
          },
          // 标题水平位置 left center bottom / 具体值
          left: 'center',
          // 标题垂直位置 top middle bottom / 具体指
          top: 'top',
          itemWidth: 12,
          itemHeight: 12,
          padding: [2, 5, 0, 5]
          // 一来默认选中状态
          /* selected: {
            // 选中'第一'
            第一: true,
            // 不选中'第二'
            第二: false,
            // 不选中'第三'
            第三: false
          } */
        },
        series: [
          // type line / 折线图 bar / 柱状图 pie / 饼图
          {
            type: 'pie',
            data: [
              {
                name: '普达措',
                value: 40
              },
              {
                name: '绿春',
                value: 5
              },
              {
                name: '植物系统',
                value: 10
              },
              {
                name: '黄连山',
                value: 25
              },
              {
                name: '广西铁塔',
                value: 20
              }
            ],
            // 饼图图形上的文本标签，可用于说明图形的一些数据信息，比如值，名称等
            label: {
              show: true,
              // 标签的位置
              /*
              'outside / outer' 饼图扇区外侧，通过视觉引导线连到相应的扇区
              'inside'/'inner' 饼图扇区内部
              'center' 在饼图中心位置
              */
              position: 'outer',
              /*
              标签的对齐方式，仅当 position 值为 'outer' 时有效。
              从 ECharts v4.6.0 版本起，我们提供了 'labelLine' 与 'edge' 两种新的布局方式。
              'none'（默认值）：label line 的长度为固定值，分别为 labelLine.length 及 labelLine.length2。/ 'none' 外侧线默认长度 / 短
              'labelLine'：label line 的末端对齐，其中最短的长度由 labelLine.length2 决定。/ 'labelLine' 外侧线默认长度 / 中
              'edge'：文字对齐，文字的边距由 label.margin 决定。/ 'edge' 外侧线默认长度 / 长
              */
              alignTo: 'labelLine',
              // 文字的出血线大小，超过出血线的文字将被裁剪为 '...'
              // 仅当 position 为 'outer' 并且 label.alignTo 为 'none' 或 'labelLine' 的情况有效。
              bleedMargin: 5,
              // 标签内容格式器
              formatter: '{b}\n{d}%', // 每一个刻度值后面加上‘%’号
              // 文字样式
              color: '#fff',
              fontSize: 11,
              fontWeight: 'bold'
            },
            // 距离图例的顶部距离
            top: '8%'
          }
        ]
      };
      this.charts.monitorChart = this.$initChart('monitor', option);
    },
    // 初始化监控在线柱状图
    initOnlineCharts() {
      const option = {
        // 柱状图颜色
        color: ['#07C3FF', '#FFB821'],
        // 提示框 / 鼠标停留显示
        tooltip: {
          show: true,
          trigger: 'axis' // 柱状图，折线图 axis / 散点图，饼图 item / 什么都不触发 none
        },
        // 图例
        legend: {
          show: true,
          type: 'plain', // 默认值为 plain / 可滚动翻页的图例。当图例数量较多时可以使用 scroll
          data: ['在线', '离线'],
          // 文本样式
          textStyle: {
            color: '#84F2FF',
            fontSize: 14,
            fontStyle: 'normal' // 默认 'normal' / 斜体 'italic' / 'oblique'
          },
          // 标题水平位置 left center right / 具体值
          left: 'right',
          // 标题垂直位置 top middle bottom / 具体指
          top: 'top',
          itemWidth: 20,
          itemHeight: 16,
          // 设置总图例大小使其换行
          width: 50,
          padding: [10, 10, 5, 0]
          // 一来默认选中状态
          /* selected: {
            // 选中'第一'
            第一: true,
            // 不选中'第二'
            第二: false,
            // 不选中'第三'
            第三: false
          } */
        },
        // calculable: true,
        // x轴
        xAxis: [
          {
            /*
            'value' 数值轴，适用于连续数据。
            'category' 类目轴，适用于离散的类目数据。
            'time' 时间轴，适用于连续的时序数据。
            'log' 对数轴。适用于对数数据。
            */
            type: 'category',
            // name: '服装', // 横坐标名称
            // // 横坐标名称样式
            // nameTextStyle: {
            //   color: 'red',
            //   fontWeight: 'bold',
            //   fontSize: 16
            // },
            // nameLocation: 'end', // 横坐标名称位置 默认end start/middle/center/end
            // 所有类目名称列表
            data: ['普达措国家公园', '黄连山自然保护区', '植物扫码系统', '广西铁塔', '绿春智慧监测'],
            // x轴文字的配置
            axisLabel: {
              show: true,
              textStyle: {
                color: '#fff'
              }
            },
            // x轴轴线相关设置
            axisLine: {
              show: true,
              lineStyle: {
                color: '#50ACDF',
                width: 1,
                type: 'solid'
              }
            },
            // x轴刻度相关设置
            axisTick: {
              show: false,
              // 刻度线颜色
              lineStyle: {
                color: '#fff'
              },
              // 类目轴刻度对齐柱状图中间
              alignWithLabel: {
                boundaryGap: true
              },
              // 坐标轴刻度是否朝内，默认朝外。
              inside: false
            },
            // 分割线配置
            splitLine: {
              show: false,
              lineStyle: {
                color: 'rgba(219,225,255,1)'
              }
            }
          }
        ],
        // y轴
        yAxis: [
          {
            /*
            'value' 数值轴，适用于连续数据。
            'category' 类目轴，适用于离散的类目数据。
            'time' 时间轴，适用于连续的时序数据。
            'log' 对数轴。适用于对数数据。
            */
            type: 'value',
            name: '(%)', // 纵坐标名称
            // 纵坐标名称样式
            nameTextStyle: {
              color: '#9ED2F9',
              fontSize: 13
            },
            nameLocation: 'end', // 纵坐标名称位置 默认end start/middle/center/end
            // y轴文字的配置
            axisLabel: {
              show: true,
              textStyle: {
                color: '#9ED2F9'
              }
              // formatter: '{value} %'//y轴的每一个刻度值后面加上‘%’号
            },
            // y轴线的相关设置
            axisLine: {
              show: true,
              lineStyle: {
                color: '#0AB9BF',
                width: 1,
                type: 'solid'
              }
            },
            // y轴刻度相关设置
            axisTick: {
              show: false,
              // 刻度线颜色
              lineStyle: {
                color: '#fff'
              },
              // 坐标轴刻度是否朝内，默认朝外。
              inside: false
            },
            // 分割线配置
            splitLine: {
              show: false,
              lineStyle: {
                color: 'rgba(219,225,255,1)'
              }
            }
          }
        ],
        series: [
          // type line / 折线图 bar / 柱状图 pie / 饼图
          {
            name: '在线',
            type: 'bar',
            data: [80, 60, 90, 50, 80]
          },
          {
            name: '离线',
            type: 'bar',
            data: [20, 40, 10, 50, 20]
          }
        ],
        // 直角坐标系绘图网格
        grid: {
          height: '75%',
          bottom: '2%',
          containLabel: true
        }
      };
      // 返回实例，便于使用当屏幕变化或切换表格时自适应大小
      this.charts.onlineChart = this.$initChart('online', option);
    }
  }
};
</script>

<style scoped lang="scss">
  @import "../../../assets/css/mixin";
  .home-main{
    font-size: 36px;
    .monitor,.online{
      width: 500px;
      height: 300px;
      background: #333;
    }
  }
</style>
