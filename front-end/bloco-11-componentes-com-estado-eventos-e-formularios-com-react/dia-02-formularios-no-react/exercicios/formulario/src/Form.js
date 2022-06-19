import React from 'react';
import CampoSelect from './CampoSelect';
import TextArea from './TextArea';

class Form extends React.Component {
  constructor() {
    super();

    this.state = {
      campoSelect: '',
      nome: '',
      idade: 0,
      textarea: '',
      checkbox: false,
      formularioComErros: true,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleError() {
    const { campoSelect, textarea } = this.state;

    const errorCases = [
      !campoSelect.length,
      !textarea.length,
      textarea.length > 120,
    ];

    const formularioPreenchido = errorCases.every((error) => error !== true);

    this.setState({
      formularioComErros: !formularioPreenchido,
    });
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  }

  render() {
    const { campoSelect, nome, idade, textarea, checkbox, formularioComErros } = this.state;

    return (
      <div>
        <h1>Formulário</h1>
        <form className="form">

          <CampoSelect
            campoSelect={ campoSelect }
            handleChange={ this.handleChange }
          />

          <fieldset>
            <label>
              Nome
              <input
                type="text"
                name="nome"
                value={ nome }
                onChange={this.handleChange}
              />
            </label>

            <label>
              Idade
              <input
                type="number"
                name="idade"
                value={ idade }
                onChange={this.handleChange}
              />
            </label>

            <label>
              Checkbox:
              <input
                type="checkbox"
                name="checkbox"
                value={ checkbox }
                onChange={this.handleChange}
                />
            </label>

            <label>
              Arquivo:
              <input
                type="file"
                name="file"
              />
            </label>
          </fieldset>

          <TextArea
            textarea={ textarea }
            handleChange={ this.handleChange }
          />

        </form>
        { formularioComErros
          ? <span>Preencha todos os campos</span>
          : <span>Todos os campos foram preenchidos</span> }
      </div>
    );
  }
}

export default Form;
