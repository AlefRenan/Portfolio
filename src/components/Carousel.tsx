import { IconType } from "react-icons";
import Skill from "./Skill";
import useCarouselAnimation from "@/utils/hooks/useCarouselAnimation";
import "@/assets/css/Carousel.css";

interface CarouselProps {
  direction: "left" | "right";
  logos: SkillType[];
}

type SkillType = {
  logo: IconType;
  id: string;
  name: string;
  color: string;
};

const Carousel: React.FC<CarouselProps> = ({ direction, logos }) => {
  const isRight = direction === "right";
  const trackRef = useCarouselAnimation(isRight);

  const items = [...logos, ...logos];

  return (
    <div className="logo-carousel">
      <div ref={trackRef} className="carousel-track">
        {items.map(({ color, id, logo, name }, index) => {
          return (
            <Skill key={index} id={id} logo={logo} name={name} color={color} />
          );
        })}
      </div>
    </div>
  );
};

export default Carousel;
