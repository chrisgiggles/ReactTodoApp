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

    it('doesn\'t add a todo if value is empty', function() {
        todo.handleSubmit(''); //Empty string
        expect(todo.state.todos.length).toEqual(1); //Still equals 1
    });

    it('doesn\'t add a todo if value is of invalid type', function() {
        todo.handleSubmit(['Hello there', {'an': 'object'}]);
        expect(todo.state.todos.length).toEqual(1);
    });

    it('deletes a todo from the list', function() {
        todo.removeTodo(0);
        expect(todo.state.todos.length).toEqual(0);
    });

    it('expects id to be a number', function() {
        todo.handleSubmit('Hello');
        todo.handleSubmit('There');
        todo.handleSubmit('Friends');
        expect(todo.state.todos[0].id).toBeA('number');
    });

    it('edits the text value of a todo', function() {
        var item = todo.state.todos[todo.state.todos.length - 1];
        todo.editTodo(item.id, 'Sea Men');
        expect(item.text).toBe('Sea Men');
    });

    it('does not edit the text value of a todo if the value is of invalid type', function() {
        var item = todo.state.todos[todo.state.todos.length - 1];
        todo.editTodo(item.id, ['Harry Balzac']);
        todo.editTodo(item.id, {name: 'Harry Balzac'});
        todo.editTodo(item.id, 2);
        todo.editTodo(item.id, /\.js?$/);

        expect(item.text).toBe('Sea Men');
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