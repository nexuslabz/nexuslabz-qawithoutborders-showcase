export default {
  cover: {
    title: 'Visual Identity Manual',
    subtitle: 'Logo, Colors, Typography & Usage Guidelines',
    hint: 'Use arrow keys or scroll to navigate →',
  },
  toc: {
    tag: 'Index',
    title: 'Table of Contents',
    items: [
      { title: 'Logo Specifics', desc: 'Primary logo & elements' },
      { title: 'Logo Versions', desc: 'Full color, all white & all black' },
      { title: 'Logo Backgrounds', desc: 'Approved background usage' },
      { title: 'Clear Space & Sizing', desc: 'Spacing rules & minimums' },
      { title: 'Logo Best Practices', desc: "Do's & Don'ts" },
      { title: 'Color Palette', desc: 'HEX, RGB & CMYK specs' },
      { title: 'Typography', desc: 'Typeface, weights & hierarchy' },
    ],
  },
  logoPrimary: {
    tag: '01 — Logo Specifics',
    title: 'Primary Logo',
    desc: 'The QA Without Borders logo consists of a stylized {emblem} (representing global connection and quality) and the {wordmark} (QA Without Borders Mentory). Together they form the primary brand logo.',
    layouts:
      'The logo is available in {count} versions: full color (primary usage), all white, and all black, for different application contexts.',
    emblem: 'Emblem',
    wordmark: 'Wordmark',
    count: '3',
  },
  logoVersions: {
    tag: '02 — Logo Versions',
    title: 'Logo Variants',
    groups: [
      { label: 'Full Color', desc: 'Primary usage on dark backgrounds. Preserves the original brand colors.' },
      { label: 'All White', desc: 'For solid dark backgrounds or when a simpler application is needed.' },
      { label: 'All Black', desc: 'For light backgrounds and monochrome printing.' },
    ],
  },
  logoBackgrounds: {
    tag: '03 — Backgrounds',
    title: 'Approved Backgrounds',
    labels: [
      'Pure Black',
      'Dark Surface',
      'White / Light',
      'Light Grey',
      'Cyan Gradient',
      'Busy / Pattern',
    ],
  },
  logoClearSpace: {
    tag: '04 — Spacing',
    title: 'Clear Space & Minimum Sizes',
    clearSpaceTitle: 'Clear Space',
    clearSpaceDesc:
      'Always maintain a minimum clear space around the logo equal to the height of the {n} in "QA". No other graphic elements, text, or borders should enter this area.',
    minSizesTitle: 'Minimum Sizes',
    minSizesDesc:
      'Below these dimensions the logo loses legibility. For very small applications, use the emblem only.',
    sizes: [
      { label: 'Full Color', value: 'Min width: 140px / 35mm' },
      { label: 'All White', value: 'Min width: 140px / 35mm' },
      { label: 'All Black', value: 'Min width: 140px / 35mm' },
      { label: 'Emblem Only', value: 'Min size: 32px / 8mm' },
    ],
  },
  logoUsage: {
    tag: '05 — Best Practices',
    title: "Do's & Don'ts",
    correctTitle: 'Correct Usage',
    incorrectTitle: 'Incorrect Usage',
    correct: [
      'Use the full color logo on dark backgrounds for maximum impact',
      'Use the all white logo when the background already has vibrant colors',
      'Use the all black logo on light backgrounds and for monochrome printing',
      'Maintain the defined clear space around the logo',
    ],
    incorrect: [
      'Do not stretch, rotate, or distort the logo',
      'Do not change the logo colors',
      'Do not add effects (shadows, outlines, gradients)',
      'Do not place the logo on busy or low-contrast backgrounds',
    ],
  },
  colors: {
    tag: '06 — Colors',
    title: 'Brand Colors',
    items: [
      { name: 'Pure Black', usage: 'Primary background, base for all interfaces' },
      { name: 'Cyan', usage: 'Main highlight, CTAs, links, accents' },
      { name: 'Neon Pink', usage: 'Secondary highlight, badges, visual alerts' },
      { name: 'Neon Purple', usage: 'Tertiary accents, gradients, supporting elements' },
      { name: 'Pure White', usage: 'Titles, body text, icons on dark backgrounds' },
    ],
  },
  typography: {
    tag: '07 — Typography',
    desc: 'Inter is the official typeface of QA Without Borders. It offers excellent readability at all sizes and a modern, clean aesthetic across digital and print.',
    weightsTitle: 'Weights',
    hierarchyTitle: 'Hierarchy',
  },
  cta: {
    desc: 'QA Without Borders Mentory. Transforming QA careers for the global market.',
  },
};
