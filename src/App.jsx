import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import {
  Feed,
  SearchFeed,
  VideoDetail,
  ChannelDetail,
  Navbar,
} from "./components";

const App = () => {
  return (
    <Router>
      <div className="bg-primary min-h-screen overflow-hidden mt-[70px]">
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Feed />} />
          <Route path="/video/:id" exact element={<VideoDetail />} />
          <Route path="/channel/:id" exact element={<ChannelDetail />} />
          <Route path="/search/:searchTerm" exact element={<SearchFeed />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
