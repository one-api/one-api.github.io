(this["webpackJsonpapi-client"]=this["webpackJsonpapi-client"]||[]).push([[94],{251:function(t,e,n){!function(t){"use strict";t.defineMode("shell",(function(){var e={};function n(t,n){for(var r=0;r<n.length;r++)e[n[r]]=t}var r=["true","false"],i=["if","then","do","else","elif","while","until","for","in","esac","fi","fin","fil","done","exit","set","unset","export","function"],s=["ab","awk","bash","beep","cat","cc","cd","chown","chmod","chroot","clear","cp","curl","cut","diff","echo","find","gawk","gcc","get","git","grep","hg","kill","killall","ln","ls","make","mkdir","openssl","mv","nc","nl","node","npm","ping","ps","restart","rm","rmdir","sed","service","sh","shopt","shred","source","sort","sleep","ssh","start","stop","su","sudo","svn","tee","telnet","top","touch","vi","vim","wall","wc","wget","who","write","yes","zsh"];function o(t,n){if(t.eatSpace())return null;var r=t.sol(),i=t.next();if("\\"===i)return t.next(),null;if("'"===i||'"'===i||"`"===i)return n.tokens.unshift(u(i,"`"===i?"quote":"string")),c(t,n);if("#"===i)return r&&t.eat("!")?(t.skipToEnd(),"meta"):(t.skipToEnd(),"comment");if("$"===i)return n.tokens.unshift(a),c(t,n);if("+"===i||"="===i)return"operator";if("-"===i)return t.eat("-"),t.eatWhile(/\w/),"attribute";if("<"==i){if(t.match("<<"))return"operator";var s=t.match(/^<-?\s*['"]?([^'"]*)['"]?/);if(s)return n.tokens.unshift(l(s[1])),"string-2"}if(/\d/.test(i)&&(t.eatWhile(/\d/),t.eol()||!/\w/.test(t.peek())))return"number";t.eatWhile(/[\w-]/);var o=t.current();return"="===t.peek()&&/\w+/.test(o)?"def":e.hasOwnProperty(o)?e[o]:null}function u(t,e){var n="("==t?")":"{"==t?"}":t;return function(r,i){for(var s,o=!1;null!=(s=r.next());){if(s===n&&!o){i.tokens.shift();break}if("$"===s&&!o&&"'"!==t&&r.peek()!=n){o=!0,r.backUp(1),i.tokens.unshift(a);break}if(!o&&t!==n&&s===t)return i.tokens.unshift(u(t,e)),c(r,i);if(!o&&/['"]/.test(s)&&!/['"]/.test(t)){i.tokens.unshift(f(s,"string")),r.backUp(1);break}o=!o&&"\\"===s}return e}}function f(t,e){return function(n,r){return r.tokens[0]=u(t,e),n.next(),c(n,r)}}t.registerHelper("hintWords","shell",r.concat(i,s)),n("atom",r),n("keyword",i),n("builtin",s);var a=function(t,e){e.tokens.length>1&&t.eat("$");var n=t.next();return/['"({]/.test(n)?(e.tokens[0]=u(n,"("==n?"quote":"{"==n?"def":"string"),c(t,e)):(/\d/.test(n)||t.eatWhile(/\w/),e.tokens.shift(),"def")};function l(t){return function(e,n){return e.sol()&&e.string==t&&n.tokens.shift(),e.skipToEnd(),"string-2"}}function c(t,e){return(e.tokens[0]||o)(t,e)}return{startState:function(){return{tokens:[]}},token:function(t,e){return c(t,e)},closeBrackets:"()[]{}''\"\"``",lineComment:"#",fold:"brace"}})),t.defineMIME("text/x-sh","shell"),t.defineMIME("application/x-sh","shell")}(n(44))}}]);
//# sourceMappingURL=94.53dc2c9f.chunk.js.map