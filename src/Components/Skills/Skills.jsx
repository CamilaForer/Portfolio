import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Skills = () => {
  return (
    <div>
      <p>Skills</p>
      <Container className="text-center">
        <Row>
          <Col><img src="./src/assets/html.png" alt="" /></Col>
          <Col><img src="./src/assets/CSS.png" alt="" /></Col>
          <Col><img src="./src/assets/js.png" alt="" /></Col>
          <Col><img src="./src/assets/REACT.png" alt="" /></Col>
        </Row>
      </Container>
      </div>
  )
}

export default Skills