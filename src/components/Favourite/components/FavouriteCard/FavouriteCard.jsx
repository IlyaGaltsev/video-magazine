import "./FavouriteCard.scss"

const FavouriteCard = (props) => {
  const {
    id,
    title,
    coast,
    image,
    deleteItem,
  } = props;

  return(
    <div
      key={id}
      className="favourite__card">
      <div className="favourite__contant">
        <div className="card__image">
          <img src={image} alt="img" />
        </div>
        <h3>{ title }</h3>
        <p>{ coast + ' ₽' }</p>
      </div>
      <button onClick={() => deleteItem(id)}>
        Х
      </button>
    </div>
  )
}
export { FavouriteCard };