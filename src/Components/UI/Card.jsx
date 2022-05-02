const Card = (props) => {
  const classes = 'card bg-elements-lt dark:bg-elements-dk rounded-md shadow-lg ' + props.className;
  return <div className={classes}>{props.children}</div>;
};

export default Card;
