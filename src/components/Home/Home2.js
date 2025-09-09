import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              IZINKAN SAYA <span className="purple"> MEMPERKENALKAN </span> DIRI
              😃
            </h1>

            <p className="home-about-body">
              Saya seorang yang memiliki passion di bidang{" "}
              <b className="purple">UI/UX Design</b> dan{" "}
              <b className="purple">Web Development</b>.
              <br />
              <br />
              Saya juga aktif sebagai <b className="purple">
                Freelancer
              </b> dan <b className="purple">Software Developer</b> untuk
              membangun berbagai produk digital yang bermanfaat.
              <br />
              <br />
              Bidang yang saya minati adalah{" "}
              <i>
                <b className="purple">desain antarmuka pengguna</b> dan
                <b className="purple"> pengembangan aplikasi berbasis web</b>,
              </i>{" "}
              serta teknologi modern yang membantu meningkatkan pengalaman
              pengguna.
              <br />
              <br />
              Saya biasa menggunakan tools modern seperti{" "}
              <b className="purple">Figma</b> untuk desain, serta framework
              seperti <b className="purple">React.js</b>,{" "}
              <b className="purple">Next.js</b>, dan{" "}
              <b className="purple">Laravel</b> dan sebagainya untuk
              pengembangan web.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>TEMUKAN SAYA DI</h1>
            <p>
              Jangan ragu untuk <span className="purple">terhubung</span> dengan
              saya
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/ipan140"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              {/* <li className="social-icons">
                <a
                  href="https://twitter.com/ivanorossi"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li> */}
              <li className="social-icons">
                <a
                  href="https://linkedin.com/in/ivano-rossi-sugiyanto"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/ipanrossi?igsh=dHJybDI5MXlhcGJy"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
