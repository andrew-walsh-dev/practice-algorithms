#Given two arrays, write a function that determines whether the second array is a subsequence of the first one
#NOTE that the elements must appear in order but DO NOT have to be adjacent in the array

#Using a two pointer setup where we iterate through the array,
#and ONLY iterate through the sequence if we found a match for that value
def isValidSubsequence(array, sequence):
    arrayIndex = 0
    sequenceIndex = 0
    while arrayIndex < len(array) and sequenceIndex < len(sequence):
        if array[arrayIndex] == sequence[sequenceIndex]:
            sequenceIndex += 1
        arrayIndex += 1
        #when we reach the end of one of the inputs, check if we finished the sequence
        #if we did, then all values were found and it is a valid subsequence
        return sequenceIndex == len(sequence)