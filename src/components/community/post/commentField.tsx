import CommentBox from "./commentBox";
import CommentForm from "./commentForm";

export default function CommentField() {
  return (
    <section className="bg-white py-4 lg:py-8">
      <div className="max-w-2xl">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg lg:text-2xl font-bold text-gray-900">
            댓글 (20)
          </h2>
        </div>
        <CommentForm />
        <CommentBox isReply={false} />
        <CommentBox isReply={true} />
        <CommentBox isReply={false} />
        <CommentBox isReply={true} />
      </div>
    </section>
  );
}
