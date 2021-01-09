import Head from "next/head";

export default function Home() {
  return (
    <>
      {/* header */}
      <nav className="fixed z-50 w-full top-0 bg-white">
        <div className="container mx-auto py-3">
          <div className="flex items-center justify-between">
            {/* logo */}
            <div data-id="logo" className="">
              <img alt="logo" src="GFASHION.svg" />
            </div>
            {/* menu layout */}
            <div className="space-y-4">
              {/* menu login , register , language */}
              <div className="flex space-x-12 justify-end">
                <div className="space-x-4">
                  <a className="" href="">
                    登录
                  </a>
                  <a className="border-2 border-black px-2" href="">
                    加入
                  </a>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>客服 1800 777 77777</div>
                </div>
                {/* language switch */}
                <div>
                  <ul>
                    <li className="flex justify-center items-center space-x-2">
                      <div className="flex items-center space-x-1">
                        <div className="w-6 h-6">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                            />
                          </svg>
                        </div>
                        <span>中文</span>
                      </div>
                      <div className="w-4 h-4">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </li>
                    <li className="hidden">英文</li>
                  </ul>
                </div>
              </div>
              {/* menu list */}
              <ul className="flex space-x-14">
                <li className="text-lg">
                  <a href="#">旅行住宿</a>
                </li>
                <li className="text-lg">
                  <a href="#">餐饮美食</a>
                </li>
                <li className="text-lg">
                  <a href="#">时尚购物</a>
                </li>
                <li className="text-lg">
                  <a href="#">美容水疗</a>
                </li>
                <li className="text-lg">
                  <a href="#">其他优惠</a>
                </li>
                <li className="text-lg">
                  <a href="#">关于我们</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      {/* banner */}
      <section className="relative pt-24 items-center flex h-screen" style={{ maxHeight: 681 }}>
        {/* background */}

        {/* search bar */}
        <div className="absolute top-36" style={{ left: "calc(50% - 514px)" }}>
          <div className="flex items-center py-4 px-5 bg-black bg-opacity-70">
            <div className="flex space-x-6">
              <label>
                <div className="text-white mb-2">城市/国家</div>
                <input className="h-8 px-3" placeholder="城市或国家名" />
              </label>
              <label>
                <div className="text-white mb-2">入住时间</div>
                <input className="h-8 px-3" placeholder="日期" />
              </label>
              <label>
                <div className="text-white mb-2">退房时间</div>
                <input className="h-8 px-3" placeholder="日期" />
              </label>
              <label>
                <div className="text-white mb-2">房间数/宾客数</div>
                <input className="h-8 px-3" placeholder="1 / 2 / 1" />
              </label>
            </div>
            <div className="ml-4">
              <button className="text-2xl bg-coffee text-white py-3 px-9">搜索</button>
            </div>
          </div>
        </div>

        <div className="container mx-auto items-center flex flex-wrap">
          <div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4">
            <div className="pt-32 sm:pt-0">
              <h2 className="text-4xl text-white">马尔代夫加入内容度假村</h2>
              <p className="mt-4 text-lg leading-relaxed text-white">
                加入度假村介绍内容，加入独家吨介绍内容，加入内容
              </p>
              <a className="inline-block mt-10 text-white" href="#">
                查看全球酒店度假村
              </a>
            </div>
          </div>
        </div>

        {/* background image switch button  */}
        <div className="absolute bottom-8 flex space-x-4" style={{ left: "calc(50% - 72px" }}>
          <div className="cursor-pointer w-4 h-4 rounded-full bg-white bg-opacity-100"></div>
          <div className="cursor-pointer w-4 h-4 rounded-full bg-white bg-opacity-50"></div>
          <div className="cursor-pointer w-4 h-4 rounded-full bg-white bg-opacity-50"></div>
          <div className="cursor-pointer w-4 h-4 rounded-full bg-white bg-opacity-50"></div>
          <div className="cursor-pointer w-4 h-4 rounded-full bg-white bg-opacity-50"></div>
        </div>
        {/* background image */}
        <img
          alt="banner"
          className="absolute left-0 top-0 w-full h-full object-cover z-negative"
          src="https://images.unsplash.com/photo-1548678928-070e09a5c847?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2089&q=80"
        />
      </section>

      {/* content */}
      <section className="container mx-auto">
        <div className="py-12">
          <p className="text-center text-3xl">旅行住宿</p>
          <p className="mt-4 text-center text-coffee text-xl">甄选酒店，加入酒店旅行相关内容</p>
        </div>
        <div className="grid grid-cols-3 gap-5 mb-12">
          <div className="bg-coffee1 relative flex justify-center text-center items-center" style={{ minHeight: 230 }}>
            1
          </div>
          <div className="bg-coffee1 relative flex justify-center text-center items-center" style={{ minHeight: 230 }}>
            2
          </div>
          <div className="bg-coffee1 relative flex justify-center text-center items-center" style={{ minHeight: 230 }}>
            3
          </div>
          <div className="bg-coffee1 relative flex justify-center text-center items-center" style={{ minHeight: 230 }}>
            4
          </div>
          <div className="bg-coffee1 relative flex justify-center text-center items-center" style={{ minHeight: 230 }}>
            5
          </div>
          <div className="bg-coffee1 relative flex justify-center text-center items-center" style={{ minHeight: 230 }}>
            6
          </div>
        </div>
      </section>
      <footer className="mt-6 bg-black">
        <div className="container mx-auto">
          <div className="flex py-5">
            <div className="logo flex-1">
              <img alt="logo" src="GFASHION-white.svg" />
            </div>
            <div className="flex space-x-24 text-white">
              <div className="">
                <h2 className="text-lg mb-4">Product</h2>
                <ul className="space-y-4">
                  <li>
                    <a href="#" className="text-gray-300 hover:text-white">
                      Features
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-300 hover:text-white">
                      Security
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-300 hover:text-white">
                      Team
                    </a>
                  </li>
                </ul>
              </div>
              <div className="">
                <h2 className="text-lg mb-4">Support</h2>
                <ul className="space-y-4">
                  <li>
                    <a href="#" className="text-gray-300 hover:text-white">
                      Help
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-300 hover:text-white">
                      Community Forum
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-300 hover:text-white">
                      Professional Services
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-300 hover:text-white">
                      Status
                    </a>
                  </li>
                </ul>
              </div>
              <div className="">
                <h2 className="text-lg mb-4">Company</h2>
                <ul className="space-y-4">
                  <li>
                    <a href="#" className="text-gray-300 hover:text-white">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-300 hover:text-white">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-300 hover:text-white">
                      Careers
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-300">
          <div className="container mx-auto py-8">
            {/* copay right */}
            <div className="flex justify-between">
              <div className="space-x-4">
                <span>© 2021 G-clubs, Inc.</span>
                <a className="">Terms</a>
                <a className="">Privacy</a>
                <a className="">Site Map</a>
              </div>
              <div>
                <ul class="flex justify-center items-center space-x-6">
                  <li>
                    <a
                      href="https://twitter.com/github"
                      data-ga-click="Footer, go to Twitter, text:twitter"
                      title="GitHub on Twitter"
                      style={{ color: "#959da5" }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 273.5 222.3" class="d-block" height="18">
                        <path
                          d="M273.5 26.3a109.77 109.77 0 0 1-32.2 8.8 56.07 56.07 0 0 0 24.7-31 113.39 113.39 0 0 1-35.7 13.6 56.1 56.1 0 0 0-97 38.4 54 54 0 0 0 1.5 12.8A159.68 159.68 0 0 1 19.1 10.3a56.12 56.12 0 0 0 17.4 74.9 56.06 56.06 0 0 1-25.4-7v.7a56.11 56.11 0 0 0 45 55 55.65 55.65 0 0 1-14.8 2 62.39 62.39 0 0 1-10.6-1 56.24 56.24 0 0 0 52.4 39 112.87 112.87 0 0 1-69.7 24 119 119 0 0 1-13.4-.8 158.83 158.83 0 0 0 86 25.2c103.2 0 159.6-85.5 159.6-159.6 0-2.4-.1-4.9-.2-7.3a114.25 114.25 0 0 0 28.1-29.1"
                          fill="currentColor"
                        ></path>
                      </svg>

                      <span class="sr-only">Twitter</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.facebook.com/GitHub"
                      data-ga-click="Footer, go to Facebook, text:facebook"
                      title="GitHub on Facebook"
                      style={{ color: "#959da5" }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.3 15.4" class="d-block" height="18">
                        <path
                          d="M14.5 0H.8a.88.88 0 0 0-.8.9v13.6a.88.88 0 0 0 .8.9h7.3v-6h-2V7.1h2V5.4a2.87 2.87 0 0 1 2.5-3.1h.5a10.87 10.87 0 0 1 1.8.1v2.1h-1.3c-1 0-1.1.5-1.1 1.1v1.5h2.3l-.3 2.3h-2v5.9h3.9a.88.88 0 0 0 .9-.8V.8a.86.86 0 0 0-.8-.8z"
                          fill="currentColor"
                        ></path>
                      </svg>

                      <span class="sr-only">Facebook</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.youtube.com/github"
                      data-ga-click="Footer, go to YouTube, text:youtube"
                      title="GitHub on YouTube"
                      style={{ color: "#959da5" }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19.17 13.6" class="d-block" height="16">
                        <path
                          d="M18.77 2.13A2.4 2.4 0 0 0 17.09.42C15.59 0 9.58 0 9.58 0a57.55 57.55 0 0 0-7.5.4A2.49 2.49 0 0 0 .39 2.13 26.27 26.27 0 0 0 0 6.8a26.15 26.15 0 0 0 .39 4.67 2.43 2.43 0 0 0 1.69 1.71c1.52.42 7.5.42 7.5.42a57.69 57.69 0 0 0 7.51-.4 2.4 2.4 0 0 0 1.68-1.71 25.63 25.63 0 0 0 .4-4.67 24 24 0 0 0-.4-4.69zM7.67 9.71V3.89l5 2.91z"
                          fill="currentColor"
                        ></path>
                      </svg>

                      <span class="sr-only">YouTube</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/company/github"
                      data-ga-click="Footer, go to Linkedin, text:linkedin"
                      title="GitHub on Linkedin"
                      style={{ color: "#959da5" }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19 18" class="d-block" height="18">
                        <path
                          d="M3.94 2A2 2 0 1 1 2 0a2 2 0 0 1 1.94 2zM4 5.48H0V18h4zm6.32 0H6.34V18h3.94v-6.57c0-3.66 4.77-4 4.77 0V18H19v-7.93c0-6.17-7.06-5.94-8.72-2.91z"
                          fill="currentColor"
                        ></path>
                      </svg>

                      <span class="sr-only">LinkedIn</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
