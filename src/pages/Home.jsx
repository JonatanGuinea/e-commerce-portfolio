import HomeBanner from "../Components/HomeBanner"

const Home = () => {
  return (
  <>
  
  <HomeBanner/>
  <section className="homeProducts">
      <div className="container">
        <div className="row">
          
          <div className="col-md-3">
            <div className="banner"
            ><img src="https://http2.mlstatic.com/D_NQ_NP725802-MLA90046349884_082025-F00.jpg-B.webp" alt="" /></div>
          </div>
          <div className="col-md-9 productRow">
            <div className="d-flex align-items-center">
              <div className="info w-75">
                <h3 className="mb-0 hd">BEST SELLERS</h3>
                <p className="text-light text-sml mb-0">Do not miss the current offes until the end of March</p>
              </div>
            </div>
          </div>
        </div>
      </div>
  </section>
  
  </>
  )
}

export default Home
