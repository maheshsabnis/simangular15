# NgSimApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.1.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


npm install --global @angular/cli

The 'ng' CLI to create
ng new [NAME-OF-THE-APPLICATION]

- Angular 15 Stable Features
  - TypeScript 4.8 SUpport
  - Node.js 14.x, 16.x, and 19.x
  - Standalone Components
    - Optimized Depednency Management
    - Routing Improvizations
    - Directive Decomposition *
  - Image Improvization
    - NgOptimizedImage
  - Stack Trace in Browser improvized  
  - RxJs
    - 7.0+
    - Improved Performance for Data Collection Received from REST API calls  

# angular.json
  - @angular-devkit
    - Build Host for generating dev build for the application
    - Generate JS files with all dependencies needed by the application
    - all these dependencies will be loaded and executed in browser


Initial Chunk Files   | Names         |  Raw Size
vendor.js             | vendor        |   2.04 MB | 
styles.css, styles.js | styles        | 398.72 kB | 
polyfills.js          | polyfills     | 314.27 kB | 
main.js               | main          |  48.10 kB | 
runtime.js            | runtime       |   6.52 kB | 

                      | Initial Total |   2.79 MB

vendor.js: Angular Object Model
main.js : Application Code
runtime.js: Borwser Host COde aka WebPack, this will take care of all depednencies required by app
polyfills.js:  Managed by Zone.js, this will create execution context for JS files in  browser

- FormsModule: Anguar module for
  - Typed and UnTyped Forms (Angular 15)
    - Map the DataTYpe of Properties with UI element for UI element Validation
  - Databinging Attribute DFirectives 
    - ngModel
      - ngModelChanged Event
        - Boiler-plate code that will be inyternally executed for each changed in UI elements as well as its property
        - Thats why it is Two-Way Binding 
- *ngFor, a Structural Directive which is used to generate DOM dunamically based on data passed to it

# Analyze the Component
  - Go ahead with Code Reusability
    - Better create "Angular Service" for such re-usable Utility Code
      - We can use this code across mutiple components
  - Make sure that the repetative UI MUST be avoided, instead create a re-usable Component
    - Create a Re-usable Component Directive(?)
  - Directive
    - Reusable
      - UI
        - Component Directive for UI Reusability
          - Expose Properties those are responsible to Read/Write data
          - Define @Input decorated properties
            - These will be used for 'Property-Binding'
            - [PROPERTY-NAME]="[VALUE-FROM-PARENT]"
          - @Output decorated EventEmitter<T>
            - Host an event in component
            - The Hosted event is emitted from Child to the Parent
            - This is used for EventBinding
            - (EVENT-NAME)="[METHOD-FROM-PARENT]"
              - EVENT-NAME is declared in child component using the EventEmitter  
      - Attribute
        - Custom HTML attribute with behavior (logic) as well as defining custom values for exisitng HTML element
          - @Directive Decorator
            - BAse TYpe for @Component Decorator
            - Property
              - selector
            - When creating the Attribute Directive, the selector will be as follows
              - select : '[SELECTOR-NAME]'
          - Events in Directive
            - These event are hosted by directive itself and they will be activated when the directive is applied on HTML element
              - HostListener
                - Listen an event on HTML element and activates the Directive
              - Renderer2
                - COnnect with DOM on browser to notify the new rendcering for HTML element after the Directive is activated   
              - ElementRef
                - A HTML element on which the Directive is applied
              - Renderer2 and ElementRef Must be injected in Custom Directive class
                - These two classes will be resolved by the 'BrowserModule'     
             - Directive Composition
              - USe Existing Directive inside the Custom Directive and directly apply in HTML element
                - This will apply all directives at a time on HTML elemet
                - This makes the HTML simple and readable            
      - Structure Generator
        - AKA Structural Directive to Add/Remove DOM dynamically
          - *ngIf
          - *ngFor

# Angular Service
- @Injectbale() decorator applied on the service class
  - Make the class ready for registration DI Container
  - ProvidedIn
    - root
      - All COmponents in Current Module
      - All Components in Shared (Utilitiy/Feature) modules
    - platform
      - All COmponents in Current Module
      - All components in Library Modules (aka External Module)
    - any
      - All Components in Current Module
      - Lazy loaded modules
- Utility Object that can be used for following
  - Defining Re-Usable Logic that is needed by various components/directives across angular application
    - Common required logic for data manipulation
  - Defining global application state to share data across components
    - Creating a Singleton object with mutability for the data that can be shared across components
      - A object for storing data
      - Notification Object for all subscribers to notify the data changes
        - EventEmitter<T>
          - T is the type of data maintaned in the Service object
        - Subject<T>
          - Object from RxJs
          - Like EventEmitter
          - Emits the lates value out-of-the-box to the subscribers  

  - Defining the resource intensive logic that we cannot write into the component
    - Async calls
    - Observable Objects
# RxJs
- pipe()
  - Creating a Constinuous stream of operations over the obserrvables
- map()
  - Updating Observables based on logic
  - The return the same observable
- filter
  - process the observable based on conditions and generate new Observable
- of()
  - Craetes an observable based on collecgtion (Array)
- forkJoin()
  - USed to Perform Parallel Processing on multiple Observables
- combineLatest()
  - Combine Mumtiple Observables into a single Observable    


