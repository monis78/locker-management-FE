import logo from "./logo.svg";
import "./App.css";
import Navigation from "./Navigation";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { GoogleOAuthProvider } from "@react-oauth/google";

function App() {
  return (
    <GoogleOAuthProvider clientId="741555424430-li4sjlvcc9qjn1tqein8aiiigl2k97up.apps.googleusercontent.com">
      <BrowserRouter>
        <div className="app-container">
          <header className="app-header"></header>
          <Navigation />
        </div>
      </BrowserRouter>
    </GoogleOAuthProvider>
  );
}

export default App;
