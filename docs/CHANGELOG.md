# Changelog

## 2025-04-29 @dsa157
- Implemented core UI components
  - Created navigation bar
  - Added theme provider with dark mode support
  - Built prompt input form
- Initialized project documentation
  - Created `requirements.md`
  - Created `implementation-plan.md`
- Set up Next.js project foundation
  - Initialized with TypeScript and Tailwind CSS
  - Configured dark theme support
- **Configuration**
  - Added GROQ API key setup in `.env.local`
  - Updated `.gitignore` to allow `.env.local`
  - Added environment setup instructions to README

## [Unreleased]
### Changed
- Updated Groq model from mixtral-8x7b-32768 to llama3-70b-8192 (@dsa157)
- Fixed API base URL configuration in src/config/ai.ts
- Added dangerouslyAllowBrowser flag for Groq client
- Updated message format to match Groq API requirements (@dsa157)
- Removed unsupported id field from API requests
- Added name field to ChatMessage type

### Fixed
- Resolved environment variable loading for client-side usage
- Corrected API endpoint path duplication issue
- Resolved 400 error from Groq API about unsupported message fields
