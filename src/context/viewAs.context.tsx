import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

export enum View {
  List = "List",
  Cards = "Cards",
}

interface ViewAsContext {
  viewAs: View;
  setViewAs: Dispatch<SetStateAction<View>>;
}

const ViewAsContext = createContext<ViewAsContext>({
  viewAs: View.List,
  setViewAs: () => [],
});

const ViewAsProvider = (props: any) => {
  const [viewAs, setViewAs] = useState(View.List);

  const value = { viewAs, setViewAs };

  return <ViewAsContext.Provider {...{ value }} {...props} />;
};

export const useViewAs = () => useContext(ViewAsContext);

export default ViewAsProvider;
