const DUMMY_COMMENT1 = {
  id: "1234",
  content: "This is Comment",
  user: "Alex",
  regDt: "20230808",
  isReply: false,
};

const DUMMY_COMMENT2 = {
  id: "1236",
  content: "This is Comment 2",
  user: "Alex",
  regDt: "20230808",
  isReply: false,
};

const DUMMY_COMMENT3 = {
  id: "1237",
  content: "This is Comment 3",
  user: "Alex",
  regDt: "20230808",
  isReply: false,
};

const DUMMY_REPLY = {
  id: "1235",
  content: "This is Reply 1-1",
  user: "Alex",
  regDt: "20230808",
  isReply: true,
  head: "1234",
};

const DUMMY_REPLY2 = {
  id: "1246",
  content: "This is Reply 1-2",
  user: "Alex",
  regDt: "20230808",
  isReply: true,
  head: "1234",
};

const DUMMY_REPLY3 = {
  id: "1247",
  content: "This is Reply 3-1",
  user: "Alex",
  regDt: "20230808",
  isReply: true,
  head: "1237",
};

export const DUMMY = [
  DUMMY_COMMENT1,
  DUMMY_COMMENT2,
  DUMMY_COMMENT3,
  DUMMY_REPLY,
  DUMMY_REPLY2,
  DUMMY_REPLY3,
];

export const ORDER_DUMMY = [
  DUMMY_COMMENT1,
  DUMMY_REPLY,
  DUMMY_REPLY2,
  DUMMY_COMMENT2,
  DUMMY_COMMENT3,
  DUMMY_REPLY3,
];
