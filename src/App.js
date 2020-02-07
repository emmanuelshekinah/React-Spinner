import React, {Component} from 'react';
import Home from './Home';

class App extends Component {
    constructor() {
        super();
        this.state={
            loading1: true,
            name: 'Emmanuel Shekinah'
        }
        this.ChangeLoading1 = this.ChangeLoading1.bind(this)

    }


    ChangeLoading1()
    {
        console.log(this.state.name);
        if(this.state.loading1==true)
        {
            this.setState({loading1: false})
        }
        else if(this.state.loading1==false)
        {
            this.setState({loading1: true})
        }

    }
    render() {

        return (
            <div className="container">
                <Home name={'Hello'} loading={true}/>

                {/*<br />*/}
                {/*<center><button onClick={this.ChangeLoading1}>Change state in Parent</button></center>*/}
            </div>
        );
}



}


export default App;
