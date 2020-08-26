- Walking Skeleton:
  ```javascript
    ng new ng-net-core-ef-dating-app-client
  ```
  - Recommended extensions:
    - Angular Snippets
    - Angular Files
    - Angular Lauguage Service
    - Auto Rename Tag
    - Bracket Pair Colorizer 2
    - Degugger for Chrome
    - Material Icon Theme
    - Prettier - Code formatter
    - TSLint
    - angular2-switcher
  
  - Http Request:
    - Observable: Stream of data via the API. We need to subscribe to the observable.
    - CORS Policy. Client knows to trust the server.
      - API: Add CORS as a service. Then add as middleware.
      - CORS ordering is *very* important within the Configure class.
  
  - Display:
    - *ngFor: Structural direction. DOM modification.
  
  - Bootstrap:
  ```javascript
    npm install bootstrap font-awesome
  ```
    - Beware: This array does not guarentee cascade in a provided order.
    ```javascript
      "styles": [
        "src/styles.css"
      ],
    ```
