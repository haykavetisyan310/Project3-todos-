import React, {Component} from 'react';
import {connect} from "react-redux";
import _ from 'lodash'
import {delALL, dell, rend} from "../store/actions";


class Table extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: {},
        }
    }



    deleteALL = () => {
        this.props.delALL()
    };

    handleChange = (i) => {
        this.props.rend();
        let {value} = this.state;
        if(i in value){
            delete value[i]
        }else{
            value[i] = i;
        }
    };

    delete = () => {
        let {value} = this.state;
        this.props.dell(value)

    };

    render() {
        let {data,open} = this.props;
        let {value} = this.state;
        return (
            <section className='table'>
                {open ? <div className='tableBlock'>
                {_.map(data,(i,v) => (
                        <div key={v} className='tableSect'>
                            <form>
                                <input type='checkbox' className='check' onChange={() => this.handleChange(i)}/>
                            </form>
                            <h2 style={i === value[i] ? {
                                textDecoration:'line-through'
                            }: null}>{i}</h2>
                        </div>
                    ))}
                    <div className='options'><h3 onClick={this.deleteALL}>Delete All</h3>
                        <h3 onClick={this.delete}>Delete</h3>
                    </div>
                </div>: null}
            </section>
        );
    }
}





const mapStateToProps = (state) => ({
    data:state.data,
    open:state.open,
});

const mapDispatchToProps = {
        delALL,
        dell,
        rend
};

const Container = connect(
    mapStateToProps,
    mapDispatchToProps,
)(Table);

export default (Container);
