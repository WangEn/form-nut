import { useRef } from "react";

// 定义状态管理库
class FormStore {
  constructor() {
    this.store = {}; // 状态值

    this.fieldEntities = [];

    this.callbacks = {};
  }

  setCallBacks = (callbacks) => {
    this.callbacks = { ...this.callbacks, ...callbacks };
  };

  // 注册实例(forceUpdate)
  // 注册与取消注册
  // 订阅与取消订阅
  registerFieldEntities = (entity) => {
    this.fieldEntities.push(entity);

    return () => {
      this.fieldEntities = this.fieldEntities.filter((item) => item !== entity);
      delete this.store[entity.props.name];
    };
  };

  // get
  getFieldsValue = () => {
    return { ...this.store };
  };
  getFieldValue = (name) => {
    return this.store[name];
  };

  // set
  setFieldsValue = (newStore) => {
    // 1. update store
    this.store = { ...this.store, ...newStore };
    console.log("this.store", this.store);
    // 2. update Field Component
    this.fieldEntities.forEach((entity) => {
      Object.keys(newStore).forEach((k) => {
        if (k === entity.props.name) {
          entity.onStoreChange();
        }
      });
    });
  };

  validate = () => {
    let err = [];
    // todo 校验
    // 简版校验
    this.fieldEntities.forEach(entity => {
      const { name, rules } = entity.props;
      let rule = rules[0];
      const value = this.getFieldValue(name);
      if(rule && rule.required && (value === undefined || value === '')) {
        err.push({[name]: rule.message, value})
      }
    })
    return err;
  };
  submit = () => {
    // 提交
    console.log("submit");

    let err = this.validate();

    const { onFinish, onFinishFailed } = this.callbacks;

    if (err.length === 0) {
      // 通过
      onFinish(this.getFieldsValue());
    } else {
      console.log("校验不通过");
      onFinishFailed(err);
    }
  };

  getForm = () => {
    return {
      getFieldsValue: this.getFieldsValue,
      getFieldValue: this.getFieldValue,
      setFieldsValue: this.setFieldsValue,
      registerFieldEntities: this.registerFieldEntities,
      submit: this.submit,
      setCallBacks: this.setCallBacks,
    };
  };
}

export default function useForm() {
  // 存值，在组件卸载之前指向的都是同一个值
  const formRef = useRef();

  if (!formRef.current) {
    const formStore = new FormStore();
    formRef.current = formStore.getForm();
  }
  return [formRef.current];
}
