import { useEffect, useRef } from "react"

export const useDidUpdate = (func, values) => {
  const firstRenderRef = useRef(false);

  useEffect(() => {
    if (firstRenderRef.current) {
        func();
    } else {
        firstRenderRef.current = true;
    }
  }, values);
}