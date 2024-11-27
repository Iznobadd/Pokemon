import React from "react";

interface WrapperProps {
  children: React.ReactNode;
}

const Wrapper: React.FC<WrapperProps> = ({ children }) => {
  return (
    <>
      <div className="relative overflow-hidden pt-40">
        <div className="container mx-auto">{children}</div>
      </div>
    </>
  );
};

export default Wrapper;
