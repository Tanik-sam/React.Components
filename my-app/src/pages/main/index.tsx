import React from 'react';
import { IData } from '../../interfaces';
import data from '../../data.json';
import Cards from '../../components/cards';

class Main extends React.Component<
  Record<string, unknown>,
  { dataState: IData[]; input: string; formAddShow: boolean }
> {
  state = { dataState: data, input: localStorage.value || '', formAddShow: false };

  searchChanged = (dataChanged: IData[], inputChanged: string) => {
    console.log(inputChanged);
    this.setState({ dataState: dataChanged, input: inputChanged }, () => {
      localStorage.setItem('value', inputChanged);
    });
  };
  componentDidMount(): void {
    console.log('componentdidmount()');
  }
  componentWillUnmount(): void {
    console.log('componentWillUnmount()');
    localStorage.setItem('value', this.state.input);
  }
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
      if (!input) {
        this.searchChanged(data, input);
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
        this.searchChanged(newArr, input);
      }
    };
    const value = this.state.input || '';
    const addCard = () => {
      this.setState({ formAddShow: true });
    };
    return (
      <div>
        <div className="header__search">
          <input
            id="search"
            type="text"
            name="text"
            placeholder="??????????"
            className="search"
            onChange={search}
            value={value}
          />
        </div>
        <section className="cards">
          <div className="wrapper cards_wrapper">
            <h1 className="cards__title title">
              ?????????????? <span className="title_yellow"> ???? ???????????? </span>
            </h1>
            <p className="cards__text">???????????? ???????????? ???? ????????????????????????.</p>
            <div className="about__buttons">
              <a className="header__link" href="/addForm">
                <div className="button" onClick={addCard}>
                  ???????????????? ????????????????
                </div>
              </a>
            </div>
            <div className="layout-2-column cards-wrapper">{cards}</div>
          </div>
        </section>
      </div>
    );
  }
}

export default Main;
