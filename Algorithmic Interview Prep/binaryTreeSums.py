# Write a function that takes in a binary tree 
# and returns a list of its branch sums 
# ordered from leftmost branch 
# to rightmost branch sum

class BinaryTree:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None