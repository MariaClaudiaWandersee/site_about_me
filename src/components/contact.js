import { AiFillGithub } from 'react-icons/ai';
import { FaLinkedin } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import { AiOutlineInstagram } from 'react-icons/ai';
import { useState as UseState, useRef as UseRef } from "react";
import Modal from './modal';
import curriculo from './img/curriculo.jpg';

function contact (){
    const [isModalVisible, setIsModalVisible] = UseState(false);
    return (
        <div className="row">
            <div className="contato col-md-12">
                <h1 className="title_big_cont">
                    Gostou do que viu? Se interssou?
                    <br/>
                    Contate-me para que possamos conversar.
                </h1>
            </div>
            <div className="contatos_redes">
                <p className="email">
                    < AiOutlineMail />&nbsp;&nbsp;
                    <a href="https://mail.google.com/mail/u/0/#inbox">
                       mariaaclaudiaa2401@gmail.com 
                    </a>
                </p>
                <p className="instagram">
                    < AiOutlineInstagram />&nbsp;&nbsp;
                    <a href="https://www.instagram.com/mariaclaudiawandersee/">
                       instagram/mariaclaudiawandersee
                    </a>
                </p>
                <p className="github">
                    < AiFillGithub />&nbsp;&nbsp;
                    <a href="https://github.com/MariaClaudiaWandersee">
                        github.com/MariaClaudiaWandersee 
                    </a>
                </p>
                <p className="linkedin">
                    < FaLinkedin />&nbsp;&nbsp;
                    <a href="https://www.linkedin.com/in/maria-claudia-de-britto-wandersee-675381208/">
                        linkedin.com/mariaclaudiadebrittowandersee
                    </a>
                </p>
            </div>
            <div className='button_modal'>
                <button className='btn_visu' onClick={() => setIsModalVisible(true)}>
                    Clique aqui para visualizar meu currículo em PDF
                </button>
                {isModalVisible ? (
                    <Modal onClose={() => setIsModalVisible(false)}>
                        <img id='print' className='curriculo_img' src={curriculo}/>                       
                    </Modal>
                ) : null }
            </div>
        </div>
    );
}

export default contact;