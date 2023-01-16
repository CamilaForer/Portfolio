import { Col, Container, Row } from 'react-bootstrap'
import './Skills.scss'

const Skills = () => {
  return (
    <div >
      <p className='title text-center'>Skills</p>
      <Container className='text-center'>
        <Row className='images hover-overlay'>
          <Col><img src="./src/assets/html.png" alt="" /></Col>
          <Col><img src="./src/assets/CSS.png" alt="" /></Col>
          <Col><img src="./src/assets/js.png" alt="" /></Col>
          <Col><img src="./src/assets/REACT.png" alt="" /></Col>
          <Col><img src="./src/assets/TRELLO.png" alt="" /></Col>
          <Col><img src="./src/assets/FIGMA.png" alt="" /></Col>
        </Row>
      </Container>
      </div>
  )
}

export default Skills