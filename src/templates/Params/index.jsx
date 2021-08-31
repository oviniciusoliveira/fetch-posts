import { useParams } from 'react-router';

function Params() {
  const params = useParams();
  return (
    <div className="container">
      {Object.entries(params).length > 0 ? (
        <>
          <h2>Param slug recebido: {params.slug}</h2>
          <h2>Param id recebido: {params.id}</h2>
        </>
      ) : (
        <h2>Nenhum param recebido</h2>
      )}
    </div>
  );
}

export default Params;
