import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { Toaster } from "./components/ui/toaster";
import Routing from "./routes/Routing";
import theme from "./theme";
import { useEffect, useState } from "react";

function App() {
  const [reload, setReload] = useState(false);
  useEffect(() => {
    const themeMode = localStorage.getItem("theme");
    if (!themeMode || themeMode === "system") {
      localStorage.setItem("theme", "light");
      setReload(!reload);
    }
  }, []);

  return (
    <ChakraProvider value={theme}>
      <Toaster />
      <BrowserRouter>
        <Routing />
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
