import React from "react";

interface WrapperProps {
  children: React.ReactNode;
}

const Wrapper: React.FC<WrapperProps> = ({ children }) => {
  return (
    <div className="mx-20 border-x-[0.5px] border-x-primary h-[80vh] bg-content flex justify-center relative overflow-hidden">
      {children}
    </div>
  );
};

export default Wrapper;
