import { useEffect, useContext } from "react";
import { NavigationType, UNSAFE_NavigationContext } from "react-router-dom";
import { History, Update } from "history";

export const useBackListener = (callback: (...args: any) => void) => {
  const navigator = useContext(UNSAFE_NavigationContext).navigator as History;

  useEffect(() => {
    const listener = ({ location, action }: Update) => {
      if (action === NavigationType.Pop) {
        callback({ location, action });
      }
    };

    const unlisten = navigator.listen(listener);

    return unlisten;
  }, [callback, navigator]);
};
