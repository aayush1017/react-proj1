'use client';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const page = () => {
  const [imagesData, setImagesData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getImages();
  }, []);
  const getImages = async () => {
    // setLoading(true);
    try {
      const res = await axios.get('https://picsum.photos/v2/list');
      setImagesData(res.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center">
      {loading ? (
        <div class="flex justify-center items-center min-h-screen">
          <div class="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12"></div>
        </div>
      ) : (
        <>
          <div className="p-10">
            {imagesData?.map((item, idx) => {
              return (
                <img
                  key={idx}
                  src={item.download_url}
                  width={300}
                  height={300}
                  className="m-10 rounded inline-block"
                />
              );
            })}
          </div>
          {/* <button
            className="p-5 py-3 bg-gray-500 rounded flex text-white"
            onClick={getImages}
          >
            Get Images
          </button> */}
        </>
      )}
    </div>
  );
};

export default page;
