import * as React from 'react';
import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';
const Twitter = () => {
    return(
        <>
         <TwitterTimelineEmbed
  sourceType="profile"
  screenName="AXAMansard"
  options={{height: 400}}
/>
       
        </>
    )
}
export default Twitter;

