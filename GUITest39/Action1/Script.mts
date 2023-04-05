systemutil.run "C:\Program Files (x86)\HPE\Unified Functional Testing\samples\Flights Application\FlightsGUI.exe"
'wpfWindow("devname:=HPE MyFlight Sample Application").WpfEdit("devname:=agentName").Set "john"
'wpfWindow("devname:=HPE MyFlight Sample Application").WpfEdit("devname:=password").Set "hp"
'WpfWindow("devname:=HPE MyFlight Sample Application").WpfButton("text:=OK").Click


Dim win,agentName,password,okbutton
set win=Description.Create()
Set agentName=Description.Create()
Set password=Description.Create()
Set okbutton=Description.Create()

win("devname").value="HPE MyFlight Sample Application"
agentName ("devname").value="agentName"
password ("devname").value="password"
okbutton ("text").value="OK"

WpfWindow(win).WpfEdit(agentName).Set "john"
WpfWindow(win).WpfEdit(password).Set "hp"
WpfWindow(win).WpfButton(okbutton).Click


