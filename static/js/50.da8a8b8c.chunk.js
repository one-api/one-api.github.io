(this["webpackJsonpapi-client"]=this["webpackJsonpapi-client"]||[]).push([[50],{88:function(e,t,n){!function(e){"use strict";e.defineMode("elm",(function(){function e(e,t,n){return t(n),n(e,t)}var t=/[a-z]/,n=/[A-Z]/,r=/[a-zA-Z0-9_]/,i=/[0-9]/,o=/[0-9A-Fa-f]/,u=/[-&*+.\\/<>=?^|:]/,a=/[(),[\]{}]/,f=/[ \v\f]/;function s(){return function(s,x){if(s.eatWhile(f))return null;var k=s.next();if(a.test(k))return"{"===k&&s.eat("-")?e(s,x,l(1)):"["===k&&s.match("glsl|")?e(s,x,m):"builtin";if("'"===k)return e(s,x,h);if('"'===k)return s.eat('"')?s.eat('"')?e(s,x,c):"string":e(s,x,p);if(n.test(k))return s.eatWhile(r),"variable-2";if(t.test(k)){var d=1===s.pos;return s.eatWhile(r),d?"def":"variable"}if(i.test(k)){if("0"===k){if(s.eat(/[xX]/))return s.eatWhile(o),"number"}else s.eatWhile(i);return s.eat(".")&&s.eatWhile(i),s.eat(/[eE]/)&&(s.eat(/[-+]/),s.eatWhile(i)),"number"}return u.test(k)?"-"===k&&s.eat("-")?(s.skipToEnd(),"comment"):(s.eatWhile(u),"keyword"):"_"===k?"keyword":"error"}}function l(e){return 0==e?s():function(t,n){for(;!t.eol();){var r=t.next();if("{"==r&&t.eat("-"))++e;else if("-"==r&&t.eat("}")&&0===--e)return n(s()),"comment"}return n(l(e)),"comment"}}function c(e,t){for(;!e.eol();)if('"'===e.next()&&e.eat('"')&&e.eat('"'))return t(s()),"string";return"string"}function p(e,t){for(;e.skipTo('\\"');)e.next(),e.next();return e.skipTo('"')?(e.next(),t(s()),"string"):(e.skipToEnd(),t(s()),"error")}function h(e,t){for(;e.skipTo("\\'");)e.next(),e.next();return e.skipTo("'")?(e.next(),t(s()),"string"):(e.skipToEnd(),t(s()),"error")}function m(e,t){for(;!e.eol();)if("|"===e.next()&&e.eat("]"))return t(s()),"string";return"string"}var x={case:1,of:1,as:1,if:1,then:1,else:1,let:1,in:1,type:1,alias:1,module:1,where:1,import:1,exposing:1,port:1};return{startState:function(){return{f:s()}},copyState:function(e){return{f:e.f}},token:function(e,t){var n=t.f(e,(function(e){t.f=e})),r=e.current();return x.hasOwnProperty(r)?"keyword":n}}})),e.defineMIME("text/x-elm","elm")}(n(11))}}]);
//# sourceMappingURL=50.da8a8b8c.chunk.js.map