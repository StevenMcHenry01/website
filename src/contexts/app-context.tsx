import { createContext, Dispatch, SetStateAction, useContext } from 'react';

interface AppContextI {
  theme?: string;
  setTheme: Dispatch<SetStateAction<string | undefined>>;
}

const AppContextDefaultValues: AppContextI = {
  theme: undefined,
  setTheme: () => {
    return;
  },
};

export const AppContext = createContext<AppContextI>(AppContextDefaultValues);

export const useAppContext = () => {
  return useContext(AppContext);
};
