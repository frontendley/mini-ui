import { Button, Space } from "@mini-ui/ui";
import { Col } from "@mini-ui/ui/src/components/Grid/Col";
import { Row } from "@mini-ui/ui/src/components/Grid/Row";

export default function App() {
  return (
    <Space direction="vertical" style={{ width: "100%" }}>
      <div>
        <b>
          horizontal
        </b>
      </div>
      <Row gutter={24}>
        <Col span={12}>
          <Button long>12 / 50%</Button>
        </Col>

        <Col span={12}>
          <Button long>12 / 50%</Button>
        </Col>
      </Row>
      <div>
        <b>
          horizontal & vertical
        </b>
      </div>
      <Row gutter={[50, 30]}>
        <Col span={12}>
          <Button long>12 / 50%</Button>
        </Col>

        <Col span={12}>
          <Button long>12 / 50%</Button>
        </Col>
      </Row>
      <div>
        <b>
          observer
        </b>
      </div>
      <Row gutter={{
        sm: 200,
        xl: 20
      }}
      >
        <Col span={12}>
          <Button long>12 / 50%</Button>
        </Col>

        <Col span={12}>
          <Button long>12 / 50%</Button>
        </Col>
      </Row>
    </Space>
  )
}