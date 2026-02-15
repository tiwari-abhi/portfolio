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
- Run the deploy command:
```shell
npm run deploy
```
