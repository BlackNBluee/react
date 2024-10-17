import Random from "./components/Random.js";
import Tag from "./components/Tag.js";

export default function App() {
  return (
    <div className="background w-full h-full flex flex-col relative">
      <h1 className="bg-white rounded-sm w-[95%] text-center mt-[40px] ml-[2.5%] text-2xl font-bold">
        RANDOM GIFS
      </h1>
      <div className="flex flex-col items-center gap-y-10 mt-[30px]">
        <Random/>
        <Tag/>
      </div>
      

    </div>
  );
}
