import {
  SiJavascript,
  SiDocker,
  SiTailwindcss,
  SiMysql,
  SiDotnet,
  SiReact,
  SiSharp,
} from "react-icons/si";
import { useTranslation } from "react-i18next";
import ImageCarousel from "../components/Carousel_proj";
const Project = () => {
  const { t } = useTranslation();

  return (
    <div className="xl:px-44 lg:px-36 md:px-32 sm:px-28 vvs:px-12 px-10 lg:my-36 my-16 space-y-16">
      <h1 className="text-white/80 font-gilmer-outlined lg:mb-10 mb-5 text-[3.5rem] sm:text-[5.2rem] md:text-[6.4rem] lg:text-[7.5rem] leading-[3.5rem] sm:leading-[5.5rem] md:leading-[6rem] lg:leading-[7rem] xl:leading-[9rem] 2xl:leading-[10rem]  cursor-default">
        {t("featured_project")}
      </h1>

      <div className="container lg:space-x-2 flex flex-col-reverse lg:flex-row lg:justify-between lg:items-center items-start">
        <div className="text-white space-y-2 sm:space-y-3 lg:space-y-4 w-fit">
          <h1 className="hidden-text font-gilmer-bold mb-12  cursor-default lg:text-4xl text-2xl sm:text-3xl 2xl:text-5xl lg:mt-0 mt-5">
            <div className="flex items-center m-0 lg:h-[52px] 2xl:h-[60px]">
              <p>Sistema de Agendamento para Clínica</p>
            </div>
          </h1>
          <p className="font-normal cursor-default font-gilmer-regular text-white/90 vvs:text-base sm:text-xl xl:text-2xl text-sm">
            {t("rentify_description")}
          </p>
          <div className="flex justify-start space-x-3 items-center">
            <SiReact className="lg:h-8 lg:w-8 sm:w-7 sm:h-7 h-5 w-5 transition duration-200 ease-in-out text-white/50 hover:text-white" />
            <SiJavascript className="lg:h-8 lg:w-8 sm:w-7 sm:h-7 h-5 w-5 transition duration-200 ease-in-out text-white/50 hover:text-white" />
            <SiTailwindcss className="lg:h-8 lg:w-8 sm:w-7 sm:h-7 h-5 w-5 transition duration-200 ease-in-out text-white/50 hover:text-white" />
            <SiDocker className="lg:h-8 lg:w-8 sm:w-7 sm:h-7 h-5 w-5 transition duration-200 ease-in-out text-white/50 hover:text-white" />
            <SiMysql className="lg:h-8 lg:w-8 sm:w-7 sm:h-7 h-5 w-5 transition duration-200 ease-in-out text-white/50 hover:text-white" />
            <SiDotnet className="lg:h-8 lg:w-8 sm:w-7 sm:h-7 h-5 w-5 transition duration-200 ease-in-out text-white/50 hover:text-white" />
            <SiSharp className="lg:h-8 lg:w-8 sm:w-7 sm:h-7 h-5 w-5 transition duration-200 ease-in-out text-white/50 hover:text-white" />
          </div>
        </div>

        <div className="lg:h-[400px] 2xl:h-[500px] h-[250px] sm:h-[300px] md:h-[350px] w-full">
          <ImageCarousel />
        </div>
      </div>
    </div>
  );
};

export default Project;
