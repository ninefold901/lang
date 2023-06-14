import * as dotenv from 'dotenv';
import { OpenAI } from 'langchain/llms/openai';

dotenv.config();

const model = new OpenAI({
  modelName: 'gpt-3.5-turbo',
  openAIApiKey: process.env.OPENAI_API_KEY,
  timeout: 30000, // ms?
});

async function main() {
  console.log('hi');
  const res = await model.call('who are you?');
  console.log(res);
}

main();
