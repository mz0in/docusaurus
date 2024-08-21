"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[40151],{16652:(e,t,n)=>{n.d(t,{Z:()=>f});var r=n(24246),l=(n(27378),n(40624)),o=n(14929),i=n(4646),c=n(36712);const s={tocCollapsibleButton:"tocCollapsibleButton_IbtT",tocCollapsibleButtonExpanded:"tocCollapsibleButtonExpanded_Nor3"};function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function d(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function u(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}function b(e){var{collapsed:t}=e,n=u(e,["collapsed"]);return(0,r.jsx)("button",d(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){a(e,t,n[t])}))}return e}({type:"button"},n),{className:(0,l.Z)("clean-btn",s.tocCollapsibleButton,!t&&s.tocCollapsibleButtonExpanded,n.className),children:(0,r.jsx)(c.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component",children:"On this page"})}))}const v={tocCollapsible:"tocCollapsible_BEWm",tocCollapsibleContent:"tocCollapsibleContent_FG8F",tocCollapsibleExpanded:"tocCollapsibleExpanded_FzA_"};function f({toc:e,className:t,minHeadingLevel:n,maxHeadingLevel:c}){const{collapsed:s,toggleCollapsed:a}=(0,o.u)({initialState:!0});return(0,r.jsxs)("div",{className:(0,l.Z)(v.tocCollapsible,!s&&v.tocCollapsibleExpanded,t),children:[(0,r.jsx)(b,{collapsed:s,onClick:a}),(0,r.jsx)(o.z,{lazy:!0,className:v.tocCollapsibleContent,collapsed:s,children:(0,r.jsx)(i.Z,{toc:e,minHeadingLevel:n,maxHeadingLevel:c})})]})}},41124:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(24246),l=(n(27378),n(4646));const o={tableOfContentsInline:"tableOfContentsInline_2sru"};function i({toc:e,minHeadingLevel:t,maxHeadingLevel:n}){return(0,r.jsx)("div",{className:o.tableOfContentsInline,children:(0,r.jsx)(l.Z,{toc:e,minHeadingLevel:t,maxHeadingLevel:n,className:"table-of-contents",linkClassName:null})})}},4646:(e,t,n)=>{n.d(t,{Z:()=>j});var r=n(24246),l=n(27378),o=n(73919);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){i(e,t,n[t])}))}return e}function s(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function a(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}function d(e){const t=e.map((e=>s(c({},e),{parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const r=n.slice(2,e.level);e.parentIndex=Math.max(...r),n[e.level]=t}));const r=[];return t.forEach((e=>{const{parentIndex:n}=e,l=a(e,["parentIndex"]);n>=0?t[n].children.push(l):r.push(l)})),r}function u({toc:e,minHeadingLevel:t,maxHeadingLevel:n}){return e.flatMap((e=>{const r=u({toc:e.children,minHeadingLevel:t,maxHeadingLevel:n});return function(e){return e.level>=t&&e.level<=n}(e)?[s(c({},e),{children:r})]:r}))}function b(e){const t=e.getBoundingClientRect();return t.top===t.bottom?b(e.parentNode):t}function v(e,{anchorTopOffset:t}){const n=e.find((e=>b(e).top>=t));if(n){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(b(n))?n:null!==(r=e[e.indexOf(n)-1])&&void 0!==r?r:null;var r}var l;return null!==(l=e[e.length-1])&&void 0!==l?l:null}function f(){const e=(0,l.useRef)(0),{navbar:{hideOnScroll:t}}=(0,o.L)();return(0,l.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function p(e){const t=(0,l.useRef)(void 0),n=f();(0,l.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:r,linkActiveClassName:l,minHeadingLevel:o,maxHeadingLevel:i}=e;function c(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(r),c=function({minHeadingLevel:e,maxHeadingLevel:t}){const n=[];for(let r=e;r<=t;r+=1)n.push(`h${r}.anchor`);return Array.from(document.querySelectorAll(n.join()))}({minHeadingLevel:o,maxHeadingLevel:i}),s=v(c,{anchorTopOffset:n.current}),a=e.find((e=>s&&s.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(l),e.classList.add(l),t.current=e):e.classList.remove(l)}(e,e===a)}))}return document.addEventListener("scroll",c),document.addEventListener("resize",c),c(),()=>{document.removeEventListener("scroll",c),document.removeEventListener("resize",c)}}),[e,n])}var m=n(41428);function h({toc:e,className:t,linkClassName:n,isChild:l}){return e.length?(0,r.jsx)("ul",{className:l?void 0:t,children:e.map((e=>(0,r.jsxs)("li",{children:[(0,r.jsx)(m.Z,{to:`#${e.id}`,className:null!=n?n:void 0,dangerouslySetInnerHTML:{__html:e.value}}),(0,r.jsx)(h,{isChild:!0,toc:e.children,className:t,linkClassName:n})]},e.id)))}):null}const g=l.memo(h);function O(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function y(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}function j(e){var{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:i="table-of-contents__link",linkActiveClassName:c,minHeadingLevel:s,maxHeadingLevel:a}=e,b=y(e,["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"]);const v=(0,o.L)(),f=null!=s?s:v.tableOfContents.minHeadingLevel,m=null!=a?a:v.tableOfContents.maxHeadingLevel,h=function({toc:e,minHeadingLevel:t,maxHeadingLevel:n}){return(0,l.useMemo)((()=>u({toc:d(e),minHeadingLevel:t,maxHeadingLevel:n})),[e,t,n])}({toc:t,minHeadingLevel:f,maxHeadingLevel:m});return p((0,l.useMemo)((()=>{if(i&&c)return{linkClassName:i,linkActiveClassName:c,minHeadingLevel:f,maxHeadingLevel:m}}),[i,c,f,m])),(0,r.jsx)(g,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){O(e,t,n[t])}))}return e}({toc:h,className:n,linkClassName:i},b))}},6698:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(24246),l=(n(27378),n(40624));const o={browserWindow:"browserWindow_my1Q",browserWindowHeader:"browserWindowHeader_jXSR",row:"row_KZDM",buttons:"buttons_uHc7",right:"right_oyze",browserWindowAddressBar:"browserWindowAddressBar_Pd8y",dot:"dot_giz1",browserWindowMenuIcon:"browserWindowMenuIcon_Vhuh",bar:"bar_rrRL",browserWindowBody:"browserWindowBody_Idgs"};function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){i(e,t,n[t])}))}return e}function s(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function a({children:e,minHeight:t,url:n="http://localhost:3000",style:i,bodyStyle:a}){return(0,r.jsxs)("div",{className:o.browserWindow,style:s(c({},i),{minHeight:t}),children:[(0,r.jsxs)("div",{className:o.browserWindowHeader,children:[(0,r.jsxs)("div",{className:o.buttons,children:[(0,r.jsx)("span",{className:o.dot,style:{background:"#f25f58"}}),(0,r.jsx)("span",{className:o.dot,style:{background:"#fbbe3c"}}),(0,r.jsx)("span",{className:o.dot,style:{background:"#58cb42"}})]}),(0,r.jsx)("div",{className:(0,l.Z)(o.browserWindowAddressBar,"text--truncate"),children:n}),(0,r.jsx)("div",{className:o.browserWindowMenuIcon,children:(0,r.jsxs)("div",{children:[(0,r.jsx)("span",{className:o.bar}),(0,r.jsx)("span",{className:o.bar}),(0,r.jsx)("span",{className:o.bar})]})})]}),(0,r.jsx)("div",{className:o.browserWindowBody,style:a,children:e})]})}},1439:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>f,frontMatter:()=>s,metadata:()=>d,toc:()=>b});var r=n(24246),l=n(71670),o=n(6698),i=n(41124),c=n(16652);const s={toc_min_heading_level:2,toc_max_heading_level:6},a=void 0,d={id:"toc/toc-test-good",title:"toc-test-good",description:"Test the TOC behavior of a real-world MD doc with valid headings",source:"@site/_dogfooding/_docs tests/toc/toc-test-good.mdx",sourceDirName:"toc",slug:"/toc/toc-test-good",permalink:"/tests/docs/toc/toc-test-good",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1724147296e3,frontMatter:{toc_min_heading_level:2,toc_max_heading_level:6},sidebar:"sidebar",previous:{title:"toc-test-bad",permalink:"/tests/docs/toc/toc-test-bad"}},u={},b=[{value:"lvl 2",id:"lvl-2",level:2},{value:"lvl 3",id:"lvl-3",level:3},{value:"lvl 4",id:"lvl-4",level:4},{value:"lvl 5",id:"lvl-5",level:5},{value:"lvl 6",id:"lvl-6",level:6},{value:"lvl 2",id:"lvl-2-1",level:2},{value:"lvl 3",id:"lvl-3-1",level:3},{value:"lvl 4",id:"lvl-4-1",level:4},{value:"lvl 5",id:"lvl-5-1",level:5},{value:"lvl 6",id:"lvl-6-1",level:6}];function v(e){const t={h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",hr:"hr",p:"p",...(0,l.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"Test the TOC behavior of a real-world MD doc with valid headings"}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"lvl-2",children:"lvl 2"}),"\n",(0,r.jsx)(t.h3,{id:"lvl-3",children:"lvl 3"}),"\n",(0,r.jsx)(t.h4,{id:"lvl-4",children:"lvl 4"}),"\n",(0,r.jsx)(t.h5,{id:"lvl-5",children:"lvl 5"}),"\n",(0,r.jsx)(t.h6,{id:"lvl-6",children:"lvl 6"}),"\n",(0,r.jsx)(t.h2,{id:"lvl-2-1",children:"lvl 2"}),"\n",(0,r.jsx)(t.h3,{id:"lvl-3-1",children:"lvl 3"}),"\n",(0,r.jsx)(t.h4,{id:"lvl-4-1",children:"lvl 4"}),"\n",(0,r.jsx)(t.h5,{id:"lvl-5-1",children:"lvl 5"}),"\n",(0,r.jsx)(t.h6,{id:"lvl-6-1",children:"lvl 6"}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.p,{children:"INLINE:"}),"\n","\n","\n",(0,r.jsx)(o.Z,{children:(0,r.jsx)(i.Z,{toc:b,minHeadingLevel:2,maxHeadingLevel:6})}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.p,{children:"COLLAPSIBLE:"}),"\n","\n",(0,r.jsx)(o.Z,{children:(0,r.jsx)(c.Z,{toc:b,minHeadingLevel:2,maxHeadingLevel:6})})]})}function f(e={}){const{wrapper:t}={...(0,l.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(v,{...e})}):v(e)}f.displayName="MDXContent(_dogfooding/_docs tests/toc/toc-test-good.mdx)"},71670:(e,t,n)=>{n.d(t,{Z:()=>c,a:()=>i});var r=n(27378);const l={},o=r.createContext(l);function i(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:i(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);