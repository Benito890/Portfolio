import React, { useState, useEffect } from 'react';
import './ProjetCard.css';
import 'antd/dist/antd.css';
import boutonBas from '../../assets/logos-front/bouton-bas.png';
import { AiFillEye } from 'react-icons/ai';
import { ImGithub } from 'react-icons/im';

function ProjetCard (props) {
  const [image, setImage] = useState(props.picture1);
  const [openState, setOpenState] = useState(false);
  const [classDiv, setClassDiv] = useState('closed');
  const [rotateBouton, setRotateBouton] = useState('bouton-bas');

  const infoDiv = () => {
    if (openState) {
      setClassDiv('open');
      setRotateBouton('bouton-haut');
    } else {
      setClassDiv('closed');
      setRotateBouton('bouton-bas');
    }
  };

  const OpenClose = () => {
    setOpenState(!openState);
  };

  useEffect(() => {
    infoDiv();
  }, [openState]);

  return (
    <div data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="1100" id='grande-div'>
      <div id="card-container">
        <img id="lafleur" src={process.env.PUBLIC_URL + image} onMouseEnter={() => setImage(props.picture2)} onMouseLeave={() => setImage(props.picture1)}></img>
        <div id="moyenne-div">
          <div className='div-open-close'>
            <div id="entete">
              <h2 id="h2-card">{props.title}</h2>
              <p id="slogan">{props.slogan}</p>
            </div>
            <div id="title-logo">
              {props.website
                ? <a href={props.website} target="_blank" rel="noreferrer">
                  <button className='button-link'><AiFillEye id='icon-website'/>Website</button>
              </a>
                : ''
              }
              <a href={props.website} target="_blank" rel="noreferrer">
                  <button className='button-link'><ImGithub id='icon-github'/>Github</button>
              </a>
            </div>
          </div>
          <div id={classDiv}>
            <p><span>Description : </span>{props.description}</p>
            <p id="p-bas"><span>Technologies : </span> {props.technos}</p>
          </div>
          <div id="bouton-info">
            <a onClick={OpenClose}><img className="bouton-bas" id={rotateBouton} src={boutonBas}></img></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjetCard;
