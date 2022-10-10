import React, { FormEvent } from 'react';
import { IData } from '../../interfaces';
import Cards from '../../components/cards';

class FormAddCard extends React.Component<
  Record<string, unknown>,
  {
    position: number;
    category: string;
    name: string;
    art: string;
    epocsid: boolean;
    epocsidColor: string;
    woodType: string;
    woodColor: string;
    price: number;
    freeShipping: boolean;
    image: string;
    date: string;
    like: number;
    nameError: string;
    categoryError: string;
    woodTypeError: string;
    colorError: string;
    priceError: string;
    dateError: string;
    imageError: string;
    cards: IData[];
    submitButton: boolean;
  }
> {
  private form: React.RefObject<HTMLInputElement>;
  constructor(props: Record<string, unknown>) {
    super(props);
    this.state = {
      position: 0,
      category: '',
      name: '',
      art: '',
      epocsid: false,
      epocsidColor: '',
      woodType: 'Выберите тип древесины',
      woodColor: 'Выберите цвет древесины',
      price: 0,
      freeShipping: false,
      image: '',
      date: '',
      like: 0,
      nameError: '',
      categoryError: '',
      woodTypeError: '',
      colorError: '',
      priceError: '',
      dateError: '',
      imageError: '',
      cards: [],
      submitButton: true,
    };
    this.form = React.createRef();
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.clear = this.clear.bind(this);
    this.checkValues = this.checkValues.bind(this);
    this.nameChange = this.nameChange.bind(this);
    this.categoryChange = this.categoryChange.bind(this);
    this.epocsidChange = this.epocsidChange.bind(this);
    this.epocsidColorChange = this.epocsidColorChange.bind(this);
    this.woodTypeChange = this.woodTypeChange.bind(this);
    this.woodColorChange = this.woodColorChange.bind(this);
    this.priceChange = this.priceChange.bind(this);
    this.dateChange = this.dateChange.bind(this);
    this.imageChange = this.imageChange.bind(this);
  }
  nameRef = React.createRef<HTMLInputElement>();
  categoryRef = React.createRef<HTMLSelectElement>();
  typeRef = React.createRef<HTMLInputElement>();
  epoRef = React.createRef<HTMLInputElement>();
  epoColorRef = React.createRef<HTMLInputElement>();
  woodTypeRef = React.createRef<HTMLSelectElement>();
  colorRef = React.createRef<HTMLSelectElement>();
  priceRef = React.createRef<HTMLInputElement>();
  shipmentRef = React.createRef<HTMLInputElement>();
  dateRef = React.createRef<HTMLInputElement>();
  imageRef = React.createRef<HTMLInputElement>();

  handleChange(event: React.FormEvent<HTMLFormElement>) {
    console.log(event);
    this.setState({ submitButton: false });
  }

  handleSubmit(event: FormEvent) {
    alert('A name was submitted:');
    event.preventDefault();
  }

  checkName(val: string): void {
    if (val === '' || val === ' ' || !val.match(/^[а-яё]{3,50}|[a-z]{3,50}$/iu)) {
      this.setState({ nameError: 'Введите имя (3 - 50 символов)!', name: '' });
    } else {
      this.setState({ nameError: '' });
    }
  }

  checkCategory(val: string): void {
    if (val === 'Выберите категорию') {
      this.setState({ categoryError: 'Выберите категорию)!', category: '' });
    } else {
      this.setState({ categoryError: '' });
    }
  }

  checkWoodType(val: string): void {
    if (val === 'Выберите тип древесины') {
      this.setState({ woodTypeError: 'Выберите тип древесины)!', woodType: '' });
    } else {
      this.setState({ woodTypeError: '' });
    }
  }

  checkColor(val: string): void {
    if (val === 'Выберите цвет древесины') {
      this.setState({ colorError: 'Выберите цвет древесины)!', woodColor: '' });
    } else {
      this.setState({ colorError: '' });
    }
  }
  checkPrice(val: string): void {
    const price = Number(val);
    if (isNaN(price) || !price || price > 99) {
      this.setState({ priceError: 'Введите число до 100!', price: 0 });
    } else {
      this.setState({ priceError: '' });
    }
  }
  checkDate(val: string): void {
    if (!val.match(/^(0?[1-9]|[12][0-9]|3[01])[- /.](0?[1-9]|1[012])[- /.](19|20)?[0-9]{2}$/)) {
      this.setState({ dateError: 'Введите дату в формате ДД/ММ/ГГГГ!', date: '' });
    } else {
      this.setState({ dateError: '' });
    }
  }

  checkImage(val: string): void {
    if (!val.match(/^https?:\/\/\S+(?:jpg|jpeg|png)$/)) {
      this.setState({ imageError: 'Введите HTML-адрес изображения!', image: '' });
    } else {
      this.setState({ imageError: '' });
    }
  }

  nameChange(e: React.FormEvent<HTMLInputElement>) {
    this.setState({
      name: e.currentTarget.value,
    });
  }

  categoryChange(event: React.FormEvent<HTMLSelectElement>) {
    this.setState({
      category: event.currentTarget.value,
    });
  }

  epocsidChange(e: React.FormEvent<HTMLInputElement>) {
    this.setState({
      epocsid: Boolean(e.currentTarget.value),
    });
  }

  epocsidColorChange(e: React.FormEvent<HTMLInputElement>) {
    this.setState({
      epocsidColor: e.currentTarget.value,
    });
  }

  woodTypeChange(e: React.FormEvent<HTMLSelectElement>) {
    this.setState({
      woodType: e.currentTarget.value,
    });
  }

  woodColorChange(e: React.FormEvent<HTMLSelectElement>) {
    this.setState({
      woodColor: e.currentTarget.value,
    });
  }

  priceChange(e: React.FormEvent<HTMLInputElement>) {
    this.setState({
      price: Number(e.currentTarget.value),
    });
  }

  imageChange(e: React.FormEvent<HTMLInputElement>) {
    this.setState({
      image: e.currentTarget.value,
    });
  }

  dateChange(e: React.FormEvent<HTMLInputElement>) {
    this.setState({
      date: e.currentTarget.value,
    });
  }

  freeShippingChange(e: React.FormEvent<HTMLInputElement>) {
    this.setState({
      freeShipping: Boolean(e.currentTarget.value),
    });
  }

  clear() {
    this.setState({
      category: 'Выберите категорию',
      name: '',
      epocsid: false,
      epocsidColor: '',
      woodType: 'Выберите тип древесины',
      woodColor: 'Выберите цвет древесины',
      price: 0,
      freeShipping: false,
      image: '',
      date: '',
    });
  }

  checkValues() {
    this.checkName(String(this.nameRef.current?.value));
    this.checkCategory(String(this.categoryRef.current?.value));
    this.checkWoodType(String(this.woodTypeRef.current?.value));
    this.checkColor(String(this.colorRef.current?.value));
    this.checkPrice(String(this.priceRef.current?.value));
    this.checkDate(String(this.dateRef.current?.value));
    this.checkImage(String(this.imageRef.current?.value));
    if (
      this.state.nameError === '' &&
      this.state.categoryError === '' &&
      this.state.woodTypeError === '' &&
      this.state.colorError === '' &&
      this.state.priceError === '' &&
      this.state.imageError === ''
    ) {
      const pos = this.state.position + 1;
      const newCard: IData = {
        position: pos,
        category: this.categoryRef.current?.value || '',
        name: this.nameRef.current?.value || '',
        art: `00${pos}`,
        epocsid: Boolean(this.epoRef.current?.value),
        epocsidColor: this.epoColorRef.current?.value || '',
        woodType: this.woodTypeRef.current?.value || '',
        woodColor: this.colorRef.current?.value || '',
        price: Number(this.priceRef.current?.value) || 0,
        freeShipping: Boolean(this.dateRef.current?.value),
        image: this.imageRef.current?.value || '',
        date: this.dateRef.current?.value || '',
        like: 0,
      };
      const newCardArr = [...this.state.cards];
      newCardArr.push(newCard);
      this.setState({ cards: newCardArr });
      this.setState({ submitButton: false });
    } else {
      this.setState({
        submitButton: true,
        category: this.categoryRef.current?.value || '',
        name: this.nameRef.current?.value || '',
        epocsid: Boolean(this.epoRef.current?.value),
        epocsidColor: this.epoColorRef.current?.value || '',
        woodType: this.woodTypeRef.current?.value || '',
        woodColor: this.colorRef.current?.value || '',
        price: Number(this.priceRef.current?.value) || 0,
        freeShipping: Boolean(this.dateRef.current?.value),
        image: this.imageRef.current?.value || '',
        date: this.dateRef.current?.value || '',
      });
    }
  }

  render() {
    const cards = this.state.cards.map((card) => (
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
      <div className="form form-add">
        <p className="form-add__name">Создание карточки товара</p>
        <form className="form-add__table" onSubmit={this.handleSubmit} onChange={this.handleChange}>
          <label className="form-add__text">
            Наименование изделия:
            <input
              className="textbox"
              type="text"
              ref={this.nameRef}
              value={this.state.name}
              onChange={this.nameChange}
            />
            <span className="incorrect incorrect_name">{this.state.nameError}</span>
          </label>
          <label className="form-add__text">
            Категория:
            <select
              className="textbox"
              ref={this.categoryRef}
              value={this.state.category}
              onChange={this.categoryChange}
            >
              <option className="form-add__text">Выберите категорию</option>
              <option className="form-add__text">Брелоки</option>
              <option className="form-add__text">Подставки для смартфонов</option>
              <option className="form-add__text">Подставки под чашки</option>
              <option className="form-add__text">Другое</option>
            </select>
            <span className="incorrect incorrect_category">{this.state.categoryError}</span>
          </label>
          <label className="form-add__text">
            Эпоксидная смола:
            <input
              className="checkbox"
              type="checkbox"
              ref={this.epoRef}
              value={this.state.epocsid ? 'checked' : 'unchecked'}
            />
            <label htmlFor="checkbox"></label>
          </label>
          <label className="form-add__text">
            Цвет эпоксидной смолы:
            <input
              type="color"
              className="form-add__color"
              defaultValue="#d0fafd"
              ref={this.epoColorRef}
              value={this.state.epocsidColor}
              onChange={this.epocsidColorChange}
            ></input>
          </label>
          <label className="form-add__text">
            Тип древесины:
            <select
              className="textbox"
              ref={this.woodTypeRef}
              value={this.state.woodType}
              onChange={this.woodTypeChange}
            >
              <option className="form-add__text">Выберите тип древесины</option>
              <option className="form-add__text">Лиственница</option>
              <option className="form-add__text">Орех</option>
              <option className="form-add__text">Сосна/Ель</option>
              <option className="form-add__text">Дуб</option>
              <option className="form-add__text">Пластик</option>
              <option className="form-add__text">Другое</option>
            </select>
            <span className="incorrect incorrect_wood">{this.state.woodTypeError}</span>
          </label>
          <label className="form-add__text">
            Цвет изделия:
            <select
              className="textbox"
              ref={this.colorRef}
              value={this.state.woodColor}
              onChange={this.woodColorChange}
            >
              <option className="form-add__text">Выберите цвет древесины</option>
              <option className="form-add__text">Прозрачный</option>
              <option className="form-add__text">Каштан</option>
              <option className="form-add__text">Махагон/Ель</option>
              <option className="form-add__text">Дуб</option>
              <option className="form-add__text">Орех</option>
              <option className="form-add__text">Другое</option>
            </select>
            <span className="incorrect incorrect_color">{this.state.colorError}</span>
          </label>
          <label className="form-add__text">
            Стоимость:
            <input
              className="textbox"
              type="text"
              ref={this.priceRef}
              value={this.state.price}
              onChange={this.priceChange}
            />
            <span className="incorrect incorrect_price">{this.state.priceError}</span>
          </label>
          <label className="form-add__text">
            Доставка:
            <input
              className="checkbox"
              type="checkbox"
              ref={this.shipmentRef}
              value={this.state.freeShipping ? 'checked' : 'unchecked'}
            />
            <label htmlFor="checkbox"></label>
          </label>
          <label className="form-add__text">
            Дата производства:
            <input
              className="textbox"
              type="text"
              ref={this.dateRef}
              value={this.state.date}
              onChange={this.dateChange}
            />
            <span className="incorrect incorrect_date">{this.state.dateError}</span>
          </label>
          <label className="form-add__text">
            Фото изделия:
            <input
              className="textbox"
              type="text"
              ref={this.imageRef}
              value={this.state.image}
              onChange={this.imageChange}
            />
            <span className="incorrect incorrect_image">{this.state.imageError}</span>
          </label>
          <div className="about__buttons">
            <button
              type="submit"
              className="button button_colored"
              onClick={this.checkValues}
              disabled={this.state.submitButton}
            >
              Добавить
            </button>
            <button className="button button_white" type="submit" onClick={this.clear}>
              Сбросить
            </button>
          </div>
        </form>
        <section className="cards">
          <div className="wrapper cards_wrapper">
            <div className="layout-2-column cards-wrapper">{cards}</div>
          </div>
        </section>
      </div>
    );
  }
}
export default FormAddCard;
