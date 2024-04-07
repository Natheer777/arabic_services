import "./Services.css"
import img1 from '../../assets/Srvices/img1 (1).webp'
import img2 from '../../assets/Srvices/img1 (2).webp'
import img3 from '../../assets/Srvices/img1 (3).webp'
import img4 from '../../assets/Srvices/img1 (4).webp'
import img5 from '../../assets/Srvices/img1 (5).webp'
import img6 from '../../assets/Srvices/img1 (6).webp'
import img7 from '../../assets/Srvices/img1 (7).webp'
import img8 from '../../assets/Srvices/img1 (8).webp'
import img9 from '../../assets/Srvices/img1 (9).webp'
import img10 from '../../assets/Srvices/img1 (10).webp'
import img11 from '../../assets/Srvices/img1 (11).webp'
import img12 from '../../assets/Srvices/img1 (12).webp'
import { useTranslation } from "react-i18next"
import { TbToolsOff } from "react-icons/tb";
export default function Services() {
  const [t] = useTranslation()
  return (
    <>
    <div className="container mb-5">
      <div className="row rowServices">
        <h1 className="ServicesTitle">{t("Services-h")} <TbToolsOff /></h1>
        <div className="cardServices shadow  p-3">
          <div className="imgServices">
            <img src={img1} alt="" />
          </div>
          <div className="cardDetails">
            <h3>{t("Services-card1T")}</h3>
            <p>{t("Services-card1")}</p>
          </div>
        </div>
        <div className="cardServices shadow p-3">
          <div className="imgServices">
            <img src={img2} alt="" />
          </div>
          <div className="cardDetails">
            <h3>{t("Services-card2T")}</h3>
            <p>{t("Services-card2")}</p>
          </div>
        </div>
        <div className="cardServices shadow p-3">
          <div className="imgServices">
            <img src={img3} alt="" />
          </div>
          <div className="cardDetails">
            <h3>{t("Services-card3T")}</h3>
            <p>{t("Services-card3")}</p>
          </div>
        </div>
        <div className="cardServices shadow p-3">
          <div className="imgServices">
            <img src={img4} alt="" />
          </div>
          <div className="cardDetails">
            <h3>{t("Services-card4T")}</h3>
            <p>{t("Services-card4")}</p>
          </div>
        </div>
        <div className="cardServices shadow p-3">
          <div className="imgServices">
            <img src={img5} alt="" />
          </div>
          <div className="cardDetails">
            <h3>{t("Services-card5T")}</h3>
            <p>{t("Services-card5")}</p>
          </div>
        </div>
        <div className="cardServices shadow p-3">
          <div className="imgServices">
            <img src={img6} alt="" />
          </div>
          <div className="cardDetails">
            <h3>{t("Services-card6T")}</h3>
            <p>{t("Services-card6")}</p>
          </div>
        </div>
        <div className="cardServices shadow p-3">
          <div className="imgServices">
            <img src={img7} alt="" />
          </div>
          <div className="cardDetails">
            <h3>{t("Services-card7T")}</h3>
            <p>{t("Services-card7")}</p>
          </div>
        </div>
        <div className="cardServices shadow p-3">
          <div className="imgServices">
            <img src={img8} alt="" />
          </div>
          <div className="cardDetails">
            <h3>{t("Services-card8T")}</h3>
            <p>{t("Services-card8")}</p>
          </div>
        </div>
        <div className="cardServices shadow p-3">
          <div className="imgServices">
            <img src={img9} alt="" />
          </div>
          <div className="cardDetails">
            <h3>{t("Services-card9T")}</h3>
            <p>{t("Services-card9")}</p>
          </div>
        </div>
        <div className="cardServices shadow p-3">
          <div className="imgServices">
            <img src={img10} alt="" />
          </div>
          <div className="cardDetails">
            <h3>{t("Services-card10T")}</h3>
            <p>{t("Services-card10")}</p>
          </div>
        </div>
        <div className="cardServices shadow p-3">
          <div className="imgServices">
            <img src={img11} alt="" />
          </div>
          <div className="cardDetails">
            <h3>{t("Services-card11T")}</h3>
            <p>{t("Services-card11")}</p>
          </div>
        </div>
        <div className="cardServices shadow p-3">
          <div className="imgServices">
            <img src={img12} alt="" />
          </div>
          <div className="cardDetails">
            <h3>{t("Services-card12T")}</h3>
            <p>{t("Services-card12")}</p>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
