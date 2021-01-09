import Head from "next/head";

export default function Home() {
  return (
    <div className="min-h-full">
      {/* header */}
      <div className="container mx-auto py-5">
        <nav className="flex items-center justify-between">
          {/* logo */}
          <div data-id="logo" className="">
            <img alt="logo" src="GFASHION.svg" />
          </div>
          {/* menu layout */}
          <div className="space-y-8">
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
        </nav>
      </div>
      {/* banner */}
      <div className="relative" style={{ height: 585 }}>
        {/* background */}
        <img
          alt="banner"
          className="absolute left-0 top-0 w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1540202404-a2f29016b523?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2090&q=80"
        />

        {/* search bar */}
        <div className="absolute w-full top-11">
          <div className="container mx-auto">
            <div className="flex justify-center">
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
          </div>
        </div>
      </div>

      {/* content */}
      <div></div>
      <footer></footer>
    </div>
  );
}
