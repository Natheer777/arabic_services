import './Slogan.css'
import Data from "../../Data/Slogan";

import { Card_Slogan } from "../../components/index";

import { useTranslation } from "react-i18next";

export default function Slogan() {
  const [t] = useTranslation();
  const card = Data.map((card) => {
  return <Card_Slogan key={card.id} image={card.Image} />;
  });
  return (
    <>
    <div className="cards text-center mb-5">
        <div className="card0 left">{card[0]}<p className="card0">{t("")}</p></div>
        <div className="card1 left">{card[1]} <p className="card1">{t("")}</p></div>
        <div className="card2 hidden">{card[2]} <p className="card2">{t("")}</p> </div>
        <div className="card3 hidden">{card[3]} <p className="card3">{t("")}</p> </div>
        <div className="card4 right">{card[4]} <p className="card4">{t("")}</p> </div>
      </div>
    
    </>
  )
}
