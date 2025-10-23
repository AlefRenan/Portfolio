import { useEffect, useState } from "react";
const useResume = () => {
  const [alefResume, setalefResume] = useState<string>("");

  useEffect(() => {
    setalefResume(
      "https://drive.google.com/file/d/1wJ4MsDxIHR1byhajy84Fh1sOHm1xx2aC/view?usp=drive_link"
    );
  });

  return alefResume;
};

export default useResume;
