"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDropzone } from "react-dropzone";
import FormInput from "@/components/formInput";
import Button from "@/components/button";

export default function ProductList() {
  const [files, setFiles] = useState([]);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const formData = {
      ...data,
      files,
    };

    let products = JSON.parse(localStorage.getItem("products"));

    if (!products) {
      products = [];
    }

    products.push(formData);

    localStorage.setItem("products", JSON.stringify(products));
    setFiles([])
    reset();
    alert("Product added successfully!");
  };

  const handleCancel = () => {
    reset();
    setFiles([]);
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: {
      "image/*": [".png", ".jpg", ".jpeg", ".svg"],
    },
    multiple: false,
    onDrop: (acceptedFiles) => {
      const filesWithBlob = acceptedFiles.map((file) => {
        const blob = new Blob([file], { type: file.type });

        return {
          blob,
          name: file.name,
          type: file.type,
          size: file.size,
          preview: URL.createObjectURL(blob),
        };
      });

      setFiles(filesWithBlob);
    },
  });

  

  return (
    <div className="max-w-4xl mx-auto p-6">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Dropzone */}
        <div
          {...getRootProps()}
          className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors ${
            isDragActive
              ? "border-blue-500 bg-blue-50"
              : "border-gray-300 hover:border-gray-400"
          }`}
        >
          <input {...getInputProps()} />
          <div className="flex flex-col items-center justify-center">
            <svg
              className="w-12 h-12 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
              ></path>
            </svg>
            <p className="mt-2 text-sm text-gray-600">
              {isDragActive
                ? "Drop the files here"
                : "Drag & drop files here, or click to select files"}
            </p>
            <p className="text-xs text-gray-500 mt-1">Supports images files</p>
          </div>
        </div>

        <div className="grid grid-cols-1  gap-4">
          <FormInput
            id="title"
            label="Title"
            placeholder="Enter title"
            register={register}
            errors={errors}
            className="p-1.5 w-full border border-gray-300 rounded-md"
            validation={{
              required: "Title is required",
            }}
          />

          <FormInput
            id="description"
            label="Description"
            placeholder="Enter description"
            register={register}
            errors={errors}
            className="p-1.5 w-full border border-gray-300 rounded-md"
            validation={{
              required: "Description is required",
            }}
            isTextarea={true}
            rows={3}
          />
        </div>
        <div className="flex space-x-4">
          <Button
            type="button"
            className="!bg-gray-200 !text-black !font-medium"
            variant="secondary"
            onClick={handleCancel}
          >
            Cancel
          </Button>
          <Button
            type="submit"
            variant="primary"
            className="!bg-black !text-white !font-medium"
          >
            Save
          </Button>
        </div>
      </form>

      {files.length > 0 && (
        <div className="mt-4">
          <h3 className="text-sm font-medium text-gray-700">Selected Files:</h3>
          <ul className="mt-2 space-y-2 grid grid-cols-3">
            {files.map((file) => (
              <li
                key={file.name}
                className="text-sm text-gray-500 flex items-start flex-col gap-y-1 "
              >
                <div className="mb-2">
                  <img
                    src={file.preview}
                    alt={file.name}
                    height={200}
                    width={200}
                  />
                </div>
                {file.name} - {(file.size / 1024).toFixed(2)} KB
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
