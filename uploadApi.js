"use client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
let baseUrl = "http://localhost:5000";

export const uploadImage = async (formData) => {
  console.log("credentials", formData);
  const response = await axios.post(
    "https://api.cloudinary.com/v1_1/dqjnzwewf/image/upload",
    formData
  );
  return response?.data?.url;
};

export const uploadImageDatabase = async ({ imageUrl, queryClient }) => {
  const response = await axios.post(`${baseUrl}/save-new`, {
    url: imageUrl,
  });
  queryClient.invalidateQueries("images");
};

export const getImages = async () => {
  const response = await axios.get(`${baseUrl}/get-all`);
  const data = response?.data?.data;
  return data;
};

export const deleteImage = async (id) => {
  const response = await axios.delete(`${baseUrl}/delete-one/${id}`);
};


export const useUploadImage = (mutateFn, queryClient) =>
  useMutation({
    mutationKey: ["uploadImage"],
    mutationFn: uploadImage,
    onSuccess: (imageUrl) => {
      mutateFn({ imageUrl, queryClient });
    },
  });

export const useUploadImageDatabase = (queryClient) =>
  useMutation({
    mutationKey: ["uploadImageDatabase"],
    mutationFn: uploadImageDatabase,
  });

export const useImages = () =>
  useQuery({
    queryKey: ["images"],
    queryFn: getImages,
    staleTime: Infinity,
    refetchOnMount: false,
  });

export const useDeleteImage = (queryClient) =>
  useMutation({
    mutationKey: ["deleteImage"],
    mutationFn: deleteImage,
    onSuccess: () => {
      queryClient.invalidateQueries("images");
    },
  });


