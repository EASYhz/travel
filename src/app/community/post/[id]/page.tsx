import CommentField from "@/components/community/post/comment/commentField";
import PostField from "@/components/community/post/postField";
import CardView from "@/components/home/cardView";

export default function Post(props: { params: { id: number } }) {
  const detailPost: string = "글 내용임 \n여기 추천합니다.";

  const imgId: number = Number(props.params.id) + 1;
  return (
    <div className="flex">
      <PostField params={props.params} />
      <div className="w-1/4 py-10 hidden xl:block">
        <CardView
          post={{
            id: "1",
            title: "Title1",
            detail: "This is Detail",
            user: "Alex",
            imgId: 189,
            regDt: "23.08.08 17:23",
          }}
          size="small"
        />
      </div>
    </div>
  );
}
