import { imageMain } from "../data/hotelData";

function MainPage() {
  return (
    <>
      <h1>Welcome</h1>

      <section className="tabla">

        <form className="main-form">

          <label htmlFor="TMain">
            Activities and more:
          </label>

          <div className="activity-content">

            {imageMain.map((BeachMain, index) => (
              <article
                className="card"
                id={`BeachMain${index + 1}`}
                key={BeachMain.name}
              >
                <img
                  src={BeachMain.image}
                  alt={`BeachMain ${index + 1}`}
                />
              </article>
            ))}

            <div className="main-form-activity">
              <h3>fvuiiowegofegouwfegofweufwe</h3>

              <p>
                Description of the activity...
              </p>
            </div>

          </div>

        </form>

      </section>
    </>
  );
}

export default MainPage;