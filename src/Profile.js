import React from 'react';
import WithRouterSample from './WithRouterSample';

const data = {
    jenny : {
        name : '제니',
        description : '블랙핑크 제니'
    },
    jisoo : {
        name : '지수',
        description : '블랙핑크 지수 예쁘다'
    },
    rose : {
        name : '로제',
        description : '블랙핑크 메인보컬 로제'
    },
    lisa : {
        name : '리사',
        description : '블랙핑크 리사'
    }
};

const Profile = ({match}) => {
    const {username} = match.params;
    const profile = data[username];
    if (!profile) {
        return <div>존재하지 않는 멤버입니다.</div>
    }
    return (
        <div>
            <h3>
                {username}({profile.name})
            </h3>
            <p>{profile.description}</p>
        <WithRouterSample/>
        </div>
    );
};

export default Profile;