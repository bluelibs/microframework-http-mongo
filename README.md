## Micro HTTP & MongoDB Framework

Before everything ensure you have Node 14+ installed.

## Setup Mongo Easy

This will automatically download MongoDB and it will run an easy replica-set, works on Mac, Windows, Linux.

```bash
npm i -g run-rs
run-rs --keep -d ~/mongodb-data

# Using it with --keep and -d path let's you re-use it, without those values the replicaset gets cleared everytime
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
