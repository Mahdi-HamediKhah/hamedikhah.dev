function Postcards() {
    const cards = [
        { course: "HTML", id:"1", description: "this is HTML course" },
        { course: "CSS", id:"2", description: "this is CSS course" },
        { course: "JS", id:"3", description: "this is JS course" },
        { course: "React", id:"4", description: "this is React course" }
    ];
  return (
    <>
        <ul>
            {cards.map((card) => (
                <li key={card.id}>
                    <h2>{card.course}</h2>
                    <p>{card.description}</p>
                </li>
            ))}
        </ul>
    </>
)}

export default Postcards;