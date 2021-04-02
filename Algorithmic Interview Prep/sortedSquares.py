# Write a function that takes in an array of integers 
# that are sorted and returns a new array of the same 
# length with the squares of the original integers also sorted

#easy solution, sq each element then sort
def sortedSquare(array):
    sortedSquares = [0] * len(array)
    for index, num in enumerate(array):
        sortedSquares[index] = num ** 2
    sortedSquares.sort()
    return sortedSquares