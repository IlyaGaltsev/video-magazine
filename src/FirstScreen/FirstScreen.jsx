import "./FirstScreen.scss";
import logo from "../assets/icons/logoFirst.svg";
import firstImage1 from '../assets/images/first-screen1.png'
import firstImage2 from '../assets/images/first-screen2.png'
import firstImage3 from '../assets/images/first-screen3.png'

const FirstScreen = () => {
  return(
    <div className="app__first-screen">
      <div className="first-screen__wrapper">
        <img src={logo} alt="лого" />
        <h2>Выбирайте те фильмы, которые хотите посмотреть</h2>
        <img src={firstImage1} alt="illustation" />
        <img src={firstImage2} alt="illustation" />
        <img src={firstImage3} alt="illustation" />
      </div>
    </div>
  )
}
export { FirstScreen }