def longest_substring(str):
    unique = ""
    length = 0
    for char in str:
        if char not in unique:
            unique += char
        else:
            #peel off the part of unique with the duplicate
            unique = unique[unique.index(c)+1:] + c
    length = max(length, len(unique))
    return length
