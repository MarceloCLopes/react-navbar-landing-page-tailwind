import { Link } from "react-router-dom";
import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";

export const Footer = () => {
  return (
    <div className="footer w-full bg-darkgrey">
      <div className="container max-w-[1240px] py-12 px-4 m-auto overflow-hidden grid ">
        <div className="col solutions">
          <h6 className="text-grey text-sm py-[0.4rem] px-0">Solutions</h6>
          <ul>
            <li>
              <Link to="/" className="link">
                Marketing
              </Link>
            </li>
            <li>
              <Link to="/" className="link">
                Analytics
              </Link>
            </li>
            <li>
              <Link to="/" className="link">
                Commerce
              </Link>
            </li>
            <li>
              <Link to="/" className="link">
                Insights
              </Link>
            </li>
          </ul>
        </div>

        <div className="col support">
          <h6 className="text-grey text-sm py-[0.4rem] px-0">Support</h6>
          <ul>
            <li>
              <Link to="/" className="link">
                Pricing
              </Link>
            </li>
            <li>
              <Link to="/" className="link">
                Documentation
              </Link>
            </li>
            <li>
              <Link to="/" className="link">
                Guides
              </Link>
            </li>
            <li>
              <Link to="/" className="link">
                API Status
              </Link>
            </li>
          </ul>
        </div>

        <div className="col company">
          <h6 className="text-grey text-sm py-[0.4rem] px-0">Company</h6>
          <ul>
            <li>
              <Link to="/" className="link">
                About
              </Link>
            </li>
            <li>
              <Link to="/" className="link">
                Blog
              </Link>
            </li>
            <li>
              <Link to="/" className="link">
                Jops
              </Link>
            </li>
            <li>
              <Link to="/" className="link">
                Press
              </Link>
            </li>
          </ul>
        </div>

        <div className="col legal">
          <h6 className="text-grey text-sm py-[0.4rem] px-0">Legal</h6>
          <ul>
            <li>
              <Link to="/" className="link">
                Claim
              </Link>
            </li>
            <li>
              <Link to="/" className="link">
                Privacy
              </Link>
            </li>
            <li>
              <Link to="/" className="link">
                Cookies
              </Link>
            </li>
            <li>
              <Link to="/" className="link">
                Terms
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-subscribe">
          <h6 className="text-grey text-sm py-[0.4rem] px-0">
            Subscribe to our newsletter
          </h6>
          <p className="text-grey text-sm py-[0.4rem] px-0">
            The latest news, articles, and resources sent to your inbox weekly.
          </p>
          <div className="subscribe flex justify-center items-center gap-2">
            <input
              type="email"
              className="input w-[250px]"
              placeholder="Enter your email"
            />
            <button className="btn w-[150px]">Subscribe</button>
          </div>
        </div>
      </div>

      <div className="footer-bottom ">
        <div className="content max-w-[1240px] m-auto p-8 flex justify-between border-t border-solid border-grey">
          <div className="right">
            <p className="text-grey text-sm py-[0.4rem] px-0">
              &copy; Workflow, Inc. All rights reserved.
            </p>
          </div>
          <div className="flex flex-row">
            <FaFacebook size={20} className="text-[#d3d3d3] mr-[10px]" />
            <FaInstagram size={20} className="text-[#d3d3d3] mr-[10px]" />
            <FaTwitter size={20} className="text-[#d3d3d3] mr-[10px]" />
            <FaGithub size={20} className="text-[#d3d3d3] mr-[10px]" />
          </div>
        </div>
      </div>
    </div>
  );
};
