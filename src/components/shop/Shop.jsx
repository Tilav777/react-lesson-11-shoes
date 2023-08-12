import { Context } from "../../context/Context"
import { useContext } from "react"

function Shop() {

    const {shopData, deleteShop} = useContext(Context)

  return (
    <div className='likes-container'>
        <h1>Purchases</h1>
        <div className='likes-page'>
            {
                shopData.map(likes => {
                        return (
                            <div key={likes.id} className='likes-card'>
                                <button onClick={() => deleteShop(likes.id)}><i className="bi bi-trash3-fill"></i></button>
                                <img src={likes.img} alt={likes.title} />
                                <div className="likes-card__head">
                                    <h2>{likes.title}</h2>
                                    <p>${likes.newPrice}</p>
                                </div>
                            </div>
                        )
                })
            }
        </div>
    </div>
  )
}

export default Shop