import './Card.css'
import { v4 as uuidv4 } from 'uuid'
import { Context } from '../../context/Context'
import { useContext } from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css'

function Card() {

    const {datas, handleLikes, handleShop} = useContext(Context)

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
                            <button onClick={() => handleShop(data.id)}><i className="bi bi-bag-dash-fill"></i></button>
                        </div>
                    </div>
                )
            })
        }
    </div>
  )
}

export default Card