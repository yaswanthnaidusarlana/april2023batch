Dim obj @@ script infofile_;_ZIP::ssf1.xml_;_
set obj=description.Create()
 obj("micclass").value="Link"
 
 

	
set ch1=Browser("Browser").Page("Online Shopping site in").Childobjects(obj) @@ script infofile_;_ZIP::ssf5.xml_;_
 
 msgbox ch1.count
 
 For i = 0 To ch1.count-1 Step 1
 	print ch(i).GetRoProperty("innerhtml")
 Next
