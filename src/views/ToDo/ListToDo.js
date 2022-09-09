import React from "react";
import './ListToDo.scss'
import AddToDo from "./AddToDo";
import { toast } from 'material-react-toastify';
import RandomColor from "../../components/RandomColor";

class ListToDo extends React.Component {
    state = {
        listToDo: [
            { id: "todo1", title: 'Enjoy' },
            { id: "todo2", title: 'Angry' },
            { id: "todo3", title: 'Interesting' },
        ],
        editToDo: {},
    }

    addNewToDo = (todo) => {
        this.setState({
            listToDo: [...this.state.listToDo, todo]
        })
        toast.success('ez pz')
    }

    handleDeteleClick = (todo) => {
        let currentTodo = this.state.listToDo;
        currentTodo = currentTodo.filter(item => item.id !== todo.id)
        this.setState({
            listToDo: currentTodo
        })
        toast.error('already delete')
    }

    handleEdit = (todo) => {
        let { editToDo, listToDo } = this.state;
        let emptyObj = Object.keys(editToDo).length === 0;
        //save
        if (emptyObj === false && editToDo.id === todo.id) {
            let listToDoCopy = [...listToDo]
            //Find index of specific object using findIndex method.    
            let objIndex = listToDoCopy.findIndex((item => item.id === todo.id));

            //Update object's name property.
            listToDoCopy[objIndex].title = editToDo.title;

            this.setState({
                listToDo: listToDoCopy,
                editToDo: {}
            });
            toast.success('update success')
            return;
        }
        else {
            //edit
            this.setState({
                editToDo: todo
            })
        }

    }

    handleOnChangeEdit = (event) => {
        let editToDo = { ... this.state.editToDo }
        editToDo.title = event.target.value;
        this.setState({
            editToDo: editToDo
        })
    }

    render() {
        let { listToDo, editToDo } = this.state
        let emptyObj = Object.keys(editToDo).length === 0;
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
                                    {emptyObj === true ?
                                        <span>{index + 1}:&nbsp; {item.title}</span>
                                        :
                                        <>
                                            {editToDo.id === item.id ?
                                                <span>
                                                    {index + 1}&nbsp;<input
                                                        onChange={(event) => this.handleOnChangeEdit(event)}
                                                        value={editToDo.title} /></span>
                                                :
                                                <span>{index + 1}:&nbsp; {item.title}</span>
                                            }
                                        </>

                                    }
                                    <span><button
                                        onClick={() => this.handleEdit(item)}
                                        className="mx-2 edit">
                                        {emptyObj === false && editToDo.id === item.id ? 'Save' : 'Edit'}
                                    </button></span>
                                    <span><button
                                        onClick={() => this.handleDeteleClick(item)}
                                        className="delete">
                                        Delete</button></span>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}
export default RandomColor(ListToDo)