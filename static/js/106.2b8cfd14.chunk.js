(this["webpackJsonpapi-client"]=this["webpackJsonpapi-client"]||[]).push([[106],{243:function(e,t,r){!function(e){"use strict";e.defineMode("tiddlywiki",(function(){var e={},t={allTags:!0,closeAll:!0,list:!0,newJournal:!0,newTiddler:!0,permaview:!0,saveChanges:!0,search:!0,slider:!0,tabs:!0,tag:!0,tagging:!0,tags:!0,tiddler:!0,timeline:!0,today:!0,version:!0,option:!0,with:!0,filter:!0},r=/[\w_\-]/i,n=/^\-\-\-\-+$/,i=/^\/\*\*\*$/,a=/^\*\*\*\/$/,u=/^<<<$/,o=/^\/\/\{\{\{$/,c=/^\/\/\}\}\}$/,f=/^<!--\{\{\{-->$/,l=/^<!--\}\}\}-->$/,m=/^\{\{\{$/,k=/^\}\}\}$/,h=/.*?\}\}\}/;function s(e,t,r){return t.tokenize=r,r(e,t)}function d(t,k){var h=t.sol(),d=t.peek();if(k.block=!1,h&&/[<\/\*{}\-]/.test(d)){if(t.match(m))return k.block=!0,s(t,k,w);if(t.match(u))return"quote";if(t.match(i)||t.match(a))return"comment";if(t.match(o)||t.match(c)||t.match(f)||t.match(l))return"comment";if(t.match(n))return"hr"}if(t.next(),h&&/[\/\*!#;:>|]/.test(d)){if("!"==d)return t.skipToEnd(),"header";if("*"==d)return t.eatWhile("*"),"comment";if("#"==d)return t.eatWhile("#"),"comment";if(";"==d)return t.eatWhile(";"),"comment";if(":"==d)return t.eatWhile(":"),"comment";if(">"==d)return t.eatWhile(">"),"quote";if("|"==d)return"header"}if("{"==d&&t.match("{{"))return s(t,k,w);if(/[hf]/i.test(d)&&/[ti]/i.test(t.peek())&&t.match(/\b(ttps?|tp|ile):\/\/[\-A-Z0-9+&@#\/%?=~_|$!:,.;]*[A-Z0-9+&@#\/%=~_|$]/i))return"link";if('"'==d)return"string";if("~"==d)return"brace";if(/[\[\]]/.test(d)&&t.match(d))return"brace";if("@"==d)return t.eatWhile(r),"link";if(/\d/.test(d))return t.eatWhile(/\d/),"number";if("/"==d){if(t.eat("%"))return s(t,k,p);if(t.eat("/"))return s(t,k,$)}if("_"==d&&t.eat("_"))return s(t,k,v);if("-"==d&&t.eat("-")){if(" "!=t.peek())return s(t,k,x);if(" "==t.peek())return"brace"}return"'"==d&&t.eat("'")?s(t,k,b):"<"==d&&t.eat("<")?s(t,k,z):(t.eatWhile(/[\w\$_]/),e.propertyIsEnumerable(t.current())?"keyword":null)}function p(e,t){for(var r,n=!1;r=e.next();){if("/"==r&&n){t.tokenize=d;break}n="%"==r}return"comment"}function b(e,t){for(var r,n=!1;r=e.next();){if("'"==r&&n){t.tokenize=d;break}n="'"==r}return"strong"}function w(e,t){var r=t.block;return r&&e.current()?"comment":!r&&e.match(h)||r&&e.sol()&&e.match(k)?(t.tokenize=d,"comment"):(e.next(),"comment")}function $(e,t){for(var r,n=!1;r=e.next();){if("/"==r&&n){t.tokenize=d;break}n="/"==r}return"em"}function v(e,t){for(var r,n=!1;r=e.next();){if("_"==r&&n){t.tokenize=d;break}n="_"==r}return"underlined"}function x(e,t){for(var r,n=!1;r=e.next();){if("-"==r&&n){t.tokenize=d;break}n="-"==r}return"strikethrough"}function z(e,r){if("<<"==e.current())return"macro";var n=e.next();return n?">"==n&&">"==e.peek()?(e.next(),r.tokenize=d,"macro"):(e.eatWhile(/[\w\$_]/),t.propertyIsEnumerable(e.current())?"keyword":null):(r.tokenize=d,null)}return{startState:function(){return{tokenize:d}},token:function(e,t){return e.eatSpace()?null:t.tokenize(e,t)}}})),e.defineMIME("text/x-tiddlywiki","tiddlywiki")}(r(44))}}]);
//# sourceMappingURL=106.2b8cfd14.chunk.js.map