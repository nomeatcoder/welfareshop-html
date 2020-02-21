webpackJsonp([8],{0:function(e,t,r){e.exports=r(74)},2:function(e,t,r){"use strict";var s=r(1),n={login:function(e,t,r){s.request({url:s.getServerUrl("/user/login.do"),data:e,method:"POST",success:t,error:r})},checkUsername:function(e,t,r){s.request({url:s.getServerUrl("/user/check_valid.do"),data:{type:"username",str:e},method:"POST",success:t,error:r})},register:function(e,t,r){s.request({url:s.getServerUrl("/user/register.do"),data:e,method:"POST",success:t,error:r})},checkLogin:function(e,t){s.request({url:s.getServerUrl("/user/get_user_info.do"),method:"POST",success:e,error:t})},getQuestion:function(e,t,r){s.request({url:s.getServerUrl("/user/forget_get_question.do"),data:{username:e},method:"POST",success:t,error:r})},checkAnswer:function(e,t,r){s.request({url:s.getServerUrl("/user/forget_check_answer.do"),data:e,method:"POST",success:t,error:r})},resetPassword:function(e,t,r){s.request({url:s.getServerUrl("/user/forget_reset_password.do"),data:e,method:"POST",success:t,error:r})},getUserInfo:function(e,t){s.request({url:s.getServerUrl("/user/get_information.do"),method:"POST",success:e,error:t})},updateUserInfo:function(e,t,r){s.request({url:s.getServerUrl("/user/update_information.do"),data:e,method:"POST",success:t,error:r})},updatePassword:function(e,t,r){s.request({url:s.getServerUrl("/user/reset_password.do"),data:e,method:"POST",success:t,error:r})},loginout:function(e,t){s.request({url:s.getServerUrl("/user/logout.do"),method:"POST",success:e,error:t})},getIntegralList:function(e,t,r){s.request({url:s.getServerUrl("/manage/user/integral_list.do"),data:e,success:t,error:r})}};e.exports=n},3:function(e,t,r){"use strict";var s=r(1),n={getCartCount:function(e,t){s.request({url:s.getServerUrl("/cart/get_cart_product_count.do"),success:e,error:t})},addToCart:function(e,t,r){s.request({url:s.getServerUrl("/cart/add.do"),data:e,success:t,error:r})},getCartList:function(e,t){s.request({url:s.getServerUrl("/cart/list.do"),success:e,error:t})},selectProduct:function(e,t,r){s.request({url:s.getServerUrl("/cart/select.do"),data:{productId:e},success:t,error:r})},unselectProduct:function(e,t,r){s.request({url:s.getServerUrl("/cart/un_select.do"),data:{productId:e},success:t,error:r})},selectAllProduct:function(e,t){s.request({url:s.getServerUrl("/cart/select_all.do"),success:e,error:t})},unselectAllProduct:function(e,t){s.request({url:s.getServerUrl("/cart/un_select_all.do"),success:e,error:t})},updateProduct:function(e,t,r){s.request({url:s.getServerUrl("/cart/update.do"),data:e,success:t,error:r})},deleteProduct:function(e,t,r){s.request({url:s.getServerUrl("/cart/delete_product.do"),data:{productIds:e},success:t,error:r})}};e.exports=n},4:function(e,t){},5:function(e,t){},6:function(e,t,r){"use strict";r(4);var s=r(1),n={init:function(){this.onLoad(),this.bindEvent()},onLoad:function(){var e=s.getUrlParam("keyword");e&&$("#search-input").val(e)},bindEvent:function(){var e=this;$("#search-btn").click(function(){e.searchSubmit()}),$("#search-input").keyup(function(t){13===t.keyCode&&e.searchSubmit()})},searchSubmit:function(){var e=$.trim($("#search-input").val());if(e){var t=s.getUrlParam("categoryId");window.location.href="./list.html?keyword="+e+(t?"&categoryId="+t:"")}else s.goHome()}};n.init()},7:function(e,t,r){"use strict";r(5);var s=r(1),n=r(2),o=r(3),i={init:function(){return this.bindEvent(),this.loadUserInfo(),this.loadCartCount(),this},bindEvent:function(){$(".js-login").click(function(){s.doLogin()}),$(".js-register").click(function(){window.location.href="./user-register.html"}),$(".js-loginout").click(function(){n.loginout(function(e){window.location.href="./index.html"},function(e){s.errorTips(e)})})},loadUserInfo:function(){n.checkLogin(function(e){$(".user.not-login").hide().siblings(".user.login").show().find(".username").text(e.username)},function(e){})},loadCartCount:function(){o.getCartCount(function(e){$(".nav .cart-count").text(e||0)},function(e){$(".nav .cart-count").text(0)})}};e.exports=i.init()},8:function(e,t){},9:function(e,t){e.exports='{{#navList}} {{#isActive}} <li class="nav-item active"> {{/isActive}} {{^isActive}} </li><li class=nav-item> {{/isActive}} <a class=link href={{href}}>{{desc}}</a> </li> {{/navList}} '},10:function(e,t,r){"use strict";r(8);var s=r(1),n=r(9),o={option:{name:"",navList:[{name:"user-center",desc:"个人中心",href:"./user-center.html"},{name:"integral-list",desc:"积分明细",href:"./integral-list.html"},{name:"order-list",desc:"我的订单",href:"./order-list.html"},{name:"user-pass-update",desc:"修改密码",href:"./user-pass-update.html"},{name:"about",desc:"关于福利商城",href:"./about.html"}]},init:function(e){$.extend(this.option,e),this.renderNav()},renderNav:function(){for(var e=0,t=this.option.navList.length;e<t;e++)this.option.navList[e].name===this.option.name&&(this.option.navList[e].isActive=!0);var r=s.renderHtml(n,{navList:this.option.navList});$(".nav-side").html(r)}};e.exports=o},32:function(e,t){},54:function(e,t){e.exports='<div class=user-info> <div class=form-line> <span class=label>用户名：</span> <span class=text>{{username}}</span> </div> <div class=form-line> <span class=label>电 话：</span> <input class=input id=phone autocomplete=off value={{phone}} /> </div> <div class=form-line> <span class=label>邮 箱：</span> <input class=input id=email autocomplete=off value={{email}} /> </div> <div class=form-line> <span class=label>问 题：</span> <input class=input id=question autocomplete=off value={{question}} /> </div> <div class=form-line> <span class=label>答 案：</span> <input class=input id=answer autocomplete=off value={{answer}} /> </div> <span class="btn btn-submit">提交</span> </div>'},74:function(e,t,r){"use strict";r(32),r(7),r(6);var s=r(10),n=r(1),o=r(2),i=r(54),u={init:function(){this.onLoad(),this.bindEvent()},onLoad:function(){s.init({name:"user-center"}),this.loadUserInfo()},bindEvent:function(){var e=this;$(document).on("click",".btn-submit",function(){var t={phone:$.trim($("#phone").val()),email:$.trim($("#email").val()),question:$.trim($("#question").val()),answer:$.trim($("#answer").val())},r=e.validateForm(t);r.status?o.updateUserInfo(t,function(e,t){n.successTips(t),window.location.href="./user-center.html"},function(e){n.errorTips(e)}):n.errorTips(r.msg)})},loadUserInfo:function(){var e="";o.getUserInfo(function(t){e=n.renderHtml(i,t),$(".panel-body").html(e)},function(e){n.errorTips(e)})},validateForm:function(e){var t={status:!1,msg:""};return n.validate(e.phone,"phone")?n.validate(e.email,"email")?n.validate(e.question,"require")?n.validate(e.answer,"require")?(t.status=!0,t.msg="验证通过",t):(t.msg="密码提示问题答案不能为空",t):(t.msg="密码提示问题不能为空",t):(t.msg="邮箱格式不正确",t):(t.msg="手机号格式不正确",t)}};$(function(){u.init()})}});