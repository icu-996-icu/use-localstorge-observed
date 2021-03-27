import * as React from "react";

type PropType = string;

export const useMyHook = (props: PropType) => {
  let [state, setState] = React.useState<Boolean>(false);

  React.useEffect(() => {
    const observiceChange = (e: any) => {
      const { key } = e;
      setState(key === props);
    };
    window.addEventListener("storage", observiceChange);
    return () => {
      window.removeEventListener("storage", observiceChange);
    };
  }, [props]);

  return state;
};
