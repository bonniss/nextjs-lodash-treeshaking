import { groupBy } from 'lodash-es'

const data = [
  {
    "hero": "Spider Man",
    "name": "Peter Benjamin Parker",
    "link": "http://marvel.com/characters/54/spider-man",
  },
  {
    "hero": "Captain Marvel",
    "name": "Carol Danvers",
    "link": "http://marvel.com/characters/9/captain_marvel",
  },
  {
    "hero": "Hulk",
    "name": "Robert Bruce Banner",
    "link": "http://marvel.com/characters/25/hulk",
  },
  {
    "hero": "Black Widow",
    "name": "Natalia 'Natasha' Alianovna Romanova",
    "link": "http://marvel.com/characters/6/black_widow",
  },
  {
    "hero": "Daredevil",
    "name": "Matthew Michael Murdock",
    "link": "http://marvel.com/characters/11/daredevil",
  },
  {
    "hero": "Wolverine",
    "name": "James Howlett",
    "link": "http://marvel.com/characters/66/wolverine",
  },
  {
    "hero": "Captain America",
    "name": "Steven Rogers",
    "link": "http://marvel.com/characters/8/captain_america",
  },
  {
    "hero": "Iron Man",
    "name": "Anthony Edward 'Tony' Stark",
    "link": "http://marvel.com/characters/29/iron_man",
  },
  {
    "hero": "Thor",
    "name": "Thor Odinson",
    "link": "http://marvel.com/characters/60/thor",
  }
]

export default function Home() {
  const groups = groupBy(data, x => x.hero.charAt(0));
  return (
    <div>
      <pre>
        {JSON.stringify(groups, null, 2)}
      </pre>
    </div>
  )
}
