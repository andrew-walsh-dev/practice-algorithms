#Write a function that takes in a binary search tree 
#and a target value and returns the closest value to 
#that target contained in the BST
#You can assume there will be only one closest value

#call our recursive helper function to traverse the tree
#and find our value
def findClosestInBST(tree, target):
    return findClosest(tree, target, float("inf"))

def findClosest(tree, target, closest):
    #if hit bottom of tree, return the closest we found 
    if tree is None:
        return closest
    #if the value we just found is closer than previous closest, 
    #update closest
    if abs(tree.value - target) < abs(closest - target):
        closest = tree.value
    #if target is greater than current value, go right in BST
    if target > tree.value:
        return findClosest(tree.right, target, closest)
    #if less, go left in the BST
    elif target < tree.value:
        return findClosest(tree.left, target, closest)
    #if current value = target, return it, we are done
    else: 
        return closest

class BST:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None