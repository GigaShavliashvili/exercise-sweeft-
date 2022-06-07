import React, { useState, useCallback } from "react";

const useScrollHooks = (observer, isLoading) => {
  const [page, setPage] = useState(1);
  const lastUserObserver = useCallback(
    (node) => {
      if (isLoading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((el) => {
        if (el[0].isIntersecting === true) {
          console.log(el);
          setPage((prev) => prev + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [isLoading]
  );
  return [page, lastUserObserver];
};

export default useScrollHooks;
