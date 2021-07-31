#write a function that takes in a string of lowercase chars and returns the index of the string's first non-repeating char
def first_non_repeating_char(str):
    for i in range(len(str)):
		
		duplicate = False
		for j in range(len(str)):
			if str[i] == str[j] and i != j:
				duplicate = True
		
		if not duplicate:
			return i
		
	return -1