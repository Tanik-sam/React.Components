import React from 'react';
import { MyProps, MyState, IData } from '../../interfaces';
import data from '../../data.json';
import Cards from '../../components/cards';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

class Main extends React.Component<MyProps, { dataState: IData[] }> {
  constructor(props: MyProps) {
    super(props);
    this.state = { dataState: data };
  }
  searchChanged = (dataChanged: IData[]) => {
    this.setState({ dataState: dataChanged });
  };
  render() {
    const cards = this.state.dataState.map((card) => (
      <Cards
        key={card.art}
        position={card.position}
        category={card.category}
        name={card.name}
        art={card.art}
        epocsid={card.epocsid}
        epocsidColor={card.epocsidColor}
        woodType={card.woodType}
        woodColor={card.woodColor}
        price={card.price}
        freeShipping={card.freeShipping}
        image={card.image}
        date={card.date}
        like={card.like}
      />
    ));
    const search = () => {
      const input: string = (document.getElementById('search') as HTMLInputElement).value;
      const arr = [...this.state.dataState];
      console.log (input)
      if (!input) {
        console.log (input)
        this.searchChanged(data)
      } else {
      const newArr: IData[] = arr.filter((obj: IData) => {
        let k: keyof IData;
        for (k in obj) {
          if (typeof obj[k] == 'string') {
            if (
              obj[k] == input.toLowerCase() ||
              (obj[k] as string).toLowerCase().indexOf(input.toLowerCase()) !== -1
            ) {
              return true;
            }
          }
        }
      });
      this.searchChanged(newArr);
    }
  };
    return (
      <div>
        <header className="header">
          <div className="wrapper header__wrapper">
            <div className="header__logo-line">
              <a href="index.html" className="logo">
                <div className="logo__image"></div>
              </a>
            </div>
            <div className="header__search">
              <input
                id="search"
                type="text"
                name="text"
                placeholder="Поиск"
                className="search"
                onChange={search}
              />
            </div>
            <a href="#" className="navigation__link logo_telegram">
              <div className="logo__contact logo_telegram">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M18.65 0.131505L0.933877 8.27737C-0.275179 8.8564 -0.268184 9.66063 0.71205 10.0192L5.26049 11.7111L15.7843 3.79398C16.2819 3.43298 16.7365 3.62718 16.3628 4.02274L7.83648 13.198H7.83448L7.83648 13.1992L7.52273 18.7894C7.98237 18.7894 8.18521 18.538 8.44301 18.2414L10.6523 15.6798L15.2477 19.7271C16.095 20.2835 16.7036 19.9975 16.9144 18.7918L19.931 1.84003C20.2398 0.363835 19.4584 -0.304562 18.65 0.131505Z" />
                </svg>
              </div>
            </a>
          </div>
        </header>
        <section className="cards">
          <div className="wrapper cards_wrapper">
            <h1 className="cards__title title">
              Изделия <span className="title_yellow"> из дерева </span>
            </h1>
            <p className="cards__text">Сделай акцент на уникальность.</p>
            <div className="layout-2-column cards-wrapper">{cards}</div>
          </div>
        </section>
        <footer className="footer">
          <div className="wrapper footer__wrapper">
            <div className="footer-navigation">
              <div className="footer-navigation__column">
                <a href="https://rs.school/" className="logo-footer">
                  <div className="logo-object">
                  </div>
                </a>
              </div>
              <div className="footer-navigation__column">
                <h4 className="footer-navigation__title">©2022 Изделия из дерева</h4>
              </div>
              <div className="footer-navigation__column">
                <div className="footer__link">
                  <FontAwesomeIcon
                    icon={faGithub}
                    style={{ color: '#F4D011', marginRight: '10px', fontSize: '36px' }}
                  />
                  <div className="footer-navigation__column">
                    <a className="person-link" href="https://github.com/Tanik-sam">Tanik-sam</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default Main;
