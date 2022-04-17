# Scout Application 
# Walks - of - Love - Frontend Repository

This repository uses React to support the Frontend UI and has been seperated from the Backend repository to mimic the structure of a real world development team. Hiro Wallet, a web extension, has been used to handle account authorization. 

Hiro web wallet is unique because it was built for Stacks (STX), which a a cryptocurrency / blockchain that uses Bitcoin as its security layer. When a user creates an account with Hiro they are provided a 24 word seed phrase which is hashed to create a pair of public and private keys. Multiple accounts can be set up within the wallet and each account has a unique ID, which is perfect for single sign on and security.

Using Hiro, the user can copy their public key (unique ID for each account), add it to the ID field on the hompage, enter their first and last name, email, password, and identify whether they are a pet owner or pet walker. Once the user submits the form, then their information is stored in the Database on the given API endpoint: /api/owner or /api/walker. Suggestion: create 2 accounts within the Hiro web wallet, sign Account 1 up as an Owner, and sign Account 2 up as a Walker.

As long as the user has completed the form appropriately, they should be able to select Login, choose Account 1 or Account 2 from the Hiro Web Wallet modal, and the webpage should transition them to the given dashboard (owner/walker). From the Owner perspective, the user can create pets, create jobs based on the select pet, and delete jobs as needed. From the Walker perspective, the user can view the list of jobs available. Accept and delete functionality has not been added at the moment. 

## Pre-requisite 
### Step 1
In order to use the custom authorization tool for this web application, be sure to install the Hiro Web Wallet. This Web Wallet works great with Google Chrome: https://www.hiro.so/wallet

### Step 2
Pin the Google Chrome Extension to your browser for easy access. 

### Step 3
Open the Hiro Web Wallet, select to create a new account, record the seed phrase, and enter a strong password. Once logged in, create 2 accounts, one will be used for the Owner account and another for the Walker account. Checkout the demonstration video below for a tutorial. 

[Demonstration Video # 1](https://github.com/gemsjohn/walks-of-love-frontend/blob/main/public/full_Demo.mp4)

### Note
If you forget your password or sign out of Hiro Wallet you can always restore your account with the 24 Word Seed Phrase. Checkout the demonstration video below for a tutorial.

[Demonstration Video # 2](https://github.com/gemsjohn/walks-of-love-frontend/blob/main/public/seed_phrase_recovery.mp4)

## Installation Instructions
### Step 1
`git clone git@github.com:gemsjohn/walks-of-love-frontend.git`

### Step 2
Create a .env file with the following entry: `SKIP_PREFLIGHT_CHECK=true`

### Step 3
In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.

## User Interface Examples
### Homepage
![Example Image](https://github.com/gemsjohn/walks-of-love-frontend/blob/main/public/homepage.png)

### Owner Dashboard
![Example Image](https://github.com/gemsjohn/walks-of-love-frontend/blob/main/public/owner.png)

### Walker Dashboard
![Example Image](https://github.com/gemsjohn/walks-of-love-frontend/blob/main/public/walker.png)

### Hiro Wallet (2 Accounts)
![Example Image](https://github.com/gemsjohn/walks-of-love-frontend/blob/main/public/hiro_wallet.png)