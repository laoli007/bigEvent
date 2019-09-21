//记录管理员的方法
var administrator = {
  login:function(uname,password,callBack){
    $.post('http://localhost:8000/admin/login',{user_name:uname,password:password},function(res){
        callBack(res);
    })
  },logout:function(callBack){
    $.post('http://localhost:8000/admin/logout',function(res){
      callBack(res);
    })
  }

}