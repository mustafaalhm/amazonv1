
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <div className="a_header_top">
          <div className="col-2 left_header">
            <div className="logo">
              <img src="./imgs/amazon_PNG28.png" alt="" />
            </div>
            <div className="deliver">
              <small>deliver to</small><br></br>
              <i className='fa fa-map-marker-alt'></i>
              <bold>united kinkdom</bold>
            </div>
          </div>
          <div className="col-6 header_middle">
            <form action="">
              <div class="dropdown">
                <button class="btn  dropdown-toggle" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
                  all
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenu2">
                  <li><button class="dropdown-item" type="button">Action</button></li>
                  <li><button class="dropdown-item" type="button">Another action</button></li>
                  <li><button class="dropdown-item" type="button">Something else here</button></li>
                </ul>
              </div>
              <input type="search" />
              <button className='btn-search'><i className='fas fa-search'></i></button>

            </form>
          </div>
          <div className="col-4 nav_right">
                <a href="">lang</a>
                <a href="">sign</a>
                <a href="">cart</a>
           </div>
        </div>
        <div className="a_header_bottom">bootom header</div>
      </header>
      <main className="a_main position-relative">
        <div className="a_main1 a_main_top">
          <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src="./imgs/slider/s1.jpg" class="d-block w-100 " alt="..." />
              </div>
              <div class="carousel-item">
                <img src="./imgs/slider/s2.jpg" class="d-block w-100" alt="..." />
              </div>
              <div class="carousel-item">
                <img src="./imgs/slider/s3.jpg" class="d-block w-100" alt="..." />
              </div>
              <div class="carousel-item">
                <img src="./imgs/slider/s4.jpg" class="d-block w-100" alt="..." />
              </div>
              <div class="carousel-item">
                <img src="./imgs/slider/s5.jpg" class="d-block w-100" alt="..." />
              </div>
            </div>
            <button class="carousel-control-prev h-50" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next h-50" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        <div className="ml-1 a_main_bottom  position-absolute">
          <div className="a_main_bottom_1 row m-0 mb-3">
            <div className="col">A</div>
            <div className="col">b</div>
            <div className="col">c</div>
            <div className="col">d</div>
          </div>
          <div className="a_main_bottom_2 row m-0 mb-3">
            <div className="col-6">A</div>
            <div className="col-3">B</div>
            <div className="col-3">C</div>
          </div>
          <div className="a_main_bottom_3 p-3">
            <div className="">
              <h3 className='float-start'>today`s Deals</h3>
              <button className='btn btn-link float-start'>See all deals</button>
            </div>
            <div id="carouselExampleControls2" class="carousel slide" data-bs-ride="carousel">
              <div class="carousel-inner text-center">
                <div class="carousel-item active">
                  <div className="imgCont row">
                    <div className="col">
                      1
                    </div>
                    <div className="col">
                      2
                    </div>
                    <div className="col">
                      3
                    </div>
                    <div className="col">
                      4
                    </div>
                    <div className="col">
                      5
                    </div>
                    <div className="col">
                      6
                    </div>
                  </div>
                </div>
                <div class="carousel-item">
                  <div className="imgCont row">
                    <div className="col">
                      7
                    </div>
                    <div className="col">
                      8
                    </div>
                    <div className="col">
                      9
                    </div>
                    <div className="col">
                      10
                    </div>
                    <div className="col">
                      11
                    </div>
                    <div className="col">
                      12
                    </div>
                  </div>
                </div>
                <div class="carousel-item">
                  <div className="imgCont row">
                    <div className="col">
                      13
                    </div>
                    <div className="col">
                      14
                    </div>
                    <div className="col">
                      15
                    </div>
                    <div className="col">
                      16
                    </div>
                    <div className="col">
                      17
                    </div>
                    <div className="col">
                      18
                    </div>
                  </div>
                </div>
              </div>
              <button class="a_cc carousel-control-prev rounded-end" type="button" data-bs-target="#carouselExampleControls2" data-bs-slide="prev">
                <span class="carousel-control-prev-icon  " aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button class="a_cc carousel-control-next rounded-start" type="button" data-bs-target="#carouselExampleControls2" data-bs-slide="next">
                <span class="carousel-control-next-icon " aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </main>
      <footer>

      </footer>
    </div>
  );
}

export default App;
