# Using fetch API

## [promise](promise.js)
promise is added to a `taskqueue`

## fetch API

### [XMLHttpRequest](XML.html) 
Only will work with browsers<br/>
heavily AJAX programming

### [fetch](fetch.js)
old method was `HttpRequest` and currently used`fetch` *(use and return promise)*

fetch does not go to task queue it make its own `vip task queue` 
- special queue
- special/priority/micro task queue

![alt text](image.png)

#### Working of fetch
![alt text](image-1.png)

if fetched and there is an error it is a response <br/>
because the only real error is when it can't even do fetch