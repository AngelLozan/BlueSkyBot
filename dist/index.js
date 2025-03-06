var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { AtpAgent } from '@atproto/api';
import * as dotenv from 'dotenv';
// import { CronJob } from 'cron';
import * as process from 'process';
dotenv.config();
const agent = new AtpAgent({
    service: 'https://angellozan.live',
});
export const main = () => __awaiter(void 0, void 0, void 0, function* () {
    console.log("Starting to post...");
    yield agent.login({ identifier: process.env.BLUESKY_USERNAME, password: process.env.BLUESKY_PASSWORD });
    const inspiration = yield quote();
    yield agent.post({
        text: inspiration,
        visibility: 'public',
    });
    console.log(inspiration);
});
function quote() {
    return __awaiter(this, void 0, void 0, function* () {
        let req = yield fetch('https://zenquotes.io/api/random');
        let data = yield req.json();
        let quote = data[0].q;
        let author = data[0].a;
        console.log(quote);
        console.log(author);
        const bannedAuthors = ['Christopher Columbus', 'Elon Musk', 'Ronald Reagan', 'Theodore Roosevelt', 'Walt Disney', 'William Faulkner', 'Winston Churchill', 'Benjamin Franklin', 'Ayn Rand'];
        if (bannedAuthors.includes(author)) {
            return yield quote();
        }
        return `${quote} - ${author}`;
    });
}
main();
// const scheduleExpression = '0 */4 * * *'; // Every 4 hours
// const job = new CronJob(scheduleExpression, main);
// job.start(); * * * * * /usr/bin/node /path/to/your/project/script.js >> /path/to/your/project/logs/myscript.log 2>&1
//# sourceMappingURL=index.js.map