import { useContext } from 'react'
import './SearchBtn.css'
import { Context } from '../../context/Context'

function SearchBtn() {

  const {clickBtn, searchBtn} = useContext(Context)

  return (
    <div className='search-btns'>
      <h2>Recomended</h2>
      <div className='search-btns__container'>
        {
          searchBtn.map(item => {
            return (
              <button
              key={item.id}
                className={item.isClick? 'active' : ''}
                onClick={() => clickBtn(item.id)}
              >
                {item.title}
              </button>
            )
          })
        }
      </div>
    </div>
  )
}

export default SearchBtn