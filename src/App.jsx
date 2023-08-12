import './App.css'
import data from '../data/data'
import { v4 as uuidv4 } from 'uuid'
import { Context } from './context/Context'
import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Shop from './components/shop/Shop'


// Components
import WebRigth from './components/web-right/WebRigth'
import Likes from './components/likes/Likes'
import Sitebar from './components/sitebar/Sitebar'

function App() {

  const [datas, setData] = useState(data)
  const [likesData, setLikesData] = useState(data)
  const [shopData, setShopData] = useState([])

  function handleLikes(id) {
      setLikesData(prev => {
        return prev.map(like => {
          if(like.id === id) {
            return {...like, isLike: !like.isLike}
          }else {
            return like
          }
        })
      })
  }

  function likesCount() {
    let count = 0
    likesData.forEach(like => {
      if(like.isLike) {
        count++
      }
    })
    return count
  }

  function handleShop(id) {
    data.forEach(item => {
      if(item.id === id) {
        setShopData(prev => {
          return [...prev, item]
        })
      }
    })
  }

  function deleteShop(id) {
    setShopData(prev => {
      return prev.filter(item => item.id!== id)
    })
  }

  function shopCount() {
    let count = 0
    shopData.forEach(() => {
      count++
    })
    return count
  }

  
  function hendleChange(e) {
    setData(() => {
      return datas.filter(item => {
        return item.title.toLowerCase().includes(e.target.value.toLowerCase())
      })
    })
  }

  function clickBtn(id) {
    setSearchBtn(searchBtn.map(item => {
      if (item.id === id) {
        if(item.title === 'All Products' && !item.isClick) {
          setData(data)
        }else if(item.title === 'Nike' && !item.isClick) {
          setData(() => {
            return data.filter(item => {
              return item.company.toLowerCase() === 'nike'
            })
          })
        }else if(item.title === 'Adidas' && !item.isClick) {
          setData(() => {
            return data.filter(item => {
              return item.company.toLowerCase() === 'adidas'
            })
          })
        }else if(item.title === 'Puma' && !item.isClick) {
          setData(() => {
            return data.filter(item => {
              return item.company.toLowerCase() === 'puma'
            })
          })
        }else if(item.title === 'Vans' && !item.isClick) {
          setData(() => {
            return data.filter(item => {
              return item.company.toLowerCase() === 'vans'
            })
          })
        }else {
          setData(data)
        }
        return {
        ...item,
          isClick:!item.isClick
        }
      } else {
        return {
          id: item.id,
          title: item.title,
          isClick: false
        }
      }
    }))
  }

  const [searchBtn, setSearchBtn] = useState([
    {
      id: uuidv4(),
      title: 'All Products',
      isClick: false
    },
    {
      id: uuidv4(),
      title: 'Nike',
      isClick: false
    },
    {
      id: uuidv4(),
      title: 'Adidas',
      isClick: false
    },
    {
      id: uuidv4(),
      title: 'Puma',
      isClick: false
    },
    {
      id: uuidv4(),
      title: 'Vans',
      isClick: false
    },
  ])

  return (
    <Context.Provider value={{datas, hendleChange, clickBtn, searchBtn, handleLikes, likesData, likesCount, handleShop, shopCount, shopData, deleteShop}}>
      <div className="web-left">
        <h3>🛒</h3>
        <Sitebar title={'Category'} inpName={['All', 'Sneakers', 'Flats', 'Sandals', 'Heels']} sitebarLength={5} vName={'category'}/>
        <Sitebar title={'Price'} inpName={['All', '$0-$50', '$50-$100', '$100-$150', 'Over $150']} sitebarLength={5} vName={'price'}/>
        <Sitebar title={'Colors'} inpName={['All', 'Black', 'Blue', 'Red', 'Green', 'White']} sitebarLength={6} vName={'colors'}/>
      </div>
      <Routes>
        <Route path='/' element={<WebRigth />}/>
        <Route path='/likes' element={<Likes />}/>
        <Route path='/purchases' element={<Shop />} />
      </Routes>
    </Context.Provider>
  )
}

export default App