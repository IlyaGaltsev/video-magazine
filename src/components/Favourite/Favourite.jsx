import "./Favourite.scss";
import Modal from "antd/es/modal/Modal.js";
import { FavouriteCard } from "./components/FavouriteCard";

const Favourite = (props) => {
  const {
    open,
    setOpen,
    massFavourite,
    deleteItemFavourite,
  } = props;

  return(
    <Modal
      title="Избранное"
      centered
      open={open}
      onOk={() => setOpen(false)}
      okText={'К фильмам'}
      onCancel={() => setOpen(false)}
      width={1000}
    >
     <div className="favourite__wrapper">
        {
          massFavourite.length
          ?<div className="favourite__cards">
            {
              massFavourite.map(item => {
                return(
                  <FavouriteCard
                    key={item.id}
                    deleteItem={deleteItemFavourite}
                    {...item}
                  />
                )
              })
            }
           </div>
          :<p>
             Неужели тут пусто? Нужно срочно
             добавить ваши любимые фильмы
           </p>
        }
      </div>
    </Modal>
  )
}
export { Favourite }