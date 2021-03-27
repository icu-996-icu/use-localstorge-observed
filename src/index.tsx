import * as React from "react";

type OptionType = string;
const useLocalStorageObserved = (option: OptionType) => {
  let [state, setState] = React.useState<Boolean>(false);

  React.useEffect(() => {
    const observiceChange = (e: any) => {
      const { key } = e;
      setState(key === option);
    };
    window.addEventListener("storage", observiceChange);
    return () => {
      window.removeEventListener("storage", observiceChange);
    };
  }, [option]);

  return state;
};


export default useLocalStorageObserved