import { Component } from 'react';
import './app-filter.css';

class AppFilter extends Component{
    constructor(props) {
        super(props);
        this.state = {
            filter: ''
        }
    }

    onUpdateFilter = (e) => {
        const filterType = e.target.getAttribute('data-filter');
        console.log(filterType);
        this.setState({
            filter: filterType
        })
        this.props.onUpdateFilter(filterType);
        
        this.activeBtn(e);
    }

    activeBtn = (e) => {
        const target = e.target;
        
        if (target && target.classList.contains('btn')) {
            const children = target.closest('.btn-group').querySelectorAll('button');
            console.log(children);
            children.forEach(item => {
                item.classList.remove('btn-light');
                item.classList.add('btn-outline-light');
            });
            target.classList.add('btn-light');
            target.classList.remove('btn-outline-light');
        }
    }
    
    
    render() {
        return (
            <div className="btn-group">
                <button 
                    className="btn btn-light"
                    type='button'
                    onClick={this.onUpdateFilter}>
                        Все сотрудники
                </button>
                <button 
                    className="btn btn-outline-light"
                    type='button'
                    data-filter="rise"
                    onClick={this.onUpdateFilter}
                    >
                        На повышение
                </button>
                <button 
                    className="btn btn-outline-light"
                    type='button'
                    data-filter="moreThan1000"
                    onClick={this.onUpdateFilter}
                    >
                        З/П больше 1000$
                </button>
            </div>
        )
    }
};

export default AppFilter;