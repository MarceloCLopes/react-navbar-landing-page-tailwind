const Pricing = () => {
  return (
    <div className="pricing w-full mt-20">
      <div className="container max-w-[1240px] p-4 m-auto overflow-hidden">
        <div className="top-content grid grid-cols-[4fr_1fr] border-b border-solid border-lightgrey pb-12">
          <div>
            <h2 className="text-[38px] pb-2 font-extrabold">
              Tudo o que você precisa por
            </h2>
            <span className="text-primary font-black text-3xl">$99 mês</span>

            <p className="text-grey">
              Inclui todos os recursos que oferecemos, além de projetos
              ilimitados e usuários ilimitados.
            </p>
          </div>

          <div className="btn-div ">
            <button className="btn">Comece hoje</button>
          </div>
        </div>

        <div className="bottom-content grid grid-cols-3 gap-[10px] my-12 mx-auto">
          <div className="card flex flex-col py-4 pr-4 pl-0">
            <p>
              <span className="text-primary uppercase font-medium text-sm">
                Tudo que você precisa
              </span>
            </p>
            <h3 className="text-[28px] my-3 mx-0">Plataforma tudo em um</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis
              eligendi suscipit perferendis est neque deleniti numquam aperiam
              illo, dolore veritatis similique minus dolorum! Nobis ad maxime
              aliquid, natus ratione tempora.
            </p>
          </div>

          <div className="card flex flex-col py-4 pr-4 pl-0">
            <div className="flex border-b border-solid border-lightgrey py-4 px-0">
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <div className="flex border-b border-solid border-lightgrey py-4 px-0">
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <div className="flex border-b border-solid border-lightgrey py-4 px-0">
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <div className="flex border-b border-solid border-lightgrey py-4 px-0">
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <div className="flex border-b border-solid border-lightgrey py-4 px-0">
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
          </div>

          <div className="card flex flex-col py-4 pr-4 pl-0">
            <div className="flex border-b border-solid border-lightgrey py-4 px-0">
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <div className="flex border-b border-solid border-lightgrey py-4 px-0">
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <div className="flex border-b border-solid border-lightgrey py-4 px-0">
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <div className="flex border-b border-solid border-lightgrey py-4 px-0">
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <div className="flex border-b border-solid border-lightgrey py-4 px-0">
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
