import React from "react";
import RandomColor from "../../components/RandomColor"
import feature from '../../assets/images/feature-saladbar.jpg'
import './Home.scss'
import MaterialUi from "./MaterialUi";


class Home extends React.Component {
    render() {
        return (
            <div>
                {/* <img src={feature} className='feature' /> */}
                <MaterialUi />
            </div>
        )
    }
}

export default RandomColor(Home)