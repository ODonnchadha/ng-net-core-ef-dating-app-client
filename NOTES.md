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

- Uploading Photos:

  - Where to store?
    - Database? BLOBs. Least effecient. Performance cost.
    - File system? Disk space cost.
    - Cloud provider. Scalable. URL stored in database. Complexity.
    - Cloudinary. Free tier. API key/secret.
      - 1. Client uploads photo to API with JWT.
      - 2. Server uploads photo to Cloudinary.
      - 3. Cloudinary stores photo, sends response.
      - 4. API saves photo URL and publicid back to DB.
      - 5. Saved in DB and given SQL id.
      - 6. 201 CREATED response with location header.
      - https://cloudinary.com/

  - Adding a new controller.
  - Adding a file uploader. (Third-party library.)
    - ng2-file upload:
    - https://valor-software.com/ng2-file-upload/
    ```javascritp
      npm install ng2-file-upload --save
    ```
  - Setting the default photo.
  - Any-to-any component communication:
    - Any service is designed to supply methods and properties to any component.
    - And we'll then subscribe to an associated observiable: Behavior Subject:
      - Is a type of subject:
        - Can be subscribed to.
        - Subscribers can receive updated results.
        - A subject is an observer (So we can send values to it.)
      - Behavior Subject:
        - Needs an initial value as we must always return a value on subscription.
        - On subscription returns the last value of subject.
        Can use the getValue() method in non-observeable code.
  - Deleting photos.

  ## Reactive Forms:
    - Introduction:
      - Template-based versus reactive forms:
        1. Most code is written inside the "template."
        2. Most code is written inside the component.
    - Validation:
    - Custom Validators:

    - The "Date" Problem:
      - Varities, formats, localization. Browser vendors implement.
      - https://caniuse.com/?search=date
      - Polyfills? Ployfill.ts. Uncomment code.
      - https://valor-software.com/ngx-bootstrap/#/datepicker

    - Wire it all up to the API:
  
  - Date formatting:
  ```javascript
    npm install time-ago-pipe --save
  ```

  ## Paging, Filtering, & Sorting.
    - Paging in API/SPA.
      - Avoid performance problems. 
      - Parameters are passed via querystring.
      - Pagesize should be limited.
      - Always page the results by default.
      - Perform on DB queries. Not within the controller.
      - Substitute .ToListAsync() with a defered execution: IQuerable<T>
      - An expression tree will be created. Execution:
        - .ToListAsync(), ToArrayAsync(), ToDictionary()
        - Singleton queries.
      
      - https://valor-software.com/ngx-bootstrap/#/pagination

    - Filtering in API/SPA.
    - Sorting in API/SPA.

  # 'Like' functionality.