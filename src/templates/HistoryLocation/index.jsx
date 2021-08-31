import { useHistory, useLocation } from 'react-router';

function HistoryLocation() {
  const location = useLocation();
  const history = useHistory();

  return (
    <div className="container">
      <h1>History/Location</h1>
      <ul>
        <li>Location pathname: {location.pathname}</li>
        <li
          onClick={() => {
            history.push('/');
          }}
        >
          Redirecionar com o history: Click!
        </li>
      </ul>
    </div>
  );
}

export default HistoryLocation;
