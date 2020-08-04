import React from 'react';

import whatsappIcon from  '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars0.githubusercontent.com/u/9096404?s=460&v=4" alt="Robson"/>
                <div>
                    <strong>Robson H. Rodrigues</strong>
                    <span>Lorem Ipsum</span>
                </div>
            </header>

            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae ipsum laoreet, semper tortor eget, vulputate neque. Aliquam pellentesque libero eget condimentum finibus. Maecenas auctor tellus in ornare finibus. Duis pretium lectus quis dignissim dignissim. Pellentesque iaculis urna ut nunc interdum bibendum. Nam congue efficitur odio, et ultricies augue euismod eu. Nam rhoncus viverra consequat. Phasellus nisl ligula, consectetur ut ipsum vel, accumsan rhoncus eros. Duis et quam eu lorem elementum suscipit. Vestibulum lobortis a dolor vitae euismod. Ut quis lobortis ante. Aenean a tellus tincidunt, molestie ipsum eget, tincidunt sem. Curabitur pellentesque dignissim tortor, at varius neque. Fusce accumsan felis ut quam scelerisque sagittis.
            </p>

            <footer>
                <p>
                    Preço/Hora
                    <strong>R$ 20,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp"/>
                    Entrar em contato
                </button>
            </footer>
        </article>
    );
}

export default TeacherItem;