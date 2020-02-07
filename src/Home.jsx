import React, { Component } from 'react';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state={
            loading: props.loading,
            name: props.name
        }
        this.ChangeLoading = this.ChangeLoading.bind(this)
    }
    ChangeLoading()
    {
        console.log(this.state.name);
        if(this.state.loading==true)
        {
            this.setState({loading: false})
        }
        else if(this.state.loading==false)
        {
            this.setState({loading: true})
        }

    }
    render() {

        let loading;

        if(this.state.loading==true)
        {
            loading = <Myspinner />
        }
        else
        {
            loading = <HomeInfo />
        }
        const isloading = this.state.loading;
        return (
            <div>
                {loading}
                <br /><br />
                <center>
                    {isloading ? (
                        <button className="btn btn-primary" type="button" onClick={this.ChangeLoading} disabled={false}>
                            <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                            Loading...
                        </button>
                    ): ( <button className="btn btn-primary" type="button" onClick={this.ChangeLoading} disabled={false}>
                       Change State
                    </button>)}

                </center>
            </div>

        );
    }
}

function HomeInfo() {

    return (
        <div className="row">

            <div className="col-12 text-center">
                Name From props:
            </div>
        </div>
    );
}



function Myspinner() {
    return (
        <div className="row">

            <div className="col-12 text-center">
                <div className=" spinner-grow text-info" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            <br />
            <br />

            </div>
            <br />
            <br />
        </div>
    );
}



export default Home;