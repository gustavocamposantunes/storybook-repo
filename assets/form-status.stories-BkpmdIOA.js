import{j as m}from"./jsx-runtime-CfatFE5O.js";import{f as u}from"./index-B5ZI-g0m.js";import{F as p,c as d}from"./logo-Eyd-rpob.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-Ca-LWlf7.js";const C={title:"atoms/form-status",component:p,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{backgroundColor:{control:"color"}},args:{onClick:u()}},r={args:{},decorators:[e=>m.jsx(d.Provider,{value:{state:{isLoading:!1,mainError:"Ocorreu um erro"}},children:e()})]},o={args:{},decorators:[e=>m.jsx(d.Provider,{value:{state:{isLoading:!0,mainError:"Ocorreu um erro"}},children:e()})]};var t,a,s;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {},
  decorators: [Story => <Context.Provider value={{
    state: {
      isLoading: false,
      mainError: "Ocorreu um erro"
    }
  }}>
        {Story()}
      </Context.Provider>]
}`,...(s=(a=r.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};var n,i,c;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {},
  decorators: [Story => <Context.Provider value={{
    state: {
      isLoading: true,
      mainError: "Ocorreu um erro"
    }
  }}>
        {Story()}
      </Context.Provider>]
}`,...(c=(i=o.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};const S=["Error","WithLoading"];export{r as Error,o as WithLoading,S as __namedExportsOrder,C as default};
