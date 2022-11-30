import {
  FaAccusoft,
  FaAsterisk,
  FaDatabase,
  FaFacebook,
  FaGithub,
  FaTwitter,
} from "react-icons/fa";

export const Hero = () => {
  return (
    <div className="hero w-full h-screen bg-darkgrey">
      <div className="container py-0 px-4 m-auto max-w-5xl">
        <div className="content grid grid-cols-2">
          <div className="col-1 py-4 pr-4 pl-0 h-[70vh] flex flex-col justify-center">
            <h1 className="text-5xl font-bold text-white">
              Dados para enriquecer o seu
            </h1>
            <h1 className="text-5xl font-bold text-white">
              <span className="primary-color text-primary">negócio online</span>
            </h1>
            <p className="text-base text-white leading-6 mt-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti,
              hic! Doloribus quaerat voluptas illum ad non voluptatem dicta
              itaque incidunt! Debitis dolores obcaecati cumque magnam
              necessitatibus soluta minus, qui minima!
            </p>

            <div className="used-by">
              <p className="text-lightgrey text-xs mt-8 mx-0 mb-4">USADO POR</p>
              <div className="icons flex gap-5">
                <span className="flex gap-3 justify-center items-center text-lg text-white">
                  <FaDatabase />
                  Staxx
                </span>
                <span className="flex gap-3 justify-center items-center text-lg text-white">
                  <FaAsterisk />
                  Star AI
                </span>
                <span className="flex gap-3 justify-center items-center text-lg text-white">
                  <FaAccusoft />
                  Accusoft
                </span>
              </div>
            </div>
          </div>

          <div className="col-2 p-4 h-[70vh] flex flex-col justify-center text-sm">
            <div className="form-layout w-[400px] m-auto bg-white rounded-md">
              <div className="form-container py-6 px-8">
                <p className="sign-in-text text-grey mb-[10px]">Entrar com</p>

                <div className="social-login flex">
                  <span className="bg-white px-[45px] pt-4 pb-[6px] border border-solid rounded border-lightgrey">
                    <FaFacebook size={20} />
                  </span>
                  <span className="bg-white px-[45px] pt-4 pb-[6px] border border-solid rounded border-lightgrey">
                    <FaTwitter size={20} />
                  </span>
                  <span className="bg-white px-[45px] pt-4 pb-[6px] border border-solid rounded border-lightgrey">
                    <FaGithub size={20} />
                  </span>
                </div>

                <div className="divider">
                  <p className="w-full text-center border-b border-solid border-b-lightgrey text-grey leading-[0.1em] my-8 mr-0">
                    <span className="bg-white py-0 px-[10px]">Or</span>
                  </p>
                </div>

                <form action="">
                  <input className="input" type="text" placeholder="Name" />
                  <input className="input" type="email" placeholder="Email" />
                  <input
                    className="input"
                    type="password"
                    placeholder="Password"
                  />
                  <button className="btn" type="button">
                    Crie sua conta
                  </button>
                </form>
              </div>

              <div className="form-footer border-t border-solid border-lightgrey bg-white rounded-b-lg">
                <p className="text-grey py-6 px-8">
                  Ao se inscrever, você concorda com nossos
                  <span className="primary-color font-medium">
                    Termos, Política de Dados
                  </span>{" "}
                  e <span className="primary-color">Política de Cookies</span>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
