import CreateGroup from "./CreateGroup";
import ChooseGroup from "./ChooseGroup";
import UseBackButton from "./useBackButton";

function HomePage() {
  return (
    <div>
      <UseBackButton path="/Groups" text="go to the groups page" />
      <div className="flex flex-col items-center w-full">
        <p className="flex flex-col items-center bg-blue-100 w-full font-extrabold text-5xl p-7 ">
          Welcom to Split
        </p>
        <div className="p-4">
          <CreateGroup />
          <ChooseGroup />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
