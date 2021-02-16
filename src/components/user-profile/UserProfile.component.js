import React, { useEffect, useState } from "react";
import "./userProfile.styles.scss";

export default function UserProfile() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("");

  async function getUserDetails() {
    try {
      let userDetails = await JSON.parse(
        localStorage.getItem("es_user_details")
      );

      if (userDetails !== null) {
        setName(userDetails.name || "");
        setCountry(userDetails.country || "");
        setPhone(userDetails.phone);
        setEmail(userDetails.email);
      }
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getUserDetails();
  }, []);

  return (
    <>
      <div className="personal-info-slot">
        <div className="profile-img">
          <img
            src="https://randomuser.me/api/portraits/men/79.jpg"
            width={100}
            height={100}
            alt=""
          />

          <button className="change-profile-pic-btn">change profile pic</button>
        </div>

        <form>
          <div className="input-control-inline">
            <div className="email common">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                name="email"
              />
            </div>

            <div className="country common">
              <label htmlFor="country">Country</label>
              <input
                type="text"
                name="country"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
              />
            </div>
          </div>
          <div className="input-control-inline">
            <div className="name common">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="password common">
              <label htmlFor="number">Phone</label>
              <input
                type="text"
                name="number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
          </div>

          <div className="btn">
            <button type="submit">Update</button>
          </div>
        </form>
      </div>
    </>
  );
}
