import { imageMain } from "../data/hotelData";

function MainPage() {
  return (
    <>
    <h1>Welcome</h1>
      <section className="cards" />
      <section className="tabla">  
        <form className="main-form">
          <label htmlFor="TMain">Activities and more:</label>
         {imageMain.map((BeachMain, index) => (
                <article className="card" id={`BeachMain${index + 1}`} key={BeachMain.name}>
                  <img src={BeachMain.image} alt={`BeachMain ${index + 1}`} />
                 
                </article>
              ))}
               
        </form>
  <h1>fvuioiwegofegouwfegofweufwe</h1>

      </section>                         
    </>
  );
}

export default MainPage;
