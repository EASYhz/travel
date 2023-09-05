import { Post } from "@/types/types";
import CardView from "./cardView";

export default function MainPage() {
  const postList: Post[] = [
    {
      id: "1",
      title: "Title1",
      detail: "This is Detail",
      user: "Alex",
      imgId: 188,
      regDt: "23.08.08 17:23",
    },
  ];
  return (
    <div className="w-full container mx-auto pt-7 items-center justify-center py-5 ">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-6 place-items-center items-center">
        {/* <CardView />
        <CardView />
        <CardView />
        <CardView />
        <CardView />
        <CardView />
        <CardView />
        <CardView />
        <CardView />
        <CardView />
        <CardView />
        <CardView />
        <CardView />
        <CardView />
        <CardView /> */}
        {postList.map((el, index) => {
          return <CardView key={index} post={el} />;
        })}
      </div>
    </div>
  );
}
