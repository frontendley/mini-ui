export class Store {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  store: Record<string, any>

  constructor() {
    this.store = {}
  }

  innerSetFieldValue(field?: string, value?: string) {
    if(!field) return 
    this.store = {
      ...this.store,
      [field]: value
    }
  }

  innerGetFieldValue(field?: string) {
    if(!field)
      return ''
    return this.store?.[field]
  }

  getFieldsValue() {
    return this.store
  }
}
