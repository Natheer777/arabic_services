import "./Services.css"
import img1 from '../../assets/Srvices/الترجمة الكتابية ( التحريرية).webp'
import img2 from '../../assets/Srvices/ترجمة شفوية ٢.webp'
import img3 from '../../assets/Srvices/ترجمة شفوية ٢.webp'
import img4 from '../../assets/Srvices/تدقيق النصوص المترجمة.webp'
import img5 from '../../assets/Srvices/تسجيل المقاطع الصوتية_.webp'
import img6 from '../../assets/Srvices/تفريغ الاصوات_.webp'
import img7 from '../../assets/Srvices/تعليم اللغة العربية_.webp'
import img8 from '../../assets/Srvices/تدقيق الابحاث_.webp'
import img9 from '../../assets/Srvices/الاستشارات الدراسية.webp'
import img10 from '../../assets/Srvices/تدقيق النصوص المترجمة.webp'
import img11 from '../../assets/Srvices/تفريغ الاصوات 3.webp'
import { useTranslation } from "react-i18next"
import { TbToolsOff } from "react-icons/tb";
export default function Services() {
  const [t] = useTranslation()
  return (
    <>
    <div className="container" id="Services">
      <div className="row rowServices">
        <h1 className="ServicesTitle">{t("Services-h")} <TbToolsOff /></h1>
        <p className="ServicesTitle">{t("Services-p")}</p>
        <div className="cardServices shadow  p-3 top">
          <div className="imgServices">
            <img src={img1} alt="" />
          </div>
          <div className="cardDetails">
            <h3>{t("Services-card1T")}</h3>
          </div>
        </div>
        <div className="cardServices shadow p-3 top">
          <div className="imgServices">
            <img src={img2} alt="" />
          </div>
          <div className="cardDetails">
            <h3>{t("Services-card2T")}</h3>
          </div>
        </div>
        <div className="cardServices shadow p-3 top">
          <div className="imgServices">
            <img src={img3} alt="" />
          </div>
          <div className="cardDetails">
            <h3>{t("Services-card3T")}</h3>
          </div>
        </div>
        <div className="cardServices shadow p-3 top">
          <div className="imgServices">
            <img src={img4} alt="" />
          </div>
          <div className="cardDetails">
            <h3>{t("Services-card4T")}</h3>
          </div>
        </div>
        <div className="cardServices shadow p-3 top">
          <div className="imgServices">
            <img src={img5} alt="" />
          </div>
          <div className="cardDetails">
            <h3>{t("Services-card5T")}</h3>
          </div>
        </div>
        <div className="cardServices shadow p-3 top">
          <div className="imgServices">
            <img src={img6} alt="" />
          </div>
          <div className="cardDetails">
            <h3>{t("Services-card6T")}</h3>
          </div>
        </div>
        <div className="cardServices shadow p-3 top">
          <div className="imgServices">
            <img src={img7} alt="" />
          </div>
          <div className="cardDetails">
            <h3>{t("Services-card7T")}</h3>
          </div>
        </div>
        <div className="cardServices shadow p-3 top">
          <div className="imgServices">
            <img src={img8} alt="" />
          </div>
          <div className="cardDetails">
            <h3>{t("Services-card8T")}</h3>
          </div>
        </div>
        <div className="cardServices shadow p-3 top">
          <div className="imgServices">
            <img src={img9} alt="" />
          </div>
          <div className="cardDetails">
            <h3>{t("Services-card9T")}</h3>
          </div>
        </div>
        <div className="cardServices shadow p-3 top">
          <div className="imgServices">
            <img src={img10} alt="" />
          </div>
          <div className="cardDetails">
            <h3>{t("Services-card10T")}</h3>

          </div>
        </div>
        <div className="cardServices shadow p-3 top">
          <div className="imgServices">
            <img src={img11} alt="" />
          </div>
          <div className="cardDetails">
            <h3>{t("Services-card11T")}</h3>

          </div>
        </div>
      </div>
    </div>
    </>
  )
}
