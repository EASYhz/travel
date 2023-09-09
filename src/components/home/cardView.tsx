import { Post } from "@/types/types";
import { convertDate } from "@/utils/common";
import Link from "next/link";
import Bookmark from "../logo/bookmark";
import ThumbUp from "../logo/thumbUp";
import IconCountBox from "./iconCountBox";

export default function CardView(props: {
  post: Post;
  size: "small" | "medium";
}) {
  const thumb = <ThumbUp />;
  return (
    // as="/community/post/2"
    <Link href={`/community/post/${props.post.imgId}`}>
      <section className="flex justify-center duration-300 ease-in-out hover:opacity-100 hover:bg-[#3a3a3a26] hover:rounded-lg">
        <div className="inline-block xs:w-auto xs:h-auto w-64 h-auto rounded-lg shadow-lg bg-white -z-10 ">
          <div className="relative bg-cover -z-20">
            <img
              className="rounded-t-lg"
              src={`https://tecdn.b-cdn.net/img/new/standard/nature/${props.post.imgId}.jpg`}
              alt=""
            />
            {/* <Image
              className="rounded-t-lg"
              src={`https://tecdn.b-cdn.net/img/new/standard/nature/186.jpg`}
              alt=""
              width={256}
              height={256}
              placeholder="blur" // 추가
              blurDataURL="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg==" // 추가
            /> */}
          </div>
          {/* <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div> */}
          <div className="p-5">
            <h5 className="card-text-frame mb-2 text-xl font-medium leading-tight">
              {props.post.title}
            </h5>
            <div className="">
              <div className="inline-block text-sub-gray">
                {props.post.user}
              </div>
              <div className="flex justify-between">
                <div className="py-2 inline-block text-sub-gray text-xs">
                  {props.size === "medium"
                    ? props.post.regDt
                    : convertDate(props.post.regDt)}
                </div>
                <div className="flex justify-end">
                  <IconCountBox icon={<ThumbUp />} count={15} />
                  <IconCountBox icon={<Bookmark />} count={32} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Link>
  );
}
