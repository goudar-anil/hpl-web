
import { BrowserRouter, Routes,  } from "react-router-dom";
import { AppLayout } from "./components/layout/AppLayout";

function App() {
  return (
    <BrowserRouter>
      <AppLayout>
        <Routes>
        </Routes>
      </AppLayout>
    </BrowserRouter>
  );
}

export default App;
