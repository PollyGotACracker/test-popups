import { createContext, useContext, useMemo, useState } from "react";
import PopupList from "../components/PopupList";

const PopUpsStateContext = createContext([]);
const PopUpsDispatchContext = createContext({});

export const usePopupsStateContext = () => {
  return useContext(PopUpsStateContext);
};

export const usePopupsDispatchContext = () => {
  return useContext(PopUpsDispatchContext);
};

export const PopupsContextProvider = ({ children }) => {
  const [openedPopups, setOpenedPopups] = useState([]);

  const filterData = (mappedData) => {
    const targetIds = JSON.parse(
      localStorage.getItem("popups_do_not_open_for_24h")
    );
    const targetIdsSet = new Set(targetIds);
    return mappedData.filter(({ id }) => !targetIdsSet.has(id));
  };

  const openPopup = (data) => {
    const mappedData = Array.isArray(data) ? data : [{ data }];
    const filteredData = filterData(mappedData);
    const newData = [...filteredData, ...openedPopups];
    setOpenedPopups(newData);
  };

  const closePopup = (targetId) => {
    const newData = [...openedPopups].filter(({ id }) => id !== targetId);
    setOpenedPopups(newData);
  };

  const dispatch = useMemo(() => ({ openPopup, closePopup }));

  return (
    <PopUpsStateContext.Provider value={openedPopups}>
      <PopUpsDispatchContext.Provider value={dispatch}>
        <PopupList />
        {children}
      </PopUpsDispatchContext.Provider>
    </PopUpsStateContext.Provider>
  );
};
