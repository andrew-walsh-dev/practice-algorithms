#Given a Node class that has a name and an array of optional children nodes, 
#implement depth first seach method on the Node class

class Node:
    def __init__(self, name):
        self.children = []
        self.name = name

    def addChild(self, name):
        self.children.append(Node(name))
        return self

    ###The method I am writing
    def depthFirstSearch(self, array):
        
        #each node appends its name to the list
        array.append(self.name)
        
        #if it has no children, return
        if self.children == []:
            return
        
        #otherwise call the search on each child in order, which 
        #will cause a depth first search since it will traverse left to 
        #right in the tree
        for child in children:
            child.depthFirstSearch(array)
        return array