"use strict";(self.webpackChunksf_documentation=self.webpackChunksf_documentation||[]).push([[7023,2186],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return d}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(a),d=r,f=m["".concat(l,".").concat(d)]||m[d]||u[d]||i;return a?n.createElement(f,o(o({ref:t},p),{},{components:a})):n.createElement(f,o({ref:t},p))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},3873:function(e,t,a){a.d(t,{Z:function(){return s}});var n=a(7294),r=a(6010),i="tableOfContentsInline_3fWc";function o(e){var t=e.toc,a=e.isChild;return t.length?n.createElement("ul",{className:a?"":"table-of-contents"},t.map((function(e){return n.createElement("li",{key:e.id},n.createElement("a",{href:"#"+e.id,dangerouslySetInnerHTML:{__html:e.value}}),n.createElement(o,{isChild:!0,toc:e.children}))}))):null}var s=function(e){var t=e.toc;return n.createElement("div",{className:(0,r.Z)(i)},n.createElement(o,{toc:t}))}},1530:function(e,t,a){a.r(t);var n=a(1721),r=a(7294),i=a(9755),o=a.n(i),s=function(e){function t(){return e.apply(this,arguments)||this}(0,n.Z)(t,e);var a=t.prototype;return a.componentDidMount=function(){this.windowResolutionCheck()},a.componentWillUnmount=function(){this.windowResolutionCheck()},a.windowResolutionCheck=function(){2==o()("article header").length&&o()("article header:first-child").hide(),o()(window).width()>1e3&&(o()("main .col--3 ul.table-of-contents").hide(),window.addEventListener("scroll",(function(e){o()(window).scrollTop()>o()("article ul.table-of-contents").height()?o()("main .col--3 ul.table-of-contents").fadeIn():o()("main .col--3 ul.table-of-contents").fadeOut()})),window.addEventListener("resize",(function(e){o()(window).scrollTop()>o()("article ul.table-of-contents").height()?o()("main .col--3 ul.table-of-contents").fadeIn():o()("main .col--3 ul.table-of-contents").fadeOut()})))},a.render=function(){return r.createElement("div",null)},t}(r.Component);t.default=s},8394:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return c},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return m},default:function(){return f}});var n=a(7462),r=a(3366),i=(a(7294),a(3905)),o=a(1530),s=a(3873),l=["components"],c={sidebar_position:2},p=void 0,u={unversionedId:"Tracing/java",id:"Tracing/java",isDocsHomePage:!1,title:"java",description:"On this page",source:"@site/docs/Tracing/java.md",sourceDirName:"Tracing",slug:"/Tracing/java",permalink:"/docs/Tracing/java",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/Tracing/java.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"overview",permalink:"/docs/Tracing/overview"},next:{title:"java_v2",permalink:"/docs/Tracing/java_v2"}},m=[{value:"Available Platforms",id:"available-platforms",children:[]},{value:"Instance",id:"instance",children:[{value:"Command Line",id:"command-line",children:[]},{value:"Apache Tomcat",id:"apache-tomcat",children:[]},{value:"JBOSS EAP",id:"jboss-eap",children:[]}]},{value:"Docker",id:"docker",children:[]},{value:"Kubernetes",id:"kubernetes",children:[{value:"Example of Manifest yaml",id:"example-of-manifest-yaml",children:[]},{value:"Example of a Helm chart",id:"example-of-a-helm-chart",children:[]}]},{value:"ECS",id:"ecs",children:[{value:"Create the Task definition",id:"create-the-task-definition",children:[]},{value:"Create the Cluster",id:"create-the-cluster",children:[]},{value:"Create the Service",id:"create-the-service",children:[]}]}],d={toc:m};function f(e){var t=e.components,a=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"tracing-java-applications"},"Tracing Java Applications"),(0,i.kt)("h2",null,"On this page"),(0,i.kt)(s.Z,{toc:m,mdxType:"TOCInline"}),(0,i.kt)(o.default,{mdxType:"IndexJquery"}),(0,i.kt)("p",null,"sfTrace Java Agent automatically instruments various APIs, frameworks and application servers. Currently sfTrace supports the following:  "),(0,i.kt)("div",{class:"blue_textbox"},(0,i.kt)("b",null,"Supported Java versions"),(0,i.kt)("p",null,"Oracle JDK: 7u60+, 8u40+, 9, 10, 11 ",(0,i.kt)("br",null),"Open JDK: 7u60+, 8u40+, 9, 10, 11 "),(0,i.kt)("b",null,"Supported Web Frameworks"),(0,i.kt)("p",null,"Spring Web MVC 4.x, 5.x ",(0,i.kt)("br",null),"Spring Boot 1.5+, 2.x supports embedded Tomcat ",(0,i.kt)("br",null),"JAX-RS 2.x  ",(0,i.kt)("br",null),"JAX-WS  ",(0,i.kt)("br",null)),(0,i.kt)("b",null,"Supported Application Servers"),(0,i.kt)("p",null,"Tomcat 7.x, 8.5.x, 9.x ",(0,i.kt)("br",null),"Wildfly 8-16 ",(0,i.kt)("br",null),"JBoss EAP 6.4, 7.0, 7.1, 7.2")),(0,i.kt)("h2",{id:"available-platforms"},"Available Platforms"),(0,i.kt)("ul",{className:"icon_list javalang"},(0,i.kt)("li",null,(0,i.kt)("a",{href:"java#instance"},(0,i.kt)("img",{src:"/img/instance.svg"}))),(0,i.kt)("li",null,(0,i.kt)("a",{href:"#docker"},(0,i.kt)("img",{src:"/img/docker.svg"}))),(0,i.kt)("li",null,(0,i.kt)("a",{href:"#kubernetes"},(0,i.kt)("img",{src:"/img/kubernetes.svg"}))),(0,i.kt)("li",null,(0,i.kt)("a",{href:"#ecs"},(0,i.kt)("img",{src:"/img/ecs.svg"})))),(0,i.kt)("h2",{id:"instance"},"Instance"),(0,i.kt)("p",null,"Install sfAgent which automatically installs sfTrace agent as well."),(0,i.kt)("p",null,"Link the application with sfTrace Java Agent"),(0,i.kt)("h3",{id:"command-line"},"Command Line"),(0,i.kt)("p",null,"Use the following arguments while starting your application using\u202fjava \u2013jar\u202fcommand, in IDE, Maven or Gradle script: "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"java -javaagent:/opt/sfagent/sftrace/java/sftrace-java-agent.jar -Dsftrace.service_name=<my-service> -jar <application jar> \n")),(0,i.kt)("p",null,"Note: If\u202fservice_name\u202fis not provided, an auto discovered service name will be added. Service_name\u202fis used to identify and filter the traces related to an application and should be named appropriately to distinctly identify it. Service name must only contain characters from the ASCII alphabet, numbers, dashes, underscores and spaces."),(0,i.kt)("h4",{id:"additional-features-available-for-spring-boot-applications"},"Additional features available for Spring Boot Applications"),(0,i.kt)("p",null,"By default, transaction names of unsupported Servlet API-based frameworks are in the form of\u202f$method unknown route. To modify this and to report the transactions names in the form of\u202f$method $path, use the following in javaagent configuration. This option is applicable only for spring-boot based applications."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"-Delastic.apm.disable_instrumentations=spring-mvc  \n-Delastic.apm.use_path_as_transaction_name=true \n")),(0,i.kt)("h4",{id:"normalizing-transaction-urls"},"Normalizing Transaction URLs"),(0,i.kt)("p",null,"If your URLs contain path parameters like /user/$userId, it can lead to an explosion of transaction types. This can be avoided by using URL groups.\nFor example, if the application supports urls like: "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"/owners, /owners/<owner_id>, /owners/<owner_id>/edit, /owners/<owner_id>/pets, \n")),(0,i.kt)("p",null,"then url groups would be configured as: "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"url_groups=/owners/*,/owner/*/edit,/owners/*/pets \n")),(0,i.kt)("h4",{id:"example-of-running-java-application-via-command-line-using-these-parameters"},"Example of running java application via command line using these parameters"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"java -javaagent:/opt/sfagent/sftrace/java/sftrace-java-agent.jar \n\n-Dsftrace.service_name=my-service \n-Delastic.apm.disable_instrumentations=spring-mvc \n-Delastic.apm.use_path_as_transaction_name=true \n-Delastic.apm.url_groups=/owners/*,/owner/*/edit,/owners/*/pets -jar <application jar> \n")),(0,i.kt)("h3",{id:"apache-tomcat"},"Apache Tomcat"),(0,i.kt)("p",null,"Add the agent configuration in setenv.sh. If this file is not present,  create the file in below folder"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"<tomcat installation path>/bin\n")),(0,i.kt)("p",null,"Refer to\u202f",(0,i.kt)("a",{parentName:"p",href:"https://github.com/snappyflow/website-artefacts/blob/master/sfTracing/java/tomcat_setenv.sh"},"tomcat_setenv.sh"),"\u202f\u202ffor tracing specific configuration that needs to be copied to setenv.sh file.\nMake the file executable using chmod +x bin/setenv.sh and start the server"),(0,i.kt)("p",null,"Add the agent configuration in setenv.sh. If this file is not present,  create the file in below folder"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"<tomcat installation path>/bin\n")),(0,i.kt)("p",null,"Refer to\u202f",(0,i.kt)("a",{parentName:"p",href:"https://github.com/snappyflow/website-artefacts/blob/master/sfTracing/java/tomcat_setenv.sh"},"tomcat_setenv.sh"),"\u202f\u202ffor tracing specific configuration that needs to be copied to setenv.sh file.\nMake the file executable using chmod +x bin/setenv.sh and start the server"),(0,i.kt)("h4",{id:"additional-features-available-for-spring-boot-applications-1"},"Additional features available for Spring Boot Applications"),(0,i.kt)("p",null,"By default, transaction names of unsupported Servlet API-based frameworks are in the form of\u202f$method unknown route. To modify this and to report the transactions names in the form of\u202f$method $path, use the following in javaagent configuration. This option is applicable only for spring-boot based applications."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"-Delastic.apm.disable_instrumentations=spring-mvc  \n-Delastic.apm.use_path_as_transaction_name=true \n")),(0,i.kt)("h4",{id:"normalizing-transaction-urls-1"},"Normalizing Transaction URLs"),(0,i.kt)("p",null,"If your URLs contain path parameters like /user/$userId, it can lead to an explosion of transaction types. This can be avoided by using URL groups.\nFor example, if the application supports urls like: "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"/owners, /owners/<owner_id>, /owners/<owner_id>/edit, /owners/<owner_id>/pets, \n")),(0,i.kt)("p",null,"then url groups would be configured as: "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"url_groups=/owners/*,/owner/*/edit,/owners/*/pets \n")),(0,i.kt)("h4",{id:"example-of-running-java-application-via-command-line-using-these-parameters-1"},"Example of running java application via command line using these parameters"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"java -javaagent:/opt/sfagent/sftrace/java/sftrace-java-agent.jar \n\n-Dsftrace.service_name=my-service \n-Delastic.apm.disable_instrumentations=spring-mvc \n-Delastic.apm.use_path_as_transaction_name=true \n-Delastic.apm.url_groups=/owners/*,/owner/*/edit,/owners/*/pets -jar <application jar> \n")),(0,i.kt)("h3",{id:"jboss-eap"},"JBOSS EAP"),(0,i.kt)("h4",{id:"standalone-mode"},"Standalone Mode"),(0,i.kt)("p",null,"Add the agent configuration in standalone.conf file and start the server\nRefer to\u202f",(0,i.kt)("a",{parentName:"p",href:"https://github.com/snappyflow/website-artefacts/blob/master/sfTracing/java/JBOSS_standalone.conf"},"JBOSS_standalone.conf"),"\u202ffor tracing specific configuration. Copy from section with \u201cSFTRACE-CONFIG\u201d in comments "),(0,i.kt)("h4",{id:"domain-mode"},"Domain Mode"),(0,i.kt)("p",null,"Add the agent configuration in domain.xml and start the server\nRefer to\u202f",(0,i.kt)("a",{parentName:"p",href:"https://github.com/snappyflow/website-artefacts/blob/master/sfTracing/java/JBOSS_domain.xml"},"JBOSS_domain.xml"),"\u202f for tracing specific configuration. Copy from section with \u201cSFTRACE-CONFIG\u201d in comments\nAfter updating the configuration, restart the application. "),(0,i.kt)("h4",{id:"additional-features-available-for-spring-boot-applications-2"},"Additional features available for Spring Boot Applications"),(0,i.kt)("p",null,"By default, transaction names of unsupported Servlet API-based frameworks are in the form of\u202f$method unknown route. To modify this and to report the transactions names in the form of\u202f$method $path, use the following in javaagent configuration. This option is applicable only for spring-boot based applications."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"-Delastic.apm.disable_instrumentations=spring-mvc  \n-Delastic.apm.use_path_as_transaction_name=true \n")),(0,i.kt)("h4",{id:"normalizing-transaction-urls-2"},"Normalizing Transaction URLs"),(0,i.kt)("p",null,"If your URLs contain path parameters like /user/$userId, it can lead to an explosion of transaction types. This can be avoided by using URL groups.\nFor example, if the application supports urls like: "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"/owners, /owners/<owner_id>, /owners/<owner_id>/edit, /owners/<owner_id>/pets, \n")),(0,i.kt)("p",null,"then url groups would be configured as: "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"url_groups=/owners/*,/owner/*/edit,/owners/*/pets \n")),(0,i.kt)("h4",{id:"example-of-running-java-application-via-command-line-using-these-parameters-2"},"Example of running java application via command line using these parameters"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"java -javaagent:/opt/sfagent/sftrace/java/sftrace-java-agent.jar \n\n-Dsftrace.service_name=my-service \n-Delastic.apm.disable_instrumentations=spring-mvc \n-Delastic.apm.use_path_as_transaction_name=true \n-Delastic.apm.url_groups=/owners/*,/owner/*/edit,/owners/*/pets -jar <application jar> \n")),(0,i.kt)("h2",{id:"docker"},"Docker"),(0,i.kt)("p",null,"Refer to\u202f",(0,i.kt)("a",{parentName:"p",href:"https://github.com/snappyflow/website-artefacts/blob/master/sfTracing/java/java_Dockerfile"},"java_Dockerfile"),". Look at sections with SFTRACE-CONFIG description.\nInstallation steps are provided. copy the trace agent to the container and start the container by attaching the agent to the application. Additionally, user has to add SnappyFlow configurations for profile_key, projectName, appName to the docker file\nOnce updated, build and start the container."),(0,i.kt)("h2",{id:"kubernetes"},"Kubernetes"),(0,i.kt)("p",null,"sfTrace is run as an initContainer in the application pod. User can deploy this either using a manifest yaml or a Helm chart."),(0,i.kt)("h3",{id:"example-of-manifest-yaml"},"Example of Manifest yaml"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/snappyflow/website-artefacts/blob/master/sfTracing/java/java_k8s_standalone_deployment.yaml"},"java_k8s_standalone_deployment.yaml"),"\u202f "),(0,i.kt)("h3",{id:"example-of-a-helm-chart"},"Example of a Helm chart"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Update values.yaml"),": Refer to\u202f",(0,i.kt)("a",{parentName:"p",href:"https://github.com/snappyflow/website-artefacts/blob/master/sfTracing/java/java_k8s_with_helm_chart_values.yaml"},"java_k8s_with_helm_chart_values.yaml"),"\u202f\u202fto configure agent specific properties. Look at sections with SFTRACE-CONFIG description "),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Update deployment.yam"),"l: Refer to\u202f",(0,i.kt)("a",{parentName:"p",href:"https://github.com/snappyflow/website-artefacts/blob/master/sfTracing/java/java_k8s_with_helm_chart_deployment.yaml"},"java_k8s_with_helm_chart_deployment.yaml"),"\u202f\u202fto copy trace agent to the container and start the container by attaching  the agent. Look at sections with SFTRACE-CONFIG description"),(0,i.kt)("h2",{id:"ecs"},"ECS"),(0,i.kt)("h3",{id:"create-the-task-definition"},"Create the Task definition"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Open Amazon ECS, in navigation pane, choose task definition and click on Create New Task Definition and select the launch type as EC2 or  Fargate, click on Next step. ")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Give the Task definition Name ")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Task Role, choose an IAM role that provides permissions for containers in  your task to make calls to AWS APIs on your behalf and Network Mode")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Click on Add containers. Give a Container name, and give the Image of your Java Application. Set Memory limit and port mappings as per your task requirements. In the environment section, for Entry Point give sh , -c For Command paste the following lines "))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"mkdir /sfagent && wget -O /sfagent/sftrace-agent.tar.gz\nhttps://github.com/snappyflow/apm-agent/releases/download/latest/sftrace-agent.tar.gz && cd /sfagent && tar -xvzf sftrace-agent.tar.gz && java -javaagent:/sfagent/sftrace/java/sftrace-java-agent.jar -jar <your_jar_name>\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note:"),"\nSome EC2 task definitions may be running on host containers that don\u2019t recoginise the wget command in such case, add below lines in the above  command, apt update && apt -y upgrade.\nAdd the following Environment Variables:-"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"SFTRACE_PROJECT_NAME <project_name>\nSFTRACE_APP_NAME <app_name>\nSFTRACE_SERVICE_NAME <service_name>\nSFTRACE_PROFILE_KEY <profile_key>\n")),(0,i.kt)("p",null,"The below environment variables are only applicable for springmvc and optional."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'ELASTIC_APM_DISABLE_INSTRUMENTATIONS spring-mvc\nELASTIC_APM_USE_PATH_AS_TRANSACTION_NAME "true"\n')),(0,i.kt)("h3",{id:"create-the-cluster"},"Create the Cluster"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"In the Navigation pane, select Clusters and click on Create Cluster"),(0,i.kt)("li",{parentName:"ul"},"Select the template as per your requirement"),(0,i.kt)("li",{parentName:"ul"},"Give a Cluster name and give instance, networking Configurations IAM role as per your task requirements")),(0,i.kt)("h3",{id:"create-the-service"},"Create the Service"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Click on the Cluster Name you created in the step2"),(0,i.kt)("li",{parentName:"ul"},"Click on Create , Select the Launch type matching to your task definition.  Select the Task Definition Name and Version in the Drop down matching to the task definition you created in step 1"),(0,i.kt)("li",{parentName:"ul"},"Give a Service Name and select other requirements as per your task compatibility"),(0,i.kt)("li",{parentName:"ul"},"Click on next step and start your service")))}f.isMDXComponent=!0},6010:function(e,t,a){function n(e){var t,a,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(r&&(r+=" "),r+=a);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function r(){for(var e,t,a=0,r="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(r&&(r+=" "),r+=t);return r}a.d(t,{Z:function(){return r}})}}]);