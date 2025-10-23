import { useEffect, useState } from "react";
const useResume = () => {
  const [alefResume, setalefResume] = useState<string>("");

  useEffect(() => {
    setalefResume("Curriculo.pdf");
  });

  return alefResume;
};

export default useResume;
