import CommentBox from "./commentBox";
import CommentForm from "./commentForm";

export default function CommentField() {
  return (
    <section className="bg-white py-4 lg:py-8">
      <div className="max-w-2xl">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg lg:text-2xl font-bold text-gray-900">
            댓글 ({DUMMY.length})
          </h2>
        </div>
        <CommentForm />
        {DUMMY.map((el, index) => {
          return (
            <div key={index}>
              <CommentBox comment={el} />
            </div>
          );
        })}
        {/* <CommentBox comment={DUMMY_COMMENTS.head} />
        <CommentBox comment={DUMMY_COMMENT2} />
        <CommentBox comment={DUMMY_COMMENT} />
        <CommentBox comment={DUMMY_COMMENT2} /> */}
      </div>
    </section>
  );
}

const DUMMY_COMMENT = {
  id: "1234",
  content: "This is Comment",
  user: "Alex",
  regDt: "20230808",
  isReply: false,
};

const DUMMY_COMMENT2 = {
  id: "1235",
  content: "This is Comment",
  user: "Alex",
  regDt: "20230808",
  isReply: true,
  head: "1234",
};

const DUMMY = [
  DUMMY_COMMENT,
  DUMMY_COMMENT2,
  DUMMY_COMMENT,
  DUMMY_COMMENT2,
  DUMMY_COMMENT,
  DUMMY_COMMENT2,
];
