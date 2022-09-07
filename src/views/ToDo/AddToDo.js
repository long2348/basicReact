import React from "react";

class AddToDo extends React.Component {
    state = {
        title: '',
    }

    handleOnChange = (event) => {
        this.setState({
            title: event.target.value
        })
    }

    onCLick = () => {
        let todo = {
            id: Math.floor(Math.random() * 10001),
            title: this.state.title
        }
        this.props.addNewToDo(todo)
        this.setState({
            title: ''
        })
    }


    render() {
        let { title } = this.state;
        return (
            <div className="add-todo">
                <input type='text' value={title}
                    onChange={(event) => this.handleOnChange(event)} />
                <button onClick={() => this.onCLick()}>
                    Add
                </button>
            </div>
        )
    }
}

export default AddToDo