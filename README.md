# Assignment 5: Audit a Website for Accessibility

(**NOTE:** View a rendered version of this file in VS Code with `ctrl-shift-v` or `cmd-shift-v`)

&nbsp;
## Background

In this assignment, you will learn about auditing websites for accessibility issues. You will first audit an existing website for accessibility issues using accessibility tools and then fix the website so that it is accessible.

&nbsp;
## Setup

1. Create a git repository titled `m5-hw5-lastname-firstname` and clone the repo to your computer. 
1. Copy the contents of the `unsolved` folder (NOT including the folder itself) into the root folder of your repository.

&nbsp;
## Instructions

1. Using an accessibility tool of your choice (or multiple), audit the website as it exists for issues.
1. Fix the accessibility issues, continuing to audit to ensure that no issues exist. Annotate the fixes for your audits in the README file in the repository. ([See Site Audit](#site-audit))
    1. You must preserve the content of the site as you fix issues.
    1. You may adjust colors as necessary to add contrast.
    1. You may change or add HTML tags to fix structural and/or semantic issues, but be sure you do not break any CSS selectors in `style.css` when you do so.
1. Deploy the finished site to GitHub pages.

&nbsp;
## Deployment

Your code must be deployed to GitHub Pages. To deploy a repository to GitHub pages you must:

1. Ensure your repository has an `index.html` file in the root directory.
1. Navigate to the `settings` section of the repository.
1. Click on `pages` in the left navigation menu.
1. Under `source` click the dropdown and select your `master` or `main` branch.
1. Click `save`.

Your site should be deployed to `<your github username>.github.io/<your repository name>` in 5-10 minutes.

&nbsp;
## Submission

Please submit both a link to your repository and a link to the live site. Also please include any comments on stumbling blocks or difficulties encountered while completing the assignment.

Website URL: https://fell67.github.io/m5-hw5-abreu-victoria/

&nbsp;
## Site Audit
### Issues found with Eslint Plugins

- Property 'backdrop-filter' is not a widely available baseline feature (css/use-baseline)
- Invalid value '0 1px solid rgba(255,255,255,0.77)' for property 'border'. Expected line-width || line-style || color (css/no-invalid-properties)
- Property 'resize' is not a widely available baseline feature (css/use-baseline)
- Use fallback fonts and a generic font last (css/font-family-fallbacks)
- Property 'outline' is not a widely available baseline feature (css/use-baseline)

### Issues Found with Lighthouse
#### Background and foreground colors do not have a sufficient contrast ratio
Elements affected:
- \<a href="#">Home\</a>
- \<a href="#">Portfolio\</a>
- \<a href="#">Contact\</a>
- \<h3>Reach out for a quote today!\</h3>
- \<div class="footer"> \<span class="icon">📞\</span> Call me anytime! \</div>

Fix:
- Updated \<nav> to be gray
- Updated the following elements to be black
    - \<a href="#">Home\</a>
    - \<a href="#">Portfolio\</a>
    - \<a href="#">Contact\</a>
- Updated \<h3>Reach out for a quote today!\</h3> to be black
- Updated \<div class="footer"> \<span class="icon">📞\</span> Call me anytime! \</div> to have a gray background and black text
commit: 88891ac82724f349ac428659f6794253e10b2780


#### Heading elements are not in a sequentially-descending order
Elements affected:
- \<h3>About Me\</h3>

Fix:
- Changed \<h3>About Me\</h3> to \<h2>About Me\</h2> and updated associated CSS style
commit: e84b8fe92361c8360c34f02cf9b4c34788a93852

#### Interactive elements indicate their purpose and state, The page has a logical tab order, Custom controls have ARIA roles, and Interactive controls are keyboard focusable
Elements affected:
- \<div class="submit-btn">Send Message\</div>

Fix:
- Changed \<div class="submit-btn">Send Message\</div> to \<button class="submit-btn">Send Message\</button>
- Updated the css class "submit-btn" so that it appears as it did before
commit: 1fa3ae0ed9027e94485943cc2ff3f7bca4484673

#### HTML5 landmark elements are used to improve navigation
Elements affected: 
- \<div class="nav">
- \<div class="hero">
- \<div class="content">
- \<div class="form-section">
- \<div class="footer">

Fix:
- Changed \<div class="nav"> to <nav class="nav">
- Placed \<div class="nav"> and \<div class="hero"> into a header
- Changed \<div class="content"> to \<main class="content">
- Changed \<div class="form-section"> to \<aside class="form-section">
- Changed \<div class="footer"> to \<footer class="footer">
- Removed the classes from the following and updated the css file to make it clearer
    - \<nav class="nav">
    - \<main class="content">
    - \<footer class="footer">
commit: 231cb03f08f8c72be205d3263ca7146b09f5f74f (This has other changes as well so its not the cleanest commit)

### Issues found with [Wave](https://wave.webaim.org/)
#### Missing form label
Elements affected:
- \<input type="text" placeholder="Your Name"/>
- \<input type="email" placeholder="Your Email"/>
- \<textarea rows="10" placeholder="Your Message">\</textarea\>

Fix:
- Changed \<input type="text" placeholder="Your Name"/> to <input type="text" placeholder="Your Name" title="Your Name" aria-labelledby="Your Name"/>
- Changed \<input type="email" placeholder="Your Email"/> to <input type="email" placeholder="Your Email" title="Your Email" aria-labelledby="Your Email"/>
- Changed \<textarea rows="10" placeholder="Your Message">\</textarea\> to <textarea rows="10" placeholder="Your Message" title="Your Message" aria-labelledby="Your Message"></textarea>

#### Contrast Errors
Elements affected
- \<a href="#">Home\</a> (Note: [Found with Lighthouse](#background-and-foreground-colors-do-not-have-a-sufficient-contrast-ratio))
- \<a href="#">Portfolio\</a> (Note: [Found with Lighthouse](#background-and-foreground-colors-do-not-have-a-sufficient-contrast-ratio))
- \<a href="#">Contact\</a> (Note: [Found with Lighthouse](#background-and-foreground-colors-do-not-have-a-sufficient-contrast-ratio))
- \<h1>Internet Andrea</h1>
- \<h3>About Me</h3>
- All the paragraphs in the about me section
- \<h3>Reach out for a quote today!\</h3> (Note: [Found with Lighthouse](#background-and-foreground-colors-do-not-have-a-sufficient-contrast-ratio))
- \<div class="footer"> \<span class="icon">📞\</span> Call me anytime! \</div> (Note: [Found with Lighthouse](#background-and-foreground-colors-do-not-have-a-sufficient-contrast-ratio))

Fix:
- To see fixes for the problems that were identified with Lighthouse go to [Background and foreground colors do not have a sufficient contrast ratio](#background-and-foreground-colors-do-not-have-a-sufficient-contrast-ratio)
- Updated \<h1>Internet Andrea</h1> to be black on semi-transparent gray background
- Updated \<h3>About Me</h3> and all the paragraphs in the about me section to have gray text
commit: 88891ac82724f349ac428659f6794253e10b2780

#### No Page regions
For example not using header, nav, main, footer, or aside HTML regions, or banner. This was also [found with Lighthouse](#HTML5-landmark-elements-are-used-to-improve-navigation) go to the section titled "HTML5 landmark elements are used to improve navigation" for more information about what elements were affected and the fix.

#### Skipped heading level
This was also [found with Lighthouse](#heading-elements-are-not-in-a-sequentially-descending-order) go to the section titled "Heading elements are not in a sequentially-descending order" for more information about what elements were affected and the fix.
