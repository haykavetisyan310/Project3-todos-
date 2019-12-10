import React, {Component} from 'react';
import {connect} from "react-redux";
import save from "../store/actions";

class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',

        }
    }


    handleChange = (ev) => {
        let value = ev.target.value;
        this.setState({value});

    };

    saveValue = () => {
        const {value} = this.state;
        this.props.save(value);
        this.setState({value:''})
    };

    render() {
        let {value} = this.state;
        return (
            <form className='inputForm'>
                <input type='text' onChange={this.handleChange} className='input'
                placeholder='What needs to be done?'
                value={value}
                />
                <span className='btn' onClick={this.saveValue}>Save</span>
            </form>
        );
    }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {
        save
};

const Container = connect(
    mapStateToProps,
    mapDispatchToProps,
)(Input);

export default (Container);



