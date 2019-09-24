var article = {
    article_search:function(item,callBack){
        $.get(articleUrl.article_search,item,function(res){
            callBack(res);
        })
    }
}