!function(n){var o={};function t(e){if(o[e])return o[e].exports;var i=o[e]={i:e,l:!1,exports:{}};return n[e].call(i.exports,i,i.exports,t),i.l=!0,i.exports}t.m=n,t.c=o,t.d=function(e,i,n){t.o(e,i)||Object.defineProperty(e,i,{enumerable:!0,get:n})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(i,e){if(1&e&&(i=t(i)),8&e)return i;if(4&e&&"object"==typeof i&&i&&i.__esModule)return i;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:i}),2&e&&"string"!=typeof i)for(var o in i)t.d(n,o,function(e){return i[e]}.bind(null,o));return n},t.n=function(e){var i=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(i,"a",i),i},t.o=function(e,i){return Object.prototype.hasOwnProperty.call(e,i)},t.p="",t(t.s=32)}({0:function(e,i){e.exports=jQuery},32:function(e,i,n){e.exports=n(33)},33:function(e,i,n){"use strict";n.r(i),function(e){n(34),n(35);e(document).ready(function(e){e("#envira-gallery-settings input:not([type=hidden]), #envira-gallery-settings select").conditions([{conditions:{element:'[name="_envira_gallery[lightbox_theme]"]',type:"value",operator:"array",condition:["base","captioned","polaroid","showcase","sleek","subtle"]},actions:{if:[{element:"#envira-config-lightbox-title-display-box, #envira-config-lightbox-arrows-box, #envira-config-lightbox-toolbar-box",action:"show"}]}},{conditions:{element:'[name="_envira_gallery[lightbox_theme]"]',type:"value",operator:"array",condition:["base_dark"]},actions:{if:[{element:"#envira-config-lightbox-title-display-box, #envira-config-lightbox-arrows-box, #envira-config-lightbox-toolbar-box",action:"hide"}]}},{conditions:[{element:'[name="_envira_gallery[lightbox_theme]"]',type:"value",operator:"array",condition:["base","captioned","polaroid","showcase","sleek","subtle"]},{element:'[name="_envira_gallery[arrows]"]',type:"checked",operator:"is"}],actions:{if:{element:"#envira-config-lightbox-arrows-position-box",action:"show"},else:{element:"#envira-config-lightbox-arrows-position-box",action:"hide"}}},{conditions:[{element:'[name="_envira_gallery[lightbox_theme]"]',type:"value",operator:"array",condition:["base","captioned","polaroid","showcase","sleek","subtle"]}],actions:{if:{element:"#envira-config-fullscreen-box, #envira-config-open-fullscreen-box",action:"hide"}}},{conditions:[{element:'[name="_envira_gallery[lightbox_theme]"]',type:"value",operator:"array",condition:["base_dark","base_light"]}],actions:{if:{element:"#envira-config-fullscreen-box, #envira-config-open-fullscreen-box",action:"show"}}},{conditions:[{element:'[name="_envira_gallery[lightbox_theme]"]',type:"value",operator:"array",condition:["base","captioned","polaroid","showcase","sleek","subtle"]},{element:'[name="_envira_gallery[toolbar]"]',type:"checked",operator:"is"}],actions:{if:{element:"#envira-config-fullscreen-box, #envira-config-open-fullscreen-box",action:"show"}}},{conditions:[{element:'[name="_envira_gallery[lightbox_theme]"]',type:"value",operator:"array",condition:["base_dark"]}],actions:{if:{element:"#envira-config-image-counter",action:"show"},else:{element:"#envira-config-image-counter",action:"hide"}}},{conditions:[{element:'[name="_envira_gallery[toolbar]"]',type:"checked",operator:"is"},{element:'[name="_envira_gallery[lightbox_theme]"]',type:"value",operator:"array",condition:["base","captioned","polaroid","showcase","sleek","subtle"]}],actions:{if:[{element:"#envira-config-lightbox-toolbar-title-box, #envira-config-lightbox-toolbar-position-box",action:"show"}],else:[{element:"#envira-config-lightbox-toolbar-title-box, #envira-config-lightbox-toolbar-position-box",action:"hide"}]}},{conditions:[{element:'[name="_envira_gallery[lightbox_theme]"]',type:"value",operator:"array",condition:["base","captioned","polaroid","showcase","sleek","subtle"]},{element:'[name="_envira_gallery[mobile_lightbox]"]',type:"checked",operator:"is"}],actions:{if:{element:"#envira-config-mobile-arrows-box, #envira-config-mobile-toolbar-box",action:"show"},else:{element:"#envira-config-mobile-arrows-box, #envira-config-mobile-toolbar-box",action:"hide"}}},{conditions:{element:'[name="_envira_gallery[mobile_lightbox]"]',type:"checked",operator:"is"},actions:{if:{element:"#envira-config-mobile-touchwipe-box, #envira-config-mobile-touchwipe-close-box, #envira-config-mobile-thumbnails-box",action:"show"},else:{element:"#envira-config-mobile-touchwipe-box, #envira-config-mobile-touchwipe-close-box, #envira-config-mobile-thumbnails-box",action:"hide"}}},{conditions:{element:'[name="_envira_gallery[mobile_lightbox]"]',type:"checked",operator:"is"},actions:{if:{element:"#envira-config-lightbox-mobile-enable-links",action:"hide"},else:{element:"#envira-config-lightbox-mobile-enable-links",action:"show"}}},{conditions:[{element:'[name="_envira_gallery[lightbox_theme]"]',type:"value",operator:"array",condition:["base","captioned","polaroid","showcase","sleek","subtle"]},{element:'[name="_envira_gallery[thumbnails]"]',type:"checked",operator:"is"}],actions:{if:{element:"#envira-config-thumbnails-position-box",action:"show"},else:{element:"#envira-config-thumbnails-position-box",action:"hide"}}},{conditions:[{element:'[name="_envira_gallery[thumbnails]"]',type:"checked",operator:"is"}],actions:{if:{element:"#envira-config-thumbnails-custom-size",action:"show"},else:{element:"#envira-config-thumbnails-custom-size",action:"hide"}}},{conditions:[{element:'[name="_envira_gallery[thumbnails_toggle]"]',type:"checked",operator:"is"}],actions:{if:{element:"#envira-config-thumbnail-hide",action:"show"},else:{element:"#envira-config-thumbnail-hide",action:"hide"}}},{conditions:[{element:'[name="_envira_gallery[thumbnails_custom_size]"]',type:"checked",operator:"is"}],actions:{if:{element:"#envira-config-thumbnails-height-box, #envira-config-thumbnails-width-box",action:"show"},else:{element:"#envira-config-thumbnails-height-box, #envira-config-thumbnails-width-box",action:"hide"}}},{conditions:[{element:'[name="_envira_gallery[lightbox_theme]"]',type:"value",operator:"array",condition:["base_dark","base_light"]},{element:'[name="_envira_gallery[thumbnails]"]',type:"checked",operator:"is"}],actions:{if:{element:"#envira-config-thumbnail-button",action:"show"},else:{element:"#envira-config-thumbnail-button",action:"hide"}}},{conditions:{element:'[name="_envira_gallery[columns]"]',type:"value",operator:"array",condition:["0"]},actions:{if:[{element:"#envira-config-standard-settings-box, #envira-config-additional-copy-box, #envira-config-title-caption-column-mobile",action:"hide"},{element:"#envira-config-justified-settings-box, #envira-config-mobile-justified-row-height, #envira-config-additional-copy-box-automatic, #envira-config-title-caption-automatic-mobile",action:"show"}],else:[{element:"#envira-config-standard-settings-box, #envira-config-additional-copy-box, #envira-config-title-caption-column-mobile",action:"show"},{element:"#envira-config-justified-settings-box, #envira-config-mobile-justified-row-height, #envira-config-additional-copy-box-automatic, #envira-config-title-caption-automatic-mobile",action:"hide"}]}},{conditions:{element:'[name="_envira_gallery[justified_gallery_theme]"]',type:"value",operator:"array",condition:["normal"]},actions:{if:[{element:"#envira-config-gallery-justified-theme-hover",action:"hide"}],else:[{element:"#envira-config-gallery-justified-theme-hover",action:"show"}]}},{conditions:{element:'[name="_envira_gallery[description_position]"]',type:"value",operator:"array",condition:["0"]},actions:{if:[{element:"#envira-config-description-box",action:"hide"}],else:[{element:"#envira-config-description-box",action:"show"}]}},{conditions:{element:'[name="_envira_gallery[css_animations]"]',type:"checked",operator:"is"},actions:{if:[{element:"#envira-config-css-opacity-box",action:"show"}],else:[{element:"#envira-config-css-opacity-box",action:"hide"}]}},{conditions:{element:'[name="_envira_gallery[image_size]"]',type:"value",operator:"array",condition:["default"]},actions:{if:[{element:"#envira-config-crop-size-box, #envira-config-crop-box",action:"show"}],else:[{element:"#envira-config-crop-size-box, #envira-config-crop-box",action:"hide"}]}},{conditions:{element:'[name="_envira_gallery[lightbox_enabled]"]',type:"checked",operator:"is"},actions:{if:[{element:"#envira-lightbox-settings",action:"show"}],else:[{element:"#envira-lightbox-settings",action:"hide"}]}},{conditions:{element:'[name="_envira_gallery[lightbox_enabled]"]',type:"checked",operator:"is"},actions:{if:[{element:"#envira-config-lightbox-enabled-link",action:"hide"}],else:[{element:"#envira-config-lightbox-enabled-link",action:"show"}]}},{conditions:{element:'[name="_envira_gallery[mobile]"]',type:"checked",operator:"is"},actions:{if:[{element:"#envira-config-mobile-size-box",action:"show"}],else:[{element:"#envira-config-mobile-size-box",action:"hide"}]}},{conditions:[{element:'[name="_envira_gallery[mobile_thumbnails]"]',type:"checked",operator:"is"},{element:'[name="_envira_gallery[mobile_lightbox]"]',type:"checked",operator:"is"},{element:'[name="_envira_gallery[mobile_lightbox]"]',type:"checked",operator:"is"}],actions:{if:{element:"#envira-config-mobile-thumbnails-width-box, #envira-config-mobile-thumbnails-height-box",action:"show"},else:{element:"#envira-config-mobile-thumbnails-width-box, #envira-config-mobile-thumbnails-height-box",action:"hide"}}},{conditions:{element:'[name="_envira_gallery[lazy_loading]"]',type:"checked",operator:"is"},actions:{if:[{element:"#envira-config-lazy-loading-delay",action:"show"}],else:[{element:"#envira-config-lazy-loading-delay",action:"hide"}]}},{conditions:{element:"#envira-config-sorting-defaults",type:"value",operator:"array",condition:["0","1"]},actions:{if:[{element:"#envira-config-sorting-direction-box",action:"hide"}],else:[{element:"#envira-config-sorting-direction-box",action:"show"}]}}])})}.call(this,n(0))},34:function(e,i,n){(function(e){e(document).ready(function(e){e("input, select").conditional({data:"envira-conditional",toggle:"envira-conditional-toggle",value:"envira-conditional-value",displayOnEnabled:"envira-conditional-display"})}),function(c){"use strict";c.fn.conditional=function(e){var l=c.extend({data:"conditional",value:"conditional-value",toggle:"conditional-toggle",displayOnEnabled:"conditional-display"},e);return this.each(function(){if(void 0===c(this).data(l.data))return!0;var i,n,o,t,a;c(this).on("change",function(){switch(i=c(this).data(l.data).split(","),void 0===(n=c(this).data(l.displayOnEnabled))&&(n=!0),void 0===(o=c(this).data(l.value))&&(o=""),t=c(this).data(l.toggle),void 0===o&&(t=""),a=!1,c(this).attr("type")){case"checkbox":a=n?c(this).is(":checked"):!c(this).is(":checked");break;default:a=n?""!==o?String(c(this).val())===String(o):""!==c(this).val()&&"0"!==c(this).val():""!==o?c(this).val()!==o:""===c(this).val()||"0"===c(this).val()}for(var e=0;e<i.length;e++)a?(c("#"+i[e]).fadeIn(300),t&&c("#"+t).fadeOut(300)):(c("#"+i[e]).fadeOut(300),t&&c("#"+t).fadeIn(300))}),c(this).trigger("change")}),this}}(e)}).call(this,n(0))},35:function(e,i,n){(function(e){!function(l){"use strict";l.fn.conditions=function(n){return this.each(function(e,i){new o(i,n,l.fn.conditions.defaults).init()})},l.fn.conditions.defaults={condition:null,actions:{},effect:"fade"};var o=function(e,i,n){var o=this;o.element=l(e),o.defaults=n,o.conditions=i,o._init=!1,l.isArray(o.conditions)||(o.conditions=[o.conditions]),l.each(o.conditions,function(e,i){i=l.extend({},o.defaults,i),o.conditions[e]=i})};o.prototype.init=function(){var e=this;e._init=!0,l(e.element).on("change",function(){e.matchConditions()}),l(e.element).on("keyup",function(){e.matchConditions()}),e.matchConditions(!0)},o.prototype.matchConditions=function(e){var a=this;e||(a._init=!1),l.each(a.conditions,function(e,n){var o=!1,t=!0;l.isArray(n.conditions)||(n.conditions=[n.conditions]),l.each(n.conditions,function(e,i){switch(i.element=l(i.element),i.type){case"value":case"val":switch(i.operator){case"===":case"==":case"=":o=i.element.val()===i.condition;break;case"!==":case"!=":o=i.element.val()!==i.condition;break;case"array":o=-1!==l.inArray(i.element.val(),i.condition);break;case"!array":o=-1===l.inArray(i.element.val(),i.condition)}break;case"checked":switch(i.operator){case"is":o=i.element.is(":checked");break;case"!is":o=!i.element.is(":checked")}}!o&&t&&(t=!1)}),t?l.isEmptyObject(n.actions.if)||(l.isArray(n.actions.if)||(n.actions.if=[n.actions.if]),l.each(n.actions.if,function(e,i){a.showAndHide(i,n.effect)})):l.isEmptyObject(n.actions.else)||(l.isArray(n.actions.else)||(n.actions.else=[n.actions.else]),l.each(n.actions.else,function(e,i){a.showAndHide(i,n.effect)}))})},o.prototype.showAndHide=function(e,i){switch(e.action){case"show":this._show(l(e.element),i);break;case"hide":this._hide(l(e.element),i)}},o.prototype._show=function(e,i){if(this._init)e.show();else switch(i){case"appear":e.show();break;case"slide":e.slideDown();break;case"fade":e.fadeIn(300)}},o.prototype._hide=function(e,i){if(this._init)e.hide();else switch(i){case"appear":e.hide();break;case"slide":e.slideUp();break;case"fade":e.fadeOut(300)}}}(e)}).call(this,n(0))}});