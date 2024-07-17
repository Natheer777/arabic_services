import "./Services.css";

import { useTranslation } from "react-i18next";
import { Card_Services } from "../../components/index";
import Data from "../../Data/ServicesCard";
// import { MdQuestionMark } from "react-icons/md";

export default function Services() {
  const [t , i18n] = useTranslation();

  const card = Data.map((card) => {
    return <Card_Services key={card.id} image={card.Image} />;
  });

  return (
    <>
      <div className="container" id="Services">
        <div className="row rowServices">
          <h1 className="ServicesTitle same">{t("Services-h")}</h1>
          <p className="ServicesTitle same">{t("Services-p")}</p>
          <div className="CaRd">
            <div className="serv1 shadow   top">
              {card[0]}
              <h4 lang={i18n.language}>{t("Services-card1T")}</h4>
            </div>
            <div className="serv2 shadow  top">
              {card[1]}
              <h4 lang={i18n.language}>{t("Services-card2T")}</h4>
            </div>
            {/* <div className="serv3 shadow  top">
              {card[2]} 
              <h4 lang={i18n.language}>{t("Services-card3T")}</h4>
            </div> */}
            <div className="serv4 shadow  top">
              {card[3]}
              <h4 lang={i18n.language}>{t("Services-card4T")}</h4>
            </div>
            <div className="serv5 shadow  top justify-content-center">
              {card[4]}
              <h4 lang={i18n.language}>{t("Services-card5T")}</h4>
            </div>
            <div className="serv6 shadow  top">
              {card[5]}
              <h4 lang={i18n.language}>{t("Services-card6T")}</h4>
            </div>
            {/* <div className="serv7 shadow   top">
               {card[6]} 
              <h4 lang={i18n.language}>{t("Services-card7T")}</h4>
            </div> */}
            <div className="serv8 shadow  top">
              {card[7]}
              <h4 lang={i18n.language}>{t("Services-card8T")}</h4>
            </div>
            {/* <div className="serv9 shadow  top">
               <MdQuestionMark />
              <h4 lang={i18n.language}>{t("Services-card9T")}</h4>
            </div> */}
            {/* <div className="serv10 shadow p-9 top">
               {card[9]} 
              <h4 lang={i18n.language}>{t("Services-card10T")}</h4>
            </div> */}
            {/* <div className="serv11 shadow  top justify-content-center">
              {card[10]}  
              <h4 lang={i18n.language}>{t("Services-card11T")}</h4>
            </div> */}
      </div>
      </div>
      </div>
    </>
  );
}
