---

## 🟢 **Basic CRUD Commands**

### 📌 **Create**

| Command                            | Description               | Return Type                                 |
| ---------------------------------- | ------------------------- | ------------------------------------------- |
| `db.collection.insertOne(doc)`     | Insert a single document  | `{ acknowledged: true, insertedId: <id> }`  |
| `db.collection.insertMany([docs])` | Insert multiple documents | `{ acknowledged: true, insertedIds: {...}}` |

---

### 📌 **Read**

| Command                                | Description                    | Return Type               |
| -------------------------------------- | ------------------------------ | ------------------------- |
| `db.collection.find()`                 | Returns all documents          | Cursor (iterable)         |
| `db.collection.find(query)`            | Finds documents matching query | Cursor                    |
| `db.collection.findOne(query)`         | Finds the first matching doc   | Single document or `null` |
| `db.collection.countDocuments(query)`  | Counts matching docs           | Number                    |
| `db.collection.distinct(field, query)` | Unique values of a field       | Array                     |

---

### 📌 **Update**

| Command                                            | Description          | Return Type                                                       |
| -------------------------------------------------- | -------------------- | ----------------------------------------------------------------- |
| `db.collection.updateOne(filter, update)`          | Updates first match  | `{ acknowledged: true, matchedCount, modifiedCount }`             |
| `db.collection.updateMany(filter, update)`         | Updates all matches  | `{ acknowledged: true, matchedCount, modifiedCount }`             |
| `db.collection.replaceOne(filter, replacementDoc)` | Replaces first match | `{ acknowledged: true, matchedCount, modifiedCount, upsertedId }` |

---

### 📌 **Delete**

| Command                            | Description         | Return Type                            |
| ---------------------------------- | ------------------- | -------------------------------------- |
| `db.collection.deleteOne(filter)`  | Deletes first match | `{ acknowledged: true, deletedCount }` |
| `db.collection.deleteMany(filter)` | Deletes all matches | `{ acknowledged: true, deletedCount }` |

---

## 🔑 **Important Query Operators**

### **Comparison Operators**

| Operator | Example                            | Meaning                  |
| -------- | ---------------------------------- | ------------------------ |
| `$eq`    | `{ age: { $eq: 20 } }`             | Equals 20                |
| `$ne`    | `{ age: { $ne: 20 } }`             | Not equal to 20          |
| `$gt`    | `{ age: { $gt: 18 } }`             | Greater than 18          |
| `$gte`   | `{ age: { $gte: 18 } }`            | Greater than or equal 18 |
| `$lt`    | `{ age: { $lt: 30 } }`             | Less than 30             |
| `$lte`   | `{ age: { $lte: 30 } }`            | Less than or equal 30    |
| `$in`    | `{ dept: { $in: ["IT", "HR"] } }`  | Matches any in the array |
| `$nin`   | `{ dept: { $nin: ["IT", "HR"] } }` | Not in the array         |

---

### **Logical Operators**

| Operator | Example                                              | Meaning                        |
| -------- | ---------------------------------------------------- | ------------------------------ |
| `$and`   | `{ $and: [ { age: { $gt: 20 } }, { dept: "IT" } ] }` | All conditions must match      |
| `$or`    | `{ $or: [ { age: { $lt: 20 } }, { dept: "HR" } ] }`  | At least one condition matches |
| `$not`   | `{ age: { $not: { $gt: 30 } } }`                     | Negates the condition          |
| `$nor`   | `{ $nor: [ { age: { $lt: 20 } }, { dept: "HR" } ] }` | None of the conditions match   |

---

### **Element Operators**

| Operator  | Example                        | Meaning                          |
| --------- | ------------------------------ | -------------------------------- |
| `$exists` | `{ phone: { $exists: true } }` | Field exists in the document     |
| `$type`   | `{ age: { $type: "int" } }`    | Field is of a specific BSON type |

---

### **Update Operators**

| Operator    | Example                               | Meaning                                |
| ----------- | ------------------------------------- | -------------------------------------- |
| `$set`      | `{ $set: { age: 25 } }`               | Set a field value                      |
| `$unset`    | `{ $unset: { age: "" } }`             | Remove a field                         |
| `$inc`      | `{ $inc: { age: 1 } }`                | Increment numeric value by 1           |
| `$push`     | `{ $push: { hobbies: "reading" } }`   | Add value to an array                  |
| `$pull`     | `{ $pull: { hobbies: "reading" } }`   | Remove value from an array             |
| `$addToSet` | `{ $addToSet: { hobbies: "music" } }` | Add to array only if not already there |

---

## 🧰 **Projection, Sorting, and Limiting**

| Command                                  | Description                           |
| ---------------------------------------- | ------------------------------------- |
| `db.users.find({}, { name: 1, _id: 0 })` | Show only `name`, hide `_id`.         |
| `db.users.find().sort({ age: -1 })`      | Sort by `age` descending.             |
| `db.users.find().limit(5)`               | Limit output to 5 documents.          |
| `db.users.find().skip(5).limit(5)`       | Pagination: skip first 5, get next 5. |

---

## 🧑‍💻 **Example Flow**

```bash
# Create DB and Collection
use school
db.students.insertMany([
  { name: "John", age: 20, dept: "IT" },
  { name: "Alice", age: 22, dept: "HR" }
])

# Read
db.students.find({ age: { $gte: 21 } })

# Update
db.students.updateOne({ name: "John" }, { $set: { age: 21 } })

# Delete
db.students.deleteOne({ name: "Alice" })
```

---
