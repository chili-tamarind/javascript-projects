/* Write a function makeLine(size) that returns a line with exactly size hashes.*/

function makeLine(size) {
    let hash = '';
    
    for (let i = 0; i < size; i++) {
        hash += '#';
    }

    return hash;
}
console.log(makeLine(5) + "\n>>>>>>>>>>> makeLine(5) \n")

/* Write a function called makeSquare(size) that returns a size by size string of hashes. The function should NOT print each row of the square. Instead, it must return a single string that contains the entire shape.*/

function makeSquare(size) {
    let hash_square = '';

    for (let i = 0; i < size; i++) {
        hash_square = makeRectangle(size, size)
    }

    return hash_square;    
}
console.log(makeSquare(5) + "\n>>>>>>>>>>> makeSquare(5) \n")

function makeSquare_v1(size) {
    let hash_square = '';

    for (let i = 0; i < size; i++) {
        hash = makeLine(size)
        //console.log(hash)
        hash_square += '\n' + hash
    }

    return hash_square;    
}
console.log(makeSquare_v1(5) + "\n>>>>>>>>>>> makeSquare_v1(5) \n")

/* Write a function makeRectangle(width, height) that returns a rectangle with the given width and height. Use your makeLine function to do this.*/

function makeRectangle(width, height) {
    let hash_rectangle = '';

    for (let i = 0; i < height; i++) { // For the number of rows i.e. height
        hash_rectangle += ('\n' + makeLine(width))
    }

    return hash_rectangle;   
}
console.log(makeRectangle(5,3) + "\n>>>>>>>>>>> makeRectangle(5,3) \n")

/* Write a function makeDownwardStairs(height) that prints the staircase pattern shown below, with the given height. Use your makeLine function to do this.*/

function makeDownwardStairs(height) {
    let hash_stairs = '';

    for (let i = 0; i < height; i++) { // For the number of rows i.e. height
        hash_stairs += ('\n' + makeLine(i+1))
    }

    return hash_stairs;   
}
console.log(makeDownwardStairs(5) + "\n>>>>>>>>>>> makeDownwardStairs(5) \n")

/* Write a function makeSpaceLine(numSpaces, numChars) that returns a line with exactly the specified number of spaces, followed by the specified number of hashes, followed again by numSpaces more spaces.*/

function makeSpaceLine(numSpaces, numChars) {
    
    let hash_space = " ".repeat(numSpaces) + "#".repeat(numChars) + " ".repeat(numSpaces);
    return hash_space;   
}
console.log(makeSpaceLine(3, 5) + "\n>>>>>>>>>>> makeSpaceLine(3, 5)\n")


/* Write a function makeIsoscelesTriangle(height) that returns a triangle of the given height.*/

function makeIsoscelesTriangle(height) {
    let hash_triangle = ""; 
    
    for (let i = 0; i < height; i++) {
        hash_triangle += "\n" + " ".repeat(height-i) + "#".repeat(2*i+1) + " ".repeat(height-i);
        //triangle += (makeSpaceLine(height - i - 1, 2*i + 1) + '\n')
    }
    return hash_triangle;   
}
console.log(makeIsoscelesTriangle(5) + "\n>>>>>>>>>>> makeIsoscelesTriangle(5) \n")

/* Write a function makeDiamond(height) that returns a diamond where the triangle formed by the top portion has the given height.*/

function makeDiamond(height) {
    let tri_top = '';
    let tri_bottom = '';

    for (let i = 0; i < height; i++) {
        tri_top += "\n" + " ".repeat(height-i) + "#".repeat(2*i+1) + " ".repeat(height-i);
    }

    for (let j = (height-1); j >= 0; j--) {
        tri_bottom += "\n" + " ".repeat(height-j) + "#".repeat(2*j+1) + " ".repeat(height-j);
    }

    let hash_diamond = tri_top + tri_bottom;
    return hash_diamond;   
}
console.log(makeDiamond(5) + "\n>>>>>>>>>>> makeDiamond(5) \n")

/* Refactor your functions so that they take a single character as a parameter, and draw the shapes with that character instead of always using '#'. Make the new parameter optional, with default value '#'.*/

function makeShape(height,shape) {
    let tri_top = '';
    let tri_bottom = '';

    for (let i = 0; i < height; i++) {
        tri_top += "\n" + " ".repeat(height-i) + shape.repeat(2*i+1) + " ".repeat(height-i);
    }

    for (let j = (height-1); j >= 0; j--) {
        tri_bottom += "\n" + " ".repeat(height-j) + shape.repeat(2*j+1) + " ".repeat(height-j);
    }

    let hash_diamond = tri_top + tri_bottom;
    return hash_diamond;   
}
console.log(makeShape(10,'!') + "\n>>>>>>>>>>> makeShape(10,!) \n")