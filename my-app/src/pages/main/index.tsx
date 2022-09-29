import React from 'react';
import { MyProps, MyState, IData } from '../../interfaces';
import data from '../../data.json';
import Header from '../../components/header';
import Cards from '../../components/cards';

class Main extends React.Component<MyProps, { dataState: IData[] }> {
  constructor(props: MyProps) {
    super(props);
    this.state = { dataState: data };
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
    return (
      <div>
        <Header {...this.state.dataState} />
        <section className="cards">
          <div className="wrapper cards_wrapper">
            <h1 className="cards__title title">
              Изделия <span className="title_yellow"> из дерева </span>
            </h1>
            <p className="cards__text">Сделай акцент на уникальность.</p>
            <div className="layout-2-column cards-wrapper">
              {cards}
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Main;
