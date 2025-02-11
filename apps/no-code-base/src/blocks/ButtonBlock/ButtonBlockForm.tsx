import { Field } from "@formily/react";
import { Input, Space } from "@mini-ui/ui";

export function ButtonBlockForm () {
  return (
    <div>
      <Space direction="vertical">
        <Field
          name={["props", "type"]}
          title="按钮类型:"
          component={[Input]}
        />
        <Field
          name="props.children"
          title="next"
          component={[Input]}
          />
      </Space>
    </div>
  )
}
