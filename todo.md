# BDE Ventures Website Updates

## Core Messaging & Positioning
- [ ] Update positioning statement to reflect "Strategic Advisory Firm" instead of "Family Office"
- [ ] Shift tone from "investor" to "strategic partner/advisor" across all pages

## Home Page
- [ ] Update Headline to one of the new options (e.g., "Guidance for the architects of tomorrow.")
- [ ] Update Subheadline to the new "operator-led advisory" text
- [ ] Update CTAs to "Explore Our Focus" and "Our Approach"
- [ ] Remove "System Operational" badge if it conflicts with the new advisory tone (or adapt it)

## Thesis Page -> Areas of Focus
- [ ] Rename "Thesis" page/section to "Areas of Focus"
- [ ] Update intro text
- [ ] Replace existing thesis points with the 4 new Focus Areas:
    - [ ] AI & Decentralized Infrastructure
    - [ ] Tokenization of RWAs
    - [ ] Digital Identity & Social Platforms
    - [ ] Go-to-Market for Complex Technologies

## Portfolio Page -> Our Approach
- [ ] **REPLACE** the entire "Portfolio" page with a new "Our Approach" page
- [ ] Add the 3 Core Pillars:
    - [ ] Strategic Counsel & Narrative Design
    - [ ] Ecosystem & Go-to-Market Activation
    - [ ] Capital & Corporate Strategy
- [ ] Add "Connect with Us" CTA at the bottom

## Contact Section
- [ ] Update Headline to "Let's build the future."
- [ ] Update Subheadline to the "limited number of teams" text

## Navigation
- [ ] Update nav links: Home, Areas of Focus, Our Approach, The Office
- [ ] Remove "Portfolio" link

## Bio & Image Updates (User Request)
- [ ] Research `briandevans.com` for bio details and images
- [ ] Download a high-quality photo of Brian D. Evans from his site
- [ ] Update `Office.tsx`:
    - [ ] Remove specific mention of "Influencive"
    - [ ] Replace with narrative about "building a media empire"
    - [ ] Enhance bio with additional context from his personal site
    - [ ] Replace the placeholder image with the downloaded photo

- [ ] Update bio to reflect "over two decades" of experience instead of one
- [ ] Ensure the narrative emphasizes "building a media empire" without specific brand names

- [ ] Remove "& Principal" from the title in `Office.tsx`

- [ ] Update bio in `Office.tsx` to include "built and exited numerous tech and ecom companies"

- [ ] Initialize git repository
- [ ] Create GitHub repository `bde-io`
- [ ] Push code to GitHub

- [ ] Remove explicit "family office" mentions in `Office.tsx` and `Layout.tsx`

- [ ] Add "Entertainment & Media" to Areas of Focus in `Focus.tsx`
- [ ] Update experience timeframe to "almost two decades" in `Office.tsx` and `Focus.tsx` (if applicable)

- [ ] Add "Blockchain Technology & Web3" to Areas of Focus in `Focus.tsx`
- [ ] Add "Consumer & Enterprise SaaS" to Areas of Focus in `Focus.tsx`
- [ ] Add "Privacy Technology" to Areas of Focus in `Focus.tsx`

- [ ] Replace "Market Intelligence" chart in `Home.tsx` with a more relevant graphic (e.g., abstract network or ecosystem visualization)

- [ ] Weave "distribution as a moat" concept into `Approach.tsx` and `Home.tsx`
- [ ] Emphasize Brian's media empire and marketing expertise as a key differentiator

- [ ] Update email to `hello@bde.io` in `Layout.tsx` and `Office.tsx`
- [ ] Update X handle to `x.com/briandevans` in `Layout.tsx` and `Office.tsx`
- [ ] Update LinkedIn URL to `https://www.linkedin.com/in/briandevansla/` in `Layout.tsx` and `Office.tsx`

- [ ] Update "Request Access" to "Request Intro" in `Layout.tsx`
- [ ] Link "Request Intro" buttons to `/office#contact` in `Layout.tsx` and `Home.tsx`
- [ ] Add `id="contact"` to the contact form section in `Office.tsx`

- [ ] Implement `mailto` functionality in `Office.tsx` contact form
- [ ] Add state management for form fields (Name, Email, Message)
- [ ] Construct `mailto` link with subject and body from form data

- [ ] Ensure "Global Presence" is explicitly mentioned in `Home.tsx` or `Office.tsx`

- [ ] Update email icon button in `Office.tsx` to link to `#contact`
- [ ] Update email link in `Layout.tsx` footer to link to `/office#contact`

- [ ] Find/Generate white logos for Forbes, Inc., Entrepreneur, CoinDesk
- [ ] Add "As Featured In" section below hero buttons in `Home.tsx`

- [ ] Move "As Featured In" logos to a dedicated full-width bar below the hero section in `Home.tsx`
- [ ] Remove the "Strategy / Narrative / Ecosystem" text row to reduce clutter

- [ ] Restore "Strategy / Narrative / Ecosystem" bar below hero in `Home.tsx`
- [ ] Move "As Featured In" logos to the "Areas of Focus" section in `Home.tsx`

- [ ] Replace CoinDesk logo with the correct version (without "Data")
- [ ] Standardize logo heights in `Home.tsx` to ensure visual consistency

- [ ] Add "40 Under 40 honoree" to the Accolades section

- [ ] Replace CoinDesk logo with a version definitely NOT containing "Data"
- [ ] Verify and adjust logo sizing to ensure visual vertical height consistency (accounting for whitespace)

- [ ] Fix CoinDesk logo visibility (currently showing as a white box) by using a transparent PNG or adjusting CSS filters

- [ ] Adjust Forbes and Entrepreneur logo heights to visually match others (likely increasing them)
- [ ] Improve mobile responsiveness and alignment of the "As Featured In" logo section

- [ ] Search for and identify any remaining instances of "Family Office" in the codebase
- [ ] Propose and implement alternative terminology (e.g., "Private Investment Firm", "Strategic Capital") if found

- [ ] Source and implement "business-like" city background options (similar to Newman Group)
- [ ] Apply the best city background to the Home page with appropriate overlays for text readability

- [ ] Verify existence and path of `bg-city-metropolis.jpg`
- [ ] Debug CSS layering and opacity in `Home.tsx` to ensure background visibility

- [ ] Research premium synonyms for "investment vehicle" used by high-profile founders
- [ ] Propose a list of alternative terms that convey "family office" prestige without using the phrase

- [ ] Update terminology to "Strategic Investment and Advisory Firm" in `Home.tsx` and `Office.tsx`

- [ ] Update page title to "BDE Ventures | Strategic Investment & Advisory Firm" (30-60 chars)
- [ ] Add meta description (50-160 chars) to `index.html`
- [ ] Add meta keywords to `index.html`
- [ ] Implement `document.title` update in `Home.tsx` for dynamic title setting
