!function(){"use strict";var t,e={n:function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,{a:n}),n},d:function(t,n){for(var a in n)e.o(n,a)&&!e.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:n[a]})},o:function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}},n=wp.i18n,a=jQuery,r=e.n(a),i=lodash,o=rankMathAnalyzer;(t=r())((function(){window.rankMathSetupWizard={init:function(){rankMath.currentStep in this&&this[rankMath.currentStep](),t(document).on("cmb_init",(function(){t(".cmb-multicheck-toggle",".multicheck-checked").trigger("click")}))},compatibility:function(){t(".wizard-deactivate-plugin").on("click",(function(e){e.preventDefault();var n=t(this);if(!n.hasClass("disabled")){var a=n.closest("tr");t.ajax({url:rankMath.ajaxurl,type:"POST",data:{action:"rank_math_deactivate_plugins",security:rankMath.security,plugin:n.data("plugin")}}).always((function(t){"1"===t&&(a.find(".dashicons-warning").removeClass("dashicons-warning").addClass("dashicons-yes"),n.addClass("disabled").text(rankMath.deactivated))}))}})),t(".rank-math-setup-mode.is-free ul li:last-child").on("click",(function(t){return t.preventDefault(),window.open("//rankmath.com/pricing/?utm_source=Plugin&utm_medium=Setup%20Wizard%20Custom%20Mode&utm_campaign=WP"),!1}))},import:function(){var e=t("#import-progress"),a=t("#import-progress-bar"),r=0,c=0,s=function(t,e){var n=new Date,a=e.val()+"["+(10>n.getHours()?"0":"")+n.getHours()+":"+(10>n.getMinutes()?"0":"")+n.getMinutes()+":"+(10>n.getSeconds()?"0":"")+n.getSeconds()+"] "+t+"\n";e.text(a).scrollTop(e[0].scrollHeight-e.height()-20)},u=function(t){t>100&&(t=100),a.find(".number").html(t),a.find("#importBar").css("width",t+"%")},l=function e(a,i,o,l,d,h){if(0!==i.length){l=l||1;var f=i.shift(),g="deactivate"===f?"Deactivating "+h:"Importing "+f+" from "+h,m=Math.floor(100/c);"recalculate"===f&&(g="Starting SEO score recalculation"),s(g,o),t.ajax({url:rankMath.ajaxurl,type:"POST",data:{perform:f,pluginSlug:a,paged:l,action:"rank_math_import_plugin",security:rankMath.security}}).success((function(t){var c=1;t&&t.page&&t.page<t.total_pages&&(c=t.page+1,i.unshift(f)),t&&t.total_pages&&(m=Math.ceil(m/t.total_pages)),u(r+=m),"recalculate"===f&&t.total_items>0?p(t.data,h,i,o,l,d):("recalculate"===f&&0===t.total_items&&(t.message=(0,n.__)("No posts found without SEO score.","rank-math")),s(t.success?t.message:t.error,o),e(a,i,o,c,d,h))})).error((function(t){s(t.statusText,o),e(a,i,o,null,d,h)}))}else d()},d=[],p=function(e,n,a,r,c,u){var p={};if("complete"!==e)return new Promise((function(t){(0,i.forEach)(e,(function(t,e){if(-1===d.indexOf(e)){d.push(e);var n=new o.ResultManager,a=wp.i18n,r=new o.Paper;r.setTitle(t.title),r.setDescription(t.description),r.setText(t.content),r.setKeyword(t.keyword),r.setKeywords(t.keywords),r.setPermalink(t.url),r.setUrl(t.url),t.thumbnail&&r.setThumbnail(t.thumbnail),r.setContentAI(t.hasContentAi);var c=function(t){var e=rankMath.assessor.researchesTests;return e=(0,i.difference)(e,["keywordNotUsed"]),t.isProduct?e=(0,i.difference)(e,["keywordInSubheadings","linksHasExternals","linksNotAllExternals","linksHasInternal","titleSentiment","titleHasNumber","contentHasTOC"]):e}(t);new o.Analyzer({i18n:a,analysis:c}).analyzeSome(c,r).then((function(a){n.update(r.getKeyword(),a,!0);var i=n.getScore(t.keyword);t.isProduct&&(i=t.isReviewEnabled?i+1:i,i=t.hasProductSchema?i+1:i),p[e]=i}))}})),t()})).then((function(){t.ajax({url:rankMath.api.root+"rankmath/v1/updateSeoScore",method:"POST",beforeSend:function(t){t.setRequestHeader("X-WP-Nonce",rankMath.restNonce)},data:{action:"rank_math_update_seo_score",postScores:p},success:function(t){s("SEO Scores updated",r),l(n,a,r,c,u)},error:function(t){s(t.statusText,r)}})}));this.ajaxImport(n,a,r,c,u)};t(".button-import",".form-footer").on("click",(function(n){if(n.preventDefault(),rankMath.isConfigured&&!window.confirm(rankMath.confirm))return!1;var r=t(".import-data:checkbox:checked");if(!r.length)return window.alert("Please select plugin to import data."),!1;var i=t(this),o={},l=[];t.each(r,(function(){var e=t(this).val(),n=t(this).parents(".cmb-group-description").next().find(":checkbox:checked"),a=n.data("active"),r=t(this).data("plugin");l.push(r);var i=function(e){return t.map(e,(function(t){return t.value}))}(n);0<i.length&&a&&i.push("deactivate"),c+=i.length,o[e]={plugin:r,actions:i}})),i.prop("disabled",!0),e.show(),a.show(),a.find(".plugin-from").html(l.join(", ")),s("Import started...",e),h(o,e,(function(){u(100),i.prop("disabled",!1),t(".button",".form-footer").hide(),t(".button-continue").show()}))}));var h=function t(n,a,r){var i=Object.keys(n),o=i.length,c=n[i[0]],u=Object.keys(n)[0];if(delete n[u],0===o)return s("Import finished. Click on the button below to continue the Setup Wizard.",a),void r();l(u,c.actions,e,null,(function(){t(n,a,r)}),c.plugin)};t(".import-data").on("change",(function(){for(var e=t(this),n=this.checked,a=e.parents(".cmb-group-description").next().find(".cmb2-option"),r=0;r<a.length;r++)"checkbox"===a[r].type&&(a[r].checked=n);n&&("yoast"===e.val()?(t('.import-data[value="aioseo"]').prop("checked",!1).trigger("change"),t('.import-data[value="seopress"]').prop("checked",!1).trigger("change")):"aioseo"===e.val()?(t('.import-data[value="yoast"]').prop("checked",!1).trigger("change"),t('.import-data[value="seopress"]').prop("checked",!1).trigger("change")):"seopress"===e.val()&&(t('.import-data[value="yoast"]').prop("checked",!1).trigger("change"),t('.import-data[value="aioseo"]').prop("checked",!1).trigger("change")))})),t(".cmb-type-group .cmb2-checkbox-list .cmb2-option").on("click",(function(){var e=t(this),n=e.attr("name"),a=e.parents("ul").find('input[name="'+n+'"]:checkbox:checked'),r=e.parents("ul").find('input[name="'+n+'"]');a.length===r.length&&e.parents(".cmb-type-group").find(".import-data").prop("checked",!0).trigger("change")})),t(".button-deactivate-plugins").on("click",(function(e){var n=t(this);n.parents("form").find("input[data-active]").length&&(e.preventDefault(),n.text(n.data("deactivate-message")),t.ajax({url:rankMath.ajaxurl,type:"POST",data:{action:"rank_math_deactivate_plugins",security:rankMath.security,plugin:"all"}}).success((function(){n.parents("form").trigger("submit")})).error((function(){window.alert("Something went wrong! Please try again later.")})))}))},yoursite:function(){var e=r()("#website_name"),n=r()("#company_name");e.val()===n.val()&&e.on("keyup",(function(){n.val(e.val())})),t("#rank-math-search-input").on("input keypress",(function(e){var n=t(this),a=n.next();if(13===e.keyCode||13===e.which){if("createEvent"in document){var r=this.ownerDocument,i=r.createEvent("MouseEvents");i.initMouseEvent("click",!0,!0,r.defaultView,1,0,0,0,0,!1,!1,!1,!1,0,null),a[0].dispatchEvent(i)}return!1}a.attr("href",a.data("href")+encodeURIComponent(n.val()))}));var a=t("#business_type");0!==parseInt(a.data("default"))&&t("#site_type").on("change",(function(){var e=t(this).val();"news"!==e&&"webshop"!==e&&"otherbusiness"!==e||a.val("Organization").trigger("change"),"business"===e&&a.val("LocalBusiness").trigger("change")}))},analytics:function(){t("#console_authorization_code").on("paste",(function(){var e=t(this).next(".button");setTimeout((function(){e.trigger("click")}),100)}))},ready:function(){t("#auto-update").on("change",(function(){t(".rank-math-auto-update-email-wrapper").toggle(t(this).is(":checked"))})),t(".rank-math-additional-options input.rank-math-modules").on("change",(function(){var e=t(this);t.ajax({url:rankMath.api.root+"rankmath/v1/autoUpdate",method:"POST",beforeSend:function(t){t.setRequestHeader("X-WP-Nonce",rankMath.api.nonce)},data:{key:e.data("key"),value:e.is(":checked")}})}))}},window.rankMathSetupWizard.init()}))}();