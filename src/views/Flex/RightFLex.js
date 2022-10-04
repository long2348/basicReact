import React from 'react';
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

function RightFlex() {
    return (
        <Box bgcolor='lightgreen' flex={3}>
            <h2>Right Content</h2>
            <Typography>This is FlexRight Content</Typography>
        </Box>
    );
}

export default RightFlex;