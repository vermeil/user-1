        

//e7cf62  黄
//67b7dc  蓝
//0ab164  绿
Math.easeOutBounce = function (pos) {//higcharts运动属性
    if ((pos) < (1 / 2.75)) {
        return (7.5625 * pos * pos);
    }
    if (pos < (2 / 2.75)) {
        return (7.5625 * (pos -= (1.5 / 2.75)) * pos + 0.75);
    }
    if (pos < (2.5 / 2.75)) {
        return (7.5625 * (pos -= (2.25 / 2.75)) * pos + 0.9375);
    }
    return (7.5625 * (pos -= (2.625 / 2.75)) * pos + 0.984375);
};

//用于定义皮肤
//自定义皮肤
var my_skin0 = {
    //颜色数组，默认从数组第一个元素取色
    //第一颜色 #67b7dc #28b7f9 #12a9ef #30ade7
    //二       #e7cf62 #f3d54f #f9d634
    //三       #90ed7d #76f95a
    //四       #f7a35c #fba154
    //五       #434348 #594d4d
    //colors: ["#67b7dc", "#e7cf62", "#90ed7d", "#f7a35c", "#434348", "#7798BF",
    //    "#8085e9", "#d64635", "#aaeeee"],
     colors: ["#30ade7", "#f3d54f", "#76f95a", "#fba154", "#594d4d", "#7798BF","#8085e9", "#d64635", "#aaeeee"],
    //背景透明
    chart: {
        backgroundColor: 'rgba(0,0,0,0)',
        //margin: 50,
        marginRight:50,
        options3d: {
            enabled: false,
            alpha:5,
            beta: 10,
            depth:100,
            viewDistance: 25

            // alpha: 15,
            // beta: 15,
            // depth: 50,
            // viewDistance: 25

            //alpha: 10,
            //beta: 15,
            //depth: 100,
        }
    },

     credits: {
        enabled: false
     },
    legend:{
        //x: -30,
        //verticalAlign: 'top',
        //y: 25,
    },
    //title白色字
    title: {
        color: '#444',
        fontSize: '14',
        fontWeight: '200',
        style: { "color": "#000", "fontSize": "18px", "fontWeight": "bold" }
        //align:"right"
    },

    //这个属性常用于饼图的时候对每个区域的说明
    plotOptions: {
        pie: {
            //colorByPoint: true, //多颜色
            innerSize: 60,
            dataLabels: {
                color: '#000',
                connectorColor: '#000',
                //默认是 format: '<b>{point.name}</b>: {point.percentage:.1f} %'显示百分比
                //formatter: function () {//自定义显示
                //    return '<b>' + this.point.name + ':（' + this.y + '）</b>';
                //},
                //spacing: [100, 0, 40, 0],
                dataLabels: {
                    enabled: true,
                },
            },
            allowPointSelect: true,
            showInLegend: true,  // 显示在图例中
            slicedOffset: 50,         // 突出间距
            depth:100, //厚度
            //point: {   // 每个扇区是数据点对象，所以事件应该写在 point 下面
            //    events: {
            //        // 鼠标滑过是，突出当前扇区
            //        mouseOver: function () {
            //            this.slice();
            //        },
            //        // 鼠标移出时，收回突出显示
            //        mouseOut: function () {
            //            this.slice();
            //        },
            //        // 默认是点击突出，这里屏蔽掉
            //        click: function () {
            //            return false;
            //        }
            //    }
            //}
        },
        column: {
            dataLabels: {
                enabled: true
            },
            // colorByPoint: true, //多颜色
            depth: 50, //厚度
            //groupZPadding:150, 
        },
        line: {
            dataLabels: {
                enabled: true
            },
            //colorByPoint: true,
        },
        series: {
            animation: {
                duration: 2000,  //运动
                easing: 'easeOutBounce'
            },
            cursor:"pointer",
            dataLabels: {//影响条形图上数字的字体颜色
                color: '#000'
            },
        }
    },
    //x,y轴上的字白色
    xAxis: {
        labels: {
            //y: 20,//调节x偏移
            //y:-35,//调节y偏移
            // rotation:-45,//调节倾斜角度偏移
            style: {
                color: '#333',
                zIndex:-1,
                // writingMode:'tb-rl'    //文字竖排样式
            },
            useHTML: true,
            formatter: function () {
                return '<z class="charts_x_h">' +
                    this.value + '</z>';
            }
        },
        //gridLineColor: '#74c2b3',
        // crosshair: true,
        // crosshair: { //十字准星
        //     width: 2,
        //     color: '#76a5f9',
        //     //snap: false,
        // },

        //minRange: 30
    },
    yAxis: {

        title: {
            //margin: 10,
            style: { "color": "#333" }
        },
        //markable: { enabled: false },//不显示每一个点的实心
        labels: {
            //x: -35,//调节x偏移
            style: {
                color: '#333'
            }
        },
        gridLineColor: '#93a4b5',
        // crosshair: true,
        // crosshair: { //十字准星
        //     width: 2,
        //     color: '#76a5f9',
        //     snap: false,
        // }

    },
    zAxis: {
        labels: {
        },
        lineColor: '#000',
        lineWidth: 1,
        crosshair: true,
        //crosshair: { //十字准星
        //    width: 3,
        //    color: '#76a5f9'
        //}
    },
    //responsive: { //响应式
    //    rules: [{
    //        condition: {
    //            maxWidth:200
    //        },
    //        // Make the labels less space demanding on mobile
    //        chartOptions: {
    //            xAxis: {
    //            },
    //            yAxis: {
    //                labels: {
    //                    align: 'left',
    //                    x: 0,
    //                    y: -2
    //                }
    //            }
    //        }
    //    }]
    //},
    //图例上的字白色
    legend: {
        itemStyle: {
            font: '9pt Trebuchet MS, Verdana, sans-serif',
            color: '#333'
        },
        //layout: 'vertical',
        //align: 'right',
        //verticalAlign: 'top',
        navigation: {
            activeColor: '#3E576F',
            animation: true,
            arrowSize: 12,
            inactiveColor: '#CCC',
            style: {
                fontWeight: 'bold',
                color: '#333',
                fontSize: '12px'
            }
        }
    },
    exporting: {
    },//导出按钮,
    tooltip: {
        followPointer :true, //跟随鼠标移动
        //split: true,  //分开显示提示框
        shared:true, //共享数据
    },
};


var colors = [ "rgb(59,161,205)", "rgb(255,116,116)", "rgb(43,144,143)","rgb(119,152,191)", 
 "rgb(144, 238, 126)","rgb(255, 0, 102)","rgb(85, 191, 59)", "rgb(223, 83, 83)", "rgb(170, 238, 238)"];


var my_skin = {
    //颜色数组，默认从数组第一个元素取色
    //第一颜色 #67b7dc #28b7f9 #12a9ef #30ade7
    //二       #e7cf62 #f3d54f #f9d634
    //三       #90ed7d #76f95a
    //四       #f7a35c #fba154
    //五       #434348 #594d4d
    //colors: ["#67b7dc", "#e7cf62", "#90ed7d", "#f7a35c", "#434348", "#7798BF",
    //    "#8085e9", "#d64635", "#aaeeee"],
    colors: colors, //背景透明
    chart: {
        backgroundColor: 'rgba(0,0,0,0)',
        //margin: 50,
        // marginRight:10,

        options3d: {
            enabled: false,
            alpha:5,
            beta: 10,
            depth:100,
            viewDistance: 25

            // alpha: 15,
            // beta: 15,
            // depth: 50,
            // viewDistance: 25

            //alpha: 10,
            //beta: 15,
            //depth: 100,
        }
    },
     credits: {
        enabled: false
     },
    //title白色字
    title: {
        // x:20,
        margin:5, 
        style: { "color": "#f5f5f5", "fontSize": "16px", "fontWeight": "bold"  },
    },

    //这个属性常用于饼图的时候对每个区域的说明
    plotOptions: {
        pie: {
            //colorByPoint: true, //多颜色
            innerSize: '50%',
            dataLabels: {
                color: '#f5f5f5',
                connectorColor: '#f5f5f5',
                //默认是 format: '<b>{point.name}</b>: {point.percentage:.1f} %'显示百分比
                //formatter: function () {//自定义显示
                //    return '<b>' + this.point.name + ':（' + this.y + '）</b>';
                //},
                //spacing: [100, 0, 40, 0],
                dataLabels: {
                    enabled: true,
                },
            },
            allowPointSelect: true,
            showInLegend: true,  // 显示在图例中
            slicedOffset: 50,         // 突出间距
            depth:100, //厚度
            //point: {   // 每个扇区是数据点对象，所以事件应该写在 point 下面
            //    events: {
            //        // 鼠标滑过是，突出当前扇区
            //        mouseOver: function () {
            //            this.slice();
            //        },
            //        // 鼠标移出时，收回突出显示
            //        mouseOut: function () {
            //            this.slice();
            //        },
            //        // 默认是点击突出，这里屏蔽掉
            //        click: function () {
            //            return false;
            //        }
            //    }
            //}
        },
        column: {
            // borderColor: "",//去边框
            dataLabels: {
                enabled: true
            },
            // colorByPoint: true, //多颜色
            depth: 50, //厚度
            //groupZPadding:150, 
        },
        line: { 
            colorByPoint: false, //多颜色
            lineWidth:3, 
            dataLabels: {
                enabled: true
            },
            //colorByPoint: true,
        },
        bar: {
            // borderColor: "",//去边框
            colorByPoint: true, //多颜色
            dataLabels: {
                enabled: true,
                // ,allowOverlap 默认是 false，即不允许数据标签重叠
                allowOverlap: true
            }
        },    
        areaspline:{
            fillOpacity:0.5,
            dataLabels: {
                enabled: true
            },
        },
        series: {
            animation: {
                duration: 2000,  //运动
                easing: 'easeOutBounce'
            },
            cursor:"pointer",
            dataLabels: {//影响条形图上数字的字体颜色
                color: '#f5f5f5'
            },
        },
    },
    //x,y轴上的字白色
    xAxis: {
        labels: {
            //y: 20,//调节x偏移
            //y:-35,//调节y偏移
            // rotation:-45,//调节倾斜角度偏移
            style: {
                color: '#01bee8',
                zIndex: -1,
                // writingMode:'tb-rl'    //文字竖排样式
            },

                //autoRotationLimit: 40,  //自动旋转下限
                // autoRotation: false,
            // formatter: function() { //中文换行
            //     var labelVal = this.value;
            //     var reallyVal = labelVal;
            //     var lvl = labelVal.length;
            //     if(lvl > 8 && lvl <=16){
            //         reallyVal = labelVal.substr(0,8)+"<br/>"+labelVal.substring(8,lvl);
            //     }else if(lvl > 16 && lvl <=24){
            //         reallyVal = labelVal.substr(0,8)+"<br/>"+labelVal.substr(8,8)+"<br/>"+labelVal.substring(16,lvl);
            //     }else if(lvl > 24){
            //         reallyVal = labelVal.substr(0,8)+"<br/>"+labelVal.substr(8,8)+"<br/>"+labelVal.substr(16,8)+"<br/>"+labelVal.substring(24,lvl);
            //     } 
            //     return reallyVal;
            // }
            // useHTML: true,
            // formatter: function () {
            //     return '<z class="charts_x_h">' +
            //         this.value + '</z>';
            // }
        },
        gridLineColor: '#6f7d8a',
        //gridLineColor: '#74c2b3',
        // crosshair: true,
        // crosshair: { //十字准星
        //     width: 2,
        //     color: '#76a5f9',
        //     //snap: false,
        // },

        //minRange: 30
    },
    yAxis: {

        title: {
            //margin: 10,
            style: { "color":'#d8c416' }
        },
        //markable: { enabled: false },//不显示每一个点的实心
        labels: {
            //x: -35,//调节x偏移
            style: {
                color: '#f5f5f5'
            }
        },
        gridLineColor: '#6f7d8a',
        // crosshair: true,
        // crosshair: { //十字准星
        //     width: 2,
        //     color: '#76a5f9',
        //     snap: false,
        // }

    },
    zAxis: {
        labels: {
        },
        lineColor: '#f5f5f5',
        lineWidth: 1,
        crosshair: true,
        //crosshair: { //十字准星
        //    width: 3,
        //    color: '#76a5f9'
        //}
    },
    //responsive: { //响应式
    //    rules: [{
    //        condition: {
    //            maxWidth:200
    //        },
    //        // Make the labels less space demanding on mobile
    //        chartOptions: {
    //            xAxis: {
    //            },
    //            yAxis: {
    //                labels: {
    //                    align: 'left',
    //                    x: 0,
    //                    y: -2
    //                }
    //            }
    //        }
    //    }]
    //},
    //图例上的字白色
    legend: {
        itemHoverStyle: { //鼠标经过
            color: '#33abc9' 
        }, 
        itemStyle: {
            font: '9pt Trebuchet MS, Verdana, sans-serif',
            color: '#d8c416',
        },
        //layout: 'vertical',
        //align: 'right',
        //verticalAlign: 'top',
        navigation: {
            activeColor: '#3E576F',
            animation: true,
            arrowSize: 12,
            inactiveColor: '#f5f5f5',
            style: {
                fontWeight: 'bold',
                color: 'rgb(138, 199, 216)',
                fontSize: '12px'
            }
        }
    },
    exporting: {
        enabled:false
    },//导出按钮,
    tooltip: {
        followPointer :true, //跟随鼠标移动
        //split: true,  //分开显示提示框
        shared:true, //共享数据
    },
};
$(function(){
    Highcharts.setOptions(my_skin);//使用自定义皮肤
})
// 创建渐变色 
 // Highcharts.getOptions().colors = Highcharts.map(colors, function (color) {  
 //     return {  
 //         radialGradient: { cx: 0, cy: -0.8, r: 2.3 },  
 //         stops: [[0, color], [2, Highcharts.Color(color).brighten(14).get('rgb')] // darken   
 //         ]  
 //     };  
 // });  


