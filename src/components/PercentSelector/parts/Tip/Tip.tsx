import { TipProps } from "./TipProps";
import "./Tip.scss";
import clsx from "clsx";

const Tip = ({
  tipNumber,
  customTipEnabled,
  setCustomTip = () => {},
  tip,
  setTip = () => {},
}: TipProps): JSX.Element => {
  return (
    <button
      onClick={() => {
        setCustomTip(0);
        setTip(Number(tipNumber));
      }}
      className={clsx("tip", {
        "--selected": tipNumber === tip && !customTipEnabled,
      })}
    >
      {tipNumber}%
    </button>
  );
};

export default Tip;
