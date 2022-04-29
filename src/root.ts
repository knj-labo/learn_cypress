import ReactDOM from "react-dom/client";

const isRootElement = document.getElementById("root");
if (!isRootElement) throw new Error("Failed to find the root element");
export const root = ReactDOM.createRoot(isRootElement);
