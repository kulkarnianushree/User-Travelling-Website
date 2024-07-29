import React, { useState } from 'react';
import { IconButton } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import { Button } from 'react-bootstrap';
import Stay from './Stay';
import './Navigation.css'; // Import the CSS file

const Navigation = () => {
    const [showStayOptions, setShowStayOptions] = useState(false);

    const StayOptionHandler = () => {
        setShowStayOptions(true);
    };

    const closeStayOptions = () => {
        setShowStayOptions(false);
    };

    return (
        <div className="navigation-container">
            <div className="navigation-logo">
                <img src='' alt='logo' />
                <h4><strong>Stay with Sharpner</strong></h4>
            </div>
            <div className="navigation-buttons">
                <div className="navigation-button">
                    <Button type='button' variant='light' onClick={StayOptionHandler}>Stay options</Button>
                    <IconButton>
                        <ExpandMoreIcon />
                    </IconButton>
                </div>
                <div className="navigation-button">
                    <IconButton>
                        <FileDownloadIcon />
                    </IconButton>
                    <Button type='button' variant='light'>Get the app</Button>
                </div>
            </div>
            {showStayOptions && <Stay onClose={closeStayOptions} />}
        </div>
    );
};

export default Navigation;
