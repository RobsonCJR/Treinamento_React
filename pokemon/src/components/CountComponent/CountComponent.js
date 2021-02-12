import React, { useState, useEffect } from "react";

const Count = () => {
	const [number, setNumber] = useState(0);
	const [isPair, setIsPair] = useState(true);

	const countPlus = (quantity) => {
		setNumber(number + quantity);
	};


  useEffect(() => {
   const checkIsPairNumber = (number) => {
    const restOfDivision = number % 2;
    return restOfDivision === 0 ? true : false;
  };

  setIsPair(checkIsPairNumber(number));
}, [number]);

  return (
   <div>
    <h2>A contagem está em {number} e o número é {isPair ? "Par" : "Ímpar"}</h2>
    <button onClick={() => countPlus(1)}>Adicionar mais 1</button>
    <button onClick={() => countPlus(2)}>Adicionar mais 2</button>
   </div>
   );
};

export default Count;