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
          <Col>
            ¡Hola! Yo soy Camila Forero, me he dedicado a diferentes tareas que me han llevado a descubrir mi pasión por aprender a crear experiencias. Ahora por medio del código, encontré la manera de plasmar mis ideas y mi lado artístico, incentivando los sentidos.
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Profile;
