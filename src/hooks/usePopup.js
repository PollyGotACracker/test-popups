import { usePopupsDispatchContext } from "../contexts/PopupsContext";

const usePopup = () => {
  const { openPopup, closePopup } = usePopupsDispatchContext();

  return { openPopup, closePopup };
};

export default usePopup;
