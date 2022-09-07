import React from 'react';

class MyFirstComponent extends React.Component {
    state = {
        firstname: '',
        lastname: '',
    }

    handleOnFirstName = (event) => {
        this.setState({
            firstname: event.target.value
        })
    }

    handleOnLastName = (event) => {
        this.setState({
            lastname: event.target.value
        })
    }

    handleOnClick = () => {
        // event.prevenDefault(); 
        console.log(this.state);
    }

    render() {
        return (
            <form>
                <label htmlFor="fname">First name:</label><br />
                <input
                    type="text"
                    id="fname"
                    onChange={(event) => this.handleOnFirstName(event)}
                    value={this.state.firstname} /><br />
                <label htmlFor="lname">Last name:</label><br />
                <input
                    type="text"
                    id="lname"
                    onChange={(event) => this.handleOnLastName(event)}
                    value={this.state.lastname} /><br /><br />
                <input
                    type="button"
                    value='submit'
                    onClick={() => this.handleOnClick()} />
            </form>
        )
    }

}
export default MyFirstComponent;