import{j as r}from"./jsx-runtime-CfatFE5O.js";import{M as u,R as l,a as x,F as p}from"./signup-fields-DwnpDaqN.js";import{L as g,A as f}from"./signup-form-CbiFbHqg.js";import{c as d,d as h}from"./logo-C8OlhjGP.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./field.anatomy-Bpa4-hco.js";const L={title:"organism/layout",component:g,parameters:{layout:"centered",backgrounds:{default:"custom-background",values:[{name:"custom-background",value:"#f0f0f0"}]}},decorators:[e=>r.jsx(u,{initialEntries:["/"],children:r.jsx(l,{children:r.jsx(x,{path:"/",element:r.jsx(e,{})})})})],tags:["autodocs"]},t={args:{children:r.jsx(r.Fragment,{})},decorators:[e=>r.jsx(d.Provider,{value:{isLoading:!1,errorMessage:""},children:e()})]},o={args:{children:r.jsx(h,{w:"100%",justify:"center",mt:"8",children:r.jsx(f,{actions:r.jsx(p,{submitButtonText:"Entrar",linkText:"Criar conta",redirectTo:"/signup"})})})},decorators:[e=>r.jsx(d.Provider,{value:{state:{isLoading:!1},errorState:{main:"",email:"",password:""}},children:e()})]};var a,s,n;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    children: <></>
  },
  decorators: [Story => <Context.Provider value={{
    isLoading: false,
    errorMessage: ""
  }}>
        {Story()}
      </Context.Provider>]
}`,...(n=(s=t.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};var i,c,m;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    children: <Flex w="100%" justify="center" mt="8">
        <AuthForm actions={<FormActions submitButtonText="Entrar" linkText="Criar conta" redirectTo="/signup" />} />
      </Flex>
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
}`,...(m=(c=o.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};const T=["Primary","WithForm"];export{t as Primary,o as WithForm,T as __namedExportsOrder,L as default};
