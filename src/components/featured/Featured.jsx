import './featured.css'

const Featured = () => {
  return (
    <div className='featured'>
        <div className="featuredItem">
            <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/367340820.jpg?k=92716ee53f652ef4542a709c5a8af99c78f3e6c3f487b4df08ae84631d715389&o=&hp=1" alt="" className="featuredImg" />
            <div className="featuredTitles">
                <h1>Dublin</h1>
                <h2>321 properties</h2>
            </div>
        </div>
        <div className="featuredItem">
            <img src="https://cf.bstatic.com/xdata/images/landmark/max1024/204061.webp?k=beddf0ff977b2b92e77471bfd26c12b579f414995c6c872057de1942b948b968&o=" alt="" className="featuredImg" />
            <div className="featuredTitles">
                <h1>Berlin</h1>
                <h2>321 properties</h2>
            </div>
        </div>
        <div className="featuredItem">
            <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/15649559.jpg?k=99f77d3b11f10524de7a8edc08eeaf790460013b1e453b61ead7c78680f9eaec&o=&hp=1" alt="" className="featuredImg" />
            <div className="featuredTitles">
                <h1>Kohln</h1>
                <h2>321 properties</h2>
            </div>
        </div>
    </div>
  )
}

export default Featured