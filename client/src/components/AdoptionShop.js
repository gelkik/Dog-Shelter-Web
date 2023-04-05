import React from "react";
import {Link} from 'react-router-dom'

function AdoptionShop({dog}) {
  console.log(dog)

  return (
    <section className="adoption-shop-area">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-xl-7 col-lg-9">
          <div className="section-title text-center mb-65">
            <div className="section-icon"><img src="img/icon/pawprint.png" alt="" /></div>
            <h5 className="sub-title">Meet our Dogs</h5>
            <h2 className="title">Puppies Waiting for Adoption</h2>
            <p>Adopting a dog isn't just bringing home a pet, it's giving a furry friend a forever family.</p>
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-lg-4 col-md-6">
          <div className="adoption-shop-item">
            <div className="adoption-shop-thumb">
              <img src="img/product/adoption_shop_thumb01.jpg" alt="" />
              <Link to="/shop-details" className="btn">Adopt<img src="img/icon/w_pawprint.png" alt="" /></Link>
            </div>
            <div className="adoption-shop-content">
              <h4 className="title"><Link to="/shop-details">Sandra</Link></h4>
              <div className="adoption-meta">
                <ul>
                  <li><i className="fas fa-cog" /><a href="/#">German Shepherd</a></li>
                  <li><i className="far fa-calendar-alt" /> Birth : 2021</li>
                </ul>
              </div>
              <div className="adoption-rating">
                <ul>
                  <li className="rating">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                  </li>
                  <li className="price">Adoption Fee : <span>Free</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="adoption-shop-item">
            <div className="adoption-shop-thumb">
              <img src="img/product/adoption_shop_thumb02.jpg" alt="" />
              <Link to="/shop-details" className="btn">Adopt<img src="img/icon/w_pawprint.png" alt="" /></Link>
            </div>
            <div className="adoption-shop-content">
              <h4 className="title"><Link to="/shop-details">Coco</Link></h4>
              <div className="adoption-meta">
                <ul>
                  <li><i className="fas fa-cog" /><a href="/#">Golden Retriever</a></li>
                  <li><i className="far fa-calendar-alt" /> Birth : 2020</li>
                </ul>
              </div>
              <div className="adoption-rating">
                <ul>
                  <li className="rating">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                  </li>
                  <li className="price">Adoption Fee : <span>$30</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="adoption-shop-item">
            <div className="adoption-shop-thumb">
              <img src="img/product/adoption_shop_thumb03.jpg" alt="" />
              <Link to="/shop-details" className="btn">Adopt<img src="img/icon/w_pawprint.png" alt="" /></Link>
            </div>
            <div className="adoption-shop-content">
              <h4 className="title"><Link to="/shop-details">Presley</Link></h4>
              <div className="adoption-meta">
                <ul>
                  <li><i className="fas fa-cog" /><a href="/#">German Sherped</a></li>
                  <li><i className="far fa-calendar-alt" /> Birth : 2020</li>
                </ul>
              </div>
              <div className="adoption-rating">
                <ul>
                  <li className="rating">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                  </li>
                  <li className="price">Adoption Fee : <span>$29</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="adoption-shop-item">
            <div className="adoption-shop-thumb">
              <img src="img/product/adoption_shop_thumb04.jpg" alt="" />
              <Link to="/shop-details" className="btn">Adopt<img src="img/icon/w_pawprint.png" alt="" /></Link>
            </div>
            <div className="adoption-shop-content">
              <h4 className="title"><Link to="/shop-details">Amin</Link></h4>
              <div className="adoption-meta">
                <ul>
                  <li><i className="fas fa-cog" /><a href="/#">German Sherped</a></li>
                  <li><i className="far fa-calendar-alt" /> Birth : 2021</li>
                </ul>
              </div>
              <div className="adoption-rating">
                <ul>
                  <li className="rating">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                  </li>
                  <li className="price">Adoption Fee : <span>$39</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="adoption-shop-item">
            <div className="adoption-shop-thumb">
              <img src="img/product/adoption_shop_thumb05.jpg" alt="" />
              <Link to="/shop-details" className="btn">Adopt<img src="img/icon/w_pawprint.png" alt="" /></Link>
            </div>
            <div className="adoption-shop-content">
              <h4 className="title"><Link to="/shop-details">George</Link></h4>
              <div className="adoption-meta">
                <ul>
                  <li><i className="fas fa-cog" /><a href="/#">Siberian Husky</a></li>
                  <li><i className="far fa-calendar-alt" /> Birth : 2021</li>
                </ul>
              </div>
              <div className="adoption-rating">
                <ul>
                  <li className="rating">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                  </li>
                  <li className="price">Adoption Fee : <span>Free</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="adoption-shop-item">
            <div className="adoption-shop-thumb">
              <img src="img/product/adoption_shop_thumb06.jpg" alt="" />
              <Link to="/shop-details" className="btn">Adopt<img src="img/icon/w_pawprint.png" alt="" /></Link>
            </div>
            <div className="adoption-shop-content">
              <h4 className="title"><Link to="/shop-details">Alex</Link></h4>
              <div className="adoption-meta">
                <ul>
                  <li><i className="fas fa-cog" /><a href="/#">Golden Retriever</a></li>
                  <li><i className="far fa-calendar-alt" /> Birth : 2021</li>
                </ul>
              </div>
              <div className="adoption-rating">
                <ul>
                  <li className="rating">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                  </li>
                  <li className="price">Adoption Fee : <span>Free</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  )
}

export default AdoptionShop;

{/* <section className="adoption-shop-area">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-xl-7 col-lg-9">
          <div className="section-title text-center mb-65">
            <div className="section-icon"><img src="img/icon/pawprint.png" alt="" /></div>
            <h5 className="sub-title">Meet our Dogs</h5>
            <h2 className="title">Puppies Waiting for Adoption</h2>
            <p>Adopting a dog isn't just bringing home a pet, it's giving a furry friend a forever family.</p>
          </div>
        </div>
      </div>
      <div className="row justify-content-center"></div>
        <div className="row justify-content-center">
              <div className="col-lg-4 col-md-6">
                <div className="adoption-shop-item">
                  <div className="adoption-shop-thumb">
                    <img src="img/product/adoption_shop_thumb01.jpg" alt="" />
                    <Link to="/shop-details" className="btn">Adopt<img src="img/icon/w_pawprint.png" alt="" /></Link>
                  </div>
                  <div className="adoption-shop-content">
                    <h4 className="title"><Link to="/shop-details">{dog.name}</Link></h4>
                    <div className="adoption-meta">
                      <ul>
                        <li><i className="fas fa-cog" /><a href="/#">{dog.breed}</a></li>
                        <li><i className="far fa-calendar-alt" /> Birth : 2021</li>
                      </ul>
                    </div>
                    <div className="adoption-rating">
                      <ul>
                        <li className="rating">
                        {for (let i=0;i<dog.rating;i++){
                          <i className="fas fa-star" />
                        }}
                        </li>
                        <li className="price">Adoption Fee : <span>{dog.price}</span></li>
                      </ul>
                  </div>
                </div>
              </div>
            </div> 
          </div>
      </div>
  </section> */}