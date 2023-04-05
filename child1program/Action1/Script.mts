Dim obj
Set obj=description.Create()
obj("micclass").value="Link"
set ch1=Browser("Browser").Page("Online Shopping site in").childobjects(obj) @@ script infofile_;_ZIP::ssf1.xml_;_
msgbox ch1.count
For i = 0 To ch1.count Step 1
print ch1(i).GetRoProperty("interhtml")	
Next
