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

  - Client Login and Register:
    - Creating Login and the NAVBAR.
      - e.g.: https://getbootstrap.com/docs/4.5/examples/jumbotron/
    - Angular Template Forms:
    - Using Services in Angular:
    - Conditionally display elements on a page. e.g.: Login/Logout.
      - https://getbootstrap.com/docs/4.5/components/dropdowns/
      - Structural directives directly change the DOM. e.g.: *ngIf="loggedIn()"
    - Create a register component:
    - Component communication. Parent/child. Also, child-to-parent.

- Error Handling:
  - Let's handle some errors:
  
- Third-Party Components:
  - Alertifyjs
    ```javascript
      npm i alertifyjs
      npm install @types/alertifyjs
    ```
  - Angular JWT
    ```javascript
      npm i @auth0/angular-jwt
    ```
  - NGX Bootstrap
    - https://valor-software.com/ngx-bootstrap/#/dropdowns
    ```javascript
      npm i ngx-bootstrap
    ```
  - Bootswatch
    - https://bootswatch.com/united/
    ```javascript
      npm install bootswatch
    ```

- Routing:
  - Setting up routing:
  - Using RouterLinkActive:
  - Using routing in code:
  - Protecting the routes:
    - A type of auth guard.
    ```javascript
      ng g guard auth --skipTests
    ```
  - Protecting multiple routes at once:

- Building a great looking UI:
  - Using types in Typescript:
    - An interface is only used by Typescript at compile time, and is then removed.
    - Advantages: (1) Compile-time checking. (2) Intellisense. (3) Auto-completion.
    - Creating type interfaces of both user and photo.
  - Retrieving Users from the API:
  - Using Bootstrap classes to create member cards:
  - Adding a detailed view of the users.
    - https://valor-software.com/ngx-bootstrap/#/tabs
  - Route resolvers:
  - Adding a Photo gallery:
    - https://github.com/SaeedSpate/ngx-gallery-9
    ```javascript
      npm install ngx-gallery-9 --save
    ```

- Updating profiles
  - Creating a component for editing profile.
  - Using a CanDeactivate Route Guard. (Unsaved Changes.)
  - The @ViewChild decorator.
  - Persisting changes to the API.