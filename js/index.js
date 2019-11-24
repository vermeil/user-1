
// $(function () {
//     //作业计划-饼状图
//     updata3(data3,'次日'+name3+'('+random(123,333)+')')
//     //作业计划-柱状图
//     updata4(data4 ,name4)
//     //全面检查-柱状图
//     updata5(data5 ,name5)
//     //全面检查-饼状图
//     updata6(data6,'本日'+name6+'('+random(123,333)+')')
// });
// //随机数
// function random(min,max){
//     return ~~(Math.random()*(max-min) + min);
// }
// function randon_time(te){
//     if(te.indexOf('季') > -1){
//         return random(1005,2199)
//     }else if(te.indexOf('年') > -1){
//         return random(3305,12345)
//     }else if(te.indexOf('月') > -1){
//         return random(400,799)
//     }else{
//         console.log('炸拉')
//         return random(100,299)
//     }
// }
// var name3 = '工务', 
//     data3=[
//         ['普铁维修', 45.0],
//         ['高铁维修', 26.8],
//         {
//             name: '普铁大修',
//             y: 12.8,
//             selected: true,
//             sliced: true, // 突出显示这个点（扇区），用于强调。
//         },
//         ['高铁大修', 8.5],

//     ],

//     name4 = '普铁大修', 
//     data4=[
//          {
//             name:'合计',
//             data: [183, 156, 111, 415, 166, 268, 110, 150, 180, 
//                    380, 290, 156, 111, 415, 166, 268, 110, 150, 
//             ]
//         }
//     ],

//     name5 = '木枕道岔'
//     data5=[ 
//          {
//             name:'合计',
//             data: [183, 156, 111, 415, 166, 268, 110, 150, 180, 
//                    380, 290, 156, 111, 415, 166, 268, 110, 166,
//             ]
//         }
//     ],

//     name6 = '专项整治数据分析', 
//     data6=[
//         {
//             name: '木枕',
//             y: 82.8,
//             selected: true,
//             sliced: true, // 突出显示这个点（扇区），用于强调。
//         },
//         ['木枕道岔', 40.7],
//     ],
//     data6_2=[
//         {
//             name: '电路绝缘防护',
//             y: 82.8,
//             selected: true,
//             sliced: true, // 突出显示这个点（扇区），用于强调。
//         },
//         ['ATP软件升级', 60.7],
//         ['列车占用丢失整治', 40.7],
//         ['CTC/TDCS整治', 20.7],
//         ['加装GMS系统', 20.7],
//     ],    
//     data6_3=[
//         {
//             name: '高铁增设避雷线',
//             y: 82.8,
//             selected: true,
//             sliced: true, // 突出显示这个点（扇区），用于强调。
//         },
//         ['SCADA及接触网开关整治', 30.7],
//         ['变电所系统防雷', 40.7],
//     ]

// ;



//     //全面预算数据分析-饼状图
// function updata3(data3,name){
//     $('#container3').highcharts({
//         chart: {
//             plotBackgroundColor: null,
//             plotBorderWidth: null,
//             plotShadow: false
//         },
//         title: {
//             text: name||'次日计划'
//         },
//         tooltip: {
//             headerFormat: '{series.name}<br>',
//             pointFormat: '{point.name}: <b>{point.percentage:.1f}%</b>'
//         },
//         plotOptions: {
//             pie: {
//                 allowPointSelect: true,
//                 cursor: 'pointer',
//                 dataLabels: {
//                     enabled: true,
//                     format: '<b>{point.name}</b>: {point.percentage:.1f} %',
//                     style: {
//                         color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
//                     }
//                 },
//                 states: {
//                     hover: {
//                         enabled: false
//                     },
//                 },
//                 slicedOffset: 20,         // 突出间距
//                 point: {                  // 每个扇区是数据点对象，所以事件应该写在 point 下面
//                     events: {
//                         // 鼠标滑过是，突出当前扇区
//                         // mouseOver: function () {
//                         //     this.slice();
//                         // },
//                         // // 鼠标移出时，收回突出显示
//                         // mouseOut: function () {
//                         //     this.slice();
//                         // },
//                         // // 默认是点击突出，这里屏蔽掉
//                         // click: function () {
//                         //     return false;
//                         // }
//                     }
//                 }
//             },
//             series: {
//                 cursor: 'pointer',
//                 events: {
//                     click: function (event) {
//                         updata4(data4 ,event.point.name )
//                         // parent.$("#popup2").show()
//                         //console.log(parent.$("#popup1"))
//                     }
//                 }
//             }
//         },
//         yAxis: {
//             crosshair: false,
//         },
//         series: [{
//             type: 'pie',
//             name: '占比',
//             data: data3
//         }]
//     });
// }
//     //全面预算数据分析-柱状图
// function updata4(data4,name){
//     $('#container4').highcharts({
//         chart: {
//             type: 'column'
//         },
//         title: {
//             text: name||'普铁大修'
//         },
//         xAxis: {         
//             labels: {
//                 //y: 20,//调节x偏移
//                 //y:-35,//调节y偏移
//                 rotation:-45,//调节倾斜角度偏移
//                 style: {
//                     color: '#333',
//                     // writingMode:'tb-rl'    //文字竖排样式
//                 },
//             },
//             categories: ['哈尔滨局', '沈阳局', '北京局','太原局', '呼和局', '郑州局'
//             , '武汉局', '西安局', '济南局', '上海局','南昌局', '广州局', '南宁局', '成都局'
//             ,'昆明局','兰州局', '乌鲁木齐局','青藏公司',]
//         },
//         yAxis: {
//             min: 0,
//             title: {
//                 text: '总量 (个)',
//                 align: 'high'
//             },
//             labels: {
//                 overflow: 'justify'
//             }
//         },
//         tooltip: {
//             // valueSuffix: ' 百万'
//         },
//         plotOptions: {
//             bar: {
//                 dataLabels: {
//                     // ,allowOverlap 默认是 false，即不允许数据标签重叠
//                 }
//             },
//             series: {
//                 cursor: 'pointer',
//                 events: {
//                     click: function (event) {
//                         a_ev3()
//                         // parent.$("#popup2").show()
//                         //console.log(parent.$("#popup1"))
//                     }
//                 }
//             }
//         },
//         legend: {
//             align: 'left',
//             verticalAlign: 'top',
//             x: 50,
//             y: 30,
//             enabled: true,//关闭图例
//         },
//         series:  data4 
//     });
// }
//     //专项整治数据分析-柱状图
// function updata5(data5,name){
//     $('#container5').highcharts({
//         chart: {
//             type: 'column'
//         },
//         title: {
//             text: name || null
//         },
//         xAxis: {
//             categories: ['哈尔滨局', '沈阳局', '北京局','太原局', '呼和局', '郑州局'
//             , '武汉局', '西安局', '济南局', '上海局','南昌局', '广州局', '南宁局', '成都局'
//             ,'昆明局','兰州局', '乌鲁木齐局','青藏公司',],
//             title: {
//                 text: null
//             }
//         },
//         yAxis: {
//             min: 0,
//             title: {
//                 text: '总量 (个)',
//                 align: 'high'
//             },
//             labels: {
//                 overflow: 'justify'
//             }
//         },
//         tooltip: {
//             // valueSuffix: ' 百万'
//         },
//         plotOptions: {
//             bar: {
//                 dataLabels: {
//                     // ,allowOverlap 默认是 false，即不允许数据标签重叠
//                 }
//             },
//             series: {
//                 cursor: 'pointer',
//                 events: {
//                     click: function (event) {
//                         a_ev5()
//                         // parent.$("#popup2").show()
//                         //console.log(parent.$("#popup1"))
//                     }
//                 }
//             }
//         },
//         legend: {
//             align: 'left',
//             verticalAlign: 'top',
//             x: 50,
//             y: 30,
//             enabled: true,//关闭图例
//         },
//         credits: {
//         },
//         series: data5
//     });
// }
//     //专项整治数据分析-饼状图
// function updata6(data6,name){
//     $('#container6').highcharts({
//         chart: {
//             plotBackgroundColor: null,
//             plotBorderWidth: null,
//             plotShadow: false
//         },
//         title: {
//             text: name
//         },
//         tooltip: {
//             headerFormat: '{series.name}<br>',
//             pointFormat: '{point.name}: <b>{point.percentage:.1f}%</b>'
//         },
//         yAxis: {
//             crosshair: false,
//         },
//         plotOptions: {
//             pie: {
//                 allowPointSelect: true,
//                 cursor: 'pointer',
//                 dataLabels: {
//                     enabled: true,
//                     format: '<b>{point.name}</b>: {point.percentage:.1f} %',
//                     style: {
//                         color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
//                     }
//                 },
//                 states: {
//                     hover: {
//                         enabled: false
//                     }
//                 },
//                 slicedOffset: 20,         // 突出间距
//                 point: {                  // 每个扇区是数据点对象，所以事件应该写在 point 下面
//                     events: {
//                         // 鼠标滑过是，突出当前扇区
//                         // mouseOver: function () {
//                         //     this.slice();
//                         // },
//                         // // 鼠标移出时，收回突出显示
//                         // mouseOut: function () {
//                         //     this.slice();
//                         // },
//                         // // 默认是点击突出，这里屏蔽掉
//                         // click: function () {
//                         //     return false;
//                         // }
//                     }
//                 }
//             },
//             series: {
//                 cursor: 'pointer',
//                 events: {
//                     click: function (event) {
//                         // updata5(event.point.name,data5)
//                         updata5(data5,event.point.name)
//                         // parent.$("#popup2").show()
//                         //console.log(parent.$("#popup1"))
//                     },
//                     // mouseOver: function () {
//                     //     charts_total3 = 12
//                     // }
//                 }
//             }
//         },
//         series: [{
//             type: 'pie',
//             name: '共有:',
//             data: data6 
//         }]
//     });
// }



// //胶囊
// $('.btn-group .btn').on('click',function(){
//     $(this).siblings().removeClass("blue");
//     $(this).addClass("blue");
// })
// //日期
// $('.filter .btn-sm').on('click',function(){
//     $(this).parent().siblings().find('.btn-sm').removeClass("btn-primary").addClass("btn-default");
//     $(this).addClass("btn-primary");
//     var te = $(this).text();
//     $(this).parent().siblings().find('.form-control')


//     if(te.indexOf('季') > -1){
//         if(MM <= 3){
//             MM = 1;
//             M2 = 4;
//         }else if(MM <= 6){
//             MM = 4;
//             M2 = 6;
//         }else if(MM <= 9){
//             MM = 7;
//             M2 = 9;
//         }else{
//             MM = 7;
//             M2 = 9;
//         }
//         var val1 = yyyy+'-'+MM+'-10';
//         var val2 = yyyy+'-'+M2+'-10';
//     }else if(te.indexOf('月') > -1){
//         var val1 = yyyy+'-'+MM+'-10';
//         var val2 = yyyy+'-'+M2+1+'-10';
//     }else if(te.indexOf('年') > -1){
//         var val1 = yyyy+'-1-10';
//         var val2 = yyyy+1+'-1-10';
//     }else{
//         // var val1 = '1970-1-1';
//         // var val2 = '8102-1-1';
//         var val1 = yyyy+'-'+MM+'-'+DD;
//         var val2 = yyyy+'-'+M2+'-'+D2;
//     }

//     if(endDate1 < D2){
//         D2 = 1
//         M2 = M2+1
//     }

//     $(this).parent().siblings().find('.form-control').eq(0).val(val1)
//     $(this).parent().siblings().find('.form-control').eq(1).val(val2)
// })

// //全面作业计划
// $('.column2 .btn-group .btn').on('click',function(){
//     updata3(data3,$(this).text() + name3+'('+randon_time($(this).text())+')');
//     updata4(data4,name4)
// })
// $('.column2 .filter').eq(0).find('.btn-sm').on('click',function(){
//     updata3(data3,$(this).text() + name3+'('+randon_time($(this).text())+')');
//     updata4(data4,name4)
// })
// //全面检查  日期
// $('.column3 .filter').eq(0).find('.btn-sm').on('click',function(){
//     updata5(data5,name5)
//     updata6(data6,$(this).text()+name6+'('+randon_time($(this).text())+')')
// })
// $('.column3 .btn-group .btn').on('click',function(){
//     updata5(data5,name5)
//     if($(this).text().indexOf('工务') >-1){
//         var datac = data6
//     }else if($(this).text().indexOf('电务') >-1){
//         var datac = data6_2
//     }else{
//         var datac = data6_3
//     }

//     updata6(datac,$(this).text()+name6+'('+randon_time($(this).text())+')')
// })

// function a_ev1(){       //标题传参
//     // close_a()           //esc 关闭窗口
//     var title = event.point.category;
//     $('#modal1').modal().find('.modal-title').text(title)
// }
// function a_ev2(){  
//     var title = event.point.category;
//     $('#modal2').modal().find('.modal-title').text(title)
// }
// function a_ev3(){  
//     var title = event.point.category;
//     $('#modal3').modal().find('.modal-title').text(title)
// }
// function a_ev5(){ 
//     var title = event.point.category;
//     $('#modal5').modal().find('.modal-title').text(title)
// }

// //日期插件
// laydate.render({
//   elem: '#filter_t3'
//   ,theme: 'molv'
//   ,value: yyyy+'-'+MM+'-'+DD
// });
// laydate.render({
//   elem: '#filter_t4'
//   ,theme: 'molv'
//   ,value: yyyy+'-'+M2+'-'+D2
// });
// laydate.render({
//   elem: '#filter_t5'
//   ,theme: 'molv'
//   ,value: yyyy+'-'+MM+'-'+DD
// });
// laydate.render({
//   elem: '#filter_t6'
//   ,theme: 'molv'
//   ,value: yyyy+'-'+M2+'-'+D2
// });


