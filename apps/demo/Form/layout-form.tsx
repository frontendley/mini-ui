import { IconCheck } from "@mini-ui/icons";
import { Button, Form, FormItem, Input, Space } from "@mini-ui/ui";
import { useForm } from "@mini-ui/ui/src";
import { useState } from "react";

type Layout = 'vertical' | 'horizontal' | 'inline'

const layoutList = ['horizontal', 'vertical', 'inline']

export default function App () {
  const [layout, setLayout] = useState<Layout>('horizontal')


  // form
  const form = useForm()

  return ( 
    <Space direction="vertical" size="middle" style={{width: '500px'}}>
      <Space>
        {
          layoutList.map(item => {
            return (
              <label key={item} htmlFor={item} style={{ verticalAlign: "middle"}}>
                <input 
                  type="radio"
                  name="vertical"
                  value={item}
                  style={{ marginRight: '5px'}}
                  checked={item === layout}
                  onChange={e => setLayout(e.target.value as Layout)}
                />
                {item}
              </label>
            )
          })
        }
      </Space>
      <Form form={form} layout={layout}>
        <FormItem label="name" field="name" labelAlign="left" rules={[{required: true}]}>
          <Input placeholder="请输入姓名" />
        </FormItem>
        <FormItem label="age" field="age" requiredSymbol={{position: 'end'}} rules={[{required: true}]} colon={<span><IconCheck></IconCheck></span>}>
          <Input placeholder="请输入年纪" />
        </FormItem>
        <FormItem label="hobby" field="hobby">
          <Input placeholder="请输入爱好" />
        </FormItem>
        <FormItem>
          <Button htmlType="submit" type="primary">提交</Button>
        </FormItem>
      </Form>
    </Space> 
  )
}
