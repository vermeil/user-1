$(function(){ 
  //日期插件
  var myDate = new Date()
  var yyyy = myDate.getFullYear()
  var MM = checkTime(myDate.getMonth()+1);
  var DD = checkTime(myDate.getDate());
  var M2 = MM;
  var D2 = DD + 1;
  var endDate1 = laydate.getEndDate(MM);
  if(endDate1 < D2){
      D2 = 1
      M2 = M2+1
  }  
  // laydate.render({
  //   elem: '#filter_t01' 
  //   ,theme: '#0097c1'
  //   ,range: true
  //   ,value: yyyy-1+'-'+MM+'-'+DD +' - '+ yyyy+'-'+MM+'-'+DD
  // });
}) 
$(function(){  
    auto_hei()  
    moadl_chart_hei('.modal')

    load();    
    $('#nav-tabs li').on('click', {child:$('.catenary')},nav_tabs)
    for (var i = 11; i >= 0; i--) {  
        var colors = ["rgb(59,161,205)",  "rgb(43,144,143)", 
 "rgb(85, 191, 59)","rgb(255, 0, 102)","rgb(255,116,116)","rgb(144, 238, 126)", "rgb(223, 83, 83)", "rgb(170, 238, 238)"]
        var cor = (i%2==0) ? false: colors;  
        updata1(data1, name1[i], $('.container1').eq(i), categories1,0,cor,true)  
        // updata1(data2, name2[i] + random(200,500), $('.container2').eq(i))    
    }  
    $('#nav-tabs li:eq(1)').one('click',function(){
        for (var i = 11; i >= 0; i--) {  
            //var colors = ["rgb(59,161,205)","rgb(230, 218, 120)", "rgb(85, 191, 59)",  "rgb(170, 238, 238)", "rgb(144, 238, 126)", "rgb(223, 83, 83)"]
            // var cor = (i%2==0) ? false: colors;  
            updata2(data2, name2[i], $('.container2').eq(i), categories2,0,true)  
            // updata1(data2, name2[i] + random(200,500), $('.container2').eq(i))    
        } 
    })
});  

var categories1 = ['新乡段','洛阳段','郑州段'],
    name1 = ['锚段','支柱','锚段关节', '交叉线岔', '无交叉线岔',  '带辅助无交叉线岔', '分段(分相)绝缘器', '隔离开关','避雷器','补偿器','自动过分相','电缆'],
    data1 =  [
        { 
            name: '高铁',
            data: [ 156, 111,140]
        } ,
        { 
            name: '普铁',
            data: [ 116, 131,150]
        } 
    ],
    categories2 = ['京广高铁','郑西高铁', '安李支线','侯月线','京广线','京九线', '焦柳线', '陇海线','太焦线','宁西线', '新月线','新兖线','郑开城际','郑州枢纽','郑焦铁路'], 
    name2 = ['锚段','支柱','锚段关节', '交叉线岔', '无交叉线岔',  '带辅助无交叉线岔', '分段(分相)绝缘器', '隔离开关','避雷器','补偿器','自动过分相','电缆'],
    data2 =  [
        { 
            name: '数量',
            data: [ 156, 211,140,60,185,140,103,50,111,140 ,156, 211,140,60,185]
        } 
    ]
;
   
//bar || column  数据 名称  对象  x轴数据   图标类型  是否多颜色   单位
function updata1(data,name,_this,categories,_type,_colorByPoint,ytit){ 
    var colors =  [ "rgb(59,161,205)", "rgb(255,116,116)", "rgb(43,144,143)","rgb(119,152,191)", 
 "rgb(144, 238, 126)","rgb(255, 0, 102)","rgb(85, 191, 59)", "rgb(223, 83, 83)", "rgb(170, 238, 238)"];
    if(_colorByPoint == false){
        _colorByPoint = false;
    }else if(Object.prototype.toString.call(_colorByPoint)=='[object Array]'){ 
        colors = _colorByPoint;
        _colorByPoint = false;
    }else {
        _colorByPoint = true;
    }  
    // if(ytit == undefined){
    //     ytit = ' '+random(200,399)+' [万元]'
    // }else if(ytit == 0){
    //     ytit = ''
    // }else{
    //     ytit = ' '+random(200,399) +' ['+ytit+']'
    // }
    _this.highcharts({
        chart: {
            type: _type || 'column'
        }, 
        title: {
            text: name + ' <span style="font-size:14px;">['+random(200,500)+']</span>'|| '', 
        },
        colors:colors,
        // labels: {
        //     items: [{
        //         html: '作业计划',
        //         style: {
        //             left: '440px',
        //             top: '-55px',
        //             color: (Highcharts.theme && Highcharts.theme.textColor) || '#fff'
        //         }
        //     }]
        // },
        xAxis: {         
            labels: {
                //y: 20,//调节x偏移
                //y:-35,//调节y偏移
                //rotation:-45,//调节倾斜角度偏移
                style: { 
                    // writingMode:'tb-rl'    //文字竖排样式
                },
            },
            categories: categories  
        },
        yAxis: {
            tickWidth: 0,//去掉刻度
            gridLineWidth:0,//去掉y轴方向的横线            
            min: 0,
            title: {
                text: null,
                // text:ytit || '(万元)', 
                align: 'high'
            },
            labels: {
                overflow: 'justify',
                enabled: false//去掉刻度数字
            }
        },
        tooltip: {
            // valueSuffix: ' 百万'
        },

        plotOptions: {
            bar: { 
                colorByPoint: _colorByPoint, //多颜色
                dataLabels: {
                    // ,allowOverlap 默认是 false，即不允许数据标签重叠
                }
            },
            pie: { 
                allowPointSelect: true,
                innerSize: 0,
                slicedOffset: 20,         // 突出间距
                depth:50, //厚度
                cursor: 'pointer',
                events: {
                    click: function (event) { 
                    }
                }
            },
            line:{
                colorByPoint: _colorByPoint, //多颜色
                cursor: 'pointer',
                events: {
                    click: function (event) { 
                    }
                }
            },
            areaspline:{
                colorByPoint: _colorByPoint, //多颜色
            },
            column:{
                colorByPoint: _colorByPoint, //多颜色
                cursor: 'pointer',
                events: {
                    click: function (event) {   
                        charts1_click(event.point.category + '-'+event.point.series.name+'-'+ name)
                    }
                }
            }  
        },
        legend: {
            align: 'left',
            verticalAlign: 'top',
            x: 50,
            y: 30,
            enabled: false,//关闭图例
        },
        series: data
    });
}  
//bar || column  数据 名称  对象  x轴数据   图标类型  是否多颜色   单位
function updata2(data,name,_this,categories,_type,_colorByPoint,ytit){ 
    var colors =  [ "rgb(59,161,205)", "rgb(255,116,116)", "rgb(43,144,143)","rgb(119,152,191)", 
 "rgb(144, 238, 126)","rgb(255, 0, 102)","rgb(85, 191, 59)", "rgb(223, 83, 83)", "rgb(170, 238, 238)"];
    if(_colorByPoint == false){
        _colorByPoint = false;
    }else if(Object.prototype.toString.call(_colorByPoint)=='[object Array]'){ 
        colors = _colorByPoint;
        _colorByPoint = false;
    }else {
        _colorByPoint = true;
    }  
    // if(ytit == undefined){
    //     ytit = ' '+random(200,399)+' [万元]'
    // }else if(ytit == 0){
    //     ytit = ''
    // }else{
    //     ytit = ' '+random(200,399) +' ['+ytit+']'
    // }
    _this.highcharts({
        chart: {
            type: _type || 'column', 
            marginLeft: 12
        }, 
        title: {
            text: name + ' <span style="font-size:14px;">['+random(200,500)+']</span>'|| '', 
        },
        colors:colors,
        // labels: {
        //     items: [{
        //         html: '作业计划',
        //         style: {
        //             left: '440px',
        //             top: '-55px',
        //             color: (Highcharts.theme && Highcharts.theme.textColor) || '#fff'
        //         }
        //     }]
        // },
        xAxis: {         
            labels: {
                //y: 20,//调节x偏移
                //y:-35,//调节y偏移
                //rotation:-45,//调节倾斜角度偏移
                style: { 
                    // writingMode:'tb-rl'    //文字竖排样式
                },
            },
            categories: categories  
        },
        yAxis: {
            tickWidth: 0,//去掉刻度
            gridLineWidth:0,//去掉y轴方向的横线            
            min: 0,
            title: {
                text: null,
                // text:ytit || '(万元)', 
                align: 'high'
            },
            labels: {
                overflow: 'justify',
                enabled: false//去掉刻度数字
            }
        },
        tooltip: {
            // valueSuffix: ' 百万'
        },

        plotOptions: {
            bar: { 
                colorByPoint: _colorByPoint, //多颜色
                dataLabels: {
                    // ,allowOverlap 默认是 false，即不允许数据标签重叠
                }
            },
            pie: { 
                allowPointSelect: true,
                innerSize: 0,
                slicedOffset: 20,         // 突出间距
                depth:50, //厚度
                cursor: 'pointer',
                events: {
                    click: function (event) { 
                    }
                }
            },
            line:{
                colorByPoint: _colorByPoint, //多颜色
                cursor: 'pointer',
                events: {
                    click: function (event) { 
                    }
                }
            },
            areaspline:{
                colorByPoint: _colorByPoint, //多颜色
                cursor: 'pointer',
                events: {
                    click: function (event) {  
                        charts2_click(event.point.category + '-'+ name )
                    }
                }
            },
            column:{
                colorByPoint: _colorByPoint, //多颜色
                cursor: 'pointer',
                events: {
                    click: function (event) {  
                        charts2_click(event.point.category + '-'+ name )
                    }
                }
            }  
        },
        legend: {
            align: 'left',
            verticalAlign: 'top',
            x: 50,
            y: 30,
            enabled: false,//关闭图例
        },
        series: data
    });
}  

//pie
function updata3(data,name,_this){
    _this.highcharts({
        title: {
            floating:true,
            text: name  || '',
            y:30,
            margin:0, 
            fontSize: '10',
        },
        chart:{
            type: 'pie',
            spacing : [ 0, 0 , 0, 0],
            margin:[40 ,0, 5, 0],
            // options3d: {
            //     enabled: false,
            // }
        },  
        plotOptions: {
            pie: {
                innerSize: '0%',
                slicedOffset: 10,         // 突出间距
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,//是否直接呈现数据 也就是外围显示数据与否
                    distance: -30,//通过设置这个属性，将每个小饼图的显示名称和每个饼图重叠
                    formatter: function(index) { 
                        var per = this.point.percentage.toFixed(1);
                        //return'</p><br><span style="text-align:right">' + per +'%'+ '</span>';
                        return '<p style="font-weight: lighter;font-size:14px">' + this.point.name + '</p><br><span style="text-align:right">' + per +'%'+ '</span>';
                    }
                },
                point: {
                    events: {
                        // mouseOver: function(e) {  // 鼠标滑过时动态更新标题 
                        //     chart.setTitle({
                        //         text: e.target.name+ '\t'+ e.target.y + ' %'
                        //     });
                        // }
                        //, 
                        click: function(e) { // 同样的可以在点击事件里处理
                            pie_click(e.point.name)
                            // chart.setTitle({
                            //     text: e.point.name+ '\t'+ e.point.y + ' %'
                            // });
                        }
                    }
                },
            }
        },
        tooltip: {
            // valueSuffix: '件'
        },
        legend: {
            // layout: 'vertical',
            // align: 'right',
            // verticalAlign: 'top',
            // x: -40,
            // y: 100,
            enabled: false,//关闭图例
        },
        series: 
        [{
            name: '数量', 
            data:data
        }]
    }) 
}  

function charts1_click(_name){  
   //createwin({ width: 1400, height: 600, url: '/myinfo/demo/myinfo_ly/secondView.html', title: $(this).text() || event.point.category, id: 'accidentedit', isiframe: true }); 
   e_modal(_name,$('#modal0')) 
   updata21(data21,_name + '(<span onclick="show_table()" class="chart_tit">共计 59 个</span>)',data_che1) 
   updata22(data22,'工区(<span onclick="show_table()" class="chart_tit">共计 40 个</span>)' ,data_che2) 
   $('#modal0 .tabs-body li').eq(0).click() 
} 
function charts2_click(_name){  
   //createwin({ width: 1400, height: 600, url: '/myinfo/demo/myinfo_ly/secondView.html', title: $(this).text() || event.point.category, id: 'accidentedit', isiframe: true }); 
   e_modal(_name,$('#modal1')) 
   updata23(data23,_name  + '(<span onclick="show_table()" class="chart_tit">共计 59 个</span>)',data_che3) 
   $('#modal1 .tabs-body li').eq(0).click() 
   // updata24(data24,name24,data_che2) 
} 
$('.catenary .chart0').on('click',function(){ 
    var tab = $('.catenary:visible').index() - 1
    $('#modal'+tab+' .table_equipment').hide() 
    $('#modal'+tab+' .table_equipment').eq($(this).index()).show() 
})
var name21 = '郑州段-普铁-支柱 (<span onclick="show_table()" class="chart_tit">共计 59 个</span>)', 
    data21=[
        {
            name:'设备量',
            data: [4718, 3156, 2268,2110,3111,2415,3166,2268,2110,1150,1180,1818]
        } 
    ],  
    name22 = '郑州车间-普铁-支柱 (<span onclick="show_table()" class="chart_tit">共计 40 个</span>)', 
    data22=[
        {
            name:'设备量',
            data: [823, 256, 211,215]
        } 
    ],
    name23 = 'xx线-支柱 (<span onclick="show_table()" class="chart_tit">共计 99 个</span>)', 
    data23=[
        {
            name:'设备量',
            data: [4718, 3156, 2268,2110,3111,2415,3166,2268,2110,1150,1180,1818]
        } 
    ],  
    // name24 = 'xx线-支柱 (<span onclick="show_table()" class="chart_tit">共计 87 个</span>)', 
    // data24=[
    //     {
    //         name:'设备量',
    //         data: [823, 256, 211,215]
    //     } 
    // ],
    data_che1 = ['邓州供电车间','南阳供电车间','宝丰供电车间','唐河供电车间','巩义供电车间',
   '洛阳北供电车间','西峡供电车间','灵宝供电车间','洛阳供电车间','三门峡供电车间','洛阳龙门供电车间',
   '三门峡南供电车间'],
    data_che2 = ['邓州工区','南阳工区','宝丰工区','唐河工区'],
    data_che3 = ['xxx区段','xxx区段','xxx区段','xxx区段','xxx区段','xxx区段','xxx区段','xxx区段','xxx区段','xxx区段','xxx区段','xxx区段'];

// 二级页面 
//柱状图
function updata21(data,name,data_che){ 
   var chart  = Highcharts.chart('container21', {
       chart: {
           type: 'column'
       },
       title: {
           useHTML:true,
           text: name || '',
       }, 
        colors: ["#4ad5ff", "#cf990b","rgb(255, 0, 102)","rgb(85, 191, 59)", "rgb(223, 83, 83)", "rgb(170, 238, 238)"],
    
       xAxis: {
           categories: data_che ||  ['邓州供电车间','南阳西供电车间','南阳供电车间','宝丰供电车间','唐河供电车间','巩义供电车间','洛阳北供电车间','西峡供电车间','灵宝供电车间','洛阳供电车间','三门峡供电车间','洛阳龙门供电车间','三门峡南供电车间',]
           , title: {
               text: null
           },
            // labels: { 
            //     rotation: -45, //倾斜的角度
            // }
       },
       yAxis: {
           min: 0,
           title: {
               text: null,
               align: 'high'
           },
           labels: {
               overflow: 'justify'
           }
       },
       tooltip: {
           valueSuffix: '件'
       },
       plotOptions: {
           column:{
               colorByPoint: true, //多颜色
           },
           bar: {
               dataLabels: {
                   // ,allowOverlap 默认是 false，即不允许数据标签重叠
               }
           },
           series: {
               cursor: 'pointer',
               events: {
                   click: function (event) { 
                       // updata22(data22,name22,data_che2) 

                        updata22(data22,'工区(<span onclick="show_table()" class="chart_tit">共计 40 个</span>)' ,data_che2) 
                       // parent.$("#popup2").show()
                       //console.log(parent.$("#popup1"))
                   }
               }
           }
       },
       legend: {
           // layout: 'vertical',
           align: 'left',
           verticalAlign: 'top',
           x: 160,
           y: 30,
           enabled: false,//关闭图例
       },
       credits: {
       },
       series: data
   }); 
   
  // (function(H) {
  //       H.wrap(H.Pointer.prototype, 'normalize', function(proceed) { 
  //           console.log(this)
  //           var e = arguments[1],
  //               chartPosition = arguments[2],
  //               ePos,
  //               containerSize = this.chart.container.clientWidth; 
  //           ePos = e.touches ?
  //               (e.touches.length ? e.touches.item(0) : e.changedTouches[0]) :
  //               e;
  //           if (!chartPosition) {
  //               this.chartPosition = chartPosition = H.offset(this.chart.container);
  //           }
  //           return H.extend(e, {
  //               chartX: Math.round(ePos.pageX/0.6  - containerSize * 0.01 - chartPosition.left ),
  //               chartY: Math.round(ePos.pageY/0.6 - chartPosition.top)
  //           });
  //       });
  //   })(chart.prototype); 
}  
// 柱状图
function updata22(data,name,data_che){
   var chart  = Highcharts.chart('container22', {
       chart: {
           type: 'column'
       },
       title: {
           useHTML:true,
           text: name || '',
       }, 
        colors: ["#4ad5ff", "#cf990b","rgb(255, 0, 102)","rgb(85, 191, 59)", "rgb(223, 83, 83)", "rgb(170, 238, 238)"],
    
       xAxis: {
           categories: data_che ||  ['邓州供电车间','南阳西供电车间','南阳供电车间','宝丰供电车间','唐河供电车间','巩义供电车间','洛阳北供电车间','西峡供电车间','灵宝供电车间','洛阳供电车间','三门峡供电车间','洛阳龙门供电车间','三门峡南供电车间',]
           , title: {
               text: null
           },
            // labels: { 
            //     rotation: -45, //倾斜的角度
            // }
       },
       yAxis: {
           min: 0,
           title: {
               text: null,
               align: 'high'
           },
           labels: {
               overflow: 'justify'
           }
       },
       tooltip: {
           valueSuffix: '件'
       },
       plotOptions: {
           column:{
               colorByPoint: true, //多颜色
           },
           bar: {
               dataLabels: {
                   // ,allowOverlap 默认是 false，即不允许数据标签重叠
               }
           },
           series: {
               cursor: 'pointer',
               events: {
                   click: function (event) { 
                       show_table()
                       // parent.$("#popup2").show()
                       //console.log(parent.$("#popup1"))
                   }
               }
           }
       },
       legend: {
           // layout: 'vertical',
           align: 'left',
           verticalAlign: 'top',
           x: 160,
           y: 30,
           enabled: false,//关闭图例
       },
       credits: {
       },
       series: data 
   });
}     
//柱状图
function updata23(data,name,data_che){
   var chart  = Highcharts.chart('container23', {
       chart: {
           type: 'column'
       },
       title: {
           useHTML:true,
           text: name || '',
       }, 
        colors: ["#4ad5ff", "#cf990b","rgb(255, 0, 102)","rgb(85, 191, 59)", "rgb(223, 83, 83)", "rgb(170, 238, 238)"],
    
       xAxis: {
           categories: data_che ||  ['邓州供电车间','南阳西供电车间','南阳供电车间','宝丰供电车间','唐河供电车间','巩义供电车间','洛阳北供电车间','西峡供电车间','灵宝供电车间','洛阳供电车间','三门峡供电车间','洛阳龙门供电车间','三门峡南供电车间',]
           , title: {
               text: null
           },
            // labels: { 
            //     rotation: -45, //倾斜的角度
            // }
       },
       yAxis: {
           min: 0,
           title: {
               text: null,
               align: 'high'
           },
           labels: {
               overflow: 'justify'
           }
       },
       tooltip: {
           valueSuffix: '件'
       },
       plotOptions: {
           column:{
               colorByPoint: true, //多颜色
           },
           bar: {
               dataLabels: {
                   // ,allowOverlap 默认是 false，即不允许数据标签重叠
               }
           },
           series: {
               cursor: 'pointer',
               events: {
                   click: function (event) { 
                       show_table()
                       // updata24(data24,name24,data_che2)  
                   }
               }
           }
       },
       legend: {
           // layout: 'vertical',
           align: 'left',
           verticalAlign: 'top',
           x: 160,
           y: 30,
           enabled: false,//关闭图例
       },
       credits: {
       },
       series: data
   });
}  
 
// 切换表格
function show_table(){ 
    $(document).find('.modal:visible .nav-tabs li').eq(1).click()
} 
 
$(document).on('click', '.modal-nav-tabs li', function () { //弹窗页面切换
    var ind = $(this).index()
    $(this).parent().find('a').removeClass("active");
    $(this).find('a').addClass("active");
    $(this).parents('.top_body').find('.ztab').hide();
    $(this).parents('.top_body').find('.ztab').eq(ind).fadeIn();
})   


//可绑定切换
function nav_tabs(e) { 
    var ind = $(this).index()
    var _p = $(this).parent()
    _p.find("li a").removeClass("active");
    $(this).find('a').addClass("active");
    e.data.child.hide();
    e.data.child.eq(ind).show(); 
}  

//随机数
function random(min,max){
    return ~~(Math.random()*(max-min) + min);
}  
function checkTime(i)
{
    if ( i-0 <10) 
      {i="0" + i}
      return i
}
function e_modal(_name,_this){       //标题传参 
    var title = _name || '' 
    $(_this).modal().find('.modal-title').text(title) 
}  
function load() {
    var loadstr = '<div class="loadingz"><p>图表加载中...</p></div>'
    $('[id^="container"]').html(loadstr); 
}
 

// $(window).resize(function(){ 
//   scr_stop(auto_hei) 
//   scr_stop(moadl_chart_hei)
// })
function scr_stop(fn,arg) {  //节流
    clearTimeout(fn.timer);
    fn.timer = setTimeout(function (){
        if(Object.prototype.toString.call(arg)=='[object Array]'){
            fn.apply(fn,arg)
        }else{
            fn(arg)
        }
    }, 222);
}
function auto_hei(){  
  var hei = Math.max(400 , $(window).height() - $('.content >.tabs-body').height() - 46 -10)
  $('.content .chart-body  .chartp').height(hei)
  // $('.con-chart .chart0').animate({height:hei / 2 - 50+'px'},500)
} 
function moadl_chart_hei(_modal){ 
  var hei = Math.max(300 ,  $('.modal').height() - 175) 
  $(_modal + ' .ztab .chartp').height(hei)
  $(_modal + ' .ztab .chartp > div').height('100%')
}