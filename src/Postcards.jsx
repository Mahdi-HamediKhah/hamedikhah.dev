function Postcards() {
  const cards = [
    {
      course: "لبخندِ نیایش",
      id: "1",
      description:
        "نیایشِ من، لبخندت مثل طلوعِ آرومِ صبحه؛ همون لحظه‌ای که دنیا تازه نفس می‌کشه. هر بار می‌خندی، دلم یاد می‌گیره زندگی هنوز قشنگه و من خوشبخت‌ترینم که دلیلِ این قشنگی تویی.",
    },
    {
      course: "مهربونیِ بی‌مرز",
      id: "2",
      description:
        "تو مهربون‌ترین اتفاقِ دنیامی، نیایش… مهربونی‌ات بی‌صدا میاد و همه‌چیز رو بهتر می‌کنه. من قدرِ همه‌ی کارهات رو می‌دونم؛ حتی اون چیزای کوچیکی که کسی نمی‌بینه، ولی من می‌بینم و هر بار بیشتر عاشقت می‌شم.",
    },
    {
      course: "چشم‌های آرامش",
      id: "3",
      description:
        "چشم‌هات برای من یه خونه‌ان؛ جایی که خستگی‌هام آروم می‌گیرن. نیایش عزیزم، وقتی نگاهت می‌کنم انگار همه‌ی شلوغی‌های دنیا ساکت می‌شن و فقط یه جمله می‌مونه: «کنارِ تو، امن‌ترین جای جهانه.»",
    },
    {
      course: "دوست داشتنِ هر روزه",
      id: "4",
      description:
        "نیایشِ من، دوست داشتنِ تو شبیه یه شعره که هر روز قشنگ‌تر می‌شه. قول نمی‌دم دنیا همیشه ساده باشه، اما قول می‌دم همیشه کنارت باشم؛ با افتخار، با احترام، با عشق… و با تمامِ قلبم بگم: ممنون که هستی.",
    },
  ];
  return (
    <div className="bg-green-400 rounded-[1.5rem] p-4 m-auto w-2/3 min-h-[300px] flex flex-col justify-around gap-6">
      <h3 className="font-extrabold text-2xl text-center">برای نیایشم</h3>
      <ul className="flex flex-col gap-3">
        {cards.map((card) => (
          <li key={card.id}>
            <details className="flex flex-col gap-2 border border-black p-5">
              <summary className="font-medium  rounded py-2">
                {card.course}
              </summary>
              <p className="text-justify">{card.description}</p>
            </details>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Postcards;
