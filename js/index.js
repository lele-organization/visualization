$(function () {
  
  function Page() {
    var _this = this;
    _this.init();
  };

  Page.prototype = {

    init: function () {
      var _this = this
      _this.initHighCharts()
      _this.initHumanFlowTrend()
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
    },

    initHumanFlowTrend : function () {
      var myChart =  echarts.init(document.getElementById('humanFlowTrend'));

      var option = {
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data:['区域A','区域B','区域C'],
            right:'20',
            textStyle:{
                color:'#fff',
                fontSize:12
            }
            
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            // boundaryGap: false,
            data: ['0','2','4','6','8','10','12','14','16','18','20','22(h)'],
            axisLine:{
                lineStyle:{
                    color:'#ccc'
                }
            }
        },
        yAxis: {
            type: 'value',
            name:'人流量',
            nameTextStyle:{
                color:'#ccc',
                align:'right'
                
            },
            axisLine:{
                show:false,
                lineStyle:{
                    color:'#ccc'
                }
            }
            // nameLocation:'end'
            // show:false
        },
        series: [
            {
                name:'区域A',
                type:'line',
                data:[100, 254, 1422, 824, 2687, 2467, 254,1587,1800,954,1542,254]
            },
            {
                name:'区域B',
                type:'line',
                data:[580,467, 254,1587,1800,1254, 22, 824, 2687, 954,1542,254]
            },
            {
                name:'区域C',
                type:'line',
                data:[ 800, 835, 900,1352,1150,352,1542,254,1520, 1254, 522, 824]
            },
        ],
        color:['#f3af4a', '#01a0db','#56b472'],
      };

      myChart.setOption(option);
    }

  }

  var page = new Page();
})