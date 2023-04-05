a1=split("welcome to vbscript")
For each i1 in a1 
	print i1
Next
Dim mu(9,9)
For i = 1 To 9 Step 1
	For j = 0 To 9 Step 1
		mu(i,j)=(i+1)*(j+1)
		print(i+1&"*"&j+1&"="&mu(i,j))
	Next
Next
