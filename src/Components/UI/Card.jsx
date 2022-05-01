const Card = (props) => {
  const classes = 'card ' + props.className;
  return <div className={classes}>Card</div>;
};

export default Card;
