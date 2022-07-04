import React from "react";

type Props = {
  content: string;
};

// export default function Title(props: Props) {
//   return <h1>{props.content}</h1>;
// }

export default function Title({ content }: Props) {
  return <h1>{content}</h1>;
}
