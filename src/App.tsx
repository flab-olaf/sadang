import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainPage from "./pages/main";
import PlaygroundPage from "./pages/playground";
import SignupPage from "./pages/signup";
import QueryClientProvider from "@shared/providers/QueryClientProvider";

function App() {
  return (
    <QueryClientProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/playground" element={<PlaygroundPage />} />
          <Route path="/signup" element={<SignupPage />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
