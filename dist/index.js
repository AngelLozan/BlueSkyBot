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
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("Starting to post...");
        yield agent.login({ identifier: process.env.BLUESKY_USERNAME, password: process.env.BLUESKY_PASSWORD });
        const inspiration = yield quote();
        yield agent.post({
            text: inspiration,
            visibility: 'public',
        });
        console.log("Just posted!");
    });
}
function quote() {
    return __awaiter(this, void 0, void 0, function* () {
        let req = yield fetch('https://zenquotes.io/api/random');
        let data = yield req.json();
        let quote = data[0].q;
        let author = data[0].a;
        console.log(quote);
        console.log(author);
        return `${quote} - ${author}`;
    });
}
main();
// Run this on a cron job
// const scheduleExpressionMinute = '* * * * *'; // Run once every minute for testing
// const scheduleExpression = '0 */3 * * *'; // Run once every three hours in prod
// const job = new CronJob(scheduleExpression, main); // change to scheduleExpressionMinute for testing
// job.start();
//# sourceMappingURL=index.js.map