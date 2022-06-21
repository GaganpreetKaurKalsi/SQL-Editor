
![image](https://user-images.githubusercontent.com/54144759/174669801-4c06e4a0-1e3c-48f7-8ea1-f2f0238dbf28.png)

<br>
<br>
<br>


<p align="center"><img src="https://rawcdn.githack.com/GaganpreetKaurKalsi/SQL-Editor/b8b9d4909166700cee91eaf4a5616117de4ccc17/src/assets/logo.png" /></p>

<h1 align="center">SQL Editor - Made in React</h1>

<br>

## 🧐 Overview
An application created using **ReactJS** and **Sass**.          
You can run SQL queries here.    

The application contains an SQL editor where you can write your query. There are 2 buttons **Clear** and **Run**. You can click on RUN button to run the query. Once RUN is pressed, TableName is searched in the given query and is tallied with the TABLE_NAMES, which is an array of tables names supported by the application. If the table name queried by the user is present in the TABLE_NAMES array, API request is made to fetch data from a URL. Then the data and query is processed with the help of **alasql**. It returns us the data in a JSON format. Then we display the data in form of a table.

The application contains 2 more components - 
- Table Names section which contains the names of the tables supported so user can easily make the queries. SEARCH BAR provided
- History Panel where all the queries RUN are stored with there status. SEARCH BAR provided



_Note : For now only SELECT queries on given tables are supported. Will increase it's application in future._


<br>

## 🥳 Live URL

The application is hosted on Vercel. Please find the link to it below.            
<h3><a href="https://sql-editor-react.vercel.app/sql-editor">SQL-Editor</a></h3>

<br>


## 😎 Tech Stack

![ReactJS](https://img.shields.io/badge/ReactJS-61DAFB?&style=for-the-badge&logo=react&logoColor=white&style=plastic)  ![SASS](https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white&style=plastic)


<br>

## 😧 Some major Dependencies
- @uiw/react-codemirror ```4.8.1``` - Editor to write query
- alasql ```1.7.3``` - To run SQL query on a .csv file and return result in form of JSON
- react-hot-toast ```2.2.0``` - For notifications such as success and error
- react-loader-spinner ```5.1.5``` - Loader for the table
- react-table ```7.8.0``` - To create result table
- sass ```1.52.3``` - for writing CSS


<br>

## 🙄 Page load time
![image](https://user-images.githubusercontent.com/54144759/174902868-1f7cf305-1db6-4396-a20f-fa167601346f.png)
