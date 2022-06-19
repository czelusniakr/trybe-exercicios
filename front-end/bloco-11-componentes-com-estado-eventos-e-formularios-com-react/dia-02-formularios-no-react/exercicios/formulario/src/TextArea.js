import React from 'react';
import PropTypes from 'prop-types';

class TextArea extends React.Component {
  render() {
    const { textarea, handleChange } = this.props;

    return(
      <label>
        Textarea:
        <textarea
          name="textarea"
          value={ textarea }
          onChange={ handleChange }
        />
        { !textarea.length ? 'campo vazio' : textarea.length > 120 ? 'muito longo' : 'ok' }
      </label>
    );
  }
}

TextArea.propTypes = {
  textarea: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default TextArea;
