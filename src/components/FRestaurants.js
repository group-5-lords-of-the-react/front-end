import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Button } from "react-bootstrap";

function FRestaurants() {
    const [favoriteArr, setFavoriteArr] = useState([]);

    const getFavorite = () => {
        const serverURL = `${process.env.REACT_APP_serverURL}/favorite`;
        axios.get(serverURL)
            .then(response => {
                setFavoriteArr(response.data);
            })
            .catch(error => console.log(error));
    }
    
    useEffect(() => {
        getFavorite();
    }, []);

    return (
        <>
            <h1>Hello from favorite</h1>
            <Row xs={1} md={4} className="g-4">
                {favoriteArr.map((singleRestaurant) => (
                    <Col >
                        <Card>
                            <Card.Img variant="top" src={singleRestaurant.poster_path} />
                            <Card.Body>
                                <Card.Title>{singleRestaurant.name}</Card.Title>
                                <Card.Text>
                               <Button>Remove frome favorite</Button>
                               <Button>update comment</Button>

                                </Card.Text>

                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>


        </>
    );
}

export default FRestaurants;
