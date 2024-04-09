import React from "react";

// type sessionStorageType = {
//   storageKey: string;
//   fallbackState: any;
// };

export const useSessionStorage = (storageKey, fallbackState) => {
  const [value, setValue] = React.useState(
    JSON.parse(sessionStorage.getItem(storageKey)) ?? fallbackState,
  );

  React.useEffect(() => {
    sessionStorage.setItem(storageKey, JSON.stringify(value));
  }, [value, storageKey]);

  return [value, setValue];
};
