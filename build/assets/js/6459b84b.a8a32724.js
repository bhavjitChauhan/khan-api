"use strict";(self.webpackChunkkhan_api_docs=self.webpackChunkkhan_api_docs||[]).push([[7868],{6652:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>T,contentTitle:()=>C,default:()=>_,frontMatter:()=>V,metadata:()=>S,toc:()=>E});var r=n(5893),a=n(1151),l=n(7294),s=n(512),i=n(2466),o=n(6550),u=n(469),c=n(1980),d=n(7392),h=n(12);function p(e){return l.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,l.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function m(e){const{values:t,children:n}=e;return(0,l.useMemo)((()=>{const e=t??function(e){return p(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}(n);return function(e){const t=(0,d.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function b(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const r=(0,o.k6)(),a=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,c._X)(a),(0,l.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(r.location.search);t.set(a,e),r.replace({...r.location,search:t.toString()})}),[a,r])]}function g(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,a=m(e),[s,i]=(0,l.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!b({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:a}))),[o,c]=f({queryString:n,groupId:r}),[d,p]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,a]=(0,h.Nk)(n);return[r,(0,l.useCallback)((e=>{n&&a.set(e)}),[n,a])]}({groupId:r}),g=(()=>{const e=o??d;return b({value:e,tabValues:a})?e:null})();(0,u.Z)((()=>{g&&i(g)}),[g]);return{selectedValue:s,selectValue:(0,l.useCallback)((e=>{if(!b({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);i(e),c(e),p(e)}),[c,p,a]),tabValues:a}}var v=n(2389);const j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function x(e){let{className:t,block:n,selectedValue:a,selectValue:l,tabValues:o}=e;const u=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.o5)(),d=e=>{const t=e.currentTarget,n=u.indexOf(t),r=o[n].value;r!==a&&(c(t),l(r))},h=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=u.indexOf(e.currentTarget)+1;t=u[n]??u[0];break}case"ArrowLeft":{const n=u.indexOf(e.currentTarget)-1;t=u[n]??u[u.length-1];break}}t?.focus()};return(0,r.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":n},t),children:o.map((e=>{let{value:t,label:n,attributes:l}=e;return(0,r.jsx)("li",{role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:e=>u.push(e),onKeyDown:h,onClick:d,...l,className:(0,s.Z)("tabs__item",j.tabItem,l?.className,{"tabs__item--active":a===t}),children:n??t},t)}))})}function w(e){let{lazy:t,children:n,selectedValue:a}=e;const s=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===a));return e?(0,l.cloneElement)(e,{className:"margin-top--md"}):null}return(0,r.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function y(e){const t=g(e);return(0,r.jsxs)("div",{className:(0,s.Z)("tabs-container",j.tabList),children:[(0,r.jsx)(x,{...e,...t}),(0,r.jsx)(w,{...e,...t})]})}function k(e){const t=(0,v.Z)();return(0,r.jsx)(y,{...e,children:p(e.children)},String(t))}const I={tabItem:"tabItem_Ymn6"};function N(e){let{children:t,hidden:n,className:a}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,s.Z)(I.tabItem,a),hidden:n,children:t})}const V={},C="Installation",S={id:"getting-started/installation",title:"Installation",description:"Node.js",source:"@site/docs/getting-started/installation.mdx",sourceDirName:"getting-started",slug:"/getting-started/installation",permalink:"/docs/getting-started/installation",draft:!1,unlisted:!1,editUrl:"https://github.com/bhavjitChauhan/khan-api/tree/docs/docs/getting-started/installation.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Getting Started",permalink:"/docs/getting-started"},next:{title:"Safelist",permalink:"/docs/safelist"}},T={},E=[{value:"Node.js",id:"nodejs",level:2},{value:"Browser",id:"browser",level:2}];function q(e){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"installation",children:"Installation"}),"\n",(0,r.jsx)(t.h2,{id:"nodejs",children:"Node.js"}),"\n",(0,r.jsxs)(k,{children:[(0,r.jsx)(N,{value:"npm",label:"npm",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"npm i @bhavjit/khan-api\n"})})}),(0,r.jsx)(N,{value:"yarn",label:"Yarn",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"yarn add @bhavjit/khan-api\n"})})})]}),"\n",(0,r.jsx)(t.h2,{id:"browser",children:"Browser"}),"\n",(0,r.jsx)(t.p,{children:"Remember that Khan Academy's CORS policy will block requests not originating from their website."}),"\n",(0,r.jsxs)(k,{children:[(0,r.jsx)(N,{value:"esm",label:"Module",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-html",children:"<script type=\"module\">\r\n  import { Client } from 'https://esm.run/@bhavjit/khan-api'\r\n\r\n  const client = new Client()\r\n<\/script>\n"})})}),(0,r.jsx)(N,{value:"script",label:"Script",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-html",children:'<script src="https://cdn.jsdelivr.net/npm/@bhavjit/khan-api"><\/script>\r\n<script>\r\n  const client = new KhanAPI.Client()\r\n<\/script>\n'})})})]})]})}function _(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(q,{...e})}):q(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>i,a:()=>s});var r=n(7294);const a={},l=r.createContext(a);function s(e){const t=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),r.createElement(l.Provider,{value:t},e.children)}}}]);