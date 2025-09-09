import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Halo semua, saya <span className="purple">Ivano Rossi Sugiyanto</span> 
            dari <span className="purple">Surabaya, Indonesia.</span>
            <br />
            Saya adalah seorang <span className="purple">UI/UX Designer</span> sekaligus 
            <span className="purple"> Web Developer</span>.
            <br />
            Saat ini saya terus mengembangkan skill di bidang desain antarmuka dan 
            pengembangan aplikasi berbasis web.
            <br />
            <br />
            Selain coding dan desain, saya juga punya beberapa hobi:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Bermain gitar / musik
            </li>
            <li className="about-activity">
              <ImPointRight /> Bermain game
            </li>
            <li className="about-activity">
              <ImPointRight /> Graphic design
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Selalu berusaha menciptakan sesuatu yang bermanfaat dan berdampak positif!"{" "}
          </p>
          <footer className="blockquote-footer">Ivano Rossi Sugiyanto</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
