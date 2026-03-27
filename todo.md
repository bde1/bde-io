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

## Image Cropping Updates
- [ ] Crop Brian_Turtleneck.webp to remove the watch and Gemini logo at the bottom.
- [ ] Upload the cropped image to CDN.
- [ ] Update the image URL in Home.tsx and Office.tsx.
- [ ] Adjust the aspect ratio of the image container in Office.tsx to match the new cropped image.
- [ ] Save checkpoint and push to GitHub.

## Dapper Tech Lab Redesign
- [ ] Create a new SVG render based on the "Dapper Tech Lab" aesthetic (sleek, dark mode, precise grid lines, technical monospace fonts, sharp geometric sans-serifs, subtle electric/neon accents).
- [ ] Convert the new SVG to PNG.
- [ ] Send the new render to the user for approval.
- [ ] Implement the approved design in code.

## Refined Dapper Tech Lab Redesign
- [ ] Remove cliché AI tropes (SYS.INIT, 01/02 numbering, latency readouts).
- [ ] Update copy to focus on "Capital with Conviction" and advisory rather than "institutional checks".
- [ ] Add credibility logos to the render.
- [ ] Add founder headshot and mini-bio to the render.
- [ ] Create refined SVG render and convert to PNG.
- [ ] Send the refined render to the user for approval.
- [ ] Implement the approved design in code.

## Premium Dapper Tech Lab Render
- [ ] Add atmospheric glow/radial gradients to simulate depth.
- [ ] Add precision crosshairs at corners of containers.
- [ ] Enhance contrast and texture simulation in the SVG.
- [ ] Convert to PNG and send to user.

## Code Implementation: Dapper Tech Lab
- [ ] Update `index.html` with new Google Fonts (Space Grotesk, JetBrains Mono).
- [ ] Update `index.css` with new color palette, grid background, and animations.
- [ ] Implement new design in `Home.tsx` (Hero, Credibility Logos, Approach, Areas of Focus).
- [ ] Implement new design in `Office.tsx` (Founder Section with crosshairs and glows).
- [ ] Add interactive elements (hover states, parallax grid, entrance animations).

## Remove AI Slop
- [ ] Audit and clean Layout.tsx (remove BDE.SYS, //, etc.)
- [ ] Audit and clean Home.tsx (remove >_, SYS., DIR., ID:BDE_FOUNDER, //, etc.)
- [ ] Audit and clean Office.tsx (remove AI tropes, numbered lists, etc.)
- [ ] Audit and clean Approach.tsx (remove AI tropes, numbered lists, etc.)
- [ ] Audit and clean Focus.tsx (remove AI tropes, numbered lists, etc.)
- [ ] Review all copy for generic AI template language

## Parallax Effect
- [ ] Investigate how the grid background is currently implemented (CSS, Tailwind, etc.)
- [ ] Implement a subtle parallax effect on the grid background
- [ ] Test the parallax effect across different pages
- [ ] Save checkpoint and push to GitHub

## Bio Update
- [ ] Append Brian's original bio to the current copy on the Office page
