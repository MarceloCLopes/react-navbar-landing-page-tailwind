import { FaDatabase } from "react-icons/fa";

export const Testimonials = () => {
  return (
    <div className="testimonials w-full text-[#fff] my-12 mx-0">
      <div className="container max-w-[1240px] p-4 m-auto overflow-hidden">
        <div className="outline w-full h-[450px] bg-left rounded-[10px]">
          <div className="content flex flex-col h-full max-w-[50%] justify-center p-12">
            <i>
              <FaDatabase /> Staxx
            </i>
            <p className="body py-5 px-0">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta
              exercitationem eaque odio suscipit corporis pariatur possimus
              quas. Esse, asperiores explicabo ullam nihil eius commodi facilis
              alias architecto, dolor laboriosam repellendus!
            </p>
            <div className="name text-sm text-[#fff]">
              <p className="">Marie Chilvers</p>
              <p>CEO, Staxx</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
