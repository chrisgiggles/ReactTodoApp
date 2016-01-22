var React = require('react/addons');
var TestUtils = React.addons.TestUtils;
var expect = require('expect');
var Todo = require('./../app/components/Todo').default;
var TodoList = require('./../app/components/TodoList').default;

describe('Todo', function() {
    var todo = TestUtils.renderIntoDocument(<Todo/>);
    it('renders a form', function() {
        var form = TestUtils.findRenderedDOMComponentWithTag(todo, 'form');
        expect(form).toExist();
    });

    it('adds a todo', function() {
        todo.handleSubmit('A todo');
        expect(todo.state.todos.length).toEqual(1);
    });

    it('doesn\'t add a todo', function() {
        todo.handleSubmit(''); //Empty string
        expect(todo.state.todos.length).toEqual(1);
    });

    it('deletes a todo from the list', function() {
        todo.removeTodo(1);
        expect(todo.state.todos.length).toEqual(0);
    });
});


describe('TodoList', function() {
    var list = [{
        text: "A todo-item",
        isDone: false,
        id: 1
    }];

    it('renders list item', function() {
        var todolist = TestUtils.renderIntoDocument(<TodoList list={list} filter="all" />);
        var listitem = TestUtils.findRenderedDOMComponentWithTag(todolist, 'li');
        expect(listitem).toExist();
    })
});