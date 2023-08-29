import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
// style the page of Username page
import styles from "../styles/Username.module.css";

const Urlshortener = () => {
  const [url, setUrl] = useState("");
  const [shortId, setShortId] = useState(""); // State to hold the shortId

  const handlechange = async () => {
    try {
      const response = await axios.post("/api/url", { url }); // Use Axios to send POST request

      if (response.status === 201) {
        toast.success(<b>Created Successfully...!</b>);
        setShortId(response.data.id);
      } else {
        toast.error(<b>Could not setUrl!</b>);
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error(<b>Something went wrong</b>);
    }
  };

  return (
    <div className="container mx-auto">
      <Toaster position="top-center" reverseOrder={false}></Toaster>

      <div className="flex justify-center items-center h-screen">
        <div className={styles.glass} style={{ width: "50%" }}>
          <div className="title flex flex-col items-center">
            <h6 className="text-5xl font-bold">URL-Shortener!</h6>
            <span className="py-4 text-xl w-2/3 text-center text-gray-500">
              Explore More by connecting with us.
            </span>
          </div>
          <div className="textbox flex flex-col items-center gap-6">
            <input
              className={styles.textbox}
              name="fullUrl"
              id="fullUrl"
              type="text"
              placeholder="LINK"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />
            <button className={styles.btn} type="button" onClick={handlechange}>
              Shrink
            </button>
            <div className="text-center py-4">
              <span className="text-gray-500">
                Track short URL traffic and manage your links.
              </span>
            </div>
          </div>
          <div className="text-center py-4">
            <span className="text-gray-500">
              <a href={url} target="_blank">
                Urlshortener_Link : {shortId}
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Urlshortener;
