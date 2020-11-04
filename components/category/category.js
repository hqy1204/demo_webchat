// pages/guide/echarts/echarts2.js
import * as echarts from '../../ec-canvas/echarts';
Component({
  lifetimes: {
    attached() {
      this.echarts()
    }
  },
  /**
   * 组件的属性列表
   */
  properties: {
    date: {
      type: Array,
    },
    series: {
      type: Object,
    }
  },
  observers: {
    'series': function(series) {
      // 在 row被设置时，执行这个函数
      this.echarts()
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    ec: {
      lazyLoad: true // 延迟加载
    },
  },

  /**
   * 组件的方法列表
   */
  methods: {
    init_echarts: function () {
      this.echartsComponnet.init((canvas, width, height) => {
        // 初始化图表
        const Chart = echarts.init(canvas, null, {
          width: width,
          height: height
        });
        Chart.setOption(this.getOption());
        // 注意这里一定要返回 chart 实例，否则会影响事件处理等
        return Chart;
      });
    },
    echarts: function (options) {
      this.echartsComponnet = this.selectComponent('#mychart-dom-bar');
      // this.getData(options); //获取数据
      this.init_echarts()
    },
    getOption: function () {
      var series = [];
      for (let i = 0; i < this.data.series.length; i++) {
        var item = {
          name: this.data.series[i].name,
          type: 'line',
          smooth: true,
          data: this.data.series[i].data
        }
        series.push(item)
      }
      var option = {
  
        tooltip: {
          trigger: 'axis',
          position: [50, 1, 1, 1],
          triggerOn: 'click',
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: this.data.date
        },
        yAxis: {
          type: 'value'
        },
        series: series,
        grid: {
          x: "15%",
          y: "15%",
          x2: "7%",
          y2: "10%"
        },
      };
      return option;
    },
  },

})