import React from "react";
import { Stack } from "@mui/material";
import LeftFlex from "./LeftFlex";
import CenterFlex from './CenterFlex'
import RightFlex from "./RightFLex";

class MainFlex extends React.Component {
    render() {
        return (
            <>
                <div>
                    <h1>Main Flex</h1>
                    <Stack direction='row' justifyContent='space-between'>
                        <LeftFlex />
                        <CenterFlex />
                        <RightFlex />
                    </Stack>
                </div>

            </>
        )
    }
}

export default MainFlex