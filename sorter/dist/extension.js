(()=>{"use strict";var e={496:e=>{e.exports=require("vscode")}},t={};function o(n){var r=t[n];if(void 0!==r)return r.exports;var i=t[n]={exports:{}};return e[n](i,i.exports,o),i.exports}var n={};(()=>{var e=n;Object.defineProperty(e,"__esModule",{value:!0}),e.deactivate=e.activate=void 0;const t=o(496);function r(e){const o=t.window.activeTextEditor;if(!o)return void console.log("No active editor found.");const n=o.selection,r=n.start,i=n.end,s=new t.Selection(r.line,0,i.line+1,0),c=o.document.getText(s).split(/\r?\n/);c.sort(((t,o)=>e?t.localeCompare(o):o.localeCompare(t))),o.edit((e=>{e.replace(s,c.join("\n"))})),o.selection=s}function i(e,o,n){const r=t.commands.registerCommand(o,n);e.subscriptions.push(r)}e.activate=function(e){i(e,"sorter.sortAscending",(()=>r(!0))),i(e,"sorter.sortDescending",(()=>r(!1)))},e.deactivate=function(){}})(),module.exports=n})();