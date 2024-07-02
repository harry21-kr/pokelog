import { PropsWithChildren } from "react";

const DetailPageLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      {children}
    </div>
  );
};

export default DetailPageLayout;
