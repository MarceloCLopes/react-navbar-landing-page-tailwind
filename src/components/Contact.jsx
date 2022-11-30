import { FaEnvelope, FaPhone } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="contact w-full my-12 mx-0 flex">
      <div className="container max-w-[1240px] m-auto overflow-hidden flex">
        <div className="col-1 flex-[1_0_45%] py-20 px-8">
          <div className="content">
            <div>
              <h2 className="text-[28px] py-[0.4rem] px-0 font-semibold">
                Get in touch
              </h2>
              <p className="text-grey">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Veniam, quidem est deserunt autem odit ut odio illum officiis
                dolore illo culpa et voluptatem aperiam ipsum dolorum cumque
                placeat vero ab!
              </p>
            </div>

            <div className="address py-4 px-0">
              <p className="text-grey">742 Evengreen Terrace</p>
              <p className="text-grey">Springfield, QR 12345</p>
            </div>
            <div className="icons flex items-center py-[0.4rem] px-0 gap-2">
              <FaPhone />
              <p className="text-grey">+55 (11) 00000-0000</p>
            </div>
            <div className="icons flex items-center py-[0.4rem] px-0 gap-2">
              <FaEnvelope />
              <p className="text-grey">support@example.com</p>
            </div>
            <div className="careers py-8 px-0">
              <p className="text-grey">
                Looking for careers?
                <span className="text-primary"> View all job opening</span>
              </p>
            </div>
          </div>
        </div>

        <div className="col-2 flex-[1_0_55%] py-20 px-8">
          <form className="flex flex-col max-w-[500px] m-auto">
            <input className="input" type="text" placeholder="Full name" />
            <input className="input" type="email" placeholder="Email" />
            <input className="input" type="phone" placeholder="Phone" />
            <textarea
              className="input"
              name="Message"
              placeholder="Message"
              cols="30"
              rows="10"></textarea>
            <div className="checkbox flex items-center justify-center py-4 px-0 gap-2">
              <input type="checkbox" className="m-0 pr-1" />
              <p className="text-grey">
                By checking this box, you agree to the
                <span className="text-primary"> Privacy Policy</span> and
                <span className="text-primary"> Cookie Policy</span>.
              </p>
            </div>
            <button className="btn">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
