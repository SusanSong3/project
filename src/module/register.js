// alert(1);
define(["jquery"],function($){
    //提示信息：三项输入均不能为空
		   // 	//正则：数字字母下划线汉字
		    // console.log($)
   			var reg_user = new RegExp(/^[a-zA-Z0-9]{4,20}|[\u4e00-\u9fa5]{2,10}$/);
   			var reg_phone = new RegExp(/^[0-9]{11}$/g);
   			//---> 用户名
   				
			$username = $(this).val() ;
			$userNum = lenReg($username);
			if($username === ""){
				$("#mobile_user_message")
				.html("用户名不能为空");
			}
			if(!!reg_user.test($username)){
				$("#mobile_user_message")
				.html("")
				.append("<font color='green'>用户名可用</font>")
			}else{
				$("#mobile_user_message")
				.html("")
				.html("以中、英文开头，与数字、下划线组成");
			}
			if($userNum > 20 || $userNum < 4){
				$("#mobile_user_message")
				.html("")
				.html("用户名只能为4~20个字符,一个汉字为两个字符");
				return false;
			}


   			//---> 手机号
   			$("#step1_phoneNum").focus(function () {
   				// console.log("no phoneNum")
   			}).blur(function () {
   				
   				$phone = $(this).val() ;
   				$phoneNum = lenReg($phone);
   				if($phone === ""){
   					$("#mobile_user_phoneNum")
   					.html("")
   					.html("手机号不能为空");
   				}
				if(!reg_phone.test($phone)){
					$("#mobile_user_phoneNum")
					.html("")
					.html("手机号码不合法！");
   					return false;
   				}else{
   					$("#mobile_user_phoneNum")
					.html("");
   				}
   			})
   			//---> 验证码
   			$("#step1_checkCode").focus(function () {
   				// console.log("no checkCode")
   			}).blur(function () {
   				$cCode = $(this).val();

   				if($cCode.val() === ""){
   					$("#mobile_checkCode")
   					.html("")
   					.html("验证码不能为空");
   				}
   				if($cCode !== "UJYM"){
   					$("#mobile_checkCode")
   					.html("")
   					.html("验证码错误");
   				}
   			})

   			$("#changeCode").on("click",function () {
   				location.reload();
   			})
   		
   		var lenReg = function(str){ 
     		return str.replace(/[^\x00-\xFF]/g,'**').length; 
    	}; 
    	提示错误信息
    	function showError(str,color) {
    		if(!str || !color) return;

    	}

        $(".setp1_sendcCode").on("click",function(){
            //把登陆信息交给后台验证;
            // console.log(1)
            var username = $("#step1_username").val();
            // var pwd = $("#pwd").val();
            var telephone = $("#step1_phoneNum").val();
            var opt = {
                url:"http://localhost:8888/register.php",
                type:"POST",
                data:{
                    username:username,
                    telephone:telephone,
                }
            }
            $.ajax(opt)
            .then(function(res){
				// console.log(1);
				console.log(res);
				//1成功 0 失败
            })
        });
})