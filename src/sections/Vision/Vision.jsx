import './Vision.css'
import { useTranslation } from 'react-i18next'
import VisionImg from '../../assets/Icons/img1 (5).webp'

export default function Vision() {
    const [t] = useTranslation() 

  return (
    <>
     <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <p className="vision-details right mt-5">{t("Vision-p")}</p>
        </div>
        <div className="col-lg-6">
          <img className="vision-img left" src={VisionImg} alt="" />
        </div>
      </div>
    </div>
    </>
  )
}
