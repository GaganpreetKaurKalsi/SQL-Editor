
![image](https://user-images.githubusercontent.com/54144759/174669801-4c06e4a0-1e3c-48f7-8ea1-f2f0238dbf28.png)

<br>
<br>
<br>


<p align="center"><img src="https://rawcdn.githack.com/GaganpreetKaurKalsi/SQL-Editor/b8b9d4909166700cee91eaf4a5616117de4ccc17/src/assets/logo.png" /></p>

<h1 align="center">SQL Editor - Made with React</h1>

<br>

## 🧐 Overview
An application created using **ReactJS** and **Sass**.          
**You can run SQL queries here.**    

The application contains an SQL editor where you can write your query. There are 2 buttons **Clear** and **Run**. You can click on RUN button to run the query. Once RUN is pressed, TableName is searched in the given query and is tallied with the TABLE_NAMES, which is an array of tables names supported by the application. If the table name queried by the user is present in the TABLE_NAMES array, API request is made to fetch data from a URL. Then the data and query is processed with the help of **alasql**. It returns us the data in a JSON format. Then we display the data in form of a table.

The application contains 2 more components - 
- **Table Names section** which contains the names of the tables supported so user can easily make the queries. SEARCH BAR provided
- **History Panel** where all the queries RUN are stored with there status. SEARCH BAR provided



_Note : For now only SELECT queries on given tables are supported. Will increase it's application in future._


<br>

## 🥳 Live URL

The application is hosted on Vercel. Please find the link to it below.            
<h3><a href="https://sql-editor-react.vercel.app/sql-editor">SQL-Editor</a></h3>

<br>


## 🤗 SOME Queries you can try to run
1. ```SELECT * FROM Customers```
2. ```SELECT * FROM Categories```
3. ```SELECT * FROM Employee_territories;```
4. ```SELECT * FROM Employees;```
5. ```SELECT * FROM Orders;```
6. ```SELECT * FROM Products;```


<br>

## 😎 Tech Stack

![ReactJS](https://img.shields.io/badge/ReactJS-61DAFB?&style=for-the-badge&logo=react&logoColor=white&style=plastic)  ![SASS](https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white&style=plastic)


<br>

## 😧 Some major Dependencies
- @uiw/react-codemirror ```4.8.1``` - Editor to write query
- alasql ```1.7.3``` - To run SQL query on a .csv file and return result in form of JSON object
- react-hot-toast ```2.2.0``` - For notifications such as success and error
- react-loader-spinner ```5.1.5``` - Loader for the table
- react-table ```7.8.0``` - To create result table
- sass ```1.52.3``` - for writing CSS


<br>

## 🙄 Page load time
I used Lighthouse Chrome DevTools to check application performace.
![image](https://user-images.githubusercontent.com/54144759/175161784-aa1a49b2-cddf-480d-a884-35efe602b363.png)
![image](https://user-images.githubusercontent.com/54144759/175161331-64ed2b8f-92ba-4e6f-98e4-accafe142ed8.png)

**The performance metric varies between 96-98**     
Others remain constant


<br>


## 🚶‍♀️🚶‍♀️ Steps taken to optimize

- Used performace optimization hooks - **memo, useMemo and useCallback** to prevent unnecessary re-rendering of components and increase performance.     
- Used code splitting for the code-editor component. Using code splitting for all components lead to decrease in performance, so applied to only editor.


<br>      


## 😍 New Design

<a href="https://www.figma.com/file/czpAvd5q0sG6OdvU3e3Mf5/SQL-Query-Editor?node-id=211%3A19"><b>Link To FIGMA</b></a>

<img width="867" alt="image" src="https://user-images.githubusercontent.com/54144759/196059189-9cd70950-2462-4442-a4fe-b8dab4cb0272.png">


<h3 align="center">THANK YOU!!!</h3>
