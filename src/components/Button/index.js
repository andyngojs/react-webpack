import clsx from "clsx";
import styles from "./Button.module.css";

export default function Button({ primary, secondary }) {
  const classes = clsx(styles.btn, {
    [styles.primary]: primary,
    [styles.secondary]: secondary,
  });
  return (
    <div>
      <button className={classes}>Click me!</button>
    </div>
  );
}
