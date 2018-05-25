

$(function () {
            //选中每个选项卡
            $login_item = $("#login_item").children();
            //根据点击的选项卡 选择显示的提示信息
            $user_text = [
                        {
                            "userTxt":"用户名：",
                            "pwdTxt":"登录密码：",


                        },
                        {
                            "userTxt":"手机号：",
                            "pwdTxt":"登录密码："
                        },
                        {
                            "userTxt":"卡 号：",
                            "pwdTxt":"卡密码："
                        }
                    ];
            // $user_name = $(".username").find("input");
            // $password = $(".password").find("input");
            // =====> $user_name && $password verified;

            //策略模式的应用：
            var guidIndex = {
                "1":function () {
                    $(".title_user").html($user_text[0].userTxt);
                    $(".title_pwd").html($user_text[0].pwdTxt);
                    $(".username:input").replaceWith('<input type="text" class="form_input" id="id_user">');
                    $(".password:input").replaceWith('<input type="text" class="form_input" id="id_pwd">');
                },
                "2":function () {
                    $(".title_user").html($user_text[1].userTxt);
                    $(".title_pwd").html($user_text[1].pwdTxt);
                    $(".username:input").replaceWith('<input type="text" class="form_input" id="phone_user">');   
                    $(".password:input").replaceWith('<input type="text" class="form_input" id="phone_pwd">');
                },
                "3":function () {
                    $(".title_user").html($user_text[2].userTxt);
                    $(".title_pwd").html($user_text[2].pwdTxt);
                    $(".username:input").replaceWith('<input type="text" class="form_input" id="card_user">');
                    $(".password:input").replaceWith('<input type="text" class="form_input" id="card_pwd">');
                }
            }
            //每个选项卡
            $login_item.each(function() {
                $(this).on("click",function (index,el) {
                    $index = index;
                    for(var i = 0 ; i < $login_item.length ; i ++){
                        $login_item.removeClass("active");
                    }
                    $(this).addClass(" active");
                    //替换每个选项卡的文字和input；
                    guidIndex[index.handleObj.guid]();

                           

                }.bind(this));
            });
             //每个输入框的提示信息；
                //3个input
            $choice = $(".choice").find("input");
            $choice.each(function(index, el) {
                console.log($choice);
                console.log(3)
            }.bind(this));
                
            $choice_tips = $choice.next().find(".tips");
            $tip = $choice_tips.eq(1);
            
            //连接数据库
            $("#login").on("click",function(){
                //把登陆信息交给后台验证;
                var username = $("#id_user").val();
                var pwd = $("#id_pwd").val();
                var opt = {
                    url:"http://localhost:8888/php/select.php",
                    type:"POST",
                    data:{username:username,password:pwd}
                }
                $.ajax(opt)
                .then(function(res){
                    console.log(res);
                })
            })


            

        })
