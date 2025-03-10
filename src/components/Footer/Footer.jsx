import { FaInstagram } from "react-icons/fa";
import footerLogo from "../../assets/website"

const Footer = () => {
    return (
      <div>
        <div className="container">
          <div className="grid md:grid-cols-3 py-5">
                    {/* company details */}
                    <div className="py-8 px-4">
                        <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3">
                            Books Store
                        </h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate corporis mollitia dolorum labore distinctio quod.</p>
                        <br />
                        social links
                        <div>
                            <a href="#">
                                <FaInstagram className="text-3xl"/>
                            </a>
                        </div>
                    </div>
            {/* Links details */}
          </div>
        </div>
      </div>
    );
};

export default Footer;