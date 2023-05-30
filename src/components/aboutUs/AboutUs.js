import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Image } from 'react-bootstrap';
import './AboutUs.css';
import teamPic from '../Img/teamPic2.jpg';
import j from '../Img/j2.jpg';
import { FaGithub } from 'react-icons/fa';



function AboutUs() {
    return (
        <>

            <Container fluid className="About-us-main" >
                <Row className="background-containerA">
                    <Row>
                        <Col md={12} className="aboutUsH1">About us</Col>
                    </Row>

                </Row>

                <Row>
                    <Col xs={12} >
                        <Row className="justify-content-center background-section1A">
                            <Col md={9} xs={11} className=" mx-auto  mt-4 justify-content-center">
                                <Row className='firstRowA'>
                                    <Col md={6} xs={12} className='aboutCol'>
                                        <Row>
                                            <Col md={12} > <h2 className='aboutH'>We hope you enjoy using our website!</h2>
                                                <p className="aboutP">
                                                    We are a  Jordan Restaurant Finder that helps people find great places to eat. We have a wide variety of restaurants listed on our website, so you're sure to find something to your taste. Whether you're looking for a casual dining experience or a fine dining restaurant.

                                                    We also offer a variety of features to help you find the perfect restaurant for your needs. You can find it by your location . We also have reviews from real customers, so you can get an idea of what to expect before you make a reservation.

                                                    We believe that everyone should have access to great food, and we're committed to making that happen.

                                                    We're always looking for ways to improve our website, and your feedback is important to us. Thank you for using our website, and we hope you enjoy your next meal!
                                                </p></Col>
                                        </Row>
                                    </Col>
                                    <Col md={6} xs={12} className="d-flex justify-content-center ">
                                        <Image src={j} alt="jordan" id='j' ></Image>
                                    </Col>
                                </Row>

                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row className=" justify-content-center ">
                    <Col md={6} xs={12} className='mission' >
                        <Row>

                            <Col>
                                < Image src='https://natra.com/app/uploads/2021/06/icon_mission-1.png'></Image>
                            </Col>
                            <Col>
                                <Row>
                                    <Col md={12} >
                                        <h2 className='aboutH'>Our Mission </h2>
                                        <p className="aboutP"  >Our mission is to help people find great places to eat. We believe that everyone should have access to delicious food, and we're committed to making that happen. We do this by providing a comprehensive list of restaurants, as well as reviews from real customers. We also offer a variety of features to help you find the perfect restaurant for your needs.</p>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                </Row>

                <Row className=" justify-content-center ">
                    <Col md={6} xs={12} className='mission' >
                        <Row>


                            <Col>
                                <Row>
                                    <Col md={12} >
                                        <h2 className='aboutH'>Our Team </h2>
                                        <p className="aboutP" > We have a dedicated and talented team that is passionate about providing the best dining experience for our users. Each member of our team brings unique skills and expertise to ensure that our website delivers the most accurate and up-to-date information about restaurants in Jordan.</p>
                                    </Col>
                                </Row>
                            </Col>
                            <Col>
                                <Image id="teamPic" width={270} height={270} src={teamPic} alt="Our Team" ></Image>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row className=" justify-content-center ">
                    <Col md={6} xs={12} className='mission' >
                        <Row>

                            <Col>
                                < Image width={270} height={270} src='https://static.colligo.com/wp-content/uploads/2022/08/colligo-contact_us-email.png' id='contactUs' ></Image>
                            </Col>
                            <Col>
                                <Row>
                                    <Col md={12} >
                                        <h2 className='aboutH'>Contact Us </h2>
                                        <Row>
                                            <Col md={12} ><a className='githubAcc' rel="noreferrer" href='https://github.com/AhMaD36789' target="_blank"><FaGithub className='github-icon' size={40} /> Ahmad Al-harhsheh </a> </Col>
                                        </Row>

                                        <Row>
                                            <Col md={12} ><a className='githubAcc' rel="noreferrer" href='https://github.com/Ody950' target="_blank"><FaGithub className='github-icon' size={40} /> Odai Al-Obeidat </a> </Col>
                                        </Row>

                                        <Row>
                                            <Col md={12} ><a className='githubAcc' rel="noreferrer" href='https://github.com/Abdelrahman-Sweiti' target="_blank"><FaGithub className='github-icon' size={40} /> Abdelrahman Sweiti </a> </Col>
                                        </Row>

                                        <Row>
                                            <Col md={12}><a className='githubAcc' rel="noreferrer" href='https://github.com/hadeellafi' target="_blank"><FaGithub className='github-icon' size={40} /> Hadeel Lafi </a> </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                </Row>

            </Container >


        </>
    );
}

export default AboutUs;
