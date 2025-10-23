import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <div className="vh-70 flex flex-col items-center justify-center xl:px-44 lg:px-36 md:px-32 sm:px-28 vvs:px-12 px-10">
      <div className="flex justify-center">
        <img
          src="../../../Foto.jpg"
          className="rounded-full !z-10 lg:h-44 lg:w-44 h-28 w-28 hover:scale-[1.05] hover:-rotate-12 transition-filter hover:drop-shadow-[0_0_2em_rgba(190,190,190,0.67)] duration-300 ease-in-out cursor-pointer"
          alt="Alef Renan"
        />
      </div>
      <p className="font-gilmer-medium cursor-default my-6 lg:text-lg">
        <span className="text-gradient">{t("greetings")}</span> 👋
      </p>
      <div className="text-center">
        <h1 className="font-gilmer-bold cursor-default text-4xl vvs:text-5xl sm:text-5xl md:text-6xl lg:text-7xl">
          <span className="font-gilmer-outlined">
            {t("hero.first_line")} <br />
          </span>
          <span className="text-gradient">
            {t("hero.second_line")}
            <br />
          </span>
          <span className="text-gradient">{t("hero.third_line")}</span> 🚀
        </h1>
      </div>
    </div>
  );
};

export default Hero;
