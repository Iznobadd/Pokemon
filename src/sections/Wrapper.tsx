import React from "react";

interface WrapperProps {
  children: React.ReactNode;
}

const Wrapper: React.FC<WrapperProps> = ({ children }) => {
  return (
    <div className="min-h-dvh bg-content relative overflow-hidden py-20">
      <div className="container mx-auto">{children}</div>
    </div>
  );
};

export default Wrapper;
