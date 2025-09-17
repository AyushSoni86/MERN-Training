Here are **15 direct, beginner-friendly questions** on **React Router DOM** basics:

---

### 🟢 **Basic React Router DOM Questions**

1. Install **react-router-dom** in a React project and set up basic routing. Create two components: `Home` and `About`, and navigate between them.
2. Use `<BrowserRouter>`, `<Routes>`, and `<Route>` to define routes for `Home`, `About`, and `Contact`.
3. Create a navigation menu with `<Link>` to switch between three pages: `Home`, `Services`, and `Contact`.
4. Replace `<Link>` with `<NavLink>` and apply a CSS class to highlight the active link.
5. Add a `NotFound` component and configure a `path="*"` route to display it for any undefined URL.
6. Build a `Products` page showing a list of products. Each product links to `/products/:id` where the ID is dynamic.
7. Use the `useParams()` hook in a `ProductDetail` component to display the product ID from the URL.
8. Create a `Dashboard` component with nested routes: `Overview` and `Settings`. Use `<Outlet>` to display nested content.
9. Use `<Navigate>` or `useNavigate()` to redirect from `/` to `/home` automatically.
10. Build a `Login` form. After a successful login (dummy state), programmatically navigate to `/dashboard` using `useNavigate()`.
11. Create a protected `Profile` route that redirects to `/login` if the user is not logged in (use a boolean variable for auth).
12. Add a route for `/about/team` and `/about/company` under a parent `/about` route. Use nested routes to organize them.
13. Add a wildcard (`*`) route inside a nested `Dashboard` to show “Page not found” for invalid subpages.
14. Demonstrate relative linking by creating links inside a parent route (`/services`) that navigate to `/services/web` and `/services/mobile` without using absolute URLs.
15. Split the `About` component using **lazy loading** (`React.lazy()` and `<Suspense>`) and show a fallback loader while it loads.

---

Would you like me to include **starter code snippets** for the first 3–4 questions so students can begin quickly?
