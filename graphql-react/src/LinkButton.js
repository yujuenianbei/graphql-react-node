import React, { Component } from 'react';
import { Link } from 'react-router-dom'
class Linker extends Component {
    render() {
        return (
            <div className="bottom_nav">
                <ul className="bottom_nav_ul">
                    <li><Link to='/postArgument'><p>postArgument</p></Link></li>
                    <li><Link to='/postObject'><p>postObject</p></Link></li>
                    <li><Link to='/postMutation' ><p>postMutation</p></Link></li>
                    <li><Link to='/GraphQLSchema' ><p>GraphQLSchema</p></Link></li>
                    <li><Link to='/ConnectMysql' ><p>ConnectMysql</p></Link></li>
                </ul>
            </div>
        );
    }
}

export default Linker;
