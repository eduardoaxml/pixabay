import React from 'react';

const Paginacion = (props) =>{
    return(
        <div className="py-3">
            <button onClick={props.pagAnterior} type="button" className="btn btn-outline-info mr-1"><i className="fa fa-chevron-left" aria-hidden="true"></i> Anterior </button>
            <button onClick={props.pagSiguiente} type="button" className="btn btn-outline-info mr-1">Siguiente <i className="fa fa-chevron-right" aria-hidden="true"></i></button>
        </div>
    )
}

export default Paginacion;