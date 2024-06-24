import { Button } from "antd";
import usePopup from "../hooks/usePopup";

export default function Popup({ id, children }) {
  const { closePopup } = usePopup();

  const onClose = () => closePopup(id);

  const onSetClose24h = () => {
    const targetIds =
      JSON.parse(localStorage.getItem("popups_do_not_open_for_24h")) ?? [];
    targetIds.push(id);
    localStorage.setItem(
      "popups_do_not_open_for_24h",
      JSON.stringify(targetIds)
    );

    onClose();
  };

  return (
    <div
      style={{
        position: "fixed",
        top: 50,
        bottom: 50,
        left: 50,
        right: 50,
        zIndex: 101,
      }}
    >
      {children}
      <Button type="primary" onClick={onSetClose24h}>
        오늘 다시 보지 않기
      </Button>
      <Button type="primary" onClick={onClose}>
        닫기
      </Button>
    </div>
  );
}
