import { Routes, Route } from "react-router-dom";
import ContextProvidor from 'contexts/Context';
import Posts from "containers/Posts";
import PostDetails from "containers/PostDetails";

function App() {
  return (
    <div className="App">
      <ContextProvidor>
        <Routes>
          <Route path="/" element={<Posts />} />
          <Route path="post/:postId" element={<PostDetails />} />
        </Routes>
      </ContextProvidor>
    </div>
  );
}

export default App;
