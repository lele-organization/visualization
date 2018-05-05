$(function () {
  
  function Page() {
    var _this = this;
    _this.init();
  };

  Page.prototype = {

    init: function () {
      var _this = this
      _this.initHighCharts()
    },

    initHighCharts: function () {
      console.log('123')

      var myChart = echarts.init(document.getElementById('alarmEventStatistics'));

      var option = {
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        // legend: {
        //   orient: 'horizontal',
        //   left:'center',
        //   // top:'bottom',
        //   bottom:'0',
        //   data:['重要','紧急','一般'],
        //   itemGap:20,
        //   itemHeight:12,
        //   itemWidth:12,
        //   selectedMode:false,
        //   textStyle:{
        //       color:'#fff',
        //       fontSize:12
        //   }
        // },
        series: [
            {
                name:'实时报警事件统计',
                type:'pie',
                radius: ['50%', '70%'],
                avoidLabelOverlap: false,
                label: {
                    normal: {
                        position: 'outside',
                        fontSize:18,
                        // fontSize:14,
                        color:'#fff',
                        formatter: "{d}%"
                    },
                    emphasis: {
                        show: true,
                        textStyle: {
                            // fontSize: '30',
                            // fontWeight: 'bold'
                        }
                    },
                },
                labelLine: {
                    normal: {
                        show: true,
                        length:10,
                        length2:10,
                    }
                },
                data:[
                    {value:65, name:'重要'},
                    {value:10, name:'紧急'},
                    {value:25, name:'一般'}
                ],
                color:['#f08400', '#ff0000','#ffdb5f'],

                // data:[
                //   {value:10, name:'紧急'},
                //   {value:65, name:'重要'},
                //   {value:25, name:'一般'}
                // ],
                // color:['#ff0000','#f08400', '#ffdb5f'],
                
            }
        ]
    };

      myChart.setOption(option);
    }
  }

  var page = new Page();
})