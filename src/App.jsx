import './App.css'
import data from '../data/data'
import { v4 as uuidv4 } from 'uuid'
import { Context } from './context/Context'
import { useState } from 'react'


// Components
import Card from './components/card/Card'
import Header from './components/header/Header'
import SearchBtn from './components/searchBtn/SearchBtn'
import Sitebar from './components/sitebar/Sitebar'

function App() {

  const [datas, setData] = useState(data)
  
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
    <Context.Provider value={{datas, hendleChange, clickBtn, searchBtn}}>
      <div className="web-left">
        <h3>🛒</h3>
        <Sitebar title={'Category'} inpName={['All', 'Sneakers', 'Flats', 'Sandals', 'Heels']} sitebarLength={5} vName={'category'}/>
      </div>
      <div className="web-right">
        <Header />
        <SearchBtn />
        <Card />
      </div>
    </Context.Provider>
  )
}

export default App