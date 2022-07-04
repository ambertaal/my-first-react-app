import React from "react";

type Props = {
  name: string;
  weight: number;
  awesome: boolean;
  terrifying: boolean;
  abilities: string[]; // an array of strings
};

// export default function Pokemon(props: Props) {
//   return (
//     <div>
//       <h2>Pokemon name: {props.name}</h2>
//       <p>Weight: {props.weight} kg</p>
//       <p>Awesome: {props.awesome ? "YES!" : "nope, not really"}</p>
//       <p>Terrifying: {props.terrifying ? "Very" : "nah, lovable"}</p>
//       <p>Abilities: {props.abilities}</p>
//     </div>
//   );
// }

// Immediately destructure the props object

export default function Pokemon({
  name,
  weight,
  awesome,
  terrifying,
  abilities,
}: Props) {
  return (
    <div>
      <h2>Pokemon name: {name}</h2>
      <p>Weight: {weight} kg</p>
      <p>Awesome: {awesome ? "YES!" : "nope, not really"}</p>
      <p>Terrifying: {terrifying ? "Very" : "nah, lovable"}</p>
      <p>Abilities ({abilities.length}):</p>
      <ul>
        {abilities.map((ability) => {
          return <li>{ability}</li>;
        })}
      </ul>
    </div>
  );
}
