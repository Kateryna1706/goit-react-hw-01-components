import css from './FriendListItem.module.css';

export const FriendListItem = ({ avatar, name, isOnline, key }) => {
  return (
    <li className={css.item} key={key}>
      <span className={isOnline ? css.isOnline : css.status}></span>
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
};
