import * as React from 'react';
import Feed from "react-instagram-authless-feed"

const Instagram = () => {
    return(
        <>
        <Feed userName="axamansard_" className="Feed" classNameLoading="Loading"  limit="6"/>
        </>
    );
}
export default Instagram;

