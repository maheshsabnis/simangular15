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

# Forms
  - Template Forms
    - NgForm mapped itself with form tag
    - NgModel
      - Handle Data Updates
      - ngModelChanged Event
        - Track the Form Changes
        - UI Change -- The ngModelChanged -- Component's OnngChange -- Update the Component's Property -- OnChange will be completed -- check the UI binding with Property -- OnViewContent Update -- Update the View -- Render it
     - NgModelGroup
      - Manage the Maping of Data Properties with UI Elements inside the form
        - Intrernally Create an instance of FormGroup to Bind the Properties with DOM Elements 
    - Advantages
      - They are simple
      - Caliber of HTML Elements System to Manage the DOM ELements, and performing Data Validations
        - required, pattern, min, max, minlegth, maxlength
        - Apply thse attributes on HTML input Elements to validate the form     

  - Reactive Forms  
    - Approach with which Object's immutation feature is taken into consideration to update the state of the object whne its corresponding Form-Control aka UI Element is updated
    - Internally manages the 'FormState'
      - Build around the 'Observable' streams so that the Object's properties will be updated synchronously when the UI is chaged
      - FormContol Bind with UI --- FormControlChanged --- Update the Model Property
    - @angular/forms
      - ReactiveFormsModule
        - FormGroup
          - Map with the ngForm that represents HTML Form tag
          - Takes all editable elements inside the form tag as FormControlsCollection
        - Each editable element is 'FormControl'
          - FormControl is the Bridge between public property of the Model class an HTML UI Element    
        - FormGroup and FormControl are deribed from 'AbstractControl' class that represents HTML UI Element
          - The 'value' property to read value from HTML element that is bind with the FormGroup (form tag) and FormControl (input element)  
          - The 'setValue()' method to assign data to HTML element
        - formControlName the attribute directive that binds the FormControl instance with HTML element
        - FormBuilder class to build the FormControls so that they can be used in FormGroup
        - The 'Validators' class
          - Class containing Static methods for Validations
            - required(AbstractControl)
            - requiredTrue(AbstractControl)
            - email(AbstractControl)
            - pattern(string | regex)
            - min(number)
            - max(number)
            - minLength(number)
            - maxLength(number)
            - compose([Array of Validators]) 
          - The Validator class has each method returning one of the following
            - ValidationErrors
              - Key : value pair object for Valid or Invalid value
                - e.g.
                  - valid:true | valid:false
                  - invalid:true | invalid:false
            - ValidatorFn
              - Execute a static logic function to validate the value
              - This function return ValidationErrors
          - Valdiation Eveluation on HTML
            - [FormGroup].controls['FORMCONTROLNAME'].dirty
              - The UI element is changed
            - [FormGroup].controls['FORMCONTROLNAME'].valid
              - Check if the Value is valid against rules applied on FormGroup Instance in component
            - [FormGroup].controls['FORMCONTROLNAME'].errors['ERROR-TYPE']
              - errors: ValidationErrors
              - ERROR-TYPE: the Error Condition e.g. required, pattwern, min, max, minlength, maxlength, custom   


      - input element -- FormControlName --- FormControl --- Mapped with  AbstractControl  
        - Encapsulate all events and State Changes 
        -  AbstractControl encapsulate the 'COMPLETE HTML FORM' as a single Object and Read/Write its values   

      - Dynamic Groups generated
```` javascript

      interface UserLoginForm {
         userName: FormControl<string>;
         password?: FormControl<string>; // nullable
      }

      const userLoginForm = new FormGroup<UserLoginForm>({
        userName: new FormControl('', {nonNulable:true}),
        password: new FormControl('', {nonNulable:true})
      });



    // Netsed FormGrom
    const parentFormGroup = new FormGroup<Employee>({
        empNo:new FormControl<string>(''),
        empName:new FormControl(''),
        address: new FormGroup<Address>({
           flatNo:new FormControl(''),
           societyName: new FormControl(''),
           city: new FormControl()
        }),
....
    });  


````


# Routing
- SIngle Page Application (SPA) feature
  -  @anguar/router
    - RouterMododule
      - Routes
        - Route Table
          - Each entry is 'Route' object
      - Route
        - path: URL
        - component: Component to route
        - redirectTo: redirect to default when 'path' does not match
        - children
          - Accepts 'Route' array as inout paraeter for child routing
        - loadChildren
          - lazy loading
          - Load children routes asynchronously
        - canActivate
          - Guards based routing
          - Accepts a Angular Service that is dealing with the Role based / User based route checks
          - This requires the server side role based security 

        - data
          - values based on which guards will be executed           
    - Router
      - used for explict Routing
      - provides method for executing routes
        - the 'navigate(['path', route parameters,,,])'
    - ActivatedRoute
      - Used for Parameter based routing
      - Subscribe to current route url and read parameter
    - CanActivate , used in case of Route Guards
      - Interface
        - the 'canActivate(ActivatedRouteSnapshot, RouterStateSnapshot)' metod
          - ActivatedRouteSnapshot: Varify the current route in route table created using 'Routes'
          - RouterStateSnapshot
            - Define a 'state' for routing
              - the user / role based on which the route path will be executed   
            - Process the routing based on 'data' required for route guards so that based in user/role the routing will be executed    
  -  Route Guard dependencies
    - BehaviorSubject<T> class is required 
      -  create an 'observer' to read the user/roles received from REST API (server) based on which the Guarded Routing will be executed   
  - The [routerLink], the atribute directive for quering to Route Table based on 'path' expression passed to the directive
    - e.g.
      - [routerLink]=['PATH-EXPRESSION-DEFINED-IN-ROUTE']
   - The 
   ```` html
    <router-outlet></router-outlet>
   ````                
      - component directive, that is injected with the View of the Component based on [routerLink] execution
# NGRX


