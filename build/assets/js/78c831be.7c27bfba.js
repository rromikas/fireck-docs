(self.webpackChunkfireck_docs=self.webpackChunkfireck_docs||[]).push([[801],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return l},kt:function(){return f}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=c(r),f=o,h=d["".concat(u,".").concat(f)]||d[f]||p[f]||a;return r?n.createElement(h,i(i({ref:t},l),{},{components:r})):n.createElement(h,i({ref:t},l))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3151:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return i},metadata:function(){return s},toc:function(){return u},default:function(){return l}});var n=r(2122),o=r(9756),a=(r(7294),r(3905)),i={sidebar_position:1},s={unversionedId:"content-api/authorization",id:"content-api/authorization",isDocsHomePage:!1,title:"Authorization",description:"Fireck uses a roles system which defines permissions for different roles. To find out if you have permission to find, create or update the collection, fireck needs to know your role. Fireck can find your role from the token you receive after authentication. Fireck has two default roles: Public and Authenticated. Public role defines permission for guest users, authenticated - for those who have an account and are logged in. Therefore you should know how to create a user first.",source:"@site/docs/content-api/authorization.md",sourceDirName:"content-api",slug:"/content-api/authorization",permalink:"/docs/content-api/authorization",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/content-api/authorization.md",version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Installation",permalink:"/docs/"},next:{title:"Create",permalink:"/docs/content-api/create"}},u=[{value:"Register a user",id:"register-a-user",children:[]},{value:"Login",id:"login",children:[]},{value:"Authorized requests",id:"authorized-requests",children:[]}],c={toc:u};function l(e){var t=e.components,r=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Fireck uses a roles system which defines permissions for different roles. To find out if you have permission to find, create or update the collection, fireck needs to know your role. Fireck can find your role from the ",(0,a.kt)("strong",{parentName:"p"},"token")," you receive after ",(0,a.kt)("strong",{parentName:"p"},"authentication"),". Fireck has two default roles: Public and Authenticated. Public role defines permission for guest users, authenticated - for those who have an account and are logged in. Therefore you should know how to create a user first."),(0,a.kt)("h2",{id:"register-a-user"},"Register a user"),(0,a.kt)("p",null,"To register a user, send a POST request to /auth/local/register with the body which contains email and password, example:"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"POST")," ",(0,a.kt)("inlineCode",{parentName:"p"},"/auth/local/register")),(0,a.kt)("p",null,"Body:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "email": "example@example.com",\n  "password": "password123"\n}\n')),(0,a.kt)("p",null,"Successful response:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "success": true\n}\n')),(0,a.kt)("h2",{id:"login"},"Login"),(0,a.kt)("p",null,"To login, send a POST request to /auth/local/login with the body which contains email and password, example:"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"POST")," ",(0,a.kt)("inlineCode",{parentName:"p"},"/auth/local/login")),(0,a.kt)("p",null,"Body:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "email": "example@example.com",\n  "password": "password123"\n}\n')),(0,a.kt)("p",null,"Successful response:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "token": string,\n    "user":{\n        "email":string\n    }\n}\n')),(0,a.kt)("h2",{id:"authorized-requests"},"Authorized requests"),(0,a.kt)("p",null,"To send authorized request, add the Authorization header to the request:"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Authorization: \u201cBearer \u201c + token")),(0,a.kt)("p",null,"If authorization header is not provided, the sender role is ",(0,a.kt)("em",{parentName:"p"},"public")))}l.isMDXComponent=!0}}]);