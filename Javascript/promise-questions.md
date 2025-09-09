## 🔹 Promise Practice Questions

---

### 1. **Basic Promise (Resolve)**

**Q:** Create a promise that resolves with `"Hello World"` after 2 seconds. Print the result using `.then()`.

**Expected Output:**
`Hello World` (after 2 seconds)

---

### 2. **Basic Promise (Reject)**

**Q:** Create a promise that rejects with `"Error occurred"` after 1 second. Handle it using `.catch()`.

**Expected Output:**
`Error occurred`

---

### 3. **Promise Chain**

**Q:** Create a promise that resolves with `5`. In the chain:

- First `.then()` → multiply by 2
- Second `.then()` → add 10
- Print the result.

**Expected Output:**
`20`

---

### 4. **Promise.all**

**Q:** Create three promises:

- p1 resolves `"Task 1"` after 1s
- p2 resolves `"Task 2"` after 2s
- p3 resolves `"Task 3"` after 3s
  Use `Promise.all()` and print the result.

**Expected Output:**
`["Task 1", "Task 2", "Task 3"]` (after 3s)

---

### 5. **Promise.race**

**Q:** Create two promises:

- p1 resolves `"Fast"` after 1s
- p2 resolves `"Slow"` after 3s
  Use `Promise.race()` and print the result.

**Expected Output:**
`"Fast"` (because p1 finishes first)

---
