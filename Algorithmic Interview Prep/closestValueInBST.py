#Write a function that takes in a binary search tree 
#and a target value and returns the closest value to 
#that target contained in the BST
#You can assume there will be only one closest value

class BST:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None