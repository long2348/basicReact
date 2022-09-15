import React from "react";
import DeleteIcon from '@mui/icons-material/Delete'
import SendIcon from '@mui/icons-material/Send'
import { Typography, Box, Stack, Button, Gird, Grid } from "@mui/material";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

class MaterialUi extends React.Component {
    render() {
        return (
            <>
                <Box mt={5}>
                    <Typography variant='h1' gutterBottom>
                        MUI 5
                    </Typography>
                    <Typography variant="subtitle1" align="justify" px={5}>
                        Ascenders are an upward vertical stroke found in certain lowercase
                        letters that extend beyond either the cap height or baseline.
                        Descenders are the downward vertical stroke in these letters. In some cases, a collision between these strokes
                        can occur when the line height (the vertical distance between baselines) is too tight.
                        Ascenders are an upward vertical stroke found in certain lowercase
                        letters that extend beyond either the cap height or baseline.
                        Descenders are the downward vertical stroke in these letters. In some cases, a collision between these strokes
                        can occur when the line height (the vertical distance between baselines) is too tight.
                    </Typography>
                </Box>
                <Grid container mt={2} px={5} spacing={5}>
                    <Grid item xs={4}>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                            >
                                <Typography>Accordion 1</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography align="justify">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                            >
                                <Typography>Accordion 2</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography align="justify">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </Grid>
                    <Grid item xs={8}>
                        <Typography paragraph={true} align='justify'>
                            Ascenders are an upward vertical stroke found in certain lowercase
                            letters that extend beyond either the cap height or baseline.
                            Descenders are the downward vertical stroke in these letters. In some cases, a collision between these strokes
                            can occur when the line height (the vertical distance between baselines) is too tight.
                            Ascenders are an upward vertical stroke found in certain lowercase
                            letters that extend beyond either the cap height or baseline.
                            Descenders are the downward vertical stroke in these letters. In some cases, a collision between these strokes
                            can occur when the line height (the vertical distance between baselines) is too tight.
                        </Typography>
                    </Grid>
                </Grid>
                <Stack direction='row' spacing={2} alignItems="center" justifyContent="center">
                    <Button variant="text">Text</Button>
                    <Button variant="contained" startIcon={<DeleteIcon />}>Contained</Button>
                    <Button variant="outlined" startIcon={<SendIcon />}>Outlined</Button>
                    <Button variant="disable">Disable</Button>
                </Stack>

            </>
        )
    }

}

export default MaterialUi