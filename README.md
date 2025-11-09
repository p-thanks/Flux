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
PORT=5001
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
VITE_API_BASE_URL=http://localhost:5001/api
```

---

## 🎬 Installation & Running

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/flux.git
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

Backend will run on: `http://localhost:5001`

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
- 🔌 Backend API: `http://localhost:5001`

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

## 🔐 Authentication Flow

Flux uses **Clerk** for secure, production-ready authentication with a seamless user experience.

### Registration & Login Flow

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

### Made with ✨ by **Your Name**

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
