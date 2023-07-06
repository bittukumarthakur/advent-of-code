# what we want?
## How many houses receive at least one present?

1. Model => santa
2. View => render/display
3. Controller => instructor

# Pseudo Code

## santa
initialPosition = {x: 0, y: 0};

const santa = new Santa(initialPosition)

santa.moveNorth();
santa.moveSouth();
santa.moveEast();
santa.moveWest();
santa.position();

## instructor
const navigation = {"<": "left",">": right};

const instructor = new Instructor(santa,navigation);
instructor.instruct(instruction);
instructor.numberOfHouseVisited();