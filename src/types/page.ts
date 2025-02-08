import { ReactNode } from "react";

export type MenuItemAction = {
  label: string;
  icon: ReactNode;
  onClick: () => void;
  isDisabled?: boolean;
};
