import { rooms, roomStatuses } from "../data/hotelData.js";

function RoomsPage() {
  return (
    <>
      {/* BUSCADOR + ESTADO */}
      <section className="tablas">

        <div className="search-content">
          <i className="bx bx-search" />
          <input
            type="search"
            placeholder="Search rooms..."
          />
        </div>

        <div className="room-card-estado">
          <h3>ROOM STATUS</h3>

          <div className="estados">
            {roomStatuses.map((status) => (
              <div className="estado" key={status.label}>

                <div className={`icono ${status.className}`}>
                  {status.symbol}
                </div>

                <div>
                  <span>{status.label}</span>
                  <h2>{status.value}</h2>
                </div>

              </div>
            ))}
          </div>
        </div>

      </section>


      {/* ENCABEZADO DE HABITACIONES */}
      <div className="rooms-header">
        <h2>Rooms</h2>
        <span>{rooms.length} rooms</span>
      </div>


      {/* HABITACIONES */}
      <section className="rooms-grid">

        {rooms.map((room, index) => (
          <article
            className="room-card"
            id={`hab${index + 1}`}
            key={room.name}
          >

            <img
              src={room.image}
              alt={`Habitación ${index + 1}`}
            />

            <div className="room-info">

              <div className="room-title">
                <h2>{room.name}</h2>

                <span className="room-status disponible">
                  Available
                </span>
              </div>

              <p>Habitación con:</p>

            </div>

          </article>
        ))}

      </section>
    </>
  );
}

export default RoomsPage;