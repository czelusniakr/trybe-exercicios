import React from 'react';
import PropTypes from 'prop-types';

class CampoSelect extends React.Component {
  render() {
    const { campoSelect, handleChange } = this.props;

    return(
      <label>
        Campo select:
        <select
          name="campoSelect"
          value={ campoSelect }
          onChange={ handleChange }
         >
          <option value="opcao">Opção</option>
        </select>
        { !campoSelect.length ? 'inválido' : 'ok' }
      </label>
    );
  }
}

CampoSelect.propTypes = {
  campoSelect: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default CampoSelect;
