import React from 'react';
import { IData } from '../interfaces';
import data from '../data.json';

class Header extends React.Component<any, { goods: IData[] }> {
  constructor(props: IData[]) {
    super(props);
    this.state = { goods: data };
  }
  componentDidMount() {
    console.log('didMount');
  }

  componentWillUnmount() {
    console.log('WillMount');
  }
  render() {
    const search = () => {
      const input: string = (document.getElementById('search') as HTMLInputElement).value;
      console.log(input);
      const arr = [...this.state.goods];
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
      console.log(newArr);
      this.props.cbSearchChanged(newArr);
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
      </div>
    );
  }
}

export default Header;
