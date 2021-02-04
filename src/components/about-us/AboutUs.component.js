import React, { useEffect } from "react";
import "./about-us.styles.scss";

// our custom components
import CustomerReviewCard from "../customer-review-card/CustomerReviewCard.component";

export default function AboutUs() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="about-us">
      <div className="content">
        <div className="about-eshakti">
          <div className="left">
            <h2 className="area-title">About eShakti</h2>
            <div className="area-desc">
              <p>
                eShakti makes clothes to your size, height and style. The only
                clothing brand to do so.
              </p>
              <p>
                It is also about sustainability as there is no waste either at
                our end or yours. We don’t have any clothes left over at the end
                of the season as we only make what the customer orders. And you
                are more likely to find clothes that meet your size, height and
                style requirements and hence will have nothing that hangs unused
                in your closet.
              </p>
            </div>
          </div>

          <div className="right">
            <img
              src="https://www.liveabout.com/thmb/kRAxHeOCy0W6qQ2Q1LdkxD_D48c=/768x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-558270637-5a15be737d4be800199c25cf.jpg"
              alt=""
            />
          </div>
        </div>

        <div className="location">
          <div className="left">
            <div className="img">
              <img
                src="https://www.eshakti.com/assets/images/about/Location.png"
                alt=""
              />
            </div>
          </div>
          <div className="right">
            <h2 className="area-title">Location</h2>
            <div className="area-desc">
              <p>
                eShakti has offices in New York and in India. Its sales returns
                center is located in Portland, Oregon.
              </p>
            </div>
          </div>
        </div>

        <div className="culture">
          <div className="left">
            <h2 className="area-title">Culture</h2>
            <div className="area-desc">
              <p>
                Being not just customer-centered but customer-led is at the core
                of eShakti’s culture of innovation. We can bring new products to
                market as fast as within 3 days if there is change in trend. And
                our customers participate in the design so that they get what
                suits them. They can change neckline, sleeve and length, add or
                remove pockets and get clothes made to their exact size and
                height.
              </p>
            </div>
          </div>

          <div className="right">
            <img
              src="https://www.eshakti.com/assets/images/about/Culture.png"
              alt=""
            />
          </div>
        </div>

        <div className="jobs">
          <div className="left">
            <div className="img">
              <img
                src="https://www.eshakti.com/assets/images/about/Jobsateshakti.png"
                alt=""
              />
            </div>
          </div>
          <div className="right">
            <h2 className="area-title">Jobs At eshakti</h2>
            <div className="area-desc">
              <p>
                To many in eShakti, it is a dream-job. They do things they have
                never got to do anywhere else. The team designs fashion today
                and sees it on the site three days later! We let the customer
                participate in the designing of her clothes – and it happens in
                a click! Technology is already driving customized manufacture,
                just-in-time fabric printing, the eShakti FX feature and
                managing a zero-inventory supply-chain. What lies ahead are
                personalization across all touch-points, predictive analytics,
                advanced recommendation engines using the unprecedented kind of
                data of style preferences and actual size and height information
                that the customer provides to get her clothes customized,
                influencer-marketing, celebrity-ambassadorship, crowd-sourcing
                of print and fashion design; what is exciting too is to combine
                eShakti’s online presence with an offline presence to help
                customers get measured, and let them touch and feel the fabrics,
                be guided by stylists and then order for a fast delivery to
                their home. eShakti’s world-class talent has created a unique
                company. We are growing. If you like what you see, and feel you
                have talents that will find full expression in eShakti, write to
                us today!
              </p>
            </div>
          </div>
        </div>

        <div className="customer-speaks">
          <h1 className="main-title">Customer Speaks</h1>
          <p className="page-desc">
            I could write about all the wonderful features of eShakti, such as
            the creative and varied clothing designs, the well-designed and
            informative product descriptions on the website
          </p>
          <div className="content">
            <CustomerReviewCard />
            <CustomerReviewCard />
            <CustomerReviewCard />
          </div>
        </div>

        <div className="what-eshakti-means">
          <h1 className="main-title">What eShakti means to the customer</h1>
          <p className="page-desc">
            Customers say three things most often about eShakti: they feel
            confident in clothes made to their size, height and style, they get
            a lot of compliments and they feel feminine! When you buy new
            clothes, you expect them to make you look your best. But if the
            size, height or styling does not suit you, that hope and expectation
            is not met.
          </p>
          <p className="page-desc">
            That is the difference that eShakti makes. At eShakti you have a
            choice of brands – eShakti itself and then Zapelle (contemporary),
            Wayward Fancies (Boho) and Newbury Street (High Street Fashion).
          </p>
          <div className="content">
            <div className="img">
              <img
                src="https://www.eshakti.com/assets/images/about/about-custeasy.svg"
                alt=""
              />
              <h5 className="img-title">Customization is easy</h5>
            </div>
            <div className="img">
              <img
                src="https://www.eshakti.com/assets/images/about/about-custfast.svg"
                alt=""
              />
              <h5 className="img-title">Customization is easy</h5>
            </div>
            <div className="img">
              <img
                src="https://www.eshakti.com/assets/images/about/about-custaff.svg"
                alt=""
              />
              <h5 className="img-title">Customization is easy</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
