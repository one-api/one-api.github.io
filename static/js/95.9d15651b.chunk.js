(this["webpackJsonpapi-client"]=this["webpackJsonpapi-client"]||[]).push([[95],{239:function(e,n,t){!function(e){"use strict";e.defineMode("sieve",(function(e){function n(e){for(var n={},t=e.split(" "),i=0;i<t.length;++i)n[t[i]]=!0;return n}var t=n("if elsif else stop require"),i=n("true false not"),r=e.indentUnit;function u(e,n){var r=e.next();if("/"==r&&e.eat("*"))return n.tokenize=l,l(e,n);if("#"===r)return e.skipToEnd(),"comment";if('"'==r)return n.tokenize=a(r),n.tokenize(e,n);if("("==r)return n._indent.push("("),n._indent.push("{"),null;if("{"===r)return n._indent.push("{"),null;if(")"==r&&(n._indent.pop(),n._indent.pop()),"}"===r)return n._indent.pop(),null;if(","==r)return null;if(";"==r)return null;if(/[{}\(\),;]/.test(r))return null;if(/\d/.test(r))return e.eatWhile(/[\d]/),e.eat(/[KkMmGg]/),"number";if(":"==r)return e.eatWhile(/[a-zA-Z_]/),e.eatWhile(/[a-zA-Z0-9_]/),"operator";e.eatWhile(/\w/);var u=e.current();return"text"==u&&e.eat(":")?(n.tokenize=o,"string"):t.propertyIsEnumerable(u)?"keyword":i.propertyIsEnumerable(u)?"atom":null}function o(e,n){return n._multiLineString=!0,e.sol()?("."==e.next()&&e.eol()&&(n._multiLineString=!1,n.tokenize=u),"string"):(e.eatSpace(),"#"==e.peek()?(e.skipToEnd(),"comment"):(e.skipToEnd(),"string"))}function l(e,n){for(var t,i=!1;null!=(t=e.next());){if(i&&"/"==t){n.tokenize=u;break}i="*"==t}return"comment"}function a(e){return function(n,t){for(var i,r=!1;null!=(i=n.next())&&(i!=e||r);)r=!r&&"\\"==i;return r||(t.tokenize=u),"string"}}return{startState:function(e){return{tokenize:u,baseIndent:e||0,_indent:[]}},token:function(e,n){return e.eatSpace()?null:(n.tokenize||u)(e,n)},indent:function(e,n){var t=e._indent.length;return n&&"}"==n[0]&&t--,t<0&&(t=0),t*r},electricChars:"}"}})),e.defineMIME("application/sieve","sieve")}(t(44))}}]);
//# sourceMappingURL=95.9d15651b.chunk.js.map