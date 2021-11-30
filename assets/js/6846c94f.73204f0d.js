"use strict";(self.webpackChunksf_documentation=self.webpackChunksf_documentation||[]).push([[6076],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return m}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),s=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=s(e.components);return r.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(t),m=a,g=d["".concat(p,".").concat(m)]||d[m]||u[m]||o;return t?r.createElement(g,i(i({ref:n},c),{},{components:t})):r.createElement(g,i({ref:n},c))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},1165:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return c},default:function(){return d}});var r=t(7462),a=t(3366),o=(t(7294),t(3905)),i=["components"],l={},p="Monitoring HAProxy on Instances",s={unversionedId:"Integrations/haproxy",id:"Integrations/haproxy",isDocsHomePage:!1,title:"Monitoring HAProxy on Instances",description:"Overview",source:"@site/docs/Integrations/haproxy.md",sourceDirName:"Integrations",slug:"/Integrations/haproxy",permalink:"/docs/Integrations/haproxy",editUrl:"https://github.com/ram-dot-kumar/SFwebsite.git/docs/Integrations/haproxy.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Monitoring Redis on instances",permalink:"/docs/Integrations/redis"},next:{title:"Forwarding AWS Lambda logs to SnappyFlow",permalink:"/docs/Integrations/aws_lambda"}},c=[{value:"Overview",id:"overview",children:[]},{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Configuration",id:"configuration",children:[]},{value:"Viewing data and dashboards",id:"viewing-data-and-dashboards",children:[]},{value:"See Also",id:"see-also",children:[]}],u={toc:c};function d(e){var n=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"monitoring-haproxy-on-instances"},"Monitoring HAProxy on Instances"),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,"HAProxy is a free,\u202fvery\u202ffast and reliable solution offering high availability, load balancing and proxying for TCP and Http-based applications. HAProxy monitoring involves monitoring of the following aspects: "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"HAProxy Access Logs ")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"HAProxy Logs ")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"HAProxy Metrics  "))),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Configure HAProxy Access Logs ")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Configure HAProxy Stats ")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Set socket path and enable logs to send desired log file under global section in below haproxy config path. "),(0,o.kt)("p",{parentName:"li"},"Path:",(0,o.kt)("inlineCode",{parentName:"p"},"/etc/haproxy/haproxy.conf")," "),(0,o.kt)("p",{parentName:"li"},"Example"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"Global   \n log /dev/log  local0 \n stats socket /run/haproxy/admin.sock mode 660 level admin \n")))),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Configure the HAProxy in following manner to enable server logs. "),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Refer ",(0,o.kt)("a",{parentName:"p",href:"https://www.digitalocean.com/community/tutorials/how-to-configure-haproxy-logging-with-rsyslog-on-centos-8-quickstart"},"link")," for configuration of haproxy to send access logs to a log file in centos also configure Rsyslog to collect haproxy logs. ")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Create a directory to run haproxy service using sudo. "),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"mkdir /run/haproxy")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Under listen section add below lines to capture access logs: "))),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"  Capture request header User-Agent len 128. \n  \n  log-format %ci: %cp\\ [%tr]\\ %ft\\ %b/%s\\ %TR/%Tw/%Tc/%Tr/%Ta\\ %ST\\ %B\\ %CC\\ %CS\\ %tsc\\ %ac/%fc/%bc/%sc/%rc\\ %sq/%bq\\ %hr\\ %hs\\ %{+Q}r\n")),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Add below line to frontend configuration to capture requests: "),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"capture request header User-Agent len 128"),". ")))))),(0,o.kt)("h2",{id:"configuration"},"Configuration"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/Quick_Start/getting_started#sfagent"},"sfAgent")," section provides steps to install and automatically generate plugin configurations.  User can also manually add the configuration shown below to ",(0,o.kt)("inlineCode",{parentName:"p"},"config.yaml")," under ",(0,o.kt)("inlineCode",{parentName:"p"},"/opt/sfagent/")," directory. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"key: <profile key> \ngenerate_name: true \ntags: \n  Name: <unique instance name or will be generated from IP> \n  appName: <add application name> \n  projectName: <add project name> \nmetrics: \n  metrics: \n  plugins: \n    - name: haproxy     \n      enabled: true     \n      interval: 30 \nlogging: \n  plugins: \n    - name: haproxy-access \n      enabled: true \n      config: \n        geo_info: true \n        log_path: /var/log/haproxy.log \n        ua_parser: false \n    - name: haproxy-general \n      enabled: true \n      config: \n        log_level:\n          - emerg \n          - alert \n          - error \n        log_path: /var/log/haproxy.log \n")),(0,o.kt)("h2",{id:"viewing-data-and-dashboards"},"Viewing data and dashboards"),(0,o.kt)("p",null,"Data collected by plugins can be viewed in SnappyFlow\u2019s browse data section under metrics section "),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"plugin: haproxy, haproxy-access, haproxy-general")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"documentType: frontEndStats, backEndStats, systemInfo, backEndServerDetails, haproxyAccessLogs, haproxyGeneralLogs")," "),(0,o.kt)("p",null,"Dashboard template: ",(0,o.kt)("inlineCode",{parentName:"p"},"HAProxy_Server, HAProxy_Access")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Test Matrix")," "),(0,o.kt)("p",null,"Ubuntu:  HAProxy version (1.6.3) "),(0,o.kt)("p",null,"Centos: HAProxy version (1.5.18) "),(0,o.kt)("h2",{id:"see-also"},"See Also"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/integrations/os/linux/overview"},"Linux Monitoring")," "),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/integrations/nginx/overview"},"Nginx")," "),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/integrations/apache/overview/"},"Apache Server")," "),(0,o.kt)("p",null,"For help with plugins, please reach out to\u202f",(0,o.kt)("a",{parentName:"p",href:"mailto:support@snappyflow.io"},"support@snappyflow.io"),"."))}d.isMDXComponent=!0}}]);