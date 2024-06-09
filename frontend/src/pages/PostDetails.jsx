import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { MdDelete } from "react-icons/md";
import { BiEdit } from "react-icons/md";

const PostDetails = () => {
  return (
    <div>
      <Navbar />
      <div className="px-8 md:px-[200px] mt-8">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-black md:text-3xl">
            WOBKEY Rainy 75 Review: The Best $100 Mechanical Keyboard?
          </h1>
          <div className="flex items-center justify-center space-x-2">
            <p>
              <BiEdit />
            </p>
            <p>
              <MdDelete />
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PostDetails;

{
  /* <div className="px-8 md:px-[200px] mt-8">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-black md:text-3xl">
            WOBKEY Rainy 75 Review: The Best $100 Mechanical Keyboard?
          </h1>
          <div className="flex items-center justify-center space-x-2">
            <p>
              <BiEdit />
            </p>
            <p>
              <MdDelete />
            </p>
          </div>
        </div>
        <div className="flex items-center justify-between mt-2 md:mt-4">
          <p>@nicolas03</p>
          <div className="flex space-x-2">
            <p>05/06/24</p>
            <p>15:15</p>
          </div>
        </div>
        <img
          src="https://i.ytimg.com/vi/dafVcOiyEPI/maxresdefault.jpg"
          alt="Rainy 75 keyboard"
          className="w-full mx-auto mt-8"
        />
        <p className="mx-auto mt-8">
          In this comprehensive review, we take an in-depth look at the WOBKEY
          Rainy 75, a mechanical keyboard that has been garnering significant
          attention in the budget-friendly market.
        </p>
      </div> */
}
