import React from 'react';
import {NavLink, Route} from 'react-router-dom';
import Profile from './Profile';

const Profiles = () => {
    const activeStyle = {
        background : 'black',
        color : 'pink'
    };
    return(
        <div>
            <h3>블랙핑크 멤버</h3>
            <ul>
                <li>
                    <NavLink activeStyle={activeStyle} to="/profiles/jenny">제니</NavLink>
                </li>
                <li>
                    <NavLink activeStyle={activeStyle} to="/profiles/jisoo">지수</NavLink>
                </li>
                <li>
                    <NavLink activeStyle={activeStyle} to="/profiles/rose">로제</NavLink>
                </li>
                <li>
                    <NavLink activeStyle={activeStyle} to="/profiles/lisa">리사</NavLink>
                </li>
            </ul>
            <Route path="/profiles" exact={true} render={() => <div>멤버를 선택해주세요</div>}/>
            <Route path="/profiles/:username" component={Profile}/>
        </div>
    )
}

export default Profiles;