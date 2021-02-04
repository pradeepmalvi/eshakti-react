import React, { useEffect } from "react";
import "./privacy-and-policy.styles.scss";

export default function PrivacyAndPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="privacy-policy">
      <h1 className="main-title">PRIVACY</h1>
      <div className="description-content">
        <div className="each-description">
          <h4 className="each-description-title">Privacy</h4>
          <div className="each-description-content">
            Registering with us is entirely voluntary on your part. And all
            information collected from you when you buy at eShakti.com is used
            mainly to effect shipment and to keep you informed about the status
            of your order. It may also be used to identify groups of similar
            respondents for statistical purposes. If you sign up to receive
            regular email updates from us, or for any of the other services
            offered on the site, the information so provided will be used
            strictly for the purpose/s intended. Occasionally, we will send you
            email with information about new products and offers on our site,
            but you will always have the option of declining to receive such
            information. Other than to Stripe and your card issuer's bank for
            credit card validation, under no circumstances will information
            submitted by you be divulged to any third party for any reason
            whatsoever. And that's a promise!
          </div>
        </div>
        <div className="each-description">
          <h1 className="main-title">TERMS OF USE</h1>
          <h4 className="each-description-title">
            User and Blogger Submissions
          </h4>
          <div className="each-description-content">
            You may post or upload content you have created, including without
            limitation, photographs, your social media handle, videos, and
            comments (collectively, “User and Blogger Submissions”) to your
            social media accounts. By posting and uploading User and Bloggers
            Submissions that you have tagged with #eShakti or other eShakti
            brand hashtags or that you have featured free samples from eShakti
            as part of our blogger outreach programs, you grant to eShakti.com
            LLC, its third-party service providers who provide content
            management services, and its retail partners (collectively, the
            “Licensed Parties”) the perpetual, irrevocable, royalty-free,
            fully-paid, non-exclusive, transferable right to use your
            eShakti-tagged User and Blogger Submissions in any manner to be
            determined in the Licensed Parties’ sole discretion, including but
            not limited to on their webpages, social media pages operated by
            eShakti, and in other marketing, promotional and advertising
            initiatives, in any media now or hereafter known. eShakti may use,
            display, reproduce, distribute, transmit, create derivative works
            from, combine with other materials, alter and/or edit your User and
            Blogger Submissions in any manner in its sole discretion, with no
            obligation to you whatsoever. You grant the Licensed Parties the
            right to use your username, real name, image, likeness, caption,
            location or other identifying information in connection with any use
            of your User and Blogger Submissions. You hereby represent and
            warrant that (i) you own all rights in and to your User and Blogger
            Submissions, (ii) you have permission from all person(s) appearing
            in your User and Blogger Submissions to grant the rights granted
            herein; (iii) you are not a minor, and (iv) the Licensed Parties’
            use of your User and Blogger Submissions as described herein will
            not violate the rights of any third party or any law. You hereby
            release, discharge and agree to hold eShakti, the Licensed Parties,
            and any person acting on eShakti’s or their behalf harmless from any
            liability related in any way to the Licensed Parties’ use of your
            User and Blogger Submissions.
          </div>
        </div>
        <div className="each-description">
          <h1 className="main-title">SECURITY</h1>

          <h4 className="each-description-title">Security</h4>
          <div className="each-description-content">
            eShakti is associated with Stripe - a trusted third party credit
            card authorizing agency, to ensure the security of your credit card
            information. Whenever you are ready to buy at eShakti, you will
            automatically enter the secure server at Stripe Credit card
            information is entered by you within the secure server, and this is
            encrypted using 128 bit Secure Socket Layer (SSL) technology - the
            current state of the art for Internet security. The information is
            sent to your card issuer's bank over a secure, proprietary
            connection. When the authorization process is complete - this takes
            around five seconds - you receive an approval or decline response in
            your browser, and we are informed appropriately to initiate the
            shipping process. That's how concerned we are of your security. More
            Information Choose a link below for more information on our
            services:
          </div>
        </div>
      </div>
    </div>
  );
}
