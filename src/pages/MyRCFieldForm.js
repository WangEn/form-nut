import React, { Component, useEffect } from "react";
// import Form, { Field } from 'rc-field-form';
import Form, { Field } from "../components/my-rc-field-form/";
import Input from "../components/Input";

const nameRules = { required: true, message: "请输入姓名！" };
const passwordRules = { required: true, message: "请输入密码！" };

// export default function MyRCFieldForm(props) {
//   const [form] = Form.useForm();

//   const onFinish = (val) => {
//     console.log("onFinish", val);
//   };

//   const onFinishFailed = (val) => {
//     console.log("onFinishFailed", val);
//   };

//   useEffect(() => {
//     console.log("form", form);
//   }, []);

//   return (
//     <div>
//       <h3>MyRCFieldForm</h3>
//       <Form form={form} onFinish={onFinish} onFinishFailed={onFinishFailed}>
//         <Field name="username" label="姓名" rules={[nameRules]}>
//           <Input placeholder="please enter username" />
//         </Field>
//         <Field name="password" label="密码" rules={[passwordRules]}>
//           <Input placeholder="please enter password" />
//         </Field>
//         <button>Submit</button>
//       </Form>
//     </div>
//   );
// }

export default class MyRCFieldForm extends Component {
  formRef = React.createRef();
  componentDidMount() {
    console.log("form", this.formRef.current);
    this.formRef.current.setFieldsValue({ username: "default" });
  }

  onFinish = (val) => {
    console.log("onFinish", val);
  };

  onFinishFailed = (val) => {
    console.log("onFinishFailed", val);
  };

  render() {
    return (
      <div>
        <h3>MyRCFieldForm</h3>
        <Form
          ref={this.formRef}
          onFinish={this.onFinish}
          onFinishFailed={this.onFinishFailed}
        >
          <Field name="username" label="姓名" rules={[nameRules]}>
            <Input placeholder="please enter username" />
          </Field>
          <Field name="password" label="密码" rules={[passwordRules]}>
            <Input placeholder="please enter password" />
          </Field>
          <button>Submit</button>
        </Form>
      </div>
    );
  }
}
