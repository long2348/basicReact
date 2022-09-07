import React from "react";
import './ListToDo.scss'
import AddToDo from "./AddToDo";

class ListToDo extends React.Component {
    state = {
        listToDo: [
            { id: "todo1", title: 'Enjoy' },
            { id: "todo2", title: 'Angry' },
            { id: "todo3", title: 'Interesting' },
        ]
    }

    addNewToDo = (todo) => {
        this.setState({
            listToDo: [...this.state.listToDo, todo]
        })
    }

    render() {
        let { listToDo } = this.state
        return (
            <div className="list-todo-container">
                <AddToDo
                    addNewToDo={this.addNewToDo}
                />
                <div className="list-todo-content">
                    {listToDo && listToDo.length > 0 &&
                        listToDo.map((item, index) => {
                            return (
                                <div className="todo-child" key={item.id}>
                                    To Do {index + 1}:&nbsp; {item.title}
                                    <span><button className="mx-2 edit">Edit</button></span>
                                    <span><button className="delete">Delete</button></span>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}
export default ListToDo