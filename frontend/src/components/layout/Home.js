import React, { Component } from "react";
import { Link } from "react-router-dom";

class MainContent extends Component {
  render() {
    return (
      <main className="mt-5">
        <div className="container">
          <div className="row">
            <div className="col-md-7 mb-4">
              <div className="view overlay z-depth-1-half">
                <img
                  src="https://mdbootstrap.com/img/Photos/Slides/img%20(70).jpg"
                  className="card-img-top"
                  alt=""
                />
                <div class="mask rgba-white-light" />
              </div>
            </div>
            <div className="col-md-5 mb-4">
              <h2>Possibilities Reloaded</h2>
              <hr />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Blanditiis pariatur quod ipsum atque quam dolorem voluptate
                officia sunt placeat consectetur alias fugit cum praesentium
                ratione sint mollitia, perferendis natus quaerat!
              </p>
              <Link to="#!" className="btn btn-indigo">
                Read More
              </Link>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-4 col-md-12 mb-4">
              <div className="card">
                <div className="view overlay">
                  <img
                    src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(72).jpg"
                    class="card-img-top"
                    alt=""
                  />
                  <Link to="#">
                    <div className="mask rgba-white-slight" />
                  </Link>
                </div>

                <div className="card-body">
                  <h4 className="card-title">Book title</h4>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Quae, neque? Rerum possimus aspernatur eius voluptatum
                    laudantium commodi a, tempore, error incidunt repudiandae
                    modi et alias iusto eveniet reprehenderit atque vitae.
                  </p>
                  <Link to="#!" className="btn btn-indigo">
                    View
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="card">
                <div className="view overlay">
                  <img
                    src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(74).jpg"
                    className="card-img-top"
                    alt=""
                  />
                  <Link to="#">
                    <div className="mask rgba-white-slight" />
                  </Link>
                </div>

                <div className="card-body">
                  <h4 className="card-title">Book title</h4>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Tempora nobis asperiores dolores aspernatur non numquam
                    tempore nemo vero magnam? Porro aspernatur aliquam ipsam
                    dicta asperiores quam exercitationem, excepturi ducimus
                    iste.
                  </p>
                  <Link to="#" className="btn btn-indigo">
                    View
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="card">
                <div className="view overlay">
                  <img
                    src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(75).jpg"
                    className="card-img-top"
                    alt=""
                  />
                  <Link to="#">
                    <div className="mask rgba-white-slight" />
                  </Link>
                </div>

                <div className="card-body">
                  <h4 className="card-title">Book title</h4>
                  <p className="card-text">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptate qui, nisi provident eveniet molestiae esse eaque
                    dolore reprehenderit iusto voluptates error culpa dicta
                    distinctio accusamus nostrum quas a aspernatur autem!
                  </p>
                  <Link to="#" className="btn btn-indigo">
                    View
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default MainContent;
