# A Collaborative LiveDocs 📋

## 📖 Table of Contents

1. [🤖 Introduction](#-introduction)
2. [⚙️ Tech Stack](#️-tech-stack)
3. [🔋 Features](#-features)
4. [🤸 Quick Start](#-quick-start)

## 🤖 Introduction

Built with Next.js to handle the user interface, Liveblocks for real-time features and styled with TailwindCSS, LiveDocs is a clone of Google Docs. The primary goal is to demonstrate the developer's skills in a real-time environment that creates a lasting impact.

## ⚙️ Tech Stack

- Next.js
- TypeScript
- Liveblocks
- Lexical Editor
- ShadCN
- Tailwind CSS

## 🔋 Features

### Authentication
- User authentication using GitHub through NextAuth, ensuring secure sign-in/out and session management

### Collaborative Text Editor
- Multiple users can edit the same document simultaneously with real-time updates

### Documents Management
- **Create Documents**: Users can create new documents, which are automatically saved and listed
- **Delete Documents**: Users can delete documents they own
- **Share Documents**: Users can share documents via email or link with view/edit permissions
- **List Documents**: Display all documents owned or shared with the user, with search and sorting functionalities

### Additional Features
- **Comments**: Users can add inline and general comments, with threading for discussions
- **Active Collaborators on Text Editor**: Show active collaborators with real-time presence indicators
- **Notifications**: Notify users of document shares, new comments, and collaborator activities
- **Responsive**: The application is responsive across all devices

And many more, including code architecture and reusability!

## 🤸 Quick Start

### Prerequisites

Ensure you have the following installed on your machine:
- Git
- Node.js
- npm (Node Package Manager)

### Cloning the Repository

```bash
git clone https://github.com/adrianhajdin/collaborative-editor.git
cd collaborative-editor
```

### Installation

Install the project dependencies using npm:

```bash
npm install
```

### Set Up Environment Variables

Create a new file named `.env` in the root of your project and add the following content:

```
# Clerk
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up

# Liveblocks
NEXT_PUBLIC_LIVEBLOCKS_PUBLIC_KEY=
LIVEBLOCKS_SECRET_KEY=
```

Replace the placeholder values with your actual Clerk & Liveblocks credentials. You can obtain these credentials by signing up on the Clerk and Liveblocks websites.

### Running the Project

```bash
npm run dev
```

Open http://localhost:3000 in your browser to view the project.
