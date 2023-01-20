import { useEffect, useState } from "react";

import {
  projectStorage,
  projectFirestore,
  timeStamp,
} from "@/components/services/Firebase/config";

export const useStorage = (file) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    const fileRef = projectStorage.ref(file.name);
    const fileCollections = projectFirestore.collection("images");

    const unsub = fileRef.put(file).on(
      "state_changed",
      (snapshot) => {
        const percented =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress(percented);
      },
      (error) => {
        setError(error);
      },
      async () => {
        const url = await fileRef.getDownloadURL();
        const createdTime = timeStamp();
        await fileCollections.add({
          url,
          createdTime,
        });
        setUrl(url);
      }
    );

    return () => unsub();
  }, [file]);

  return { progress, error, url };
};
