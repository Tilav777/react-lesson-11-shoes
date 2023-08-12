import './Header.css'
import { Context } from '../../context/Context'
import { useContext } from 'react'
import { Link } from 'react-router-dom'

function Header() {

  const { hendleChange, likesCount, shopCount } = useContext(Context)

  return (
    <header className='header'>
      <div className="header-container">
        <input type="search" placeholder='Enter your search shoes' onChange={hendleChange}/>
        <div>
          <Link to='/likes'><i className="bi bi-suit-heart"><small>{likesCount()}</small></i></Link>
          <Link to='/purchases'><i className="bi bi-cart3"><small>{shopCount()}</small></i></Link>
          <i className="bi bi-person-plus"></i>
        </div>
      </div>
    </header>
  )
}

export default Header