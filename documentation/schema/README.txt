April 2020: 
Original design was around a relational model which is reflected in images in this file.

The stack would have been: 
APP → Relational Pouch → Pouch DB ↔ CouchDB


By using a document store rather than relational DB, the stack is simplified:

APP → Pouch DB ↔ CouchDB


This means a JSON-object schema – see ‘schema.txt’ in working directory of codebase for more info.
