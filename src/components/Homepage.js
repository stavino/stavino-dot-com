import Resume from "./Resume";
import { Typography } from "@mui/material";

function Homepage(){

const name = 'Steve'

    return (
        <Typography>
        <h2>- Hello</h2>
        <h1>I'm {name} Avino</h1>
        <p>Web Developer, competitive gamer, Dog & Cat lover</p>
        <Resume />
        
        </Typography>
    )
};

export default Homepage;
