import { PropsWithChildren } from "react";
import QueryProvider from "./QueryProvider";

const Providers: React.FC<PropsWithChildren> = ({ children }) => {
  return <QueryProvider>{children}</QueryProvider>;
};

export default Providers;
