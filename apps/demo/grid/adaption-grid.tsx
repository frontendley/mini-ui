import { Button } from "@mini-ui/ui";
import { Grid } from "@mini-ui/ui/src";

const { Row, Col } = Grid

export default function App() {
  return (
    <Row>
      <Col xs={2} sm={4} md={6} lg={8} xl={10} xxl={8}>
        <Button long type="primary">btn</Button>
      </Col>
      <Col xs={20} sm={16} md={12} lg={8} xl={4} xxl={8}>
        <Button long>btn</Button>
      </Col>
      <Col xs={2} sm={4} md={6} lg={8} xl={10} xxl={8}>
        <Button long type="primary">btn</Button>
      </Col>
    </Row>
  )
}
