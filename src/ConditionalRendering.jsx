function ConditionalRendering() {
  return (
    <div className="w-2/3 mx-auto rounded-[1rem] p-4 font-medium">
      <h3 className="border bg-yellow-300 border-b-0 border-black mt-4 text-justify p-6 rounded-t-2xl">
        این متن فقط در صورتی نشان داده می‌شود که شما بر روی دکمه "من مخاطب مد
        نظر هستم" کلیک کنید
      </h3>
      <h4 className="border bg-yellow-300 border-t-0 border-black mb-4 text-justify p-6 rounded-b-2xl">
        {" "}
        با کلیک بر روی دکمه "من مخاطب مدنظر نیستم" این بخش پنهان خواهد شد.
      </h4>
    </div>
  );
}

export default ConditionalRendering;
