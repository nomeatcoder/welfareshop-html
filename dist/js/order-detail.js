webpackJsonp([6],{0:function(e,t,r){e.exports=r(70)},2:function(e,t,r){"use strict";var s=r(1),n={login:function(e,t,r){s.request({url:s.getServerUrl("/user/login.do"),data:e,method:"POST",success:t,error:r})},checkUsername:function(e,t,r){s.request({url:s.getServerUrl("/user/check_valid.do"),data:{type:"username",str:e},method:"POST",success:t,error:r})},register:function(e,t,r){s.request({url:s.getServerUrl("/user/register.do"),data:e,method:"POST",success:t,error:r})},checkLogin:function(e,t){s.request({url:s.getServerUrl("/user/get_user_info.do"),method:"POST",success:e,error:t})},getQuestion:function(e,t,r){s.request({url:s.getServerUrl("/user/forget_get_question.do"),data:{username:e},method:"POST",success:t,error:r})},checkAnswer:function(e,t,r){s.request({url:s.getServerUrl("/user/forget_check_answer.do"),data:e,method:"POST",success:t,error:r})},resetPassword:function(e,t,r){s.request({url:s.getServerUrl("/user/forget_reset_password.do"),data:e,method:"POST",success:t,error:r})},getUserInfo:function(e,t){s.request({url:s.getServerUrl("/user/get_information.do"),method:"POST",success:e,error:t})},updateUserInfo:function(e,t,r){s.request({url:s.getServerUrl("/user/update_information.do"),data:e,method:"POST",success:t,error:r})},updatePassword:function(e,t,r){s.request({url:s.getServerUrl("/user/reset_password.do"),data:e,method:"POST",success:t,error:r})},loginout:function(e,t){s.request({url:s.getServerUrl("/user/logout.do"),method:"POST",success:e,error:t})},getIntegralList:function(e,t,r){s.request({url:s.getServerUrl("/manage/user/integral_list.do"),data:e,success:t,error:r})}};e.exports=n},3:function(e,t,r){"use strict";var s=r(1),n={getCartCount:function(e,t){s.request({url:s.getServerUrl("/cart/get_cart_product_count.do"),success:e,error:t})},addToCart:function(e,t,r){s.request({url:s.getServerUrl("/cart/add.do"),data:e,success:t,error:r})},getCartList:function(e,t){s.request({url:s.getServerUrl("/cart/list.do"),success:e,error:t})},selectProduct:function(e,t,r){s.request({url:s.getServerUrl("/cart/select.do"),data:{productId:e},success:t,error:r})},unselectProduct:function(e,t,r){s.request({url:s.getServerUrl("/cart/un_select.do"),data:{productId:e},success:t,error:r})},selectAllProduct:function(e,t){s.request({url:s.getServerUrl("/cart/select_all.do"),success:e,error:t})},unselectAllProduct:function(e,t){s.request({url:s.getServerUrl("/cart/un_select_all.do"),success:e,error:t})},updateProduct:function(e,t,r){s.request({url:s.getServerUrl("/cart/update.do"),data:e,success:t,error:r})},deleteProduct:function(e,t,r){s.request({url:s.getServerUrl("/cart/delete_product.do"),data:{productIds:e},success:t,error:r})}};e.exports=n},4:function(e,t){},5:function(e,t){},6:function(e,t,r){"use strict";r(4);var s=r(1),n={init:function(){this.onLoad(),this.bindEvent()},onLoad:function(){var e=s.getUrlParam("keyword");e&&$("#search-input").val(e)},bindEvent:function(){var e=this;$("#search-btn").click(function(){e.searchSubmit()}),$("#search-input").keyup(function(t){13===t.keyCode&&e.searchSubmit()})},searchSubmit:function(){var e=$.trim($("#search-input").val());if(e){var t=s.getUrlParam("categoryId");window.location.href="./list.html?keyword="+e+(t?"&categoryId="+t:"")}else s.goHome()}};n.init()},7:function(e,t,r){"use strict";r(5);var s=r(1),n=r(2),c=r(3),o={init:function(){return this.bindEvent(),this.loadUserInfo(),this.loadCartCount(),this},bindEvent:function(){$(".js-login").click(function(){s.doLogin()}),$(".js-register").click(function(){window.location.href="./user-register.html"}),$(".js-loginout").click(function(){n.loginout(function(e){window.location.href="./index.html"},function(e){s.errorTips(e)})})},loadUserInfo:function(){n.checkLogin(function(e){$(".user.not-login").hide().siblings(".user.login").show().find(".username").text(e.username)},function(e){})},loadCartCount:function(){c.getCartCount(function(e){$(".nav .cart-count").text(e||0)},function(e){$(".nav .cart-count").text(0)})}};e.exports=o.init()},8:function(e,t){},9:function(e,t){e.exports='{{#navList}} {{#isActive}} <li class="nav-item active"> {{/isActive}} {{^isActive}} </li><li class=nav-item> {{/isActive}} <a class=link href={{href}}>{{desc}}</a> </li> {{/navList}} '},10:function(e,t,r){"use strict";r(8);var s=r(1),n=r(9),c={option:{name:"",navList:[{name:"user-center",desc:"个人中心",href:"./user-center.html"},{name:"integral-list",desc:"积分明细",href:"./integral-list.html"},{name:"order-list",desc:"我的订单",href:"./order-list.html"},{name:"user-pass-update",desc:"修改密码",href:"./user-pass-update.html"},{name:"about",desc:"关于福利商城",href:"./about.html"}]},init:function(e){$.extend(this.option,e),this.renderNav()},renderNav:function(){for(var e=0,t=this.option.navList.length;e<t;e++)this.option.navList[e].name===this.option.name&&(this.option.navList[e].isActive=!0);var r=s.renderHtml(n,{navList:this.option.navList});$(".nav-side").html(r)}};e.exports=c},15:function(e,t,r){"use strict";var s=r(1),n={getProductList:function(e,t){s.request({url:s.getServerUrl("/order/get_order_cart_product.do"),success:e,error:t})},createOrder:function(e,t,r){s.request({url:s.getServerUrl("/order/create.do"),data:e,success:t,error:r})},getOrderList:function(e,t,r){s.request({url:s.getServerUrl("/order/list.do"),data:e,success:t,error:r})},getOrderDetail:function(e,t,r){s.request({url:s.getServerUrl("/order/detail.do"),data:{orderNo:e},success:t,error:r})},cancelOrder:function(e,t,r){s.request({url:s.getServerUrl("/order/cancel.do"),data:{orderNo:e},success:t,error:r})}};e.exports=n},28:function(e,t){},51:function(e,t){e.exports='<div class=panel> <div class=panel-title>订单信息</div> <div class=panel-body> <div class=order-info> <div class=text-line> <span class=text>订单号：{{orderNo}}</span> <span class=text>创建时间：{{createTime}}</span> </div> <div class=text-line> <span class=text> 收件人： {{receiverName}} {{shippingVo.receiverProvince}} {{shippingVo.receiverCity}} {{shippingVo.receiverAddress}} {{shippingVo.receiverMobile}} </span> </div> <div class=text-line> <span class=text>订单状态： {{statusDesc}}</span> </div> <div class=text-line> <span class=text>支付方式：{{paymentTypeDesc}}</span> </div> <div class=text-line> {{#needPay}} <a class=btn href="./payment.html?orderNumber={{orderNo}}">去支付</a> {{/needPay}} {{#isCancelable}} <a class="btn order-cancel">取消订单</a> {{/isCancelable}} </div> </div> </div> </div> <div class=panel> <div class=panel-title>商品清单</div> <div class=panel-body> <table class=product-table> <tr> <th class="cell-th cell-img">&nbsp;</th> <th class="cell-th cell-info">商品信息</th> <th class="cell-th cell-price">单价</th> <th class="cell-th cell-count">数量</th> <th class="cell-th cell-total">小计</th> </tr> {{#orderItemVoList}} <tr> <td class="cell cell-img"> <a href="./detail.html?productId={{productId}}" target=_blank> <img class=p-img src={{imageHost}}{{productImage}} alt={{productName}} /> </a> </td> <td class="cell cell-info"> <a class=link href="./detail.html?productId={{productId}}" target=_blank>{{productName}}</a> </td> <td class="cell cell-price">￥{{currentUnitPrice}}</td> <td class="cell cell-count">{{quantity}}</td> <td class="cell cell-total">￥{{totalPrice}}</td> </tr> {{/orderItemVoList}} </table> <p class=total> <span>订单总价:</span> <span class=total-price>￥{{payment}}</span> <span>积分抵扣:</span> <span class=total-price>￥{{useIntegral}}</span> <span>应付:</span> <span class=total-price>￥{{remain}}</span> </p> </div> </div>'},70:function(e,t,r){"use strict";r(28),r(7),r(6);var s=r(10),n=r(1),c=r(15),o=r(51),i={data:{orderNumber:n.getUrlParam("orderNumber")},init:function(){this.onLoad(),this.bindEvent()},onLoad:function(){s.init({name:"order-list"}),this.loadDetail()},bindEvent:function(){var e=this;$(document).on("click",".order-cancel",function(){window.confirm("确实要取消该订单？")&&c.cancelOrder(e.data.orderNumber,function(t){n.successTips("该订单取消成功"),e.loadDetail()},function(e){n.errorTips(e)})})},loadDetail:function(){var e=this,t="",r=$(".content");r.html('<div class="loading"></div>'),c.getOrderDetail(this.data.orderNumber,function(s){e.dataFilter(s),t=n.renderHtml(o,s),r.html(t)},function(e){r.html('<p class="err-tip">'+e+"</p>")})},dataFilter:function(e){e.needPay=10==e.status,e.isCancelable=10==e.status}};$(function(){i.init()})}});