function Button(props) {
  return (
    <button
      className="bg-lime-600 h-[5rem] w-[5rem] text-white font-bold rounded-full text-[3rem] hover:opacity-90"
      onClick={props.fn}
    >
      {props.operador}
    </button>
  );
}
export default Button;
