import * as React from "react";

const emptySubscribe = () => () => {};
export const useIsMounted = () => {
  return React.useSyncExternalStore(
    emptySubscribe,
    () => true, 
    () => false 
  );
}