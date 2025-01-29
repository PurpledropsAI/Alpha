const OpenPositionsTab = ({ isfirst }) => {
  return (
    <div
      className={`text-left w-full py-4 px-5 mx-auto bg-alphaWhite ${
        isfirst ? `rounded-b-lg` : `rounded-lg`
      }`}
    >
      <div>These are your current positions.</div>
      <div>You do not have any positions {`(yet)`}.</div>
    </div>
  );
};
export default OpenPositionsTab;
