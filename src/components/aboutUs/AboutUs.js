import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Image } from 'react-bootstrap';
import './AboutUs.css';
import teamPic from './teamPic.jpg';


function AboutUs() {
    return (
        <Container fluid>
            <Row>
                <div className="background-container">
                    <div className="aboutUsH1">About us</div>

                </div>
            </Row>
            <Row className=" justify-content-center align-items-center">
                <Col xs={12} md={7} className="text-center">
                    <h2>We hope you enjoy using our website!</h2>
                    <p>
                        We are a restaurant listing website that helps people find great places to eat. We have a wide variety of restaurants listed on our website, so you're sure to find something to your taste. Whether you're looking for a casual dining experience or a fine dining restaurant, we have you covered.

                        We also offer a variety of features to help you find the perfect restaurant for your needs. You can find it by your location . We also have reviews from real customers, so you can get an idea of what to expect before you make a reservation.

                        We believe that everyone should have access to great food, and we're committed to making that happen.

                        We're always looking for ways to improve our website, and your feedback is important to us. Thank you for using our website, and we hope you enjoy your next meal!
                    </p>
                </Col>
            </Row>
            <Row className="justify-content-center">
                <Col xs={12} md={3} className="text-center">
                    <h2>Our Mission</h2>
                    <p>Our mission is to help people find great places to eat. We believe that everyone should have access to delicious food, and we're committed to making that happen. We do this by providing a comprehensive list of restaurants, as well as reviews from real customers. We also offer a variety of features to help you find the perfect restaurant for your needs.</p>
                </Col>
                <Col xs={12} md={5} className="text-center">
                    < Image src='https://natra.com/app/uploads/2021/06/icon_mission-1.png'></Image>
                </Col>
            </Row>
            <Row className="justify-content-center">
            <Col xs={12} md={3} className="text-center">
                    <h2>Our Team</h2>
                    <p>We have a dedicated and talented team that is passionate about providing the best dining experience for our users. Each member of our team brings unique skills and expertise to ensure that we deliver high-quality services and features to our visitors.</p>
                </Col>
                <Col xs={12} md={5} className="text-center">
                    <Image width={270} height={270} src={teamPic} alt="Our Team" ></Image>
                </Col>
               

            </Row>
        </Container>
    );
}

export default AboutUs;
