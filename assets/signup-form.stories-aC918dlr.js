import{j as r}from"./jsx-runtime-CfatFE5O.js";import{M as x,R as v,a as f,F as j}from"./signup-fields-7dtxP-p6.js";import{S}from"./signup-form-CcDND9vL.js";import{d as h,c as s}from"./logo-Eyd-rpob.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-Ca-LWlf7.js";const b={title:"organism/signup-form",component:S,parameters:{layout:"centered",backgrounds:{default:"custom-background",values:[{name:"custom-background",value:"#f0f0f0"}]}},tags:["autodocs"],decorators:[e=>r.jsx(h,{w:"100vw",justify:"center",children:r.jsx(e,{})}),e=>r.jsx(x,{initialEntries:["/"],children:r.jsx(v,{children:r.jsx(f,{path:"/",element:r.jsx(e,{})})})})],args:{actions:r.jsx(j,{submitButtonText:"Entrar",linkText:"Voltar para login",redirectTo:"/signup"})}},o={args:{},decorators:[e=>r.jsx(s.Provider,{value:{state:{isLoading:!1},errorState:{main:""}},children:e()})]},t={args:{},decorators:[e=>r.jsx(s.Provider,{value:{state:{isLoading:!1,mainError:"Ocorreu um erro"}},children:e()})]},a={args:{},decorators:[e=>r.jsx(s.Provider,{value:{state:{isLoading:!0,mainError:"Ocorreu um erro"}},children:e()})]};var n,i,c;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {},
  decorators: [Story => <Context.Provider value={{
    state: {
      isLoading: false
    },
    errorState: {
      main: ""
    }
  }}>
        {Story()}
      </Context.Provider>]
}`,...(c=(i=o.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};var d,m,u;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {},
  decorators: [Story => <Context.Provider value={{
    state: {
      isLoading: false,
      mainError: "Ocorreu um erro"
    }
  }}>
        {Story()}
      </Context.Provider>]
}`,...(u=(m=t.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var l,p,g;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {},
  decorators: [Story => <Context.Provider value={{
    state: {
      isLoading: true,
      mainError: "Ocorreu um erro"
    }
  }}>
        {Story()}
      </Context.Provider>]
}`,...(g=(p=a.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};const k=["Primary","WithError","WithLoading"];export{o as Primary,t as WithError,a as WithLoading,k as __namedExportsOrder,b as default};
