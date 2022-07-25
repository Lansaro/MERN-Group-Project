import { Container } from '@mui/system';
import React, { useEffect, useState } from 'react';
import './Dashboard.css';
import PlaceCard from './PlaceCard';
import { Grid } from '@mui/material';
import axios from 'axios';

const Dashboard = () => { 
    const[card, setCard] = useState([]);

    useEffect(() => {
        axios
        .get(`http://localhost:8000/travel_memories`)
        .then((response) => {
            console.log(response.data);
            setCard(response.data);
            })
            .catch((err) => {
            console.log(err.response);
            });
    }, []);

    const handleDelete = async (id) => {
        await
        axios.delete(`http://localhost:8000/travel_memories/${id}`, {
        })
        
        const newCard = card.filter(card => card._id !== id)
        setCard(newCard)
    }
return (
        <Container>
            <Grid container spacing={3}>
                {card.map(card => (
                    <Grid item key={card._id} xs={12} md={6} lg={3}>
                <PlaceCard card={card} handleDelete={handleDelete} />
            </Grid>
            ))}
            </Grid> 
        </Container>
    )
}
export default Dashboard;