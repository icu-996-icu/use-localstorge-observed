import * as React from "react";

interface OptionType {
  keyName: string
}

const useLocalStorageObserved = (option: OptionType) => {
  const { keyName } = option
  let [state, setState] = React.useState<Boolean>(false);

  React.useEffect(() => {
    const observiceChange = (e: any) => {
      const { key } = e;
      setState(key === keyName);
    };
    window.addEventListener("storage", observiceChange);
    return () => {
      window.removeEventListener("storage", observiceChange);
    };
  }, [option.keyName]);

  return state;
};


export default useLocalStorageObserved
