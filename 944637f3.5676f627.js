(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{121:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return u}));var o=n(1),r=n(6),a=(n(0),n(145)),i={id:"math",title:"Math"},l={id:"algorithms/math",title:"Math",description:"## Notes",source:"@site/../contents/algorithms/math.md",permalink:"/tech-interview-handbook/algorithms/math",editUrl:"https://github.com/yangshun/tech-interview-handbook/edit/master/contents/../contents/algorithms/math.md",lastUpdatedBy:"Yangshun Tay",lastUpdatedAt:1569463535,sidebar:"docs",previous:{title:"Linked List",permalink:"/tech-interview-handbook/algorithms/linked-list"},next:{title:"Matrix",permalink:"/tech-interview-handbook/algorithms/matrix"}},s=[{value:"Notes",id:"notes",children:[]},{value:"Recommended LeetCode questions",id:"recommended-leetcode-questions",children:[]}],c={rightToc:s};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"notes"},"Notes"),Object(a.b)("p",null,"If code involves division or modulo, remember to check for division or modulo by 0 case."),Object(a.b)("p",null,'When a question involves "a multiple of a number", perhaps modulo might be useful.'),Object(a.b)("p",null,"Check for and handle overflow/underflow if you are using a typed language like Java and C++. At the very least, mention that overflow/underflow is possible and ask whether you need to handle it."),Object(a.b)("p",null,"Consider negative numbers and floating point numbers. This may sound obvious, but under interview pressure, many obvious cases go unnoticed."),Object(a.b)("p",null,"If the question asks to implement an operator such as power, squareroot or division and want it to be faster than O(n), binary search is usually the approach to go."),Object(a.b)("h4",{id:"some-common-formulas"},"Some common formulas:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Sum of 1 to N = (n+1) ","*"," n/2"),Object(a.b)("li",{parentName:"ul"},"Sum of GP = 2",Object(a.b)("sup",null,"0")," + 2",Object(a.b)("sup",null,"1")," + 2",Object(a.b)("sup",null,"2")," + 2",Object(a.b)("sup",null,"3")," + ... 2",Object(a.b)("sup",null,"n")," = 2",Object(a.b)("sup",null,"n+1")," - 1"),Object(a.b)("li",{parentName:"ul"},"Permutations of N = N! / (N-K)!"),Object(a.b)("li",{parentName:"ul"},"Combinations of N = N! / (K! ","*"," (N-K)!)")),Object(a.b)("h2",{id:"recommended-leetcode-questions"},"Recommended LeetCode questions"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(o.a)({parentName:"li"},{href:"https://leetcode.com/problems/powx-n/"}),"Pow(x, n)")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(o.a)({parentName:"li"},{href:"https://leetcode.com/problems/sqrtx/"}),"Sqrt(x)")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(o.a)({parentName:"li"},{href:"https://leetcode.com/problems/integer-to-english-words/"}),"Integer to English Words"))))}u.isMDXComponent=!0},145:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return u}));var o=n(0),r=n.n(o),a=r.a.createContext({}),i=function(e){var t=r.a.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},l=function(e){var t=i(e.components);return r.a.createElement(a.Provider,{value:t},e.children)};var s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},c=Object(o.forwardRef)((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&-1===t.indexOf(o)&&(n[o]=e[o]);return n}(e,["components","mdxType","originalType","parentName"]),u=i(n),m=o,b=u[l+"."+m]||u[m]||s[m]||a;return n?r.a.createElement(b,Object.assign({},{ref:t},c,{components:n})):r.a.createElement(b,Object.assign({},{ref:t},c))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}c.displayName="MDXCreateElement"}}]);