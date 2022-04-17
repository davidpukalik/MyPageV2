import React from "react";
import StyledProjectSlider from "../../styles/projects/StyledProjectSlider";
import Slider from "react-slick";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Link from "next/link";

interface Props {
  data: {
    id: number;
    img: string;
    title: string;
    desc: string;
    date: string;
    link: string;
  }[];
}

const ProjectSlider: React.FC<Props> = ({ data }) => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <StyledProjectSlider>
      <Slider {...sliderSettings} className="slider">
        {data.map((project) => (
          <Card sx={{ maxWidth: 345, minHeight: 310, outline: "#FF922B" }} key={project.id}>
            <CardMedia component="img" height="150" image={project.img} alt={project.title} />
            <CardContent>
              <h3>{project.title}</h3>
              <p>{project.desc}</p>
            </CardContent>
            <CardActions sx={{ position: "relative" }}>
              <Link href={project.link}>
                <a>
                  <Button
                    variant="outlined"
                    size="small"
                    sx={{
                      border: "1px solid #FF922B",
                      color: "#d87519",
                      "&:hover": { border: "1px solid #d87519", background: "#ff922b1a" },
                    }}
                  >
                    Github
                  </Button>
                </a>
              </Link>
              <Link href={project.link}>
                <a>
                  <Button size="small" sx={{ color: "#d87519", "&:hover": { background: "#ff922b45" } }}>
                    Visit Page
                  </Button>
                </a>
              </Link>
              <small>{project.date}</small>
            </CardActions>
          </Card>
        ))}
      </Slider>
    </StyledProjectSlider>
  );
};

export default ProjectSlider;
