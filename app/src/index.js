import { createRoot } from 'react-dom';
import App from "./App";

const app = document.getElementById("app");
const root = createRoot(app);
root.render(<App />)