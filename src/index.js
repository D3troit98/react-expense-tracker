import React from "react"
import ReactDom from "react-dom/client"
import { SpeechProvider } from "@speechly/react-client"
import { Provider } from "./context/context"
import App from "./App"
import "./index.css"

const root = ReactDom.createRoot(document.getElementById("root"))
root.render(
    <SpeechProvider appId="39b0a495-5df1-4126-b0e0-1c7961250d64" language="en-US">
    <Provider>
    <App />
    </Provider>
    </SpeechProvider>
)