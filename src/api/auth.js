import axios from "axios";

export const imageUpload = async (image) => {
  const formData = new FormData();
  formData.append("image", image);
  const { data } = await axios.post(
    `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_API_KEY}`,
    formData
  );

  return data;
};
// export const imageUpload = async (image) => {
//     const formdata = new FormData();
//     formdata.append("file", image);
//     formdata.append("upload_preset", import.meta.env.VITE_upload_preset);
//     formdata.append("cloud_name", import.meta.env.VITE_cloudName);

//     const { data } = await axios.post(
//       `https://api.cloudinary.com/v1_1/${
//         import.meta.env.VITE_cloudName
//       }/image/upload`,
//       formdata
//     );

//     return data;
//   };
