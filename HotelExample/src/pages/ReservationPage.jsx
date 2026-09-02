import { useState } from "react";

function ReservationPage() {
  const [adults, setAdults] = useState(1);
  const [kids, setKids] = useState(0);
  const [pets, setPets] = useState(0);

  return (
    <>
      <div className="reservation-header">
        <h1>Reservation</h1>
        <p>Reservation Rooms</p>
      </div>

      <section className="reservation-container">

        {/* First name */}
        <div className="reservation-field">
          <label htmlFor="firstName">First name:</label>

          <input
            id="firstName"
            type="text"
            placeholder="Enter first name"
          />
        </div>

        {/* Last name */}
        <div className="reservation-field">
          <label htmlFor="lastName">Last name:</label>

          <input
            id="lastName"
            type="text"
            placeholder="Enter last name"
          />
        </div>

        {/* Email */}
        <div className="reservation-field">
          <label htmlFor="email">Email:</label>

          <input
            id="email"
            type="email"
            placeholder="Enter email"
          />
        </div>

        {/* Phone */}
        <div className="reservation-field">
          <label htmlFor="phone">Phone:</label>

          <input
            id="phone"
            type="tel"
            placeholder="Enter phone number"
          />
        </div>

        {/* Adults */}
        <div className="reservation-field">
          <label>Adults:</label>

          <div className="number-selector">

            <button
              type="button"
              onClick={() =>
                setAdults(Math.max(1, adults - 1))
              }
            >
              −
            </button>

            <span>{adults}</span>

            <button
              type="button"
              onClick={() =>
                setAdults(adults + 1)
              }
            >
              +
            </button>

          </div>
        </div>

        {/* Kids */}
        <div className="reservation-field">
          <label>Kids:</label>

          <div className="number-selector">

            <button
              type="button"
              onClick={() =>
                setKids(Math.max(0, kids - 1))
              }
            >
              −
            </button>

            <span>{kids}</span>

            <button
              type="button"
              onClick={() =>
                setKids(kids + 1)
              }
            >
              +
            </button>

          </div>
        </div>

        {/* Pets */}
        <div className="reservation-field">
          <label>Pets:</label>

          <div className="number-selector">

            <button
              type="button"
              onClick={() =>
                setPets(Math.max(0, pets - 1))
              }
            >
              −
            </button>

            <span>{pets}</span>

            <button
              type="button"
              onClick={() =>
                setPets(pets + 1)
              }
            >
              +
            </button>

          </div>
        </div>

        {/* Car */}
        <div className="reservation-field">
          <label htmlFor="car">Car:</label>

          <input
            id="car"
            type="text"
            placeholder="License plate / car"
          />
        </div>

        {/* Button */}
        <div className="reservation-actions">
          <button
            type="button"
            className="reservation-button"
          >
            Reserve Room
          </button>
        </div>

      </section>
    </>
  );
}

export default ReservationPage;