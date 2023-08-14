import Link from "next/link";

export default function CardView() {
  return (
    <Link href="/community/post/1" as="/community/post/2">
      <div className="flex justify-center duration-300 ease-in-out hover:opacity-100 hover:bg-[#3a3a3a26] hover:rounded-lg">
        <div className="inline-block w-80 h-80 md:w-64 md:h-64 rounded-lg shadow-lg bg-white -z-10 ">
          <div className="relative bg-cover -z-20">
            <img
              className="rounded-t-lg"
              src="https://tecdn.b-cdn.net/img/new/standard/nature/186.jpg"
              alt=""
            />
          </div>
          {/* <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div> */}
          <div className="p-6">
            <h5 className="mb-2 text-xl font-medium leading-tight">Title</h5>
            <p className="mb-4">This is..</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
