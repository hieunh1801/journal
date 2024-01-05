"use strict";(self.webpackChunkhieunh_1801_github_io=self.webpackChunkhieunh_1801_github_io||[]).push([[7409],{2398:(n,t,e)=>{e.r(t),e.d(t,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var i=e(5893),o=e(1151);const l={},r=void 0,c={id:"reactjs/terminology/dom - virtual dom",title:"dom - virtual dom",description:"DOM l\xe0 g\xec",source:"@site/docs/reactjs/terminology/000.dom - virtual dom.md",sourceDirName:"reactjs/terminology",slug:"/reactjs/terminology/dom - virtual dom",permalink:"/docs/reactjs/terminology/dom - virtual dom",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/reactjs/terminology/000.dom - virtual dom.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"ref",permalink:"/docs/reactjs/ref"},next:{title:"using-chat-gpt.en",permalink:"/docs/spmed/features/using-chat-gpt.en"}},a={},d=[{value:"DOM l\xe0 g\xec",id:"dom-l\xe0-g\xec",level:2},{value:"VirtualDOM l\xe0 g\xec",id:"virtualdom-l\xe0-g\xec",level:2},{value:"T\u1ea1i sao l\u1ea1i c\u1ea7n dom \u1ea3o l\xe0m g\xec",id:"t\u1ea1i-sao-l\u1ea1i-c\u1ea7n-dom-\u1ea3o-l\xe0m-g\xec",level:2},{value:"T\u1ea1i sao virtual dom nhanh h\u01a1n",id:"t\u1ea1i-sao-virtual-dom-nhanh-h\u01a1n",level:2}];function s(n){const t={code:"code",h2:"h2",li:"li",pre:"pre",ul:"ul",...(0,o.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"dom-l\xe0-g\xec",children:"DOM l\xe0 g\xec"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"DOM: document object model."}),"\n",(0,i.jsx)(t.li,{children:"DOM: l\xe0 m\u1ed9t c\u1ea5u tr\xfac c\xe2y gi\xfap bi\u1ec3u di\u1ec5n to\xe0n b\u1ed9 n\u1ed9i dung c\u1ee7a trang web. m\u1ed7i ph\u1ea7n t\u1eed HTML l\xe0 m\u1ed9t node c\u1ee7a DOM."}),"\n"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-html",metastring:'title="index.html"',children:'<!DOCTYPE html>\n<html>\n  <body>\n    <div id="root">Hello This is dom</div>\n  </body>\n</html>\n'})}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"C\xe1ch truy c\u1eadp dom"}),"\n"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-js",children:'const root = document.getElementById("root"); // tr\u1ea3 v\u1ec1 th\u1ebb div v\u1edbi id=root\n// v\xe0 c\xe1c node con c\u1ee7a n\xf3\nroot.innerHTML = "Hello This is virtual dom"; // thay \u0111\u1ed5i html trong dom\n'})}),"\n",(0,i.jsx)(t.h2,{id:"virtualdom-l\xe0-g\xec",children:"VirtualDOM l\xe0 g\xec"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"VirtualDOM: l\xe0 m\u1ed9t b\u1ea3n sao \u1ea3o c\u1ee7a DOM. \u0111\u01b0\u1ee3c l\u01b0u trong b\u1ed9 nh\u1edb"}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"t\u1ea1i-sao-l\u1ea1i-c\u1ea7n-dom-\u1ea3o-l\xe0m-g\xec",children:"T\u1ea1i sao l\u1ea1i c\u1ea7n dom \u1ea3o l\xe0m g\xec"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Khi \u1ee9ng d\u1ee5ng thay \u0111\u1ed5i, reactjs s\u1ebd t\u1ea1o ra m\u1ed9t virtual dom m\u1edbi"}),"\n",(0,i.jsx)(t.li,{children:"So s\xe1nh 2 VirtualDOM v\u1edbi nhau \u0111\u1ec3 t\xecm ra s\u1ef1 kh\xe1c bi\u1ec7t gi\u1eefa 2 DOM."}),"\n",(0,i.jsx)(t.li,{children:"X\xe1c \u0111\u1ecbnh c\xe1c th\xe0nh ph\u1ea7n c\u1ee7a c\xe2y c\u1ea7n c\u1eadp nh\u1eadt tr\xean dom th\u1ef1c v\xe0 ch\u1ec9 c\u1eadp nh\u1eadt nh\u1eefng ph\u1ea7n thay \u0111\u1ed5i."}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"t\u1ea1i-sao-virtual-dom-nhanh-h\u01a1n",children:"T\u1ea1i sao virtual dom nhanh h\u01a1n"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"X\xe9t v\u1edbi c\xe1ch ho\u1ea1t \u0111\u1ed9ng b\xecnh th\u01b0\u1eddng (js, html, css)\n- Step 1: T\xecm ki\u1ebfm node th\xf4ng qua js selector\n- Step 2: C\u1eadp nh\u1eadt l\u1ea1i node \u0111\xf3\n=> Khi trang \xedt n\u1ed9i dung th\xec ok, m\u1ecdi vi\u1ec7c s\u1ebd r\u1ea5t l\xe0 \u0111\u01a1n gi\u1ea3n\n=> Tuy nhi\xean khi trang ph\u1ee9c t\u1ea1p => l\u01b0\u1ee3ng code s\u1ebd r\u1ea5t l\u1edbn v\xe0 li\xean t\u1ee5c ph\u1ea3i t\xecm ki\u1ebfm node (t\xecm, c\u1eadp nh\u1eadt, xo\xe1) node li\xean t\u1ee5c\n\nX\xe9t v\u1edbi reactjs\n- Step 1: t\u1ea1o ra dom \u1ea3o (mu\u1ed1n thay \u0111\u1ed5i bao nhi\xeau tu\u1ef3 \xfd)\n- Step 2: Sau khi dom \u1ea3o m\u1edbi sinh ra => compare v\u1edbi dom c\u0169 => c\xe1i n\xe0o thay \u0111\u1ed5i th\xec update\n"})})]})}function h(n={}){const{wrapper:t}={...(0,o.a)(),...n.components};return t?(0,i.jsx)(t,{...n,children:(0,i.jsx)(s,{...n})}):s(n)}},1151:(n,t,e)=>{e.d(t,{Z:()=>c,a:()=>r});var i=e(7294);const o={},l=i.createContext(o);function r(n){const t=i.useContext(l);return i.useMemo((function(){return"function"==typeof n?n(t):{...t,...n}}),[t,n])}function c(n){let t;return t=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:r(n.components),i.createElement(l.Provider,{value:t},n.children)}}}]);