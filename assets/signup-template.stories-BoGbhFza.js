import{j as r}from"./jsx-runtime-CfatFE5O.js";import{S as u}from"./signup-template-Bh4hCXHW.js";import{c}from"./logo-C8OlhjGP.js";import{M as p,R as l,a as g}from"./signup-fields-DwnpDaqN.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./signup-form-CbiFbHqg.js";import"./field.anatomy-Bpa4-hco.js";const h={title:"templates/signup-template",component:u,parameters:{layout:"centered",backgrounds:{default:"custom-background",values:[{name:"custom-background",value:"#f0f0f0"}]}},tags:["autodocs"],decorators:[e=>r.jsx(p,{initialEntries:["/"],children:r.jsx(l,{children:r.jsx(g,{path:"/",element:r.jsx(e,{})})})})]},o={args:{},decorators:[e=>r.jsx(c.Provider,{value:{state:{isLoading:!1,mainError:"",email:"",password:""}},children:e()})]},a={args:{},decorators:[e=>r.jsx(c.Provider,{value:{state:{isLoading:!0,mainError:"Ocorreu um erro",email:"",password:""}},children:e()})]};var t,s,n;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
}`,...(n=(s=o.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};var i,m,d;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(d=(m=a.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const C=["Primary","WithError"];export{o as Primary,a as WithError,C as __namedExportsOrder,h as default};
