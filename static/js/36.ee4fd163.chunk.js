(this["webpackJsonpapi-client"]=this["webpackJsonpapi-client"]||[]).push([[36],{164:function(n,e,t){!function(n){"use strict";n.defineMode("cmake",(function(){var n=/({)?[a-zA-Z0-9_]+(})?/;function e(n,e){for(var t,i,a=!1;!n.eol()&&(t=n.next())!=e.pending;){if("$"===t&&"\\"!=i&&'"'==e.pending){a=!0;break}i=t}return a&&n.backUp(1),t==e.pending?e.continueString=!1:e.continueString=!0,"string"}function t(t,i){var a=t.next();return"$"===a?t.match(n)?"variable-2":"variable":i.continueString?(t.backUp(1),e(t,i)):t.match(/(\s+)?\w+\(/)||t.match(/(\s+)?\w+\ \(/)?(t.backUp(1),"def"):"#"==a?(t.skipToEnd(),"comment"):"'"==a||'"'==a?(i.pending=a,e(t,i)):"("==a||")"==a?"bracket":a.match(/[0-9]/)?"number":(t.eatWhile(/[\w-]/),null)}return{startState:function(){var n={inDefinition:!1,inInclude:!1,continueString:!1,pending:!1};return n},token:function(n,e){return n.eatSpace()?null:t(n,e)}}})),n.defineMIME("text/x-cmake","cmake")}(t(42))}}]);
//# sourceMappingURL=36.ee4fd163.chunk.js.map