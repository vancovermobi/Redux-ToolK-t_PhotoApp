import React from "react";
import PropTypes from "prop-types";
import { FormFeedback, FormGroup, Input, Label } from "reactstrap";
import { ErrorMessage } from "formik";


// ## Custom Field
// - Cầu nối giữa UI Control và Formik.
// - UI Control là một Controlled Component với Props:
//   + name : tên xác định Control
//   + value: giá trị của Control
//   + onChange: trigger hàm này với giá trị mới khi có thay đổi
//   + onBlur: xác định khi nào thì Control này bị touched

function InputField(props) {
  const { field, form, type, label, placeholder, disable } = props;
  const { name, value, onChange, onBlur } = field;
  const { errors , touched } = form;
  const showError = errors[name] && touched[name] ;

  return (
    <FormGroup>
      {label && <Label for={name}>{label}</Label>}

      <Input
        id={name}
        {...field}
        
        type={type}
        placeholder={placeholder}
        disabled={disable}

        invalid={ showError }
      />

      {/* { showError && <FormFeedback>{ errors[name] }</FormFeedback>} */}
      <ErrorMessage name={name} component={ FormFeedback } />
    </FormGroup>
  );
}
InputField.propTypes = {
  field: PropTypes.object.isRequired, // Fomik truyền qua
  form: PropTypes.object.isRequired, // Fomik truyền qua

  // tự mình thêm dô
  type: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  disable: PropTypes.bool,
};
InputField.defaultProps = {
  type: "text",
  label: "",
  placeholder: "",
  disable: false,
};

export default InputField;
