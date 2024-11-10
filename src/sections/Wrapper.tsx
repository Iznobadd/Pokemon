import React from "react";

interface WrapperProps {
  children: React.ReactNode;
}

const Wrapper: React.FC<WrapperProps> = ({ children }) => {
  return (
    <div className="h-[180vh] bg-content flex justify-center relative overflow-hidden">
      {children}
    </div>
  );
};

export default Wrapper;
