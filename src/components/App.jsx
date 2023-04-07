import { Profile } from "./profile/profile";
import { Statistic } from "./statistic/statistic";
import user from './profile/user.json'
import data from './statistic/data.json'

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
      /></>
  );
};
