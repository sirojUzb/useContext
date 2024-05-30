import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./App.css";
import MovieContextProvider from "./context/movieContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <MovieContextProvider>
    <App />
  </MovieContextProvider>
);
