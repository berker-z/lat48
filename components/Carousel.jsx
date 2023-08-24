import Image from "next/image";
const Carousel = () => {
  return (
    <div>
      <div className="flex sm:flex-col-reverse gap-x-20 w-auto mx-auto">
        <div className="flex flex-col place-content-center">
          <h1 className="bold text-3xl">burası bir başlık</h1>
          <p1>
            burada daha uzun şeyler yazıyor, şudur budur gibi işte uzun şeyler
            baya.
          </p1>
          <br />
          <button className="bg-slate-300 border-2 rounded-md w-fit">
            CTA buton
          </button>
        </div>
        <div>
          <Image
            src={"/assets/images/hyena.jpg"}
            width="400"
            height="400"
            className=""
          />
        </div>
      </div>
    </div>
  );
};

export default Carousel;
