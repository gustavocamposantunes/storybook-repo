import{j as e}from"./jsx-runtime-CfatFE5O.js";import{A as x}from"./layout-nECF2CVJ.js";import{e as v,c as s}from"./logo-DTHnciMF.js";import{M as f,R as h,a as j}from"./auth-fields-CK6pDZVU.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-Ca-LWlf7.js";const R={title:"organism/auth-form",component:x,parameters:{layout:"centered",backgrounds:{default:"custom-background",values:[{name:"custom-background",value:"#f0f0f0"}]}},tags:["autodocs"],decorators:[r=>e.jsx(v,{w:"100vw",justify:"center",children:e.jsx(r,{})}),r=>e.jsx(f,{initialEntries:["/"],children:e.jsx(h,{children:e.jsx(j,{path:"/",element:e.jsx(r,{})})})})]},o={args:{},decorators:[r=>e.jsx(s.Provider,{value:{state:{isLoading:!1},errorState:{main:""}},children:r()})]},a={args:{},decorators:[r=>e.jsx(s.Provider,{value:{state:{isLoading:!1,mainError:"Ocorreu um erro"}},children:r()})]},t={args:{},decorators:[r=>e.jsx(s.Provider,{value:{state:{isLoading:!0,mainError:"Ocorreu um erro"}},children:r()})]};var n,i,c;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(c=(i=o.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};var d,m,u;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {},
  decorators: [Story => <Context.Provider value={{
    state: {
      isLoading: false,
      mainError: "Ocorreu um erro"
    }
  }}>
        {Story()}
      </Context.Provider>]
}`,...(u=(m=a.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var l,p,g;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {},
  decorators: [Story => <Context.Provider value={{
    state: {
      isLoading: true,
      mainError: "Ocorreu um erro"
    }
  }}>
        {Story()}
      </Context.Provider>]
}`,...(g=(p=t.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};const W=["Primary","WithError","WithLoading"];export{o as Primary,a as WithError,t as WithLoading,W as __namedExportsOrder,R as default};
