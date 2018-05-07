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
    //   _this.initMap()
    
    _this.eventBind();
    },

    eventBind: function () {
      var _this = this;
      var _dataTime, _time;
      setInterval(function () {
        var _curTimeStr = _this.initLocalTime();
        _dataTime = _curTimeStr.split(' ')[0];
        _time = _curTimeStr.split(' ')[1];
        $('.header .rightLi').find('.dateTime').text(_dataTime);
        $('.header .rightLi').find('.time').text(_time);
      }, 1000)
    },
    initLocalTime: function () {
      var _this = this;
      var _time = new Date();
      var yyyy = _time.getFullYear();
      var MM = (_time.getMonth() + 1) < 10 ? '0'+(_time.getMonth() + 1) : (_time.getMonth() + 1);
      var dd = _time.getDate() < 10 ? '0'+_time.getDate() : _time.getDate();

      var hh = _time.getHours();
      var mm = _time.getMinutes() < 10 ? '0'+_time.getMinutes() : _time.getMinutes();
      var ss = _time.getSeconds() < 10 ? '0'+_time.getSeconds(): _time.getSeconds();
    //   var curDateTime = yyyy + '-' + MM + '-' + dd + ' ' + hh + ':' + mm + ':' + ss;
      return yyyy + '-' + MM + '-' + dd + ' ' + hh + ':' + mm + ':' + ss;
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
    },

    initMap :function () {

        var map = new AMap.Map('mapContainer', {
            resizeEnable: true,
            zoom:15,
            center: [121.502213,31.238128],
            mapStyle: 'amap://styles/debb37a369de5ecff92cc599ace68dfa'//样式URL
        });


        // maker camera_map
        var markers = []; 
        var camera = [
            {
                type:0,
                center:'121.502213,31.238128',
                name:'陆家嘴'
            },{
                type:1,
                center:'121.49882,31.238767',
                name:'张三'
            },{
                type:2,
                center:'121.497082,31.240492',
                name:'打架斗殴'
            },{
                type:2,
                center:'121.496867,31.235116',
                name:'打架斗殴'
            }
        ];
        for (var i = 0; i < camera.length; i += 1) {
                var marker;
    			if (camera[i].type === 0) {     // 摄像头
    				var icon = new AMap.Icon({
    					image: './img/camera_map.png',
    					size: new AMap.Size(24, 24)
    				});
    				marker = new AMap.Marker({
    					icon: icon,
    					position: camera[i].center.split(','),
    					// offset: new AMap.Pixel(-12,-12),
    					zIndex: 101,
    					title: camera[i].name + '摄像头',
    					map: map
    				});
                } else if(camera[i].type === 1){    // 人
    				var icon = new AMap.Icon({
    					image: './img/person_map.png',
    					size: new AMap.Size(24, 24)
    				});
    				marker = new AMap.Marker({
                        icon: icon,
    					position: camera[i].center.split(','),
    					title: camera[i].name + '正在巡逻',
    					map: map
    				});
    			}else{      // 事件
                    var icon = new AMap.Icon({
    					image: './img/event_map.png',
    					size: new AMap.Size(24, 24)
    				});
    				marker = new AMap.Marker({
                        icon: icon,
    					position: camera[i].center.split(','),
    					title: '正在发生：' + camera[i].name,
    					map: map
    				});
                }
    			markers.push(marker);
    		}
			  map.setFitView();
    }


  }

  var page = new Page();
})