function ButtonTailwind() {
  return (
    <div>
      <div className="bg-rose-500 w-2/3 min-h-[50vh] m-auto flex flex-col justify-evenly items-center rounded-[2rem] my-11">
        <h3 className="font-bold text-3xl text-white">
          تمرین تیلویند در ری اکت
        </h3>
        <div className="flex gap-5">
          <button className="border-4 border-black p-4 rounded-3xl bg-white font-medium">
            من مخاطب مد نظر هستم
          </button>
          <button className="border-4 border-black p-4 rounded-3xl bg-white font-medium">
            من مخاطب مد نظر نیستم
          </button>
        </div>
      </div>
    </div>
  );
}

export default ButtonTailwind;
