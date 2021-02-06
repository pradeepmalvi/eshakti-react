import React, { useEffect } from "react";
import "./eshakti-sizes.styles.scss";

export default function EshaktiSizes() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="eshakti-sizes">
      <h2 className="main-title">eShakti Size and Fit Guide</h2>
      <div className="content">
        <div className="design-your-perfect-fit">
          <h4 className="each-description-title">Design your perfect fit</h4>
          <p className="each-description">
            It’s easy to customize any item that catches your eye at eShakti,
            from hemlines and necklines to sleeves! We only charge 12% of each
            garment’s list price to customize your favorite style and/or your
            perfect fit.
          </p>

          <p className="each-description">
            We’ve created the size and fit guide below to help you collect the
            right measurements for a great fit with your made-to-order item.
            Please be sure to follow our recommendations to ensure your item
            delights you and fits you properly when it arrives.
          </p>
        </div>

        <div className="size-chart">
          <h4 className="each-description-title">Size Chart</h4>
          <p className="each-description">
            eShakti offers full size selections for sizes 0-36W, and for all
            heights from Petite to Tall. You can match your measurements to
            those in the women's size chart below. The height field is mandatory
            while placing your order to ensure a successful basic custom fit.
          </p>
        </div>

        <div className="women-size-chart">
          <h4 className="each-description-title">
            Women's Size Chart (actual body measurements in inches)
          </h4>
          <div className="table">
            <table class="table desktop-size-chart" cellSpacing={0}>
              <tbody>
                <tr>
                  <td rowspan="2" width="41" height="15">
                    SIZE
                  </td>
                  <td colspan="2" height="15" align="center">
                    XS
                  </td>
                  <td colspan="2" height="15" align="center">
                    S
                  </td>
                  <td colspan="2" height="15" align="center">
                    M
                  </td>
                  <td colspan="2" height="15" align="center">
                    L
                  </td>
                  <td colspan="2" height="15" align="center">
                    XL
                  </td>
                  <td colspan="2" height="15" align="center">
                    1X
                  </td>
                  <td colspan="2" height="15" align="center">
                    2X
                  </td>
                  <td colspan="2" height="15" align="center">
                    3X
                  </td>
                  <td colspan="2" height="15" align="center">
                    4X
                  </td>
                  <td colspan="2" height="15" align="center">
                    5X
                  </td>
                  <td width="41" height="15" align="center">
                    6X
                  </td>
                </tr>
                <tr>
                  <td width="41" height="29" align="center">
                    0
                  </td>
                  <td width="41" height="29" align="center">
                    2
                  </td>
                  <td width="41" height="29" align="center">
                    4
                  </td>
                  <td width="41" height="29" align="center">
                    6
                  </td>
                  <td width="41" height="29" align="center">
                    8
                  </td>
                  <td width="41" height="29" align="center">
                    10
                  </td>
                  <td width="41" height="29" align="center">
                    12
                  </td>
                  <td width="41" height="29" align="center">
                    14
                  </td>
                  <td width="41" height="29" align="center">
                    16
                  </td>
                  <td width="41" height="29" align="center">
                    18
                  </td>
                  <td width="41" height="29" align="center">
                    16W
                  </td>
                  <td width="41" height="29" align="center">
                    18W
                  </td>
                  <td width="41" height="29" align="center">
                    20W
                  </td>
                  <td width="41" height="29" align="center">
                    22W
                  </td>
                  <td width="41" height="29" align="center">
                    24W
                  </td>
                  <td width="41" height="29" align="center">
                    26W
                  </td>
                  <td width="41" height="29" align="center">
                    28W
                  </td>
                  <td width="41" height="29" align="center">
                    30W
                  </td>
                  <td width="41" height="29" align="center">
                    32W
                  </td>
                  <td width="41" height="29" align="center">
                    34W
                  </td>
                  <td width="41" height="29" align="center">
                    36W
                  </td>
                </tr>
                <tr>
                  <td class="newborder3 pl-1" width="41" height="25">
                    Bust
                  </td>
                  <td width="41" height="25" align="center">
                    32
                  </td>
                  <td width="41" height="25" align="center">
                    33
                  </td>
                  <td width="41" height="25" align="center">
                    34
                  </td>
                  <td width="41" height="25" align="center">
                    35
                  </td>
                  <td width="41" height="25" align="center">
                    36
                  </td>
                  <td width="41" height="25" align="center">
                    37
                  </td>
                  <td width="41" height="25" align="center">
                    38.5
                  </td>
                  <td width="41" height="25" align="center">
                    40
                  </td>
                  <td width="41" height="25" align="center">
                    41.5
                  </td>
                  <td width="41" height="25" align="center">
                    43.5
                  </td>
                  <td width="41" height="25" align="center">
                    43
                  </td>
                  <td width="41" height="25" align="center">
                    45
                  </td>
                  <td width="41" height="25" align="center">
                    47
                  </td>
                  <td width="41" height="25" align="center">
                    49
                  </td>
                  <td width="41" height="25" align="center">
                    51
                  </td>
                  <td width="41" height="25" align="center">
                    53
                  </td>
                  <td width="41" height="25" align="center">
                    55
                  </td>
                  <td width="41" height="25" align="center">
                    57
                  </td>
                  <td width="41" height="25" align="center">
                    60
                  </td>
                  <td width="41" height="25" align="center">
                    63
                  </td>
                  <td width="41" height="25" align="center">
                    66
                  </td>
                </tr>
                <tr>
                  <td class="newborder3 pl-1" width="41" height="31">
                    Waist
                  </td>
                  <td width="41" height="31" align="center">
                    25
                  </td>
                  <td width="41" height="31" align="center">
                    26
                  </td>
                  <td width="41" height="31" align="center">
                    27
                  </td>
                  <td width="41" height="31" align="center">
                    28
                  </td>
                  <td width="41" height="31" align="center">
                    29
                  </td>
                  <td width="41" height="31" align="center">
                    30
                  </td>
                  <td width="41" height="31" align="center">
                    31.5
                  </td>
                  <td width="41" height="31" align="center">
                    33
                  </td>
                  <td width="41" height="31" align="center">
                    34.5
                  </td>
                  <td width="41" height="31" align="center">
                    36.5
                  </td>
                  <td width="41" height="31" align="center">
                    36
                  </td>
                  <td width="41" height="31" align="center">
                    38
                  </td>
                  <td width="41" height="31" align="center">
                    40
                  </td>
                  <td width="41" height="31" align="center">
                    42
                  </td>
                  <td width="41" height="31" align="center">
                    44
                  </td>
                  <td width="41" height="31" align="center">
                    46
                  </td>
                  <td width="41" height="31" align="center">
                    48
                  </td>
                  <td width="41" height="31" align="center">
                    50
                  </td>
                  <td width="41" height="31" align="center">
                    53
                  </td>
                  <td width="41" height="31" align="center">
                    56
                  </td>
                  <td width="41" height="31" align="center">
                    59
                  </td>
                </tr>
                <tr>
                  <td class="newborder3 pl-1" width="41" height="30">
                    Hip
                  </td>
                  <td width="41" height="30" align="center">
                    35
                  </td>
                  <td width="41" height="30" align="center">
                    36
                  </td>
                  <td width="41" height="30" align="center">
                    37
                  </td>
                  <td width="41" height="30" align="center">
                    38
                  </td>
                  <td width="41" height="30" align="center">
                    39
                  </td>
                  <td width="41" height="30" align="center">
                    40
                  </td>
                  <td width="41" height="30" align="center">
                    41.5
                  </td>
                  <td width="41" height="30" align="center">
                    43
                  </td>
                  <td width="41" height="30" align="center">
                    44.5
                  </td>
                  <td width="41" height="30" align="center">
                    46.5
                  </td>
                  <td width="41" height="30" align="center">
                    46
                  </td>
                  <td width="41" height="30" align="center">
                    48
                  </td>
                  <td width="41" height="30" align="center">
                    50
                  </td>
                  <td width="41" height="30" align="center">
                    52
                  </td>
                  <td width="41" height="30" align="center">
                    54
                  </td>
                  <td width="41" height="30" align="center">
                    56
                  </td>
                  <td width="41" height="30" align="center">
                    58
                  </td>
                  <td width="41" height="30" align="center">
                    60
                  </td>
                  <td width="41" height="30" align="center">
                    63
                  </td>
                  <td width="41" height="30" align="center">
                    66
                  </td>
                  <td width="41" height="30" align="center">
                    69
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="providing-your-measurement">
          <h4 className="each-description-title">
            Providing your measurements
          </h4>
          <p className="each-description">
            When you choose your item, you’ll have the option to enter your body
            measurements. Don’t worry, we don’t style and tell -- your details
            won’t be shared with anyone else!
          </p>
          <p className="each-description">
            We recommend that you do not round your measurements up or down to
            adjust your fit based on the silhouette of the item as it’s
            displayed on the site. Trust us – our team understands the cut and
            pattern of our styles inside and out, so you’ll always get the best
            results if you provide your exact measurements as they are. We also
            welcome an email from you with any special sizing or styling
            instructions for your order.
          </p>
        </div>

        <div className="before-you-start">
          <h4 className="each-description-title">Before you start: </h4>
          <p className="each-description">
            Be sure to measure over the undergarments you plan to wear when you
            wear the item Keep your tape measure level and close, and don’t pull
            it too tight. If possible, have a friend or family member measure
            you – it's more accurate!
          </p>

          <h6 className="subheading">Shoulder:-</h6>
          <p className="each-description">
            Measure across your upper back from the tip of one shoulder to the
            tip of the other. Stand tall with your chin parallel to the floor
            and your shoulders back – try not to hunch!
          </p>
          <h6 className="subheading">Chest:-</h6>
          <p className="each-description">
            With your arms relaxed at your sides, measure above the bust at the
            armpits, keeping the tape parallel to the floor. Circle the tape
            around your back over your shoulder blades. Be sure to go all the
            way around your body.
          </p>

          <h6 className="subheading">Bust:-</h6>
          <p className="each-description">
            Wearing your bra and with your arms relaxed at your sides, measure
            the fullest part of your bust, keeping the tape parallel to the
            floor, under the armpit and around your back at about the same
            location as the middle of your bra-line.
          </p>
          <h6 className="subheading">Under-bust:-</h6>
          <p className="each-description">
            Measure all the way around your torso immediately beneath your bust.
          </p>
          <h6 className="subheading">Waist:-</h6>
          <p className="each-description">
            Measure around the narrowest part of your torso at your natural
            waistline. To find your natural waistline, bend to one side. There
            will usually be a crease where you bend. Often it is just below your
            ribcage: that's your natural waistline. (Don't worry if this seems
            higher than where you actually wear your pants and jeans.) Keep the
            tape measure parallel to the floor as you measure all the way around
            your torso.
          </p>
          <h6 className="subheading">Hips:-</h6>
          <p className="each-description">
            Standing with your heels together, measure around your body at the
            broadest part of your hips.This will include the fullest part of
            your backside, too and should be just about where your legs meets
            your torso (this is approximately 8" below natural waistline).
          </p>
          <h6 className="subheading">Upper arm:-</h6>
          <p className="each-description">
            Place the tape measure around the widest part of your upper arm,
            your bicep. Then bend your arm slightly at the elbow. This
            measurement ensures you’ll be able to bend your arms in the sleeves
            and fit your arms through the armholes of the item.
          </p>

          <h6 className="subheading">Height:-</h6>
          <p className="each-description">
            Standing with your feet slightly apart and your back to a wall,
            measure straight from the floor to the top of your head.
          </p>
          <h6 className="subheading">Bra cup size:-</h6>
          <p className="each-description">
            Be sure to check the tag on your favorite bra for your bra and cup
            size.
          </p>
        </div>

        <div className="get-help-with-order">
          <h4 className="each-description-title">Get help with your order</h4>
          <h6 className="subheading">Call toll-free:-</h6>
          <div className="contacts">
            <span>1 (855) ESH AKTI (374 2584)</span>
            <span>Mon-Fri, 8 am - 4 pm PST</span>
          </div>
          <h6 className="subheading">Or email us:-</h6>
          <div className="email">
            <span>customerchampion@eshakti.com</span>
          </div>
        </div>
      </div>
    </div>
  );
}
