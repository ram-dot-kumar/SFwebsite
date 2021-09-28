"use strict";(self.webpackChunksf_documentation=self.webpackChunksf_documentation||[]).push([[9807,2186],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),f=s(n),d=a,m=f["".concat(c,".").concat(d)]||f[d]||u[d]||o;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},3873:function(e,t,n){n.d(t,{Z:function(){return l}});var r=n(7294),a=n(6010),o="tableOfContentsInline_3fWc";function i(e){var t=e.toc,n=e.isChild;return t.length?r.createElement("ul",{className:n?"":"table-of-contents"},t.map((function(e){return r.createElement("li",{key:e.id},r.createElement("a",{href:"#"+e.id,dangerouslySetInnerHTML:{__html:e.value}}),r.createElement(i,{isChild:!0,toc:e.children}))}))):null}var l=function(e){var t=e.toc;return r.createElement("div",{className:(0,a.Z)(o)},r.createElement(i,{toc:t}))}},1530:function(e,t,n){n.r(t);var r=n(1721),a=n(7294),o=n(9755),i=n.n(o),l=function(e){function t(){return e.apply(this,arguments)||this}(0,r.Z)(t,e);var n=t.prototype;return n.componentDidMount=function(){this.windowResolutionCheck()},n.componentWillUnmount=function(){this.windowResolutionCheck()},n.windowResolutionCheck=function(){2==i()("article header").length&&i()("article header:first-child").hide(),i()(window).width()>1e3&&(i()("main .col--3 ul.table-of-contents").hide(),window.addEventListener("scroll",(function(e){i()(window).scrollTop()>i()("article ul.table-of-contents").height()?i()("main .col--3 ul.table-of-contents").fadeIn():i()("main .col--3 ul.table-of-contents").fadeOut()})),window.addEventListener("resize",(function(e){i()(window).scrollTop()>i()("article ul.table-of-contents").height()?i()("main .col--3 ul.table-of-contents").fadeIn():i()("main .col--3 ul.table-of-contents").fadeOut()})))},n.render=function(){return a.createElement("div",null)},t}(a.Component);t.default=l},9693:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return f},default:function(){return m}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=n(1530),l=n(3873),c=["components"],s={sidebar_position:4},p=void 0,u={unversionedId:"Tracing/ruby",id:"Tracing/ruby",isDocsHomePage:!1,title:"ruby",description:"On this page",source:"@site/docs/Tracing/ruby.md",sourceDirName:"Tracing",slug:"/Tracing/ruby",permalink:"/docs/Tracing/ruby",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/Tracing/ruby.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"python",permalink:"/docs/Tracing/python"},next:{title:"nodejs",permalink:"/docs/Tracing/nodejs"}},f=[{value:"Instances",id:"instances",children:[]},{value:"Kubernetes",id:"kubernetes",children:[]}],d={toc:f};function m(e){var t=e.components,n=(0,a.Z)(e,c);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"tracing-ruby-applications"},"Tracing Ruby Applications"),(0,o.kt)("h2",null,"On this page"),(0,o.kt)(l.Z,{toc:f,mdxType:"TOCInline"}),(0,o.kt)(i.default,{mdxType:"IndexJquery"}),(0,o.kt)("p",null," Available platforms"),(0,o.kt)("h2",{id:"instances"},"Instances"),(0,o.kt)("p",null,"sfTrace Ruby Agent automatically instruments applications, based on web frameworks Ruby on Rails and other Rack-compatible applications. It uses the hooks and signals provided by these frameworks to trace the application."),(0,o.kt)("h5",{id:"installation-steps"},"Installation steps"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Install sfAgent (if not already installed)"),(0,o.kt)("li",{parentName:"ol"},"Confirm that /opt/sfagent/config.yaml is configured with correct profile key and tags.")),(0,o.kt)("h5",{id:"trace-setup-for-ruby-on-rails-applications"},"Trace setup for Ruby on Rails Applications"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Install sftrace agent by either adding the gem to Gemfile gem '",(0,o.kt)("strong",{parentName:"li"},"sftrace-agent"),"' and then execute the command ",(0,o.kt)("strong",{parentName:"li"},"bundle install")," or install the agent yourself using the command ",(0,o.kt)("strong",{parentName:"li"},"gem install sftrace-agent"),"."),(0,o.kt)("li",{parentName:"ol"},"Add the agent configuration file in application\u2019s config folder. Refer to application.rb for tracing specific configuration. Search for ",(0,o.kt)("strong",{parentName:"li"},"SFTRACE-CONFIG")," in sample application.rb ")),(0,o.kt)("h2",{id:"kubernetes"},"Kubernetes"),(0,o.kt)("p",null," Follow the steps below to enable tracing in Ruby on Rails applications running as a Kubernetes pod"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Follow the first 2 steps in ",(0,o.kt)("strong",{parentName:"p"},"Trace setup for Ruby on Rails Applications")," to update the application with agent specific configuration.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"sfTrace ruby agent configuration can be set to the application running in Kubernetes pod. This can be done in 2 ways:"))),(0,o.kt)("h5",{id:"option-1--manifest-deployment"},(0,o.kt)("strong",{parentName:"h5"},"Option 1:  manifest deployment")),(0,o.kt)("p",null,"Refer to ruby",(0,o.kt)("a",{parentName:"p",href:"https://github.com/snappyflow/website-artefacts/blob/master/sfTracing/nodejs/nodejs_k8s_standalone_deployment.yaml"},"_k8s_manifest_deployment.yaml"),"  to copy trace agent configuration to the application container and start the container with trace agent configurations. Search for ",(0,o.kt)("strong",{parentName:"p"},"SFTRACE-CONFIG")," in sample deployment yaml file"),(0,o.kt)("p",null,"Once updated, deploy the pod."),(0,o.kt)("h5",{id:"option-2-deploy-using-helm-chart"},(0,o.kt)("strong",{parentName:"h5"},"Option 2: Deploy using helm chart")),(0,o.kt)("p",null,"Step 1: Update values.yaml"),(0,o.kt)("p",null,"Refer to ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/snappyflow/website-artefacts/blob/master/sfTracing/nodejs/k8s_with_helm_chart_values.yaml"},"k8s_with_helm_chart_values.yaml")," to configure agent specific properties. Search for ",(0,o.kt)("strong",{parentName:"p"},"SFTRACE-CONFIG")," in sample values.yaml file"),(0,o.kt)("p",null,"Step 2: Update deployment.yaml"),(0,o.kt)("p",null,"Refer to ruby",(0,o.kt)("a",{parentName:"p",href:"https://github.com/snappyflow/website-artefacts/blob/master/sfTracing/nodejs/nodejs_k8s_with_helm_chart_deployment.yaml"},"_k8s_with_helm_chart_deployment.yaml")," to copy trace agent to the application container and start the container using the trace agent configurations. Search for ",(0,o.kt)("strong",{parentName:"p"},"SFTRACE-CONFIG")," in sample deployment yaml file"),(0,o.kt)("p",null,"Once updated, deploy the pod."))}m.isMDXComponent=!0},6010:function(e,t,n){function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function a(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}n.d(t,{Z:function(){return a}})}}]);