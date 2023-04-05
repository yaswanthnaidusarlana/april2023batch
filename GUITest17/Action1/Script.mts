Dim empdict
Set empdict=createobject("scripting.dictionary")
empdict.add "1001" , "namrata : pune"
empdict.add "1002" , "rajandra : mumbai"
For each i in empdict.items 
	msgbox 1
Next
id=inputbox("enter employee id:")
name=inputbox("enter employee name:")
location=inputbox("enter employee location:")
If empdict.exists(empid) Then
	msgbox "employee id already exists",vbinformation,"success"
End If
Dim empdetails
empdetails="employee details:"&vbcrlf
For each key in empdict.keys 
empdetails = empdetails & key & " : " & empdict.item(key) & vbcrlf
Next
msgbox empdetails,vbinformation,"all employees"
