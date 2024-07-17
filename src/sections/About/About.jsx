import "./About.css"
import AboutImg from '../../assets/edite/واجهة-67.webp'


import {useTranslation} from 'react-i18next'
export default function About() {
  const [t] = useTranslation()
  return (
    <>
    <div className="container same mt-5" id="about">
      <div className="row">
        <div className="text-container">
          <h2 className="about-title  right">{t("About-h")}</h2>
          <p className="about-details right">{t("About-p")}</p>           
       
        </div>
        <div className="">
          <img className="about-img left" src={AboutImg} alt="" />
        </div>
      </div>
    </div>
    </>
  )
}
