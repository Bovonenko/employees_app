import { Component } from 'react';

import './employees-add-form.css';
// import './employees-add-form.scss';

class EmployeesAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            salary: '', 
            error: false
        }
    }

    onValueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        if (this.state.name.length > 2 && this.state.salary !== '') {
            this.props.onAdd(this.state.name, this.state.salary);
            this.setState({
                name: '',
                salary: '',
                error: false
            })
        } else {
            this.setState({
                error: true
            })
        }
    }

    render() {
        const {name, salary, error} = this.state;
        let className = "form-control new-post-label";
        if (error) {
            className += ' red';
        }

        return (
            <div className="app-add-form">
            <h3>Добавьте нового сотрудника</h3>
            <form 
                className="add-form d-flex"
                onSubmit={this.onSubmit}>
                <input type="text"
                    className={className}
                    placeholder="Как его зовут?" 
                    // required
                    minLength={3}
                    name="name"
                    value={name} // контролируемый элемент
                    onChange={this.onValueChange}/>
                <input type="number"
                    className={className}
                    placeholder="З/П в $?"
                    // required
                    name="salary"
                    value={salary}
                    onChange={this.onValueChange}/>
    
                <button type="submit"
                    className="btn btn-outline-light">Добавить</button>
    
            </form>
        </div>
        )
    }
};

export default EmployeesAddForm;