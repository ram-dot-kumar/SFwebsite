"use strict";(self.webpackChunksf_documentation=self.webpackChunksf_documentation||[]).push([[2246],{3905:function(e,n,t){t.d(n,{Zo:function(){return m},kt:function(){return d}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),l=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},m=function(e){var n=l(e.components);return a.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),c=l(t),d=r,g=c["".concat(p,".").concat(d)]||c[d]||u[d]||o;return t?a.createElement(g,i(i({ref:n},m),{},{components:t})):a.createElement(g,i({ref:n},m))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=c;var s={};for(var p in n)hasOwnProperty.call(n,p)&&(s[p]=n[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=t[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},3292:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return l},toc:function(){return m},default:function(){return c}});var a=t(7462),r=t(3366),o=(t(7294),t(3905)),i=["components"],s={},p="Monitoring JAVA on Kubernetes",l={unversionedId:"Integrations/java/java_kubernetes",id:"Integrations/java/java_kubernetes",isDocsHomePage:!1,title:"Monitoring JAVA on Kubernetes",description:"Overview",source:"@site/docs/Integrations/java/java_kubernetes.md",sourceDirName:"Integrations/java",slug:"/Integrations/java/java_kubernetes",permalink:"/docs/Integrations/java/java_kubernetes",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/Integrations/java/java_kubernetes.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Monitoring JAVA on Instances",permalink:"/docs/Integrations/java/java_instance"},next:{title:"Overview",permalink:"/docs/Integrations/nginx/overview"}},m=[{value:"Overview",id:"overview",children:[]},{value:"Java monitoring with sfKubeAgent",id:"java-monitoring-with-sfkubeagent",children:[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Configurations",id:"configurations",children:[]},{value:"Viewing data and dashboards",id:"viewing-data-and-dashboards",children:[]},{value:"Troubleshooting",id:"troubleshooting",children:[]}]},{value:"JVM Monitoring with Prometheus exporter",id:"jvm-monitoring-with-prometheus-exporter",children:[{value:"Pre-requisites",id:"pre-requisites",children:[]},{value:"Configurations",id:"configurations-1",children:[]},{value:"Viewing data and dashboards",id:"viewing-data-and-dashboards-1",children:[]},{value:"Troubleshooting",id:"troubleshooting-1",children:[]}]}],u={toc:m};function c(e){var n=e.components,t=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"monitoring-java-on-kubernetes"},"Monitoring JAVA on Kubernetes"),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null," Java\u202fapplications\u202frunning\u202fin\u202fKubernetes\u202fcan\u202fbe\u202fmonitored\u202fin\u202fSnappyFlow\u202fusing\u202ftwo\u202fapproaches: "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/integrations/kubernetes/sfkubeagent_installation"},"sfKubeAgent"),"\u202fas\u202fsidecar\u202fcontainer. "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/integrations/kubernetes/prometheus_exporter"},"Prometheus\u202fexporter")," ")),(0,o.kt)("h2",{id:"java-monitoring-with-sfkubeagent"},"Java monitoring with sfKubeAgent"),(0,o.kt)("p",null,"In this option, the Java application should be run with Jolokia agent and sfKubeAgent running as a sidecar container and fetches metrics via Jolokia port. Refer to ",(0,o.kt)("a",{parentName:"p",href:"/docs/integrations/kubernetes/sfkubeagent_installation"},"sfKubeAgent")," Overview "),(0,o.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Copy Jolokia JAR into docker image ")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Run the java application with Jolokia JAR in docker image:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"-javaagent:/<path_jolokia_jar>/jolokia-jvm-<version>-agent.jar  \n")))),(0,o.kt)("h3",{id:"configurations"},"Configurations"),(0,o.kt)("p",null,"Run sfKubeAgent with JVMJolokia plugin, which is specified using the config map shown below: "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1 \nkind: ConfigMap \nmetadata: \nname: jvm-configmap \ndata: \nconfig.yaml: |- \nkey: <profile_key> \nmetrics: \nplugins: \nname: jvmjolokia \nenabled: true \ninterval: 300 config: \nip: 127.0.0.1 \nprotocol: http \nport: <userDefinedJolokiaPort> \ncontext: jolokia \nmonitorDeadlocks: false \ndeadLockMonitoringInterval: 300 \n")),(0,o.kt)("p",null,"The example illustrates instantiating sfKubeAgent with jvm-configmap. sfAKubeAgent talks to the Java application via userDefinedJolokiaPort (this example used 8778) "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"kind: Pod \napiVersion: v1 \nmetadata: \nname: my-first-pod-1 \nlabels: \nsnappyflow/appname: <app_name> \nsnappyflow/projectname: <project_name> \nspec:\ncontainers: \nname: java-container \nimage: <docker_id>/<docker_image>:<tag> ports: \nname: jolokiaport \ncontainerPort: <userDefinedJolokiaPort> \nSnappyflow's sfkubeagent container \nname: java-sfagent \nimage: snappyflowml/sfagent:latest \nimagePullPolicy: Always command: \n/app/sfagent \n-enable-console-log \nenv: \nname: APP_NAME \nvalue: <app_name> \nname: PROJECT_NAME \nvalue: <project_name> \nvolumeMounts: \nname: configmap-jvm \nmountPath: /opt/sfagent/config.yaml \nsubPath: config.yaml \nvolumes: \nname: configmap-jvm configMap: \nname: jvm-configmap \n")),(0,o.kt)("h3",{id:"viewing-data-and-dashboards"},"Viewing data and dashboards"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Data generated by plugin can be viewed in \u201cbrowse data\u201d page inside the respective application under plugin=jvm_jolokia and documentType=jvm "),(0,o.kt)("li",{parentName:"ul"},"Dashboard for this data can be instantiated by Importing dashboard template \u201cJVM\u201d to the application dashboard ")),(0,o.kt)("h3",{id:"troubleshooting"},"Troubleshooting"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Check if the Jolokia port is accessible "),(0,o.kt)("p",{parentName:"li"},"From inside the application container, run a curl command to the userDefinedJolokiaPort."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"curl http://localhost:<userDefinedJolokiaPort> \n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Check the logs in sfKubeAgent container for any errors"))),(0,o.kt)("h2",{id:"jvm-monitoring-with-prometheus-exporter"},"JVM Monitoring with Prometheus exporter"),(0,o.kt)("p",null,"Refer to ",(0,o.kt)("a",{parentName:"p",href:"/docs/integrations/kubernetes/prometheus_exporter"},"Prometheus Exporte"),"r Overview. Prometheus exporter is deployed as a sidecar container in the application pod and connects to the JMX target exposed by the application to scrape the metrics. sfPod polls Prometheus exporter to scrape the metrics. "),(0,o.kt)("h3",{id:"pre-requisites"},"Pre-requisites"),(0,o.kt)("p",null,"sfPod can access Prometheus exporter at Service IP: ",(0,o.kt)("inlineCode",{parentName:"p"},"userDefinedPrometheusPort")),(0,o.kt)("h3",{id:"configurations-1"},"Configurations"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Run Java application with JMX options: "),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"-Dcom.sun.management.jmxremote -Dcom.sun.management.jmxremote.port= <userDefinedJMXPort> -Dcom.sun.management.jmxremote.authenticate=false - Dcom.sun.management.jmxremote.ssl=false \n"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Start the Prometheus exporter with"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"java -jar jmx_prometheus_httpserver.jar <userDefinedPrometheusPort> <exporterConfigFile>\n")),(0,o.kt)("p",{parentName:"li"},"Configurations are passed using config map:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1 \nkind: ConfigMap \nmetadata: \nlabels: \nsnappyflow/appname: <app_name> \nsnappyflow/projectname: <project_name> \ndata: \njmx-config.yaml: | \n--- \njmxUrl: service:jmx:rmi:///jndi/rmi://127.0.0.1:<userDefinedJMXPort>/jmxrmi \nssl: false \nrules: \n- pattern: '.*' \n"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Prometheus exporter interfaces to JMX via ",(0,o.kt)("inlineCode",{parentName:"p"},"userDefinedJMXPort"),". Example below uses 555S as the port.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Prometheus exporter exposes ",(0,o.kt)("inlineCode",{parentName:"p"},"userDefinedPrometheusPort")," for scraping. Example uses 5556 as the port ")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Pod definition YAML that illustrates the configuration for Java application and exporter "),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'kind: Pod \napiVersion: v1 \nmetadata: \n name: my-first-pod \nlabels: \nsnappyflow/appname: <app_name> \nsnappyflow/projectname: <project_name> \nspec: \ncontainers: \nname: app-container \nimage: <docker_id>/<docker_image>:<tag> command: \nsh \n-c \n-x \njava -jar -Dcom.sun.management.jmxremote - Dcom.sun.management.jmxremote.port=<userDefinedJMXPort> - Dcom.sun.management.jmxremote.authenticate=false - Dcom.sun.management.jmxremote.ssl=false <application_jar> \nname: "exporter-container" \nimage: "bitnami/jmx-exporter:latest" imagePullPolicy: \ncommand: \nsh \n-c \n-x \njava -jar jmx_prometheus_httpserver.jar <userDefinedPrometheusPort> /tmp/jmx-config.yaml \nports: \nname: exporter-port \ncontainerPort: <userDefinedPrometheusPort> \nvolumeMounts: \nname: configmap-jmx \nmountPath: /tmp \nvolumes: \nname: configmap-jmx configMap: \nname: jmx-configmap \n')))),(0,o.kt)("h3",{id:"viewing-data-and-dashboards-1"},"Viewing data and dashboards"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Data generated by plugin can be viewed in \u201cbrowse data\u201d page inside the respective application under ",(0,o.kt)("inlineCode",{parentName:"li"},"plugin=\u2018kube-prom-jmx\u2018")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"documentType=\u2018jmxStats\u2019")),(0,o.kt)("li",{parentName:"ul"},"Dashboard for this data can be instantiated by Importing dashboard template \u201cJVM\u201d to the application dashboard. ")),(0,o.kt)("h3",{id:"troubleshooting-1"},"Troubleshooting"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Check if the JMX port is accessible .From inside the application container, run a curl command to the ",(0,o.kt)("inlineCode",{parentName:"p"},"userDefinedJMXPort"),"."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"curl http://localhost:<userDefinedJMXPort> \n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Check if metrics are getting scraped. From inside the exporter container, run a curl command to the ",(0,o.kt)("inlineCode",{parentName:"p"},"userDefinedPrometheusPort")),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"curl  http://localhost:<userDefinedPrometheusPort>/metrics \n")))))}c.isMDXComponent=!0}}]);