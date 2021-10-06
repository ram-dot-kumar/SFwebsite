"use strict";(self.webpackChunksf_documentation=self.webpackChunksf_documentation||[]).push([[7308],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),f=o,m=d["".concat(s,".").concat(f)]||d[f]||u[f]||i;return n?r.createElement(m,a(a({ref:t},c),{},{components:n})):r.createElement(m,a({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3482:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return c},default:function(){return d}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],l={},s="Kubernetes Monitoring with sfPod",p={unversionedId:"Integrations/kubernetes/kubernetes_monitoring_with_sfPod",id:"Integrations/kubernetes/kubernetes_monitoring_with_sfPod",isDocsHomePage:!1,title:"Kubernetes Monitoring with sfPod",description:"sfPod overview",source:"@site/docs/Integrations/kubernetes/kubernetes_monitoring_with_sfPod.md",sourceDirName:"Integrations/kubernetes",slug:"/Integrations/kubernetes/kubernetes_monitoring_with_sfPod",permalink:"/docs/Integrations/kubernetes/kubernetes_monitoring_with_sfPod",editUrl:"https://github.com/ram-dot-kumar/SFwebsite.git/docs/Integrations/kubernetes/kubernetes_monitoring_with_sfPod.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/docs/Integrations/kubernetes/overview"},next:{title:"Monitoring Application Pods with sfKubeAgent",permalink:"/docs/Integrations/kubernetes/sfkubeagent_installation"}},c=[{value:"sfPod overview",id:"sfpod-overview",children:[]},{value:"sfPod installation",id:"sfpod-installation",children:[{value:"Step 1: Create a Cloud profile",id:"step-1-create-a-cloud-profile",children:[]},{value:"Step 2: Add Snappyflow helm chart",id:"step-2-add-snappyflow-helm-chart",children:[]},{value:"Restricted sfPod Configuration",id:"restricted-sfpod-configuration",children:[]}]}],u={toc:c};function d(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"kubernetes-monitoring-with-sfpod"},"Kubernetes Monitoring with sfPod"),(0,i.kt)("h2",{id:"sfpod-overview"},"sfPod overview"),(0,i.kt)("p",null,"sfPod is a collector that is installed on Kubernetes and runs as a DaemonSet on each worker node. It monitors the following elements of a Kubernetes environment: "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Kubernetes metrics "),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Cluster metrics "),(0,i.kt)("li",{parentName:"ul"},"Host metrics "),(0,i.kt)("li",{parentName:"ul"},"Pod metrics "),(0,i.kt)("li",{parentName:"ul"},"Container metrics "),(0,i.kt)("li",{parentName:"ul"},"Events "),(0,i.kt)("li",{parentName:"ul"},"Kubernetes services health\u2013 Kubelet, Kube-Proxy, API Server, Controller Manager, Core DNS "))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Kubernetes cluster logs ")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Poll Prometheus Exporters running on application pods ")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Pod Application Logs "))),(0,i.kt)("h2",{id:"sfpod-installation"},"sfPod installation"),(0,i.kt)("p",null,"Below is short video explaining the sfPOD installation steps"),(0,i.kt)("iframe",{src:"https://www.youtube.com/embed/Q4BiVR2nOn4?rel=0",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:"true",webkitallowfullscreen:"true",mozallowfullscreen:"true",allowtransparency:"true"}),(0,i.kt)("h3",{id:"step-1-create-a-cloud-profile"},"Step 1: Create a Cloud profile"),(0,i.kt)("p",null,"Create a cloud profile in SnappyFlow (or use an existing profile) and copy the profile key to use it while installing the sfPod in your cluster. "),(0,i.kt)("h3",{id:"step-2-add-snappyflow-helm-chart"},"Step 2: Add Snappyflow helm chart"),(0,i.kt)("p",null,"Login to any node that has network connectivity to Kubernetes master node and run the following commands "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"helm repo add snappyflow https://snappyflow.github.io/helm-charts \nhelm repo list \nhelm repo update \n")),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("inlineCode",{parentName:"p"},"<my-cluster-name>"),"\u202fReplace with any name, Cluster is discovered by this name on the Snappyflow. "),(0,i.kt)("p",{parentName:"div"},(0,i.kt)("inlineCode",{parentName:"p"},"<profile key>"),"\u202fReplace with key copied from SnappyFlow. "))),(0,i.kt)("h3",{id:"restricted-sfpod-configuration"},"Restricted sfPod Configuration"),(0,i.kt)("p",null,"By default, sfPod is installed in a full configuration mode where it monitors all the elements. For a restricted configuration i.e. monitor only cluster logs or cluster metrics, user can use the flags outlined below: "),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"--set config.cluster_monitoring=true/false")),(0,i.kt)("p",null,"If true monitoring of cluster metrics and cluster logs is enabled. If this field is made false, cluster monitoring is switched off and only Prometheus polling and Centralized Application Log Monitoring are enabled "),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"--set config.node_agent.drop_cluster_logs=true =>")),(0,i.kt)("p",null,"If true, monitoring of Kubernetes cluster logs is disabled. "),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"--set config.<doc_type>= false")),(0,i.kt)("p",null,"sfPod organizes data collected by plugin/documentType. Example of some of the document types that are collected by sfPod include \u2013 pod, node, container, cluster_stats etc. User can disable collection of a documentType using this configuration. The detailed list of document types can be reviewed in Browse Data page of a Kubernetes cluster"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"--set config.app_view")),(0,i.kt)("p",null,"By default sfPod sends pod and container metrics of tagged pods (I,e pods that have projectName and appName tags) to both Cluster Index and Project Index leading to duplication of metric data. This feature is enabled to enhance correlation of Application and Infra data. This feature can be switched-off if the flag= true."))}d.isMDXComponent=!0}}]);