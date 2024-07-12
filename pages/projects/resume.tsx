import { useEffect } from "react";
import { redirect } from "next/navigation";

const Resume = () => {
  useEffect(() => {
    redirect("/resume-joaquin-candalaft.pdf");
  }, []);

  return (
    <div>
      <h1>Resume</h1>
    </div>
  );
};

export default Resume;
