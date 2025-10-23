import { useTranslation } from "react-i18next";

function TechnologyDescription({ techKey }: { techKey: string }) {
  const { t } = useTranslation();

  return (
    <p className="text-sm text-slate-300 mt-3">
      {t(`technologies.${techKey}.description`)}
    </p>
  );
}

export default TechnologyDescription;
