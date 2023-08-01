# Notion CMS Next.js Blog Website
Hey, this is Rajdeep, creator of this project. Before you go ahead, here is a thing you must know! You can freely use this template to build your personal blog website/portfolio website but make sure to remove my personal data before using the template. Here is comprehensive guide if you want to use this website as a template.

## How to setup Local Environment ( TEMPLATE USAGE )

### Step 1 :

Clean up my personal data and prepare the repo.

```bash
npm run prepare 
```

### Step 2 :

Install all dependencies 

```
npm install
```

## Step 3 

Add Environment Variables. There is only two variables required to make this work. You already have a **.env.local** file in your root directory if you have done the Step 1 properly.
```
NOTION_TOKEN=
NOTION_DATABASE_ID=
```

#### Getting the env.
Head to [Notion's Integration Website](https://www.notion.so/my-integrations). Make a new integration and get the secret key from there. That is your NOTION_TOKEN.

Finally it's time to get the NOTION_DATABASE_ID

See the URL of the page. For example https://www.notion.so/rajdeepsengupta/Blogs-cd0db9f8767843ca9563c591a233be5b. Here `cd0db9f8767843ca9563c591a233be5b` is the database id.

### Step 4

Making Blogs database in notion and connecting them to our blogs website.

For the next env. Make a new page in Notion and make a new database in that. 

Add these three column there
```
Name
Published
Authors
```

Make sure to name them exactly this.

Now it is time to connect the page to the Developers App you just built.

Go to Shares of the page and scroll down until you find **Connections** . Click on **Add connections** and add your developer app. 

### Step 5
When all is set, start the server and check using...

```bash
npm run dev
```

Now start writing blogs on Notion and it will work magically. 