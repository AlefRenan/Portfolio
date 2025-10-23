import { AiOutlineFilePdf } from "react-icons/ai";
import { SiLinkedin, SiGithub } from "react-icons/si";
import { RiWhatsappFill } from "react-icons/ri";
import useTracking from "@/utils/hooks/useTracking";
import { useTranslation } from "react-i18next";
import useResume from "@/utils/hooks/useResume";

const Header = () => {
  const { t } = useTranslation();
  const AlefResume = useResume();
  const { createTrackHandler } = useTracking("Header");

  const handleResumeDownloadClick = createTrackHandler("Resume Button Click");
  const handleLinkedinClick = createTrackHandler("Linkedin Click");
  const handleGithubClick = createTrackHandler("Github Click");
  const handleWhatsappClick = createTrackHandler("Whatsapp Click");

  return (
    <div className="flex justify-center xl:px-44 lg:px-36 md:px-32 sm:px-28 vvs:px-12 px-10">
      <div className="w-full flex items-center justify-between mt-8">
        <div className="flex items-center gap-x-4">
          <a
            href={AlefResume}
            target="_blank"
            download={AlefResume}
            onClick={handleResumeDownloadClick}
          >
            <button className="text-white rounded-full lg:w-fit hover:bg-[#242424] transition duration-500 ease-in-out font-gilmer-medium border-[1px] focus:outline-none flex items-center justify-center gap-x-1 border-white/50 py-2 px-4 text-sm sm:text-lg xl:text-xl 2xl:text-sm w-full">
              <AiOutlineFilePdf />
              <span>{t("download_resume")}</span>
            </button>
          </a>
        </div>

        <div className="flex w-1/2 lg:w-1/3 items-center justify-end">
          <div className="hidden md:grid grid-cols-3 justify-between w-full xl:w-1/2 divide-x divide-solid divide-white/50">
            <a
              href="https://www.linkedin.com/in/álef-renan-defente-81436922b"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center flex-col text-lg transition-filter hover:drop-shadow-[0_0_1em_rgba(100,108,255,0.67)] duration-300 ease-in-out"
              onClick={handleLinkedinClick}
            >
              <SiLinkedin className="text-white" />
            </a>
            <a
              href="https://github.com/AlefRenan"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center flex-col text-lg transition-filter hover:drop-shadow-[0_0_1em_rgba(100,108,255,0.67)] duration-300 ease-in-out"
              onClick={handleGithubClick}
            >
              <SiGithub className="text-white" />
            </a>
            <a
              href="https://wa.me/5567992551478"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center flex-col text-lg transition-filter hover:drop-shadow-[0_0_1em_rgba(100,108,255,0.67)] duration-300 ease-in-out"
              onClick={handleWhatsappClick}
            >
              <RiWhatsappFill className="text-white" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
