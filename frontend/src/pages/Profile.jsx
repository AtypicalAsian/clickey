import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ProfilePosts from "../components/ProfilePosts";

const Profile = () => {
  return (
    <div>
      <Navbar />
      <div className="px-8 md:px-[200px] mt-8 flex md:flex-row flex-col-reverse md:items-start">
        <div className="flex flex-col md:w-[70%] w-full mt-8 md:mt-0">
          <h1 className="text-xl font-bold mb-4">Your Posts:</h1>
          <ProfilePosts />
        </div>
        <div className="md:sticky md:top-16 flex justify-start md:justify-end items-start md:w-[30%] w-full md:items-end">
          <div className="flex flex-col space-y-4 items-start">
            <h1 className="text-xl font-bold mb-4">Profile</h1>
            <input
              className="outline-none px-4 py-2 text-gray-500"
              placeholder="Your Username"
              type="text"
            />
            <input
              className="outline-none px-4 py-2 text-gray-500"
              placeholder="Your Email"
              type="email"
            />
            <input
              className="outline-none px-4 py-2 text-gray-500"
              placeholder="Your Password"
              type="password"
            />
            <div className="flex items-center space-x-4 mt-8">
              <button
                className="text-white font-semibold px-4 py-2 hover:text-black hover:bg-gray-400"
                style={{ backgroundColor: "#26355D" }}
              >
                Update
              </button>
              <button
                className="text-white font-semibold px-4 py-2 hover:text-black hover:bg-gray-400"
                style={{ backgroundColor: "#26355D" }}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Profile;