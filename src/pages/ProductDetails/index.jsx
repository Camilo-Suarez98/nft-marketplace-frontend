import { useState } from 'react';
import Inner from '../../Components/Inner';
import './ProductDetails.scss';
import ProductTab from '../../Components/ProductTab';
import Heart from '../../Components/Heart';
import MoreOption from '../../Components/MoreOption';
import CategoryCollection from '../../Components/CategoyCollection';
import Bids from '../../Components/Bids';
import HistoryBids from '../../Components/HistoryBits';
import RecentCard from '../../Components/RecentCard';
import Details from '../../Components/Details';

const ProductDetails = () => {
  const [isActive, setIsActive] = useState(0);
  const buton = ['Birds', 'Details', 'History'];

  const handleClick = (buttonId) => {
    setIsActive(buttonId);
  };

  const handleModal = (spanId, bool) => {
    const modal = document.getElementById(spanId);
    // eslint-disable-next-line no-unused-expressions
    modal.hidden = bool;
  };

  return (
    <div>
      <div className="product-secction">
        <Inner page="Product Details" />
        <div className="product-details">
          <div className="container">
            <div className="row">
              <div className="wrapper">
                <ProductTab />
              </div>
              <div className="column">
                <div className="row">
                  <div className="title-area">
                    <h4 className="title">Delta25</h4>
                    <div className="rew">
                      <Heart />
                      <MoreOption />
                    </div>
                  </div>
                  <span className="span-bid">
                    Height-bid
                    <span className="price">
                      0.334
                      wETH
                    </span>
                  </span>
                  <h6 className="title-name">#22 Portal , Info bellow</h6>
                  <CategoryCollection />
                  <a
                    className="a-btn"
                    onClick={() => { return handleModal('modal', false); }}
                    href="#top"
                  >
                    <span>Unlockable content included</span>

                  </a>
                  <div className="author-profile">
                    <div className="container">
                      <div className="row">
                        <div className="wrapper-option">
                          <nav className="button-option">
                            <div className="nav-button">
                              {buton.map((element, index) => {
                                return (
                                  <button
                                    type="button"
                                  // eslint-disable-next-line react/no-array-index-key
                                    key={index}
                                    className={isActive === index ? 'mi-boton active' : 'mi-boton'}
                                    onClick={() => { return handleClick(index); }}
                                  >
                                    {element}
                                  </button>
                                );
                              })}
                            </div>
                          </nav>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    { isActive === 0 && <Bids />}
                    { isActive === 1 && <Details />}
                    { isActive === 2 && <HistoryBids />}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <RecentCard title="Recent View" />
        </div>
        <div>
          <RecentCard title="Related Item" />
        </div>
      </div>
      <div id="modal" hidden>
        <button type="button" onClick={() => { return handleModal('modal', true); }} className="onHide">X</button>
        <div className="header">
          <h3>Cabecera</h3>
        </div>
        <div className="content">
          <p>
            Contenido
          </p>
        </div>
        <div className="footer">
          <p>
            Footer
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;