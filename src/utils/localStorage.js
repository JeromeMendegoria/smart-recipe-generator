export const loadFromLocalStorage = (key) => {
    try {
      const serializedState = localStorage.getItem(key);
      return serializedState ? JSON.parse(serializedState) : undefined;
    } catch (error) {
      console.error(`Error loading ${key} from localStorage`, error);
      return undefined;
    }
  };
  
  export const saveToLocalStorage = (key, value) => {
    try {
      const serializedState = JSON.stringify(value);
      localStorage.setItem(key, serializedState);
    } catch (error) {
      console.error(`Error saving ${key} to localStorage`, error);
    }
  };