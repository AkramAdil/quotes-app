import React from 'react';
const PersonalPicture = ({picPath}) => {
    return (
        <div className="personal-picture">
            <img src={picPath} alt="personal" id="picture"/>
        </div>
    );
};

export default PersonalPicture;