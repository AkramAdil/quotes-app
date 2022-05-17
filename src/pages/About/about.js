import React from 'react';
import './about_style.css'
import Header from '../../components/header';
import Search from '../../components/search';
const About = () => {
    return (
        <div className="container">
            <Header/>
            <Search/>
            <div className="about">
            <h1>عن موقع اقتباسات</h1>
            <p> يحتوي الموقع بعض من أقوال شخصيات مشهورة لها تأثير ويتعرف القارئ على طريقة تفكير عن طريق ما قالوه سواء قالوه شخصيا أو مكتوباً أو بأي طريقة كانت

            </p>
            <h1>من أنا؟</h1>
            <p>
                انا 
                <a className="author-name" href="https://github.com/AkramAdil">أكرم عادل</a> مطور واجهات أمامية (front-end devloper) أستخدم جافاسكريبت و رياكت لبناء تطبيقات الويب، حاليا أعمل حر.
            </p>
        </div>
        </div>
    );
};

export default About;