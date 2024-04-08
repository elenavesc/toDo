import Tip from "./Tip"
function TipsList() {
    return (
      <div>
        <section className="tips">
            Consejos para completar tus tareas sin procrastinar:
            <ul className="tips-list">
                <Tip/>   
            </ul>
        </section>
      </div>
    )
  }
  
  export default TipsList