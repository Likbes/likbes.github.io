import React from 'react';
import PropTypes from 'prop-types';

const FormField = ({ formdata, change, id }) => {

  const showError = () => {
    let errorMessage = '';

    if (formdata.validation && !formdata.valid) {
      errorMessage = (
        <div className="error_label">
          {formdata.validationMessage}
        </div>
      );
    }

    return errorMessage;
  };


  const renderTemplate = () => {
    let formTemplate = '';

    switch (formdata.element) {
      case 'input':
        formTemplate = (
          <div className="formBlock">
            <input
              {...formdata.config}
              value={formdata.value}
              onBlur={e => change({ e, id, blur: true })}
              onChange={e => change({ e, id })}
            />
            {showError()}
          </div>
        );
        break;
      default:
        formTemplate = null;
    }

    return formTemplate;
  };


  return (
    <div>
      {renderTemplate()}
    </div>
  );
};

FormField.propTypes = {
  formdata: PropTypes.object,
  change: PropTypes.func,
  id: PropTypes.string,
};

export default FormField;
