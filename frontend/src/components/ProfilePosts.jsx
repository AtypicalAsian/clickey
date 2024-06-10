const ProfilePosts = () => {
  return (
    <div className="w-full flex mt-8 space-x-4">
      {/* left*/}
      <div className="w-[35%] h-[200px] flex justify-center items-center">
        <img
          src="https://i.ytimg.com/vi/dafVcOiyEPI/maxresdefault.jpg"
          alt="Rainy 75 keyboard"
          className="h-full w-full object-cover"
        />
      </div>
      {/* right*/}
      <div className="flex flex-col w-[65%]">
        <h1 className="text-xl font-bold md:mb-2 mb-1 md:text-2xl">
          WOBKEY Rainy 75 Review: The Best $100 Mechanical Keyboard?
        </h1>
        <div className="flex mb-2 text-sm font-semibold text-gray-500 items-center justify-between md:mb-4">
          <p>@nicolas03</p>
          <div className="flex space-x-2 text-sm">
            <p>05/06/24</p>
            <p>15:15</p>
          </div>
        </div>
        <p className="text-sm md:text-lg">
          The mechanical keyboard market is more competitive by the day, but
          we’ve found what may just be the best value pick under $100. The
          WOBKEY Rainy 75 offers a fully aluminum case, gasket mounting, Foams,
          and other features usually reserved for much more expensive keyboards.
        </p>
      </div>
    </div>
  );
};

export default ProfilePosts;
