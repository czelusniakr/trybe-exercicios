import React from "react";

class Form extends React.Component {
  constructor() {
    super()

    this.handleTextAreaChange = this.handleTextAreaChange.bind(this)

    this.state = {
      campoSelect: '',
      nome: '',
      idade: 0,
      textarea: '',
    }
  }

  handleTextAreaChange(event) {
    this.setState({ textarea: event.target.value })
  }

  render() {
    return (
      <div>
        <h1>Formulário</h1>
        <form className="form">
          <label>
            Campo select:
            <select name="campoSelect">
              <option value="opcao">Opção</option>
            </select>
          </label>

          <label>
            Nome
            <input name="nome" type="text" />
          </label>

          <label>
            Idade
            <input name="idade" type="number" />
          </label>

          <label>
            Textarea:
            <textarea
              name="textarea"
              value={this.state.textarea}
              onChange={this.handleTextAreaChange}
            />
          </label>
        </form>
      </div>
    )
  }
}

export default Form;
