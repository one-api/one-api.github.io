(this["webpackJsonpapi-client"]=this["webpackJsonpapi-client"]||[]).push([[107],{264:function(e,t,n){!function(e){"use strict";e.defineMode("tiki",(function(e){function t(e,t,n){return function(i,a){for(;!i.eol();){if(i.match(t)){a.tokenize=r;break}i.next()}return n&&(a.tokenize=n),e}}function n(e){return function(t,n){for(;!t.eol();)t.next();return n.tokenize=r,e}}function r(e,i){function a(t){return i.tokenize=t,t(e,i)}var u=e.sol(),o=e.next();switch(o){case"{":return e.eat("/"),e.eatSpace(),e.eatWhile(/[^\s\u00a0=\"\'\/?(}]/),i.tokenize=f,"tag";case"_":if(e.eat("_"))return a(t("strong","__",r));break;case"'":if(e.eat("'"))return a(t("em","''",r));break;case"(":if(e.eat("("))return a(t("variable-2","))",r));break;case"[":return a(t("variable-3","]",r));case"|":if(e.eat("|"))return a(t("comment","||"));break;case"-":if(e.eat("="))return a(t("header string","=-",r));if(e.eat("-"))return a(t("error tw-deleted","--",r));break;case"=":if(e.match("=="))return a(t("tw-underline","===",r));break;case":":if(e.eat(":"))return a(t("comment","::"));break;case"^":return a(t("tw-box","^"));case"~":if(e.match("np~"))return a(t("meta","~/np~"))}if(u)switch(o){case"!":return e.match("!!!!!")||e.match("!!!!")||e.match("!!!")||e.match("!!"),a(n("header string"));case"*":case"#":case"+":return a(n("tw-listitem bracket"))}return null}var i,a,u,o,c=e.indentUnit;function f(e,t){var n=e.next(),i=e.peek();return"}"==n?(t.tokenize=r,"tag"):"("==n||")"==n?"bracket":"="==n?(a="equals",">"==i&&(e.next(),i=e.peek()),/[\'\"]/.test(i)||(t.tokenize=l()),"operator"):/[\'\"]/.test(n)?(t.tokenize=s(n),t.tokenize(e,t)):(e.eatWhile(/[^\s\u00a0=\"\'\/?]/),"keyword")}function s(e){return function(t,n){for(;!t.eol();)if(t.next()==e){n.tokenize=f;break}return"string"}}function l(){return function(e,t){for(;!e.eol();){var n=e.next(),r=e.peek();if(" "==n||","==n||/[ )}]/.test(r)){t.tokenize=f;break}}return"string"}}function k(){for(var e=arguments.length-1;e>=0;e--)u.cc.push(arguments[e])}function d(){return k.apply(null,arguments),!0}function p(e,t){var n=u.context&&u.context.noIndent;u.context={prev:u.context,pluginName:e,indent:u.indented,startOfLine:t,noIndent:n}}function g(){u.context&&(u.context=u.context.prev)}function m(e){if("openPlugin"==e)return u.pluginName=i,d(b,x(u.startOfLine));if("closePlugin"==e){var t=!1;return u.context?(t=u.context.pluginName!=i,g()):t=!0,t&&(o="error"),d(h(t))}return"string"==e?(u.context&&"!cdata"==u.context.name||p("!cdata"),u.tokenize==r&&g(),d()):d()}function x(e){return function(t){return"selfclosePlugin"==t||"endPlugin"==t?d():"endPlugin"==t?(p(u.pluginName,e),d()):d()}}function h(e){return function(t){return e&&(o="error"),"endPlugin"==t?d():k()}}function b(e){return"keyword"==e?(o="attribute",d(b)):"equals"==e?d(v,b):k()}function v(e){return"keyword"==e?(o="string",d()):"string"==e?d(z):k()}function z(e){return"string"==e?d(z):k()}return{startState:function(){return{tokenize:r,cc:[],indented:0,startOfLine:!0,pluginName:null,context:null}},token:function(e,t){if(e.sol()&&(t.startOfLine=!0,t.indented=e.indentation()),e.eatSpace())return null;o=a=i=null;var n=t.tokenize(e,t);if((n||a)&&"comment"!=n)for(u=t;!(t.cc.pop()||m)(a||n););return t.startOfLine=!1,o||n},indent:function(e,t){var n=e.context;if(n&&n.noIndent)return 0;for(n&&/^{\//.test(t)&&(n=n.prev);n&&!n.startOfLine;)n=n.prev;return n?n.indent+c:0},electricChars:"/"}})),e.defineMIME("text/tiki","tiki")}(n(44))}}]);
//# sourceMappingURL=107.57c3a9f5.chunk.js.map