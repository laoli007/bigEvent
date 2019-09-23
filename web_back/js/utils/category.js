var category = {
    category_search:function(callBack){
        $.get(categoryUrl.category_search,function(res){
            callBack(res);
        })
    }
}