import CardView from "./cardView";

export default function MainPage() {
  const imgList: number[] = Array.from({ length: 50 }, () => 0);
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
        {imgList.map((el, index) => {
          return <CardView key={index} imgId={index + 186} />;
        })}
      </div>
    </div>
  );
}
