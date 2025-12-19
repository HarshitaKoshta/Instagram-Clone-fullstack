import React, { useState } from "react";
import { createClient } from "@supabase/supabase-js";
import axios from "axios";



const supabaseUrl = "https://jebpcpswsonfkiwpthsx.supabase.co"
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImplYnBjcHN3c29uZmtpd3B0aHN4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjM3MDAyNzksImV4cCI6MjA3OTI3NjI3OX0.NrhELI_tCNTGL5myeLupw6gljjgoGPY4rTPC1R3XEhQ"
const supabase = createClient(supabaseUrl, supabaseKey);



const Upload = () => {
 const [Img, setImg] = useState(null);

  const handleFileChange = (e) => {
    setImg(e.target.files[0]);
  };

   async function save() {
    if (!Img) {
      alert("Please select an image first!");
      return;
    }

    try {
        const { data, error } = await supabase.storage
  .from("Insta")
  .upload("insta_images/" + Img.name, Img, { upsert: true });

      if (error) throw error;

      const imgUrl = `${supabaseUrl}/storage/v1/object/public/Insta/insta_images/${Img.name}`;
      console.log("Image URL:", imgUrl);

      axios.post("https://instagram-clone-fullstack-2.onrender.com/upload",{imgUrl}),{
        headers:{
          Authorization: localStorage.getItem("token")
        }
      }
      alert("✅ Image uploaded and saved successfully!");
      setImg(null);
    } catch (err) {
      console.error("❌ Upload failed:", err);
      alert("Error uploading image. Check console for details.");
    }
  }

    return (
    <div>
        <input type="file" onChange={handleFileChange} className="border p-2 rounded" />
      <button
        onClick={save}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
        Upload </button>
    </div>
  )
}

export default Upload