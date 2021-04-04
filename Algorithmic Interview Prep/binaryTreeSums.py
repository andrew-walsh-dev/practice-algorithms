# Write a function that takes in a binary tree 
# and returns a list of its branch sums 
# ordered from leftmost branch 
# to rightmost branch sum

class BinaryTree:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None


#main function
#makes list of sums to add to 
#and calls recursive helper function
def get_branch_sums(root):
    sums = []
    calculate_sums(root, 0, sums)
    return sums

#used recursion to traverse and calculate branches
#using depth-first search
def calculate_sums(node, runningSum, sums):
    #if node is none, we are done with that branch
    if node is None:
        return

    #else add curr value to running branch sum
    runningSum += node.value
    #if no children, add branches sum to list and return
    if node.left is None and node.right is None:
        sums.append(runningSum)
        return

    #else we call on each child and pass down the running sum
    calculate_sums(node.left, runningSum, sums)
    calculate_sums(node.right, runningSum, sums)