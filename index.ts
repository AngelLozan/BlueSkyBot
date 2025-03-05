import { AtpAgent } from '@atproto/api';
import * as dotenv from 'dotenv';
// import { CronJob } from 'cron';
import * as process from 'process';

dotenv.config();

const agent = new AtpAgent({
    service: 'https://angellozan.live',
  })


async function main() {
    console.log("Starting to post...")
    await agent.login({ identifier: process.env.BLUESKY_USERNAME!, password: process.env.BLUESKY_PASSWORD!})

    const inspiration = await quote();
    await agent.post({
        text: inspiration,
        visibility: 'public',
    });
    console.log(inspiration);
}

async function quote(){
    let req = await fetch('https://zenquotes.io/api/random');
    let data = await req.json();
    let quote = data[0].q;
    let author = data[0].a;
    console.log(quote);
    console.log(author);
    const bannedAuthors = ['Christopher Columbus', 'Elon Musk', 'Ronald Reagan', 'Theodore Roosevelt', 'Walt Disney', 'William Faulkner', 'Winston Churchill', 'Benjamin Franklin', 'Ayn Rand'];
    if(bannedAuthors.includes(author)){
        return quote();
    }
    return `${quote} - ${author}`;
}

main();


// const scheduleExpression = '0 */4 * * *'; // Every 4 hours

// const job = new CronJob(scheduleExpression, main);

// job.start(); * * * * * /usr/bin/node /path/to/your/project/script.js >> /path/to/your/project/logs/myscript.log 2>&1
