import { FC } from "react";

type DisplayUsernameProps = {
  currentUser: any;
};

export const DisplayUsername: FC<DisplayUsernameProps> = (
  props: DisplayUsernameProps
) => {
  return <p className="current-user">{props.currentUser}</p>;
};
