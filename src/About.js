import React from 'react';
import qs from 'qs';

const About = ({location}) => {
    const query = qs.parse(location.search, {
        ignoreQueryPrefix : true
    });
    const showDetail = query.detail === 'true';
    return(
        <div>
            <h1>About</h1>
            <p>소개하는 페이지</p>
            {showDetail && <p>detail값을 true로 설정했더니 zzan~</p>}
        </div>
    )
}

export default About;