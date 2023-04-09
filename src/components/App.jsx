import { Profile } from "./profile/profile";
import { Statistic } from "./statistic/statistic";
import { FriendsList } from "./FriendsList/FriendList";
import {Transaction} from "./transactions/TransactionHistory"

import user from './JSON/user.json'
import data from './JSON/data.json'
import friends from './JSON/friends.json'
import items from './JSON/transactions.json'


export const App = () => {
  return (
   
    
     <><Profile
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
      followers={user.stats.followers}
      views={user.stats.views}
      likes={user.stats.likes} />
      <Statistic 
      title="Upload stats"
      stats = {data}
      />
      <FriendsList
      friends={friends}/>
      <Transaction
      items = {items}/>
      </>
  );
};
