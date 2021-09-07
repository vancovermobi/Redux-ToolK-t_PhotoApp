import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";
import PhotoForm from "features/Photo/components/PhotoForm";
import Banner from "components/Banner";
import { useDispatch, useSelector } from "react-redux";
import { addPhoto, updatePhoto } from "features/Photo/photoSlice";
import { useHistory, useParams } from "react-router";
import { randomNumber } from 'utils/common';

const AddEditPage = (props) => {
  const history = useHistory();
  const { photoId } = useParams();
  const dispatch = useDispatch();
  const editedPhoto = useSelector(state => state.photos.find(x => x.id === +photoId));
  console.log('Edit: ',editedPhoto);
  const isAddMode = !photoId ;

  const initialValues = isAddMode
    ? {
      title: '',
      categoryId: null,
      photo: '',
    }
    :editedPhoto ;

  const handleSubmit = (values) => {
    console.log("Form submit: ", values);
    // giả lập Fake API = 2s
    return new Promise((resolve) => {
      setTimeout(() => {        
          if(isAddMode){
            const newPhoto = {
              ...values,
              id: randomNumber(1000,9999),
            }
          // console.log("newPhoto: ", newPhoto);
           const action = addPhoto(newPhoto);          
           dispatch(action); 
          }else{
            const action = updatePhoto(values)
            dispatch(action);
          }
          
        history.push("/photos");
        resolve(true);
      }, 2000);
    });
  };
  return (
    <div className="photo-edit">
      <Banner title="Pick your mazing photo 😎" />

      <div className="photo-edit__form">
        <PhotoForm
          // onSubmit={(values) => console.log("Form submit: ", values)}
          isAddMode={isAddMode}
          initialValues={ initialValues }
          onSubmit={handleSubmit}
        />
      </div>
    </div>
  );
};

AddEditPage.propTypes = {};

export default AddEditPage;
