import PropTypes from 'prop-types';
import { FriendsListItem } from 'components/FriendsListItem/friendsListitem';

export function FriendsList({ friends }) {
  return (
    <ul>
      {friends.map(({ avatar, name, isOnline, id }) => {
        return (
         <FriendsListItem
         key={id}
         avatar={avatar}
         name={name}
         isOnline={isOnline}
         />
        );
      })}
    </ul>
  );
}
FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
          avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
     isOnline: PropTypes.bool.isRequired,
    })
  ),
};
