"use client";
import { deleteImage, getImages, useDeleteImage, useImages } from "@/uploadApi";
import { useQueryClient } from "@tanstack/react-query";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const MediaSection = () => {
  const queryClient = useQueryClient();
  const { isLoading, isFetching, error, data } = useImages();
  const { mutate, isLoading: deleteLoading } = useDeleteImage(queryClient);
  const [statusImages, setStatusImages] = useState("");
  const [statusDelete, setStatusDelete] = useState("");

  const deleteHandler = (id) => {
    deleteImage(id, setStatusDelete, setStatusImages);
  };

  if (isLoading || isFetching || deleteLoading)
    return (
      <div className="h-[70vh] flex justify-center items-center">
        <div className="loader">Loading</div>
      </div>
    );

  if (error) return "An error has occurred: " + error.message;

  return (
    <div>
      <p className="ml-1">All Media</p>
      <div className="flex flex-wrap gap-10">
        {data.length === 0
          ? "NO DATA AVAILABLE"
          : data.map((item, index) => (
              <div key={index} className="w-[200px] h-[500px]">
                {item?.url.endsWith(".mp4") ? (
                  <video
                    controls
                    loop
                    style={{ width: "200px", height: "400px" }}
                  >
                    <source src={item?.url} />
                  </video>
                ) : (
                  <Image
                    src={item?.url}
                    alt=""
                    width={200}
                    height={400}
                    className="border border-black rounded h-[400px] w-[200px]"
                  />
                )}

                <button
                  className="bg-red-500 block mx-auto mt-4 py-2 px-10 text-white rounded"
                  onClick={() => mutate(item?._id)}
                >
                  Delete
                </button>
              </div>
            ))}
      </div>
    </div>
  );
};

export default MediaSection;
