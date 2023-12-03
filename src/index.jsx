/* IMPORTANDO COMPONENTES */
import React from "react";
import ReactDOM from "react-dom";

/* IMPORTANDO ROTAS */
import App from "./App.jsx";
import MainPage from "./views/public/MainPage.jsx";
import ProfilePage from "./views/public/ProfilePage.jsx";
import NotFoundPage from "./views/public/NotFoundPage.jsx";

var mountNode = document.getElementById("app");
ReactDOM.render(<App name="Sociallizze" />, mountNode);