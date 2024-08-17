import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importa o hook useNavigate
import styles from './login.module.css';
import EC from '../../../assets/img-autismo/ec.png';


const LoginJogo = () => {
  const [inputValue, setInputValue] = useState('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const navigate = useNavigate(); // Inicializa o hook useNavigate

  const validateInput = (e) => {
    const value = e.target.value;
    setInputValue(value);
    setIsButtonDisabled(value.length <= 3);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('player', inputValue);
    navigate('/autismo/Memory'); // Navega para a página Memory
  };

 return (
  <div className={styles.login_form}>
    <div className={styles.login__header}>
      <img src={EC} alt="logo" />
      <h1>Jogo da Memória - ETS</h1>
    </div>
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        className={styles.login__input}
        value={inputValue}
        onChange={validateInput}
      />
      <button
        type="submit"
        className={styles.login__button}
        disabled={isButtonDisabled}
      >
        Play
      </button>
    </form>
  </div>
);

};

export default LoginJogo;
