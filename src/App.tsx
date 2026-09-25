import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { AppRoutes } from "./router";

const BASE_PATH = "/";

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter basename={BASE_PATH}>
        <AppRoutes />
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
