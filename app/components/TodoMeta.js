import React from 'react';

class TodoMeta extends React.Component {

    render () {
        const done = this.props.list.filter( (task) => {
            return task.isDone;
        });

        const message = function() {
            if (this.props.list.length === 0) {
                return 'Add some tasks to your todo list';
            } else if (done.length === this.props.list.length) {
                return 'Go drink a beer, you deserve it!'
            } else {
                return `${done.length} of ${this.props.list.length} tasks completed`;
            }
        }.bind(this);
        
        return (
            <div>
                <div className="view-filter">
                    <a href="#" data-filter="all"
                       className={ this.props.filter === 'all' ? 'active' : ''}
                       onClick={ (e) => { this.props.setFilter(e.target.dataset.filter) }}>View All</a>
                    <a href="#" data-filter="active"
                       className={ this.props.filter === 'active' ? 'active' : ''}
                       onClick={ (e) => { this.props.setFilter(e.target.dataset.filter) }}>View Active</a>
                    <a href="#" data-filter="completed"
                       className={ this.props.filter === 'completed' ? 'active' : ''}
                       onClick={ (e) => { this.props.setFilter(e.target.dataset.filter) }}>View Completed</a>
                </div>
                { this.props.filter == 'completed'
                ? <div className="clear-todos">
                    <a href="#" onClick={ ()=> {this.props.clearCompleted() }}>Clear completed</a>
                </div>
                : ''}
                <p className="stats">{message()}</p>
            </div>
        );
    }
}

TodoMeta.propTypes = {
    list: React.PropTypes.array,
    filter: React.PropTypes.string,
    setFilter: React.PropTypes.func,
    clearCompleted: React.PropTypes.func
};

export default TodoMeta;