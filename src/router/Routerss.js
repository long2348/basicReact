import React from "react";
import { Route, Routes } from "react-router-dom";
import router from "./router";

class Routess extends React.Component {
    render() {
        return (
            <>
                <Routes>
                    {router.map(item => (
                        <Route path={item.path} element={<item.element />} exact />
                    ))
                    }
                </Routes>
            </>
        )
    }
}

export default Routess