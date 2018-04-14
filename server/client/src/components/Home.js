import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getData } from '../actions';

class Home extends Component {
    componentDidMount() {
        this.props.getData();
    };

    render() {
        console.log(this.props);
        return (
            <div>
              
                <Link to={'/Cart'}>My Cart</Link>
                <div>
                    {/* {this.props.data.map((d) => {
                        return (
                            <div>{d}</div>
                            )
                        })
                    } */}
                </div>
            </div>
        )
    }
};

const mapStateToProps = (state) => {
    return {
        data: state.data
    }
};



export default connect(mapStateToProps, { getData })(Home);