"use strict";(self.webpackChunksf_documentation=self.webpackChunksf_documentation||[]).push([[9840],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,g=d["".concat(l,".").concat(m)]||d[m]||c[m]||i;return n?r.createElement(g,o(o({ref:t},p),{},{components:n})):r.createElement(g,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6489:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return p},default:function(){return d}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],s={},l="Monitoring Nginx on Instances",u={unversionedId:"Integrations/nginx/nginx_instance",id:"Integrations/nginx/nginx_instance",isDocsHomePage:!1,title:"Monitoring Nginx on Instances",description:"Overview",source:"@site/docs/Integrations/nginx/nginx_instance.md",sourceDirName:"Integrations/nginx",slug:"/Integrations/nginx/nginx_instance",permalink:"/docs/Integrations/nginx/nginx_instance",editUrl:"https://github.com/ram-dot-kumar/SFwebsite.git/docs/Integrations/nginx/nginx_instance.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/docs/Integrations/nginx/overview"},next:{title:"Monitoring Nginx in Kubernetes",permalink:"/docs/Integrations/nginx/nginx_kubernetes"}},p=[{value:"Overview",id:"overview",children:[]},{value:"Pre-requisites",id:"pre-requisites",children:[{value:"Access Log Format",id:"access-log-format",children:[]},{value:"Nginx Status Module",id:"nginx-status-module",children:[]}]},{value:"Configuration",id:"configuration",children:[]},{value:"Viewing data and dashboards",id:"viewing-data-and-dashboards",children:[]}],c={toc:p};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"monitoring-nginx-on-instances"},"Monitoring Nginx on Instances"),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"Nginx monitoring involves monitoring of the following elements: "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Nginx Access Logs")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Nginx Error Logs ")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Nginx Server Health "))),(0,i.kt)("h2",{id:"pre-requisites"},"Pre-requisites"),(0,i.kt)("h3",{id:"access-log-format"},"Access Log Format"),(0,i.kt)("p",null,"Ensure Nginx access logs are in format expected by sfAgent parser. Edit nginx conf file ",(0,i.kt)("inlineCode",{parentName:"p"},"/etc/nginx/nginx.conf")," and set log format as follows: \t"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"'$remote_addr $remote_user [$time_local] '  \n'\"$request\" $status $body_bytes_sent ' \n'\"$http_referer\" \"$http_user_agent\" ua=\"$upstream_addr\" ' \n'rt=$request_time uct=$upstream_connect_time uht=$upstream_header_time urt=$upstream_response_time'; \n")),(0,i.kt)("p",null,"Sample: "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"log_format snappyflow '$remote_addr $remote_user [$time_local] '\n                      '\"$request\" $status $body_bytes_sent '\n                      '\"$http_referer\" \"$http_user_agent\" ua=\"$upstream_addr\" '\n                      'rt=$request_time uct=$upstream_connect_time uht=$upstream_header_time urt=$upstream_response_time';\n\naccess_log  /var/log/nginx/access.log snappyflow buffer=16k flush=5s;\n")),(0,i.kt)("p",null,"After configuring log format, the expected log entry would be: "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'172.31.72.81 - [01/Jul/2020:03:36:04 +0000] "POST /owners/6/edit HTTP/1.1" 504 167 "-" "Apache-HttpClient/4.5.7 (Java/1.8.0_252)" ua="-" rt=60.004 uct=- uht=- urt=60.004 \n')),(0,i.kt)("p",null,"Description of log fields is as follows: "),(0,i.kt)("ol",{class:"order_list"},(0,i.kt)("li",null,"remote_addr:  Client address."),(0,i.kt)("li",null,"remote_user:  User name supplied with the Basic authentication."),(0,i.kt)("li",null,"time_local:  Time when the log entry is written."),(0,i.kt)("li",null,"request:  Full original request line."),(0,i.kt)("li",null,"status:  Response status code."),(0,i.kt)("li",null,"body_bytes_sent:  Number of bytes sent to a client (not counting the response header)."),(0,i.kt)("li",null,"http_referer:   Client request header field 'Referer'."),(0,i.kt)("li",null,"http_user_agent:  Client request header field 'User-agent'. Useful to get the client host details like OS, browser, Device."),(0,i.kt)("li",null,"upstream_addr:  Keeps the IP address and port, or the path to the UNIX-domain socket of the upstream server."),(0,i.kt)("li",null,"request_time:  Request processing time in seconds with a milliseconds resolution; time elapsed between the first bytes were read from the client and the log write after the last bytes were sent to the client."),(0,i.kt)("li",null,"upstream_connect_time:  Keeps time spent on establishing a connection with the upstream server, in seconds with millisecond resolution."),(0,i.kt)("li",null,"upstream_header_time: Keeps time spent on receiving the response header from the upstream server, in seconds with millisecond resolution. "),(0,i.kt)("li",null,"upstream_response_time:  Keeps time spent on receiving the response from the upstream server, in seconds with millisecond resolution.")),(0,i.kt)("p",null," Optional fields supported:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"remote_port:  Client port. Add after the remote_addr field as follows:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"log_format snappyflow '$remote_addr:$remote_port $remote_user [$time_local] '\n                      '\"$request\" $status $body_bytes_sent '\n                      '\"$http_referer\" \"$http_user_agent\" ua=\"$upstream_addr\" '\n                      'rt=$request_time uct=$upstream_connect_time uht=$upstream_header_time urt=$upstream_response_time';\n                                            \naccess_log  /var/log/nginx/access.log snappyflow buffer=16k flush=5s;\n")),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"request_length:  Request length including request line, header, and request body. Add it in the end after $upstream_response_time as follows:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"log_format snappyflow  '$remote_addr $remote_user [$time_local] '\n                    '\"$request\" $status $body_bytes_sent '\n                    '\"$http_referer\" \"$http_user_agent\" ua=\"$upstream_addr\" '\n                    'rt=$request_time uct=$upstream_connect_time uht=$upstream_header_time urt=$upstream_response_time rs=$request_length';\n                                          \naccess_log  /var/log/nginx/access.log snappyflow buffer=16k flush=5s;\n")),(0,i.kt)("h3",{id:"nginx-status-module"},"Nginx Status Module"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Enable Nginx status module:")," This is required to monitor Nginx server health "),(0,i.kt)("p",null,"   Open source Nginx exposes several basic metrics about server activity on a simple status page, provided that you have HTTP Stub Status Module enabled. To check if the module is already enabled, run: "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"nginx -V 2>&1 | grep -o with-http_stub_status_module \n")),(0,i.kt)("p",null,"   The status module is enabled if you see\u202f",(0,i.kt)("strong",{parentName:"p"},"with-http_stub_status_module"),"\u202fas output in the terminal. "),(0,i.kt)("p",null,"   In order to enable mod_status , you will need to enable the status module. You can use the --with-http_stub_status_module configuration parameter when building Nginx from source: "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"  ./configure \\ \n   \u2026 \\ \n   --with-http_stub_status_module \n   make \n   sudo make install\n")),(0,i.kt)("p",null,"   After verifying the module is enabled, you will also need to modify your Nginx configuration to set up a locally accessible URL (e.g., /stats) for the status page: "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"}," server { \n     location /stats { \n       stub_status; \n       access_log off; \n       allow 127.0.0.1; \n       deny all; \n     } \n   } \n")),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u202fThe server blocks of Nginx config are usually found not in the master configuration file (e.g., /etc/nginx/nginx.conf) but in supplemental configuration files that are referenced by the master config. To find the relevant configuration files, first locate the master config by running: "),(0,i.kt)("p",{parentName:"div"},(0,i.kt)("inlineCode",{parentName:"p"},"nginx -t")," "),(0,i.kt)("p",{parentName:"div"},"Open the master configuration file listed, and look for lines that begin with \u201cinclude\u201d near the end of the http block, e.g.: "),(0,i.kt)("p",{parentName:"div"},(0,i.kt)("inlineCode",{parentName:"p"},"include /etc/nginx/conf.d/*.conf;")),(0,i.kt)("p",{parentName:"div"},"In one of the referenced config files you should find the main server block, which you can modify as above to configure Nginx metrics reporting. After changing any configurations, reload the configs by executing: "),(0,i.kt)("p",{parentName:"div"},(0,i.kt)("inlineCode",{parentName:"p"},"nginx -s reload")),(0,i.kt)("p",{parentName:"div"},"Now you can view the status page to see your metrics:\n",(0,i.kt)("a",{parentName:"p",href:"http://127.0.0.1/stats"},"http://127.0.0.1/stats")))),(0,i.kt)("h2",{id:"configuration"},"Configuration"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/Quick_Start/getting_started#sfagent"},"sfAgent")," section provides steps to install and automatically generate plugin configurations. User can also manually add the configuration shown below to config.yaml under /opt/sfagent/ directory "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"key: <profile key> \ngenerate_name: true \ntags: \n  Name: <unique instance name or will be generated from IP> \n  appName: <add application name> \n  projectName: <add project name> \nmetrics: \n  plugins: \n    - name: nginx \n      enabled: true \n      interval: 300 \n      config: \n        port: 80 \n        secure: false \n        location: stats \nlogging: \n  plugins: \n    - name: nginx-access \n      enabled: true \n      config: \n        geo_info: true  \n        log_path: /var/log/nginx/access.log, /var/log/nginx/access_log \n        ua_parser: true \n    - name: nginx-error \n      enabled: true \n      config: \n        log_level: \n          - emerg \n          - alert \n          - error \n        log_path: /var/log/nginx/error.log, /var/log/nginx/error_log \n")),(0,i.kt)("h2",{id:"viewing-data-and-dashboards"},"Viewing data and dashboards"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Data generated by plugin can be viewed in \u201cbrowse data\u201d page inside the respective application under ",(0,i.kt)("inlineCode",{parentName:"li"},"plugin=nginx")," with ",(0,i.kt)("inlineCode",{parentName:"li"},"documentType=")," ",(0,i.kt)("inlineCode",{parentName:"li"},"serverDetails"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"serverStats")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"plugin=nginx-access")," with ",(0,i.kt)("inlineCode",{parentName:"li"},"documentType=nginxAccessLogs"),"."),(0,i.kt)("li",{parentName:"ul"},"Dashboard for this data can be instantiated by Importing dashboard template ",(0,i.kt)("inlineCode",{parentName:"li"},"Nginx_Server"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"Nginx_Access")," to the application dashboard.")))}d.isMDXComponent=!0}}]);