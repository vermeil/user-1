$(function(){ 
    load();   
    $('#nav-tabs li').on('click', function () { //页面切换
        var ind = $(this).index()
        $(".nav-tabs li a").removeClass("active");
        $(this).find('a').addClass("active");
        $('.catenary').hide();
        $('.catenary').eq(ind).fadeIn();
    }) 
    for (var i = 9; i >= 0; i--) {  
        var colors = ["rgb(119,152,191)", "rgb(59,161,205)", "rgb(255,116,116)",  "rgb(43,144,143)",
 "rgb(144, 238, 126)","rgb(255, 0, 102)","rgb(85, 191, 59)", "rgb(223, 83, 83)", "rgb(170, 238, 238)"]
        var cor = (i%2==0) ? 'true': colors;  
        updata2(data1, name1[i] + random(200,500), $('.container1').eq(i), categories,0,cor)  
        // updata1(data2, name2[i] + random(200,500), $('.container2').eq(i))    
    } 

    // 动态生成 ud-xing  all-xing 
    for (var i = 0; i < 60; i++) {  
        if(i%2 == 0){  
            $('.ud-xing .up-xing').append(`
                <div class="zhu"> 
                    <span class="line-zhu"></span>
                    <div class="line-ind">${i}</div>
                </div>
            `)
            //其他设备
            $('.all-xing .up-xing').append(` 
                <div class="zhu"> 
                    <div class="line-radius"></div>
                    <div class="line-ind">${i/2}</div>
                </div>
            `)
        }else{  
            $('.ud-xing .down-xing').append(`
                <div class="zhu"> 
                    <span class="line-zhu"></span>
                    <div class="line-ind">${i}</div>
                </div>
            `)
        } 
    }
    $('.top-btn .btn').on('click',function(){  //设备切换
        $(this).siblings().removeClass('decoration_ar')
        $(this).addClass('decoration_ar')

        $('.ud-xing , .all-xing').hide() 
        if($(this).text() == '全面检查'){
            $('.ud-xing').fadeOut().fadeIn()
        }else{ 
            $('.all-xing').fadeOut().fadeIn()
        }
    })  
    $('.zhan-box .zhan').on('click',function(){ //xx站切换
        $(this).parent().find('.line-radius').removeClass('line-radius-active')
        $(this).find('.line-radius').addClass('line-radius-active')   
    }) 

    $('.zhan-box .zhan').on('click' ,ud_all_xing)
    $('.top-btn .checkbox label').click(ud_all_xing)
    function ud_all_xing(even){  //模拟切换     
      if($(this).find('[type="radio"]').attr('stopclick') == 'true' || $(this).find('[type="radio"]').attr('stopclick') == undefined){
        $(this).find('[type="radio"]').attr('stopclick','false')

        if($('.ud-xing:visible').length){
            $('.all-xing').hide() 
            $('.ud-xing').fadeOut().fadeIn() 
        }else if($('.all-xing:visible').length){ 
            $('.ud-xing').hide() 
            $('.all-xing').fadeOut().fadeIn()
        }  
      }else{ 
        $(this).find('[type="radio"]').attr('stopclick','true') 
      }
    }

    $('.all-xing .zhu').on('click',function(){  //全面检查 弹窗
        e_modal('全面检查',$('#modal1'))  
    }) 
    $('.ud-xing .zhu').on('click',function(){   //其他设备 弹窗 
        e_modal('xxx支柱',$('#modal2'))  
    })  
});  

var name2 = ['全面检查','锚段关节', '滑轮补偿', '棘轮补偿', '弹簧补偿', '无交叉线岔', '交叉线岔', '带辅助无交叉线岔', '分段(分相)绝缘器', '隔离开关'],
    data2 = [
                {
                    name: 'xx段',
                    y: 24
                },{       
                    name: 'xx段',
                    y: 61,
                    sliced: true,
                    selected: true
                },{
                    name: 'xx段',
                    y: 54
                }, {
                    name: 'xx段',
                    y: 37
                }
            ],
    categories = ['新乡段','洛阳段','郑州段'],
    name1 = ['全面检查','锚段关节', '滑轮补偿', '棘轮补偿', '弹簧补偿', '无交叉线岔', '交叉线岔', '带辅助无交叉线岔', '分段(分相)绝缘器', '隔离开关'],
    data1 =  [
        { 
            name: '高铁',
            data: [ 156, 111,140]
        } ,
        { 
            name: '普铁',
            data: [ 116, 131,150]
        } 
    ]
;
   
//bar || column  数据 名称  对象  x轴数据   图标类型  是否多颜色   单位
function updata2(data,name,_this,categories,_type,_colorByPoint,ytit){ 
    var colors =  [ "rgb(59,161,205)", "rgb(255,116,116)", "rgb(43,144,143)","rgb(119,152,191)", 
 "rgb(144, 238, 126)","rgb(255, 0, 102)","rgb(85, 191, 59)", "rgb(223, 83, 83)", "rgb(170, 238, 238)"];
    if(_colorByPoint == 'false'){
        _colorByPoint = false;
    }else if(Object.prototype.toString.call(_colorByPoint)=='[object Array]'){ 
        colors = _colorByPoint;
        _colorByPoint = true;
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
            text: name || '', 
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
            categories: categories || ['工务','电务','供电']
        },
        yAxis: {
            min: 0,
            title: {
                text: null,
                // text:ytit || '(万元)', 
                align:'high'
            },
            labels: {
                overflow: 'justify'
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
                // colorByPoint: _colorByPoint, //多颜色
                cursor: 'pointer',
                events: {
                    click: function (event) { 
                    }
                }
            },
            areaspline:{
                colorByPoint: false, //多颜色
            },
            column:{
                colorByPoint: _colorByPoint, //多颜色
                cursor: 'pointer',
                events: {
                    click: function (event) {  
                        charts_click(event.point.category)
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
function updata1(data,name,_this){
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
function nav_tabs() {
    var ind = $(this).index()
    var _p = $(this).parent()
    _p.find("li a").removeClass("active");
    $(this).find('a').addClass("active");
    _p.next('.act_date').children('[class ^= "date"]').hide();
    _p.next('.act_date').children('[class ^= "date"]').eq(ind).show(); 
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


var name23 = '郑州段-按设备分析(共计 5359 条)', 
    data23=[
        {
            name:'设备量',
            data: [4718, 3156, 2268,2110,3111,2415,3166,2268,2110,1150,1180,1818]
        } 
    ],  
    name25 = '工区设备(共计 560 条)', 
    data25=[
        {
            name:'设备量',
            data: [823, 256, 211,215]
        } 
    ],
    data_che1 = ['邓州供电车间','南阳供电车间','宝丰供电车间','唐河供电车间','巩义供电车间',
   '洛阳北供电车间','西峡供电车间','灵宝供电车间','洛阳供电车间','三门峡供电车间','洛阳龙门供电车间',
   '三门峡南供电车间'],
    data_che2 = ['邓州工区','南阳工区','宝丰工区','唐河工区'];

function charts_click(_name){  
   //createwin({ width: 1400, height: 600, url: '/myinfo/demo/myinfo_ly/secondView.html', title: $(this).text() || event.point.category, id: 'accidentedit', isiframe: true }); 
   e_modal(_name,$('#modal0')) 
   updata23(data23,name23,data_che1) 
   updata25(data25,name25,data_che2) 
} 
// 二级页面 
//柱状图
function updata23(data,name,data_che){
   var chart  = Highcharts.chart('container23', {
       chart: {
           type: 'column'
       },
       title: {
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
               text: '(件)',
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
                       updata25(data25,name25,data_che2) 
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
function updata25(data,name,data_che){
   var chart  = Highcharts.chart('container25', {
       chart: {
           type: 'column'
       },
       title: {
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
               text: '(件)',
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
                       s_h_table()
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

function e_modal(_name,_this){       //标题传参 
    var title = _name || '' 
    $(_this).modal().find('.modal-title').text(title) 
}  
function s_h_table(){    //按机构分析页面 点击右侧图表 切换表格
    $('#modal0 .a_alert').fadeOut().fadeIn()
}
  
function load() {
    var loadstr = '<div class="loadingz"><p>图表加载中...</p></div>'
    $('[id^="container"]').html(loadstr); 
}
 