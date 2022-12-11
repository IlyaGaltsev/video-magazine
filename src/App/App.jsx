import './App.scss';
import massVideos from '../assets/data/data';
import { useEffect, useState } from 'react';
import { Header } from '../components/Header';
import { VideoCard } from '../components/VideoCard/VideoCard';
import { Corzina } from '../components/Corzina';
import { Favourite } from '../components/Favourite';
import { message } from 'antd';
import { FirstScreen } from '../FirstScreen';

function App() {
  const [messageApi, contextHolder] = message.useMessage();
  const [theme, setTheme] = useState(false);
  const [value, setValue] = useState('');
  const [modalCorzina, setModalCorzina] = useState(false);
  const [modalFavourite, setModalFavourite] = useState(false);
  const [massCorzina, setMassCorzina] = useState([])
  const [massFavourite, setMassFavourite] = useState([])

  useEffect(() => {
    if (theme) {
      document.documentElement.classList.remove('ligth')
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
      document.documentElement.classList.add('ligth')
    }
  },[theme]);

  const massVideo = massVideos;

  const addToCorzina = (id) => {
    let obj = massVideo.find(item => item.id === id)
    obj.corzina = true;
    setMassCorzina([...massCorzina, obj])
    success(`${obj.title} добавлен в корзину!`)
  }

  const buyFilms = () => {
    let summ = 0;
    setModalCorzina(false);
    massCorzina.map(item => summ = summ + item.coast)
    setMassCorzina([]);
    if (summ !== 0) success(`Поздравляем с покуппкой на сумму: ${summ} ₽`)
    massVideo.map(item => item.corzina = false)
  }

  const deleteItemCorzina = (id) => {
    setMassCorzina(
      massCorzina
        .filter(item => item.id !== id)
    )
    massVideo
      .filter(item => item.id === id)
      .map(item => item.corzina = false)
  }

  const success = (text) => {
    messageApi.open({
      type: 'success',
      content: text,
    });
  };

  const deleteItemFavourite = (id) => {
    setMassFavourite(
      massFavourite
        .filter(item => item.id !== id)
    )
  }

  const toFavourite = (id) => {
    console.log(id)
    let obj = massVideo.find(item => item.id === id)
    if (obj.favourite) {
      obj.favourite = false;
      deleteItemFavourite(id)
    } else {
      obj.favourite = true;
      setMassFavourite([...massFavourite, obj])
    }
  }

  return (
    <div className="app__wrapper lignt-theme">
       {contextHolder}
      <Header
        setModalFavourite={setModalFavourite}
        setModalCorzina={setModalCorzina}
        value={value}
        massCorzina={massCorzina}
        setValue={setValue}
        theme={theme}
        setTheme={setTheme}
      />
      <FirstScreen/>
      <div className="app__films">
        <div className="films__wrapper">
          {massVideo
            .filter(el => el.title.toLowerCase().includes(value.toLowerCase()))
            .map(item => {
              return(
                <VideoCard
                  key={item.id}
                  {...item}
                  addToCorzina={addToCorzina}
                  toFavourite={toFavourite}
                />
              )
            })
          }
        </div>
      </div>
      <Corzina
        buyFilms={buyFilms}
        open={modalCorzina}
        setOpen={setModalCorzina}
        massCorzina={massCorzina}
        deleteItemCorzina={deleteItemCorzina}
      />
      <Favourite
        massFavourite={massFavourite}
        deleteItemFavourite={deleteItemFavourite}
        open={modalFavourite}
        setOpen={setModalFavourite}
      />
    </div>
  );
}

export { App };
