import "./VideoCard.scss";
import heartOutline from "../../assets/icons/heart.svg";
import heart from "../../assets/icons/heart2.svg";

const VideoCard = (props) => {
  const {
    id,
    title,
    description,
    image,
    coast,
    corzina,
    favourite,
    addToCorzina,
    toFavourite,
  } = props;

  return(
    <div className="video-card__wrapper">
      <div className="video-card__contant">
        <div className="video-card__image">
          <img src={image} alt="imagecard"/>
        </div>
        <h3>{ title }</h3>
        <p className="video-card__text">{ description }</p>
      </div>
      <div className="video-card__bottom">
        <p>{ coast + ' ₽' }</p>
        <div>
          <button onClick={() => addToCorzina(id)} disabled={corzina}>
            В&nbsp;корзину
          </button>
          <button onClick={() => toFavourite(id)}>
            {
              (favourite)
              ? <img src={heart} alt="heart" />
              : <img src={heartOutline} alt="heart" />
            }
          </button>
        </div>
      </div>
    </div>
  )
}

export { VideoCard }