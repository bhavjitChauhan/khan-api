"use strict";(self.webpackChunkkhan_api_docs=self.webpackChunkkhan_api_docs||[]).push([[1013],{4290:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>r,contentTitle:()=>d,default:()=>h,frontMatter:()=>t,metadata:()=>l,toc:()=>c});var s=i(5893),a=i(1151);const t={},d="Namespace: GetFeedbackRepliesPage",l={id:"api/modules/queries.GetFeedbackRepliesPage",title:"Namespace: GetFeedbackRepliesPage",description:"queries.GetFeedbackRepliesPage",source:"@site/docs/api/modules/queries.GetFeedbackRepliesPage.md",sourceDirName:"api/modules",slug:"/api/modules/queries.GetFeedbackRepliesPage",permalink:"/docs/api/modules/queries.GetFeedbackRepliesPage",draft:!1,unlisted:!1,editUrl:"https://github.com/bhavjitChauhan/khan-api/tree/docs/docs/api/modules/queries.GetFeedbackRepliesPage.md",tags:[],version:"current",frontMatter:{},sidebar:"docSidebar",previous:{title:"Namespace: GetFeedbackReplies",permalink:"/docs/api/modules/queries.GetFeedbackReplies"},next:{title:"Namespace: GetFullUserProfile",permalink:"/docs/api/modules/queries.GetFullUserProfile"}},r={},c=[{value:"Interfaces",id:"interfaces",level:2},{value:"Type Aliases",id:"type-aliases",level:2},{value:"Data",id:"data",level:3},{value:"Type declaration",id:"type-declaration",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"Response",id:"response",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"Variables",id:"variables",level:2},{value:"query",id:"query",level:3},{value:"Defined in",id:"defined-in-2",level:4}];function o(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"namespace-getfeedbackrepliespage",children:"Namespace: GetFeedbackRepliesPage"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/api/modules/queries",children:"queries"}),".GetFeedbackRepliesPage"]}),"\n",(0,s.jsx)(n.h2,{id:"interfaces",children:"Interfaces"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/docs/api/interfaces/queries.GetFeedbackRepliesPage.Variables",children:"Variables"})}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"type-aliases",children:"Type Aliases"}),"\n",(0,s.jsx)(n.h3,{id:"data",children:"Data"}),"\n",(0,s.jsxs)(n.p,{children:["\u01ac ",(0,s.jsx)(n.strong,{children:"Data"}),": ",(0,s.jsx)(n.code,{children:"Object"})]}),"\n",(0,s.jsx)(n.h4,{id:"type-declaration",children:"Type declaration"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"Name"}),(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:(0,s.jsx)(n.code,{children:"feedbackRepliesPaginated"})}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:(0,s.jsx)(n.a,{href:"/docs/api/interfaces/RepliesSchema",children:(0,s.jsx)(n.code,{children:"RepliesSchema"})})})]})})]}),"\n",(0,s.jsx)(n.h4,{id:"defined-in",children:"Defined in"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/queries/getFeedbackRepliesPage.ts#L65",children:"queries/getFeedbackRepliesPage.ts:65"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"response",children:"Response"}),"\n",(0,s.jsxs)(n.p,{children:["\u01ac ",(0,s.jsx)(n.strong,{children:"Response"}),": ",(0,s.jsx)(n.a,{href:"/docs/api/#standardresponse",children:(0,s.jsx)(n.code,{children:"StandardResponse"})}),"<",(0,s.jsx)(n.a,{href:"api/modules/queries.GetFeedbackRepliesPage.md#data",children:(0,s.jsx)(n.code,{children:"Data"})}),">"]}),"\n",(0,s.jsx)(n.h4,{id:"defined-in-1",children:"Defined in"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/queries/getFeedbackRepliesPage.ts#L63",children:"queries/getFeedbackRepliesPage.ts:63"})}),"\n",(0,s.jsx)(n.h2,{id:"variables",children:"Variables"}),"\n",(0,s.jsx)(n.h3,{id:"query",children:"query"}),"\n",(0,s.jsxs)(n.p,{children:["\u2022 ",(0,s.jsx)(n.code,{children:"Const"})," ",(0,s.jsx)(n.strong,{children:"query"}),": ",(0,s.jsx)(n.code,{children:'"query getFeedbackRepliesPage($postKey: String!, $cursor: String, $limit: Int!) {\\n  feedbackRepliesPaginated(feedbackKey: $postKey, cursor: $cursor, limit: $limit) {\\n    cursor\\n    isComplete\\n    feedback {\\n      isLocked\\n      isPinned\\n      expandKey\\n      appearsAsDeleted\\n      author {\\n        id\\n        kaid\\n        nickname\\n        avatar {\\n          name\\n          imageSrc\\n          __typename\\n        }\\n        __typename\\n      }\\n      content\\n      date\\n      definitelyNotSpam\\n      deleted\\n      downVoted\\n      expandKey\\n      feedbackType\\n      flaggedBy\\n      flaggedByUser\\n      flags\\n      focusUrl\\n      fromVideoAuthor\\n      key\\n      lowQualityScore\\n      notifyOnAnswer\\n      permalink\\n      qualityKind\\n      replyCount\\n      replyExpandKeys\\n      showLowQualityNotice\\n      sumVotesIncremented\\n      upVoted\\n      __typename\\n    }\\n    __typename\\n  }\\n}"'})]}),"\n",(0,s.jsx)(n.h4,{id:"defined-in-2",children:"Defined in"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/queries/getFeedbackRepliesPage.ts#L8",children:"queries/getFeedbackRepliesPage.ts:8"})})]})}function h(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},1151:(e,n,i)=>{i.d(n,{Z:()=>l,a:()=>d});var s=i(7294);const a={},t=s.createContext(a);function d(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:d(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);