import { PlayerCardContainer } from "./styles";

export default function PlayerCard({ player, result }: { player: {name: string, games: string[]}, result: string[] }) {
  return <PlayerCardContainer>
    <label>{player.name}</label>
    <ul>
      {player.games.map((game, index) =>
        <li key={`${player.name}-${index}`}>
          {game.split(' ').map(number =>
            <span className={result.includes(number) ? "active" : ""} key={`${player.name}-${number}`}>{number}</span>)}
        </li>)
      }
    </ul>
  </PlayerCardContainer>
}