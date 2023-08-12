import './Sitebar.css'

function Sitebar({title, vName, inpName, sitebarLength}) {
  return (
    <div className='sitebar'>
      <h2>{title}</h2>
      {
        Array.from({length: sitebarLength},(_, index)=> {
          return index
        }).map(index => {
          return (
            <label key={index}>
              <input type="radio" name={vName} value={inpName[index]}/>
              <span>
                {
                  inpName[index]
                }
              </span>
            </label>
          )
        })
      }
    </div>
  )
}

export default Sitebar