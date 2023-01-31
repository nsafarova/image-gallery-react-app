import React from "react";

const Jumbotron = ({ children }) => {
  return (
    <div className="bg-gradient-to-tr from-emerald-400 via-purple-400 to-cyan-100 flex items-center py-9 px-4">
      <div className="max-w-xl mx-auto w-full">
        <h1 className="text-3xl font-bold text-white mb-5">Find Images</h1>
        <p className="text-md text-white ">
          The internet’s source for visuals.
        </p>
        <p className="text-md text-white mb-6">
          Powered by creators everywhere.
        </p>
        {children}
      </div>
    </div>
  );
};
export default Jumbotron;
