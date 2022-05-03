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
            <p>هذا الموقع ليس فهرس للاقتباسات وليس أيضاً للاقتباسات التحفيذية، السبب الرئيسي في بنائي لهذا 
                الموقع هو توظيف مهاراتي كمطور ويب في بناء تطبيق ويب حقيقي واخترت أن يكون موقع خاص بالاقتباسات ليعرف
                القارئ طريقة تفكير بعض من المؤثرين في هذا العالم عن طريق مقولاتهم سواء قالوها شخصياً أو مكتوبة.
            </p>
            <h1>من أنا؟</h1>
            <p>
                انا 
                <span className="author-name">أكرم عادل</span> مطور واجهات أمامية (front-end devloper) أستخدم جافاسكريبت و رياكت لبناء تطبيقات الويب، حاليا أعمل حر.
            </p>
        </div>
        </div>
    );
};

export default About;