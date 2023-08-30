import CrocImage from "./img/croc.png";

interface Props {
  points: number;
  setPoints: React.Dispatch<React.SetStateAction<number>>;
  imgClass: string;
  pointsClass: string;
}

function PointsField({ points, imgClass, pointsClass }: Props) {
  return (
    <>
      <img src={CrocImage} className={"crocodile " + imgClass}></img>
      <div className={"points " + pointsClass}>{points} points</div>
    </>
  );
}

export default PointsField;
