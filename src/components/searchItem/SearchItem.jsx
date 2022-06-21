import './searchItem.css'

const SearchItem = () => {
  return (
    <div className='searchItem'>
        <img src="https://cf.bstatic.com/xdata/images/hotel/square600/294410190.webp?k=ef853014c6b9b99389465f6425b7fdad1147c79bcb6d62a71054de64626591c1&o=&s=1" alt="" className="siImg" />
        <div className="siDesc">
            <h1 className="siTitle">Tower street Apartment</h1>
            <span className="siDistance">500m from Center</span>
            <span className="siTaxiOp">Free airport taxi</span>
            <span className="siSubtitle">Studio Apartment with Air conditioning</span>
            <span className="siFeatures">Entire studio . 1Bathroom . 1 full bed</span>
            <span className="siCancelOp">Free cancelation</span>
            <span className="siCancelOpSubtitle">You can cancel later, so lock in this great price today!</span>
        </div>
        <div className="siDetails">
            <div className="siRating">
                <span>Excellent</span>
                <button>8.9</button>
            </div>
            <div className="siDetailTexts">
                <span className="siPrice">$150</span>
                <span className="siTaxOp">Includes taxes and fees</span>
                <button className='siCheckButton'>See availability</button>
            </div>
        </div>
    </div>
  )
}

export default SearchItem