#write a function that takes in a binary tree and 
#returns a sum of its node's depths

class BinaryTree:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None

#very elegant recursive solution
#each node tells its children their depth (by adding 1 to its own depth)
#and the recrusive calls traverse the tree until the leaves and sum 
#up all of the depths 
def nodeDepths(node, depth=0):
    if node is None:
        return 0
    else:
        return depth + nodeDepths(node.left, depth + 1) + nodeDepths(node.right, depth + 1)
