import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from 'react-bootstrap/Card';
import { Button } from "react-bootstrap";
import Booking from "../Booking/Booking";

function FRestaurants() {
    const [favoriteArr, setFavoriteArr] = useState([]);
    const [updatedFav, setUpdatedFav] = useState([]);
    
    const getFavorite = () => {
        const serverURL = `http://localhost:3003/getFavourite`;

        axios.get(serverURL)
            .then(response => {
                setFavoriteArr(response.data);
            })
            .catch(error => console.log(error));
    }
    const deleteRestourant = async (selectedResturant) => {
        const serverURL = `http://localhost:3003/deleteFavourite?location_id=${selectedResturant.location_id}`;
        await axios.delete(serverURL)
            .then(response => {
                // takeNewUpdatedFav(response.data);
                getFavorite();

            })
            .catch(error => {
                console.log(error);
            });
    };
    // const takeNewUpdatedFav = (arr) => {
    //     setUpdatedFav(arr);
    // }
    
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
                                <Card.Img variant="top" src={singleRestaurant.r_image} style={{ width: '5rem' }} />
                                <Card.Body>
                                    <Card.Title>{singleRestaurant.r_name}</Card.Title>
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
