import { Grid } from "@mini-ui/ui";

const { Row, Col } = Grid

export default function App() {
  return (
    <Row gutter={20}>
      <Col order={4} span={5}>
        4
      </Col>
      <Col order={3} span={5}>
        3
      </Col>
      <Col order={2} span={5}>
        2
      </Col>
      <Col order={1} span={5}>
        1
      </Col>
    </Row>
  )
}