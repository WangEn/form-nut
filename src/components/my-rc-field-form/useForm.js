// 定义状态管理库
class FormStore {
  constructor() {
    this.store = {}; // 状态值

  }

  // get
  getFiledsValue = () => {
    return {...this.store}
  }
  getFiledValue = (name) => {
    return this.store[name]
  }

  // set
  setFieldsValue = (newStore) => {
    this.store = {...this.store, ...newStore}
    console.log('this.store', this.store);
  }

  getForm = () => {
    return {
      getFiledsValue: this.getFiledsValue,
      getFiledValue: this.getFiledValue,
      setFieldsValue: this.setFieldsValue
    }
  }
}


export default function useForm(){
  return [];
};