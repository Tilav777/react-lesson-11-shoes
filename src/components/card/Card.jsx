import './Card.css'
import { v4 as uuidv4 } from 'uuid'
import { Context } from '../../context/Context'
import { useContext } from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css'

function Card() {

    const {datas, handleLikes} = useContext(Context)

  return (
    <div className='cards'>
        {
            datas?.map((data) => {
                return (
                    <div key={data.id} className='card'>
                        <button className='heart-btn' onClick={() => handleLikes(data.id)}>
                            <i className="bi bi-suit-heart-fill"></i>
                        </button>
                        <img src={data.img} alt={data.title} />
                        <h3>{data.title}</h3>
                        <span>{data.reviews}</span>
                        <div>
                            <div>
                                <del>{data.prevPrice}</del>
                                <sup>${data.newPrice}</sup>
                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bag-dash-fill" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5v-.5zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0zM6 9.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1H6z"/>
                            </svg>
                        </div>
                    </div>
                )
            })
        }
    </div>
  )
}

export default Card