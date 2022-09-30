import React from 'react';

class AboutUs extends React.Component {
  render() {
    return (
      <div className="about">
        <div className="about__paragraph">
          <p className="about__title">Здесь должна быть страница &quot;О нас&quot;. Но ее нет.</p>
          <p className="about__title">
            <span className="title_yellow">Не путать со страницей 404! </span>
            Вы можете перейти на страницу 404, используя ссылку в хедере!
          </p>
          <p className="about__title">
            У автора просто не было вдохновения
            <span className="title_yellow"> создавать страницу &quot;О нас&quot;!</span>
          </p>
        </div>
        <div className="about__image"></div>
      </div>
    );
  }
}

export default AboutUs;
