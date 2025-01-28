import { Button, Grid, Space } from "@mini-ui/ui";

const { Row, Col } = Grid

export default function App() {
  return (
    <Space direction="vertical" style={{width: "100%"}}>
      <Row>
        <Col span={8}>
          <Button long type="primary"> span: 8</Button>
        </Col>
        <Col span={8} offset={8}>
          <Button long type="primary">span: 8 / offset: 8</Button>
        </Col>
      </Row>
      <Row>
        <Col span={6} offset={6}>
          <Button long type="primary"> span: 6 / offset: 6</Button>
        </Col>
        <Col span={6} offset={6}>
          <Button long type="primary">span: 6 / offset: 6</Button>
        </Col>
      </Row>
      <Row>
        <Col span={8} offset={6}>
          <Button long type="primary"> span: 8 / offset: 6</Button>
        </Col>
      </Row>
    </Space>
  )
}