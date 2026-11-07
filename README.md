# Oli Pratt — engineering portfolio website

A responsive, self-contained static portfolio based on the supplied business card and Oli’s two-page Engineering Portfolio, incorporated on 7 November 2026. No installation or build step is required. Open `dist/index.html` directly, or serve the `dist` folder with a static web server.

## Preview

From this folder, run `node preview.mjs` and open http://127.0.0.1:4173/. The server only accepts local connections. Stop it with Ctrl+C.

## Publish

The site is published with GitHub Pages at https://www.oliverpratt.co.uk/ from https://github.com/Apsp31/oliverpratt.co.uk. The local Git checkout is `work/github-profile-photo` under the task workspace. Keep `CNAME` and `.nojekyll` when updating the repository. `dist/` is the matching local website copy; no build step is needed.

## Portfolio content

- Four project summaries and detail dialogs: Brands Hatch driver comparison (MoTeC i2 Pro), component modelling (SolidWorks, 84% overall and full marks for model accuracy), numerical programming (MATLAB, 94%) and gas-powered model car manufacture.
- Practical work: Radical SR1 measurements with fellow students, engine measurement, wind-tunnel and dynamometer sessions; TunerStudio ECU bench work and Cosworth Toolset logger/CAN configuration. The Formula Student dashboard test is explicitly credited to the lecturer.
- Education, training and other experience from the supplied PDF. Completed CSWA exam preparation is distinguished from the planned January 2027 exam; Simulink Onramp remains in progress.
- The target placement is the 2027–28 industrial year.
- The original PDF is preserved unchanged at `dist/assets/oli-pratt-engineering-portfolio.pdf`, with download links in the portfolio, background and project dialogs.

## Content still to add

- Project photographs, CAD exports and plots when Oli supplies them. The project panels currently use text highlights rather than invented project imagery or results.
- A current CV PDF. The CV request link remains until it is supplied.
- More precise placement availability and location preferences, once confirmed.

## Editing

Page text and links are in `dist/index.html`; appearance is in `dist/styles.css`; navigation and project dialogs are in `dist/app.js`. The contact download is `dist/assets/oli-pratt.vcf`. No third-party fonts, scripts, analytics, cookies or external image dependencies are used. Contact links open the visitor’s email/phone applications. LinkedIn opens in a new tab. The hero circuit is a decorative SVG, not a representation of Oli’s project data. The larger name, diagram labels and first-lap caption are retained.

The name, university, degree, Year 2, placement objective, email, phone and LinkedIn address come from the business card. Review the year and availability before public release, as these will change over time.

## Profile photograph

The supplied cockpit photograph is stored unchanged at `dist/assets/oli-pratt-cockpit.jpg`. The `.profile-photo` styles frame it around Oli’s face while retaining the racing seat, steering wheel and roll cage. Desktop and mobile use separate frame proportions; no generative edits or retouching are applied.
