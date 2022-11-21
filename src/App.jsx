import { useRef, useState } from "react";
import "./App.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

function App() {
  const [count, setCount] = useState(0);
  const [navState, setNavState] = useState(false);
  const toggleNav = () => {
    setNavState(!navState);
  };

  return (
    <div className="App mx-auto">
      <div
        id="header"
        className="bg-hero bg-cover bg-left p-6 pb-20 font-bold text-iceWhite leading-5"
      >
        <nav className="container relative mx-auto pb-10 md:pt-10">
          <div className="flex items-center text-center justify-between ">
            <div className="md:pt-2 text-xl">
              <p>
                <span className="tracking-widest">RELL</span>
              </p>
              <p>SOFT</p>
            </div>
            <div className="hidden md:flex space-x-6">
              <a href="#">About</a>
              <a href="#">Projects</a>
              <a href="#">Contact</a>
            </div>
            <button
              id="hamburger-btn"
              onClick={toggleNav}
              className={`hamburger block md:hidden focus:outline-none ml-auto ${
                navState ? "open" : ""
              }`}
            >
              <span className="hamburger-top"></span>
              <span className="hamburger-middle"></span>
              <span className="hamburger-bottom"></span>
            </button>
            <div className="md:hidden">
              <div
                id="menu"
                className={`absolute flex flex-col items-center self-end py-8 mt-10 space-y-7 font-bold text-black bg-softGray sm:w-auto sm:self-center left-0 right-0 drop-shadow-md ${
                  navState ? "" : "hidden"
                }`}
              >
                <a href="#">About</a>
                <a href="#">Projects</a>
                <a href="#">Contact</a>
              </div>
            </div>
          </div>
        </nav>
        <section className="items-center" id="hero">
          <div className="container mx-auto items-center">
            <p className="md:mx-auto text-3xl md:text-4xl leading-tight text-center">
              Hi there! <br />
              My name is Terrell,
              <br /> I'm a web and game developer.
            </p>
          </div>
        </section>
      </div>

      <div className="container px-10 md:px-auto mx-auto">
        <div className="container mx-auto shadow-lg flex flex-col-reverse md:flex-row items-center my-20">
          <div className="p-10 md:w-3/4">
            <p className="text-2xl font-bold uppercase pb-2 ">About Me</p>
            <p>
              Hi there! My name is Terrell Turner, and I've been obsessed with
              computers my whole life. I love creating websites, video games,
              and 3D art!
            </p>
            <br />
            <p>
              I was born and raised in Minneapolis, Minnesota, and have been
              living here ever since. Since graduating in 2015, my passion for
              programming has been a mainstay in my life.
            </p>
          </div>
          <div className="items-center mx-auto">
            <div className="bg-pfp w-64 h-64 md:h-96 md:w-96 bg-cover md:m-10 rounded-lg bg-bottom "></div>
          </div>
        </div>
      </div>
      <div className="container px-10 md:px-auto  mx-auto">
        <div className="container shadow-lg flex flex-col-reverse md:flex-row items-center mx-auto my-20">
          <div className="p-10 md:w-100">
            <div className="items-center">
              <div className="flex flex-row justify-center">
                <svg
                  className="h-1/4 w-1/4 object-contain m-1 fill-blue-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z" />
                </svg>
                <svg
                  className="h-1/4 w-1/4 object-contain m-1 fill-blue-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z" />
                </svg>
                <svg
                  className="bg-cover h-1/4 w-1/4 object-contain m-1 fill-blue-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" />
                </svg>
              </div>
              <div className="flex flex-row justify-center ">
                <svg
                  className="h-1/4 w-1/4 object-contain m-1 fill-blue-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38a2.167 2.167 0 0 0-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44a23.476 23.476 0 0 0-3.107-.534A23.892 23.892 0 0 0 12.769 4.7c1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442a22.73 22.73 0 0 0-3.113.538 15.02 15.02 0 0 1-.254-1.42c-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87a25.64 25.64 0 0 1-4.412.005 26.64 26.64 0 0 1-1.183-1.86c-.372-.64-.71-1.29-1.018-1.946a25.17 25.17 0 0 1 1.013-1.954c.38-.66.773-1.286 1.18-1.868A25.245 25.245 0 0 1 12 8.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933a25.952 25.952 0 0 0-1.345-2.32zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493a23.966 23.966 0 0 0-1.1-2.98c.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98a23.142 23.142 0 0 0-1.086 2.964c-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39a25.819 25.819 0 0 0 1.341-2.338zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143a22.005 22.005 0 0 1-2.006-.386c.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295a1.185 1.185 0 0 1-.553-.132c-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z" />
                </svg>
                <svg
                  className="h-1/4 w-1/4 object-contain m-1 fill-blue-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 1.61h-9.94L12 5.16 9.94 1.61H0l12 20.78ZM12 14.08 5.16 2.23h4.43L12 6.41l2.41-4.18h4.43Z" />
                </svg>
                <svg
                  className="h-1/4 w-1/4 object-contain m-1 fill-blue-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M22.199 18.498 12.429 24v-4.285l6.087-3.334 3.683 2.117zm.668-.603V6.388l-3.575 2.055v7.396zm-21.066.603L11.571 24v-4.285L5.484 16.38l-3.683 2.117zm-.668-.603V6.388l3.575 2.055v7.396zm.418-12.251L11.571 0v4.143L5.152 7.66l-.049.028zm20.898 0L12.429 0v4.143l6.419 3.516.049.028 3.552-2.043zM11.57 18.74l-6.005-3.287V8.938l6.005 3.453v6.349zm.858 0 6.005-3.287V8.938l-6.005 3.453zM5.972 8.185l6.03-3.302 6.028 3.301-6.029 3.467z" />
                </svg>
                <svg
                  className="h-1/4 w-1/4 object-contain m-1 fill-blue-500"
                  viewBox="0 0 24 24"
                >
                  <path d="m8.286 10.578.512-8.657a.306.306 0 0 1 .247-.282L17.377.006a.306.306 0 0 1 .353.385l-1.558 5.403a.306.306 0 0 0 .352.385l2.388-.46a.306.306 0 0 1 .332.438l-6.79 13.55-.123.19a.294.294 0 0 1-.252.14c-.177 0-.35-.152-.305-.369l1.095-5.301a.306.306 0 0 0-.388-.355l-1.433.435a.306.306 0 0 1-.389-.354l.69-3.375a.306.306 0 0 0-.37-.36l-2.32.536a.306.306 0 0 1-.374-.316zm14.976-7.926L17.284 3.74l-.544 1.887 2.077-.4a.8.8 0 0 1 .84.369.8.8 0 0 1 .034.783L12.9 19.93l-.013.025-.015.023-.122.19a.801.801 0 0 1-.672.37.826.826 0 0 1-.634-.302.8.8 0 0 1-.16-.67l1.029-4.981-1.12.34a.81.81 0 0 1-.86-.262.802.802 0 0 1-.165-.67l.63-3.08-2.027.468a.808.808 0 0 1-.768-.233.81.81 0 0 1-.217-.6l.389-6.57-7.44-1.33a.612.612 0 0 0-.64.906L11.58 23.691a.612.612 0 0 0 1.066-.004l11.26-20.135a.612.612 0 0 0-.644-.9z" />
                </svg>
              </div>
              <div className="flex flex-row justify-center ">
                <svg
                  className=" h-1/4 w-1/4 object-contain m-1 fill-blue-500"
                  viewBox="0 0 25 25"
                >
                  <path d="M3.89 15.672 6.255.461A.542.542 0 0 1 7.27.288l2.543 4.771zm16.794 3.692-2.25-14a.54.54 0 0 0-.919-.295L3.316 19.365l7.856 4.427a1.621 1.621 0 0 0 1.588 0zM14.3 7.147l-1.82-3.482a.542.542 0 0 0-.96 0L3.53 17.984z" />{" "}
                </svg>
                <svg
                  className="h-1/4 w-1/4 object-contain m-1 fill-blue-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
                </svg>
                <svg
                  className="h-1/4 w-1/4 object-contain m-1 fill-blue-500"
                  viewBox="0 0 24 24"
                >
                  <path d="m11.25 0-6 6-1.5 10.5 7.5 7.5 9-6-6-6 4.5-4.5-7.5-7.5Z" />
                </svg>
              </div>
            </div>
          </div>
          <div className="items-center text-center ml-auto p-10">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate necessitatibus laborum aspernatur! Distinctio
              reprehenderit placeat quas voluptas impedit! Cumque, voluptatem
              aut consectetur quasi cupiditate unde tenetur quisquam omnis
              repellendus nihil veritatis esse excepturi vero, blanditiis
              consequatur.
            </p>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-10">
        <div className="container shadow-lg flex flex-col items-center mx-auto my-20">
          <div className="p-10 pb-2 md:w-3/4">
            <p className="text-bold text-2xl font-bold uppercase pb-2 text-center">
              Projects
            </p>
          </div>
          <div className="w-5/6 pb-20">
            <Swiper
              spaceBetween={15}
              slidesPerView={1}
              navigation={true}
              modules={[Navigation]}
            >
              <SwiperSlide>
                <div className="bg-hero bg-cover h-64 md:h-96 w-full"></div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="bg-hero bg-cover h-64 md:h-96 w-full"></div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="bg-hero bg-cover h-64 md:h-96 w-full"></div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="bg-hero bg-cover h-64 md:h-96 w-full"></div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-10">
        <div className="container shadow-lg flex flex-col items-center mx-auto my-20">
          <div className="p-10 pb-2 md:w-3/4">
            <p className="text-bold text-2xl font-bold uppercase pb-2 text-center">
              Contact me!
            </p>
          </div>
          <div className="w-4/5 pb-10 pt-0">
            <div id="contactForm">
              <form id="contact" className="flex flex-col">
                <input
                  type="text"
                  placeholder="Hi, Terrell! Let's chat."
                  className="bg-softGray p-3 mb-2 rounded-lg"
                />
                <textarea
                  name="emailBody"
                  id="emailBodyInput"
                  cols="30"
                  rows="10"
                  className="bg-softGray p-3 rounded-lg resize-none"
                  placeholder="Terrell, I'd love to talk about more about your skills!"
                ></textarea>
                <button className="bg-softGray p-4 md:w-2/3 justify-center mx-auto mt-10 my-0 font-bold text-md md:text-2xl rounded-lg">
                  Send me a message!
                  <br />
                  📨
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <footer className="bg-softGray">
        <div className="container flex flex-col justify-center px-6 py-10 mx-auto space-y-8 text-center">
          &copy; Terrell Turner 2022
        </div>
      </footer>
    </div>
  );
}

export default App;
