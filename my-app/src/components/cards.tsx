import React from 'react';
import { IData } from '../interfaces';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

class Cards extends React.Component<IData, Record<string, unknown>> {
  constructor(props: IData) {
    super(props);
  }
  render() {
    return (
      <article className="block-shadowed card">
        <p className="card__name">{this.props.name}</p>
        <div className="discount">
          <FontAwesomeIcon
            icon={faHeart}
            style={{ color: 'red', marginRight: '5px', fontSize: '20px' }}
          />
          {this.props.like}
        </div>
        <div className="card__content">
          <div
            className="card__img"
            style={{
              backgroundImage: `url(${this.props.image})`,
            }}
          ></div>
          <div>
            <p className="card__text">
              <span className="card__text_bold">Категория: </span>
              {this.props.category}
            </p>
            <p className="card__text">
              <span className="card__text_bold">Вид: </span>
              {this.props.epocsid ? 'С эпоксидной смолой' : 'без эпоксидной смолы'}
            </p>
            <p className="card__text">
              <span className="card__text_bold">Вид древесины: </span>
              {this.props.woodType}
            </p>
            <p className="card__text">
              <span className="card__text_bold">Цвет: </span>
              {this.props.woodColor}
            </p>
          </div>
        </div>
        <div className="card__price">
          <div>
            <p className="title_yellow card__price_amount">Цена</p>
            <p className="card__price_i">{this.props.price}бел. руб.</p>
          </div>
          <div>
            <p className="title_yellow card__price_amount">Доставка</p>
            <p className="card__price_i">
              {this.props.freeShipping ? 'Бесплатная доставка*' : 'Доставка оплачивается отдельно'}
            </p>
          </div>
          <div>
            <p className="title_yellow card__price_amount">Дата производства</p>
            <p className="card__price_i">{this.props.date}</p>
          </div>
        </div>
        <div className="card__buttons">
          <button className="button button_white">Заказать</button>
          <div className="button button_colored">
            <FontAwesomeIcon
              icon={faHeart}
              style={{ color: 'red', marginRight: '10px', fontSize: '30px' }}
            />
            Нравится
          </div>
        </div>
      </article>
    );
  }
}
export default Cards;
