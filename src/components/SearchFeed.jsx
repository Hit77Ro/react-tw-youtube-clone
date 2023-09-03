import { useEffect, useState } from "react";
import Videos from "./Videos";
import { useParams } from "react-router-dom";
import { fetcher } from "../utils/FetchFromApi";
const SearchFeed = () => {
  const { searchTerm } = useParams();
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    fetcher(`search?part=snippet&q=${searchTerm}`).then((data) =>
      setVideos([
        ...data.items.filter((el) => el.id.channelId),
        ...data.items.filter((el) => el.id.videoId),
      ]),
    );
  }, [searchTerm]);
  return (
    <div>
      <h1 className="p-6 text-4xl font-bold text-white">
        {" "}
        search results for <span className=" text-red-500">
          {" "}
          {searchTerm}
        </span>{" "}
      </h1>
      <Videos videos={videos} />
    </div>
  );
};

export default SearchFeed;
