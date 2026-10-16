# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/41481522-1ae1-44ad-b48c-73b88ada59c9

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/41481522-1ae1-44ad-b48c-73b88ada59c9) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## Firebase setup

The app uses Firebase Authentication (email/password) and Cloud Firestore for blog posts and user roles. Admin roles are stored in `users/{uid}` and do not require Cloud Functions or a paid Firebase plan.

1. In Firebase Console, enable **Authentication → Email/Password** and create a Cloud Firestore database.
2. Copy `.env.example` to `.env.local` and fill in the Firebase web-app values.
3. Deploy `firestore.rules` with the Firebase CLI (`firebase deploy --project parkease-w6q19 --only firestore:rules`). This does not deploy or enable Cloud Functions.
4. Sign up at `/auth`. Signup creates a `users/{uid}` document with the account email and `admin: false`, then signs out.
5. To designate the initial admin, open **Authentication → Users**, copy that account's UID, then in **Firestore Database → Data** create a `users` collection document whose document ID is that UID. Add `email` (string, the account email) and `admin` (boolean, `true`). For future accounts, signup creates `users/{uid}` with `admin: false`; promote one by setting its `admin` field to boolean `true`.
6. Sign in again with the admin account. Only users whose own `users/{uid}` document has `admin: true` can access admin features. Users cannot grant the role to themselves through the app.

The Firestore Console is an administrator interface and can seed the first role document even when client rules deny writes. Deploying Firestore rules does not require enabling Cloud Functions or upgrading to Blaze.

Blog documents are stored in the `blog_posts` collection. Existing Supabase users and blog data are not automatically transferred; export/import posts into Firestore and recreate admin accounts in Firebase before retiring the old Supabase project.

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/41481522-1ae1-44ad-b48c-73b88ada59c9) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)
