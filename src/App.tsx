/* 
© 2025 Aravinth Raj R. All rights reserved.
Unauthorized copying of this file, via any medium, is strictly prohibited.
Proprietary and confidential.  
Written by Aravinth Raj R <aravinthr235@gmail.com>, 2025.
*/
import { BrowserRouter } from "react-router-dom";
import { Loader, Toaster } from "./components";
import { ThemeProvider } from "./hooks";
import { Navigator } from "./navigator";
import { useEffect, useState } from "react";
import { fetchSessionUser } from "./utils";

const App = () => {
  const [bootstrapped, setBootstrapped] = useState(false);

  useEffect(() => {
    const bootstrap = async () => {
      await fetchSessionUser();
      setBootstrapped(true);
    };

    bootstrap();
  }, []);

  return (
    <ThemeProvider>
      <BrowserRouter>
        {bootstrapped ? <Navigator /> : <Loader loadingText="" />}
      </BrowserRouter>
      <Toaster />
    </ThemeProvider>
  );
};

export default App;
