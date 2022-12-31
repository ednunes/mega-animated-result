import PlayerCard from "../PlayerCard"
import { PlayerListContainer } from "./styles"

export default function PlayersList({players, result}: {players: any, result: any}) {
  return <PlayerListContainer>
    {players.map((player: any) => <PlayerCard key={player.name} player={player} result={result}/>)}
  </PlayerListContainer>
}