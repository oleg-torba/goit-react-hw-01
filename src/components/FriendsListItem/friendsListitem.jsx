import css from './friends.module.css'

export function FriendsListItem({avatar, name, isOnline}){
    
  
return (
    <div className={css.friends}>
        <span className={isOnline ? css.online : css.offline}></span>
        <img className={css.img} src={avatar} alt="avatar" />
        <p className={css.title}>{name}</p>
    </div>
)
}
