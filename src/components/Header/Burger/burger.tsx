import icons from "../../../assets/icon/icons.svg";

export const Burger = () => {
  return (
    <div>
      <svg>
        <use href={`${icons}#burger`} />
      </svg>
    </div>
  );
};
