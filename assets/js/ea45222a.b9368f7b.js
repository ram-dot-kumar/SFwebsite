"use strict";(self.webpackChunksf_documentation=self.webpackChunksf_documentation||[]).push([[1318],{3905:function(e,t,a){a.d(t,{Zo:function(){return s},kt:function(){return k}});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=r.createContext({}),m=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},s=function(e){var t=m(e.components);return r.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=m(a),k=n,c=u["".concat(i,".").concat(k)]||u[k]||d[k]||o;return a?r.createElement(c,p(p({ref:t},s),{},{components:a})):r.createElement(c,p({ref:t},s))}));function k(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,p=new Array(o);p[0]=u;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:n,p[1]=l;for(var m=2;m<o;m++)p[m]=a[m];return r.createElement.apply(null,p)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},237:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return i},metadata:function(){return m},toc:function(){return s},default:function(){return u}});var r=a(7462),n=a(3366),o=(a(7294),a(3905)),p=["components"],l={},i="Prometheus Exporter",m={unversionedId:"Integrations/kubernetes/prometheus_exporter",id:"Integrations/kubernetes/prometheus_exporter",isDocsHomePage:!1,title:"Prometheus Exporter",description:"Overview",source:"@site/docs/Integrations/kubernetes/prometheus_exporter.md",sourceDirName:"Integrations/kubernetes",slug:"/Integrations/kubernetes/prometheus_exporter",permalink:"/docs/Integrations/kubernetes/prometheus_exporter",editUrl:"https://github.com/ram-dot-kumar/SFwebsite.git/docs/Integrations/kubernetes/prometheus_exporter.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Monitoring Application Pods with sfKubeAgent",permalink:"/docs/Integrations/kubernetes/sfkubeagent_installation"},next:{title:"Centralized Logging of Application Pod Logs",permalink:"/docs/Integrations/kubernetes/centralized_logging_of_application_pod_logs"}},s=[{value:"Overview",id:"overview",children:[]},{value:"Monitoring pods using Prometheus exporter",id:"monitoring-pods-using-prometheus-exporter",children:[{value:"Pre-requisites",id:"pre-requisites",children:[]},{value:"Enable access to Prometheus exporter",id:"enable-access-to-prometheus-exporter",children:[]},{value:"Tag applications with Labels",id:"tag-applications-with-labels",children:[]}]},{value:"List of Prometheus exporters supported by sfPod",id:"list-of-prometheus-exporters-supported-by-sfpod",children:[]}],d={toc:s};function u(e){var t=e.components,a=(0,n.Z)(e,p);return(0,o.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"prometheus-exporter"},"Prometheus Exporter"),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"sfPod\u202fscans all pods in the namespaces that it has access to for specific labels ",(0,o.kt)("strong",{parentName:"p"},"snappyflow/projectname"),"\u202fand\u202f",(0,o.kt)("strong",{parentName:"p"},"snappyflow/appname")," ")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"If a pod is tagged with SnappyFlow labels, sfPod then looks for standard Prometheus annotations "),(0,o.kt)("table",{parentName:"li"},(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Label"),(0,o.kt)("th",{parentName:"tr",align:null},"Value"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"prometheus.io/scrape"),(0,o.kt)("td",{parentName:"tr",align:null},"If true, the pod is considered for Prometheus scraping, else it is excluded.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"prometheus.io/port"),(0,o.kt)("td",{parentName:"tr",align:null},"This label defines a list of ports that sfPod will scan. sfPod will also apply the appropriate parser. If this label is empty, sfPod scans all exposed container ports. Default value is empty.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"prometheus.io/path"),(0,o.kt)("td",{parentName:"tr",align:null},"Define the path as /metrics. Empty by default."))))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"If\u202fsfPod\u202ffinds data on these ports, the data is scanned, parsed and sent to\u202fSnappyFlow\u202f"))),(0,o.kt)("h2",{id:"monitoring-pods-using-prometheus-exporter"},"Monitoring pods using Prometheus exporter"),(0,o.kt)("h3",{id:"pre-requisites"},"Pre-requisites"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Ensure sfPod is running and has access privileges to namespace in which application pod is running\u202f "),(0,o.kt)("li",{parentName:"ol"},"Ensure\u202fsfPod\u202fhas access to ports exposing Prometheus exporters\u202f ")),(0,o.kt)("h3",{id:"enable-access-to-prometheus-exporter"},"Enable access to Prometheus exporter"),(0,o.kt)("p",null,"Add Prometheus exporter container as a sidecar in the application pod. Pls see example below for Prometheus exporter pod. sfPod needs to access the Prometheus exporter on the exported port, which should be exposed in pod\u2019s service "),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/snappyflow/website-artefacts/blob/master/yaml_deployments/prometheus/postgresql/statefullset.yaml"},"PostgreSQL Statefulset YAML")," "),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/snappyflow/website-artefacts/blob/master/yaml_deployments/prometheus/postgresql/service.yaml"},"PostgreSQL Service YAML")," "),(0,o.kt)("p",null,"After setup of Prometheus exporter container, please verify connectivity using:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-properties"},"curl service_ip: 9187 \ncurl service_ip: 5432 \n")),(0,o.kt)("h3",{id:"tag-applications-with-labels"},"Tag applications with Labels"),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Applying labels are key to monitoring in SnappyFLow. Endpoints are organized in a hierarchy as per the labels defined."))),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Add labels snappyflow/projectName\u202fand\u202fsnappyflow/appName\u202f"),(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"if the application pods are already running, use the following kubectl commands to tag your application pods with the appropriate tags:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"kubectl label pods <pod_name> snappyflow/projectname=<project_name> --namespace<appnamespace>\nkubectl label pods <pod_name> snappyflow/appname=<app_name> --namespace<appnamespace>\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"To automatically apply the right labels for the new pods which get created due to various reasons such as upgrades, restarts etc, apply labels to pod templates. If you are using helm chart, a best practice is to define labels in values.yaml and use the label parameters in pod template section of Deployment, StatefulSet, DaemonSet or other Kubernetes controller."))))),(0,o.kt)("h2",{id:"list-of-prometheus-exporters-supported-by-sfpod"},"List of Prometheus exporters supported by sfPod"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Plugins"),(0,o.kt)("th",{parentName:"tr",align:null},"Exporter Links"),(0,o.kt)("th",{parentName:"tr",align:null},"service_discovery_regex"),(0,o.kt)("th",{parentName:"tr",align:null},"Docker image"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"apache"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/Lusitaniae/apache_exporter/blob/master/README.md"},"Exporter Link")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},'["apache_accesses_total","apache_+"]')),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://hub.docker.com/r/lusotycoon/apache-exporter/"},"Docker image"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"elasticsearch"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/prometheus-community/elasticsearch_exporter/blob/master/README.md"},"Exporter Link")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},'["elasticsearch_+"]')),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://hub.docker.com/r/justwatch/elasticsearch_exporter"},"Docker image"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"haproxy"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://bitnami.com/stack/jmx-exporter"},"Exporter Link")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},'["haproxy_+"]')),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://hub.docker.com/r/bitnami/jmx-exporter/"},"Docker image"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"jmx"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/prometheus/jmx_exporter/blob/master/README.md"},"Exporter Link")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},'["jmx_exporter_build_info","jmx_+","java_lang_+"]')),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://hub.docker.com/r/bitnami/jmx-exporter/"},"Docker image"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"kafka-connect-j9"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/prometheus/jmx_exporter/blob/master/README.md"},"Exporter Link")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},'["kafka_connect+","java_lang_+","java_lang_memorymanager_valid_j9+"]')),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://hub.docker.com/r/bitnami/jmx-exporter/"},"Docker image"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"kafka-connect"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/prometheus/jmx_exporter/blob/master/README.md"},"Exporter Link")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},'["kafka_connect+","java_lang_+","java_lang_garbagecollector_collectiontime_g1_young_generation"]')),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://hub.docker.com/r/bitnami/jmx-exporter/"},"Docker image"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"kafka-jmx"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/prometheus/jmx_exporter/blob/master/README.md"},"Exporter Link")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},'["kafka_server_+","kafka_network_+","java_lang_+"]')),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://hub.docker.com/r/bitnami/jmx-exporter/"},"Docker image"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"kafka-rest-j9"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/prometheus/jmx_exporter/blob/master/README.md"},"Exporter Link")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},'["kafka_rest+","java_lang_+","java_lang_memorymanager_valid_j9+"]')),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://hub.docker.com/r/bitnami/jmx-exporter/"},"Docker image"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"kafka-rest"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://hub.docker.com/r/bitnami/jmx-exporter"},"Exporter Link")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},'["kafka_rest+","java_lang_+","java_lang_garbagecollector_collectiontime_g1_young_generation"]')),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://hub.docker.com/r/bitnami/jmx-exporter/"},"Docker image"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"kafka"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://hub.docker.com/r/danielqsj/kafka-exporter/dockerfile"},"Exporter Link")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},'["kafka_topic_+"]')),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://hub.docker.com/r/bitnami/jmx-exporter/"},"Docker image"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"linux"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/prometheus/node_exporter"},"Exporter Link")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},'["node_cpu_+","node_disk_+","node_procs_+"]')),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://hub.docker.com/r/prom/node-exporter/"},"Docker image"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"mongod"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/dcu/mongodb_exporter"},"Exporter Link")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},'["mongodb_+"]')),(0,o.kt)("td",{parentName:"tr",align:null},"Docker image")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"mysql"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/prometheus/mysqld_exporter/blob/master/README.md"},"Exporter Link")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},'["mysql_global_+","mysql_version_+"]')),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://hub.docker.com/r/prom/mysqld-exporter/"},"Docker image"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"nginx"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/nginxinc/nginx-prometheus-exporter/blob/master/README.md"},"Exporter Link")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},'["nginx_+"]')),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://hub.docker.com/r/nginx/nginx-prometheus-exporter"},"Docker image"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"nodejs"),(0,o.kt)("td",{parentName:"tr",align:null},"No exporter. Using code instrumentation"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},'["nodejs_+"]')),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"postgres"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/prometheus-community/postgres_exporter/blob/master/README.md"},"Exporter Link")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},'"pg_stat_+"')),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://hub.docker.com/r/prometheuscommunity/postgres-exporter"},"Docker image"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"zookeeper-jmx"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/prometheus/jmx_exporter/blob/master/README.md"},"Exporter Link")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},'["zookeeper_+","java_lang_"]')),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://hub.docker.com/r/bitnami/jmx-exporter/"},"Docker image"))))))}u.isMDXComponent=!0}}]);