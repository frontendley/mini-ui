import { Button, Space } from "@mini-ui/ui";
import { Col } from "@mini-ui/ui/src/components/Grid/Col";
import { Row } from "@mini-ui/ui/src/components/Grid/Row";

export default function App() {
  return (
    <Space style={{ width: "100%" }} direction="vertical">
      <Row align="start">
        <Col span={12}>
          <Button long style={{ height: "120px" }}>btn</Button>
        </Col>
        <Col span={12}>
          <Button long type="primary">btn</Button>
        </Col>
      </Row>
      <Row align="center">
        <Col span={12}>
          <Button long style={{ height: "120px" }}>btn</Button>
        </Col>
        <Col span={12}>
          <Button long type="primary">btn</Button>
        </Col>
      </Row>
      <Row align="end">
        <Col span={12}>
          <Button long style={{ height: "120px" }}>btn</Button>
        </Col>
        <Col span={12}>
          <Button long type="primary">btn</Button>
        </Col>
      </Row>
    </Space>
  )
}