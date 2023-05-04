import React, { useContext } from "react";
import {ImageContext} from "../App";
import Image from "./Image";
import Skeleton from "./Skeleton";

const Images = () => {
  // eslint-disable-next-line no-unused-vars
  const {response, isLoading, searchImage} = useContext(ImageContext);

  return (
    <div className="px-4 md:px-0">
      <h1 className="mt-8 font-bold text-2xl max-w-7xl mx-auto">Results for <span className="capitalize">{searchImage || 'Cats'}</span></h1>

      <div className="columns-2 md:columns-3 lg:columns-4 gap-6 my-8 max-w-7xl mx-auto">
        {isLoading ? <Skeleton item={10} /> : response.map((data, key) => <Image key={key} data={data}/>)}
      </div>
    </div>
  );
};
export default Images;
