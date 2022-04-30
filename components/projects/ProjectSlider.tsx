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
    gitLink: string;
    link: string;
  }[];
  locale: any;
}

const ProjectSlider: React.FC<Props> = ({ data, locale: t }) => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1240,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 880,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <StyledProjectSlider>
      <Slider {...sliderSettings} className="slider">
        {data.map((project) => (
          <Card sx={{ maxWidth: 345, minHeight: 310, outline: "primary.main" }} key={project.id}>
            <CardMedia component="img" height="150" image={project.img} alt={project.title} />
            <CardContent>
              <h3>{project.title}</h3>
              {project.date && <p className="date">{project.date}</p>}
              <p>{project.desc}</p>
            </CardContent>
            <CardActions sx={{ position: "relative" }}>
              <Link href={project.gitLink}>
                <a>
                  <Button variant="outlined" size="small" color="primary">
                    Github
                  </Button>
                </a>
              </Link>
              {project.link && (
                <Link href={project.link}>
                  <a>
                    <Button size="small" color="primary">
                      {t.Projects.Visit}
                    </Button>
                  </a>
                </Link>
              )}
            </CardActions>
          </Card>
        ))}
      </Slider>
    </StyledProjectSlider>
  );
};

export default ProjectSlider;
