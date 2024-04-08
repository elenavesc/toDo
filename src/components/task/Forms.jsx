import PropTypes from 'prop-types';

function Form({ onInput, onClickAdd, newTaskValue }) {

  const handleInput = (event) => {
    onInput( event.currentTarget.value );
  };

  const handleClick = (event) => {
    event.preventDefault();
    onClickAdd();
  }

  return (
    <section className="container add ">
      <form className="task-form-add">
        <input
          type="text"
          className="task-input js-text-task-add"
          placeholder="Nueva tarea"
          value={newTaskValue}
          onInput={handleInput}
        />
        <button className="add-task-btn js-btn-add" onClick={handleClick}>
          Agregar
        </button>
      </form>
    </section>
  );
}

Form.propTypes = {
  onInput: PropTypes.func.isRequired,
  onClickAdd:PropTypes.func.isRequired,
  newTaskValue: PropTypes.string.isRequired
}

export default Form;