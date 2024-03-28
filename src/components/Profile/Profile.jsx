import css from "./Profile.module.css";

export default function Profile({ name, tag, location, image, stats }) {
  return (
    <div className={css.container}>
      <div className={css.imageProfileContainer}>
        <img className={css.imageProfile} src={image} alt="User avatar" />
        <p className={css.profileTitle}>{name}</p>
        <p className={css.profileText}>@{tag}</p>
        <p className={css.profileText}>{location}</p>
      </div>

      <ul className={css.profileList}>
        <li className={css.profileListItem}>
          <span className={css.profileItemText}>Followers</span>
          <span className={css.profileItemValue}>{stats.followers}</span>
        </li>
        <li className={css.profileListItem}>
          <span className={css.profileItemText}>Views</span>
          <span className={css.profileItemValue}>{stats.views}</span>
        </li>
        <li className={css.profileListItem}>
          <span className={css.profileItemText}>Likes</span>
          <span className={css.profileItemValue}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}
