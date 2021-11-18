"use strict";(self.webpackChunksf_documentation=self.webpackChunksf_documentation||[]).push([[9845],{3905:function(t,e,n){n.d(e,{Zo:function(){return c},kt:function(){return d}});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=a.createContext({}),u=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},c=function(t){var e=u(t.components);return a.createElement(s.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,s=t.parentName,c=l(t,["components","mdxType","originalType","parentName"]),m=u(n),d=r,g=m["".concat(s,".").concat(d)]||m[d]||p[d]||i;return n?a.createElement(g,o(o({ref:e},c),{},{components:n})):a.createElement(g,o({ref:e},c))}));function d(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l.mdxType="string"==typeof t?t:r,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6071:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return c},default:function(){return m}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=["components"],l={},s="NetStat Monitoring",u={unversionedId:"Integrations/os/linux/netstat",id:"Integrations/os/linux/netstat",isDocsHomePage:!1,title:"NetStat Monitoring",description:"Overview",source:"@site/docs/Integrations/os/linux/netstat.md",sourceDirName:"Integrations/os/linux",slug:"/Integrations/os/linux/netstat",permalink:"/docs/Integrations/os/linux/netstat",editUrl:"https://github.com/ram-dot-kumar/SFwebsite.git/docs/Integrations/os/linux/netstat.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Monitoring Linux OS",permalink:"/docs/Integrations/os/linux/linux_os"},next:{title:"PSUtil Monitoring",permalink:"/docs/Integrations/os/linux/psutil"}},c=[{value:"Overview",id:"overview",children:[]},{value:"Prerequisite - Install netstat command",id:"prerequisite---install-netstat-command",children:[]},{value:"Agent Configuration",id:"agent-configuration",children:[]},{value:"Viewing data and dashboards",id:"viewing-data-and-dashboards",children:[]},{value:"Test Matrix",id:"test-matrix",children:[]},{value:"See Also",id:"see-also",children:[]}],p={toc:c};function m(t){var e=t.components,n=(0,r.Z)(t,o);return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"netstat-monitoring"},"NetStat Monitoring"),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"Netstat Metric plugin is an agent-based plugin that collects below data for each process running on the machine."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Tcp Connections"),(0,i.kt)("li",{parentName:"ul"},"Udp Connections"),(0,i.kt)("li",{parentName:"ul"},"TcpEstablish Connections"),(0,i.kt)("li",{parentName:"ul"},"TcpListening Connections"),(0,i.kt)("li",{parentName:"ul"},"TcpOpening Connections"),(0,i.kt)("li",{parentName:"ul"},"TcpClosing Connections"),(0,i.kt)("li",{parentName:"ul"},"TcpWaiting Connections"),(0,i.kt)("li",{parentName:"ul"},"Traffic in MB"),(0,i.kt)("li",{parentName:"ul"},"Bytes Acked"),(0,i.kt)("li",{parentName:"ul"},"Bytes Received"),(0,i.kt)("li",{parentName:"ul"},"Tcp Udp futher info table")),(0,i.kt)("h2",{id:"prerequisite---install-netstat-command"},"Prerequisite - Install netstat command"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"If this package is not present, use the following commands to install it.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"To install net-tools package in CentOS/RHEL:",(0,i.kt)("blockquote",{parentName:"li"},(0,i.kt)("p",{parentName:"blockquote"},"sudo yum install net-tools"))),(0,i.kt)("li",{parentName:"ul"},"To install net-tools package in Ubuntu OS:",(0,i.kt)("blockquote",{parentName:"li"},(0,i.kt)("p",{parentName:"blockquote"},"sudo apt-get install net-tools ")))))),(0,i.kt)("h2",{id:"agent-configuration"},"Agent Configuration"),(0,i.kt)("p",null,"Refer to ",(0,i.kt)("a",{parentName:"p",href:"https://www.odwebp.svc.ms/docs/Quick_Start/getting_started#sfagent"},"sfAgent")," section for steps to install and automatically generate plugin configurations. User can also manually add the configuration shown below to ",(0,i.kt)("inlineCode",{parentName:"p"},"config.yaml")," under ",(0,i.kt)("inlineCode",{parentName:"p"},"/opt/sfagent/ directory")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"key: <profile_key> \ntags: \n  Name: <name> \n  appName: <app_name> \n  projectName: <project_name> \nmetrics: \n  plugins: \n    - name: netstat \n      enabled: true \n      interval: 60 \n")),(0,i.kt)("h2",{id:"viewing-data-and-dashboards"},"Viewing data and dashboards"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Data collected by plugin can be viewed in SnappyFlow\u2019s browse data section under metrics ",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"plugin=netstat")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"documentType=netstatDetails"),"."))),(0,i.kt)("li",{parentName:"ul"},"Dashboard of Netstat data can be rendered using ",(0,i.kt)("inlineCode",{parentName:"li"},"Template= Netstat"))),(0,i.kt)("h2",{id:"test-matrix"},"Test Matrix"),(0,i.kt)("p",null,"Centos: 7.x"),(0,i.kt)("p",null,"RHEL: 7.x"),(0,i.kt)("p",null,"Ubuntu: 14.x, 16.x"),(0,i.kt)("h2",{id:"see-also"},"See Also"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/integrations/os/linux/linux_os"},"Linux monitoring")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/integrations/os/linux/lsof"},"LSOF")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/integrations/os/linux/psutil"},"PSUtil")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/integrations/statsd/custom_monitoring"},"Custom plugins using StatsD")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/Integrations/kubernetes/prometheus_exporter"},"Prometheus Integration"))))}m.isMDXComponent=!0}}]);