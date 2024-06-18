import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { MdDelete } from "react-icons/md";
import { BiEdit } from "react-icons/bi";
import Comment from "../components/Comment";
import { useParams } from "react-router-dom";
import { URL } from "../url";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/UserContext";
import Loader from "../components/Loader";

const PostDetails = () => {
  const postId = useParams().id;
  const [post, setPost] = useState({});
  const { user } = useContext(UserContext);
  const [loader, setLoader] = useState(false);
  const fetchPost = async () => {
    setLoader(true);
    try {
      const res = await axios.get(URL + "/api/posts/" + postId);
      // console.log(res.data);
      setPost(res.data);
      setLoader(false);
    } catch (error) {
      console.log(error.data);
      setLoader(true);
    }
  };
  useEffect(() => {
    fetchPost();
  }, [postId]);
  return (
    <div>
      <Navbar />
      {loader ? (
        <div className="h-[80vh] flex justify-center items-center w-full">
          <Loader />
        </div>
      ) : (
        <div className="px-8 md:px-[200px] mt-8">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-black md:text-3xl">
              {post.title}
            </h1>
            {user?._id === post?.userId && (
              <div className="flex items-center justify-center space-x-2">
                <p>
                  <BiEdit />
                </p>
                <p>
                  <MdDelete />
                </p>
              </div>
            )}
          </div>
          <div className="flex items-center justify-between mt-2 md:mt-4">
            <p>@{post.username}</p>
            <div className="flex space-x-2 text-sm">
              <p>{new Date(post.updatedAt).toString().slice(0, 15)}</p>
              <p>{new Date(post.updatedAt).toString().slice(16, 24)}</p>
            </div>
          </div>
          <img
            src={post.photo}
            alt="Rainy 75 keyboard"
            className="w-full mx-auto mt-8"
          />
          <p className="mx-auto mt-8">{post.desc}</p>
          <div className="flex items-center mt-8 space-x-4 font-semibold">
            <p>Categories:</p>
            <div className="flex justify-center items-center space-x-2">
              {post.categories?.map((c, i) => (
                <div key={i} className="bg-gray-300 rounded-lg px-3 py-1">
                  {c}
                </div>
              ))}
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
      )}
      <Footer />
    </div>
  );
};

export default PostDetails;
