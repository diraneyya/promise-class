import { useState } from "react";
import DelayButton from "./DelayButton";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useNavigate,
  useParams,
} from "react-router-dom";

import "./App.css";

function DelayHeader(props) {
  const { delay } = useParams();
  if (isFinite(delay))
    return <h2>You are on the delay route ({delay} ms)</h2>;
  else
    return null;
}

function App() {
  const [delay, setDelay] = useState(NaN);

  return (
    <BrowserRouter>
      <h1>Promises</h1>
      <Routes>
        <Route path='/delay/:delay' element={<DelayHeader />} />
      </Routes>

      <div className="card">
        <DelayButton delay={delay} setDelay={setDelay} />
      </div>
    </BrowserRouter>
  );
}

export default App;
