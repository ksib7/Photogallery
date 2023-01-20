import React, { useState } from "react";

import { Input } from "@/components/UI/Input/Input";
import { ProgressBar } from "@/components/ProgressBar/ProgressBar";

import "./FormUpload.scss";

export const FormUpload = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  const types = ["image/jpeg", "image/jpg", "image/png"];

  const selectImage = (e) => {
    e.preventDefault();
    const selectedImage = e.target.files[0];

    if (selectedImage && types.includes(selectedImage.type)) {
      setFile(selectedImage);
      setError("");
    } else {
      setFile(null);
      setError("Please, choose image formate (jpeg, jpg, png)");
    }
  };

  return (
    <form onChange={selectImage}>
      <label>
        <Input />
        <span>+</span>
      </label>
      <div className="output">
        {error && <div className="error">{error}</div>}
        {file && <div>{file.name}</div>}
        {file && <ProgressBar file={file} setFile={setFile} />}
      </div>
    </form>
  );
};
