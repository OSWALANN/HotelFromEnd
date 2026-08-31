import { rooms, roomStatuses } from "../data/hotelData.js";

function RoomsPage() {
  return (
    <>
      <section className="tablas">
        <div className="search-content">
          <i className="bx bx-search" />
          <input type="search" placeholder="search" />
        </div>

        <div className="card-estado">
          <h3>ESTADO DE HABITACIONES</h3>
          <div className="estados">
            {roomStatuses.map((status) => (
              <div className="estado" key={status.label}>
                <div className={`icono ${status.className}`}>{status.symbol}</div>
                <div>
                  <span>{status.label}</span>
                  <h2>{status.value}</h2>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cards">
        {rooms.map((room, index) => (
          <article className="card" id={`hab${index + 1}`} key={room.name}>
            <img src={room.image} alt={`habitacion ${index + 1}`} />
            <h2>{room.name}</h2>
            <p>habitacion con:</p>
          </article>
        ))}
      </section>
    </>
  );
}

export default RoomsPage;
