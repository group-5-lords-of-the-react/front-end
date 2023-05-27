import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from 'react-bootstrap/Card';
import { Button } from "react-bootstrap";
import Booking from "../Booking/Booking";

function FRestaurants() {
    const [favoriteArr, setFavoriteArr] = useState([]);

    

    const getFavorite = () => {
        const serverURL = `http://localhost:3004/getFavRestaurant`;
        
        axios.get(serverURL)
            .then(response => {
                setFavoriteArr(response.data);
            })
            .catch(error => console.log(error));
    }
    const deleteRestourant = async (selectedResturant) => {
        const serverURL = `http://localhost:3004/DELETE/${selectedResturant.location_id}`;
        await axios.delete(serverURL)
            .then(response => {
                setFavoriteArr(response.data);

            })
            .catch(error => {
                console.log(error);
            });
    };

    useEffect(() => {
        getFavorite();
    }, []);

    return (
        <>
            <h1>Hello from favorite</h1>

            {favoriteArr.map((singleRestaurant) => (

                <Card style={{ width: '10rem' }} key={singleRestaurant.id}>
                    <Card.Img variant="top" src={singleRestaurant.photo} style={{ width: '5rem' }} />
                    <Card.Body>
                        <Card.Title>{singleRestaurant.name}</Card.Title>
                        <Card.Text>
                            {singleRestaurant.overview}
                            <Button onClick={() => deleteRestourant(singleRestaurant)}>Remove from favorite</Button>
                        </Card.Text>
                    </Card.Body>
                </Card>

            ))}
            <h2>active resrvations</h2>

          <Booking/>

        </>
    );
}

export default FRestaurants;
