import React from 'react';

class TodoForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isValid: false,
            value: ''
        };
    }

    handleSubmit(e) {
        e.preventDefault();
        if (this.state.value.trim()) {
            this.props.onSubmit(this.state.value.trim());
        }
        this.setState({ value: '' })
    }

    handleChange(e) {
        /*
         * Using a callback as second param for setState to ensure that
         * this.state.value has been updated before setting this.state.isValid
         */
        this.setState({ value: e.target.value });
    }

    render () {
        return (
            <form action="#" onSubmit={(e) => this.handleSubmit(e)}>
                <div className="form-wrapper">
                    <input type="text" placeholder="Type your text here" className="text-field"
                           value={this.state.value} onChange={(e) => this.handleChange(e)}/>
                    <input type="submit" value="Submit"/>
                </div>
            </form>
        );
    }
}

TodoForm.propTypes = {
    onSubmit: React.PropTypes.func
};

export default TodoForm;