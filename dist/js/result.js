webpackJsonp([17],{0:function(r,e,t){r.exports=t(73)},11:function(r,e){},12:function(r,e,t){"use strict";t(11)},31:function(r,e){},73:function(r,e,t){t(31);var n=(t(12),t(1));$(function(){var r=n.getUrlParam("type")||"default",e=$("."+r+"-success");if("payment"===r){var t=n.getUrlParam("orderNumber"),a=e.find(".order-number");a.attr("href",a.attr("href")+t)}else if("close"===r){var t=n.getUrlParam("orderNumber"),a=e.find(".order-number");a.attr("href",a.attr("href")+t)}e.show()})}});