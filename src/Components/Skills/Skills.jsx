import { Col, Container, Row } from 'react-bootstrap'
import './Skills.scss'

const Skills = () => {
  return (
    <div id='Skills' >
      <p className='title text-center'>Skills</p>
      <Container className='text-center'>
        <Row className='images hover-overlay'>
          <Col><img src="../assets/html.png" alt="" /></Col>
          <Col><img src="../assets/CSS.png" alt="" /></Col>
          <Col><img src="../assets/JS.png" alt="" /></Col>
          <Col><img src="../assets/REACT.png" alt="" /></Col>
          <Col><img src="../assets/mongodb.png" alt="" /></Col>
          <Col><img src="../assets/mysql.png" alt="" /></Col>
        </Row>
      </Container>
      </div>
  )
}

export default Skills