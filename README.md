# Setup Project
- Clone this repository
- Install npm dependencies

# Deploy Project
- Ensure package.json has homepage property setup as follows:
```json 
"homepage": "https://{github-username}.github.io/{repo-name}"
```
- Ensure script section is updated with the following properties:
```json
"scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
    ...
}
```
- Ensure that .env.development and .env.production files are present
```json
VITE_BASE_URL= "/ for DEV" OR "/portfolio/ for PROD"
VITE_EMAILJS_SERVICE_ID="<service-id>"
VITE_EMAILJS_TEMPLATE_ID="<template-id>"
VITE_EMAILJS_PUBLIC_KEY="<public-key>"
```

- Run build command and verify that contents in dist are being built correctly

- Run the deploy command:
```shell
npm run deploy
```