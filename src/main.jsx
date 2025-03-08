import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './components/App/App.jsx'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Main from "./components/main/Main.jsx";
import {TimerProvider} from "./business/TimerContext.jsx";



createRoot(document.getElementById('root')).render(
  <StrictMode>
      <BrowserRouter>
          <TimerProvider>
              <Routes>
                  <Route path="/login" element={<App/>} />
                  <Route path="/Home" element={
                      <Main/>
                  }></Route>
              </Routes>
          </TimerProvider>
      </BrowserRouter>
  </StrictMode>,
)
