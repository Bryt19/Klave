import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./router";

const BASE_PATH = "/";

function App() {
  return (
    <BrowserRouter basename={BASE_PATH}>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
