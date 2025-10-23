import Lottie from "lottie-react";
import animationData from "@/assets/lottie/floating_coding.json";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();

  return (
    <div className="mx-auto xl:px-44 lg:px-36 md:px-32 sm:px-28 vvs:px-12 px-10 lg:my-28 my-16 space-y-16 lg:space-y-10">
      <h1
        id="about-heading"
        className="text-white/80 font-gilmer-outlined lg:mb-10 mb-5 text-[3.5rem] sm:text-[5.2rem] md:text-[6.4rem] lg:text-[7.5rem] leading-[3.5rem] sm:leading-[5.5rem] md:leading-[6rem] lg:leading-[7rem] xl:leading-[9rem] 2xl:leading-[10rem]  cursor-default"
      >
        {t("about.title")}
      </h1>

      <div className="w-full flex md:flex-row flex-col justify-between items-center">
        <div dangerouslySetInnerHTML={{ __html: t("about.me") }} />
        <div>
          <div
            id="lottie"
            className="xl:!h-[400px] !z-10 xl:!w-[600px] lg:!h-[280px] lg:!w-[480px] md:!h-[240px] md:!w-[300px] !h-[180px] !w-[360px] md:mb-0 mb-12"
          >
            <Lottie animationData={animationData} loop={true} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
