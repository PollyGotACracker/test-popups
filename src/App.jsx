import usePopup from "./hooks/usePopup";
import { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

const App = () => {
  const { openPopup } = usePopup();

  useEffect(() => {
    openPopup([
      {
        id: "534631b5-8012-49fc-a6fa-4d58e91568f9",
        content: "안녕하세요",
      },
      {
        id: "8cc52066-bfe1-4934-8f78-913568bf1503",
        content: "반갑습니다",
      },
      {
        id: "932a21fc-2275-4771-bf6f-8034eae3ea1b",
        content: "뻥이야",
      },
    ]);
  }, []);
};

export default App;
