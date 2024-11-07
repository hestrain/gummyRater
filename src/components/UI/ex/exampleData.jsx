import Example from "./example1";

const exampleData = [
  {
   id: 1,
    brand: "CAMINO",
    title: "Watermelon Lemonade 2 pack",
    notes: [
        
        "could still make dinner"
        ,
        "less paranoia/body awareness than usual"
        ,
        "forgot duolingo, but remembered garbage"
        ,
        "nice comfy feeling"],
    felt: "pretty quick within 20m",
    rating: 8,
    horn: "B",
    munchie: 6,
    munchNotes: "present but not crazy",
    morningAfter: "still feeling it",
    weeknight: "no",
    cbd: 0,
    thc: 300,
    pics:["./images/leaf-white-bg.png",]
  },
  {
   id: 1,
    brand: "EXAMPLE",
    title: "Wheee",
    notes: ["i hate her", "nasty"],
    felt: "an hour",
    rating: 1,
    horn: "F",
    munchie: 10,
    munchNotes: "i ate every crumb in the house",
    morningAfter: "still feeling it",
    weeknight: "no",
    cbd: 0,
    thc: 1000,
  },

];

function DataCards() {
  return <Example exampleData={exampleData} />;
}

export default DataCards;
