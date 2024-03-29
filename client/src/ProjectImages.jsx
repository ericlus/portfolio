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
      indicators={false}
    >
      {pictures.map((picture, i) => {
        return (
          <Carousel.Item key={i}>
            <img style={{ width: "100%", height: "430px" }} src={picture} />
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
};

export default ProjectImages;
