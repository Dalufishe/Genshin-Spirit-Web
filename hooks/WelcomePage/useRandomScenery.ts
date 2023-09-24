import { useQuery } from "react-query";
import axios from "axios";
import { useEffect } from "react";
import { sample } from "lodash";

const useRandomScenery = () => {
  // random_scenery_list
  const { data: random_scenery_list, refetch: get_random_scenery_list } =
    useQuery(
      "random-scenery-list",
      () => axios.get("/random-scenery/rss_bg.json"),
      {
        select(data) {
          return data.data;
        },
        refetchOnReconnect: false,
        refetchOnWindowFocus: false,
      }
    );

  // random_scenery
  const random_scener = sample(random_scenery_list);

  return random_scener;
};

export default useRandomScenery;
