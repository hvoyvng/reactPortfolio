import { Navigate, useNavigate } from 'react-router-dom'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import SplashImage from '../../images/splash.jpeg'
import AppHeader from '../../components/AppHeader'

const Landing = (props) => {
    const navigate = useNavigate()

    const boxStyle = {
        display: 'block',
        position: 'absolute',
        textAlign: 'center',
        width: '100%',
        height: '100%',
        backgroundImage: `url(${SplashImage})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPositionX: '45%',
        color: '#000'

    }

    const middleBoxStyle = {
        display: 'inline-block',
        width: '25%',
        backgroundColor: '#EEE',
        padding: '4em',
        marginTop: '10%',
        boxShadow: '8px 16px 32px #000'

    }


    return (
        <Box sx={boxStyle}>
            <AppHeader />
            <Box sx={middleBoxStyle}>
                <h1>Hello!</h1>
                <h4>My name is Haoyang and I am a aspiring web developer</h4>
            </Box>
        </Box>
    )
}

export default Landing