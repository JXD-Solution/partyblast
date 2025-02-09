import { ReactNode } from "react";

export type MenuActions = {
  label: string;
  icon: ReactNode;
  onClick: () => void;
  isDisabled?: boolean;
};
