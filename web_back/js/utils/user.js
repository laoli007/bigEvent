//记录管理员的方法
var administrator = {
  login:function(uname,password,callBack){
    $.post(userUrl.login,{user_name:uname,password:password},function(res){
      callBack(res);
    })
  },logout:function(callBack){
    $.post(userUrl.logout,function(res){
      callBack(res);
    })
  },getInfo:function(callBack){
    $.get(userUrl.getInfo,function(res){
      callBack(res);
    })
  }
}