import { useEffect } from "react";

const useDisableIosScrollBack = () => {
  useEffect(() => {
    document.body.addEventListener(
      "touchmove",
      (e) => {
        e.preventDefault();
      },
      { passive: false }
    );
  }, []);
};

export default useDisableIosScrollBack;
