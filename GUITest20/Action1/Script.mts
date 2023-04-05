systemutil.run "https://demo.opencart.com/"
Browser("Your Store").Page("Your Store").Link("My Account").Click @@ script infofile_;_ZIP::ssf1.xml_;_
Browser("Your Store").Page("Your Store").WebElement("Register Login").Click @@ script infofile_;_ZIP::ssf2.xml_;_
Browser("Your Store").Page("Your Store").Link("My Account").Click @@ script infofile_;_ZIP::ssf3.xml_;_
Browser("Your Store").Page("Your Store").Link("Register").Click @@ script infofile_;_ZIP::ssf4.xml_;_
Browser("Your Store").Page("Register Account").WebEdit("firstname").Set "abc" @@ script infofile_;_ZIP::ssf5.xml_;_
Browser("Your Store").Page("Register Account").WebButton("Continue").Click @@ script infofile_;_ZIP::ssf6.xml_;_
Browser("Your Store").Page("Register Account").WebEdit("firstname").Set "abc" @@ script infofile_;_ZIP::ssf7.xml_;_
Browser("Your Store").Page("Register Account").WebEdit("lastname").Set "def" @@ script infofile_;_ZIP::ssf8.xml_;_
Browser("Your Store").Page("Register Account").WebEdit("email").Set "abcdef@gmail.co," @@ script infofile_;_ZIP::ssf9.xml_;_
Browser("Your Store").Page("Register Account").WebEdit("password").SetSecure "64099e94052feb4775ca79388279a48a595a30e7295a" @@ script infofile_;_ZIP::ssf10.xml_;_
Browser("Your Store").Page("Register Account").WebButton("Continue").Click @@ script infofile_;_ZIP::ssf11.xml_;_
Browser("Your Store").Page("Register Account").WebCheckBox("agree").Set "ON" @@ script infofile_;_ZIP::ssf12.xml_;_
Browser("Your Store").Page("Register Account").WebEdit("email").Set "abcdef@gmail.com" @@ script infofile_;_ZIP::ssf13.xml_;_
Browser("Your Store").Page("Register Account").WebButton("Continue").Click @@ script infofile_;_ZIP::ssf14.xml_;_
