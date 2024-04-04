import './Sawa.css'
import { useTranslation } from 'react-i18next'
export default function Sawa() {
    const [t] = useTranslation()
  return (
    <>
    <div className="Main">
        <h5>{t("Main")}</h5>
    </div>
    </>
  )
}
