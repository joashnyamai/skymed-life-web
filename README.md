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

The app uses Firebase Authentication (email/password) and Cloud Firestore for blog posts. Admin access uses a fixed Firebase UID; it does not require Cloud Functions or a paid Firebase plan.

1. In Firebase Console, enable **Authentication → Email/Password** and create a Cloud Firestore database.
2. Copy `.env.example` to `.env.local` and fill in the Firebase web-app values.
3. Sign up once at `/auth` with an email, password, and matching password confirmation. Signup signs the user out and returns to the sign-in tab.
4. In **Authentication → Users**, copy the new account's UID. Set `VITE_FIREBASE_ADMIN_UID` in `.env.local` to that UID, and replace `REPLACE_WITH_ADMIN_FIREBASE_UID` in `firestore.rules` with the same UID.
5. Deploy only Firestore rules with the Firebase CLI (`firebase deploy --project parkease-w6q19 --only firestore:rules`), restart Vite, then sign in with the configured account.

Without a trusted backend, automatically granting admin to whichever user signs up first cannot be secured against account-claiming races. This no-cost setup therefore requires an explicit UID allowlist; other signed-up accounts have no admin access. Deploying Firestore rules does not require enabling Cloud Functions or upgrading to Blaze.

Blog documents are stored in the `blog_posts` collection. Existing Supabase users and blog data are not automatically transferred; export/import posts into Firestore and recreate admin accounts in Firebase before retiring the old Supabase project.

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/41481522-1ae1-44ad-b48c-73b88ada59c9) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)
