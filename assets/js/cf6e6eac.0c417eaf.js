"use strict";(self.webpackChunksf_documentation=self.webpackChunksf_documentation||[]).push([[7629],{3905:function(e,n,t){t.d(n,{Zo:function(){return g},kt:function(){return u}});var a=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=a.createContext({}),p=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},g=function(e){var n=p(e.components);return a.createElement(l.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,g=i(e,["components","mdxType","originalType","parentName"]),c=p(t),u=o,d=c["".concat(l,".").concat(u)]||c[u]||m[u]||r;return t?a.createElement(d,s(s({ref:n},g),{},{components:t})):a.createElement(d,s({ref:n},g))}));function u(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,s=new Array(r);s[0]=c;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var p=2;p<r;p++)s[p]=t[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},2077:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return g},default:function(){return c}});var a=t(7462),o=t(3366),r=(t(7294),t(3905)),s=["components"],i={},l="Postgres on Kubernetes",p={unversionedId:"Integrations/postgres/postgres_kubernetes",id:"Integrations/postgres/postgres_kubernetes",isDocsHomePage:!1,title:"Postgres on Kubernetes",description:"Overview",source:"@site/docs/Integrations/postgres/postgres_kubernetes.md",sourceDirName:"Integrations/postgres",slug:"/Integrations/postgres/postgres_kubernetes",permalink:"/docs/Integrations/postgres/postgres_kubernetes",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/Integrations/postgres/postgres_kubernetes.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Postgres on Instances",permalink:"/docs/Integrations/postgres/postgres_instances"},next:{title:"mySQL",permalink:"/docs/Integrations/mysql/overview"}},g=[{value:"Overview",id:"overview",children:[]},{value:"PostgreSQL monitoring with sfKubeAgent",id:"postgresql-monitoring-with-sfkubeagent",children:[{value:"Viewing data and dashboards",id:"viewing-data-and-dashboards",children:[]}]},{value:"PostgreSQL monitoring with Prometheus",id:"postgresql-monitoring-with-prometheus",children:[{value:"Pre-requisites",id:"pre-requisites",children:[]},{value:"Configurations",id:"configurations",children:[]},{value:"Viewing data and dashboards",id:"viewing-data-and-dashboards-1",children:[]}]},{value:"PostgreSQL Pod Centralized Logging",id:"postgresql-pod-centralized-logging",children:[]}],m={toc:g};function c(e){var n=e.components,t=(0,o.Z)(e,s);return(0,r.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"postgres-on-kubernetes"},"Postgres on Kubernetes"),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"PostgreSQL\u202frunning\u202fin\u202fKubernetes\u202fcan\u202fbe\u202fmonitored\u202fin\u202fSnappyFlow\u202fusing\u202ftwo\u202fapproaches: "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/integrations/kubernetes/sfkubeagent_installation"},"sfKubeAgent"),"\u202fas\u202fsidecar\u202fcontainer"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/integrations/kubernetes/prometheus_exporter"},"Prometheus\u202fexporter")," ")),(0,r.kt)("h2",{id:"postgresql-monitoring-with-sfkubeagent"},"PostgreSQL monitoring with sfKubeAgent"),(0,r.kt)("p",null,"sfKubeAgent is run as a sidecar with the configMap shown below. The config map instantiates plugins for metrics, general logs and slow queries. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1 \nkind: ConfigMap \nmetadata: \n  name: postgres-configmap \ndata: \n  config.yaml: |- \n    key: <profile_key> \n    metrics: \n      plugins: \n      - name: postgres \n        enabled: true \n        interval: 60 \n        config: \n          documentsTypes:    #user can enable all or only needed documents \n            - databaseDetails \n            - indexDetails8 \n            - queryDetails \n            - serverDetails \n            - tableDetails \n          host: 127.0.0.1 \n          user: <userName> \n          password: <password> \n          port: 5432 \n    logging: \n      plugins: \n      - name: postgres-general \n        enabled: true \n        config: \n          log_level: \n            - error \n            - warning \n            - info \n            - log \n          log_path: /var/log/postgres/*.log \n      - name: postgres-slowquery \n        enabled: true \n        config: \n          log_path: /var/log/postgres/*.log \n")),(0,r.kt)("p",null,"The example of PostgreSQL pod with Postgres and sfKubeAgent containers is shown below: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'kind: Pod \napiVersion: v1 \nmetadata: \n name: postgres-pod \n labels: \n  snappyflow/appname: <app_name> \n  snappyflow/projectname: <project_name> \nspec: \n containers: \n - name: postgres-container \n   securityContext: {} \n   image: "postgres:9.6" \n   args: ["-c", "log_statement=all", "-c", "log_min_messages=warning", "-c", "log_min_duration_statement=200", "-c","log_directory=/var/log/postgres","-c","log_line_prefix=< %m > ","-c","log_filename=postgresql-%Y-%m-%d_%H%M%S.log","-c","log_truncate_on_rotation=off","-c","log_rotation_age=1d","-c","logging_collector=on"] \n   imagePullPolicy: IfNotPresent \n   ports: \n   - name: tcp \n     containerPort: 5432 \n     protocol: TCP \n   env: \n   - name: POSTGRES_PASSWORD \n     value: <password> \n   - name: POSTGRES_USER \n     value: <userName> \n   volumeMounts: \n     - name: varlog \n       mountPath: /var/log/postgres \n   # Snappyflow\'s sfkubeagent container \n - name: sfagent-container \n   image: snappyflowml/sfagent:latest \n   imagePullPolicy: Always \n   command: \n     - /app/sfagent \n     - -enable-console-log \n   env: \n     - name: APP_NAME \n       value: <app_name> \n     - name: PROJECT_NAME \n       value: <project_name> \n   volumeMounts: \n     - name: configmap-postgres \n       mountPath: /opt/sfagent/config.yaml \n       subPath: config.yaml \n     - name: varlog \n       mountPath: /var/log/postgres \n volumes: \n - name: configmap-postgres \n   configMap: \n     name: postgres-configmap \n - name: varlog \n   emptyDir: {} \n')),(0,r.kt)("h3",{id:"viewing-data-and-dashboards"},"Viewing data and dashboards"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Data generated by plugin can be viewed in \u201cbrowse data\u201d page inside the respective application under ",(0,r.kt)("inlineCode",{parentName:"li"},"plugin=postgres")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"documentType=")," ",(0,r.kt)("inlineCode",{parentName:"li"},"serverDetails"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"databaseDetails"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"tableDetails"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"IndexDetails")," "),(0,r.kt)("li",{parentName:"ul"},"Dashboard for this data can be instantiated by Importing dashboard template ",(0,r.kt)("inlineCode",{parentName:"li"},"PostgreSQL")," to the application dashboard ")),(0,r.kt)("h2",{id:"postgresql-monitoring-with-prometheus"},"PostgreSQL monitoring with Prometheus"),(0,r.kt)("p",null,"Refer to ",(0,r.kt)("a",{parentName:"p",href:"/docs/integrations/kubernetes/prometheus_exporter"},"Prometheus Exporter")," overview to understand how SnappyFlow monitors using Prometheus exporters. "),(0,r.kt)("h3",{id:"pre-requisites"},"Pre-requisites"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Prometheus exporter is deployed as a side-car in the application container and the exporter port is accessible to sfPod ")),(0,r.kt)("h3",{id:"configurations"},"Configurations"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'kind: Pod \napiVersion: v1 \nmetadata: \n name: postgres-pod \n labels: \n  snappyflow/appname: <app_name> \n  snappyflow/projectname: <project_name> \n  snappyflow/component: postgresql \nspec: \n containers: \n - name: postgres-exporter \n   image: bitnami/postgres-exporter \n   ports: \n   - name: pg-exporter \n     containerPort: 9187 \n   command: ["/bin/sh", "-c"] \n   args: [\'DATA_SOURCE_NAME="postgresql://<user_name>:<password>@localhost:5432/<dbname>?sslmode=disable" /opt/bitnami/postgres-exporter/bin/postgres_exporter\'] \n - name: postgres-container \n   securityContext: {} \n   image: "postgres:9.6" \n   args: ["-c", "log_statement=all", "-c", "log_min_messages=warning", "-c", "log_min_duration_statement=200", "-c","log_line_prefix=< %m > "] \n   imagePullPolicy: IfNotPresent \n   ports: \n   - name: tcp \n     containerPort: 5432 \n     protocol: TCP \n   env: \n   - name: POSTGRES_PASSWORD \n     value: <password> \n   - name: POSTGRES_USER \n     value: <user_name> \n   - name: POSTGRES_DB \n     value: <dbname> \n')),(0,r.kt)("h3",{id:"viewing-data-and-dashboards-1"},"Viewing data and dashboards"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Data generated by plugin can be viewed in ",(0,r.kt)("inlineCode",{parentName:"li"},"browse data")," page inside the respective application under ",(0,r.kt)("inlineCode",{parentName:"li"},"plugin=kube-prom-postgres")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"documentType= psql")," "),(0,r.kt)("li",{parentName:"ul"},"Dashboard for this data can be instantiated by Importing dashboard template ",(0,r.kt)("inlineCode",{parentName:"li"},"PostgreSQL_Prom")," to the application dashboard ")),(0,r.kt)("h2",{id:"postgresql-pod-centralized-logging"},"PostgreSQL Pod Centralized Logging"),(0,r.kt)("p",null,"Pls refer to ",(0,r.kt)("a",{parentName:"p",href:"/docs/integrations/kubernetes/centralized_logging_of_application_pod_logs"},"Centralized Logging Overview")," to understand how SnappyFlow implements centralized logging Centralized logging approach requires the application pod to stream logs to stdout, which is achieved by running a busy box container as shown below. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"kind: Pod\napiVersion: v1\nmetadata:\n  name: postgres-pod\n  labels:\n    snappyflow/appname: <app_name>\n    snappyflow/projectname: <project_name>\n    snappyflow/component: postgresql\nspec:\n  containers:\n    - name: postgres-exporter\n      image: bitnami/postgres-exporter\n      ports:\n        - name: pg-exporter\n          containerPort: 9187\n      command:\n        - /bin/sh\n        - '-c'\n      args:\n        - >-\n          DATA_SOURCE_NAME=\"postgresql://<user_name>:<password>@localhost:5432/<dbname>?sslmode=disable\"\n          /opt/bitnami/postgres-exporter/bin/postgres_exporter\n    - name: postgres-container\n      securityContext: {}\n      image: 'postgres:9.6'\n      args:\n        - '-c'\n        - log_statement=all\n        - '-c'\n        - log_min_messages=warning\n        - '-c'\n        - log_min_duration_statement=200\n        - '-c'\n        - 'log_line_prefix=< %m > '\n        - '-c'\n        - log_directory=/var/log/postgres\n        - '-c'\n        - log_filename=postgresql.log\n        - '-c'\n        - logging_collector=on\n      imagePullPolicy: IfNotPresent\n      ports:\n        - name: tcp\n          containerPort: 5432\n          protocol: TCP\n      env:\n        - name: POSTGRES_PASSWORD\n          value: <password>\n        - name: POSTGRES_USER\n          value: <user_name>\n        - name: POSTGRES_DB\n          value: <dbname>\n      volumeMounts:\n        - name: postgres-log\n          mountPath: /var/log/postgres\n    - name: postgres-general\n      image: busybox\n      command:\n        - /bin/sh\n        - '-c'\n      args:\n        - tail -n+1 -f /var/log/postgres/*.log\n      volumeMounts:\n        - name: postgres-log\n          mountPath: /var/log/postgres\n  volumes:\n    - name: postgres-log\n      emptyDir: {}\n")))}c.isMDXComponent=!0}}]);