import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/header/Header';
import Footer from "../../components/footer/Footer";
import styles from './index.module.css';
import Calendar from './calendar';  // Certifique-se de que o caminho está correto
import Calmigo from "../../assets/calmigo.png";
import ImgDepressao from '../../assets/depressao (1).png';
import ImgAnsiedade from '../../assets/ansiedade (1).png';
import ImgTranstornoPanico from '../../assets/panico.png';
import ImgTDA from '../../assets/tda.png';
import ImgAutismo from '../../assets/autismo.png';
import ImgTranstornoAlimentar from '../../assets/transtorno-alimentar.png';
import ImgPersonalidade from '../../assets/personalidade.png';
import ImgFobiaSocial from '../../assets/fobia-social.png';
import '@fortawesome/fontawesome-free/css/all.min.css';
import styleCalendar from './calendar.module.css';

export default function index() {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleButtonClick = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div>

            <Header/>
            <main className={styles.main}>
                <div className={styles.bannerTextTitle}>
                    <p>Conte com o CALMIGO para ser o<br />seu guia virtual</p>
                </div>
                <div className={styles.bannerImgBack}>
                    <div className={styles.bannerImg}>
                        <img src={Calmigo} alt="Calmigo" />
                    </div>
                </div>
                <div className={styles.bannerText}>
                    O CALMIGO está aqui para simplificar a sua navegação, criando um ambiente digital acolhedor e acessível, trabalhando incessantemente para proporcionar dinâmicas inovadoras que atendam às suas necessidades.
                </div>
                <div className={styles.middlenTitle}>
                    <p>A Saúde Não Pode Esperar</p>
                </div>
                <div className={styles.allCards}>
                    <Link to="/depressao">
                        <div className={styles.firstCard}>
                            <img src={ImgDepressao} alt="Imagem de ícone de depressão" />
                            <p>Depressão</p>
                        </div>
                    </Link>
                    <Link to="/ansiedade">
                        <div className={styles.firstCard}>
                            <img src={ImgAnsiedade} alt="Imagem de ícone de depressão" />
                            <p>Ansiedade</p>
                        </div>
                    </Link>
                    <Link to="/transtorno_panico">
                        <div className={styles.firstCard}>
                            <img src={ImgTranstornoPanico} alt="Imagem de ícone de depressão" />
                            <p>Transtorno</p>
                            <p>do Pânico</p>
                        </div>
                    </Link>
                    <Link to="/tda">
                        <div className={styles.firstCard}>
                            <img src={ImgTDA} alt="Imagem de ícone de depressão" />
                            <p>TDA</p>
                        </div>
                    </Link>
                </div>
                <div className={styles.allCards}>
                    <Link to="/autismo">
                        <div className={styles.firstCard}>
                            <img src={ImgAutismo} alt="Imagem de ícone de depressão" />
                            <p>Autismo</p>
                        </div>
                    </Link>
                    <Link to="/transtorno_alimentar">
                        <div className={styles.firstCard}>
                            <img src={ImgTranstornoAlimentar} alt="Imagem de ícone de depressão" />
                            <p>Transtorno</p>
                            <p>Alimentar</p>
                        </div>
                    </Link>
                    <Link to="/transtorno_personalidade">
                        <div className={styles.firstCard}>
                            <img src={ImgPersonalidade} alt="Imagem de ícone de depressão" />
                            <p>Transtorno</p>
                            <p>de Personalidade</p>
                        </div>
                    </Link>
                    <Link to="/fobia_social">
                        <div className={styles.firstCard}>
                            <img src={ImgFobiaSocial} alt="Imagem de ícone de depressão" />
                            <p>Fobia</p>
                            <p>Social</p>
                        </div>
                    </Link>
                </div>
                {/*<div className={styles.middlenTitleSecond}>
                    <p>Converse com um especialista</p>
                </div>
                <Calendar />  // Adicione o componente Calendar aqui 
                <div className={styleCalendar.containerSecond}>
                    <div className={styleCalendar.text}><p>Horarios</p></div>    
                    <div className={styleCalendar.buttonContainer}>
                        <button type="submit">Agendar</button>
                    </div>
                </div>*/}
            </main>

            <Footer/>
            
        </div>
    );
}
