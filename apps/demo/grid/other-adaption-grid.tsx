import { Button, Grid } from "@mini-ui/ui"

const { Row, Col } = Grid

export default function App() {
  return (
    <Row className='grid-demo'>
      <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
        <Button long type="primary">btn</Button>
      </Col>
      <Col xs={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }}>
        <Button long>btn</Button>
      </Col>
      <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
        <Button long type="primary">btn</Button>
      </Col>
    </Row>
  )
}
