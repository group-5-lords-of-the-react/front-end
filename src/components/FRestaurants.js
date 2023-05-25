import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from 'react-bootstrap/Card';
import { Button } from "react-bootstrap";

function FRestaurants() {
    const posterPathURL = "http://image.tmdb.org/t/p/w500/"
    const [favoriteArr, setFavoriteArr] = useState([]);

    const [showFlag, setShowFlag] = useState(false)
    const handleShow = () => {
        setShowFlag(true);
    }
    const handleClose = () => {
        setShowFlag(false)
    }

    const getFavorite = () => {
        const serverURL = `http://localhost:3004/getMovies`;
        axios.get(serverURL)
            .then(response => {
                setFavoriteArr(response.data);
            })
            .catch(error => console.log(error));
    }
    const deleteMovie = async (selectedResturant) => {
        const serverURL = `http://localhost:3004/DELETE/${selectedResturant.id}`;
        await axios.delete(serverURL)
            .then(response => {
                setFavoriteArr(response.data);
                // props.takeNewUpdatedMovies(response.data); // Update state with the response data
                // handleClose();
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
                    <Card.Img variant="top" src={posterPathURL + singleRestaurant.poster_path} style={{ width: '5rem' }} />
                    <Card.Body>
                        <Card.Title>{singleRestaurant.title}</Card.Title>
                        <Card.Text>
                            {singleRestaurant.overview}
                            <Button onClick={() => deleteMovie(singleRestaurant)}>Remove from favorite</Button>
                            {/* <Button onClick={() => { handleShow() }}>Update comment</Button> */}
                        </Card.Text>
                    </Card.Body>
                </Card>

            ))}
            <h2>active resrvations</h2>
        </>
    );
}

export default FRestaurants;
