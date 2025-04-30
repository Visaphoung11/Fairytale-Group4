import StoryGrid from "../components/StoryGrid";
import Footer from "../components/footer";
const Favorite = () => {
  return (
    <>
      <div className="text-center mt-20 text-3xl font-bold font-BlackAndWhitePicture text-pink-600">
        <h1>favorite page</h1>
      </div>
      <div>
        <StoryGrid />
        <StoryGrid />
        <StoryGrid />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default Favorite;
