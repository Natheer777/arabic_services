import './Slogan2.css'
import Data from "../../Data/Slogan";

import { Card_Slogan } from "../../components/index";

import { useTranslation } from "react-i18next";

export default function Sloga2() {
  const [t] = useTranslation();
  const card = Data.map((card) => {
  return <Card_Slogan key={card.id} image={card.Image} />;
  });
  return (
    <>
    <div className="cards text-center  mb-5">
        <div className="card0 left">{card[5]}<p className="card5">{t("")}</p></div>
        <div className="card1 left">{card[6]} <p className="card6">{t("")}</p></div>
        <div className="card2 hidden">{card[7]} <p className="card7">{t("")}</p> </div>
        <div className="card3 hidden">{card[8]} <p className="card8">{t("")}</p> </div>
        <div className="card4 right">{card[9]} <p className="card9">{t("")}</p> </div>
      </div>
    
    </>
  )
}
