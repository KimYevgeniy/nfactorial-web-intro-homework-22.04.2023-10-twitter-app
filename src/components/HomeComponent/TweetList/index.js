import { BOBA, JIN, R2D2 } from "../images"
import Tweet from "./Tweet"

export default function TweetList(){
    const tweets = [
        {
            authorName: 'Boba',
            authorUsername: '@Mandolorian',
            img: BOBA,
            content: "I'm too old for this",
            replies: Math.floor(Math.random() * (1000 - 10) + 10) ,
            retweet: Math.floor(Math.random() * (5000 - 500) + 500) ,
            likes: Math.floor(Math.random() * (10000 - 6000) + 6000) 
        },
        {
            authorName: 'Jin',
            authorUsername: '@MandoDad',
            img: JIN,
            content: 'Open for job opportunities',
            replies: Math.floor(Math.random() * (1000 - 10) + 10) ,
            retweet: Math.floor(Math.random() * (5000 - 500) + 500) ,
            likes: Math.floor(Math.random() * (10000 - 6000) + 6000) 
        },{
            authorName: 'R2D2',
            authorUsername: '@RealR2D2',
            img: R2D2,
            content: 'BEEP BOP BEEP',
            replies: Math.floor(Math.random() * (1000 - 10) + 10) ,
            retweet: Math.floor(Math.random() * (5000 - 500) + 500) ,
            likes: Math.floor(Math.random() * (10000 - 6000) + 6000) 
        }
    ]
    
    return tweets.map((item, index)=><Tweet {...item} key={index}/>)
}