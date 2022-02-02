import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import ContactImage from '../../images/contact.jpg'

const ContactPage = (props) => {
    const aboutStyling = {
        display: 'inline-block',
        width: '25%',
        backgroundColor: '#EEE',
        padding: '4em',
        marginTop: '10%',
        boxShadow: '8px 16px 32px #000',
        marginRight: "2em"
    }
    const picStyling = {
        display: 'inline-block',
        position: 'absolute',
        width: '50%',
        height: '70%',
        backgroundImage: `url(${ContactImage})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        marginTop: "2em"
        }

    return (
        <>
            <Container>
                <Grid sx={aboutStyling}>
                    <Grid justifyContent='center' alignItems='center'>
                        <p>Hello, My name is Haoyang Yu. I am currently learning web developer in order to become a ful stack web developer. I am currently taking classes at the University of California, Irvine to learn more about web development and back-end development.</p>
                    </Grid>
                </Grid>
                <Grid sx={picStyling}>
                </Grid>
            </Container>
        </>
    )
}

export default ContactPage;