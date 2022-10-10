import React, { ChangeEvent, FormEvent } from 'react';

class FormAddCard extends React.Component<Record<string, unknown>, { value: string, visible: boolean }> {
  constructor(props: Record<string, unknown>) {
    super(props);
    this.state = { value: '', visible: true };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.reset = this.reset.bind(this);
    this.checkValues = this.checkValues.bind(this);
  }

  handleChange(event: ChangeEvent) {
    this.setState({ value: (event.target as HTMLTextAreaElement).value });
  }

  handleSubmit(event: FormEvent) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  checkName(val: string): void {
    if (val === '' || val === ' ' || !val.match(/^[а-яё]{2,30}|[a-z]{2,30}$/iu)) {
      (document.querySelector('.incorrect_name') as HTMLElement).innerHTML =
        'Введите имя (2 - 30 символов)!';
    } else {
      // this.name = val;
    }
  }

  reset() {
    console.log('reset');
  }

  checkValues() {
    console.log('checkValues');
  }

  close = () => {
    this.setState({ visible: false });
  }
  render() {
    return (
      <div className="overlay">
        <form className="modal-window" onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input
              className="search"
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
            />
            <span className="incorrect incorrect_name"></span>
          </label>
          <div className="about__buttons">
            <button type="submit" className="button button_colored" onClick={this.checkValues}>
              Добавить
            </button>
            <button className="button button_white" onClick={this.reset}>
              Сбросить
            </button>
          </div>
          <div onClick={this.close} className="close-btn"></div>
        </form>
      </div>
    );
  }
}
export default FormAddCard;
