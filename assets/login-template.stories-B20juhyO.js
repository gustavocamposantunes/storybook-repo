import{j as r}from"./jsx-runtime-CfatFE5O.js";import{L as l,c}from"./logo-DTHnciMF.js";import{L as p,A as g}from"./layout-nECF2CVJ.js";import{M as x,R as f,a as v}from"./auth-fields-CK6pDZVU.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-Ca-LWlf7.js";const u=({onSubmit:e})=>r.jsxs(p,{children:[r.jsx(l,{}),r.jsx(g,{onSubmit:e})]});u.__docgenInfo={description:"",methods:[],displayName:"LoginTemplate"};const C={title:"templates/login-template",component:u,parameters:{layout:"centered",backgrounds:{default:"custom-background",values:[{name:"custom-background",value:"#f0f0f0"}]}},tags:["autodocs"],decorators:[e=>r.jsx(x,{initialEntries:["/"],children:r.jsx(f,{children:r.jsx(v,{path:"/",element:r.jsx(e,{})})})})]},o={args:{},decorators:[e=>r.jsx(c.Provider,{value:{state:{isLoading:!1,mainError:"",email:"",password:""}},children:e()})]},a={args:{},decorators:[e=>r.jsx(c.Provider,{value:{state:{isLoading:!0,mainError:"Ocorreu um erro",email:"",password:""}},children:e()})]};var s,t,n;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {},
  decorators: [Story => <Context.Provider value={{
    state: {
      isLoading: false,
      mainError: "",
      email: "",
      password: ""
    }
  }}>
        {Story()}
      </Context.Provider>]
}`,...(n=(t=o.parameters)==null?void 0:t.docs)==null?void 0:n.source}}};var i,m,d;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {},
  decorators: [Story => <Context.Provider value={{
    state: {
      isLoading: true,
      mainError: "Ocorreu um erro",
      email: "",
      password: ""
    }
  }}>
        {Story()}
      </Context.Provider>]
}`,...(d=(m=a.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const R=["Primary","WithError"];export{o as Primary,a as WithError,R as __namedExportsOrder,C as default};
