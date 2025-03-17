import { getGummys } from "../api";
import { useState, useEffect } from "react";
import { GummyCard } from "../components/GummyCard";

export default function Home() {
  const [gummys, setGummys] = useState([]);
  const [sort, setSort] = useState("date");

  const sorting = (data) => {
    console.log(`sorting by ${sort}`);

    if (sort == "date") {
      //sort by date
      data.sort(
        (d1, d2) =>
          new Date(d2.dateCreated).getTime() -
          new Date(d1.dateCreated).getTime()
      );
      return data;
    } else {
      //sort by rating
      data.sort((a, b) => b.rating - a.rating);
      return data;
    }
  };

  useEffect(() => {
    async function loadAllGummys() {
      let data = await getGummys();
      console.log(data);
      data = sorting(data);

      setGummys(data);
    }

    loadAllGummys();
  }, []);

  return (
    <>
    <div className="center-header">
      <h1>Gummys</h1>
    </div>
      <h3>You&apos;ve Logged {gummys.length} Gummys</h3>
      <div className="gummys">
        {gummys.map((gummy) => {
          return <GummyCard gummy={gummy} key={gummy.id} />;
        })}
      </div>
    </>
  );
}
