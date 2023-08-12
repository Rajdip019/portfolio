# Want to contribute? You are most Welocome 🙋‍♂️🙋
## Let's get started ! 

### What you can contribute :
- README and Documentation
- New Features
- New pages and sections
- Support for multiple things ( Idk what Lol )

The main goal is to setup a proper bloging website with portfolio with all multiple features.

## How to setup Local Environment ( For Contributors )

### Step 1

Install all dependencies :accessibility:

```
npm install
``` 

### Step 2 ✉️

Add Environment Variables. There is only two variables required to make this work. You already have a **.env.local** file in your root directory if you have done the Step 1 properly.
```
NOTION_TOKEN=
NOTION_DATABASE_ID=
```

#### Getting the env. 🔍
Head to [Notion's Integration Website](https://www.notion.so/my-integrations). Make a new integration and get the secret key from there. That is your NOTION_TOKEN.

Finally it's time to get the NOTION_DATABASE_ID

See the URL of the page. For example https://www.notion.so/rajdeepsengupta/Blogs-cd0db9f8767843ca9563c591a233be5b. Here `cd0db9f8767843ca9563c591a233be5b` is the database id.

### Step 3 🤝

Making Blogs database in notion and connecting them to our blogs website.


For the next env. Make a new page in Notion and make a new database in that. 

Add these three column there
```
Name
Published
Authors
```
Here is a screenshot of the table and the propery names. ⬇️
<img width="916" alt="Screenshot 2023-08-04 at 5 42 30 PM" src="https://github.com/Rajdip019/portfolio/assets/91758830/420a1659-cf92-4ef3-9a3b-82d5f952afc1">


Make sure to name them exactly this.

Now it is time to connect the page to the Developers App you just built.

Go to Shares of the page and scroll down until you find **Connections** . Click on **Add connections** and add your developer app. 

Here is a screenshot of where you can find the connections. And then you can add your app you made in this website [Notion's Integration Website](https://www.notion.so/my-integrations) ⬇️
<img width="1034" alt="Screenshot 2023-08-04 at 5 44 11 PM" src="https://github.com/Rajdip019/portfolio/assets/91758830/39babb13-9f74-4278-a6c9-720acbefa40f">

### Step 4 🏃
When all is set, start the server and check using...

```bash
npm run dev
```

Now start writing blogs on Notion and it will work magically.  

## Raising an Issue :
You can raise a PR for everything. From suggestions to improve workflow to adding big features. 

### The two main thig to remember while raising a PR :
1. Give a clear title and add description what you are thinking and what change you wanna make. With screenshots ( if applicable )
2. Before raising a PR try to find is someone already raise the same issue.

## Raising a PR :
If you are raising a PR make sure it's not a duplicate one and always target your PR to **`stage`** branch.

#### Naming your branch 
Naming your branch is a important thing to later track down if any issue occurs. Use this pattern `<github-username>/feature` while naming your branch.
