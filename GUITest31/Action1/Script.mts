systemutil.Run "https://practicetestautomation.com/practice-test-login/"



Browser("Test Login | Practice").Page("Test Login | Practice").WebEdit("username").Set DataTable("username", dtGlobalSheet)

Browser("Test Login | Practice").Page("Test Login | Practice").WebEdit("password").Set DataTable("password", dtGlobalSheet)
Browser("Test Login | Practice").Page("Test Login | Practice").WebButton("WebButton").Click
Browser("Test Login | Practice").Page("Test Login | Practice").WebButton("Submit").Click

