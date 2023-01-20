import { useEffect, useState } from "react";
import { projectFirestore } from "@/components/services/Firebase/config";

export const useFirestore = (collection) => {
  const [doc, setDoc] = useState([]);

  useEffect(() => {
    const unsubscribe = projectFirestore
      .collection(collection)
      .orderBy("createdTime", "desc")
      .onSnapshot((item) => {
        let documents = [];
        console.log(documents);
        item.forEach((docs) => {
          documents.push({ ...docs.data(), id: docs.id });
        });
        setDoc(documents);
      });

    return () => unsubscribe();
  }, [collection]);

  return { doc };
};
