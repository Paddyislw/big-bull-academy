"use client";
import MediaSection from "@/components/upload/MediaSection";
import {
  uploadImage,
  useUploadImage,
  useUploadImageDatabase,
  useUploadVideo,
} from "@/uploadApi";
import { useQueryClient } from "@tanstack/react-query";
import Image from "next/image";
import React, { useState } from "react";

const Upload = () => {
  const queryClient = useQueryClient();

  const {
    mutate: mutateDatabase,
    isLoading: loadingDatabase,
    error: errorDatabase,
  } = useUploadImageDatabase();

  const { mutate, isLoading, error } = useUploadImage(
    mutateDatabase,
    queryClient
  );

  const {
    mutate: uploadVideo,
    isLoading: uploadVideoLoading,
    error: uploadVideError,
  } = useUploadVideo(mutateDatabase, queryClient);

  const [selectedFile, setSelectedFile] = useState({
    file: null,
    fileName: "",
    blobFile: "",
    fileType: "",
  });

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setSelectedFile({
      file: file,
      fileName: file.name,
      blobFile: "",
      fileType: file.type,
    });

    if (file) {
      const fileType = file.type;
      if (
        allowedImageTypes.includes(fileType) ||
        allowedVideoTypes.includes(fileType)
      ) {
        const reader = new FileReader();
        reader.onload = () => {
          setSelectedFile((prev) => ({ ...prev, blobFile: reader.result }));
        };
        reader.readAsDataURL(file);
      } else {
        alert(
          "Please upload a image or video. Allowed types: jpeg,png,gif,jpg,mp4,mpeg"
        );
      }
    }
  };

  console.log(selectedFile.fileType,'debug...')

  const handleUpload = () => {
    if (selectedFile.file) {
      const formData = new FormData();
      formData.append("file", selectedFile.file);
      formData.append("upload_preset", "bigbulltrader");
      formData.append("cloud_name", "dqjnzwewf");
      if (allowedImageTypes.includes(selectedFile.fileType)) {
        mutate(formData);
      }
      if (allowedVideoTypes.includes(selectedFile.fileType)) {
        uploadVideo(formData);
      }
    }
  };

  if (error || errorDatabase) return "An error has occurred: " + error.message;

  return (
    <div className="layout py-10">
      <p className="text-4xl font-semibold">Media</p>
      <div className="mt-4">
        <label
          htmlFor="upload"
          className="cursor-pointer border-2 border-indigo-700 text-center py-10  border-dashed block w-[340px] rounded-xl bg-indigo-50 text-xl font-semibold text-indigo-800"
        >
          Choose File
        </label>
        <input
          type="file"
          className="hidden"
          id="upload"
          onChange={handleImageUpload}
        />
        <p className="text-lg font-semibold m-2">
          FileName: -{" "}
          <span className="text-indigo-800">{selectedFile.fileName}</span>
        </p>
        {allowedImageTypes.includes(selectedFile.fileType) && (
          <Image
            alt=""
            src={selectedFile.blobFile}
            width={200}
            height={400}
            className="border border-black rounded h-[400px] w-[200px]"
          />
        )}
        {allowedVideoTypes.includes(selectedFile.fileType) && (
          <video autoPlay controls loop style={{ width: "200px", height: "400px" }}>
            <source src={selectedFile.blobFile} />
          </video>
        )}
        {selectedFile.fileType !== "" && (
          <button
            className="mt-4 w-[300px] bg-indigo-50 text-indigo-800 font-semibold py-2 rounded-lg border border-indigo-800 shadow-xl"
            onClick={handleUpload}
            disabled={isLoading || uploadVideoLoading}
          >
            {isLoading || loadingDatabase ? "...Loading..." : "Upload"}
          </button>
        )}
      </div>
      <MediaSection />
    </div>
  );
};

const allowedImageTypes = ["image/jpeg", "image/png", "image/gif", "image/jpg"];
const allowedVideoTypes = ["video/mp4", "video/mpeg"];

// const fileSize = file.size / 1024;
// if (fileSize > 500) {
//   alert("Please upload an image smaller than 500kb");
// }

//alert("Please upload a JPEG or PNG image.");
//       return;
export default Upload;
