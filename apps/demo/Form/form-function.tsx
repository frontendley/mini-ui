import { Button, Form, FormItem, Input, Space, useForm } from "@mini-ui/ui";

interface FormData {
  username: string;
  age: string;
}

export default function App () {
  const form = useForm()
  return (
    <Form
      form={form}
      initialValue={{ username: 'admin' }}
      // autoComplete='off'
      onValuesChange={(v: Partial<FormData>, vs: Partial<FormData>) => {
        // eslint-disable-next-line no-console
        console.log('valuesChange:', v, vs);
      }}
      onSubmit={(v: FormData) => {
        // eslint-disable-next-line no-console
        console.log(v);
      }}
    >
      <FormItem label='Username' field='username' rules={[{ required: true, type: "email" }]}>
        <Input placeholder='please enter your username' />
      </FormItem>
      <FormItem
        label='Age'
        field='age'
        rules={[{ required: true, type: 'number', min: 0, max: 99 }]}
      >
        <Input placeholder='please enter your age' />
      </FormItem>
      <FormItem wrapperCol={{ offset: 5 }}>
        <Space>
          <Button type='primary' htmlType='submit' style={{ marginRight: 24 }}>
            Submit
          </Button>
          <Button
            style={{ marginRight: 24 }}
            onClick={() => {
              form.resetFields();
            }}
          >
            Reset
          </Button>
          <Button
            type='text'
            onClick={() => {
              form.setFieldsValue({
                username: 'admin',
                age: 11,
              });
            }}
          >
            Fill Form
          </Button>


          <Button
            type='text'
            onClick={() => {
              // 仅校验值，不会有 UI 表现
              form.validate().then(() => {
                // eslint-disable-next-line no-console
                console.log('pass');
              }).catch((e: unknown) => {

                // eslint-disable-next-line no-console
                console.log(e)
              });

            }}
          >
            validateOnly
          </Button>
        </Space>
      </FormItem>
    </Form>
  );
}
