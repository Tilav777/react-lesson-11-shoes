import './Likes.css'
import { Context } from '../../context/Context'
import { useContext } from 'react'

function Likes() {

    const { likesData, handleLikes } = useContext(Context)

  return (
    <div className='likes-container'>
        <h1>Likes</h1>
        <div className='likes-page'>
            {
                likesData.map(likes => {
                    if(likes.isLike) {
                        return (
                            <div key={likes.id} className='likes-card'>
                                <button onClick={() => handleLikes(likes.id)}><i class="bi bi-trash3-fill"></i></button>
                                <img src={likes.img} alt={likes.title} />
                                <div className="likes-card__head">
                                    <h2>{likes.title}</h2>
                                    <p>${likes.newPrice}</p>
                                </div>
                            </div>
                        )
                    }
                })
            }
        </div>
    </div>
  )
}

export default Likes