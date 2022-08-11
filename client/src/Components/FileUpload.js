import React, { Fragment, useState } from "react";
import "tw-elements";
import axios from "axios";
export default function FileUpload() {
  const [file, setFile] = useState("");
  const [fileName, setFileName] = useState("Choose File");
  const [uploadedFile, setUploadedFile] = useState({});

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log("submit");
    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await axios.post("", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
    } catch (err) {}
  };
  return (
    <Fragment>
      <form onSubmit={onSubmit}>
        <div className="flex justify-center mt-20">
          <input
            className="form-control

            block
            w-5/12
            self-center
             px-3
             py-1.5
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            m-0
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            type="file"
            id="custom-file"
            onChange={(e) => {
              setFile(e.target.files[0], setFileName(e.target.files[0].name));
            }}
          />
        </div>
        <div className="flex justify-center">
          <input
            className="w-28 h-10 bg-[#fef08a] mt-8 rounded-xl"
            type="submit"
            value="Upload"
          ></input>
        </div>
      </form>
    </Fragment>
  );
}
