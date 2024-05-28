Certainly! Here are detailed examples for each key in the Fetch API `init` object to help you understand their usage and impact.

### method

Defines the HTTP method for the request (e.g., `GET`, `POST`, `PUT`, `DELETE`, etc.).

#### Example
```javascript
fetch('https://api.example.com/data', {
  method: 'POST' // Request using POST method
});
```

### headers

Specifies the headers to include in the request.

#### Example
```javascript
fetch('https://api.example.com/data', {
  headers: {
    'Content-Type': 'application/json', // Indicating the media type of the resource
    'Authorization': 'Bearer token' // Authorization token
  }
});
```

### body

Contains the body of the request. Used with methods like `POST`, `PUT`, and `DELETE`.

#### Example
```javascript
fetch('https://api.example.com/data', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ key: 'value' }) // Sending JSON data in the request body
});
```

### credentials

Indicates whether cookies and other credentials should be sent with the request.

#### Example
```javascript
fetch('https://api.example.com/data', {
  credentials: 'include' // Send cookies with the request
});
```

### mode

Determines the mode of the request, such as CORS, no-CORS, or same-origin.

#### Example
```javascript
fetch('https://api.example.com/data', {
  mode: 'cors' // Allow cross-origin requests
});
```

### cache

Specifies how the request will interact with the browser's cache.

#### Example
```javascript
fetch('https://api.example.com/data', {
  cache: 'no-cache' // Bypass the cache and fetch a fresh copy
});
```

### redirect

Indicates how to handle redirects.

#### Example
```javascript
fetch('https://api.example.com/data', {
  redirect: 'follow' // Automatically follow HTTP redirects
});
```

### referrer

Sets the referrer of the request, either as a URL string or specific values.

#### Example
```javascript
fetch('https://api.example.com/data', {
  referrer: 'client' // Default referrer policy
});
```

### referrerPolicy

Controls the referrer information sent with the request.

#### Example
```javascript
fetch('https://api.example.com/data', {
  referrerPolicy: 'no-referrer-when-downgrade' // Send referrer for same-origin requests, but not for cross-origin downgrades
});
```

### integrity

Allows you to ensure that a fetched resource has not been tampered with.

#### Example
```javascript
fetch('https://cdn.example.com/library.js', {
  integrity: 'sha384-oqVuAfXRKap7fdgcCY5uykM6+R9GqQ8K/uxZcjQvNMk=" // Ensure integrity of the fetched resource
});
```

### keepalive

Indicates whether the request can outlive the page. Useful for requests made just before a page unloads.

#### Example
```javascript
fetch('https://api.example.com/data', {
  keepalive: true // Allow the request to continue after the page unloads
});
```

### signal

Allows you to abort the request using an AbortController.

#### Example
```javascript
const controller = new AbortController();
const signal = controller.signal;

fetch('https://api.example.com/data', { signal })
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => {
    if (error.name === 'AbortError') {
      console.log('Fetch aborted');
    } else {
      console.error('Error:', error);
    }
  });

// Abort the request after 5 seconds
setTimeout(() => controller.abort(), 5000);
```

### window

Reserved for future use. Setting this key has no effect.

#### Example
```javascript
fetch('https://api.example.com/data', {
  window: null // Currently has no effect, reserved for future use
});
```

### Summary Example

Combining all the options together in a comprehensive example:

```javascript
const controller = new AbortController();

fetch('https://api.example.com/data', {
  method: 'POST', // HTTP method
  headers: {
    'Content-Type': 'application/json', // Content type
    'Authorization': 'Bearer token' // Authorization token
  },
  body: JSON.stringify({ key: 'value' }), // Request body
  credentials: 'include', // Send cookies
  mode: 'cors', // Enable CORS
  cache: 'no-cache', // Bypass cache
  redirect: 'follow', // Follow redirects
  referrer: 'client', // Default referrer policy
  referrerPolicy: 'no-referrer-when-downgrade', // Referrer policy
  integrity: '', // Subresource Integrity (SRI)
  keepalive: true, // Allow request to outlive page
  signal: controller.signal, // Abort controller
  window: null // Reserved for future use
})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));

// Abort the request after 5 seconds (example usage of AbortController)
setTimeout(() => controller.abort(), 5000);
```

This example demonstrates the use of various configuration options available in the Fetch API init object, providing a comprehensive setup for making an HTTP request.
