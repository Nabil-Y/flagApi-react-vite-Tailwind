const Card = (props) => {
  const classes =
    'card bg-elements-lt dark:bg-elements-dk rounded-md shadow-lg overflow-hidden ' +
    props.className;
  return <div className={classes}>{props.children}</div>;
};

export default Card;
