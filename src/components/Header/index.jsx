import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import "./Header.scss";

const Header = (props) => {
  return (
    <header className="header">
      <Container className="header__container">
        <Row className="justify-content-between header__row">
          <Col xs="auto">
            <a className="header__link header__title"
                href="#"
                target="_blank"
                rel="noopener noreferrer"
            >
              PKG Didactic
            </a>
          </Col>
          <Col xs="auto">
            <NavLink className="header__link header__link--project"
                        exact to="/photos"
                        activeClassName="header__link--active"
                >Redux Project
            </NavLink>
            <NavLink className="header__link header__link--signin"
                        exact to="/sign-in"
                        activeClassName="header__link--active"
                >Sign In
            </NavLink>
          </Col>
        </Row>
      </Container>
    </header>
  );
};

Header.propTypes = {};

export default Header;
