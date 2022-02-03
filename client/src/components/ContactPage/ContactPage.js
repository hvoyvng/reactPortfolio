import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import ContactImage from '../../images/contact.jpg'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import FolderIcon from '@mui/icons-material/Folder';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemButton from '@mui/material/ListItemButton';
import InboxIcon from '@mui/icons-material/Inbox';
import Divider from '@mui/material/Divider';
import GitHubIcon from '@mui/icons-material/GitHub';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

import LinkedInIcon from '@mui/icons-material/LinkedIn';
const ContactPage = (props) => {
    const aboutStyling = {
        display: 'inline-block',
        width: '45%',
        backgroundColor: '#EEE',
        padding: '4em',
        marginTop: '10%',
        boxShadow: '8px 16px 32px #000',
        marginRight: "2em"
    }
    const picStyling = {
        display: 'inline-block',
        position: 'absolute',
        width: '40%',
        height: '70%',
        backgroundImage: `url(${ContactImage})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        marginTop: "2em"
    }

    const listStyle = {
        mt:1
    }
    return (
        <>
            <Container>
                <Grid sx={aboutStyling}>
                    <Grid justifyContent='center' alignItems='center'>
                        <p>Please feel free to contact me at the links below.</p>
                        <List>
                            <ListItem disablePadding button component="a" href="https://www.google.com/gmail/about/" sx={listStyle}>
                                    <ListItemIcon>
                                        <InboxIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Email: jyu0628@gmail.com" />
                            </ListItem>
                            <Divider />
                            <ListItem disablePadding button component="a" href="https://github.com/hvoyvng" sx={listStyle}>
                                    <ListItemIcon>
                                        <GitHubIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="GitHub: Visit My GitHub" />
                            </ListItem>
                            <Divider />
                            <ListItem disablePadding button component="a" href="https://www.linkedin.com/in/haoyang-yu-692641226" sx={listStyle}>
                                    <ListItemIcon>
                                        <LinkedInIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="LinkedIn: Visit My LinkedIn" />
                            </ListItem>
                            <Divider />
                            <ListItem disablePadding sx={listStyle}>
                                    <ListItemIcon>
                                        <LocalPhoneIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Phone Number : (626)-727-1877" />
                            </ListItem>
                        </List>
                    </Grid>
                </Grid>
                <Grid sx={picStyling}>
                </Grid>
            </Container>
        </>
    )
}

export default ContactPage;