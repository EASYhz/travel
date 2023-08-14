import CardView from "./cardView";

export default function MainPage() {
  return (
    <div className="container mx-auto pt-7 items-center justify-center md:px-12 lg:px-48 py-8 md:h-screen ">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6 place-items-center items-center">
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
        <CardView />
        <CardView />
      </div>
    </div>
  );
}
