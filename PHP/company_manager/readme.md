COMPANY MANAGER

This website is a simple way to interact between ajax, php and MySQL asynchronously. It has a modular way to execute queries and retreive the data via JSON.

To use this project, first create the database. The steps bellow will help you do that:
	- Open the database/model.mwb file. You'll need MySQL Workbench.
	- In the MySQL Workbench you'll need to either Syncrhonize Model or Forward Engineer.
		- Syncrhonize Model (best solution)
			- Go to Database -> Syncrhonize Model with Database
			- Choose the remote or local database server you'll use
			- Choose the companies schema and updat your database server to have this new database, companies
			- Note: When you change the model.mwb file to have more tables, foreign key and many more you can always do Syncrhonize Model and the database server will update the server database schema
		- Forward Engineer
			- Go to Database -> Forward Engineer
			- Copy the SQL commands generated to be able to create the tables, primary/foreigns keys and other stuff.
			- Open a connection to the database server, paste the code and execute it
			- Note: When you have to include more tables you'll have an headach. Anyhow, it's your choice
	- Now go to php/connect_database.php and fill the following fields:
		- $servername -> server name, ex: localhost, mydatabaseserver.com, etc
		- $username -> database server user
		- $password -> database server user password
		- $dbname -> database name, companies
	- Now everything is set-up and ready to be used.