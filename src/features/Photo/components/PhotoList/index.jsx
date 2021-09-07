import React from "react";
import PropTypes from "prop-types";
import { Col, Row } from "reactstrap";
import PhotoCard from "../PhotoCard";

function PhotoList(props) {
//   console.log(props.children);
  const photoList  = props.children[1];
  const onPhotoEditClick = props.children[3];
  const onPhotoRemoveClick = props.children[5];

  return (
    <Row>
      {photoList.map((photo) => (
        <Col key={photo.title} xs="12" md="6" lg="3">
          <PhotoCard
            photo={photo}
            onEditClick={onPhotoEditClick}
            onRemoveClick={onPhotoRemoveClick}
          />
        </Col>
      ))}
    </Row>
  );
}

PhotoList.propTypes = {
  photoList: PropTypes.array,
  onPhotoEditClick: PropTypes.func,
  onPhotoRemoveClick: PropTypes.func,
};
PhotoList.defaultProps = {
  photoList: [],
  onPhotoEditClick: null,
  onPhotoRemoveClick: null,
};

export default PhotoList;
