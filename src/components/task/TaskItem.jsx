import PropTypes from 'prop-types';

function TaskItem({ id, name, completed=false, onClickCompleted }) {
  const handleChange = () => {
    onClickCompleted(id);
  };

  return (
    <li className={completed ? "tachado" : null}>
      <input id={id} type="checkbox" checked={completed} onChange={handleChange} />
      {name}
    </li>
  );
}

TaskItem.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string,PropTypes.number]).isRequired,
  name: PropTypes.string.isRequired,
  completed: PropTypes.bool,
  onClickCompleted: PropTypes.func.isRequired
}

export default TaskItem;