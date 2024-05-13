import "./Services.css";
// import img1 from '../../assets/Srvices/الترجمة الكتابية ( التحريرية).webp'
// import img2 from '../../assets/Srvices/ترجمة شفوية ٢.webp'
// import img3 from '../../assets/Srvices/ترجمة شفوية ٢.webp'
// import img4 from '../../assets/Srvices/تدقيق النصوص المترجمة.webp'
// import img5 from '../../assets/Srvices/تسجيل المقاطع الصوتية_.webp'
// import img6 from '../../assets/Srvices/تفريغ الاصوات_.webp'
// import img7 from '../../assets/Srvices/تعليم اللغة العربية_.webp'
// import img8 from '../../assets/Srvices/تدقيق الابحاث_.webp'
// import img9 from '../../assets/Srvices/الاستشارات الدراسية.webp'
// import img10 from '../../assets/Srvices/تدقيق النصوص المترجمة.webp'
// import img11 from '../../assets/Srvices/تفريغ الاصوات 3.webp'
import { useTranslation } from "react-i18next";
import { Card_Services } from "../../components/index";
import Data from "../../Data/ServicesCard";
export default function Services() {
  const [t] = useTranslation();

  const card = Data.map((card) => {
    return <Card_Services key={card.id} image={card.Image} />;
  });

  return (
    <>
      <div className="container" id="Services">
        <div className="row rowServices">
          <h1 className="ServicesTitle">{t("Services-h")}</h1>
          <p className="ServicesTitle">{t("Services-p")}</p>
          <div className="CaRd">
            <div className="serv1 shadow  p-3 top">
              {card[0]}
              <h4>{t("Services-card1T")}</h4>
            </div>
            <div className="serv2 shadow p-3 top">
              {card[1]}
              <h4>{t("Services-card2T")}</h4>
            </div>
            <div className="serv3 shadow p-3 top">
              {card[2]}
              <h4>{t("Services-card3T")}</h4>
            </div>
            <div className="serv4 shadow p-3 top">
              {card[3]}
              <h4>{t("Services-card4T")}</h4>
            </div>
            <div className="serv5 shadow p-3 top justify-content-center">
              {card[4]}
              <h4>{t("Services-card5T")}</h4>
            </div>
            <div className="serv6 shadow p-3 top">
              {card[5]}
              <h4>{t("Services-card6T")}</h4>
            </div>
            <div className="serv7 shadow  p-3 top">
              {card[6]}
              <h4>{t("Services-card7T")}</h4>
            </div>
            <div className="serv8 shadow p-3 top">
              {card[7]}
              <h4>{t("Services-card8T")}</h4>
            </div>
            <div className="serv9 shadow p-3 top">
              {card[8]}
              <h4>{t("Services-card9T")}</h4>
            </div>
            <div className="serv10 shadow p-9 top">
              {card[9]}
              <h4>{t("Services-card10T")}</h4>
            </div>
            <div className="serv11 shadow p-3 top justify-content-center">
              {card[10]}
              <h4>{t("Services-card11T")}</h4>
            </div>
      </div>
      </div>
      </div>
    </>
  );
}
