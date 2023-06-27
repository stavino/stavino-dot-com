import SA_Resume from '../files/SA_resume.pdf'
import { Button } from '@mui/material';

function Resume(){

    return (
        
        <a href={SA_Resume} download='Stephen-Avino-resume.pdf'>
            <Button id='resume'>Download CV</Button>
        </a>
        
    )
}


export default Resume;
