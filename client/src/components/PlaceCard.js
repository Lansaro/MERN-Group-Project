import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const PlaceCard = ( {card, handleDelete} ) => {
  const theme = createTheme({
      palette: {
          primary: {
            main: "#90AFC5",
            contrastText: "#fff" //button text white instead of black
          },
        }
    });

return (  
    <div>  
        <Card elevation={3} className="Dashboard-card" style={{backgroundColor: "#2A3132"}} sx={{ maxWidth: 300 }}>
            <CardMedia
                component="img"
                height="140"
                image src={card.image}
                alt="location image"
            />
            <CardContent >
                <Typography color="#90AFC5" gutterBottom variant="h5" component="div">
                {card.location}
                </Typography>
                <Typography variant="body2" color="#FBFAF5">
                {card.description}
                </Typography>
            </CardContent>
            <CardActions>
                <ThemeProvider theme={theme}>
                <Button href="/memory/edit/:id"size="small">Edit</Button>
                <Button onClick={() => handleDelete(card._id)} size="small">Delete</Button>
                <Button href="/memory/:id" size="small">View</Button>
                </ThemeProvider>
            </CardActions>
        </Card>
    </div> 
)
}

export default PlaceCard;