"undefined"==typeof Modernizr&&(window.Modernizr=function(e,n,t){function o(e){p.cssText=e}function i(e,n){return o(w.join(e+";")+(n||""))}function r(e,n){return typeof e===n}function u(e,n){return!!~(""+e).indexOf(n)}function c(e,n,o){for(var i in e){var u=n[e[i]];if(u!==t)return o===!1?e[i]:r(u,"function")?u.bind(o||n):u}return!1}var a="2.8.3",s={},d=n.documentElement,l="modernizr",f=n.createElement(l),p=f.style,h,y={}.toString,w=" -webkit- -moz- -o- -ms- ".split(" "),v={},m={},b={},g=[],T=g.slice,C,j=function(e,t,o,i){var r,u,c,a,s=n.createElement("div"),f=n.body,p=f||n.createElement("body");if(parseInt(o,10))for(;o--;)c=n.createElement("div"),c.id=i?i[o]:l+(o+1),s.appendChild(c);return r=["&#173;",'<style id="s',l,'">',e,"</style>"].join(""),s.id=l,(f?s:p).innerHTML+=r,p.appendChild(s),f||(p.style.background="",p.style.overflow="hidden",a=d.style.overflow,d.style.overflow="hidden",d.appendChild(p)),u=t(s,e),f?s.parentNode.removeChild(s):(p.parentNode.removeChild(p),d.style.overflow=a),!!u},z={}.hasOwnProperty,x;x=r(z,"undefined")||r(z.call,"undefined")?function(e,n){return n in e&&r(e.constructor.prototype[n],"undefined")}:function(e,n){return z.call(e,n)},Function.prototype.bind||(Function.prototype.bind=function(e){var n=this;if("function"!=typeof n)throw new TypeError;var t=T.call(arguments,1),o=function(){if(this instanceof o){var i=function(){};i.prototype=n.prototype;var r=new i,u=n.apply(r,t.concat(T.call(arguments)));return Object(u)===u?u:r}return n.apply(e,t.concat(T.call(arguments)))};return o}),v.touch=function(){var t;return"ontouchstart"in e||e.DocumentTouch&&n instanceof DocumentTouch?t=!0:j(["@media (",w.join("touch-enabled),("),l,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(e){t=9===e.offsetTop}),t};for(var E in v)x(v,E)&&(C=E.toLowerCase(),s[C]=v[E](),g.push((s[C]?"":"no-")+C));return s.addTest=function(e,n){if("object"==typeof e)for(var o in e)x(e,o)&&s.addTest(o,e[o]);else{if(e=e.toLowerCase(),s[e]!==t)return s;n="function"==typeof n?n():n,"undefined"!=typeof enableClasses&&enableClasses&&(d.className+=" "+(n?"":"no-")+e),s[e]=n}return s},o(""),f=h=null,s._version=a,s._prefixes=w,s.testStyles=j,s}(this,this.document)),jQuery(document).ready(function($){function e(){return Modernizr.touch&&jQuery(window).width()<=1e3||window.screen.width<=1281&&window.devicePixelRatio>1}function n(){var e=$("article.post, #masthead").eq(-1);return e.length>0&&$(window).scrollTop()>e.offset().top+e.height()/6?!0:!1}function t(){var e=9999999,n=null,t=$(window).scrollTop()+$(window).height()/2,o,i;return $("article.post, #masthead").each(function(){o=$(this).offset().top+$(this).height()/2,i=Math.abs(o-t),e>i&&(e=i,n=$(this))}),n}function o(){var e=t();null!==e&&(n()||$("body").animate({scrollTop:e.offset().top},{duration:800,easing:"easeInOutCubic",step:function(){u=!0},progress:function(){u=!0}}))}function i(){null===r||u||($("body").stop(),clearTimeout(r),r=null),u||(r=setTimeout(o,1e3)),u=!1}if(!e()&&($("body").is(".blog")||$("body").is(".archive")||$("body").is(".search"))){"undefined"==typeof $.easing.easeInOutCubic&&$.extend($.easing,{easeInOutCubic:function(e,n,t,o,i){return(n/=i/2)<1?o/2*n*n*n+t:o/2*((n-=2)*n*n+2)+t}});var r=null,u=!1;$(window).scroll(function(e){e.preventDefault(),i()}),$(window).resize(function(e){e.preventDefault(),i()})}});