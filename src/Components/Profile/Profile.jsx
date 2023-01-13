import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./profile.scss"

const Profile = () => {
  return (
    <div className="container">
      <p className="text-center">Amanda Camila Forero Sánchez</p>
      <br />
      <Container className="text-center">
        <Row>
          <Col><img src="./src/assets/bitmoji.png" alt="" /></Col>
          <Col>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus commodi et aspernatur possimus hic autem tempore vel. Ea ex quibusdam, corrupti dolorem voluptates a iusto, pariatur, accusantium expedita sed natus.</Col>
        </Row>
      </Container>
    </div>
  );
};

export default Profile;
