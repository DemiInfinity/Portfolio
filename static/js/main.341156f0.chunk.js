(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{130:function(e,t,c){"use strict";c.r(t);var s=c(1),n=c.n(s),a=c(43),l=c.n(a),r=(c(50),c(8)),i=c(3),o=c.p+"static/media/coding-1841550_1920.77420f97.jpg",j=c(0);function x(){return Object(j.jsxs)("main",{children:[Object(j.jsx)("img",{src:o,alt:"Coding",className:"absolute object-cover w-full h-full"}),Object(j.jsxs)("section",{className:"relative flex justify-center min-h-screen pt-12 lg:pt-32 px-8",children:[Object(j.jsx)("h1",{className:"text-6xl text-white font bold cursive leading-normal lg:leading-snug home-name",children:"Welcome,"}),Object(j.jsx)("section",{className:"relative justify-center min-h-screen pt-8 lg:pt-32 px-8",children:Object(j.jsx)("p",{className:"text-1xl text-white cursive leading-relaxed lg:leading-snug home-name",children:" I'm a Software Developer"})})]})]})}var d=c(10),b=c(44),m=c.n(b)()({projectId:"luh1ilq1",dataset:"production"}),h=c.p+"static/media/shapes-background.dc0bd0d9.jpg",u=c(14),g=c.n(u),p=c(18),f=c.n(p),O=g()(m);function N(){var e,t=Object(s.useState)(null),c=Object(d.a)(t,2),n=c[0],a=c[1];return Object(s.useEffect)((function(){m.fetch('*[_type == "author"] {\n            name,\n            bio,\n            "authorImage": image.asset->url,\n        }').then((function(e){return a(e[0])})).catch(console.error)}),[]),n?Object(j.jsxs)("main",{className:"relative",children:[Object(j.jsx)("img",{src:h,alt:"Heading",className:"absolute w-full"}),Object(j.jsx)("div",{className:"p-10 lg:pt-48 container mx-auto relative",children:Object(j.jsxs)("section",{className:"bg-white rounded-lg shadow-2xl lg:flex p-20",children:[Object(j.jsx)("img",{src:(e=n.authorImage,O.image(e)).url(),className:"rounded w-32 h-32 lg:w-64 lg:h-64 mr-8",alt:n.name}),Object(j.jsxs)("div",{className:"text-lg flex flex-col justify-center",children:[Object(j.jsxs)("h1",{className:"cursive text-6xl text-black mb-4",children:["Hey there. I'm "," ",Object(j.jsx)("span",{className:"text-gray-500",children:n.name})]}),Object(j.jsx)("div",{className:"prose lg-prose-xl text-Black",children:Object(j.jsx)(f.a,{blocks:n.bio,projectId:"luh1ilq1",dataset:"production"})})]})]})})]}):Object(j.jsx)("div",{children:"loading..."})}var v=g()(m);function y(){var e,t=Object(s.useState)(null),c=Object(d.a)(t,2),n=c[0],a=c[1],l=Object(i.f)().slug;return Object(s.useEffect)((function(){m.fetch('*[slug.current == "'.concat(l,'"]{\n        title,\n        _id,\n        slug,\n        body,\n        mainImage{\n            asset->{\n                _id,\n                url,\n            }\n        },\n        \n        "name": author->name,\n        "authorImage":author->image,\n    }')).then((function(e){return a(e[0])})).catch(console.error)}),[l]),n?Object(j.jsx)("main",{className:"bg-gray-200 min-h-screen p-12",children:Object(j.jsxs)("article",{className:"container shadow-lg mx-auto bg-white rounded-lg",children:[Object(j.jsxs)("header",{className:"relative",children:[Object(j.jsx)("div",{className:"absolute h-full w-full flex items-center justify-center p-8",children:Object(j.jsxs)("div",{className:"bg-white bg-opacity-75 rounded p-12",children:[Object(j.jsx)("h1",{className:"cursive text-3xl lg:text-6xl mb-4",children:n.title}),Object(j.jsxs)("div",{className:"flex justify-center text-gray-800",children:[Object(j.jsx)("img",{src:(e=n.authorImage,v.image(e)).url(),alt:n.name,className:"w-10 h10 rounded-full"}),Object(j.jsx)("p",{className:"cursive flex items-center pl-2 text-2xl",children:n.name})]})]})}),Object(j.jsx)("img",{src:n.mainImage.asset.url,alt:n.title,className:"w-full -object-cover rounded-t",style:{height:"400px"}})]}),Object(j.jsx)("div",{className:"px-16 lg:px-48 py-12 lg:py-20 prose lg:prose-xl max-w-full",children:Object(j.jsx)(f.a,{blocks:n.body,projectId:"luh1ilq1",dataset:"production"})})]})}):Object(j.jsx)("div",{children:"Loading...."})}function w(){var e=Object(s.useState)(null),t=Object(d.a)(e,2),c=t[0],n=t[1];return Object(s.useEffect)((function(){m.fetch('*[_type == "post"]{\n           title,\n           slug,\n           mainImage{\n               asset->{\n                   _id,\n                   url\n               },\n               alt\n           } \n        }').then((function(e){return n(e)})).catch(console.error)}),[]),Object(j.jsx)("main",{className:"bg-gray-100 min-h-screen p-12",children:Object(j.jsxs)("section",{className:"container mx-auto",children:[Object(j.jsx)("h1",{className:"text-5xl flex justify-center cursive",children:"Blog Post Page"}),Object(j.jsx)("br",{}),Object(j.jsx)("div",{className:"grid md:grid-cols-2 lg:grid-col-3 gap-8",children:c&&c.map((function(e,t){return Object(j.jsx)("article",{children:Object(j.jsx)(r.b,{to:"/post/"+e.slug.current,children:Object(j.jsxs)("span",{className:"block h-64 relative rounded shadow leading-snug bg-gray-200 border-black",children:[Object(j.jsx)("img",{className:"w-full h-full rounded-r object-cover absolute",src:e.mainImage.asset.url,alt:e.mainImage.alt}),Object(j.jsx)("span",{className:"block relative h-full flex justify-end items-end pr-4 pb-4",children:Object(j.jsx)("h3",{className:"text-gray-800 text-lg font-blog px-3 py-4 bg-red-700 text-red-100 bg-opacity-75 rounded",children:e.title})})]},t)},e.slug.current)})}))})]})})}function k(){var e=Object(s.useState)(null),t=Object(d.a)(e,2),c=t[0],n=t[1];return Object(s.useEffect)((function(){m.fetch('*[_type == "project"]{\n        title,\n        date,\n        place,\n        decription,\n        projectType,\n        language,\n        link,\n        tags\n\n    }').then((function(e){return n(e)})).catch(console.error)}),[]),Object(j.jsx)("main",{className:"bg-gray-100 min-h-screen p-12",children:Object(j.jsxs)("section",{className:"container mx-auto",children:[Object(j.jsx)("h1",{className:"text-5xl flex justify-center cursive",children:"My Project"}),Object(j.jsx)("br",{}),Object(j.jsx)("section",{className:"grid md:grid-cols-2 lg:grid-col-3 gap-8",children:c&&c.map((function(e,t){return Object(j.jsxs)("article",{class:"relative rounded-lg shadow-xl bg-white p-16",children:[Object(j.jsx)("h3",{className:"text-gray-800 text-3xl font-bold mb-2 hover:text-pink-500 mx-3",children:Object(j.jsx)("a",{href:e.link,alt:e.title,target:"_blank",rel:"noopener noreferrer",children:e.title})}),Object(j.jsxs)("div",{className:"text-gray-500 taxt-xs justify-between space-x-3",children:[Object(j.jsxs)("span",{className:"mx-3 justify-between",children:[Object(j.jsx)("strong",{className:"font-bold",children:"Finished on"}),":"," ",new Date(e.date).toLocaleDateString()]}),Object(j.jsxs)("span",{children:[Object(j.jsx)("strong",{className:"font-bold",children:"Location"}),":"," ",e.place]}),Object(j.jsxs)("span",{children:[Object(j.jsx)("strong",{className:"font-bold",children:"Project Type"}),":"," ",e.projectType]}),Object(j.jsx)("p",{className:"my-6 text-lg text-grat-700 leading-relaxed",children:e.decription}),Object(j.jsxs)("span",{children:[Object(j.jsx)("strong",{className:"font-bold",children:"Language"}),":"," ",e.language]}),Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),Object(j.jsxs)("a",{href:e.link,rel:"noopener noreferrer",target:"_blank",class:"text-black underline font-bold hover:underline hover:text-pink-500 text-xl",children:["View The Project"," ",Object(j.jsx)("span",{role:"img","aria-label":"right pointer"})]})]})]})}))})]})})}var I=c(19);function _(){return Object(j.jsx)("header",{className:"bg-gray-700",children:Object(j.jsxs)("div",{className:"container mx-auto flex justify-between",children:[Object(j.jsx)("nav",{className:"flex",children:Object(j.jsx)(r.c,{to:"/",exact:!0,activeClassName:"text-white",className:"inflex-flex item-center font-bold py-3 text-white hover:text-pink-500 text-4xl font-bold cursive tracking-widest",children:"Demi Taylor Nimmo"})}),Object(j.jsxs)("nav",{className:"flex",children:[Object(j.jsx)(r.c,{to:"/",activeClassName:"text-white-100 font-bold",className:"inflex-flex item-center py-3 px-3 my-3 text-white hover:text-pink-500 ",children:"Home"}),Object(j.jsx)(r.c,{to:"/post",activeClassName:"text-white-100 font-bold",className:"inflex-flex item-center py-3 px-3 my-3 text-white hover:text-pink-500 ",children:"Blog Post"}),Object(j.jsx)(r.c,{to:"/projects",activeClassName:"text-white-100 font-bold ",className:"inflex-flex item-center py-3 px-3 my-3 text-white hover:text-pink-500 ",children:"Projects"}),Object(j.jsx)(r.c,{to:"/about",activeClassName:"text-pink-400 font-bold",className:"inflex-flex item-center py-3 px-3 my-3 text-white hover:text-pink-500 ",children:"About"})]}),Object(j.jsxs)("div",{className:"inline-flex py-3 px-3 my-2",children:[Object(j.jsx)(I.SocialIcon,{url:"https://twitter.com/_Demiinfinity",className:"mr-4",target:"_blank",fgColor:"#fff",style:{height:35,width:35}}),Object(j.jsx)(I.SocialIcon,{url:"https://www.facebook.com/DemiTNimmo",className:"mr-4",target:"_blank",fgColor:"#fff",style:{height:35,width:35}}),Object(j.jsx)(I.SocialIcon,{url:"https://www.linkedin.com/in/demi-taylor-nimmo-bb320b40/",className:"mr-4",target:"_blank",fgColor:"#fff",style:{height:35,width:35}})]})]})})}var C=function(){return Object(j.jsxs)(r.a,{children:[Object(j.jsx)(_,{}),Object(j.jsxs)(i.c,{children:[Object(j.jsx)(i.a,{component:x,path:"/",exact:!0}),Object(j.jsx)(i.a,{component:N,path:"/about"}),Object(j.jsx)(i.a,{component:y,path:"/post/:slug"}),Object(j.jsx)(i.a,{component:w,path:"/post"}),Object(j.jsx)(i.a,{component:k,path:"/projects"})]})]})},S=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,131)).then((function(t){var c=t.getCLS,s=t.getFID,n=t.getFCP,a=t.getLCP,l=t.getTTFB;c(e),s(e),n(e),a(e),l(e)}))};l.a.render(Object(j.jsx)(n.a.StrictMode,{children:Object(j.jsx)(C,{})}),document.getElementById("root")),S()},50:function(e,t,c){}},[[130,1,2]]]);
//# sourceMappingURL=main.341156f0.chunk.js.map