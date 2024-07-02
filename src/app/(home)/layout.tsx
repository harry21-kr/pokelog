import React, { PropsWithChildren } from "react";

const HomePageLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return <div className="pt-36">{children}</div>;
};

export default HomePageLayout;
