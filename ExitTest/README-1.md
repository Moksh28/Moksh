# FinalTest-CampBooking

This project contains two parts:
* One folder is **backend**, which is for backend and API calls.
* The other folder is **campfrontend**, which is an Angular front-end application.

## Software Requirements
To run this project, the following software should be installed on your machine:

* Angular
* .NET Core (Usually, pre-installed in Windows)
* Microsoft SQL Server Management Studio
* Visual Studio

## How to run?
To run the application, It is needed to run both folders i.e., the API server and the Angular Application.

* First, run the ASP.NET Core Web API (CampBooking). To run it, first open the `backend.sln` by double-clicking in Visual Studio from File Explorer. 
* When Visual Studio is opened, Open Package Manager Console (Shortcut: ALT + T + N + O) in Visual Studio, and after that, choose `DAC` as Default Project.
* After that, run this command `Add-Migration <Any-Name>` for adding the database migration. When this command is succeeded, a new Folder with Name `Migrations` will be generated in your DAC project.
* After this command, run another command `Update-Database`. This command will add or, update the database in SQL. 
* Since, you'll need an Admin Credentials for working with this application. So, after updating the database, Open Microsoft SQL Server Management Studio and there you can see `campDB` in the databases and in this databases, there are 3 tables. You can add one entry in Admin table for operating this application.
* After this, run this project by clicking on the run (Generally, IIS Express) button. 
* After successfully, running the backend API, To run the Angular application (campfrontend), open the Terminal (Command Prompt or, Git Bash) and navigate to the `campfrontend` folder and then run the command `npm i` to install all the dependencies. After that, use the command `ng serve -o` to run the Angular Application.
* After running above command, most probably a new window of your default browser will be opened with a tab in which the Angular Application is running. If this doesn't take place, then you can see the localhost port on which the Angular Application is running in the console. Run that localhost on any browser and start using the application.

* Whenever, you want to add new Admin into the database then you'll need to contact database administrator. i.e., you can't add new Admins from the user layer. For adding new Admins, you'll need to do it from database level.

## Thank You.