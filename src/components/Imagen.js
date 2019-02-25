import React from 'react';

const Imagen = (props) =>{
    const{largeImageURL, likes, previewURL, tags, views} = props.imagen; //distroc
    const divStyleIm = {
        backgroundImage: 'url(' + previewURL + ')',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        height: '150px'
    };
    return(
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <div className="card border-success">
                <div style={divStyleIm}></div>
                
                <div className="card-body">
                
                    <p className="card-text text-primary"><i className="fa fa-thumbs-up" aria-hidden="true"></i> {likes}</p>
                    <p className="card-text text-success "><i className="fa fa-eye" aria-hidden="true"></i> {views}</p>
                    <a href={largeImageURL} target="_blank" rel="noopener noreferrer" className="btn btn-outline-success btn-block">Ver imagen</a>
                   
                </div>
            </div>
        </div>
    );
}
export default Imagen;
