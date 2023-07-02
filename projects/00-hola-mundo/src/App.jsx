import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'



export function App (){

    const users = [
    {
        userName:'midudev',
        name: 'Miguel Angel Duran',
        isFollowing: true
    },
    {
        userName: "elonmusk",
        name:"Elon Musk",
        isFollowing:false
    },
    {
        userName: "jdfp94",
        name:"Jonathan Franco",
        isFollowing: true
    }
]
    //const format = (userName) => `@${userName}`
    return(
        <section className='App'>
            {
                users.map(({userName, name, initialIsFollowing})=>(
                    <TwitterFollowCard
                        key={userName}
                        userName={userName}
                        isFollowing={initialIsFollowing}
                    >
                        {name}
                    </TwitterFollowCard>
                ))
            }
            

        </section>
    )
}
/*
<TwitterFollowCard 
                initialIsFollowing
                formatUserName = {format}
                userName="midudev" 
                name="Miguel Angel Duran"
                
            />

            <TwitterFollowCard 
                initialIsFollowing ={false}
                formatUserName = {format}
                userName="elonmusk"
                name="Elon Musk" 
               
            />

            <TwitterFollowCard 
                initialIsFollowing = {false}
                formatUserName = {format}
                userName="jdfp" 
                name="Jonathan Franco" 
                
            />
*/