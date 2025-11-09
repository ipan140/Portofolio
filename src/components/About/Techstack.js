import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiPython,
  DiGit,
} from "react-icons/di";
import {
  SiLaravel,
  SiWindows,
  SiPhp,
  SiApache,
  SiVuedotjs,
  SiLinux,
  SiKalilinux, // ← Tambahan Kali Linux
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/* JavaScript */}
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 title="JavaScript" />
      </Col>

      {/* React */}
      <Col xs={4} md={2} className="tech-icons">
        <DiReact title="ReactJS" />
      </Col>

      {/* Vue.js */}
      <Col xs={4} md={2} className="tech-icons">
        <SiVuedotjs title="Vue.js" />
      </Col>

      {/* Node.js */}
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs title="Node.js" />
      </Col>

      {/* Laravel */}
      <Col xs={4} md={2} className="tech-icons">
        <SiLaravel title="Laravel" />
      </Col>

      {/* PHP */}
      <Col xs={4} md={2} className="tech-icons">
        <SiPhp title="PHP" />
      </Col>

      {/* Python */}
      <Col xs={4} md={2} className="tech-icons">
        <DiPython title="Python" />
      </Col>

      {/* Git */}
      <Col xs={4} md={2} className="tech-icons">
        <DiGit title="Git" />
      </Col>

      {/* Laragon */}
      <Col xs={4} md={2} className="tech-icons">
        <SiWindows title="Laragon" />
      </Col>

      {/* XAMPP */}
      <Col xs={4} md={2} className="tech-icons">
        <SiApache title="XAMPP" />
      </Col>

      {/* Linux */}
      <Col xs={4} md={2} className="tech-icons">
        <SiLinux title="Linux" />
      </Col>

      {/* Kali Linux */}
      <Col xs={4} md={2} className="tech-icons">
        <SiKalilinux title="Kali Linux" />
      </Col>
    </Row>
  );
}

export default Techstack;
