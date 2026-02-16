function Postcards() {
    const cards = [
        { course: "مرحله اول", id:"1", description: "توضیحات مرحله اول در این قسمت نوشته می‌شود." },
        { course: "مرحله دوم", id:"2", description: "توضیحات مرحله دوم در این قسمت نوشته می‌شود." },
        { course: "مرحله سوم", id:"3", description: "توضیحات مرحله سوم در این قسمت نوشته می‌شود." },
        { course: "مرحله چهارم", id:"4", description: "توضیحات مرحله چهارم در این قسمت نوشته می‌شود." }
    ];
  return (
    <div className="bg-green-400 rounded-[1.5rem] p-4 m-auto w-2/3 min-h-[300px] flex flex-col justify-around items-baseline">
      <h3 className="font-extrabold">تمرین کامپوننت های ریوزبل</h3>
        <ul className="flex flex-col gap-3">
            {cards.map((card) => (
                <li key={card.id}>
                    <h2 className="font-bold">{card.course}</h2>
                    <p>{card.description}</p>
                </li>
            ))}
        </ul>
    </div>
)}

export default Postcards;