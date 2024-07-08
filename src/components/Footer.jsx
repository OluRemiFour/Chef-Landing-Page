function Footer() {
  return (
    <>
      <div className="md:hidden">
        <div className="bg-[#0A0A0A] py-10 px-12">
          <div className="flex py-6 items-center justify-between">
            <div>
              <img src="/LOGO.png" alt="logo" />
            </div>
            <button className="bg-[#DB6A18] px-4 py-2 rounded-md text-white">
              Sign up
            </button>
          </div>
          <ul className="grid grid-cols-3 py-8 gap-6 text-white">
            <li>Cookware</li>
            <li>Kitchen </li>
            <li>Bakeware</li>
            <li>Knives</li>
            <li>Cutlery</li>
            <li>Contact us</li>
          </ul>

          <div className="py-8 flex justify-between">
            <div className="space-y-3 ">
              <div>
                <p className="text-slate-500 py-1">Contact</p>
                <p className="text-white">+948-924-567-77-642</p>
              </div>
              <div>
                <p className="text-slate-500 py-1">Email</p>
                <p className="text-white">Chefword@gmail.com</p>
              </div>
              <div>
                <p className="text-slate-500 py-1">Address</p>
                <p className="text-white">41 plot 5, Port-Harcourt, Nigeria </p>
              </div>
            </div>

            <div>
              <img src="arrow.png" alt="" />
            </div>
          </div>
          <p className="text-slate-500">&#169; Oluremi | 2024</p>
        </div>
      </div>

      {/* Large Screen */}
      <div className="hidden md:block">
        <div className="bg-[#0A0A0A] py-10 lg:px-1 px-6">
          <div className="flex items-center justify-between py-8 md:px-14">
            <div>
              <img src="/LOGO.png" alt="logo" />
            </div>
            <ul className="flex text-center space-x-2 items-center lg:justify-center lg:gap-16 text-white">
              <li>Kitchen appliances</li>
              <li>Cookware</li>
              <li>Bakeware</li>
              <li>Knives</li>
              <li>Cutlery</li>
              <li>Contact us</li>
            </ul>
            <button className="bg-[#DB6A18] p-2 rounded-md text-white">
              Sign up
            </button>
          </div>

          <div className="pt-36 flex items-center md:px-16 justify-between">
            <div>
              <img src="arrow.png" alt="" />
            </div>
            <div>
              <p className="text-slate-500 py-1">Contact</p>
              <p className="text-white">+948-924-567-77-642</p>
            </div>
            <div>
              <p className="text-slate-500 py-1">Email</p>
              <p className="text-white">Chefword@gmail.com</p>
            </div>
            <div>
              <p className="text-slate-500 py-1">Address</p>
              <p className="text-white">41 plot 5, Port-Harcourt, Nigeria </p>
            </div>
          </div>
          <p className="text-slate-500 md:px-16 pt-14">&#169; Oluremi | 2024</p>
        </div>
      </div>
    </>
  );
}

export default Footer;
