import Example from "./example1"

const exampleData = [
    {
        id: 1,
        title: "Weed Gummy 1",
        notes:["This was great", "made me sleepy"],
        rating: 4,
        thc: 500,
        cbd: 300,

    },
    {
        id: 2,
        title: "Weed Gummy 2",
        notes:["munchies galore", "had to eat 3 to feel anything"],
        rating: 2,
        thc: 300,
        cbd: 0,

    }
]


function DataCards() {
    return <Example exampleData={exampleData} />
}

export default DataCards;