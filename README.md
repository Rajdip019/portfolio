# Notion CMS Next.js Blog / Portfolio Website 💻
Hey, this is Rajdeep, creator of this project. Before you go ahead, here is a thing you must know! You can freely use this template to build your personal blog website/portfolio website but make sure to remove my personal data before using the template. Here is comprehensive guide if you want to use this website as a template.

## How to setup Local Environment ( TEMPLATE USAGE )

### Step 1 : ⏬

Clean up my personal data and prepare the repo.

```bash
npm run prepare 
```

### Step 2 

Install all dependencies :accessibility:

```
npm install
```

### Step 3 ✉️

Add Environment Variables. There is only two variables required to make this work. You already have a **.env.local** file in your root directory if you have done the Step 1 properly.
```
NOTION_TOKEN=
NOTION_DATABASE_ID=
```

#### Getting the env. 🔍
Head to [Notion's Integration Website](https://www.notion.so/my-integrations). Make a new integration and get the secret key from there. That is your NOTION_TOKEN.

Finally it's time to get the NOTION_DATABASE_ID

See the URL of the page. For example https://www.notion.so/rajdeepsengupta/Blogs-cd0db9f8767843ca9563c591a233be5b. Here `cd0db9f8767843ca9563c591a233be5b` is the database id.

### Step 4 🤝

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

### Step 5 🏃
When all is set, start the server and check using...

```bash
npm run dev
```

Now start writing blogs on Notion and it will work magically.  

<br />
## Want to contribute to the repo to make it better?? 🔥
Yooo! Everyone is welcome to cohntribute to this repo and make the bogs and personal website better and better. This could be a small typo fix, design fix to adding some big functionality. Eveything is wecome. Also if you want to make the development and contributing to this repo smoother and better you are welcomes ad well with any suggestion. 

**Just go through this README on how to contribute** : [How to Contribute](()
