import React from "react";

const ProjectDetail = ({ setShowModal, clickedProject }) => {
  return (
    <>
      <>
        <div
          onClick={() => {
            setShowModal(false);
          }}
          className="justify-center items-center flex overflow-x-hidden overflow-y-hidden fixed inset-0 z-50 outline-none focus:outline-none"
        >
          <div
            className="relative max-w-[80%] my-6 mx-auto max-h-[80vh]"
            onClick={(e) => {
              // do not close modal if anything inside modal content is clicked
              e.stopPropagation();
            }}
          >
            {/*content*/}
            <div className="border-0 h-fit pb-2 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
              {/*header*/}
              <div className="flex shadow-md items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                <h3 className="text-xl md:text-3xl font-semibold">
                  {clickedProject.name}
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
              <div className="relative p-6 flex-auto overflow-y-auto max-h-[60vh]">
                <div className="md:flex w-full">
                  <img
                    className="w-full md:w-1/2 aspect-video object-contain"
                    src={clickedProject.image}
                    alt={clickedProject.name}
                  />
                  <div className="flex flex-col w-full p-5 text-lg">
                    <p>
                      <span className="font-bold text-gray-700">Type:</span>{" "}
                      {clickedProject.type}{" "}
                    </p>
                    <p>
                      <span className="font-bold text-gray-700">
                        Contributers:
                      </span>{" "}
                      {clickedProject.contributers}{" "}
                    </p>
                    <p>
                      <span className="font-bold text-gray-700">Purpose:</span>{" "}
                      {clickedProject.purpose}{" "}
                    </p>
                    <p className="text-blueGray-500 leading-relaxed">
                      <span className="font-bold text-gray-700">
                        Technologies:{" "}
                      </span>
                      {clickedProject.tech.map((t) => t + " ")}
                    </p>
                  </div>
                </div>
                <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                  {clickedProject.description}
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

ProjectDetail.defaultProps = {
  clickedProject: {
    name: " - ",
    image: "",
    tech: [],
    contributers: " - ",
    purpose: " - ",
    type: " - ",
  },
};

export default ProjectDetail;
