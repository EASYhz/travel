import CommentBox from "@/components/community/post/commentBox";
import CommentField from "@/components/community/post/commentField";

export default function Post(props: { params: { id: number } }) {
  const detailPost: string = "글 내용임 \n여기 추천합니다.";
  return (
    <div className="container mt-10 items-center justify-center mx-auto">
      <h1 className="text-3xl">글 제목임</h1>
      <div className="mt-6 text-xl whitespace-pre-line">{detailPost}</div>
      <article className="mt-6">
        {" "}
        <img
          className="rounded-t-lg"
          src={`https://tecdn.b-cdn.net/img/new/standard/nature/${props.params.id}.jpg`}
          alt=""
        />
      </article>
      <article className="mt-6">
        {" "}
        <img
          className="rounded-t-lg"
          src={`https://tecdn.b-cdn.net/img/new/standard/nature/${props.params.id}.jpg`}
          alt=""
        />
      </article>
      <div className="main-divider mt-20" />
      <div>
        <CommentField />
      </div>
    </div>
  );
}
