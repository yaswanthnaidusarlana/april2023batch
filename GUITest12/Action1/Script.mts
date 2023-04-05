Dim a 

a=5
Function callbyref(byref var)
	var=10
	msgbox var
End Function
call callbyref(a)
msgbox a
