import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from 'react-bootstrap/Card';
import { Button } from "react-bootstrap";
import Booking from "../Booking/Booking";
import { Link } from "react-router-dom";

function FRestaurants() {
    const [favoriteArr, setFavoriteArr] = useState([]);
    const [updatedFav, setUpdatedFav] = useState([]);

    const getFavorite = () => {
        const serverURL = `${process.env.REACT_APP_serverURL}/getFavourite`;

        axios.get(serverURL)
            .then(response => {
                setFavoriteArr(response.data);
            })
            .catch(error => console.log(error));
    }
    const deleteRestourant = async (selectedResturant) => {
        const serverURL = `${process.env.REACT_APP_serverURL}/deleteFavourite/${selectedResturant.location_id}`;

        await axios.delete(serverURL)
            .then(response => {
                getFavorite();

            })
            .catch(error => {
                console.log(error);
            });
    };


    useEffect(() => {
        setUpdatedFav(favoriteArr);
    }, [favoriteArr]);

    useEffect(() => {
        getFavorite();
    }, []);

    return (
        <>
            <h1>Hello from favorite</h1>

            {updatedFav.length > 0 ? (
                <div>
                    {
                        favoriteArr.map((singleRestaurant) => (

                            <Card style={{ width: '10rem' }} key={singleRestaurant.location_id + 1}>
                                <Link to={`/TheRestaurant/${singleRestaurant.location_id}`}>
                                <Card.Img variant="top" src={singleRestaurant.r_image} style={{ width: '5rem' }} />
                                </Link>
                                <Card.Body>
                                    <Link to={`/TheRestaurant/${singleRestaurant.location_id}`}>
                                        <Card.Title>{singleRestaurant.r_name}</Card.Title>
                                    </Link>
                                    <Card.Text>
                                        {singleRestaurant.r_address}
                                        <Button onClick={() => deleteRestourant(singleRestaurant)}>Remove from favorite</Button>
                                    </Card.Text>
                                </Card.Body>
                            </Card>

                        ))
                    }</div>

            ) : null}



            <h2>active resrvations</h2>

            <Booking />

        </>
    );
}

export default FRestaurants;
