import "./Corzina.scss";
import Modal from "antd/es/modal/Modal.js";
import { FavouriteCard } from "../Favourite/components/FavouriteCard";

const Corzina = (props) => {
  const {
    open,
    setOpen,
    massCorzina,
    buyFilms,
    deleteItemCorzina,
  } = props;

  let summ = 0;
  massCorzina.forEach(item => {
    summ = item.coast + summ
  });

  return(
    <Modal
      title="Корзина"
      centered
      open={open}
      onOk={buyFilms}
      okText={summ ? 'Оплатить ' + summ + ' ₽' : 'К фильмам'}
      onCancel={() => setOpen(false)}
      width={1100}>
      <div className="corzina__wrapper">
        {
          massCorzina.length
          ?<div className="corzina__cards">
            {
              massCorzina.map(item => {
                return(
                  <FavouriteCard
                    key={item.id}
                    deleteItem={deleteItemCorzina}
                    {...item}
                  />
                )
              })
            }
           </div>
          :<p>Ваша корзина пуста. Самое время её заполнить</p>
        }
      </div>
    </Modal>
  )
}
export { Corzina }