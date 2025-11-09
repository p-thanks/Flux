<div align="center">
  
# ✨ Flux

### *Real-Time Communication, Reimagined*

<p align="center">
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
  <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js" />
  <img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB" />
  <img src="https://img.shields.io/badge/Stream-005FFF?style=for-the-badge&logo=stream&logoColor=white" alt="Stream" />
  <img src="https://img.shields.io/badge/Clerk-6C47FF?style=for-the-badge&logo=clerk&logoColor=white" alt="Clerk" />
</p>

<p align="center">
  A modern real-time communication platform bringing messaging, voice calls, and video calls together in one seamless experience.
</p>

[Features](#-features) • [Demo](#-demo) • [Tech Stack](#️-tech-stack) • [Getting Started](#-getting-started) • [Deployment](#-deployment)

---

</div>

## 📸 Demo

> Add screenshots or GIFs of your application here

<div align="center">
  <img src="demo-screenshot.png" alt="Flux Dashboard" width="800"/>
</div>

---

## ✨ Features

<table>
<tr>
<td width="50%">

### 💬 Messaging & Communication

- **Real-time Messaging** - Instant message delivery
- **Message Threads** - Organize conversations
- **Reactions** - Express yourself with emojis
- **Pinned Messages** - Highlight important info
- **Direct Messages** - Private 1-on-1 conversations
- **Private Channels** - Secure group discussions
- **File Sharing** - Images, PDFs, ZIPs & more

</td>
<td width="50%">

### 📹 Video & Voice Calling

- **1-on-1 Video Calls** - High-quality peer calls
- **Group Video Calls** - Multi-participant meetings
- **Screen Sharing** - Share your screen seamlessly
- **Call Recording** - Record important meetings
- **Real-time Reactions** - React during live calls
- **Crystal Clear Audio** - HD voice quality

</td>
</tr>
<tr>
<td width="50%">

### 🎯 Interactive Features

- **Polls & Surveys** - Create interactive polls
- **Multiple Choice Options** - Flexible poll types
- **Anonymous Voting** - Private opinion gathering
- **Poll Comments** - Discuss poll results
- **Suggestions System** - Community-driven ideas

</td>
<td width="50%">

### 🔐 Security & Reliability

- **Clerk Authentication** - Secure user management
- **Production-grade Monitoring** - Sentry integration
- **Background Jobs** - Powered by Inngest
- **Error Tracking** - Real-time error reporting
- **Scalable Architecture** - Built for growth

</td>
</tr>
</table>

### 🤖 Developer Experience

- **AI Code Suggestions** - CodeRabbit integration
- **Modern Tech Stack** - Latest frameworks and tools
- **Free Deployment** - Easy setup guides
- **Comprehensive Documentation** - Get started quickly
- **Type Safety** - Built with best practices

---

## 🛠️ Tech Stack

### Frontend
```
⚛️  React.js          - Modern UI library
⚡  Vite              - Lightning-fast build tool
🎨  Tailwind CSS      - Utility-first styling
🎭  shadcn/ui         - Beautiful components
📹  Stream SDK        - Video/audio calling
🔐  Clerk             - Authentication
🚨  Sentry            - Error monitoring
```

### Backend
```
🟢  Node.js           - JavaScript runtime
⚡  Express.js        - Web framework
🍃  MongoDB           - NoSQL database
📦  Mongoose          - MongoDB ODM
🔧  Inngest           - Background jobs
📹  Stream API        - Real-time communication
🔐  Clerk SDK         - Auth backend
🚨  Sentry            - Backend monitoring
```

### DevOps & Tools
```
🤖  CodeRabbit        - AI code reviews
🔍  Sentry            - Performance monitoring
⚙️  Inngest           - Workflow automation
☁️  Stream            - Communication infrastructure
```

---

## 📁 Project Structure

```
flux/
│
├── frontend/               # React + Vite frontend
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/          # Page components
│   │   ├── hooks/          # Custom React hooks
│   │   ├── lib/            # Utility functions
│   │   ├── services/       # API services
│   │   └── App.jsx         # Root component
│   ├── .env.example
│   └── package.json
│
├── backend/                # Express backend API
│   ├── src/
│   │   ├── controllers/    # Request handlers
│   │   ├── models/         # Database schemas
│   │   ├── routes/         # API endpoints
│   │   ├── middleware/     # Auth & validation
│   │   ├── services/       # Business logic
│   │   └── utils/          # Helper functions
│   ├── .env.example
│   └── package.json
│
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed:
- **Node.js** (v18 or higher)
- **MongoDB** (local or MongoDB Atlas)
- **npm** or **yarn** or **pnpm**

### Required API Keys

You'll need accounts and API keys from:
- [Clerk](https://clerk.dev/) - Authentication
- [Stream](https://getstream.io/) - Video/Chat
- [Sentry](https://sentry.io/) - Error monitoring
- [Inngest](https://www.inngest.com/) - Background jobs
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) - Database

---

## ⚙️ Environment Setup

### Backend Configuration

Create a `.env` file in the `backend` directory:

```env
# Server Configuration
PORT=5000
NODE_ENV=development
CLIENT_URL=http://localhost:5173

# Database
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/flux

# Clerk Authentication
CLERK_PUBLISHABLE_KEY=pk_test_xxxxxxxxxxxxxxxxxxxxx
CLERK_SECRET_KEY=sk_test_xxxxxxxxxxxxxxxxxxxxx

# Stream API
STREAM_API_KEY=xxxxxxxxxxxxxxxxxxxxx
STREAM_API_SECRET=xxxxxxxxxxxxxxxxxxxxx

# Sentry Error Monitoring
SENTRY_DSN=https://xxxxxxxxxxxxxxxxxxxxx@sentry.io/xxxxxxxxxxxxxxxxxxxxx

# Inngest Background Jobs
INNGEST_EVENT_KEY=xxxxxxxxxxxxxxxxxxxxx
INNGEST_SIGNING_KEY=signkey-prod-xxxxxxxxxxxxxxxxxxxxx
```

### Frontend Configuration

Create a `.env` file in the `frontend` directory:

```env
# Clerk Authentication
VITE_CLERK_PUBLISHABLE_KEY=pk_test_xxxxxxxxxxxxxxxxxxxxx

# Stream API
VITE_STREAM_API_KEY=xxxxxxxxxxxxxxxxxxxxx

# Sentry Error Monitoring
VITE_SENTRY_DSN=https://xxxxxxxxxxxxxxxxxxxxx@sentry.io/xxxxxxxxxxxxxxxxxxxxx

# Backend API URL
VITE_API_BASE_URL=http://localhost:5000/api
```

---

## 🎬 Installation & Running

### 1. Clone the Repository

```bash
git clone https://github.com/p-thanks/flux.git
cd flux
```

### 2. Setup Backend

```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Create .env file (copy from .env.example)
cp .env.example .env

# Edit .env with your API keys

# Start development server
npm run dev
```

Backend will run on: `http://localhost:5000`

### 3. Setup Frontend

Open a new terminal:

```bash
# Navigate to frontend directory
cd frontend

# Install dependencies
npm install

# Create .env file (copy from .env.example)
cp .env.example .env

# Edit .env with your API keys

# Start development server
npm run dev
```

Frontend will run on: `http://localhost:5173`

### 4. Access the Application

Open your browser and navigate to:
- 🌐 Frontend: `http://localhost:5173`
- 🔌 Backend API: `http://localhost:5000`

---

## 📦 API Endpoints

### Authentication
```
POST   /api/auth/register     - Register new user
POST   /api/auth/login        - Login user
POST   /api/auth/logout       - Logout user
GET    /api/auth/me           - Get current user
```

### Channels & Messages
```
GET    /api/channels          - Get all channels
POST   /api/channels          - Create channel
GET    /api/messages/:id      - Get channel messages
POST   /api/messages          - Send message
PUT    /api/messages/:id      - Edit message
DELETE /api/messages/:id      - Delete message
```

### Video Calls
```
POST   /api/calls/token       - Generate call token
POST   /api/calls/create      - Create call room
GET    /api/calls/:id         - Get call details
POST   /api/calls/:id/end     - End call
```

### Polls
```
POST   /api/polls             - Create poll
GET    /api/polls/:id         - Get poll details
POST   /api/polls/:id/vote    - Vote on poll
GET    /api/polls/:id/results - Get poll results
```

---

## 🔐 Complete Application Flows

Flux is built with a comprehensive flow architecture covering authentication, messaging, calling, and more.

---

## 🔑 Authentication Flow

Flux uses **Clerk** for secure, production-ready authentication with a seamless user experience.

### User Registration & Login Flow

```mermaid
graph TD
    A[User visits Flux] -->|New User| B[Sign Up Page]
    A -->|Existing User| C[Sign In Page]
    B -->|Email/Social| D[Clerk Authentication]
    C -->|Credentials| D
    D -->|Success| E[Generate JWT Token]
    E --> F[Create/Update User in MongoDB]
    F --> G[Store Session in Clerk]
    G --> H[Redirect to Dashboard]
    D -->|Failure| I[Show Error Message]
    I --> B
    I --> C
```

### Complete Authentication Architecture

```mermaid
sequenceDiagram
    participant U as User
    participant F as Frontend
    participant C as Clerk
    participant B as Backend
    participant DB as MongoDB
    participant S as Stream

    U->>F: Click "Sign Up"
    F->>C: Redirect to Clerk Sign Up
    U->>C: Enter credentials/OAuth
    C->>C: Validate & Create Account
    C->>F: Return JWT Token
    F->>F: Store Token (Secure)
    C->>B: Send Webhook (user.created)
    B->>B: Verify Webhook Signature
    B->>DB: Create User Document
    B->>S: Generate Stream Token
    DB-->>B: User Created
    B-->>C: Webhook Success
    F->>B: GET /api/auth/me (with token)
    B->>C: Verify JWT Token
    C-->>B: Token Valid + User Data
    B->>DB: Fetch User Details
    DB-->>B: User Data
    B-->>F: User Profile + Stream Token
    F->>F: Redirect to Dashboard
```

### Authentication Process

**1. User Registration**
```javascript
// Frontend - User signs up
User clicks "Sign Up" 
  → Clerk handles UI and validation
  → User enters email/password or uses OAuth (Google, GitHub, etc.)
  → Clerk creates user account
  → Webhook triggers to backend
```

**2. Backend User Creation**
```javascript
// Backend receives Clerk webhook
POST /api/webhooks/clerk
  → Verify webhook signature
  → Extract user data (id, email, name, avatar)
  → Create user document in MongoDB
  → Generate Stream Chat token
  → Return success response
```

**3. User Login**
```javascript
// User signs in
User enters credentials
  → Clerk validates credentials
  → Issues JWT session token
  → Frontend stores token securely
  → User redirected to dashboard
```

**4. Protected Route Access**
```javascript
// Every API request
Frontend sends request with Clerk token
  → Backend middleware validates token
  → Extracts user ID from token
  → Fetches user from database
  → Attaches user to request object
  → Proceeds to route handler
```

### Session Management

- **Session Duration**: 7 days (configurable)
- **Auto-refresh**: Token refreshes automatically before expiration
- **Secure Storage**: HttpOnly cookies for web, secure storage for mobile
- **Multi-device**: Users can be logged in on multiple devices
- **Sign Out**: Revokes session across all devices

### Middleware Protection

```javascript
// Backend middleware checks authentication
const requireAuth = async (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  
  if (!token) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  
  try {
    // Verify Clerk token
    const payload = await verifyToken(token);
    req.userId = payload.sub;
    
    // Fetch user from database
    const user = await User.findOne({ clerkId: req.userId });
    req.user = user;
    
    next();
  } catch (error) {
    return res.status(401).json({ error: 'Invalid token' });
  }
};
```

### Webhook Integration

Clerk webhooks keep your database synchronized:

```javascript
// Clerk Webhook Events
user.created       → Create user in MongoDB
user.updated       → Update user profile
user.deleted       → Soft delete or remove user
session.created    → Log user activity
session.revoked    → Handle logout
```

**Webhook Endpoint:**
```javascript
POST /api/webhooks/clerk

// Verify webhook signature
const isValid = verifyClerkWebhook(req.body, signature);

// Handle events
switch (event.type) {
  case 'user.created':
    await createUser(event.data);
    break;
  case 'user.updated':
    await updateUser(event.data);
    break;
  case 'user.deleted':
    await deleteUser(event.data);
    break;
}
```

### Social Authentication

Supported OAuth providers:
- 🔵 Google
- ⚫ GitHub
- 🔷 Microsoft
- 📘 Facebook
- 🐦 Twitter/X
- 💼 LinkedIn

**OAuth Flow:**
```
1. User clicks "Continue with Google"
2. Clerk redirects to Google OAuth
3. User authorizes Flux
4. Google returns to Clerk callback
5. Clerk creates/updates user
6. Webhook notifies backend
7. User logged in automatically
```

### Security Features

- ✅ **CSRF Protection** - Built into Clerk
- ✅ **Rate Limiting** - Prevents brute force attacks
- ✅ **Email Verification** - Required before full access
- ✅ **Password Strength** - Enforced minimum requirements
- ✅ **2FA Support** - Optional two-factor authentication
- ✅ **Session Monitoring** - Track active sessions
- ✅ **IP Whitelisting** - Optional for enterprise

### Frontend Authentication

```javascript
// Using Clerk React hooks
import { useAuth, useUser } from '@clerk/clerk-react';

function Dashboard() {
  const { isLoaded, userId, sessionId } = useAuth();
  const { user } = useUser();
  
  if (!isLoaded) return <Loading />;
  if (!userId) return <RedirectToSignIn />;
  
  return <div>Welcome, {user.firstName}!</div>;
}
```

### Protected Routes

```javascript
// Frontend route protection
import { SignedIn, SignedOut, RedirectToSignIn } from '@clerk/clerk-react';

<Routes>
  <Route path="/" element={<Landing />} />
  
  {/* Public routes */}
  <Route path="/sign-in" element={<SignIn />} />
  <Route path="/sign-up" element={<SignUp />} />
  
  {/* Protected routes */}
  <Route
    path="/dashboard"
    element={
      <SignedIn>
        <Dashboard />
      </SignedIn>
    }
  />
  
  {/* Redirect if not signed in */}
  <Route path="*" element={<RedirectToSignIn />} />
</Routes>
```

---

## 💬 Messaging Flow

### Real-time Message Delivery

```mermaid
sequenceDiagram
    participant U1 as User 1 (Sender)
    participant F1 as Frontend 1
    participant B as Backend API
    participant S as Stream Chat
    participant DB as MongoDB
    participant F2 as Frontend 2
    participant U2 as User 2 (Receiver)

    U1->>F1: Type message & press Send
    F1->>F1: Validate message (not empty)
    F1->>B: POST /api/messages/send
    B->>B: Authenticate user
    B->>DB: Save message metadata
    DB-->>B: Message saved
    B->>S: Send message via Stream SDK
    S->>S: Broadcast to channel subscribers
    S-->>F1: Message delivered (confirmation)
    S-->>F2: Real-time message event
    F2->>F2: Update UI with new message
    F2->>U2: Display notification
    F1->>F1: Show "Sent" status
    U2->>F2: Message appears instantly
```

### Message Features Flow

```mermaid
graph LR
    A[User Types Message] --> B{Message Type?}
    B -->|Text| C[Send Text Message]
    B -->|File| D[Upload File to Cloud]
    B -->|Reply| E[Create Thread]
    
    C --> F[Stream Broadcasts]
    D --> G[Get File URL]
    G --> F
    E --> F
    
    F --> H[Receiver Gets Message]
    H --> I{User Actions}
    I -->|React| J[Add Emoji Reaction]
    I -->|Reply| K[Start Thread]
    I -->|Pin| L[Pin Message]
    I -->|Edit| M[Edit Own Message]
    I -->|Delete| N[Delete Message]
    
    J --> O[Update Message State]
    K --> O
    L --> O
    M --> O
    N --> O
```

### File Upload Flow

```mermaid
sequenceDiagram
    participant U as User
    participant F as Frontend
    participant B as Backend
    participant C as Cloudinary/S3
    participant S as Stream
    participant DB as MongoDB

    U->>F: Select file to upload
    F->>F: Validate file (type, size)
    F->>B: POST /api/upload (multipart/form-data)
    B->>B: Authenticate & validate
    B->>C: Upload file to cloud storage
    C-->>B: Return file URL & metadata
    B->>DB: Save file metadata
    DB-->>B: File record created
    B-->>F: Return file URL
    F->>S: Send message with file attachment
    S->>S: Broadcast message
    S-->>F: Message delivered
    F->>F: Display file in chat
```

---

## 📹 Video Calling Flow

### Call Initiation & Connection

```mermaid
sequenceDiagram
    participant U1 as Caller
    participant F1 as Frontend 1
    participant B as Backend
    participant S as Stream Video
    participant F2 as Frontend 2
    participant U2 as Receiver

    U1->>F1: Click "Start Video Call"
    F1->>B: POST /api/calls/create
    B->>B: Authenticate user
    B->>S: Create call room
    S-->>B: Return call ID & token
    B->>DB: Save call metadata
    DB-->>B: Call record created
    B-->>F1: Call ID + token
    F1->>S: Join call with token
    S-->>F1: Connected to call room
    F1->>B: POST /api/calls/notify
    B->>F2: Send push notification
    F2->>U2: Show incoming call UI
    U2->>F2: Accept call
    F2->>B: GET /api/calls/:id/token
    B-->>F2: Generate participant token
    F2->>S: Join call with token
    S->>S: Establish P2P connection
    S-->>F1: Participant joined
    S-->>F2: Connected to caller
    F1->>F1: Show video streams
    F2->>F2: Show video streams
    U1->>U1: Call in progress 🎥
    U2->>U2: Call in progress 🎥
```

### Screen Sharing Flow

```mermaid
graph TD
    A[User clicks Share Screen] --> B[Request screen capture permission]
    B --> C{Permission granted?}
    C -->|Yes| D[Capture screen stream]
    C -->|No| E[Show error message]
    D --> F[Send stream to Stream Video SDK]
    F --> G[Broadcast to all participants]
    G --> H[Other users see shared screen]
    H --> I{User actions}
    I -->|Stop sharing| J[Stop screen capture]
    I -->|Switch window| K[Update shared content]
    J --> L[Notify participants]
    K --> G
```

### Call Recording Flow

```mermaid
sequenceDiagram
    participant U as User
    participant F as Frontend
    participant S as Stream Video
    participant B as Backend
    participant ST as Cloud Storage
    participant DB as MongoDB

    U->>F: Click "Start Recording"
    F->>S: Start recording session
    S->>S: Begin capturing audio/video
    S-->>F: Recording started
    F->>B: POST /api/calls/:id/recording/start
    B->>DB: Update call status (recording: true)
    Note over S: Recording in progress...
    U->>F: Click "Stop Recording"
    F->>S: Stop recording
    S->>S: Process & encode recording
    S->>ST: Upload recording file
    ST-->>S: Return file URL
    S-->>F: Recording completed + URL
    F->>B: POST /api/calls/:id/recording/complete
    B->>DB: Save recording URL & metadata
    DB-->>B: Recording saved
    B-->>F: Recording available
    F->>F: Show "View Recording" button
```

---

## 📊 Poll Creation & Voting Flow

```mermaid
sequenceDiagram
    participant U1 as Poll Creator
    participant F1 as Frontend
    participant B as Backend
    participant DB as MongoDB
    participant S as Stream
    participant F2 as Other Users
    participant U2 as Voters

    U1->>F1: Click "Create Poll"
    F1->>F1: Show poll creation form
    U1->>F1: Enter question & options
    U1->>F1: Set settings (anonymous, multiple choice)
    F1->>B: POST /api/polls/create
    B->>B: Validate poll data
    B->>DB: Save poll document
    DB-->>B: Poll created with ID
    B-->>F1: Return poll data
    F1->>S: Broadcast poll message
    S-->>F2: New poll notification
    F2->>F2: Display poll card
    U2->>F2: Click vote option
    F2->>B: POST /api/polls/:id/vote
    B->>B: Validate vote (user hasn't voted)
    B->>DB: Record vote
    DB-->>B: Vote recorded
    B->>DB: Update poll results
    DB-->>B: Updated results
    B-->>F2: Return updated results
    F2->>S: Broadcast result update
    S-->>F1: Updated poll results
    S-->>F2: Updated poll results
    F1->>F1: Update results in real-time
    F2->>F2: Update results in real-time
```

---

## 📂 Channel & Direct Message Flow

### Channel Creation

```mermaid
graph TD
    A[User clicks Create Channel] --> B[Fill channel details]
    B --> C{Channel Type?}
    C -->|Public| D[Create public channel]
    C -->|Private| E[Select members]
    
    D --> F[POST /api/channels/create]
    E --> G[Add selected members]
    G --> F
    
    F --> H[Backend validates]
    H --> I[Create in MongoDB]
    I --> J[Create Stream channel]
    J --> K[Add creator as admin]
    K --> L{Private channel?}
    L -->|Yes| M[Add invited members]
    L -->|No| N[Channel is discoverable]
    M --> O[Send invitations]
    N --> P[Channel created]
    O --> P
    P --> Q[Redirect to channel]
```

### Direct Message Initiation

```mermaid
sequenceDiagram
    participant U1 as User 1
    participant F1 as Frontend 1
    participant B as Backend
    participant S as Stream
    participant DB as MongoDB
    participant F2 as Frontend 2
    participant U2 as User 2

    U1->>F1: Click user profile
    U1->>F1: Click "Send Message"
    F1->>B: POST /api/dm/create
    B->>B: Check existing DM channel
    alt DM exists
        B->>DB: Fetch existing DM channel
        DB-->>B: Return channel ID
    else New DM
        B->>S: Create DM channel
        S-->>B: Channel created
        B->>DB: Save DM metadata
        DB-->>B: DM record saved
    end
    B-->>F1: Return channel ID
    F1->>F1: Navigate to DM
    F1->>S: Connect to DM channel
    U1->>F1: Type & send message
    F1->>S: Send message
    S-->>F2: Deliver message
    F2->>U2: Show notification
    F2->>F2: Display message
```

---

## 🔔 Notification Flow

```mermaid
graph TD
    A[Event occurs] --> B{Event Type?}
    
    B -->|New Message| C[Message Notification]
    B -->|Incoming Call| D[Call Notification]
    B -->|Mention| E[Mention Notification]
    B -->|Reaction| F[Reaction Notification]
    
    C --> G[Check user preferences]
    D --> G
    E --> G
    F --> G
    
    G --> H{User online?}
    H -->|Yes| I[In-app notification]
    H -->|No| J[Push notification]
    
    I --> K[Show toast/banner]
    J --> L[Send to FCM/APNS]
    L --> M[Device receives push]
    
    K --> N[User clicks notification]
    M --> N
    
    N --> O[Navigate to content]
```

---

## 🎯 Complete User Journey

### First-Time User Experience

```mermaid
graph TD
    A[Visit Flux] --> B[Landing Page]
    B --> C{Action?}
    
    C -->|Sign Up| D[Registration Flow]
    C -->|Explore| E[View Features]
    
    D --> F[Email/Social Auth]
    F --> G[Account Created]
    G --> H[Onboarding Tutorial]
    H --> I[Profile Setup]
    I --> J[Join Channels/Invite Friends]
    
    E --> B
    
    J --> K[Dashboard]
    K --> L{User Action?}
    
    L -->|Browse Channels| M[Channel List]
    L -->|Start Chat| N[Create/Join DM]
    L -->|Make Call| O[Initiate Call]
    L -->|Create Poll| P[Poll Creation]
    
    M --> Q[Send Message]
    N --> Q
    O --> R[Video Call Interface]
    P --> S[Publish Poll]
    
    Q --> T[Continue Chatting]
    R --> U[End Call]
    S --> T
    U --> K
    T --> K
```

---

## 🔄 Background Job Flows (Inngest)

### Scheduled Tasks

```mermaid
graph LR
    A[Cron Trigger] --> B{Job Type?}
    
    B -->|Daily| C[Cleanup Old Messages]
    B -->|Hourly| D[Sync User Status]
    B -->|Weekly| E[Generate Analytics]
    
    C --> F[Inngest Job]
    D --> F
    E --> F
    
    F --> G[Execute Task]
    G --> H[Update Database]
    H --> I[Log Results]
    I --> J[Send Report]
```

### Event-Driven Jobs

```mermaid
sequenceDiagram
    participant E as Event Source
    participant I as Inngest
    participant J as Job Worker
    participant DB as Database
    participant N as Notification Service

    E->>I: Trigger event (user.registered)
    I->>I: Queue job
    I->>J: Execute job function
    J->>DB: Update user record
    J->>N: Send welcome email
    N-->>J: Email sent
    J->>I: Job completed
    I->>I: Log success
```

---

## 🚨 Error Handling Flow (Sentry)

```mermaid
graph TD
    A[Error Occurs] --> B{Error Type?}
    
    B -->|Frontend| C[React Error Boundary]
    B -->|Backend| D[Express Error Handler]
    B -->|Network| E[Axios Interceptor]
    
    C --> F[Capture Error]
    D --> F
    E --> F
    
    F --> G[Send to Sentry]
    G --> H[Sentry Processes]
    H --> I[Alert Dev Team]
    H --> J[Create Issue]
    H --> K[Track User Impact]
    
    I --> L[Developer Reviews]
    J --> L
    
    L --> M[Fix Deployed]
    M --> N[Mark Resolved]
    
    C --> O[Show Error UI]
    D --> P[Return Error Response]
    E --> O
```

---

## 🎨 Key Features Deep Dive

### Real-time Messaging

Powered by **Stream Chat SDK**, messages are delivered instantly with:
- Typing indicators
- Read receipts
- Online/offline status
- Message reactions
- Thread conversations

### Video & Voice Calls

Using **Stream Video SDK** for:
- WebRTC-based peer connections
- HD video quality up to 1080p
- Crystal clear audio
- Screen sharing with audio
- Call recording and playback
- Participant management

### Background Jobs

**Inngest** handles asynchronous tasks:
- Email notifications
- Data processing
- Scheduled cleanups
- Webhook processing
- Analytics updates

### Error Monitoring

**Sentry** provides:
- Real-time error alerts
- Performance monitoring
- User session replay
- Release tracking
- Custom error boundaries

---

## 🚀 Deployment

### Backend Deployment (Render/Railway)

1. Push code to GitHub
2. Connect repository to Render/Railway
3. Set environment variables
4. Deploy

### Frontend Deployment (Vercel/Netlify)

1. Push code to GitHub
2. Import project to Vercel/Netlify
3. Set environment variables
4. Deploy

### Environment Variables Checklist

Make sure to set all production URLs:
- Update `CLIENT_URL` to your frontend domain
- Update `VITE_API_BASE_URL` to your backend domain
- Use production API keys
- Enable CORS for your domains

---

## 🔒 Security Best Practices

- ✅ All API routes are protected with Clerk authentication
- ✅ Environment variables never committed to repo
- ✅ CORS configured for specific origins
- ✅ Rate limiting on API endpoints
- ✅ Input validation on all user data
- ✅ Secure WebSocket connections
- ✅ Encrypted file uploads

---

## 📊 Performance Optimization

- **Code Splitting** - Lazy loading for faster initial load
- **Image Optimization** - Compressed and cached media
- **CDN Integration** - Fast global content delivery
- **Database Indexing** - Optimized queries
- **Caching Strategy** - Redis for frequently accessed data
- **Bundle Optimization** - Tree-shaking and minification

---

## 🤝 Contributing

Contributions make the open-source community amazing! Any contributions are **greatly appreciated**.

1. **Fork** the Project
2. **Create** your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. **Commit** your Changes (`git commit -m 'Add some AmazingFeature'`)
4. **Push** to the Branch (`git push origin feature/AmazingFeature`)
5. **Open** a Pull Request

---

## 🐛 Bug Reports & Feature Requests

Found a bug or have an idea? [Open an issue](https://github.com/p-thanks/flux/issues)

Please include:
- Clear description of the issue/feature
- Steps to reproduce (for bugs)
- Expected vs actual behavior
- Screenshots if applicable
- Your environment details

---

## 📝 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- [Stream](https://getstream.io/) - For amazing real-time infrastructure
- [Clerk](https://clerk.dev/) - For seamless authentication
- [Sentry](https://sentry.io/) - For robust error monitoring
- [Inngest](https://www.inngest.com/) - For reliable background jobs
- [shadcn/ui](https://ui.shadcn.com/) - For beautiful UI components

---

## 👨‍💻 Author

<div align="center">

### Made with ✨ by **Pthanks**

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/paul-thanksgiving-800867309/)
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/p-thanks)
[![Twitter](https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://x.com/Femiloner1)

</div>

---

## 📞 Support

Need help? Reach out:

- 📧 Email: support@flux.com
- 💬 Discord: [Join our community](https://discord.gg/paulthanksgiving)
- 📖 Documentation: [docs.flux.com](https://docs.flux.com)

---

<div align="center">

### ⭐ Star this repo if you find it helpful!

**Built with passion for seamless communication** 💬

</div>
