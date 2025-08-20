# nestjs-graphql


## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```


# Example Query and Mutation

```graphql
query AllSongs {
	songs {
		id
		title
	}
}


query GetSong($id: ID!) {
  song(id: $id) {
    id
    title
  }
}

mutation AddSongs {
  createSong(createSongInput: { title: "Bohemian Rhapsody2" }) {
    id
    title
  }
}
```

# Sample output

```json
{
	"data": {
		"songs": [
			{
				"id": "1",
				"title": "Hello"
			},
			{
				"id": "2",
				"title": "Bohemian Rhapsody"
			},
			{
				"id": "3",
				"title": "Bohemian Rhapsody2"
			}
		]
	}
}

```