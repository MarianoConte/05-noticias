import React from 'react';
import PropTypes from 'prop-types';

const Noticia = (props) => {
    const {urlToImage, url, title, description, source} = props.noticia;

    const imagen = (urlToImage) ?
    <div className="card-image">
    <img src={urlToImage} alt={title}/>
    <span className="card-title">{source.name}</span>
    </div>
    :'';

    return (
        <div className="col s6 l4">
            <div className="card">
               
                    {imagen}
                
                <div className="card-content">
                    <h3>{title}</h3>
                    <p>{description}</p>
                </div>
                <div className="card-action">
                    <a href={url} target="_blank" className="waves-effect waves-light btn">
                    Noticia completa
                    </a>
                </div>
            </div>
        </div>
    );
};

Noticia.propTypes = {
    noticia: PropTypes.shape({
        noticia: PropTypes.string,
        url: PropTypes.string,
        title: PropTypes.string,
        description: PropTypes.string,
        source: PropTypes.object
    }).isRequired
}

export default Noticia;