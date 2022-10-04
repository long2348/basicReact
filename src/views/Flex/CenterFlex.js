import React from 'react';
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

function CenterFlex() {
    return (
        <Box bgcolor='pink' flex={2}>
            <h2>Center Content</h2>
            <Typography>This is FlexCenter Content</Typography>
        </Box>
    );
}

export default CenterFlex;
