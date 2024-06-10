const Footer = () => {
  return (
    <>
      <div
        className="mt-8 w-full px-8 md:px-[300px] flex md:flex-row flex-col space-y-6 md:space-y-0 items-start md:justify-between text-sm md:text-md py-8 "
        // style={{ backgroundColor: "#365E32" }}
        style={{ backgroundColor: "#26355D" }}
      >
        <div className="flex flex-col text-white text-center text-sm">
          <p>Featured Posts</p>
          <p>Most viewed</p>
          <p>Readers Choice</p>
        </div>

        <div className="flex flex-col text-white text-center text-sm">
          <p>Forum</p>
          <p>Support</p>
          <p>Recent Posts</p>
        </div>

        <div className="flex flex-col text-white text-center text-sm">
          <p>Privacy Policy</p>
          <p>About Us</p>
          <p>Terms & Conditions</p>
          <p>Terms of Service</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
