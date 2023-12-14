import useGame from "../hooks/useGame"

const GameTrailer = ({slug}) => {

  const data = useGame(`${slug}/movies`) ;

  if(data) {
  const first = data?.results[0];
  
  if(!first) return null;
 
  return first? (
    <video src={first?.data[480]} poster={first?.preview} controls />
  ): null;
  }

}

export default GameTrailer