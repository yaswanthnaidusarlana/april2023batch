systemutil.Run "C:\Program Files (x86)\HPE\Unified Functional Testing\samples\Flights Application\FlightsGUI.exe"
WpfWindow("HPE MyFlight Sample Applicatio").WpfEdit("agentName").Set "john" @@ hightlight id_;_1915238160_;_script infofile_;_ZIP::ssf13.xml_;_
WpfWindow("HPE MyFlight Sample Applicatio").WpfEdit("password").SetSecure "640ffd7e32e562f9c445" @@ hightlight id_;_1920688840_;_script infofile_;_ZIP::ssf14.xml_;_
WpfWindow("HPE MyFlight Sample Applicatio").WpfButton("OK").Click @@ hightlight id_;_1915240320_;_script infofile_;_ZIP::ssf15.xml_;_
WpfWindow("HPE MyFlight Sample Applicatio").WpfComboBox("fromCity").Select "Frankfurt" @@ hightlight id_;_1920691144_;_script infofile_;_ZIP::ssf20.xml_;_
WpfWindow("HPE MyFlight Sample Applicatio").WpfComboBox("toCity").Select "San Francisco" @@ hightlight id_;_1920704056_;_script infofile_;_ZIP::ssf24.xml_;_
WpfWindow("HPE MyFlight Sample Applicatio").WpfButton("FIND FLIGHTS").Click @@ hightlight id_;_1920693112_;_script infofile_;_ZIP::ssf25.xml_;_
WpfWindow("HPE MyFlight Sample Applicatio").WpfTable("flightsDataGrid").SelectCell 3,0 @@ hightlight id_;_1913842608_;_script infofile_;_ZIP::ssf26.xml_;_
WpfWindow("HPE MyFlight Sample Applicatio").WpfButton("SELECT FLIGHT").Click @@ hightlight id_;_1913843904_;_script infofile_;_ZIP::ssf27.xml_;_
WpfWindow("HPE MyFlight Sample Applicatio").WpfEdit("passengerName").Set "yash" @@ hightlight id_;_1920706504_;_script infofile_;_ZIP::ssf28.xml_;_
WpfWindow("HPE MyFlight Sample Applicatio").WpfButton("ORDER").Click @@ hightlight id_;_1920706648_;_script infofile_;_ZIP::ssf29.xml_;_
WpfWindow("HPE MyFlight Sample Applicatio").WpfImage("WpfImage_3").Click 10,14 @@ hightlight id_;_1913846544_;_script infofile_;_ZIP::ssf30.xml_;_


