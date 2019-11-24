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
    moadl_chart_hei('#modal0')

    load();    
    $('#nav-tabs li').on('click', {child:$('.catenary')},nav_tabs)
    for (var i = 11; i >= 0; i--) {  
        var colors = ["rgb(59,161,205)","rgb(144, 238, 126)", "rgb(43,144,143)","rgb(85, 191, 59)","rgb(255, 0, 102)", "rgb(223, 83, 83)", "rgb(170, 238, 238)"]
        // var cor = (i%2==0) ? false: colors;  
        $('.catenary1 .mode-chart-tit').eq(i).html(name1[i] +' <span style="font-size:14px;">['+random(200,500)+']</span>')
        updata1(data1, name1[i], $('.container1').eq(i), categories1,0,colors)  
        updata1(data1_1, name1[i], $('.container1_1').eq(i), categories1_1,0,false)  
        // updata1(data2, name2[i] + random(200,500), $('.container2').eq(i))    
    } 

    $('#nav-tabs li:eq(1)').one('click',function(){
        for (var i = 11; i >= 0; i--) {  
            var colors = ["rgb(59,161,205)","rgb(230, 218, 120)", "rgb(85, 191, 59)","rgb(170, 238, 238)", "rgb(144, 238, 126)", "rgb(223, 83, 83)"]
            var cor = (i%2==0) ? false: colors;  
            updata2(data2, name2[i], $('.container2').eq(i), categories2,0,cor)  
            // updata1(data2, name2[i] + random(200,500), $('.container2').eq(i))    
        } 
    })
    // 动态模拟生成 ud-xing  all-xing 
    for (var i = 1; i < 123; i++) {  
        //随机赋 红色 状态
        var class_str1 = random(1,20) > 3 ? 'line-zhu' : 'line-zhu line-zhu-r';
        //随机赋 绿色 状态
        var class_str2 = random(1,20) > 17 ? 'line-radius' : 'line-radius line-radius-g';
        if(i%2 == 0){   
            $('.all-xing .up-xing').append(`
                <div class="zhu"> 
                    <span class="${class_str1}"></span>
                    <div class="line-ind">${i}</div>
                </div>
            `)
            //其他设备
            $('.ud-xing .up-xing').append(` 
                <div class="zhu"> 
                    <div class="${class_str2}"></div>
                    <div class="line-ind">${i/2}</div>
                </div>
            `)
        }else{  
            $('.all-xing .down-xing').append(`
                <div class="zhu"> 
                    <span class="${class_str1}"></span>
                    <div class="line-ind">${i}</div>
                </div>
            `)
        } 
    }
    // $('.top-btn .btn').on('click',function(){  //设备切换
    //     $(this).siblings().removeClass('decoration_ar')
    //     $(this).addClass('decoration_ar')

    //     $('.ud-xing , .all-xing').hide() 
    //     if($(this).text() == '支柱'){
    //         $('.all-xing').fadeOut().fadeIn()
    //     }else{ 
    //         $('.ud-xing').fadeOut().fadeIn()
    //     }
    // })  
    $('.zhan-box .zhan').on('click',function(){ //xx站切换
        $(this).parent().find('.line-radius').removeClass('line-radius-active')
        $(this).find('.line-radius').addClass('line-radius-active')   
    }) 

    $('.zhan-box .zhan').on('click' ,ud_all_xing)       //xxx站模拟切换
    // $('.top-btn .checkbox label').click(ud_all_xing) //单选
    function ud_all_xing(even){  //模拟切换   切换含有单选多选时的事件冲突兼容  
      if($(this).find('[type="radio"]').attr('stopclick') == 'true' || $(this).find('[type="radio"]').attr('stopclick') == undefined){
        $(this).find('[type="radio"]').attr('stopclick','false') 
        if($('.ud-xing:visible').length){
            // $('.all-xing').hide() 
            $('.ud-xing').fadeOut().fadeIn() 
        }else if($('.all-xing:visible').length){ 
            // $('.ud-xing').hide() 
            $('.all-xing').fadeOut().fadeIn()
        }  
        $('.xing_scroll , .a_table').fadeOut().fadeIn() 
      }else{ 
        $(this).find('[type="radio"]').attr('stopclick','true') 
      }
    } 

    $(document).on('click', '.all-xing .zhu', function () {    
       $(this).siblings().find('.line-ind').removeClass('xing-active')
       $(this).find('.line-ind').addClass('xing-active') 
       // e_modal('全面检查',$('#modal1_1'))  
       // $(document).find('.modal:visible .nav-tabs li').eq(1).click()
       $(document).find('.modal:visible .a_table').fadeOut().fadeIn()
    })   
    $(document).on('click', '.ud-xing .zhu', function () { 
       $(this).siblings().find('.line-radius').removeClass('radius-active')
       $(this).find('.line-radius').addClass('radius-active') 
       $(this).siblings().find('.line-ind').removeClass('ind-active')
       $(this).find('.line-ind').addClass('ind-active') 
       // e_modal('其他设备',$('#modal2_1'))  
       $(document).find('.modal:visible .a_table').fadeOut().fadeIn()
    }) 
});  

var categories1 = ['新乡段普铁','洛阳段普铁','郑州段普铁'],
    name1 =  ["全面检查" ,"锚段关节"  ,"滑轮补偿" ,"棘轮补偿" ,"弹簧补偿" ,"交叉线岔" ,"无交叉线岔","带辅助无交叉线岔" ,"分段（分相）绝缘器","隔离开关" ,"避雷器","自动过分相"],
    data1 =  [
        {  
            name: '总数',
            data: [156, 141,140]
        }, 
        { 
            type:'line',
            name: '完成量',
            data: [81,70,120]
        } 
    ],
    categories1_1 =  ['新乡段高铁','洛阳段高铁','郑州段高铁'],
    data1_1 =  [
        {  
            name: '总数',
            data: [156,  141,140]
        }, 
        { 
            type:'line',
            name: '完成量',
            data: [ 91,70,120]
        } 
    ],
    categories2 = ['京广高铁','郑西高铁', '安李支线','侯月线','京广线','京九线', '焦柳线', '陇海线','太焦线','宁西线', '新月线','新兖线','郑开城际','郑州枢纽','郑焦铁路'], 
    name2 =  ["全面检查" ,"锚段关节"  ,"滑轮补偿" ,"棘轮补偿" ,"弹簧补偿" ,"交叉线岔" ,"无交叉线岔","带辅助无交叉线岔" ,"分段（分相）绝缘器","隔离开关" ,"避雷器","自动过分相"],
    data2 =  [
        { 
            name: '数量',
            data: [ 156, 211,140,60,185,140,103,50,111,140 ,156, 211,140,60,185]
        } ,
        { 
            // type:'areaspline',
            type:'line',
            name: '完成量',
            data: [ 126, 201,110,30,115,100,73,40,71,130,126, 201,110,30,115]
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
            type: _type || 'column',   
        }, 
        title: {
            // x:12, //yyy
            //+ ' <span style="font-size:14px;">['+random(200,500)+']</span>'
            text: '', 
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
            categories: categories,
            labels: {
                step: 1,
                autoRotationLimit: 40,
                autoRotation: false,
                formatter: function() {  
                    var labelVal = this.value;
                    var reallyVal = labelVal;
                    var lvl = labelVal.length;
                    if(lvl > 2 && lvl <=3){
                        reallyVal = labelVal.substr(0,2)+"<br/>"+labelVal.substring(2,lvl);
                    }else if(lvl > 3 ){
                        reallyVal = labelVal.substr(0,2)+"<br/>"+labelVal.substr(2,2)+"<br/>"+labelVal.substring(4,lvl);
                    } 
                    // console.log(reallyVal)
                    return reallyVal;
                }
            }
        },
        yAxis: {
             tickWidth: 0,//去掉刻度
             gridLineWidth: 0,//去掉y轴方向的横线       
            title: {
                text: null,  
                // text: ' .', //yyy
                // style: { "color":'rgba(0,0,0,0)' } //yyy
                // text:ytit || '(万元)', 
                // align: 'high'
            }, 
            labels: { 
                enabled:false,//去掉刻度数字 
            }
        },
        tooltip: { 
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
                        charts1_click(event.point.category + '-'+ name)
                    }
                }
            },
            areaspline:{ 
                colorByPoint: _colorByPoint, //多颜色
                cursor: 'pointer',
                events: {
                    click: function (event) {  
                        charts1_click(event.point.category + '-'+ name)
                    }
                }
            },
            column:{
                // groupPadding:0.2, //柱状图间距
                colorByPoint: _colorByPoint, //多颜色
                cursor: 'pointer',
                events: {
                    click: function (event) {  
                        charts1_click(event.point.category + '-'+ name)
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
            gridLineWidth: 0,//去掉y轴方向的横线            
            min: 0,
            title: { 
                text: null,  
                // text: ' .', //yyy
                // style: { "color":'rgba(0,0,0,0)' } //yyy 
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
                        charts2_click(event.point.category + '-'+ name)
                    }
                }
            },
            areaspline:{
                colorByPoint: _colorByPoint, //多颜色
                cursor: 'pointer',
                events: {
                    click: function (event) {  
                        charts2_click(event.point.category + '-'+ name)
                    }
                }
            },
            column:{
                colorByPoint: _colorByPoint, //多颜色
                cursor: 'pointer',
                events: {
                    click: function (event) {  
                        charts2_click(event.point.category + '-'+ name)
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
 
function charts1_click(_name){  
   //createwin({ width: 1400, height: 600, url: '/myinfo/demo/myinfo_ly/secondView.html', title: $(this).text() || event.point.category, id: 'accidentedit', isiframe: true }); 
   e_modal(_name,$('#modal0'))   
   updata21(data21,_name + '(<span onclick="show_table()" class="chart_tit">共计 59 个</span>)',data_che1) 
   updata22(data22,'工区(<span onclick="show_table()" class="chart_tit">共计 40 个</span>)' ,data_che2) 

   $('#modal0 .tabs-body li').eq(0).click() 
} 
function charts2_click(_name){   
    if(_name.indexOf('全面检查') > -1){ 
        e_modal(_name,$('#modal1'))  
        scale(true) //上下行
    }else{ 
        e_modal(_name,$('#modal2'))  
        scale(false)//单行
    }
}  
var chart_ind = 0
$('.catenary .chart0').on('click',function(){ 
    chart_ind = $(this).index()
    var tab = $('.catenary:visible').index() - 1  
    if(tab == 1){  
     var ind = $(this).index() - 1 //因为区别于全面故 -1
     $('#modal2 .table_equipment , #modal2 .table_equipment_record').hide()
     $('#modal2 .table_equipment').eq(ind).show() 
     $('#modal2 .table_equipment_record').eq(ind).show() 
   } 
})
 
$('#modal0 .background_g').on('click',function(){   
     e_modal('设备详情',$('#modal0_1'))  
     var ind = chart_ind
     $('#modal0_1 .table_equipment , #modal0_1 .table_equipment_record').hide()
     $('#modal0_1 .table_equipment').eq(ind).show() 
     $('#modal0_1 .table_equipment_record').eq(ind).show()  
})

var name21 = '郑州段普铁-支柱 (<span onclick="show_table()" class="chart_tit">共计 50 个</span>)',  
    data21=[
        {
            name:'总量',
            data: [4718, 3156, 2268,2110,3111,2415,3166,2268,2110,1150,1180,1818]
        } ,
        { 
            name:'完成量',
            data: [2111, 1212, 1212,888,1455,700,2415,1540,1777,1056,1001,1007]
        } 
    ],  
    name22 = '郑州段高铁-工区-支柱 (<span onclick="show_table()" class="chart_tit">共计 40 个</span>)', 
    data22=[
        {
            name:'总量',
            data: [4718, 3156, 2268,1501]
        } ,
        { 
            name:'完成量',
            data: [2111, 1212, 1212,888]
        } 
    ], 
    data_che1 = ['邓州供电车间','南阳供电车间','宝丰供电车间','唐河供电车间','巩义供电车间',
   '洛阳北供电车间','西峡供电车间','灵宝供电车间','洛阳供电车间','三门峡供电车间','洛阳龙门供电车间',
   '三门峡南供电车间'],
    data_che2 = ['邓州工区','南阳工区','宝丰工区','唐河工区'];

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
               colorByPoint: false, //多颜色
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
               colorByPoint: false, //多颜色
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
// 切换表格
function show_table(){ 
    $(document).find('.modal:visible .nav-tabs li').eq(1).click()
} 
 
function e_modal(_name,_this){       //标题传参 
    var title = _name || '' 
    $(_this).modal().find('.modal-title').text(title) 
}  

$(document).on('click', '.modal-nav-tabs li', function () { //弹窗页面切换
    var ind = $(this).index()
    $(this).parent().find('a').removeClass("active");
    $(this).find('a').addClass("active");
    $(this).parents('.top_body').find('.ztab').hide();
    $(this).parents('.top_body').find('.ztab').eq(ind).fadeIn();
})    

function load() {
    var loadstr = '<div class="loadingz"><p>图表加载中...</p></div>'
    $('[id^="container"]').html(loadstr); 
}  

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
//十位加0
function checkTime(i){
    if ( i-0 <10){i="0" + i} return i
}  


//导航条
$('.xing_scroll .slide_rail').on('mousedown.xing',function(e){
    var slide_rail = $('.slide_rail:visible').width() - $('.slider').width()  //滑道中 滑块的范围
    var slider = $('.slider').width() / 2 //滑块一半的宽度
    //弹窗偏移值
    var parent_modal = ($(this).parents('.modal').outerWidth() - $(this).parents('.modal-dialog').outerWidth()) / 2 
    var _this = $(this).find('.slider')  

    var ex = e.clientX - parent_modal - slider*2
    ex = Math.max(slider , ex) 
    ex = Math.min(slide_rail , ex - slider)  
    _this.css('left',ex)    

    var xing_wid  = Math.max($('.up-down-xing:visible .up-xing').width() , $('.up-down-xing:visible .down-xing').width())
      var xing_move = ex / slide_rail * (xing_wid - slide_rail - slider*2) 
    $('.up-down-xing:visible').css('marginLeft', -xing_move)    


    $(document).on('mousemove.xing' , function(e){   
      var ex = e.clientX - parent_modal - slider*2
      ex = Math.max(slider , ex) 
      ex = Math.min(slide_rail , ex - slider)  
      _this.css('left',ex)   

      var xing_wid  = Math.max($('.up-down-xing:visible .up-xing').width() , $('.up-down-xing:visible .down-xing').width())
      var xing_move = ex / slide_rail * (xing_wid - slide_rail - slider*2)  
      $('.up-down-xing:visible').css('marginLeft', -xing_move)   
    })


    $(document).on('mouseup.xing',function(){ 
      $(document).off('.xing')  
    })
}) 
  

function scale(ud_xing){
    $('.xing_scroll .coordinate').remove() 
    //模拟刻度  3个
    var len = 3;
    if(ud_xing){ //存在上行下行时
        var all_len = ($('.all-xing .up-xing .zhu').length + $('.all-xing .down-xing .zhu').length) / len; 
    }else{ 
        var all_len = $('.ud-xing  .up-xing .zhu').length / len; 
    } 
    for (var i = 1; i < len + 1; i++) {  
      // var xing = random(0,2) == 0 ? '上行':'下行';
      var left = Math.floor(all_len*i);   
      var str1 = `<div class="coordinate" style="left:calc(${i/(len)*100}% - 14px); top:-5px;">
                    <div class="coordinate-text" title="${left}" style="top:22px;">
                        ${left}
                    </div>
                    <div class="coordinate-rectangle" title="${left}" >
                    </div>
                </div>`
      // var str2 = `<div class="coordinate" style="left:${left}%; top:-25px;">
      //                 <div class="coordinate-text" title="新乡北站">
      //                     新乡北站${left}
      //                 </div>
      //                 <div class="coordinate-rectangle" title="新乡北站">
      //                 </div>
      //             </div>` 
      // if(xing == '上行'){
      //   $('.xing_scroll .slide_rail').append(str1) 
      // }else{
      //   $('.xing_scroll .slide_rail').append(str2)  
      // }
      $('.xing_scroll .slide_rail').append(str1) 
    } 
}
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
  var hei = Math.max(400 , $(window).height() - $('.content >.tabs-body').height() - 46 - 10)
  $('.content .chart-body .chartp').height(hei)
  // $('.con-chart .chart0').animate({height:hei / 2 - 50+'px'},500)
}  
function moadl_chart_hei(_moadl){ 
  var hei = Math.max(300 ,  $('.modal').height() - 175) 
  $(_moadl + ' .ztab .chartp').height(hei)
  $(_moadl + ' .ztab .chartp > div').height('100%')
}