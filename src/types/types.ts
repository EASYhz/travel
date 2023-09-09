import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";

export type User = {
  name: string;
  token: string;
};

export type Post = {
  id: string;
  title: string;
  detail?: string;
  user: string;
  imgId: number; // url로 변경 예정
  regDt: string;
};

export type Comment = {
  id: string;
  content: string;
  user: string;
  regDt: string;
  isReply: boolean;
  head?: string;
};

export type IconCount = {
  icon: JSX.Element;
  count: number;
};
