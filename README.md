# ANGULAR: GETTING STARTED

This is a simple Angular application following the Pluralsight course [Angular: Getting Started](https://https://app.pluralsight.com/library/courses/angular-2-getting-started-update/table-of-contents), by Deborah Kurata.

## Main Concepts

### Modules

Every Angular application must have at least one Angular module, the root application module, commonly called AppModule. Currently, our AppModule declares our root application component, AppComponent. A component must belong to one and only one Angular module. Because the AppModule declares the AppComponent, the AppComponent belongs to the AppModule. The AppModule bootstraps the application with this component, so it is the first component that is loaded for our application.  
An Angular module defines the boundary or context within which the component resolves its directives and dependencies. So when a component contains a directive, Angular looks to the component's module to determine which directives are visible to that component.

### Components

An Angular component includes a template, which lays out the user interface fragment defining a view for the application. It is created with HTML and defines what is rendered on the page. We use Angular binding and directives in the HTML to power up the view. Add to that a class for the code associated with the view. The class contains the properties or data elements available for use in the view. For example, if we want to display a title in the view, we define a class property for that title. The class also contains methods which are the functions for the logic needed by the view. For example, if we want to show and hide an image, we'd write the logic in a class method. A component also has metadata, which provides additional information about the component to Angular. It is this metadata that defines this class as an Angular component. The metadata is defined with a decorator. A decorator is a function that adds metadata to a class, its members, or its method arguments. So a component is a view defined in a template, its associated code defined with a class, and metadata defined with a decorator.

### Templates

We can use the template property and define an inline template using a simple quoted string with single or double quotes. Or we can define an inline template with a multi‑line string by enclosing the HTML in ES 2015 back ticks. The back ticks allow composing a string over several lines, making the HTML more readable.  
In many cases, the better option is to define a linked template with the HTML in its own file. We can then use the template URL property in the component metadata to define the URL of our HTML file.

### Using a Component as a Directive

When a component has a selector defined, we can use the component as a directive. This means that we can insert this component's template into any other component's template by using the selector as an HTML tag.  
When this template is displayed, Angular looks for a component that has a selector with this name. The application looks to the Angular module that owns this component to find all of the directives that are visible to this component.  
We need to ensure that the directive is visible to any component that uses it. There are two ways to expose a directive in an Angular module. We can declare the component in the Angular module. Or if the component is already declared in another Angular module, we can import that module.

### Binding with Interpolation

In Angular, binding coordinates communication between the component's class and its template, and often involves passing data. We can provide values from the class to the template for display, and the template raises events to pass user actions or user-entered values back to the class.  
Interpolation is a one-way binding from the class property to the template. Interpolation supports much more than simple properties. We can perform operations, such as concatenation or simple calculations. We can even call a class method. We use interpolation to insert the interpolated strings into the text between HTML elements, or we can use interpolation with element property assignments.  
The syntax between the interpolation curly braces is called a template expression. Angular evaluates that expression using the component as the context. So Angular looks to the component to obtain property values or to call methods. Angular then converts the result of the template expression to a string, and assigns that string to an element or directive property.

### Handling Input with Two-way Binding

To specify two-way binding in Angular, we use the ngModel directive. We enclose ngModel in square brackets to indicate property binding from the class property to the input element and parentheses to indicate event binding to send a notification of the user-entered data back to the class property. We assign this directive to a template expression.  
Every time we want to use an Angular directive in a template, we need to consider how to make that directive visible to the component associated with that template. Recall that an Angular module defines the boundary or context within which the component resolves its directives and dependencies.

### Transforming Data with Pipes

Pipes transform bound properties before they are displayed, so we can alter the property values to make them more user friendly or more locale appropriate. Angular provides some built-in pipes for formatting values, such as date, number, decimal, percent, currency, uppercase, lowercase, and so on. Angular also provides a few pipes for working with objects, such as the JSON pipe to display the content of an object as a JSON string, which is helpful when debugging, and a slice pipe, which selects a specific subset of elements from a list.  
We can also build our own custom pipes.

#### Defining Interfaces

An interface is a specification identifying a related set of properties and methods. A class commits to supporting a specification by implementing the interface. That means the class includes code for each property and method identified in the interface. We can then use the interface as a data type. ES5 and ES2015 do not support interfaces, but TypeScript does, so interfaces are transpiled out and are not found in the resulting JavaScript. This means that interfaces are development time only. Their purpose is to provide strong typing and better tooling support as we build, debug, and maintain our code.  
In our interface file, we could define a class for the product business object here as well. In general, we only create a business object class if that class provides some functionality that we want to use throughout our application, such as this calculateDiscount method. And if we think we might want to create a business object at some point in the future, then we definitely want to add the I prefix to our interface.

### Using Lifecycle Hooks

A component has a lifecycle managed by Angular. Angular creates the component, renders it, creates and renders its children, processes changes when its data bound properties change, and then destroys it before removing its template from the DOM. Angular provides a set of lifecycle hooks we can use to tap into this lifecycle and perform operations as needed.  

* Use the OnInit lifecycle hook to perform any component initialization after Angular has initialized the data bound properties. This a good place to retrieve the data for the template from a back-end service.  
* Use the OnChanges lifecycle hook to perform any action after Angular sets data bound input properties. We have not yet covered input properties. We'll see those in the next module.
* Ue the OnDestroy lifecycle hook to perform any cleanup before Angular destroys the component.

To use a lifecycle hook, we implement the lifecycle hook interface and we need to import the lifecycle hook interface. We can then write the hook method. Each lifecycle hook interface defines one method whose name is the interface name, prefixed with ng for ngular.

### Nested Components

We can nest a component within another component, and nest that component within yet another component, and so on. And because each component is fully encapsulated, we expose specific inputs and outputs for communication between a nested component and its container, allowing them to pass data back and forth. There are two ways to use a component and display the component's template. We can use a component as a directive. The template is then displayed within the directive tags. Alternatively, we can use a component as a routing target, so it appears to the user that they've traveled to another view. The template is then displayed in a full-page style view.  
We'll define a component as nestable if its template only manages a fragment of a larger view, if it has a selector so it can be used as a directive, and optionally, if it communicates with its container.

#### Passing Data to a Nested Component Using @Input

If a nested component wants to receive input from its container, it must expose a property to that container. The nested component exposes a property it can use to receive input from its container using the aptly named Input decorator. We use the Input decorator to decorate any property in the nested component's class. This works with any property type, including an object. The container component then passes data to the nested component by setting this property with property binding. When using property binding, we enclose the binding target in square brackets. We set the binding source to the data that the container wants to pass to the nested component. The only time we can specify a nested component's property as a property binding target on the left side of an equals is when that property is decorated with the Input decorator.  
In the container's template, we used property binding and define the nested component's input property as the target of the binding. Then we set the binding source to the value we want to pass into the nested component.

### Passing Data from a Component Using @Output

If the nested component wants to send information back to its container, it can raise an event. The nested component exposes an event it can use to pass output to its container using the aptly named Output decorator. We can use the Output decorator to decorate any property of the nested component's class. However, the property type must be an event. The only way a nested component can pass data back to its container is with an event. The data to pass becomes the event payload. In Angular, an event is defined with an EventEmitter object, so here we create a new instance of an EventEmitter.  
When creating an EventEmitter, the generic argument identifies the type of the event payload. In the onClick method, we use the notify event property and call its emit method to raise the notify event to the container. If we want to pass data in the event payload, we pass that data into the emit method. The container component receives that event with the specified payload. In the container component's template, we use event binding to bind to this notify event and call a method. We access the event payload using $event. The only time we can specify a nested component's property as an event binding target on the left side of an equals is when that property is decorated with the Output decorator.

### Services and Dependency Injection

A service is a class with a focused purpose. We often create a service to implement functionality that is independent from any particular component, to share data or logic across components or encapsulate external interactions such as data access. By shifting these responsibilities from the component to a service, the code is easier to test, debug, and reuse.  
There are two ways our component can work with our service. The component can create an instance of the service class and use it. That simple, and it works, but the instance is local to the component, so we can't share data or other resources, and it will be more difficult to mock the service for testing. Alternatively, we can register the service with Angular. Angular then creates a single instance of the service class, called a singleton, and holds onto it. Specifically, Angular provides a built-in injector. We register our services with the Angular injector, which maintains a container of created service instances. The injector creates and manages the single instance, or singleton, of each registered service as required. The Angular injector then provides, or injects, the services class instance when the component class is instantiated. This process is called **dependency injection**.  
Dependency injection is a coding pattern in which a class receives the instances of objects it needs, called its dependencies, from an external source rather than creating them itself. In Angular, this external source is the Angular injector. Now that we've got a general idea of how services and dependency injection work in Angular, let's build a service.
Since Angular manages the single instance, any data or logic in that instance is shared by all of the classes that use it. This technique is the recommended way to use services because it provides better management of service instances, it allows sharing of data and other resources, and it's easier to mock the services for testing purposes.

## Retrieving Data Using HTTP

Most Angular applications obtain data using HTTP. The application issues an HTTP GET request to a web service. That web service retrieves the data, often using a database, and returns it to the application in an HTTP response. The application then processes that data.

### Observables and Reactive Extensions

Reactive extensions represent a data sequence as an observable sequence, commonly just called an observable. Observables help us manage asynchronous data, such as data coming from a back-end service. Observable treat events as a collection. We can think of an observable as an array whose items arrive asynchronously over time. A method in our code can subscribe to an observable to receive asynchronous notifications as new data arrives. The method can then react as data is pushed to it. The method is notified when there is no more data or when an error occurs. Observables allow us to manipulate sets of events with operators.  
Operators are methods on observables that compose new observables. Each operator transforms the source observable in some way. Operators do not wait for all of the values and process them at once. Rather, operators on observables process each value as it is emitted. Some examples of operators include map, filter, take, and merge. The map operator allows us to transform the incoming data.  
We compose observable operators with the observable pipe method, hence the reason that observable operators are sometimes referred to as pipeable operators.

### Sending an HTTP Request

Angular provides an HTTP service that allows us to communicate with a back-end web server using the familiar HTTP request and response protocol. For example, we call a get method of the HTTP service, which in turn sends a GET request to the web server, the web server response is returned from the HTTP service to our product data service as an observable. First, we specify a URL to the products on the web server. This defines where we send our HTTP requests. Note that this URL is shown for illustration purposes only and is not a real URL. Next, we add a constructor. In this case we need Angular's HTTP service, so we inject it here. It creates a private HTTP variable and assigns the injected service instance to that variable. The HTTP service provider registration is done for us in the HttpClientModule included in the angular/common/http package.  

### Exception Handling

As you can imagine, there are many things that can go wrong when communicating with a back-end service, everything from an invalid requests to a lost connection. So let's add some exception handling. There are two key observable operators that we'll need.  

* Tap taps into the observable stream and allows us to look at the emitted values in the stream without transforming the stream. So tap is great to use for debugging or logging.
* CatchError catches any error. We import them both from RxJS operators. As we discussed earlier in this course, to use these operators we access the pipe method of the observable.

We then pass in the operators, separated by commas. Here the tap operator logs the retrieved data to the console. That way we can verify it's been retrieved correctly, and the catchError operator takes in an error handling method. The error handling method gets one parameter, the error response object. In the error handling method, we can handleError as appropriate. We can send the error information to a remote logging infrastructure or throw an error to the calling code. Now let's add exception handling to our product service.

### Subscribing to an Observable

Observables are lazy. An observable doesn't emit values until we subscribe. So when we are ready to start receiving values in our component, we call subscribe. The subscribed method takes an optional argument, which is an observer object. As its name suggests, the observer object observes the stream and responds to three types of notifications, next, error, and complete. We use the observer object to define handler functions that execute on these notifications. The first handler function is often called a next function because it processes the next emitted value. Since observables can handle multiple values over time, the next function is called for each value the observable emits. The second is an error handler function, and yep, you guessed it, it executes if there is an error.

## Navigation and Routing Basics

### Configuring Routes

Routing is component-based, so we identify the set of components that we want to provide as routing targets and define a route for each one. Let's see how this is done. An Angular application has one router that is managed by Angular's router service, and we know that before we can use this service, we need to register the service provider in an Angular module. Similar to the HTTP module, Angular provides a RouterModule in the angular/router package that registers the router service provider. To include the features of this external module in our application, we need to add it to the imports array of our application's Angular module. In addition to registering the service provider, the RouterModule also declares the router directives. RouterModule also exposes the routes we configure.  
Before we can navigate to a route, we need to ensure that the routes are available to the application. We call the RouterModule's forRoot method and pass our array of routes to that method. This establishes the routes for the root of our application. If we want to use hash style routes instead of HTML5 style routes, we change this code to set useHash as shown here. With that, we are ready to configure some routes. The router must be configured with a list of route definitions. Each definition specifies a route object. Each route requires a path. The path property defines the URL path segment for the route. When this route is activated, this URL path segment is appended to the URL of our application. In most cases, we also specify a component, which is the component associated with the route. It is this component's template that is displayed when the route is activated.

### Tying Routes to Actions

The route configuration handles the URLs, so the last techniques will just work. We need to handle the first technique by tying routes to the user actions. We need to decide how we will show the routing options to the user. We could display a navigation pane with links, we can provide a toolbar or images, or we can build a navigation menu, like this one. In a more full-featured application, the menu could have many more options and sub options, but this will do for our purposes. We define that menu as part of this component's template. We then need to tie a route to each menu option. We do that using the routerLink directive. The routerLink is an attribute directive, so we add it to an element such as the anchor tag here, and we enclose it in square brackets. We bind it to a template expression that returns a link parameters array. The first element of this array is the string path of a route. Additional elements can be added to this array to specify optional route parameters. The router uses this array to locate the associated route and build up the appropriate URL based on any provided parameters. When the user selects the option, the associated route is activated. Activating a component route displays that component's view.

### Placing the Views

We use the router-outlet directive. We place that directive in the host component's template. The routed component's view then appears in this location. We add the router-outlet in the template where we want to display the routed component's view. Whenever a route is activated, the associated component's view displays here.  
When the user navigates to a feature tied to a route with a routerLink directive, the router link uses the link parameters array to compose the URL segment. The browser's location URL is changed to the application URL plus the composed URL segment. The router searches through the list of valid route definitions and picks the first match. The router locates or creates an instance of the component associated with that route. The component's view is injected in the location defined by the router-outlet directive and the page is displayed.

### Passing Parameters to a Route

We sometimes need to pass parameters to a route. The first step to passing parameters to a route is to configure the route with parameters. We define a slash, a colon, and a placeholder for the parameter. If multiple parameters are needed, we'd repeat this with another slash, colon, and placeholder. With the route definition in place, we can decide where we want the user to activate this route.  
To get the parameter from the URL, we use the ActivatedRoute service provided by the router. We want an instance of this service, so we define it as a dependency in our constructor. Then we use the instance of the ActivatedRoute service to get the desired parameter. There are two different ways to get the parameter. We could use a snapshot or we could use an observable. Use the snapshot approach if you only need to get the initial value of the parameter. If you expect the parameter to change without leaving the page, use an observable. For example, if we had a Next button on the Product Detail page to display the next product, the URL will change to the next product's ID, so you'd want to use an observable instead.

### Protecting Routes with Guards

The Angular router provides several guards, including CanActivate to guard navigation to a route, CanDeactivate to guard navigation away from the current route, Resolve to pre-fetch data before activating a route, and CanLoad to prevent asynchronous routing. In this clip, we work through how to implement the CanActivate guard. You can use the same techniques we're covering here to implement any other type of route guard. We'll build a guard that prevents navigation to the product-detail route unless a specific condition is true. Building a guard clause follows the common pattern used throughout Angular. Create a class, add a decorator, and import what we need. Since we are implementing this guard as a service, we use the Injectable decorator.
