"use strict";(self.webpackChunksf_documentation=self.webpackChunksf_documentation||[]).push([[1430],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return u}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),p=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),m=p(a),u=r,h=m["".concat(o,".").concat(u)]||m[u]||c[u]||l;return a?n.createElement(h,s(s({ref:t},d),{},{components:a})):n.createElement(h,s({ref:t},d))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,s=new Array(l);s[0]=m;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var p=2;p<l;p++)s[p]=a[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},5032:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return i},contentTitle:function(){return o},metadata:function(){return p},toc:function(){return d},default:function(){return m}});var n=a(7462),r=a(3366),l=(a(7294),a(3905)),s=["components"],i={sidebar_label:"Log Overview Search"},o="Log Onboarding",p={unversionedId:"Log_management/log_overview",id:"Log_management/log_overview",isDocsHomePage:!1,title:"Log Onboarding",description:"SnappyFlow uses Elasticsearch as its datastore for logs, metrics and traces.  SnappyFlow has built a search language which is simple and easy to use  for analyzing logs , extracting metadata from unstructured logs and enhancing the logs with extracted metadata.",source:"@site/docs/Log_management/log_overview.md",sourceDirName:"Log_management",slug:"/Log_management/log_overview",permalink:"/docs/Log_management/log_overview",editUrl:"https://github.com/ram-dot-kumar/SFwebsite.git/docs/Log_management/log_overview.md",tags:[],version:"current",frontMatter:{sidebar_label:"Log Overview Search"},sidebar:"tutorialSidebar",previous:{title:"Coming Soon!",permalink:"/docs/Integrations/java/java_profiler_memory"},next:{title:"Feature Extraction",permalink:"/docs/Log_management/feature_extraction"}},d=[{value:"Document format in SnappyFlow",id:"document-format-in-snappyflow",children:[]},{value:"Types of search",id:"types-of-search",children:[]},{value:"SnappyFlow Query language operator support",id:"snappyflow-query-language-operator-support",children:[]},{value:"Examples",id:"examples",children:[{value:"Basic Search",id:"basic-search",children:[]},{value:"Logical Operations and wild card usage",id:"logical-operations-and-wild-card-usage",children:[]},{value:"Regex Patterns",id:"regex-patterns",children:[]}]}],c={toc:d};function m(e){var t=e.components,a=(0,r.Z)(e,s);return(0,l.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"log-onboarding"},"Log Onboarding"),(0,l.kt)("p",null,"SnappyFlow uses Elasticsearch as its datastore for logs, metrics and traces.  SnappyFlow has built a search language which is simple and easy to use  for analyzing logs , extracting metadata from unstructured logs and enhancing the logs with extracted metadata."),(0,l.kt)("h2",{id:"document-format-in-snappyflow"},"Document format in SnappyFlow"),(0,l.kt)("p",null,"SnappyFlow stores all information in JSON format to the datastore. A sample log document is shown below:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'"node": "ip-172-31-14-187",\n"_plugin": "linux-syslog",\n"ident": "sshd",\n"_tag_Name": "demo-presto-worker-0",\n"level": "info",\n"@timestamp": "2020-10-15T18:35:13.000000000Z",\n"time": "1602786913000",\n"pid": "14153",\n"_documentType": "syslog",\n"host": "ip-172-31-14-187",\n"_tag_uuid": "0aa46894f321",\n"_tag_projectName": "presto",\n"file": "/var/log/auth.log",\n"signatureKey": "8276318930445510094",\n"_tag_appName": "presto",\n"message": "Invalid user ofandino from 152.32.180.15 port 56712"\n')),(0,l.kt)("h2",{id:"types-of-search"},"Types of search"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Searching across all fields and values"),(0,l.kt)("li",{parentName:"ul"},"Range queries for numeric data"),(0,l.kt)("li",{parentName:"ul"},"Wildcard search"),(0,l.kt)("li",{parentName:"ul"},"Regular expression search"),(0,l.kt)("li",{parentName:"ul"},"Logical operations like AND, OR, NOT to build complex searches")),(0,l.kt)("p",null,"SnappyFlow datastore, processes fields which contain string values  differently. The string is stored as a list of tokens. Each token is a  unique word in the string. For example if the field \u201cmessage\u201d has a  value"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},"\u201cuser:admin CMD=rm \u2013rf temp PWD=/home/admin PATH=var.log.secure\u201d.\n")),(0,l.kt)("p",null,"This string is converted as a list of tokens as follows:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},"\u201cuser:admin CMD rm rf temp PWD home admin PATH var.log.secure\u201d.\n")),(0,l.kt)("p",null,"Note that in the above tokenization, character  \u201c:\u201d and character \u201c.\u201d Are treated differently. They are considered as  alpha-numeric, for the purpose of tokenization and are retained, if they are preceded and succeeded by alpha-numeric characters between the \u201c:\u201d."),(0,l.kt)("p",null," A search of string user\\:admin will be successful in the above document. Note that \u201c:\u201d was escaped using \u201c\\\u201d in the search string, as \u201c:\u201d is considered a reserved character. See below for more on reserved characters."),(0,l.kt)("p",null," Also note, that a search string temp home will also match the above string, as the words temp and home are present in the above string, even though they do not appear in consecutive positions. A phrase search \u201ctemp home\u201d (the search string is encapsulated between \u201c), will match only if temp and home appear together in the string and are in the same order."),(0,l.kt)("h2",{id:"snappyflow-query-language-operator-support"},"SnappyFlow Query language operator support"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Operator"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Example"),(0,l.kt)("th",{parentName:"tr",align:null},"Explanation"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},":"),(0,l.kt)("td",{parentName:"tr",align:null},"Search for a value within a field"),(0,l.kt)("td",{parentName:"tr",align:null},"level:info"),(0,l.kt)("td",{parentName:"tr",align:null},"Get all documents where field \u201clevel\u201d has value \u201cinfo\u201d")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"&&"),(0,l.kt)("td",{parentName:"tr",align:null},"AND operation"),(0,l.kt)("td",{parentName:"tr",align:null},"info && ident:sshd"),(0,l.kt)("td",{parentName:"tr",align:null},"Get all documents where value \u201cinfo\u201d is present in any of the fields AND \u201cident\u201d field has value \u201csshd\u201d")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"|","|"),(0,l.kt)("td",{parentName:"tr",align:null},"OR operation"),(0,l.kt)("td",{parentName:"tr",align:null},"level:warn ","|","|"," level:error"),(0,l.kt)("td",{parentName:"tr",align:null},"Get all documents where \u201clevel\u201d field has value \u201cwarn\u201d or \u201clevel\u201d field has value \u201cerror\u201d")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},'""'),(0,l.kt)("td",{parentName:"tr",align:null},"Phrase searches"),(0,l.kt)("td",{parentName:"tr",align:null},'message: "Invalid'),(0,l.kt)("td",{parentName:"tr",align:null},"Get all documents where \u201cmessage\u201d field has a phrase \u201cInvalid user\u201d. Note: searches are case insensitive. \u201cInvalid user\u201d will match only if token \u201cInvalid\u201d and token \u201cuser\u201d are present in the string in the same order.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},">"),(0,l.kt)("td",{parentName:"tr",align:null},"Greater than"),(0,l.kt)("td",{parentName:"tr",align:null},"pid:>14153"),(0,l.kt)("td",{parentName:"tr",align:null},"Get all documents where field \u201cpid\u201d has values greater than 14153")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"<"),(0,l.kt)("td",{parentName:"tr",align:null},"Lesser than"),(0,l.kt)("td",{parentName:"tr",align:null},"pid:<14153"),(0,l.kt)("td",{parentName:"tr",align:null},"Get all documents where field \u201cpid\u201d has values less than 14153")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},">="),(0,l.kt)("td",{parentName:"tr",align:null},"Greater than or equal"),(0,l.kt)("td",{parentName:"tr",align:null},"pid:>=14153"),(0,l.kt)("td",{parentName:"tr",align:null},"Get all documents where field \u201cpid\u201d has values greater than or equal to 14153")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"<="),(0,l.kt)("td",{parentName:"tr",align:null},"Lesser than or equal"),(0,l.kt)("td",{parentName:"tr",align:null},"pid:<14153"),(0,l.kt)("td",{parentName:"tr",align:null},"Get all documents where field \u201cpid\u201d has values less than or equal to 14153")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"()"),(0,l.kt)("td",{parentName:"tr",align:null},"Grouping"),(0,l.kt)("td",{parentName:"tr",align:null},"(pid:(>14000 && <=15000) ","|","|"," level:error) && ident:sshd"),(0,l.kt)("td",{parentName:"tr",align:null},"Get all documents where field \u201cpid\u201d is in the range 14000 \u2013 14999 OR field \u201clevel\u201d has value \u201cerror\u201d. From the above search get only those documents where field \u201cident\u201d has value \u201csshd\u201d")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"NOT operation"),(0,l.kt)("td",{parentName:"tr",align:null},"level:-(info ","|","|"," warn)"),(0,l.kt)("td",{parentName:"tr",align:null},"Get all documents where field \u201clevel\u201d does not contain value \u201cinfo\u201d or \u201cwarn\u201d")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"?"),(0,l.kt)("td",{parentName:"tr",align:null},"Single character wildcard"),(0,l.kt)("td",{parentName:"tr",align:null},"_plugin: sys???"),(0,l.kt)("td",{parentName:"tr",align:null},"Get all documents where the field plugin has a word sys followed by 3 characters.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"*"),(0,l.kt)("td",{parentName:"tr",align:null},"Zero or more characters wildcard"),(0,l.kt)("td",{parentName:"tr",align:null},"message: ",(0,l.kt)("em",{parentName:"td"},"var")),(0,l.kt)("td",{parentName:"tr",align:null},"Get all documents where \u201cmessage\u201d field contains a string var preceded by any characters and succeeded by any characters. For example in the message \u201cuser:admin CMD=rm \u2013rf temp PWD=/home/admin PATH=var.log.secure\u201d, ",(0,l.kt)("em",{parentName:"td"},"var")," matches var.log.secure")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"//"),(0,l.kt)("td",{parentName:"tr",align:null},"Pattern searches"),(0,l.kt)("td",{parentName:"tr",align:null},"message: /","[0-9]","+",".","[0-9]","+",".","[0-9]","+",".","[0-9]","+/"),(0,l.kt)("td",{parentName:"tr",align:null},'Get all documents which contain an IP address pattern. In the sample log  document with the message field containing "Invalid user ofandino from  152.32.180.15 port 56712" , the regex pattern will match 152.32.180.15.')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\\ "),(0,l.kt)("td",{parentName:"tr",align:null},"Escape sequence"),(0,l.kt)("td",{parentName:"tr",align:null},"message: sudo\\:linux"),(0,l.kt)("td",{parentName:"tr",align:null},"Some of the special characters need to be escaped if they are part of a search string. Special characters to be escaped are: & ","|",' " = : ( ) ',"[ ]"," - ? * / \\ ")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"exists"),":"),(0,l.kt)("td",{parentName:"tr",align:null},"Field name search"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"exists"),":pid"),(0,l.kt)("td",{parentName:"tr",align:null},"Get all logs")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Note:")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Field names are case sensitive i.e. latency: 20 and LATENCY: 20 will give different results.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Field values are case insensitive i.e. name: KEVIN and name: kevin will give the same results.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Applying range queries i.e. key: >=200 etc. to text fields give  unpredictable results. Make sure to apply such queries on numeric fields only. Range queries cannot be used without specifying the field name  i.e. >=20 is not a valid query.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},'Wildcards cannot be used in phrase searches i.e. "*error" or "er??r" is not allowed.')),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Using a wildcard at the beginning of a word e.g. *ing is particularly  heavy, because all terms in the index need to be examined, just in case  they match.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Regex patterns must be  enclosed in forward slashes. Any string present between a pair of  forward slashes will be treated as a Java regex pattern. Search Regex  does not support all regex meta-characters. "),(0,l.kt)("p",{parentName:"li"},"For details, "),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"https://www.elastic.co/guide/en/elasticsearch/reference/current/regexp-syntax.html"},"https://www.elastic.co/guide/en/elasticsearch/reference/current/regexp-syntax.html"),"\nPatterns are anchored by default i.e. they must match an entire Elasticsearch token."))),(0,l.kt)("h2",{id:"examples"},"Examples"),(0,l.kt)("h3",{id:"basic-search"},"Basic Search"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Datastore has following documents")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{ "pid": 3245, "upstream_response_time": 10, "URL": "https://www.elastic.co/guide/en/elasticsearch/reference"}\n{"pid": 2445, "upstream_response_time": 4, "URL": "https://www.elastic.co/guide/en/machine-learning" }\n{"pid": 3246, "upstream_response_time": 2, "URL": "https://docker-hub/pricing"}\n{"message": "docker image built", "pid": 1000}\n')),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Search Query & Logic"),(0,l.kt)("th",{parentName:"tr",align:null},"Result"),(0,l.kt)("th",{parentName:"tr",align:null},"Results explained"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"pid: 3?4?"),(0,l.kt)("td",{parentName:"tr",align:null},"Matches documents 1, 3."),(0,l.kt)("td",{parentName:"tr",align:null},"Get all documents with pid field value matching the pattern 3?4? (? matches any character)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"upstream_response_time:>5 && elasticsearch"),(0,l.kt)("td",{parentName:"tr",align:null},"Matches document 1"),(0,l.kt)("td",{parentName:"tr",align:null},"Get all documents where field upstream_response_time key has a value  greater than 5 AND the string elasticsearch is present in any of the  fields.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"elastic && machine","-","learning"),(0,l.kt)("td",{parentName:"tr",align:null},"No documents are matched."),(0,l.kt)("td",{parentName:"tr",align:null},"Get all documents where strings elastic AND machine-learning are present in any of the fields.  Though string elastic is present in documents 1, 2; it does not appear as a  standalone term. This is because, special character \u201c.\u201d is handled  differently in tokenization and is tokenized as ",(0,l.kt)("a",{parentName:"td",href:"http://www.elastic.co."},"www.elastic.co.")," If the search query is modified as ",(0,l.kt)("a",{parentName:"td",href:"http://www.elastic.co"},"www.elastic.co")," && machine-learning, document 2 will match the search. Alternatively, search elasstic && machine-learning, will also return the same result")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"https docker hub pricing"),(0,l.kt)("td",{parentName:"tr",align:null},"Matches documents 3 and 4."),(0,l.kt)("td",{parentName:"tr",align:null},"Get all documents which contain the words https OR docker OR hub or pricing in any order. Matches documents 3 and 4. Document 3 has all the terms and Document 4  has the term docker. If the intent is to search for a document with all  the terms in the same order, then the search should be modified to  \u201chttps docker hub pricing\u201d. Note the phrase is enclosed in double  quotes. This search will match only document 3. Also note the words http docker hub pricing are connected with special characters in document 3. But the search is on the tokenized version of the document and hence  all special characters are removed.")))),(0,l.kt)("h3",{id:"logical-operations-and-wild-card-usage"},"Logical Operations and wild card usage"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Datastore contains following documents")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{"message": "Disconnected from 118.24.197.243 port 35662 [preauth]"}\n{"message": "Unregistered Authentication Agent for unix-session:7  (system bus name :1.89, object path  /org/freedesktop/PolicyKit1/AuthenticationAgent, locale en_IN)  (disconnected from bus)"}\n{"responseCode": "400", "responseMessage": Null}\n{"message": "request received from IP1 and redirected to IP2", "responseCode": "200"}\n{"message": "ValueError(\u2026)"}\n{"message": "ArithmeticException(\u2026)"}\n')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Examples")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Search Query:"),'\n"disconnected from"\nGet all documents that contain the terms disconnected and from. The terms should appear together in the same order in the document.'),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Results and explanation:"),"\nMatches documents 1 and 2."),(0,l.kt)("p",null,"Notice that in document 1, the word disconnected appears as Disconnected. Since search is always case-insensitive, document 1 is also matched."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Search Query:"),"\nmessage: (disconnected && from && port)\nGet all documents that contain the words disconnected and from and port"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Results and explanation:"),"\nMatches document 1"),(0,l.kt)("p",null,"Note: words need not appear together and they may appear in any order."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Search Query:"),"\nmessage: (disconnect* port)\nGet all documents that contain word starting with disconnect or a word port."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Results and explanation:"),"\nMatches documents 1 and 2."),(0,l.kt)("p",null,"This is interpreted asmessage: (disconnect",(0,l.kt)("em",{parentName:"p"}," || port)\ndisconnect")," matches all terms which start with the word disconnect and have zero or more characters after it i.e. disconnecting, disconnected and disconnect"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Search Query:"),"\nmessage: (disconnected && -port)\nGet all documents that has term disconnected and does not have the term port"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Results and explanation:"),"\nMatches document 2"),(0,l.kt)("p",null,"-(responseCode: 400 ||\nmessage: (",(0,l.kt)("em",{parentName:"p"},"exception")," || ",(0,l.kt)("em",{parentName:"p"},"error"),"))\n2 This is a complete negation of the above search i.e. NOT operator is applied to above search"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Search Query:"),"\nresponseCode: 400 || message: (",(0,l.kt)("em",{parentName:"p"},"exception")," || ",(0,l.kt)("em",{parentName:"p"},"error"),")"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Results and explanation:"),"\nMatches 3, 5 and 6"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"exception")," matches any word that contains the string exception and similarly ",(0,l.kt)("em",{parentName:"p"},"error"),".\nThe term ArithmeticException(...) matches ",(0,l.kt)("em",{parentName:"p"},"exception")," and ValueError(...) matches ",(0,l.kt)("em",{parentName:"p"},"error")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Search Query:"),"\n-(responseCode: 400 || message: (",(0,l.kt)("em",{parentName:"p"},"exception")," || ",(0,l.kt)("em",{parentName:"p"},"error"),"))\nThis search is a total negation of the previous search."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Results and explanation:"),"\nMatches document 4"),(0,l.kt)("h3",{id:"regex-patterns"},"Regex Patterns"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Datastore contains following documents")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{"message": "No identification string for 118.24.197.243"}\n{"message": "No identification string for 119:25.200.255"}\n{"message": "Received bad request from 119:25.200.255"}\n{"message": "pam_unix(sshd:auth): authentication failure; logname= uid=0 euid=0 tty=ssh ruser= rhost=203.195.182.3"}\n{"message": "Authentication failure for user admin"}\n')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Examples")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Search Query:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"message: /[0-9]+.[0-9]+.[0-9]+.[0-9]+/\n")),(0,l.kt)("p",null,"Get all documents where message field contains an IP address pattern.\n",(0,l.kt)("strong",{parentName:"p"},"Results and explanation:")),(0,l.kt)("p",null,"Matches documents 1,2,3,4"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Search Query:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"(message: /119.25.[0-9]+.[0-9]+/)\n")),(0,l.kt)("p",null,"Get all documents where message field contains an IP Address pattern with a network address 119.25"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Results and explanation:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"Matches document 2 and 3\nauth* && failure &&-/[0-9]+.[0-9]+.[0-9]+.[0-9]+/ 5\nAny key\u2019s value needs to consist of auth*, failure but not an IP i.e. [0-9]+.[0-9]+.[0-9]+.[0- 9]+\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Search Query:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"auth* && failure && -/[0-9]+.[0-9]+.[0-9]+.[0-9]+/\n")),(0,l.kt)("p",null,"Get all documents where an IP address pattern is NOT present in any of the fields and contains a word starting with auth in any of the fields AND contains the word failure in any of the fields."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Results and explanation:")),(0,l.kt)("p",null,"Matches documents 5"))}m.isMDXComponent=!0}}]);