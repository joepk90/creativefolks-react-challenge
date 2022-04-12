import { Routes, Route } from "react-router-dom";
import ContextProvidor from 'contexts/Context';
import Posts from "containers/Posts";

function App() {
  return (
    <div className="App">
      <ContextProvidor>
        <Routes>
          <Route path="/" element={<Posts />} />
        </Routes>
      </ContextProvidor>
    </div>
  );
}

export default App;
