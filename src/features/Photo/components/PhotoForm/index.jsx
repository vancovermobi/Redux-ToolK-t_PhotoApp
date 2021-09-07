import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";
import Select from "react-select";
import { Button, FormGroup, Input, Label, Spinner } from "reactstrap";
import { PHOTO_CATEGORY_OPTIONS } from "constants/global";
import Images from "constants/images";
import { Formik , Form, FastField } from 'formik';
import InputField from "custom-fields/InputField";
import SelectField from "custom-fields/SelectField";
import RandomPhotoField from "custom-fields/RandomPhotoField";
import * as Yup from 'yup';

function PhotoForm(props) {
  // const initialValues = {
  //   title: '',
  //   categoryId: null,
  //   photo: '',
  // };
  const { initialValues, isAddMode } = props;

  const validationSchema = Yup.object().shape({
    title: Yup.string().required('This field is required.'),

    categoryId: Yup.number().required('This field is required.').nullable(),

    photo: Yup.string().required('This field is required.'),
  });
  return (
    <Formik initialValues={ initialValues } 
            validationSchema={ validationSchema }
            // onSubmit={ values => console.log('Submit: ', values)}
            onSubmit={ props.onSubmit }
    >
      {(formikProps) => {
        // Do sonethings here...
        const { values, errors , touched, isSubmitting } = formikProps ;
        // console.log('Values:', values ,'Errors: ' ,errors ,'Touched: ' , touched) ;

        return (
          // Form của Formik đã bao gồm cả submit và reset
          <Form>
            <FastField 
              //Props mặc định của FastField
              name="title"              // Tên của Field (InputField)
              component={ InputField }  // customField (InputField)
              
              // Props truyền vào InputField
              label="Title"
              placeholder="Eg: Now nature ... "
            />
            {/* <FormGroup>
              <Label for="titleId">Title</Label>
              <Input
                name="title"
                id="titleId"
                placeholder="Eg: Now nature ... "
              />
            </FormGroup> */}
     
            <FastField 
              name="categoryId"
              component={ SelectField }

              label="Category"
              placeholder="What's your photo category ?"
              options={ PHOTO_CATEGORY_OPTIONS }
            />
            {/* <FormGroup>
              <Label for="categoryId">Category</Label>
              <Select
                name="categoryId"
                id="categoryId"
                placeholder="What's your photo category ?"
                options={PHOTO_CATEGORY_OPTIONS}
              />
            </FormGroup> */}
            
            <FastField 
              name="photo"
              component={ RandomPhotoField }

              label="Photo"
            />
            {/* <FormGroup>
              <Label for="categoryId">Photo</Label>

              <div>
                <Button type="button" outline color="primary">
                  Random a photo
                </Button>
              </div>
              <div>
                <img
                  width="200px"
                  height="200px"
                  src={Images.COLORFUL_BG}
                  alt="colorfull"
                />
              </div>
            </FormGroup> */}

            <FormGroup>
              <Button type="submit" color={ isAddMode ? "primary" : "success"} 
                      style={{ marginTop:'10px'}}
              >
                  { isSubmitting && <Spinner size="md" /> }
                  { isAddMode ? 'Add to album' : 'Save change your photo'}                  
              </Button>
            </FormGroup>
          </Form>
        );
      }}
    </Formik>
  );
}

PhotoForm.propTypes = {
  onSubmit: PropTypes.func,
};
PhotoForm.defaultProps = {
  onSubmit: null,
};

export default PhotoForm;
