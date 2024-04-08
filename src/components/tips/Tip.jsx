import listOlSolid from '../../images/list-ol-solid.svg'
import lightBulb from '../../images/lightbulb-regular.svg'
import objectRegular from '../../images/object-ungroup-regular.svg'
import clockRegular from '../../images/clock-regular.svg'
import repeatSolid from '../../images/repeat-solid.svg'
function Tip() {
    return (
      <div>
        <li className="tips-item">
                    <img src={listOlSolid} alt=""/>
                    <p>Pon en los primeros puestos de la lista dos objetivos importantes que necesites cumplir hoy. Así
                        te aseguras de que no vas a perder el tiempo en tareas intrascendentes o falsamente productivas.
                    </p>
                </li>
                <li className="tips-item">
                    <img src={lightBulb} alt=""/>
                    <p>Empieza con cosas fáciles. Antes de esos objetivos importantes, incluye algunas tareas sencillas
                        para empezar tu jornada diaria.</p>
                </li>
                <li className="tips-item">
                    <img src={objectRegular} alt=""/>
                    <p>Divide las tareas. Un clásico de los métodos de organización es dividir los proyectos más
                        complejos en pequeñas tareas con hitos y metas a corto plazo.</p>
                </li>
                <li className="tips-item">
                    <img src={clockRegular} alt=""/>
                    <p>Organiza la planificación. Una de las cosas más complicadas es precisamente preparar la lista
                        todos los días. Así que a primera hora dal día puedes dedicar un tiempo para organizar tus
                        tareas.</p>
                </li>
                <li className="tips-item">
                    <img src= {repeatSolid} alt=""/>
                    <p>Prepara una lista nueva todos los días. No dejes que las mismas tareas se atasquen de un día para
                        otro.</p>
                </li>
      </div>
    )
  }
  
  export default Tip