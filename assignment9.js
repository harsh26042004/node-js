Q1)// Connect to MongoDB
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb://localhost:27017"; // Replace with your MongoDB connection URI
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function createAndDropDatabase() {
  try {
    // Connect to the MongoDB client
    await client.connect();
    console.log('Connected to MongoDB');

    // Create a new database named "PWSKILLS"
    const db = client.db('PWSKILLS');
    console.log('Database "PWSKILLS" created');

    // Create a collection named "Employees" within the "PWSKILLS" database
    const collection = db.collection('Employees');
    console.log('Collection "Employees" created');

    // Insert several documents representing employees into the "Employees" collection
    const employees = [
      { name: 'John Doe', age: 30, department: 'Sales' },
      { name: 'Jane Doe', age: 25, department: 'Marketing' },
      { name: 'Peter Pan', age: 28, department: 'Engineering' }
    ];
    await collection.insertMany(employees);
    console.log('Employees documents inserted');

    // Retrieve and display all documents from the "Employees" collection
    const allEmployees = await collection.find({}).toArray();
    console.log('All Employees documents:');
    console.log(allEmployees);

    // Drop the "Employees" collection
    await collection.drop();
    console.log('Collection "Employees" dropped');

    // Drop the "PWSKILLS" database
    await client.db('PWSKILLS').dropDatabase();
    console.log('Database "PWSKILLS" dropped');

  } catch (err) {
    console.error(err.stack);
  } finally {
    // Close the MongoDB client
    await client.close();
  }
}

createAndDropDatabase();
Q2)
// Connect to MongoDB
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb://localhost:27017"; // Replace with your connection string

MongoClient.connect(uri, { useNewUrlParser: true }, (err, client) => {
  if (err) {
    console.error("Error connecting to MongoDB:", err);
    return;
  }

  const db = client.db("Customers"); // Replace with your database name
  const collection = db.collection("Customers"); // Replace with your collection name

  // New customer document
  const newCustomer = {
    name: "John Doe",
    email: "john.doe@example.com",
    address: {
      street: "123 Main St",
      city: "Anytown",
      state: "CA",
      zip: "12345"
    },
    // ...other customer details
  };

  // Insert the new document
  collection.insertOne(newCustomer, (err, result) => {
    if (err) {
      console.error("Error inserting document:", err);
    } else {
      console.log("Document inserted successfully:", result.insertedId);
    }

    client.close();
  });
});
Q3)
// Connect to the MongoDB server
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://<your_username>:<your_password>@<your_cluster_name>.mongodb.net/<your_database_name>?retryWrites=true&w=majority"; // Replace with your actual connection string

MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(client => {
    console.log("Connected to MongoDB");
    const db = client.db("Customers");
    const collection = db.collection("Customers");

    collection.find({}).toArray()
      .then(documents => {
        console.log("Documents in the 'Customers' collection:");
        console.log(documents);
      })
      .catch(error => {
        console.error("Error retrieving documents:", error);
      });

    client.close();
  })
  .catch(error => {
    console.error("Error connecting to MongoDB:", error);
  });
Q4)
db.Customers.updateOne({ "_id": ObjectId("your_customer_id") }, { $set: { "address": "your_new_address" } });
Q5)
db.Customers.find({ "purchases": { "$gt": 0 } }).pretty()
Q6)
db.Customers.deleteOne({ "name": "your_customer_name" });
Q7)
use('admin');
db.create('SchoolDB');
Q8)
// Connect to the MongoDB database
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb://localhost:27017/"; // Replace with your MongoDB connection string
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function insertDocuments() {
  try {
    await client.connect();
    const db = client.db("SchoolDB");
    const collection = db.collection("Students");

    const students = [
      { name: "Alice", age: 10, grade: "5th", },
      { name: "Bob", age: 12, grade: "7th", },
      { name: "Charlie", age: 9, grade: "4th", },
      // Add more students here
    ];

    const result = await collection.insertMany(students);
    console.log(`Inserted ${result.insertedCount} documents into the Students collection`);
  } catch (err) {
    console.error(err.stack);
  } finally {
    await client.close();
  }
}

insertDocuments().catch(console.error);

Q9)
db.Students.find({$or: [{age: {$gt: 20}}, {grade: "A"}]})
Q10)
db.Students.updateOne(
  { studentId: "specific_student_id" },
  { $set: { grade: "new_grade" } }
);
Q11)
db.Teachers.insertMany([
  {
    "name": "John Doe",
    "subject": "Mathematics",
    "experience": 5
  },
  {
    "name": "Jane Doe",
    "subject": "Science",
    "experience": 3
  },
  {
    "name": "Peter Pan",
    "subject": "English",
    "experience": 10
  }
])
Q12)
db.Teachers.find({
  $or: [
    { subject: "specific subject" },
    { experience: { $gt: "certain amount of experience" } }
  ]
})
