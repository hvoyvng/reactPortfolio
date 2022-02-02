import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
// import ProjectImage from '../../images/projects.png'

const ProjectsPage = (props) => {
    const cardStyle = {
        display: "inline-block",
        ml: 4,
        mt: 4,
        maxWidth: 260
    }
    return (
        <>
            
            <Card sx={cardStyle}>
                <CardMedia
                    component="img"
                    height="170"
                    image="https://blog.hyperiondev.com/wp-content/uploads/2018/10/Blog-Article-Programming-Projects.jpg"
                    alt="Team Member Pic"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        console.log
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Social Networking App for Developers.
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button href='https://github.com/g-broadhead/console.log' size="small">Github</Button>
                </CardActions>
            </Card>
            <Card sx={cardStyle}>
                <CardMedia
                    component="img"
                    height="170"
                    image="https://blog.hyperiondev.com/wp-content/uploads/2018/10/Blog-Article-Programming-Projects.jpg"
                    alt="Team Member Pic"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Chat Wallet
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Web based app that users can chat with others about hobbies.
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button href='https://github.com/g-broadhead/chatWallet' size="small">Github</Button>
                </CardActions>
            </Card>
            <Card sx={cardStyle}>
                <CardMedia
                    component="img"
                    height="170"
                    image="https://blog.hyperiondev.com/wp-content/uploads/2018/10/Blog-Article-Programming-Projects.jpg"
                    alt="Team Member Pic"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Pet Rescue Finder
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        App to find adoptable pets in your desired city.
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button href='https://github.com/hadisafari77/Group-Project-Dogs' size="small">Github</Button>
                </CardActions>
            </Card>
            
        </>
    );
}

export default ProjectsPage