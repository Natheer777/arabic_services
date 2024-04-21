import "./About.css"
import AboutImg from '../../assets/edite/واجهة-6.webp'
import { IoPerson } from "react-icons/io5";


import {useTranslation} from 'react-i18next'
export default function About() {
  const [t] = useTranslation()
  return (
    <>
    <div className="container mt-5" id="about">
      <div className="row">
        <div className="text-center">
          <h2 className="about-title right">{t("About-h")}<IoPerson /></h2>
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
