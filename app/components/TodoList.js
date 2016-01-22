import React from 'react';

class TodoList extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            editing: null,
            text: null
        }
    }

    handleEdit (e, id) {
        this.setState({ editing: id, text: e.target.value});
        this.props.editTodo(id, e.target.value);
        this.setState({ editing: null, text: null});
    }

    render () {
        const filteredList = this.props.list.filter( task => {
            if (this.props.filter == 'all') {
                return true;
            } else if (this.props.filter == 'active') {
                return task.isDone == false;
            } else if (this.props.filter == 'completed') {
                return task.isDone == true;
            }
        });

        const items = filteredList.map( todo => {
            const id = todo.id;
            const text = todo.text;
            const isDone = todo.isDone;

            return (
                <li key={id} className={ isDone ? 'task-done' : ''}>
                    <input type="checkbox" checked={isDone} onChange={ () => this.props.updateDone(id, isDone) } />
                    <input type="text" value={id == this.state.editing ? this.state.text : text}
                           disabled={isDone}
                           onChange={ (e) => this.handleEdit(e, id) } />
                    { isDone ? '' : <button onClick={ () => this.props.removeTodo(id) }>x</button> }
                </li>
            );
        });
        
        return (
            <ul className="tasklist">
                {items}
            </ul>
        );
    }
}

TodoList.propTypes = {
    list: React.PropTypes.array,
    filter: React.PropTypes.string,
    updateDone: React.PropTypes.func,
    removeTodo: React.PropTypes.func,
    editTodo: React.PropTypes.func
};

export default TodoList;