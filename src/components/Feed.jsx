import { useEffect, useState } from "react";
import { fetcher } from "../utils/FetchFromApi";
import { Videos, Sidebar } from "./";
import { categories } from "../utils";

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0].name);
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    const current = selectedCategory;
    fetcher(`search?part=snippet&q=${selectedCategory}`).then((data) => {
      if (current !== selectedCategory) return;
      setVideos([
        ...data.items.filter((el) => el.id.channelId),
        ...data.items.filter((el) => el.id.videoId),
      ]);
    });
  }, [selectedCategory]);
  return (
    <div className="">
      <Sidebar
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <div className="sm:pl-[200px]">
        <Videos videos={videos} />
      </div>
    </div>
  );
};

export default Feed;
