function ButtonTailwind({ OnChanger }) {
  return (
    <div>
      <div className="bg-rose-500 w-2/3 min-h-[50vh] m-auto flex flex-col justify-evenly items-center rounded-[2rem]">
        <h3 className="font-bold text-3xl text-white">
          تمرین تیلویند در ری اکت
        </h3>
        <h5 className="text-[#fff] font-medium">
          {" "}
          بر روی دکمه ها بزن تا تغییر رو ببینی
        </h5>
        <div className="flex gap-5">
          <button
            onClick={() => OnChanger(true)}
            className="border-4 border-black p-4 rounded-3xl bg-white font-medium"
          >
            من مخاطب مد نظر هستم
          </button>
          <button
            onClick={() => OnChanger(false)}
            className="border-4 border-black p-4 rounded-3xl bg-white font-medium"
          >
            من مخاطب مد نظر نیستم
          </button>
        </div>
      </div>
    </div>
  );
}

export default ButtonTailwind;
