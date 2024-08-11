import React, { useEffect, useRef, useState } from 'react';
import './Maze.css';

const Maze = () => {
  const canvasRef = useRef(null);
  const [playing, setPlaying] = useState(true);
  const [moves, setMoves] = useState(0);
  const [timeLeft, setTimeLeft] = useState(45);
  const [modalContent, setModalContent] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  
  const m = useRef(new MazeGenerator(10, 10)).current; 
  
  const initializeMaze = () => {
    m.init();
    m.add_edges();
    m.gen_maze();
    setMoves(0);
    setTimeLeft(45);
    setPlaying(true);
  };

  const startTimer = () => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          handleGameOver();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return timer;
  };

  const handleGameOver = () => {
    setPlaying(false);
    setModalContent('Jogo Acabou!!');
    setModalVisible(true);
  };

  const handleWin = () => {
    setPlaying(false);
    setModalContent('Parabéns! Você ganhou!!');
    setModalVisible(true);
  };

  useEffect(() => {
    initializeMaze();
    const timer = startTimer();
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      m.draw_canvas(ctx);
      if (m.checker()) handleWin();
    };

    const handleKeyDown = (evt) => {
      if (!playing) return;
      switch (evt.keyCode) {
        case 38:
        case 87:
          m.moveup();
          break;
        case 40: 
        case 83:
          m.movedown();
          break;
        case 37: 
        case 65: 
          m.moveleft();
          break;
        case 39: 
        case 68: 
          m.moveright();
          break;
        default:
          break;
      }
      setMoves(m.getMoves());
      draw();
    };

    window.addEventListener('keydown', handleKeyDown);
    const interval = setInterval(draw, 100);

    return () => {
      clearInterval(interval);
      clearInterval(timer);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [playing]);

  return (
    <div >
    <div id="wrapper" style={{ margin: '0 auto' }}>
      <h1 id="heading" style={{ color: '#8A3274',  margin: '10px auto' }}>Ache a saída</h1>
      <div id="maze">
        <p style={{ textAlign: 'center', color: "black" }}>Encontre o caminho para sair do labirinto em 45 segundos!</p>
        <div id="c" style={{ textAlign: 'center', width: '10%', fontSize: 'large' }}>Moves: {moves}</div>
        <canvas ref={canvasRef} width="523" height="523" style={{ margin: '0 auto', display: 'block' }}></canvas>
        <div id="timerel" style={{ textAlign: 'center', width: '15%', fontSize: 'large' }}>Jogo acaba em: {timeLeft}</div>
      </div>
      {modalVisible && (
        <Modal 
          content={modalContent} 
          onClose={() => {
            setModalVisible(false);
            initializeMaze();
          }} 
          onRestart={() => {
            setModalVisible(false);
            initializeMaze();
          }} 
        />
      )}
    </div>
    </div>  
  );
};

const Modal = ({ content, onClose, onRestart }) => {
  return (
    <div id="myModal" className="modal" style={{ display: 'block' }}>
      <div className="modal-content">
        <div className="modal-header">
          <span className="close" onClick={onClose}>&times;</span>
          <h2 className="gamehead">{content}</h2>
        </div>
        <div className="modal-footer">
          <h2 style={{ cursor: 'pointer' }} onClick={onRestart}>Jogar novamente</h2>
        </div>
      </div>
    </div>
  );
};

class dsd {
  constructor(size) {
    this.N = size;
    this.P = new Array(this.N);
    this.R = new Array(this.N);
  }

  init() {
    for (let i = 0; i < this.N; i++) {
      this.P[i] = i;
      this.R[i] = 0;
    }
  }

  union(x, y) {
    let u = this.find(x);
    let v = this.find(y);
    if (this.R[u] > this.R[v]) {
      this.R[u] = this.R[v] + 1;
      this.P[u] = v;
    } else {
      this.R[v] = this.R[u] + 1;
      this.P[v] = u;
    }
  }

  find(x) {
    if (x === this.P[x]) return x;
    this.P[x] = this.find(this.P[x]);
    return this.P[x];
  }
}

class MazeGenerator {
  constructor(X, Y) {
    this.N = X;
    this.M = Y;
    this.S = 25;
    this.moves = 0;
    this.Board = new Array(2 * this.N + 1);
    this.EL = [];
    this.vis = new Array(2 * this.N + 1);
  }

  init() {
    for (let i = 0; i < 2 * this.N + 1; i++) {
      this.Board[i] = new Array(2 * this.M + 1);
      this.vis[i] = new Array(2 * this.M + 1).fill(0);
    }

    for (let i = 0; i < 2 * this.N + 1; i++) {
      for (let j = 0; j < 2 * this.M + 1; j++) {
        if (!(i % 2) && !(j % 2)) {
          this.Board[i][j] = '+';
        } else if (!(i % 2)) {
          this.Board[i][j] = '-'; 
        } else if (!(j % 2)) {
          this.Board[i][j] = '|'; 
        } else {
          this.Board[i][j] = ' '; 
        }
      }
    }


    this.Board[1][1] = '&'; 
  }

  add_edges() {
    for (let i = 0; i < this.N; i++) {
      for (let j = 0; j < this.M; j++) {
        if (i !== this.N - 1) {
          this.EL.push([[i, j], [i + 1, j], 1]);
        }
        if (j !== this.M - 1) {
          this.EL.push([[i, j], [i, j + 1], 1]);
        }
      }
    }
  }

  randomize(EL) {
    for (let i = EL.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [EL[i], EL[j]] = [EL[j], EL[i]]; // Troca
    }
    return EL;
  }

  breakwall(e) {
    const x = e[0][0] + e[1][0] + 1;
    const y = e[0][1] + e[1][1] + 1;
    this.Board[x][y] = ' ';
  }

  gen_maze() {
    this.EL = this.randomize(this.EL);
    const D = new dsd(this.M * this.M);
    D.init();
    

    for (const edge of this.EL) {
      const x = this.h(edge[0]);
      const y = this.h(edge[1]);
      
      if (D.find(x) !== D.find(y)) {
        D.union(x, y);
        this.breakwall(edge);
      }
    }
    
    this.Board[2 * this.N][2 * this.M - 1] = ' ';
  }
  
  draw_canvas(ctx) {
    const scale = this.S;
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.fillStyle = '#0b052d';
    

    for (let i = 0; i < 2 * this.N + 1; i++) {
      for (let j = 0; j < 2 * this.M + 1; j++) {
        if (this.Board[i][j] !== ' ') {
          ctx.fillRect(scale * j, scale * i, scale, scale);
        }
      }
    }


    const playerPos = this.checkPos();
    ctx.fillStyle = "#ffbaba";
    ctx.fillRect(scale * playerPos[1], scale * playerPos[0], scale, scale);
  }

  checkPos() {
    for (let i = 0; i < 2 * this.N + 1; i++) {
      for (let j = 0; j < 2 * this.M + 1; j++) {
        if (this.Board[i][j] === '&') {
          return [i, j];
        }
      }
    }
    return [-1, -1];
  }

  move(direction) {
    const cord = this.checkPos();
    let i = cord[0];
    let j = cord[1];

    switch (direction) {
      case 'up':
        i -= 1;
        break;
      case 'down':
        i += 1;
        break;
      case 'left':
        j -= 1;
        break;
      case 'right':
        j += 1;
        break;
      default:
        return;
    }

    if (this.Board[i][j] === ' ') {
      this.Board[cord[0]][cord[1]] = ' ';
      this.Board[i][j] = '&';
      this.moves += 1;
    }
  }

  moveup() {
    this.move('up');
  }

  movedown() {
    this.move('down');
  }

  moveleft() {
    this.move('left');
  }

  moveright() {
    this.move('right');
  }

  checker() {
    const cord = this.checkPos();
    return (cord[0] === 2 * this.N && cord[1] === 2 * this.M - 1);
  }
  
  getMoves() {
    return this.moves;
  }

  h(e) {
    return e[1] * this.M + e[0];
  }
}

export default Maze;
