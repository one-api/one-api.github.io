(this["webpackJsonpapi-client"]=this["webpackJsonpapi-client"]||[]).push([[112],{270:function(t,n,e){!function(t){"use strict";t.defineMode("turtle",(function(t){var n,e=t.indentUnit;function o(t){return new RegExp("^(?:"+t.join("|")+")$","i")}o([]);var i=o(["@prefix","@base","a"]),r=/[*+\-<>=&|]/;function c(t,e){var o=t.next();if(n=null,"<"!=o||t.match(/^[\s\u00a0=]/,!1)){if('"'==o||"'"==o)return e.tokenize=a(o),e.tokenize(t,e);if(/[{}\(\),\.;\[\]]/.test(o))return n=o,null;if("#"==o)return t.skipToEnd(),"comment";if(r.test(o))return t.eatWhile(r),null;if(":"==o)return"operator";if(t.eatWhile(/[_\w\d]/),":"==t.peek())return"variable-3";var c=t.current();return i.test(c)?"meta":o>="A"&&o<="Z"?"comment":"keyword"}return t.match(/^[^\s\u00a0>]*>?/),"atom"}function a(t){return function(n,e){for(var o,i=!1;null!=(o=n.next());){if(o==t&&!i){e.tokenize=c;break}i=!i&&"\\"==o}return"string"}}function u(t,n,e){t.context={prev:t.context,indent:t.indent,col:e,type:n}}function l(t){t.indent=t.context.indent,t.context=t.context.prev}return{startState:function(){return{tokenize:c,context:null,indent:0,col:0}},token:function(t,e){if(t.sol()&&(e.context&&null==e.context.align&&(e.context.align=!1),e.indent=t.indentation()),t.eatSpace())return null;var o=e.tokenize(t,e);if("comment"!=o&&e.context&&null==e.context.align&&"pattern"!=e.context.type&&(e.context.align=!0),"("==n)u(e,")",t.column());else if("["==n)u(e,"]",t.column());else if("{"==n)u(e,"}",t.column());else if(/[\]\}\)]/.test(n)){for(;e.context&&"pattern"==e.context.type;)l(e);e.context&&n==e.context.type&&l(e)}else"."==n&&e.context&&"pattern"==e.context.type?l(e):/atom|string|variable/.test(o)&&e.context&&(/[\}\]]/.test(e.context.type)?u(e,"pattern",t.column()):"pattern"!=e.context.type||e.context.align||(e.context.align=!0,e.context.col=t.column()));return o},indent:function(t,n){var o=n&&n.charAt(0),i=t.context;if(/[\]\}]/.test(o))for(;i&&"pattern"==i.type;)i=i.prev;var r=i&&o==i.type;return i?"pattern"==i.type?i.col:i.align?i.col+(r?0:1):i.indent+(r?0:e):0},lineComment:"#"}})),t.defineMIME("text/turtle","turtle")}(e(44))}}]);
//# sourceMappingURL=112.a3cf7562.chunk.js.map