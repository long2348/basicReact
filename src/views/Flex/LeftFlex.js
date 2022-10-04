import React from 'react';
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

class LeftFlex extends React.Component {
    state = {}
    render() {
        return (
            <Box bgcolor='lightblue' flex={1}>
                <h2>Left Content</h2>
                <Typography >This is FlexLeft Content</Typography>
            </Box>
        );
    }
}

export default LeftFlex;