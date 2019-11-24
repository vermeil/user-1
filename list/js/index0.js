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
    init()
//     $('#nav-tabs li').on('click', {child:$('.catenary')},nav_tabs)
//     for (var i = 6; i >= 0; i--) {  
//         var colors = ["rgb(59,161,205)",  "rgb(43,144,143)", 
//  "rgb(85, 191, 59)","rgb(255, 0, 102)","rgb(255,116,116)","rgb(144, 238, 126)", "rgb(223, 83, 83)", "rgb(170, 238, 238)"]
//         var cor = (i%2==0) ? false: colors;  
//         updata1(data1, name1[i], $('.container1').eq(i), categories1,0,cor,true)  
//         // updata1(data2, name2[i] + random(200,500), $('.container2').eq(i))    
//     }  
//     $('#nav-tabs li:eq(1)').one('click',function(){
//         for (var i = 6; i >= 0; i--) {  
//             //var colors = ["rgb(59,161,205)","rgb(230, 218, 120)", "rgb(85, 191, 59)",  "rgb(170, 238, 238)", "rgb(144, 238, 126)", "rgb(223, 83, 83)"]
//             // var cor = (i%2==0) ? false: colors;  
//             updata2(data2, name2[i], $('.container2').eq(i), categories2,0,true)  
//             // updata1(data2, name2[i] + random(200,500), $('.container2').eq(i))    
//         } 
//     })
});  
function init(){ 
    var colors = ["rgb(59,161,205)",  "rgb(43,144,143)", "rgb(85, 191, 59)","rgb(255, 0, 102)","rgb(255,116,116)","rgb(144, 238, 126)", "rgb(223, 83, 83)", "rgb(170, 238, 238)"]
    var colors2 = [ "rgb(43,144,143)", "rgb(85, 191, 59)","rgb(255, 0, 102)","rgb(255,116,116)","rgb(144, 238, 126)", "rgb(223, 83, 83)", "rgb(170, 238, 238)"]
    var cor = colors;  
    var cor2 = colors2; 
    updata1(data1, name1[0], $('.container1').eq(0), categories1,'line',cor,true)  
    
    updata1(data2, name1[1], $('.container1').eq(1), categories2,0,cor,true)  
    
    updata1(data3, name1[2], $('.container1').eq(2), categories3,0,cor,true)  
    
    updata1(data4, name1[3], $('.container1').eq(3), categories4,0,cor2,true)  
    
    updata1(data5, name1[4], $('.container1').eq(4), categories5,0,cor,true)  
    
    updata3(data6, name1[5], $('.container1').eq(5))    
}

var categories1 = ['2019-11-21 ','2019-11-22 ','2019-11-23 ','2019-11-24 ','2019-11-25'],
    name1 = ['通话表概况','手机运营商','主叫和被叫关系表','用户表', '基站信息', '运行商部分'],
    data1 =  [
        { 
            name: '移动',
            data: [ 116, 111,140,151,561]
        } ,
        { 
            name: '联通',
            data: [ 116, 131,250,192,321]
        } ,
        { 
            name: '电信',
            data: [ 216, 131,350,252,108]
        } 
    ] , 
    categories2 = ['移动','联通','电信'], 
    data2 =  [
        { 
            name: '早:总时长',
            data: [ 116, 111,140]
        } ,
        { 
            name: '中:总时长',
            data: [ 116, 131,250]
        } ,
        { 
            name: '晚:总时长',
            data: [ 216, 131,350]
        } 
    ], 
    categories3 = ['1393701234','1393701235','1393701236','1393701237','1393701238','1393701239','1393701241','1393701243'], 
    data3 =  [
        { 
            name: '主叫次数',
            data: [ 106, 111,140,214,321,111]
        },
        { 
            name: '被叫次数',
            data: [ 116 ,215,198,131,250,198]
        } 
    ] , 
    categories4 = ['郑州','开封','洛阳','平顶山','安阳','商丘','鹤壁','新乡','焦作','濮阳','许昌','漯河','三门峡','南阳','信阳','周口','驻马店'], 
    data4 =  [
        { 
            name: '用户数量',
            data: [ 1106, 2111,1140,2114,321,1311,2140,2214,1321,1333,1689,1548,1276,994,3201,1254, 1477]
        } 
    ] , 
    categories5 = ['郑州','开封','洛阳','平顶山','安阳','商丘','鹤壁','新乡','焦作','濮阳','许昌','漯河','三门峡','南阳','信阳','周口','驻马店'], 
    data5 =  [
        { 
            name: '基站个数',
            data: [ 106, 111,140,214,321,111,140,214,321,333,189,548,176,99,301,254, 177]
        } 
    ] , 
    data6 =  [{
        name: '用户数量',
        colorByPoint: true,
        data: [{   
                name: '移动',
                y: 400,
                sliced: true,
                selected: true
        }, {
                name: '联通',
                y: 232
        }, {
                name: '电信',
                y: 328
        }]
    }]
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
            text: name //+ ' <span style="font-size:14px;">['+random(200,500)+']</span>'|| '', 
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
                innerSize:0,
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
                        var ind = _this.parent().index() + 1 
                        $('.head li:eq('+ ind +')', parent.document).click()
                        // charts1_click(event.point.category + '-'+event.point.series.name+'-'+ name)
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
                        var ind = _this.parent().index() + 1 
                        $('.head li:eq('+ ind +')', parent.document).click()
                        // charts1_click(event.point.category + '-'+event.point.series.name+'-'+ name)
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
                innerSize: '40%',
                slicedOffset: 20,         // 突出间距
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,//是否直接呈现数据 也就是外围显示数据与否
                    distance: -40,//通过设置这个属性，将每个小饼图的显示名称和每个饼图重叠
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
                            var ind = _this.parent().index() + 1 
                            $('.head li:eq('+ ind +')', parent.document).click()
                            // pie_click(e.point.name)
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
        series: data 
    }) 
}  

function charts1_click(_name){  
   //createwin({ width: 1400, height: 600, url: '/myinfo/demo/myinfo_ly/secondView.html', title: $(this).text() || event.point.category, id: 'accidentedit', isiframe: true }); 
   e_modal(_name,$('#modal0'))  
} 
function charts2_click(_name){  
   //createwin({ width: 1400, height: 600, url: '/myinfo/demo/myinfo_ly/secondView.html', title: $(this).text() || event.point.category, id: 'accidentedit', isiframe: true }); 
   e_modal(_name,$('#modal1'))  
   // updata24(data24,name24,data_che2) 
} 
$('.catenary .chart0').on('click',function(){ 
    var tab = $('.catenary:visible').index() - 1
    $('#modal'+tab+' .table_equipment').hide() 
    $('#modal'+tab+' .table_equipment').eq($(this).index()).show() 
})
 
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
 

$(window).resize(function(){ 
  scr_stop(auto_hei) 
  scr_stop(moadl_chart_hei)
  scr_stop(init)
})
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