(self.webpackChunkfireck_docs=self.webpackChunkfireck_docs||[]).push([[217],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),f=l(n),d=o,m=f["".concat(p,".").concat(d)]||f[d]||u[d]||a;return n?r.createElement(m,i(i({ref:t},s),{},{components:n})):r.createElement(m,i({ref:t},s))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},872:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return c},toc:function(){return p},default:function(){return s}});var r=n(2122),o=n(9756),a=(n(7294),n(3905)),i={sidebar_position:1,slug:"/"},c={unversionedId:"installation",id:"installation",isDocsHomePage:!1,title:"Installation",description:"Step 1",source:"@site/docs/installation.md",sourceDirName:".",slug:"/",permalink:"/docs/",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/installation.md",version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,slug:"/"},sidebar:"tutorialSidebar",next:{title:"Authorization",permalink:"/docs/content-api/authorization"}},p=[{value:"Step 1",id:"step-1",children:[]},{value:"Step 2",id:"step-2",children:[]},{value:"Step 3",id:"step-3",children:[]},{value:"Congratulations!",id:"congratulations",children:[]}],l={toc:p};function s(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"step-1"},"Step 1"),(0,a.kt)("p",null,"Deploy the app to Netlify.\nEverything will be configurable inside the app."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://app.netlify.com/start/deploy?repository=https://github.com/rromikas/fireck-dboard"},(0,a.kt)("img",{src:"https://www.netlify.com/img/deploy/button.svg"}))),(0,a.kt)("h2",{id:"step-2"},"Step 2"),(0,a.kt)("p",null,"Connect the app with your firebase project by uploading a service account file. Give some time for the app to rebuild with new environment variables. Watch the video below how to find your service account file:"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=x_vhtPSV7s8"},(0,a.kt)("img",{src:"https://img.youtube.com/vi/x_vhtPSV7s8/0.jpg"}))),(0,a.kt)("h2",{id:"step-3"},"Step 3"),(0,a.kt)("p",null,"Enable the firestore and authentication in your ",(0,a.kt)("a",{parentName:"p",href:"https://console.firebase.google.com/"},"firebase console"),". After enabling, it will take some time for changes to propagate. If you don't see any changes, refresh the app."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=cd5vi0qylmE"},(0,a.kt)("img",{src:"https://img.youtube.com/vi/cd5vi0qylmE/0.jpg"}))),(0,a.kt)("h2",{id:"congratulations"},"Congratulations!"),(0,a.kt)("p",null,"You reached the point where you need to create a admin user. Create it. Create collections, add documents to them add media files to the library, customize the appearance of the app, change the logo and the colors palette. Read the ",(0,a.kt)("a",{parentName:"p",href:"/content-api/authorization"},"Content API")," how to programmatically manage the contents."))}s.isMDXComponent=!0}}]);