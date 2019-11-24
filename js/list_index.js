//一级菜单-上
var arr = ['index'];
$('.head li').on('click',function(){
	$('.head li').removeClass("li-active");
	$(this).addClass('li-active')
	// $('.left-list li').removeClass("left-active");
	// $('.left-list li').eq(0).addClass('left-active')
	// if($(this).index() === 0){
	// 	$('.content').css({'width':'calc(100% - 40px)','left':40})
	// 	$('.left-list').width(40).find('li').hide()
	// }else{
	// 	$('.left-list').width(150).find('li').show()
	// 	$('.content').css({'width':'calc(100% - 150px)','left':150})
	// } 
	$('#z').attr('src','./list/'+arr[0]+$(this).index()+'.html') 
})
//二级菜单-左
// $('.left-list li').on('click',function(){
// 	$('.left-list li').removeClass("left-active");
// 	$(this).addClass('left-active')
// 	var ind = 1;
// 	var str = '';
// 	$('.head li').each(function(index){
// 		var str = $(this).attr('class')
// 		if(str !=null && str != undefined && str.indexOf('li-active') > -1 ){
// 			ind = index
// 		}
// 	})
// 	$('#z').attr('src','./list/'+arr[ind]+($(this).index()+1)+'.html')
// })
//流程 
// $('.content .left').on('click',function(){
// 	$('#z').attr('src','./list/'+arr[$(this).index()+1]+($(this).index()+1)+'.html')
// })