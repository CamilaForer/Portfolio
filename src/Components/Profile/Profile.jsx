import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./profile.scss";

const Profile = () => {
  return (
    <div className="containeer">
      <div className="container-text">
        <svg viewBox="0 0 960 300">
          <symbol id="s-text">
            <text textAnchor="middle" x="50%" y="70%">
             Camila Forero
            </text>
          </symbol>
          <g className="g-ants">
            <use xlinkHref="#s-text" className="text-copy"></use>
            <use xlinkHref="#s-text" className="text-copy"></use>
            <use xlinkHref="#s-text" className="text-copy"></use>
            <use xlinkHref="#s-text" className="text-copy"></use>
            <use xlinkHref="#s-text" className="text-copy"></use>
          </g>
        </svg>
      </div>
      <Container className="text-center">
        <Row>
          <Col>
            <img src="./src/assets/bitmoji.png" alt="" />
          </Col>
          <Col>
            ¡Hola! Yo soy Camila Forero Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Delectus commodi et aspernatur possimus hic autem
            tempore vel. Ea ex quibusdam, corrupti dolorem voluptates a iusto,
            pariatur, accusantium expedita sed natus.
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Profile;
