import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { MdDelete } from "react-icons/md";
import { BiEdit } from "react-icons/bi";
import Comment from "../components/Comment";

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
        <div className="flex items-center justify-between mt-2 md:mt-4">
          <p>@nicolas03</p>
          <div className="flex space-x-2 text-sm">
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
        <div className="flex items-center mt-8 space-x-4 font-semibold">
          <p>Categories:</p>
          <div className="flex justify-center items-center space-x-2">
            <div className="bg-gray-300 rounded-lg px-3 py-1">
              Tactile Switch
            </div>
            <div className="bg-gray-300 rounded-lg px-3 py-1">
              Linear Swtich
            </div>
            <div className="bg-gray-300 rounded-lg px-3 py-1">
              Clicky Switch
            </div>
          </div>
        </div>
        <div className="flex flex-col mt-4">
          <h3 className="mt-6 mb-4 font-semibold">Comments:</h3>
          {/* Comments Section */}
          <Comment />
          <Comment />
        </div>
        {/* Add a comment */}
        <div className="w-full flex flex-col mt-4 md:flex-row">
          <input
            className="md:w-[80%] outline-none px-4 mt-4 md:mt-0"
            type="text"
            placeholder="Add a comment"
          />
          <button
            className="text-sm text-white px-2 py-2 md:w-[20%] mt-4 md:mt-0"
            style={{ backgroundColor: "#26355D" }}
          >
            Add Comment
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PostDetails;
