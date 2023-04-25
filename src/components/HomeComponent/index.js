import NewTweet from "./NewTweet";
import TweetList from "./TweetList";

export default function Home () {
    return (
        <div className="w-50 mt-3">
            <p className="mx-3"> Home</p>
            <NewTweet/>
            <TweetList/>
        </div>
    )
}