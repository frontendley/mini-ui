import { Form, Space, FormItem, Input, useForm, Button } from "@mini-ui/ui";
import { MouseEvent } from "react";

export default function App() {
  const form = useForm()

  function handleClick(e: MouseEvent<HTMLElement>) {
    e.preventDefault()
    // eslint-disable-next-line no-console
    console.log(form.getFieldsValue())
  }
  return (
    <Form form={form}>
      <Space direction="vertical">
        <FormItem field='name'>
          <Input />
        </FormItem>
        <FormItem field='age'>
          <Input />
        </FormItem>
        <FormItem>
          <Button htmlType="submit" type="primary" onClick={handleClick}> submit </Button>
        </FormItem>
      </Space>
    </Form>
  )
}
