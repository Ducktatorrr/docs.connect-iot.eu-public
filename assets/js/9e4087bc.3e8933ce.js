"use strict";(self.webpackChunkdocs_connect_iot_nl=self.webpackChunkdocs_connect_iot_nl||[]).push([[608],{3169:(e,t,s)=>{s.r(t),s.d(t,{default:()=>h});s(7294);var r=s(9960),a=s(5999),i=s(1944),n=s(7961),c=s(2503),l=s(5893);function d(e){let{year:t,posts:s}=e;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(c.Z,{as:"h3",id:t,children:t}),(0,l.jsx)("ul",{children:s.map((e=>(0,l.jsx)("li",{children:(0,l.jsxs)(r.Z,{to:e.metadata.permalink,children:[e.metadata.formattedDate," - ",e.metadata.title]})},e.metadata.date)))})]})}function o(e){let{years:t}=e;return(0,l.jsx)("section",{className:"margin-vert--lg",children:(0,l.jsx)("div",{className:"container",children:(0,l.jsx)("div",{className:"row",children:t.map(((e,t)=>(0,l.jsx)("div",{className:"col col--4 margin-vert--lg",children:(0,l.jsx)(d,{...e})},t)))})})})}function h(e){let{archive:t}=e;const s=(0,a.I)({id:"theme.blog.archive.title",message:"Archive",description:"The page & hero title of the blog archive page"}),r=(0,a.I)({id:"theme.blog.archive.description",message:"Archive",description:"The page & hero description of the blog archive page"}),d=function(e){const t=e.reduce(((e,t)=>{const s=t.metadata.date.split("-")[0],r=e.get(s)??[];return e.set(s,[t,...r])}),new Map);return Array.from(t,(e=>{let[t,s]=e;return{year:t,posts:s}}))}(t.blogPosts);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(i.d,{title:s,description:r}),(0,l.jsxs)(n.Z,{children:[(0,l.jsx)("header",{className:"hero hero--primary",children:(0,l.jsxs)("div",{className:"container",children:[(0,l.jsx)(c.Z,{as:"h1",className:"hero__title",children:s}),(0,l.jsx)("p",{className:"hero__subtitle",children:r})]})}),(0,l.jsx)("main",{children:d.length>0&&(0,l.jsx)(o,{years:d})})]})]})}}}]);