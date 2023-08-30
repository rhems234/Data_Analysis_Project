import React from "react";
import { createPortal } from "react-dom";
import PopoutContent from "./PopoutContent";
import { Popout } from "react-portal-popout";

const Popup = ({ isOpen, onClose }) => {
  const popoutContent = isOpen ? (
    <PopoutContent isOpen={true} onClose={onClose} />
  ) : null;

  return isOpen
    ? createPortal(
        <div>
          <Popout closePortal={onClose} isOpen={true} title="모니터링">
            {popoutContent}
          </Popout>
        </div>,
        document.body // 이 부분이 수정되었습니다.
      )
    : null;
};

export default Popup;
