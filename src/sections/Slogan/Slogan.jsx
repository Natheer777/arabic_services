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
      <div className="container">

        <div className="row d-flex justify-content-between">
        
        <div className="card0 left">{card[0]}<p className="card0">{t("Slogan-card1")}</p></div>
        <div className="card1 left">{card[1]} <p className="card1">{t("Slogan-card2")}</p></div>
        <div className="card2 hidden">{card[2]} <p className="card2">{t("Slogan-card3")}</p> </div>
        <div className="card3 hidden">{card[3]} <p className="card3">{t("Slogan-card4")}</p> </div>
        <div className="card4 right">{card[4]} <p className="card4">{t("Slogan-card5")}</p> </div>
      </div>
    
      </div>
      </div>
    </>
  )
}
