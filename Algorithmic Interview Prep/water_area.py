#Given an array of non-negative integers where each non-zero int represents the height
#of a pillar of width 1, imagine water being poured on the pillars, write a function
#that returns the surface area of the water trapped between the pillars viewed from the front

def waterArea(heights):
    if len(heights) is 0:
		return 0
	
	left_index = 0
	right_index = len(heights) - 1
	left_max = heights[left_index]
	right_max = heights[right_index]
	surface_area = 0
	
	while left_index < right_index:
		if heights[left_index] < heights[right_index]:
			left_index += 1
			left_max = max(left_max, heights[left_index])
			surface_area += left_max - heights[left_index]
		else:
			right_index -= 1
			right_max = max(right_max, heights[right_index])
			surface_area += right_max - heights[right_index]
			
	return surface_area