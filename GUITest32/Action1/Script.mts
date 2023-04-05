Set objexcel=createobject("excel.application")
Set objworkbook=objexcel.workbokks.open("‪C:\Users\Administrator\Desktop\Book1.xlsx")
rowcount=objectworksheet.userrange.rows.count

For i = 2 To rowcount Step 1

systemutil.run "C:\Program Files (x86)\HPE\Unified Functional Testing\samples\Flights Application\FlightsGUI.exe"


WpfWindow("HPE MyFlight Sample Applicatio").WpfEdit("agentName").Set DataTable("username", dtGlobalSheet)

WpfWindow("HPE MyFlight Sample Applicatio").WpfEdit("password").Set DataTable("p_text", dtGlobalSheet)

WpfWindow("HPE MyFlight Sample Applicatio").WpfButton("OK").Click
WpfWindow("HPE MyFlight Sample Applicatio").close

next
Set objworksheet=nothing
Set objworkbook=nothing
Set objexcel=nothing

