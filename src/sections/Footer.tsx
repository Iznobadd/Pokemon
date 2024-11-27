import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="relative mt-10">
      <div className="bg-button flex justify-between py-4 px-36 items-center">
        <p>Get connected with us on social networks :</p>
        <div className="flex gap-12">
          <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
            <FaFacebook className="text-white" size={32} />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
            <FaTwitter className="text-white" size={32} />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
            <FaInstagram className="text-white" size={32} />
          </a>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-12 py-12 px-36 bg-primary">
        <div className="">
          <h2 className="text-2xl mb-8">POKESWITCH</h2>
          <p>
            {/* ADD DESCRIPTION */}
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit
            asperiores doloremque cumque dolore ullam. Doloremque ut minima
            placeat, ea nam cum! Animi repudiandae, accusantium iusto illum sit
            earum neque quasi?
          </p>
        </div>
        <div>
          <h2 className="text-2xl mb-8">PRODUCTS</h2>
          <ul>
            <li className="cursor-pointer mb-4">
              <Link to="/generation/Scarlet Violet">Scarlet Violet</Link>
            </li>
            <li className="cursor-pointer mb-4">
              <Link to="/generation/Legends Arceus">Legends Arceus</Link>
            </li>
            <li className="cursor-pointer mb-4">
              <Link to="/generation/Brilliant Diamond %2F Shining Pearl">
                Brilliant Diamond / Shining Pearl
              </Link>
            </li>
            <li className="cursor-pointer">
              <Link to="/generation/Sword %2F Shield">Sword / Shield</Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl mb-8">USEFUL LINKS</h2>
          <ul>
            <li className="cursor-pointer mb-2">
              <Link to="/">Home</Link>
            </li>
            <li className="cursor-pointer mb-2">
              <Link to="/cart">My cart</Link>
            </li>
            <li className="cursor-pointer mb-2">
              <Link to="/account">My account</Link>
            </li>
            <li className="cursor-pointer">
              <Link to="/contact-us">Contact</Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl mb-8">CONTACT US</h2>
          <p className="mb-4">
            <strong>Address:</strong> 1234 Street Name, City Name, United States
          </p>
          <p className="mb-4">
            <strong>Phone:</strong> +123 456 7890
          </p>
          <p>
            <strong>Email: </strong>
            <a href="mailto:">test@test.fr</a>
          </p>
        </div>
      </div>
      <div className="py-4 bg-black text-center">
        <p className="text-white">
          &copy; 2025 POKESWITCH. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
