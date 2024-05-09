import './Vision.css'
import { useTranslation } from 'react-i18next'
import VisionImg from '../../assets/edite/واجهة-12.webp'

export default function Vision() {
    const [t] = useTranslation() 

  return (
    <>
     <div className="container">
      <div className="row">
        <div>
          <p className="vision-details right">{t("Vision-p")}</p>
        </div>
        <div className="">
          <img className="vision-img left" src={VisionImg} alt="" />
        </div>
      </div>
    </div>
    </>
  )
}
