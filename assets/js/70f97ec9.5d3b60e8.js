"use strict";(self.webpackChunksf_documentation=self.webpackChunksf_documentation||[]).push([[4530],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return g}});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(a),g=i,u=d["".concat(p,".").concat(g)]||d[g]||m[g]||r;return a?n.createElement(u,o(o({ref:t},c),{},{components:a})):n.createElement(u,o({ref:t},c))}));function g(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<r;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},626:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return c},default:function(){return d}});var n=a(7462),i=a(3366),r=(a(7294),a(3905)),o=["components"],l={},p="Tracing C",s={unversionedId:"Tracing/csharp",id:"Tracing/csharp",isDocsHomePage:!1,title:"Tracing C",description:"Applications",source:"@site/docs/Tracing/csharp.md",sourceDirName:"Tracing",slug:"/Tracing/csharp",permalink:"/docs/Tracing/csharp",editUrl:"https://github.com/ram-dot-kumar/SFwebsite.git/docs/Tracing/csharp.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Tracing node.js applications",permalink:"/docs/Tracing/nodejs"},next:{title:"Go",permalink:"/docs/Tracing/go"}},c=[{value:"Available Platforms",id:"available-platforms",children:[]},{value:"ASP.NET Core Application",id:"aspnet-core-application",children:[{value:"Supported Web frameworks",id:"supported-web-frameworks",children:[]},{value:"Prerequisite",id:"prerequisite",children:[]},{value:"Steps to configure application",id:"steps-to-configure-application",children:[]}]},{value:".NET Framework Application",id:"net-framework-application",children:[{value:"Supported Web frameworks",id:"supported-web-frameworks-1",children:[]},{value:"Prerequisite",id:"prerequisite-1",children:[]},{value:"Steps to configure Application",id:"steps-to-configure-application-1",children:[]}]}],m={toc:c};function d(e){var t=e.components,a=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"tracing-c-applications"},"Tracing C# Applications"),(0,r.kt)("h2",{id:"available-platforms"},"Available Platforms"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"csharp#aspnet-core-application"},(0,r.kt)("strong",{parentName:"a"},"ASP.NET Core Application"))),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"csharp#net-framework-application"},(0,r.kt)("strong",{parentName:"a"},".NET Framework Application"))),(0,r.kt)("h2",{id:"aspnet-core-application"},"ASP.NET Core Application"),(0,r.kt)("h3",{id:"supported-web-frameworks"},"Supported Web frameworks"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Framework")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Supported versions")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ASP.NET Core"),(0,r.kt)("td",{parentName:"tr",align:null},".NET core 2.1, 3.1, .NET 5.0")))),(0,r.kt)("h3",{id:"prerequisite"},"Prerequisite"),(0,r.kt)("p",null,"Install the following Nuget packages"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Elastic.Apm.NetCoreAll"),(0,r.kt)("li",{parentName:"ul"},"Snappyflow.NetCoretrace.Utility")),(0,r.kt)("p",null,"These packages can be installed using Nuget package manager in Visual Studio or using .NET CLI commands given below. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"dotnet add package SnappyFlow.NetCoretrace.Utility --version 0.1.5\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"dotnet add package Elastic.Apm.NetCoreAll --version 1.12.1\n")),(0,r.kt)("h3",{id:"steps-to-configure-application"},"Steps to configure application"),(0,r.kt)("p",null,"Create ",(0,r.kt)("inlineCode",{parentName:"p"},"sftraceConfig.<env_name>.yaml")," file inside ",(0,r.kt)("strong",{parentName:"p"},"wwwroot")," directory. Copy below sftraceConfig.<env_name>.yaml content and configure it with correct profile key and tags.  Get profile key from the Manage--\x3eprofile in snappyflow portal. Create project and application(or use existing project and applicaition) using your profile. You can provide any name to service, this will be displayed in Trace Dashboard. "),(0,r.kt)("p",null,"Change ",(0,r.kt)("inlineCode",{parentName:"p"},"<env_name>")," to your current working environment. For example if your environment is Development, your file name should be ",(0,r.kt)("inlineCode",{parentName:"p"},"sftraceConfig.Development.yaml")),(0,r.kt)("h4",{id:"sftraceconfigenv_nameyaml"},"sftraceConfig.<env_name>.yaml"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"tags:\n  projectName: CHANGEME\n  appName: CHANGEME\n  serviceName: CHANGEME\nkey: CHANGEME\n")),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Development is a common environment used while developing a web application, when you are using it in Production or any custom environmnent, you can change the yaml file name."))),(0,r.kt)("h4",{id:"startupcs-file-changes"},"Startup.cs file changes"),(0,r.kt)("p",null,"ASP.NET Core application contains Startup class. It is like Global.asax in the traditional .NET application. As the name suggests, it is executed first when the application starts."),(0,r.kt)("p",null,"Below is a example Startup.cs with required code changes highlighted in blue colour."),(0,r.kt)("h4",{id:"startupcs"},"Startup.cs"),(0,r.kt)("img",{src:"/img/dotnet-startup.png"}),(0,r.kt)("p",null,"Copy the below codes in your Startup.cs file similar to the example above."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c#"},"using Elastic.Apm.NetCoreAll;\n")),(0,r.kt)("p",null,"Replace ",(0,r.kt)("inlineCode",{parentName:"p"},"CHANGEME")," in code below with your application's environment (Development/Production) and add it inside configure method."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c#"},'if (env.EnvironmentName == "CHANGEME")\n  {\n    app.UseAllElasticApm(Configuration);\n  }\n')),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"If you don't want to instrument for specific environment, add below line alone inside configure method."),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-c#"},"app.UseAllElasticApm(Configuration);\n")))),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Make sure to add ",(0,r.kt)("inlineCode",{parentName:"p"},"app.UseAllElasticApm(Configuration)")," as first line in configuration method, otherwise the agent won\u2019t be able to properly measure the timing of requests."))),(0,r.kt)("h4",{id:"programcs-file-changes"},"Program.cs file changes"),(0,r.kt)("p",null,"ASP.NET Core web application is actually a console project which starts executing from the entry point ",(0,r.kt)("inlineCode",{parentName:"p"},"public static void Main()")," in ",(0,r.kt)("inlineCode",{parentName:"p"},"Program")," class where we can create a host for the web application."),(0,r.kt)("p",null,"Below is a example Program.cs with required code changes highlighted in blue colour."),(0,r.kt)("h4",{id:"programcs"},"Program.cs"),(0,r.kt)("img",{src:"/img/dotnet-program.png"}),(0,r.kt)("p",null,"Copy the below codes in your Program.cs file similar to the example above."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c#"},"using SftraceDotNetcore;\n")),(0,r.kt)("p",null,"The below code should be added inside public static IHostBuilder ",(0,r.kt)("strong",{parentName:"p"},"CreateHostBuilder")," method in the same way how it's done in example file. Verify Example ",(0,r.kt)("a",{parentName:"p",href:"csharp#programcs"},(0,r.kt)("strong",{parentName:"a"},"Program.cs"))," to identify in which place below code should be placed."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c#"},'.ConfigureAppConfiguration((hostingContext, config) => {\n  try {\n    var env = hostingContext.HostingEnvironment;\n    string sftraceConfigfile = $"sftraceConfig.{env.EnvironmentName}.yaml";\n    config.AddInMemoryCollection(sftracedecrypt.Trace(sftraceConfigfile));\n  } catch (Exception err) {\n    Console.WriteLine("Error occurred in Snappyflow application trace" + err.Message);\n  }\n})\n')),(0,r.kt)("h2",{id:"net-framework-application"},".NET Framework Application"),(0,r.kt)("h3",{id:"supported-web-frameworks-1"},"Supported Web frameworks"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Framework")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Supported versions")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".NET Framework"),(0,r.kt)("td",{parentName:"tr",align:null},"4.6.1 and later")))),(0,r.kt)("h3",{id:"prerequisite-1"},"Prerequisite"),(0,r.kt)("p",null,"Install the following Nuget packages"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Elastic.Apm.AspNetFullFramework")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Snappyflow.NetCoretrace.Utility"))),(0,r.kt)("p",null,"These packages can be installed using Nuget package manager in Visual Studio or using .NET CLI commands given below. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"dotnet add package SnappyFlow.NetCoretrace.Utility --version 0.1.5\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"dotnet add package Elastic.Apm.AspNetFullFramework --version 1.12.1\n")),(0,r.kt)("h3",{id:"steps-to-configure-application-1"},"Steps to configure Application"),(0,r.kt)("p",null,"Create a folder ",(0,r.kt)("strong",{parentName:"p"},"wwwroot")," inside System path of application. "),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"If you don't know which is system path, you can print the code below to identify it"),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-c#"},"Directory.GetCurrentDirectory();\n")),(0,r.kt)("p",{parentName:"div"},"For Instance based application, system path will be ",(0,r.kt)("strong",{parentName:"p"},"IIS Express")," folder. Common location for IIS Express Folder in windows is C:\\Program Files (x86)\\IIS Express."))),(0,r.kt)("p",null,"Create ",(0,r.kt)("inlineCode",{parentName:"p"},"sftraceConfig.yaml")," file inside wwwroot directory and copy below sftraceConfig.yaml content. Configure it with correct profile key and tags. Get profile key from the Manage--\x3eprofile in snappyflow portal. Create project and application(or use existing project and applicaition) using your profile. You can provide any name to service, this will be displayed in Trace Dashboard."),(0,r.kt)("h4",{id:"sftraceconfigyaml"},"sftraceConfig.yaml"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"tags:\n  projectName: CHANGEME\n  appName: CHANGEME\n  serviceName: CHANGEME\nkey: CHANGEME\n")),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"}," If system path is IIS Express as above, the whole path for sftraceConfig.yaml should be C:\\Program Files (x86)\\IIS Express\\wwwroot\\ sftraceConfig.yaml."))),(0,r.kt)("p",null,"Create a new class file called ",(0,r.kt)("inlineCode",{parentName:"p"},"Sftrace_class.cs")," in location where ",(0,r.kt)("strong",{parentName:"p"},"web.config")," file is present. Copy the code below and don't forget to change ",(0,r.kt)("inlineCode",{parentName:"p"},"CHANGENAMESPACE"),". "),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Add the content below to new class file Sftrace_class.cs and don't forget to rename ",(0,r.kt)("inlineCode",{parentName:"p"},"CHANGENAMESPACE")," to your namespace."))),(0,r.kt)("h4",{id:"sftrace_classcs"},"Sftrace_class.cs"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c#"},'using System.Configuration;\nusing SftraceDotNetcore;\nnamespace CHANGENAMESPACE {\n  public class Sftrace_class {\n    public void Sftrace_method() {\n      var configFile = System.Web.Configuration.WebConfigurationManager.OpenWebConfiguration("~/");\n      var settings = configFile.AppSettings.Settings;\n      string sftraceConfigfile = $"sftraceConfig.yaml";\n      var sfdetails = sftracedecrypt.Trace(sftraceConfigfile);\n      foreach(var kvp in sfdetails) {\n        if (settings[kvp.Key] == null) {\n          settings.Add(kvp.Key, kvp.Value);\n        }\n      }\n      configFile.Save(ConfigurationSaveMode.Modified);\n    }\n  }\n}\n')),(0,r.kt)("h4",{id:"globalasaxcs-file-changes"},"Global.asax.cs file changes"),(0,r.kt)("p",null,"The Global. asax file is a special file that contains event handlers for ASP.NET application lifecycle events."),(0,r.kt)("p",null,"Below is a example Global.asax.cs with required code changes highlighted in blue colour. "),(0,r.kt)("h4",{id:"globalasaxcs"},"Global.asax.cs"),(0,r.kt)("img",{src:"/img/dotnet-global.png"}),(0,r.kt)("p",null,"Create object for Sftrace_class and call the method Sftrace_method in Global.asax.cs file. Verify Example  ",(0,r.kt)("a",{parentName:"p",href:"csharp#globalasaxcs"},(0,r.kt)("strong",{parentName:"a"},"Global.asax.cs"))," to identify in which place below code should be placed."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c#"},"Sftrace_class sftrace_obj = new Sftrace_class();\nsftrace_obj.Sftrace_method();\n")),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Make sure to add Sftrace function call as first line above other register calls."))),(0,r.kt)("h4",{id:"webconfig-file-changes"},"web.config file changes"),(0,r.kt)("p",null,"web.config file is used to manage various settings that define a website."),(0,r.kt)("p",null,"Below is a example web.config with required code changes highlighted in blue colour. "),(0,r.kt)("h4",{id:"webconfig"},"web.config"),(0,r.kt)("img",{src:"/img/dotnet-webconfig.png"}),(0,r.kt)("p",null,"Add ElasticApm module in ",(0,r.kt)("strong",{parentName:"p"},"web.config")," file. Refer Example ",(0,r.kt)("a",{parentName:"p",href:"csharp#webconfig"},(0,r.kt)("strong",{parentName:"a"},"web.config"))," ."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c#"},'<add name="ElasticApmModule" type="Elastic.Apm.AspNetFullFramework.ElasticApmModule, Elastic.Apm.AspNetFullFramework" />\n')),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"If system.webserver or modules are not already in your web.config file, you can add them also."))))}d.isMDXComponent=!0}}]);