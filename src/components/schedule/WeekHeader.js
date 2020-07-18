const WeekTitle = (props) => {
  const style = {
    gridColumn: "1 / span 8",
  };
  return (
    <div style={style}>
      Week: {props.startDate} - {props.endDate}
    </div>
  );
};
