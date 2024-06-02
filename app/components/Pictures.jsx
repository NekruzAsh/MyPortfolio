import React from "react";

const Pictures = () => {
  return (
    <div className="w-full h-full items-center flex justify-center">
      <div className="max-w-[1280px] mb-[21rem]">
        <div className="top-[45rem] bottom-0 left-[12rem] right-[12rem] mt-20 grid grid-cols-4 gap-4">
          <div className="mockup-phone">
            <div className="camera"></div>
            <div className="display">
              <div className="artboard artboard-demo phone-1">Hi.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pictures;
