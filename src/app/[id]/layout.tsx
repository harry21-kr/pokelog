import { PropsWithChildren } from "react";

const DetailPageLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="min-h-screen flex justify-center items-center pt-36 pb-12 md:py-0">
      {children}
    </div>
  );
};

export default DetailPageLayout;
