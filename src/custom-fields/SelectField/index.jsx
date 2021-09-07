import React from "react";
import PropTypes from "prop-types";
import { FormFeedback, FormGroup, Label } from "reactstrap";
import Select from "react-select";
import { ErrorMessage } from "formik";

SelectField.propTypes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,

  label: PropTypes.string,
  placeholder: PropTypes.string,
  disable: PropTypes.bool,
  options: PropTypes.array,
};
SelectField.defaultProps = {
  label: "",
  placeholder: "",
  disable: false,
  options: [],
};
function SelectField(props) {
  //   console.log( props ) ;
  const { field, form, label, placeholder, disable, options } = props;
  const { name, value, onChange, onBlur } = field;
  const { errors, touched } = form;
  const showError = errors[name] && touched[name];

  const selectedOption = options.find((option) => option.value === value);

  const handleSelectedOptionChange = (selectOption) => {
    // console.log(selectOption);
    const selectValue = selectOption ? selectOption.value : selectOption;

    const changeEvent = {
      target: {
        name: name,
        value: selectValue,
      },
    };
    field.onChange(changeEvent);
  };
  return (
    <FormGroup>
      {label && <Label for={name}>{label}</Label>}
      <Select
        id={name}
        {...field}
        value={selectedOption}
        onChange={handleSelectedOptionChange}

        placeholder={placeholder}
        isDisabled={disable}
        options={options}

        className={ showError ? 'is-invalid' : ''}
      />
      <ErrorMessage name={name} component={FormFeedback} />
    </FormGroup>
  );
}

export default SelectField;
