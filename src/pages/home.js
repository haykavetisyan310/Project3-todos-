import React, {Component} from 'react';
import Header from '../components/header'
import Input from '../components/input'
import Table from '../components/table'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }


    render() {
        return (
            <>
              <Header/>
              <Input/>
              <Table/>
            </>
        );
    }
}

export default App;
