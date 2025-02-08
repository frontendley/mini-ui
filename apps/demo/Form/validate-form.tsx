import { Form, FormItem, Input, Button, Space, useForm } from "@mini-ui/ui";

export default function App() {

  const form = useForm()

  function handleValidate() {
    form?.validate()
  }

  return (
      <Form
        form={form} 
      >
        <FormItem field="name" label="Name" rules={[
          { type: "string", required: true },
          {
            type: 'email',
            message: '邮箱格式不对',
          },
          {
            type: 'ip',
            message: 'ip格式不对',
          },
        ]}>
          <Input/>
        </FormItem>

        <FormItem>
          <Space>
            <Button type="secondary" onClick={handleValidate}>校验</Button>
            <Button type="primary" htmlType="submit">提交</Button>
          </Space>
        </FormItem>
      </Form>
  )
}
