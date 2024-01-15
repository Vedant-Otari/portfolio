import React from "react";

const ProjectDetail = ({ setShowModal ,clickedProject}) => {
  return (
    <>
      <>
        <div
          onClick={() => {
            setShowModal(false);
          }}
          className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
        >
          <div
            className="relative w-auto my-6 mx-auto max-w-3xl"
            onClick={(e) => {
              // do not close modal if anything inside modal content is clicked
              e.stopPropagation();
            }}
          >
            {/*content*/}
            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
              {/*header*/}
              <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                <h3 className="text-3xl font-semibold">
                  {clickedProject && clickedProject.name}
                </h3>
                <button
                  onClick={() => {
                    setShowModal(false);
                  }}
                  className="p-1 ml-auto bg-transparent border-0 text-black float-right leading-none font-semibold outline-none focus:outline-none"
                >
                  <span className=" text-black h-6 w-6 text-4xl block outline-none focus:outline-none">
                    ×
                  </span>
                </button>
              </div>
              {/*body*/}
              <div className="relative p-6 flex-auto">
                <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                  {clickedProject && clickedProject.description}
                </p>
                <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                {clickedProject && clickedProject.tech.map((t) => t + " ")}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
      </>
    </>
  );
};

export default ProjectDetail;
