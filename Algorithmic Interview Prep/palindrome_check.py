#Write a function that takes in a string and returns a boolean value
#based on the string being a palindrome

def isPalindrome(string):
	return string[::-1] == string
#easy one liner using python's string slicing syntax