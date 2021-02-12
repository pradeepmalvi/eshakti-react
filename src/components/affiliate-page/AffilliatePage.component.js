import React, { useEffect } from "react";
import "./affilliatePage.styles.scss";

// react redux
import { useDispatch, useSelector } from "react-redux";

import { Link } from "react-router-dom";

export default function AffilliatePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="affilliate-page">
      <h1 className="title">Become an Eshakti Affilliate</h1>

      <div className="content">
        <div className="be-part-of-mission common left-started">
          <div className="img">
            <img
              src="https://www.eshakti.com/assets/images/affiliate/affiliateprogram_01.jpg"
              alt=""
            />
          </div>
          <div className="text-content">
            <h2 className="content-title">Be part of a Mission</h2>
            <div className="description">
              <p className="para">
                At eShakti, we never want to tell a woman her size is not
                available. We believe that all women have the right to wear
                affordable fashion that is made for them and makes them look
                their absolute best.
              </p>
              <p className="para">
                As an eShakti affiliate, you can now be part of a brand that
                empowers women to get clothes that best suit their personal size
                and style, all at an affordable price!
              </p>
            </div>
          </div>
        </div>
        <div className="how-does-it-work common right-started">
          <div className="text-content">
            <h2 className="content-title">How does it work</h2>
            <div className="description">
              <p className="para">
                eShakti is partnered with the top affiliate networks to assure
                accurate reporting to you. Sign up on any of these networks for
                access to log in and access our text links, banners and the
                constantly updated product feed. The commission rates along with
                cookie duration would all be specified on each network. Payments
                are directly handled by the networks so it absolutely hassle
                free!
              </p>
            </div>
          </div>
          <div className="img">
            <img
              src="https://www.eshakti.com/assets/images/affiliate/affiliateprogram_02.jpg"
              alt=""
            />
          </div>
        </div>

        <div className="why-eshakti common left-started">
          <div className="img">
            <img
              src="https://www.eshakti.com/assets/images/affiliate/affiliateprogram_03.jpg"
              alt=""
            />
          </div>
          <div className="text-content">
            <h2 className="content-title">Why eShakti</h2>
            <div className="description">
              <ul className="tips-list">
                <li>
                  Only brand in the world that offers size 0-36W & Custom Size /
                  Style on Women's apparel
                </li>
                <li>One of the highest commission rates in the industry</li>
                <li>
                  eShakti has been extensively covered by top magazines like
                  Glamour, Oprah, Essence, Woman's World, Redbook and appeared
                  on popular shows.
                </li>
                <li>
                  Popular on all social media including Pinterest, Facebook,
                  Twitter & Polyvore
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="join-program">join in any of the programs</div>
        <div className="antlink">
          <Link to="#">
            <img
              src="https://img1.eshakti.com/bannerimages/AL_new_logo.svg"
              alt=""
            />
          </Link>
          <div className="email">Email us at :affiliates@eshakti.com</div>
          <div className="apply-now-btn">
            <button>Apply Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}
