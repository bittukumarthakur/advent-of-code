# what we want?
## How many houses receive at least one present?

1. Model => santa
2. View => render/display
3. Controller => instructor

# Pseudo Code

## santa
initialPosition = {x: 0, y: 0};

const santa = new Santa(initialPosition)✅

santa.moveNorth();✅
santa.moveSouth();✅
santa.moveEast();✅
santa.moveWest();✅
santa.position();✅

## instructor
const navigation = {
  "^": "north",
  "v": "south",
  ">": "east",
  "<": "west"
};

const navigation = {
  "north": "^", 
  "south": "v", 
  "east": ">", 
  "west": "<"
};

const instructor = new Instructor(santa,navigation);
instructor.instruct(instruction);
instructor.numberOfHouseVisited();

## Locations

const houseLoactions = new apnaSet();

key => x_y
value => {x:0, y:0};



