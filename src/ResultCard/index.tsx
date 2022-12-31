import { ResultCardContainer } from "./styles"

export default function ResultCard({ result, currentNumberIndex }: {result: any, currentNumberIndex: number}) {
  return <ResultCardContainer>
    {result.map((number: string, index: number) => <span className={index <= currentNumberIndex ? "active" : ""} key={`result_card_${number}`}>
      {number}
    </span>)
    }
  </ResultCardContainer>
}