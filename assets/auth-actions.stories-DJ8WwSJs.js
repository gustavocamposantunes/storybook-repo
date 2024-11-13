import{j as r}from"./jsx-runtime-CfatFE5O.js";import{A as x,M as E,R as v,a as f}from"./auth-fields-CK6pDZVU.js";import{c as t}from"./logo-DTHnciMF.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-Ca-LWlf7.js";const C={title:"molecules/auth-actions",component:x,parameters:{layout:"centered",backgrounds:{default:"custom-background",values:[{name:"custom-background",value:"#f0f0f0"}]}},decorators:[o=>r.jsx(E,{initialEntries:["/"],children:r.jsx(v,{children:r.jsx(f,{path:"/",element:r.jsx(o,{})})})})],tags:["autodocs"]},e={args:{},decorators:[o=>r.jsx(t.Provider,{value:{state:{isLoading:!1,mainError:""}},children:r.jsx(o,{})})]},a={args:{},decorators:[o=>r.jsx(t.Provider,{value:{state:{isLoading:!1,mainError:"Ocorreu um erro",emailError:"emailError",passwordError:"passwordError"}},children:r.jsx(o,{})})]},s={args:{},decorators:[o=>r.jsx(t.Provider,{value:{state:{isLoading:!0,mainError:""}},children:r.jsx(o,{})})]};var n,i,d;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {},
  decorators: [Story => <Context.Provider value={{
    state: {
      isLoading: false,
      mainError: ""
    }
  }}>
        <Story />
      </Context.Provider>]
}`,...(d=(i=e.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};var c,m,u;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(u=(m=a.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var l,p,g;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {},
  decorators: [Story => <Context.Provider value={{
    state: {
      isLoading: true,
      mainError: ""
    }
  }}>
        <Story />
      </Context.Provider>]
}`,...(g=(p=s.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};const R=["Primary","WithError","WithLoading"];export{e as Primary,a as WithError,s as WithLoading,R as __namedExportsOrder,C as default};
