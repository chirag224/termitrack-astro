// src/components/ReactRouterWrapper.jsx
import { BrowserRouter } from "react-router-dom";

const ReactRouterWrapper = ({ children }) => {
  return <BrowserRouter>{children}</BrowserRouter>;
};

export default ReactRouterWrapper;
