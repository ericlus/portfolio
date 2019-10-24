import React from "react";
import Carousel from "react-bootstrap/Carousel";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

const ProjectImages = ({ pictures }) => {
  return (
    <Carousel
      nextIcon={
        <ArrowForwardIosIcon
          style={{ color: "black", opacity: "0.7", marginLeft: "30px" }}
        />
      }
      prevIcon={
        <ArrowBackIosIcon
          style={{ color: "black", opacity: "0.7", marginRight: "30px" }}
        />
      }
    >
      {pictures.map(picture => {
        return (
          <Carousel.Item>
            <img className="d-block w-100" src={picture} />
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
};

export default ProjectImages;
