import React, { useEffect } from "react";
import { toast as reactToast } from "react-toastify";
import { useSound } from "hooks";

interface ItemProps extends React.PropsWithChildren {
  type: string;
}

const Item: React.FC<ItemProps> = ({ children, type }) => {
  const { messagePlay } = useSound();

  useEffect(() => {
    if (type === "success") { }
    else messagePlay.error();
  }, [messagePlay, type]);

  return <>{children}</>;
};

export const toast = {
  success: (content: any, options?: any) =>
    reactToast.success(<Item type="success">{content}</Item>, options),
  info: (content: any, options?: any) =>
    reactToast.info(<Item type="info">{content}</Item>, options),
  warning: (content: any, options?: any) =>
    reactToast.warning(<Item type="warning">{content}</Item>, options),
  warn: (content: any, options?: any) =>
    reactToast.warn(<Item type="warn">{content}</Item>, options),
  error: (content: any, options?: any) =>
    reactToast.error(<Item type="error">{content}</Item>, options),
};

export default toast;
