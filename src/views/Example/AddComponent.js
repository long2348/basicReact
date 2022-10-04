import { toast } from "material-react-toastify";
import React from "react";

class AddComponent extends React.Component {
    state = {
        title: '',
        salary: '',
    }

    handleOnTitleJob = (event) => {
        this.setState({
            title: event.target.value
        })
    }

    handleOnSalary = (event) => {
        this.setState({
            salary: event.target.value
        })
    }

    handleOnClick = () => {
        this.props.addNewJob({
            id: Math.floor(Math.random() * 10001),
            title: this.state.title,
            salary: this.state.salary,
        });

        this.setState({
            title: '',
            salary: '',
        })
        toast.success('ez pz')
    }

    render() {
        return (
            <>
                <h4>1st Component</h4>
                <form>
                    <label htmlFor="title">Title Job:</label><br />
                    <input
                        type="text"
                        id="fname"
                        onChange={(event) => this.handleOnTitleJob(event)}
                        value={this.state.title} /><br />
                    <label htmlFor="salary">Salary:</label><br />
                    <input
                        type="text"
                        id="lname"
                        onChange={(event) => this.handleOnSalary(event)}
                        value={this.state.salary} /><br /><br />
                    <input
                        type="button"
                        value='submit'
                        onClick={() => this.handleOnClick()} />
                </form>
            </>
        )

    }
}

export default AddComponent