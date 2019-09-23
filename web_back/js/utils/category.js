var category = {
    category_search:function(callBack){
        $.get(categoryUrl.category_search,function(res){
            callBack(res);
        })
    },category_add:function(name,slug,callBack){
        $.post(categoryUrl.category_add,{name:name,slug:slug},function(res){
            callBack(res);
        })
    },category_edit:function(id,name,slug,callBack){
        $.post(categoryUrl.category_edit,{id:id,name:name,slug:slug},function(res){
            callBack(res);
        })
    }
}