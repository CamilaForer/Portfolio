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
             CAMILA FORERO
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
            <img src="../assets/bitmoji.png" alt="" />
          </Col>
          <Col className="info">
            ¡Hola! Yo soy Camila Forero, me he dedicado a diferentes tareas que me han llevado a descubrir con el código la manera de plasmar mis ideas y mi lado creativo.
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Profile;
