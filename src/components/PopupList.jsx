import ReactDom from "react-dom";
import { usePopupsStateContext } from "../contexts/PopupsContext";
import Popup from "./Popup";

export default function PopupList() {
  const openedPopups = usePopupsStateContext();

  return ReactDom.createPortal(
    <div className="modals">
      {openedPopups.map((popup) => {
        const { id, content } = popup;
        return (
          <Popup key={id} {...popup}>
            {content}
          </Popup>
        );
      })}
      <div
        className="overlay"
        style={{
          position: "fixed",
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          background: "rgba(0,0,0,0.5)",
          zIndex: 100,
        }}
      />
    </div>,
    document.body
  );
}
