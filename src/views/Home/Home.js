import React from "react";
import RandomColor from "../../components/RandomColor"
import feature from '../../assets/images/feature-saladbar.jpg'
import './Home.scss'


class Home extends React.Component {
    render() {
        return (
            <div>
                <h4>Hello My World</h4>
                <img src={feature} className='feature' />
            </div>
        )
    }
}

export default RandomColor(Home)