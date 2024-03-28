import css from "./FriendListItem.module.css";
import clsx from "clsx";

export default function FriendListItem({ friend: { avatar, name, isOnline } }) {
  return (
    <div className={css.friendItemContainer}>
      <img className={css.friendImg} src={avatar} alt="Avatar" width="48" />
      <p className={css.friendName}>{name}</p>
      <p className={clsx(css.friendStatus, isOnline ? css.valid : css.inValid)}>
        {isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
}
