import { uploadBytesResumable, ref, getDownloadURL } from "firebase/storage";
import { storage } from "../../utils/firebase";

export const uploadImageToDatabase = async (uri: any) => {
  const uniqueID = new Date().getTime();
  const blob: any = await new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.onload = function () {
      resolve(xhr.response);
    };
    xhr.onerror = function (e) {
      reject(new TypeError("Network request failed"));
    };
    xhr.responseType = "blob";
    xhr.open("GET", uri, true);
    xhr.send(null);
  });
  const fileRef = ref(storage, uniqueID.toString());
  await uploadBytesResumable(fileRef, blob);

  blob.close();

  return await getDownloadURL(fileRef);
};
