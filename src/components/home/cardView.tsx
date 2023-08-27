import Link from "next/link";

export default function CardView(props: { imgId: number }) {
  return (
    // as="/community/post/2"
    <Link href={`/community/post/${props.imgId}`}>
      <section className="flex justify-center duration-300 ease-in-out hover:opacity-100 hover:bg-[#3a3a3a26] hover:rounded-lg">
        <div className="inline-block xs:w-auto xs:h-auto w-64 h-64 rounded-lg shadow-lg bg-white -z-10 ">
          <div className="relative bg-cover -z-20">
            <img
              className="rounded-t-lg"
              src={`https://tecdn.b-cdn.net/img/new/standard/nature/${props.imgId}.jpg`}
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
            <h5 className="mb-2 text-xl font-medium leading-tight">Title</h5>
            <p className="">This is..</p>
          </div>
        </div>
      </section>
    </Link>
  );
}
