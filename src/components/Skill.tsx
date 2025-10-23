import { useState } from "react";
import { IconType } from "react-icons";
import TechnologyDescription from "./TechnologyDescription";

type SkillProps = {
  logo: IconType;
  id: string;
  name: string;
  color: string;
};

const Skill = ({ logo: Logo, name, id, color }: SkillProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="flex-shrink-0 w-[280px] m-2 cursor-default"
      aria-label={`Skill ${name}`}
    >
      <div
        className="rounded-xl border border-gray-700 shadow overflow-hidden h-full transition-all duration-300 ease-in-out hover:shadow-lg"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{ boxShadow: isHovered ? `0 4px 10px ${color}` : undefined }}
      >
        <div className="p-4">
          <div className="flex items-center space-x-2">
            <Logo color={color} size={30} />
            <h3 className="text-lg font-semibold">{name}</h3>
          </div>
          <TechnologyDescription techKey={id} />
        </div>
      </div>
    </div>
  );
};

export default Skill;
