import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const InputField = ({ field, value, label, error, placeholder, type, onChange, disabled, onBlur }) => {
  return (
    <div className={classnames('form-group', { 'has-error': error })}>
      <label className="control-label">{ label }</label>
      <input
        onChange={onChange}
        onBlur={onBlur}
        type={type}
        name={field}
        value={value}
        className='form-control'
        placeholder={placeholder}
        disabled={disabled}
      />
      {error && <span className='help-block'>{ error }</span> }
    </div>
  )
}

InputField.propTypes = {
  field: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string,
  error: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func,
  disabled: PropTypes.bool,
}

InputField.defaultProps = {
  type: 'text',
  disabled: false
}

export default InputField;
