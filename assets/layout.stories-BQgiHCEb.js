import{j as r}from"./jsx-runtime-CfatFE5O.js";import{L as l,A as u}from"./layout-nECF2CVJ.js";import{c as d,e as p}from"./logo-DTHnciMF.js";import{M as x,R as g,a as f}from"./auth-fields-CK6pDZVU.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-Ca-LWlf7.js";const L={title:"organism/layout",component:l,parameters:{layout:"centered",backgrounds:{default:"custom-background",values:[{name:"custom-background",value:"#f0f0f0"}]}},decorators:[e=>r.jsx(x,{initialEntries:["/"],children:r.jsx(g,{children:r.jsx(f,{path:"/",element:r.jsx(e,{})})})})],tags:["autodocs"]},o={args:{children:r.jsx(r.Fragment,{})},decorators:[e=>r.jsx(d.Provider,{value:{isLoading:!1,errorMessage:""},children:e()})]},a={args:{children:r.jsx(p,{w:"100%",justify:"center",mt:"8",children:r.jsx(u,{})})},decorators:[e=>r.jsx(d.Provider,{value:{state:{isLoading:!1},errorState:{main:"",email:"",password:""}},children:e()})]};var t,s,n;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    children: <></>
  },
  decorators: [Story => <Context.Provider value={{
    isLoading: false,
    errorMessage: ""
  }}>
        {Story()}
      </Context.Provider>]
}`,...(n=(s=o.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};var i,m,c;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    children: <Flex w="100%" justify="center" mt="8"><AuthForm /></Flex>
  },
  decorators: [Story => <Context.Provider value={{
    state: {
      isLoading: false
    },
    errorState: {
      main: "",
      email: "",
      password: ""
    }
  }}>
        {Story()}
      </Context.Provider>]
}`,...(c=(m=a.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};const C=["Primary","WithForm"];export{o as Primary,a as WithForm,C as __namedExportsOrder,L as default};
