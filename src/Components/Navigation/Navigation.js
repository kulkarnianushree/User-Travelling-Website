import React, { useState } from 'react';
import { IconButton } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import { Button } from 'react-bootstrap';
import Stay from './Stay';
import './Navigation.css'; 
import { NavLink, useNavigate} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Authaction } from '../../Store/auth';
const Navigation = () => {
    const [showStayOptions, setShowStayOptions] = useState(false);
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const StayOptionHandler = () => {
        setShowStayOptions(true);
    };

    const closeStayOptions = () => {
        setShowStayOptions(false);
    };

    const YourBookingHandler = () =>{
        navigate('/YourBooking')
    }

    const LogoutHandler=()=>{
        dispatch(Authaction.Logout())
        navigate('/')
    }

    return (
        <div className="navigation-container">
            <div className="navigation-logo">
                <img src='' alt='logo' />
                <h4><strong>Stay with Sharpner</strong></h4>
            </div>
            <div className="navigation-buttons">
                <div className="navigation-button">
                    <div>Stay options</div>
                    <IconButton onClick={StayOptionHandler}>
                        <ExpandMoreIcon />
                    </IconButton>
                </div>
                <div className="navigation-button">
                    <IconButton>
                        <FileDownloadIcon />
                    </IconButton>
                    <Button type='button' variant='light'>Get the app</Button>
                </div>
                <div>
                    <NavLink to='/YourBooking' onClick={YourBookingHandler}>YourBooking</NavLink>
                </div>
            </div>
            {showStayOptions && <Stay onClose={closeStayOptions} />}
            <div>
                <Button type='button' variant='dark' onClick={LogoutHandler}>Logout</Button>
            </div>
        </div>
    );
};

export default Navigation;
