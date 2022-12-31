import { players } from "../megascript"
import PlayersList from "../PlayersList"
import { useForm } from "react-hook-form";
import { useState } from "react";
import ResultCard from "../ResultCard";
import * as S from "./styles";


function App() {
  const [editMode, setEditMode] = useState(true);
  const [result, setResult] = useState([]);
  const [currentNumberIndex, setCurrentNumberIndex] = useState(0);
  const [animatedResult, setAnimatedResult] = useState([]);
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data: any) => {
    setResult(data.result_string.split(' '));
    setAnimatedResult([]);
    setEditMode(false);
  }

  const animate = async (result: any) => {
    for (let i = 0; i < 6; i++) {
      // @ts-ignore
      setAnimatedResult((animatedResult: any) => [...animatedResult, result[i]]);
      setCurrentNumberIndex(i);
      await sleep(2000);
    }
  }

  const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

  const getResultField = () => {
    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("result_string", { required: true })} />
        {errors.result_string && <span>This field is required</span>}
        <input type="submit" />
      </form>
    )
  }

  const getResultCard = () => {
    return (
      <>
        <div onClick={() => setEditMode(true)}>
          <ResultCard result={result} currentNumberIndex={currentNumberIndex} />
        </div>
        <button onClick={() => animate(result)}>Animar</button>
      </>
    )
  }

  return (
    <S.AppContainer>
      <S.ResultContainer>
        {editMode ? getResultField() : getResultCard()}
      </S.ResultContainer>
      <PlayersList players={players} result={animatedResult} />
    </S.AppContainer>
  )
}

export default App
