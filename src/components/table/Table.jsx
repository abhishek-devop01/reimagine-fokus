import { useState } from "react";
import { projectList } from "../utils/ingredients";
import PreviewModal from "../gallery/PreviewModal";
import ProjectListItem from "../gallery/ProjectListItem";

function Indi() {
  return (
    <div className="h-[100vh] w-full flex text-white items-center ">
      <Projects />
    </div>
  );
}

export default Indi;

const Projects = () => {
  const [modal, setModal] = useState({ activeIndex: 0, displayModal: false });

  return (
    <section className="w-full px-desktop absolute top-15 text-left z-10">
      {/* LABELS */}
      <div className="flex items-center justify-between mb-[10px] opacity-40">
        <span className="w-[20%]"></span>
        <div className="w-[46%] flex justify-between items-center ">
          <span className="text-red-700 font-bold">Fokus</span>
          <span>Generic Energy Drink</span>
        </div>
        <span className="w-[20%] text-right">Generic Sports Drink</span>
      </div>

      {/* PROJECTS */}
      <div
        className="text-left flex-wrap "
        onMouseEnter={() =>
          setModal((prev) => {
            return { ...prev, displayModal: true };
          })
        }
        onMouseLeave={() =>
          setModal((prev) => {
            return { ...prev, displayModal: false };
          })
        }
      >
        {[...projectList, ...projectList].map((item, i) => (
          <ProjectListItem
            key={`project-${i}`}
            project={item}
            onMouseEnter={() =>
              setModal((prev) => {
                return { ...prev, activeIndex: i };
              })
            }
          />
        ))}
      </div>

      <PreviewModal
        projectList={[...projectList, ...projectList]}
        modal={modal}
      />

      
    </section>
  );
};
