import{j as r}from"./jsx-runtime-CfatFE5O.js";import{F as j,M as P,R as y,a as S}from"./signup-fields-7dtxP-p6.js";import{c as n}from"./logo-Eyd-rpob.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-Ca-LWlf7.js";const w={title:"molecules/form-actions",component:j,parameters:{layout:"centered",backgrounds:{default:"custom-background",values:[{name:"custom-background",value:"#f0f0f0"}]}},decorators:[o=>r.jsx(P,{initialEntries:["/"],children:r.jsx(y,{children:r.jsx(S,{path:"/",element:r.jsx(o,{})})})})],tags:["autodocs"],args:{submitButtonText:"Entrar",linkText:"Criar conta"}},e={args:{},decorators:[o=>r.jsx(n.Provider,{value:{state:{isLoading:!1,mainError:""}},children:r.jsx(o,{})})]},a={args:{submitButtonDisabled:!0},decorators:[o=>r.jsx(n.Provider,{value:{state:{isLoading:!1,mainError:""}},children:r.jsx(o,{})})]},s={args:{},decorators:[o=>r.jsx(n.Provider,{value:{state:{isLoading:!1,mainError:"Ocorreu um erro",emailError:"emailError",passwordError:"passwordError"}},children:r.jsx(o,{})})]},t={args:{},decorators:[o=>r.jsx(n.Provider,{value:{state:{isLoading:!0,mainError:""}},children:r.jsx(o,{})})]};var i,d,c;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {},
  decorators: [Story => <Context.Provider value={{
    state: {
      isLoading: false,
      mainError: ""
    }
  }}>
        <Story />
      </Context.Provider>]
}`,...(c=(d=e.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var m,u,l;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    submitButtonDisabled: true
  },
  decorators: [Story => <Context.Provider value={{
    state: {
      isLoading: false,
      mainError: ""
    }
  }}>
        <Story />
      </Context.Provider>]
}`,...(l=(u=a.parameters)==null?void 0:u.docs)==null?void 0:l.source}}};var p,g,x;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {},
  decorators: [Story => <Context.Provider value={{
    state: {
      isLoading: false,
      mainError: "Ocorreu um erro",
      emailError: "emailError",
      passwordError: "passwordError"
    }
  }}>
        <Story />
      </Context.Provider>]
}`,...(x=(g=s.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var v,E,f;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {},
  decorators: [Story => <Context.Provider value={{
    state: {
      isLoading: true,
      mainError: ""
    }
  }}>
        <Story />
      </Context.Provider>]
}`,...(f=(E=t.parameters)==null?void 0:E.docs)==null?void 0:f.source}}};const D=["Primary","Disabled","WithError","WithLoading"];export{a as Disabled,e as Primary,s as WithError,t as WithLoading,D as __namedExportsOrder,w as default};
