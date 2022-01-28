import { useState, useEffect } from 'react';

const useLocalStorage = (key, defaultValue) => {
  const [state, setState] = useState(() => {
    let storageValue = localStorage.getItem(key);

    try {
      storageValue = JSON.parse(storageValue);
    } catch {
      storageValue = null;
    }

    return storageValue ?? defaultValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
};
export default useLocalStorage;
