import { useState, useEffect, useRef } from "react";
import { db } from '../firebase/firebase';
import { onValue, ref } from "firebase/database";

const useFech = () => {
  const [blogs, setBlogs] = useState([]);
  const onValueRef = useRef(null);

  useEffect(() => {
    onValueRef.current = onValue(ref(db), (snapshot) => {
      const data = snapshot.val();
      if (data !== null) {
        const blogArray = Object.values(data);
        setBlogs(blogArray);
      }
    });

    return () => {
      // Cleanup the listener when the component unmounts
      if (onValueRef.current) {
        onValueRef.current();
      }
    };
  }, []);

  return blogs || [];
};

export default useFech;
