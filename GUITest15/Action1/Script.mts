Set obj1=createobject("scripting.dictionary")
obj1.Add "10001","leena"
obj1.Add "10002","reena"
obj1.Add "10003","seena"

For each i in obj1.Items
	msgbox i
Next
obj1.Remove "10002"
For each i in  obj1.Items
msgbox i
	
Next
If obj1.exists("10002") Then
	msgbox "10002 is exists"
	else
	msgbox "10002 is not exists"
End If
