import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "react-bootstrap";
import Booking from "../Booking/Booking";
import { Link } from 'react-router-dom';
import "./FRestaurants.css";

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
    const deleteRestaurant = async (selectedRestaurant) => {
        const serverURL = `${process.env.REACT_APP_serverURL}/deleteFavourite/${selectedRestaurant.location_id}`;

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
            <h1>Active Reservations</h1>
            <Booking />
            <h2>List of favorite Restaurants</h2>

            {updatedFav.length > 0 ? (
                <div className="favorite-container">
                    {favoriteArr.map((singleRestaurant) => (
                        <div className="favorite-card" key={singleRestaurant.location_id}>
                            <Link to={`/TheRestaurant/${singleRestaurant.location_id}`}>
                                <img className="favorite-card-img" src={singleRestaurant.r_image} alt={singleRestaurant.r_name} />
                            </Link>
                            <div className="favorite-card-body">
                                <Link to={`/TheRestaurant/${singleRestaurant.location_id}`}>
                                    <h3 className="favorite-card-title">{singleRestaurant.r_name}</h3>
                                </Link>
                                <p className="favorite-card-text">{singleRestaurant.r_address}</p>
                                <Button className="favorite-card-btn" onClick={() => deleteRestaurant(singleRestaurant)}>
                                    Remove from favorites
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>
            ) : null}
        </>
    );
}

export default FRestaurants;
