import { Button, Grid, Space } from "@mini-ui/ui"
import "@mini-ui/ui/dist/index.css"

const { Row, Col } = Grid

export default function App() {
  return (
    <Space direction="vertical" style={{width: "100%"}}>
      <Row>
        <Col>
          <Button long type="primary">24 / 100%</Button>
        </Col>
      </Row>
      <Row>
        <Col span={12}>
          <Button long>12 / 50%</Button>
        </Col>
        <Col span={12}>
          <Button long type="primary">12 / 50%</Button>
        </Col>
      </Row>
      <Row>
        <Col span={8}>
          <Button long>8 / 33.333%</Button>
        </Col>
        <Col span={8}>
          <Button long type="primary">8 / 33.333%</Button>
        </Col>
        <Col span={8}>
          <Button long type="secondary">8 / 33.333%</Button>
        </Col>
      </Row>
      <Row>
        <Col span={6}>
          <Button long>6 / 25%</Button>
        </Col>
        <Col span={12}>
          <Button long type="primary">12 / 50%</Button>
        </Col>
        <Col span={6}>
          <Button long type="secondary">6 / 25%</Button>
        </Col>
      </Row>
    </Space>
  )
}