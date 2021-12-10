## Micro HTTP & MongoDB Framework

## Setup Mongo Easy

```bash
npm i -g run-rs
run-rs --keep
```

Then modify your `src/index.ts` to use the correct `uri` for MongoBundle. Most likely you will use `dotenv` and `.env` variable in the future, this is just a micro-example.

## Start

```
npm install
npm run start:dev
```

## Access

### Trigger Fixtures:

http://localhost:3000/fixtures

### Fetch Data:

http://localhost:3000/doctors/list
