(this["webpackJsonpapi-client"]=this["webpackJsonpapi-client"]||[]).push([[44],{171:function(e,i,n){!function(e){"use strict";e.defineMode("diff",(function(){var e={"+":"positive","-":"negative","@":"meta"};return{token:function(i){var n=i.string.search(/[\t ]+?$/);if(!i.sol()||0===n)return i.skipToEnd(),("error "+(e[i.string.charAt(0)]||"")).replace(/ $/,"");var t=e[i.peek()]||i.skipToEnd();return-1===n?i.skipToEnd():i.pos=n,t}}})),e.defineMIME("text/x-diff","diff")}(n(41))}}]);
//# sourceMappingURL=44.736da0ce.chunk.js.map