function ReservationPage() {
  return (
    <>
    <h2>Reservation Rooms</h2>
      <section className="cards" />
      <section className="tabla">  
        <form className="reservation-form">
          <label htmlFor="fname">First name:</label>
          <input type="text" id="fname" name="fname" />

          <label htmlFor="lname">Last name:</label>
          <input type="text" id="lname" name="lname" />

           <label htmlFor="fname">Adultos:</label>
          <input type="text" id="fname" name="fname" />

          <label htmlFor="lname">Kids:</label>
          <input type="text" id="lname" name="lname" />
        </form>
      </section>
    </>
  );
}

export default ReservationPage;
