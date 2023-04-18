import "./StartScreen.css"

const StartScreen = ({ startGame }) => {
    return (
        <div className="start">
            <h1>Game</h1>
            <p>Clique Abaixo para começar a jogar</p>
            <button onClick={startGame}>Começar o jogo</button>
        </div>
    )
}

export default StartScreen