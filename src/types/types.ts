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
