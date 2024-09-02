(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9195],{551:function(e,t,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/tech-specs/workflow/preface",function(){return o(6210)}])},6210:function(e,t,o){"use strict";o.r(t),o.d(t,{__toc:function(){return l},default:function(){return u}});var r=o(5893),n=o(2673),a=o(2169),c=o(2069);o(9488);var i=o(2643),s={src:"/studio-pro/_next/static/media/workflow-ast-diagram.7050fb6c.png",height:776,width:1264,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAAAAABd+vKJAAAAL0lEQVR42g3JyREAIAgDwPRfrAzeCBLd74I+pjMJV0YJJkptcjUIO2bi3fA79xJ5bFwm2d4sXxcAAAAASUVORK5CYII=",blurWidth:8,blurHeight:5},d={src:"/studio-pro/_next/static/media/workflow-editor.05ac434c.gif",height:412,width:1600,blurWidth:0,blurHeight:0},p=o(8757);let l=[{depth:2,value:"Workflow Engine",id:"workflow-engine"},{depth:2,value:"Workflow Schema",id:"workflow-schema"},{depth:2,value:"Compiler Backend",id:"compiler-backend"},{depth:2,value:"Workflow Editor",id:"workflow-editor"},{depth:2,value:"JSON Schema Renderer",id:"json-schema-renderer"}];function h(e){let t=Object.assign({h2:"h2",p:"p",a:"a",img:"img",code:"code"},(0,i.a)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"workflow-engine",children:"Workflow Engine"}),"\n",(0,r.jsx)(p.G,{chart:'flowchart\n  subgraph "OpenAPI Specification"\n    v20(Swagger v2.0) --upgrades--> emended[["OpenAPI v3.1 (emended)"]]\n    v30(OpenAPI v3.0) --upgrades--> emended\n    v31(OpenAPI v3.1) --emends--> emended\n  end\n  subgraph "Ecosystem"\n    emended --normalizes--> migration[["Migration Schema"]]\n    migration --downgrades--> lfc{{"LLM Function Calling Schema"}}\n    migration --metadata--> compiler{{"Workflow Compiler"}}\n    emended --sales--> marketplace{{"API Marketplace"}}\n  end\n  subgraph "Artificial Intelligence"\n    lfc --executor--> meta[("Meta LLM (A.I. Chatbot)")]\n    compiler --provider--> meta\n    marketplace -.supplier.-> meta\n    meta --storyline--> swl(["<b><u>SWL Language</b></u>"])\n    swl --compiles--> program[/"<b><u>Re-usable Workflow Program</b></u>"\\]\n    meta -.private.- prompt((("System Prompt")))\n    meta -.protocol.- websocket((("WebSocket RPC")))\n  end'}),"\n",(0,r.jsx)(t.p,{children:"Workflow engine for re-usable program generation."}),"\n",(0,r.jsxs)(t.p,{children:['"Wrtn Studio Pro" provides an "Workflow Engine" which can build a re-usable program function. The workflow can be generated by two ways. The first is analyzing the user\'s utternance and LLM function call histories in the ',(0,r.jsx)(t.a,{href:"/tech-specs/meta/preface",children:"Meta LLM (A.I. Chatbot)"})," and constructs the workflow by ",(0,r.jsx)(t.a,{href:"/tech-specs/swl/preface",children:"SWL Language"}),". The second way is using the ",(0,r.jsx)(t.a,{href:"/tech-specs/workflow/editor",children:"Workflow Editor"})," manually which can build the workflow with visual diagrams. Of course, generating workflow by the first way and updating it by the second way is also possible."]}),"\n",(0,r.jsx)(t.p,{children:"When you've succeded to build a workflow program (function), you can execute it in two ways. The first way is to executing the workflow program manually by configuring the parameter values by yourself. The other way is to registering the to a scheduler, so that the workflow program can be executed automatically at the scheduled time by the system."}),"\n",(0,r.jsxs)(t.p,{children:['For reference, the workflow program also belongs to the ecosystem of the "Wrtn Studio Pro". The workflow program can be re-executed by the ',(0,r.jsx)(t.a,{href:"/tech-specs/meta/preface",children:"Meta LLM (A.I. Chatbot)"})," with LLM function calling. If you enroll your workflow program to the ",(0,r.jsx)(t.a,{href:"/tech-specs/marketplace/preface",children:"API Marketplace"}),", the workflow program can be re-used by the many other users."]}),"\n",(0,r.jsx)(t.h2,{id:"workflow-schema",children:"Workflow Schema"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"AST Diagram",placeholder:"blur",src:s})}),"\n",(0,r.jsx)(t.p,{children:"Compiler + Repository."}),"\n",(0,r.jsx)(t.p,{children:'"Workflow Engine" is a type of compiler which generates a re-usable program function. And the workflow document must be archived into somewhere repository of some account. Therefore, workflow schemas are categorized into three parts; compiler, repository and belonged account.'}),"\n",(0,r.jsx)(t.p,{children:"At first, the compiler category schemas are represented by AST (Abstract Syntax Tree). The AST is a tree representation of the abstract syntactic structure of source code written in a programming language. The AST is used in the compiler backend to generate the executable program function."}),"\n",(0,r.jsx)(t.p,{children:"At second, account and repository categorized schemas are similar to the Github account/repository structures. The account schema is literally an account innformation of user or enterprise, and the repository schema is a storage for the workflow documents including commit histories for version control."}),"\n",(0,r.jsx)(t.h2,{id:"compiler-backend",children:"Compiler Backend"}),"\n",(0,r.jsx)(t.p,{children:"Build executable program from workflow document."}),"\n",(0,r.jsxs)(t.p,{children:["When you've built an workflow document by manually or ",(0,r.jsx)(t.a,{href:"/tech-specs/meta/preface",children:"Meta LLM (A.I. Chatbot)"}),', compiler backend of "Workflow Engine" transforms the workflow document into an executable program function. The compiler backend is a kind of interpreter which reads the workflow document and generates the program function.']}),"\n",(0,r.jsxs)(t.p,{children:["The result of the compilation is a TypeScript/JavaScript source code, and it is mounted on an ",(0,r.jsx)(t.code,{children:"Worker"})," instance. When you (or scheduler) call the workflow program function, it would be called by the RPC (Remote Procedure Call) protocol."]}),"\n",(0,r.jsxs)(t.p,{children:["If you've published the workflow program to the ",(0,r.jsx)(t.a,{href:"/tech-specs/marketplace/preface",children:"API Marketplace"}),", the workflow program would be wrapped into an API endpoint of ",(0,r.jsx)(t.a,{href:"/tech-specs/openapi/preface",children:"OpenAPI specification"}),". Therefore, the workflow program can be called by the HTTP protocol as well."]}),"\n",(0,r.jsx)(t.h2,{id:"workflow-editor",children:"Workflow Editor"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"Workflow Editor",src:d})}),"\n",(0,r.jsx)(t.p,{children:'"Workflow Engine" is a type of visual compiler.'}),"\n",(0,r.jsx)(t.h2,{id:"json-schema-renderer",children:"JSON Schema Renderer"}),"\n",(0,r.jsx)(t.p,{children:"UI components based on JSON schema."})]})}let m={MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:t}=Object.assign({},(0,i.a)(),e.components);return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)},pageOpts:{filePath:"pages/tech-specs/workflow/preface.mdx",route:"/tech-specs/workflow/preface",timestamp:1725301188e3,pageMap:[{kind:"Meta",data:{index:{title:"Project Outline",type:"page",hidden:!0,display:"hidden"},docs:{title:"\uD83D\uDCD6 Guide Documents",type:"page"},"tech-specs":{title:"\uD83D\uDEE0️ Technical Specifications",type:"page"}}},{kind:"Folder",name:"docs",route:"/docs",children:[{kind:"Meta",data:{index:"\uD83D\uDE4B\uD83C\uDFFB‍♂️ Introduction","-- features":{type:"separator",title:"\uD83D\uDCD6 Features"},membership:"Membership",meta:"Meta LLM (A.I. Chat)",marketplace:"API Marketplace",workflow:"Workflow",repository:"Repository","-- appendix":{type:"separator",title:"\uD83D\uDD17 Appendix"}}},{kind:"MdxPage",name:"index",route:"/docs"},{kind:"Folder",name:"marketplace",route:"/docs/marketplace",children:[{kind:"Meta",data:{concepts:"Market Concepts",purchase:"How to Purchase",application:"Application Creator",seller:"Participate as a Seller",community:"Market Community"}},{kind:"MdxPage",name:"application",route:"/docs/marketplace/application"},{kind:"MdxPage",name:"community",route:"/docs/marketplace/community"},{kind:"MdxPage",name:"concepts",route:"/docs/marketplace/concepts"},{kind:"MdxPage",name:"purchase",route:"/docs/marketplace/purchase"},{kind:"MdxPage",name:"seller",route:"/docs/marketplace/seller"}]},{kind:"Folder",name:"membership",route:"/docs/membership",children:[{kind:"Meta",data:{join:"Membership Joining",account:"Personal Account",enterprise:"Enterprise Accont",seller:"Marketplace Seller"}},{kind:"MdxPage",name:"account",route:"/docs/membership/account"},{kind:"MdxPage",name:"enterprise",route:"/docs/membership/enterprise"},{kind:"MdxPage",name:"join",route:"/docs/membership/join"},{kind:"MdxPage",name:"seller",route:"/docs/membership/seller"}]},{kind:"Folder",name:"repository",route:"/docs/repository",children:[{kind:"Meta",data:{concepts:"Repository Concepts",bucket:"Repository File Tree",release:"Repository Release",settings:"Repository Settings"}},{kind:"MdxPage",name:"bucket",route:"/docs/repository/bucket"},{kind:"MdxPage",name:"concepts",route:"/docs/repository/concepts"},{kind:"MdxPage",name:"release",route:"/docs/repository/release"},{kind:"MdxPage",name:"settings",route:"/docs/repository/settings"}]},{kind:"Folder",name:"workflow",route:"/docs/workflow",children:[{kind:"Meta",data:{concepts:"Workflow Concepts",editor:"Workflow Editor",execution:"Workflow Execution",examples:"Learn from Examples"}},{kind:"MdxPage",name:"concepts",route:"/docs/workflow/concepts"},{kind:"MdxPage",name:"editor",route:"/docs/workflow/editor"},{kind:"MdxPage",name:"examples",route:"/docs/workflow/examples"},{kind:"MdxPage",name:"execution",route:"/docs/workflow/execution"}]}]},{kind:"Folder",name:"tech-specs",route:"/tech-specs",children:[{kind:"Meta",data:{index:"Outline",openapi:"OpenAPI Specification",meta:"Meta LLM (A.I. Chatbot)",marketplace:"API Marketplace",workflow:"Workflow Engine",swl:"SWL Language",appendix:"Appendix"}},{kind:"Folder",name:"appendix",route:"/tech-specs/appendix",children:[{kind:"Meta",data:{api:{title:"⇲ API Documents",href:"/studio-pro/api/",newWindow:!0},swagger:{title:"⇲ Swagger UI",href:"/studio-pro/swagger/",newWindow:!0}}}]},{kind:"MdxPage",name:"index",route:"/tech-specs"},{kind:"Folder",name:"marketplace",route:"/tech-specs/marketplace",children:[{kind:"Meta",data:{preface:"Preface",schema:"Marketplace Schema",price:"Pricing Model",application:"Application Creator",examples:"Example Projects"}},{kind:"MdxPage",name:"application",route:"/tech-specs/marketplace/application"},{kind:"MdxPage",name:"examples",route:"/tech-specs/marketplace/examples"},{kind:"MdxPage",name:"preface",route:"/tech-specs/marketplace/preface"},{kind:"MdxPage",name:"price",route:"/tech-specs/marketplace/price"},{kind:"MdxPage",name:"schema",route:"/tech-specs/marketplace/schema"}]},{kind:"Folder",name:"meta",route:"/tech-specs/meta",children:[{kind:"Meta",data:{preface:"Preface",migrate:"Migration Schema",schema:"LLM Function Schema",websocket:"WebSocket RPC",execution:"Function Call Execution"}},{kind:"MdxPage",name:"execution",route:"/tech-specs/meta/execution"},{kind:"MdxPage",name:"migrate",route:"/tech-specs/meta/migrate"},{kind:"MdxPage",name:"preface",route:"/tech-specs/meta/preface"},{kind:"MdxPage",name:"schema",route:"/tech-specs/meta/schema"},{kind:"MdxPage",name:"websocket",route:"/tech-specs/meta/websocket"}]},{kind:"Folder",name:"openapi",route:"/tech-specs/openapi",children:[{kind:"Meta",data:{preface:"Preface",json:"JSON Schema",document:"Document Schema",plugin:"Plugin Properties",convert:"How to convert"}},{kind:"MdxPage",name:"convert",route:"/tech-specs/openapi/convert"},{kind:"MdxPage",name:"document",route:"/tech-specs/openapi/document"},{kind:"MdxPage",name:"json",route:"/tech-specs/openapi/json"},{kind:"MdxPage",name:"plugin",route:"/tech-specs/openapi/plugin"},{kind:"MdxPage",name:"preface",route:"/tech-specs/openapi/preface"}]},{kind:"Folder",name:"swl",route:"/tech-specs/swl",children:[{kind:"Meta",data:{preface:"Preface"}},{kind:"MdxPage",name:"preface",route:"/tech-specs/swl/preface"}]},{kind:"Folder",name:"workflow",route:"/tech-specs/workflow",children:[{kind:"Meta",data:{preface:"Preface",schema:"Workflow Schema",backend:"Compiler Backend",editor:"Workflow Editor",inspector:"JSON Schema Renderer"}},{kind:"MdxPage",name:"backend",route:"/tech-specs/workflow/backend"},{kind:"MdxPage",name:"editor",route:"/tech-specs/workflow/editor"},{kind:"MdxPage",name:"inspector",route:"/tech-specs/workflow/inspector"},{kind:"MdxPage",name:"preface",route:"/tech-specs/workflow/preface"},{kind:"MdxPage",name:"schema",route:"/tech-specs/workflow/schema"}]}]}],flexsearch:{codeblocks:!0},title:"Preface",headings:l},pageNextRoute:"/tech-specs/workflow/preface",nextraLayout:a.ZP,themeConfig:c.Z};var u=(0,n.j)(m)},2069:function(e,t,o){"use strict";var r=o(5893);o(7294),t.Z={logo:()=>(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("img",{src:"/studio-pro/favicon/android-chrome-180x180.png",width:32,height:32}),(0,r.jsx)("span",{style:{fontWeight:"bold",fontSize:"1.2rem",paddingLeft:10,paddingRight:10},children:"Wrtn Technologies"}),(0,r.jsx)("span",{children:"Studio Pro Documents"})]}),footer:{text:()=>(0,r.jsxs)("span",{children:["Made by"," ",(0,r.jsx)("a",{href:"https://wrtn.ai",target:"_blank",style:{color:"blue"},children:(0,r.jsx)("u",{children:" Wrtn Technologies "})})]})},docsRepositoryBase:"https://github.com/wrtnio/studio-pro",useNextSeoProps:()=>({defaultTitle:"Studio Documents",titleTemplate:"Studio Documents - %s",additionalLinkTags:[{rel:"apple-touch-icon",sizes:"180x180",href:"/favicon/apple-touch-icon.png"},{rel:"manifest",href:"/favicon/site.webmanifest"},...[16,32].map(e=>({rel:"icon",type:"image/png",sizes:"".concat(e,"x").concat(e),href:"/favicon/favicon-".concat(e,"x").concat(e,".png")}))],additionalMetaTags:[{property:"og:image",content:"https://wrtn.io/wp-content/themes/wrtn-ko/images/ogimage.jpg"},{property:"og:type",content:"website"},{property:"og:title",content:"Wrtn Technologies Studio Pro Documents"},{property:"og:description",content:"Wrtn Technologies Studio Pro Documents"},{property:"og:site_name",content:"Wrtn Technologies Studio Pro Documents"},{property:"og:url",content:"https://wrtn.ai/studio"},{name:"twitter:card",content:"summary"},{name:"twitter:image",content:"https://wrtn.io/wp-content/themes/wrtn-ko/images/ogimage.jpg"},{name:"twitter:title",content:"Wrtn Technologies Studio Pro Documents"},{name:"twitter:description",content:"Wrtn Technologies Studio Pro Documents"}]})}},5789:function(){}},function(e){e.O(0,[5083,7942,9856,2888,9774,179],function(){return e(e.s=551)}),_N_E=e.O()}]);