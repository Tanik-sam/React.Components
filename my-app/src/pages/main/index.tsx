import React from 'react';
import { MyProps, IData } from '../../interfaces';
import data from '../../data.json';
import Cards from '../../components/cards';

class Main extends React.Component<MyProps, { dataState: IData[]; input: string }> {
  constructor(props: MyProps) {
    super(props);
    this.state = { dataState: data, input: '' };
  }
  searchChanged = (dataChanged: IData[]) => {
    this.setState({ dataState: dataChanged });
  };
  componentWillUnmount() {
    console.log('WillMount');
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
        this.searchChanged(data);
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
        <section className="cards">
          <div className="wrapper cards_wrapper">
            <h1 className="cards__title title">
              Изделия <span className="title_yellow"> из дерева </span>
            </h1>
            <p className="cards__text">Сделай акцент на уникальность.</p>
            <div className="layout-2-column cards-wrapper">{cards}</div>
          </div>
        </section>
      </div>
    );
  }
}

export default Main;
