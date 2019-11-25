$(function(){  
    load()
})

 //增删改
$('.tr_add').on('click',() => {  
    e_modal('新增',$('#modal0'))
})
$('.tr_delete').on('click',() => { 
    e_modal('删除',$('#modal1'))
})
$('.tr_modify').on('click',() => { 
    e_modal('修改',$('#modal2'))
})

//弹窗
function e_modal(_name,_this){ //标题传参 
    var title = _name || '' 
    _this.modal().find('.modal-title').text(title) 
}  

//图表加载
function load() {
    var loadstr = '<div class="loadingz"><p>图表加载中...</p></div>'
    $('[id^="container"]').html(loadstr); 
}