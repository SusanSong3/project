"use strict";define(["jquery"],function(n){$reg_user=new RegExp(/^[a-zA-Z0-9]{4,20}|[\u4e00-\u9fa5]{2,10}$/),$reg_phone=new RegExp(/^[0-9]{11}$/g),n("#step1_username").focus(function(){}).blur(function(){if($username=n(this).val(),$userNum=e($username),""===$username&&n("#mobile_user_message").html("用户名不能为空"),$reg_user.test($username)?n("#mobile_user_message").html("").append("<font color='green'>用户名可用</font>"):n("#mobile_user_message").html("").html("以中、英文开头，与数字、下划线组成"),20<$userNum||$userNum<4)return n("#mobile_user_message").html("").html("用户名只能为4~20个字符,一个汉字为两个字符"),!1}),n("#step1_phoneNum").focus(function(){}).blur(function(){if($phone=n(this).val(),$phoneNum=e($phone),""===$phone&&n("#mobile_user_phoneNum").html("").html("手机号不能为空"),!$reg_phone.test($phone))return n("#mobile_user_phoneNum").html("").html("手机号码不合法！"),!1;n("#mobile_user_phoneNum").html("")}),n("#step1_checkCode").focus(function(){}).blur(function(){$cCode=n(this).val(),""===$cCode.val()&&n("#mobile_checkCode").html("").html("验证码不能为空"),"UJYM"!==$cCode&&n("#mobile_checkCode").html("").html("验证码错误")}),n("#changeCode").on("click",function(){location.reload()});var e=function(e){return e.replace(/[^\x00-\xFF]/g,"**").length};提示错误信息,n(".setp1_sendcCode").on("click",function(){var e={url:"http://localhost:8888/register.php",type:"POST",data:{username:n("#step1_username").val(),telephone:n("#step1_phoneNum").val()}};n.ajax(e).then(function(e){console.log(e)})})});