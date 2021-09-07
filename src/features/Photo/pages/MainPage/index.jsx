import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Container } from "reactstrap";
import Banner from "components/Banner";
import Images from "constants/images";
import { useDispatch, useSelector } from "react-redux";
import PhotoList from "features/Photo/components/PhotoList";
import { removePhoto } from "features/Photo/photoSlice";
import { useHistory } from 'react-router'; 

function MainPage(props) {
  const photos = useSelector((state) => state.photos);
  //   console.log(photos);
  const dispatch = useDispatch();
  const history = useHistory();

  const handlePhotoEditClick = (photo) => {
    // console.log("Edit: ", photo);
    const editPhotoUrl = `/photos/${photo.id}`;
    history.push(editPhotoUrl);
  };
  const handlePhotoRemoveClick = (photo) => {
    // console.log("Remove: ", photo);
    const removedPhotoId = photo.id;
    const action = removePhoto(removedPhotoId);
    dispatch(action);
  };
  return (
    <div className="photo-main">
      <Banner title="Your awesome photos" backgroundUrl={Images.PINK_BG} />

      <Container className="text-center">
        <div>
          <Link to="photos/add">Add new photo</Link>
        </div>
        <PhotoList>
          photoList={photos}
          onPhotoEditClick={handlePhotoEditClick}
          onPhotoRemoveClick={handlePhotoRemoveClick}
        </PhotoList>
      </Container>
    </div>
  );
}

MainPage.propTypes = {};

export default MainPage;
