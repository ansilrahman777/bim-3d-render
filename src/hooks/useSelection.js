import { useState } from "react";

export default function useSelection() {
  const [selected, setSelected] = useState(null);

  return {
    selected,
    setSelected,
  };
}