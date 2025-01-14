import { skillsData } from "@/components/data/skillsData";
import Image from "next/image";

const Skills = () => {
  return (
    <div className="w-full py-16 px-8">
      <h2 className="font-bold text-8xl my-16 w-full text-center lg:text-7xl">
        Skills
      </h2>
      <div className="grid grid-cols-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-center justify-items-center rounded-lg p-8">
        {skillsData.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center p-4 h-32 w-32 xs:h-28 xs:w-28 rounded-lg shadow-md dark:bg-light dark:text-dark"
          >
            <div className="relative h-12 w-12 mb-4">
              <Image
                src={skill.icon}
                alt={skill.name}
                width={48}
                height={48}
                className="w-full h-auto"
              />
            </div>
            <span className="text-lg font-medium xs:text-base">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
