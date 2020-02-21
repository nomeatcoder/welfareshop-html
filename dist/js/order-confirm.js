webpackJsonp([3],{0:function(e,r,t){e.exports=t(69)},2:function(e,r,t){"use strict";var s=t(1),i={login:function(e,r,t){s.request({url:s.getServerUrl("/user/login.do"),data:e,method:"POST",success:r,error:t})},checkUsername:function(e,r,t){s.request({url:s.getServerUrl("/user/check_valid.do"),data:{type:"username",str:e},method:"POST",success:r,error:t})},register:function(e,r,t){s.request({url:s.getServerUrl("/user/register.do"),data:e,method:"POST",success:r,error:t})},checkLogin:function(e,r){s.request({url:s.getServerUrl("/user/get_user_info.do"),method:"POST",success:e,error:r})},getQuestion:function(e,r,t){s.request({url:s.getServerUrl("/user/forget_get_question.do"),data:{username:e},method:"POST",success:r,error:t})},checkAnswer:function(e,r,t){s.request({url:s.getServerUrl("/user/forget_check_answer.do"),data:e,method:"POST",success:r,error:t})},resetPassword:function(e,r,t){s.request({url:s.getServerUrl("/user/forget_reset_password.do"),data:e,method:"POST",success:r,error:t})},getUserInfo:function(e,r){s.request({url:s.getServerUrl("/user/get_information.do"),method:"POST",success:e,error:r})},updateUserInfo:function(e,r,t){s.request({url:s.getServerUrl("/user/update_information.do"),data:e,method:"POST",success:r,error:t})},updatePassword:function(e,r,t){s.request({url:s.getServerUrl("/user/reset_password.do"),data:e,method:"POST",success:r,error:t})},loginout:function(e,r){s.request({url:s.getServerUrl("/user/logout.do"),method:"POST",success:e,error:r})},getIntegralList:function(e,r,t){s.request({url:s.getServerUrl("/manage/user/integral_list.do"),data:e,success:r,error:t})}};e.exports=i},3:function(e,r,t){"use strict";var s=t(1),i={getCartCount:function(e,r){s.request({url:s.getServerUrl("/cart/get_cart_product_count.do"),success:e,error:r})},addToCart:function(e,r,t){s.request({url:s.getServerUrl("/cart/add.do"),data:e,success:r,error:t})},getCartList:function(e,r){s.request({url:s.getServerUrl("/cart/list.do"),success:e,error:r})},selectProduct:function(e,r,t){s.request({url:s.getServerUrl("/cart/select.do"),data:{productId:e},success:r,error:t})},unselectProduct:function(e,r,t){s.request({url:s.getServerUrl("/cart/un_select.do"),data:{productId:e},success:r,error:t})},selectAllProduct:function(e,r){s.request({url:s.getServerUrl("/cart/select_all.do"),success:e,error:r})},unselectAllProduct:function(e,r){s.request({url:s.getServerUrl("/cart/un_select_all.do"),success:e,error:r})},updateProduct:function(e,r,t){s.request({url:s.getServerUrl("/cart/update.do"),data:e,success:r,error:t})},deleteProduct:function(e,r,t){s.request({url:s.getServerUrl("/cart/delete_product.do"),data:{productIds:e},success:r,error:t})}};e.exports=i},4:function(e,r){},5:function(e,r){},6:function(e,r,t){"use strict";t(4);var s=t(1),i={init:function(){this.onLoad(),this.bindEvent()},onLoad:function(){var e=s.getUrlParam("keyword");e&&$("#search-input").val(e)},bindEvent:function(){var e=this;$("#search-btn").click(function(){e.searchSubmit()}),$("#search-input").keyup(function(r){13===r.keyCode&&e.searchSubmit()})},searchSubmit:function(){var e=$.trim($("#search-input").val());if(e){var r=s.getUrlParam("categoryId");window.location.href="./list.html?keyword="+e+(r?"&categoryId="+r:"")}else s.goHome()}};i.init()},7:function(e,r,t){"use strict";t(5);var s=t(1),i=t(2),o=t(3),a={init:function(){return this.bindEvent(),this.loadUserInfo(),this.loadCartCount(),this},bindEvent:function(){$(".js-login").click(function(){s.doLogin()}),$(".js-register").click(function(){window.location.href="./user-register.html"}),$(".js-loginout").click(function(){i.loginout(function(e){window.location.href="./index.html"},function(e){s.errorTips(e)})})},loadUserInfo:function(){i.checkLogin(function(e){$(".user.not-login").hide().siblings(".user.login").show().find(".username").text(e.username)},function(e){})},loadCartCount:function(){o.getCartCount(function(e){$(".nav .cart-count").text(e||0)},function(e){$(".nav .cart-count").text(0)})}};e.exports=a.init()},15:function(e,r,t){"use strict";var s=t(1),i={getProductList:function(e,r){s.request({url:s.getServerUrl("/order/get_order_cart_product.do"),success:e,error:r})},createOrder:function(e,r,t){s.request({url:s.getServerUrl("/order/create.do"),data:e,success:r,error:t})},getOrderList:function(e,r,t){s.request({url:s.getServerUrl("/order/list.do"),data:e,success:r,error:t})},getOrderDetail:function(e,r,t){s.request({url:s.getServerUrl("/order/detail.do"),data:{orderNo:e},success:r,error:t})},cancelOrder:function(e,r,t){s.request({url:s.getServerUrl("/order/cancel.do"),data:{orderNo:e},success:r,error:t})}};e.exports=i},18:function(e,r,t){"use strict";var s=t(1),i={getAddressList:function(e,r){s.request({url:s.getServerUrl("/shipping/list.do"),data:{pageSize:50},success:e,error:r})},save:function(e,r,t){s.request({url:s.getServerUrl("/shipping/add.do"),data:e,success:r,error:t})},update:function(e,r,t){s.request({url:s.getServerUrl("/shipping/update.do"),data:e,success:r,error:t})},deleteAddress:function(e,r,t){s.request({url:s.getServerUrl("/shipping/del.do"),data:{shippingId:e},success:r,error:t})},getAddress:function(e,r,t){s.request({url:s.getServerUrl("/shipping/select.do"),data:{shippingId:e},success:r,error:t})}};e.exports=i},27:function(e,r){},48:function(e,r){e.exports='{{#list}} {{#isActive}} <div class="address-item active" data-id={{id}}> {{/isActive}} {{^isActive}} <div class=address-item data-id={{id}}> {{/isActive}} <div class=address-title> {{receiverCity}} {{receiverProvince}} （ {{receiverName}} 收 ） </div> <div class=address-detail> {{receiverAddress}} {{receiverPhone}} </div> <div class=address-opera> <span class="link address-update">编辑</span> <span class="link address-delete">删除</span> </div> </div> {{/list}} <div class=address-add> <div class=address-new> <i class="fa fa-plus"></i> <div class=text>使用新地址</div> </div> </div></div>'},49:function(e,r){e.exports='<div class="modal close"> <div class=modal-container> <div class=modal-header> {{#isUpdate}} <h1 class=modal-title>更新地址</h1> {{/isUpdate}} {{^isUpdate}} <h1 class=modal-title>使用新地址</h1> {{/isUpdate}} <i class="fa fa-close close"></i> </div> <div class=modal-body> <div class=form> <div class=form-line> <label class=label for=receiver-name> <span class=required>*</span>收件人姓名： </label> <input class="form-item input" id=receiver-name placeholder=请输入收件人姓名 value={{data.receiverName}}> </div> <div class=form-line> <label class=label for=receiver-province> <span class=required>*</span> 所在城市： </label> <select class=form-item id=receiver-province> <option value="">请选择</option> </select> <select class=form-item id=receiver-city> <option value="">请选择</option> </select> </div> <div class=form-line> <label class=label for=receiver-address> <span class=required>*</span> 详细地址： </label> <input class="form-item input" id=receiver-address placeholder=请精确到门牌号 value={{data.receiverAddress}}> </div> <div class=form-line> <label class=label for=receiver-phone> <span class=required>*</span> 收件人手机： </label> <input class="form-item input" id=receiver-phone placeholder=请输入11位手机号 value={{data.receiverPhone}}> </div> <div class=form-line> <label class=label for=receiver-zip>邮政编码：</label> <input class="form-item input" id=receiver-zip placeholder=如：100000 value={{data.receiverZip}}> </div> <div class=form-line> <input type=hidden id=receiver-id value={{data.id}}> <a class="btn address-btn">保存收货地址</a> </div> </div> </div> </div> </div>'},50:function(e,r){e.exports='<table class=product-table> <tr> <th class=cell-img>&nbsp;</th> <th class=cell-info>商品描述</th> <th class=cell-price>价格</th> <th class=cell-count>数量</th> <th class=cell-total>小计</th> </tr> {{#orderItemVoList}} <tr> <td class=cell-img> <a href="./detail.html?productId={{productId}}" target=_blank> <img class=p-img src={{imageHost}}{{productImage}} alt={{productName}} /> </a> </td> <td class=cell-info> <a class=link href="./detail.html?productId={{productId}}" target=_blank>{{productName}}</a> </td> <td class=cell-price>￥{{currentUnitPrice}}</td> <td class=cell-count>{{quantity}}</td> <td class=cell-total>￥{{totalPrice}}</td> </tr> {{/orderItemVoList}} </table> <div class=submit-con> <span>订单总价:</span> <span class=submit-total>￥{{productTotalPrice}}</span> <span class="btn order-submit">提交订单</span> </div>'},68:function(e,r,t){"use strict";var s=t(1),i=t(82),o=t(18),a=t(49),c={show:function(e){this.option=e,this.option.data=e.data||{},this.$modalWrap=$(".modal-wrap"),this.loadModal(),this.bindEvent()},bindEvent:function(){var e=this;this.$modalWrap.find("#receiver-province").change(function(){var r=$(this).val();e.loadCities(r)}),this.$modalWrap.find(".address-btn").click(function(){var r=e.getReceiverInfo(),t=e.option.isUpdate;!t&&r.status?o.save(r.data,function(r){s.successTips("地址添加成功"),e.hide(),"function"==typeof e.option.onSuccess&&e.option.onSuccess(r)},function(e){s.errorTips(e)}):t&&r.status?o.update(r.data,function(r){s.successTips("地址修改成功"),e.hide(),"function"==typeof e.option.onSuccess&&e.option.onSuccess(r)},function(e){s.errorTips(e)}):s.errorTips(r.errMsg||"好像哪里不对了~")}),this.$modalWrap.find(".modal-container").click(function(e){e.stopPropagation()}),this.$modalWrap.find(".close").click(function(r){e.hide()})},loadModal:function(){var e=s.renderHtml(a,{isUpdate:this.option.isUpdate,data:this.option.data});this.$modalWrap.html(e),this.loadProvince()},loadProvince:function(){var e=i.getProvinces()||[],r=this.$modalWrap.find("#receiver-province");r.html(this.getSelectOption(e)),this.option.isUpdate&&this.option.data.receiverProvince&&(r.val(this.option.data.receiverProvince),this.loadCities(this.option.data.receiverProvince))},loadCities:function(e){var r=i.getCities(e)||[],t=this.$modalWrap.find("#receiver-city");t.html(this.getSelectOption(r)),this.option.isUpdate&&this.option.data.receiverCity&&t.val(this.option.data.receiverCity)},getReceiverInfo:function(){var e={},r={status:!1};return e.receiverName=$.trim(this.$modalWrap.find("#receiver-name").val()),e.receiverProvince=this.$modalWrap.find("#receiver-province").val(),e.receiverCity=this.$modalWrap.find("#receiver-city").val(),e.receiverAddress=$.trim(this.$modalWrap.find("#receiver-address").val()),e.receiverPhone=$.trim(this.$modalWrap.find("#receiver-phone").val()),e.receiverZip=$.trim(this.$modalWrap.find("#receiver-zip").val()),this.option.isUpdate&&(e.id=this.$modalWrap.find("#receiver-id").val()),e.receiverName?e.receiverProvince?e.receiverCity?e.receiverAddress?e.receiverPhone?(r.status=!0,r.data=e):r.errMsg="请输入收件人手机号":r.errMsg="请输入收件人详细地址":r.errMsg="请选择收件人所在城市":r.errMsg="请选择收件人所在省份":r.errMsg="请输入收件人姓名",r},getSelectOption:function(e){for(var r='<option value="">请选择</option>',t=0,s=e.length;t<s;t++)r+='<option value="'+e[t]+'">'+e[t]+"</option>";return r},hide:function(){this.$modalWrap.empty()}};e.exports=c},69:function(e,r,t){"use strict";t(27),t(6),t(7);var s=t(1),i=t(15),o=t(18),a=t(48),c=t(50),n=t(68),d={data:{selectedAddressId:null},init:function(){this.onLoad(),this.bindEvent()},onLoad:function(){this.loadAddressList(),this.loadProductList()},bindEvent:function(){var e=this;$(document).on("click",".address-item",function(){$(this).addClass("active").siblings(".address-item").removeClass("active"),e.data.selectedAddressId=$(this).data("id")}),$(document).on("click",".order-submit",function(){var r=e.data.selectedAddressId;r?i.createOrder({shippingId:r},function(e){window.location.href="./payment.html?orderNumber="+e.orderNo},function(e){s.errorTips(e)}):s.errorTips("请选择地址后再提交")}),$(document).on("click",".address-add",function(){n.show({isUpdate:!1,onSuccess:function(){e.loadAddressList()}})}),$(document).on("click",".address-update",function(r){r.stopPropagation();var t=$(this).parents(".address-item").data("id");o.getAddress(t,function(r){n.show({isUpdate:!0,data:r,onSuccess:function(){e.loadAddressList()}})},function(e){s.errorTips(e)})}),$(document).on("click",".address-delete",function(r){r.stopPropagation();var t=$(this).parents(".address-item").data("id");window.confirm("确认要删除该地址？")&&o.deleteAddress(t,function(r){e.loadAddressList()},function(e){s.errorTips(e)})})},loadAddressList:function(){var e=this;$(".address-con").html('<div class="loading"></div>'),o.getAddressList(function(r){e.addressFilter(r);var t=s.renderHtml(a,r);$(".address-con").html(t)},function(e){$(".address-con").html('<p class="err-tip">地址加载失败，请刷新后重试</p>')})},addressFilter:function(e){if(this.data.selectedAddressId){for(var r=!1,t=0,s=e.list.length;t<s;t++)e.list[t].id===this.data.selectedAddressId&&(e.list[t].isActive=!0,r=!0);r||(this.data.selectedAddressId=null)}},loadProductList:function(){$(".product-con").html('<div class="loading"></div>'),i.getProductList(function(e){var r=s.renderHtml(c,e);$(".product-con").html(r)},function(e){$(".product-con").html('<p class="err-tip">商品信息加载失败，请刷新后重试</p>')})}};$(function(){d.init()})},82:function(e,r){"use strict";var t={cityInfo:{"北京市":["东城区","西城区","朝阳区","丰台区","石景山区","海淀区","门头沟区","房山区","通州区","顺义区","昌平区","大兴区","怀柔区","平谷区","密云区","延庆区"],"天津市":["和平区","河东区","河西区","南开区","河北区","红桥区","东丽区","西青区","津南区","北辰区","武清区","宝坻区","滨海新区","宁河区","静海区","蓟州区"],"河北省":["石家庄市","唐山市","秦皇岛市","邯郸市","邢台市","保定市","张家口市","承德市","沧州市","廊坊市","衡水市"],"山西省":["太原市","大同市","阳泉市","长治市","晋城市","朔州市","晋中市","运城市","忻州市","临汾市","吕梁市"],"内蒙古自治区":["呼和浩特市","包头市","乌海市","赤峰市","通辽市","鄂尔多斯市","呼伦贝尔市","巴彦淖尔市","乌兰察布市","兴安盟","锡林郭勒盟","阿拉善盟"],"辽宁省":["沈阳市","大连市","鞍山市","抚顺市","本溪市","丹东市","锦州市","营口市","阜新市","辽阳市","盘锦市","铁岭市","朝阳市","葫芦岛市"],"吉林省":["长春市","吉林市","四平市","辽源市","通化市","白山市","松原市","白城市","延边朝鲜族自治州"],"黑龙江省":["哈尔滨市","齐齐哈尔市","鸡西市","鹤岗市","双鸭山市","大庆市","伊春市","佳木斯市","七台河市","牡丹江市","黑河市","绥化市","大兴安岭地区"],"上海市":["黄浦区","徐汇区","长宁区","静安区","普陀区","虹口区","杨浦区","闵行区","宝山区","嘉定区","浦东新区","金山区","松江区","青浦区","奉贤区","崇明区"],"江苏省":["南京市","无锡市","徐州市","常州市","苏州市","南通市","连云港市","淮安市","盐城市","扬州市","镇江市","泰州市","宿迁市"],"浙江省":["杭州市","宁波市","温州市","嘉兴市","湖州市","绍兴市","金华市","衢州市","舟山市","台州市","丽水市"],"安徽省":["合肥市","芜湖市","蚌埠市","淮南市","马鞍山市","淮北市","铜陵市","安庆市","黄山市","滁州市","阜阳市","宿州市","六安市","亳州市","池州市","宣城市"],"福建省":["福州市","厦门市","莆田市","三明市","泉州市","漳州市","南平市","龙岩市","宁德市"],"江西省":["南昌市","景德镇市","萍乡市","九江市","新余市","鹰潭市","赣州市","吉安市","宜春市","抚州市","上饶市"],"山东省":["济南市","青岛市","淄博市","枣庄市","东营市","烟台市","潍坊市","济宁市","泰安市","威海市","日照市","莱芜市","临沂市","德州市","聊城市","滨州市","菏泽市"],"河南省":["郑州市","开封市","洛阳市","平顶山市","安阳市","鹤壁市","新乡市","焦作市","濮阳市","许昌市","漯河市","三门峡市","南阳市","商丘市","信阳市","周口市","驻马店市","济源市"],"湖北省":["武汉市","黄石市","十堰市","宜昌市","襄阳市","鄂州市","荆门市","孝感市","荆州市","黄冈市","咸宁市","随州市","恩施土家族苗族自治州","仙桃市","潜江市","天门市","神农架林区"],"湖南省":["长沙市","株洲市","湘潭市","衡阳市","邵阳市","岳阳市","常德市","张家界市","益阳市","郴州市","永州市","怀化市","娄底市","湘西土家族苗族自治州"],"广东省":["广州市","韶关市","深圳市","珠海市","汕头市","佛山市","江门市","湛江市","茂名市","肇庆市","惠州市","梅州市","汕尾市","河源市","阳江市","清远市","东莞市","中山市","潮州市","揭阳市","云浮市"],"广西壮族自治区":["南宁市","柳州市","桂林市","梧州市","北海市","防城港市","钦州市","贵港市","玉林市","百色市","贺州市","河池市","来宾市","崇左市"],"海南省":["海口市","三亚市","三沙市","儋州市","五指山市","琼海市","文昌市","万宁市","东方市","定安县","屯昌县","澄迈县","临高县","白沙黎族自治县","昌江黎族自治县","乐东黎族自治县","陵水黎族自治县","保亭黎族苗族自治县","琼中黎族苗族自治县"],"重庆市":["万州区","涪陵区","渝中区","大渡口区","江北区","沙坪坝区","九龙坡区","南岸区","北碚区","綦江区","大足区","渝北区","巴南区","黔江区","长寿区","江津区","合川区","永川区","南川区","璧山区","铜梁区","潼南区","荣昌区","开州区","梁平区","武隆区","城口县","丰都县","垫江县","忠县","云阳县","奉节县","巫山县","巫溪县","石柱土家族自治县","秀山土家族苗族自治县","酉阳土家族苗族自治县","彭水苗族土家族自治县"],"四川省":["成都市","自贡市","攀枝花市","泸州市","德阳市","绵阳市","广元市","遂宁市","内江市","乐山市","南充市","眉山市","宜宾市","广安市","达州市","雅安市","巴中市","资阳市","阿坝藏族羌族自治州","甘孜藏族自治州","凉山彝族自治州"],"贵州省":["贵阳市","六盘水市","遵义市","安顺市","毕节市","铜仁市","黔西南布依族苗族自治州","黔东南苗族侗族自治州","黔南布依族苗族自治州"],"云南省":["昆明市","曲靖市","玉溪市","保山市","昭通市","丽江市","普洱市","临沧市","楚雄彝族自治州","红河哈尼族彝族自治州","文山壮族苗族自治州","西双版纳傣族自治州","大理白族自治州","德宏傣族景颇族自治州","怒江傈僳族自治州","迪庆藏族自治州"],"西藏自治区":["拉萨市","日喀则市","昌都市","林芝市","山南市","那曲市","阿里地区"],"陕西省":["西安市","铜川市","宝鸡市","咸阳市","渭南市","延安市","汉中市","榆林市","安康市","商洛市"],"甘肃省":["兰州市","嘉峪关市","金昌市","白银市","天水市","武威市","张掖市","平凉市","酒泉市","庆阳市","定西市","陇南市","临夏回族自治州","甘南藏族自治州"],"青海省":["西宁市","海东市","海北藏族自治州","黄南藏族自治州","海南藏族自治州","果洛藏族自治州","玉树藏族自治州","海西蒙古族藏族自治州"],"宁夏回族自治区":["银川市","石嘴山市","吴忠市","固原市","中卫市"],"新疆维吾尔自治区":["乌鲁木齐市","克拉玛依市","吐鲁番市","哈密市","昌吉回族自治州","博尔塔拉蒙古自治州","巴音郭楞蒙古自治州","阿克苏地区","克孜勒苏柯尔克孜自治州","喀什地区","和田地区","伊犁哈萨克自治州","塔城地区","阿勒泰地区","石河子市","阿拉尔市","图木舒克市","五家渠市","铁门关市"],"香港":["香港"],"澳门":["澳门"]},getProvinces:function(){var e=[];for(var r in this.cityInfo)e.push(r);return e},getCities:function(e){return this.cityInfo[e]||[]}};e.exports=t}});