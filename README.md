# Application Folder

## Purpose
The purpose of this folder is to store all the source code and related files for your team's application. Source code MUST NOT be in any other folder. <strong>YOU HAVE BEEN WARNED</strong>

You are free to organize the contents of the folder as you see fit. But remember your team is graded on how you use Git. This does include the structure of your application. Points will be deducted from poorly structured application folders.

## Please use the rest of the README.md to store important information for your team's application.

# Getting started 

<strong>Prerequisites</strong>
* install __node.js__ version 12
* install node package manager (__npm__), it should come with your install of node
    run 'node -v' and 'npm -v' to check your install
* __postgres__ should be installed, and you should have access to a localhost server.
    You should be able to create a database and table on your machine locally and query them.  You should also have __pgAdmin__, unless you are a psql legend. 

<strong>If you have the the above prereqs, then continue:</strong>

1. using the pgAdmin tool -> create a database called 'db101' in your local server instance.
1. clone the repo to your local disk using 'git clone'
1. in the terminal, cd to '\csc648-03-sp20-t101\application\server>' and run 'npm install' then 'npm run db:migrate' 
1. still in '\server', create a '.env' file and give it the following line:
    __DATABASE_URL=postgres://${db_username}:${password}@localhost:5432/db101__
    
    replace ${db_username} with your postgres username and ${password} with your password
1. cd to '\csc648-03-sp20-t101\application\frontend>' and run 'npm install'

<strong>The application is now intialized.</strong> 

I setup Concurrently so we can run the entire application (frontend and backend) using a single command from within the \server folder.

cd to '\server' and run 'npm run start:dev'

The node.js server will spin up on port 4000.
The react server will spin up on port 3000 and proxy it's requests to port 4000.



