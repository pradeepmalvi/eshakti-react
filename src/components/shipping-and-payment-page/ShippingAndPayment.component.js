import React, { useEffect } from "react";
import "./shipping-and-payment.styles.scss";

import { IoMdArrowDropright } from "react-icons/io";

export default function ShippingAndPayment() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="shipping-and-payment">
      <h1 className="main-title">Payment and Shipping</h1>
      <div className="description-content">
        <div className="each-description">
          <h4 className="each-description-title">Payment options</h4>
          <div className="each-description-content">
            <ul>
              <div>
                <span>
                  <IoMdArrowDropright />
                </span>
                <li>All transactions are processed in US Dollars ($)</li>
              </div>
              <div>
                <span>
                  <IoMdArrowDropright />
                </span>
                <li>
                  eShakti currently accepts Visa, MasterCard, American Express
                  and Discover credit cards, as well as PayPal payments. All
                  orders will be charged immediately upon order confirmation
                </li>
              </div>
              <div>
                <span>
                  <IoMdArrowDropright />
                </span>
                <li>
                  Only one gift coupon (purchase discount offers from eShakti)
                  may be used per order
                </li>
              </div>
              <div>
                <span>
                  <IoMdArrowDropright />
                </span>
                <li>
                  You can use as many gift cards as you like for a single order
                </li>
              </div>
              <div>
                <span>
                  <IoMdArrowDropright />
                </span>
                <li>
                  All promotional discount codes, gift coupons, and gift cards
                  are available for one-time use only and may not be
                  transferred, re-issued, or exchanged for cash, unless
                  explicitly specified
                </li>
              </div>
              <div>
                <span>
                  <IoMdArrowDropright />
                </span>{" "}
                <li>
                  To place an order, your total order value should be minimum
                  $20 for assorted mask only orders and $25 for mask combo and
                  apparel orders after any promotional discounts.
                </li>
              </div>
            </ul>
          </div>
        </div>
        <div className="each-description">
          <h4 className="each-description-title">Order Processing</h4>
          <div className="each-description-content">
            On successful completion of payment, an order confirmation is mailed
            to the customer's registered email address. eShakti reserves the
            right to cancel an order within 3 business days of receiving the
            order if we are unable to fulfill the order. Orders may be canceled
            by eShakti under exceptional circumstances, including but not
            limited to - fabric or trims failing quality check, insufficient
            fabric, inability to comply with special instructions requested,
            incomplete or unsupported address location, orders not complying
            with our coupons usage policy, orders at prices that significantly
            vary from market or eShakti's standard prices due to manual or
            technical error, orders flagged by our technical systems as
            suspicious usage of credit cards or other payment options or any
            other potential abuse of our service. In all such cases, eShakti
            will inform the customer of the cancellation and refund the full
            order value within 3 business days of receiving the order
          </div>
        </div>
        <div className="each-description">
          <h4 className="each-description-title">Where we deliver</h4>
          <div className="each-description-content">
            We ship only to physical shipping addresses within the contiguous
            United States. We don’t ship to P.O. boxes, APO / FPO addresses
          </div>
        </div>
        <div className="each-description">
          <h4 className="each-description-title">How we deliver</h4>
          <div className="each-description-content">
            <ul>
              <div>
                <span>
                  <IoMdArrowDropright />
                </span>
                <li>Orders may not be shipped to multiple locations</li>
              </div>

              <div>
                <span>
                  <IoMdArrowDropright />
                </span>
                <li>
                  Shipping address changes must be requested before the order
                  has been shipped. Once shipped, the address cannot be changed,
                  cancelled, or diverted to a different shipping address
                </li>
              </div>

              <div>
                <span>
                  <IoMdArrowDropright />
                </span>
                <li>
                  Three attempts to deliver your package will be made by our
                  shipping courier. If you’re not available during these
                  attempts, our courier will ask you to contact them to arrange
                  a delivery of your package for a time when you’ll be present
                  to receive it
                </li>
              </div>

              <div>
                <span>
                  <IoMdArrowDropright />
                </span>
                <li>
                  A delivery confirmation email will be sent to you as soon as
                  we receive a notification of successful order delivery from
                  our courier
                </li>
              </div>
              <div>
                <span>
                  <IoMdArrowDropright />
                </span>
                <li>
                  All promotional discount codes, gift coupons, and gift cards
                  are available for one-time use only and may not be
                  transferred, re-issued, or exchanged for cash, unless
                  explicitly specified
                </li>
              </div>
              <div>
                <span>
                  <IoMdArrowDropright />
                </span>
                <li>
                  Lost packages: If you haven’t actually received your order
                  after receiving a delivery confirmation email from us, please
                  contact us within 3 business days from the date you receive
                  our delivery confirmation email. eShakti will not be
                  responsible for the cost or replacement of lost or misplaced
                  packages if notified later than the time frame mentioned above
                </li>
              </div>
            </ul>
          </div>
        </div>
        <div className="each-description">
          <h4 className="each-description-title">When we deliver</h4>
          <div className="each-description-content">
            <ul>
              <div>
                <span>
                  <IoMdArrowDropright />
                </span>
                <li>
                  All our products are custom made to order. Please allow 13-17
                  days (Excluding Alaska & Hawaii) for us to make it and get it
                  to your door.
                </li>
              </div>

              <div>
                <span>
                  <IoMdArrowDropright />
                </span>
                <li>
                  All our products are custom made to order. Please allow 13-17
                  days (Excluding Alaska & Hawaii) for us to make it and get it
                  to your door.
                </li>
              </div>
              <div>
                <span>
                  <IoMdArrowDropright />
                </span>
                <li>Mask combo sets will be delivered in 3 business days.</li>{" "}
              </div>
              <div>
                <span>
                  <IoMdArrowDropright />
                </span>
                <li>
                  Orders consisting of only assorted masks will be delivered in
                  7-10 days.
                </li>
              </div>
              <div>
                <span>
                  <IoMdArrowDropright />
                </span>
                <li>
                  Orders consisting of both apparel and masks products will be
                  shipped in 13-17 days.
                </li>
              </div>
              <div>
                <span>
                  <IoMdArrowDropright />
                </span>
                <li>
                  In case of orders with slogan masks, please allow us 14-21
                  days to deliver.
                </li>
              </div>
              <div>
                <span>
                  <IoMdArrowDropright />
                </span>
                <li>
                  Please note that while orders typically arrive in as above,
                  occasional delays in the international shipping process do
                  occur and we do try our best to keep you informed in such
                  cases.
                </li>
              </div>
            </ul>
          </div>
        </div>
        <div className="each-description">
          <h4 className="each-description-title">SHIPPING COSTS: The US</h4>
          <div className="each-description-content">
            <div className="top">
              All eShakti apparel is custom-made by hand at our production
              facility in India before being shipped directly you. Since we
              don’t advance produce or store our clothing, there may be
              additional customs or duty fees associated with your order beyond
              the actual shipping cost for your items.
            </div>
            <div className="bottom">
              We charge shipping and handling fees based on the total original
              value of items in your order (before any applied discounts or
              coupons) as shown in the chart below:
              <div className="table">
                <table cellspacing="0" cellpadding="0" border="1">
                  <thead>
                    <tr>
                      <th>Your order’s value</th>
                      <th>Our shipping fee</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>$0 - $49.99</td>
                      <td>$9.00</td>
                    </tr>
                    <tr>
                      <td>$50 - $74.99</td>
                      <td>$9.95</td>
                    </tr>
                    <tr>
                      <td>$75 - $99.99</td>
                      <td>$11.95</td>
                    </tr>
                    <tr>
                      <td>$100 - $124.99</td>
                      <td>$12.95</td>
                    </tr>
                    <tr>
                      <td>$125 - $149.99</td>
                      <td>$14.95</td>
                    </tr>
                    <tr>
                      <td>$150 - $199.99</td>
                      <td>$16.95</td>
                    </tr>
                    <tr>
                      <td>$200 and up</td>
                      <td>$24.95</td>
                    </tr>
                  </tbody>
                </table>
                <div className="table-descriptio">
                  * Orders with only assorted face masks will be charged a flat
                  shipping fee of $4.95. When ordered with apparel products,
                  shipping will be charged according to the above mentioned
                  chart. All orders which contain mask combo sets will be
                  charged a fee of $4.95 per mask set in addition to the
                  shipping charge for other items.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="each-description">
          <h4 className="each-description-title">US Sales Tax</h4>
          <div className="each-description-content">
            eShakti is committed to complying with the tax laws of the countries
            where we are doing business. We manage our tax compliance by relying
            on the advice of professionals to ensure that we obey the law and
            file returns and make payments to the appropriate tax authorities.
            Items purchased on eShakti.com and shipped to locations in the
            United States, may be subject to tax. The amount of sales tax we
            collect depends on the purchase price of the item, the type of item
            purchased, and the destination to which the purchased item is
            shipped. eShakti collects sales/use tax on sales of taxable products
            shipped to destinations in California, Colorado, Georgia, Hawaii,
            Illinois, Indiana, Iowa, Kansas, Kentucky, Maine, Maryland,
            Michigan, Nebraska, Nevada, North Carolina, North Dakota, Ohio,
            Oklahoma, South Carolina, South Dakota, Utah, Washington, West
            Virginia, Wisconsin, and Wyoming, unless the sale of the product is
            not taxable or the purchaser provides evidence indicating that it
            isn't required to pay sales tax on such purchases. The taxable total
            selling price of an item will generally include shipping charges and
            discounts. No tax will be collected on the purchase of gift cards,
            but purchases paid for with gift cards may be subject to tax as
            discussed above. eShakti does not collect sales or use tax, as it is
            not required to make such collections by law, on shipments to
            persons in states other than those listed above.
          </div>
        </div>
        <div className="each-description">
          <h4 className="each-description-title">US Customs Fees</h4>
          <div className="each-description-content">
            eShakti is committed to complying with the tax laws of the countries
            where we are doing business. We manage our tax compliance by relying
            on the advice of professionals to ensure that we obey the law and
            file returns and make payments to the appropriate tax authorities.
            Items purchased on eShakti.com and shipped to locations in the
            United States, may be subject to tax. The amount of sales tax we
            collect depends on the purchase price of the item, the type of item
            purchased, and the destination to which the purchased item is
            shipped. eShakti collects sales/use tax on sales of taxable products
            shipped to destinations in California, Colorado, Georgia, Hawaii,
            Illinois, Indiana, Iowa, Kansas, Kentucky, Maine, Maryland,
            Michigan, Nebraska, Nevada, North Carolina, North Dakota, Ohio,
            Oklahoma, South Carolina, South Dakota, Utah, Washington, West
            Virginia, Wisconsin, and Wyoming, unless the sale of the product is
            not taxable or the purchaser provides evidence indicating that it
            isn't required to pay sales tax on such purchases. The taxable total
            selling price of an item will generally include shipping charges and
            discounts. No tax will be collected on the purchase of gift cards,
            but purchases paid for with gift cards may be subject to tax as
            discussed above. eShakti does not collect sales or use tax, as it is
            not required to make such collections by law, on shipments to
            persons in states other than those listed above.
          </div>
        </div>
      </div>
    </div>
  );
}
