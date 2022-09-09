import axios from "axios";
import React from "react";
import RandomColor from "../../components/RandomColor";
import './User.scss'

class User extends React.Component {
    state = {
        listDrink: [],
    }
    async componentDidMount() {
        // axios.get('http://42.115.221.44:8080/devcamp-pizza365/drinks')
        //     .then(res => {
        //         console.log("data: ", res.data)
        // }

        let res = await axios.get('http://42.115.221.44:8080/devcamp-pizza365/drinks')
        this.setState({
            listDrink: res && res.data ? res.data : []
        })
    }

    render() {
        let { listDrink } = this.state
        console.log("Drink list: ", listDrink)
        return (
            <>
                <div className="list-drink-container">
                    <div className="title">
                        <h4>List drink: </h4>
                    </div>
                    <div className="list-drink-content">
                        {listDrink && listDrink.length > 0 &&
                            listDrink.map((item, index) => {
                                return (
                                    <div className="child" key={item.maNuocUong}>
                                        +{index + 1}: {item.tenNuocUong}
                                    </div>
                                )
                            })
                        }

                    </div>
                </div>

            </>

        )
    }
};

export default RandomColor(User)