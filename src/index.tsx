import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ThemeProvider } from "@material-tailwind/react";
import PokemonProvider from "./context/pokemon.context";
import ViewAsProvider from "./context/viewAs.context";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <PokemonProvider>
        <ViewAsProvider>
          <App />
        </ViewAsProvider>
      </PokemonProvider>
    </ThemeProvider>
  </React.StrictMode>
);
